# Revue du chapitre Messages de Mission balises

15 octobre 2026. Revue du [cinquième chapitre intégré](integration-scratch-mission-messages.md), de sa référence Scratch et de son guide professeur.

## Verdict

La progression peut être conservée : préparer le niveau, essayer une réception de décor avec un envoi isolé, ajouter la réception de vitesse, puis raccorder l'envoi au seuil. Le passage à trois points, son verrouillage par le niveau et la conservation des fins de partie sont cohérents. Le défaut de dépannage de priorité moyenne décrit ci-dessous est corrigé.

## P2 : rétablir un envoi isolé dans le dépannage final

**Source :** [scratch-mission-messages.json](../content/modules/jeux-video/scratch-mission-messages.json), `depannage/sans-effet`, deuxième paragraphe, et `teacherGuide.commonErrors[0].helps`, première et dernière aides.

Le dépannage demande de cliquer sur l'envoi pour isoler les réceptions. Or, à ce stade, l'élève a déplacé ce bloc dans le `si` de la boucle principale et supprimé les envois isolés. Dans Scratch, cliquer sur un bloc raccordé agit sur toute sa pile : il arrête cette pile si elle tourne déjà, ou la lance depuis son début. Il ne lance pas seulement le bloc sélectionné.

Un élève dont les réceptions sont correctes peut donc ne voir aucun des deux effets annoncés. Le clic peut arrêter la surveillance de la scène ou réinitialiser les compteurs et le décor, sans envoyer le message. Le guide professeur reprend la même ambiguïté et termine en demandant de déplacer un envoi déjà raccordé.

**Vérification :** lecture du moteur Scratch utilisé pour la recette, dans le fichier local ignoré `browser-artifacts/scratch-runtime/vm.js`. L'événement de clic appelle `runtime.toggleScript(this.getTopLevelScript(A.blockId), {stackClick: true})`. `getTopLevelScript` remonte les parents jusqu'à la racine ; `toggleScript` arrête la pile active correspondante ou la démarre. Cette vérification porte sur le traitement du clic dans le moteur, sans manipulation supplémentaire de l'éditeur.

**Correction proposée :** pour dépanner une construction déjà raccordée, demander de prendre un nouveau bloc d'envoi dans la palette, de sélectionner le message existant `secteur2` et de le laisser seul dans la zone de code de la scène. Initialiser le jeu, cliquer sur cet envoi temporaire pour tester les deux réceptions, puis retirer ce bloc et reprendre le test normal au drapeau. Aligner le guide professeur sur cette procédure, en conservant l'envoi principal à sa place.

**Critère de clôture :** le dépannage fonctionne depuis le projet terminé, précise le bloc temporaire et son retrait, et ne demande plus de cliquer sur l'envoi raccordé pour tester les seules réceptions. Les premiers essais du cours, qui utilisent explicitement un bloc isolé, restent valables.

**Correction appliquée :** le dépannage élève et les aides professeur demandent un nouveau bloc pris dans la palette, le choix du message existant, son placement isolé sur la scène et un départ au drapeau avant le clic. L'envoi principal reste dans son `si`. Le bloc temporaire est retiré avant de rejouer le passage à trois points. Le catalogue est régénéré et validé, le formatage contrôlé et les captures du dépannage relues à 1280 et 320 px dans `browser-artifacts/messages-depannage/codecraft-catalog-qa-QVq9Gt/`. Le contrôle porte sur les textes et leur rendu ; la procédure corrigée n'a pas été reconstruite dans l'éditeur Scratch. Aucune nouvelle assertion ne dépend de ces formulations.

## Éléments examinés et limites

- Lecture des consignes, des aides, des prévisions, des modèles et du guide professeur. Les propriétaires et l'emplacement des piles sont précisés. La reprise des sauvegardes distingue la version principale des copies de diagnostic et de variation.
- Examen de la logique : condition commune `niveau = 1 et score > 2`, changement de niveau avant l'envoi, deux réceptions courtes, affectation de la vitesse commune à 7 par l'original et les clones, retour au premier secteur au drapeau.
- Consultation des contrôles déjà réussis : 231 tests Node et sept suites navigateur dans `browser-artifacts/run-8AjG64/summary.json`. Les modèles et la référence sont comparés par les tests du chapitre.
- Consultation des résultats de la recette du fichier public dans le moteur Scratch : départ, seuil à trois points, vitesse des clones présents et suivants, diagnostic d'envoi unique, fins de partie et relances. Résultats dans `browser-artifacts/scratch-mission-messages-engine/resultats.json`.
- Examen des captures du déclenchement à 320 px et du diagnostic à 1280 px dans `browser-artifacts/run-8AjG64/scratch-mission-browser/codecraft-catalog-qa-3zMoKa/`. La condition se répartit sur plusieurs lignes à petite largeur et reste lisible ; pas de débordement visible dans ces captures.

Aucun autre défaut bloquant identifié dans ce périmètre. La recette injecte des positions et des compteurs : elle ne remplace ni une partie complète au clavier, ni une reconstruction du projet depuis les palettes, ni un essai d'autonomie avec un élève. Le seuil de la variation à quatre points a été relu, sans nouvelle recette de cette variante. Les suites générales déjà réussies n'ont pas été relancées pour cette revue documentaire.

## Suite

Poursuivre le chapitre États prévu par la [roadmap](roadmap-scratch-avance.md), en Sol High pour la réalisation puis Astra High pour sa revue pédagogique.
