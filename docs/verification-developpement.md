# Vérifier une modification

Installer les outils une fois avec `npm ci`, puis servir le site avec `python -m http.server 8000` pour la prévisualisation.

Utiliser Node 22.13 ou ultérieur ; les vérifications GitHub utilisent Node 24.

```bash
npm run build:content
npm run lint
npm test
npm run test:browser
```

`npm run lint` détecte les erreurs JavaScript, les noms inconnus, les variables inutilisées et les constructions risquées. `npm test` vérifie la synchronisation du catalogue et les tests Node. `npm run test:browser` lance séquentiellement six scénarios Chrome ; la commande s’arrête au premier échec. `npm run check` lance le lint puis les deux ensembles. Chrome est détecté au chemin Windows habituel ; `CHROME_PATH` permet de choisir un autre exécutable Chromium.

## Vérifications GitHub

Le workflow `.github/workflows/checks.yml` exécute `npm ci`, le lint, les tests de contenu et les tests navigateur sur Windows à chaque push et pull request. Il peut aussi être lancé manuellement depuis l’onglet Actions. Il vérifie le catalogue existant sans le régénérer : une sortie oubliée reste une erreur visible. Les actions sont verrouillées sur leurs commits officiels. La configuration suit les [instructions Node.js de GitHub](https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs).

Le contrôle apparaît sous le nom `Lint, content and browser tests`. Les captures PNG sont accessibles dans l’artefact `browser-screenshots`, conservé sept jours, y compris lorsqu’un scénario échoue après l’ouverture de Chrome. Le profil du navigateur et les fichiers fictifs du professeur ne sont pas inclus. `CODECRAFT_BROWSER_ARTIFACTS` permet de choisir le dossier de ces captures ; sans cette variable, les scénarios utilisent le dossier temporaire habituel.

Le workflow vérifie le code sans le publier. Il démarrera lorsque cette configuration et les fichiers nécessaires seront poussés sur GitHub. Il ne modifie pas les règles de la branche ; rendre le contrôle obligatoire pour fusionner reste un réglage distinct du dépôt.

## Lint JavaScript

La configuration `eslint.config.mjs` applique les [règles recommandées d’ESLint](https://eslint.org/docs/latest/use/configure/configuration-files), avec les environnements navigateur et Node adaptés aux fichiers. Le lint couvre le code éditable, les scripts et les tests actifs ; le catalogue généré, les scénarios archivés et les ressources de cours sont exclus. Il ne fixe pas le style des guillemets ou l’indentation. Toute erreur fait échouer la commande et le contrôle GitHub.

| Suite navigateur | Vérification |
| --- | --- |
| `catalog-browser` | 72 modules, 7 parcours, 4 domaines, alias, images réellement chargées et 72 guides |
| `student-browser` | Transitions de tous les parcours, liens vers les tâches, rechargement, cases temporaires, Flexbox, 72 modules aux largeurs 1280/390/320 px |
| `web-examples-browser` | Extraits réels du catalogue : proportions des images, dimensions, sélecteurs, boîtes, vrais fichiers PNG et feuille CSS locale |
| `web-collection-browser` | Recette isolée : axes Flexbox, ajout d’une carte, retour à la ligne et débordement |
| `scratch-lot3-browser` | Vérifications ciblées des modules Scratch et de leurs guides |
| `teacher-browser` | Suivi, séances, impressions, OPFS, IndexedDB, sauvegardes, rechargement et conflits |

Pour un contrôle ciblé : `npm run test:browser -- student-browser`. Tous ces scénarios utilisent `tests/helpers/browser.cjs` : serveur local limité aux fichiers publics, profil Chrome isolé, attente des éléments, remontée des erreurs et captures. Les fichiers privés du professeur ne sont pas ouverts. Le scénario professeur utilise des données fictives et simule les sélecteurs natifs ; leurs permissions et les manipulations dans Drive restent des vérifications manuelles.

Les captures et les fichiers de recette sont conservés dans le dossier temporaire annoncé par chaque suite. Le sous-dossier contenant le profil Chrome est supprimé à la fin du scénario. Examiner la capture de la page modifiée : les assertions de largeur et les tests DOM ne valident pas à eux seuls la lisibilité ou la justesse pédagogique.

## Scénarios précédents

Les anciens scénarios `student-catalog` et `python-browser` attendaient une page de parcours supprimée et des encarts remplacés. Leurs versions datées restent dans `tests/archive/` pour retrouver des cas de recette, sans faire partie des contrôles actuels. Leurs anciens points d’entrée redirigent vers `student-browser`. Les mesures des exemples HTML/CSS ont été reprises dans `web-examples-browser`, les routes dans `catalog-browser`, et les transitions et mises en page dans `student-browser`. Une assertion historique doit être vérifiée contre le comportement actuel avant d’être réintroduite.

Les tests Node utilisant `tests/helpers/student-source.cjs` sont des tests ciblés de fonctions extraites ; cet adaptateur reste transitoire. Les suites Chrome exécutent les véritables imports ES et complètent ces contrôles.
