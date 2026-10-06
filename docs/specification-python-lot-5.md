# Python - lot 5 : hasard et nombre mystère

## Statut

Spécification revue, ajustée et implémentée. Les modules 14 et 15 prolongent les treize modules existants. Les corrections de la revue du lot 4 sont appliquées : fichier et range(3) explicitement rétablis avant déplacement de Fin ; question du guide de score reformulée.

| Ordre | Identifiant proposé | Titre | Type et compétences |
| --- | --- | --- | --- |
| 14 | `python-hasard` | Tirer un nombre au hasard | Leçon ; nouvelle compétence `python.random` |
| 15 | `python-nombre-mystere` | Trouver le nombre mystère | Projet ; réinvestissement, sans compétence de jeu globale |

Ne pas ajouter de pages vides ou de compétences futures au catalogue avant réalisation. Le site reste un support ; les programmes tournent dans Thonny, sans compte ni installation de package supplémentaire pour random.

## Cadre pédagogique

- Le hasard suit les variables, comparaisons, boucles et compteurs ; il ne doit pas masquer leur compréhension. Tester d'abord une valeur fixe, puis remplacer uniquement sa source par un tirage.
- Un seul encart de préparation par module ; ton neutre, menus français, tirets simples. Réutiliser les composants et la DA existants, sans nouveau sélecteur ni décoration obligatoire.
- Conserver les anciens fichiers, nommer les variantes de diagnostic, ne pas publier une solution complète du projet autonome. Les indices restent courts et repliables.
- Pas de liste, fonction créée avec def, exception gérée, normalisation de texte, récursion, classe, boucle imbriquée, and/or, break, continue, while True ou else de boucle.
- La comparaison != est une petite extension nécessaire au projet : elle doit être enseignée explicitement avant son emploi, pas présentée comme un acquis du module 8. Pas de nouvelle compétence distincte pour ce seul opérateur ; sa pratique reste dans le périmètre comparaison/condition.
- Les champs numériques attendent un entier écrit en chiffres, sans unité ni décimale. Le programme ne gère pas une entrée non convertible : ValueError termine cet essai. Une répétition normale n'est pas une reprise après erreur.
- Pas de plafond d'essais combiné à la réussite dans le socle : cela demanderait une nouvelle condition composée ou un autre mécanisme d'arrêt. Les essais de test sont finis et prévus ; l'élève sait interrompre dans Thonny.
- Évaluer séparément reproduction, explication, modification et aides reçues. Le projet ne valide jamais automatiquement les compétences utilisées.

## Module 14 - Tirer un nombre au hasard

### Prérequis et entrée

Créer et relancer un fichier, lire une variable numérique, afficher sa valeur, prévoir une comparaison et un bloc for. Reprendre python-variables, python-conditions ou python-for selon le point manquant. Aucun raisonnement probabiliste avancé requis.

Diagnostic : faire afficher une variable fixe, puis prévoir trois valeurs successives d'un range. Demander ce qui est prévisible avant le lancement et ce qui pourrait varier.

Objectif : importer random, tirer et conserver un entier, distinguer une valeur conservée de plusieurs nouveaux tirages, vérifier l'intervalle sans promettre une sortie différente à chaque lancement.

### Progression et fichiers

1. Créer tirage.py ; annoncer immédiatement de ne pas nommer le fichier random.py ni une variable random. Premier modèle original :

```python
import random
nombre = random.randint(1, 6)
print("Nombre :", nombre)
```

Expliquer import random avant usage : il rend accessible le module de la bibliothèque standard. Le point dans random.randint désigne une fonction de ce module ; les parenthèses appellent cette fonction. On utilise une fonction existante, on n'apprend pas encore à en définir une.

randint(1, 6) peut fournir un entier de 1 à 6, bornes comprises. Comparer explicitement à range(1, 6), dont la fin est exclue ; cette différence est un point central, pas un indice facultatif. Aucun from ... import ... ni alias dans le lot.

2. Relancer plusieurs fois : chaque exécution effectue un nouveau tirage, mais deux résultats consécutifs peuvent être identiques. Ne pas demander une valeur exacte ni considérer l'absence d'une borne sur quelques essais comme une erreur.

3. Enregistrer puis créer valeur_conservee.py : effectuer un seul tirage avant for, puis afficher la variable trois fois. Prévoir que les trois affichages seront identiques dans cette exécution. Créer nouveaux_tirages.py : tirer à l'intérieur de for puis afficher ; chaque passage fait un nouvel appel, même si certains résultats se répètent. Deux fichiers pour comparer, sans écraser la première variante.

4. Guidé : repérer l'import et les deux bornes ; tester un intervalle réduit à randint(4, 4), toujours 4 ; comparer trois affichages d'une valeur conservée à trois nouveaux appels. Expliquer les garanties plutôt que deviner chaque résultat.

5. Autonomie dans mon_tirage.py : choisir une plage positive avec début inférieur à la fin, par exemple 3 à 9, effectuer un seul tirage et réutiliser la valeur dans deux messages. Annoncer les valeurs possibles et montrer la ligne qui tire. Enregistrer puis créer mon_tirage_repetition.py avec trois appels successifs ; expliquer ce qui a changé, sans exiger trois nombres différents. Modifier les bornes et tester aussi une plage réduite à une valeur.

6. Pour diagnostiquer : ne pas appeler le fichier random.py et ne pas nommer une variable random, afin de ne pas masquer le module. Le guide aide à renommer le fichier, sélectionner le bon onglet et redémarrer avant de retester ; ne pas conseiller d'installer un package au hasard. Les noms incohérents et l'oubli d'import sont repérés par lecture avant correction ciblée.

7. Bonus facultatif : dans un nouveau fichier, faire cinq tirages et afficher un message pour les résultats au moins égaux à un seuil fixé. Pas de statistiques, liste ou calcul de fréquence requis ; le résultat du test doit dépendre de la valeur conservée, pas d'un deuxième tirage dans la comparaison.

### Critères et reprises

- Expliquer import et l'appel random.randint sans confondre module et variable de résultat.
- Annoncer correctement les bornes incluses et les distinguer de range.
- Réutiliser un tirage conservé et distinguer plusieurs affichages de plusieurs nouveaux appels.
- Modifier l'intervalle, vérifier un cas à valeur unique et expliquer pourquoi une répétition de résultat reste possible.

Reprises : guide local, variables, valeurs de range et comparaison. Le guide propose des aides graduées pour import absent, nom masquant random, borne mal comprise et nouveau tirage involontaire. Ne pas enseigner seed dans le cours pour satisfaire les tests ; le contrôle déterministe relève du dispositif de vérification.

## Module 15 - Trouver le nombre mystère

### Prérequis et contrat

Variables, input, int en deux lignes, <, > et ==, if/elif/else, while avec mise à jour, compteur initialisé puis augmenté, random.randint. Reprendre les points nécessaires ; le score textuel du module 13 n'a pas validé int.

Contrat du projet : un secret entier de 1 à 10 choisi une seule fois au lancement, une proposition à chaque essai, un indice Trop petit ou Trop grand pour un échec, un arrêt à la réussite et un nombre total d'essais. La réussite au premier essai compte pour 1. Les instructions annoncent le format numérique attendu.

Un entier hors de 1 à 10 est comparé comme les autres et compte comme essai ; il ne déclenche pas un message de validation particulier. Une entrée non convertible termine le programme avec ValueError. Pas de score supplémentaire, temps limite, rejouer automatique ou essais limités dans le socle.

### Progression et fichiers

1. Préparer sans hasard dans comparaison_mystere.py : secret fixé à 6, une question numérique, une conversion et trois issues. L'élève construit une première décision accompagnée avant toute répétition. Tester 4, 6 et 8 : trop petit, trouvé, trop grand. Les aides rappellent les notions, sans fournir tout le jeu.

2. Enseigner != dans un petit exemple indépendant, inegalite.py :

```python
secret = 6
proposition = 4
print(proposition != secret)
proposition = 6
print(proposition != secret)
```

Résultats True puis False ; != signifie différent de, pas affecter et pas égal. Demander ensuite quand une condition proposition != secret doit cesser d'être vraie. Ne pas introduire not pour obtenir cette comparaison.

3. Enregistrer comparaison_mystere.py puis créer repetition_mystere.py : première proposition avant while, répétition tant que proposition != secret, indice selon < ou > puis nouvelle question et conversion dans le bloc. Retirer la branche Trouvé de l'ancienne chaîne : dans while, la proposition diffère forcément du secret ; les indices seuls restent dans ce bloc. Réutiliser les deux niveaux d'indentation enseignés dans le module 13 ; aucune boucle imbriquée. La réussite est annoncée après while, pas à chaque tour. Le secret reste fixe à 6 pour ces tests.

4. Tester une réussite immédiate, un trop petit puis réussite, un trop grand puis réussite, puis un essai de chaque côté avant réussite. Prévoir le nombre de questions et vérifier qu'aucune question supplémentaire n'apparaît après réussite. Si une version ne finit pas, interrompre avant correction ; ne pas demander de lancer une boucle volontairement dépourvue de mise à jour.

5. Ajouter progressivement le compteur : initialiser essais à 1 après la première proposition convertie, augmenter de 1 après chaque nouvelle proposition convertie dans la boucle, afficher le bilan après réussite. Tester 6 ; 4, 6 ; 8, 6 ; 4, 8, 6 : bilans 1, 2, 2, 3. Expliquer pourquoi le compteur ne commence pas à 0 dans cette organisation. Il compte les propositions converties, pas les tours de while seulement.

6. Enregistrer puis créer mystere_aleatoire.py : ajouter import random, remplacer seulement le secret fixe par random.randint(1, 10) avant toute question ou répétition. Le secret n'est pas retiré après un échec. Une ligne d'affichage provisoire, explicitement marquée comme aide de test, peut montrer le secret pendant le diagnostic ; la retirer du jeu final. Ne pas confondre cette ligne avec un indice destiné au joueur.

### Autonomie et preuves

Dans mon_nombre_mystere.py, construire sa propre version avec messages personnels et une plage de 1 à 12. Préparer une courte description de la règle et des variables avant les indices. Garder les fichiers fixes et aléatoires guidés.

- Tirer une seule fois, demander et convertir chaque proposition, donner le bon indice, s'arrêter à la réussite et afficher le total d'essais.
- Enregistrer puis créer test_nombre_mystere.py avec Enregistrer sous pour remplacer provisoirement le secret aléatoire par 7. Choisir soi-même une proposition inférieure et une supérieure ; prévoir puis tester réussite immédiate, chaque échec suivi de réussite et les deux échecs avant réussite. Garder 3 et 10 comme exemples dans l'indice seulement. Vérifier indices, 1/2/2/3 essais et absence de question après réussite.
- Tester aussi un secret fixe à chacune des bornes : 1 et 12 ; la réussite immédiate doit fonctionner aux deux extrémités. Relancer avec un entier hors plage, puis le secret, et expliquer qu'il compte comme essai.
- Tester une entrée non convertible dans le fichier de test, expliquer la ligne concernée et l'arrêt de cet essai ; relancer avec un entier valide. Ne pas ajouter try/except pour masquer cette limite.
- Rouvrir mon_nombre_mystere.py, conserver le tirage aléatoire et vérifier qu'aucun affichage de diagnostic ne révèle le secret. Une relance tire à nouveau, mais peut retrouver la même valeur.
- Expliquer la position du tirage, des deux questions, des deux conversions, du compteur et du message de réussite. Modifier la plage dans une copie sauvegardée, mettre à jour l'annonce et retester les bornes avec une valeur fixe, sans casser la version précédente.

Les tests fixes sont des copies de diagnostic explicites, pas une graine aléatoire cachée. Les guides doivent distinguer modèle reproduit, modification expliquée et construction personnelle. Aucune solution complète du projet dans le cours public.

### Critères, reprises et bonus

- Conserver un secret stable entre essais et expliquer son tirage unique.
- Lire et utiliser !=, actualiser la proposition et atteindre la réussite, y compris au premier essai.
- Produire les bons indices et compter les propositions sans décalage de 1.
- Tester de façon déterministe les routes et bornes dans une copie, puis retrouver la version aléatoire sans révélation du secret.
- Modifier la plage et expliquer les limites de saisie, sans présenter le jeu comme protégé contre toute entrée.

Reprises : comparaison accompagnée locale, python-calculs/conversion, python-elif, python-while et python-compteurs selon le besoin ; python-hasard pour import et bornes.

Bonus facultatif : personnaliser le bilan avec une appréciation selon le nombre d'essais, après réussite, à l'aide de if/elif/else et de seuils simples. Conserver le total exact ; pas de remise à zéro, plafond combiné ou nouvelle partie dans ce bonus.

## Intégration prévue

À la réalisation : python-compteurs → python-hasard → python-nombre-mystere. Seule python.random est ajoutée comme nouvelle compétence ; le projet réinvestit workspace, output, variables, input, numbers, conversion, debugging, conditions, branches, while, accumulation et random. Il n'utilise pas for comme preuve autonome et ne le valide pas par simple présence dans le parcours.

Le projet n'exige pas les bonus précédents. Il ne publie pas encore de lien vers le futur module listes. Aucun changement du suivi privé, de l'application professeur ou des styles. Les guides restent des données publiques dans le format existant.

## Vérifications prévues à la réalisation

1. Relations, prérequis, guides et maintien des anciens acquis. Étendre les tests de catalogue à quinze modules et treize compétences seulement lors de la réalisation.
2. random.randint : vérifier des résultats dans la plage et randint(4, 4) == 4. Ne pas exiger de voir toutes les valeurs ou deux résultats différents sur une petite série.
3. Contrôler placement et nombre d'appels avec un dispositif déterministe réservé aux tests : un appel conservé contre trois nouveaux appels. Ne pas enseigner seed ni modifier le hasard de production pour obtenir un test stable.
4. Exécuter le petit exemple != et une solution originale de contrôle du projet, non publiée, avec secrets fixes : routes bas/haut/réussite, réussite immédiate, compte d'essais, bornes, entier hors plage et ValueError. Chaque processus a un délai maximal ; aucune boucle infinie intentionnelle lancée.
5. Dans la solution de contrôle avec tirage, vérifier un seul appel par partie, même après plusieurs propositions. Vérifier la modification de plage et le retrait des affichages de diagnostic dans la version finale ; ne pas tester seulement un jeu heureux.
6. Une campagne navigateur ciblée : parcours, passage depuis le module 13, deux nouvelles pages et guides, mobile, indices et absence de débordement. Pas de refonte visuelle.
7. Recette Thonny distincte : bibliothèque standard, noms de fichiers non conflictuels, fichiers conservés, questions répétées, arrêt/redémarrage et réouverture. Les tests techniques ne remplacent pas l'observation avec des élèves.

## Références et prochaine étape

Bornes incluses et comportement de randint vérifiés dans la [documentation officielle random](https://docs.python.org/fr/3/library/random.html#random.randint). Les exemples et scénarios sont originaux ; aucune reprise de programme interne. Les explications de bibliothèque et import ne doivent pas devenir un cours de packaging.

La revue a retenu trois ajustements validés puis appliqués : avertissement random.py dès la création du premier fichier ; transformation explicite de la chaîne en indices dans while et réussite après ; propositions de test autonomes choisies par l'élève. Les deux modules, guides, reprises et transitions sont intégrés sans nouveau style ni changement du suivi privé. Le bilan technique est consigné après les vérifications.

## Bilan de réalisation

Quinze modules et treize compétences Python dans le catalogue. La nouvelle compétence est python.random ; le projet réinvestit les compétences indiquées sans valider for. Les fichiers guidés, autonomes et de test restent distincts. Aucun jeu complet à recopier publié : seul le petit exemple != possède un bloc de code dans le projet.

42 tests Python/pédagogie réussis après réparation d'un défaut de métadonnées détecté à l'intégration. Vérifications : bornes du tirage, valeur unique, un appel conservé contre trois nouveaux appels avec résultats identiques contrôlés, !=, indices bas/haut, réussite immédiate, compte d'essais 1/2/3, bornes, entier hors plage, ValueError dès la première ou une nouvelle proposition, et un seul tirage par partie. Les solutions de contrôle et le remplacement déterministe de randint restent réservés aux tests.

10 vues navigateur ciblées réussies : parcours, modules 13 à 15 sur ordinateur et petit écran, trois guides. Capture mobile du nombre mystère inspectée ; contrôles sans débordement ni chevauchement de l'outil. Diff sans erreur d'espacement. Pas de changement de styles, de l'application professeur ou du suivi privé. Aucun commit ni push ; recette réelle dans Thonny et observation avec élèves toujours à effectuer.

Suite conseillée : revue pédagogique du lot réalisé, puis spécification des modules listes et texte avant fonctions. Pas de page future publiée.
