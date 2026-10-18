# Minecraft : lire une procédure avant de l'appeler

18 octobre 2026. Mission 4 rédigée et intégrée après la [revue de la mission 3](revue-minecraft-passage.md), selon le [cadrage des huit missions](audit-scratch-minecraft.md).

## Progression intégrée

Le module [minecraft-procedures.json](../content/modules/jeux-video/minecraft-procedures.json) suit Construire et réparer un passage dans la partie Construire et organiser du [parcours](../content/pathways/minecraft-algorithmes.json). Quatre missions sont disponibles, sur huit prévues.

- Hero 8 : distinguer définition et appel ; lire la procédure fournie ; prévoir puis essayer un appel, ensuite deux. Le second reprend la position et la direction laissées par le premier, dont le virage final.
- Hero 10 : lire les procédures courte et longue, suivre le motif détruire devant, avancer, poser un rail, puis choisir les appels et les commandes de raccord selon la carte. Les définitions restent verrouillées.
- Défi original : un tronçon de deux déplacements et deux placements, suivi d'un virage à droite. Deux appels depuis B5 nord couvrent B4, B3, C3 et D3 et terminent en D3 sud. Un appel depuis B5 est termine en D5 sud et laisse les cases d'eau intactes ; tourner à gauche avant l'appel rétablit le départ attendu.

La [grille](../images/minecraft-procedures.svg) et sa procédure sont originales et distinctes de la définition de Hero 8. La définition est visible avant les tâches ; les réponses sont repliées après les prévisions. Le guide professeur distingue les effets réels de chaque procédure et leur usage ponctuel pendant le stage.

## Possibilités et limites respectées

L'inventaire déjà réalisé est réutilisé pour les palettes et les définitions de Hero 8 et 10. Hero 8 fournit quatre déplacements, deux placements et un virage à droite par appel. Hero 10 fournit deux ou trois répétitions de détruire, avancer, poser un rail, sans virage. La mission ne demande ni modification des définitions verrouillées, ni paramètre, ni saisie JavaScript.

Le saut de Hero 9 est accompagné : la commande détruire et son raccord avec avancer et poser sont expliqués dans le chapitre. Une consultation ciblée du [contrôleur officiel](https://github.com/code-dot-org/craft/blob/main/src/js/game/GameController.js) confirme que la destruction vise le bloc destructible devant l'entité ; le [modèle de placement](https://github.com/code-dot-org/craft/blob/main/src/js/game/LevelMVC/LevelModel.js) utilise sa position actuelle. Copie de lecture locale : `browser-artifacts/audit-minecraft-2026-10-18/GameController.js`.

Ces lectures complètent les vérifications existantes ; elles ne constituent pas une nouvelle exécution complète des puzzles déployés. Les niveaux restent sur [Hero 8](https://studio.code.org/courses/hero/units/1/lessons/1/levels/8) et [Hero 10](https://studio.code.org/courses/hero/units/1/lessons/1/levels/10). Aucun nouveau tour systématique des 50 niveaux n'est engagé.

Le carnet conserve les effets des procédures, les raccords et les captures des appels. La reprise avec un compte reste à vérifier dans l'usage réel ; aucune capture n'est présentée comme un fichier importable.

## Raccordement et vérification

Le manifeste et le parcours déclarent la mission. La compétence `minecraft.procedure` décrit la lecture et la préparation de l'état entre les appels. Les identifiants précédents sont conservés. Le catalogue contient 86 modules et neuf parcours. La fin de la mission 3 mène désormais à la mission 4 ; la mission 5 n'a pas de lien factice.

Les tests Minecraft couvrent l'enchaînement des quatre cours, les liens Hero 8/10 et le suivi du terrain et de l'orientation à travers les appels de la procédure originale. Le scénario élève capture le module et son défi à 1280, 390 et 320 pixels.

- Contrôle ciblé `npm run check:target -- student --node-only` réussi : 97 tests, formatage, lint et catalogue.
- `npm run check` : formatage, lint et 238 tests Node réussis ; six suites navigateur réussies. La dernière, `teacher-browser`, a échoué sur la restauration du défilement après fermeture du mode conducteur (`teacher-session-scenario.cjs:300`). Aucun défaut du chapitre Minecraft n'a été signalé. Rapport : `browser-artifacts/run-ogG6y9/summary.json`, avec le rapport d'échec professeur conservé.
- Relance isolée `npm run test:browser -- teacher-browser` réussie, sans modification de contenu, de code ou de test : `browser-artifacts/run-Ct4jXZ/summary.json`. La cause du premier échec n'est pas établie ; les sept suites ont chacune réussi sur ces mêmes changements, mais le premier lancement complet a bien terminé en échec. Avant un futur push, conserver un nouveau contrôle complet réussi conformément aux règles du dépôt.
- Captures examinées dans `browser-artifacts/run-ogG6y9/student-browser/codecraft-catalog-qa-gfQ4qr/` : défi à 1280 et 320 pixels, consignes à 390 pixels. Grille et texte lisibles, sans débordement horizontal. La définition a aussi été capturée et examinée à 320 pixels dans `browser-artifacts/codecraft-catalog-qa-9ufum1/definition-320.png` : les niveaux d'indentation distinguent la boucle et le virage final.
- Liens documentaires locaux, formatage des documents et diff contrôlés.

Ces contrôles ne constituent pas une observation d'apprentissage avec des élèves, ni une nouvelle exécution de Hero 8 ou 10 dans Code.org.

## Suite

La [revue pédagogique de la mission 4](revue-minecraft-procedures.md) est terminée : aucune correction nécessaire identifiée dans le périmètre examiné. La [mission 5 sur les motifs et les procédures modifiables de Hero 12](integration-minecraft-motifs.md) est désormais intégrée. Les trois dernières missions restent à rédiger. Aucun commit ni push effectué pour cette intégration.
