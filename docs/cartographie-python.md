# Python - cartographie de référence validée

Décision utilisateur du 7 octobre 2026 : verrouiller la cartographie discutée, du débutant au confirmé, puis vers les spécialisations et la professionnalisation.

Cette carte fixe la direction et les enveloppes de modules, pas les spécifications détaillées ni un calendrier. Un module n'est pas une séance ; les projets sont comptés comme modules mais peuvent demander plusieurs passages. Les intitulés et découpages futurs seront revus pédagogiquement avant implémentation. Aucun module vide n'est ajouté au catalogue.

## 1. Volumes et état

| Palier | Modules supplémentaires | Total cumulé | État |
| --- | ---: | ---: | --- |
| Débutant | 20 | 20 | Implémenté et contrôlé techniquement ; recette manuelle en attente |
| Intermédiaire | Environ 20 | Environ 40 | Cartographié, non spécifié et non implémenté |
| Confirmé | Environ 20 | Environ 60 | Cartographié, non spécifié et non implémenté |
| Une spécialisation | Environ 10 à 15 | Environ 70 à 75 | Direction choisie selon les besoins |
| Professionnalisation | Environ 15 à 25 | Environ 85 à 100 avec une spécialisation | Orientation ultérieure, sans équivalence professionnelle automatique |

Cible de référence : environ 60 modules de tronc commun, puis 70 à 75 pour un parcours incluant une spécialisation. Le catalogue pourrait représenter environ 100 à 130 modules avec plusieurs branches et mutualisation ; ce chiffre est une enveloppe de planification, pas l'engagement de réaliser toutes les branches. La professionnalisation est une extension distincte, non incluse dans cette enveloppe de base.

## 2. Débutant - modules existants 1 à 20

| Modules | Bloc | Projet jalon |
| --- | --- | --- |
| 1 à 5 | Thonny, affichage, variables, saisie | Conversation interactive |
| 6 à 10 | Nombres, conversion, débogage, conditions et branches | Aventure à choix |
| 11 à 15 | Boucles, compteurs et hasard | Nombre mystère |
| 16 à 20 | Listes, texte, fonctions et résultats | Quiz personnalisable |

Niveau visé : comprendre, modifier et construire de petits programmes interactifs en console, avec des consignes et des aides accessibles. La combinaison autonome des notions doit encore être réinvestie ; terminer le quiz ne valide pas automatiquement toutes les compétences précédentes.

## 3. Intermédiaire - enveloppe 21 à 40

| Modules indicatifs | Bloc | Contenus envisagés |
| --- | --- | --- |
| 21 à 25 | Collections et données structurées | Modification des listes, indices et parcours, dictionnaires, listes de dictionnaires, projet de collection |
| 26 à 30 | Programmes robustes | Vérification des entrées, conversions incorrectes, exceptions ciblées, nouvelle saisie, projet fiable |
| 31 à 35 | Fichiers et persistance | Chemins, lecture, écriture, JSON, projet qui retrouve ses données |
| 36 à 40 | Organisation d'un programme | Décomposition, fonctions à responsabilité claire, séparation saisie/calcul/affichage, plusieurs fichiers et imports, projet intégrateur |

Niveau visé : réaliser un petit projet depuis un cahier des charges limité, consulter la documentation, diagnostiquer les erreurs courantes et conserver des données entre deux exécutions. Projet de sortie possible : collection avec recherche, modification, erreurs prévues et sauvegarde.

## 4. Confirmé - enveloppe 41 à 60

| Modules indicatifs | Bloc | Contenus envisagés |
| --- | --- | --- |
| 41 à 45 | Algorithmique et structures | Recherche, tri simple, ensembles et appartenance, coût des traitements, comparaison de solutions |
| 46 à 50 | Tests et qualité | Cas limites, assertions, tests automatisés, non-régression, refactorisation |
| 51 à 55 | Modélisation et objets | Classes, instances, méthodes, composition, comparaison avec fonctions et dictionnaires |
| 56 à 60 | Projet maintenable | Environnements et dépendances, historique de versions, diagnostic et journalisation, documentation, projet final évolutif |

Niveau visé : autonomie sur de petits et moyens projets Python, choix techniques expliqués, code testé, organisé et évolutif. Les classes sont enseignées pour leur utilité, sans imposer une solution objet à chaque projet. Héritage complexe, décorateurs et programmation asynchrone ne sont pas des passages obligatoires de ce socle.

Ce niveau est confirmé sur ce périmètre, pas une équivalence avec un développeur professionnel expérimenté.

## 5. Spécialisations - environ 10 à 15 modules par branche

| Branche | Aboutissement visé |
| --- | --- |
| Maths et algorithmique | Concevoir, tracer et justifier des algorithmes mathématiques |
| Données et visualisation | Charger, nettoyer, analyser et représenter des données |
| Automatisation | Traiter des fichiers et tâches répétitives avec précautions |
| Jeux | Construire un jeu avec événements, états, collisions et règles |
| Interfaces et applications | Construire une application graphique avec sauvegarde |
| Web côté serveur | Construire une petite application avec requêtes, données et interface Web |

Les modules communs sont réutilisés, jamais dupliqués pour chaque branche. L'accès dépend des prérequis réels, pas d'une obligation de terminer les 60 modules : dessin et maths peuvent notamment commencer plus tôt. La branche Jeux Python ne rend pas Python obligatoire pour un futur parcours Godot/GDScript.

## 6. Professionnalisation, puis expérience réelle

Enveloppe ultérieure : environ 15 à 25 modules accompagnant quelques projets longs, et non une succession d'exercices isolés.

- Reprendre un dépôt existant et transformer une demande en critères vérifiables.
- Collaborer avec Git, branches, propositions de modification et revues de code.
- Tester l'intégration de composants et automatiser les contrôles.
- Employer bases de données et services externes selon la spécialité.
- Gérer configuration, secrets, erreurs, journaux et sécurité de base.
- Déployer, observer le fonctionnement et revenir à une version précédente.
- Corriger un incident sans casser les usages ou perdre les données.
- Documenter, livrer et transmettre le projet.

Objectif : préparer à des responsabilités de niveau junior dans une spécialité. L'expérience professionnelle ne s'obtient pas par un nombre de modules : elle nécessite utilisateurs réels, demandes changeantes, collaboration, incidents et maintenance dans la durée. Ne pas présenter un dernier niveau « expert » comme automatiquement débloqué.

## 7. Règles de progression et prochaine étape

Le passage entre niveaux s'appuie sur un projet réalisé, expliqué et modifié avec une aide réduite, jamais sur des pages ouvertes ou des cases cochées. Il n'impose ni âge ni durée fixe.

Prochain palier Python à spécifier lorsque demandé : collections, dictionnaires, robustesse et persistance, en commençant par les collections. Les vérifications manuelles du socle restent consignées et reportées à la demande de l'utilisateur ; leur report ne vaut pas validation.

État détaillé : [roadmap Python](roadmap-python.md). Recette différée : [vérifications manuelles en attente](verifications-manuelles-en-attente.md).
