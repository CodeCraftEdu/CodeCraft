/* Adaptateur remplaçable : ne connaît ni élèves, ni compétences, ni schéma métier. */
(function (root) {
  'use strict';
  function createFileAccess(env = globalThis) {
    const types = [{ description: 'Espace CodeCraft JSON', accept: { 'application/json': ['.json'] } }];
    const supported = () => !!(env.isSecureContext && env.showOpenFilePicker && env.showSaveFilePicker);
    async function authorize(handle, requestPermission = true) {
      if (await handle.queryPermission({ mode: 'readwrite' }) === 'granted') return;
      if (!requestPermission) {
        const error = new Error('Une autorisation utilisateur est nécessaire pour accéder au dernier fichier.');
        error.code = 'permission-required';
        throw error;
      }
      if (await handle.requestPermission({ mode: 'readwrite' }) !== 'granted') {
        throw new Error('Permission de lecture/écriture refusée. Autorise le fichier ou ouvre-le à nouveau.');
      }
    }
    async function connect(handle, requestPermission = true) {
      if (!handle || handle.kind !== 'file') throw new Error('Le fichier mémorisé n’est plus disponible. Sélectionne-le à nouveau.');
      await authorize(handle, requestPermission);
      let baseline = await (await handle.getFile()).text();
      let tail = Promise.resolve();
      return {
        handle,
        name: handle.name,
        text: baseline,
        authorize: () => authorize(handle),
        read: async () => (await handle.getFile()).text(),
        write(text) {
          const run = async () => {
            // Une comparaison du contenu, pas seulement de la date, détecte aussi les modifications externes.
            if (await (await handle.getFile()).text() !== baseline) {
              throw new Error('Conflit : le fichier a changé ailleurs. Télécharge une copie de secours, puis relis le fichier. Aucun écrasement effectué.');
            }
            let stream;
            try {
              stream = await handle.createWritable();
              await stream.write(text);
              await stream.close();
            } catch (error) {
              if (stream) { try { await stream.abort(); } catch { /* Flux déjà fermé. */ } }
              throw error;
            }
            const actual = await (await handle.getFile()).text();
            if (actual !== text) throw new Error('Le contenu relu ne correspond pas à la sauvegarde. Garde une copie de secours et relis le fichier.');
            baseline = actual;
          };
          const result = tail.then(run);
          tail = result.catch(() => {});
          return result;
        }
      };
    }
    async function open() {
      const [handle] = await env.showOpenFilePicker({ types, multiple: false, excludeAcceptAllOption: true });
      return connect(handle);
    }
    async function create() {
      const handle = await env.showSaveFilePicker({ suggestedName: 'espace-codecraft.json', types, excludeAcceptAllOption: true });
      const connection = await connect(handle);
      if (connection.text.length) throw new Error('Ce fichier contient déjà des données. Utilise « Ouvrir un Espace CodeCraft » : il n’a pas été remplacé.');
      return connection;
    }
    function handleStore(mode, operation) {
      return new Promise((resolve, reject) => {
        if (!env.indexedDB) { reject(new Error('Mémorisation du fichier indisponible.')); return; }
        const request = env.indexedDB.open('codecraft-teacher-file', 1);
        request.onupgradeneeded = () => request.result.createObjectStore('handles');
        request.onerror = () => reject(request.error);
        request.onblocked = () => reject(new Error('Mémorisation bloquée par un autre onglet.'));
        request.onsuccess = () => {
          const db = request.result;
          try {
            const tx = db.transaction('handles', mode);
            const item = operation(tx.objectStore('handles'));
            tx.oncomplete = () => { const result = item.result; db.close(); resolve(result); };
            tx.onabort = tx.onerror = () => { db.close(); reject(tx.error || new Error('Mémorisation indisponible.')); };
          } catch (error) { db.close(); reject(error); }
        };
      });
    }
    function download(text) {
      const url = env.URL.createObjectURL(new env.Blob([text], { type: 'application/json' }));
      const anchor = env.document.createElement('a');
      anchor.href = url;
      anchor.download = 'espace-codecraft-secours-' + new Date().toISOString().replace(/[:.]/g, '-') + '.json';
      env.document.body.append(anchor);
      anchor.click();
      anchor.remove();
      env.setTimeout(() => env.URL.revokeObjectURL(url), 60000);
    }
    return {
      supported, create, open, reconnect: connect,
      resume: handle => connect(handle, false),
      download,
      recall: () => handleStore('readonly', store => store.get('last')),
      // Le seul contenu IndexedDB est ce handle, jamais le document JSON.
      remember: handle => handleStore('readwrite', store => store.put(handle, 'last'))
    };
  }
  const api = { createFileAccess };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CodeCraftTeacherFiles = api;
})(globalThis);
