# Python - lot 4 : répéter, arrêter, compter

## Statut et périmètre

Spécification des modules 11 à 13, ajustée après revue et implémentée. Le parcours compte treize modules. Les deux ajustements de reprise du checkpoint sont appliqués ; aucune page future vide n'est publiée.

Parcours générique pour débutants, dans Thonny, sans prérequis Scratch, jeu vidéo ou mathématiques avancées. Les dix premiers modules précèdent ce lot, mais leur consultation ne prouve pas les acquis : diagnostiquer les notions nécessaires et proposer une reprise ciblée.

| Ordre | Identifiant prévu | Titre | Nouvelle compétence prévue |
| --- | --- | --- | --- |
| 11 | `python-for` | Répéter un nombre de fois | `python.for` : prévoir et modifier une répétition avec for/range |
| 12 | `python-while` | Répéter tant que | `python.while` : expliquer la condition, sa réévaluation et l'arrêt |
| 13 | `python-compteurs` | Compter et calculer un score | `python.accumulation` : initialiser et actualiser un compteur ou un total au bon endroit |

Les titres et identifiants sont proposés pour la réalisation. Ne pas étendre silencieusement les anciennes compétences, ni modifier le format privé. Les trois modules sont des leçons avec transfert autonome, pas trois projets complets.

## Principes communs

- Un seul encart Avant de commencer ; données détaillées de prérequis conservées. Pas de traduction anglaise des menus, de formulation liée à un âge ou de nouveau libellé décoratif.
- Modèle court, prédiction, essai guidé, création ou modification autonome, explication et nouveaux tests. Les indices sont repliés et ne constituent pas une preuve d'autonomie.
- Chaque variante importante utilise un fichier distinct. Les activités d'un même programme peuvent modifier ce fichier, après sauvegarde ; elles ne suppriment pas les essais précédents.
- Réutiliser le composant HTML/CSS code et console existant lorsque cela aide à relier un petit modèle à sa sortie. Ne pas ajouter un schéma à chaque bloc ni une simulation d'éditeur. Garder la DA low-poly actuelle sans nouveau décor.
- Introduire la structure avant la saisie. Aucun bonus du module 6 ou 8 n'est nécessaire. Quand une opération ou une structure est nouvelle, l'expliquer localement.
- Le nombre de tours, les réponses et les gains restent petits et fixes au départ. Pas de hasard, import, liste, fonction, normalisation, exception gérée ou boucle imbriquée.
- Ne pas utiliser break, continue, while True, else de boucle, +=, f-string, sum, len, and/or ou pas négatif dans le socle de ce lot.
- Évaluer séparément raisonnement, manipulation de Thonny et aides reçues. Aucun statut automatique depuis les cases, les pages ou les gemmes.

## Module 11 - Répéter un nombre de fois

### Entrée et objectif

Prérequis : créer et relancer un fichier, afficher, affecter et lire une variable, repérer un bloc indenté et une ligne hors du bloc. Comparer brièvement avec l'indentation de if, sans exiger une nouvelle décision dans la première boucle.

Faire prévoir trois print successifs, puis demander comment répéter le même message sans écrire trois instructions identiques. Si l'ordre ou l'affichage bloque : reprendre python-affichage ; si l'indentation bloque : python-conditions/guide.

Objectif : choisir combien de fois une action se répète, expliquer les valeurs de range et distinguer les instructions répétées du message après la boucle.

### Progression et fichiers

1. Créer repetitions.py. Présenter une première boucle à nombre connu :

```python
for tour in range(3):
    print("Bonjour !")
print("Fin")
```

Sortie : trois Bonjour ! puis un seul Fin. Expliquer for, le nom tour recevant les valeurs fournies, in, range, les deux-points et le bloc de quatre espaces. Ici, la valeur de tour n'est pas encore affichée.

2. Enregistrer puis créer tours.py. Afficher tour dans la boucle, d'abord avec range(3) : 0, 1, 2. Expliquer que la borne de fin est exclue et que le début par défaut est 0. Passer ensuite à range(1, 4) : 1, 2, 3. Ne pas appeler range une liste ni présenter for comme limité aux nombres ; préciser simplement que d'autres suites viendront plus tard.

3. Guidé : prévoir puis tester range(1), range(3), range(0) ; le dernier ne produit aucun passage mais la ligne après la boucle s'exécute. Déplacer un print vers ou hors du bloc, prévoir la différence. Comparer range(1, 4), range(1, 5) et range(1, 1) : ce dernier prépare le cas sans passage à deux bornes, sans donner une règle de borne inclusive.

4. Autonomie dans parcours_tours.py : afficher les tours 1 à 4 avec un message personnel à chaque tour, puis un seul message de fin. Changer la consigne à six tours et ajuster la borne sans recopier une solution complète. Expliquer début, dernière valeur et nombre de passages ; tester aussi zéro passage dans une variante sauvegardée.

5. Bonus facultatif dans repetitions_saisie.py : demander un nombre de répétitions avec input puis int en deux lignes, annoncer un entier de 0 à 6 et tester 0, 1, 4. Les valeurs hors de ce domaine ne sont pas contrôlées par le modèle ; une entrée non convertible produit toujours ValueError. Aucun usage de cette variante requis pour le module 12.

### Critères, reprises et guide

- Prévoir les valeurs de range(3) et range(1, 4), sans confondre borne et dernier nombre.
- Construire une répétition personnelle et modifier le nombre de tours sans dupliquer les instructions.
- Expliquer les lignes du bloc et celles exécutées après, y compris sans passage.
- Conserver et relancer les variantes ; noter les aides plutôt que déduire l'acquisition de la sortie correcte.

Reprises prévues : exercice guidé du module, affichage et ordre, indentation de python-conditions. Le guide propose de suivre oralement chaque valeur ; il ne demande pas de liste, de tableau logiciel ou de connaissance du mot itérateur. Erreurs : borne trop courte, Fin indenté, deux-points absent, tour écrit entre guillemets.

## Module 12 - Répéter tant que

### Entrée et objectif

Prérequis : for/range, comparaison et if/else, indentation, affectation, input et relance. Pour la variante numérique seulement, reprendre l'addition si nécessaire ; la conversion numérique n'est pas utilisée dans le modèle textuel.

Objectif : distinguer une condition testée une seule fois d'une condition retestée avant chaque passage, et expliquer comment le programme peut atteindre l'arrêt.

### Progression et fichiers

1. Avant l'exécution, repérer Arrêter / redémarrer dans Thonny. Ne pas faire lancer une boucle infinie à titre d'essai libre. Si un programme répète sans s'arrêter, interrompre avant de modifier puis relancer le fichier entier.

2. Créer encore.py, modèle textuel sans nombre de répétitions fixé :

```python
reponse = input("Continuer ? oui pour continuer : ")
while reponse == "oui":
    print("Un nouveau tour")
    reponse = input("Continuer ? oui pour continuer : ")
print("Fin")
```

La première question précède le premier test. Chaque oui permet un passage ; une nouvelle saisie actualise reponse avant le test suivant. Tout autre texte termine, y compris Oui ou oui suivi d'un espace : ce n'est pas une validation des réponses ni une correction automatique.

3. Guidé : prévoir et tester non ; oui puis non ; oui, oui puis non. Respectivement zéro, un et deux Un nouveau tour, puis un seul Fin. Comparer oralement à if sur le même test : if ne retourne pas tester après son bloc. Retirer la nouvelle saisie uniquement sur papier ou dans un extrait non exécuté, et expliquer pourquoi un premier oui resterait vrai.

4. Créer while_tours.py : valeur tour initialisée à 1, while tour < 4, affichage de tour puis tour = tour + 1 dans le bloc, Fin après. Expliquer cette mise à jour avant de l'utiliser : lire l'ancienne valeur, ajouter 1, réaffecter. Elle est indispensable ici pour atteindre la fin, pas encore un exercice de score. Tester les valeurs initiales 1, 4 et 5 : trois passages, zéro, zéro. Changer la borne à 5 : quatre passages.

5. Autonomie dans repetition_personnelle.py : demander un mot de continuation choisi par l'élève, produire un message à chaque accord et redemander après chaque passage. Tester un arrêt immédiat puis deux accords et un arrêt ; expliquer la ligne qui fait évoluer la condition. Modifier ensuite le mot accepté dans la question initiale, la comparaison et la question répétée, et retester l'ancien mot. Conserver encore.py. Pour le transfert numérique, rouvrir while_tours.py et créer borne_personnelle.py avec Enregistrer sous : garder le départ à 1, choisir la borne pour cinq passages, prévoir puis tester. Tester aussi un départ égal puis supérieur à cette borne, sans remplacer le modèle initial.

6. Bonus facultatif : dans un nouveau fichier, construire une variante numérique à borne différente, en actualisant la variable avec une addition positive. Expliquer pourquoi elle finit ; pas de compte à rebours ou nouvelle opération imposée.

### Critères, reprises et guide

- Expliquer le test avant chaque passage et le cas où le bloc ne s'exécute jamais.
- Construire une répétition textuelle avec saisie actualisée et arrêt vérifié.
- Modifier la borne du modèle numérique et tester un départ inférieur, égal et supérieur ; expliquer pourquoi retirer la mise à jour compromet l'arrêt.
- Distinguer for à nombre connu, if à décision unique et while à condition retestée, sans prétendre que for ne pourrait jamais servir à une saisie.

Reprises : guide local pour arrêt et actualisation, python-saisie pour console/input, python-conditions pour test et indentation, python-for pour répétition connue. Le guide distingue attente de input et répétition sans fin. Ne pas évaluer une boucle infinie par son lancement ; utiliser la lecture, puis une version corrigée et bornée.

## Module 13 - Compter et calculer un score

### Entrée et objectif

Prérequis du socle : variables numériques, addition, saisie textuelle, for/range, if/else et indentation. Ni while ni conversion numérique requis pour les activités centrales ; while sert seulement au bonus et porte son prérequis local. Faire prévoir points = 2 puis points = points + 3 : résultat 5. Reprendre python-calculs en cas de confusion nombre/texte ; l'aventure du module 10 n'a pas validé les calculs.

Objectif : conserver une valeur entre les tours, distinguer le nombre d'événements du total gagné, initialiser une seule fois et actualiser au bon moment.

### Progression et fichiers

1. Créer total.py, modèle minimal :

```python
score = 0
for tour in range(4):
    score = score + 2
print("Score :", score)
```

Résultat 8. Expliquer la valeur initiale et les valeurs successives 2, 4, 6, 8. Comparer à score = 2, qui remplace sans accumuler. Rendre visible la différence avec un affichage temporaire dans le bloc, puis revenir à un seul bilan final.

2. Créer compteur.py pour comparer une augmentation de 1 par passage au gain de 2 du score. Expliquer qu'un compteur compte ici les passages et qu'un score additionne les gains ; cette distinction est un usage des variables, pas deux types Python différents. Ne pas introduire += dans ce lot.

3. Introduire explicitement un if à l'intérieur d'un for, avant de demander une accumulation conditionnelle. Deux niveaux : instructions du tour à quatre espaces, instructions de branche à huit espaces, bilan à zéro. Ce n'est pas une boucle imbriquée. Un tour peut avoir lieu sans augmenter le nombre de réussites. Utiliser une question textuelle fixe avec oui comme accord, pas un calcul-questionnaire non enseigné.

4. Avant le guidé, fournir decisions.py : une question et un if dans un for, sans accumulation, pour rendre visibles les deux niveaux d'indentation. Enregistrer puis créer collecte.py avec Enregistrer sous : réaliser trois tours et compter uniquement les réussites pour oui. Tester zéro, trois et deux réussites. Créer ensuite collecte_score.py pour ajouter un score de 2 par réussite. Deux variables finales seulement, pas de troisième compteur des tours. Aides graduées sur initialisation, test, mise à jour ; le modèle de départ total.py ne donne pas la solution complète de cette activité.

5. Autonomie dans mon_score.py : quatre tours, une question personnelle annonçant un mot accepté, un compteur de réponses acceptées et 3 points par réponse acceptée ; tout autre texte rapporte zéro. Afficher réussites et score après la boucle. Tester quatre refus, quatre accords et deux accords/deux refus : (0, 0), (4, 12), (2, 6). Modifier le gain à 2 et choisir un nouveau test. Expliquer pourquoi les compteurs ne sont pas remis à zéro à chaque tour et pourquoi on ne compte pas uniquement la dernière réponse.

6. Bonus facultatif dans score_while.py : réinvestir la boucle textuelle du module 12 pour compter les tours et ajouter un gain fixe à chaque accord, avec sortie immédiate possible. Ne pas fusionner condition d'arrêt, plafond d'essais et réussite dans le socle ; aucun and/or nécessaire.

### Critères, reprises et guide

- Expliquer l'ancienne valeur utilisée à droite de = et la nouvelle valeur conservée.
- Initialiser avant la boucle, actualiser dans le tour ou dans la branche concernée, afficher le bilan après.
- Distinguer tours, réussites et score sur une séquence mixte, pas seulement sur des réponses toutes identiques.
- Modifier le gain et vérifier un résultat attendu sans recopier la solution ; conserver les fichiers et noter les aides.

Reprises : guide local, python-calculs/operations pour addition et variable numérique, python-for pour nombre de tours, python-conditions pour branche ; python-while pour le bonus seulement. Le guide fait suivre les valeurs au fil de trois tours avec une réussite, un refus, une réussite. Erreurs à diagnostiquer : remise à zéro dans la boucle, affectation constante, mise à jour hors de la branche, bilan répété, indentation incorrecte.

## Transitions et intégration prévues

- À la réalisation : python-aventure → python-for → python-while → python-compteurs. Les anciennes pages et identifiants restent stables ; les dix modules déjà publiés ne changent pas de compétences.
- À l'entrée du module 11, demander une lecture de bloc plutôt qu'une validation globale du projet précédent. Le module 12 exige les comparaisons et la saisie, pas le bonus numérique du 11.
- L'actualisation minimale du module 12 prépare l'accumulation du 13 sans exiger un score avant son enseignement. Le module 13 enseigne le if dans for : ce point ne doit pas rester caché dans une activité autonome.
- Le module 13 ne publie pas de lien vers une page vide. La suite annoncée sera hasard/import, puis nombre mystère, dans une spécification ultérieure.
- Chaque guide : diagnostic d'entrée, préparation/fichiers, modèle commenté, au moins trois questions avec réponses, accompagné/autonome, différenciation, erreurs avec aides graduées, critères et reprises existantes. Aucun changement de l'application professeur.

## Vérifications à la réalisation

1. Vérifier références, compétences, ordre des prérequis, reprises, IDs uniques et maintien du suivi manuel. Adapter les tests de nombre de modules de 10 à 13 seulement lors de l'intégration réelle.
2. Exécuter les modèles dans des processus propres : for zéro/un/plusieurs passages et borne exclue ; while zéro/un/deux passages et borne numérique atteinte/dépassée ; accumulation à gain constant et gain modifié.
3. Vérifier une solution originale de contrôle non publiée pour chaque autonomie. Pour mon_score.py, comparer compte et score sur tous les refus, tous les accords et séquence mixte ; renommer le mot accepté et retester aussi l'ancien.
4. Chaque processus de test possède un délai maximal ; ne pas exécuter de modèle intentionnellement infini. Les défauts d'initialisation ou d'accumulation sont vérifiés avec des boucles finies. L'absence de mise à jour dans while est un diagnostic de lecture.
5. Une seule campagne navigateur ciblée à l'intégration : passage depuis module 10, modules 11 à 13 et leurs guides, petit écran, indices et absence de débordement. Pas de nouvelle campagne sur l'ensemble du site pour ce lot.
6. Recette réelle dans Thonny distincte : fichier actif, sauvegarde/copie, input répété, interruption d'un programme en attente, relance dans un état propre. Ne pas présenter les tests automatiques comme une preuve d'efficacité avec tous les élèves.

## Références techniques et originalité

Sémantique contrôlée dans la documentation officielle : [for et range](https://docs.python.org/fr/3/tutorial/controlflow.html#the-range-function) pour les valeurs successives et la borne exclue ; [while](https://docs.python.org/fr/3/reference/compound_stmts.html#the-while-statement) pour le test préalable et répété. Ces références servent à la vérification technique ; les scénarios et exemples courts de cette spécification sont originaux, sans reprise d'un programme interne.

## Ajustements validés et réalisation

La revue a retenu quatre ajustements : range(1, 1) guidé avant le zéro passage autonome ; transfert numérique autonome pour while ; réussites puis score sans troisième compteur ; while et conversion retirés des prérequis du socle du module 13. Ils sont intégrés aux cours, guides et vérifications. Les trois modules sont réalisés sans nouvelle dépendance, style ni modification du suivi privé. Le bilan des tests est consigné après leur exécution.

## Bilan de réalisation

Treize modules et douze compétences Python dans le catalogue ; transition depuis l'aventure et précédent/suivant du lot intégrés. Les anciens identifiants et acquis sont conservés. Les modèles guidés ne publient pas de solution complète des transferts autonomes.

41 tests Python/pédagogie réussis. Vérifications exécutées : zéro/un/plusieurs passages, bornes exclues, continuation textuelle et renommage du mot, départ numérique inférieur/égal/supérieur à la borne, accumulation contre affectation constante, compte/score sur tous les refus, tous les accords et une séquence mixte, gain modifié et variante while. Aucun modèle intentionnellement infini exécuté.

13 vues navigateur ciblées réussies : parcours, modules 10 à 13 sur ordinateur et petit écran, quatre guides. Capture du module de score mobile inspectée ; pas de débordement horizontal ni de chevauchement du bouton outil constaté par les contrôles. Diff sans erreur d'espacement. La recette réelle dans Thonny reste à faire ; ces tests ne prouvent pas l'efficacité pédagogique avec chaque élève. Aucun commit ni push effectué.

Revue après réalisation : fichier repetitions.py et range(3) explicitement rétablis avant déplacement de Fin ; question du guide distinguant compteur et score reformulée. Corrections appliquées et protégées par tests ciblés. Pas de refonte nécessaire.
