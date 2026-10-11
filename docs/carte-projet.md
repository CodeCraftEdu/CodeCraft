# Carte du projet

CodeCraft est un site statique. Les contenus JSON, le rendu navigateur et les outils Node ont des responsabilités distinctes. Commencer par cette carte, puis lire le document du domaine concerné dans [l’index](README.md).

| Modification | Source à ouvrir |
| --- | --- |
| Texte, exercice, démonstration ou guide | `content/modules/<domaine>/<id>.json` |
| Ordre des cours et étapes | `content/pathways/<id>.json` |
| Règles de texte élève | `docs/regles-editoriales.md` |
| Format des données | `schemas/content.schema.json` et `docs/organisation-contenus.md` |
| Branchement de l’application élève | `app.js` |
| Texte en ligne et création des éléments | `src/student/text.mjs` |
| Coloration et panneaux de code | `src/student/code.mjs` |
| Aperçus HTML/CSS et schémas Scratch/Python | `src/student/demonstrations.mjs` |
| Affichage des blocs et des activités | `src/student/blocks.mjs` |
| Construction des adresses | `src/student/routes.mjs` |
| Navigation, pages et sommaire | `src/student/router.mjs` |
| Ressources et panneaux pédagogiques partagés | `pedagogy.js` |
| Guides professeur | `teacher-guides.js` |
| Données privées, fichiers et séances | `teacher-model.js`, `teacher-file-access.js`, `teacher-sessions.js`, `teacher-classroom.js` |
| Interface professeur | `teacher-app.js` |
| Variables et règles du document | `styles/base/` |
| Bibliothèque, cours, exercices et espace professeur | `styles/components/` |
| Aspect élève low-poly | `styles/themes/lowpoly/` |
| Assemblage des contenus | `scripts/build-catalog.cjs`, `scripts/catalog/` |
| Vérifications | `tests/`, [recette navigateur](verification-developpement.md) |

## Rendu et dépendances

`app.js` importe des modules ES natifs et assemble leurs fonctions. Les factories reçoivent leurs dépendances explicitement ; les blocs ne dépendent pas du routeur. Les URL sont partagées entre les blocs et la navigation. Le routeur possède le nettoyage des démonstrations lors d’un changement de page. Les hooks `CodeCraftInlineText`, `CodeCraftHighlightCode` et `CodeCraftCreateCode` assurent la compatibilité avec les panneaux pédagogiques existants.

Servir le dépôt par HTTP pour charger les imports. Aucun bundler ni framework n’est nécessaire. Ajv sert uniquement aux outils de validation Node ; il n’est pas envoyé au navigateur. `package-lock.json` verrouille les dépendances et `npm ci` les installe.

## Styles

Les quatre fichiers CSS de la racine sont des points d’entrée contenant des imports. Modifier les fichiers de `styles/`. Les imports conservent l’ordre précédent : base et composants communs, composants pédagogiques, puis thème élève. L’espace professeur charge ses propres composants et ne charge pas le thème élève. Les styles internes aux aperçus restent isolés dans leurs iframes.

Le découpage conserve la cascade existante. Il n’introduit pas de couches CSS `@layer`, qui changeraient la priorité des règles. Pour une correction, chercher le sélecteur et modifier sa règle dans le composant ou le thème concerné avant d’ajouter un nouvel override.

## Reprise dans Next.js

Les fichiers JSON constituent la partie réutilisable du contenu. Les factories DOM décrivent le rendu actuel ; une migration React remplacera ce rendu par des composants. La validation des contenus et leurs identifiants resteront utilisables. `generated/catalog.js` est l’adaptateur du site statique actuel.
