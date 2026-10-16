# Revue du parcours Scratch avancé

15 octobre 2026. Revue du [cadrage Mission balises](roadmap-scratch-avance.md), des modules Scratch existants et des mécanismes de navigation et de réutilisation du site.

## Verdict

**Conserver le jeu fil conducteur, les sept étapes et les trois aides indépendantes. Corriger quatre points avant de rédiger l'ensemble des nouveaux cours.** Le cadrage retrouve l'objectif d'un parcours autonome consultable ponctuellement en stage. Il ne nécessite pas de refonte générale du site.

La principale faiblesse est la continuité entre les étapes : les variantes personnelles, les transformations de code et les excursions vers les aides doivent aboutir à un départ du chapitre suivant clairement reconnaissable. Les principes généraux de la roadmap sont justes, mais ces passages ne sont pas encore assez définis pour guider la réalisation.

Cette revue porte sur un plan. Elle ne valide ni les futurs fichiers Scratch, ni leur jouabilité, ni un essai avec un élève. Les quatre corrections ont ensuite été appliquées au cadrage, selon le relevé ci-dessous. Les constats détaillés conservent la version examinée pour la traçabilité.

## Corrections appliquées au cadrage

| Point de revue            | Décision ajoutée à la roadmap                                                                                                                                                         | Contrôle technique et suite pédagogique                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Variantes et suite        | Contrat de reprise : noms, dimensions et valeurs de référence ; variations dans une copie d'essai ; retour à sa sauvegarde principale avant de poursuivre.                            | Effectuer la variation à deux points puis reprendre la progression à trois et six, depuis les consignes et les fichiers qui seront produits. |
| Transformations des piles | Carte de responsabilités, tableau des cinq transitions et jalons Messages/États ; protections de toutes les actions et traitement des attentes ; prototype avant rédaction complète.  | Prototype exécuté : ordre de démarrage, transitions, fins et relance contrôlés. Reconstruction depuis les cours à éprouver.                  |
| Mécanismes précoces       | Alternance de la balise entre deux positions fixes ; comparaison et si/sinon enseignés ; limites traitées par transposition ; hasard introduit séparément pour la hauteur des clones. | Bornes et alternance contrôlées dans le prototype ; reconstruction depuis le chemin élève à éprouver.                                        |
| Retour depuis les aides   | Explication indispensable dans le chapitre ; extraits réutilisables sur place ; aide complète ou reprise dans un autre onglet identifié, avec retour par fermeture.                   | Vérifier le support du lien, adapter uniquement son option d'ouverture si nécessaire, puis contrôler le trajet et le clavier.                |

Ces décisions ferment les quatre points de cadrage. La [recette du prototype](recette-scratch-mission-balises.md) consigne ensuite les contrôles techniques réussis. Les cours, l'intégration et leurs critères d'autonomie restent à réaliser. Une nouvelle revue générale de la roadmap n'est pas nécessaire avant ce travail.

## 1. Priorité haute : rendre les variantes compatibles avec la suite

**Constat.** L'étape Balises demande de modifier le seuil de victoire. Plus loin, le changement de secteur suppose un passage à trois points et une victoire à six. La roadmap permet de conserver sa propre version, sans fixer les valeurs attendues à la sortie des exercices. Elle propose aussi de modifier la vitesse, le nombre de vies et les seuils.

**Conséquence concrète.** Un élève qui a choisi de gagner à deux points réussit la variation demandée. Il ne pourra pourtant jamais atteindre les trois points nécessaires au secteur 2 du chapitre suivant. Le cours peut alors lui faire chercher une erreur de message alors que son ancien programme fonctionne selon la règle qu'il avait choisie.

**Correction recommandée.** Définir pour chaque fin d'étape un petit contrat de reprise : acteurs et noms nécessaires, variables, règles attendues et valeurs de référence. Dans les expériences sur les seuils, annoncer si l'on travaille dans une copie d'essai ou si l'on rétablit ensuite une valeur précise. Pour le chemin principal, rétablir les seuils de référence avant de poursuivre ; la personnalisation finale permet ensuite de changer les règles en connaissance de leurs dépendances.

Conserver librement les choix sans effet sur la logique. Pour les costumes et tailles, signaler les conséquences sur les contacts et les limites au moment de la personnalisation. La reprise doit pouvoir se faire dans le projet de l'élève, sans imposer l'import d'une référence terminée.

**Critère de clôture.** Une personne ayant effectué la variante de victoire à deux points sait, depuis la fin du chapitre, comment retrouver la base requise pour le passage à trois points. Les tests distinguent les valeurs de référence et celles d'une éventuelle variante conservée.

Source : tableau de progression, étapes Balises, Vies, Messages et États de la [roadmap](roadmap-scratch-avance.md).

## 2. Priorité haute : préciser les transformations avant de construire les premières références

**Constat.** La roadmap introduit une décision centrale de fin, remplace la surveillance du danger par celle des clones, puis ajoute des messages et enfin la protection de toutes les actions. Elle annonce un inventaire avant/après des piles, mais ne fixe pas encore leur répartition entre la scène et les personnages. L'étape États rassemble la variable, la transformation des deux fins, les protections et le redémarrage.

**Risque.** Si les trois premières références sont construites sans tenir compte de cette organisation finale, les derniers chapitres peuvent exiger une redistribution importante des piles. C'est le type de transition qui avait nécessité une préparation professeur dans le travail précédent. Une injonction générale à « protéger chaque action » ne permet pas d'évaluer la charge réelle pour quelqu'un seul.

**Correction recommandée.** Ajouter au cadrage une carte courte des responsabilités : qui initialise les variables, surveille les fins, compte les balises, retire les vies, crée les clones et affiche le résultat. Conserver ces responsabilités autant que possible d'une étape à l'autre. Les messages et l'état peuvent rester enseignés au moment prévu ; il n'est pas nécessaire de les fournir en bloc dès le départ.

Décomposer les passages sensibles en jalons visibles à l'intérieur des deux chapitres existants :

- Messages : obtenir un effet par émission/réception, puis déclencher cet effet une seule fois au seuil prévu.
- États : identifier la décision de fin, verrouiller l'état et protéger les actions, puis ajouter l'annonce et vérifier la relance. L'annonce avec attente arrive après les protections.
- Pour la protection, nommer explicitement déplacement, collecte, dégâts, création et déplacement des clones. Traiter les attentes déjà en cours, notamment celle entre deux créations, et indiquer le résultat attendu pour les copies présentes à la fin.

Avant la rédaction complète, réaliser un prototype technique minimal et le tableau des changements de piles entre les étapes. Il sert à vérifier que la transition est enseignable ; il ne devient pas une base opaque livrée aux élèves. Les fichiers pédagogiques intermédiaires seront ensuite construits et vérifiés selon ces transitions.

**Critère de clôture.** On peut énumérer précisément les piles conservées, modifiées et retirées entre Clones, Messages et États. Chaque jalon possède un essai observable. La transformation reste réalisable depuis le fichier précédent, sans migration exécutée par le professeur ni remplacement obligatoire du projet.

Source : étapes Clones, Messages et États, sections « Écrire réellement pour une personne seule » et « Lots de réalisation » de la [roadmap](roadmap-scratch-avance.md).

## 3. Priorité moyenne : borner les mécanismes nouveaux des premiers chapitres

**Constat.** Les prérequis couvrent les déplacements, boucles, conditions et compteurs. Pourtant, le premier chapitre ajoute des limites, et le deuxième exige un replacement de balise hors contact avec une sortie sûre si le tirage aléatoire reste au contact. La progression ne dit pas comment cette logique sera enseignée ou fournie. Les cours existants de [réactions](../content/modules/jeux-video/scratch-reactions.json) et de [variables](../content/modules/jeux-video/scratch-variables.json) séparent les personnages par un retour à une position connue ; ils ne fournissent pas cette solution de replacement aléatoire.

**Risque.** Le chapitre censé réutiliser le score peut introduire en même temps hasard, conditions imbriquées, répétition de tirages et solution de secours. Son volume dépasserait ce que suggère le tableau, ou une partie du code serait fournie sans explication. Les quatre limites de déplacement présentent également de nouvelles comparaisons si elles ne sont pas explicitées.

**Correction recommandée.** Choisir une version initiale déterministe : faire alterner la balise entre deux positions suffisamment éloignées pour les costumes fournis. Enseigner la comparaison nécessaire dans un petit passage visible. Garder le placement aléatoire de la balise comme prolongement ultérieur, avec ses propres critères de contact.

Pour les limites, traiter une direction, la tester, puis faire transposer le raisonnement aux autres. Le chapitre Clones pourra introduire séparément un tirage de hauteur dans un intervalle borné, sans lui ajouter une recherche de position sans contact.

**Critère de clôture.** Chaque mécanisme nouveau apparaît dans une étape de construction et une observation. La base graphique et les bornes retenues garantissent les essais de référence. Le premier jeu ne dépend pas d'un bloc complexe fourni silencieusement.

Source : règles du jeu et deux premières étapes de la [roadmap](roadmap-scratch-avance.md).

## 4. Priorité moyenne : prévoir le retour depuis les aides et les reprises

**Constat vérifié dans le code.** Le futur parcours contiendrait les sept modules Mission balises. Les trois aides restent dans `scratch-debutants`. Dans [pedagogy.js](../pedagogy.js), la construction d'un lien retire le contexte du parcours quand la cible n'en fait pas partie. Dans [le routeur](../src/student/router.mjs), une aide appartenant uniquement au parcours débutant récupère le sommaire de ce parcours. La roadmap prévoit des renvois, mais pas le retour au chapitre du jeu.

**Conséquence concrète.** Un élève quitte Clones pour lire l'aide correspondante. Le sommaire et le cours suivant peuvent alors l'envoyer vers la suite de Premiers pas avec Scratch. Il doit deviner qu'il faut revenir en arrière pour continuer Mission balises. Cela fragilise précisément l'usage autonome visé.

**Correction recommandée.** Garder l'explication indispensable dans le chapitre du jeu. Réutiliser un extrait pertinent sur place quand le type `reference` existant convient, avec le contexte nécessaire aux noms des personnages. Pour une consultation externe, définir un retour clair à l'étape d'origine et tester ce trajet. Choisir cette solution avant l'intégration ; ne pas ajouter artificiellement toutes les aides aux sept étapes obligatoires pour satisfaire le routeur.

Les reprises de prérequis demandent la même attention : revenir dans le bon chapitre et retrouver la version attendue du projet. Les accès directs déjà utilisés pendant les stages restent utiles et ne doivent pas être détournés vers un nouveau jeu obligatoire.

**Critère de clôture.** Depuis chaque chapitre, ouvrir une aide, consulter le passage utile, puis revenir à la même étape avec une action clairement identifiable. Vérifier le sommaire et la destination de « suivant ». Tester également une arrivée directe depuis un lien de stage.

Sources : [règles de navigation](navigation-parcours.md), [génération des liens](../pedagogy.js), [routeur](../src/student/router.mjs), [références de blocs](../src/student/blocks.mjs).

## Choix à conserver

- Un jeu cumulatif rend visibles les raisons d'ajouter chaque notion. Il répond à l'objectif fixé sans imposer de reproduire un stage.
- Les sept étapes constituent un découpage plausible. Les messages précèdent l'annonce finale ; les clones disposent de leur propre chapitre.
- Les trois aides restent indépendantes et accessibles ponctuellement. Elles ne deviennent pas des travaux supplémentaires obligatoires pendant un atelier.
- Les fichiers de secours, la sauvegarde locale et les reprises ciblées rendent le parcours accessible sans compte ni passage préalable par tous les cours débutants.
- Chronomètre, son et blocs personnalisés peuvent rester des prolongements. Les ajouter au socle alourdirait le chantier sans résoudre les quatre problèmes relevés.
- Les prédictions, variations, recherches d'erreur et explications complètent la reproduction de modèles. Les contrôles techniques restent distincts d'un essai avec des élèves.

## Ordre de travail conseillé

**Sol High :** les corrections de cadrage, la carte des piles et le prototype technique sont disponibles. Rédiger le premier segment Commandes → Balises → Vies depuis ces références. Les chapitres suivants réutiliseront cette organisation.

La revue ne justifie ni une refonte des 17 modules, ni l'ajout d'un nouveau système de navigation ou de suivi par principe. Un ajustement ciblé pourra être nécessaire pour le retour des aides, selon la solution retenue.

L'estimation de 6 à 10 heures n'est pas confirmée par cette revue documentaire. Elle doit inclure les nouveaux fichiers intermédiaires, la rédaction autonome et la reconstruction depuis les supports, et pas seulement l'adaptation des trois aides. Le prototype des transitions permettra de préciser l'effort restant ; il n'y a pas de raison de remplacer maintenant cette fourchette par une autre estimation non mesurée.

**Astra High :** examiner ensuite les chapitres effectivement rédigés et leurs transitions. Une nouvelle revue générale de la même roadmap n'est pas nécessaire après de simples corrections conformes à ces constats.

## Vérification de cette revue

Lecture de la roadmap, des modules et des sources de navigation citées, puis contrôle des quatre décisions ajoutées au cadrage. Aucun cours ni fichier Scratch modifié. Liens locaux et formatage du compte rendu contrôlés ; aucun test applicatif requis pour cette modification documentaire. Aucun essai navigateur ou moteur supplémentaire n'est revendiqué.
