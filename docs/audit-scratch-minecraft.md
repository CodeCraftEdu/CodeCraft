# Audit Scratch et proposition Minecraft via Code.org

18 octobre 2026. Positionnement et huit missions validés par l'utilisateur. Cadrage consolidé après vérification ciblée de Hero 12 et de la reprise du travail. Aucun essai avec des élèves n'est déclaré.

Depuis cet audit, les huit missions ont été rédigées et intégrées : voir le [compte rendu du premier lot](integration-minecraft-premier-lot.md), la [mission 3 sur les passages](integration-minecraft-passage.md), la [mission 4 sur les procédures](integration-minecraft-procedures.md), la [mission 5 sur les motifs composés](integration-minecraft-motifs.md), la [mission 6 sur les décisions de chemin](integration-minecraft-decisions.md), la [mission 7 sur les repères et les limites d’une stratégie](integration-minecraft-strategies.md) et le [projet final d’automatisation](integration-minecraft-automatisation.md). Les revues individuelles et la [revue transversale](revue-transversale-minecraft.md) sont réalisées. Le chemin adapté aux acquis, relevé par cette dernière, est désormais visible et accessible aux élèves dans le parcours.

## Décision proposée

Un complément Minecraft a un intérêt, à condition de viser **la conception, la comparaison et la justification de solutions**, avec un accès adapté aux acquis. Il ne constitue pas un niveau supérieur à Scratch sur toutes les dimensions. L'environnement est même plus restreint pour créer des jeux, manipuler des données et organiser librement un programme.

Titre proposé : **Minecraft : résoudre et automatiser**, avec la mention visible **Avec les activités de Code.org**. Huit missions, dont une entrée courte pour les élèves expérimentés. Scratch demeure le parcours principal de création de jeux ; Python et JavaScript constituent des progressions distinctes. Designer reste un prolongement facultatif.

Le bénéfice attendu après Scratch : suivre un état spatial comprenant une orientation, comparer des solutions selon un critère explicite, décrire les conditions de départ et le résultat d'une procédure, puis déterminer dans quelles situations une stratégie fonctionne. La simple présence de boucles, conditions ou fonctions ne serait pas une nouveauté.

## Périmètre et méthode

- Lecture des deux parcours sources et des objectifs, prérequis, leçons, activités et critères des 24 modules Scratch référencés. Lecture des activités imbriquées, notamment les ateliers repliés et les paramètres facultatifs.
- Examen de la navigation, des critères affichés et des cases à cocher dans le rendu actuel.
- Inventaire HTTP des configurations publiques des **50 niveaux** : Adventurer 14, Hero's Journey 12, Voyage Aquatic 12, Designer 12. Les 50 réponses ont fourni une configuration exploitable le 18 octobre 2026.
- Observation dans le navigateur des interfaces finales de Designer et Hero's Journey ; ouverture de « Show Code » dans Hero's Journey.
- Confrontation avec le portail officiel et les sources officielles des blocs déjà recueillies lors de l'analyse précédente. La branche `staging` du code public n'est pas assimilée à la version déployée : les palettes des niveaux et les observations de l'interface priment.

Ce travail évalue le contenu et les possibilités exposées. Il ne mesure pas les acquis d'un élève réel et ne prétend pas avoir exécuté les 50 puzzles ou construit les huit futures missions. Les configurations relevées sont conservées localement dans `browser-artifacts/audit-minecraft-2026-10-18/levels.json`, ignoré par Git.

## 1. Progression Scratch effectivement présente

Les sources sont [Premiers pas avec Scratch](../content/pathways/scratch-debutants.json) et [Mission balises](../content/pathways/scratch-avances.json). L'ordre ci-dessous correspond aux données actuelles, pas à une ancienne roadmap.

### Premiers pas avec Scratch : 17 modules

| Ordre | Module                                                                                | Travail réellement demandé                                                                                                                                                                 |
| ----- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | [Prendre en main Scratch](../content/modules/jeux-video/scratch-decouverte.json)      | Choisir le sprite, assembler un départ et une action, prévoir un changement de distance, télécharger et recharger un `.sb3`.                                                               |
| 2     | [Déclencher et enchaîner](../content/modules/jeux-video/scratch-actions.json)         | Distinguer événement et actions, changer leur ordre, comprendre une pause, inventer une courte séquence.                                                                                   |
| 3     | [Piloter](../content/modules/jeux-video/scratch-pilotage.json)                        | X/Y, signes, déplacement relatif aux axes et position fixée, commandes clavier, départ reproductible.                                                                                      |
| 4     | [Boucles](../content/modules/jeux-video/scratch-boucles.json)                         | Répétition bornée ou continue, corps de boucle, action après la boucle, quantité et rythme.                                                                                                |
| 5     | [Réactions](../content/modules/jeux-video/scratch-reactions.json)                     | Condition vraie/fausse, capteur de touche ou contact, surveillance dans une boucle, distinction capteur/événement.                                                                         |
| 6     | [Variables](../content/modules/jeux-video/scratch-variables.json)                     | Score global, initialisation et accumulation, placement des modifications, absence de points spontanés.                                                                                    |
| 7     | [Fin de partie](../content/modules/jeux-video/scratch-fin-partie.json)                | Comparaisons et seuils atteignables, victoire/défaite, arrêt et réinitialisation.                                                                                                          |
| 8     | [Premier mini-jeu](../content/modules/jeux-video/scratch-mini-jeu.json)               | Assembler le jeu horizontal déjà construit, choisir des règles dans des limites indiquées, rédiger une notice et tester les deux fins.                                                     |
| 9     | [Vies et contacts](../content/modules/jeux-video/scratch-vies-contacts.json)          | Un dégât par contact continu, attente de séparation, mouvement dans une autre pile, compteur borné à zéro. L'atelier pratique est replié.                                                  |
| 10    | [Coordination](../content/modules/jeux-video/scratch-coordination.json)               | Message interne, émetteur/récepteur, émission avec ou sans attente, coordination indépendante d'un délai arbitraire.                                                                       |
| 11    | [Blocs personnalisés](../content/modules/jeux-video/scratch-blocs-personnalises.json) | Définition/appel, réutilisation et modification unique ; paramètre nombre/texte en bonus seulement.                                                                                        |
| 12    | [Clones](../content/modules/jeux-video/scratch-clones.json)                           | Modèle et copies temporaires, héritage de position/visibilité, placement répété, suppression.                                                                                              |
| 13    | [Clones mobiles](../content/modules/jeux-video/scratch-clones-mobiles.json)           | Création et comportement séparés, boucle jusqu'à une limite, fréquence/vitesse/quantité ; hauteur aléatoire en bonus. Atelier replié.                                                      |
| 14    | [Temps et difficulté](../content/modules/jeux-video/scratch-temps-difficulte.json)    | Temps mesuré et durée choisie, refus des points après la limite, comparaison d'un réglage à la fois.                                                                                       |
| 15    | [Niveaux et états](../content/modules/jeux-video/scratch-niveaux-etats.json)          | Transition unique, état changé avant le message, protections des actions et reprise. Atelier replié.                                                                                       |
| 16    | [Débogage](../content/modules/jeux-video/scratch-debogage.json)                       | Attendu/observé, hypothèse, modification isolée, erreurs d'ordre, d'initialisation et de seuil, vérification au redémarrage.                                                               |
| 17    | [Projet personnel](../content/modules/jeux-video/scratch-projet-personnel.json)       | Choisir un petit jeu faisable, planifier, construire progressivement sans solution intégrale, tester, expliquer et conserver sa version. Toutes les notions avancées ne sont pas imposées. |

Ce parcours dépasse largement une simple découverte. Il combine une progression cumulative jusqu'au premier mini-jeu, des essais indépendants et des ressources de consultation. Son dernier projet autorise un périmètre réduit : arriver à la dernière page ne prouve donc pas la maîtrise des clones, des paramètres et des états.

### Scratch avancé : sept chapitres du même jeu

| Ordre | Chapitre                                                                     | Approfondissement observable                                                                                                          |
| ----- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | [Commandes](../content/modules/jeux-video/scratch-mission-commandes.json)    | Déplacement continu sur deux axes, bornes explicites, réglage de vitesse et retour à une version sauvegardée.                         |
| 2     | [Balises](../content/modules/jeux-video/scratch-mission-balises.json)        | Score et collecte répartis entre scène et objet, alternative `si/sinon`, six activations, essais autour du seuil.                     |
| 3     | [Vies](../content/modules/jeux-video/scratch-mission-vies.json)              | Surveillance indépendante, séparation après contact, priorité des fins, essais de la dernière vie et du redémarrage.                  |
| 4     | [Clones](../content/modules/jeux-video/scratch-mission-clones.json)          | Remplacement explicite de l'ancien danger, création périodique, hauteur aléatoire, suppression et variable de vitesse commune.        |
| 5     | [Messages](../content/modules/jeux-video/scratch-mission-messages.json)      | Transition de secteur unique, deux réceptions, score conservé ; test ciblé prouvant que le message n'est pas réémis.                  |
| 6     | [États](../content/modules/jeux-video/scratch-mission-etats.json)            | Décision de fin séparée de l'annonce, protections des actions et des créations après attente, nettoyage et relance pendant l'annonce. |
| 7     | [Tests personnels](../content/modules/jeux-video/scratch-mission-tests.json) | Carnet d'essais, seuils, panne volontaire, fréquence contre vitesse, changement personnel vérifié après réouverture.                  |

Mission balises approfondit surtout l'intégration et la fiabilité. Il ne transforme pas automatiquement chaque notion abordée dans les 17 modules en prérequis : son entrée demande le repérage de Scratch, les boucles et les conditions. Il ne faut pas imposer « 17 modules puis 7 » à tout élève, ni attribuer à quelqu'un qui a seulement fait Mission balises la maîtrise des blocs personnalisés et du chronomètre.

## 2. Acquis raisonnablement attendus et limites

Pour un élève qui a réalisé les activités pertinentes **et sait les expliquer sans solution complète**, on peut attendre :

- Lire et produire des séquences, répétitions bornées/continues/conditionnelles et décisions ; prévoir une modification simple.
- Comprendre événements, variables, comparaisons, initialisation, comptage et transitions de jeu.
- Coordonner plusieurs piles, distinguer leurs propriétaires, gérer des copies et leurs interactions.
- Concevoir un petit jeu avec des règles atteignables, une notice et une reprise propre.
- Conduire une enquête ciblée, tester les seuils et les redémarrages, conserver les versions et comparer un réglage.

Les paramètres sont facultatifs ; les listes/tableaux, fonctions avec valeur de retour, recherche de chemin générale et analyse de complexité ne sont pas enseignés par ces parcours. Les boucles imbriquées ne constituent pas une progression explicitement travaillée ici. Les déplacements sont surtout cartésiens : l'effet d'une rotation sur une suite d'actions relatives reste à travailler.

Les essais et la décomposition ne sont **pas absents** de Scratch. Ce qui manque surtout pour le complément envisagé est une pratique systématique de la trace spatiale, de la comparaison de solutions sous contrainte et des hypothèses de validité d'un algorithme. Ces compétences pourraient aussi être enseignées dans Scratch : Minecraft offre un contexte utile, pas une exclusivité pédagogique.

## 3. Possibilités réelles de Minecraft Code.org

Le [portail officiel](https://code.org/en-US/minecraft) distingue les quatre tutoriels navigateur des activités Minecraft Education. Le présent projet reste limité aux quatre tutoriels.

| Activité                                                                             | Possibilités constatées                                                                                                                                                                                         | Limites importantes pour la proposition                                                                                                                                                             |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Adventurer](https://studio.code.org/courses/mc/units/1/lessons/1/levels/1)          | Avancer/tourner, construire/détruire, boucles ; lave devant aux niveaux 11–12 ; test de bloc devant au niveau libre 14.                                                                                         | Programmation d'Alex/Steve. Ne pas parler de l'Agent pour ce tutoriel. Les commandes disponibles changent selon le niveau.                                                                          |
| [Hero's Journey](https://studio.code.org/courses/hero/units/1/lessons/1/levels/1)    | Agent programmé, joueur déplacé au clavier ; boucles, placement/destruction ; procédures fournies aux niveaux 8–11, deux définitions modifiables au niveau libre 12.                                            | Aucun test de chemin/terrain dans les palettes relevées de Hero. Paramètres désactivés ; pas de variables générales dans la palette. Les procédures fournies de certains puzzles sont verrouillées. |
| [Voyage Aquatic](https://studio.code.org/courses/aquatic/units/1/lessons/1/levels/1) | Répéter jusqu'au but, répétition comptée, chemin disponible aux niveaux 7–8, terrain aux niveaux 9–10 ; construction conditionnelle au niveau 11.                                                               | Pas d'Agent. Une palette propre à chaque puzzle ; le niveau libre 12 ne reprend pas toutes les boucles spécialisées des puzzles.                                                                    |
| [Designer](https://studio.code.org/courses/minecraft/units/1/lessons/1/levels/12)    | Départs au lancement/jour/nuit ; comportements d'espèces à l'apparition, au contact, à l'utilisation, à l'attaque, au jour et à la nuit ; déplacement, poursuite/fuite, attente, apparition/disparition, score. | Aucun éditeur général de règles, de terrain ou de données constaté. Pas de blocs généraux de variables/listes, de procédures paramétrées ou de test de score dans la palette finale observée.       |

**JavaScript :** les 50 configurations indiquent `droplet: false` et `editCode: false`. Dans Hero 12, « Show Code » ouvre effectivement un affichage textuel sans zone de saisie. Cela concorde avec [ShowCodeToggle](https://github.com/code-dot-org/code-dot-org/blob/staging/apps/src/templates/ShowCodeToggle.js) et [GeneratedCode](https://github.com/code-dot-org/code-dot-org/blob/staging/apps/src/templates/feedback/GeneratedCode.jsx). On peut éventuellement observer une traduction ; on ne peut pas bâtir ce parcours sur la saisie de JavaScript.

**Score :** Designer propose réellement « ajouter au score », constaté dans sa palette finale et au niveau 11. Il serait faux de dire qu'il ne sait pas gérer de score. Cela ne signifie pas que l'élève dispose d'une variable libre, d'un seuil de victoire programmable ou du système d'états de Scratch. Le champ de configuration `disableVariableEditing: false` ne prouve pas la présence d'une catégorie Variables dans la palette.

**Automatisation :** l'Agent de Hero peut répéter et composer des commandes. Il n'est pas pour autant un agent capable de détecter n'importe quel obstacle et de planifier seul. Les tests de terrain relèvent ici d'autres tutoriels. Aucun exercice ne doit demander de transporter un programme Hero dans Designer en supposant les environnements interchangeables.

## 4. Doublons et gains attendus

| Compétence                          | État dans Scratch                                  | Rôle pertinent dans Minecraft                                                                                              |
| ----------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Séquences, boucle simple, condition | Déjà enseignées et mobilisées                      | Reprise courte pour débutant, transfert rapide pour élève expérimenté.                                                     |
| Événements, score, interactions     | Déjà largement travaillés                          | Designer peut servir à comparer deux systèmes ; faible nouveauté comme cours obligatoire après Mission balises.            |
| Définir/appeler une procédure       | Déjà enseigné ; paramètre facultatif               | Approfondir ce que la procédure exige au départ et ce qu'elle change, notamment la direction finale.                       |
| Déboguer et tester                  | Déjà enseigné                                      | Réutiliser la méthode sur une trace de position/orientation ; ne pas la présenter comme une première découverte.           |
| État spatial relatif                | Peu développé                                      | Suivre case **et direction**, distinguer tourner et se déplacer, tenir compte des transformations du terrain.              |
| Imbrication de répétitions          | Pas de progression explicite identifiée            | Construire et expliquer un motif composé, prévoir les actions et le raccord entre motifs.                                  |
| Comparaison du coût                 | Pas d'objectif systématique                        | Distinguer nombre de blocs écrits, actions exécutées et longueur du trajet ; justifier un compromis.                       |
| Validité d'une stratégie            | Essais déjà présents, généralisation peu explicite | Distinguer réussite sur une carte et règle valable sur plusieurs situations ; formuler une hypothèse ou un contre-exemple. |

Une boucle qui remplace dix blocs avancer par un seul bloc répéter contenant avancer réduit l'écriture, mais exécute toujours dix déplacements. Une fonction peut simplifier l'organisation sans raccourcir le trajet. La notion d'optimisation doit toujours nommer le critère choisi ; aucun classement fondé sur la rapidité de manipulation de l'élève.

## 5. Proposition de huit missions

Les niveaux ci-dessous sont des supports identifiés dont les palettes ont été vérifiées. Les seules inconnues bloquantes ont fait l'objet des essais ciblés décrits en section 8 ; aucune recette systématique des puzzles n'est engagée. Les missions ne supposent ni carte personnalisable, ni commande absente, ni export de projet entre tutoriels. Les consignes et schémas futurs seront originaux ; les puzzles resteront sur Code.org avec attribution et lien.

### 1 — Prévoir le trajet avant de lancer

- **Supports :** [Hero 1](https://studio.code.org/courses/hero/units/1/lessons/1/levels/1), puis [Hero 3](https://studio.code.org/courses/hero/units/1/lessons/1/levels/3).
- **Prérequis :** aucun acquis de programmation pour l'entrée accompagnée ; savoir manipuler les blocs s'acquiert dans cette entrée.
- **Objectif :** séparer le joueur contrôlé au clavier de l'Agent programmé ; suivre case et orientation après chaque instruction.
- **Défi :** prévoir le point d'arrivée et le sens de l'Agent avant exécution. Expliquer pourquoi tourner ne change pas sa case et pourquoi « avancer » ne signifie pas toujours « monter ».
- **Preuve :** une courte trace correcte, puis une correction expliquée. Pour l'élève Scratch, diagnostic abrégé ; aucun retour imposé sur la définition d'une séquence.

### 2 — Comparer deux programmes pour le même trajet

- **Supports :** [Hero 4](https://studio.code.org/courses/hero/units/1/lessons/1/levels/4) et [Hero 5](https://studio.code.org/courses/hero/units/1/lessons/1/levels/5).
- **Prérequis :** mission 1 et lecture d'une répétition ; découverte de la boucle intégrée à l'aide débutant.
- **Objectif :** repérer un motif et comparer programme développé et programme avec répétition.
- **Défi :** atteindre le même résultat avec deux écritures ; compter séparément blocs de commande et déplacements exécutés. Si une limite de blocs empêche de saisir la version développée, la comparaison se fait sur papier, sans promettre un second programme exécutable dans ce puzzle.
- **Preuve :** expliquer ce qui a diminué et ce qui est resté identique. Ce critère constitue l'approfondissement après Scratch.

### 3 — Construire un passage et localiser une erreur

- **Supports :** [Hero 6](https://studio.code.org/courses/hero/units/1/lessons/1/levels/6), puis [Hero 7](https://studio.code.org/courses/hero/units/1/lessons/1/levels/7), qui propose déjà un programme à réparer.
- **Prérequis :** missions 1–2.
- **Objectif :** raisonner sur le terrain transformé par les commandes et sur les bornes d'une répétition.
- **Défi :** annoncer quelles cases seront couvertes, corriger le programme du pont plus large, expliquer la différence entre nombre de déplacements et cases construites. Le niveau 7 verrouille une partie du programme : les erreurs à modifier devront respecter ces restrictions.
- **Preuve :** indiquer le premier écart entre résultat prévu et observé, puis vérifier le passage après remise à zéro. La méthode de débogage Scratch sert de rappel, pas de nouveau cours.

### 4 — Utiliser une procédure sans se fier à son nom

- **Supports :** [Hero 8](https://studio.code.org/courses/hero/units/1/lessons/1/levels/8), puis [Hero 10](https://studio.code.org/courses/hero/units/1/lessons/1/levels/10).
- **Prérequis :** mission 3 ; distinction définition/appel, à expliquer sur place pour un débutant.
- **Objectif :** décrire « avant l'appel / après l'appel » : position, direction et terrain modifié.
- **Défi :** prévoir les effets des procédures fournies, choisir entre la courte et la longue et composer les appels avec le déplacement nécessaire. Une procédure de pont peut aussi tourner : son nom ne suffit pas à déterminer l'état final.
- **Preuve :** justifier deux appels successifs et repérer un mauvais état de départ. Les définitions verrouillées sont lues, pas présentées comme éditables.

### 5 — Automatiser un motif composé

- **Support :** [Hero 12](https://studio.code.org/courses/hero/units/1/lessons/1/levels/12), avec ses deux définitions modifiables et sa répétition de 2 à 10.
- **Prérequis :** mission 4.
- **Objectif :** composer deux répétitions, puis extraire un tronçon réutilisable dans une procédure.
- **Défi :** depuis le départ initial de l'Agent, tourner à droite puis construire deux groupes de trois rails avec placer puis avancer dans la boucle intérieure. Comparer cette ligne à une répétition simple de six : l'imbrication seule n'apporte pas forcément d'avantage. Déplacer ensuite le tronçon de trois rails dans une procédure ; l'appeler deux fois avec un virage à gauche après chaque appel pour former un angle.
- **Preuve :** annoncer les six placements, distinguer l'état final du tracé visible, expliquer pourquoi un virage entre les groupes change le résultat. Ces constructions et l'appel répété de la procédure ont été exécutés. Une partie du tracé long approche le bord de la vue : privilégier ensuite le motif compact de deux rails par tronçon pour la réalisation personnelle. Aucun remplissage arbitraire d'une surface n'est promis.
- **Difficulté nouvelle :** deux niveaux de répétition et état final réutilisable. Aucun paramètre de fonction ou compteur libre requis.

### 6 — Adapter l'action à ce que le personnage rencontre

- **Supports :** [Aquatic 7](https://studio.code.org/courses/aquatic/units/1/lessons/1/levels/7), puis [Aquatic 8](https://studio.code.org/courses/aquatic/units/1/lessons/1/levels/8). Pour un débutant, courte reprise des niveaux 4–6 sur l'arrêt au but.
- **Prérequis :** trace et boucle ; une condition vraie/fausse est introduite sur place si nécessaire.
- **Objectif :** comparer un itinéraire écrit à l'avance à une décision répétée fondée sur le chemin disponible.
- **Défi :** expliquer à quels endroits la condition est vraie et quelle action elle autorise. Comparer l'ordre « avancer puis tester » à « tester puis avancer » à partir du puzzle réel.
- **Preuve :** un cas vrai et un cas faux, résultat prévu avant lancement, condition d'arrêt identifiée. Le support pilote un personnage, pas l'Agent : la transition d'outil doit être explicite.

### 7 — Éprouver une stratégie et ses limites

- **Supports :** [Aquatic 9](https://studio.code.org/courses/aquatic/units/1/lessons/1/levels/9), [10](https://studio.code.org/courses/aquatic/units/1/lessons/1/levels/10), puis [11](https://studio.code.org/courses/aquatic/units/1/lessons/1/levels/11) selon les besoins.
- **Prérequis :** missions 5–6, notamment répétition et décision.
- **Objectif :** utiliser les repères du terrain, expliquer l'arrêt et comparer des stratégies dans un cadre défini.
- **Défi :** prévoir où les repères colorés ou le type de sol déclenchent une action ; au niveau 11, réunir déplacement, construction et test. Présenter un cas où une règle comme « tourner quand le repère apparaît » deviendrait insuffisante.
- **Preuve :** trace, justification de l'arrêt sur la carte travaillée et limite reconnue. Le contre-exemple peut être un dessin original étudié sur papier : il n'est pas annoncé comme une carte importable dans Code.org. On ne prétend pas avoir programmé un solveur universel de labyrinthe.

### 8 — Réaliser et défendre une petite automatisation

- **Support principal :** [Hero 12](https://studio.code.org/courses/hero/units/1/lessons/1/levels/12). Appui sur les résultats Aquatic conservés dans le carnet.
- **Prérequis :** savoir concevoir un motif, expliquer une procédure, comparer un coût et présenter des essais.
- **Objectif :** choisir une construction limitée, justifier son programme et éprouver une modification personnelle sans solution intégrale.
- **Défi :** depuis le même départ, concevoir sans pile complète fournie un chemin compact de six rails avec deux changements de direction dans le tracé. Trois tronçons de deux rails, séparés par des virages à gauche après l'orientation initiale à droite, constituent une réalisation éprouvée ; cette solution reste une référence professeur. L'élève prépare son dessin, annonce la position et l'orientation finales, puis compare deux organisations du programme produisant son même tracé. Une extension personnelle peut modifier la forme dans la zone disponible, sans imposer une grande construction.
- **Preuve :** résultat conforme, trace du raccord, comparaison selon le critère choisi et nouvel essai depuis un état initial identique. Expliquer également ce que les tests d'Aquatic permettaient et pourquoi cette palette Hero ne les propose pas.
- **Limite assumée :** la réalisation finale ne réunit pas toutes les fonctions des quatre outils. Le dossier de solutions montre les transferts ; aucun compte ni partage public n'est présenté comme preuve de compréhension. L'activité reste courte et peut se terminer en une séance. La reprise suit les choix documentés en section 8 ; sans compte, une capture des blocs permet une reconstruction manuelle, pas un import automatique.

### Prolongement facultatif — Designer

Utiliser [Designer 11](https://studio.code.org/courses/minecraft/units/1/lessons/1/levels/11) et [12](https://studio.code.org/courses/minecraft/units/1/lessons/1/levels/12) pour comparer un événement de contact, un comportement à l'apparition et un gain de score avec leur équivalent Scratch. Demander une explication de la règle et un test, pas refaire un chapitre entier sur les événements.

Pour un débutant motivé par la création, c'est une ouverture possible vers Scratch. Pour quelqu'un qui maîtrise Mission balises, ce prolongement a un apport limité et peut être omis. Aucun projet de plateforme à tableaux, niveaux personnalisables et victoire arbitrairement programmable n'est prévu.

## 6. Deux entrées, sans deux copies du parcours

**Débutant :** suivre les huit missions avec les explications locales nécessaires et quelques puzzles de prise en main. Scratch ne doit pas devenir un prérequis caché. Minecraft donne alors une initiation aux séquences, répétitions, décisions et procédures ; il ne couvre pas tout le parcours Scratch.

**Élève ayant pratiqué Scratch :** faire le diagnostic de la mission 1, puis passer directement au défi de comparaison de la mission 2. La définition d'une boucle, d'un événement ou d'une procédure reste consultable mais ne devient pas une leçon obligatoire. Les missions 3–8 portent sur les traces, raccords, contraintes et justifications.

**Élève qui sait déjà comparer et généraliser :** proposer directement le problème final et évaluer sa justification. Si la difficulté ajoutée reste faible, il n'a pas besoin de faire Minecraft avant de poursuivre son projet Scratch ou d'aborder Python.

La réussite attendue se constate par quatre traces simples : prévision, programme choisi, résultat observé, explication. Un niveau vert sur Code.org ou une case cochée sur CodeCraft ne suffit pas. Une explication orale ou un schéma doit être possible ; la longueur de rédaction ne mesure pas la compréhension.

## 7. Intégration dans CodeCraft

### Place pédagogique

Placer le complément dans le domaine actuel **Jeu vidéo**, à côté des deux offres Scratch, avec le qualificatif « résolution de problèmes ». C'est l'emplacement le plus compréhensible sans créer un domaine pour un unique outil. La présentation du domaine devrait alors citer les défis de programmation, car son texte actuel ne parle que de création de jeux.

La carte du parcours devra expliquer les deux entrées. Ne pas l'annoncer comme « Scratch niveau 3 ». Dans la durée, l'élève peut commencer par Minecraft, approfondir la création dans Scratch, revenir à une mission de comparaison, puis choisir programmation textuelle ou projet plus ambitieux. Cet ordre n'est pas un passage obligé.

Pour le stage, un lien peut ouvrir directement une mission ou son aide au moment utile. Les huit missions sont une proposition autonome hors stage ; elles ne s'ajoutent pas comme huit cours obligatoires à la semaine existante. Les correspondances jour par jour restent dans la préparation professeur.

### Système existant et changements éventuels

- Les parcours définissent un ordre (`moduleIds`) et des parties (`chapters`). Les modules exposent `skillIds`, `prerequisiteSkills`, `masteryCriteria`, aides et guide professeur : ces structures suffisent à représenter la proposition.
- Les cases élève sont stockées dans un `Set` en mémoire ([app.js](../app.js), [blocks.mjs](../src/student/blocks.mjs)). Elles peuvent rester cochées pendant la navigation du document, mais ne constituent pas un suivi durable après rechargement. Aucun passeport de compétences ou déverrouillage automatique n'existe ici.
- Les prérequis et critères sont affichés dans le [routeur](../src/student/router.mjs). Ils n'effectuent pas une mesure automatique de maîtrise. Aucun raccord de progression Code.org/CodeCraft n'est actuellement implémenté.
- Une future intégration ajouterait les contenus, le parcours, les entrées du manifeste et du domaine selon [l'organisation actuelle](organisation-contenus.md). Aucun nouveau moteur de jeu, compte élève ou système de progression n'est nécessaire pour commencer.
- Chaque module doit avoir un lien explicite vers le niveau Code.org précis : le rendu générique du domaine Jeu vidéo ne suffit pas à sélectionner le bon outil. Ne pas utiliser le registre des projets Scratch pour les ressources Code.org.
- Les compétences du registre sont actuellement nommées par outil. Quelques nouvelles entrées observables pourraient couvrir trace spatiale, composition de motifs, comparaison de coût et limites d'une stratégie. Leur portée transversale peut être indiquée dans le texte sans renommer massivement les identifiants existants.
- Réutiliser une aide Scratch seulement si elle est utile à un élève qui connaît Scratch. Pour un novice Minecraft, une reprise autonome et courte est préférable à une obligation de découvrir un second éditeur. Un lien de reprise ne doit pas être présenté comme un nouveau module acquis.

## 8. Vérifications ciblées et adaptations définitives

L'intérêt pédagogique est suffisant pour **un complément de quelques séances**, pas pour promettre un cursus Minecraft avancé couvrant plusieurs années avec ces seuls tutoriels. La cohérence sur plusieurs mois vient de l'alternance entre notions, projets, transfert et autonomie ; elle ne nécessite pas que chaque outil porte une longue progression.

À la demande de l'utilisateur, seules les inconnues pouvant empêcher une mission ont été vérifiées dans l'interface réelle de Hero 12, sans compte connecté.

### Construction et répétitions : confirmées

- Deux boucles s'emboîtent. Le programme affiché confirme deux répétitions de trois séquences placer un rail puis avancer ; l'exécution construit la ligne.
- La boucle intérieure a été déplacée dans la première définition de procédure, puis appelée dans la boucle extérieure. Avec un virage à gauche après chaque appel, deux tronçons perpendiculaires sont construits.
- Une variante de trois appels, avec deux placements par appel, produit un tracé compact en U, visible près du départ. Ce motif sert de référence technique pour la mission 8.
- Le bouton Reset rétablit le monde initial tout en conservant les blocs : la variante a été exécutée après cette remise à zéro. Ne pas confondre Reset avec Start Over, qui concerne le programme.
- Les captures locales sont `browser-artifacts/audit-minecraft-2026-10-18/hero12-boucles.png`, `hero12-procedure-angle.png` et `hero12-motif-compact.png`.

### Conservation et reprise : trois situations distinctes

1. **Même navigateur, même session : observé.** Après exécution, un rechargement de Hero 12 a conservé la pile avec les deux boucles et leurs valeurs. Le monde repart de son état initial. Cette observation ne garantit ni conservation après effacement des données, ni reprise sur un autre appareil.
2. **Lien de résultat : observé.** Finish a proposé un lien de consultation du programme d'essai. Ouvert dans un nouvel onglet, il permet d'accéder aux blocs par How It Works ; la pile et la procédure sont présentes. Remix redirige vers la connexion : consulter ce résultat n'équivaut pas à reprendre une version personnelle modifiable sans compte. Le programme d'essai ne contient aucune donnée personnelle ; aucun partage sur réseau social n'a été effectué. Ne pas imposer ce lien publiquement consultable comme modalité de conservation élève.
3. **Compte : documenté, pas testé connecté.** L'[aide officielle](https://support.code.org/hc/en-us/articles/204090438-Do-students-need-to-sign-up-for-an-account-to-use-CodeAI) indique qu'un compte permet de conserver sa progression et de reprendre son travail. Aucun compte n'a été créé ou utilisé pour ces essais ; une sauvegarde inter-appareils ou un remix connecté ne sont donc pas déclarés vérifiés.

**Choix retenu :** missions indépendantes, carnet avec adresse précise du niveau, capture lisible des blocs et observations. Sans compte, la capture sert de support à une reconstruction manuelle courte ; aucun export/import comparable au `.sb3` n'est promis. Pour un travail personnel étalé sur plusieurs jours, recommander un compte Code.org et vérifier la reprise de sa propre version avant de fermer. Le lien de résultat reste une option de consultation, distincte d'une sauvegarde de travail et soumise au choix de l'utilisateur.

Les missions 1–4 et 6–7 restent fondées sur l'inventaire existant. Les restrictions sont déjà intégrées : comparaison sur papier si une palette verrouille une écriture, contre-exemple dessiné pour les cartes non éditables, aucune saisie JavaScript. Designer reste facultatif.

Les huit missions sont ainsi arrêtées pour la rédaction future, avec les constructions limitées et le mode de reprise ci-dessus. Aucun nouveau tour de tests systématiques n'est requis par ce cadrage. Aucun changement applicatif, contenu élève publié sur CodeCraft, commit ou push n'a été réalisé.
