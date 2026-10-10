# Séance 5 — Ma mission de robot

RB09 + RB10 : projet final du stage robotique KidnKod, distanciel, débutants de 8 à 13 ans, 120 minutes avec pause. [Roadmap](roadmap-robotique-kidnkod.md), [fiche élève](robotique-seance-5-eleve.md), [guide professeur](robotique-seance-5-professeur.md).

**État : corrections des revues pédagogique et transversale appliquées.** Aucun projet exécutable fourni ou essai de simulateur réalisé. Les bases et paramètres restent soumis à la recette différée du jour 4.

## 1. Intention et prérequis

Réinvestir une règle connue pour concevoir, tester et expliquer une petite mission personnelle. Aucun nouveau chapitre : même robot simulé, capteur de distance, deux branches répétées et réglage `seuil` du [jour 4](specification-robotique-seance-4.md).

L’élève doit pouvoir montrer l’entrée (distance), la décision (comparaison avec `seuil`) et les sorties (moteurs). Il retrouve l’initialisation de `seuil` et son utilisation. Une aide reste possible et doit être notée : une réussite accompagnée n’atteste pas une maîtrise autonome.

## 2. RB09 — Concevoir une mission réalisable

Reprendre `Mon-robot-prudent`, en conserver l’original et travailler dans une copie `Ma-mission-robot`. La configuration, l’initialisation et la puissance restent celles du jour 4. Aucun ancien trajet ou événement ne doit commander les moteurs en parallèle.

Le modèle de comparaison est une référence professeur unique, nommée `Reference-arret`, à préparer à partir de `Mon-obstacle-fixe`. Sa limite reste fixe pendant toute la séance. Une fiche professeur conserve limite, puissance, départ, orientation et obstacle de la scène A. Ce modèle ne désigne jamais le réglage personnel de l’élève au jour 4. L’élève l’observe et n’a pas à ouvrir une copie supplémentaire.

Choisir un thème : livreur, explorateur ou secours. Le thème donne une raison à la prudence ; il n’ajoute ni livraison réelle, ni recherche de victime, ni labyrinthe.

Montrer d’abord l’avance et l’arrêt de `Reference-arret` dans A, faire repérer la marge devant l’obstacle, sans donner le réglage solution. Choisir ensuite une contrainte observable parmi deux missions préparées :

- **Mission prudente** : dans la scène A, le robot avance depuis le départ prévu, puis s’arrête plus loin de l’obstacle que `Reference-arret`.
- **Mission approche** : dans la scène A, le robot avance depuis le même départ, puis s’arrête avec une marge plus petite que `Reference-arret`, toujours avant le contact. Pas de recherche du contact ni du seuil minimal ; uniquement des valeurs effectivement vérifiées.

L’élève relie son choix au thème, choisit une valeur de `seuil` dans la plage vérifiée pour **la mission choisie**, et prévoit son effet. Il peut conserver le réglage du jour 4 s’il répond à sa mission : il doit alors justifier ce choix, prévoir les résultats et vérifier une nouvelle situation. Modifier un nombre n’est pas une condition de réussite. Le nom et la couleur seuls ne démontrent pas la compréhension. La mission approche reste soumise à la vérification technique des scènes ; si elle est irréalisable, préparer une deuxième contrainte observable et adapter la fiche élève avant le cours.

Le jour 4 fournit une construction et une modification guidées. Le jour 5 demande le choix personnel d’un objectif, la justification du réglage conservé ou modifié et des prévisions vérifiées dans plusieurs situations. Le raisonnement et les preuves, avec les aides reçues, permettent d’observer le transfert même si le programme final est identique à une solution déjà rencontrée.

Au démarrage, compléter le petit schéma présent dans la fiche élève : « distance < `seuil` ? Oui → … ; Non → … ». Prévoir les deux cas, puis les retrouver dans le projet intact. Ne pas casser le programme personnel pour produire artificiellement un débogage.

Dans la scène A, comparer `Reference-arret` et la mission depuis les mêmes départ et orientation, avec le même obstacle, la même puissance et la même règle de décision. La seule différence de comportement recherchée vient de la valeur de la limite, fixe dans la référence et nommée `seuil` dans la copie élève. Un robot qui reste arrêté dès ce départ ne satisfait aucune des deux missions. Aucune distance exacte d’arrêt n’est promise.

Avant de terminer RB09, faire prévoir puis essayer une première fois A et noter ce premier résultat. Sauvegarder avant la pause. Ce résultat ne valide pas encore l’ensemble ; si la scène bloque, noter non testé, sans inventer une observation.

## 3. RB10 — Vérifier et présenter

Retrouver le projet et la même fiche ; confirmer A depuis le départ connu, puis prévoir et essayer B/C. Retrouver ou remontrer la référence si les modules sont suivis à des moments différents. Trois situations ne signifient pas seulement trois lancements : A comprend la démonstration de référence, le premier essai RB09 et sa confirmation RB10.

| Essai | Ce qu’il permet de vérifier |
| --- | --- |
| A — Départ éloigné, obstacle devant | Avance initiale puis arrêt ; comparaison à `Reference-arret` pour vérifier « plus loin » ou « plus près » |
| B — Obstacle proche au départ | Branche Arrêter, sans contact initial |
| C — Autre position d’obstacle, départ encore suffisamment éloigné | Avance puis arrêt avant contact avec le même réglage, sans nouvelle comparaison de marge |

La scène C vérifie que le comportement fonctionne ailleurs. Elle ne prouve pas « plus près » ou « plus loin » que la référence dans cette scène. Une telle conclusion demanderait une comparaison supplémentaire, facultative, de la référence et du projet dans C.

Observer le changement de décision pendant l’approche naturelle, dans une seule exécution, pour expliquer la répétition. Une nouvelle relance depuis le départ connu et le retour à une position éloignée sont des essais complémentaires. Le retour après arrêt et relance ne prouve pas à lui seul cette répétition ; un retour dans la même exécution n’est proposé que si le geste est vérifié.

Arrêter la simulation avant de repositionner robot ou obstacle. Garder des mesures valides et la plage de réglages préparée. Le cas d’égalité est traité oralement avec la comparaison stricte `<`, sans exiger une position exactement égale dans l’interface.

Trace écrite légère : une phrase de mission, la valeur choisie et « prévu / observé » pour A/B/C, avec premier résultat et confirmation sur la même ligne A. Justification et conclusion peuvent être orales, recueillies par le professeur ; détails techniques, aides et limites restent dans son relevé. Correction notée seulement si nécessaire ; après changement du programme, reprendre A/B/C. Ne pas exiger une erreur si le résultat est conforme ni modifier au hasard plusieurs paramètres.

La présentation montre le projet, les deux cas de la règle, le réglage personnel et un essai qui appuie la conclusion. Distinguer ce que l’élève a choisi, ce qu’il a reçu préparé et les aides utilisées. Un résultat contraire à la prévision, expliqué avec une piste précise, reste une preuve utile d’apprentissage.

## 4. Rythme et différenciation

Conducteur : reprise 0–10 ; référence puis choix de mission 10–20 ; adaptation et premier essai A 20–40 ; pause 40–50 ; confirmation A puis B/C 50–80 ; présentations 80–105 ; sauvegarde 105–115 ; bilan 115–120.

Si `seuil` reste fragile, utiliser la reprise et le temps d’adaptation pour retrouver sa valeur initiale et son emploi, avec deux valeurs proposées dans la plage vérifiée. Donner une aide graduée : question, repère dans le programme, choix réduit, puis démonstration si nécessaire. Conserver les essais des deux branches et l’explication, même avec un réglage aidé.

Si le projet manque, fournir une base vérifiée équivalente au jour 4, sans demander de reconstruire l’extension. Si la simulation n’est pas disponible, une lecture de règle et des prévisions peuvent continuer, mais la mission robot ne peut pas être déclarée testée.

Les élèves rapides approfondissent les essais ou justifient l’égalité ; pas de nouvelle variable, minuterie, score ou navigation. Le temps de présentation dépend de l’effectif : prévoir des interventions courtes et compléter l’observation individuelle pendant les essais, sans promettre une longue démonstration par élève.

## 5. Livrables et critères

- Projet personnel sauvegardé et retrouvable, avec original conservé.
- Mission et contrainte décrites simplement.
- Réglage conservé ou modifié avec justification et prévision ; comparaison à conditions égales dans la scène A.
- Deux branches montrées et changement de décision expliqué pendant l’approche.
- Les trois essais essentiels consignés ou expliqués ; correction uniquement si nécessaire.

Il s’agit d’une découverte de la robotique simulée. Le robot peut repartir si la distance redevient suffisamment grande : ce n’est pas un arrêt d’urgence verrouillé ni une sécurité validée sur matériel réel.

## 6. Revues appliquées et suite

Corrections appliquées : deux missions au choix, trois situations essentielles, schéma de règle dans la fiche élève, référence professeur nommée et distinction entre comparaison et vérification dans une autre scène. Un réglage déjà pertinent peut être conservé et justifié. La progression des jours 4 et 5 distingue désormais manipulation guidée et projet personnel.

La revue transversale des cinq jours et ses corrections documentaires sont terminées. La préparation des fichiers de départ et la recette technique restent à faire au moment choisi par l’utilisateur.
