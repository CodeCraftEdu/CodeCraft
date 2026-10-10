# Programmer un signal — adaptation de RB02

Intégration du 9 octobre 2026, à partir de la fiche élève, du guide et de la spécification de séance 1 déjà revus. Route : `#module/robotique-signal?parcours=robotique-debutants` ; guide : `prof.html#guide/robotique-signal`.

## Progression conservée

Deux états fixes acquis avec aide si nécessaire → lire quatre actions → construire dans forever → expliquer chaque attente → retirer/restaurer LOW sur une copie → modifier seulement le temps allumé pour 2 / 1 → prévoir oralement 1 / 2 → retrouver son projet. Le bonus reste facultatif. La durée du stage et son organisation ne sont pas imposées sur le site.

La question de transfert tient compte du projet réellement obtenu : à partir de 2 / 1, obtenir 1 / 2 demande deux réglages. La formulation ne laisse plus croire qu’un seul changement suffirait à ce moment-là.

## Départ et modèles

Le départ est le même circuit partagé que pour Ma première lumière. L’élève garde son premier projet et crée Mon-signal. Il déplace le bloc LOW de on start dans forever, puis ajoute HIGH et deux attentes en secondes. Aucun nouveau câblage n’est demandé.

Le schéma `images/robotique-cycle.svg` est un schéma de lecture, pas une capture de Tinkercad. Les conteneurs on start et forever sont explicitement distingués. La référence complète professeur ne sert pas de départ élève.

Pour l’action manquante, la copie Signal-a-completer est issue du cycle intact : seule la commande LOW est retirée. Le modèle Mon-signal reste disponible. Une base partielle préparée par l’enseignant est proposée si la duplication ou la souris bloque.

## Relecture de l’adaptation

- Prérequis observables : repérer la LED et obtenir LOW puis HIGH sur le même montage.
- Une seule nouveauté de construction à la fois : séquence, attente, répétition ; pas de variable ni de composant supplémentaire.
- Prévision avant essai ; observation de trois cycles ; explication distincte de la reproduction.
- Fichiers/copies nommés et retour explicite au projet intact avant le défi.
- La première leçon et la navigation précédente/suivante sont conservées.
- Compétences internes ajoutées : sequence, attente, boucle. Suivi professeur manuel, sans report automatique.

La vérification technique et les limites sont consignées dans la [recette Tinkercad](recette-tinkercad-signal.md) ; l’accès et la reprise avec un compte élève distinct restent à faire. Aucun commit ni publication GitHub Pages n’est effectué dans ce lot.
