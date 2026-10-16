# Mission balises : chapitre Messages intégré

15 octobre 2026. Cinquième module du [parcours autonome Scratch avancé](roadmap-scratch-avance.md), après le [chapitre Clones revu et corrigé](revue-scratch-mission-clones.md).

## Chemin disponible

Le cours [scratch-mission-messages.json](../content/modules/jeux-video/scratch-mission-messages.json) reprend la sauvegarde personnelle `mission-04.sb3` et produit `mission-05.sb3`. Il complète la deuxième partie du parcours, « Faire évoluer les obstacles et le secteur ». Le catalogue compte 80 modules et 8 parcours.

La construction conserve Pilote, Balise et les deux piles de création et de trajet d'Obstacle. Elle ajoute successivement :

- La variable commune `niveau`, initialisée à 1 avant la boucle de la scène et affichée pendant les essais.
- Une réception de `secteur2` sur la scène pour choisir le deuxième décor.
- Un bloc d'envoi isolé, essayé par clic avant son raccordement.
- Une réception dans Obstacle qui met `vitesseObstacle` à 7. Le modèle et les clones exécutent la même affectation ; ils n'ajoutent pas chacun une quantité.
- Le test `niveau = 1 et score > 2`, après les décisions de fin et avant la pause de la boucle. Il met `niveau` à 2 avant d'envoyer le message. L'élève déplace l'envoi essayé, sans laisser un second bloc isolé.

La scène a deux piles et Obstacle trois. Le signal et le décor portent le même nom, mais le cours distingue leurs rôles. Les copies déjà présentes et les suivantes lisent la même vitesse commune. Le score est conservé et la victoire reste à six points. Le drapeau rétablit le premier secteur et les valeurs de départ.

## Essais et reprise

Après les essais à deux, trois et quatre points, l'élève conserve sa version principale. Une copie de diagnostic démarre avec un score à 2, puis exige une activation réelle pour franchir le seuil. Un bloc isolé remet ensuite la vitesse à 4 : elle doit rester à 4 à trois puis quatre points. Ce contrôle rend visibles les répétitions qu'un décor inchangé ne permettrait pas de déceler.

Le cours demande ensuite de recharger la sauvegarde principale, sans score de test ni bloc isolé. Une variation distincte change seulement le seuil en `score > 3`, avec prévision avant l'essai et réponse repliée. La reprise finale conserve le passage à trois points. Les consignes expliquent comment reconnaître le téléchargement récent, y compris un suffixe de nom.

Le dépannage, les trois piles modifiées ou ajoutées et la référence terminée sont repliés. L'aide Messages existante s'ouvre dans un autre onglet et distingue son dialogue du changement de secteur. Le guide professeur contient les questions, les réponses, les aides graduées et les activités accompagnée et autonome.

## Ressource et contrôles

La [référence Messages](../assets/scratch/mission/mission-messages.sb3) est produite par le [générateur public](../scripts/scratch-mission/README.md). Les cinq archives précédentes ont été régénérées et leurs empreintes restent identiques. Le fichier Messages ne contient ni blocs de diagnostic ni réglages de variation. Aucun changement du rendu ou du schéma n'a été nécessaire.

Les contrôles Node comparent les trois modèles aux piles de la référence, vérifient la condition, l'affectation de niveau avant l'émission, le message commun, les réceptions courtes et la conservation des anciennes piles. La recette navigateur couvre les cinq modules, les guides, les téléchargements, les réponses repliées et les largeurs 1280, 390 et 320 px.

La recette du fichier public dans le moteur Scratch a vérifié :

- Le départ et l'absence d'envoi à deux points, puis une activation réelle conduisant à trois points et au second secteur.
- Le déplacement à 7 des copies présentes et de celles créées après le passage.
- Un seul envoi mesuré, avec retour temporaire à 4 conservé à trois et quatre points.
- La victoire à six points, la défaite dans le secteur 2, la suppression des clones et les relances.
- L'absence de transition lorsque les compteurs déclenchent déjà une fin.

Résultats locaux : `browser-artifacts/scratch-mission-messages-engine/resultats.json`, avec captures dans `codecraft-catalog-qa-bnYsVb/` du même dossier. Le script `browser-artifacts/check-mission-messages.cjs` utilise les bibliothèques Scratch mises en cache. Il injecte positions et compteurs pour isoler les comportements. Les premières corrections ont porté sur le scénario : conversion numérique des valeurs Scratch et choix d'un clone qui ne soit pas supprimé par le contact utilisé pour activer la balise.

Le profil Scratch a réussi ses 94 tests Node et trois suites navigateur dans `browser-artifacts/run-SJQpkN/`. Après les derniers ajustements de texte et de captures, `npm run check` complet a réussi : formatage, lint, catalogue, 231 tests Node et sept suites navigateur. Rapport : `browser-artifacts/run-8AjG64/summary.json`. Les captures du cours se trouvent dans `scratch-mission-browser/codecraft-catalog-qa-3zMoKa/` de ce rapport.

Captures examinées : déclenchement et diagnostic sur ordinateur, réceptions du décor et de la vitesse sur mobile, condition imbriquée à 320 px et pile complète de la scène à 1280 px. La condition se répartit sur plusieurs lignes sur mobile. Les modèles complets restent longs à petite largeur ; aucun débordement horizontal n'est observé.

Ces contrôles ne constituent ni une partie complète au clavier, ni une reconstruction depuis les palettes par un élève. La revue pédagogique et l'essai d'autonomie restent distincts.

## Suite

La [revue pédagogique du chapitre](revue-scratch-mission-messages.md) est terminée et sa correction de dépannage est appliquée aux consignes élève et professeur. Poursuivre États en Sol High, puis sa revue pédagogique en Astra High. Tests personnels reste ensuite à réaliser dans le même jeu.
