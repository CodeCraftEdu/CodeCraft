# Robotique KidnKod — séance 1 : Faire agir un circuit

Préparation du 8 octobre 2026, après la revue de la [roadmap](roadmap-robotique-kidnkod.md). RB01 « Mon premier circuit » et RB02 « Programmer un signal » sont deux unités d’un même atelier, pas deux séances.

**Statut : atelier proposé, vérification technique partielle.** Les supports rédigés sont la [fiche élève](robotique-seance-1-eleve.md) et le [guide professeur](robotique-seance-1-professeur.md). Le montage et les deux états fixes ont été essayés ; le départ de la première leçon permanente est partagé par lien et le prototype de clignotement 3 s / 3 s reste privé. Voir la [recette technique](recette-tinkercad-premiere-lumiere.md). Les supports spécifiques de l’atelier et les paramètres ci-dessous restent à confirmer.

## 1. Résultat attendu

L’élève programme une LED externe qui s’allume puis s’éteint, modifie une durée en prévoyant l’effet et retrouve son projet enregistré. Il montre une connexion du circuit et explique que la LED reste dans le dernier état commandé pendant l’attente. Les corrections de revue sont appliquées ; aucune recette technique n’est revendiquée.

Public : 8–13 ans, débutants, à distance. Aucun Scratch, compte personnel, langage textuel ou matériel physique requis. Les accès seront organisés par l’enseignant avec l’organisme. Aide de navigation, souris et lecture autorisée et distincte de l’aide au raisonnement.

Pas de loi d’Ohm à calculer, de code C++, de variables, de bouton électronique, de plaque d’essai à maîtriser, de capteur ou de robot aujourd’hui.

## 2. Choix techniques proposés

| Élément | Choix de préparation | Limite |
| --- | --- | --- |
| Outil | Tinkercad Circuits, simulation, programmation en blocs | Menus et fonctionnement de la répétition à relever sur l’interface réelle |
| Montage principal | Arduino Uno R3 simulé, une LED externe rouge, une résistance en série, trois connexions directes | Pas de plaque d’essai, pour limiter la manipulation |
| Sortie | Broche numérique 8 | Choix pédagogique pour distinguer la LED externe de celle embarquée ; disponibilité des blocs à confirmer |
| Résistance | 220 Ω, candidate | Valeur à contrôler dans la simulation ; ne jamais retirer la résistance pour « faire marcher » le modèle |
| Connexions | D8 → résistance → anode LED ; cathode LED → GND | Identifier les bornes avec les libellés du simulateur, pas uniquement leur position ou la longueur dessinée |
| États | Sortie haute puis basse sur la même broche | Correspondance exacte des libellés des blocs à vérifier |
| Durées du modèle | 1 seconde allumée, 1 seconde éteinte | Vérifier l’unité du champ ; ne pas transposer 1 seconde en « 1 » si le bloc attend des millisecondes |
| Défi | 2 secondes allumée, 1 seconde éteinte | Changer seulement l’attente après l’allumage |

La documentation Arduino Blink expose le principe d’une LED commandée, de la résistance en série, du retour à la masse et des attentes successives. Notre sortie D8 et notre progression constituent une adaptation, pas une copie certifiée dans Tinkercad. [Arduino Blink](https://docs.arduino.cc/built-in-examples/basics/Blink).

### Circuit de découverte

Un circuit très simple alimentation–résistance–LED sert de démonstration courte et accompagnée avant l’Arduino. Sa source d’alimentation et sa résistance restent à choisir et vérifier ensemble. Faire prévoir le résultat d’une connexion manquante puis restaurée. Pas de deuxième montage complet à construire par chaque enfant.

### Programme principal, en mots

Pour chaque cycle : commander l’allumage sur D8 ; attendre une seconde ; commander l’extinction sur D8 ; attendre une seconde. Le cycle recommence tant que la simulation fonctionne.

**Point technique à résoudre avant diffusion :** déterminer si les blocs Tinkercad placés au niveau principal sont répétés implicitement ou si le support exige un conteneur. Adapter le schéma au fonctionnement observé, sans ajouter une deuxième boucle par habitude. L’élève doit savoir où le cycle recommence, sans lire le code généré.

Ne pas présenter « exécuter une fois » comme un essai disponible tant qu’il n’a pas été préparé et vérifié. Comparer oralement ce qui resterait affiché après une seule séquence ; distinguer cette prévision du fonctionnement réel du modèle répété.

## 3. Parcours de découverte

1. Voir une LED dans un circuit, identifier alimentation, résistance et retour.
2. Prévoir puis vérifier l’effet d’une connexion ouverte et restaurée, sur la démonstration du professeur.
3. Construire ou compléter le montage Arduino–LED principal avec aide de manipulation.
4. Prévoir puis observer deux essais distincts, sortie commandée éteinte puis allumée, sur le même montage. Ne changer que l’action, relancer selon la procédure préparée et constater les deux états de la LED externe. Isoler ainsi le bon câblage et la bonne sortie avant les attentes ; une lumière déjà allumée ne prouve pas que la commande fonctionne.
5. Lire le cycle complet en mots ; prévoir le début, la durée des deux états et le retour au début.
6. Assembler et observer le modèle, puis compléter une action manquante sur un support partiel.
7. Modifier une seule attente pour répondre au défi ; prévoir, essayer et expliquer.
8. Enregistrer, quitter l’édition, retrouver et relancer le même projet.

La connexion avec le programme arrive rapidement ; la découverte de composants ne devient pas une visite exhaustive de l’interface.

## 4. Supports à réaliser ultérieurement

| Support | Contenu prévu | Usage |
| --- | --- | --- |
| Démonstration circuit simple | Alimentation, résistance, LED ; version complète et connexion ouverte | Découverte courte, projection professeur |
| Départ élève principal | Composants du montage D8 disposés ; selon les besoins, quelques fils déjà présents | L’élève complète au moins une connexion et l’explique |
| Montage accompagné complet | Même circuit, deux essais distincts Éteindre puis Allumer | Reprise pour difficultés techniques et contraste observable |
| Exemple complet | Cycle allumer/attendre/éteindre/attendre | Lire, prévoir, observer avant modification |
| Exemple partiel | Circuit intact ; une action du cycle manque | Choisir et expliquer l’action manquante |
| Référence professeur | Même montage, modèle et défi vérifiés | Débogage, pas solution distribuée avant le défi |

Les supports restent à créer. Toute base fournie doit correspondre aux connexions et paramètres finaux, sans clignotement caché ni programme préexistant sur une autre sortie. Pas de circuits tiers récupérés sans contrôle.

Un schéma des quatre actions peut être créé indépendamment de l’interface, avec la mention « schéma de lecture » et une flèche de retour au début. Recommencer n’est pas une cinquième action à ajouter. Ne pas faire passer ce schéma pour une capture réelle des blocs ou une zone de répétition déjà vérifiée.

## 5. Critères observables

- Montre la LED externe visée et suit une connexion jusqu’à la carte.
- Explique que la résistance protège le montage et qu’un fil manquant interrompt le chemin ; aucun calcul exigé.
- Relie l’action du programme à la même broche que le circuit.
- Explique que la LED reste dans l’état commandé pendant l’attente.
- Prévoit puis obtient une durée allumée plus longue en ne changeant qu’une attente.
- Au bilan, montre sans indice initial ce qu’il changerait pour une seconde allumée et deux secondes éteinte ; une aide reste possible après sa réponse, sans nouveau projet exigé.
- Retrouve et relance le projet conservé pour la séance 2.

Noter « fait avec aide de manipulation », « expliqué avec aide », « expliqué sans aide », plutôt qu’un acquis déduit de la seule LED qui clignote. Une erreur corrigée est informative ; aucune erreur n’est exigée artificiellement.

## 6. Recette différée

Avant usage en cours, au moment choisi par l’utilisateur :

1. Créer les circuits et confirmer composants, bornes, résistance, sortie et absence d’avertissement.
2. Tester séparément Éteindre puis Allumer sur le même circuit, puis les quatre actions, la répétition et le défi ; relever les noms de blocs et unités.
3. Vérifier que la LED embarquée ou un programme par défaut ne donne pas un faux résultat positif.
4. Vérifier le comportement du support partiel et la récupération du départ intact.
5. Tester l’accès élève prévu, l’enregistrement, la reprise et la duplication dans ce contexte.
6. Préparer les visuels correspondants et ajuster les consignes avant de retirer le statut « non essayé ».

Pas de recette accomplie aujourd’hui. Pas de transfert sur Arduino physique ni d’installation à effectuer.

## 7. Reprise après cette préparation

La revue documentaire est effectuée et ses corrections sont appliquées : contraste Éteindre/Allumer, quatre actions avec retour au début, première manipulation plus tôt et courte question de transfert au bilan. La [séance 2](specification-robotique-seance-2.md) conserve le montage principal et ajoute une entrée bouton, sans reconstruction de la sortie LED. Les supports exécutables des deux séances restent à créer et vérifier ultérieurement.
