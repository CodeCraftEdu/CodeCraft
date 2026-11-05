# Comprendre l’IA par l’expérience

Le parcours comprend quatre chapitres. **Que fait un système d’IA ?** ouvre le parcours, suivi de **Des règles aux données**, **Classer et vérifier une prédiction**, puis **Entraîner un modèle et examiner ses erreurs**.

Entrée locale : `http://localhost:8000/#module/ia-decouvrir?parcours=ia-experience`. Le lien vers `ia-regles-donnees` reste valable et constitue la suite du premier chapitre.

## Responsabilités

La revue transversale du 29 octobre 2026 a été appliquée : vocabulaire expliqué au fil de l’activité, exemples déjà classés situés dans l’apprentissage supervisé, évaluation ajoutée entre entraînement et utilisation. Les émojis demandent une prévision avant le premier résultat ; elle est conservée lors de la reprise. Un encart repliable compare la règle à deux exemples initiaux. Les essais suivants annoncent la réutilisation des mêmes messages. Les sources techniques du chapitre 1 sont ciblées.

Le troisième chapitre est décrit dans [son cadrage](cadrage-ia-classification.md). Il utilise Quick, Draw! et la galerie pour observer un classificateur déjà entraîné. Les chiffres et l’illustration de l’exercice sur les scores sont originaux et explicitement construits pour l’activité. Le chapitre 4 réalise la manipulation dans Teachable Machine avec le [kit corrigé et sa recette](recette-ia-entrainement.md). Le [cadrage](cadrage-ia-entrainement.md) conserve les choix pédagogiques et les limites.

- `content/modules/ia/ia-classification.json` : les quatre étapes et leurs sources. Le composant `ai-discovery.mjs` est réutilisé avec une clé distincte `codecraft.ai.classification.v1` ; reprise et reset ne touchent pas les deux autres chapitres.
- `assets/ia/classification-tasse.svg` : dessin pédagogique original, sans sortie inventée attribuée à un outil Google. Le tableau contient quatre catégories correctes sur cinq essais construits.
- Recette externe du 29 octobre : jeu français accessible, consigne de six dessins de vingt secondes et entrée dans la zone de dessin vérifiées. Galerie et ouverture d’une catégorie vérifiées. Aucune série complète dessinée, aucun score du jeu relevé. Le dessin peut être remplacé par l’observation ; aucune maîtrise motrice chronométrée n’est évaluée.

- `content/modules/ia/ia-regles-donnees.json` : textes, règles visibles, corpus, hypothèses, retours, questions et guide professeur.
- `content/modules/ia/ia-decouvrir.json` : usages, chaînes entrée/sortie, examen d’une image et bilan. Les activités et corrections sont originales ; elles reprennent les objectifs des pages 2 à 6 du guide, sans reproduire les diapositives.
- `src/student/ai-discovery.mjs` : interactions, validation et reprise du premier chapitre, sous la clé `codecraft.ai.decouverte.v1`. Les choix sont modifiables, les réponses libres utilisent des critères et un exemple ; aucune évaluation automatique de leur justesse.
- `styles/components/ai-discovery.css`, `tests/ai-discovery.test.cjs`, `tests/ai-discovery-scenario.cjs` : rendu et contrôles du premier chapitre. Le scénario Chrome est inclus dans `ai-experience-browser`.
- `assets/ia/scene-fantastique.webp` et son `README.md` : image générée pour CodeCraft, prompt complet de production, demande résumée pour l’élève et provenance. La compression WebP conserve le cadrage et le contenu du résultat ; le PNG d’origine reste dans les images générées de Codex.
- `src/student/ai-rules.mjs` : stratégie du morpion, interprétation des hypothèses, validation des sauvegardes.
- `src/student/ai-experience.mjs` : interactions et navigation des quatre étapes.
- `src/student/ai-support.mjs` : crédits repliables après « À retenir ». Les repères d’accompagnement sont réservés au champ `teacherGuide` du module, sans accès supplémentaire dans la page élève. Les consignes du morpion sont rendues uniquement dans leur onglet.
- `styles/components/ai-experience.css` : palette et rendu du chapitre ; mêmes composants de navigation et boutons que les autres cours.
- `tests/ai-experience.test.cjs` et `tests/ai-experience-browser.cjs` : règles, interaction, clavier et reprise.

La progression utilise seulement la clé locale `codecraft.ai.regles-donnees.v1`. Elle conserve partie, mode de prévision, étape, réponses vérifiées, ordre des cartes, hypothèse fixée, messages révélés, choix d’exemples et réponse libre. La remise à zéro demande une confirmation et ne touche aucune autre clé. Aucun compte, service externe, appel API ou mécanisme d’entraînement logiciel n’est utilisé. L’activité des émojis fait choisir et tester une règle explicite ; elle ne prétend pas entraîner un modèle.

## Chapitre 4 : entraîner et comparer

- `content/modules/ia/ia-entrainement.json` : quatre étapes, consignes complètes, photos à choisir, sources et critères de bilan.
- `src/student/ai-training.mjs` : relevé manuel avant/après, essais finaux séparés, choix du complément et textes libres. Aucun accès automatique au projet externe ni entraînement simulé.
- `resources/ia/tasses-cuilleres.zip` : vingt photographies et leurs crédits ; `docs/sources-kit-ia.json` conserve la provenance et les empreintes.
- `tests/ai-training.test.cjs` et le scénario ajouté à `tests/ai-experience-browser.cjs` : séparation des lots, comptage des seuls essais renseignés, reprise, clavier, reset et petits écrans.

La clé `codecraft.ai.entrainement.v1` conserve seulement l’étape, les catégories reportées, les photos cochées et les deux réponses libres. La remise à zéro laisse les autres chapitres et le projet Teachable Machine intacts. Les critères de bilan sont des repères d’autoévaluation, sans correction automatique ni attribution de compétence acquise.

Les quatre mêmes photos comparent les versions ; quatre nouvelles photos sont réservées pour la seconde version. Les résultats sont saisis par l’élève et ne sont jamais préremplis avec les scores de la recette. Une réussite initiale complète permet de poursuivre en explorant une situation peu représentée. Les manipulations dans l’outil et la reprise ont été vérifiées sur le pilote ; les nouveaux fichiers et le déroulé complet avec un élève n’ont pas fait l’objet d’une nouvelle mesure de performances ou de durée.

## Sources et droits

Sources consultées :

- Experience AI, module 1 leçon 2, fichier enseignant **La feuille de papier intelligente**, plan de leçon et diapositives 23 et 24 fournis par l’utilisateur : <https://experience-ai.org/fr-CA/units/understanding-ai-11-14/lessons/13>.
- **Comprendre l’IA, Guide d’animation, 3 leçons**, pages 7 à 12, fourni par l’utilisateur. Il inspire la médiation et l’exemple de raccourci « Nous », « Ils », puis « et ». Cet exemple est identifié comme une adaptation pédagogique, pas une solution officielle unique.
- Google for Developers, **Qu’est-ce que le machine learning ?** : <https://developers.google.com/machine-learning/intro-to-ml/what-is-ml?hl=fr>. Le texte de cette page est sous CC BY 4.0 ; les explications du chapitre sont rédigées pour CodeCraft.

Experience AI est développé conjointement par Raspberry Pi Foundation et Google DeepMind. La fiche de morpion crédite Peter McOwan et Paul Curzon, Queen Mary University of London : <https://teachinglondoncomputing.org/resources/inspiring-unplugged-classroom-activities/the-intelligent-piece-of-paper-activity/>.

Le 5 novembre 2026, CodeCraft a remplacé les messages des supports Experience AI par une collection originale de quinze exemples et quatre essais. Les hypothèses et les retours s’appuient sur cette collection. Les crédits renvoient aux supports d’origine, diffusés sous [licence CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/). Les instructions du morpion sont rédigées pour CodeCraft à partir de l’algorithme de jeu cité plus haut.

## Vérifications et limites

Le morpion suit exactement la priorité de la fiche : coin au premier tour, coin opposé ou libre au deuxième, victoire puis blocage puis coin aux troisième et quatrième, dernière case au cinquième. Le test explore toutes les positions accessibles en autorisant tous les coins et toutes les complétions de ligne valides. Aucune promesse d’invincibilité n’est affichée.

Les quinze messages d’exemples restent séparés des quatre tests jusqu’à la validation de l’hypothèse. La règle reste fixée pendant chaque essai. Un nouvel essai réutilise les mêmes messages ; ce n’est plus un ensemble de test inconnu. Les interprétations sont présentées comme plausibles ou ambiguës ; aucune précision agrégée ni score de confiance n’est fabriqué.

Les réponses libres utilisent des critères et une réponse possible, sans correction automatique. Les étapes consultées ne sont pas présentées comme des compétences acquises. La reprise dépend du même navigateur et de la même origine ; un stockage indisponible ne bloque pas l’activité.

Le contrôle complet `npm run check` a réussi après l’ajout du premier chapitre : formatage, lint, 252 tests Node et les huit suites navigateur. Le contrôle IA utilise des touches natives et couvre 1280, 390 et 320 pixels. Les captures de la découverte ont été examinées : usages sur ordinateur, image et bilan sur mobile. Les contrôles du morpion, des messages, de la reprise et des remises à zéro restent inclus. Journal final : `browser-artifacts/ai-discovery-check.log` ; rapport : `browser-artifacts/run-Ob8Ls4/index.html`.

L’ajout du cinquième domaine actualise aussi les attentes de catalogue des tests existants. Le contrôle du lien Minecraft vérifie désormais la destination, le focus et la visibilité du titre dans le haut de l’écran plutôt qu’un décalage fixe à trois pixels près ; le comportement de navigation reste inchangé.

## Vérification de l’intégration du chapitre 4

Formatage, lint et 257 tests Node réussis. Les huit suites navigateur ont réussi sur le résultat final, avec une relance isolée de `teacher-browser` : son assertion de retour au défilement à moins de trois pixels a échoué lors du passage global, puis réussi sans changement de code. Journal global : `browser-artifacts/ia-entrainement-check-final.log`, rapport `browser-artifacts/run-JXCpwz/index.html` ; relance professeur : `browser-artifacts/ia-training-teacher-retry.log`.

Les captures du relevé à 1280 et 320 pixels ont été examinées. Sur mobile, chaque photo forme une carte dont les champs Avant/Après gardent leurs libellés et catégories lisibles. La recette IA contrôle aussi 390 pixels, les commandes au clavier, la saisie, le rechargement et la remise à zéro. Les vérifications de l’interface CodeCraft ne remplacent pas une séance autonome complète dans Teachable Machine avec les choix de photos d’un élève.

## Corrections après revue du chapitre 4

Le rappel placé avant la consigne de réentraînement apparaît si le relevé initial est incomplet et renvoie directement à l’étape Entraîner. Il se masque lorsque les quatre réponses sont renseignées et réapparaît si une réponse est effacée. La navigation reste libre.

Le bilan montre les trois comptages séparés (avant, après sur les mêmes photos, puis nouveaux essais), les photos cochées et la justification saisie. Un lien permet de revoir les essais. Le cas des accents possède une réponse possible repliée qui relie diversité des utilisateurs, enregistrements réservés et comparaison des erreurs entre groupes.

Vérifications : formatage, lint, catalogue et 258 tests Node réussis. Les suites catalogue et élève sont passées lors du contrôle global ; un ancien sélecteur de l’encart d’autoévaluation a ensuite été corrigé dans le test IA. La suite IA et les cinq autres suites navigateur sont passées lors de la reprise, sans autre changement applicatif. Journaux : `browser-artifacts/ia-training-corrections-check.log` et `browser-artifacts/ia-training-corrections-browser.log`. Rapports : `browser-artifacts/run-nFJSsu/index.html` et `browser-artifacts/run-LCVVdU/index.html`. Le récapitulatif a été examiné sur la capture à 320 pixels ; le scénario couvre aussi 1280 pixels et le fonctionnement au clavier.

## Point de reprise IA, changement de chantier le 29 octobre 2026

Le 29 octobre, le travail est passé à Scratch après intégration, revue et correction des quatre chapitres IA. La publication du parcours complet a repris le 5 novembre avec les nouveaux messages du chapitre 2.

À la reprise, formaliser d’abord une roadmap IA globale : les cadrages existants couvrent les quatre chapitres, mais aucune progression détaillée au-delà n’est validée. L’objectif initial de création d’un chatbot reste à relier à ce socle. La suite évoquée (comprendre la génération et vérifier les réponses, formuler et améliorer une demande, puis construire et tester un chatbot spécialisé) est une proposition, pas une roadmap approuvée. Modèle conseillé : Astra High pour ce cadrage avant tout nouveau cours.

Reste également à éprouver le déroulé autonome complet du chapitre 4 dans Teachable Machine avec le kit actuel de vingt photos et à mesurer sa durée. La recette externe du pilote et les tests d’interface CodeCraft ne remplacent pas cet essai.
