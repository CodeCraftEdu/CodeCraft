# Revue pédagogique : Classer et vérifier une prédiction

Revue du 29 octobre 2026 de l’état local du chapitre 3. Aucune correction du cours ou du rendu appliquée pendant cette revue.

Suite à la revue : les deux corrections prioritaires et l’ajustement ci-dessous ont été appliqués dans un lot distinct. Les constats conservent l’état avant correction. Le cours explique maintenant le rôle des scores, présente les trois scores de l’exemple, varie la position des bonnes réponses et réserve la conclusion sur l’erreur au retour de la question.

## Verdict

Le chapitre conserve une progression cohérente : utiliser un classificateur, examiner des exemples étiquetés, comparer score et résultats, puis choisir des tests. Aucun contresens technique majeur repéré. Deux corrections prioritaires concernent l’explication du score et la construction des QCM. Un ajustement court rendrait aussi l’observation plus active.

## Périmètre

Lecture de `content/modules/ia/ia-classification.json`, du cadrage validé, des règles éditoriales, du rendu `src/student/ai-discovery.mjs` et des tests propres au chapitre. Vérification des sources primaires ci-dessous. Les résultats fonctionnels et captures de l’intégration sont réutilisés ; aucune nouvelle recette navigateur ni séance avec des élèves. La durée de 30 à 40 minutes reste une estimation.

## Corrections prioritaires

### P2. Expliquer ce que représente un score avant ses limites

**Emplacement :** `content/modules/ia/ia-classification.json`, ligne 191, onglet « Lire un score », puis retours des deux questions.

Le chapitre explique correctement qu’un score élevé ne garantit pas une réponse juste et ne mesure pas le taux global de réussite. Mais il ne dit pas ce que le nombre représente ni comment il intervient dans une classification. L’élève peut retenir « 98 % ne prouve rien » sans comprendre l’utilité du score. L’objectif officiel Experience AI demande justement d’expliquer son usage dans les prédictions de classification [E].

**Correction proposée :** introduire un exemple explicitement construit de classificateur qui calcule un score pour chaque catégorie et propose celle ayant le score le plus élevé. Montrer, par exemple, vélo 98 %, tasse 1 %, bateau 1 %, à côté du dessin de tasse. Dire : « Dans cet exemple, le modèle calcule un score pour chaque catégorie. Le score le plus élevé détermine sa proposition. » Délimiter cette règle à l’exemple : tous les systèmes ne choisissent pas leurs réponses de cette façon. Conserver ensuite la distinction avec les quatre bonnes réponses sur cinq.

Le score traduit ici une estimation calculée par le modèle, pas une mesure de vérité. Ne pas le présenter comme un sentiment, ni traduire automatiquement 98 % par une probabilité fiable de justesse. Les travaux sur la calibration étayent cette précaution [C]. L’explication des seuils chez Google fournit également un exemple concret d’utilisation de sorties numériques pour décider d’une catégorie [G3]. Aucun calcul supplémentaire n’est nécessaire pour l’élève.

### P2. Rompre le motif « première réponse toujours correcte »

**Emplacement :** les dix champs `choices` du chapitre, du premier à l’ultime onglet ; première occurrence ligne 48.

Vérification directe des données : **10 questions sur 10 ont leur bonne réponse en première position**. Le rendu conserve cet ordre. Un élève peut donc obtenir toutes les validations en choisissant systématiquement la première proposition, sans mobiliser les notions. Les tests actuels vérifient les réponses déclarées mais ne détectent pas cette faiblesse pédagogique.

**Correction proposée :** répartir manuellement les bonnes réponses entre les positions disponibles. Un ordre fixe varié suffit ; inutile d’ajouter du mélange aléatoire ou une nouvelle mécanique. Conserver les identifiants pour préserver la reprise locale et adapter seulement les tests qui dépendent de la position des options.

## Ajustement recommandé

Dans l’onglet des scores, la phrase « il ne garantit pas qu’elle soit correcte » donne directement la conclusion demandée juste après. L’enseignement explicite avant un exercice est pertinent, mais cette question précise ne vérifie alors presque que la lecture.

Après la brève définition du score, faire observer le dessin, la catégorie et les nombres, puis demander si la catégorie proposée correspond au dessin. Garder la conclusion sur la possibilité d’un score élevé erroné dans le retour. Conserver le tableau et son comptage, qui exigent déjà une véritable observation. Il s’agit de réorganiser quelques phrases, sans ajouter une activité ou allonger le chapitre.

## Points confirmés

- La classe et l’étiquette sont correctement distinguées dans le contexte de la classification supervisée [G1]. La diversité des exemples n’est pas présentée comme une garantie de réussite.
- Changer les traits change l’entrée ; une nouvelle proposition ne prouve pas un réentraînement pendant la partie. Cette formulation n’affirme pas connaître toute l’infrastructure actuelle du jeu.
- La galerie est bien décrite comme une sélection de dessins reconnus. La documentation distingue la catégorie demandée (`word`) et la reconnaissance (`recognized`) [Q]. Le cours évite d’en déduire une précision globale.
- Les nombres de l’exercice sont clairement construits et ne sont pas attribués à Quick, Draw!. Quatre correspondances sur cinq donnent bien 80 %, limité à cet échantillon.
- Les exemples gardés à part de l’entraînement sont nécessaires pour examiner la généralisation [G2]. Une chaussure hors des catégories ne crée pas automatiquement une nouvelle classe et son rejet n’est pas garanti.
- L’exercice final demande une entrée concrète, une réponse attendue et une vérification supplémentaire. Il conserve une autoévaluation explicite, sans prétendre noter automatiquement une réponse libre.
- La pratique externe reste dans Quick, Draw! ; le chapitre ne demande ni document supplémentaire ni entraînement d’un nouveau modèle. La voie d’observation et la précaution sur les données personnelles sont utiles.

## Sources vérifiées

Sources choisies pour la classification d’images et sa pédagogie ; ajouter des références généralistes sur les grands modèles de langage n’améliorerait pas ici la précision.

- [E : Raspberry Pi Foundation et Google DeepMind, Experience AI, Classification](https://experience-ai.org/en/units/understanding-ai-11-14/lessons/14) : objectifs, classes, étiquettes et scores.
- [G1 : Google, Supervised Learning](https://developers.google.com/machine-learning/intro-to-ml/supervised) : données étiquetées, entraînement, diversité et évaluation.
- [Q : Google Creative Lab, Quick Draw Dataset](https://github.com/googlecreativelab/quickdraw-dataset) : catégorie demandée, reconnaissance et sélection de la galerie.
- [G2 : Google, Dividing the original dataset](https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets) : séparation des exemples et limites des tests.
- [G3 : Google, Thresholds and the confusion matrix](https://developers.google.com/machine-learning/crash-course/classification/thresholding) : passage d’une sortie numérique à une décision, dans un exemple binaire.
- [C : Guo et al., On Calibration of Modern Neural Networks](https://proceedings.mlr.press/v70/guo17a) : distinction entre scores et probabilités correctement calibrées.

Les recommandations sur l’ordre des choix et la place du retour sont des conclusions de cette revue du dispositif CodeCraft, pas des prescriptions attribuées à ces sources.
