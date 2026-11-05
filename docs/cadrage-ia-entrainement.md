# Cadrage pédagogique : Entraîner un modèle et examiner ses erreurs

Proposition du 29 octobre 2026. Cadrage initial, puis corrections après revue. Le chapitre `ia-entrainement` est maintenant intégré ; les vérifications d’interface sont décrites dans [la documentation IA](ia-experience.md). Modèle conseillé : Astra High pour le cadrage et la revue, Sol High pour la réalisation.

Préparation et corrections après revue : voir [la recette du kit](recette-ia-entrainement.md). Le kit actuel contient vingt photos, réparties dans les quatre lots ci-dessous. Les manipulations et la reprise ont été vérifiées avec la version pilote de quatorze photos ; les six photos ajoutées ont été examinées visuellement, sans nouvelle mesure dans l’outil. La réouverture locale restaure les exemples et demande un nouvel entraînement. Choisir la langue avant de commencer.

## Positionnement

Après « Classer et vérifier une prédiction », l’élève entraîne un petit classificateur, teste des exemples distincts, modifie ses données puis examine le résultat. La question centrale est : **qu’est-ce que mes exemples permettent de reconnaître, et quels cas ai-je oubliés ?**

Le PDF local « Comprendre l’IA, Guide d’animation, 3 leçons » s’arrête après la classification et annonce une suite sur les biais. Le dossier fourni contient aussi le plan officiel de la leçon 4 « Données biaisées, résultats biaisés ». Cette leçon travaille les données représentatives, la séparation entraînement/test et les biais, avec des pommes et des tomates dans **Machine Learning for Kids**. La page officielle actuelle confirme ces objectifs [E].

Teachable Machine constitue donc une adaptation CodeCraft de l’outil, avec un scénario original, et non le logiciel prescrit par cette fiche. Pendant un stage qui inclut la leçon 4, cette manipulation remplacerait la séquence d’entraînement correspondante. Elle ne doit pas s’ajouter automatiquement au programme des trois premières leçons. Les durées du guide ne suffisent pas à garantir que notre activité tient dans le même créneau.

**Public et durée :** après les trois premiers chapitres, sans programmation ; ordinateur conseillé pour la manipulation. Durée à mesurer sur le déroulé corrigé ; l’estimation initiale de 45 à 60 minutes ne constitue pas une durée validée pour ce kit compact. Le parcours autonome inclut toutes les consignes utiles dans la page ; les conseils d’animation restent dans le guide professeur.

## Acquis attendus

- Définir deux catégories et associer correctement des exemples à chacune.
- Distinguer modifier les exemples, lancer un entraînement et demander une prédiction.
- Tester des images absentes de l’entraînement et comparer la réponse à la référence.
- Proposer une modification pertinente des données à partir des erreurs ou des situations peu représentées.
- Comprendre qu’une amélioration sur quelques essais n’élimine pas toutes les erreurs ni tous les biais.

## Scénario proposé

Reconnaître des **tasses et des cuillères** sur des photos. Les deux catégories sont concrètes, familières et ne demandent pas d’analyser des personnes. Le vocabulaire et les critères seront fixes : une photo montre une ou plusieurs cuillères, ou une ou plusieurs tasses, identifiables. Une tasse peut être accompagnée de sa soucoupe ou contenir une boisson. Les photos ambiguës où ces deux catégories sont mélangées sont écartées.

Le chemin principal utilise un petit kit d’images téléchargeable depuis CodeCraft et importé dans Teachable Machine. Il évite de rendre la webcam ou la collecte personnelle obligatoires. Une capture d’objets à la webcam pourra être un prolongement facultatif, une fois le scénario principal fonctionnel.

**Kit constitué :** vingt photographies Wikimedia Commons avec sources, auteurs et licences dans l’archive et le manifeste. La sélection n’utilise pas les fichiers de l’activité officielle. Les scènes fantastiques de la DA du site n’ont pas de rôle dans cet ensemble de données.

Quatre lots courts, clairement séparés :

| Lot             | Utilisation                              | Composition actuelle                                                 |
| --------------- | ---------------------------------------- | -------------------------------------------------------------------- |
| Départ          | Premier entraînement                     | 3 photos par catégorie, toutes importées                             |
| Essais          | Comparaison avant/après                  | 2 photos par catégorie, gardées hors entraînement                    |
| Complément      | Choix d’ajouts avant second entraînement | 3 photos disponibles par catégorie ; en choisir 1 ou 2 par catégorie |
| Nouveaux essais | Vérification après modification          | 2 autres photos par catégorie, réservées à la fin                    |

Ces nombres organisent une manipulation courte ; ils ne constituent pas un minimum scientifique garantissant un bon modèle. Le petit kit permet d’observer des cas, pas de mesurer une fiabilité générale. Les essais doivent contenir de véritables photos distinctes ; des recadrages du même cliché répartis entre entraînement et test ne suffisent pas. Pour vérifier une reconnaissance de catégories plutôt que de deux objets particuliers, inclure plusieurs exemplaires physiques et réserver des exemplaires à la vérification.

La collecte limitée peut faire apparaître des erreurs ; aucune erreur précise ni amélioration n’est promise. Le modèle préentraîné sous-jacent peut déjà reconnaître certains cas. Si le premier modèle réussit, l’élève examine les conditions encore peu couvertes au lieu de fabriquer un échec.

## Quatre étapes compactes

### Préparer

Annoncer la tâche, montrer un exemple de chaque catégorie, puis ouvrir un projet images standard dans Teachable Machine. Créer les deux classes et importer seulement le lot Départ. Nommer les classes avant l’import. Demander d’identifier les conditions déjà présentes et celles peu représentées dans ces photos. Les autres lots restent disponibles mais séparés ; aucun document de réponses supplémentaire.

Une consigne expliquera brièvement pourquoi réserver des images : elles serviront à examiner le modèle sur des exemples qui n’ont pas servi à l’ajuster [G1].

### Entraîner et essayer

Lancer l’entraînement avec les réglages par défaut. Tester les quatre photos du lot Essais dans l’aperçu de l’outil. Pour chaque photo, relever la catégorie proposée dans un petit tableau CodeCraft affichant la catégorie attendue. Les réponses et le nombre de correspondances se conservent localement ; CodeCraft ne lit pas automatiquement les résultats de l’autre site.

Observer les erreurs concrètes et leur contexte. Le score est celui d’une prédiction ; le comptage porte sur ces quatre essais. Aucun seuil de réussite arbitraire ne conditionne la suite.

### Modifier et comparer

Choisir une situation à mieux représenter à partir des essais et des photos de départ. Parmi les trois photos disponibles par catégorie dans Complément, choisir une ou deux photos par catégorie et expliquer ce qu’elles ajoutent : autre orientation, plusieurs objets, type de tasse ou décor différent. Si tous les essais réussissent déjà, choisir une variation encore peu représentée ; aucune erreur n’est requise. Importer les photos choisies dans les bonnes classes et **relancer l’entraînement**. Refaire les mêmes quatre essais pour comparer les deux versions sur les mêmes cas. Ne pas importer ces essais dans les classes d’entraînement.

Le tableau montre les résultats avant/après, y compris si le nombre de bonnes réponses stagne ou baisse. Il aide à décrire ce qui a changé ; il ne prouve pas à lui seul la cause interne des erreurs.

Après cette modification, tester les quatre photos du lot Nouveaux essais. Présenter séparément son résultat : les quatre essais déjà consultés servent désormais de comparaison pendant le développement, pas de preuve indépendante de généralisation [G1]. Deux entraînements suffisent au chemin principal.

### Expliquer les limites

Réponse courte : « Quel cas as-tu testé, qu’as-tu changé dans les exemples et qu’as-tu observé après le nouvel entraînement ? » Fournir des critères d’autoévaluation et une réponse possible, sans correction automatique du texte.

Introduire le biais par une situation concrète : un ensemble qui représente surtout un seul angle ou un seul fond peut mal couvrir l’usage prévu. Une erreur isolée ne suffit pas à établir un biais systématique. Ajouter un bref cas fictif de commandes vocales où certains accents sont peu représentés : demander quelles voix tester et compléter. Relier les choix humains de collecte à des différences de fonctionnement possibles entre utilisateurs.

Expliquer qu’un biais dans les données peut refléter des inégalités ou des habitudes sociales ; « biais de données » et « biais sociétal » ne sont pas deux boîtes toujours exclusives. Plus de données ou des effectifs égaux ne garantissent ni représentativité ni équité [G2]. Ce passage introduit la dimension sociale de la leçon officielle ; il n’en constitue pas une étude complète.

## Formulations techniques à préserver

**Entraînement :** « L’outil ajuste des valeurs numériques à partir des exemples et de leurs catégories. Ajouter des photos prépare les données ; relancer l’entraînement ajuste le modèle. »

**Modèle préentraîné :** « L’outil s’appuie sur un modèle déjà entraîné et adapte une partie du système à tes catégories. » La FAQ décrit un apprentissage par transfert ; ne pas affirmer que l’élève crée toute la reconnaissance d’images à partir de zéro [T2].

**Test :** « Présente une nouvelle photo, puis compare la catégorie proposée à celle attendue. » Une prédiction supplémentaire ne réentraîne pas automatiquement le modèle.

**Conclusion :** préférer « Cette version réussit davantage de nos essais » à « Le modèle est maintenant fiable ». Ne pas diagnostiquer « il regarde seulement le fond » à partir d’une seule erreur.

## Outil, confidentialité et reprise

La documentation officielle décrit l’utilisation de fichiers ou d’une webcam et un entraînement dans le navigateur [T1, T2]. La FAQ précise que les exemples restent sur l’appareil sauf sauvegarde choisie vers Drive. Cela ne signifie pas que tout le site fonctionne hors connexion ou qu’aucune communication réseau n’existe.

Chemin principal proposé : photos d’objets, sauvegarde locale du projet ; aucun compte Drive ou partage de modèle requis par le scénario. L’interface observée propose « Download project as file » et « Open project from file ». Le téléchargement du **projet** doit être distingué de l’export du **modèle** pour utilisation dans une autre application. CodeCraft conserve les réponses ; il ne sauvegarde pas le projet de l’outil externe.

La FAQ indique qu’une fermeture sans sauvegarde fait perdre le travail. Prévoir une courte consigne de sauvegarde avant fermeture. La restauration des exemples et des catégories et le nouvel entraînement après réouverture ont été vérifiés sur le pilote. Une sauvegarde du projet ne fournit pas un modèle immédiatement prêt à prédire.

## Vérifications réalisées et prochain lot

Le 29 octobre 2026 : lecture du plan de leçon 4 fourni, vérification de sa page officielle, consultation de la FAQ et recette réelle avec le pilote : import, deux entraînements, comparaison, nouveaux essais, sauvegarde et restauration suivie d’un nouvel entraînement. Les libellés français et le choix d’un fichier dans l’aperçu ont été constatés. Voir la recette pour les résultats et limites.

Après la revue, ajout de six photos distinctes, vérification visuelle de leur catégorie et mise à jour des consignes, crédits, manifeste et archive. Les résultats du pilote restent historiques : ils ne décrivent pas les résultats des nouveaux essais ni ceux des compléments choisis par un élève. L’effet de ces choix n’est pas annoncé à l’avance.

L’intégration élève est réalisée : les quatre essais figurent dans un tableau avant/après, puis les quatre nouveaux essais séparément. Le choix des compléments se fait dans les fichiers du kit ; CodeCraft conserve le relevé et la justification. Prévoir une recette du parcours intégré avec le kit actuel, y compris un chemin où les premières réponses sont toutes correctes. La capture webcam, les autres navigateurs et l’entraînement sur mobile restent non vérifiés. La durée autonome reste à mesurer.

Intégration réalisée : un quatrième module `ia-entrainement` dans `ia-experience`, quatre onglets, un tableau avant/après compact et une réponse libre finale. Les modèles sont entraînés dans l’outil externe. Prévoir seulement les interactions CodeCraft nécessaires au relevé et à la reprise, sans ajouter d’API d’IA, de compte ou de simulation d’entraînement.

## Sources retenues

- [E : Experience AI, Understanding AI, leçon 4](https://experience-ai.org/en/units/understanding-ai-11-14/lessons/15), Raspberry Pi Foundation et Google DeepMind : objectifs de progression. Plan local `M1-L4-LP_fr_Plan de leçon - Données biaisées, résultats biaisés.docx` pour le déroulé et l’outil officiel.
- [T1 : Teachable Machine](https://teachablemachine.withgoogle.com/) : collecte, entraînement, export, fichiers et caméra.
- [T2 : FAQ officielle Teachable Machine](https://teachablemachine.withgoogle.com/faq), sections Saving & Exporting et Diving Deeper : exemples, sauvegarde, apprentissage par transfert. Texte des panneaux consulté dans le navigateur.
- [G1 : Google, Dividing the original dataset](https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets) : exemples réservés et réutilisation des tests pendant les ajustements.
- [G2 : Google, Types of bias](https://developers.google.com/machine-learning/crash-course/fairness/types-of-bias) : représentation et biais issus des données et des pratiques sociales.

Les sources déjà utilisées sur les classes, étiquettes et scores restent applicables. Les fournisseurs de modèles de langage ne sont pas nécessaires pour documenter les fonctions de cet outil. Le scénario, les lots et les formulations proposés ici sont des choix CodeCraft, distincts des activités officielles.
