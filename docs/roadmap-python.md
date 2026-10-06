# Python — roadmap adaptative et premier lot

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

## Suite proposée — non implémentée

Socle commun, modules 6 à 20 : nombres et calculs → comprendre et corriger une erreur → faire un choix → plusieurs possibilités → projet aventure à choix → for/range → while → compteurs et scores → hasard/import → projet nombre mystère → listes → texte → fonctions et paramètres → return et variables locales → projet quiz personnalisable.

Le débogage commence dès les premiers modules ; son approfondissement n’est pas un prérequis caché. Avant de travailler les conversions, préciser les entrées attendues. Enseigner la gestion complète des mauvaises saisies ensuite, sans cacher try/except dans les premiers modèles.

Approfondissement proposé : dictionnaires → listes de dictionnaires → erreurs de saisie ciblées → lecture de fichiers → écriture de fichiers → projet qui conserve ses données. Les fonctions et listes précèdent le quiz ; lecture et écriture précèdent la sauvegarde de données.

Branche graphique facultative proposée : premiers dessins turtle → variables dans les dessins → motifs après les boucles → fonctions graphiques après les fonctions → projet personnel. Vérifier Tk sur les postes avant turtle. Jeux, maths, données et interfaces restent des directions ultérieures, pas des modules vides publiés. Pygame, objets et récursion ne sont pas obligatoires pour débuter.

## Sources et méthode

Les contenus du premier lot sont originaux. Les programmes internes d’organismes ne sont pas publiés ou copiés. Futurecoder sert de référence pour les aides et la progression ; Helsinki pour contrôler la couverture ; Raspberry Pi pour le retrait des aides et la créativité ; Python for Everybody pour les explications complémentaires. Toute future reprise de texte ou de code externe exige de vérifier la licence de la ressource exacte. Ne pas réutiliser les anciens liens Trinket, service fermé.

Références techniques : [Thonny](https://thonny.org/), [print](https://docs.python.org/fr/3/library/functions.html#print), [input](https://docs.python.org/fr/3/library/functions.html#input).

## Vérifications reproductibles

`node --test tests/python.test.cjs tests/pedagogy.test.cjs` vérifie les références, prérequis, critères, sorties Python, erreurs intentionnelles et l’absence de progression automatique. Python doit être disponible, ou son exécutable indiqué dans `PYTHON_PATH`.

`node tests/python-browser.cjs` contrôle Chrome headless : accueil, domaine, parcours, cinq modules, cinq guides, lien direct, précédent/suivant, illustration et débordement mobile. Les captures sont temporaires ; aucun fichier privé n’est ouvert. `CHROME_PATH` peut préciser l’exécutable.

L’essai réel dans Thonny reste à effectuer : enregistrer/rouvrir un fichier, répondre dans la console et utiliser Stop/Restart. Les tests en ligne de commande ne valident pas les manipulations de l’application ni l’efficacité pédagogique en situation.
