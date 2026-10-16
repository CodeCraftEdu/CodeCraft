# Références Scratch de Mission balises

`build_projects.py` construit les huit archives disponibles : base graphique sans code, Commandes, Balises, Vies, Clones, Messages, États et une panne volontaire de relance pour Tests personnels. Les costumes sont dessinés par ce script ; aucune ressource externe n'est téléchargée. Python 3 et sa bibliothèque standard suffisent.

Depuis la racine du dépôt :

```sh
python scripts/scratch-mission/build_projects.py
```

Les sorties sont dans `assets/scratch/mission/`. Les dates des entrées ZIP sont fixes pour produire les mêmes octets à définition identique. Le générateur vérifie les ressources, leurs empreintes, les dimensions SVG et les références internes des blocs. Les archives sont versionnées pour être disponibles sans Python sur le site.

Les cours restent édités dans `content/modules/jeux-video/scratch-mission-*.json`. Ce script ne réécrit pas les textes ou les schémas des cours. Les tests `scratch-mission.test.cjs` comparent la structure des piles complètes avec les archives ; un changement fonctionnel demande également une recette dans le moteur ou l'éditeur Scratch.

La référence Clones conserve les piles de Pilote et Balise. Elle ajoute `vitesseObstacle` à l'initialisation de la scène et remplace la surveillance fixe d'Obstacle par deux piles : production continue du modèle caché, puis déplacement, dégât et suppression de chaque copie. Le démarrage attend 1.2 seconde avant la première création. Les références précédentes gardent leur propre comportement, dont le danger fixe et son attente de séparation en Vies.

La référence Messages conserve les piles de Pilote, Balise et les deux premières piles d'Obstacle. La scène initialise `niveau` à 1 et teste `niveau = 1 et score > 2` après les décisions de fin. Elle met `niveau` à 2 avant d'envoyer `secteur2`. Une réception de la scène choisit le deuxième décor ; une réception dans Obstacle fixe la variable commune `vitesseObstacle` à 7. Les clones reçoivent aussi ce message et fixent la même valeur. Aucun bloc de diagnostic ni réglage de variation n'est conservé dans la référence.

La référence États ajoute `etat` et le signal `resultat`. La scène prépare le départ avant d'autoriser le jeu, mémorise la défaite ou la victoire avant l'émission et revérifie l'état avant le changement de secteur. Les commandes, la collecte, les déplacements et les dégâts des copies sont protégés ; la fabrique vérifie l'état après son attente. Les clones se suppriment quand l'état quitte le jeu. Pilote possède une réception supplémentaire pour l'annonce de deux secondes suivie de l'unique `stop tout`. Aucun réglage des copies de diagnostic ou de variation n'est inclus dans la référence.

Le laboratoire `mission-panne-relance.sb3` est volontairement défectueux : il conserve la valeur de niveau à 2 et omet sa remise à 1 au drapeau. Il sert à chercher une erreur d'initialisation dans Tests personnels, après sauvegarde du projet propre à l'élève. Les autres règles viennent d'États. La référence correcte avant personnalisation reste `mission-etats.sb3` ; la version personnelle `mission-07.sb3` est produite par l'élève et ne possède pas une solution publique unique.

`apercu.png` est une capture du canvas Scratch exécutant la référence Vies, à ses positions initiales. Ce n'est pas une autre représentation du programme à maintenir séparément. Refaire cette capture si les dessins ou la composition changent.
