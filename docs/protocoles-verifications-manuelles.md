# Protocoles des vérifications manuelles différées

Mis à jour le 9 octobre 2026. Ce document détaille toutes les familles de contrôles du registre [en attente](verifications-manuelles-en-attente.md). Il ne les déclare pas exécutées. Aucun rappel automatique. À remettre à l’utilisateur lorsqu’il demandera ses contrôles, en filtrant par parcours et priorité.

## Règles communes et compte rendu

Utiliser uniquement des fichiers/projets de test et des copies. Ne pas supprimer les sources, modifier les modèles partagés, utiliser le vrai fichier de suivi d’élèves, ni installer un outil sans accord. Pour les circuits, arrêter la simulation avant de toucher un fil. Pour le robot, moteurs arrêtés avant placement ; jamais déplacer manuellement un robot en mouvement. Aucun test virtuel ne prouve une sécurité matérielle.

Pour chaque ID ci-dessous, relever : date, testeur, navigateur/OS/version/langue, ressource exacte, étapes réalisées, attendu, observé, preuve (capture ou nom de fichier), aides nécessaires, statut **réussi / échoué / bloqué / non effectué**, anomalie et action suivante. Une réussite technique n’est pas une acquisition pédagogique. Ne cocher le registre que si toutes les étapes obligatoires de l’ID ont été observées. Un résultat partiel reste partiel. Les durées sont des estimations, pas des horaires élèves.

## Robotique — priorité avant utilisation en cours

Entrée : [parcours](http://localhost:8000/index.html#parcours/robotique-debutants). Guides : `prof.html#guides`. Ouvrir les modèles à partir des boutons de chaque leçon afin de tester aussi les liens réellement distribués. Préparer un accès élève distinct du compte propriétaire, selon le dispositif de classe choisi ; sa configuration n’est pas supposée connue.

### R01 — Copie élève et reprise de Ma première lumière (10 min)

1. Accès élève : ouvrir le départ depuis la leçon ; relever droit de copie/connexion demandé. Créer une copie nommée `Test-lumiere`, pas une modification du modèle.
2. Repérer D8, résistance 220 Ω et LED. Simulation arrêtée, le professeur repère et capture les deux bornes d’un fil du chemin LED sur le modèle complet, puis ouvre uniquement cette connexion dans la copie. Rétablir le fil avec aide, faire expliquer son rôle et vérifier résistance, autres connexions et sens de LED. Cette manipulation ajoutée à RB01 reste à essayer dans l’accès élève. Prévoir LOW puis lancer : LED éteinte. Arrêter, changer uniquement LOW en HIGH ; relancer : LED allumée.
3. Enregistrer, quitter l’éditeur, rouvrir la copie et relancer. Ouvrir séparément le modèle original sans l’éditer.

Réussite : connexion restaurée et expliquée avec aides notées, deux états corrects, copie retrouvée, HIGH conservé dans la copie et modèle intact. Preuve : URL de copie, bornes du fil et captures des deux états. Si accès/copie impossible : bloqué, ne pas improviser un autre compte ou un partage plus large.

### R02 — Fil interrompu et restauration (5 min, professeur)

Sur une seconde copie, simulation arrêtée : noter/capturer le câblage, déconnecter un seul fil de la boucle LED, prévoir puis lancer. LED ne s’allume plus avec HIGH. Arrêter, restaurer exactement le fil et relancer. Réussite : panne expliquée par la boucle ouverte, allumage restauré, original intact.

### R03 — Signal, fichier principal et diagnostic séparé (15 min)

1. Copier le départ RB02 dans l’accès élève ; nommer `Test-Mon-signal`. Construire HIGH → attente 1 s → LOW → attente 1 s dans forever.
2. Observer trois cycles complets : allumée pendant la première attente, éteinte pendant la seconde. Modifier seulement la première attente à 2 s, relancer ; prévoir oralement le transfert vers 1/2.
3. Sauvegarder/reprendre ; conserver ce projet. Faire une copie `Test-Signal-a-completer`, retirer LOW seulement, prévoir puis observer l’état conservé. Restaurer LOW entre les attentes et vérifier trois cycles.
4. Enregistrer un rythme personnel dans une copie et le retrouver.

Réussite : 1/1, 2/1 et restauration observés, fichiers distincts, élève explique les états pendant les attentes. Preuve : noms/URLs et chronologie de trois cycles, pas seulement une capture allumée.

### R04 — Départs bouton et câblage D2 (10 min)

Accès élève : ouvrir les deux départs RB03 (à relier / préconnecté), en créer des copies distinctes. Sur la copie à relier, simulation arrêtée, compléter seulement D2 → Terminal 2a. Lancer, appuyer/relâcher ; confirmer le changement de l’entrée. Sauvegarder, quitter, reprendre. Réussite : accès aux deux bases, entrée changée par le bon bouton et copies conservées ; Mon-signal et modèles intacts. Si câblage inaccessible, tester la base préconnectée et noter l’aide, sans valider la manipulation du fil.

### R05 — Maintien continu et deux règles RB04 (10 min)

1. Sur copie principale : observer en continu repos 3 s → maintien au moins 5 s → relâchement 3 s, deux fois. Attendu : sortie adaptée à chaque état, aucun clignotement pendant le maintien.
2. Faire une copie `Test-Mon-bouton-inverse`, échanger les deux actions et refaire exactement les deux cycles. Attendu : états opposés à la principale.
3. Présenter le schéma où sinon manque, sans casser le modèle : faire compléter oralement/par geste et prévoir les deux états.

Réussite : les deux règles et les maintiens entiers observés, original et copie distincts. Une capture isolée ne suffit pas. Noter séparément l’explication entrée → question → branche et l’aide de souris.

### R06 — MakeCode en français et conservation des images RB05 (10 min)

Dans le navigateur réel de cours : relever version/langue, ouvrir un projet vide et retrouver les menus français. Construire A → cœur, B → carré, sans forever d’affichage. Cliquer brièvement A, attendre 5 s sans appui, puis B. Attendu : cœur persistant puis carré, pas d’effacement implicite. Choisir deux images personnelles et répéter. Réussite : mêmes gestes possibles dans l’accès élève, pas seulement la référence professeur ; aide d’interface notée.

### R07 — Export/import MakeCode et fichiers distincts (10–15 min)

1. RB05 : exporter `Test-Mes-images.hex` dans un dossier retrouvé. RB06 : télécharger le départ depuis CodeCraft, importer par accueil → Import → fichier → validation ; vérifier qu’il n’avance pas.
2. Ouvrir la référence minimale professeur `RB06-Avancer-arreter-reference.hex`, vérifier les blocs et l’arrêt. Ce réimport reste à faire même si la référence complète a été réimportée.
3. Exporter principal et copie personnelle sous deux noms distincts ; quitter l’éditeur, importer chacun et vérifier une différence volontaire et son nom. Ne pas compter sur la seule liste locale de projets.

Réussite : fichiers retrouvés et sources importables, différence conservée, aucun original remplacé. Si auto-sauvegarde indisponible, noter l’alerte et utiliser l’export ; ne pas déclarer la persistance locale validée. Ne pas brancher de carte ni activer WebUSB pour ce test virtuel.

### R08 — Deux relances comparables et défi de durée RB06 (15 min)

1. Garder scène et MakeCode visibles ; attendre le chargement. Référence minimale : relancer deux fois, observer avance puis immobilité 5 s. Référence complète : deux relances avance → virage → arrêt. Photographier départ/orientation et fin.
2. Vérifier que Restart retrouve le même départ/orientation. Sinon noter l’écart ; ne pas comparer des distances depuis des départs différents.
3. Dans la copie personnelle, faire prévoir avant indice puis changer seulement la durée d’avance (ex. 1500 → 1000 ms), sans changer puissance 50, virage ni arrêt. Refaire deux essais depuis le même départ.

Réussite : arrêt conservé et différence observable expliquée par le seul réglage. Aucune conversion en cm ou angle exact. Mouvement incohérent = anomalie de recette à diagnostiquer, pas faute élève.

### R09 — Deux puissances (facultatif, professeur, 10 min)

Sur copie minimale en ligne droite, même départ, durée 1500 ms et arrêt : comparer 25 % et 50 %, deux relances chacun. Réussite : différence reproductible et arrêt ; aucun autre paramètre changé. Sinon omettre cette démonstration. Ne pas ajouter cette tâche à l’élève avant validation.

### R10 — Capteur : scènes proche/éloignée et précision (15 min, technique)

Préalable : diagnostic immobile préparé et sauvegardé, lecture numérique `robot obstacle distance (cm)` dans la console ; aides OFF. Ne pas créer une variable distance comme exigence élève.

1. Simulation arrêtée : vérifier qu’un déplacement à la souris place le robot devant un rectangle et conserve l’orientation ; capturer le placement. Relancer le diagnostic sans mouvement et relever cinq mesures espacées.
2. Arrêter ; choisir une seconde position plus proche, même obstacle/orientation ; relever cinq mesures. Répéter les deux scènes.
3. Écarter la visée de l’obstacle sur une copie ; relever le comportement sans cible, sans supposer que 40 signifie exactement 40 cm libres. Tester également la limite basse sans contact.

Réussite : valeurs différentes et reproductibles, unité/libellé identifiés, comportement sans cible documenté. Sinon bloqué pour RB07/RB08. Le geste de déplacement n’a pas été validé par l’agent : l’outil refuse actuellement les coordonnées d’iframe. Ne pas contourner cela dans la fiche élève.

### R11 — Décision répétée et arrêt avant contact (15 min, technique)

À effectuer après R10, sur copie dédiée sans trajet concurrent ni commandes A/B moteur héritées. Préparer la règle complète distance < limite → arrêt, sinon avance faible puissance ; pause de lecture courte fournie par le professeur.

1. Choisir une limite entre deux mesures validées et une scène où le robot est d’abord éloigné, orienté vers l’obstacle. Prévoir la branche.
2. Relancer : observer numériquement la baisse de distance et le passage avance → arrêt **dans la même exécution**, puis immobilité 5 s avant contact. Refaire depuis le même départ.
3. Vérifier séparément la scène déjà proche et la scène éloignée. Traiter l’égalité avec un tableau 19/20/21 pour limite 20 : arrêt / avance / avance avec `<`, sans exiger un placement exact dans la scène.

Réussite : transition reproductible avant contact, pas un simple changement de texte dans la console. Si mesure non valide ou mouvement trop peu visible : ne pas publier la référence comme validée. Aucun seuil virtuel n’est une garantie matérielle.

État au 9 octobre : une approche fixe s’est arrêtée à 19 ; après réimport et même virage préparatoire, départ mesuré à 17 et arrêt immédiat. Sources retrouvées, mais deuxième approche comparable non validée. Reprendre le placement, pas seulement refaire B.

### R12 — Variable seuil et réévaluation complémentaire (15 min, technique)

Copier la référence fixe validée. Initialiser `seuil` au démarrage à la même limite et remplacer seulement le nombre de comparaison par seuil. Refaire deux essais identiques : comportement attendu inchangé. Modifier ensuite uniquement la valeur initiale de seuil, avec une seconde limite laissant avancer au départ : prévoir puis comparer les points d’arrêt, mêmes scène/puissance. Réussite : réglage donné/utilisé, résultat reproductible, copies fixe et variable conservées et réimportées.

Complément facultatif : seulement si un geste vérifié permet de changer la mesure sans déplacer le robot en mouvement, montrer le retour vers la branche avance dans la même exécution. Sinon reporter, ne pas l’exiger. Ce programme n’est pas un arrêt mémorisé.

État au 9 octobre : `seuil = 20` donne arrêt à 18 ; `seuil = 25` donne arrêt à 24, depuis mesures de départ à 27. Substitution et modification ont été essayées ; ne pas refaire ces essais à l’identique sans objectif. Restent : répétabilité stricte des scènes, réimport de l’export variable, montage en blocs adapté à l’élève et accès de cours. Les prototypes A/B professeur ne sont pas le futur départ élève.

### R14 — Nouveaux supports RB07/RB08 : import, blocs et lancement (15 min, technique)

Préparation : les quatre fichiers de [l’intégration capteurs](integration-robotique-capteurs.md), un navigateur de cours, une copie dédiée et une scène validée par R10. Ne pas utiliser les anciens diagnostics A/B comme départs élèves.

1. Importer `RB07-Ma-distance-observation.hex`. Vérifier modèle, trois aides OFF, arrêt initial, pause 2000 ms puis lecture numérique répétée, sans mouvement ni variable. Ouvrir les données et relever deux lectures valides dans les placements préparés.
2. Importer `RB08-Mon-obstacle-depart.hex`. Vérifier pause de consultation 100 ms, absence de condition, variable et motor steer ; robot immobile. Il doit être un départ sans solution.
3. Importer `RB08-Obstacle-fixe-reference.hex` : une seule pile au démarrage, initialisation avant répétition, condition distance < 20, arrêter / direction 0 puissance 25 sans durée, pause 100 ms. Vérifier l’absence de blocs JavaScript gris et d’événements moteurs A/B. Refaire R11 avec ce nouveau lancement : l’ancien diagnostic ne valide pas cette architecture.
4. Importer `RB08-Robot-prudent-reference.hex` : valeur donnée à seuil avant répétition et seuil à droite de <. Refaire R12 depuis des départs identiques, puis exporter la copie personnelle, réimporter et retrouver nom, valeur et règle.

Attendu : chaque fichier retrouve ses blocs et son rôle distinct ; seul le professeur reçoit les références complètes. Réussite technique : exports récupérables, lecture immobile, scènes et approche conformes, aucune commande concurrente. Preuves : nom/version, captures des piles et positions, valeurs initiales et observations. Si un placement ne se conserve pas après relance, noter bloqué et maintenir RB07/RB08 **en préparation**, sans valider la distribution. Langue française et accès élèves restent des essais séparés des vérifications professeur.

### R15 — Missions RB09/RB10 : scènes et preuves (30–45 min, estimation technique)

**Non effectué.** Pages, guides et fiche commune intégrés en préparation : [spécification RB09/RB10](specification-robotique-rb09-rb10.md). À réaliser après la partie pratique de R10–R12/R14 ; les scènes et leurs valeurs restent à préparer et vérifier.

Préparer des copies de test : référence fixe `Reference-arret`, mission avec `seuil`, fiche de trace et captures des trois scènes. Conserver les originaux. Relever version, langue, modèle, aides, puissance, cadence, limite fixe et valeurs admissibles. Les fichiers de programme ne prouvent pas que la position se conserve.

1. **Scènes** : simulation arrêtée, préparer A (départ éloigné, cible devant), B (proche sans contact) et C (autre position de cible, départ éloigné). Pour chacune, documenter orientation, placement et gestes de remise au départ ; relever des mesures valides et refaire le placement. B doit demander Arrêter avec toutes les valeurs proposées ; A/C doivent permettre une avance initiale.
2. **Référence A** : observer avance puis arrêt avant contact dans une même exécution, immobilité 5 s ; recommencer depuis le même départ. Garder limite, puissance et scène fixes. Noter les lectures et capturer départ/fin. Un second lancement déjà proche n’est pas une répétition valide de l’approche.
3. **Deux missions A** : sur deux copies de recette, essayer une valeur donnant un arrêt plus loin et une donnant un arrêt plus près que la référence, toujours après avance et avant contact. Répéter chacune depuis le même départ/orientation/obstacle/puissance. Déterminer les valeurs réellement admissibles, pas une plage déduite de deux seuls nombres. Si une mission échoue ou n’est pas visiblement distincte, la bloquer et revoir les supports avant distribution.
4. **B et C** : pour chaque valeur qui sera proposée aux élèves, tester B (immobilité maintenue) puis C (avance → arrêt avant contact dans la même exécution), sans changer son réglage. Répéter. C vérifie le comportement ailleurs ; ne pas en déduire une marge relative à la référence sans comparer aussi la référence dans C.
5. **Accès et sauvegarde** : dans le navigateur de cours, ouvrir les ressources depuis les pages intégrées, créer `Test-Ma-mission-robot`, préserver le fichier initial, exporter/réimporter la copie et retrouver nom/valeur/blocs. Télécharger la fiche HTML depuis chacune des deux pages, l’ouvrir localement puis vérifier l’aperçu et l’impression : colonnes A/B/C, espaces d’écriture et absence de texte coupé. Une seule fiche est conservée entre RB09 et RB10 ; aucune donnée personnelle ni publication imposée. L’affichage direct a été contrôlé, pas le téléchargement ni l’impression réels.

Attendu : deux contraintes réellement accessibles, scènes rejouables, règle stable, essais conformes et copies récupérables. Preuves : fiche de scènes datée, valeurs autorisées et résultats par valeur/scène, captures départ/fin, noms des fichiers et traces prévision/observation/conclusion. Noter aides et anomalies. Une trace série seule ne prouve ni l’arrêt avant contact ni la comparaison géométrique.

Réussite seulement si toutes les conditions distribuées ont été vérifiées. Sinon statut partiel/bloqué et supports **en préparation** ; la préparation sur papier n’atteste pas la mission pratique. Aucun résultat de sécurité physique déduit. Une correction de programme impose de reprendre A/B/C. R13 observe ensuite le raisonnement réel d’élèves, séparément de cette recette.

### R13 — Observation pédagogique robotique (séance réelle)

Sur chaque notion : demander une prévision avant exécution/indice, faire montrer entrée/sortie ou mesure/limite, laisser modifier un seul élément puis demander une explication personnelle. Relever aides de souris, aides conceptuelles, blocages et temps de fichiers séparément. Réussite pédagogique à apprécier par le professeur, pas déduite de cases ou de la réussite du simulateur. R01 à R12 ne remplacent pas ce contrôle.

## GDevelop — différé, parcours en pause

Préparer une copie du kit et un dossier de test ; utiliser un moteur déjà disponible, sinon bloqué sans autorisation d’installation. Entrée : `index.html#parcours/gdevelop-debutants`. Relever version/OS/langue. Les valeurs de déplacement restent provisoires jusqu’à G05.

| ID | Procédure à réaliser | Résultat attendu / preuve |
| --- | --- | --- |
| G01 (15 min) | GD01 : extraire le kit, nouveau projet vide, importer personnage.png, créer une instance ; comparer deux positions dans deux aperçus ; enregistrer jeu.json, fermer et rouvrir. | Image et dernière position retrouvées, aperçu fonctionne sans compte si c’est l’accès retenu. Relever libellés et chemins. |
| G02 (10 min) | Copier **tout** le dossier G01 (JSON + images), ouvrir le JSON de la copie, changer une position puis enregistrer/rouvrir les deux. | Copie autonome, ressources présentes, original inchangé ; conserver les deux chemins. |
| G03 (15 min) | GD02 : un objet Jeton, trois instances ; prévoir puis déplacer une instance et remplacer l’image commune. Varier X/Y puis choisir quatre placements visibles/espacés. Retirer une instance seulement. | Déplacement individuel, image commune, coordonnées compréhensibles et objet restant ; capture scène/liste objets. |
| G04 (20 min) | GD03 : Texte visible avant événements ; assembler paire complète Espace maintenue → afficher / condition inversée → masquer. Focus aperçu : repos, maintien 5 s, relâchement, deux fois. Sur copie retirer Masquer, prévoir/observer puis restaurer. Compléter paire F, choisir touche inutilisée ; tester ancienne/nouvelle. Bonus sur autre copie : échanger actions. | Les deux états fonctionnent, persistance expliquée quand Masquer manque, ancienne touche ne commande plus la nouvelle règle, bonus opposé ; noter menus d’inversion en français. |
| G05 (20 min) | GD04 : relever comportement vu du dessus, contrôles flèches, rotation/diagonales OFF, accélération/décélération positives. Tester 4 directions, relâchement/arrêt, focus et sortie du cadre. Comparer 120/240 depuis même départ, autres paramètres inchangés. | Réglages et gestes réels notés ; vitesse différente et arrêt reproductibles. Adapter les valeurs si nécessaires, ne pas valider sur documentation seule. |
| G06 (15 min) | GD04 : modifier un réglage guidé, centre → zone choisie → centre ; sauvegarder/rouvrir. Bonus diagonales sur copie. Si projet déjà enrichi, vérifier Jetons et message GD02/GD03. | Trajet/reprise possibles, bonus distinct et éléments antérieurs intacts. |
| G07 (élève) | Faire prévoir objet/instance, clavier/état et déplacement avant indice ; demander création personnelle sans modèle intégral. | Noter aides de manipulation séparées de compréhension ; pas de validation automatique. |

## Python — Thonny et revue visuelle différées

Utiliser un dossier neuf `tests-codecraft`, des pseudos/réponses fictifs et des copies pour les erreurs intentionnelles. Relancer le fichier entier après arrêt/redémarrage, pas des fragments de console avec anciennes variables. Chaque P03–P07 implique enregistrement et exécution réelle dans Thonny.

| ID | Procédure à réaliser | Résultat attendu / preuve |
| --- | --- | --- |
| P01 (15 min) | À zoom habituel et fenêtre étroite, ouvrir fonctions, return et quiz et leurs guides depuis le parcours. Lire toutes consignes/indices, les bonus distincts ; parcourir précédent/suivant et fil d’Ariane. | Pas de texte coupé, liens corrects, source lisible et bonus non confondus ; captures et URLs. Ces trois titres sont les modules visés par l’ancien registre, pas une affirmation qu’ils sont les trois dernières positions actuelles des 20 modules. |
| P02 (10 min) | Créer/sauver un .py ; fermer/rouvrir, modifier une copie sous autre nom. Faire input : réponse dans console + Entrée ; arrêter pendant attente puis relancer fichier entier. | Original intact, noms/chemins distincts, pause puis reprise et arrêt fonctionnent, pas de réponse écrite dans le code. |
| P03 (15 min) | Fonctions : exécuter définition seule, un appel puis deux appels d’un corps de 2 instructions ; essayer arguments différents et inversés. Sur copie provoquer TypeError d’arguments puis corriger. Créer un exemple personnel. | Définition seule sans affichage, 2 puis 4 instructions exécutées, ordre des arguments expliqué, erreur identifiée/corrigée ; sortie console et fichier personnel. |
| P04 (20 min) | Return : comparer afficher et renvoyer, observer None quand retour absent ; conserver/réutiliser 2 résultats. Tester noms locaux différents puis identiques. Sur copie provoquer NameError hors fonction puis corriger. Créer règle personnelle renvoyant 1/0. | Résultat ≠ affichage, portée locale expliquée, sorties attendues dans les deux cas, pas de correction par ancienne variable de console. |
| P05 (20 min) | Quiz : tester une question isolée, comparaison exacte puis préparation de texte ; exactement un appel compté puis trois. Réponses fictives produisant 3, 0 et score mixte avec vide/casse/espaces. | Scores correspondent aux 3 appels, vide/casse/espaces selon la règle écrite ; tableau réponses/score attendu/observé. |
| P06 (15 min) | Dans copie quiz modifier question **et** réponse attendue ; tester ancienne/nouvelle. Puis deux autres copies : quatrième question ; message juste/faux avant return. | Ancienne réponse refusée si différente, nouvelle acceptée ; quatrième comptée une seule fois et message visible ; bonus indépendants, original intact. |
| P07 (30 min) | Conversation : 2 réponses différentes/reprise. Aventure : chaque branche et cas non prévu. Nombre mystère : tester bornes affichées, trop petit/grand/trouvé, compteur et arrêt ; utiliser les bornes du module, noter tirage si visible pour la recette. | Branches/messages cohérents, compteur conforme aux essais, partie terminée sans demande supplémentaire ; sauvegardes/reprises retrouvées. |
| P08 (élève) | Prévision avant indice, création/modification personnelle sans modèle complet, explication des choix ; noter temps de fichiers et aides. | Observation qualitative distincte des résultats techniques ; professeur décide ce qui est acquis/à reprendre. |

## Web avancé — en pause

### W01 — Ma collection de cartes (20 min)

Ouvrir `index.html#module/web-collection-cartes?parcours=web-avances`, à zoom normal sur ordinateur puis fenêtre étroite. Suivre la leçon dans un dossier de test avec son guide : ouvrir les fichiers/ressources, vérifier visuellement modèle et consignes, ajouter une carte en conservant les autres ; changer la direction Flexbox puis restaurer. Réouvrir les fichiers enregistrés. Réussite : carte ajoutée, parent/enfants expliqués, disposition changée par le bon conteneur, pas de ressource perdue ni débordement empêchant la lecture. Capturer large/étroit. Ne pas lancer le développement de la suite web à l’occasion de cette recette.

## Espace professeur — fichiers natifs et Drive

### E01 — Sélecteur et reprise locale (15 min)

Depuis `prof.html`, créer/ouvrir **un Espace CodeCraft de test**, dans un dossier distinct du dépôt. Tester annulation du sélecteur (aucune donnée perdue), autorisation du fichier choisi, sauvegarde, fermeture puis réouverture. Réussite : seul le fichier de test change ; annulation sans corruption, données fictives retrouvées, erreur/permission refusée présentée sans perte silencieuse. Ne pas ouvrir le fichier réel de suivi. Les tests simulant le sélecteur ne valident pas cette étape Windows.

### E02 — Synchronisation réelle (15 min, deux postes si disponibles)

Préalable : E01 réussi, copie de test dans le dossier Drive synchronisé **hors dépôt**, application Drive déjà configurée. Un onglet/un poste à la fois. Modifier une donnée fictive sur A, enregistrer, attendre la confirmation Drive (ne pas supposer l’immédiateté), fermer A ; sur B attendre la synchronisation puis ouvrir la copie, vérifier, modifier une autre donnée, sauver/fermer ; revenir sur A après synchronisation. Réussite : versions successives retrouvées sans écrasement/conflit. Si second poste ou Drive indisponible : bloqué, pas validé par une lecture du fichier local. Noter délais et éventuels conflits sans résoudre par suppression.

## Priorité et restitution au moment voulu

Avant un cours robotique : R01/R03/R04/R05/R06/R07/R08 ; R02 pour la démonstration prévue ; R10/R11/R12/R14 avant utilisation des modules capteur ; R15 avant distribution des missions RB09/RB10 intégrées en préparation. R09 facultatif. R13 est une observation de séance, pas un prérequis technique.

GDevelop/Web restent en pause. Python : P01/P02 puis P03–P07. E01/E02 avant d’utiliser le suivi réel multi-poste. Lors de la demande de rappel, fournir les liens et une sélection ordonnée d’IDs, pas demander à l’utilisateur de refaire les recettes déjà attestées. Conserver les résultats datés dans le registre ; ne jamais effacer les anciennes réserves sans preuve.
