# Piloter un robot — guide professeur en préparation

Séance 3 du stage robotique KidnKod : RB05 + RB06, deux heures avec pause. [Spécification](specification-robotique-seance-3.md), [fiche élève](robotique-seance-3-eleve.md).

**Mise à jour du 9 octobre : recette partielle et intégration effectuées.** La [recette MakeCode](recette-makecode-robot.md) fournit les fichiers réels, captures, modèle et paramètres observés. Départ et référence complète réimportés ; A/B et trajet observés. Auto-sauvegarde indisponible, lenteurs et fiabilité des relances restent à vérifier. Le conducteur ci-dessous reste le cadre pédagogique ; consulter la recette et les guides du site pour les paramètres actuels. La démonstration facultative de puissance n’est pas essayée.

## Entrée et objectif

Faire retrouver bouton → programme → LED, puis lire une courte séquence avec aide. Transférer entrée/sortie, ordre des actions et essai prévisible ; ne pas exiger la maîtrise d’une nouvelle interface avant de manipuler.

Objectif du jour : avancer, arrêter explicitement, ajouter un virage puis modifier la durée d’avance en prévoyant l’effet. Faire distinguer l’événement ponctuel de la consultation répétée avec la micro-activité A/B. La comparaison de puissance est facultative et vient après le travail principal.

## Préparation différée

- Préparer `Mes-images` sur la carte seule : deux événements A/B et deux images statiques, sans boucle d’affichage ni effacement concurrent. Vérifier le geste réel d’appui bref et relâchement.
- Préparer une base robot distincte : extension/modèle initialisés, configuration des aides connue, arrêt de sécurité, aucun déplacement caché. L’élève complète le déplacement avant cet arrêt conservé.
- Retenir un mode steer, une puissance modérée fixe, une durée courte de ligne droite et une durée courte de virage ; relever les unités et libellés réels. Une seconde puissance ne sert qu’à l’approfondissement facultatif. Tous ces paramètres restent à essayer.
- Commander les moteurs dans une seule séquence au démarrage après initialisation. Pas de commande moteur sur A/B, de boucle parallèle ou de départs simultanés à gérer.
- Préparer une position et une orientation de référence dans une zone dégagée ; vérifier la remise en place simulation arrêtée et la relance. Ne pas supposer une réinitialisation automatique de la position.
- Garder les réglages du modèle visibles et rendre visible le lieu où le virage commence pour le défi, sans mesure exacte. Si le bonus de puissance est retenu, préparer une démonstration professeur avancer/arrêter, en ligne droite seule, sans modification du projet élève.
- Préparer le schéma avec arrêt manquant, la référence complète, les copies et la procédure export/import. L’exercice sur schéma ne nécessite pas un projet supplémentaire.
- Conserver séparément l’activité carte seule pour ne pas perturber l’affichage d’assistance du robot.

## Conducteur — 120 minutes

| Temps | Activité | Repère attendu |
| --- | --- | --- |
| 0–10 | Reprise et accès MakeCode | Entrée/sortie retrouvées, zones utiles repérées |
| 10–25 | Micro-activité A/B et images | Déclenchement ponctuel distingué de la règle du jour 2 |
| 25–35 | Base robot, initialisation et changement de déclencheur | Carte, moteurs et lancement au démarrage montrés ; A/B ne pilotent pas le robot |
| 35–50 | Avancer puis arrêter : prévoir, compléter, essayer | Arrêt explicite et immobilité constatée |
| 50–60 | Pause hors écran | Aucun travail pendant la pause |
| 60–80 | Remise au départ, ajout d’un virage et essais accompagnés | Ordre des actions expliqué, arrêt conservé |
| 80–105 | Copie, défi de durée, vérification et marge de reprise | Prévision, modification ciblée et deux essais ; puissance facultative seulement si le travail est terminé |
| 105–115 | Sauvegarde et reprise | Projets distincts et sauvegarde récupérable |
| 115–120 | Bilan | Arrêt et relance de la séquence expliqués |

Les quinze minutes carte seule sont un budget d’activité hors difficultés d’accès. Alterner courtes démonstrations et gestes élèves. Si nécessaire, accompagner la navigation ou fournir une base partielle. Supprimer d’abord l’approfondissement de puissance ; conserver la pause, les essais et la sauvegarde. Le socle minimal est avancer/arrêter ; noter ce qui reste à reprendre si virage ou défi ne sont pas réalisés. Le bonus utilise uniquement un éventuel temps restant dans la plage 80–105, sans ajouter de minutes au conducteur.

## Paroles de découverte

« Ce n’est pas notre Arduino déplacé dans un autre site : nous utilisons une autre carte. Nous retrouvons néanmoins une entrée, un programme et une sortie. »

« Un appui bref sur A déclenche cette action. Après, aucune commande n’efface l’image. Notre programme d’hier faisait autre chose : il relisait le bouton et choisissait aussi une action quand il était relâché. »

« Avant de lancer les moteurs, le programme prépare le modèle. Ensuite nous lisons les actions dans l’ordre : avancer, puis arrêter. Quelle commande garantit que les moteurs ne restent pas en mouvement ? »

« Dans notre premier projet, les boutons déclenchaient les images. Dans celui-ci, les boutons ne commandent pas les moteurs : le démarrage lance la séquence. Montre son début. Quand le robot commencera-t-il à bouger ? Il ne regarde pas encore les obstacles pour décider. »

« Pour comparer, nous gardons le départ et la durée. Nous changeons un seul réglage. Nous n’essayons pas de garantir un nombre de centimètres. »

Éviter « bouton appuyé = image uniquement pendant le maintien », « durée finie = arrêt automatique », « ce réglage donne exactement telle vitesse » et « ce virage fait exactement 90° ».

## Questions et réponses

| Question | Réponse acceptable |
| --- | --- |
| Pourquoi l’image reste-t-elle après A ? | L’action a affiché l’image ; rien ne lui demande ensuite de l’effacer |
| Est-ce la règle bouton–LED d’hier ? | Non : déclenchement d’une action ici, consultation répétée et deux cas hier |
| Pourquoi préparer le modèle d’abord ? | Les commandes robot doivent utiliser le modèle choisi ; geste technique accompagné |
| Quelle action termine le mouvement ? | La commande Arrêter, pas la seule fin de la durée |
| Que change le virage ? | L’orientation puis le trajet, sans angle exact promis |
| Pourquoi garder le même départ ? | Pour ne pas confondre effet du réglage et changement de position ou d’orientation |
| Pourquoi ne pas changer puissance et durée ensemble ? | On ne saurait pas attribuer le changement observé à un seul réglage |
| Pourquoi le bonus de puissance utilise-t-il une ligne droite ? | Pour regarder le déplacement sans mélanger son effet avec le changement d’orientation |
| A ou B lance-t-il notre trajet ? | Non dans ce projet : la séquence est placée au démarrage |
| Après l’arrêt, recommence-t-il seul ? | Non dans cette séquence unique ; préparer le départ et relancer |

La distinction événement/état se vérifie par la lecture des deux programmes et la prévision, pas par un simple maintien prolongé dont le déclenchement dépendrait des gestes de l’interface.

## Aides et défi

Avancer/arrêter : montrer l’initialisation et l’arrêt déjà fournis, puis laisser choisir et placer l’avance avant cet arrêt. Ne pas demander d’ajouter un deuxième arrêt ni supprimer celui fourni pour provoquer une panne. Sur un schéma sans dernière action, demander ce qui manque pour finir immobile, puis retrouver le bloc dans le projet intact.

Virage : insérer une seule commande entre la ligne droite et l’arrêt. Le professeur peut réaliser les gestes de souris ; l’élève prévoit et montre l’ordre. Si la direction est difficile à repérer, orienter le départ clairement et montrer l’avant du robot avant l’essai.

Défi : donner un objectif observable compatible avec les commandes connues, puis demander la proposition de l’élève. Exemple sans nouvelle mécanique : commencer le virage plus près du départ que le modèle et terminer immobile. Fixer puissance et commande de virage sans annoncer d’emblée que la durée de ligne droite est la solution. Aides graduées : relire les étapes ; identifier laquelle doit changer ; suggérer de chercher la durée et prévoir l’effet de sa réduction ; aider au geste sans donner la valeur. Comparer au modèle depuis le même départ et vérifier deux fois. Noter si la stratégie a été proposée ou indiquée. Pas de cible au centimètre près.

Approfondissement facultatif de puissance : après le travail principal, montrer deux essais sur une démonstration professeur en ligne droite seule, arrêt conservé. Demander une prévision avec mêmes départ, orientation et durée ; changer seulement la puissance. L’élève explique l’observation sans démonter son trajet ni ouvrir une copie supplémentaire. Ne pas interpréter les points d’arrivée de trajets avec virage comme une simple mesure de vitesse. Le bonus n’est pas exigé pour poursuivre au jour 4.

Un autre objectif simple est possible, mais pas de cible exigeant angle ou distance exacte. Pour les rapides, prévoir le trajet d’un camarade ou expliquer une autre valeur, sans radio ni capteur.

## Erreurs et enquête

| Symptôme | Aides graduées |
| --- | --- |
| A/B n’affiche rien | Vérifier simulation, événement choisi, geste bref et relâchement ; comparer à la référence carte seule |
| Image change sans nouvelle action élève | Chercher autre commande ou boucle d’affichage ; ne pas mélanger avec l’assistance robot |
| Robot absent ou immobile malgré les commandes | Vérifier initialisation et extension sur la référence ; ne pas demander de recâbler une carte virtuelle |
| Robot continue après la durée | Lire la fin de séquence, vérifier Arrêter et toute commande concurrente ; arrêter la simulation pour intervenir |
| Robot recommence sans relance | Vérifier présence d’une boucle ou d’un autre lancement ; comparer au lancement unique retenu |
| Virage de l’autre côté | Repérer l’avant et la direction du réglage ; reprendre la même orientation, pas changer plusieurs valeurs |
| Comparaison incohérente | Revoir position, orientation, durée, puissance et aides actives ; refaire deux essais comparables |
| Départ perdu après relance | Arrêter puis replacer avec la procédure préparée ; ne pas attribuer cet écart au programme |
| Copie locale introuvable | Vérifier navigateur et projet nommé ; reprendre la sauvegarde avec aide selon la procédure essayée |

Une panne de l’extension est un problème de support, pas un exercice de programmation débutant. En cas de repli carte seule, signaler que le volet robot n’a pas été réalisé ; il ne peut pas être validé par une animation d’icône.

## Bilan et suite

Faire montrer arrêt final, changement unique et préparation de la relance. Accepter geste, oral et aide de lecture ; distinguer navigation et raisonnement. Faire retrouver le principal et la copie personnelle, avec sauvegarde externe sans données personnelles ni partage public obligatoire.

La distinction des déclencheurs doit avoir été observée pendant la transition entre projets : faire montrer leur emplacement et accepter « quand je clique sur A » versus « quand je démarre le programme », sans exiger une définition abstraite des événements.

Annoncer le jour 4 : aujourd’hui le robot suit une séquence ; ensuite une mesure permettra de décider d’avancer ou de s’arrêter. Ni capteur, ni condition autonome, ni variable ne sont nécessaires pour terminer cette séance.

Revue transversale appliquée : lancement et arrêt explicités, défi personnel centré sur la durée, comparaison de puissance facultative et fiche élève allégée. La [séance 4](specification-robotique-seance-4.md) est rédigée et reprend ces acquis. La préparation et les essais techniques restent différés.
