# Revue du chapitre Clones de Mission balises

15 octobre 2026. Revue du [quatrième chapitre intégré](integration-scratch-mission-clones.md). Les constats concernent la version examinée ; la correction ci-dessous a ensuite été appliquée.

## Verdict

La progression peut être conservée : reprendre le projet personnel, retirer le danger fixe, créer une copie immobile, la déplacer, varier sa hauteur, répéter les créations, puis gérer les contacts. Les propriétaires et la place des ajouts sont précisés. Les deux piles finales correspondent à la référence Scratch. La correction pédagogique de priorité moyenne a été appliquée avant de poursuivre Messages.

## P2 : corriger le résultat annoncé à la fin de la partie

**Source :** [scratch-mission-clones.json](../content/modules/jeux-video/scratch-mission-clones.json), activité `essais/defaite` et `teacherGuide.notes`.

Le texte élève annonce que les copies peuvent rester figées jusqu'au prochain drapeau. Le guide professeur reprend cette explication. Or le bloc `stop tout` supprime immédiatement les clones : ils ne restent pas affichés jusqu'à la relance.

Le décalage concerne un résultat que l'élève doit observer pour vérifier sa construction. Un projet correct peut donc lui sembler différent du modèle attendu. La note professeur renforce la même erreur.

**Vérification ciblée :** charger la référence publique `mission-clones.sb3` dans le moteur Scratch mis en cache, éloigner Pilote, attendre deux clones, puis imposer le compteur de fin. Avec `vies = 0`, les deux clones disparaissent ; avec `score = 6`, les deux clones disparaissent également. Dans les deux cas, la scène exécute sa pile existante et arrête les scripts. La lecture de `runtime.stopAll()` confirme la suppression des cibles non originales.

**Correction appliquée :** le texte élève annonce que les commandes et les créations s'arrêtent et que les clones disparaissent aussitôt. La note professeur décrit la suppression immédiate et la relance par le drapeau. La logique du jeu est inchangée.

**Critère de clôture :** les textes élève et professeur décrivent la disparition immédiate ; un contrôle ciblé de fin de partie commence avec des clones encore présents et vérifie leur suppression avant toute relance.

## Éléments examinés et limites

- Lecture des consignes, du guide, de la transition depuis Vies, des sauvegardes et des variations vitesse/fréquence. Les réponses aux prévisions sont repliées après l'activité.
- Comparaison des modèles avec les piles générées : création depuis l'original caché, déplacement et hauteur propres à chaque copie, suppression après contact ou sortie, conservation de Pilote et Balise.
- Examen des captures de la fabrique à 1280 px et de la pile complète à 320 px, issues de `browser-artifacts/run-quK1Qf/scratch-mission-browser/codecraft-catalog-qa-holdVx/`. À petite largeur, la pile est longue et le nom de variable se répartit sur deux lignes ; aucun débordement horizontal n'est visible dans la capture examinée.
- Consultation des validations déjà réussies : 230 tests Node, sept suites navigateur et recette du fichier public dans le moteur Scratch. Ces contrôles n'avaient pas vérifié explicitement la présence de clones juste avant l'arrêt.
- Contrôle supplémentaire local : `browser-artifacts/review-mission-clones-stop.cjs`, résultats dans `browser-artifacts/scratch-mission-clones-engine/revue-arret.json`, captures dans `codecraft-catalog-qa-j93t9N/` du même dossier.

Le contrôle supplémentaire injecte les compteurs pour isoler l'arrêt ; il ne représente pas une partie jouée au clavier. Cette revue ne constitue pas une reconstruction complète depuis les palettes de l'éditeur ni un essai d'autonomie avec un élève. Les suites générales déjà réussies n'ont pas été relancées pour cette revue documentaire.

## Suite

Poursuivre le chapitre Messages conformément à la [roadmap](roadmap-scratch-avance.md).
