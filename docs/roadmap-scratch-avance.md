# Scratch avancé : un jeu à construire en autonomie

15 octobre 2026. Cadrage proposé à partir de l'état du dépôt et de l'objectif confirmé par l'utilisateur. **Les quatre corrections de cadrage sont appliquées et le prototype technique des transitions passe ses contrôles. Les cinq premiers chapitres sont intégrés, revus et corrigés, dont Messages et son dépannage par envoi temporaire isolé. Le sixième chapitre États est également intégré, revu et corrigé. Le septième chapitre Tests personnels est également intégré, revu et corrigé, voir la [revue du dernier chapitre](revue-scratch-mission-tests.md).** La [revue pédagogique](revue-roadmap-scratch-avance.md) conserve les constats et le relevé des corrections. La [recette du prototype](recette-scratch-mission-balises.md) distingue les mécanismes exécutés, les transformations mesurées et les essais pédagogiques restant à effectuer. Les fichiers du prototype restent des références techniques. Le [premier segment intégré](integration-scratch-mission-segment-1.md) possède désormais ses propres textes, guides et téléchargements. Le [chapitre Clones](integration-scratch-mission-clones.md) prolonge ce jeu avec des obstacles mobiles ; sa [revue](revue-scratch-mission-clones.md) est corrigée. Le [chapitre Messages](integration-scratch-mission-messages.md) ajoute le passage unique au secteur 2.

## Objectif retenu

Proposer un parcours public autonome : un élève ayant les bases de Scratch construit progressivement un même jeu, comprend ses règles, le modifie et sait chercher une erreur. Pendant un atelier accompagné, un professeur peut ouvrir directement une explication utile puis revenir au projet du groupe.

L'autonomie est l'usage principal à concevoir et à vérifier. L'accès ponctuel pendant un stage est un deuxième usage de ces mêmes ressources. La présence d'exercices indépendants ne suffit pas à déclarer le parcours autonome terminé.

Ce document devient la référence pour cette évolution Scratch. La [revue des trois supports](revue-supports-scratch-stage.md) conserve ses constats et corrections historiques ; sa priorité donnée au support ponctuel ne définit plus la cible du parcours. Les autres domaines gardent leur feuille de route.

Les chapitres ne correspondent pas à des séances. Le parcours public n'impose ni cinq jours ni dix heures. Il ne contient pas de déroulé propre à un organisme, de consignes reprises d'un guide interne ou de préparation privée du professeur.

## Point de départ vérifié

| Existant                                                                                                                                                                                          | État et décision                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Premiers pas avec Scratch](../content/pathways/scratch-debutants.json)                                                                                                                           | 17 modules en quatre chapitres, de la découverte au projet personnel. Conserver ce parcours et ses identifiants pendant le chantier.                                                      |
| [Vies et contacts](../content/modules/jeux-video/scratch-vies-contacts.json)                                                                                                                      | Explication, dépannage et activité indépendante repliée. Réutiliser comme aide sur les contacts ; ce n'est pas une étape cumulative du futur jeu.                                         |
| [Clones mobiles](../content/modules/jeux-video/scratch-clones-mobiles.json)                                                                                                                       | Création, déplacement, suppression et activité indépendante. Réutiliser les explications ; adapter explicitement le passage d'une série finie à une production continue.                  |
| [Niveaux et états](../content/modules/jeux-video/scratch-niveaux-etats.json)                                                                                                                      | Transitions, protection des actions et exercice de clics. Réutiliser les notions ; écrire leur intégration dans le jeu.                                                                   |
| [Messages](../content/modules/jeux-video/scratch-coordination.json), [clones](../content/modules/jeux-video/scratch-clones.json), [débogage](../content/modules/jeux-video/scratch-debogage.json) | Références et reprises disponibles. Ne pas imposer de refaire leurs petits projets pour continuer le fil conducteur.                                                                      |
| Six projets Scratch des trois aides                                                                                                                                                               | [Publication et intégration consignées](publication-scratch-supports.md). Conserver les URL, les téléchargements et leur fonction d'exemples indépendants.                                |
| Jeu et fiches de préparation enseignant                                                                                                                                                           | Des comportements ont été testés dans une préparation privée. Cela ne prouve pas l'autonomie d'un cours public. Ne pas importer ce dossier ou ses scripts de migration dans le catalogue. |

Le manque principal est le raccordement pédagogique : un début identifié, des transformations expliquées, des fichiers cohérents entre les étapes et une vérification depuis les seuls supports élèves.

## Entrer et retrouver son travail

Nouvelle entrée prévue dans Jeu vidéo : **Scratch avancé : construire un jeu complet**, identifiant proposé `scratch-avances`. Ce titre désigne un approfondissement accessible après les bases, sans promettre une maîtrise exhaustive de Scratch.

L'entrée montre le jeu final et ses commandes, puis permet de vérifier les bases sur une petite manipulation : choisir le bon personnage, modifier un déplacement, lire une condition, changer un compteur et retrouver une sauvegarde. Chaque difficulté propose une reprise précise, consultée selon la règle de retour décrite plus bas. Les cases cochées, l'âge et l'inscription à un stage ne conditionnent pas l'accès.

L'élève doit déjà savoir assembler et lancer une pile, utiliser une boucle et un `si`, déplacer un personnage, distinguer `mettre` et `ajouter`, sauvegarder puis rouvrir un projet. Les messages, les clones et l'état de partie seront enseignés dans le nouveau parcours.

Le chemin principal consiste à conserver et enrichir sa propre version. Une sauvegarde numérotée permet de revenir en arrière. Un départ de secours et une référence terminée restent accessibles, avec leur rôle explicite : ouvrir un `.sb3` remplace le projet courant, ce n'est pas ajouter un fragment de code. L'enregistrement local permet de suivre sans compte Scratch ; Remix constitue une autre possibilité expliquée une fois à l'entrée.

## Jeu fil conducteur proposé : Mission balises

Le joueur pilote un petit véhicule dans une zone et rejoint une balise. Chaque activation ajoute un point et déplace la balise à l'autre extrémité de la zone, entre deux positions connues. Il évite des obstacles, dispose de trois vies et doit activer six balises pour gagner. À trois points, un second secteur change le décor et augmente la vitesse des obstacles. À zéro vie, il perd. Le drapeau prépare une nouvelle partie.

Le jeu commence avec un obstacle fixe, puis celui-ci est remplacé par des copies qui traversent la zone de gauche à droite à différentes hauteurs. Cette évolution rend visibles les rôles du modèle et des clones, tout en s'appuyant sur l'aide existante des clones mobiles.

Le nom et l'habillage peuvent être adaptés pendant la réalisation sans changer les notions travaillées. Les ressources graphiques seront créées pour CodeCraft ou réutilisées avec une provenance vérifiée. Les mécanismes sont choisis pour enseigner la programmation ; le document privé de stage n'est pas une source de textes ou d'illustrations à publier.

### Règles à fixer dans les exemples et les tests

- Une activation de balise donne un point. La balise alterne entre `(-160, 0)` et `(160, 0)` : une comparaison de son abscisse permet de choisir l'autre position. Les costumes de référence rendent ces deux positions assez éloignées pour séparer immédiatement la balise du véhicule. Le placement aléatoire de la balise reste un prolongement après le socle.
- Un contact continu avec l'obstacle fixe retire une vie jusqu'à la séparation ; le déplacement continue dans une autre pile.
- Un clone touché retire une vie puis se supprime. Deux clones différents peuvent retirer deux vies : cette règle ne représente pas une invulnérabilité générale.
- Le compteur reste au minimum à zéro. Si défaite et victoire sont possibles au même contrôle, la défaite est prioritaire.
- Le score total est conservé au changement de secteur. Les seuils sont trois points pour le secteur 2 et six pour gagner.
- Dans la version finale, l'état est verrouillé avant l'annonce ; points, déplacements, dégâts et créations sont refusés dès la fin. Le drapeau réinitialise compteurs, décor, positions, vitesse, messages visibles et clones.

Le son, le chronomètre, les menus, les paramètres de blocs personnalisés et plusieurs types d'ennemis sont hors du chemin principal. Ils ne doivent pas retarder l'obtention d'un jeu complet.

### Réglages de référence et reprise après une variation

Les acteurs portent les noms stables `Pilote`, `Balise` et `Obstacle`. La scène possède les décors `secteur1` et `secteur2`. Les variables communes s'appellent `score`, `vies`, `vitesseObstacle`, puis `niveau` et `etat` lorsqu'elles sont enseignées. Les fichiers, les menus montrés et les consignes emploient les mêmes noms.

Les valeurs suivantes sont le contrat de reprise du chemin principal. Le prototype confirme les limites, la séparation des balises et les mécanismes ; une partie complète avec obstacles reste nécessaire pour apprécier leur difficulté avant de finaliser les références pédagogiques. S'il impose un ajustement, mettre à jour ce contrat et tous les exemples concernés ensemble.

| Repère              | Valeur de référence prévue                                                                                                                |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Pilote              | Costume contenu dans 32 × 32 pixels à taille 100 %, départ `(0, -100)`, déplacement de 4 sur chaque axe.                                  |
| Zone de déplacement | Abscisse comprise entre -200 et 200, ordonnée entre -140 et 140.                                                                          |
| Balise              | Costume contenu dans 32 × 32 pixels, départ `(-160, 0)`, alternance avec `(160, 0)`.                                                      |
| Obstacle fixe       | Costume contenu dans 40 × 40 pixels, position `(0, 0)`.                                                                                   |
| Clones d'Obstacle   | Départ en x = -210, hauteur tirée entre -100 et 100, suppression lorsque x > 210 ou après un coup. Intervalle de création de 1,2 seconde. |
| Compteurs           | Score 0 et vies 3 au départ ; victoire à six points, défaite à zéro vie.                                                                  |
| Secteurs            | Niveau 1 au départ, niveau 2 à trois points. `vitesseObstacle` vaut 4 au départ puis 7 dans le secteur 2.                                 |
| Version finale      | `etat` vaut `preparation`, `en jeu`, `gagne` ou `perdu` ; l'annonce dure deux secondes, puis le programme s'arrête.                       |

Une variation de vitesse, de vies ou de seuil se fait dans une copie d'essai conservée séparément. Après l'expérience, rouvrir sa sauvegarde principale, vérifier les valeurs attendues et poursuivre avec elle. Le cours indique les deux noms de fichiers et les valeurs à retrouver ; il ne demande pas d'importer une solution terminée pour reprendre.

Chaque fin de chapitre affiche un court encart de reprise : personnages et piles nécessaires, résultat attendu, valeurs introduites jusque-là et sauvegarde à conserver. Par exemple, après l'expérience d'une victoire à deux points, la sauvegarde principale doit encore gagner à six avant l'ajout du secteur 2 à trois points. Les tests des copies d'essai utilisent les valeurs choisies pour ces copies.

Le nom du jeu, les couleurs et les textes peuvent se personnaliser au fil du parcours. Les noms d'acteurs, leurs dimensions de collision et les constantes du chemin principal restent ceux du modèle jusqu'au dernier chapitre. La personnalisation finale permet ensuite de changer ces choix, de prévoir leurs effets et d'adapter les tests.

## Progression cumulative proposée

Les identifiants ci-dessous sont des propositions pour la réalisation. Aucun module vide n'est ajouté au catalogue à ce stade.

| Étape et identifiant proposé                               | Ce que l'élève construit dans son jeu                                                                                                                                                   | Résultat observable et transfert                                                                                                                               | Reprises ou aides existantes                                                 |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Prendre les commandes, `scratch-mission-commandes`         | Ouvrir la base graphique, programmer le départ, le déplacement continu et les limites. Les acteurs et leurs tailles sont fournis, leur code est identifié comme fourni ou à construire. | Quatre directions et retour au départ depuis deux positions. Modifier une vitesse et prévoir son effet.                                                        | `scratch-pilotage`, `scratch-boucles`, `scratch-reactions`.                  |
| Activer les balises, `scratch-mission-balises`             | Initialiser le score, tester le contact, compter une activation, replacer la balise et obtenir une première victoire immédiate à six points.                                            | Aucun gain à distance ou en chaîne ; deux parties indépendantes. Modifier un seuil et vérifier sa limite.                                                      | `scratch-variables`, `scratch-fin-partie`.                                   |
| Traverser un danger, `scratch-mission-vies`                | Initialiser trois vies, ajouter une surveillance séparée avec attente de séparation et compléter la décision centrale de fin par la défaite.                                            | Contact maintenu : une vie ; séparation puis retour : une autre. Le véhicule peut toujours sortir du danger. Expliquer ce qui change avec quatre vies.         | `scratch-vies-contacts`, accès direct `solution`.                            |
| Créer des obstacles mobiles, `scratch-mission-clones`      | Retirer explicitement l'ancien danger et sa surveillance, cacher le modèle, créer les clones, les montrer, les déplacer et les supprimer au contact ou à la sortie.                     | Le modèle reste caché, plusieurs copies se déplacent et disparaissent. Comparer vitesse et intervalle de création en ne changeant qu'une valeur.               | `scratch-clones`, `scratch-clones-mobiles`, accès `fabrique` et `mouvement`. |
| Changer de secteur par message, `scratch-mission-messages` | Introduire `niveau`, puis une émission et des réceptions de `secteur2`. Changer la variable avant le signal, changer le décor et la vitesse.                                            | Le passage à trois points a lieu une seule fois ; à quatre points, il ne recommence pas. Modifier le seuil et expliquer qui envoie et qui reçoit.              | `scratch-coordination`, `scratch-niveaux-etats`, accès `niveau`.             |
| Annoncer et verrouiller la fin, `scratch-mission-etats`    | Introduire `etat`, transformer la fin immédiate en annonce, protéger chaque action et rétablir l'état initial au drapeau.                                                               | Pendant l'annonce, aucun mouvement, point, dégât ou nouveau clone ; relance après victoire et défaite. Expliquer pourquoi attendre puis arrêter ne suffit pas. | `scratch-niveaux-etats`, accès `victoire` et `actions`.                      |
| Régler et transformer son jeu, `scratch-mission-tests`     | Réaliser les essais de limites, corriger une panne expliquée, comparer une difficulté puis apporter une modification personnelle bornée.                                                | Version jouable rouverte depuis la sauvegarde ; prédiction, essai et explication d'une modification sans modèle intégral.                                      | `scratch-debogage`, `scratch-temps-difficulte`, `scratch-projet-personnel`.  |

Chaque étape produit une version jouable et conservable. La victoire immédiate est un état intermédiaire volontaire ; l'annonce protégée est introduite après les messages, avec la raison de cette transformation.

Les blocs personnalisés restent un prolongement utile lorsqu'un fragment se répète et que l'élève peut expliquer sa définition et ses appels. Ils ne constituent pas un prérequis artificiel avant les clones. Le chronomètre reste également un approfondissement, pas une nouvelle condition de fin à gérer simultanément dans le socle.

### Mécanismes à enseigner au moment utile

Dans Commandes, partir d'une direction et d'une limite : déplacer, comparer l'abscisse à une borne et rétablir cette borne si elle est dépassée. Faire prévoir et tester la même situation de l'autre côté, puis transposer à l'ordonnée. Les quatre limites ne sont pas une pile complexe fournie sans explication.

Dans Balises, construire d'abord le contact et le score, puis le passage entre les deux positions. Enseigner visiblement la comparaison et le `si … sinon` qui sélectionne l'autre position. Tester les deux sens du trajet, l'immobilité au contact et le redémarrage. Il n'y a pas de boucle de recherche d'un emplacement aléatoire dans ce chapitre.

Dans Clones, introduire séparément le bloc de nombre aléatoire pour la hauteur : deux bornes, un tirage et une position observée. Le modèle commence à une abscisse connue ; aucune recherche de position sans contact n'est ajoutée à l'apprentissage des clones.

### Responsabilités stables des piles

| Propriétaire | Responsabilités à conserver                                                                                                                                               | Évolution prévue                                                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scène        | Initialiser les variables communes déjà enseignées et surveiller les conditions de fin dans une seule pile de décision.                                                   | Score et victoire en Balises ; vies et priorité de défaite en Vies ; vitesse commune en Clones ; niveau et signal en Messages ; état et signal de résultat en États.      |
| Pilote       | Revenir au départ et gérer les quatre touches et les limites.                                                                                                             | Ajouter la protection de déplacement en États, puis une pile de réception courte pour afficher le résultat. La scène décide du résultat ; Pilote l'annonce avant l'arrêt. |
| Balise       | Préparer sa position, détecter le contact, ajouter un point et changer de côté dans une même pile.                                                                        | Ajouter la protection de collecte en États. Le contrôleur de fin reste sur la scène.                                                                                      |
| Obstacle     | En Vies, se placer et surveiller les contacts du danger fixe, avec attente de séparation. En Clones, cacher le modèle, produire les copies et exécuter leur comportement. | Retirer la surveillance fixe lors du passage aux clones ; lire la vitesse commune à chaque déplacement ; protéger création, déplacement et dégâts en États.               |

Les initialisations doivent précéder les premières interactions : aucun point ni dégât au drapeau, y compris si la partie précédente s'est arrêtée pendant un contact. Dans le prototype, Balise et Obstacle fixe attendent la séparation initiale après leur placement, avant de surveiller les contacts. Ce passage est à enseigner explicitement. Les démarrages en ordre inversé ont été vérifiés sans ajouter de message de synchronisation préalable.

Le message `secteur2` est émis par la scène après le passage de `niveau` à 2. Une réception courte sur la scène change le décor et la vitesse commune. Elle ne contient pas de boucle infinie. Les clones lisent cette vitesse ; leur création et leur déplacement restent sur Obstacle. Dans États, le message `resultat` déclenche l'annonce sur Pilote après le verrouillage par la scène.

### Transformations entre les étapes

| Passage             | Conserver                                                           | Ajouter, modifier ou retirer                                                                                                                                                                                   | Essai intermédiaire                                                                                                     |
| ------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Commandes → Balises | Déplacement, limites et départ de Pilote.                           | Ajouter la pile Balise, l'initialisation de score et la décision de victoire sur la scène.                                                                                                                     | Un point par activation, score 0 au drapeau, victoire à six.                                                            |
| Balises → Vies      | Collecte et mouvement dans leurs piles ; un seul contrôleur de fin. | Ajouter vies et la surveillance fixe d'Obstacle. Compléter le contrôleur par le test de défaite avant celui de victoire.                                                                                       | Contact continu, séparation, dernier contact, deux relances.                                                            |
| Vies → Clones       | Compteurs, décision de fin, collecte et mouvement.                  | Retirer de l'ancienne pile Obstacle la surveillance fixe avec son attente. La remplacer par la fabrique et la pile de clone ; déplacer le retrait de vie dans le contact du clone. Ajouter la vitesse commune. | Le modèle reste caché, une copie apparaît puis disparaît ; les vies ne sont modifiées par aucune ancienne surveillance. |
| Clones → Messages   | Fabrique, mouvement et suppression des copies ; fins immédiates.    | Ajouter niveau à l'initialisation. Dans la décision, après les fins prioritaires, passer niveau à 2 puis émettre secteur2. Ajouter la réception courte qui change décor et vitesse.                            | Signal provoqué isolément, puis transition unique à trois points.                                                       |
| Messages → États    | Propriétaires, corps des actions, compteurs et effets du secteur 2. | Ajouter etat. Modifier les branches de fin du contrôleur ; ajouter les protections nommées ci-dessous, puis remplacer l'arrêt immédiat par l'envoi du résultat et son annonce sur Pilote.                      | Verrouillage et actions refusées d'abord ; annonce ensuite ; remise à zéro complète enfin.                              |

Les changements de structure sont montrés sur des piles identifiées, avant et après. Le chapitre Clones explique aussi le changement de règle : un danger fixe attend une séparation, une copie qui a touché disparaît. Il ne faut pas garder les deux mécanismes de dégâts pour un même obstacle.

### Jalons des chapitres Messages et États

Dans Messages, obtenir d'abord un effet en cliquant sur une pile d'émission isolée. Repérer l'émission et la réception, puis déplacer l'émission dans la décision de passage de secteur. Changer `niveau` avant le signal. Tester trois points, puis quatre : le signal ne doit pas être renvoyé à chaque tour de boucle. Le drapeau rétablit le premier décor et la vitesse initiale.

Dans États, conserver trois jalons successifs à l'intérieur du chapitre :

- Faire décider la scène une seule fois en quittant l'état de jeu, avec l'arrêt immédiat encore présent. Vérifier la priorité des deux fins et la remise à zéro de l'état.
- Ajouter et tester les protections du déplacement de Pilote, de la collecte, de la création des clones, de leur déplacement et de leurs dégâts. Prévoir une copie d'essai permettant d'observer le verrouillage sans arrêt immédiat, avant toute annonce avec attente. Le créateur revérifie l'état après son attente ; chaque clone refuse un nouveau coup dès la fin et se supprime lorsqu'il constate que le jeu est terminé. Pilote et Balise restent immobiles, sans nouvelle collecte.
- Remplacer l'arrêt immédiat par le signal de résultat. Pilote annonce la fin pendant deux secondes puis arrête tout. Relancer pendant l'annonce, puis après l'arrêt : état, compteurs, positions, décor, vitesse et affichage reviennent au départ. Aucun retard d'une ancienne annonce ne doit arrêter la nouvelle partie.

Cette décomposition ne crée pas de nouveaux modules obligatoires. Les trois jalons sont exécutés dans le prototype avant la rédaction des sept chapitres. Si un jalon demande encore de reconstruire plusieurs piles sans rapport avec sa notion, corriger cette transition avant de produire les fichiers pédagogiques.

## Écrire réellement pour une personne seule

Dans chaque étape, le chemin visible indique le fichier ou la version de départ, le personnage concerné, le résultat à obtenir et les changements précis. Les consignes essentielles et la construction principale sont ouvertes ; les indices, solutions et prolongements peuvent rester repliés.

La construction avance par fragments courts : action, résultat observable, puis explication. Pour chaque bloc nouveau, montrer sa catégorie, sa place et la distinction entre le bloc à glisser, le menu à choisir et la valeur à saisir. Les schémas complets et la référence Scratch doivent représenter exactement la même version.

Les étapes sur les messages et les états présentent un inventaire avant/après des piles : conserver, déplacer, remplacer ou ajouter. Chaque changement est suivi d'un essai. Une pile ancienne retirée est nommée explicitement pour éviter deux surveillances de dégâts ou deux contrôleurs de fin.

Aucune transformation ne doit dépendre d'un script privé exécuté par le professeur entre deux chapitres. Un fichier de secours reste possible après sauvegarde, mais ne remplace pas l'explication de la transformation. Si la transition reste trop lourde, la diviser en sous-étapes plutôt que fournir silencieusement le jeu terminé.

Chaque aide relie un symptôme à une vérification précise : sélectionner un acteur, lire une condition, observer un compteur, puis retester. La correction complète vient après les indices. Au moins une modification avec prédiction et une explication vérifient la compréhension au-delà de la reproduction des blocs.

Pour les règles cumulatives, fournir une procédure courte sur une copie de test : préparer un compteur juste avant un seuil, déclencher le dernier événement réel et observer. Les piles de test ne restent pas actives dans la version de jeu.

## Consultation ponctuelle pendant un stage

Les trois aides conservent leurs identifiants, leurs accès directs et leurs exemples indépendants. Elles restent consultables sans démarrer Mission balises. Le professeur ouvre la notion utile, fait observer le mécanisme et revient au projet du groupe ; aucune étape supplémentaire du parcours autonome n'est imposée.

Les différences doivent être explicites : le danger fixe attend une séparation, le clone touché disparaît ; l'aide produit trois balles, le jeu produit des obstacles régulièrement ; l'exemple des niveaux compte des clics, le jeu compte des activations. L'élève transpose une idée, pas une pile entière sans adaptation.

Les futurs chapitres du jeu pourront aussi fournir des accès directs aux transformations, mais les liens actuels vers les trois aides doivent rester utilisables. Le déroulé temporel et les adaptations d'un stage restent dans la préparation professeur.

### Lire une aide et retrouver son chapitre

Le chemin principal contient sur place toutes les explications nécessaires pour construire le jeu. Un extrait peut être réutilisé par le type `reference` existant lorsqu'il est autonome et que ses noms correspondent au contexte ; un extrait dépendant d'un atelier différent ne remplace pas la consigne du jeu.

La consultation complète d'une aide ou d'une reprise se fait dans un autre onglet, au moyen d'un lien identifié « Ouvrir l'aide dans un autre onglet » ou « Revoir la notion dans un autre onglet ». Le chapitre d'origine reste ouvert. L'aide permet de revenir en fermant son onglet ; le texte accompagnant le lien précise ce geste. Le sommaire de l'onglet d'aide garde le parcours auquel cette aide appartient. Le chapitre Mission balises conserve son sommaire et sa destination suivante.

Ce choix évite de forcer les trois aides dans la liste des sept étapes ou d'étendre le routeur pour simuler une appartenance. À l'intégration, vérifier si le champ de lien existant permet l'ouverture dans un nouvel onglet ; sinon ajouter uniquement cette option au lien concerné, avec le contrôle ciblé approprié. Les accès directs des stages continuent à ouvrir normalement les aides indépendantes.

La recette devra parcourir le trajet depuis chaque chapitre : ouvrir l'aide dans son onglet, lire, fermer cet onglet et retrouver le même passage du jeu. Vérifier également le clavier, le libellé d'ouverture, l'absence de changement du chapitre d'origine et son bouton de suite. Si le mécanisme `reference` est utilisé, contrôler aussi l'absence de lien ou de tâche qui enverrait involontairement vers l'atelier source.

## Réutiliser sans multiplier les copies

| Élément                                                       | Traitement prévu                                                                                                                                                                                 |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Rendu des blocs Scratch, téléchargements, liens et navigation | Réutiliser les composants existants. Un nouveau moteur de rendu ou un système de suivi automatique n'est pas prévu.                                                                              |
| Trois ressources approfondies et six projets partagés         | Conserver comme bibliothèque d'aides. Référencer les explications utiles, sans recopier leur atelier complet dans chaque chapitre.                                                               |
| Parcours débutant et autres cours Scratch                     | Conserver leurs identifiants et leurs liens. Ne pas présenter les 17 modules comme prérequis obligatoires au nouveau jeu.                                                                        |
| Nouveau parcours et chapitres cumulatifs                      | Ajouter les sources dans `content/pathways/` et `content/modules/jeux-video/`, les déclarer dans le manifeste et l'entrée du domaine, puis régénérer le catalogue.                               |
| Fichiers de jeu                                               | Préparer une base sans solution et une référence par étape. Identifier le code déjà présent et celui qui sera ajouté ; garder des noms et une structure stables.                                 |
| Registre des projets et ressources graphiques                 | Enregistrer les nouvelles ressources séparément de celles des trois aides. Les projets publics auront des consignes, crédits et liens vérifiés ; les téléchargements locaux restent disponibles. |
| Préparation privée                                            | Réutiliser les observations techniques comme pistes à recontrôler, pas comme preuve que les nouveaux fichiers et textes sont validés.                                                            |

Les trois aides peuvent rester dans le parcours actuel pendant la mise en place. Un éventuel retrait ou déplacement futur demandera une décision distincte ; ce cadrage n'autorise pas la réorganisation générale des 17 modules.

## Lots de réalisation et critères de clôture

| Lot                             | Livrable concret                                                                           | Condition de clôture                                                                                                                    | État                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Cadrage                         | Cette roadmap, inventaire de réutilisation et décision sur le jeu.                         | Revue des prérequis, dépendances, charge des transitions et limites du périmètre.                                                       | Corrigé après revue.                              |
| Prototype des transitions       | Une version minimale par transformation sensible et relevé des différences de piles.       | Départs sans point ni dégât, passage fixe vers clones, secteur unique, verrouillage, protections et relance pendant l'annonce vérifiés. | Contrôlé, voir la recette.                        |
| Premier segment                 | Commandes, balises et vies, avec fichiers, consignes et guides génériques.                 | Après le prototype, on peut obtenir les trois versions depuis les seuls supports, sans consigne orale complémentaire.                   | Intégré, revu et corrigé.                         |
| Approfondissement               | Clones, messages, états et tests personnels.                                               | Les transformations sont explicites et chaque fin d'étape reste fonctionnelle ; aucun raccordement caché entre deux fichiers.           | Intégré, revu et corrigé.                         |
| Intégration et recette complète | Parcours visible, navigation, liens de reprise, aides directes et rapport de vérification. | Construction depuis la base, sauvegardes/réimports, transferts et contrôles techniques réussis.                                         | Raccords contrôlés ; reconstruction non réalisée. |

**Modes conseillés : Sol High pour le cadrage, la rédaction et la réalisation ; Astra High pour la revue pédagogique avant la réalisation et pour une revue finale de l'autonomie.** Ce document n'est pas lui-même une revue Astra. Un changement de modèle ou une validation indépendante ne se déduit pas de sa rédaction.

L'estimation initiale de 6 à 10 heures pour la réalisation et les vérifications reste un ordre de grandeur, pas un engagement. Les sept étapes sont maintenant rédigées ; leur intégration ne remplace pas la recette complète du chemin autonome. Après le prototype, préciser les fichiers réellement réutilisables et le travail de transition avant de confirmer cette enveloppe. Aucun délai d'apprentissage élève n'est déduit du temps de manipulation de l'assistant.

### Vérifier la technique et l'autonomie séparément

- Vérifier les sources et le rendu par les contrôles proportionnés du [projet](verification-developpement.md) : génération du catalogue, lint si JavaScript modifié, `npm run check:target -- scratch` pendant les changements, puis contrôle complet requis avant publication des changements.
- Examiner les captures des entrées, constructions, aides, fins de chapitres et vues étroites. La lecture des piles longues demande un examen visuel, pas seulement l'absence de débordement.
- Vérifier les archives et les comportements dans Scratch : points, contacts prolongés, clones supprimés, seuils exacts, priorité des fins, actions bloquées et remise à zéro. Un ancien résultat sur un autre projet n'est pas reporté automatiquement.
- Reconstruire depuis la base en suivant uniquement le chemin élève, avec les modèles et aides proposés à cet endroit. Pour chaque transition, relever ce qui était fourni, ajouté, remplacé et compris. Effectuer aussi un départ de secours sans confondre cette reprise avec une construction autonome.
- Réaliser une modification sans solution complète, expliquer une règle et résoudre une panne avec les indices. Les essais moteur et l'import d'une référence ne démontrent pas à eux seuls ces capacités.
- Conserver des conclusions distinctes : fonctionnement technique, chemin documentaire suivi, revue pédagogique, puis observations d'utilisation réelle lorsqu'elles existent. Une répétition par l'auteur ne constitue pas un essai avec un élève.

Le parcours pourra être présenté comme autonome lorsque tous les passages nécessaires sont disponibles et que la recette documente un chemin complet sans intervention implicite du professeur. Les essais en situation permettront ensuite d'ajuster la longueur et les aides ; ils ne seront pas déclarés réalisés par anticipation.

## Prochaine action

Les sept chapitres sont revus et corrigés, dont la [vérification finale des pas de 5](revue-scratch-mission-tests.md). Le [contrôle final des raccords](controle-raccords-scratch-mission.md) est terminé : six passages cohérents, navigation réelle, reprises et aides vérifiées. Après clarification avec l’utilisateur, ce contrôle porte sur les raccords ; aucune nouvelle série de revues ni reconstruction systématique n’est engagée. La reconstruction manuelle intégrale et les observations avec un élève ne sont pas déclarées réalisées. Voir aussi le compte rendu : [Tests personnels intégré](integration-scratch-mission-tests.md).
