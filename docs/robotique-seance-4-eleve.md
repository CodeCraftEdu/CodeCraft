# Décider avec un capteur — fiche élève en préparation

**Non prête à distribuer :** les pages RB07/RB08 et leurs fichiers sont maintenant [intégrés en préparation](integration-robotique-capteurs.md). Placement, mesures valides et gestes restent à vérifier avant cours. Cette fiche garde le format atelier ; les nombres du tableau servent à réfléchir et ne prouvent pas un placement de simulation.

## Ton objectif

Faire choisir au robot entre Avancer et Arrêter selon une distance. Découvrir ensuite le réglage nommé `seuil` avec le professeur.

Retrouve l’arrêt du jour 3 et les deux cas bouton–LED du jour 2. Ouvre la base `Mon-obstacle-fixe` indiquée par le professeur ; tes trajets restent conservés.

## 1 — Observer une mesure

**Je prévois :** si l’obstacle change de place, quelle information le capteur recevra-t-il ?

**Je fais :** regarde la démonstration, robot immobile, avec plusieurs positions d’obstacle. Montre le capteur et la distance affichée.

**Je vérifie :** la distance vient du capteur. Nous choisissons une autre valeur, la limite qui servira à décider.

## 2 — Une question, deux cas

Notre question : **la distance est-elle plus petite que la limite ?** Oui → Arrêter ; non → Avancer.

**Je prévois :** avec une limite fictive de 20 cm, choisis une action pour 30 cm, 15 cm et exactement 20 cm.

**Je fais :** lis ensuite cette suite avec le professeur :

| Distance de l’exercice | Plus petite que 20 ? | Action |
| --- | --- | --- |
| 30 cm | Non | Avancer |
| 15 cm | Oui | Arrêter |
| Encore 15 cm | Oui | Arrêter |
| De nouveau 30 cm | Non | Avancer |
| Exactement 20 cm | Non | Avancer |

**Je vérifie :** 20 n’est pas plus petit que 20. Relire la question ne fait pas forcément changer l’action.

## 3 — Lire, choisir, recommencer

Schéma de lecture : **lire la distance → comparer à la limite → Arrêter ou Avancer → lire de nouveau.**

**Je prévois :** que fera le robot s’il commence loin de l’obstacle ? Et s’il commence près ?

**Je fais :** construis les deux cas avec le professeur. Garde la préparation du robot au début. Essaie les positions prévues, avec la limite donnée pour la simulation.

**Je vérifie :** depuis le départ éloigné, le robot avance puis s’arrête avant l’obstacle, sans relance entre les deux. Depuis le départ proche, la règle commande Arrêter. Montre les actions correspondantes.

Nous relisons la situation, comme le bouton au jour 2. Arrête la simulation avant de replacer le robot. Si le résultat te surprend, demande une aide avant de modifier les réglages.

## 4 — Nommer le réglage

Conserve `Mon-obstacle-fixe` et crée la copie `Mon-robot-prudent` avec le professeur.

**Je prévois :** si nous donnons seulement un nom à la même limite, le comportement changera-t-il ?

**Je fais :** au démarrage, donne à `seuil` la valeur de la limite. Dans la comparaison, utilise `seuil` à la place du nombre. Reprends la même scène et relance.

**Je vérifie :** la règle reste la même. Montre où `seuil` reçoit sa valeur et où elle est utilisée.

`seuil` est le nom de notre limite choisie. La mesure du capteur peut changer pendant l’avance ; notre réglage conserve la valeur donnée au démarrage.

## 5 — Essayer ensemble une autre valeur

**Je prévois :** le professeur propose une autre limite déjà vérifiée. Explique avec lui comment elle pourrait changer l’arrêt.

**Je fais :** change seulement la valeur initiale de `seuil`. Garde la même scène et la même puissance, puis relance pour appliquer la valeur.

**Je vérifie :** observe l’effet et montre ton réglage. Cette manipulation est accompagnée ; tu choisiras ta mission personnelle au prochain cours.

## Les essentiels et la sauvegarde

- Je distingue la distance reçue et la limite choisie.
- Je montre les deux actions et la question répétée.
- Je retrouve les deux endroits qui utilisent notre réglage `seuil`.

Question de fin : robot et obstacle immobiles, changer la valeur initiale de `seuil` change-t-il la mesure reçue ou notre limite ?

Arrête la simulation. Retrouve `Mon-obstacle-fixe` et `Mon-robot-prudent`. Avec le professeur, conserve une sauvegarde récupérable hors du navigateur et indique ce que tu souhaites reprendre au prochain cours.
