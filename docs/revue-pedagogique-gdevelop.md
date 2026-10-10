# Revue pédagogique documentée — GDevelop après Scratch

> Mise à jour du 8 octobre 2026 : la révision complète demandée après les recherches communautaires est appliquée dans la [roadmap actuelle](roadmap-gdevelop.md). Celle-ci remplace les propositions d'organisation GD01–GD24 ci-dessous ; la revue est conservée comme trace de l'audit initial. Les corrections de leçons et la migration du catalogue restent à réaliser. Aucun essai moteur ou élève ajouté.

> Seconde revue clôturée : les six corrections de la roadmap GD01–GD33 sont appliquées à la référence stabilisée v1, avec accord utilisateur. Voir la section 10. Stabilisation de planification seulement : les leçons implémentées restent inchangées, sans validation moteur ou classe supplémentaire.

> Suite appliquée : les trois leçons/guides initiales ont depuis été ajustées avec autorisation utilisateur. Voir l'addendum de la [spécification du lot](specification-gdevelop-lot-1.md). L'audit ci-dessous conserve l'état antérieur ; les corrections de contenu sont faites, GD04 et la migration d'ordre restent à préparer. Tests site réussis, moteur/classe non essayés.

Date : 8 octobre 2026. Périmètre : roadmap GD01–GD24, spécification du premier lot et trois leçons/guides actuellement intégrés dans `lesson-data.js`.

Statut : **revue documentaire réalisée ; corrections proposées, non appliquées aux leçons**. Revue faite par l'assistant à partir de sources externes, pas expertise indépendante commandée à un chercheur. Aucun essai dans GDevelop ni observation d'élève effectué pour cette revue. Aucun logiciel installé, compte créé ou commit réalisé.

## 1. Verdict

La direction est cohérente : petits jeux 2D, notions explicites, distinction objet/instance, modifications vérifiables, projets et suivi manuel. Il n'est pas nécessaire de recommencer toute la roadmap.

En revanche, le début **n'est pas encore suffisamment étayé pour devenir notre modèle définitif**. Il met beaucoup de manipulation et de lecture avant le premier contrôle du personnage ; l'exemple travaillé et le passage progressif à l'autonomie restent incomplets. Plusieurs modules futurs cumulent trop d'objectifs pour être présentés d'un seul bloc.

Recommandation : ajuster le lot d'entrée et sa méthode, avancer le déplacement dans l'ordre proposé, puis tester le workflow réel et observer un petit pilote avant de généraliser. Garder les 24 identifiants comme réserve de catalogue ; ne pas transformer ce nombre en obligation de parcours pour chaque élève.

## 2. Sources examinées et portée réelle

Les liens ci-dessous ont été consultés pour cette revue. Pas de copie de textes, de captures ou de projets tiers intégrée au site.

### S1 — Étude PRIMM, Sentance, Waite et Kallia, 2019

[Teaching computer programming with PRIMM: a sociocultural perspective](https://primmportal.com/wp-content/uploads/2020/10/teaching-computer-programming-with-primm-a-sociocultural-perspective.pdf), DOI 10.1080/08993408.2019.1608781. Étude primaire : 493 élèves de 11–14 ans, 13 établissements, comparaison avec un groupe témoin sur 8–12 semaines. Les auteurs rapportent de meilleurs résultats au post-test pour le groupe PRIMM. L'approche organise lecture/prédiction, exécution, investigation, modification et création, avec dialogue.

Limites à conserver : étude en Python textuel, non en GDevelop ; sélection des enseignants participants, instruments et groupe de comparaison imparfaitement contrôlés. Les auteurs signalent eux-mêmes des leçons trop chargées. Cela soutient un cadre d'enseignement à adapter, **pas la validité de nos 24 modules**, ni un résultat garanti chez des enfants plus jeunes, en individuel ou à distance.

### S2 — Principes de pédagogie informatique, Raspberry Pi Foundation

[Our computing pedagogy](https://www.raspberrypi.org/teach/pedagogy). Recommandations de l'organisme : lecture de programmes, compréhension, modélisation, supports progressivement retirés, projets, questionnement et variété. Ce sont des principes d'organisation, pas une étude comparative de l'ordre des fonctionnalités GDevelop.

### S3 — Exemples travaillés et retrait progressif des aides, NCCE/Raspberry Pi

[Using worked examples supports novices to develop their programming practice](https://static.raspberrypi.org/files/curriculum/quickreads/2-Pedagogy_Summary_Worked_Examples_V6_2023.pdf), synthèse pédagogique de deux pages avec références. Elle distingue démonstration du processus et solution à examiner ; propose exemples complets puis partiels, problèmes proches, sous-objectifs et information intégrée. Nous retenons le principe d'étayage, pas une règle universelle imposant un nombre exact d'exemples ou de clics.

### S4 — Creative Computing, Harvard Creative Computing Lab

[Curriculum à explorer](https://creativecomputing.gse.harvard.edu/guide/curriculum.html). Le guide articule exploration, création, réflexion, remix et activités de débogage récurrentes. Il invite à adapter le choix et l'ordre des activités. Référence de conception pour Scratch, non preuve d'efficacité d'une progression GDevelop particulière.

### S5 — Évaluer les pratiques sur les réalisations, Harvard/ScratchEd

[Computational Thinking — Assessing](https://scratched.gse.harvard.edu/ct/assessing.html). Le travail privilégie entretiens autour des réalisations, scénarios de modification/débogage et traces réflexives plutôt que la seule présence d'un bloc ou connaissance d'une définition. Applicable comme inspiration de nos observations ; pas de barème certifiant un niveau GDevelop.

### S6 — Tutoriel de plateformes, documentation GDevelop

[Platformer, partie 1](https://wiki.gdevelop.io/gdevelop5/tutorials/platformer/). Le départ fournit des ressources, prépare scène et aperçu puis sauvegarde ; la partie suivante rend le personnage jouable. Comparateur technique et éditorial, pas étude pédagogique chez des enfants. Ne pas reprendre tout son genre, ses ennemis ou ses fonctionnalités pour notre socle.

### S7 — Tutoriel vu du dessus hébergé dans la documentation GDevelop

[Top Down Shooter, partie 1](https://wiki.gdevelop.io/gdevelop5/tutorials/topdown-shooter/). Classé parmi les tutoriels communautaires dans l'index : ne pas le présenter comme une étude ou un cursus scolaire validé par l'éditeur. Sa première partie ajoute un comportement de déplacement et teste le contrôle dans l'aperçu. Nous comparons ce démarrage ; ni tir ni combat ne deviennent obligatoires.

**Ce que les sources ne permettent pas d'affirmer :** un âge minimal universel, une durée par module, une séquence optimale de 24 leçons, une supériorité mesurée de notre collecte sur une plateforme, ou une motivation garantie parce que le personnage bouge plus tôt. Les choix ci-dessous sont nos inférences de conception à éprouver.

## 3. Audit du premier lot réellement implémenté

Les comptes sont issus du catalogue actuel, pas d'une impression : GD01 comporte 7 paragraphes d'explication et 5 tâches ; GD02, 6 paragraphes et 6 tâches ; GD03, 7 paragraphes et 6 tâches. Environ 592, 586 et 662 mots respectivement en comptant préparation, paragraphes, consignes et indices. Le nombre de mots n'est ni un seuil d'échec ni un temps de cours ; il aide à localiser la charge et les répétitions.

### P1 — Le premier résultat reste peu interactif

GD01 place un pion ; GD02 le positionne et change son image ; GD03 fait afficher du texte. Le mouvement n'arrive qu'en GD04. Rien ne prouve que cet ordre est inefficace, mais le délai avant pilotage mérite un essai comparatif. S6/S7 montrent des départs donnant accès au personnage jouable plus tôt.

**Proposition :** conserver une entrée courte GD01, puis enseigner le comportement GD04 avant les exercices plus abstraits GD02/GD03. Il ne requiert pas nécessairement l'écriture d'un événement pour ses contrôles standards. Définir explicitement comportement fourni versus règle écrite. Ne pas ajouter secrètement un comportement non expliqué à GD01 ni prétendre qu'il est acquis par l'ouverture d'une démo.

### P1 — GD03 n'a pas une première expérience discriminante

Le texte Message est visible avant les événements. L'action Afficher de la seule première règle ne change donc rien lors de l'appui ; le texte reste aussi visible au repos. L'élève ne peut pas déduire de cet essai que sa condition fonctionne. C'est une faiblesse de notre exemple, pas un résultat observé dans le moteur.

**Proposition :** présenter d'abord la paire complète et son résultat repos/appui/relâchement ; faire prévoir et lire les deux lignes. L'expérience « retirer la règle Masquer » vient ensuite, sur une copie fonctionnelle : après un appui, le message persiste. Ne pas ajouter une troisième règle d'initialisation ou une variable pour contourner ce défaut du scénario d'enseignement.

### P1 — Les instructions précèdent trop l'investigation

Les blocs `exemple` sont surtout des suites de gestes décrits ; les tâches guidées reprennent ensuite ces gestes. Le professeur a des questions dans son guide, mais la page élève ne fait pas systématiquement examiner une règle disponible avant de demander sa construction. La modification autonome de GD03 reste proche de deux substitutions prescrites.

**Proposition :** montrer un exemple lisible, faire expliquer son résultat, fournir ensuite un exemple à compléter, puis une mission proche moins détaillée. Pour les événements, garder condition et action côte à côte avec les objets ciblés. Prévoir un projet exemple réellement essayé dans GDevelop avant de le distribuer ; ne pas fabriquer un JSON prétendument fonctionnel à partir de la documentation.

### P2 — La manipulation peut masquer la compréhension

GD01 concentre extraction du ZIP, dossiers, sauvegarde locale, scène, Sprite, animation/image, instance, aperçu et réouverture. Ces gestes ont leur utilité, mais certains peuvent être préparés/accompagnés par le professeur. GD02 exerce plusieurs placements chiffrés avant le changement partagé qui donne son sens à objet/instance.

**Proposition :** limiter chaque étape à un objectif fonctionnel visible, suivi immédiatement d'un essai. Garder une réouverture probante, alléger les répétitions de fermeture/réouverture et réserver la copie complète au bonus ou à la préparation professeur. Dans GD02, faire d'abord le contraste « un emplacement / tous les dessins », puis un seul petit transfert X/Y ; ne pas confondre compréhension et exactitude d'un carré aux coordonnées prescrites.

### P2 — Un fil rouge est nécessaire, pas une décoration supplémentaire

Le pion, les jetons et Bonjour! n'ont actuellement pas de mission commune explicite.

**Proposition :** « explore une petite pièce et récupère des objets » comme fil conducteur souple. Le message devient un indice ou un signal activable, les jetons les futurs objets à trouver. L'élève choisit un nom, un texte ou un arrangement ; pas de dessin obligatoire, d'inventaire, de combat ni de système de porte ajouté pour raconter cette mission.

### À conserver

Le kit local original ; l'absence de compte/publication obligatoire ; sauvegarde et ressources réellement contrôlées ; contraste image commune/position individuelle ; sens de Y expliqué ; maintien clavier distinct de transition ; prévisions et retests ; trois essentiels visibles ; aides graduées dans les guides ; aucune acquisition automatique. Les problèmes repérés n'annulent pas ces qualités.

## 4. Méthode de leçon proposée

Adaptation de PRIMM et des exemples travaillés, **pas reproduction certifiée d'un protocole expérimental**. Pas besoin d'ajouter cinq nouveaux encarts ou un menu à chaque page.

| Moment | Action élève | Travail professeur/support | Preuve à observer |
| --- | --- | --- | --- |
| Prévoir | Examiner un petit exemple et annoncer le résultat | Donner une règle lisible ou un état de projet testé, pas un écran rempli de menus | Prévision exprimée, même incorrecte |
| Essayer | Lancer et comparer à la prévision | Aider seulement au geste d'interface si nécessaire | Différence attendu/observé repérée |
| Comprendre | Montrer ce qui teste, ce qui agit et sur quoi | Poser des questions localisées ; modéliser son raisonnement, pas seulement ses clics | Explication sur la réalisation |
| Modifier/compléter | Changer une chose, puis compléter une petite partie manquante | Retirer progressivement des instructions ; varier sans mécanique nouvelle | Choix expliqué et re-test |
| Créer proche | Répondre à une mission avec les notions connues | Donner résultat et contraintes, pas tous les clics | Réalisation adaptée et vérifiée |

GD01 porte sur le workflow : ne pas forcer une lecture de « code » là où il n'y en a pas. Faire observer/prévoir la différence scène/aperçu et montrer le processus. Un comportement se lit par ses réglages et ses effets ; une feuille d'événements, par ses conditions/actions. « Créer » n'impose pas de repartir d'une page vide pour chaque notion.

### Exemple de scénario pour GD03 — sans changer la leçon aujourd'hui

1. Montrer la paire Espace maintenue → Afficher Message / condition inversée → Masquer Message. Demander repos, maintien, relâchement avant l'aperçu.
2. Essayer les trois états puis demander quelle ligne explique chacun. Répéter un appui pour distinguer maintien et nouveau clic.
3. Sur une copie, retirer Masquer, prévoir puis observer après un appui et un relâchement ; restaurer la règle et vérifier.
4. Donner un deuxième exemple partiel pour la touche E : l'élève choisit l'action manquante et explique l'opposition des deux conditions. Ne pas changer seulement une touche dans une paire incohérente non identifiée comme panne.
5. Mission proche : « choisis une touche inutilisée et un indice pour ton explorateur ; visible seulement pendant l'appui ». Demander test de l'ancienne et nouvelle commande, sans détailler tout le remplacement.

Le professeur peut reconstruire l'exemple accompagné avant qu'un projet testé soit disponible. Dans ce cas, l'aide de construction doit rester déclarée ; on ne présente pas cette reproduction comme le même niveau d'autonomie que le dernier transfert.

## 5. Audit de l'ensemble de la roadmap

État des modules futurs : conception seulement. Les appréciations suivantes portent sur leur spécification sommaire, pas sur des cours inexistants.

| Module | Avis et ajustement avant rédaction |
| --- | --- |
| GD01 — projet | Conserver ; réduire l'entrée aux gestes utiles et une réouverture probante. Mission visible, pas visite complète de l'éditeur. |
| GD02 — objets/instances | Conserver ; contraste individuel/commun avant placements scolaires détaillés. |
| GD03 — événements | Revoir l'exemple initial et le passage exemple complet → partiel → mission proche. |
| GD04 — déplacement | Avancer après GD01 dans l'ordre proposé ; faire comparer vitesse et contrôle, expliquer le comportement. |
| GD05 — murs | Conserver ; collision puis séparation comme deux sous-objectifs avec essais des côtés/coins. |
| GD06 — collecte | Conserver ; prévoir exactement quel jeton disparaît avant d'essayer, puis transférer à un quatrième exemplaire. |
| GD07 — score | Séparer création/initialisation de la donnée, modification au contact et texte d'affichage. Ne pas livrer une expression opaque. |
| GD08 — fins/reprise | Priorité de réduction de charge : victoire et blocage → reprise → défaite et priorité des issues. Pas tout simultanément. Un projet simple peut consolider la victoire avant ajout du danger. |
| GD09 — premier projet | Conserver ; choix du placement et d'une règle, aucune nouvelle mécanique obligatoire. Un prototype minimal jouable peut précéder ce jalon complet. |
| GD10 — réactions | Distinguer animation et son ; audio facultatif. Donner un exemple déjà fonctionnel avant les réglages. |
| GD11 — temps/déclenchement | Très chargé : différencier maintien/ponctuel, signal temporisé et répétition par remise à zéro. Ne pas introduire ces trois idées en une seule recette. |
| GD12 — apparitions | Très chargé : création fixe d'abord, aléatoire ensuite ; sélection multiple et Pour chaque comme expérience distincte. Tester le besoin avant d'imposer les quatre notions. |
| GD13 — vies | Variable d'instance et protection temporisée comme deux problèmes séparés ; deuxième personnage uniquement pour un contraste ciblé. |
| GD14 — danger mobile | Conserver ; exemple de patrouille et prévision aux limites. Pas d'IA ou de caméra nouvelle. |
| GD15 — débogage | Bon approfondissement ; conserver aussi une petite enquête dès les premiers modules. Ne pas attendre ce numéro pour apprendre à corriger. |
| GD16 — deuxième projet | Conserver le choix de mécaniques ; pas d'exigence d'utiliser tous GD10–GD14. |
| GD17 — menu/scènes | Une transition de scène d'abord ; persistance des données globales dans un second contraste. Pas de nouveau système d'interface obligatoire. |
| GD18 — caméra/interface | Extension selon besoin ; tester monde versus écran sur une scène déjà comprise. |
| GD19 — niveau | Conception simple dès le premier jeu ; ici approfondir lisibilité et passages, pas découvrir tardivement la conception. |
| GD20 — organisation | Commentaires tôt ; groupes puis sous-événements/selection en étapes séparées sur une copie. Une organisation esthétique ne prouve pas une abstraction comprise. |
| GD21 — idée de jeu | Démarche déjà amorcée dans les jalons ; garder comme préparation formelle d'un projet personnel borné. |
| GD22 — prototype | Conserver ; boucle minimale jouable avant enrichissements et décoration. |
| GD23 — test joueur | Premiers échanges dès GD09 ; ici formaliser observer → corriger → retester, avec un critère choisi. |
| GD24 — partage | Conserver avec assistance technique distincte de la logique ; export local testé, pas publication obligatoire. |

Les découpages supplémentaires éventuels restent à décider après écriture et pilote. Ne pas annoncer un nouveau total de modules parce qu'un titre a plusieurs sous-objectifs : un module n'est pas une séance, mais ce n'est pas non plus une raison de présenter tout d'un coup.

## 6. Ordre et structure recommandés — à valider

Pour le début : **GD01 → GD04 → GD02 → GD03 → GD05 → GD06 → GD07 → GD08 → GD09**. Identifiants conservés ; numéros utilisés ici comme repères de roadmap, pas rangs immuables. C'est une proposition de conception inspirée de S6/S7, non ordre scientifiquement établi.

Conséquences : prérequis de GD04 ramenés au projet/aperçu de GD01 ; suppression du besoin artificiel d'avoir déjà écrit des événements pour ajouter un comportement standard ; GD02/GD03 acceptent un personnage pilotable sans nouvelles exigences de logique ; tests, liens, guides et specification alignés au moment de l'application. Aucun changement d'ordre effectué dans le catalogue pour cette revue.

Garder ensuite une bibliothèque d'approfondissements GD10–GD20 à sélectionner selon le jeu, et le cycle de projet GD21–GD24 quand l'élève peut déjà expliquer un jeu court. Les bases du débogage restent transversales, même si GD15 formalise une enquête. Il n'est pas nécessaire d'imposer caméra, menu, vies et patrouille avant chaque projet personnel. La roadmap le suggère déjà par endroits, mais le libellé « 24 modules de tronc commun » risque de contredire cette souplesse : recommander « 24 modules de progression et d'approfondissement ».

Les branches de genre sont pertinentes après leurs prérequis propres. Ni Scratch complet, ni toutes les fonctionnalités GDevelop, ni un passage vers Godot ne deviennent une obligation.

## 7. Vérifier que l'élève apprend, pas seulement que le jeu fonctionne

Inspiration S5 : partir de la réalisation pour questionner, demander une modification et une correction. Aucun nouvel écran de certification ni données personnelles à ajouter.

| Aspect | Exemple d'observation | À ne pas confondre |
| --- | --- | --- |
| Manipulation | Retrouver la source et ses images ; relancer un aperçu | Aide de lecture d'un menu ≠ manque de logique |
| Compréhension | Montrer quelle règle explique un état observé | Définition récitée ≠ explication d'un jeu |
| Transfert | Changer un réglage ou une commande, prévoir et retester | Changement obtenu par copie ≠ adaptation expliquée |
| Débogage | Formuler une cause possible, modifier une chose et vérifier | Fonctionnement après intervention du professeur ≠ correction autonome |

Reprendre une notion connue après une autre activité, dans un contexte légèrement différent, sans imposer de nombre de séances. Autoriser explication orale, pointage ou croquis. L'élève n'a pas à rédiger un compte rendu long pour démontrer une règle simple. Les indices restent disponibles ; noter quelle aide a été utile.

## 8. Plan d'application et recette suivante

1. Faire valider les changements ci-dessus, en particulier l'ordre avec GD04 avancé. La demande de revue ne vaut pas autorisation de modifier toutes les leçons.
2. Ajuster GD01–GD03 et leurs guides : étapes courtes action/essai, exemple GD03 discriminant, complément partiel et mission cohérente. Mettre à jour spécification et tests sans toucher à Scratch/Python/Web.
3. Spécifier GD04 comme déplacement simple accessible après GD01, puis implémenter ce seul ajout autorisé, pas tous les lots suivants.
4. Recette sur un GDevelop réellement disponible : version et menus, import, sauvegarde/réouverture, comportement, conditions et inversion, ressource copiée. Fichiers exemples/reprises/solutions à distribuer seulement après leurs essais. L'installation reste une autorisation séparée, pas un effet de cette revue.
5. Petit pilote de classe/individuel, sans prétention statistique : observer premier résultat, aides d'interface, lecture de la règle, prévision, exemple partiel, modification et retest. Si plusieurs profils sont disponibles, comparer les besoins ; ne pas extrapoler à tous les enfants.
6. Après retour, stabiliser le patron de leçon puis spécifier GD05–GD06. Reprendre les risques de charge GD08/GD11/GD12 avant leur production.

Pour le pilote, le professeur note simplement : objectif de l'essai ; prévision de l'élève ; ce qu'il a montré/modifié ; aide reçue (interface, lecture ou logique) ; re-test ; difficulté à reprendre. Ne pas annoncer de temps cible ni fixer un seuil automatique à partir de quelques observations. Utiliser des copies de test et ne pas modifier le suivi réel pour cette revue.

### Conditions pour poursuivre sans se raconter que tout est validé

- Un exemple de règle se comporte comme prévu dans le vrai moteur, avec un état initial explicitement choisi.
- Chaque manipulation importante a une consigne praticable sur la version testée, ou une aide professeur clairement prévue.
- Une mission proche peut être réalisée et expliquée avec moins de consignes que l'exemple guidé.
- Les aides nécessaires et les difficultés sont consignées ; les pannes sont corrigées et re-testées.
- Le résultat en cours ne dépend pas de toutes les étapes futures ni d'un compte/publication.

## 9. Conclusion et traçabilité

### Décisions de roadmap prises après la recherche communautaire

- Les 24 étapes obligatoires sont remplacées par 10 de socle, 4 de projet et 19 approfondissements sélectionnables (33 périmètres, pas 33 obligations).
- GD04 suit GD01 ; la paire complète de GD03 précède l'expérience de retrait d'une règle.
- GD08 se limite à victoire/arrêt ; GD25 enseigne reprise, GD33 défaite et priorité des issues. Le premier jeu peut se terminer sans danger.
- Animation/audio, ponctuel/temps, création/aléatoire/traitement multiple, données/vies, scènes/globales et groupes/sous-événements sont séparés. GD25–GD33 sont seulement planifiés.
- Projet personnel accessible après GD09 ; GD16, caméra, menu, vies et patrouille restent selon le besoin. Aventure et isométrique deviennent deux branches distinctes.
- Les témoignages Reddit/forum et l'Academy, avec leurs liens et limites, sont consignés dans la roadmap. Ils ne constituent pas une validation en classe ni une preuve que 33 est un nombre optimal.

La méthode et les risques décrits par cette revue restent utiles. Ses anciens totaux, tableaux de regroupement et autorisations à demander sont historiques ; consulter le plan de migration actuel avant implémentation.

La revue renforce la méthode envisagée mais retire toute prétention à un parcours déjà éprouvé. Les changements de priorité sont : un démarrage pilotable plus tôt ; une paire d'événements observable ; un étayage réellement décroissant ; un fil de jeu ; des modules futurs moins empilés et un parcours modulable.

Les sources externes éclairent ces choix. Les leçons actuelles, les 24 rangs proposés et notre adaptation à GDevelop restent des productions CodeCraft à tester. Aucun test de catalogue, screenshot ou consultation d'article ne remplace une recette moteur et une observation d'apprentissage.

## 10. Seconde revue — corrections appliquées et référence v1 stabilisée

Périmètre : nouvelle roadmap, 10 modules de socle, 4 de projet et 19 approfondissements, branches comprises. Revue documentaire, sans essai moteur ou classe. Application et stabilisation demandées par l'utilisateur ; documents alignés, pas catalogue/leçons.

| Constat | Correction appliquée | Contrôle à la production |
| --- | --- | --- |
| GD08 cumule seuil, état, conditions et arrêt | Seuil/message → état → arrêt du comportement/collecte ; « contact ET jeu en cours » explicite | Prévision/essai à chaque étape, arrêt réel, explication des deux conditions |
| Ordre des règles insuffisamment enseigné | Trace gain/affichage et comparaison d'ordre en GD07, réemploi GD08 | Montrer quand la valeur change et est lue ; résultat dans le vrai moteur |
| Timer d'instance supposé connu après timer de scène | GD29 enseigne propriétaire, initialisation/remise à zéro ; un personnage puis deux protections indépendantes | Contact prolongé, retours avant/après délai, zéro/reprise ; pas protection commune accidentelle |
| Dépendances artificielles/branche entièrement exigée au départ | GD28 sans GD12 pour jetons placés ; GD31 sans GD15 obligatoire ; acquis nécessaires, chemin et aides distingués ; branches à dépendances progressives | Chaque activité emploie seulement des notions déjà étudiées ou explicitement enseignées |
| Morcellement possible | Modules courts admis, continuité de jeu GD08/GD25 et regroupement en atelier sans perte des critères | Pas remplissage de page ni répétition inutile |
| Habillage confondu avec transfert | Choix fonctionnel expliqué et testé en GD09/GD21–GD23 | Choix, prévision, effet, retest et aide reçue ; nom/couleur/image seuls insuffisants |

Références réexaminées : [concepts et ordre des événements GDevelop](https://wiki.gdevelop.io/gdevelop5/tutorials/basic-game-making-concepts/), [sélection d'instances](https://wiki.gdevelop.io/gdevelop5/events/object-picking/), [exemples travaillés NCCE](https://static.raspberrypi.org/files/curriculum/quickreads/2-Pedagogy_Summary_Worked_Examples_V6_2023.pdf), [principes Raspberry Pi](https://www.raspberrypi.org/teach/pedagogy). Elles éclairent technique/conception, pas une efficacité démontrée de ce parcours chez nos élèves.

**Décision : référence v1 stabilisée.** Compétences, ordre du socle, projets, branches et dépendances fixés pour la production. Exemples/consignes précisés par revue de lot. Toute fusion/scission ou nouvelle dépendance exige un motif concret, son impact et une décision validée/documentée ; pas de refonte systématique. Totaux inchangés : 33 + 16, aucun module ajouté pour ces corrections.

Prochaine action : corriger GD01–GD03/guides, spécifier GD04, puis implémentation autorisée et recette moteur/migration de navigation. Aucun lot ultérieur, installation ou commit déclenché par cette stabilisation.

## 11. Revue GD04 — corrections appliquées

Revue de la [spécification GD04](specification-gdevelop-gd04.md), puis application autorisée des quatre corrections. Revue documentaire uniquement : aucune preuve moteur ou classe. Les étapes de la section précédente sont historiques ; GD01–GD03 sont ajustés et GD04 est maintenant spécifié, revu et corrigé.

| Constat | Correction appliquée | Vérification restante |
| --- | --- | --- |
| Trop de paramètres avant le premier résultat jouable | Premier pilotage rapide ; accélération/décélération accompagnées, pas acquis exigés | Options et réglages de référence essayés sur la version française |
| Exercice répète la démonstration et se dit artificiellement partiel | Adaptation guidée : problème de précision, choix d'un réglage, prévision et retest ; deux tâches | Consigne comprise sans solution intégrale et aides relevées |
| Deux endroits visibles supposent une pièce déjà décorée | Départ au centre, zone choisie loin des bords et retour avec changement de direction ; scène vide suffisante | Trajet praticable sans ajouter objet ou événement |
| Deux plafonds de vitesse peuvent être peu discernables sur trajet court | Comparaison perceptible exigée sur même départ/trajet et autres réglages constants ; 120/240 provisoires | Relever valeurs et observations, ajuster la référence puis refaire les deux essais avant publication |

Avis favorable après ajustements, sous réserve de recette technique. Ordre confirmé : GD01 → GD04 → GD02 → GD03. GD01 fournit placement/projet/aperçu ; le comportement fournit les flèches, sans connaissance préalable des événements ni des instances multiples. Le résultat pilotable donne un contexte aux notions suivantes. Ce choix n'est pas présenté comme un ordre optimal prouvé en classe.

Suite : implémentation autorisée de GD04/guide et migration ciblée, tests du site, recette moteur et corrections ; pas nouvelle revue documentaire automatique, ni lancement GD05. Routes existantes et suivi conservés. Aucun code ou commit ajouté lors de l'application de cette revue.

**Suite réalisée avec autorisation distincte :** GD04, son guide et le schéma sont intégrés ; ordre GD01 → GD04 → GD02 → GD03 appliqué, anciens identifiants conservés. 133 tests unitaires et 17 vues GDevelop du site réussis. Recette moteur, réglages provisoires et essai élève toujours en attente ; aucun commit ni GD05.
