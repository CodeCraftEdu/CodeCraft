# Robotique KidnKod — roadmap actualisée après revue transversale du 9 octobre 2026

## 1. Cadre et statut

Préparation d’un stage externe KidnKod, également adaptée au parcours permanent Robotique dans CodeCraft. Cette roadmap est notre proposition originale : ce n’est ni un programme interne fourni par KidnKod ni une progression approuvée par l’organisme.

**État actuel — 9 octobre 2026 : dix modules et dix guides RB01–RB10 intégrés, quatre étapes et une fiche de mission commune.** Les corrections de la revue transversale sont appliquées : connexion accompagnée RB01 ; raccord 0/LOW et 1/HIGH ; cas manquant RB04 avant construction ; reprise du seuil RB09 si l’essai guidé manque ; prévisions B/C sans réponses dans les intitulés ; vocabulaire capteur/actions/moteurs harmonisé. RB10 confirme le premier essai A, puis teste B/C. Les pages capteurs et missions restent **en préparation** : R10–R12/R14/R15 et accès élève à terminer ; nouvelle manipulation de connexion RB01 à vérifier dans R01. Les recettes pratiques ne sont pas validées par cette mise à jour.

Les paragraphes d’avancement suivants sont un **historique des lots** : leurs suites proposées et leurs compteurs décrivent le moment de chaque lot, pas l’état actuel ci-dessus.

Cadre annoncé publiquement : débutants de 8 à 13 ans, cinq jours de deux heures, cours en ligne, aucun achat de matériel, Tinkercad Circuits et MakeCode micro:bit, découverte des circuits, des capteurs et de la programmation, projet final présenté au groupe. [Catalogue KidnKod](https://www.kidnkod.com/cours.php?type=stage_vacance).

État réel au 9 octobre 2026 : aucun support enseignant, projet de départ ou renseignement complémentaire reçu de KidnKod. Les [séance 1 — RB01/RB02](specification-robotique-seance-1.md), [séance 2 — RB03/RB04](specification-robotique-seance-2.md), [séance 3 — RB05/RB06](specification-robotique-seance-3.md), [séance 4 — RB07/RB08](specification-robotique-seance-4.md) et [séance 5 — RB09/RB10](specification-robotique-seance-5.md), leurs fiches élèves et guides professeurs sont rédigés. Les revues pédagogiques et la revue transversale sont effectuées et leurs corrections documentaires appliquées. Ma première lumière et Programmer un signal sont désormais intégrées au site, avec leurs guides, hors contraintes d’atelier. Un départ Tinkercad partagé et des références professeur privées existent ; les essais et limites sont dans les recettes [lumière](recette-tinkercad-premiere-lumiere.md) et [signal](recette-tinkercad-signal.md). Cela ne valide pas les autres séances ni l’accès élève réel. Le développement GDevelop reste en pause ; reprise prévue à GD05, sans suppression de ce qui existe.

Avancement RB03/RB04 du 9 octobre : les cinq ressources Tinkercad sont créées, essayées et partagées par lien. **Deux leçons distinctes et leurs guides** sont intégrées au site : `robotique-bouton` et `robotique-decision`, avec schémas de connexion et de trace. La [recette bouton](recette-tinkercad-bouton.md) précise les liens et limites ; [l’adaptation](integration-robotique-bouton.md) conserve observation de l’entrée avant construction des deux branches. Accès élève, observations continues en cours et séances 3 à 5 restent non validés. La suite technique sera RB05/RB06, sans les afficher comme déjà disponibles.

Avancement RB05/RB06 du 9 octobre : deux leçons et guides intégrés dans l’étape « Piloter un robot ». A/B et images essayés ; base et référence robot exportées puis réimportées ; avance, virage et arrêt observés. Les exports et imports ont été lents et une alerte d’auto-sauvegarde indisponible est apparue. La fiabilité des relances reste à confirmer : les déplacements courts n’ont pas tous été aussi visibles. La [recette MakeCode](recette-makecode-robot.md) sépare ces observations de la validation en classe.

Recette capteurs du 9 octobre : lecture numérique variable, états des détecteurs de ligne, avance puis arrêt selon distance dans une même exécution observés ; variante avec `seuil` également essayée. Voir les résultats exacts et limites dans la [recette capteurs](recette-makecode-capteurs.md). Les anciens prototypes de recette sont professeur seulement, pas des départs élèves.

Dernier état d’intégration : **huit leçons et huit guides RB01–RB08 accessibles**. RB07 Lire une distance et RB08 S’arrêter devant un obstacle sont intégrés **en préparation**, avec deux départs sans solution motrice et deux références professeur distinctes. [Adaptation et fichiers capteurs](integration-robotique-capteurs.md). Les [protocoles R10–R12/R14](protocoles-verifications-manuelles.md) restent requis avant distribution : placement reproductible, approche avec le nouveau lancement, comparaison de seuils, sauvegardes et accès réel. Aucune séance complète n’est déclarée prête sur cette seule base. RB09/RB10 et les trois scènes de mission restent à intégrer dans un lot suivant.

Dernier lot intégré au 9 octobre : [RB09/RB10 et fiche commune](integration-robotique-missions.md), après revue et ajustements. Référence montrée avant choix ; RB09 prépare mission/réglage et demande un premier résultat A ; RB10 confirme A puis teste B/C et présente sur le même projet et la même fiche allégée. Approche signifie une marge plus petite avant contact, avec valeurs vérifiées uniquement. **Dix modules et dix guides RB01–RB10 accessibles** ; pages capteurs/missions toujours en préparation. Les scènes et leurs valeurs restent à valider par R15 et ses préalables. Le téléchargement dans le navigateur de cours et l’impression réelle de la fiche restent à vérifier ; affichage direct contrôlé. Aucun essai de mission attesté par cette intégration.

La recherche documentaire suffit pour proposer l’ordre pédagogique. Elle ne prouve pas que les interfaces, fichiers ou simulations fonctionneront dans les conditions du stage. Les vérifications avec l’accès élève et en classe sont notées pour plus tard, sans les déclarer accomplies par les essais du compte professeur.

## 2. Choix des outils

| Outil | Rôle retenu | Limite |
| --- | --- | --- |
| Tinkercad Circuits | Construire un circuit virtuel puis programmer une LED avec un Arduino simulé | Apprendre les circuits, pas prétendre y simuler tout un robot roulant |
| MakeCode micro:bit | Programmer par blocs une carte virtuelle puis un robot | La carte simulée seule n’est pas un robot mobile |
| Extension Microsoft microbit-robot | Déplacement observé sur une référence ; candidate pour le capteur d’obstacle | Bêta ; non confirmée par KidnKod, recette partielle et fiabilité à confirmer |

Pas de VEXcode VR, de logiciel à installer, de carte physique, de Python, de C++ ou de JavaScript obligatoire. Les projets Tinkercad et MakeCode restent séparés : aucun transfert automatique de programme ou connexion entre les simulateurs n’est supposé.

Tinkercad propose l’assemblage de circuits et la programmation par blocs ou texte ; nous retenons les blocs. [Guide Autodesk](https://images.tinkercad.com/jl5ii4oqrdmc/1eTWASZYKjnMX9u5ioLh8Y/bb2dfb24cfc4bd66adc485baaecedf97/Tinkercad_Getting_Started_Guide_ISTE.pdf).

La documentation Microsoft décrit un simulateur avec capteurs d’obstacle et de ligne, une initialisation du modèle de robot et des commandes moteur. Une commande temporisée ne provoque pas nécessairement l’arrêt des moteurs : l’arrêt doit être explicite. La durée et la puissance ne garantissent pas un trajet ou un angle exact. Ne pas enseigner des rotations « de 90° » garanties avec cette extension. [Documentation microbit-robot](https://makecode.microbit.org/pkg/microsoft/microbit-robot).

## 3. Fil conducteur et niveau visé

**Mission : créer un petit système qui reçoit une information, prend une décision et agit.**

Exemples successifs : bouton → LED ; distance à un obstacle → arrêt du robot. Un bouton est une entrée commandée par une personne ; un capteur fournit une mesure. Une LED est une sortie lumineuse ; un moteur produit un mouvement. Un circuit électronique n’est pas automatiquement un robot.

À la fin du stage, avec des aides adaptées, l’élève devrait pouvoir :

- distinguer entrée, programme et sortie sur ses propres créations ;
- réaliser un circuit simple et expliquer pourquoi il faut une connexion complète ;
- programmer une séquence et une répétition, puis une décision à deux cas ;
- utiliser une variable simple comme réglage et expliquer sa valeur ;
- commander un déplacement et un arrêt ;
- exploiter une distance mesurée pour prendre une décision ;
- prévoir, essayer, corriger si nécessaire et expliquer un choix personnel ;
- retrouver son projet et présenter un essai, avec une correction si nécessaire.

Ce sont des objectifs de découverte, pas une promesse d’autonomie complète ni de maîtrise de la robotique physique. Avoir terminé une activité ne valide pas automatiquement une compétence.

## 4. Vue d’ensemble des cinq séances

Les repères RBxx désignent les dix modules intégrés au site. Le format atelier regroupe deux modules par séance ; le parcours permanent utilise quatre étapes sans durée imposée. Il est possible de ralentir et de réduire les variantes.

| Jour | Outil | Unités proposées | Production du socle |
| --- | --- | --- | --- |
| 1 — Faire agir un circuit | Tinkercad | RB01 : Mon premier circuit ; RB02 : Programmer un signal | LED allumée puis signal clignotant |
| 2 — Réagir à une entrée | Tinkercad | RB03 : Le bouton donne une information ; RB04 : Choisir entre deux actions | LED allumée pendant l’appui, éteinte sinon |
| 3 — Piloter un robot | MakeCode | RB05 : Retrouver les repères sur micro:bit ; RB06 : Avancer, tourner, arrêter | Avance, virage et arrêt explicite ; défi sur la durée d’avance ; puissance facultative |
| 4 — Décider avec un capteur | MakeCode + robot | RB07 : Lire une distance ; RB08 : S’arrêter devant un obstacle | Décision avec limite fixe, puis introduction et modification accompagnées de `seuil` |
| 5 — Créer et présenter | MakeCode + robot | RB09 : Ma mission de robot ; RB10 : Tester, expliquer, améliorer | Mission choisie, réglage justifié, comparaison et vérification dans une nouvelle scène |

Le robot des jours 3 à 5 est conditionné au choix et à la recette de l’extension candidate. On conserve l’objectif annoncé, sans écrire à l’avance des gestes d’interface non vérifiés.

## 5. Déroulé pédagogique

### Jour 1 — Faire agir un circuit

Objectif : obtenir rapidement un résultat, puis distinguer montage et programme.

1. Identifier composants, connexions et bouton de simulation sur un circuit virtuel minimal avec alimentation, résistance et LED. Cette découverte courte est accompagnée : observer, prévoir et essayer une connexion, sans exiger une première construction complète en autonomie.
2. Observer le sens de la LED et le rôle protecteur de la résistance, sans calcul d’Ohm requis. Arrêter la simulation avant de modifier le montage.
3. Concentrer la construction élève sur un seul montage Arduino–LED, accompagné ou partiellement préparé selon les besoins. Montrer les connexions utilisées et la sortie commandée : pas de schéma opaque à recopier. Conserver ce montage pour le jour 2 ; ne pas demander de reconstruire deux circuits en autonomie.
4. Programmer par blocs : allumer, attendre, éteindre, attendre. Prévoir un cycle, puis le répéter. Distinguer une action exécutée une fois d’une répétition continue.
5. Défi autonome : modifier une durée pour obtenir un autre rythme ; prévoir ce qui sera visible puis essayer.

Preuve attendue : l’élève montre la LED commandée, explique au moins une connexion et une attente, et retrouve le projet enregistré. La broche, la résistance et les valeurs exactes seront fixées lors de la préparation technique, pas improvisées dans la leçon.

Aide possible : base câblée et vérifiée à compléter pour qui rencontre des difficultés de souris. Cela ne remplace pas l’explication du circuit. Bonus : motif de clignotement, sans ajouter de nombreux composants.

### Jour 2 — Réagir à une entrée

Objectif : passer d’une séquence automatique à une réaction dépendant d’une information.

1. Reprendre la LED et ajouter un bouton sur une base accompagnée. Identifier lecture du bouton et commande de la LED.
2. Faire constater les deux états de l’entrée avant de demander de construire une condition. Ne pas confondre bouton relâché, connexion incorrecte et entrée flottante.
3. Montrer une décision complète, réévaluée : si le bouton est appuyé, allumer ; sinon, éteindre. Prévoir puis essayer repos, appui maintenu et relâchement, deux fois.
4. Avant de présenter la règle complète et d’assembler les blocs, faire proposer l’action manquante du cas « sinon » sur un schéma. Vérifier ce choix après construction dans le principal intact. Pas de copie supplémentaire ; lire aussi quatre consultations successives, dont deux en maintien, pour distinguer répétition et alternance des actions. Relier les lectures 0/LOW et 1/HIGH aux états de D2, puis distinguer cette lecture des commandes sur D8.
5. Défi : donner le résultat opposé attendu dans une copie et laisser proposer la modification avant de fournir la stratégie comme indice. Expliquer quel cas allume désormais la LED, puis retrouver le projet principal.

Preuve attendue : l’élève distingue entrée et sortie et explique les deux branches en montrant les résultats. Pas de bascule mémorisée, de compteur d’appuis ou de gestion du rebond requis.

Préparation future : choisir une configuration d’entrée déterministe, documenter alimentation, masse, broche et éventuelle résistance de rappel. Les blocs disponibles et l’état électrique interprété comme appui restent à vérifier. Le circuit partiel ne sera annoncé comme prêt que lorsqu’il sera réellement créé et essayé.

### Jour 3 — Piloter un robot

Objectif : transférer les notions, pas refaire un cours complet de programmation.

1. Présenter MakeCode et sa carte simulée. Une micro:bit est une autre carte programmable, pas un Arduino avec des blocs renommés.
2. Micro-activité courte : un appui sur A déclenche l’affichage d’une image ; un appui sur B en affiche une autre. Prévoir puis observer ce qui reste affiché après le relâchement. Comparer au jour 2 : « je consulte régulièrement si le bouton est maintenu » n’est pas « un appui déclenche une action ». Identifier événement, entrée et écran, sans enseigner le fonctionnement interne du moteur. Limiter cette découverte à environ quinze minutes, hors aide de navigation. Le geste exact d’appui/relâchement dépend du bloc choisi ; le vérifier lors de la préparation technique. [Événement MakeCode](https://makecode.microbit.org/reference/input/on-button-pressed).
3. Ouvrir une base de robot accompagnée : extension et modèle initialisés, sans comportement caché. Expliquer ces éléments techniques sans exiger leur mémorisation. Montrer que ce projet lance une séquence au démarrage, contrairement aux images déclenchées par A/B ; aucun bouton ne commande ici les moteurs.
4. Prévoir et tester d’abord une séquence courte : avancer puis arrêter explicitement. Une fois ce résultat compris, ajouter un virage simple avant l’arrêt. Distinguer durée d’exécution, puissance moteur et distance parcourue. Choisir un seul mode de commande moteur pour le socle.
5. Défi autonome : donner un résultat visible, par exemple commencer le virage plus près du départ, puis laisser proposer une modification unique avant de fournir un indice sur la durée d’avance. Garder puissance et commande de virage fixes. Prévoir et expliquer le changement, arrêter puis replacer le robot pour recommencer ; aucune distance exacte exigée.
6. Approfondissement facultatif après le travail principal : observer deux puissances sur une démonstration professeur en ligne droite seule, avec mêmes durée, départ et orientation, et arrêt explicite. L’élève prévoit puis explique ; son projet n’est pas démonté pour cet essai. Aucune variable aujourd’hui : son introduction accompagnée vient au jour 4.

Preuve attendue : l’élève montre l’arrêt explicite, explique l’effet du réglage changé et distingue une séquence déclenchée d’une consultation répétée de l’état d’un bouton. Le trajet n’a pas besoin d’être géométriquement exact ; on ne demande pas encore une réaction à un obstacle.

Aide : projet partiel avec initialisation déjà faite et séquence courte à compléter. La comparaison de puissance est le bonus facultatif ; elle n’est pas un prérequis du jour 4. Pas de radio, télécommande complexe ou pilotage concurrent.

### Jour 4 — Décider avec un capteur

Objectif : un premier comportement autonome simple et explicable.

1. Observer plusieurs distances fournies par le capteur, robot immobile, avec des positions proches et éloignées. Une mesure change avec la scène ; ce n’est pas une valeur inventée par le programme. Le moyen d’observer la mesure sera fixé lors de la préparation technique.
2. Choisir un seuil numérique fixe. Avant de construire le programme, prévoir « arrêter ou avancer » pour quelques distances observées. Distinguer la mesure reçue et la limite choisie ; ne pas introduire de variable à ce stade.
3. Construire puis essayer une règle complète et réévaluée : si la distance est inférieure au seuil fixe, arrêter ; sinon, avancer. Réutiliser la consultation répétée du jour 2, distincte de l’événement ponctuel du jour 3. Garder une faible vitesse. Aucun recul, virage d’évitement ou état complexe nécessaire.
4. Prévoir puis tester une avance depuis une mesure éloignée et un arrêt à l'approche, dans la même exécution. Le retour à une mesure éloignée sans relance est complémentaire si le simulateur permet le geste préparé. Examiner aussi le cas d’égalité à partir du comparateur choisi : ne pas parler vaguement de « près » sans relier cela à une mesure.
5. Une fois la règle comprise, remplacer la valeur fixe par une variable `seuil`, initialisée au démarrage et utilisée dans la comparaison. Montrer que le résultat reste identique avec la même valeur. C’est la première introduction des variables : une valeur nommée servant de réglage, pas une mesure ni un compteur.
6. Faire une modification guidée : le professeur propose une autre valeur vérifiée de `seuil`, accompagne la prévision et fait observer l’effet depuis la même scène, avec la même puissance. Relancer pour appliquer l’initialisation, puis sauvegarder la valeur retenue. Si la substitution à valeur identique demande plus de temps, reporter ce changement au début du jour 5. Le choix autonome de mission et de réglage est réservé au jour 5. Ne pas ajouter une variable `distance` ou `vitesse` au socle.

Preuve attendue : l’élève distingue mesure et seuil, montre les deux branches et explique où la variable est initialisée et utilisée. Observer si le robot s’arrête avant le contact, pas seulement si le programme contient un bloc Arrêter. Si la variable reste difficile, revenir à la comparaison fixe puis la réintroduire avec aide ; ne pas remplacer le temps d’essai par de nouveaux bonus.

Vigilances : aucune commande du trajet manuel ne doit concurrencer la boucle autonome. Réinitialiser mesure et position entre essais. La cadence de lecture, les valeurs particulières en l’absence d’obstacle, les unités, les aides intégrées et les paramètres fiables doivent être vérifiés avant de figer les consignes. Ne pas promettre un résultat physique à partir du seul simulateur.

S’il reste du temps, proposer une prévision orale avec une distance fictive et une limite, sans nouvelle mécanique. Le signal de proximité, l’évitement et le suivi de ligne restent hors de ce stage.

### Jour 5 — Ma mission de robot

Objectif : réinvestir les notions connues avec un choix personnel, sans nouveau chapitre.

Mission : choisir un comportement pour un thème — livreur, explorateur ou véhicule de secours — en reprenant le projet du jour 4. Le thème ne doit pas exiger de nouvelles mécaniques. Les deux choix proposés dans la scène A sont « prudente » (arrêt plus loin de l’obstacle que la référence) et « approche » (arrêt plus près, toujours avant contact), avec avance initiale dans les deux cas. Ces possibilités restent à vérifier techniquement avant distribution.

La référence professeur unique `Reference-arret` est à préparer à partir de `Mon-obstacle-fixe` et conserve sa limite. Sa fiche indique limite, puissance, départ, orientation et obstacle de la scène A ; elle ne désigne pas le projet personnel du jour 4. L’élève travaille dans `Ma-mission-robot`, copie de `Mon-robot-prudent`.

Contraintes du socle :

- avancer lorsque la voie est libre et s’arrêter avant un obstacle dans les essais préparés ;
- expliquer la réévaluation en observant l’avance puis l’arrêt dans la même exécution ;
- choisir une mission observable et justifier le réglage conservé ou modifié pour y répondre ;
- prévoir les résultats avant les essais, puis corriger si nécessaire ;
- enregistrer et retrouver le projet ;
- présenter les deux cas de la condition, un choix argumenté et un essai, avec une correction si nécessaire.

Comparer `Reference-arret` et le projet dans la scène A, avec mêmes départ, orientation, obstacle et puissance. L’élève peut conserver un réglage du jour 4 qui répond déjà à sa mission : il doit le justifier, prévoir les résultats et le vérifier dans une nouvelle situation. La modification du code n’est pas obligatoire ; le nom ou la couleur seuls ne démontrent pas la compréhension. Pas de labyrinthe arbitraire, livraison complète, navigation autonome garantie, score, suivi de ligne ou temporisateur obligatoire.

Au début du projet, compléter une courte règle déjà connue sur un support partiel distinct : par exemple remettre l’action manquante du cas « obstacle proche », puis prévoir et essayer les deux cas. Observer la compréhension sans exiger de reconstruire l’extension ou tout le programme. Prévoir une aide graduée et revenir ensuite au projet principal ; aucune notion nouvelle ni panne volontaire dans l’original.

Trois situations essentielles : A, avance puis arrêt comparé à la référence ; B, obstacle proche au départ pour vérifier Arrêter ; C, autre position d’obstacle pour vérifier l’avance puis l’arrêt avant contact avec le même réglage. C ne prouve pas « plus près » ou « plus loin » dans cette scène sans y refaire une comparaison. RB09 apporte le premier A ; RB10 le confirme depuis le même départ avant B/C. Seules les répétitions supplémentaires et le retour à une position éloignée sont facultatifs. Avant B/C, présenter les conditions et recueillir une prévision justifiée par mesure/seuil ; les attendus restent dans le guide et les indices. Noter prévision, résultat et correction éventuelle en quelques mots ou à l’oral. Ne pas inventer un problème pour remplir le bilan.

Présentation : montrer le projet, indiquer entrée/décision/sortie, expliquer le réglage et faire un essai. Le professeur observe les aides reçues ; pas de réussite déduite du partage du projet ou d’une case cochée.

## 6. Répartition des deux heures

Repère général pour les séances 1 à 4 ; les conducteurs détaillés des guides précisent la répartition propre à chaque journée :

| Moment | Minutes | But |
| --- | ---: | --- |
| Accès, reprise et diagnostic rapide | 10 | Vérifier que chacun peut travailler |
| Prévision et démonstration courte | 15 | Un résultat et une notion à la fois |
| Construction guidée, par petites étapes | 25 | Comprendre avant de modifier |
| Pause hors écran | 10 | Ne pas traiter deux heures comme un bloc continu |
| Défi autonome, aides graduées | 20 | Réutiliser sans tout recopier |
| Essais, explication et correction | 15 | Faire constater le comportement |
| Sauvegarde et marge de manipulation | 15 | Éviter de perdre le projet et absorber les écarts |
| Bilan et préparation de la reprise | 10 | Nommer ce qui a été appris |
| **Total** | **120** | **110 minutes hors pause** |

Ce sont des budgets, pas un minutage imposé aux enfants. Fractionner la démonstration et les vingt-cinq minutes guidées en mini-cycles observer/prévoir/manipuler/essayer ; ne pas laisser vingt-cinq minutes d’exposé.

Jour 3 : les vingt-cinq minutes de défi incluent les essais et une marge de reprise ; la comparaison de puissance n’utilise qu’un éventuel temps restant après le socle. Jour 4 : vingt-cinq minutes sont consacrées à l’introduction accompagnée de `seuil` et à un changement guidé si possible ; le défi autonome passe au jour 5.

Jour 5 : reprise et petite règle à compléter 10 min ; démonstration de la référence puis choix de mission 10 ; adaptation et premier essai A 20 ; pause 10 ; confirmation A puis B/C et correction si nécessaire 30 ; présentations 25 ; sauvegarde 10 ; bilan 5. Total 120 minutes. Le temps de présentation dépendra de l’effectif réel : tours courts et échanges complémentaires si nécessaire, sans garantir un long passage individuel à un groupe de taille inconnue.

Si le groupe avance moins vite, supprimer les bonus et réduire les variantes, pas la pause, l’essai ou l’explication. Conserver les trois branches du parcours : circuits, robot et projet final. Si elles ne peuvent pas être réalisées, signaler la réduction effective au lieu de prétendre avoir tenu toute l’offre.

## 7. Supports à produire ensuite

Pour chaque séance :

- une fiche élève avec objectif, consignes écrites courtes, résultat attendu et sauvegarde ;
- un guide enseignant : prérequis locaux, questions/réponses, erreurs et aides graduées ;
- une démonstration fonctionnelle distincte du départ élève ;
- un support partiel lorsque le câblage ou la configuration détourne de la notion ;
- des critères observables et une situation de réinvestissement ; au jour 4, une modification guidée prépare le défi personnel du jour 5 ;
- un plan de reprise si l’élève a perdu son projet ou manque une partie du cours.

Ne pas annoncer de fichiers fournis tant qu’ils n’existent pas. Pas de fichiers de simulation générés à l’aveugle, d’images présentant un montage non vérifié comme modèle fiable ou de solution complète exposée avant le défi.

Les fiches élèves ne doivent pas dépendre d’une consigne uniquement orale. Les fiches J3 et J4 sont allégées autour de « Je prévois / Je fais / Je vérifie » ; les détails techniques et les procédures de dépannage restent dans les guides. Éviter les allers-retours incessants entre visioconférence, fiche et éditeur. Prévoir des noms de projets courts et une action de sauvegarde explicite à la fin de chaque séance.

## 8. Accès, sauvegarde et précautions distancielles

Prévoir une classe Tinkercad gérée par l’enseignant. Autodesk documente l’accès par code de classe et pseudonyme sans adresse électronique élève ; l’organisation effective et l’autorisation de l’organisme restent à préciser. Ne pas collecter de comptes personnels pour faciliter le stage. [Guide Tinkercad Classrooms](https://images.tinkercad.com/jl5ii4oqrdmc/5v197WuuaqspGT81cG5tT6/81154785a527f1b42a32325487a30e44/tinkercad-guides_classrooms-Printable.pdf).

MakeCode stocke les projets dans le navigateur. Prévoir aussi un export de projet récupérable et une réimportation : changer de navigateur ou effacer ses données peut perdre la copie locale. Le partage produit un lien accessible à ses destinataires ; pas de nom complet, photo ou donnée personnelle dans le projet. Utiliser le canal fourni par l’organisme. [Sauvegarde](https://makecode.microbit.org/save), [importation](https://makecode.microbit.org/courses/csintro/making/activity), [partage](https://makecode.microbit.org/share).

Ordinateur et connexion nécessaires ; pas de tablette ou téléphone supposé équivalent pour le travail. Les règles de compte, les contrôles de navigateur et les accès de classe sont des points de préparation, pas des tâches à faire effectuer maintenant à l’utilisateur.

## 9. Vérifications différées et limites de conformité

Avant les cours, mais pas exigées pour valider cette roadmap :

1. Accès Tinkercad élève, sauvegarde, reprise et duplication réellement disponibles.
2. Montage LED puis entrée bouton déterministe ; correspondance exacte des blocs et connexions.
3. Extension robot et version retenues, modèle initialisé, aperçu utilisable dans un navigateur élève.
4. Commandes moteur, arrêt explicite, remise au départ et absence de commande concurrente.
5. Lecture de distance et deux branches testées avec plusieurs positions, réglages reproductibles et limites connues.
6. Export/import MakeCode et partage sans données personnelles.
7. Préparation du déroulé, des supports et des bases ; chronométrage approximatif sans élève, puis ajustement après les premières observations.

Un repli sur micro:bit seul peut conserver une activité de programmation si le simulateur robot tombe en panne. Il ne remplace pas une activité de robot roulant et ne doit pas être présenté comme une conformité complète à l’offre ; prévoir une solution de remplacement convenue avec KidnKod si cette dépendance demeure inutilisable. Pas de substitution silencieuse par VEXcode VR.

Le résultat final est une découverte de la robotique simulée et de l’électronique programmable. Pas de montage physique, de transfert testé sur matériel ou d’autonomie de programmation confirmée.

## 10. Revue appliquée et suite proposée

Les corrections des revues de séance et de la revue transversale sont appliquées aux pages, guides et fiches concernés. RB01 fait compléter une connexion repérée avec aide. RB03/RB04 relient 0/LOW et 1/HIGH, et le schéma partiel précède l’assemblage. Le jour 3 réserve la puissance à un approfondissement facultatif et centre le défi sur la durée. Le jour 4 accompagne l’introduction et la modification de `seuil` ; si ce dernier essai est reporté, RB09 le reprend avant le choix personnel. Sa référence est nommée et les trois situations distinguent comparaison et vérification dans une autre scène. Les fiches donnent les conditions B/C ; l’élève prévoit avant de voir les attendus. Un réglage pertinent peut être conservé et expliqué. Aucun problème ni changement de valeur n’est imposé artificiellement.

1. Le cadre des cinq séances et le socle pédagogique sont retenus ; les gestes et paramètres techniques non essayés ne sont pas figés.
2. Les cinq séances, fiches élèves, dix pages et dix guides sont intégrés et corrigés. Les ressources Tinkercad, les fichiers MakeCode et la fiche commune existent ; les scènes reproductibles, valeurs de mission et procédures d’accès élèves restent à vérifier au moment choisi par l’utilisateur.
3. Recette technique des fichiers et simulateurs avant utilisation en cours, au moment choisi par l’utilisateur. Ne pas qualifier cette roadmap de techniquement validée ou testée en classe.

Le lot documentaire initial a été suivi de l’intégration dans CodeCraft. Aucun nouveau logiciel, compte ou échange avec KidnKod n’est requis par ces corrections. La suite est la recette pratique documentée, puis l’observation pédagogique en cours.
