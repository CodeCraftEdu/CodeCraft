# Minecraft : travail direct dans Code.org

## Règle actuelle

À la demande de l'utilisateur, les huit missions reposent sur les manipulations dans Code.org. Les exercices sur grille, dessins préparatoires, simulations sur papier, pseudo-programmes séparés du jeu et carnets obligatoires sont retirés.

CodeCraft donne l'objectif, le lien précis, les consignes, les indices et les questions à vérifier dans le jeu. Un élève peut répondre oralement ou montrer un bloc ou une case. Les captures de ses blocs servent uniquement à retrouver son travail plus tard.

Si une illustration supplémentaire est nécessaire pour comprendre une manipulation, en signaler le besoin à l'utilisateur et proposer une capture de Code.org. Ne pas créer un dessin ou un exercice de remplacement sans sa demande.

## Activités conservées

| Mission           | Travail dans Code.org                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------- |
| Trajet de l'Agent | Hero 1 et 3 : personnages, déplacements, virages et plaque.                                               |
| Répétitions       | Hero 4 et 5 : groupe répété, nombre de tours et actions exécutées.                                        |
| Passage           | Hero 6 et 7 : poser des planches, traverser et corriger la répétition fournie.                            |
| Procédures        | Hero 8 et 10 : lire les définitions, appeler et raccorder les constructions.                              |
| Motifs            | Hero 12 : comparer les boucles réelles puis composer les appels et les virages.                           |
| Décisions         | Aquatic 7 et 8 : observer les tests vrai/faux et l'arrêt au but. Aquatic 4 reste une reprise facultative. |
| Repères           | Aquatic 9 et 10 : choisir les virages selon le sol. Aquatic 11 reste une exploration facultative.         |
| Automatisation    | Hero 12 : construire six rails, comparer deux organisations et tester un changement de virage.            |

Les identifiants des huit modules restent inchangés. Les liens internes et les guides professeur pointent vers les activités conservées. Les anciennes activités retirées ne sont plus des cibles de navigation ni des prérequis.

## Historique et contrôles

L'[audit initial](audit-scratch-minecraft.md) et la [revue transversale](revue-transversale-minecraft.md) conservent l'historique des décisions antérieures. Leurs recommandations de grilles et de carnet sont remplacées par la présente règle. Les anciens SVG restent pour les liens des archives documentaires ; aucun n'est utilisé dans les cours Minecraft actuels.

Les simulateurs des activités supprimées sont retirés des tests actifs. Les tests conservent le parcours, les liens externes, les raccourcis utiles et le contrôle de l'absence de supports artificiels dans les cours. Les captures du scénario élève portent désormais sur les activités Code.org décrites dans les pages.

Le contrôle ciblé élève réussit avec 96 tests. Le contrôle complet valide formatage, lint, catalogue, 237 tests Node et six suites navigateur ; rapport `browser-artifacts/run-FAMQoy/summary.json`. Le test de retour de défilement professeur a échoué pendant ce passage, puis la suite professeur seule a réussi sans modification de son code : `browser-artifacts/run-v9nlvr/summary.json`. Un premier passage avait rencontré un échec de comptage des régénérations dans le test du serveur de développement, non reproduit ensuite. Ces échecs de timing ne sont pas présentés comme corrigés.

Les captures existantes de ce passage ont été examinées à 320 pixels pour les missions 1, 2, 7 et 8, ainsi qu'à 1280 pixels pour le projet final : consignes lisibles, sans supports de grille. Après les contrôles, deux titres et une demande de prise de notes ont été simplifiés ; catalogue régénéré et validé, formatage et diff vérifiés. Aucun commit ni push pendant ce recentrage.
