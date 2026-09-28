# CodeCraft

Mini-site pédagogique statique, sans framework, dépendance, backend ni étape de build.

## Prévisualisation

Ouvrir `index.html` directement dans un navigateur, ou lancer un serveur statique local à la racine du dossier :

```bash
python -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

L’espace professeur est disponible sur `prof.html`. Le conducteur initial reste consultable dans `prof-conducteur-historique.html`.

## Bibliothèque permanente

Le catalogue se trouve dans `lesson-data.js` :

- `domains` décrit les domaines et leurs parcours ; avec un seul domaine, l'accueil affiche directement ses parcours et diagnostics.
- `skills` définit les compétences internes, sans référentiel externe.
- `modules` contient chaque contenu une seule fois, avec un identifiant stable, un `domainId`, un `type`, des `skillIds` et des `blocks`.
- `pathways` contient les listes ordonnées `moduleIds` : plusieurs parcours peuvent référencer le même module.
- `moduleTypes` déclare `lesson`, `practice`, `challenge`, `project` et `diagnostic`.
- `teacher` conserve les anciennes données du conducteur ; l’archive professeur en contient une copie autonome figée.

Les modules actuels sont : Titres et paragraphes, Listes HTML, Mini-page des fondations, Liens HTML, Révision HTML, Images HTML, Mini-page HTML complète, Préparer un projet de cartes, Parent et enfants, Flexbox et Diagnostic Web. Les cours CSS non rédigés ne sont pas créés automatiquement à partir des compétences.

Les blocs conservent leurs types `lesson`, `tasks`, `checklist`, `callout` et `details`. Révision HTML possède ses propres exercices de révision, indépendants des blocs des autres modules. Le rendu prend encore en charge le type `reference` (`moduleId`, `blockId`), mais aucun module actuel ne l’utilise. Conserver des identifiants de tâches uniques dans chaque module.

Pour ajouter un contenu, ajouter un module au catalogue et référencer son identifiant dans le parcours voulu. Pour un diagnostic, utiliser `diagnosticModuleIds` du domaine. Ne pas renommer les identifiants existants : ils servent aux liens partagés. Aucun changement de séance hebdomadaire n'est nécessaire. L'ajout de nouveaux contenus nécessite toujours une publication des fichiers statiques.

## Liens et navigation

- `#parcours/web-debutants` : liste des modules du parcours.
- `#module/html-images` : accès direct au module, indépendant d'un parcours.
- `#module/html-images?parcours=web-debutants` : même contenu, avec précédent/suivant et couleur du parcours.
- `#domaine/web` : accès explicite au domaine ; le choix des domaines apparaît à l'accueil lorsqu'il y en a plusieurs.

Les anciens hash `#fondations`, `#debutants`, `#avances` et `#rattrapage` restent des alias. Rattrapage ouvre Diagnostic Web, séparé des parcours. Un contexte de parcours incompatible est ignoré ; le module reste accessible sans précédent/suivant arbitraire.

## Cases temporaires

Les cases servent uniquement de repères pendant que la page reste ouverte. Leur état est conservé en mémoire pendant la navigation, y compris lorsqu'un exercice est partagé entre deux parcours. Un rechargement les réinitialise. Le site élève n'utilise ni `localStorage` ni `sessionStorage` et ne lit ni ne supprime les anciennes clés de séance. Il ne s'agit pas d'un suivi des acquis.

## Professeur

`prof.html` est une page publique, accessible directement sans lien depuis la navigation élève. Cette première étape propose uniquement les fondations de l’espace privé : créer/ouvrir un fichier, le valider, modifier un libellé technique et sauvegarder. Aucun écran de classes, élèves, progression, référentiels ou séances n’est implémenté.

### Fichier privé et navigateur

Utiliser Chrome ou Edge sur ordinateur, via GitHub Pages en HTTPS ou `http://localhost:8000/prof.html` pour les tests locaux. L’accès direct au fichier repose sur la File System Access API, sans compte CodeCraft, serveur de données ni API Google Drive.

1. Cliquer sur **Créer un Espace CodeCraft**, puis choisir `espace-codecraft.json` dans un dossier Google Drive synchronisé disponible sur l’ordinateur, **en dehors de ce dépôt**. Un fichier non vide ne sera pas écrasé par cette action.
2. Pour un fichier existant, utiliser **Ouvrir un Espace CodeCraft** et accorder la permission de lecture/écriture. Le JSON est validé avant de remplacer l’espace en mémoire. Une ouverture seule ne réécrit pas le fichier.
3. Modifier le **Libellé de test de l’espace** : l’état devient « Modifications non enregistrées ». Après 600 ms sans saisie, l’écriture démarre. Le bouton **Enregistrer / réessayer** permet de la demander immédiatement ou de redemander une permission.
4. Attendre **Enregistré dans le fichier local** : cet état exige la fermeture réussie du flux d’écriture, sa relecture et l’absence d’une modification plus récente en attente. Il ne confirme pas la synchronisation Google Drive ; vérifier celle-ci dans l’application Drive avant de changer de poste.

Seul le handle du fichier est éventuellement mémorisé dans IndexedDB. Aucune donnée pédagogique n’est stockée dans localStorage, IndexedDB ou un cache applicatif. Au retour, **Rouvrir le dernier fichier** relit le fichier après vérification des permissions. La suppression des données du navigateur fait seulement perdre cet accès mémorisé : sélectionner de nouveau le JSON avec **Ouvrir**. Un autre navigateur, profil ou port localhost ne partage pas forcément le handle.

Les modifications non sauvegardées restent uniquement dans la mémoire de l’onglet et peuvent être perdues si celui-ci est fermé ou si le navigateur s’arrête. Un avertissement de fermeture est demandé, sans garantie qu’il soit affiché dans toutes les situations.

### Erreurs, conflits et copie de secours

- JSON invalide, champs inconnus ou version de schéma inconnue : refus d’ouverture, aucun remplacement automatique et aucune migration destructive.
- Permission refusée, fichier indisponible ou erreur d’écriture : message explicite ; les modifications restent en mémoire. Réessayer ou télécharger une copie avant de quitter.
- Modification externe détectée avant une écriture : refus d’écraser. Télécharger les changements en mémoire, puis **Relire le fichier** ; aucune fusion automatique.
- **Télécharger une copie de secours** génère un JSON privé complet depuis la mémoire, y compris les dernières saisies. Cela ne change pas l’état du fichier principal ni sa révision. Le navigateur gère le téléchargement : vérifier le fichier obtenu et le ranger dans un dossier privé. La copie peut être rouverte avec **Ouvrir**.

Utiliser **un seul onglet et un seul ordinateur à la fois**. La comparaison du contenu avant écriture détecte les conflits déjà visibles ; elle n’est pas un verrou distribué et ne peut pas empêcher toutes les courses avec un autre processus ou Google Drive. La synchronisation cloud reste extérieure à CodeCraft.

Les référentiels externes, leurs versions, objectifs et mappings sont privés et réservés dans le JSON. Aucun référentiel d’organisme n’est fourni dans le dépôt. La page utilise `textContent` pour les textes du fichier et n’envoie pas le JSON sur le réseau. Ce fichier n’est pas chiffré par CodeCraft : protéger son dossier et ses partages Drive. Les noms `espace-codecraft*.json` sont ignorés par Git, mais cela ne protège pas un fichier privé renommé ou ajouté de force.

### Code et format

- `teacher-model.js` : schéma V1 déclaratif, validation, création et sérialisation ; indépendant du navigateur.
- `teacher-file-access.js` : adaptateur Chromium, permission, flux de fichier, handle IndexedDB et téléchargement.
- `teacher-app.js` : interface, copie de travail en mémoire et sauvegardes séquencées.
- `teacher.css` : styles professeur isolés ; aucune modification du style élève.
- `teacher-workspace-format.md` : contrat du fichier privé et structures réservées aux étapes suivantes.
- `prof-conducteur-historique.html` : conducteur initial intégral, avec ses données et styles embarqués ; indépendant du catalogue actuel.

Tests sans dépendance supplémentaire (Node.js nécessaire pour les tests uniquement) :

```bash
node --test tests/teacher.test.cjs
```

Les tests utilisent des documents fictifs et des fichiers simulés en mémoire, sans accéder au Google Drive de l’utilisateur.

Test d’intégration supplémentaire, avec Chrome installé (Windows par défaut, ou chemin de l’exécutable dans `CHROME_PATH`) :

```bash
node tests/teacher-browser.cjs
```

Ce test démarre un serveur local temporaire et un profil Chrome headless isolé. Il utilise de vrais flux de fichiers OPFS (stockage privé du navigateur), IndexedDB et un téléchargement réel, mais simule les sélecteurs de fichiers. Ses captures et son fichier fictif sont placés dans un dossier temporaire affiché à la fin ; aucun fichier personnel n’est sélectionné. Les sélecteurs natifs, les permissions Windows et la synchronisation Drive doivent toujours être vérifiés manuellement dans Chrome/Edge.

## GitHub Pages

Dans le dépôt GitHub, ouvrir **Settings → Pages**, choisir **Deploy from a branch**, puis sélectionner la branche principale et le dossier **/(root)**. Enregistrer et attendre la publication de l'URL.
