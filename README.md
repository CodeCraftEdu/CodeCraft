# CodeCraft

Mini-site pédagogique statique, sans framework, dépendance, backend ni étape de build.

## Prévisualisation

Ouvrir `index.html` directement dans un navigateur, ou lancer un serveur statique local à la racine du dossier :

```bash
python -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

Le conducteur de séance est disponible sur `prof.html`.

## Bibliothèque permanente

Le catalogue se trouve dans `lesson-data.js` :

- `domains` décrit les domaines et leurs parcours ; avec un seul domaine, l'accueil affiche directement ses parcours et diagnostics.
- `skills` définit les compétences internes, sans référentiel externe.
- `modules` contient chaque contenu une seule fois, avec un identifiant stable, un `domainId`, un `type`, des `skillIds` et des `blocks`.
- `pathways` contient les listes ordonnées `moduleIds` : plusieurs parcours peuvent référencer le même module.
- `moduleTypes` déclare `lesson`, `practice`, `challenge`, `project` et `diagnostic`.
- `teacher` conserve le conducteur actuel utilisé par `prof.html`.

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

`prof.html` et son conducteur restent disponibles directement, sans lien depuis la navigation élève. Cette page est publique. Aucun suivi individuel, import/export ou stockage de données personnelles n'est implémenté à cette étape.

## GitHub Pages

Dans le dépôt GitHub, ouvrir **Settings → Pages**, choisir **Deploy from a branch**, puis sélectionner la branche principale et le dossier **/(root)**. Enregistrer et attendre la publication de l'URL.
