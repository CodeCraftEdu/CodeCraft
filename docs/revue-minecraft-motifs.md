# Revue de la mission Composer un motif avec des boucles

18 octobre 2026. Revue de la [mission 5](../content/modules/jeux-video/minecraft-motifs.json), de son guide professeur, de la grille et des références de Hero 12. Voir le [rapport d'intégration](integration-minecraft-motifs.md).

## Verdict

La revue a identifié une correction ciblée pour rendre la première vérification autonome : expliquer comment observer la fin de la ligne dans Hero 12. Cette correction est appliquée ; voir le suivi ci-dessous. Aucun défaut de calcul ou de corrigé identifié. La composition des boucles, la procédure et le défi original sont conservés.

Seule la documentation a été modifiée pendant la revue initiale. Le suivi distingue la correction du cours et sa vérification ultérieure.

## P2 : rendre observable l'arrivée demandée dans Hero 12

Localisation : bloc `compter`, tâche `mc05-produire` (ligne 52 du module), puis `mc05-comparer-six`.

Les consignes demandent de comparer les cases construites et l'arrivée après les six déplacements. Or, dans la capture de l'essai réel conservée sous `browser-artifacts/audit-minecraft-2026-10-18/hero12-boucles.png`, la ligne se poursuit au-delà du bord droit de la vue et l'Agent n'est plus visible. La capture `hero12-procedure-angle.png` montre aussi le tronçon vertical au bord droit. La géométrie du programme est correcte, mais la vue initiale ne permet pas à l'élève de constater seul tous les résultats demandés.

Le guide professeur connaît cette limite, mais propose seulement de suivre les déplacements et de conserver les captures. Le texte élève ne donne aucune manipulation pour retrouver l'Agent à l'écran. Les tests de trace, qui ne simulent pas la caméra de Code.org, ne couvrent pas ce problème.

Correction recommandée : ajouter au premier essai une manipulation de visualisation vérifiée permettant de retrouver l'Agent et les rails, puis la réutiliser pour la comparaison. Si cette manipulation est trop contraignante, conserver la comparaison de six motifs sur papier et utiliser un tracé compact observable pour la vérification dans le jeu. Ne pas présenter une manipulation de caméra comme déjà testée : elle ne l'a pas été pendant cette revue.

La difficulté concerne l'observation, pas la possibilité de construire les six rails. Elle ne justifie ni une refonte du chapitre ni une nouvelle exploration des 50 niveaux.

## Points vérifiés

- La boucle intérieure de trois recommence à chaque tour extérieur : six placements et six déplacements. Sans action entre les groupes, une boucle simple de six déroule les mêmes commandes. Le chapitre ne présente pas l'imbrication comme une optimisation automatique.
- La première définition modifiable contient placer puis avancer, répété trois fois. Le programme principal appelle deux fois cette définition et tourne à gauche après chaque appel. Depuis le départ nord, les tronçons vont vers l'est puis le nord, et la direction finale est l'ouest.
- Les captures réelles de l'audit montrent les emboîtements et les appels annoncés. Le cours utilise les définitions fournies, leur nom visible et leurs appels, sans imposer un paramètre ou un menu de création absent.
- La grille originale utilise explicitement deux placements par appel. Les rails B4, C4, D4, D3 et l'arrivée D2 ouest sont corrects. Retirer le seul dernier virage conserve les rails et la case, avec une direction finale nord. Inverser avancer/placer donne C4, D4, D3, D2 et conserve D2 ouest.
- La suppression du seul dernier virage est une comparaison sur papier ; elle ne demande pas de supprimer dans l'éditeur une occurrence particulière d'un bloc répété.
- Le SVG place le pion en B4 nord. Les définitions et programmes restent lisibles dans les captures mobiles disponibles, avec des indentations distinctes. La variante compacte est séparée de la carte de Code.org et ses réponses sont repliées après les tâches.
- La progression reprend la distinction définition/appel de la mission 4 puis ajoute l'emboîtement et les effets de l'ordre des commandes. L'intérêt après Scratch porte bien sur ces raisonnements. Le guide permet un usage ponctuel pendant le stage et distingue le niveau libre d'une validation automatique.
- La conservation prévoit la définition et le programme principal. Reset est distingué du retrait des commandes ; aucun export importable n'est promis.

## Vérifications et limites

Lecture complète du module, du guide, du parcours, du SVG, du test Minecraft et du rapport d'intégration. Recalcul des variantes de la grille et confrontation aux traces du test. Réexamen des deux captures de Hero 12 citées ci-dessus ; les captures CodeCraft à trois largeurs et celles des blocs de code à 320 pixels, examinées lors de l'intégration, sont réutilisées.

Le rapport `browser-artifacts/run-1AyaVj/summary.json` confirme le succès des sept suites navigateur. La validation précédente comprend 239 tests Node, le formatage et le lint réussis. Aucun contenu applicatif n'a changé depuis ; ces suites ne sont pas relancées pour une revue documentaire. Leur succès n'établit pas la visibilité du résultat dans Code.org.

Aucune nouvelle exécution de Hero 12 ni observation avec des élèves pendant cette revue. La reprise avec un compte Code.org reste une limite déjà documentée.

## Correction appliquée

Le suivi de la vue a été vérifié dans l'essai de référence conservé sur [Code.org](https://studio.code.org/c/2967719696/edit), sans modifier ni remixer ce programme. Après exécution des deux appels de trois rails, les flèches sous le jeu déplacent Alex ou Steve et font suivre la vue. Le déplacement vers la droite retrouve le raccord ; le déplacement vers le haut suit le second tronçon. La fin des rails et l'Agent deviennent visibles. Les flèches du clavier ont également été essayées. Capture : `browser-artifacts/audit-minecraft-2026-10-18/hero12-vue-joueur.png`.

Les tâches `mc05-produire`, `mc05-comparer-six` et `mc05-angle` expliquent désormais de suivre les rails avec le joueur pour observer le résultat. Le guide professeur reprend cette manipulation. Les programmes, nombres de répétitions et réponses du défi ne changent pas. Cette vérification porte sur la vue dans l'essai d'angle à six placements ; elle n'est pas présentée comme une nouvelle exécution de la ligne imbriquée.

Catalogue régénéré et validé, formatage contrôlé, six tests Minecraft réussis. Captures des consignes corrigées à 1280 et 320 pixels dans `browser-artifacts/codecraft-catalog-qa-YzigFG/`, réexaminées sans débordement visible. La correction étant textuelle, les suites complètes ne sont pas relancées conformément aux règles du dépôt.

## Suite

La correction de visualisation est terminée. La prochaine réalisation est la mission 6 sur les décisions selon le chemin disponible dans Aquatic, recommandée en Sol High. Aucun commit ni push effectué pendant cette revue ou sa correction.
