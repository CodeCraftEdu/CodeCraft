# Supports Scratch partagés

Publication vérifiée le 13 octobre 2026 sur le profil public CodeCraftEdu. Les six projets existants sont partagés avec leurs consignes, leurs crédits et une miniature de leur scène. Aucun doublon de projet n’a été créé.

| Ressource | Départ | Exemple |
| --- | --- | --- |
| Vies et contacts | [Ouvrir](https://scratch.mit.edu/projects/1391213130/) | [Ouvrir](https://scratch.mit.edu/projects/1391211682/) |
| Clones mobiles | [Ouvrir](https://scratch.mit.edu/projects/1391213631/) | [Ouvrir](https://scratch.mit.edu/projects/1391213388/) |
| Niveaux et victoire | [Ouvrir](https://scratch.mit.edu/projects/1391213849/) | [Ouvrir](https://scratch.mit.edu/projects/1391213735/) |

## Intégration dans CodeCraft

Les URL sont enregistrées dans [le registre Scratch](../content/resources/scratch-projects.json). Les trois modules utilisent `scratchProjectId` pour afficher le départ et fournir les ressources au professeur. Leur lien d’outil ouvre l’exemple partagé. Les fichiers `.sb3` restent disponibles dans les activités repliées pour travailler hors ligne.

La sauvegarde du travail est expliquée : Remix avec un compte, ou menu Fichier sur l’ordinateur. Les activités complètes restent facultatives ; ces supports peuvent être ouverts ponctuellement pendant un atelier.

La publication de CodeCraft sur GitHub Pages suit le push des changements sur `main`. Le partage des projets Scratch et le déploiement du site sont deux opérations distinctes.

## Consignes enregistrées sur Scratch

### Vies et contacts : Départ

Projet de départ : vies et contacts.

Clique sur le drapeau. Déplace Pilote, le disque bleu, avec les flèches gauche et droite.

Le déplacement est déjà programmé. Clique sur Voir à l'intérieur, sélectionne Pilote et ajoute une deuxième pile : elle retire une vie au contact de Danger puis attend la séparation. La variable vies existe pour tous les sprites.

Avec ton compte Scratch, utilise Remix pour conserver ta version. Sans compte, sauvegarde ton travail depuis le menu Fichier sur ton ordinateur.

### Vies et contacts : Exemple

Exemple : une vie par contact.

Clique sur le drapeau pour repartir avec trois vies. Déplace Pilote avec les flèches gauche et droite jusqu'au danger orange.

Un contact continu retire une seule vie. Éloigne complètement Pilote, puis reviens au contact pour perdre la suivante. À zéro, le compteur reste à zéro et Pilote peut encore se déplacer.

Clique sur Voir à l'intérieur et sélectionne Pilote pour comparer la pile de déplacement et celle qui surveille les vies.

### Clones mobiles : Départ

Projet de départ : clones mobiles.

Balle, le disque orange, est fournie sans script. Clique sur Voir à l'intérieur pour construire deux piles dans Balle.

Au drapeau, cache le modèle, place-le en x = -180 et crée trois clones espacés de 0,6 seconde. Quand chaque clone commence, montre-le, fais-le avancer jusqu'à x > 200, puis supprime-le. La ligne à droite marque x = 200.

Avec ton compte Scratch, utilise Remix pour conserver ta version. Sans compte, sauvegarde ton travail depuis le menu Fichier sur ton ordinateur.

### Clones mobiles : Exemple

Exemple : créer, déplacer et supprimer des clones.

Clique sur le drapeau. Trois copies de Balle partent successivement vers la droite ; le modèle reste caché à gauche. Chaque copie se supprime après x = 200.

Relance le drapeau pour observer une nouvelle série. Clique sur Voir à l'intérieur pour comparer la pile qui crée les copies et celle que chaque clone exécute.

### Niveaux et victoire : Départ

Projet de départ : niveaux et victoire.

Cible possède deux costumes et aucun script. Les variables score, niveau et etat existent pour tous les sprites.

Clique sur Voir à l'intérieur. Construis les valeurs de départ au drapeau, le clic qui ajoute un point, la surveillance et les réceptions de messages. À trois points, passe au niveau 2 ; à six points, ferme les clics avant d'afficher Gagné !.

Avec ton compte Scratch, utilise Remix pour conserver ta version. Sans compte, sauvegarde ton travail depuis le menu Fichier sur ton ordinateur.

### Niveaux et victoire : Exemple

Exemple : changer de niveau et terminer la partie.

Clique sur le drapeau puis sur la cible orange. À trois points, elle devient bleue et plus petite. À six points, Gagné ! apparaît pendant deux secondes, puis le programme s'arrête.

Pendant le message, clique encore : le score reste à six. Relance le drapeau pour retrouver les valeurs de départ.

Clique sur Voir à l'intérieur pour comparer la surveillance, la pile du clic et les deux réceptions de messages.

## Notes et crédits communs

Création originale CodeCraft : personnages, décors et blocs préparés pour cette ressource de programmation.

Ressources : https://codecraftedu.github.io/CodeCraft/

Le lien des crédits mène à l’accueil public de CodeCraft ; il ne dépend pas de la mise en ligne des nouveaux modules. Ces textes sont un relevé de publication. Une modification future du registre local ne modifie pas automatiquement les champs sur Scratch.

## Vérifications

`npm run check` complet réussi : formatage, lint, catalogue, 226 tests Node et six suites navigateur. Les tests vérifient les liens de départ et d’exemple dans les pages élève et professeur, ainsi que la conservation des téléchargements locaux.

Captures du site examinées : `browser-artifacts/run-xahjkg/scratch-lot3-browser/codecraft-catalog-qa-1qksfs/`. Les consignes et crédits de chaque projet sont relus après rechargement avant partage. Le profil public affiche les six projets et passe de 9 à 15 projets partagés.

Preuves Scratch locales : `browser-artifacts/scratch-publication/instructions.json`, `resultats.json` et `profil-public.jpg`. La [recette de l’éditeur](recette-scratch-editeur.md) distingue les comportements contrôlés des constructions complètes et variantes restant à éprouver.
