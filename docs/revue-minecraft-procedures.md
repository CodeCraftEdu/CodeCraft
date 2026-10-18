# Revue de la mission Lire une procédure avant de l'appeler

18 octobre 2026. Revue de la [mission 4](../content/modules/jeux-video/minecraft-procedures.json), de son guide professeur, de sa grille originale et de son intégration au parcours. Références : [intégration](integration-minecraft-procedures.md) et [cadrage pédagogique](audit-scratch-minecraft.md).

## Verdict

Aucune correction nécessaire identifiée dans le périmètre examiné. Le chapitre respecte le positionnement validé : lire les effets d'une procédure et préparer l'état entre ses appels. La mission 5 peut être engagée après validation de cette revue.

Cette conclusion porte sur les contenus, les configurations Code.org déjà recueillies et les captures disponibles. Elle ne constitue ni une nouvelle exécution complète des puzzles, ni une observation d'autonomie avec des élèves. Aucun contenu élève, code applicatif ou test modifié pendant la revue.

## Progression et autonomie

La distinction définition/appel précède les manipulations. Un premier appel est prévu et essayé avant l'enchaînement de deux appels. Le virage final de Hero 8 rend visible le changement d'état entre les deux. L'élève doit vérifier le passage du joueur, en complément de la position de l'Agent.

Hero 10 introduit ensuite le choix entre deux procédures qui ne tournent pas. Les commandes de raccord sont explicitement autorisées et leur rôle est expliqué. Le saut de Hero 9 n'introduit pas une commande inexpliquée : détruire devant, avancer et placer sous l'Agent sont décrits avant les tâches. Le guide prévoit de suivre ce motif avec un débutant.

Après Scratch, l'apport reste identifiable : le nom d'un bloc ne décrit pas son état final ; la position, l'orientation et le terrain sont conservés entre les appels. Les critères et les questions professeur demandent une prévision et une justification, au-delà de la réussite du puzzle.

Le défi autonome possède ses propres règles et une définition visible avant les questions. Il est explicitement distinct des cartes de Code.org. La consigne impose de passer par les quatre cases d'eau : les autres cases praticables ne rendent donc pas le détour terrestre équivalent au passage demandé. Le changement d'orientation initiale permet de vérifier le transfert. Les réponses sont repliées après les consignes.

Les commandes de l'Agent et celles du joueur sont distinguées dès l'entrée. Reset apparaît avant les essais répétés. Le carnet et les captures servent à reconstruire les appels ; la reprise avec un compte doit être vérifiée par l'élève et n'est pas garantie par la seule capture. Le guide prévoit une explication orale ou dessinée et un usage ponctuel pendant le stage.

## Exactitude technique et traces

Lecture ciblée de l'inventaire conservé dans `browser-artifacts/audit-minecraft-2026-10-18/levels.json`, sans refaire les 50 niveaux :

- Hero 8 fournit bien quatre déplacements, deux placements de planches et un virage à droite. La définition fournie est verrouillée, et les appels sont disponibles. Les consignes demandent de composer les appels, sans modifier cette définition.
- Hero 10 fournit deux et trois répétitions de détruire, avancer, placer un rail. Aucun virage n'est inclus. La palette permet les déplacements et les rotations nécessaires aux raccords. La cible mentionnée, le briquet, correspond à Flint and Steel dans la configuration.
- Les sources officielles déjà conservées confirment la distinction spatiale : `GameController.destroyBlock` vise le bloc devant l'entité ; `LevelModel.placeBlock` utilise sa position actuelle. Ces sources décrivent le moteur et ne remplacent pas une exécution du niveau déployé.
- Sur la grille originale, un appel depuis B5 nord couvre B4 puis B3 et finit en B3 est. Le second couvre C3 puis D3 et finit en D3 sud. Le passage imposé rejoint E3, sans exiger que l'Agent y termine.
- Depuis B5 est, un appel finit en D5 sud et ne couvre aucune des quatre cases d'eau. Un virage à gauche avant l'appel rétablit le départ attendu.

Le SVG, la définition, les réponses élève et le guide professeur concordent. Le guide distingue les quatre déplacements de Hero 8 des deux déplacements du tronçon original. La navigation relie les quatre missions disponibles ; les liens externes ciblent Hero 8 et 10.

## Vérifications et limites

`node --test tests/minecraft.test.cjs` relancé pendant cette revue : cinq tests réussis, couvrant navigation, liens et traces des exercices originaux. La simulation de la grille applique les règles de l'exercice ; elle ne teste pas le moteur Code.org.

Captures réexaminées : `minecraft-procedures-activity-1280.png` et `minecraft-procedures-activity-320.png` dans `browser-artifacts/run-ogG6y9/student-browser/codecraft-catalog-qa-gfQ4qr/`, ainsi que `browser-artifacts/codecraft-catalog-qa-9ufum1/definition-320.png`. Aucun débordement visible. La définition tient en largeur et son indentation distingue le virage final du corps de la boucle. La légende du dessin est petite à 320 pixels ; les coordonnées et les types de cases sont aussi explicités dans le texte.

Les rapports de validation précédents ont été relus : 238 tests Node réussis, six suites navigateur réussies lors du contrôle complet, puis succès de la suite professeur relancée seule après un échec de restauration du défilement. La cause de cet échec reste indéterminée. Aucun nouveau contrôle complet n'est nécessaire pour cette revue documentaire ; un contrôle complet réussi reste requis avant un futur push, comme indiqué dans le rapport d'intégration.

## Suite

Mission 5 : construire un motif avec des répétitions imbriquées, puis une procédure modifiable dans Hero 12. Modèle conseillé pour la rédaction et l'intégration : Sol High. Aucun commit ni push effectué pendant cette revue.
