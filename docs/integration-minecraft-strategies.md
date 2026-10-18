# Minecraft : éprouver une stratégie avec des repères

18 octobre 2026. Mission 7 rédigée et intégrée après la [revue de la mission 6](revue-minecraft-decisions.md), selon le [cadrage des huit missions](audit-scratch-minecraft.md).

## Progression intégrée

Le module [minecraft-strategies.json](../content/modules/jeux-video/minecraft-strategies.json) poursuit la partie Observer et décider du [parcours](../content/pathways/minecraft-algorithmes.json). Sept missions sont disponibles sur huit prévues.

- Aquatic 9 : distinguer un test du sol occupé du test d'un passage voisin ; déduire les virages de la carte et placer les deux si de couleur au même niveau dans la boucle.
- Aquatic 10 : transférer ce raisonnement aux lanternes marines, justifier le réglage et distinguer le repère de l'objectif d'arrêt.
- Grille originale : éprouver une stratégie puis modifier uniquement les repères pour construire deux contre-exemples. Réparer et vérifier depuis le même départ.
- Aquatic 11 : exploration facultative repliée, avec un essai court de placement et de déplacement, puis observation du test de sol et de la boucle jusqu'à l'achèvement du conduit. Terminer le mur n'est pas requis pour poursuivre.

Le guide professeur fournit le diagnostic, les erreurs d'imbrication et de lecture du sol, les réponses du défi, les adaptations orales et un usage ponctuel en stage. Scratch n'est pas un prérequis ; les acquis de la mission 6 sont déclarés.

## Vérifications des possibilités de Code.org

L'inventaire existant des 50 configurations est réutilisé. Seules les interfaces [Aquatic 9](https://studio.code.org/courses/aquatic/units/1/lessons/1/levels/9), [10](https://studio.code.org/courses/aquatic/units/1/lessons/1/levels/10) et [11](https://studio.code.org/courses/aquatic/units/1/lessons/1/levels/11) ont été relues pendant l'intégration.

La palette du niveau 9 fournit les deux tests sur corail bleu/rouge, les déplacements et la boucle jusqu'au but. Celle du niveau 10 fournit le test sur lanterne marine ; l'objectif est le calmar. Au niveau 11, le menu du test, ouvert pendant le contrôle, propose sable, prismarine sombre et lanterne marine. Le sable affiché par défaut ne limite donc pas le choix. La palette propose aussi placer de la prismarine, les déplacements, la répétition bornée et la boucle jusqu'à l'achèvement du conduit.

Captures conservées dans `browser-artifacts/audit-minecraft-2026-10-18/` : `aquatic9-depart.png`, `aquatic10-depart.png`, `aquatic11-depart.png`. Aucun puzzle n'a été exécuté pendant cette lecture et aucun compte n'a été utilisé. La partie 11 demande d'observer le résultat d'un essai court plutôt que de promettre une solution complète de construction non exécutée. Aucun JavaScript éditable ni importation de carte n'est nécessaire. Les onglets de vérification ont été fermés.

## Défi original et contre-exemples

La [grille](../images/minecraft-strategies.svg) contient les seules cases praticables B5, B4, B3, C3, D3, D2 et D1. Départ B5 nord, but D1, repère bleu B3 et rouge D3. Les lettres B et R complètent les couleurs.

Le programme avance puis teste le bleu pour tourner à droite, puis le rouge pour tourner à gauche. Les deux si sont successifs. La trace de référence est B4, B3, C3, D3, D2, D1, avec deux virages et une arrivée nord. Les paires bleu/rouge sont faux/faux, vrai/faux, faux/faux, faux/vrai, faux/faux, faux/faux.

Déplacer uniquement le bleu de B3 à B4 produit un virage prématuré en B4, suivi d'une tentative vers C4 bloquée. Retirer uniquement le rouge de D3 conserve l'est à cet endroit et produit une tentative vers E3 bloquée. Chaque variante repart de la grille de référence ; les cases praticables, le programme et le départ restent identiques. Restaurer les repères rétablit le trajet.

Le défi arrête explicitement la trace papier sur tentative de déplacement bloqué. Cette règle n'est pas annoncée comme le comportement exact du moteur Code.org. Les variantes se font sur un dessin, sans promesse de modification de la carte externe.

## Raccordement et vérifications

Le manifeste déclare le module ; la navigation enchaîne la mission 6 et la mission 7. La compétence `minecraft.strategy` est ajoutée sans modifier les identifiants existants. Le catalogue régénéré contient 89 modules et neuf parcours.

Le test Minecraft lit le programme du défi et simule sa trace, les deux variantes et l'erreur d'imbrication du si rouge dans le bleu. Cette dernière empêche le test rouge d'être rencontré en D3 et conduit à E3 bloquée. Les tests de liens vérifient les adresses complètes des niveaux 9, 10 et 11, y compris dans le prolongement replié. Le scénario élève capture le chapitre et son défi à 1280, 390 et 320 pixels.

Le contrôle ciblé `npm run check:target -- student --node-only` réussit : formatage, lint, catalogue et 100 tests, dont huit tests Minecraft. Les liens documentaires locaux et le diff ont été contrôlés.

Les captures complémentaires sont conservées dans `browser-artifacts/codecraft-catalog-qa-2sY808/` : grille à 1280, 390 et 320 pixels, programme et exploration facultative à 320 pixels. La grille, les cases B/R et l'indentation des deux si ont été examinées ; aucun débordement visible. Les textes explicitent aussi les repères et les cases, pour compléter les petites légendes de l'image sur mobile.

La première tentative de capture s'arrête au démarrage de Chrome dans l'environnement restreint, avant toute page chargée (`browser-artifacts/codecraft-catalog-qa-z3ZJ0j/failure.html`). La relance du même scénario hors du bac à sable réussit sans modification du test ni du site. La première tentative de `npm run check` a également été interrompue pendant les tests Node restés sans progression.

La relance complète hors du bac à sable réussit : formatage, lint, 241 tests Node, y compris les tests Python, puis les sept suites navigateur. Rapport : `browser-artifacts/run-4tl97V/summary.json` ; journal complet : `browser-artifacts/mission7-check-unsandboxed.log`. Aucun délai de test ni programme Python n'a été modifié. Cette réussite ne permet pas d'attribuer avec certitude la cause des anciens délais Python.

Les captures de la mission dans `browser-artifacts/run-4tl97V/student-browser/codecraft-catalog-qa-X9cP6g/` complètent le contrôle visuel. L'aperçu local sur le port 8000 répond HTTP 200. La recette CodeCraft est réussie. La [revue pédagogique du 18 octobre](revue-minecraft-strategies.md) est terminée sans correction nécessaire identifiée, avec les limites d'exécution Code.org décrites ci-dessus.

## Suite

La [mission 8 est intégrée](integration-minecraft-automatisation.md) : petite automatisation personnelle dans Hero 12, choix justifiés et vérifications. Sa revue est conseillée en Astra High. Aucun commit ni push effectué pendant cette intégration ou sa revue.
