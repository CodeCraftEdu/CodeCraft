# Minecraft : choisir une action selon le chemin

18 octobre 2026. Mission 6 rédigée et intégrée après la [revue et la correction de la mission 5](revue-minecraft-motifs.md), conformément au [cadrage des huit missions](audit-scratch-minecraft.md).

## Progression intégrée

Le module [minecraft-decisions.json](../content/modules/jeux-video/minecraft-decisions.json) ouvre la partie Observer et décider du [parcours](../content/pathways/minecraft-algorithmes.json). Six missions sont disponibles sur huit prévues.

- Transition explicite de Hero à Aquatic : les blocs commandent directement le personnage ou le bateau. La boucle jusqu'au but est expliquée sur place ; un lien vers Aquatic 4 fournit une prise en main facultative.
- Aquatic 7 : compléter la branche conditionnelle du programme fourni, lire avancer avant le test, puis prévoir une réponse vraie et une fausse. Distinguer le si local du critère d'arrêt de la boucle.
- Aquatic 8 : reconstruire une décision à partir d'une autre carte, en choisissant les directions du test et du virage, puis justifier l'ordre des actions.
- Défi original sur grille : suivre le test relatif à l'orientation, tracer une boucle et comparer tester avant/après avancer depuis deux départs différents. Vérifier aussi qu'un départ déjà au but n'exécute aucun tour.

La [grille originale](../images/minecraft-decisions.svg) montre les seules cases praticables B5, B4, B3, C3, D3, D4 et D5. Depuis B5 nord, le programme A avance avant de tester : six déplacements, virages en B3 et D3, arrivée D5 sud. Les tests successifs donnent faux, vrai, faux, vrai, faux, faux. Un test faux saute le virage sans arrêter la répétition.

Depuis B3 nord, A tente d'abord B2 bloquée. Le programme B teste avant de déplacer, regarde C3, tourne et rejoint D5 par C3, D3 et D4. Depuis B5 nord, les deux ordres peuvent en revanche donner le même trajet. Le corrigé n'affirme donc pas qu'inverser deux actions change toujours le chemin. La règle papier arrête explicitement une trace sur tentative de déplacement bloqué ; elle n'est pas présentée comme le comportement du moteur Code.org.

## Vérifications techniques ciblées

L'inventaire existant des 50 configurations est réutilisé. Les niveaux Aquatic 4, 7 et 8 disposent de la boucle jusqu'au but et des déplacements nécessaires. Le niveau 7 fournit avancer puis si chemin à droite dans la boucle, avec la branche à compléter. Aucun éditeur JavaScript ou import de carte n'est requis.

Pendant l'intégration, seules les interfaces [Aquatic 7](https://studio.code.org/courses/aquatic/units/1/lessons/1/levels/7) et [Aquatic 8](https://studio.code.org/courses/aquatic/units/1/lessons/1/levels/8) ont été consultées pour vérifier les sélecteurs et les cartes :

- Le menu du test propose devant, à droite et à gauche. La valeur initiale à droite ne limite pas le test à ce côté.
- Le menu de rotation propose droite et gauche, même si le bloc de la palette d'Aquatic 8 affiche gauche au départ.
- Le programme fourni d'Aquatic 7 correspond à celui annoncé. Les cartes et les objectifs coffre/prismarine et poisson tropical correspondent aux textes.

Captures de lecture conservées dans `browser-artifacts/audit-minecraft-2026-10-18/aquatic7-depart.png` et `aquatic8-depart.png`. Aucun puzzle n'a été exécuté pendant cette vérification ciblée, aucun compte utilisé et aucune nouvelle recette des 50 niveaux engagée. La conservation avec un compte reste une vérification d'usage.

## Raccordement et recette CodeCraft

Le manifeste déclare le module ; le parcours enchaîne la mission 5 et la mission 6. La compétence `minecraft.decision` décrit le test selon l'état et sa distinction avec l'arrêt. Les autres identifiants sont conservés. Le catalogue contient 88 modules et neuf parcours.

Les tests de navigation vérifient les six missions et les adresses complètes des niveaux Hero et Aquatic. Le test du défi lit les programmes du cours, simule le test relatif, les deux ordres, le blocage en B2 et le départ déjà au but. Cette simulation concerne les règles du dessin original, pas le moteur de jeu. Le scénario élève capture le module et la grille à 1280, 390 et 320 pixels.

Le contrôle ciblé `npm run check:target -- student --node-only` est réussi : 99 tests, formatage, lint et catalogue. Les sept tests Minecraft comprennent les nouvelles variantes et le cas où le pion est déjà au but.

Le premier contrôle complet a réussi le formatage, le lint, les 240 tests Node et six suites navigateur. La suite professeur a échoué sur l'attente de l'erreur JSON fictive (`tests/teacher-browser.cjs`, ouverture après rechargement). La relance isolée a reproduit cet échec. Rapports conservés : `browser-artifacts/run-nZUWQ6/summary.json` et `browser-artifacts/run-BSz377/summary.json`.

Le scénario attendait seulement la nouvelle valeur du libellé avant de tenter une autre ouverture. Or `teacher-app.js` affiche cette valeur avant `await remember()` et conserve les contrôles désactivés pendant cette opération. Le test attend désormais que le bouton d'ouverture soit disponible après les deux rechargements concernés. Les assertions sur les JSON invalides, les versions inconnues et les fichiers conservés restent en place. Cette correction du scénario est suivie d'un nouveau contrôle complet.

Captures examinées dans `browser-artifacts/run-nZUWQ6/student-browser/codecraft-catalog-qa-ZiU2Z0/` : consignes à 390 pixels et activité à 1280 et 320 pixels. Captures complémentaires dans `browser-artifacts/codecraft-catalog-qa-gg0odS/` : grille complète à 1280 et 320 pixels, programme B à 320 pixels. La grille correspond aux cases annoncées et les indentations séparent le si, son virage et le déplacement placé après le si. Aucun débordement visible. La légende est petite à 320 pixels ; les types de cases et les positions sont aussi décrits dans le texte.

Après correction de l'attente, `npm run test:browser -- teacher-browser` réussit : `browser-artifacts/run-zn841M/summary.json`. Les sept suites navigateur ont chacune réussi, six dans le premier contrôle et la suite professeur après correction.

La seconde commande `npm run check` a réussi le formatage et le lint, puis s'est arrêtée sur des délais `spawnSync python ETIMEDOUT` dans les tests Python. La relance `node --test tests/python.test.cjs` donne 12 tests réussis et un échec de délai dans le lot 3. Les programmes et tests Python n'ont pas été modifiés. Le premier contrôle avait réussi les 240 tests Node ; il ne faut cependant pas présenter le dernier contrôle complet comme réussi. Un contrôle complet vert reste requis avant un futur push. Aucun délai de test n'a été augmenté pour masquer l'échec.

Suivi lors de la [mission 7](integration-minecraft-strategies.md) : un nouveau `npm run check` complet hors du bac à sable réussit avec 241 tests Node et les sept suites navigateur (`browser-artifacts/run-4tl97V/summary.json`). Il inclut les changements de la mission 6. Les programmes et délais Python sont conservés.

Les liens documentaires locaux et le diff ont été contrôlés. Aucun défaut de la mission n'a été signalé par les vérifications effectuées. La [revue pédagogique du 18 octobre](revue-minecraft-decisions.md) est terminée sans correction nécessaire identifiée ; elle conserve les limites de vérification décrites ci-dessus.

## Suite

La [mission 7 intégrée](integration-minecraft-strategies.md) approfondit les repères du terrain et les limites d'une stratégie. Sa revue est conseillée en Astra High. Aucun commit ni push effectué pendant cette intégration ou sa revue.
