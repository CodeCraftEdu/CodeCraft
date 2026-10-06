# Python - lot 2 : calculer, diagnostiquer, choisir

## Périmètre et ordre

Trois modules originaux après la conversation interactive. Le parcours reste accessible aux débutants complets, sans prérequis Scratch ou mathématiques avancées. Chaque module conserve les fichiers précédents et fournit un exercice guidé, un transfert autonome, une consolidation, un bonus et un guide professeur.

1. `python-calculs` : distinguer nombre et texte, utiliser +, -, *, / et les parenthèses, conserver un résultat numérique. Introduire ensuite `int` sur une réponse de `input`. Exiger un entier écrit sans unité ni virgule ; expliquer la limite, sans ajouter de gestion d'exception cachée. Compétences : `python.numbers`, `python.conversion`.
2. `python-erreurs` : observer le résultat attendu, lire la dernière ligne du message et la ligne du fichier signalée, corriger une cause puis retester. SyntaxError, NameError et ValueError réutilisent les notions enseignées. Un résultat faux peut ne produire aucune exception. Compétence : `python.debugging`.
3. `python-conditions` : comparer avec >=, >, < et ==, distinguer affectation et comparaison, construire if/else avec deux-points et quatre espaces. Tester les deux branches et la frontière. Une décision à deux issues seulement ; pas de elif, booléens composés, boucle ou validation répétée. Compétence : `python.conditions`.

## Revue avant réalisation

- Les quatre compétences du premier lot précèdent la saisie numérique. La conversation n'est pas une validation automatique.
- Les opérations sont enseignées avant les exercices ; la conversion arrive après les valeurs fixes et explique que input renvoie du texte.
- La division utilise des nombres fixes avec diviseur non nul. Les exercices de conversion ne demandent ni décimaux ni calcul saisi comme texte.
- Les erreurs intentionnelles sont présentées explicitement comme des essais à diagnostiquer, dans des fichiers distincts. La lecture d'une erreur ne remplace pas sa gestion dans un programme.
- Les conditions utilisent des valeurs fixes avant de réutiliser une saisie numérique. Le cas limite appartient explicitement à une branche.
- Aucun modèle complet ne résout l'exercice autonome ; les indices restent des rappels ciblés. La vérification demande explication et modification, pas seulement copie ou cases cochées.
- Aucun changement de schéma, de suivi privé, d'espace professeur ni de direction artistique. Les nouveaux guides utilisent les composants existants.

Conclusion : spécification cohérente avec les acquis disponibles. Réalisation autorisée après cette revue ; validation technique des exemples et routes, puis vérification manuelle dans Thonny à prévoir.

## Bilan de réalisation

Les trois modules, leurs guides, compétences et liens sont intégrés. Les introductions fusionnent les repères et la préparation en un seul encart ; les données détaillées de prérequis restent conservées.

Vérifications : 35 tests Python/pédagogie passés, puis un test ciblé supplémentaire sur les introductions et limites de saisie. Les 36 vues navigateur existantes et étendues passent ; trois vues supplémentaires contrôlent les nouveaux modules à 524 px utiles. Captures mobiles inspectées et absence de débordement vérifiée. Aucun changement des styles, de l'application professeur ou du format privé ; aucun commit ni push effectué. L'essai réel dans Thonny reste à faire.
