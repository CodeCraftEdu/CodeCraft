# Robotique KidnKod — séance 4 : Décider avec un capteur

Préparation du 8 octobre 2026. RB07 « Lire une distance » et RB08 « S’arrêter devant un obstacle », selon la [roadmap](roadmap-robotique-kidnkod.md). Suite de la [séance 3 corrigée](specification-robotique-seance-3.md).

Actualisation technique du 9 octobre : [recette capteurs](recette-makecode-capteurs.md), mesure variable, détecteurs de ligne et arrêt selon distance essayés ; prototypes professeur exportés, comparaison de seuils effectuée. Le corps ci-dessous conserve la préparation pédagogique historique : l’existence des prototypes ne vaut pas publication des leçons, validation des placements souris ou recette d’accès élève. Consulter les [protocoles R10–R12](protocoles-verifications-manuelles.md) avant distribution.

**Statut actuel : RB07/RB08 et leurs guides intégrés au site en préparation, recette pratique incomplète.** Voir [l’adaptation générique, les quatre fichiers et les limites](integration-robotique-capteurs.md). La [fiche élève](robotique-seance-4-eleve.md) et le [guide professeur](robotique-seance-4-professeur.md) conservent le format atelier ; les pages n’imposent pas ce calendrier. Extension et modèle restent non confirmés par KidnKod. L’export de programmes ne valide pas un placement reproductible ni la distribution en cours.

## 1. Résultat et prérequis locaux

Passer d’un trajet préparé à une décision selon une mesure : si la distance est inférieure à une limite, arrêter ; sinon, avancer. Relire pour adapter l’action à la situation. Introduire ensuite une seule variable, `seuil`, comme réglage nommé de la limite.

Faire montrer l’arrêt explicite du jour 3 et rappeler les deux cas bouton–LED du jour 2 avec aide. Retrouver un projet et lire l’ordre d’une courte séquence. Ni réussite autonome du défi de trajet, ni connaissance préalable des variables ou du capteur ne sont requises.

Exclusions : variable `distance` ou `vitesse`, compteur, radio, recul, évitement, suivi de ligne, angles exacts, nouvelle construction de robot, code texte et promesse de sécurité physique. Le socle n’est pas une navigation autonome complète.

## 2. Base candidate et séparation des commandes

Conserver `Mon-trajet` et sa copie personnelle intacts. Fournir une nouvelle base `Mon-obstacle-fixe`, avec le même modèle/configuration que le jour 3 : initialisation accompagnée, moteurs initialement arrêtés, lecture de capteur disponible, aucun trajet ou événement moteur hérité. L’élève ne reconstruit pas l’extension.

La [documentation Microsoft microbit-robot](https://makecode.microbit.org/pkg/microsoft/microbit-robot) décrit une lecture de distance en centimètres et un affichage d’assistance par paliers de 5 cm. Cet affichage seul ne suffit pas à lire précisément une valeur frontière. L’extension reste bêta ; sa documentation ne valide pas notre base ni les valeurs particulières de mesure.

| Élément | Choix pédagogique proposé | À vérifier avant distribution |
| --- | --- | --- |
| Observation initiale | Diagnostic professeur, robot immobile, lecture numérique précise | Moyen d’affichage sans défilement lent ni conflit avec l’assistance ; pas de projet supplémentaire élève |
| Mesure | Bloc de lecture utilisé directement dans la comparaison | Unité, fréquence, orientation, portée et valeurs en absence de détection |
| Limite initiale | Nombre fixe choisi après essais | Valeur compatible avec des mesures fiables et un arrêt avant contact |
| Comparateur | Strictement inférieur, `<` | Libellé réel ; égalité appartient au cas sinon |
| Avancer | Même mode steer, direction neutre, faible puissance fixe | Commande sans longue attente bloquant la nouvelle lecture |
| Décision | Deux branches dans une consultation répétée | Initialisation achevée avant activation ; un seul endroit commande les moteurs |
| Reprise | Simulation arrêtée, position/orientation et obstacle préparés, puis relance | Aucun repositionnement du robot en mouvement ; éventuel retour à une mesure éloignée dans la même exécution vérifié séparément |

Le diagnostic numérique est préparé par le professeur : pas de variable à créer par l’élève pour observer la mesure. Les mouvements du robot, positions d’obstacle et interfaces de lecture ne sont pas supposés disponibles sans essais.

Ne pas réutiliser la séquence temporisée du jour 3 dans la règle autonome. La lecture et le choix doivent pouvoir recommencer rapidement ; cadence, unité et éventuelle courte pause technique sont à fixer lors de la recette, pas à deviner avec le groupe. L’activation de la répétition après initialisation est une responsabilité de préparation professeur ; aucune variable technique supplémentaire à enseigner.

Une valeur spéciale « pas de mesure » n’est pas automatiquement une distance proche ou une voie libre. Choisir d’abord des scènes donnant une mesure valide. Si la configuration exige une gestion supplémentaire des valeurs invalides, préparer et expliquer cette limite ou réviser le support ; ne pas masquer un traitement complexe comme une compétence déjà acquise.

## 3. Progression, sans introduire tout à la fois

1. Observer sur la démonstration professeur des lectures fiables à plusieurs positions, robot immobile. Faire constater ce qui change avec la scène et montrer capteur → mesure. Ne pas commander les moteurs pour cette découverte.
2. Choisir une limite fixe avec le professeur. Séparer « distance reçue » et « limite choisie ». Prévoir arrêter/avancer pour plusieurs mesures avant d’assembler les blocs.
3. Lire puis construire la règle complète : relire la distance → demander « distance < limite ? » → oui : Arrêter ; sinon : Avancer → relire. Rapprocher cette structure des deux cas du bouton au jour 2, pas d’un événement A/B.
4. Essayer les deux branches avec faible puissance et scènes préparées. Dans un même essai, partir avec une mesure éloignée : le robot avance, la mesure diminue à l'approche de l'obstacle, puis la règle commande l'arrêt avant contact. Cette transition montre une nouvelle décision sans relancer. Des scènes séparées vérifient aussi chaque branche, mais ne prouvent pas seules la réévaluation. Le retour à une mesure éloignée dans la même exécution est un essai complémentaire, uniquement si un geste de simulation a été vérifié.
5. Examiner l’égalité sur un tableau de lecture, sans exiger un placement au centimètre près dans le simulateur. Avec `<`, une distance égale à la limite choisit sinon. Garder ce comparateur cohérent dans tous les supports.
6. Une fois les deux cas compris, conserver `Mon-obstacle-fixe` et créer la copie `Mon-robot-prudent`. Créer `seuil`, lui donner au démarrage la même valeur que la limite fixe, puis utiliser sa valeur dans la comparaison à la place du nombre. Ne changer aucun autre réglage ; prévoir et vérifier que le comportement reste le même.
7. Manipulation guidée : le professeur propose une autre valeur de `seuil`, préparée pour laisser avancer le robot puis modifier le lieu de son arrêt avant contact. Lire ensemble l’effet attendu de la comparaison, changer uniquement la valeur initiale, puis relancer depuis la même scène avec la même puissance. Observer le résultat et noter la valeur conservée. Aucun défi autonome supplémentaire aujourd’hui : le choix de mission et de réglage appartient au jour 5.
8. Sauvegarder, retrouver les deux versions et expliquer mesure, seuil, deux actions et répétition. Conserver la copie avec variable comme départ prévu du jour 5, en indiquant les aides encore nécessaires.

Le socle prioritaire est une décision fixe comprise et observée dans les deux cas. Réserver ensuite le temps à l’introduction accompagnée de `seuil` et à la vérification à valeur identique. Si cette étape demande davantage de temps, reporter la modification guidée au début du jour 5. Noter « introduite avec aide » ou « à reprendre », pas « maîtrisée ». Conserver essais, pause et sauvegarde.

### Tableau de lecture pédagogique — pas réglages de simulation validés

Pour apprendre à lire `<`, prendre une limite fictive de 20 cm sur le papier :

| Distance donnée pour l’exercice | Distance < 20 ? | Action |
| --- | --- | --- |
| 30 cm | Non | Avancer |
| 15 cm | Oui | Arrêter |
| 15 cm à la consultation suivante | Oui | Arrêter |
| 30 cm après changement de situation | Non | Avancer |
| 20 cm exactement | Non | Avancer |

Ces valeurs servent uniquement au raisonnement ; elles ne prescrivent ni un seuil sûr ni une scène testée. La répétition n’oblige pas à alterner les actions. Ce programme peut repartir quand la mesure redevient éloignée : ce n’est pas un arrêt mémorisé ni un bouton d’arrêt d’urgence.

## 4. Première variable : un réglage nommé

Schéma pédagogique, pas code à saisir :

- au démarrage, après préparation du robot et avant activation de la règle : donner à `seuil` la valeur de référence ;
- dans la règle répétée : comparer la mesure actuelle à la valeur de `seuil` ;
- pour un nouvel essai : changer la valeur initiale choisie, préparer la scène et relancer.

`seuil` est le nom d’une valeur conservée par le programme. Ici nous l’utilisons comme réglage : elle ne change pas toute seule avec la distance. Le capteur fournit la mesure ; nous choisissons la limite. Introduire donner une valeur et utiliser cette valeur, pas les opérations d’incrémentation.

Le nom rend le rôle du nombre lisible : c'est notre limite d'arrêt. Cette variable ne donne pas une nouvelle capacité au robot et n'est pas indispensable à cette petite règle. Avec la même valeur que le nombre fixe, le comportement attendu reste identique.

Pour une même distance de l’exercice, comparer ensemble deux seuils fictifs de part et d’autre de cette distance avant la manipulation guidée. Faire expliquer pourquoi un seuil plus grand peut demander l’arrêt alors que la mesure n’a pas changé. Ne pas généraliser en « nombre plus grand = robot plus rapide ». Le professeur peut montrer cette relation ; son redécouvrement autonome n’est pas exigé aujourd’hui.

## 5. Supports futurs et preuves

Désormais fournis dans l’intégration : observation immobile ; base sans trajet concurrent ; référence à limite fixe ; tableau `<` avec égalité ; référence avec `seuil` initialisé/utilisé ; valeurs expliquées sur les pages. Reste à fiabiliser avant distribution : deux placements valides, remise au départ, approche sans relance et comparaisons avec ces nouveaux fichiers, reprise des sauvegardes et accès élève. Les anciens essais de recette ne valident pas automatiquement ce nouveau lancement.

| Observation | Preuve recherchée |
| --- | --- |
| Lectures à plusieurs positions | Mesure reçue distinguée du nombre choisi comme limite |
| Lecture des trois cas inférieur/égal/supérieur | Choix des branches cohérent avec `<`, égalité expliquée sur support |
| Scène éloignée puis proche | Avance et arrêt constatés, arrêt avant contact dans les scènes préparées |
| Approche d'un obstacle dans la même exécution | Mesure éloignée puis proche pendant l'avance, nouvelle action d'arrêt choisie sans redémarrage |
| Éventuel retour à une mesure éloignée dans la même exécution | Reprise de l'avance, seulement si le geste de simulation correspondant a été vérifié |
| Même limite fixe puis même valeur de `seuil` | Substitution du nombre par la variable, comportement attendu conservé |
| Modification guidée de seuil | Prévision accompagnée, une valeur proposée par le professeur, scène et puissance conservées ; effet observé et aides notées |
| Sauvegarde | Principal fixe préservé, projet prudent nommé et récupérable |

Question de sortie : « Robot immobile et obstacle immobile, nous changeons seulement la valeur initiale de `seuil`. Est-ce la mesure reçue ou la limite choisie que nous modifions ? Montre où la nouvelle valeur est donnée et où elle est utilisée. » Accepter le geste ou une lecture accompagnée.

## 6. Recette différée et sources

La [répétition MakeCode](https://makecode.microbit.org/reference/basic/forever) permet de réexécuter une partie du programme. La documentation des [variables](https://makecode.microbit.org/blocks/variables) distingue affectation et utilisation d’une valeur. Nous retenons seulement ces opérations et une seule règle moteur, sans architecture concurrente à apprendre.

Avant les cours, au moment choisi par l’utilisateur :

1. Vérifier modèle/version, capteur simulé, unités, orientation, portée, rafraîchissement et valeurs particulières hors détection.
2. Préparer la lecture numérique immobile sans ajouter un objectif variable ni provoquer de conflit d’écran ou une attente d’affichage gênant la décision.
3. Vérifier initialisation avant répétition, commande d’avance non bloquante, arrêt, cadence et absence d’autre commande moteur ou d’assistance masquant les branches.
4. Choisir seuil fixe et faible puissance ; essayer plusieurs positions d’obstacle et vérifier, dans une exécution, l’avance initiale puis l’arrêt avant contact. Préparer une seconde valeur pour la manipulation guidée, produisant un arrêt différent tout en laissant avancer le robot au départ. Ne pas déduire une sécurité physique d’une simulation.
5. Vérifier séparément si un geste permet de retrouver une mesure éloignée pendant la même exécution et d'observer la reprise de l'avance. Cet essai reste complémentaire ; arrêter la simulation avant de repositionner manuellement le robot. Ne pas inventer un déplacement d’obstacle interactif non disponible.
6. Essayer substitution fixe → variable à valeur identique, initialisation, relance après modification et comparaison de deux seuils depuis des scènes identiques.
7. Vérifier copies et export/import, puis remplacer les mentions de réglages provisoires par les valeurs et captures réellement retenues.

## 7. Revue pédagogique appliquée

La revue transversale conserve mesure, décision répétée et introduction de `seuil`. Elle remplace le défi autonome final par une manipulation guidée et donne davantage de temps à la première variable. La fiche élève est allégée ; les précisions techniques et aides restent dans le guide. Le retour à une mesure éloignée dans la même exécution demeure facultatif et soumis à vérification technique.

Suite : la [séance 5](specification-robotique-seance-5.md) accueille le choix personnel de mission, les essais et la présentation. Ses supports sont rédigés et corrigés après revue. La préparation et les essais techniques restent différés.
