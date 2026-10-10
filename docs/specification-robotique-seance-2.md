# Robotique KidnKod — séance 2 : Réagir à une entrée

Préparation du 8 octobre 2026. RB03 « Le bouton donne une information » et RB04 « Choisir entre deux actions », selon la [roadmap](roadmap-robotique-kidnkod.md). Suite de la [séance 1 corrigée après revue](specification-robotique-seance-1.md).

**Statut : revue documentaire appliquée ; préparation Tinkercad, partage par lien et intégration RB03/RB04 au site effectués le 9 octobre 2026.** La [fiche élève](robotique-seance-2-eleve.md) et le [guide professeur](robotique-seance-2-professeur.md) intègrent les finitions de la revue. Voir la [recette réelle et ses limites](recette-tinkercad-bouton.md) et [l’adaptation en deux leçons](integration-robotique-bouton.md). L’accès élève et les observations continues restent à vérifier. Les choix ci-dessous décrivent la préparation initiale ; la recette donne les bornes et libellés effectivement relevés.

## 1. Résultat et prérequis locaux

Réutiliser le montage Arduino–LED et ajouter un bouton comme entrée. Le programme consulte son état de manière répétée : bouton maintenu → LED allumée ; bouton relâché → LED éteinte. L’élève explique la condition et ses deux conséquences, puis obtient le résultat opposé dans une copie.

Avant d’ajouter l’entrée, faire montrer la LED externe, la sortie commandée et les essais Éteindre/Allumer de la séance 1. Aider à retrouver le projet et les gestes de simulation. La réussite du bonus précédent, la maîtrise du câblage autonome et le vocabulaire électronique ne sont pas exigés.

Si la sortie ne fonctionne pas, reprendre uniquement le montage accompagné ; ne pas traiter simultanément une panne de LED et une nouvelle entrée. Le modèle complet doit rester disponible pour aider à lire les actions.

Exclusions : variable, compteur d’appuis, événement de clic, bascule mémorisée, rebond, capteur analogique, C++, deuxième LED et robot. Le bouton est une entrée commandée par une personne ; les mesures de capteur viennent au jour 4.

## 2. Montage candidat à préparer

| Élément | Choix proposé | Vérification future |
| --- | --- | --- |
| Sortie | Montage de séance 1, LED externe sur D8 avec résistance en série | Ne changer ni la polarité ni la sortie lors de l’ajout du bouton |
| Entrée | Bouton-poussoir momentané, lecture numérique D2 | Broche configurée en entrée ; bloc exact à relever |
| Référence au repos | Résistance de rappel vers GND, 10 kΩ candidate | État bas stable au repos, haut pendant l’appui |
| Connexions d’entrée | D2 reliée à un nœud ; ce nœud relié à GND via 10 kΩ et au 5 V via le bouton | Bornes du bouton correctement choisies, aucun court-circuit |
| Programmation | Comparaison de la lecture D2 à l’état haut, deux branches commandant D8 | Pas d’entrée pull-up mélangée avec la logique haut = appui |
| Attentes | Pas de longues attentes du programme de clignotement dans la nouvelle règle | Réponse observable au maintien et au relâchement |

Les bornes d’un bouton à quatre pattes ne se choisissent pas simplement « à gauche et à droite ». Repérer ses connexions internes dans le composant retenu avant tout schéma. Le montage d’entrée peut être largement préparé par le professeur, avec une connexion utile complétée par l’élève.

La documentation Arduino explique qu’une entrée doit avoir un état défini et cite couramment une résistance de rappel de 10 kΩ. Ce choix maintient ici un état bas au repos ; la résistance n’a pas le même rôle que celle de la LED. [Modes des broches et résistances de rappel](https://docs.arduino.cc/language-reference/en/variables/constants/inputOutputPullup/), [exemple Button](https://docs.arduino.cc/built-in-examples/digital/Button/).

Aucun calcul électrique exigé. Expliquer simplement : la petite résistance du bouton aide la carte à lire un état défini quand il n’est pas appuyé ; celle de la LED limite le courant. Ne pas prétendre que le bouton alimente directement la LED : il informe la carte, dont le programme commande la sortie.

## 3. Préserver le travail et isoler les commandes

Conserver `Mon-signal` intact. Créer une copie `Mon-bouton` pour ajouter l’entrée, selon la procédure de duplication à vérifier. Dans cette copie uniquement, remplacer le clignotement et ses attentes par la règle bouton. Aucun autre programme ne doit commander D8 simultanément ou après la condition.

Pour le défi opposé, créer `Mon-bouton-inverse`. Conserver `Mon-bouton` comme référence fonctionnelle. Si la duplication n’est pas disponible dans l’accès élève prévu, préparer une procédure équivalente vérifiée avant distribution ; ne pas demander une reconstruction complète par défaut.

## 4. Progression prévue

1. Retrouver le montage et vérifier la sortie avant l’ajout du bouton.
2. Compléter l’entrée accompagnée. Observer séparément les lectures au repos, en maintien et après relâchement, deux fois.
3. Pour ce diagnostic montré par le professeur, préparer un affichage de lecture permettant de voir les deux états sans devoir déjà construire le « si/sinon ». Aucun projet supplémentaire ouvert par l’élève. Le moyen exact reste à choisir et tester ; pas de variable ou de moniteur série à apprendre comme objectif élève.
4. Dans ce montage, relier repos à 0/LOW et appui à 1/HIGH sur D2. Distinguer lire D2 de commander D8. Poser la question « le bouton est-il appuyé maintenant ? »
5. Avant de montrer la règle complète, faire choisir l’action manquante du cas « sinon » sur un schéma de blocs, sans copie exécutable supplémentaire. Faire expliquer et prévoir les deux états.
6. Montrer la règle complète, construire et essayer les deux branches ensemble dans une consultation répétée, puis vérifier la prévision après appui et relâchement. Ne pas commencer par Allumer seule ni appeler cela un événement d’appui. Un seul résultat au repos n’est pas une preuve suffisante.
7. Défi de transfert : sur une copie du projet principal, obtenir LED éteinte pendant l’appui et allumée au repos. Donner le résultat attendu et garder le montage fixe ; laisser proposer la modification avant d’indiquer la stratégie. Conserver la condition et échanger les deux actions devient un indice gradué, pas la consigne initiale. Prévoir, essayer et expliquer ; noter l’aide reçue.
8. Retrouver la référence principale conservée, vérifier les trois états et enregistrer les deux versions.

### Schéma de lecture, pas capture d’interface

À chaque consultation : lire l’état du bouton → demander « appuyé ? » → si oui, Allumer ; sinon, Éteindre → consulter de nouveau.

La décision sélectionne une branche selon la lecture actuelle. « Sinon » n’est pas une action différée exécutée après Allumer : c’est l’autre cas. Les mots « maintenu » et « relâché » décrivent des états, pas deux événements à ajouter.

Lire quatre consultations successives : relâché → non → Éteindre ; maintenu → oui → Allumer ; toujours maintenu → oui → Allumer ; relâché → non → Éteindre. La troisième consultation rend explicite qu’une répétition n’alterne pas automatiquement les actions. La fiche élève présente cette trace en tableau.

## 5. Supports à produire ensuite

- Montage principal conservé ; ajout d’entrée complet et vérifié, version à compléter selon les besoins.
- Diagnostic de lecture séparé : pas une prétendue observation des entrées déduite d’un câblage non essayé.
- Exemple complet avec deux branches et répétition expliquée ; pas de clignotement concurrent.
- Schéma de blocs partiel avec seulement l’action du cas sinon manquante, sans nouveau projet élève.
- Références professeur du comportement principal et du résultat opposé ; versions distinctes des départs élèves.
- Schéma entrée → question → deux actions → nouvelle lecture, avec la mention « schéma de lecture ».

Ces projets exécutables ont été créés depuis cette préparation initiale. La recette relève les blocs anglais essayés ; les leçons du site les reprennent sans prétendre fournir une capture d’interface.

## 6. Critères et essais

| Essai | Modèle principal | Copie opposée |
| --- | --- | --- |
| Repos | LED éteinte | LED allumée |
| Appui maintenu | LED allumée | LED éteinte |
| Relâchement | LED éteinte | LED allumée |
| Second appui puis relâchement | Même paire de résultats | Même paire de résultats opposés |

Faire expliquer : entrée et sortie ; condition testée ; action de chaque cas ; intérêt de la consultation répétée ; différence entre actions échangées et montage conservé. Accepter le geste et la lecture accompagnée. Noter les aides de manipulation séparément de celles de raisonnement.

Question de transfert au bilan : « Si le bouton est maintenu longtemps, la LED doit-elle recommencer à clignoter ? Pourquoi ? » Réponse visée : non, le programme commande l’état correspondant à la lecture actuelle, sans le rythme du jour 1. L’activité n’évalue pas une définition générale des événements.

## 7. Recette différée et risques

Avant usage en cours, au moment choisi par l’utilisateur :

1. Vérifier connexions internes du bouton, alimentation, résistance de rappel et modes d’entrée/sortie.
2. Observer deux états de lecture stables et leur correspondance avec le geste simulé ; relever comment maintenir et relâcher le bouton dans l’interface.
3. Contrôler les libellés des blocs de lecture, comparaison, condition à deux branches et répétition.
4. Essayer les trois états deux fois pour le modèle et le défi, sans attentes longues ni autre commande de D8.
5. Vérifier le diagnostic séparé, le support partiel et la préservation des projets lors des copies et reprises.
6. Mettre les paramètres réellement retenus dans les fiches et les captures avant diffusion.

Une entrée instable ou une branche qui ne répond pas ne sera pas présentée comme un phénomène à résoudre par un débutant avec des variables, une bascule ou du rebond. Réparer d’abord la base technique avec le professeur.

Revue RB03/RB04 appliquée : diagnostic professeur, support partiel sur schéma, trace de lectures répétées et stratégie du défi réservée aux indices. La revue transversale conserve cette structure. La [séance 3 — Piloter un robot](specification-robotique-seance-3.md) est rédigée et corrigée après revue. La préparation et les essais techniques restent différés.
