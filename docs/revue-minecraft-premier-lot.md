# Revue des deux premières missions Minecraft

18 octobre 2026. Revue des contenus élèves, guides professeur, raccords et captures du [premier lot](integration-minecraft-premier-lot.md), au regard du [cadrage validé](audit-scratch-minecraft.md). La revue initiale n'avait modifié aucun contenu élève ni code. Les deux corrections textuelles ci-dessous sont désormais appliquées.

## Verdict

Conserver les deux missions et leur progression. Les deux corrections de priorité moyenne sont appliquées : la prise en main propre à Hero est conservée dans l'entrée après Scratch et la définition trop restrictive du trajet est retirée. Aucune refonte ni nouvelle série de tests des 50 niveaux n'est justifiée par ces constats.

## P2 : conserver la distinction Agent/joueur dans le raccourci après Scratch

**Source :** [minecraft-trajets.json](../content/modules/jeux-video/minecraft-trajets.json), `entree-scratch`, puis `agent-joueur` et `mission/mc01-joueur`.

L'encart destiné à l'élève venant de Scratch dit « Commence par le défi sur la grille ». Cela lui fait sauter l'explication suivante : les blocs commandent l'Agent, tandis que les flèches du clavier commandent Alex ou Steve après le lancement. Les connaissances de Scratch ne garantissent pas cette connaissance de Hero. En suivant le raccourci, l'élève arrive au niveau 3 puis doit déplacer son personnage et expliquer la distinction entre blocs et clavier sans avoir reçu cette prise en main.

La consigne de Code.org peut aider, mais le parcours autonome CodeCraft doit conserver cette information essentielle dans son propre chemin abrégé. Il n'est pas nécessaire d'imposer le niveau 1 à un élève expérimenté.

**Correction proposée :** placer la distinction Agent/blocs et joueur/flèches dans un court repère commun, ou la rappeler dans l'encart de raccourci. Autoriser ensuite le saut de l'essai guidé du niveau 1. Aligner le diagnostic professeur : on abrège les rappels de programmation, tout en vérifiant que l'élève identifie les deux personnages et leurs commandes.

**Critère de clôture :** en suivant uniquement le chemin annoncé après Scratch, l'élève reçoit les commandes nécessaires pour terminer Hero 3, sans devoir revenir chercher une explication qu'on lui a proposé de sauter.

## P2 : distinguer trajet identique et suite d'actions identique

**Source :** [minecraft-repetitions.json](../content/modules/jeux-video/minecraft-repetitions.json), `autonomie/mc02-preuve`.

L'indice affirme : « Même trajet signifie mêmes actions dans le même ordre, depuis le même départ. » C'est trop restrictif. Sur la grille, ajouter tourner à droite puis tourner à gauche avant un déplacement conserve les cases parcourues et l'orientation finale, mais ajoute deux actions. Le nombre d'actions et le trajet ne sont donc pas interchangeables. Cette confusion touche précisément l'objectif de la mission : distinguer écriture, exécution et déplacement.

Les programmes A et B fournis sont corrects : une fois la boucle développée, ils exécutent effectivement la même suite. Le défaut porte sur la généralisation dans l'indice, pas sur leurs résultats.

**Correction proposée :** demander de développer la boucle et de comparer les actions dans cet exercice précis, depuis le même départ. Par exemple : « Développe ta boucle dans le carnet : retrouves-tu les mêmes actions dans le même ordre ? Compare aussi les cases parcourues et la direction finale. » Garder la distinction entre réduction de l'écriture et réduction des déplacements. Le contre-exemple sert à contrôler la correction ; il n'est pas nécessaire de l'ajouter au cours élève.

**Critère de clôture :** l'aide explique comment vérifier la version développée sans définir tout trajet identique comme une suite d'actions identique. Un programme avec deux rotations qui s'annulent n'est plus exclu à tort de la catégorie « même trajet ».

## Éléments validés dans le périmètre de la revue

- La grille correspond aux consignes : départ C4 nord ; trace de base C3 nord, C3 est, D3 est, E3 est ; variante à gauche A3 ouest ; autre départ C2 est donnant D4 sud.
- Les deux écritures de la mission 2 aboutissent à E2 sud, avec quatre déplacements et deux rotations. Le comptage annoncé est explicite : six blocs écrits contre quatre, départ exclu dans les deux cas. Le troisième tour aboutit à E4 ouest.
- Les explications distinguent rotation et déplacement, conservent l'état entre deux tours et n'assimilent pas réduction du code et vitesse du jeu.
- Le chemin débutant introduit les blocs, l'orientation et la répétition sur place. Les réponses sont repliées. L'apport après Scratch porte sur la trace et la justification d'un critère, conformément au cadrage.
- L'inventaire conservé de Hero 1, 3, 4 et 5 confirme la distinction joueur/Agent et les commandes requises. La comparaison développée peut rester sur papier si le niveau restreint l'écriture.
- Les liens des niveaux correspondent à leurs activités. La navigation du parcours contient seulement les deux missions disponibles. La fin annonce honnêtement la suite à rédiger.
- Le carnet et les captures permettent une reconstruction manuelle. Le texte ne promet ni export importable ni sauvegarde durable anonyme. La reprise avec compte reste à vérifier dans l'usage réel.

## Vérifications et limites

Lecture des deux modules complets, du parcours, de l'audit, des tests Minecraft et des changements du rendu des liens externes. Recalcul des traces et comparaison avec l'inventaire local `browser-artifacts/audit-minecraft-2026-10-18/levels.json` : les vérifications existantes sont réutilisées, sans nouvelle recette systématique de Code.org.

Captures existantes examinées : `minecraft-trajets-activity-320.png` et `minecraft-repetitions-activity-390.png`, dans `browser-artifacts/run-CKELUb/student-browser/codecraft-catalog-qa-D0pPdR/`. Les textes ne débordent pas sur ces vues. Les repères de la grille deviennent petits à 320 pixels ; ce point de confort ne constitue pas un blocage démontré et ne motive pas à lui seul une refonte.

La validation applicative complète antérieure reste celle du premier lot : 236 tests Node et sept suites navigateur. Le rapport navigateur existant confirme les sept suites réussies. Aucun test applicatif n'est relancé pour cette revue documentaire. Les tests et captures ne démontrent pas à eux seuls l'autonomie d'un élève réel.

## Suite

Les deux corrections ciblées sont appliquées : l'encart après Scratch rappelle les deux personnages et leurs commandes avant d'autoriser le saut du niveau 1 ; le diagnostic professeur est aligné. L'indice de la mission 2 demande de comparer la boucle développée, les cases parcourues et la direction finale, sans donner une définition générale fausse du trajet.

Catalogue régénéré puis validé : 84 modules, neuf parcours. Formatage et diff contrôlés. L'encart corrigé a été examiné à 1280 et 320 pixels dans `browser-artifacts/codecraft-catalog-qa-9EcXhO/` : texte lisible sans débordement horizontal. Le lancement Chrome dans le bac à sable a échoué ; la capture ciblée hors du bac à sable a réussi. Aucun changement fonctionnel ni assertion dépendant des formulations remplacées ; les suites générales n'ont pas été relancées.

La suite est la rédaction de la mission 3. Aucun commit ni push effectué.
