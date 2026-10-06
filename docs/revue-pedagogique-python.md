# Revue pédagogique Python

## Modules 1 à 4 - corrections appliquées

- Thonny : l'activité autonome demande maintenant de créer, nommer, enregistrer, fermer, retrouver et relancer accueil.py sans remplacer bonjour.py. Le bonus compare les deux fichiers et le fichier actif. Critères, orientation et guide alignés sur cette vérification.
- Variables : sauvegarder variables.py puis créer remplacement.py pour le deuxième exemple. L'activité autonome conserve les deux essais et utilise personnage.py.
- Affichage, variables et saisie : un seul encart de préparation, avec prérequis résumés ; les données de prérequis restent intactes.
- Rédaction : tirets simples et contrôles en français dans les quatre modules et guides. Le redémarrage n'est plus imposé dans l'introduction pour chaque essai ; il reste explicite dans le diagnostic de variable inconnue et le test autonome propre.

Vérification ciblée : 8 tests Python réussis, 10 vues navigateur réussies, diff sans erreur d'espacement. Les tests ne remplacent pas une observation dans Thonny. Aucun statut de compétence attribué ni donnée privée modifiée.

## Modules 5 à 8 - revue et corrections appliquées

Les propositions ci-dessous retracent la revue initiale. Elles sont désormais appliquées : introduction fusionnée et copie avec renommage pour la conversation ; noyau de calcul allégé et exploration facultative repliée ; fichiers de diagnostic distincts, bloc de code pour la mission et vérification autonome d'une saisie invalide ; copie choix_saisie.py avec emplacement des lignes explicite. Les guides et tests sont alignés. La soustraction est expliquée dans le module de diagnostic avant son utilisation, pour ne pas dépendre de l'exploration facultative.

Vérification après application : 9 tests Python et 11 vues navigateur ciblées réussis. Exemples du socle et de l'exploration exécutés ; diagnostic erroné puis corrections et résultats attendus vérifiés. Aucun module, compétence ou style ajouté ; aucune donnée privée modifiée.

### Module 5 - conversation interactive

Projet cohérent, sans notion nouvelle : progression d'une question à trois, noms distincts, réponses réellement utilisées, deux sessions et réouverture. Les aides sont distinguées du transfert. Conserver cette structure.

Améliorations proposées : fusionner les deux introductions comme pour les autres modules, retirer les anciennes traductions et tirets longs. Pour renforcer le transfert, demander de renommer une variable et ses usages dans une copie sauvegardée du projet, plutôt que vérifier uniquement un changement du texte de la question. Il s'agit d'une amélioration d'évaluation, pas d'un prérequis manquant.

### Module 6 - nombres et calculs

Point prioritaire : le parcours central cumule nombre/texte, addition, concaténation, quatre opérations, décimales de division, priorités, parenthèses, conversion et forme int(input(...)). Les modèles sont corrects, mais ce cumul peut détourner un débutant de l'objectif principal.

Proposition : noyau central nombre/texte, addition, variable numérique et conversion en deux étapes. Conserver les autres opérations dans une exploration séparée ; rendre les priorités et la forme imbriquée facultatives plutôt que les présenter avant la première réussite de conversion. Ne pas supprimer la couverture : préciser ce qui relève du socle et des extensions, puis aligner guide et critères. Définir brièvement le format entier avec exemples. Garder l'annonce des entrées invalides et l'absence de gestion d'exception cachée.

### Module 7 - comprendre et corriger une erreur

La méthode est solide : intention, symptôme, ligne signalée, cause, correction ciblée et nouveau test. La distinction exception/résultat faux et diagnostic/gestion d'erreur est correctement enseignée.

Propositions : conserver un fichier pour chaque exemple distinct au lieu de tous les remplacer dans diagnostic.py ; présenter les trois instructions erronées de l'activité autonome dans un véritable bloc de code plutôt qu'une phrase à virgules. La ValueError est observée avec aide mais l'autonomie n'évalue que NameError et le calcul faux : ajouter une courte vérification où l'élève choisit et explique une saisie invalide puis une saisie valide, sans fournir la cause dans la consigne. Remplacer une répétition guidée si nécessaire, pour ne pas allonger mécaniquement le module.

### Module 8 - faire un choix

Structure cohérente : comparaison, choix exclusif, indentation, message commun, puis saisie. Les tests sous le seuil, au seuil et au-dessus et le changement autonome de seuil sont pertinents. Ne pas ajouter elif ici.

Proposition : enregistrer choix.py puis créer choix_saisie.py pour la variante interactive. Indiquer clairement où insérer les deux lignes de saisie et quelle ligne elles remplacent, en gardant le modèle à valeur fixe. Aucun besoin de recopier une seconde solution complète dans la page.

## Conclusion de la revue 5 à 8

Progression cohérente, pas de refonte du parcours ni de nouveau module nécessaire. Les corrections approuvées ont allégé le socle du module 6, amélioré la lisibilité et l'évaluation autonome du module 7, et harmonisé préparation et conservation des fichiers.

## Modules 9 et 10 - revue et corrections appliquées

Les propositions ci-dessous sont appliquées : variantes conservées dans des fichiers distincts et copie interactive issue du premier modèle ; prédiction de l'ordre incorrect avant l'explication réservée à l'indice ; renommage d'une destination jusque dans le rappel de else, avec un nouvel essai inconnu. Guides et tests alignés, sans nouveau module ni compétence.

Vérification après application : 9 tests Python et 6 vues navigateur ciblées réussis (deux modules sur ordinateur et mobile, deux guides). Les tests ne remplacent pas la recette réelle dans Thonny.

### Module 9 - plusieurs possibilités

Points solides : ordre des tests, première condition vraie, comparaison aux if indépendants, frontières, variation autonome des seuils et bonus à quatrième issue. Le cours évite de présenter l'ordre décroissant comme une règle universelle. Les notions nécessaires sont enseignées avant usage.

Deux ajustements proposés :

- Prévoir des fichiers nommés pour la chaîne, l'ordre incorrect et les if indépendants, puis une copie distincte pour la saisie. Actuellement un seul possibilites.py est annoncé, puis l'élève doit comparer les variantes et retrouver le premier modèle ; leur conservation n'est pas suffisamment guidée. Garder les IDs d'activités et éviter de changer le nombre de modules.
- Dans l'exemple mal ordonné, la consigne demande de prédire mais donne aussitôt le résultat et sa cause dans la même phrase. Laisser d'abord prévoir et tester, puis expliquer ; réserver l'aide explicite à l'indice déjà disponible. Le principe de première condition vraie reste enseigné dans la première leçon.

### Module 10 - aventure à choix

Projet bien calibré : une scène seulement, trois lieux, égalité textuelle exacte, entrée inconnue, pas de normalisation, boucle ou imbrication cachée. Le passage guidé à une route puis projet personnel et tests de toutes les issues assure une progression réelle. La compétence conversion n'est pas validée par ce projet textuel.

Correction proposée : lors du renommage d'une destination, demander de mettre à jour le mot dans la question, dans la comparaison et dans tout rappel des choix affiché par else. La consigne actuelle ne mentionne que les deux premiers ; un élève peut donc réussir la route mais conserver un message d'aide périmé. Tester une entrée inconnue après renommage en plus du nouveau mot, de l'ancien et des autres destinations. Aligner guide et tests sur cette consigne explicite.

## Conclusion et prochaine validation

Les dix modules ont maintenant été revus par lots et toutes les corrections validées sont appliquées. Pas de refonte ni de notion supplémentaire nécessaire. Effectuer ensuite le checkpoint transversal des transitions, critères et reprises avant de poursuivre les boucles. La recette réelle dans Thonny et l'observation avec des élèves restent à faire.

## Checkpoint transversal des modules 1 à 10

Relecture du socle, des activités autonomes, critères, diagnostics d'entrée et orientations. Le contrôle porte sur la cohérence du parcours écrit, pas sur son efficacité observée en cours. Aucun contenu de boucle ajouté et aucune correction de cours appliquée à cette étape.

### Passages entre modules

| Passage | Acquis réutilisés et contrôle |
| --- | --- |
| Thonny → affichage | Création, sauvegarde et relance vérifiées par accueil.py ; pas d'expérience Python préalable requise. |
| Affichage → variables | Ordre et texte enseignés ; présentation personnelle et inversion préparent la lecture séquentielle des affectations. |
| Variables → saisie | Nom, valeur et réutilisation vérifiés dans personnage.py ; input et la virgule de print sont expliqués dans le module d'arrivée. |
| Saisie → conversation | Une question autonome précède trois questions ajoutées progressivement. Les variables distinctes ont déjà été travaillées ; le bonus à deux questions n'est pas obligatoire. |
| Conversation → calculs | Les réponses sont conservées et réutilisées ; nombre/texte, addition et int sont ensuite enseignés, pas présupposés. |
| Calculs → erreurs | Addition et conversion suffisent ; la soustraction est expliquée localement. Les opérations supplémentaires et int(input(...)) restent facultatifs. |
| Erreurs → conditions | Diagnostic et nouveau test sont réutilisés ; comparaison, booléens, deux-points et indentation sont expliqués avant la décision autonome. |
| Conditions → elif | Deux branches et frontière testées avant plusieurs issues ; ordre et exclusion sont travaillés avec modèles distincts puis seuil modifié. |
| Elif → aventure | Chaîne exclusive réinvestie ; égalité textuelle exacte expliquée dans le projet. Le bonus de comparaison textuelle du module 8 n'est pas un prérequis caché. |

### Autonomie, critères et reprises

- Chaque module possède une activité autonome dans le socle et un guide pointant vers elle. Les créations personnelles, prédictions, modifications et nouveaux tests distinguent reproduction et transfert ; ouvrir un indice peut aider mais ne prouve pas l'autonomie.
- Les projets 5 et 10 réinvestissent plusieurs notions sans publier une solution complète. Le projet 10 textuel ne valide ni les calculs ni la conversion numérique : ces compétences restent évaluées dans les modules 6 à 9.
- Les critères demandent des preuves observables. Les aides au clavier, aux fichiers ou à la lecture doivent rester distinguées de l'aide au raisonnement ; aucune compétence n'est attribuée automatiquement.
- Les reprises renvoient au module courant ou à un module antérieur, jamais à un contenu futur ni à un bonus obligatoire. Les fichiers des essais sont conservés, avec des copies nommées pour les variantes importantes.
- Les erreurs de saisie sont annoncées sans prétendre être gérées. Aucune boucle, fonction, imbrication, normalisation ou gestion d'exception n'est nécessaire pour terminer les dix modules.

### Deux ajustements mineurs appliqués après validation

1. Dans Nombres et calculs, renommer le lien « Revoir nombre, texte et opérations » en « Revoir nombre, texte et addition », pour refléter le socle allégé.
2. Dans Comprendre et corriger une erreur, « Reprendre les trois diagnostics » pointe vers guide, qui traite NameError et SyntaxError seulement. Renommer ce lien en « Revoir noms et syntaxe » et ajouter une reprise vers conversion, intitulée « Revoir une saisie non convertible ». La reprise existante vers le module 6 conserve son utilité pour le format entier.

Les deux ajustements ci-dessus sont désormais intégrés aux données et couverts par le test du checkpoint. La [spécification du lot 4](specification-python-lot-4.md) décrit les modules 11 à 13, sans les publier ni ajouter de compétences futures au catalogue.

### Conclusion et suite

Vérification technique : 40 tests Python et pédagogie réussis, dont un nouveau contrôle des neuf transitions, des reprises non futures et des activités autonomes dans le socle. Pas de nouvelle campagne navigateur : aucune page ni donnée de cours modifiée pendant ce checkpoint.

Pas de rupture pédagogique majeure identifiée dans le parcours écrit. Le checkpoint ne garantit ni l'autonomie de tout élève ni les manipulations réelles dans Thonny. Les deux ajustements de reprises sont limités à l'orientation, sans refonte du programme.

Suite recommandée : relire la spécification du lot 4 avant réalisation. Commencer par une répétition à nombre connu avant une répétition conditionnelle ; prévoir arrêt, bornes et mise à jour de la variable pour éviter les boucles infinies. Avant les activités numériques, reprendre brièvement un calcul et une conversion plutôt que supposer que l'aventure textuelle les a validés. Ne pas ajouter simultanément hasard, listes et fonctions à ce lot.

La recette dans Thonny reste distincte : fichiers enregistrés et rouverts, réponse à input, interruption/redémarrage et absence de dépendance à l'ancien état de console. Elle peut être faite sur les deux projets et les variantes numériques ; l'observation avec des élèves reste également nécessaire.

## Lot 4 - revue de spécification et réalisation

La revue des modules 11 à 13 a demandé quatre ajustements, validés puis appliqués : montrer range(1, 1) avant le transfert sans passage ; ajouter une modification autonome de borne numérique dans while ; compter les réussites avant d'ajouter le score, sans troisième compteur obligatoire ; ne pas exiger while ni conversion dans le socle textuel du module 13.

Les modules, guides, reprises et compétences distinctes sont intégrés conformément à la [spécification ajustée](specification-python-lot-4.md). Le if dans for est enseigné avant l'accumulation conditionnelle. Les modèles sans actualisation sont des diagnostics de lecture, pas des boucles infinies à lancer. Le bonus avec while possède son prérequis propre, sans l'imposer au score central.

Vérifications : 41 tests Python/pédagogie et 13 vues navigateur ciblées réussis. Le parcours compte désormais 13 modules sur les 20 du socle prévu. Aucun changement de la DA, de l'application professeur ou du suivi privé. La recette réelle dans Thonny et l'observation avec les élèves restent distinctes. Suite conseillée : relire pédagogiquement le lot réalisé, puis préparer hasard/import et le projet nombre mystère ; ne pas ajouter listes et fonctions dans le même lot.

### Revue des modules 11 à 13 réalisés

Progression et retrait des aides cohérents : les bornes sont enseignées avant le transfert for ; while actualise sa condition et possède un transfert numérique ; le score distingue réussites et points, après enseignement du if dans for. Aucun besoin de refonte.

Deux corrections validées et appliquées : rouvrir repetitions.py et rétablir range(3) avant de déplacer Fin, pour ne pas rester sur un essai sans passage ; reformuler la question du guide de score en « Après deux réussites à 3 points, que valent le compteur et le score ? ». Les assertions ciblées protègent ces consignes.

La [spécification du lot 5](specification-python-lot-5.md) est préparée, non implémentée et en attente de revue. Elle prévoit le hasard après un test fixe, un secret conservé entre essais, != expliqué et un compteur incluant la première proposition. Le parcours reste à treize modules.

## Lot 5 - revue de spécification et réalisation

La revue a validé le principe avec trois ajustements : annoncer le risque du nom random.py dès le premier fichier ; expliciter le déplacement de Trouvé hors de la boucle lors de la transformation du choix fixe ; laisser l'élève choisir les propositions inférieure et supérieure dans ses tests autonomes. Les trois ajustements sont appliqués à la spécification, aux deux modules et aux guides.

Le hasard distingue bornes de randint/range et nombre d'appels/résultats distincts. Le projet enseigne != localement, garde le secret fixe pendant les essais, compte la première proposition et annonce la limite de conversion sans la cacher derrière while. Un secret fixe dans une copie permet de tester les routes avant de retrouver la version aléatoire.

42 tests Python/pédagogie et 10 vues navigateur ciblées réussis. Le parcours compte 15 modules sur 20 prévus et 13 compétences évaluables manuellement. Ces contrôles ne remplacent pas une revue pédagogique du lot réalisé ni la recette dans Thonny. Suite : revue du lot 5, puis préparation listes et texte. Aucun autre module lancé automatiquement.

### Revue des modules 14 et 15 réalisés

Relecture du cours, des activités guidées et autonomes, des critères, des reprises et des guides. Aucun ajustement nécessaire identifié dans le parcours écrit : les bornes et répétitions possibles sont explicites ; conserver un tirage précède les tirages renouvelés ; le projet commence par des tests fixes avant un secret aléatoire conservé pendant la partie. Le compteur inclut la première proposition et la proposition gagnante. != est enseigné localement, la saisie est actualisée dans while et Trouvé reste après la boucle.

Les tests autonomes demandent des choix réels de l'élève, puis une modification et de nouveaux essais. Les entrées non convertibles sont annoncées comme une limite, pas présentées comme automatiquement prises en charge. Aucun bonus ni fonction future n'est un prérequis caché. Cette revue ne remplace pas la recette dans Thonny ni l'observation en cours.

La [spécification du lot 6](specification-python-lot-6.md) est préparée, non implémentée : listes et parcours direct des valeurs au module 16 ; caractères et transformations du texte au module 17. Elle distingue l'ajout qui modifie une liste du résultat d'une transformation textuelle à conserver. Les cas vides et indices hors limites sont prévus sans introduire la gestion d'exception. Prochaine étape : revue de cette spécification avant réalisation. Le catalogue reste à 15 modules et 13 compétences ; aucune nouvelle campagne de tests du site, puisque les cours et l'interface n'ont pas changé.

## Lot 6 - revue de spécification et réalisation

Deux ajustements validés et appliqués : limiter les créations de fichiers pendant la découverte en réutilisant les essais pour le guidé ; expliciter normalisee = sans_bords dans mon_mot_casse.py, sans supprimer la variable ni prétendre à une comparaison entièrement exacte. La question annonce la nouvelle règle et strip reste présent.

Les modules 16 et 17, leurs guides et les transitions sont intégrés conformément à la spécification ajustée. Les listes distinguent longueur, indice et valeur parcourue ; append est expliqué avant usage. Le texte distingue transformation et mutation, puis comparaison personnelle et changement de règle. Vide et IndexError sont traités explicitement sans gestion d'exception cachée. Les activités autonomes demandent des valeurs et tests personnels, puis une modification.

43 tests Python/pédagogie et 9 vues navigateur ciblées réussis ; capture mobile texte inspectée. Le catalogue compte 17 modules sur 20 et 15 compétences évaluables manuellement. Pas de changement de DA ou de suivi privé. Suite conseillée : revue des deux modules réalisés, puis préparation des fonctions. La recette dans Thonny et l'observation en cours restent à faire.
