# Revue des trois supports Scratch

Revue du 13 octobre 2026. Périmètre : vies et contacts, clones mobiles, niveaux et états. Objectif : consulter une aide pendant un stage, puis reprendre son projet. Les activités indépendantes restent facultatives.

## Verdict

Conserver les trois ressources et leurs projets de référence. Les notions choisies répondent à des difficultés précises et les exemples sont indépendants du jeu du stage. Trois corrections de présentation sont nécessaires avant de compter sur une consultation autonome : elles concernent la reproduction des blocs et les conditions d’intégration des extraits.

Les constats ci-dessous viennent de la lecture des contenus, du rendu commun et des captures existantes sur ordinateur et à 320 px. Les recettes consignent des essais réussis dans le moteur Scratch ; cette revue ne les a pas réexécutés. Elle ne constitue pas un essai avec des élèves ni une reconstruction dans l’éditeur.

## Corrections prioritaires

### 1. Distinguer les blocs à glisser des valeurs à saisir

**Priorité haute.** Dans le support des clones, `abscisse x` apparaît dans le même ovale blanc que `200`. Dans celui de la victoire, `etat` et `score` ont le même aspect que `en jeu` et `5`. Un élève qui reproduit fidèlement ce dessin peut saisir les noms au clavier : sa comparaison ne consulte alors aucune position ou variable.

Le problème vient du modèle de représentation : ces éléments utilisent tous `value`, rendu par `scratch-script__value`. La consigne « Glisse abscisse x… » est repliée ; celle sur `etat` apparaît dans le dépannage, après l’erreur potentielle.

**Correction proposée :** représenter les blocs qui fournissent une valeur avec leur couleur et leur forme, distinctes des cases de saisie. Conserver les nombres et les textes dans les cases blanches. Placer au premier exemple la manipulation essentielle : « Glisse abscisse x depuis Mouvement dans la comparaison. Écris 200 dans l’autre case. » Appliquer la même distinction à `vies`, `niveau`, `score` et `etat` dans les trois ressources.

**Critère de réussite :** depuis le schéma et sa consigne visible, on peut identifier ce qu’il faut prendre dans une palette et ce qu’il faut taper, sans ouvrir le dépannage.

Sources : [rendu des blocs](../src/student/demonstrations.mjs), [clones, section mouvement](../content/modules/jeux-video/scratch-clones-mobiles.json), [niveaux et états](../content/modules/jeux-video/scratch-niveaux-etats.json).

### 2. Montrer immédiatement que le déplacement doit continuer dans une autre pile

**Priorité haute.** L’accès direct à « Attendre la séparation » montre le retrait d’une vie suivi d’une attente. La phrase « Garde le déplacement dans une autre pile » est classée parmi les explications supplémentaires. Si l’élève ajoute cette attente à sa boucle de déplacement, son personnage ne peut plus s’éloigner grâce à cette boucle. C’est précisément un cas où le support peut introduire un nouveau blocage.

**Correction proposée :** remonter cette phrase dans les consignes visibles, avant le schéma. Préciser que le fragment se place dans la boucle de surveillance des contacts. Le modèle complet séparant les piles reste dans l’activité facultative ; aucun nouvel exercice n’est nécessaire.

**Critère de réussite :** en arrivant directement à `solution`, l’élève sait dans quelle pile placer l’extrait et quelle pile doit continuer pendant l’attente.

Sources : [vies et contacts, section solution](../content/modules/jeux-video/scratch-vies-contacts.json), [repli automatique des paragraphes](../src/student/blocks.mjs).

### 3. Rendre visible la dépendance entre victoire et protection des actions

**Priorité moyenne, à traiter avant l’utilisation comme aide ponctuelle.** La section « Bloquer la partie avant le message final » montre le changement d’état et le message, mais ces deux piles seules ne bloquent ni déplacements, ni points, ni dégâts pendant les deux secondes d’affichage. La vérification par les autres piles est expliquée dans un paragraphe replié et dans la section suivante. Un accès direct à `victoire` peut donc être pris pour une solution complète.

**Correction proposée :** afficher près des blocs une phrase concrète, par exemple « Dans les piles du jeu, autorise les actions seulement si etat vaut en jeu. » Fournir un accès explicite à l’exemple de protection des actions. Indiquer aussi que le fragment de décision appartient à la boucle de surveillance et que `etat` doit être initialisé à `en jeu` au démarrage. Garder les détails sur les attentes et les priorités dans les explications.

**Critère de réussite :** l’accès direct à `victoire` permet de retrouver les deux parties nécessaires : décider la victoire une fois, puis empêcher les actions du jeu de continuer. La création et l’initialisation de la variable ne doivent pas nécessiter la recherche du projet complet.

Sources : [niveaux et états, sections victoire, actions et modele](../content/modules/jeux-video/scratch-niveaux-etats.json), [repli automatique des paragraphes](../src/student/blocks.mjs).

## Améliorations secondaires

- **Retirer les légendes sans explication.** Le rendu ajoute « 1 · Contrôle », « 2 · Apparence », etc., même lorsqu’aucune explication n’est fournie. Les captures montrent une colonne ou une liste qui occupe de la place sans guider la construction. N’afficher une légende que si elle apporte une information ; supprimer sa numérotation décorative conformément aux [règles éditoriales](regles-editoriales.md).
- **Faciliter la construction du modèle complet des états.** Son contrôleur cumule initialisation, victoire et passage de niveau, avec des conditions imbriquées. Il reste utile comme référence facultative. Pour la reconstruction, proposer des points d’arrêt observables : départ correct, changement de niveau, puis victoire et actions bloquées. Ce travail est moins urgent que les trois corrections précédentes, puisque le stage utilise les extraits ciblés. À petite largeur, vérifier également la lecture effective du grand schéma dans son panneau : l’absence de débordement de la page ne prouve pas sa facilité de lecture.

## À conserver

- La règle explicite d’une vie par contact continu, distincte d’une protection temporisée.
- La distinction entre le modèle et les clones, entre intervalle de création et déplacement, et entre cacher et supprimer.
- Le changement de variable avant l’envoi du message, les vérifications d’état et la remise à zéro au drapeau.
- Les projets de départ et de référence indépendants, le dépannage accessible et les exercices complets repliés.

Il n’est pas nécessaire d’ajouter un module obligatoire, une simulation supplémentaire ou une reprise intégrale des trois cours.

## Suite proposée et validation

**Corrections : Sol High.** Traiter d’abord les blocs à glisser et les consignes visibles, puis nettoyer les légendes pendant la vérification du rendu commun. Conserver les identifiants et les accès directs existants. Le changement de représentation doit distinguer les types de pièces dans les données ; éviter de déduire leur nature de mots comme « score », qui peuvent aussi être du texte dans un autre exemple.

Après correction, examiner chaque accès direct sans ouvrir les aides, puis vérifier les captures des trois supports et des anciens modules utilisant le rendu commun. Adapter les tests au changement de schéma et de rendu, puis appliquer les contrôles du projet.

**Recette finale dans Scratch : Sol High pour l’accompagnement.** Reconstruire les exemples depuis les palettes françaises en suivant seulement le support, puis importer et sauvegarder les projets. Cette étape reste à faire, conformément aux recettes [vies et contacts](recette-scratch-vies-contacts.md), [clones mobiles](recette-scratch-clones-mobiles.md) et [niveaux et états](recette-scratch-niveaux-etats.md). Elle peut rester à la fin de la préparation comme prévu ; aucun nouveau chantier pédagogique n’est requis avant elle.

## Corrections appliquées le 13 octobre 2026

- Type de pièce `reporter` ajouté au schéma et au rendu. Les trois supports distinguent désormais les variables orange et l’abscisse bleue des cases blanches de saisie. Les anciennes pièces `value` restent compatibles.
- Placement de l’extrait de contacts et séparation du déplacement rendus visibles. Manipulation des variables et de l’abscisse précisée dans les consignes visibles.
- Création et initialisation de `etat`, placement dans la surveillance et protection des autres actions explicités dans la section victoire. Un lien conduit à `actions` en conservant le parcours.
- Légendes sans explication et numérotation décorative supprimées du rendu commun. Le panneau utilise sa largeur lorsque la colonne de légendes est absente.
- Dans l’activité indépendante des états, une section de construction progressive précède le modèle complet : départ, changement de niveau, puis victoire avec actions bloquées. Les identifiants existants sont conservés.

Validation : formatage, lint, catalogue, 224 tests Node et six suites navigateur réussis par `npm run check`. Les tests couvrent la distinction entre les deux types de pièces, les catégories invalides, les légendes utiles, les consignes visibles et le renvoi vers les actions. Les captures des trois supports sont examinées sur ordinateur et à petite largeur ; la page ne déborde pas.

Rapport local : `browser-artifacts/run-ZL3VRi/`. Captures Scratch : `scratch-lot3-browser/codecraft-catalog-qa-wmB4Kr/`. Les essais moteur déjà consignés restent ceux des recettes ; les archives Scratch n’ont pas été modifiées. La reconstruction dans l’éditeur reste à faire.
