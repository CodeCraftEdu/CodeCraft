# Carnet de recettes Scratch

Évolution du 30 octobre 2026 : la demande de livre animé StPageFlip remplace la présentation en fiche décrite ci-dessous. Le [guide du livre](livre-recettes-scratch.md) décrit le rendu actuel. Le contenu de la recette existante est conservé.

## Format validé

Décision utilisateur du 29 octobre 2026 : un cookbook compact et simple. L’élève choisit une action, puis voit uniquement la recette Scratch et une ou deux lignes discrètes de prérequis ou de personnalisation.

- Un titre d’action.
- Une pile de blocs courte et directement réutilisable.
- Au plus deux indications brèves : ce qui existe déjà dans le jeu et les valeurs à adapter.

Les fiches sont indépendantes. Aucun projet de départ, téléchargement, introduction de cours, section explicative, quiz, liste de tests ou dépannage à ajouter à ces fiches. Les sources de conception restent documentées ici.

## Première recette intégrée

« Animer la marche de mon personnage » regroupe déplacement et animation dans une même pile. Au drapeau, fixer la rotation gauche-droite. Dans la boucle, chaque touche déclenche l’orientation, un déplacement de 5 pas, le costume suivant et une attente de 0.1 seconde. Préparer uniquement le personnage et ses deux costumes ; remplacer l’ancien déplacement s’il existe.

Les deux branches droite et gauche restent explicites. Aucune variable ni détection de déplacement dans une pile séparée. Relâcher les touches arrête les actions après l’attente en cours ; le costume courant est conservé. Le délai règle à la fois le rythme des déplacements et celui des costumes. Les collisions et les autres états d’animation restent hors du périmètre de cette recette élémentaire.

Le rendu utilise la présentation recipe et conserve la navigation libre du carnet. Les blocs gardent les couleurs Scratch. Les deux indications apparaissent en petit texte au-dessus de la pile.

## Recettes suivantes

- Ouvrir une porte avec une clé.
- Créer un piège mobile.
- Créer un ennemi en patrouille.
- Créer un portail.
- Fabriquer un objet.

Adapter le périmètre de chacune pour qu’elle reste une recette courte. Une variante avancée est une entrée distincte si elle devient nécessaire, pas un cours ajouté sous la recette de base.

## Références

- [Scratch : Make a sprite walk](https://scratch.mit.edu/help/studio/tips/howto/walking/) : alternance des costumes avec une courte attente, référence de simplicité du format.
- [Raspberry Pi : Getting started with Scratch](https://projects.raspberrypi.org/en/projects/getting-started-scratch) : costumes, boucles, conditions et capteurs de touches.

La revue initiale et ses corrections concernaient le modèle long désormais remplacé. Les contrôles du site ne constituent pas un essai dans l’éditeur Scratch.
