# Revue de la mission Concevoir et tester une automatisation

18 octobre 2026. Revue de la [mission 8](../content/modules/jeux-video/minecraft-automatisation.json), de son guide professeur, de la grille, des aides, des tests et du raccordement au [parcours](../content/pathways/minecraft-algorithmes.json). Voir le [rapport d'intégration](integration-minecraft-automatisation.md).

## Verdict

Aucune correction nécessaire identifiée dans le périmètre examiné. Le projet respecte le cadrage validé : concevoir une petite construction sans pile complète fournie, comparer deux organisations équivalentes et prévoir une modification personnelle. Il termine le parcours par une mobilisation des acquis, sans présenter Hero comme un outil réunissant aussi les conditions d'Aquatic.

Seule la documentation est modifiée pendant cette revue. Ce verdict ne constitue pas un essai avec des élèves ni une nouvelle exécution dans Code.org.

## Cohérence pédagogique

- Le retour d'Aquatic vers Hero distingue explicitement l'Agent commandé par les blocs du joueur qui déplace la vue. La conservation de l'ancien travail précède le remplacement des commandes.
- Le défi impose six cases de rails distinctes et deux angles dans le tracé. Les rotations initiale et finale sont distinguées de ces angles. La case et la direction finales sont prévues séparément des cases construites.
- La grille A5 nord est un plan relatif, pas une carte officielle du niveau. L'élève reporte les obstacles observés et prévoit la case libre nécessaire au dernier déplacement. Le dessin reste vierge, sans solution révélée.
- La conception précède l'assemblage. La seconde organisation doit préserver les rails et l'état final ; une définition et ses appels sont requis dans au moins une version. Le nom de la définition fournie reste celui utilisé pour son appel.
- La comparaison porte sur un critère annoncé. Le comptage inclut une fois les définitions appelées, les boucles et les appels ; il reste distinct des actions exécutées. L'autre critère, la facilité de modification, peut être justifié en désignant les endroits à changer.
- La variante isole un virage entre tronçons. Le texte explique comment séparer les appels si une boucle partage ce virage. Le dessin et le contrôle du terrain précèdent l'exécution ; aucune liberté illimitée de construction n'est promise.
- Les quatre liens d'aide ciblent des activités existantes : définition du tronçon, comparaison, trace conditionnelle et contre-exemples. Le bilan Aquatic dispose d'un prérequis déclaré et d'une aide pour retrouver une trace manquante.
- La sauvegarde conserve dessins, programmes et définitions. La reprise avec compte est à vérifier par l'utilisateur ; les captures permettent une reconstruction manuelle. Le guide accepte les explications orales et réserve l'usage en stage aux acquis et au temps disponibles.

## Traces et possibilités techniques

Les calculs ont été repris à la lecture puis confrontés au test de référence dans [tests/minecraft.test.cjs](../tests/minecraft.test.cjs).

| Cas                                                           | Résultat                                                                                            |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Référence : droite, puis trois appels suivis chacun de gauche | Rails A5, B5, C5, C4, C3, B3 ; arrivée A3 sud                                                       |
| Coût de la référence                                          | Six placements, six déplacements, quatre virages ; 16 actions dans les deux écritures               |
| Taille des écritures                                          | 16 blocs d'action déroulés ; sept blocs avec définition et répétitions selon la convention du cours |
| Suppression du dernier gauche                                 | Mêmes rails et même case A3, mais orientation ouest ; état final différent                          |
| Variante : deuxième virage entre tronçons changé en droite    | Rails A5, B5, C5, C4, C3, D3 ; arrivée E3 nord ; six déplacements et quatre virages                 |

Le test simule cette référence professeur, définie dans le test lui-même. Il ne valide ni les programmes personnels des élèves ni le moteur Code.org ; le guide a donc aussi été relu indépendamment des assertions.

La configuration Hero 12 conservée dans `browser-artifacts/audit-minecraft-2026-10-18/levels.json` confirme le monde de 20 × 20 cases, l'Agent initialement en [10, 19] nord, les deux définitions fournies, les répétitions de 2 à 10 et les commandes utilisées. La capture `hero12-motif-compact.png` du même dossier a été réexaminée : elle montre la pile de référence et les rails réalisés. Les essais existants sont réutilisés conformément au périmètre demandé.

La variante E3 nord reste un calcul de grille, sans nouvelle exécution revendiquée. Sa faisabilité sur le terrain choisi doit être vérifiée avant l'essai, comme le demandent le cours et le guide. Aucun besoin technique non disponible dans la palette n'a été identifié.

## Rendu, intégration et limites

Le SVG, sa description et la consigne concordent. Les captures `plan-320.png` et `comparaison-320.png` dans `browser-artifacts/codecraft-catalog-qa-TwwaHD/` ont été réexaminées : grille et repères lisibles, consignes sans débordement visible. Les autres captures d'intégration sont conservées comme preuves existantes, sans nouvelle recette navigateur pendant cette revue.

Le manifeste, le parcours et le test de navigation placent le projet après la mission 7, dans Concevoir et tester. Le dernier module ne propose pas de neuvième mission. Les liens d'activité ont été résolus dans les sources et leurs quatre cibles existent.

Le journal `browser-artifacts/mission8-check.log` confirme 242 tests Node réussis, sans échec. Le rapport `browser-artifacts/run-6li3e8/summary.json` confirme les sept suites navigateur réussies. Aucun contenu applicatif n'ayant changé, ces contrôles ne sont pas relancés pour la documentation. Formatage, liens locaux modifiés et diff documentaire sont contrôlés.

Aucun nouveau test des 50 niveaux, aucune vérification de reprise avec un compte et aucun essai avec élèves pendant cette revue. Une revue transversale reste distincte de ce contrôle du dernier chapitre.

## Suite

Contrôler la cohérence des huit missions : prérequis, transitions, charge de travail, répétitions utiles et bilan final. Modèle conseillé : Astra High. D'éventuelles corrections peuvent ensuite être appliquées en Sol High.

Ce contrôle est désormais consigné dans la [revue transversale](revue-transversale-minecraft.md). Il relève une correction de l'orientation dans le parcours pour l'élève autonome, sans remettre en cause les calculs ni les consignes du projet final.
