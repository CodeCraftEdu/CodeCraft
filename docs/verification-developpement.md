# Vérifier une modification

Installer les outils une fois avec `npm ci`, puis lancer `npm run dev` et ouvrir `http://localhost:8000` pour la prévisualisation.

Le serveur écoute uniquement sur l’interface locale. Il régénère et valide le catalogue au démarrage et après une modification de `content/` ou `schemas/`. Chaque génération utilise un processus neuf pour prendre en compte les nouveaux schémas. Les modifications rapprochées sont regroupées et les générations sont sérialisées. Un JSON invalide affiche un bandeau avec le fichier et l’erreur ; la correction relance la génération puis recharge la page. Les fichiers publics HTML, JavaScript, CSS et images déclenchent également le rechargement. Les fichiers privés, `node_modules/` et les rapports ne sont pas servis. Le script de rechargement n’est injecté que dans les réponses locales, jamais dans les fichiers HTML versionnés. `Ctrl+C` ferme le serveur et la surveillance ; `npm run dev -- --port 8001` permet de choisir un autre port.

Utiliser Node 22.13 ou ultérieur ; les vérifications GitHub utilisent Node 24.

```bash
npm run build:content
npm run format
npm run lint
npm test
npm run test:browser
```

`npm run lint` détecte les erreurs JavaScript, les noms inconnus, les variables inutilisées et les constructions risquées. `npm test` vérifie la synchronisation du catalogue et les tests Node. `npm run test:browser` lance séquentiellement six scénarios Chrome ; la commande s’arrête au premier échec. `npm run check` vérifie le formatage, lance le lint puis les deux ensembles de tests. Chrome est détecté au chemin Windows habituel ; `CHROME_PATH` permet de choisir un autre exécutable Chromium.

## Vérifications GitHub

Le workflow `.github/workflows/checks.yml` exécute `npm ci`, le lint, le contrôle de formatage, les tests de contenu et les tests navigateur sur Windows à chaque push et pull request. Il peut aussi être lancé manuellement depuis l’onglet Actions. Il vérifie le catalogue existant sans le régénérer : une sortie oubliée reste une erreur visible. Les actions sont verrouillées sur leurs commits officiels. La configuration suit les [instructions Node.js de GitHub](https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs).

Le contrôle apparaît sous le nom `Lint, content and browser tests`. L’artefact `browser-screenshots`, conservé sept jours, contient les captures PNG, les index HTML, les rapports d’échec JSON/HTML, les résumés et les journaux de suites. Il est conservé aussi lorsqu’un scénario échoue. Le profil du navigateur et les fichiers fictifs du professeur ne sont pas inclus. `CODECRAFT_BROWSER_ARTIFACTS` permet de choisir le dossier des rapports ; sans cette variable, les scénarios utilisent `browser-artifacts/`.

Le workflow vérifie le code sans le publier. Il démarrera lorsque cette configuration et les fichiers nécessaires seront poussés sur GitHub. Il ne modifie pas les règles de la branche ; rendre le contrôle obligatoire pour fusionner reste un réglage distinct du dépôt.

## Lint JavaScript

La configuration `eslint.config.mjs` applique les [règles recommandées d’ESLint](https://eslint.org/docs/latest/use/configure/configuration-files), avec les environnements navigateur et Node adaptés aux fichiers. Le lint couvre le code éditable, les scripts et les tests actifs ; le catalogue généré, les scénarios archivés et les ressources de cours sont exclus. Il ne fixe pas le style des guillemets ou l’indentation. Toute erreur fait échouer la commande et le contrôle GitHub.

| Suite navigateur          | Vérification                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `catalog-browser`         | Catalogue courant, parcours, domaines, alias, images réellement chargées et guides                                                               |
| `student-browser`         | Transitions de tous les parcours, liens vers les tâches, rechargement, cases temporaires, Flexbox, tous les modules aux largeurs 1280/390/320 px |
| `web-examples-browser`    | Extraits réels du catalogue : proportions des images, dimensions, sélecteurs, boîtes, vrais fichiers PNG et feuille CSS locale                   |
| `web-collection-browser`  | Recette isolée : axes Flexbox, ajout d’une carte, retour à la ligne et débordement                                                               |
| `scratch-lot3-browser`    | Vérifications ciblées des modules Scratch et de leurs guides                                                                                     |
| `scratch-mission-browser` | Mission balises : sept chapitres, panne volontaire, téléchargements, guides, trois largeurs et retour depuis les aides                           |
| `teacher-browser`         | Suivi, séances, impressions, OPFS, IndexedDB, sauvegardes, rechargement et conflits                                                              |

Pour un contrôle ciblé : `npm run test:browser -- student-browser`. Tous ces scénarios utilisent `tests/helpers/browser.cjs` : serveur local limité aux fichiers publics, profil Chrome isolé, attente des éléments, remontée des erreurs et captures. Les fichiers privés du professeur ne sont pas ouverts. Le scénario professeur utilise des données fictives et simule les sélecteurs natifs ; leurs permissions et les manipulations dans Drive restent des vérifications manuelles.

Les captures sont conservées par défaut dans `browser-artifacts/`, ignoré par Git. `scripts/test-browser.cjs` crée un dossier par exécution, un sous-dossier par suite et un journal `output.log`. `browser-artifacts/index.html` donne accès au dernier rapport ; chaque exécution conserve aussi son propre `index.html` et son `summary.json`. La commande s’arrête au premier échec et le rapport distingue les suites exécutées ; les suites restantes ne sont pas présentées comme réussies.

En cas d’échec, `failure.html` et `failure.json` regroupent la suite, l’URL actuelle, le titre, la taille de la fenêtre, l’erreur originale et les erreurs du navigateur. `failure.png` capture la page lorsque Chrome est accessible. Un échec au lancement ou pendant le nettoyage reste signalé sans inventer de capture. Le sous-dossier du profil Chrome est supprimé à la fin ; les pages et fichiers fictifs de recette ne sont ni liés par le rapport ni inclus dans l’artefact GitHub. Examiner la capture de la page modifiée : les assertions de largeur et les tests DOM ne valident pas à eux seuls la lisibilité ou la justesse pédagogique.

## Vérifications ciblées pendant le travail

`npm run check:target -- <profil>` vérifie le formatage, le lint et la synchronisation du catalogue, puis lance les tests Node et navigateur pertinents. Les fichiers JSON continuent tous à être validés : le ciblage réduit les scénarios d’interface, pas la validation des références entre contenus. `npm run check:target -- <profil> --node-only` permet un passage intermédiaire sans Chrome ; il ne remplace pas les tests navigateur nécessaires à une modification visuelle.

| Fichiers modifiés                                                        | Profil      | Scénarios navigateur                                                                    |
| ------------------------------------------------------------------------ | ----------- | --------------------------------------------------------------------------------------- |
| `content/modules/web/`, exemples et styles propres au Web                | `web`       | Navigation et affichage des cours Web, vrais exemples HTML/CSS, collection de cartes    |
| `content/modules/python/`                                                | `python`    | 20 cours Python, transitions et largeurs 1280/390/320                                   |
| Modules `scratch-*`, scripts visuels Scratch                             | `scratch`   | Cours Scratch et recette ciblée des guides                                              |
| `content/modules/robotique/`                                             | `robotique` | Cours robotique, transitions et trois largeurs                                          |
| Modules `gdevelop-*` et kit                                              | `gdevelop`  | Cours GDevelop et trois largeurs ; les tests Node vérifient le kit                      |
| `teacher-*.js`, `prof.html`, styles professeur                           | `prof`      | Suivi, séances, sauvegardes fictives, conflits et impressions                           |
| `app.js`, `src/student/`, styles élève communs, `pedagogy.js` côté élève | `student`   | Catalogue et tous les cours ; compléter avec `web` si les iframes/exemples Web changent |
| Scripts, schémas, manifeste et outils de développement                   | `tooling`   | Catalogue ; tests Node du serveur, des rapports et des profils                          |

Les profils sont définis dans `scripts/lib/test-targets.cjs`. Les contrôles Node communs de rendu restent inclus dans les profils de cours ; le grand fichier `pedagogy.test.cjs` teste plusieurs domaines et reste partagé. `student-browser` filtre les parcours, modules et captures d’après le profil, tout en conservant ses cas communs. La version complète, sans profil, couvre tous les modules et tous les parcours du catalogue courant.

Pour une retouche purement textuelle, sans changement de code, de structure des données, de lien ni de ressource, limiter les contrôles à la régénération/validation du catalogue (`node scripts/build-catalog.cjs`), au formatage des fichiers modifiés et à la relecture. Lancer uniquement les tests dont une assertion dépend du texte modifié. Examiner l’encart rendu si sa longueur ou sa mise en forme change sensiblement ; les six suites Chrome ne sont pas nécessaires. Pour une modification documentaire uniquement, relire le diff et vérifier les liens modifiés, sans test applicatif.

Pour une modification fonctionnelle, structurelle ou des styles, conserver `npm run check` complet avant livraison. Les profils servent aux vérifications intermédiaires. Avant un push, disposer d’un contrôle complet réussi sur les changements à publier ; ne pas répéter ce contrôle si ces mêmes changements ont déjà été validés. GitHub exécute toujours toutes les suites, sans filtrage.

## Scénarios précédents

Les anciens scénarios `student-catalog` et `python-browser` attendaient une page de parcours supprimée et des encarts remplacés. Leurs versions datées restent dans `tests/archive/` pour retrouver des cas de recette, sans faire partie des contrôles actuels. Leurs anciens points d’entrée redirigent vers `student-browser`. Les mesures des exemples HTML/CSS ont été reprises dans `web-examples-browser`, les routes dans `catalog-browser`, et les transitions et mises en page dans `student-browser`. Une assertion historique doit être vérifiée contre le comportement actuel avant d’être réintroduite.

Les tests Node importent directement les modules ES de `src/student/`. Node 22.13 ou ultérieur permet leur chargement depuis les tests CommonJS, sans compilation. `tests/helpers/student-dom.cjs` assemble ces mêmes modules avec jsdom pour tester les éléments, les liens, les changements de route et le nettoyage des événements. Les scripts historiques encore exposés comme globals sont exécutés en entier dans un contexte VM ; aucune fonction n’est extraite de leur texte. jsdom n’effectue pas de rendu visuel : les suites Chrome vérifient les dimensions, le chargement des images et les aperçus dans les iframes.

## Formatage automatique

`npm run format` applique Prettier aux fichiers JavaScript, JSON, CSS et YAML éditables. `npm run format:check` vérifie leur format sans les modifier ; cette commande fait partie de `npm run check` et du workflow GitHub. La version de Prettier est verrouillée dans les dépendances de développement, conformément à sa [documentation d’installation](https://prettier.io/docs/install).

`.prettierrc.json` fixe les choix communs ; `.editorconfig` indique aux éditeurs l’encodage UTF-8, deux espaces et les fins de ligne LF. `.gitattributes` conserve aussi LF après un checkout sous Windows. Le formatage ne réécrit pas le texte contenu dans les chaînes JSON des cours. `generated/`, les ressources téléchargeables, les snapshots archivés et le lockfile sont exclus dans `.prettierignore`. Les documents Markdown et les fichiers HTML/SVG ne sont pas ciblés par la commande. VS Code recommande les extensions Prettier et ESLint ; avec Prettier installé, les langages ciblés sont formatés à l’enregistrement grâce à `.vscode/settings.json`.

## Outils partagés des tests

`tests/helpers/script-context.cjs` charge les scripts navigateur complets dans un contexte VM indépendant. Chaque appel conserve ses propres données mutables ; aucun catalogue n’est mis en cache entre scénarios. Les tests du générateur gardent leur exécution directe pour vérifier la sortie produite.

`tests/helpers/fixtures.cjs` crée les dossiers temporaires et enregistre leur suppression avec `t.after`. Il vérifie le chemin réel avant suppression. `bindGlobals` remplace temporairement les variables du navigateur simulé et retourne une fonction de restauration : appeler celle-ci dans `finally`, ou l’enregistrer avec `t.after` pour une simulation partagée par le fichier. Les restaurations imbriquées suivent l’ordre inverse des installations. `student-dom.cjs` l’utilise également si la préparation échoue.

Les préparations de classe et de séance propres à un scénario restent dans son test. Partager uniquement les mécanismes réellement communs, en gardant les assertions dans les scénarios. `test-helpers.test.cjs` vérifie l’isolation des catalogues, la restauration des variables et la suppression des dossiers ; il est inclus dans les profils ciblés.
