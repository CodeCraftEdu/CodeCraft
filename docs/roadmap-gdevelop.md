# GDevelop — roadmap après Scratch, référence stabilisée v1 du 8 octobre 2026

Décision : **GDevelop est la suite principale de Scratch dans le domaine Jeu vidéo de CodeCraft**, sans Python préalable ni passage obligatoire vers Godot.

Cette version remplace les 24 modules de tronc commun. Elle tient compte de la [revue pédagogique](revue-pedagogique-gdevelop.md), des ressources officielles et des témoignages communautaires consultés. Ces témoignages éclairent les choix ; ils ne démontrent ni un ordre optimal ni une efficacité auprès de tous les enfants.

**État réel :** GD01, GD02 et GD03 sont intégrés et ajustés avec leurs guides. [GD04 et son guide](specification-gdevelop-gd04.md) sont implémentés après revue/corrections ; le parcours commence par GD01 → GD04 → GD02 → GD03. Le kit et les identifiants de suivi initiaux sont conservés. Les autres modules restent planifiés. Les repères visuels de l’étape 1 sont intégrés sur le parcours et ses quatre leçons. Les 135 tests unitaires et 19 vues navigateur GDevelop ciblées passent ; aucun essai moteur ou en classe n'est revendiqué.

**Statut de planification : stabilisé après application des six corrections de la revue pédagogique.** Cette version fixe les compétences, l'ordre du socle, les étapes de projet, les périmètres des approfondissements et les dépendances nécessaires. Stabilisé ne signifie pas éprouvé en classe. Les exemples, consignes et modalités de regroupement seront précisés par lot ; toute modification de compétence, de dépendance ou de découpage doit avoir un motif documenté, une revue et une validation avant mise à jour de la référence. Ne pas rouvrir l'architecture à chaque rédaction.

## 1. Architecture : créer tôt, approfondir selon le besoin

L'objectif est un petit jeu que l'élève comprend, adapte, corrige et fait jouer, pas une visite complète de l'éditeur. Un module n'est ni une séance ni une durée imposée.

| Ensemble | Taille prévue | Finalité |
| --- | --- | --- |
| Socle « Mon premier jeu » | 10 modules | Une collecte vue du dessus, une victoire et une nouvelle partie |
| Cycle « Mon jeu personnel » | 4 modules réutilisables | Choisir une idée bornée, prototyper, tester et partager localement |
| Bibliothèque d'approfondissements | 19 modules | Choisir les mécaniques utiles, sans tout suivre dans l'ordre |
| Branches de genre | 16 modules indicatifs | Plateformes, aventure, isométrique, tir ou puzzle |

**33 modules de base et d'approfondissement sont cartographiés, mais seulement 14 constituent le chemin recommandé socle + premier projet personnel.** Les 19 autres ne forment pas un deuxième tronc obligatoire. Toutes branches produites, le catalogue pourrait atteindre 49 modules ; ce n'est ni le parcours à imposer à chaque élève ni une production déjà autorisée.

Personnage pilotable au deuxième module du chemin ; une petite zone peut être explorée et vidée après GD06. GD07, GD08 et GD25 ajoutent compteur, victoire et reprise, puis GD09 un premier jeu complet. Nom, texte, placement et thème peuvent se personnaliser plus tôt.

Après GD09, choisir un projet personnel simple, une extension utile ou une branche accessible. Caméra, menu, vies, aléatoire et patrouille ne sont pas des obligations. GD16 est un deuxième projet possible, pas un péage avant GD21.

## 2. Entrée depuis Scratch

Les 14 modules Scratch restent disponibles ; présence au catalogue et cases cochées ne prouvent pas la maîtrise. Ne pas exiger toute la série, tous les bonus, les clones ou les blocs personnalisés.

Sur une réalisation Scratch, observer : retrouver/sauvegarder son projet ; expliquer déclenchement/actions ; modifier un déplacement ; expliquer contact/fin ; remettre un compteur à zéro ; comparer attendu/observé puis retester. Une difficulté appelle une reprise ciblée, pas un examen éliminatoire ou un nouveau Diagnostic public.

Reprises possibles : `scratch-decouverte`, `scratch-actions`, `scratch-pilotage`, `scratch-reactions`, `scratch-variables`, `scratch-fin-partie`, `scratch-debogage`. Distinguer aide souris, lecture ou fichiers et aide sur la logique. Aucun prérequis anglais, dessin ou géométrie avancée.

| Repère Scratch | Reconstruction dans GDevelop, au moment utile |
| --- | --- |
| Sprite | Objet défini et exemplaires/instances placés ou créés |
| Coordonnées | Repère initial en haut à gauche, Y vers le bas dans notre scène à caméra fixe |
| Drapeau vert | Aperçu et début de scène ; initialisations distinctes des règles répétées |
| Piles et boucles | Conditions/actions retestées pendant le jeu, pas une suite exécutée une seule fois |
| Contact | Conditions sélectionnant les instances concernées par les actions |
| Variable commune/personnage | Scène d'abord ; instance puis globale selon le besoin |
| Clones | Instances présentes dès le placement ; création pendant le jeu enseignée séparément |
| Mes blocs/messages | Pas d'équivalence automatique avec groupes, sous-événements ou fonctions |

Tableau destiné au professeur, pas introduction théorique à mémoriser.

## 3. Environnement et ressources

- Référence proposée : application de bureau, interface française, clavier/souris, projet local et ressources dans un dossier identifié. Relever version et libellés lors de la recette, pas depuis une capture ancienne.
- Installation, extraction et préparation du cadre sont accompagnables. Garder une réouverture probante ; multiplier les copies n'est pas le cœur du premier cours.
- Variante navigateur uniquement après recette propre d'import, sauvegarde et réouverture ; ne pas présumer les mêmes gestes qu'en bureau.
- Aucun compte, abonnement, achat d'asset, IA, cloud ou publication publique requis. Si le workflow choisi en exige un, trouver une alternative ou revoir ce choix avant rédaction définitive.
- Kit original/licencié : personnage et jetons au départ ; obstacles, sortie, animations et sons quand nécessaires. Dimensions/origines cohérentes, licence et attribution disponibles. Pas de ressources copiées de jeux commerciaux.
- Le kit existant est disponible ; aucun projet moteur prêt à importer n'est annoncé comme testé. Prévoir exemple minimal, solution professeur et points de reprise utiles, sans dizaines de copies quasi identiques.
- Un projet fourni doit être essayé dans GDevelop. Séparer démonstration, exercice partiel et solution ; ne pas dissimuler une mécanique future dans le départ.
- CodeCraft reste le support de cours, pas un moteur intégré. Un lien logiciel n'ouvre pas automatiquement le dossier de l'élève.

## 4. Socle « Mon premier jeu » — 10 modules

Fil rouge : petite pièce vue du dessus, quelques objets à récupérer, mission à accomplir. Une scène, caméra fixe ; ni combat, physique, inventaire, isométrique ou danger obligatoires. Thèmes espace, jardin, aventure et robot interchangeables.

Ordre : **GD01 → GD04 → GD02 → GD03 → GD05 → GD06 → GD07 → GD08 → GD25 → GD09**. Les GDxx sont des repères stables, pas les rangs à afficher à l'élève. Les routes existantes sont conservées.

| Repère | Titre proposé | Prérequis conseillés | Résultat et limite |
| --- | --- | --- | --- |
| GD01 | Mon premier projet GDevelop | Repères Scratch | Placer, prévisualiser, enregistrer et retrouver un personnage ; pas visite exhaustive |
| GD04 | Déplacer mon personnage | GD01 | Comportement vu du dessus, vitesse expliquée ; aucun événement préalable requis |
| GD02 | Placer mes personnages et mes objets | GD01 ; GD04 dans ce chemin | Un objet Jeton, plusieurs exemplaires : position individuelle/image commune, puis X/Y |
| GD03 | Quand ceci arrive, fais cela | GD02, conditions Scratch | Indice visible pendant maintien et caché sinon ; paire complète, pas compteur |
| GD05 | Construire des murs qui bloquent | GD04, GD03 | Contact puis séparation ; tester côtés/coins des murs simples |
| GD06 | Ramasser un objet, pas tous | GD02, GD03, GD05 | Supprimer le seul jeton touché, garder les autres ; exemplaires espacés |
| GD07 | Compter mes trouvailles | GD06, variable Scratch | Initialisation de début de scène, gain puis affichage ; comparer l'ordre de deux règles sur une trace simple |
| GD08 | Réussir ma mission | GD07 | Seuil/message → état de partie → arrêt ; enseigner explicitement comparaison et conditions combinées |
| GD25 | Recommencer une partie proprement | GD08 | Commande distincte du déplacement, score/objets réinitialisés ; deux reprises |
| GD09 | Mon premier jeu GDevelop | GD06–GD08 et GD25 | Modification fonctionnelle choisie, expliquée et testée ; retour joueur/correction, aucune notion inédite |

### Étapes et points de pause

Ces regroupements sont des repères de travail, pas un nombre fixe de séances ni une validation automatique de compétences.

| Étape | Modules dans l’ordre élève | Point de repérage |
| --- | --- | --- |
| 1 — Prendre les commandes | GD01 → GD04 → GD02 → GD03 | Ma scène explorable : pilotage, plusieurs instances, indice clavier et modification expliquée |
| 2 — Explorer et ramasser | GD05 → GD06 | Mini-projet : une pièce avec murs et objets à récupérer, sans compteur ni victoire |
| 3 — Accomplir une mission | GD07 → GD08 | Mini-projet : collecte comptée, objectif atteignable et arrêt à la victoire |
| 4 — Terminer mon premier jeu | GD25 → GD09 | Rejouer, faire essayer et corriger un premier jeu complet |
| 5 — Créer mon jeu personnel | GD21 → GD22 → GD23 → GD24 | Concevoir, tester et présenter un projet personnel |

**Affichage actuel :** seule l’étape 1 possède des leçons disponibles et est rendue comme groupe de cartes. Le parcours indique l’étape suivante en texte non cliquable. Dans chaque leçon, un repère compact donne l’étape et la position du module, sans remplacer le fil d’Ariane complet. La dernière leçon ajoute une courte proposition de pause. Aucun pourcentage, badge d’acquis, verrouillage ou nouvel enregistrement de progression n’est ajouté. Les autres parcours ne sont pas modifiés.

**Projets de fin d’étape :** un réinvestissement dans la dernière leçon, sans module systématiquement ajouté, notion nouvelle ni solution complète à recopier. Le mini-projet de l’étape 1 remplace l’ancienne activité autonome de GD03 ; ses identifiants sont conservés. L’élève réutilise son projet, montre le fonctionnement, explique une règle, prévoit et teste une modification puis vérifie la réouverture. Cinq critères observables sont affichés ; le guide distingue les aides de manipulation et de raisonnement. Les cases d’activité ne prouvent pas la maîtrise. Reprendre un point avec aide reste possible ; le bonus n’est pas obligatoire. Les mini-projets des étapes 2 et 3 restent à spécifier avec leurs leçons. GD09 et GD21–GD24 constituent déjà les projets des étapes 4 et 5 : pas de projet supplémentaire redondant.

### Vigilances avant spécification

- GD01 : action puis aperçu immédiat ; fichiers accompagnables, original utilisable, source/images conservées après réouverture.
- GD04 : comportement fourni versus règle écrite ; pas d'animation directionnelle ou formule par image.
- GD02 : contraste « un emplacement / toutes les images » avant un petit transfert X/Y ; pas évaluation de géométrie.
- GD03 : Message déjà visible rend l'ancien premier événement Afficher non discriminant. Montrer la paire complète, prévoir repos/appui/relâchement, essayer, puis retirer Masquer sur une copie et restaurer. Faire du message un indice de la mission ; pas troisième règle ou variable pour contourner le défaut.
- GD05 : déplacement ne signifie pas murs automatiquement solides ; vitesses raisonnables, côtés/coins, aucun moteur physique supplémentaire.
- GD06 : expliquer la sélection ; suppression empêchant collecte continue, pas « Déclencher une fois » comme remède universel.
- GD07 : donnée/initialisation au début de scène → gain/suppression → affichage ; expression expliquée, zéro non répété à chaque image. Introduire l'ordre de lecture de haut en bas par une trace guidée gain/affichage, puis comparer leur inversion dans le projet testé. Faire montrer quand la valeur est lue, sans exiger une explication du moteur complet. Réutiliser ce repère en GD08 ; pas de module supplémentaire. Objets superposés hors socle, traitement multiple en GD28.
- GD08 : trois sous-objectifs successifs, chacun essayé avant le suivant : (1) comparer le score au seuil et afficher la victoire ; (2) initialiser puis modifier un état simple `jeu`/`gagne` ; (3) arrêter le comportement de déplacement et conditionner les actions de collecte. Enseigner « contact ET partie en cours » comme deux conditions devant être vraies ensemble, avec prévision avant/après victoire, sans OR ni sous-événement requis. L'arrêt du comportement est expliqué, pas donné comme action magique. Un message seul n'arrête pas le jeu. Réinvestir l'ordre de GD07 ; défaite et priorité des issues en GD33.
- GD25 : expliquer réception de commande ; vérifier maintien, relâchement et reprise. Pas garde-fou opaque dépendant de GD11/GD26 ou de sous-événements futurs. Geste exact à choisir/essayer dans le moteur.
- GD09 : seuil atteignable, départ sûr, chemins praticables, commandes indiquées et deux parties consécutives. Demander au moins une modification fonctionnelle choisie par l'élève, avec prévision, explication et retest : par exemple adapter le nombre de jetons et le seuil pour une nouvelle mission, puis vérifier que la victoire reste atteignable et qu'aucune ancienne condition ne la contredit. Ce n'est pas un nouveau système de règles à apprendre. Thème, couleur et nom seuls ne constituent pas la preuve de transfert. Corriger un retour joueur, pas ajouter des fonctions par défaut.

GD08 et GD25 restent deux périmètres d'apprentissage, mais se poursuivent naturellement dans le même projet. Un module ciblé peut être court ; ne pas ajouter introductions, exercices identiques ou sauvegardes répétées uniquement pour remplir une page. Les réunir dans un atelier ne supprime ni leurs objectifs ni les tests de victoire et de reprise.

**Sortie observable :** expliquer collecte/victoire, modifier commande ou seuil, prévoir/retester, retrouver la source et recommencer. Une jolie scène ou une copie fonctionnelle ne suffit pas. Ce socle permet un projet personnel simple, pas tous les genres.

## 5. Cycle de projet personnel — 4 modules réutilisables

Accessible après GD09 sans terminer la bibliothèque. Les extensions sont étudiées avant emploi ; une idée trop grande est réduite, pas soutenue par une solution entière non expliquée.

| Repère | Titre | Entrée | Résultat |
| --- | --- | --- | --- |
| GD21 | Imaginer mon petit jeu | Premier jeu expliqué ; enquête simple possible | Une mécanique principale, une zone, objectif/fin/reprise, croquis, « maintenant / plus tard » |
| GD22 | Construire une version jouable | GD21 + notions choisies | Boucle complète, au moins un choix fonctionnel expliqué ; ajouts un par un, copie stable et tests |
| GD23 | Faire jouer, corriger, améliorer | GD22 | Observer sans souffler, choisir une correction, retester fins/reprises et fonctions existantes |
| GD24 | Préparer une version à partager | GD23, GD01 | Source réouvrable et export web local testé hors aperçu ; aide technique autorisée |

GD21 formalise une démarche amorcée en GD09. GD23 formalise des essais entre élèves déjà possibles plus tôt. GD24 distingue source/export, contrôle licences et ressources ; ne pas promettre un double-clic HTML fonctionnant partout. Prévoir un service local testé/accompagné. Publication publique facultative, encadrée et consentie ; aucun compte, Steam/mobile obligatoire.

GD21–GD23 demandent un choix de fonctionnement, sa justification et sa vérification, pas uniquement un changement d'habillage du fil rouge. Au début, un remaniement borné de règles connues suffit ; ne pas imposer un genre nouveau pour prouver l'autonomie. Distinguer variante accompagnée et décision autonome, puis noter quelle aide a été reçue.

Niveau visé : autonomie progressive sur un petit jeu 2D borné et ses règles connues. Ni niveau professionnel, ni autonomie sur RPG complet, ni maîtrise de JavaScript. Aide aux fichiers/export relevée séparément de la compréhension.

## 6. Bibliothèque d'approfondissements — 19 modules

Pas un ordre linéaire : respecter les dépendances nécessaires ci-dessous ; les spécifications les traduisent en acquis observables sans en ajouter implicitement. Animations, audio, menus et caméra facultatifs. Lisibilité, commentaires et tests existent tôt sans attendre leur approfondissement.

### Trois repères à ne pas confondre

- **Acquis nécessaires** : concepts utilisés par l'activité ; les repères GD identifient où ils sont enseignés. Leur maîtrise observée peut venir d'un autre projet, sans obligation de cases cochées.
- **Chemin conseillé** : ordre pour construire le fil rouge, pas dépendance conceptuelle universelle. Par exemple, GD04 avant GD02 dans notre chemin ne rend pas le mouvement nécessaire pour comprendre plusieurs jetons placés.
- **Outil d'aide** : support de recherche ou de diagnostic, non porte d'entrée. Le débogueur de GD15 peut aider GD31, mais ne conditionne pas la compréhension d'un sous-événement.

Chaque spécification distingue ces trois repères. Les dépendances sont fixées par ce que l'élève doit réellement utiliser, pas par le numéro du module, sa disponibilité ou l'envie de faire parcourir davantage de pages.

| Repère | Titre proposé | Entrée conseillée | Problème principal, limites et essais |
| --- | --- | --- | --- |
| GD10 | Animer les réactions de mon personnage | GD03, GD04 | Deux animations fournies déplacement/arrêt ; pas relancées continuellement, pas huit directions |
| GD32 | Ajouter un son utile | GD06 ; GD11 si contact persistant | Son à une action distincte, pas chaque image ; jeu compréhensible sans audio |
| GD11 | Une action, pas cent répétitions | GD03, GD07 | Maintien versus action unique, réarmement testé ; ni timer ni création multiple |
| GD26 | Faire agir le jeu après un délai | GD03, GD11 | Chronomètre de scène : signal retardé puis répétition/remise à zéro en étapes distinctes ; nouvelle partie |
| GD12 | Faire apparaître un objet pendant le jeu | GD02, GD03, GD11 | Création sur commande à position fixe puis suppression ; nouvel exemplaire identifiable, quantité bornée |
| GD27 | Varier les apparitions | GD12, GD26, X/Y | Position tirée à la création puis apparitions espacées ; zone sûre/nettoyage, pas génération de niveau |
| GD28 | Compter chaque objet touché | GD06, GD07 ; GD12 seulement si création en jeu | Sélection multiple puis Pour chaque sur deux jetons déjà placés ; chacun contribue, pas création dynamique imposée |
| GD13 | Des données pour chaque personnage | GD02, GD07 | Deux instances, valeurs indépendantes ; pas encore vies/dégâts/protection |
| GD33 | Perdre et choisir l'issue de la partie | GD08, GD25, GD05 | Danger immobile, défaite/blocage/reprise ; tester victoire et danger simultanés |
| GD29 | Perdre une vie, puis être protégé | GD13, GD26, GD33 | Dégât → protection d'un personnage → délais indépendants de deux instances ; portée du chronomètre enseignée ici |
| GD14 | Faire bouger un danger | GD03–GD05, GD13 | Patrouille sur une ligne, direction propre au danger, vitesse par seconde, limites tolérant dépassement ; pas pathfinding |
| GD15 | Chercher et réparer une panne | GD03, GD07 ; notions de la panne | Hypothèse, inspection, un changement/retest ; pas notion inconnue sous forme de panne |
| GD16 | Mon deuxième défi | GD09 + extensions choisies | Mini-jeu avec une extension principale ; ni toutes les extensions ni vies obligatoires, difficulté comparée |
| GD17 | Passer du menu au jeu | GD03, GD25 | Deux scènes, commencer/rejouer, score local ; touche connue, clic enseigné si choisi |
| GD30 | Conserver une donnée entre deux scènes | GD17, GD07 | Scène versus globale, persistance et nouvelle partie ; globale ≠ sauvegardée sur disque |
| GD18 | Garder le joueur et le score visibles | GD04, GD07 | Caméra puis calque interface en étapes distinctes ; monde/écran, pas zoom animé |
| GD19 | Dessiner un niveau qui se joue bien | GD05, GD08 ; GD18 si grande zone | Passages, départ sûr/lisibilité ; test sans souffler chemin, pas éditeur de tuiles imposé |
| GD20 | Ranger mes événements pour les comprendre | GD03, premier jeu expliqué | Commentaires/groupes sur copie, fonctionnement conservé ; groupe ≠ fonction |
| GD31 | Partager une condition entre plusieurs règles | GD20, GD06 ; ordre de GD07 | Sous-événements, ordre/héritage de sélection ; GD15 outil d'aide facultatif, pas prérequis |

GD29 reconstruit explicitement le passage du chronomètre de scène de GD26 au chronomètre d'objet/instance : nommer son propriétaire, expliquer son initialisation et sa remise à zéro. Essayer d'abord un personnage (contact prolongé, sortie/retour avant/après délai, zéro vie, reprise), puis deux instances dans une expérience guidée pour vérifier que protéger l'une ne protège pas l'autre. Cette dernière comparaison n'est ni un mode multijoueur ni un deuxième jeu à réaliser ; aucune portée nouvelle n'est supposée acquise par GD26 seul.

### Chemins exemples

- Collecte à apparitions : GD11 → GD26 et GD12 → GD27 ; GD28 si contacts multiples ; GD16 pour réunir une boucle comprise.
- Défi à danger : GD13 → GD14 et GD33 ; GD26 → GD29 seulement si vies/protection utiles. Une défaite immédiate suffit autrement.
- Exploration : GD19 ; GD18 pour grande zone ; GD17 puis GD30 si scènes multiples et donnée persistante nécessaires.
- Présentation : GD10 et/ou GD32, sans empêcher un jeu sans animation/son de réussir.

Débogage transversal dès GD01 : attendu/observé, cause possible, un changement et vérification. GD15 approfondit le débogueur, pas prérequis tardif artificiel de GD21. Conception de niveau simple dès GD05/GD09 ; GD19 approfondit.

## 7. Branches de genre — 16 modules indicatifs

Accessibles selon acquis, avant ou pendant le projet personnel. Réutiliser les briques communes, pas refaire fichiers/score/événements. Identifiants publics à fixer à la spécification ; pas pages vides.

| Branche | Modules spécifiques prévus | Entrée du premier module, acquis ajoutés en cours de branche et limites |
| --- | --- | --- |
| Plateformes — 4 | Comportement déplacement/saut ; plateformes/dangers ; animations sol/saut/chute ; mon niveau court | Départ : projet/aperçu GD01 et objets/instances GD02. Règles GD03 avant dangers, GD06 avant collecte, GD08/GD25 avant fin/reprise, GD33 si défaite, GD10 avant animations ou préparation équivalente. Enseigner le mouvement propre à la branche, pas supposer qu'il est GD04 |
| Aventure vue du dessus — 3 | Interagir avec un coffre ; clé et accès ; ma pièce d'aventure | Départ : GD02–GD04, GD11 pour l'interaction ponctuelle ; GD05 avant obstacles, GD06 avant clé collectée, GD07–GD08 avant mémorisation/comparaison d'un état, GD13 si données par coffre. Pas combat/inventaire/dialogue complexe imposé |
| Décor isométrique — 2 | Décor/profondeur ; adapter une pièce jouable | Aventure simple comprise, positions/instances/collisions ; rendu, pas nouvelle logique complète ni Diablo miniature |
| Tir arcade — 4 | Tir fixe ; projectiles/dégâts ciblés ; ennemis/apparitions simples ; mon défi arcade | Départ : GD02–GD03, GD11–GD12 ; GD04 si joueur mobile. GD26 avant cadence/apparitions temporisées, GD28 avant traitement de plusieurs cibles, GD13 avant données de cible, GD33 avant défaite, GD29 seulement si vies/protection. Nettoyage enseigné au tir fixe, pas visée libre/pathfinding |
| Puzzle interactif — 3 | Examiner une information ; mémoriser un indice ; mon puzzle court | Départ : GD02–GD03, GD11 si action ponctuelle ; clic/touche utile enseigné. GD07–GD08 avant mémoire/état, GD25 avant reprise ; plusieurs scènes seulement avec GD17 |

Séparer aventure et isométrique évite d'imposer un rendu à tous. Plateformes pertinent mais pas obligatoire parce que souvent conseillé. Aucun combat requis.

Les acquis des derniers modules d'une branche ne bloquent pas son début. Ils sont travaillés juste avant leur usage, via les modules communs ou une préparation équivalente explicitement revue, sans solution cachée. Le socle de collecte reste le chemin recommandé, pas une obligation pour un élève dont les acquis permettent une entrée différente. La recette et les critères de fin ne sont pas supprimés par ce raccourci.

Après ces projets, cartographie distincte possible : fonctions/paramètres, comportements personnalisés, structures de données, sauvegarde, outils de niveaux, pathfinding, performances et projets longs. Pas des modules supplémentaires déjà décidés. JavaScript/Godot selon les besoins.

## 8. Patron pédagogique

Conserver DA Jeu vidéo, fil d'Ariane complet, activités distinguées, essentiels visibles et voisins de parcours. Ni bouton Accueil redondant ni bloc de liens vers bonus déjà visible.

Cycle souple : **prévoir → essayer → expliquer → modifier/compléter → créer une variante proche**. Inspiration de la revue, pas protocole certifié ; pas cinq nouveaux encarts obligatoires.

1. Résultat concret, état initial explicite, projet à ouvrir et acquis utiles.
2. Petite règle complète conditions/actions/objets ciblés ou réglages d'un comportement ; prévision avant essai.
3. Expliquer pourquoi, pas seulement où cliquer. Captures à jour/schémas aux gestes difficiles ; pas dépendance à une vidéo rapide.
4. Exemple partiel puis mission proche avec moins d'instructions, sans mécanique inédite cachée.
5. Changement personnel, explication et retest ; varier le contexte sans changer toute la logique. En GD09 et au projet personnel, demander un changement de fonctionnement, pas seulement nom/couleur/image.
6. Indices gradués près des consignes ; bonus distinct/facultatif, sans prérequis caché.
7. Trois/quatre essentiels observables ; suivi manuel, jamais certification automatique.

Guide professeur : aide interface/fichiers versus logique, reproduction versus transfert ; questions/réponses, pannes, solutions, reprises et projets testés. Explication orale, pointage ou croquis admis, pas rapport long obligatoire.

« Apprendre en faisant » n'autorise pas à laisser le débutant trouver seul les menus. Inversement, reproduire des clics ne démontre pas la compréhension. Lire/prévoir/modifier/reconstruire une petite partie d'un exemple, pas rebaptiser un modèle complet.

## 9. Migration et production par petits lots

| Priorité | Périmètre | Condition avant suite |
| --- | --- | --- |
| P0 | GD01–GD03/guides ajustés ; GD04 revu et corrigé | Entrée, paire et mission encore à essayer dans le moteur/avec élèves |
| P1 | GD04/guide intégrés, nouvel ordre appliqué | Routes/prérequis/liens/tests alignés ; recette comportement et réglages encore à faire |
| P2 | GD05–GD06 | Côtés/coins des murs, seul exemplaire touché supprimé, collecte personnalisable |
| P3 | GD07–GD08 | Zéro/point unique, affichage expliqué, victoire bloquant réellement le jeu |
| P4 | GD25–GD09 | Deux reprises, seuil atteignable, retour joueur, modification fonctionnelle expliquée sans solution intégrale |
| P5 | GD21–GD24 et extensions nécessaires | Projet borné sans attendre bibliothèque ; export essayé séparément |
| P6 | Petits lots d'approfondissement/branche | Besoin identifié, dépendances disponibles, revue et recette |

Spécification → revue → implémentation autorisée → recette moteur + tests CodeCraft → corrections → essai professeur/élève quand disponible. La roadmap n'autorise ni installation, ni tous les lots, ni commit/push/déploiement. Tests site et captures ne prouvent pas le jeu moteur.

L'entrée est ajustée avant GD05–GD06 ; sa recette moteur reste nécessaire. Pilote : prévision, aide reçue, explication, variante/retest ; pas durée universelle ou âge minimum déduits de quelques observations.

### Compatibilité

- Conserver `gdevelop-projet`, `gdevelop-objets`, `gdevelop-evenements`, compétences et `gdevelop-debutants`. Aucun renommage/suppression de données de suivi.
- GD04 accessible après GD01 ; GD02/GD03 acceptent un personnage pilotable. Les reprises futures gardent le comportement expliqué, sans attribuer sa maîtrise à l'élève arrivé par accès direct.
- Aligner prérequis/navigation lors de migration, pas selon numéros GDxx ; ne pas relier page publiée et page absente.
- Scratch/Python/Web, formats privés, localStorage et données élève hors périmètre.
- [Vérifications en attente](verifications-manuelles-en-attente.md) conservées. Spécification originale du lot 1 = trace de l'implémenté, pas nouvelle consigne de généralisation.

## 10. Correspondance avec l'ancienne roadmap

GD01–GD24 restent des repères, même quand titre/périmètre futur évolue. GD01–GD04 ont des routes aujourd'hui ; le chemin commence par GD01 → GD04 → GD02 → GD03.

| Ancien ensemble | Nouvelle décision |
| --- | --- |
| 24 modules communs | Obligation supprimée : 10 socle + 4 projet, 19 approfondissements à choisir |
| Mouvement tardif | GD04 immédiatement après GD01 |
| GD08 victoire/défaite/reprise | GD08 victoire/arrêt ; nouveau GD25 reprise ; nouveau GD33 défaite/priorité |
| GD10 animation/son | GD10 animation ; nouveau GD32 audio |
| GD11 déclenchement/délai/répétition | GD11 ponctuel ; nouveau GD26 temps en étapes |
| GD12 création/aléatoire/sélection multiple | GD12 création fixe ; nouveaux GD27 variation, GD28 traitement par instance |
| GD13 données/vies/protection | GD13 données individuelles ; nouveau GD29 dégâts/protection |
| GD17 scènes/globales | GD17 transitions ; nouveau GD30 portée globale |
| GD20 organisation/sous-événements | GD20 commentaires/groupes ; nouveau GD31 conditions partagées/sélection |
| GD16 avant tout projet personnel | Conservé facultatif ; GD21–GD24 accessibles après GD09 |
| Aventure/isométrique ensemble | Aventure 3 ; isométrique 2 séparés |
| Débogage/conception tardifs | Pratiques tôt ; GD15/GD19 approfondissent |

Aucune notion essentielle supprimée pour raccourcir artificiellement. Empilements décomposés, obligations inutiles retirées, premier jeu simplifié. **9 ajouts GD25–GD33**, uniquement planifiés. Les corrections de la revue n'ajoutent aucun module : ordre des règles en GD07, conditions combinées en GD08, portée du chronomètre en GD29, prérequis allégés en GD28/GD31, accès progressif aux branches et transfert fonctionnel dans les projets.

### Politique de stabilisation

La v1 est la référence de production : conserver objectifs, ordre du socle, projets, branches et dépendances. Les 33 périmètres communs/approfondissements et les 16 périmètres de branches restent la cartographie de travail, pas un quota ni autant de séances. Un atelier peut réunir deux modules courts sans renommer les routes ou supprimer leurs critères ; GD08/GD25 restent notamment une continuité de jeu.

Une fusion, scission ou nouvelle dépendance n'est envisagée que pour une difficulté concrète de conception, de recette ou d'apprentissage. Consigner problème, preuve/contexte, proposition, impact sur acquis/navigation/suivi et décision validée, puis versionner la roadmap et aligner les documents. Un choix d'exemple ou de formulation dans le périmètre existant relève simplement de la revue du lot. Ne pas refondre le parcours ni gonfler le nombre de pages pour remplir le catalogue.

## 11. Sources et portée

### Témoignages consultés le 8 octobre 2026

- [Premiers pas, Reddit](https://www.reddit.com/r/gdevelop/comments/1na28bw/best_way_to_start_learning_gdevelop_for_2d_games/) : chaîne officielle/plateformes ; avis individuels dont un auteur présent aussi dans l'autre discussion, pas votes indépendants à additionner.
- [Valeur des tutoriels, Reddit](https://www.reddit.com/r/gdevelop/comments/1o2ekbm/are_gdevelop_tutorials_worth_it/) : officiel, Helper Wesley, Wishforge Games, Queue the Game Dev ; petits projets/expérimentation/compréhension plutôt que copie. Pas classement mesuré.
- [Tutoriel peu accessible, forum](https://forum.gdevelop.io/t/tutorial-not-beginner-friendly/72324) : étapes rapides, anciennes interfaces, notions nombreuses ; documents et exemples à modifier. Difficultés rapportées, fréquence non mesurée.

Inférence CodeCraft : jouer tôt, expliciter, retirer progressivement les aides, fil de projet. Ces avis ne valident ni nos 33 modules ni la supériorité de notre collecte. Ne pas copier un cursus ou importer un programme interne d'un autre organisme.

### Références officielles et pédagogiques

- [Academy](https://gdevelop.io/fr-fr/academy) : cours essentiel présenté en 15 leçons, tutoriels/exemples gratuits et payants ; aucun paiement requis chez nous. Présentation commerciale, pas preuve de niveau/durée ; nombre non directement comparable à notre granularité.
- [Plateformes](https://wiki.gdevelop.io/gdevelop5/tutorials/platformer/) et [vu du dessus communautaire](https://wiki.gdevelop.io/gdevelop5/tutorials/topdown-shooter/) : comparateurs, pas études d'efficacité.
- [Concepts](https://wiki.gdevelop.io/gdevelop5/tutorials/basic-game-making-concepts/), [sélection](https://wiki.gdevelop.io/gdevelop5/events/object-picking/), [variables](https://wiki.gdevelop.io/gdevelop5/all-features/variables/), [déplacement](https://wiki.gdevelop.io/gdevelop5/behaviors/topdown/), [déclenchement unique](https://wiki.gdevelop.io/gdevelop5/all-features/advanced-conditions/trigger-once/), [export local](https://wiki.gdevelop.io/gdevelop5/publishing/html5_game_in_a_local_folder/) : technique, libellés/projets à essayer sur version retenue.
- [Revue pédagogique](revue-pedagogique-gdevelop.md) : PRIMM, exemples travaillés, Creative Computing, observation sur réalisations et limites de transfert.

Avant lot prêt : version relevée, workflow réouvert, règles essayées au moteur, parties/reprises complètes, missions compréhensibles, aides relevées, tests site/écran/clavier. Ni JSON inventé, tests Node ou recherche Internet ne remplacent ces preuves.
