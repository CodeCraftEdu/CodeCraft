# Revue de la mission Choisir une action selon le chemin

18 octobre 2026. Revue de la [mission 6](../content/modules/jeux-video/minecraft-decisions.json), de son guide professeur, de sa grille et de son raccordement au [parcours](../content/pathways/minecraft-algorithmes.json). Voir le [rapport d'intégration](integration-minecraft-decisions.md).

## Verdict

Aucune correction nécessaire identifiée dans le périmètre examiné. La progression introduit le test de chemin, distingue son résultat de l'arrêt de la boucle et fait justifier l'ordre des commandes à partir d'un état précis. Elle apporte un travail spatial complémentaire à Scratch sans en faire un prérequis.

Seule la documentation est modifiée pendant cette revue. Ce verdict ne constitue pas une recette complète des puzzles Code.org ni une observation avec des élèves.

## Points vérifiés

- La transition Hero/Aquatic annonce le contrôle direct du personnage par les blocs. La boucle jusqu'au but et le si sont expliqués sur place ; Aquatic 4 fournit une reprise facultative. Les prérequis déclarés portent sur la trace et la répétition, pas sur des notions Scratch implicites.
- Le programme fourni d'Aquatic 7 correspond au texte : avancer puis si chemin à droite dans la boucle, avec le virage à ajouter dans le si. Les tâches demandent de prévoir la case testée après le déplacement, une réponse vraie et une fausse, puis de comparer au trajet observé.
- Pour Aquatic 8, la consigne distingue le réglage du côté regardé et celui du virage. Elle ne suppose pas que la valeur gauche affichée initialement dans la palette interdit de tourner à droite. Les sélecteurs avaient été vérifiés lors de l'intégration.
- Le test est présenté comme une question relative à la position et à l'orientation. Il ne déplace ni ne tourne le personnage. Une réponse fausse saute son contenu, sans être confondue avec le but de la boucle.
- Le texte n'affirme pas qu'inverser tester et avancer modifie toujours le trajet. Il exige de suivre les états et fournit un départ où cette différence devient déterminante.
- Le défi original définit ses propres cases praticables et sa règle d'arrêt en cas de déplacement bloqué. Il n'est pas présenté comme une carte importable ni comme une reproduction du moteur de collision de Code.org.
- Les corrigés sont repliés après les tâches. Le guide professeur prévoit une aide par pion orienté, une réponse orale ou dessinée, une reprise pour débutant et un usage ponctuel pendant le stage.
- La conservation demande les blocs et les raisons des choix, avec vérification de la reprise par l'utilisateur. Elle ne promet pas une sauvegarde anonyme durable. Start Over et Reset ont des usages distincts dans les consignes.
- Le parcours enchaîne la mission 5 et la mission 6 et annonce deux missions encore à venir. Les liens visent Aquatic 4, 7 et 8, et la compétence de décision est déclarée.

## Recalcul de la grille

La [grille](../images/minecraft-decisions.svg) et le texte concordent : B5, B4, B3, C3, D3, D4 et D5 sont praticables ; le but est D5.

| Situation                  | Résultat vérifié                                                                                     |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| Test depuis B4 nord        | C4, faux                                                                                             |
| Test depuis B3 nord        | C3, vrai                                                                                             |
| Test depuis B4 est         | B5, vrai                                                                                             |
| Programme A depuis B5 nord | B4, B3, C3, D3, D4, D5 ; réponses faux, vrai, faux, vrai, faux, faux ; deux virages ; arrivée D5 sud |
| Programme B depuis B5 nord | Même trajet et même arrivée ; réponses faux, faux, vrai, faux, vrai, faux                            |
| Programme A depuis B3 nord | Tentative vers B2 bloquée avant tout test                                                            |
| Programme B depuis B3 nord | Test de C3 vrai, puis C3, D3, D4, D5 ; arrivée sud                                                   |
| Départ déjà en D5          | Aucun tour, déplacement ou test de chemin                                                            |

Ces résultats ont été recalculés pendant la lecture et confrontés au simulateur de [tests/minecraft.test.cjs](../tests/minecraft.test.cjs). Celui-ci lit les programmes du cours et vérifie ces variantes ; il simule uniquement les règles de la grille originale.

## Éléments examinés et limites

Lecture complète du module, du guide, du parcours, du SVG, du test Minecraft et du rapport d'intégration. Réexamen des configurations Aquatic 4, 7 et 8 dans `browser-artifacts/audit-minecraft-2026-10-18/levels.json` et des captures `aquatic7-depart.png` et `aquatic8-depart.png` du même dossier. Elles corroborent les programmes de départ, les palettes et les objectifs annoncés. Elles ne prouvent pas une exécution complète des solutions.

La capture `browser-artifacts/codecraft-catalog-qa-gg0odS/grille-320.png` a été réexaminée : grille lisible, programmes sans débordement visible et indentation distinguant le virage conditionnel de l'avancer du programme B. Les autres captures de l'intégration sont réutilisées. La légende est petite à cette largeur, mais les cases et leurs propriétés sont également décrites dans le texte.

Les contrôles de l'intégration sont conservés : sept tests Minecraft réussis et contrôle ciblé élève de 99 tests réussi. Les rapports `browser-artifacts/run-nZUWQ6/summary.json` et `browser-artifacts/run-zn841M/summary.json`, relus pendant cette revue, montrent respectivement six suites navigateur réussies et la réussite isolée de la suite professeur après correction de son attente.

Le dernier `npm run check` reste en échec sur des délais `spawnSync python ETIMEDOUT`, documentés dans le rapport d'intégration. Aucun contrôle complet vert n'est revendiqué ; il reste requis avant un push. Les suites applicatives ne sont pas relancées pour cette revue documentaire. Aucune nouvelle exécution de puzzle ni vérification de sauvegarde avec un compte n'a été faite.

## Suite

La mission 7 peut être rédigée sur les repères du terrain et les limites d'une stratégie, selon le cadrage validé. Modèle conseillé : Sol High pour la rédaction et l'intégration, puis Astra High pour sa revue.
