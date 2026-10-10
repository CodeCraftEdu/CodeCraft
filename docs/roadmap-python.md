# Python — roadmap adaptative et premier lot

La [cartographie Python de référence](cartographie-python.md) est validée : environ 20 modules débutants existants, 20 intermédiaires et 20 confirmés, puis spécialisations et professionnalisation. Elle fixe la direction sans publier de modules futurs ni imposer de calendrier.

La DA low-poly est désormais appliquée à l’interface élève via `student-lowpoly.css` ; le sélecteur et l’aperçu exploratoires ont été retirés. Les notes d’essais ci-dessous restent l’historique des choix visuels. La référence actuelle est [la direction visuelle](direction-visuelle.md).

## Décisions

Parcours générique pour un débutant complet, sans prérequis Scratch, Web ou mathématiques avancées. Thonny sur ordinateur est l’environnement principal ; installation accompagnée si nécessaire. CodeCraft reste un support statique, pas un interpréteur Python. Aucun compte ou package supplémentaire requis pour le premier lot.

Les modules sont uniques et pourront être référencés par plusieurs parcours. Aucun calendrier, niveau d’âge obligatoire ou nombre fixe de séances. Les critères distinguent reproduction, compréhension et transfert ; les compétences restent validées manuellement, jamais par l’ouverture d’une page ou une case cochée.

## Repères visuels et rédactionnels à conserver

Schémas sobres : libellés courts, sans répéter les explications du cours à l’intérieur du dessin. Les notes sous les schémas doivent apporter une astuce ou une information utile, pas rappeler qu’il ne s’agit pas d’une capture ou d’un éditeur interactif. Fusionner les encarts d’introduction redondants ; `prerequisitesInContent` permet de présenter ces repères directement dans un bloc du module sans ajouter un second encart automatique. Conserver les données de prérequis.

Employer un ton neutre adapté aux débutants de tous âges, sans formulations inutilement enfantines. Utiliser un tiret simple `-` dans les titres et séparateurs rédigés, plutôt qu’un tiret long.

Ne pas doubler les libellés français des menus ou contrôles par leur traduction anglaise dans les cours ou schémas. Conserver naturellement les noms réels des instructions Python, comme print et input, ainsi que les raccourcis propres aux systèmes.

Essai visuel limité à `python-thonny` (`presentation: workshop`) : premier fichier en trois actions avec le code et son résultat à proximité, indices compacts, orientations en deux choix (Consolider et Continuer). L’exercice bonus reste au-dessus, sans carte redondante dans les orientations élèves ; sa référence reste disponible au guide professeur. `actionSteps` référence les paragraphes existants par index pour conserver toutes les explications sans les dupliquer. Les guides et les autres modules gardent leur présentation actuelle. Le choix Continuer remplace le bouton suivant redondant lorsque la destination est identique.

## Contenus du premier lot

Gemmes : petits accents en coin de carte, sommet plat et facettes originales en CSS, avec une face supérieure contrastée pour le relief. Aucun libellé ni niveau annoncé à ajouter. La variable `--gem-hue` permet de varier les couleurs ultérieurement ; aucune signification de difficulté ou d’avancement n’est encore attribuée. Ces décorations ne représentent jamais une compétence acquise ni une progression calculée.

Exploration de carte de module : un aperçu sous le schéma reprend les vraies données d’Afficher des messages et conserve le contexte du parcours dans son lien. Il n’est visible qu’en Aventure low-poly et disparaît en revenant aux autres variantes. Deux gemmes décoratives originales en CSS, masquées aux lecteurs d’écran, accompagnent l’aperçu et la carte Continuer ; aucune récompense ni acquisition automatique. Aventure low-poly est maintenant la variante affichée au chargement. Les pages de parcours restent inchangées.

Essai de direction artistique réversible : `visual-trial.css` contient exclusivement les surcharges du schéma et de la carte Continuer. Sur `python-thonny`, le sélecteur propose « Blocs actuel / Aventure low-poly / Blocs renforcés ». Les classes `visual-trial--adventure` et `visual-trial--blocks` sont exclusives, sans modifier les données ni l’URL. Le dernier essai (blocs renforcés) est affiché au chargement. Aucun choix n’est persisté. Les styles de référence restent intacts dans `pedagogy.css` ; aucune généralisation n’est validée pour l’instant.

Le schéma du module Thonny est désormais un composant HTML/CSS pilote : `codeDiagram` décrit le nom du fichier, les fragments de code, le résultat et une astuce. Le rendu utilise uniquement du texte échappé et deux panneaux séparés par un espace discret. Aucun titre supplémentaire au-dessus du schéma. Le repère Exécuter (triangle vert et texte, sans cadre de bouton) figure dans la barre de l’éditeur, à côté du fichier ; aucune flèche ni commande intermédiaire. Il reste limité à ce module jusqu’à validation visuelle ; aucune dépendance ou exécution de code n’est ajoutée.

| Module | Type | Compétence travaillée |
| --- | --- | --- |
| Premiers pas avec Thonny (`python-thonny`) | lesson | `python.workspace` |
| Afficher des messages (`python-affichage`) | lesson | `python.output` |
| Variables et valeurs (`python-variables`) | lesson | `python.variables` |
| Poser une question (`python-saisie`) | lesson | `python.input` |
| Une conversation interactive (`python-conversation`) | project | Réinvestissement des quatre compétences |

Domaine `python`, parcours `python-debutants`. Chaque module possède cours, exercices, compréhension, consolidation, bonus et guide professeur. Le schéma éditeur/console est un composant HTML/CSS local original. Les exemples fonctionnent dans un processus Python propre ; deux exemples explicitement marqués comme incorrects servent au dépannage. Le projet ne fournit pas de solution complète et n’utilise ni calcul, condition, boucle, fonction ou donnée personnelle.

La revue a explicité l’enregistrement avant fermeture, les guillemets droits, le redémarrage de la console, la réponse à input et les éléments séparés par une virgule dans print. L’aide au clavier ou aux fichiers reste distincte de la compréhension Python.

Routes élèves : `index.html#module/<id>?parcours=python-debutants`. Accès direct sans contexte : `index.html#module/<id>`. Guides : `prof.html#guide/<id>`. Le lien Thonny ouvre le site officiel, pas l’application locale. Les quatre compétences sont proposées automatiquement au suivi manuel existant, sans modifier le format privé ni ajouter un mapping externe.

## Deuxième lot réalisé

La [spécification du lot 2](specification-python-lot-2.md) a été revue avant réalisation. Trois modules originaux et leurs guides prolongent le parcours existant, sans changement de schéma ni validation automatique :

| Module | Compétences travaillées |
| --- | --- |
| Nombres et calculs (`python-calculs`) | `python.numbers`, `python.conversion` |
| Comprendre et corriger une erreur (`python-erreurs`) | `python.debugging` |
| Faire un choix (`python-conditions`) | `python.conditions` |

Les calculs fixes précèdent la conversion de la réponse. Les entrées numériques attendent un entier ; le modèle ne protège pas des mauvaises saisies. Le diagnostic distingue exception et résultat faux. Le choix reste limité à if/else avec tests en dessous, au seuil et au-dessus. Aucun elif, boucle, fonction ni gestion d'exception cachée. Chaque activité conserve les fichiers précédents et propose un transfert avec explication et modification.

Le parcours compte désormais huit modules publiés et huit compétences évaluables manuellement. L'essai réel dans Thonny reste nécessaire.

## Troisième lot réalisé

La [spécification du lot 3](specification-python-lot-3.md) couvre les modules 9 et 10 : Plusieurs possibilités (`python-elif`, compétence `python.branches`) et Une aventure à choix (`python-aventure`, projet de réinvestissement). Les guides, reprises et bonus sont intégrés au parcours existant. Une chaîne exclusive est comparée aux if indépendants ; le projet utilise une égalité textuelle exacte, sans boucle ni condition imbriquée. Le parcours compte désormais dix modules et neuf compétences évaluables manuellement.

## Quatrième lot réalisé

La [spécification du lot 4](specification-python-lot-4.md) est ajustée après revue et réalisée : Répéter un nombre de fois (`python-for`), Répéter tant que (`python-while`), Compter et calculer un score (`python-compteurs`). Les trois guides, reprises et compétences distinctes sont intégrés. Le parcours compte treize modules et douze compétences évaluables manuellement. Le score central n'exige ni while ni conversion ; sa variante avec continuation reste facultative.

## Cinquième lot réalisé

La [spécification du lot 5](specification-python-lot-5.md) est revue, ajustée et réalisée : Tirer un nombre au hasard (`python-hasard`), puis Trouver le nombre mystère (`python-nombre-mystere`). Secret fixe pour les tests, tirage unique par partie, != expliqué localement et compteur incluant la première proposition. Les deux guides, reprises et transitions sont intégrés ; le catalogue compte quinze modules et treize compétences Python évaluables manuellement. Aucun nouveau style ni changement du suivi privé.

## Sixième lot réalisé

La [spécification du lot 6](specification-python-lot-6.md) est revue, ajustée et réalisée : Regrouper des valeurs dans une liste (`python-listes`), puis Explorer et préparer du texte (`python-texte`). Les activités réutilisent les fichiers de découverte ; les variantes importantes sont conservées dans des copies. Le transfert sans lower conserve explicitement la variable comparée et strip. Les deux guides et compétences sont intégrés : dix-sept modules et quinze compétences Python évaluables manuellement. 43 tests Python/pédagogie et 9 vues navigateur ciblées réussis.

## Septième lot réalisé

La [spécification du lot 7](specification-python-lot-7.md) est revue, ajustée et implémentée : Définir et appeler une fonction (`python-fonctions`), Renvoyer un résultat (`python-retour`), Mon quiz personnalisable (`python-quiz`). Deux paramètres sont introduits avant le quiz ; affichage et résultat, noms locaux et total extérieur sont distingués. Le projet réutilise une seule fonction pour trois questions textuelles, sans structure de données nouvelle ni solution complète publiée.

Le socle prévu compte maintenant vingt modules et dix-sept compétences évaluables manuellement, avec leurs guides et transitions. Checkpoint technique du 7 octobre 2026 : 125 tests unitaires sur 125 et 161 vues navigateur passent, avec les vingt leçons Python, leurs guides et les non-régressions Web/Scratch. Les flux professeur passent également. Les attentes obsolètes sont corrigées : styles historiques de l'archive figée (sans modifier l'archive), trois cartes d'accueil et navigation Thonny avec ou sans contexte de parcours. Aucun commit. La recette dans Thonny et l'observation avec élèves restent à faire.

## Approfondissements proposés - non implémentés

Les vingt modules du socle commun sont implémentés. Ne pas publier de nouvelles extensions avant une recette du parcours dans Thonny et une revue manuelle des dernières leçons. Web Avancés reste de côté, avec son point de reprise dans la roadmap générale.

Le débogage commence dès les premiers modules ; son approfondissement n’est pas un prérequis caché. Avant de travailler les conversions, préciser les entrées attendues. Enseigner la gestion complète des mauvaises saisies ensuite, sans cacher try/except dans les premiers modèles.

Approfondissement proposé : dictionnaires → listes de dictionnaires → erreurs de saisie ciblées → lecture de fichiers → écriture de fichiers → projet qui conserve ses données. Les fonctions et listes précèdent le quiz ; lecture et écriture précèdent la sauvegarde de données.

Branche graphique facultative proposée : premiers dessins turtle → variables dans les dessins → motifs après les boucles → fonctions graphiques après les fonctions → projet personnel. Vérifier Tk sur les postes avant turtle. Jeux, maths, données et interfaces restent des directions ultérieures, pas des modules vides publiés. Pygame, objets et récursion ne sont pas obligatoires pour débuter.

## Sources et méthode

Les contenus du premier lot sont originaux. Les programmes internes d’organismes ne sont pas publiés ou copiés. Futurecoder sert de référence pour les aides et la progression ; Helsinki pour contrôler la couverture ; Raspberry Pi pour le retrait des aides et la créativité ; Python for Everybody pour les explications complémentaires. Toute future reprise de texte ou de code externe exige de vérifier la licence de la ressource exacte. Ne pas réutiliser les anciens liens Trinket, service fermé.

Références techniques : [Thonny](https://thonny.org/), [print](https://docs.python.org/fr/3/library/functions.html#print), [input](https://docs.python.org/fr/3/library/functions.html#input).

## Vérifications reproductibles

Les actions à effectuer par l'utilisateur sont regroupées dans [Vérifications manuelles en attente](verifications-manuelles-en-attente.md). Elles sont mises de côté à sa demande, à rappeler lorsqu'il demandera la liste ; ce report ne vaut pas validation.

La [revue pédagogique](revue-pedagogique-python.md) couvre les dix premiers modules : toutes les corrections validées sont appliquées. Le checkpoint transversal des transitions, critères et reprises est effectué : pas de rupture majeure identifiée et deux ajustements mineurs d'orientation appliqués. La spécification du lot 4 est revue, ajustée et implémentée ; la recette réelle dans Thonny reste à faire.

`node --test tests/python.test.cjs tests/python-lot7.test.cjs tests/pedagogy.test.cjs` vérifie les références, prérequis, critères, sorties Python, erreurs intentionnelles et l’absence de progression automatique. Python doit être disponible, ou son exécutable indiqué dans `PYTHON_PATH`.

`node tests/python-browser.cjs` contrôle Chrome headless : accueil, domaines, parcours, vingt modules Python, vingt guides, lien direct, précédent/suivant, illustration et débordement mobile. Un argument filtre les vues par fragments séparés par `|` pour les contrôles ciblés. Les captures sont temporaires ; aucun fichier privé n’est ouvert. `CHROME_PATH` peut préciser l’exécutable.

L’essai réel dans Thonny reste à effectuer : enregistrer/rouvrir un fichier, répondre dans la console et utiliser Stop/Restart. Les tests en ligne de commande ne valident pas les manipulations de l’application ni l’efficacité pédagogique en situation.
