# Mission balises : chapitre Clones intégré

15 octobre 2026. Quatrième module du [parcours autonome Scratch avancé](roadmap-scratch-avance.md), après les corrections de la [revue du premier segment](revue-scratch-mission-segment-1.md).

## Chemin disponible

Le cours [scratch-mission-clones.json](../content/modules/jeux-video/scratch-mission-clones.json) prolonge la sauvegarde personnelle `mission-03.sb3` et produit `mission-04.sb3`. Il appartient à la deuxième partie du parcours, « Faire évoluer les obstacles ». Le catalogue compte désormais 79 modules et 8 parcours. Les trois aides indépendantes et le parcours débutant sont conservés.

Le chemin élève construit et observe successivement :

- La suppression explicite de toute l'ancienne pile du danger fixe, après sauvegarde.
- La variable commune `vitesseObstacle`, initialisée à 4 sur la scène.
- Une seule création depuis le modèle caché, puis la pile distincte qui montre la copie en (-210, 0).
- Le déplacement jusqu'à x > 210 et la suppression après la boucle.
- Le tirage de hauteur entre -100 et 100, avant le déplacement.
- La production continue, avec attente de 1.2 seconde avant chaque création.
- Le retrait d'une vie par copie touchée, suivi de sa suppression immédiate.

Les piles de Pilote et de Balise sont conservées. La scène garde la décision de fin et reçoit seulement l'initialisation de la vitesse. Le cours explique la nouvelle règle : deux copies distinctes peuvent retirer deux vies ; l'attente de séparation du danger fixe ne doit pas être conservée dans les clones.

La comparaison vitesse/fréquence porte sur une seule valeur à la fois, avec prévision, essai et réponse repliée. La sauvegarde principale est rechargée avant l'essai puis après les variations. Le dépannage, les deux modèles complets d'Obstacle et la référence terminée restent consultables dans des encarts repliés. Le guide professeur fournit questions, réponses, erreurs, aides graduées et différenciation.

## Ressources

La [référence Clones](../assets/scratch/mission/mission-clones.sb3) est générée et validée par le [générateur des projets](../scripts/scratch-mission/README.md). Le téléchargement Vies sert de reprise lorsque le projet personnel manque. Le chapitre n'impose aucune migration privée, aucun nouveau compte ni publication sur Scratch.

Le schéma et le rendu actuels suffisent : aucun changement du moteur d'affichage n'a été nécessaire. Le bloc aléatoire est représenté comme un bloc rapporteur vert ; la consigne nomme sa catégorie et les deux valeurs à saisir.

## Vérifications

- Comparaison des structures des deux piles complètes avec la référence `.sb3`, navigation cumulative et téléchargement public.
- Conservation exacte des acteurs Pilote et Balise entre les références Vies et Clones ; absence d'ancienne attente de séparation et vérification des suppressions, de la variable commune et des bornes du tirage.
- Recette de la référence publique dans Scratch VM et Scratch Render : création différée, modèle caché, déplacement, disparition après une traversée, dégâts de copies distinctes, défaite et réinitialisation. Les hauteurs natives observées restent dans l'intervalle et ne changent pas pendant le trajet. Six activations terminent le jeu par la victoire.
- Recette du cours et du guide, téléchargements réels, modèles, variations et réponses repliées à 1280, 390 et 320 px. Captures examinées : fabrique et contact sur ordinateur, hauteur et pile complète à petite largeur.

La recette moteur est locale dans `browser-artifacts/check-mission-clones.cjs`, avec résultat dans `browser-artifacts/scratch-mission-clones-engine/resultats.json`. Elle utilise les bibliothèques Scratch déjà mises en cache localement. Les positions sont injectées pour déclencher les collisions et les collectes ; elle ne constitue pas une partie complète jouée au clavier ou un essai d'autonomie avec un élève.

La suite `scratch-mission-browser` couvre les quatre modules. Les premiers ajustements de recette ont concerné un lien dont le libellé devait apparaître dans le texte et le scénario moteur : hasard déterministe limité aux hauteurs, restauration du tirage natif avant import, compteur de test tolérant l'absence temporaire de scène pendant l'import. Ces ajustements ne changent pas les règles du fichier publié.

`npm run check` complet réussi : formatage, lint, catalogue, 230 tests Node et sept suites navigateur. Rapport : `browser-artifacts/run-quK1Qf/`. Les captures ciblées se trouvent dans `scratch-mission-browser/codecraft-catalog-qa-holdVx/`. La recette moteur finale réussie est `scratch-mission-clones-engine/codecraft-catalog-qa-gVm7EO/`.

## Suite

La [revue pédagogique du chapitre](revue-scratch-mission-clones.md) est réalisée et sa correction sur la disparition des clones lors de l'arrêt est appliquée. Le [chapitre Messages](integration-scratch-mission-messages.md) est intégré : il introduit le changement de secteur et de vitesse à trois points dans le même jeu. Sa revue est la prochaine étape ; États et Tests personnels restent ensuite à réaliser.
