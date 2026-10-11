# Robotique — nettoyage des textes élève, 10 octobre 2026

Périmètre : présentation du parcours, quatre étapes, dix modules (objectifs, blocs, exercices, indices, critères), fiche commune RB09/RB10. Revue distincte de l’adaptation autonome, toujours reportée. Aucun ajout marketing ni changement de programme ou de fichier HEX.

## Constat et corrections

- L’objectif du parcours et les étapes capteurs/missions mélangeaient apprentissages et suivi de recette. Présentation reformulée autour des créations et actions de l’élève.
- Les points de pause et la fin du parcours utilisaient des termes de suivi professeur. Remplacement par des questions de bilan et une invitation à conserver/présenter le projet.
- RB07–RB10 : encarts « Support en préparation » remplacés par des consignes utiles de lecture, placement, prévision et observation. Aucun essai supplémentaire annoncé comme validé.
- RB03 : « diagnostic préparé » remplacé par « démonstration » dans la consigne élève.
- RB08 : historique des essais professeur retiré de l’explication de la règle et de l’introduction du changement de seuil. Valeurs, ordre des blocs, lancement A et conditions de comparaison inchangés.
- RB07/RB08 : légendes recentrées sur le raisonnement plutôt que sur le statut documentaire du schéma.
- RB09 : demande au professeur de revoir le support remplacée côté élève par un geste clair d’arrêt et de vérification accompagnée.
- Fiche commune : statut de préparation et mention de validation automatique remplacés par des consignes d’essai et une limite compréhensible du simulateur.

RB01–RB06 ne nécessitaient pas de refonte : les interventions professeur qui servent réellement à guider, préparer une connexion ou dépanner restent présentes. Les guides professeur et documents de recette conservent les réserves techniques et les essais manquants. « Développement intégré » ne devient pas « validé en classe ».

Un test de non-régression contrôle les champs élève des dix modules, le parcours et la fiche, séparément des réserves conservées dans les guides. Les contrôles pratiques et l’adaptation solo restent dans le backlog existant ; cette finition ne les clôt pas.

## Vérifications du lot

Dix tests robotique et 146 tests au total réussis ; aucun échec. `git diff --check` sans erreur. Tentative de reprise de l’onglet local refusée par la politique du navigateur avant le rechargement ; aucun contournement effectué. Le rendu post-modification n’a donc pas été confirmé dans le navigateur durant ce lot. Les changements concernent le texte, pas la structure de page ou le CSS. Aucun commit ni push.
