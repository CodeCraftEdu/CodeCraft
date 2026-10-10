# Python - lot 7 : fonctions, résultats et quiz

## Périmètre et priorité

Terminer les modules 18 à 20 du socle Python avant de reprendre Web Avancés. Thonny, thème bleu et modèle de leçon existants. Aucun package, calendrier, validation automatique ou commit. Références et exemples originaux ; pas de dictionnaire, tuple, zip, fichier de données, récursion, global, exception ou argument par défaut.

## Revue du lot 6 réalisé

Listes et texte gardent une progression cohérente : positions/longueur puis parcours, ajout puis nouveaux bilans ; original conservé puis strip/lower séparés, comparaison et changement de règle. Les cas vides sont testés sans index et les diagnostics IndexError sont distincts des créations autonomes. Les fichiers guidés sont réutilisés ; les variantes sont conservées. Aucun besoin de nouvelle notion ni de refonte identifié. Les guides et tests existants distinguent copie, compréhension et transfert.

Cette relecture ne vaut pas recette Thonny ni observation avec élèves. Ces deux validations restent à faire.

## 18 - Définir et appeler une fonction (`python-fonctions`)

Nouvelle compétence `python.functions` : définir, appeler et réutiliser une fonction avec des paramètres explicites. Prérequis : fichiers, print, variables ; pas besoin de listes ou de boucle pour démarrer.

Dans fonctions.py, définition sans paramètre puis appel séparé : expliquer def, nom, parenthèses, deux-points, indentation et retour à l'appelant. Une définition seule n'affiche rien ; deux appels exécutent deux fois le corps. Définition avant appels lors de l'exécution entière du fichier, pas dépendance à la mémoire de la console.

Faire évoluer vers une fonction à un paramètre : le paramètre reçoit la valeur donnée lors de l'appel ; nom du paramètre et valeur fournie ne sont pas la même chose. Appeler avec deux valeurs, puis introduire deux paramètres positionnels avec ordre visible et deux appels dont les valeurs sont inversées. Pas de return dans ce module.

Guidé : prévoir sorties et ordre, changer une valeur d'appel sans changer la définition, reconnaître appel manquant et nombre d'arguments incorrect. Autonomie : fonction personnelle réutilisée pour trois valeurs puis modification d'un message dans le corps. Bonus : parcours d'une liste de valeurs, avec prérequis for/listes explicites.

Critères : définition/appel ; bloc et ordre ; paramètres/arguments ; modification et transfert sans recopier le corps.

## 19 - Renvoyer un résultat (`python-retour`)

Nouvelle compétence `python.return` : renvoyer et réutiliser un résultat, distinguer affichage et valeur renvoyée, comprendre les noms locaux. Prérequis : fonctions, variables, nombres, conditions.

Dans resultat.py, modèle purement numérique avec un argument et return. Conserver le résultat hors de la fonction, l'afficher puis le réutiliser dans un calcul. Expliquer l'arrêt du seul appel avec return, pas de tout le fichier. Comparer une fonction qui print à celle qui return : None est seulement expliqué comme absence de résultat utile renvoyé, sans nouveau cours sur ses usages.

Montrer un nom local et un nom extérieur identiques : ils ne sont pas la même variable. Un paramètre ou une variable créée dans le corps est local à l'appel ; la fonction peut techniquement lire certains noms extérieurs, mais ce lot utilise des paramètres et ne demande ni global ni mutation de liste. Diagnostic NameError intentionnel dans un fichier distinct, puis utiliser le résultat conservé pour corriger.

Ajouter une fonction à deux paramètres avec if/else retournant 1 ou 0 pour une comparaison fixe. Les deux retours sont explicites ; ne pas laisser None sur une issue. Autonomie : calcul personnel réutilisé pour deux entrées, deux résultats conservés, test du cas zéro et transfert d'une constante. Bonus : préparer du texte avec strip/lower et return, sans saisie dans la fonction.

Critères : return/print ; conservation et réutilisation ; bloc local ; deux issues testées.

## 20 - Mon quiz personnalisable (`python-quiz`)

Projet de synthèse ciblé, pas examen de toutes les notions du parcours. Trois questions textuelles personnelles, une fonction réutilisable à deux paramètres (question, réponse attendue), une saisie par appel et un résultat 1/0. Réponse attendue simple en minuscules, sans espace aux bords ; strip/lower sur la saisie, sans tolérance aux fautes, espaces internes ou accents différents.

Avant tout score, faire fonctionner une question et tester correcte, incorrecte et vide. Conserver une fonction qui renvoie toujours un nombre. Puis trois appels explicites avec des questions différentes et cumul dans une variable initialisée une seule fois hors de la fonction. Pas de global ni modification cachée du score dans la fonction.

Ce socle ne demande pas de listes parallèles ni de liste de listes non enseignée. Le quiz peut être réalisé sans boucle ; l'élève réinvestit score, conditions, texte, paramètres et return. Listes, hasard et while ne sont pas validés indirectement. Une quatrième question est le transfert facultatif après le socle, sans recopier le corps ni changer le barème des trois premières.

Pas de programme complet publié : cahier des charges, phases, indices gradués et reprises vers fonctions/return/texte/score. Le code d'une unique fonction de contrôle reste réservé aux tests et au professeur, pas ajouté comme solution complète à la consigne élève.

Recette : trois justes, trois fausses, mélange, vide, casse et espaces aux bords. Modifier une question/réponse : vérifier nouvelle réponse, ancienne, question affichée et message de correction éventuel. Relancer : score recréé à zéro, aucune donnée conservée. Afficher points sur 3 ; pas de pourcentage ou victoire seuil supplémentaire.

Critères : questions et règle annoncée ; fonction à deux paramètres avec 1/0 sur les deux issues ; score hors fonction ; nouveaux tests et explication des aides.

## Revue préalable et ajustements retenus

- Séparer la fonction d'affichage (18), le résultat calculé sans saisie (19) et le projet interactif (20).
- Introduire deux paramètres positionnels au module 18, pas seulement au quiz.
- Montrer None pour éviter print/return interchangeables ; pas d'affectation d'une fonction d'affichage présentée comme un résultat valide.
- Tous les chemins de la fonction de comparaison renvoient une valeur ; garder noms locaux distincts du score extérieur.
- Ne pas ajouter une structure de données nouvelle pour assembler les questions. Les trois appels explicites sont un choix de périmètre, pas une recommandation de duplication du corps.
- Garder le retrait des aides, la sauvegarde des variantes, les erreurs annoncées et les critères manuels. Aucun prérequis bonus.

Décision : lot implémenté après revue, avec les trois dernières pages, les deux compétences et leurs guides. Identifiants existants, DA bleue et format du suivi manuel conservés. Aucun commit.

## Contrôles prévus

Exécuter tous les exemples et leurs variantes dans des processus propres : ordre/appels, arguments, résultats, noms locaux/NameError intentionnel, None, deux branches. Solutions de contrôle du quiz non publiées : résultats 0–3, règle de texte, changement d'attendue, quatrième question, nouveau lancement. Vérifier les vingt modules, dix-sept compétences, transitions, références et suivi ancien compatible.

Navigateur : trois pages et guides, bleu, entrée directe/parcours, 390 px, fin réelle sans suivant fictif. Recette dans l'application Thonny et observation en cours restent distinctes des tests techniques.

Références : [Python - fonctions et return](https://docs.python.org/3/tutorial/controlflow.html#defining-functions), [Python - portées et noms](https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces).

## Bilan de réalisation

Les guides ont été adaptés à chaque étape : pas de diagnostic sur return au module 18 avant son enseignement ; cahier des charges plutôt que solution complète au quiz. Tous les exemples et variantes sont exécutés dans des processus Python propres : ordre des appels, arguments manquants, None, NameError local, deux issues, scores 0–3, vide, casse, espaces, modification des réponses et quatrième question.

62 tests catalogue/Python/Web ciblés réussissent. 20 vues Chrome ciblées passent : parcours, leçons, guides, 540 px et mobile réel 390 px, accès direct et fin sans suivant fictif. Captures ordinateur fonctions et pied mobile quiz inspectées ; thème bleu conservé et aucun débordement relevé. Suite complète : 121/122 ; seul le test préexistant des styles embarqués de l'archive historique professeur échoue, également sur HEAD.

Le socle est implémenté, pas déclaré validé en classe : recette Thonny et observation avec élèves restent à faire. Aucun commit ni modification du suivi privé.

### Corrections après revue des contenus réalisés

Le fichier de découverte des fonctions évolue dans fonctions.py ; le premier corps a deux instructions. Pour return, noms distincts et affectation du résultat précèdent la comparaison des noms identiques ; une règle personnelle à deux issues complète l'autonomie numérique.

Le quiz transforme explicitement le premier paramètre en question, crée reponse avec une affectation, vérifie d'abord une comparaison exacte puis prépare le texte. Le score remplace la partie de test avec un seul appel, auquel deux appels seront ajoutés. Consignes métapédagogiques et notions inutilisées retirées ; retour joueur facultatif placé avant return.

Après corrections : 64 tests ciblés et 15 vues navigateur réussis. La seconde revue transversale, avec trois finitions éditoriales encore proposées, est consignée dans la revue pédagogique. Pas de nouvelle leçon ni commit.
