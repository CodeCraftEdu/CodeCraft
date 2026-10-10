# Réagir à une entrée — fiche élève en préparation

**Note de préparation : accès élève à vérifier avant distribution.** Les circuits et blocs sont préparés et essayés dans le compte professeur, et partagés par lien. Deux leçons autonomes sont intégrées au site ; voir la [recette professeur](recette-tinkercad-bouton.md). Tout se passe dans le simulateur Tinkercad, sans matériel à acheter.

## Ton objectif

Faire réagir ta lumière à un bouton : allumée tant que tu appuies, éteinte quand tu relâches. Ensuite, tu créeras le résultat opposé dans une copie.

## Avant de commencer

Retrouve `Mon-signal` avec le professeur. Montre la LED externe et la sortie qui la commande. Vérifie les commandes Éteindre et Allumer avec une aide si nécessaire.

Garde ce projet intact. Crée la copie `Mon-bouton` selon les indications du professeur. Nous gardons le montage de la LED, mais nous remplaçons le programme de clignotement dans cette copie : les deux programmes ne doivent pas commander la même lumière.

## 1 — Le bouton donne une information

Le bouton est une entrée : il donne une information à la carte. La LED est une sortie : elle montre le résultat d’une commande.

Arrête la simulation avant de changer un fil. Avec le professeur, repère l’entrée du bouton et complète la connexion demandée sur le montage préparé. La résistance de la LED reste en place. Une autre résistance aide la carte à lire un état défini quand le bouton est relâché ; tu n’as pas à calculer sa valeur.

Observe les informations lues sur la démonstration du professeur, sans ouvrir un autre projet :

- bouton relâché ;
- bouton maintenu ;
- bouton relâché de nouveau.

Refais l’essai. Montre quand l’information change. Le professeur t’indiquera comment maintenir et relâcher le bouton dans la simulation.

Dans notre montage, bouton relâché donne `0`, aussi nommé `LOW` ; bouton appuyé donne `1`, aussi nommé `HIGH`. Lire cet état sur D2 permet de connaître l’entrée. Commander `HIGH` ou `LOW` sur D8 agit sur la LED : c’est une autre opération.

Avant de regarder la règle complète, propose l’action manquante sur ce schéma : « bouton appuyé → Allumer ; sinon → … ; puis consulter de nouveau ». Explique ce que tu devrais observer après un appui puis un relâchement. Tu vérifieras cette prévision après la construction.

## 2 — Une question, deux cas

Notre question est : **le bouton est-il appuyé maintenant ?**

- Si oui : commander l’allumage de la LED.
- Sinon : commander son extinction.

Puis le programme consulte de nouveau le bouton. Ce texte est un schéma de lecture, pas une image des blocs.

Prévois ce qui se verra au repos, pendant l’appui et après le relâchement. Construis les deux cas avec le professeur, puis lance la simulation.

« Sinon » ne veut pas dire « après avoir allumé ». C’est l’action choisie lorsque la réponse à la question est non. Le programme consulte plusieurs fois le bouton pour pouvoir réagir quand son état change.

Lis ces consultations successives avec le professeur :

| Information lue | Réponse à « appuyé ? » | Action choisie |
| --- | --- | --- |
| Relâché | Non | Éteindre |
| Maintenu | Oui | Allumer |
| Toujours maintenu | Oui | Allumer |
| Relâché | Non | Éteindre |

La troisième lecture ne change pas l’action : consulter de nouveau ne veut pas dire alterner Allumer et Éteindre.

## 3 — Essayer avant de modifier

Observe au repos, maintiens le bouton puis relâche-le. Recommence avec un second appui. Montre la question et l’action responsable de chaque résultat.

La lumière ne doit pas clignoter toute seule comme au premier cours. Si elle le fait, demande une aide pour vérifier que l’ancien rythme a été retiré de cette copie.

## 4 — À toi : une lumière qui prévient au repos

Crée la copie `Mon-bouton-inverse`. Dans cette version, nous voulons :

- une LED allumée au repos ;
- une LED éteinte pendant l’appui ;
- une LED allumée de nouveau après le relâchement.

Avant de modifier, explique ce que tu penses changer dans le programme et prévois les résultats. Le montage reste le même. Essaie ta proposition dans la copie, puis vérifie les trois états deux fois et explique la modification.

Indice si nécessaire : tu peux conserver la même question et changer les actions de ses deux cas. Lis le résultat voulu dans chaque cas. Le professeur peut t’aider à trouver les blocs sans choisir les réponses à ta place.

## Bonus facultatif — Un essai pour un camarade

Sans modifier le programme, propose une suite de gestes : repos, maintien plus long, relâchement, nouvel appui. Demande à un camarade ou au professeur de prévoir les résultats de ta version, puis vérifiez. Pas de nouveau composant ni de compteur à ajouter.

## Les essentiels

- Je montre l’entrée bouton et la sortie LED.
- Je distingue la question testée des actions qui commandent la lumière.
- Je sais expliquer les deux cas, pas seulement l’appui.
- Je montre pourquoi la consultation du bouton doit recommencer.
- Je prévois puis essaie les trois états dans mes deux versions.

Question de fin : si tu maintiens le bouton longtemps dans `Mon-bouton`, la LED doit-elle recommencer à clignoter ? Explique avec les actions de ton programme. Tu peux revoir le modèle ou demander une aide après ta première réponse.

## Conserver les deux versions

Arrête la simulation et vérifie l’enregistrement. Retrouve `Mon-bouton`, relance-le et vérifie le résultat principal. Garde aussi `Mon-bouton-inverse`, avec son nom distinct. Ne remplace pas `Mon-signal` par un exercice incomplet.

Montre un essai et explique ce que tu as changé. Si un point reste difficile, reprends ce point avec une aide, pas tout le montage.
