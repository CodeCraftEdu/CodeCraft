# Minecraft : premières missions intégrées

18 octobre 2026. Réalisation du premier lot validé après l'[audit pédagogique](audit-scratch-minecraft.md). La [revue pédagogique](revue-minecraft-premier-lot.md) est terminée et ses deux corrections ciblées sont appliquées.

## Contenu disponible

- [Parcours](../content/pathways/minecraft-algorithmes.json) : Minecraft : résoudre et automatiser, dans Jeu vidéo. Il annonce deux missions disponibles sur les huit prévues et ne référence aucun cours futur.
- [Prévoir le trajet de l'Agent](../content/modules/jeux-video/minecraft-trajets.json) : distinction Agent/joueur, grille originale, position et orientation, prévision puis essai dans Hero 1 et 3, variante de virage et de départ.
- [Comparer deux programmes](../content/modules/jeux-video/minecraft-repetitions.json) : même trajet développé ou répété, comptage explicite des blocs et actions, transfert dans Hero 4 puis choix personnel dans Hero 5.
- [Grille originale](../images/minecraft-reperes.svg) : colonnes A à E, lignes 1 à 5, départ C4 vers le nord. Les solutions sont textuelles et repliées ; le dessin initial ne révèle pas le trajet.

Les activités principales, prévisions et consignes de construction sont visibles. Les indices et comparaisons détaillées sont repliés. Un élève venant de Scratch peut abréger les rappels ; un débutant dispose des explications nécessaires sur place. Chaque mission possède un guide professeur, avec diagnostic, réponses, différenciation et difficultés observables. Le stade de consultation pendant un stage reste ponctuel ; aucun nouveau déroulé KidnKod n'est publié.

Les jeux et blocs restent sur Code.org. Les exercices de grille et de comparaison sont originaux ; aucune copie de carte ou de solution propriétaire du guide de stage n'est intégrée. Les liens externes pointent vers des niveaux précis et s'ouvrent sans remplacer le chapitre.

## Raccordement technique

Le manifeste, le domaine et le registre des compétences déclarent les nouveaux contenus. Les identifiants existants sont conservés. Le catalogue régénéré contient 84 modules et neuf parcours.

Le champ facultatif `externalLink` d'une leçon fournit un lien HTTPS vers un autre niveau. Le rendu commun et son schéma ont été étendus ; les liens principal et secondaire des missions sont contrôlés, avec leur ouverture dans un autre onglet. Les exemples utilisent le cadre de code existant pour des instructions sur grille, sans les présenter comme JavaScript éditable.

Les décomptes existants des tests de catalogue ont été actualisés. Les nouveaux tests couvrent l'entrée dans le parcours, la navigation limitée aux deux missions, les niveaux externes et les traces des programmes A/B. Les captures des deux cours sont incluses dans `student-browser`, aux largeurs 1280, 390 et 320 pixels, avec une vue de l'activité.

## Vérifications réalisées

- Catalogue régénéré et synchronisé ; formatage et lint réussis.
- `npm run check` complet réussi : 236 tests Node, sept suites navigateur.
- Rapport de cette exécution : `browser-artifacts/run-CKELUb/summary.json`. Les captures des cours sont dans `student-browser/codecraft-catalog-qa-D0pPdR/` sous ce dossier.
- Captures examinées : grille de la première mission à 1280 et 320 pixels, répétition et début de comparaison à 390 pixels. La navigation et l'absence de débordement sont contrôlées aux trois largeurs.
- Liens documentaires locaux vérifiés et diff sans erreur d'espacement.

Le serveur d'aperçu est démarré sur `http://localhost:8000`. Aucun commit ou push n'a été demandé pour ce lot.

## Limites et suite

Les vérifications des palettes et les essais ciblés Hero 12 de l'audit restent les références techniques ; aucune nouvelle recette systématique des exercices Code.org n'est engagée. La comparaison sur papier reste possible lorsque la palette limite l'écriture développée. Les captures de blocs et le carnet permettent de reconstruire une activité ; ils ne constituent pas un export importable. Aucun compte ni partage public n'est imposé.

La revue a porté sur les deux missions : autonomie de lecture, différence de difficulté selon l'expérience, exactitude des explications et utilité après Scratch. Le raccourci après Scratch préserve maintenant la distinction Agent/joueur, avec un diagnostic professeur aligné. L'aide à la comparaison distingue les actions développées, les cases parcourues et la direction finale. Depuis ce lot, la [mission 3](integration-minecraft-passage.md) est également intégrée ; les cinq suivantes restent à rédiger.
