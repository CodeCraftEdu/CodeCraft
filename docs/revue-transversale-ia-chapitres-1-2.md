# Revue pédagogique transversale IA : chapitres 1 et 2

Date : 29 octobre 2026. Revue de l’état local, après les corrections du chapitre 1. Aucune correction applicative réalisée pendant cette revue.

Suite à la revue : corrections appliquées dans un lot distinct. Les quatre points P2 et les ajustements courts ci-dessous décrivent les constats avant correction ; voir `docs/ia-experience.md` pour l’état actuel.

## Verdict

La progression est pertinente : observer des usages, identifier entrée et sortie, vérifier un résultat, puis comparer instructions explicites et apprentissage à partir de données. Les deux chapitres peuvent être conservés. Le principal travail restant porte sur les explications et l’activité des émojis du chapitre 2, pas sur une reconstruction du parcours.

Le contenu technique central est juste. Cependant, une notion peut être exacte sans être suffisamment enseignée : « ajuster les paramètres » n’explique pas encore à un débutant ce qui change pendant l’entraînement. L’autonomie demande de rendre explicites les liens qu’un enseignant pourrait actuellement fournir à l’oral.

## Périmètre et méthode

Lecture des deux modules, de leurs retours et guides associés, du rendu des activités, de la logique des règles, des extraits locaux du guide d’animation et des supports Experience AI. Vérification documentaire externe des notions auprès des sources ci-dessous. Réutilisation des contrôles fonctionnels existants ; aucun nouveau test navigateur ni essai avec des élèves. Cette revue ne constitue donc pas une mesure de l’efficacité réelle auprès d’un groupe.

Références locales : `content/modules/ia/ia-decouvrir.json`, `content/modules/ia/ia-regles-donnees.json`, `src/student/ai-discovery.mjs`, `src/student/ai-experience.mjs`, `src/student/ai-rules.mjs`, `docs/ia-experience.md` et `assets/ia/README.md`.

## Corrections prioritaires

### P2. Expliquer le vocabulaire qui porte le raisonnement

**Emplacement :** chapitre 2, `flow`, lignes 115 à 136, puis introduction des émojis. Le chapitre 1 définit déjà le modèle de façon introductive, mais le deuxième introduit « étiquettes », « paramètres » et « prédiction » sans les relier à un exemple.

**Conséquence :** l’élève peut réussir le classement chronologique en reconnaissant les mots sans comprendre l’entraînement. « Prédiction » risque aussi d’être compris uniquement comme une prévision du futur, après l’exemple des repas du chapitre 1.

**Correction proposée :** expliquer les termes à leur première apparition, sans ajouter de glossaire massif :

- Étiquette : la catégorie associée à un exemple, ici « joie », « tristesse » ou « colère ».
- Paramètres : des valeurs numériques que l’entraînement ajuste et que le modèle utilise pour calculer ses résultats.
- Prédiction : le résultat proposé par le modèle ; ici une catégorie, pas un événement futur.
- Hypothèse : une règle possible que l’on va mettre à l’épreuve.

Les étiquettes et le mécanisme supervisé sont décrits par [Google][G2], les paramètres par [OpenAI][O1], la classification comme prédiction par [Google][G1]. L’explication concrète avant réemploi du vocabulaire est cohérente avec les recommandations de [Raspberry Pi Foundation][R1].

### P2. Délimiter l’exemple supervisé et rendre visible l’évaluation

**Emplacement :** chapitre 2, activité de remise en ordre `flow`. Les quatre étapes passent des messages étiquetés à l’entraînement, puis à une nouvelle entrée et sa prédiction.

**Constat :** ce scénario est correct pour une utilisation d’un classificateur supervisé. Ce n’est pas un cycle complet de préparation et de validation d’un modèle. « Vérifier une prédiction » ne distingue pas encore cette validation du contrôle d’un résultat individuel. L’absence d’un mot « supervisé » n’est pas en soi une erreur ; l’absence de délimitation peut laisser croire que tous les apprentissages nécessitent les mêmes étiquettes.

**Correction proposée :** annoncer que l’on étudie ici un apprentissage à partir d’exemples déjà classés. Faire apparaître un test sur des messages non utilisés pour l’entraînement avant l’utilisation du modèle, ou annoncer explicitement que la séquence actuelle ne montre que l’entraînement et l’utilisation. La première solution prépare mieux la suite. Une phrase suffit aussi pour situer l’apprentissage automatique comme une approche de l’IA ; inutile d’introduire toutes ses familles.

Sources : [apprentissage supervisé][G2], [séparation des données et évaluation][G3], [objectifs officiels de la leçon 2][E2].

### P2. Faire comprendre l’activité des émojis avant sa conclusion

**Emplacement :** chapitre 2, `hypothesisIntro`, `emojisConclusion`, et rendu des essais dans `ai-experience.mjs` autour de la ligne 478.

**Constat :** la distinction finale est juste : le logiciel applique une règle explicite ; aucun modèle n’est entraîné dans cette activité. Mais l’élève découvre cette limite après les essais. Il choisit parmi trois règles préparées, alors que l’objectif et la conclusion disent qu’il « propose » une règle. Chaque clic révèle simultanément le message, la sortie et son interprétation : il est possible de parcourir cette partie sans raisonner sur un seul cas.

**Correction proposée :** annoncer brièvement « Tu choisis une règle à partir des exemples, puis tu observes où elle échoue ». Employer « choisir et tester » tant que l’élève ne construit pas sa règle. Pour au moins un message, laisser l’élève prévoir la catégorie avant d’afficher le résultat et l’interprétation. Après l’essai, relier précisément les rôles : ici l’humain choisit la règle ; lors d’un entraînement, un algorithme ajuste le modèle.

Il ne faut pas ajouter un constructeur complexe ni remplacer cette activité par un entraînement complet. Le support original fait rechercher des régularités et réaliser des prédictions ; l’adaptation doit préserver cette activité intellectuelle. Sources : supports locaux Experience AI, diapositives 23 et 24 ; guide d’animation, pages 10 et 11 ; [Raspberry Pi Foundation][R1].

### P2. Clarifier ce que démontrent les exemples et les nouveaux essais

**Emplacement :** chapitre 2, corpus et bouton permettant de choisir une autre règle.

**Constat :** les règles proposées sont volontairement imparfaites, y compris sur la collection initiale. La règle « Nous / Ils / et » laisse certains messages de joie indéterminés. C’est acceptable pour étudier un indice fragile. La fiche doit préciser quels exemples échappent à la règle et signaler que les quatre messages de test sont réutilisés après un changement de règle.

**Correction proposée :** comparer la règle à un exemple initial qu’elle explique et à un autre qu’elle ne classe pas. Lors d’un second essai, annoncer une comparaison sur les mêmes messages. Réserver l’expression « exemples encore inconnus » à de vrais nouveaux cas. Il n’est pas nécessaire de créer une banque aléatoire ou d’enseigner les trois jeux entraînement/validation/test à ce stade.

Le fait de réutiliser ces cas est utile pour comparer des règles ; il ne fournit pas une nouvelle preuve de généralisation. Cette distinction découle du principe d’évaluation sur des données distinctes expliqué par [Google][G3].

## Ajustements courts utiles

- **Autonomie au morpion :** `copy.gameIntro` explique les rôles et les instructions, mais pas le but du jeu. Ajouter une phrase sur les trois symboles alignés, horizontalement, verticalement ou en diagonale. Le module déclare ne pas avoir de prérequis.
- **Étiquettes d’émotion :** présenter les catégories initiales comme celles attribuées dans cette collection. Les interprétations des tests admettent déjà l’ambiguïté ; garder cette qualité. L’activité ne permet pas de connaître l’état émotionnel réel d’une personne.
- **Consigne des hypothèses :** déplacer la phrase sur « l’adaptation pédagogique du guide d’animation » vers les crédits, où cette provenance est déjà expliquée. Elle n’aide pas l’élève à agir.
- **Traçabilité :** le chapitre 2 cite précisément la leçon et ses diapositives. Le chapitre 1 renvoie principalement à la page d’accueil Experience AI. Ajouter quelques références ciblées pour les notions effectivement utilisées, dans les sources discrètes du chapitre ; ne pas parsemer les exercices de citations.

## Couverture des notions et acquis

| Notion ou compétence                       | Évaluation de l’existant                                                                                                                   | Source ou preuve principale                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| IA, système et modèle                      | Définition introductive acceptable ; préciser le lien IA/apprentissage automatique au chapitre 2                                           | [OpenClassrooms][OC], [Google][G1]                                             |
| Recommander, reconnaître, générer, estimer | Exemples distincts et concrets ; l’outil peut réunir plusieurs fonctions                                                                   | Lecture des quatre situations ; [Google][G1] pour classification et génération |
| Entrée, tâche, sortie                      | Trois chaînes cohérentes ; transcription, génération et classification ne sont pas confondues                                              | [Google][G1] et contenu local                                                  |
| Consigne et image générée                  | Résumé et présence d’une image de référence désormais annoncés ; provenance conservée                                                      | `assets/ia/README.md` et chapitre 1                                            |
| Vérifier la conformité et la réalité       | Le ballon absent n’est pas déclaré erreur puisqu’il n’était pas demandé ; une image ne prouve pas l’existence du lieu                      | Lecture des questions corrigées                                                |
| Résultat convaincant mais incorrect        | Invitation fictive explicitement signalée, comparaison samedi/dimanche concrète                                                            | [OpenAI][O2] et exemple local                                                  |
| Langage sur les capacités                  | Les formulations privilégient tâche et résultat plutôt que volonté ou intention                                                            | [Raspberry Pi Foundation][R2]                                                  |
| Instructions et conditions                 | Ordre des règles conforme à la fiche ; plusieurs choix autorisés sont acceptés                                                             | Fiche locale « La feuille de papier intelligente »                             |
| Rejouer et apprendre                       | Le texte dit correctement que ce programme ne possède pas de mécanisme d’ajustement ; il ne généralise pas cette propriété à tous les jeux | Code local et [Experience AI][E2]                                              |
| Données étiquetées                         | Exemples présents ; définition et caractère attribué des catégories à expliciter                                                           | [Google][G2]                                                                   |
| Entraînement et paramètres                 | Principe exact, mécanisme trop abstrait pour l’autonomie                                                                                   | [OpenAI][O1]                                                                   |
| Utilisation et prédiction                  | Distinction entraînement/utilisation correcte ; sens de prédiction à expliciter                                                            | [Google][G1]                                                                   |
| Évaluation et généralisation               | Contre-exemples pertinents ; place de l’évaluation et statut des essais répétés à clarifier                                                | [Google][G3]                                                                   |
| Diversité des exemples                     | Les contre-exemples proposés interrogent réellement les raccourcis ; absence de pourcentage artificiel sur les émotions ambiguës           | Activité locale et [Google][G2]                                                |
| Expliquer son raisonnement                 | Réponses libres avec critères et exemple, sans prétendre les noter automatiquement                                                         | Lecture du contenu et du rendu                                                 |

## Sources et choix pédagogiques

Les sources techniques servent à établir les distinctions, les ressources pédagogiques à juger leur présentation. Une page commerciale ou un vocabulaire simplifié ne constitue pas à elle seule une validation scientifique.

- **Google for Developers** : notions de ML, apprentissage supervisé et évaluation. Référence technique ; le niveau de ses cours n’est pas à transposer tel quel aux débutants.
- **OpenAI** : paramètres et limites des réponses générées. Utilisé sur ces points précis, sans transformer la description de ChatGPT en définition de toute l’IA.
- **Experience AI / Raspberry Pi Foundation / Google DeepMind** : source la plus directement adaptée à la progression et aux activités retenues. Les documents fournis confirment les règles du morpion et les 15 messages, avec correction de la coquille « J’ai fais » en « J’ai fait ». Les hypothèses et retours CodeCraft sont bien des adaptations.
- **Raspberry Pi Foundation, recherches pédagogiques** : relier mots techniques, expérience concrète et explication générale ; éviter l’anthropomorphisme trompeur. Ces principes motivent les améliorations proposées, sans prouver à eux seuls leur efficacité dans notre interface.
- **OpenClassrooms, Objectif IA** : progression grand public depuis les usages vers les mécanismes et les sous-domaines. Ce rapprochement soutient l’ordre général de nos chapitres, sans imposer de reprendre son programme.
- **Google Teachable Machine** : le parcours public collecte/entraînement/test constitue une piste concrète pour le chapitre suivant. Aucun essai de cette application n’a été réalisé pendant cette revue ; ce n’est pas une validation de son intégration future.
- **Coddy.Tech** : la présentation publique consultée met en avant exercices interactifs et retours immédiats. Elle n’apporte pas ici une documentation détaillée suffisante sur les notions IA examinées ; elle n’est donc pas utilisée pour arbitrer leur exactitude.

## Suite recommandée

Corriger les quatre points P2 et les ajustements courts dans un lot ciblé, en gardant les deux chapitres et leurs activités. Préparer ensuite le chapitre 3 autour d’un véritable classificateur : exemples, entraînement, essais distincts et discussion des erreurs. Il n’est pas nécessaire d’ajouter maintenant réseaux de neurones, formules, pourcentages ou nouveau dispositif professeur. L’objectif est de rendre compréhensible ce qui existe déjà.

La revue pédagogique ne modifie pas le statut de prototype local déjà documenté dans `docs/ia-experience.md`.

[G1]: https://developers.google.com/machine-learning/intro-to-ml/what-is-ml
[G2]: https://developers.google.com/machine-learning/intro-to-ml/supervised
[G3]: https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets
[O1]: https://openai.com/policies/how-chatgpt-and-our-foundation-models-are-developed/
[O2]: https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth
[E2]: https://experience-ai.org/fr-CA/units/understanding-ai-11-14/lessons/13
[R1]: https://static.raspberrypi.org/files/curriculum/quickreads/6-Pedagogy_Summary_Semantic_Waves_2025_en-gb.pdf
[R2]: https://static.raspberrypi.org/files/curriculum/quickreads/22-Pedagogy_Summary_Anthropomorphism_2025.pdf
[OC]: https://openclassrooms.com/fr/courses/6417031-objectif-ia-initiez-vous-a-l-intelligence-artificielle

Autres ressources consultées : [Teachable Machine](https://teachablemachine.withgoogle.com/), [présentation officielle Google](https://blog.google/innovation-and-ai/products/teachable-machine/), [Coddy.Tech](https://coddy.tech/).
