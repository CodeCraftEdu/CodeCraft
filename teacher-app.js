(function () {
  'use strict';
  const model = window.CodeCraftTeacherModel;
  const files = window.CodeCraftTeacherFiles.createFileAccess();
  const byId = id => document.getElementById(id);
  const ui = Object.fromEntries([
    'create-space', 'open-space', 'reopen-space', 'save-space', 'reload-space',
    'download-space', 'workspace-label', 'save-state', 'file-details',
    'operation-error', 'storage-notice', 'validation-warnings', 'compatibility'
  ].map(id => [id, byId(id)]));
  let current = null;
  let connection = null;
  let lastSaved = null;
  let remembered = null;
  let generation = 0;
  let savedGeneration = 0;
  let busy = false;
  let writing = false;
  let failure = false;
  let timer;
  let selected = false;
  const dirty = () => current && generation !== savedGeneration;
  function message(id, text) {
    ui[id].textContent = text;
    ui[id].hidden = !text;
  }
  function render() {
    let state = 'Aucun Espace CodeCraft ouvert';
    if (current) {
      state = writing ? 'Enregistrement…' : failure ? 'Erreur de sauvegarde' :
        dirty() ? 'Modifications non enregistrées' : 'Enregistré dans le fichier local';
    }
    ui['save-state'].textContent = state;
    ui['save-state'].dataset.state = failure ? 'error' : dirty() ? 'pending' : 'idle';
    ui['file-details'].textContent = connection ?
      connection.name + (lastSaved ? ' · révision enregistrée : ' + lastSaved.revision : ' · aucune écriture confirmée') +
      (dirty() ? ' · changements en mémoire non enregistrés' : ' · dernière écriture : ' + lastSaved.updatedAt) :
      'Aucun fichier sélectionné.';
    for (const id of ['create-space', 'open-space']) ui[id].disabled = !files.supported() || busy || writing;
    ui['reopen-space'].disabled = !files.supported() || !remembered || busy || writing;
    ui['workspace-label'].disabled = !current || busy;
    ui['save-space'].disabled = !current || !dirty() || busy || writing;
    ui['reload-space'].disabled = !connection || busy || writing;
    ui['download-space'].disabled = !current || busy;
  }
  function warnings(items) {
    ui['validation-warnings'].replaceChildren();
    for (const text of items) {
      const item = document.createElement('li');
      item.textContent = text;
      ui['validation-warnings'].append(item);
    }
    ui['validation-warnings'].hidden = items.length === 0;
  }
  async function remember() {
    remembered = connection.handle;
    try {
      await files.remember(remembered);
      message('storage-notice', 'Seul l’accès au fichier est mémorisé dans ce navigateur, pas son contenu.');
    } catch {
      message('storage-notice', 'Le fichier reste utilisable, mais son accès ne peut pas être mémorisé. Sélectionne-le à nouveau à la prochaine ouverture.');
    }
  }
  async function save(manual = false) {
    clearTimeout(timer);
    if (!current || writing || !dirty()) return;
    writing = true;
    failure = false;
    message('operation-error', '');
    render();
    try {
      if (manual) await connection.authorize();
      while (dirty()) {
        const savingGeneration = generation;
        const snapshot = model.prepareSave(current);
        await connection.write(model.serialize(snapshot));
        // Ne remplace pas le libellé : l’utilisateur peut avoir continué à saisir pendant l’écriture.
        current.revision = snapshot.revision;
        current.updatedAt = snapshot.updatedAt;
        lastSaved = { revision: snapshot.revision, updatedAt: snapshot.updatedAt };
        savedGeneration = savingGeneration;
      }
      await remember();
    } catch (error) {
      failure = true;
      message('operation-error', 'Sauvegarde non confirmée. ' + error.message + ' Les changements restent seulement en mémoire ; télécharge une copie de secours avant de quitter.');
    } finally {
      writing = false;
      render();
      // Une saisie peut arriver pendant la mémorisation facultative du handle.
      schedule();
    }
  }
  function schedule() {
    clearTimeout(timer);
    if (dirty() && !failure && !busy && !writing) timer = setTimeout(() => save(), 600);
  }
  async function select(kind) {
    if (busy || writing) return;
    if (dirty() && !window.confirm('Des modifications ne sont pas enregistrées. Télécharge une copie de secours si nécessaire. Continuer abandonnera ces modifications uniquement si un autre document est chargé.')) return;
    selected = true;
    clearTimeout(timer);
    busy = true;
    message('operation-error', '');
    render();
    try {
      // Les sélecteurs et demandes de permission sont lancés depuis l’action utilisateur.
      const next = kind === 'create' ? await files.create() : kind === 'open' ? await files.open() :
        await files.reconnect(kind === 'reload' ? connection.handle : remembered);
      const parsed = kind === 'create' ?
        { document: model.create(crypto.randomUUID()), warnings: [] } :
        model.parse(next.text, window.CODECRAFT_DATA);
      // Aucun remplacement de l’état courant avant validation complète du nouveau document.
      connection = next;
      current = parsed.document;
      generation = kind === 'create' ? 1 : 0;
      savedGeneration = 0;
      lastSaved = kind === 'create' ? null : { revision: current.revision, updatedAt: current.updatedAt };
      failure = false;
      ui['workspace-label'].value = current.metadata.label;
      warnings(parsed.warnings);
      if (kind === 'create') await save();
      else await remember();
    } catch (error) {
      if (error.name !== 'AbortError') message('operation-error', 'Ouverture impossible. ' + error.message);
    } finally {
      busy = false;
      render();
      schedule();
    }
  }
  ui['create-space'].addEventListener('click', () => select('create'));
  ui['open-space'].addEventListener('click', () => select('open'));
  ui['reopen-space'].addEventListener('click', () => select('reopen'));
  ui['reload-space'].addEventListener('click', () => select('reload'));
  ui['save-space'].addEventListener('click', () => save(true));
  ui['workspace-label'].addEventListener('input', () => {
    if (!current) return;
    current.metadata.label = ui['workspace-label'].value;
    generation += 1;
    render();
    schedule();
  });
  ui['download-space'].addEventListener('click', () => {
    try {
      // Une copie de secours n’incrémente pas la révision du fichier principal ni son état de sauvegarde.
      files.download(model.serialize(current));
    } catch (error) { message('operation-error', 'Copie de secours impossible. ' + error.message); }
  });
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    byId('main-content').focus();
  });
  window.addEventListener('beforeunload', event => {
    if (dirty() || writing) { event.preventDefault(); event.returnValue = ''; }
  });
  if (!files.supported()) {
    message('compatibility', 'L’accès direct au fichier nécessite Chrome ou Edge sur ordinateur et une page HTTPS ou localhost. Aucune donnée n’est enregistrée dans ce mode.');
  } else {
    files.recall().then(handle => {
      if (!selected) remembered = handle || null;
      render();
    }).catch(() => message('storage-notice', 'Réouverture mémorisée indisponible : utilise « Ouvrir un Espace CodeCraft ».'));
  }
  render();
})();
