# Minecraft : construire et réparer un passage

18 octobre 2026. Mission 3 rédigée et intégrée après les corrections de la [revue des deux premières missions](revue-minecraft-premier-lot.md), selon le [cadrage validé](audit-scratch-minecraft.md).

## Contenu

Le module [minecraft-passage.json](../content/modules/jeux-video/minecraft-passage.json), « Construire et réparer un passage », est la troisième entrée du [parcours](../content/pathways/minecraft-algorithmes.json). Il ouvre la partie « Construire et organiser ». La fin de la mission 2 mène désormais à cette mission ; la mission 3 annonce les procédures à venir sans référencer de module inexistant.

- Hero 6 : observer un déplacement puis une pose de planche, prévoir le passage complet, construire et vérifier la traversée du joueur.
- Hero 7 : lire les trois tours fournis, prévoir leur résultat, trouver la première case manquante, modifier le nombre de tours et refaire l'essai après Reset. Les commandes verrouillées restent en place.
- Défi autonome original : bande A à G, départ en B vers la droite, eau de C à F. Trois tours d'avancer puis placer couvrent C, D et E ; quatre tours complètent le passage et terminent en F. Trois déplacements suivis d'un seul placement donnent aussi E comme arrivée, mais construisent seulement E.
- Carnet : conserver départ, prévision, premier écart, correction, capture des blocs et résultat de traversée. Les captures servent à reconstruire, sans promesse d'import.

La [bande illustrée](../images/minecraft-passage.svg) est originale et distincte des cartes de Code.org. Le programme du défi n'est pas présenté comme la solution de Hero 7. Les réponses de l'exercice autonome sont repliées. Le guide professeur propose diagnostic, réponses, différenciation et dépannage, avec un usage ponctuel pendant le stage.

## Appuis techniques

L'inventaire existant des palettes et programmes de départ est réutilisé. Le programme de Hero 7 fournit bien une répétition de trois avec avancer puis placer ; la pile ne peut pas être librement démontée, mais le nombre est modifiable.

Une vérification documentaire ciblée complète cet inventaire : le [modèle officiel du moteur](https://github.com/code-dot-org/craft/blob/main/src/js/game/LevelMVC/LevelModel.js) place le bloc sur `entity.position`. Le [comportement de l'Agent](https://github.com/code-dot-org/craft/blob/main/src/js/game/Entities/Agent.js) permet de construire sur le liquide. Les [cartes de référence](https://github.com/code-dot-org/craft/blob/main/test/helpers/AgentLevels.js) agent06 et agent07 ont les départs correspondant aux configurations inventoriées : respectivement trois et cinq cases d'eau en ligne droite. Ce sont des sources de référence, pas une nouvelle exécution des puzzles déployés. Le guide demande de compter les cases de la carte affichée.

Copies de lecture locales : `browser-artifacts/audit-minecraft-2026-10-18/Agent.js`, `LevelModel.js` et `AgentLevels.js`. Aucun moteur ni asset Code.org n'est intégré au site. Les activités restent sur [Hero 6](https://studio.code.org/courses/hero/units/1/lessons/1/levels/6) et [Hero 7](https://studio.code.org/courses/hero/units/1/lessons/1/levels/7).

## Intégration et vérification

Le manifeste et le parcours déclarent la nouvelle mission. Deux compétences observables sont ajoutées : prévoir le terrain construit et localiser puis vérifier une correction. Les identifiants des modules et compétences existants sont conservés. Le catalogue contient 85 modules et neuf parcours.

Les tests Minecraft couvrent la navigation jusqu'à la troisième mission, les liens Hero 6/7 et la différence entre arrivée et terrain construit dans l'exercice original. Les captures de la nouvelle mission sont ajoutées au scénario élève aux largeurs 1280, 390 et 320 pixels, avec une vue du défi.

Le contrôle ciblé `npm run check:target -- student --node-only` a réussi : 96 tests, catalogue, formatage et lint. Puis `npm run check` complet a réussi : 237 tests Node et sept suites navigateur. Rapport : `browser-artifacts/run-EeXkFT/summary.json`.

Captures examinées dans `browser-artifacts/run-EeXkFT/student-browser/codecraft-catalog-qa-AvJdKL/` : `minecraft-passage-activity-1280.png`, `minecraft-passage-activity-320.png` et `minecraft-passage-390.png`. Le dessin, les consignes et l'indentation du programme sont lisibles ; aucun débordement horizontal n'a été observé. Les liens documentaires locaux et le diff ont également été vérifiés. Ces contrôles techniques ne constituent pas une observation de compréhension avec un élève réel.

## Suite

La [revue pédagogique](revue-minecraft-passage.md) est terminée : aucune correction nécessaire identifiée dans son périmètre. La [mission 4 sur les procédures fournies](integration-minecraft-procedures.md) est désormais intégrée. Les quatre missions suivantes restent à rédiger. Aucun commit ni push effectué pour cette intégration.
