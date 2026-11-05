# Cadrage pédagogique : Classer et vérifier une prédiction

Cadrage du 29 octobre 2026, validé pour réalisation par l’utilisateur. Chapitre intégré sous `ia-classification` ; état courant et recette externe décrits dans [ia-experience.md](ia-experience.md). Les intentions pédagogiques ci-dessous conservent le déroulé du cadrage.

## Place et périmètre

Troisième chapitre de « Comprendre l’IA par l’expérience », après la découverte des usages et « Des règles aux données ». Titre élève proposé : **Classer et vérifier une prédiction**.

Le guide fourni, pages 13 à 18, et la leçon « Classification » du module « Understanding AI » d’Experience AI reposent sur Quick, Draw!, les données étiquetées et les scores. L’élève utilise un véritable classificateur déjà entraîné. Entraîner son propre modèle avec Teachable Machine sera une proposition pour la suite, à valider séparément : l’ajouter ici augmenterait le périmètre du guide. Attention aux versions des ressources : « Bias in, bias out », également numérotée leçon 3 dans « Foundations of AI », est une autre progression. [Source officielle correspondant au guide](https://experience-ai.org/en/units/understanding-ai-11-14/lessons/14).

Durée estimée pour CodeCraft : 30 à 40 minutes, à ajuster après essai avec des élèves. Pendant le stage, ces activités servent de support aux séquences équivalentes du guide ; elles ne s’ajoutent pas à leur durée.

## Acquis visés

À l’issue du chapitre, l’élève devrait pouvoir :

- identifier le dessin en entrée et la catégorie proposée en sortie ;
- distinguer une classe possible de l’étiquette associée à un exemple ;
- expliquer pourquoi plusieurs exemples pertinents et variés sont utiles ;
- distinguer un score sur une prédiction d’un résultat mesuré sur plusieurs essais ;
- proposer un cas concret permettant de vérifier un classificateur.

Prérequis : savoir distinguer entraînement et utilisation, et comprendre le rôle d’une étiquette, vus au chapitre 2. Aucun prérequis en programmation. Une réponse correcte à un QCM ne vaut pas à elle seule validation de tous les acquis.

## Déroulé proposé

### Onglet « Essayer » : observer une classification, 7 à 9 minutes

Une courte introduction réactive entrée et sortie, puis un lien ouvre [Quick, Draw!](https://quickdraw.withgoogle.com/). Une série suffit. La consigne demande de retenir un dessin et une proposition du système ; aucune catégorie imposée, puisque les demandes du jeu peuvent varier.

Retour sur CodeCraft : nommer ce que le système recevait et ce qu’il proposait. Observer éventuellement un changement de proposition lorsque le dessin se complète. Une question vérifie que modifier l’entrée ne prouve pas un nouvel entraînement pendant la partie. On n’impose ni erreur du modèle ni résultat déterminé à l’avance.

Formulation proposée : « Le modèle reçoit les traits de ton dessin et propose une catégorie. Quand tu ajoutes un trait, son entrée change : il peut proposer une autre catégorie. »

Le jeu invite à contribuer des dessins à une collection publique : prévoir une indication courte avant ouverture pour dessiner seulement l’objet demandé, sans nom ni information personnelle. Pour une personne gênée par le dessin chronométré, proposer l’observation d’un exemple préparé et de la galerie ; la vitesse de dessin n’est pas un objectif pédagogique.

### Onglet « Les exemples » : relier classe, étiquette et diversité, 7 à 9 minutes

Ouvrir la [galerie de données](https://quickdraw.withgoogle.com/data), choisir une catégorie et comparer quelques dessins : un détail commun, deux manières différentes de représenter le même objet. Revenir à une question courte sur CodeCraft, puis à une reformulation.

Formulations proposées : « Une classe est une catégorie possible, comme “vélo”. L’étiquette associe cette catégorie à un exemple précis. Pendant un entraînement supervisé, les exemples et leurs étiquettes servent à ajuster le modèle. »

La catégorie demandée au joueur contribue à l’étiquetage ; elle ne garantit pas que son dessin représente correctement l’objet. La documentation de la collection distingue explicitement catégorie demandée et reconnaissance par le jeu. Elle indique aussi que la galerie présente des dessins reconnus : ne pas utiliser cette sélection pour calculer les performances globales du système, ni imposer d’y trouver un échec. Aucun engagement sur l’utilisation de chaque dessin dans le modèle actuellement servi. [Documentation Google de la collection](https://github.com/googlecreativelab/quickdraw-dataset).

### Onglet « Lire un score » : interpréter deux types de nombres, 8 à 10 minutes

Courte activité originale CodeCraft, identifiée « Exemple construit pour l’exercice ». Elle présente un dessin simple, la catégorie proposée et un score. L’élève examine la réponse avant d’ouvrir l’explication. Le cas doit rendre visible qu’un score élevé peut accompagner une catégorie erronée.

Puis un tableau de cinq résultats, avec cinq réponses de référence non ambiguës, permet de compter quatre bonnes réponses. Retour : « 4 bonnes réponses sur ces 5 essais, soit 80 %. Cela décrit ces essais ; il faut d’autres tests pour évaluer le système dans d’autres situations. » Le comptage suffit si les pourcentages sont encore difficiles.

Formulation proposée : « Ce score accompagne une prédiction. Il ne garantit pas qu’elle soit correcte. Le taux de bonnes réponses, lui, se mesure en comparant plusieurs résultats aux réponses attendues. »

Pas de fausse sortie attribuée à Quick, Draw!, ni de score à relever dans son interface sans en avoir confirmé l’affichage. Cette activité sert à interpréter une mesure, et n’est pas présentée comme un classificateur exécuté sur le site.

### Onglet « Choisir des tests » : transférer, 8 à 12 minutes

Cas proposé : un outil classe des dessins en « vélo », « bateau » et « tasse ». Parmi quelques situations, l’élève choisit des essais utiles : nouvelle manière de dessiner un vélo, tasse sans anse, dessin incomplet, objet extérieur aux catégories. Chaque choix reçoit une raison ; aucune promesse sur la réponse réelle d’un modèle non exécuté.

Le bilan demande une explication courte : « Quelle entrée testerais-tu, quelle réponse attendrais-tu, et qu’apprendrais-tu si le modèle se trompait ? » Critères et exemple accessibles pour l’autoévaluation ; réponse libre non notée automatiquement. Le chapitre se termine par trois idées à retenir, sans nouveau dossier ou document obligatoire.

## Précision technique et traduction

| Terme                | Choix pour les élèves                                                       | Limite à préserver                                                                     |
| -------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Classification       | Proposer une catégorie parmi celles prévues pour la tâche étudiée           | Ici, classification à une catégorie ; ne pas généraliser à tous les systèmes possibles |
| Class / label        | Classe : catégorie disponible ; étiquette : catégorie associée à un exemple | L’étiquette fournie et la catégorie prédite peuvent différer                           |
| Training / inference | Entraînement / utilisation du modèle                                        | Voir une nouvelle prédiction n’atteste pas un réentraînement                           |
| Confidence score     | Score de confiance associé à une prédiction                                 | Ni sentiment du système, ni garantie de justesse                                       |
| Accuracy             | Taux de bonnes réponses sur les essais considérés                           | Éviter « précision » ici, qui désigne aussi une autre métrique en ML                   |
| Generalisation       | Réussir sur d’autres exemples                                               | Quelques essais ne prouvent pas une réussite générale                                  |

La définition du supervisé et la distinction entraînement/évaluation/utilisation s’appuient sur [Google for Developers](https://developers.google.com/machine-learning/intro-to-ml/supervised). La réserve sur l’interprétation probabiliste d’un score vient des travaux sur la calibration : ne pas traduire automatiquement 92 % par « 92 chances sur 100 d’avoir raison ». Le terme calibration reste dans les notes de conception. [Guo et al., ICML 2017](https://proceedings.mlr.press/v70/guo17a).

## Principes pédagogiques et sources croisées

La progression part d’une observation, donne les mots pour la décrire, puis réutilise ces mots dans un nouveau cas. Ce choix suit les recommandations sur les liens entre expérience concrète et langage technique de [Raspberry Pi Foundation, Semantic Waves](https://static.raspberrypi.org/files/curriculum/quickreads/6-Pedagogy_Summary_Semantic_Waves_2025_en-gb.pdf). Les formulations françaises sont des adaptations originales ; elles ne sont pas présentées comme des traductions officielles.

Les questions portent sur une décision ou une explication, puis donnent un retour lié au raisonnement. Les activités évitent de faire conclure « l’IA est mauvaise » à partir d’un échec ou « elle comprend tout » à partir d’une réussite. Les exemples doivent pouvoir se discuter à l’oral comme se suivre en autonomie.

[OpenAI, Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices) et [Anthropic, Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) confortent le choix de tests liés à une tâche et de critères observables. Ces documents concernent des applications de modèles de langage ; ils servent ici pour le principe d’évaluation, pas pour expliquer l’architecture de Quick, Draw! ni pour revendiquer une efficacité pédagogique prouvée.

Google et Experience AI sont les références directement pertinentes pour la classification de dessins. OpenAI et Anthropic ne remplacent pas ces sources spécialisées. Les articles de recherche éclairent les limites des scores ; ils ne deviennent pas des lectures obligatoires pour les élèves.

## Intégration et vérifications avant réalisation

Quatre onglets compacts, liens externes au point d’usage, retours près des réponses et sources discrètes en bas. CodeCraft porte les explications, les questions et la reprise locale ; le dessin et l’exploration se font dans les outils Google. Aucun compte CodeCraft, API payante, import de résultat automatique ou publication de modèle prévu.

Avant rédaction finale : faire une recette ciblée de Quick, Draw! et de sa galerie sur ordinateur et petit écran, vérifier langue, accès au bilan, navigation clavier et solution d’observation pour les difficultés motrices. Les pages officielles et la documentation ont été consultées pendant le cadrage ; une partie complète dans le navigateur n’a pas été effectuée. Les intitulés exacts de boutons et une éventuelle capture d’aide seront arrêtés après cette recette.

La galerie publique provient de contributions : sélectionner les exemples destinés à être incorporés dans CodeCraft et vérifier leurs conditions de réutilisation avant de les embarquer. Pour l’activité de scores, produire nos propres illustrations et données d’exercice, sans reproduire les diapositives.

## Suite proposée, distincte du présent lot

Une future activité « Entraîner et améliorer un classificateur » pourra utiliser [Teachable Machine](https://teachablemachine.withgoogle.com/) : collecte, entraînement et tests sur d’autres exemples. L’outil documente les entrées par fichiers ou caméra. Le scénario, la sauvegarde/reprise et les appareils compatibles devront être vérifiés avant de promettre son intégration. Ce prolongement n’est pas ajouté au déroulé obligatoire du stage par ce cadrage.

Modèles conseillés : Astra High pour valider le cadrage et la revue pédagogique ; Sol High pour la recette ciblée, la rédaction et l’intégration une fois le périmètre validé.
