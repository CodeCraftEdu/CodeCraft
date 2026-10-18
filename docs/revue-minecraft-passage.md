# Revue de la mission Construire et réparer un passage

18 octobre 2026. Revue pédagogique de la [mission 3](../content/modules/jeux-video/minecraft-passage.json), de son guide professeur et de son raccordement aux deux premières missions. Référence : [compte rendu d'intégration](integration-minecraft-passage.md).

## Verdict

Aucune correction nécessaire identifiée dans le périmètre examiné. Conserver le chapitre et poursuivre la mission 4. Cette conclusion porte sur les contenus, leurs références et le rendu disponible ; elle ne constitue pas une observation d'autonomie avec des élèves.

Aucun texte élève, code applicatif ou test n'est modifié pendant cette revue. Seule la documentation de suivi est actualisée.

## Progression et autonomie

La mission réutilise la trace et la répétition déjà travaillées, puis ajoute le terrain transformé à ce que l'élève doit suivre. La prise en main sépare d'abord avancer et placer sur un seul tour. La construction complète vient ensuite, avant la réparation d'un programme fourni.

La distinction Agent/blocs et joueur/flèches reste visible dès l'entrée. Le contrôle de la traversée du joueur empêche d'assimiler arrivée de l'Agent et pont utilisable. Reset est présenté avant les essais répétés et conservé dans la vérification de la correction.

Hero 7 est traité comme un programme à lire et à ajuster. Le texte n'exige pas de détacher des commandes verrouillées. Si une ancienne version personnelle est déjà chargée, la consigne demande de conserver une capture avant Start Over pour retrouver le programme initial.

Le défi autonome reprend la réparation du nombre de tours puis ajoute une comparaison plus discriminante : trois déplacements suivis d'un seul placement. L'élève doit alors observer les cases construites, car l'arrivée seule ne distingue pas les deux programmes. Cette comparaison justifie l'apport du chapitre après Scratch, au-delà d'un nouveau rappel des boucles.

Le dessin original est explicitement séparé de la carte de Code.org. Le guide précise que quatre tours est la réponse du dessin, pas celle de Hero 7. Les réponses sont placées après les consignes, dans un encart replié. Le guide accepte des traces orales ou dessinées et prévoit un usage ponctuel pendant le stage.

## Exactitude et raccords

- Le dessin montre bien A et B comme rive de départ, C à F comme eau, G comme rive d'arrivée, avec le pion en B vers la droite.
- Trois tours avancer puis placer couvrent C, D et E et terminent en E ; F manque. Quatre tours couvrent C à F et terminent en F. Trois avancer puis un seul placer donnent E comme arrivée mais ne couvrent que E. Les réponses élève et professeur concordent.
- Le placement sur la case actuelle est cohérent avec les sources officielles déjà consultées : `LevelModel.placeBlock` utilise `entity.position`. Les cartes de référence comportent trois puis cinq cases d'eau sur les lignes suivies depuis les départs annoncés. Les textes distinguent ces références d'une exécution sur le site déployé.
- L'inventaire de Hero 7 fournit trois tours avec avancer puis placer, des commandes partiellement verrouillées et un nombre de répétitions modifiable. La correction demandée respecte ce périmètre.
- Les consignes demandent une prévision avant modification, un nouvel essai depuis le départ, puis une vérification du terrain et du passage du joueur. La conservation par carnet et capture ne promet pas un export importable.
- Le parcours et la navigation enchaînent les missions 1, 2 et 3. Le lien de reprise ouvre la mission 2 avec une consigne de retour. Les liens externes ciblent Hero 6 et 7. Aucun lien vers un chapitre futur inexistant n'est introduit.

## Vérifications et limites

Lecture complète du module, du guide professeur, du parcours, du SVG, du test Minecraft et du rapport d'intégration. Recalcul des traces sur la bande originale et lecture des cartes de référence conservées dans `browser-artifacts/audit-minecraft-2026-10-18/AgentLevels.js`. Réutilisation de l'inventaire des niveaux et des sources moteur déjà recueillies ; aucune nouvelle recette systématique de Code.org.

`node --test tests/minecraft.test.cjs` relancé pendant la revue : quatre tests réussis, couvrant navigation, liens de niveaux et traces des défis. Le test du passage est une simulation de la règle de l'exercice original, pas une exécution du moteur Code.org.

Capture mobile `minecraft-passage-activity-320.png` réexaminée dans `browser-artifacts/run-EeXkFT/student-browser/codecraft-catalog-qa-AvJdKL/` : consignes, dessin et programme contenus dans la largeur de la page. Les lettres et légendes du dessin sont petites à cette largeur, mais les positions et les types de cases sont aussi explicités dans le texte. Les captures ordinateur et mobile examinées lors de l'intégration restent disponibles dans ce dossier.

La validation complète précédente reste de 237 tests Node et sept suites navigateur réussis ; le rapport `browser-artifacts/run-EeXkFT/summary.json` a été relu. Aucun changement fonctionnel ne justifie de la relancer pour cette revue documentaire. La reprise avec un compte Code.org et l'autonomie avec des élèves ne sont pas déclarées testées.

## Suite

Rédiger et intégrer la mission 4 sur les procédures fournies : prévoir position, direction et terrain avant et après un appel. Modèle conseillé pour cette réalisation : Sol High. Aucun commit ni push effectué pendant cette revue.
