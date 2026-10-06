# Python - lot 6 : listes et texte

## Statut et périmètre

Spécification revue, ajustée et réalisée. Modules 16 et 17 du socle de vingt modules, après revue du lot hasard/nombre mystère réalisé. Le catalogue compte dix-sept modules et quinze compétences Python. Aucun contenu futur vide publié.

| Ordre | Identifiant proposé | Titre | Nouvelle compétence |
| --- | --- | --- | --- |
| 16 | `python-listes` | Regrouper des valeurs dans une liste | `python.lists` : créer, consulter, parcourir et compléter une liste |
| 17 | `python-texte` | Explorer et préparer du texte | `python.text` : observer et transformer une chaîne, avec des limites explicites |

Deux leçons avec création autonome, pas deux nouveaux projets complets. Pas de fonction définie, dictionnaire, liste de listes ou fichier de données. Les prochains modules traiteront fonctions/paramètres, return/variables locales puis quiz personnalisable dans une autre spécification.

## Revue du lot précédent

Les modules 14 et 15 réalisés suivent la spécification ajustée : import annoncé, bornes incluses distinguées de range, résultat répété distingué du nombre d'appels, secret fixé pour diagnostiquer, tirage unique au lancement et compteur comprenant la première proposition. Le projet explique != avant usage et la réussite après while. Les propositions de test autonomes sont choisies par l'élève ; les fichiers guidés et de test restent conservés.

Pas de correction nécessaire identifiée dans cette relecture. Le projet ne gère ni les textes non convertibles ni les limites d'essais ; ces limites sont explicites, pas des fonctionnalités manquantes à ajouter discrètement. La recette dans Thonny et l'observation des aides réellement nécessaires restent à faire. Les vérifications du lot réalisé ont déjà réussi ; ne pas les relancer pour cette seule préparation documentaire.

## Principes communs

- Diagnostic des prérequis, un seul encart de préparation, modèle bref, essais guidés, transfert autonome et critères observables. Les indices sont repliés ; aucune compétence attribuée par une case.
- Ton neutre pour débutants de tous âges, menus français et tirets simples. Pas de changement de DA ni d'application professeur. Réutiliser les blocs de code existants ; un repère compact d'indices ne doit pas devenir une illustration chargée.
- Chaque programme indépendant a son fichier. Sauvegarder avant une copie ou une modification ; ne pas demander d'effacer les travaux précédents.
- Faire évoluer le même fichier pendant une activité ; les essais guidés vérifient ces étapes sans les recopier dans de nouveaux fichiers. Réserver les copies aux variantes importantes, aux diagnostics et au transfert autonome.
- Commencer par des valeurs fixes avant la saisie. Ni hasard ni while n'est indispensable au socle de ces deux modules : ces compétences ne sont pas évaluées par leur présence antérieure dans le parcours.
- Expliquer localement crochets, virgules entre éléments, indice, len, parcours direct et méthode append avant emploi. Pour le texte, expliquer chaîne de caractères, parcours, méthodes et conservation du résultat avant de normaliser une réponse.
- Ne pas utiliser compréhension de liste, enumerate, zip, slicing, indice négatif, tri, suppression, alias/copie de liste, and/or, exception gérée, boucle imbriquée, f-string ou fonction définie dans le socle.
- append complète la liste en place ; les transformations de texte produisent un résultat qu'il faut conserver. Ne pas laisser cette différence implicite.

## Module 16 - Regrouper des valeurs dans une liste

### Prérequis et objectif

Créer et relancer un fichier, afficher une variable et suivre un for. Reprendre python-variables ou python-for si nécessaire. Le socle utilise des valeurs textuelles fixes ; pas de conversion ou comparaison obligatoire. input intervient seulement dans le bonus.

Objectif : conserver plusieurs valeurs dans un ordre, consulter une position, parcourir les éléments sans les indices et ajouter un élément sans réécrire toute la liste.

### Progression et fichiers

1. Créer inventaire.py. Premier modèle original :

```python
objets = ["carte", "corde", "lampe"]
print(objets)
print(objets[0])
```

Expliquer les crochets autour de la liste et les virgules entre les éléments. Chaque élément est ici un texte entre guillemets. Une liste est ordonnée ; les éléments peuvent être identiques. Son affichage complet montre sa représentation avec crochets et guillemets, alors que l'élément seul affiche carte.

2. Dans le même fichier, consulter les indices 0, 1 et 2. Le premier indice est 0 ; le dernier est 2 pour trois éléments. Ajouter len(objets), qui donne le nombre d'éléments, pas le dernier indice. Ne pas utiliser une boucle sur range(len(...)) : le parcours direct sera enseigné ensuite.

3. Enregistrer puis créer parcours_liste.py :

```python
objets = ["carte", "corde", "lampe"]
for objet in objets:
    print("Objet :", objet)
print("Fin")
```

Expliquer que objet reçoit successivement les valeurs, pas les indices. Le nom de la variable de parcours est libre et distinct de celui de la liste. Prévoir carte, corde, lampe dans cet ordre. Remplacer la liste par [] dans une copie : aucun passage, mais Fin reste affiché et len vaut 0. Ne pas consulter l'indice 0 de cette variante vide.

4. Continuer dans parcours_liste.py après le premier parcours : expliquer objets.append("boussole"), puis afficher la liste et sa longueur après l'ajout, avant un second parcours. Le point appelle une méthode sur cette liste ; append ajoute une valeur à la fin et modifie la liste existante. Écrire l'appel sur une ligne autonome, sans objets = objets.append(...) ni print(objets.append(...)). Ne pas ajouter un cours sur toutes les méthodes ou None.

5. Guidé : prédire trois positions et len ; parcourir puis ajouter boussole avant un nouveau parcours ; vérifier ordre et longueur. Tester une liste vide avec len et for uniquement. Observer dans un fichier distinct diagnostic_indice.py qu'un indice 3 sur trois éléments provoque IndexError : lire la cause, corriger en choisissant une position existante, puis retester. Ce n'est pas une gestion d'erreur ni une saisie protégée.

6. Autonomie dans ma_collection.py : choisir trois éléments personnels, annoncer le nombre et afficher chaque élément avec for. Consulter le premier et le troisième, puis ajouter un quatrième avec append et refaire le bilan. Avant chaque essai, prévoir longueur et ordre. Modifier ensuite un élément directement dans la définition initiale et expliquer le changement observé. Dans une copie collection_vide.py, tester [] sans consultation d'indice.

7. Bonus facultatif dans collection_saisie.py : demander un nouvel élément avec input puis l'ajouter à une liste fixe. Tester deux exécutions avec des textes différents. Expliquer que chaque lancement recrée la liste initiale : elle n'est pas sauvegardée sur disque et les réponses précédentes ne sont pas conservées.

### Critères, reprises et guide

- Créer une liste personnelle et distinguer liste complète, élément et longueur.
- Expliquer l'indice zéro et choisir une position existante ; reconnaître IndexError sans le confondre avec un nom inconnu.
- Parcourir directement dans l'ordre, y compris zéro passage pour [].
- Ajouter à la fin avec append puis prévoir le nouveau bilan, sans affecter son résultat à la liste.

Reprises : guidé local, variables, for et diagnostic d'erreur selon besoin ; input seulement pour le bonus. Le guide traite indice/longueur, guillemets, variable de parcours et appel append avec aides graduées. Un résultat correct recopié ne suffit pas à valider python.lists.

## Module 17 - Explorer et préparer du texte

### Prérequis et objectif

Variables textuelles, print, input, comparaison exacte et for. Le module listes prépare les idées de longueur, indice zéro et parcours ; les méthodes de texte seront expliquées sans les confondre avec append. int, hasard, compteur et while ne sont pas requis pour le socle.

Objectif : comprendre qu'un texte est une séquence, observer espaces et casse, produire une nouvelle chaîne avec strip/lower et comparer des réponses selon une règle choisie.

### Progression et fichiers

1. Créer texte.py. Petit modèle original :

```python
mot = "Code"
print(len(mot))
for caractere in mot:
    print(caractere)
```

Prévoir 4 puis C, o, d, e. len compte ici les caractères, espaces compris, pas les mots. Se limiter à des exemples simples ; ne pas prétendre traiter toutes les écritures complexes ou les emojis. Expliquer la chaîne de caractères comme du texte ordonné, pas comme une liste mutable.

2. Lire mot[0] et mot[3] sur le modèle non vide : C et e. Un indice hors du texte produit IndexError comme pour la liste. Dans texte_vide.py, tester mot = "" avec len et for seulement : 0 et aucun caractère. Ne pas demander mot[0] sur une saisie qui pourrait être vide. La modification par mot[0] = "c" n'est pas un exercice demandé : le texte ne se modifie pas ainsi.

3. Créer transformation_texte.py :

```python
reponse = "  TOUR  "
sans_bords = reponse.strip()
normalisee = sans_bords.lower()
print("Original :", reponse)
print("Préparé :", normalisee)
```

strip retire les espaces des bords dans ces exemples ; lower met les lettres en minuscules. Les deux résultats sont conservés dans des variables distinctes. Le texte original reste inchangé : appeler reponse.lower() sans conserver le résultat ne change pas reponse. Ne pas enseigner une chaîne de méthodes compacte avant ces étapes séparées.

4. Dans comparaison_texte.py, utiliser input, les deux transformations en lignes séparées, puis if/else pour comparer normalisee à "tour". Annoncer la règle : les majuscules et espaces aux bords sont tolérés, mais pas les fautes ou espaces au milieu. Les deux issues sont démontrées et testées avant l'activité autonome ; ne pas reprendre le jeu entier du module 15.

5. Guidé : tester tour, Tour, espace-tour-espace, TO UR et lune ; les trois premiers correspondent, les deux derniers non. Tester aussi une réponse vide et une réponse composée d'espaces : elles ne correspondent pas, sans erreur ni consultation d'indice. Comparer le texte original et le résultat pour expliquer la transformation, pas seulement annoncer que le programme est plus permissif.

6. Autonomie dans mon_mot.py : choisir un mot accepté simple en minuscules, sans accent ni espace, et annoncer la règle de saisie. Demander une réponse, garder l'original, préparer en deux étapes puis produire un message propre à chacune des deux issues. Choisir ses tests couvrant casse, bords, mot différent et vide ; prédire avant d'exécuter. Renommer le mot accepté dans la question et la comparaison, puis tester le nouveau et l'ancien sans modifier les exercices précédents.

7. Transfert dans une copie mon_mot_casse.py : remplacer normalisee = sans_bords.lower() par normalisee = sans_bords, en gardant strip. La variable comparée reste ainsi définie. Prévoir et tester ce qui change pour une majuscule et un espace au bord. La comparaison ne devient pas entièrement exacte : les espaces aux bords sont toujours tolérés. Expliquer pourquoi toutes les applications ne doivent pas ignorer la casse. Les paramètres de strip, correction d'accents et règles de mots de passe restent hors périmètre.

8. Bonus facultatif dans remplacement_texte.py : expliquer replace sur un message fixe, conserver le résultat et vérifier que l'original demeure. Pas de split/join, texte découpé en mots ou algorithme de recherche dans ce lot.

### Critères, reprises et guide

- Observer longueur, caractères et indice sur un texte simple, sans confondre mots et caractères.
- Conserver le résultat d'une transformation et expliquer pourquoi le texte original reste intact.
- Préparer une réponse par étapes et vérifier correspondance/non-correspondance avec tests personnels.
- Expliquer les limites : bords/casse ne corrigent ni espaces internes, ni fautes, ni accents ; une réponse vide peut être comparée sans être indexée.
- Modifier la règle dans une copie puis vérifier précisément ce qui change.

Reprises : guidé local, input, comparaison, parcours for et indices du module listes. Le guide distingue erreur de saisie, réponse refusée par la règle et IndexError dû à une consultation inexistante. Ne pas attribuer automatiquement une compétence parce qu'une variante permissive accepte Tour.

## Transitions, guides et frontières

- À la réalisation : python-nombre-mystere → python-listes → python-texte. Ne pas exiger le jeu terminé pour commencer une collection ; diagnostiquer les compétences pertinentes seulement.
- Les nouvelles compétences sont distinctes ; les anciennes significations et acquis restent intacts. Les deux modules ne valident pas hasard ou while par leur présence dans la progression.
- Les guides suivent le format existant : diagnostic, fichiers, paroles de découverte, modèle commenté, questions/réponses, accompagné/autonome, différenciation et erreurs avec aides graduées.
- Ne pas lier une page vide de fonctions. La fin du module 17 annonce la préparation de fonctions dans un lot ultérieur.
- Le module 16 ne couvre pas toutes les structures de données ; le module 17 ne couvre pas tout le traitement du langage. Les approfondissements sont facultatifs, pas des prérequis cachés du futur quiz.

## Vérifications prévues à la réalisation

1. Dix-sept modules et quinze compétences uniquement lors de l'intégration ; contrôler prérequis, références, guides, IDs stables et maintien du suivi manuel.
2. Exécuter les modèles : liste complète/élément/longueur, ordre du parcours, ajout et liste vide. IndexError intentionnel dans un fichier distinct, puis correction. Vérifier les solutions originales de contrôle sans les publier dans les activités autonomes.
3. Texte : longueur et parcours, indice valide/invalide, vide sans index ; original inchangé après strip/lower, résultat conservé et appel non conservé. Tester correspondance avec casse/bords et refus avec intérieur, autre mot et vide.
4. Transfert : renommer le mot accepté, vérifier ancien/nouveau, retirer lower sans supprimer strip ; contrôle du bonus replace avec original conservé. Pas de dépendance au hasard ni à l'état précédent de console.
5. Une campagne navigateur ciblée : parcours, transition depuis module 15, deux nouvelles pages et guides, petit écran, indices et absence de débordement. Pas de changement de styles requis.
6. Recette Thonny et observation avec élèves restent distinctes des tests ; aucun fichier privé ouvert et aucun statut attribué automatiquement.

## Références et prochaine étape

Vérification technique dans la documentation officielle : [listes et append](https://docs.python.org/fr/3/tutorial/datastructures.html#more-on-lists), [texte, indices et chaînes](https://docs.python.org/fr/3/tutorial/introduction.html#text), [méthodes des chaînes](https://docs.python.org/fr/3/library/stdtypes.html#string-methods). Scénarios et exemples originaux, sans reprise de programme interne.

## Bilan de réalisation

Les deux ajustements de revue sont appliqués : les essais guidés réutilisent les fichiers de découverte, avec copies réservées aux variantes significatives ; mon_mot_casse.py remplace explicitement la ligne par normalisee = sans_bords, conserve strip et actualise la règle annoncée. Les deux modules, guides, reprises et transitions sont intégrés sans changement de DA, de schéma privé ni de suivi automatique.

43 tests Python/pédagogie et 9 vues navigateur ciblées réussis : parcours, transition depuis le nombre mystère, deux nouveaux modules sur ordinateur/petit écran et deux guides. Capture mobile du module texte inspectée, sans débordement. Les contrôles couvrent cas vides, indices, ajout, résultats textuels conservés, comparaison et transfert de casse. La recette réelle dans Thonny reste distincte et à effectuer.

Prochaine étape : revue pédagogique du lot réalisé, puis préparation des modules 18 et 19 (fonctions/paramètres, return/variables locales), avant le projet quiz du module 20. Aucun de ces trois modules futurs n'est publié.
