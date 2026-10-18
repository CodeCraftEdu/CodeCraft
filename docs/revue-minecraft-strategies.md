# Revue de la mission Éprouver une stratégie avec des repères

18 octobre 2026. Revue de la [mission 7](../content/modules/jeux-video/minecraft-strategies.json), de son guide, de la grille, des tests et du raccordement au [parcours](../content/pathways/minecraft-algorithmes.json). Voir le [rapport d'intégration](integration-minecraft-strategies.md).

## Verdict

Aucune correction nécessaire identifiée dans le périmètre examiné. La mission ajoute un raisonnement utile après la mission 6 : choisir une action selon le sol occupé, puis déterminer dans quelles conditions une stratégie réussit. Les contre-exemples isolent une seule modification du terrain et leurs corrigés sont exacts.

Seule la documentation est modifiée pendant cette revue. Le verdict conserve la limite annoncée à l'intégration : les interfaces et palettes Aquatic ont été observées, sans exécution complète des puzzles.

## Cohérence pédagogique

- Les prérequis portent sur la trace, la condition et l'arrêt de boucle. Le chapitre explique la différence entre tester le sol occupé et tester une case voisine ; aucune connaissance de Scratch n'est implicitement nécessaire.
- Le virage est associé au repère par le programme. Le texte n'attribue pas un ordre universel aux couleurs et demande de déduire les rotations de la carte réelle.
- Les deux si sont successifs, au même niveau dans la boucle. Un simple virage ne change pas le sol occupé ; sur une case bleue, le test rouge reste faux. L'explication et le dépannage de l'imbrication sont cohérents avec les actions proposées.
- Le transfert d'Aquatic 9 vers Aquatic 10 demande de reconsidérer le sol testé, le virage et l'objectif. Le repère qui déclenche l'action reste distinct du but qui arrête la boucle.
- Les deux variantes papier conservent le programme, le départ, le but et toutes les cases praticables. La première déplace un repère, la seconde en retire un sur une autre copie. L'élève peut donc attribuer l'écart à la modification annoncée, puis tester une réparation.
- Le défi vérifie une limite de la stratégie, sans présenter la réussite d'une carte comme une preuve de validité générale. Les corrigés sont repliés après les tâches et demandent une justification par une case et une action.
- Aquatic 11 reste un prolongement facultatif. Son essai court demande d'observer le placement avant d'envisager une répétition ; il n'impose ni solution complète non vérifiée ni achèvement du mur pour poursuivre. Cette portée correspond au cadrage qui réservait le niveau 11 aux besoins du groupe.
- Le guide propose le pion orienté, la réponse orale et un usage ponctuel en stage. La conservation garde à la fois une réussite, une limite et une correction ; la reprise avec un compte est à vérifier par l'utilisateur.

## Vérification des traces et du rendu

La [grille originale](../images/minecraft-strategies.svg), son texte alternatif et les consignes concordent. Le chemin passe par B5, B4, B3, C3, D3, D2 et D1. Le pion part en B5 nord ; le bleu est en B3, le rouge en D3 et le but en D1.

| Cas                            | Résultat recalculé                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------- |
| Grille de référence            | Six déplacements : B4, B3, C3, D3, D2, D1 ; droite en B3, gauche en D3 ; arrivée nord |
| Réponses bleu/rouge            | faux/faux, vrai/faux, faux/faux, faux/vrai, faux/faux, faux/faux                      |
| Bleu déplacé en B4             | Premier virage en B4 vers l'est, puis tentative bloquée vers C4                       |
| Rouge retiré en D3             | Direction est conservée en D3, puis tentative bloquée vers E3                         |
| Si rouge imbriqué dans le bleu | Le test rouge n'est pas rencontré en D3 ; le virage manque et E3 est visée            |

Ces traces ont été recalculées pendant la lecture et confrontées au test de [tests/minecraft.test.cjs](../tests/minecraft.test.cjs). Le simulateur utilise le programme du cours et les règles explicites de la grille ; il ne reproduit pas le moteur Code.org.

La capture `browser-artifacts/codecraft-catalog-qa-2sY808/grille-320.png` a été réexaminée : cases et repères identifiables, programme lisible et deux si visiblement au même niveau. Les lettres B/R et les descriptions complètent les couleurs. Les autres captures de l'intégration sont réutilisées.

## Sources examinées et limites

Lecture du module complet, du guide, du parcours, du SVG, du test et du rapport d'intégration. Réexamen des configurations Aquatic 9 à 11 dans `browser-artifacts/audit-minecraft-2026-10-18/levels.json` et des trois captures `aquatic9-depart.png`, `aquatic10-depart.png`, `aquatic11-depart.png` du même dossier. Elles corroborent les types de tests et les objectifs annoncés. Le relevé de l'ouverture du menu d'Aquatic 11 pendant l'intégration confirme les trois sols proposés. La copie de source `browser-artifacts/analyse-minecraft/craft-aquatic-craft.js` lit le type de sol à la position courante dans `getStandingOnBlockType`, ce qui concorde avec l'explication du chapitre.

Aucun nouveau parcours des 50 niveaux, aucune exécution de solution complète et aucune vérification de sauvegarde avec un compte pendant cette revue. L'essai de placement d'Aquatic 11 reste une exploration proposée à l'élève, sans résultat de construction annoncé comme déjà exécuté.

Le journal `browser-artifacts/mission7-check-unsandboxed.log` confirme les 241 tests Node réussis. Le rapport `browser-artifacts/run-4tl97V/summary.json` confirme les sept suites navigateur réussies. Aucun contenu applicatif n'a changé pendant la revue ; ces suites ne sont pas relancées pour la seule documentation. Le formatage, les liens locaux modifiés et le diff documentaire sont contrôlés.

## Suite

La mission 8 peut être rédigée selon le cadrage validé : petite automatisation personnelle dans Hero 12, choix justifiés et vérifications. Modèle conseillé : Sol High pour la rédaction et l'intégration, puis Astra High pour la revue.
