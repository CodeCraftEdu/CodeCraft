# Minecraft : concevoir et tester une automatisation

18 octobre 2026. Mission 8 rédigée et intégrée après la [revue de la mission 7](revue-minecraft-strategies.md), selon le [cadrage validé](audit-scratch-minecraft.md). Les huit missions du parcours sont disponibles ; l'intégration de la dernière ne remplace pas sa revue pédagogique.

## Projet intégré

Le module [minecraft-automatisation.json](../content/modules/jeux-video/minecraft-automatisation.json) est un projet, dernier module du [parcours](../content/pathways/minecraft-algorithmes.json). Il ouvre une dernière partie Concevoir et tester.

- Préserver le travail antérieur dans Hero 12, remettre le terrain au départ et distinguer de nouveau les commandes de l'Agent des déplacements du joueur.
- Concevoir six rails distincts en trois tronçons de deux, avec deux changements de direction dans le tracé. Prévoir séparément la case et la direction finales de l'Agent.
- Écrire et vérifier une première version, puis une seconde organisation donnant les mêmes rails et le même état final. Au moins une version utilise une définition et ses appels.
- Comparer selon un critère choisi, avec une convention explicite de comptage des blocs qui inclut le contenu des définitions appelées. Distinguer ce comptage des actions exécutées.
- Modifier un virage entre deux tronçons, prévoir un autre tracé de six rails puis essayer depuis le même terrain initial. Adapter si nécessaire l'organisation des appels pour ne changer que le virage retenu.
- Relier cette construction aux décisions d'Aquatic conservées dans le carnet et à un contre-exemple de la mission 7.

La [grille de préparation](../images/minecraft-automatisation.svg) est vide : A5 correspond au départ de l'Agent, orienté nord. Elle sert à dessiner les rails, les contraintes observées et l'arrivée. Elle ne fournit pas un tracé à recopier et ne décrit pas tout le terrain de Code.org.

Aucune pile complète n'est donnée dans le contenu élève. Des aides repliées renvoient au tronçon, à la comparaison et à un essai conditionnel. Un lien retrouve le contre-exemple de la mission 7 si les traces manquent. Les prérequis déclarent la trace, la procédure, la comparaison et la décision. Le guide prévoit la justification orale et l'utilisation ponctuelle pendant le stage.

## Référence professeur et variantes

La référence déjà exécutée lors de l'audit de Hero 12 est réutilisée. Sa capture est `browser-artifacts/audit-minecraft-2026-10-18/hero12-motif-compact.png` : la première définition répète deux fois placer un rail puis avancer ; le programme principal tourne à droite, puis répète trois fois l'appel suivi d'un gauche.

Sur la grille relative, les rails sont A5, B5, C5, C4, C3, B3. L'Agent termine A3 sud : six placements, six déplacements et quatre virages. Les deux changements de direction entre rails sont distincts du droit initial et du dernier gauche, qui n'ajoute plus de rail.

La version déroulée contient 16 blocs d'action et exécute 16 actions. La version avec procédure et boucle principale contient sept blocs selon la convention annoncée : trois dans la définition et quatre sous le départ, cadres définir et départ exclus. Elle exécute les mêmes 16 actions. Supprimer seulement le dernier gauche conserve les rails et la case A3, mais donne une direction finale ouest. Ces versions ne sont donc pas équivalentes sur tout l'état final.

Une variante de calcul conserve trois appels séparés, avec gauche après le premier, droite après le deuxième et gauche après le troisième. Les rails deviennent A5, B5, C5, C4, C3, D3 et l'arrivée E3 nord. Le guide demande de vérifier le terrain réel avant l'essai. Cette variante est simulée, sans nouvelle exécution revendiquée dans Code.org.

## Possibilités réelles et reprise

Les vérifications existantes de Hero 12 sont réutilisées : deux définitions modifiables sans paramètres, répétitions de 2 à 10, placements, déplacements et rotations. La palette ne fournit pas les tests de chemin ou de sol d'Aquatic. Le projet ne tente donc pas de réunir toutes les fonctionnalités des deux outils ; les traces du carnet permettent d'expliquer le transfert.

Le suivi de la vue par le joueur a déjà été vérifié lors de la mission 5. Les consignes le reprennent pour rendre les rails et l'Agent observables. Reset est demandé avant chaque essai et conserve les blocs. Le caractère libre de Hero 12 est expliqué par la comparaison au dessin, sans transformer son indicateur de fin en validation du projet.

Les captures des deux organisations doivent inclure les définitions appelées. La reprise avec compte est à vérifier par l'utilisateur ; les dessins et captures permettent une reconstruction manuelle. Aucun compte, partage public, import automatique, nouveau test du moteur ou essai avec élèves n'est revendiqué pendant cette intégration.

## Raccordement et contrôles

Le manifeste et le parcours déclarent le module. La mission 7 mène au projet ; le dernier module ne propose pas de mission fictive après lui. Les compétences existantes sont réutilisées. Le catalogue régénéré contient 90 modules et neuf parcours.

Le contrôle ciblé élève intermédiaire réussit : 101 tests, dont neuf tests Minecraft, avec formatage, lint et catalogue validés. Les aides de reprise et le prérequis de décision ont été complétés ensuite ; le contrôle complet porte sur ce contenu final.

Le test de référence vérifie l'expansion des répétitions et appels, les coûts 7/16, les six cases distinctes, l'état final, l'effet du dernier gauche et la variante de tracé. Il simule les règles du dessin, pas le moteur de Code.org. Les tests de navigation suivent les huit missions et vérifient le lien exact Hero 12. Le scénario élève capture le projet et son plan aux trois largeurs usuelles.

Captures complémentaires dans `browser-artifacts/codecraft-catalog-qa-TwwaHD/` : introduction et plan à 1280, 390 et 320 pixels, comparaison et aide Aquatic à 320 pixels. Les vues à 320 et 1280 pixels ont été examinées : grille vide sans solution révélée, pion en A5 nord, consignes et liens lisibles, pas de débordement visible. Les captures du scénario élève dans `browser-artifacts/run-6li3e8/student-browser/codecraft-catalog-qa-WXWcvt/` complètent ce contrôle.

Le contrôle complet `npm run check`, lancé hors du bac à sable, réussit en un seul passage : formatage, lint, 242 tests Node et les sept suites navigateur. Rapport : `browser-artifacts/run-6li3e8/summary.json` ; journal : `browser-artifacts/mission8-check.log`. Les liens locaux et le diff ont été contrôlés. Le serveur local sert bien le catalogue contenant la mission 8. Seule la documentation est complétée après le contrôle applicatif.

## Suite

La [revue pédagogique de la mission 8](revue-minecraft-automatisation.md) est réalisée : aucune correction nécessaire identifiée dans son périmètre. La [revue transversale du parcours](revue-transversale-minecraft.md) a ensuite conduit à rendre le choix d'entrée visible à l'élève autonome, avec un accès direct au projet et des raccourcis vers les activités. La préparation du projet convient également à un premier accès à Hero 12. Aucun commit ni push effectué pendant cette intégration.
