# Organisation des contenus

Les fichiers de `content/` sont la source de vérité. Ils contiennent uniquement des données JSON, sans `window`, DOM, fonction JavaScript, dépendance ou ajout exécuté après chargement. Les exemples de code et HTML restent des chaînes de texte.

## Trouver un contenu

| Besoin                                        | Fichier                                                          |
| --------------------------------------------- | ---------------------------------------------------------------- |
| Cours Images HTML, exercices, aperçu et guide | `content/modules/web/html-images.json`                           |
| Dimensions des images et ses démonstrations   | `content/modules/web/css-dimensions-images.json`                 |
| Cours Python                                  | `content/modules/python/<identifiant>.json`                      |
| Cours Scratch ou GDevelop                     | `content/modules/jeux-video/<identifiant>.json`                  |
| Cours robotique                               | `content/modules/robotique/<identifiant>.json`                   |
| Ordre et groupes du parcours Web débutant     | `content/pathways/web-debutants.json`                            |
| Domaines et compétences                       | `content/catalog/domains.json`, `content/catalog/skills.json`    |
| Types de modules et réglages du site          | `content/catalog/module-types.json`, `content/catalog/site.json` |
| Anciennes adresses de navigation              | `content/catalog/aliases.json`                                   |
| Liens de départ et démonstrations Scratch     | `content/resources/scratch-projects.json`                        |
| Données du conducteur historique              | `content/teacher/historical-conductor.json`                      |
| Identifiants, fichiers et ordre de chargement | `content/manifest.json`                                          |

Un module partagé existe une seule fois. Les parcours, reprises et ressources partagées le référencent par son identifiant. Les fichiers JSON suivent une indentation de deux espaces, UTF-8, avec une fin de ligne finale.

## Modifier un module

Modifier directement son fichier JSON. Ses textes élève sont dans `blocks`, ses démonstrations dans `blocks[].demonstration`, et son guide dans `teacherGuide`. Les démonstrations ne sont plus ajoutées ailleurs à la fin d’un gros fichier.

Une version de comparateur contient notamment `label`, `html`, `code`, `feedback` et éventuellement `css`. `html` est exécuté dans l’aperçu isolé ; `code` est affiché comme texte. Leur différence doit rester limitée aux adaptations nécessaires aux ressources du site. Vérifier que le résultat correspond au code et à l’explication. Les règles de [textes élèves](regles-editoriales.md) restent applicables à tous les domaines.

Les mécanismes d’affichage restent dans `src/student/`, `pedagogy.js` et `styles/`. `app.js` assemble les modules ; voir [la carte du projet](carte-projet.md). Corriger les fichiers de contenu pour changer le cours ; corriger le renderer commun pour changer son affichage. Les fichiers d’image restent dans `assets/` et `images/` ; leurs chemins sont relatifs à la racine du site, même si le catalogue JavaScript est chargé depuis `generated/`.

## Générer et vérifier

À la racine du dépôt, avec Node 22.13 ou ultérieur, installer les outils avec `npm ci`, puis :

```bash
node scripts/build-catalog.cjs
node scripts/build-catalog.cjs --check
node --test tests/*.test.cjs
```

La première commande valide les sources et produit `generated/catalog.js`. La seconde vérifie que la sortie correspond exactement aux sources, sans la modifier. Les tests vérifient aussi cette synchronisation. `npm test` lance la vérification puis les tests ; les dépendances de développement sont verrouillées par `package-lock.json`.

Le script ne dépend pas du dossier courant : il résout les chemins depuis sa propre position. La génération est déterministe, sans horodatage. Le navigateur reçoit toujours `window.CODECRAFT_DATA`, avec le schéma et l’ordre précédents ; le site n’a donc besoin ni de chargement asynchrone supplémentaire ni de nouveau serveur.

La sortie est versionnée pour que GitHub Pages puisse servir directement le dépôt. Pour livrer une modification de contenu, inclure les fichiers sources et la sortie régénérée. Ne jamais modifier `generated/catalog.js` à la main. Si la sortie est manquante ou obsolète, `--check` et les tests échouent.

Les validations détectent les identifiants dupliqués, les fichiers JSON non inscrits, les chemins sortant de `content/`, les modules rangés dans le mauvais domaine, les compétences inconnues et les références cassées de parcours, activité, tâche, ressource et alias. Les tests pédagogiques existants complètent ces contrôles. Les schémas de `schemas/` valident les champs, les types et les variantes de démonstration, avant les références entre contenus. Les illustrations, étapes d’action, schémas Python, scripts Scratch imbriqués et guides professeur ont des structures explicites qui rejettent les champs inconnus. Les domaines, compétences, projets Scratch et conducteur historique ont chacun un schéma dédié. Les associations de `.vscode/settings.json` donnent la même structure à l’éditeur sans modifier les données. Les références des schémas sont locales et fonctionnent hors ligne. Les schémas reposent sur [JSON Schema 2020-12](https://json-schema.org/draft/2020-12) et la [validation Ajv](https://ajv.js.org/json-schema).

La génération ne valide pas à elle seule la justesse d’un cours ou l’apparence d’un aperçu ; le test navigateur `node tests/catalog-browser.cjs` vérifie les routes et les images.

## Schémas Scratch

Dans `visualScript`, une pièce `{ "value": "200" }` représente une valeur à saisir. Un bloc à glisser utilise `{ "reporter": "abscisse x", "category": "motion" }`, ou par exemple `{ "reporter": "score", "category": "variables" }`. La catégorie est explicite : le rendu ne la déduit jamais du texte. Les catégories de ces blocs sont `motion`, `variables`, `sensing` et `operators`. Les menus restent des pièces `choice` et les conditions des pièces `condition`.

Les légendes ne sont affichées que si le bloc fournit une `explanation`. Dans une leçon avec `visualScript` et `shortSteps`, les étapes sont visibles et les `paragraphs` sont repliés : garder toute manipulation nécessaire dans les étapes. Une explication de fonctionnement plus détaillée peut rester dans les paragraphes.

Une leçon peut fournir `activityLink` avec `moduleId`, `blockId` et `label` pour renvoyer directement à une autre section. Le catalogue valide la cible ; le lien conserve le parcours quand le module appartient à celui-ci.

## Ajouter un module ou un parcours

Créer un fichier `content/modules/<domaine>/<identifiant>.json` sur le modèle d’un module voisin. Ajouter son couple `id` / `file` dans `modules` du manifeste. Référencer cet identifiant dans les `moduleIds` du parcours concerné. Conserver les identifiants existants : ils servent aux liens, aux références pédagogiques et aux espaces professeur.

Pour un parcours, créer `content/pathways/<identifiant>.json`, l’inscrire dans `pathways` du manifeste et dans les `pathwayIds` de son domaine. Les registres du manifeste conservent l’ordre de chargement ; les listes `moduleIds` définissent l’ordre pédagogique.

Générer, lancer les tests et contrôler la page concernée. Un fichier JSON oublié dans le manifeste provoque une erreur explicite plutôt que de disparaître silencieusement du catalogue.

## Reprise dans Next.js

Les modules JSON peuvent être importés directement depuis leur fichier, sans navigateur et sans utiliser le catalogue global généré. Un loader côté serveur pourra sélectionner les modules nécessaires à une route ; les composants React se chargeront de l’affichage et des interactions. Le script actuel d’assemblage utilise Node et Ajv pour valider les schémas JSON et reste réservé à la génération du site statique.

Cette séparation des données et de l’interface est compatible avec les stratégies d’organisation documentées par [Next.js](https://nextjs.org/docs/app/getting-started/project-structure). Les fichiers du contenu ne devront pas être placés dans `public/` pour être importés côté serveur. Le dossier `generated/` est un adaptateur pour le site actuel, pas une dépendance des contenus.

## Découpage du 11 octobre 2026

Extraction des 72 modules et 7 parcours, après exécution de l’ancien catalogue pour intégrer les démonstrations ajoutées en fin de fichier. Comparaison stricte de toutes les données avant/après, y compris les textes, exemples de code, identifiants et ordres. `schemaVersion` reste à 1. L’archive `prof-conducteur-historique.html` reste autonome et inchangée.

Les documents de lots plus anciens mentionnent encore `lesson-data.js` dans leurs historiques. Le remplacement courant est `content/` pour l’édition et `generated/catalog.js` pour le navigateur.
