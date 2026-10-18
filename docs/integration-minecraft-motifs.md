# Minecraft : composer un motif avec des boucles

18 octobre 2026. Mission 5 rédigée et intégrée après la [revue de la mission 4](revue-minecraft-procedures.md), selon le [cadrage validé](audit-scratch-minecraft.md).

## Progression intégrée

Le module [minecraft-motifs.json](../content/modules/jeux-video/minecraft-motifs.json) suit la lecture des procédures dans le [parcours Minecraft](../content/pathways/minecraft-algorithmes.json). Cinq missions sont disponibles sur huit prévues.

- Construire une ligne dans Hero 12 avec deux répétitions de trois motifs placer un rail puis avancer. Comparer à une répétition simple de six : l'emboîtement seul n'apporte pas de réduction du travail ni de l'écriture.
- Extraire la répétition de trois dans la première définition modifiable. Composer deux appels avec un virage à gauche après chaque appel pour construire un angle. Distinguer la boucle de la définition et celle du programme principal, y compris le dernier virage.
- Tracer un défi original compact avec deux placements par appel. Comparer la suppression du seul dernier virage, puis l'inversion avancer/placer : les rails, la position et l'orientation ne sont pas des résultats interchangeables.

La [grille originale](../images/minecraft-motifs.svg) possède cinq colonnes et cinq lignes, avec B4 nord comme départ. Toutes ses cases sont praticables. Le programme tourne d'abord à droite, puis exécute deux appels suivis chacun d'un virage à gauche. Rails attendus : B4, C4, D4, D3 ; état final : D2 ouest. En retirant seulement le dernier virage, le pion termine D2 nord avec les mêmes rails. En plaçant après le déplacement dans la définition, les rails deviennent C4, D4, D3, D2 ; l'état final reste D2 ouest.

Les règles, la définition et le programme du défi précèdent les tâches. Les réponses sont repliées après les prévisions. Le guide prévoit les erreurs de comptage, les emboîtements incorrects et le diagnostic par cases construites. Le carnet conserve à la fois la définition et le programme qui l'appelle.

## Possibilités réelles réutilisées

La mission s'appuie sur les vérifications ciblées de Hero 12 déjà réalisées lors de l'audit : imbrication des répétitions, deux groupes de trois rails, déplacement du groupe dans la première définition, appels répétés avec virages et remise à zéro du terrain. Les captures `hero12-boucles.png` et `hero12-procedure-angle.png`, dans `browser-artifacts/audit-minecraft-2026-10-18/`, ont été réexaminées.

L'inventaire confirme deux définitions modifiables, des répétitions de 2 à 10 et les blocs de placement, déplacement et rotation. Les instructions n'exigent ni nouvelle définition créée par un menu, ni renommage, ni paramètre, ni saisie JavaScript. Le nom tronçon sert aux exemples CodeCraft ; l'élève conserve dans Code.org le nom de la définition fournie et l'appel correspondant.

Chaque essai repart du terrain initial après Reset, qui conserve les blocs. La conservation d'un travail antérieur précède le retrait des commandes. Une partie des rails peut sortir de la vue initiale ; après la revue, les consignes expliquent comment déplacer le joueur pour retrouver les rails et l'Agent. Hero 12 étant libre, son bouton de fin ne valide pas les objectifs de CodeCraft. La reprise avec un compte reste à vérifier dans l'usage réel.

Aucune nouvelle exécution complète du niveau déployé ni nouvelle exploration des 50 niveaux n'est revendiquée pour cette intégration.

## Raccordement et vérifications

Le manifeste et le parcours déclarent la mission. La compétence `minecraft.composition` décrit l'emboîtement et l'extraction du motif dans une procédure. Le catalogue contient 87 modules et neuf parcours. La fin de la mission 4 mène désormais à la mission 5 ; aucune cible fictive vers la mission 6 n'est ajoutée.

Les tests Minecraft parcourent les cinq missions et vérifient leurs niveaux externes. Le nouveau contrôle lit les exemples du module et déroule leurs répétitions et appels : équivalence de la ligne à six motifs, angle à six placements, puis les trois variantes du défi original. Il s'agit d'une simulation des règles annoncées, pas d'une exécution du moteur Code.org. Le scénario élève capture la mission et la grille à 1280, 390 et 320 pixels.

- `npm run check:target -- student --node-only` réussi : 98 tests, formatage, lint et catalogue synchronisé.
- `npm run check` réussi en un seul lancement : formatage, lint, 239 tests Node et les sept suites navigateur. Rapport complet : `browser-artifacts/run-1AyaVj/summary.json`. La suite professeur, qui avait demandé une relance lors de l'intégration précédente, est également passée dans ce lancement.
- Captures examinées dans `browser-artifacts/run-1AyaVj/student-browser/codecraft-catalog-qa-7sKDaC/` : module à 390 pixels, grille à 1280 et 320 pixels. Aucun débordement visible ; les cases, coordonnées et direction du pion correspondent aux consignes. Les indications du dessin sont reprises dans le texte.
- Captures supplémentaires examinées dans `browser-artifacts/codecraft-catalog-qa-bl50oo/` : `deux-boucles-code-320.png`, `defi-papier-code-320.png` et `programme-papier-code-320.png`. Les lignes tiennent en largeur et les indentations distinguent les deux répétitions ainsi que l'appel et son virage.
- Les liens documentaires locaux ont été vérifiés, les documents formatés et le diff relu. Seule la documentation a été complétée après le contrôle applicatif réussi.

Ces contrôles ne constituent ni une observation avec des élèves ni une nouvelle exécution dans Code.org.

## Suite

La correction demandée par la [revue pédagogique de la mission 5](revue-minecraft-motifs.md) est appliquée : les consignes de la ligne et de l'angle expliquent comment suivre les rails avec Alex ou Steve pour retrouver l'Agent à l'écran. Le suivi de la vue a été vérifié dans l'essai de référence de Hero 12. Le catalogue a été régénéré ; les six tests Minecraft et le contrôle de formatage passent. Les nouvelles captures à 1280 et 320 pixels sont lisibles. Les programmes et corrigés sont conservés.

La [mission 6 sur les décisions de chemin dans Aquatic](integration-minecraft-decisions.md) est désormais intégrée. Aucun commit ni push effectué pendant cette intégration ou sa correction.
