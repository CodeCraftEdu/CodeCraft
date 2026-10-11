# Recette capteurs MakeCode — 9 octobre 2026

## Reprise du 10 octobre 2026 — placement humain et séparation du lancement

### Complément — essais humains après correction du lancement

Nouvelle reprise comparative : utilisateur « placé à 26, il s’arrête à 23. Placé à 15, reste immobile », avec le projet encore à seuil 25. Capture ed655ce5 : robot face à la cible de gauche, plateau final et nouvelles lignes à 23, sans contact visible. Départ 26 attesté par le récit ; placement initial identique aux prochains réglages et maintien cinq secondes non attestés par cette seule capture. L’essai depuis 15 est un contrôle proche avec seuil 25, pas une modification du seuil à 15. Première ligne 25 du [relevé comparatif](recettes-robotique/comparaison-seuils.md) partiellement renseignée. Projet ouvert ensuite passé à seuil 20 en modifiant seulement l’initialisation ; blocs de direction 0, puissance 25 et pauses 100 ms conservés. Aucun nouvel essai à 20 attesté à ce stade ; archive 25 inchangée.

Dernier complément prudente 25 : après vérification des blocs à seuil 25, l’utilisateur refait le contrôle demandé à 7 cm, avec appui sur A puis relâchement, et confirme « immobile ». Capture bf3b1891 : bouton A non enfoncé, plateau et nouvelles lignes distance_cm:7, robot devant la première cible. Le maintien proche après relâchement est désormais confirmé par l’utilisateur ; aucune durée exacte ni répétition systématique n’est déduite de la capture. La capture antérieure d8856e8d montrait seulement A enfoncé et la mesure 7. Pour l’autre rectangle, l’utilisateur confirme départ 26 après A et arrêts parfois 22, parfois 23. Ce contrôle de départ strictement supérieur à 25 est effectué ; pas de nouvelle demande du même premier essai. Cause exacte de la variation non établie, géométrie rigoureusement identique entre reprises non attestée. Le guide professeur et ses versions sur le site reprennent désormais les valeurs ponctuelles 15/20/25 avec ces limites.

Sur la référence fixe avec attente de A, l’utilisateur rapporte : départ à 7 cm sans mouvement après A ; départ à 26 cm, avance puis arrêt à 18 cm, confirmé lors d’une reprise du même essai. Il rapporte un maintien durable de l’arrêt, au-delà du minimum de 5 secondes demandé. Captures d9696df7 et 86b370db dans la conversation. Cela documente les deux branches et une répétition rapportée, pas une calibration physique ni une conservation automatique de scène.

Après import de la référence variable depuis le dépôt, `seuil = 20` : la capture f6e57e14 montre un plateau de départ à 26 puis baisse et plateau à 18, sans contact visible. Le comportement observé est compatible avec la substitution à valeur identique. Après modification, la capture a55fe41b montre un arrêt à 23 ; l’agent a ensuite vérifié dans les blocs `seuil = 25`. L’essai est compatible avec un arrêt plus tôt. Le départ à 26 est celui demandé ; cette dernière capture ne suffit pas à garantir une égalité géométrique stricte des placements ni toutes les répétitions R12.

Copie à 25 exportée depuis MakeCode sous `RB09-Ma-mission-prudente-seuil-25`, sauvegardée dans les téléchargements puis archivée dans [la recette professeur](recettes-robotique/RB09-Mission-prudente-seuil-25.hex). Les ressources publiques RB08 conservent leur référence à 20. Réimport spécifique effectué le 10 octobre : pile en blocs, initialisation 25 et attente de A retrouvées. Ce fichier conserve le programme, pas le terrain ni les résultats.

Complément R15 : capture dd7e26a2, mesure proche stable à 7 avec la mission prudente ; l’appui sur A n’est pas attesté par la seule capture, donc la branche proche après lancement reste à confirmer. Capture 6524c715 : autre rectangle, robot orienté depuis la droite, arrêt stable à 23 sans contact visible. L’utilisateur précise : placement à 25, appui sur A, avance jusqu’à 23. Ce départ égal au seuil exerce la branche avance de la règle stricte `< 25`, mais ne valide pas le départ strictement supérieur demandé. Ne pas convertir ce résultat en répétition géométriquement identique.

Mission approche préparée dans une nouvelle importation de la copie à 25, renommée `RB09-Ma-mission-approche-seuil-15`. Seule l’initialisation du seuil passe à 15 ; aides OFF, puissance 25, cadence 100 ms et attente de A conservées. Valeur 15 vérifiée dans les blocs puis export archivé : [RB09-Mission-approche-seuil-15.hex](recettes-robotique/RB09-Mission-approche-seuil-15.hex).

Essais approche confirmés le 10 octobre : première cible, départ 26 puis appui A, arrêt à 13 ; capture cb1d0745 montrant plateau à 26, descente puis plateau à 13, sans contact visible. Départ proche à 7 : l’utilisateur confirme explicitement aucun mouvement après A. Autre rectangle : l’utilisateur rapporte également 26 → 13 puis arrêt. Les trois situations de cette variante sont donc exercées ; cela ne constitue pas deux répétitions par scène ni une comparaison à géométrie rigoureusement identique avec 20/25. Aucun arrêt exactement à 15 promis.

Réimport de l’archive approche effectué ensuite : nom du projet, pile unique en blocs, aides OFF, seuil 15, attente de A, règle `< seuil`, puissance 25 et pauses 100 ms retrouvés. Aucun nouveau test moteur après réimport ; scène et traces ne sont pas conservées par le HEX. Les essais utilisateur précédents restent les preuves pratiques, distinctes de la récupération du programme.

RB09/RB10 restent en préparation : copies prudente 25 et approche 15 sauvegardées et réimportées ; trois situations approche exercées. Restent notamment répétitions comparables par valeur, comparaison équitable avec la référence et accès/fiche en contexte de cours. Voir R15. Pas de validation du parcours entier, de plage continue de seuils ou de sécurité physique. Les réserves anciennes ci-dessous décrivent les états antérieurs ; ce complément prévaut pour les essais rapportés.

### Résultats utilisateur et correction de la procédure

Le placement humain nécessite une simulation active : Stop ne permet pas de glisser le robot. Le programme moteur précédent avançait dès le lancement. L’utilisateur rapporte une approche depuis 26 cm, puis arrêt à 17 cm ; un nouvel essai donne 18 cm (captures 4a7e64e0 et d605047f dans la conversation). Ces mesures sont compatibles avec la règle `< 20`. L’écart exact n’est pas expliqué par ces seules captures ; placement/orientation et moment de consultation peuvent contribuer. Ni arrêt exactement à 20, ni comparaison strictement identique des départs ne sont attestés.

Correction du 10 octobre : les trois fichiers RB08 remplacent la pause initiale par une attente de A avec moteurs arrêtés et mesure active toutes les 100 ms. Une seule pile au démarrage, pas d’événement A moteur, pas de variable d’activation. La seconde boucle contient la règle fixe/variable ; dans le départ élève, elle contient seulement la lecture. `seuil = 20` reste avant l’attente dans la référence variable. Les trois conversions en blocs ont été contrôlées, sans bloc JavaScript gris, puis exportées depuis MakeCode et copiées dans les ressources du dépôt. RB07 n’est pas modifié.

Procédure actuelle : ▶ → glisser le robot immobile face à la cible → relever une mesure stable → presser A, sans Stop/Restart entre placement et A. Après relance/import/modification, refaire le placement pendant l’attente. Après A, arrêter avant toute intervention ; la règle ne mémorise pas l’arrêt. Un second appui ne crée pas de boucle concurrente. Cette attente est une infrastructure fournie, pas un nouveau travail demandé à l’élève.

Les approches utilisateur ci-dessus concernent l’ancienne version automatique. Avec les nouveaux fichiers, restent à vérifier : deux approches comparables, départ proche après A, équivalence fixe/seuil = 20 et comparaison à une autre limite. R10–R12/R14/R15 donnent les gestes, critères et preuves à conserver. Les observations antérieures ci-dessous sont historiques, pas une validation de cette nouvelle phase de lancement.

Contrôle des exports du 10 octobre : les trois HEX du dépôt ont été réimportés via le sélecteur de fichiers MakeCode. Les blocs retrouvent leurs rôles et une seule pile, sans expression JavaScript grise ; la variable précède l’attente dans la référence prudente. Sur la référence fixe réimportée, plusieurs lectures 40 et immobilité avant A ont été observées. Un clic automatisé très bref sur A n’a pas libéré l’attente ; un appui clavier Space de 300 ms sur A focalisé a lancé l’avance, visible sur le terrain. La fiche demande de maintenir A environ une seconde puis relâcher. Ce test de lancement sans cible ne valide pas l’arrêt avant obstacle. Stop puis Restart ont remis le programme en mesure/attente. Contrôle du site : 144 tests réussis.

### Complément utilisateur — lecture proche/éloignée

L'utilisateur a effectué le placement humain et fourni des captures avec robot orienté vers le même rectangle : plusieurs lignes `distance_cm:20`, puis `distance_cm:8`, puis un départ plus éloigné à `distance_cm:26` avec plusieurs lectures identiques. Le graphique montre les variations pendant la manipulation puis des plateaux. Cela atteste le geste humain et deux distances distinctes stables dans RB07 ; cela ne prouve pas encore une remise identique après Restart/import, le comportement sans cible ou un arrêt moteur. Les captures sont dans la conversation du 10 octobre (captures 122858, b5b4006d et 69d8fc4a).

Suite : référence existante `RB08-Obstacle-fixe-reference` ouverte depuis My Projects. Blocs retrouvés : modèle/aides OFF/arrêt/pause 2000 ms, puis une boucle avec distance < 20, arrêt sinon direction 0 puissance 25, mesure série et pause 100 ms. Le lancement automatique au chargement a déplacé le robot sur le bord supérieur droit sans cible visée ; ce n'est pas un test d'approche. Simulation arrêtée pour préparer un placement humain face au rectangle. Aucun résultat d'arrêt avant obstacle validé à ce stade. Vérifier si le lancement conserve le placement ; s'il le réinitialise, noter cette limite avant de choisir une autre procédure.

Navigateur intégré, MakeCode v9.0.12, projet existant `RB07-Ma-distance-observation` ouvert depuis My Projects, sans réimport ni modification du programme. Vue temporaire 1280 × 720 nécessaire pour afficher terrain et données ensemble. Blocs visibles : modèle elecfreaks cutebot, trois aides OFF, motor stop, pause 2000 ms puis boucle de lecture distance_cm avec pause 500 ms. Robot immobile en haut à gauche, orienté vers la droite ; plusieurs lignes et graphique à 40. Cette observation confirme la lecture au départ, pas une distance libre précise ni le comportement sans cible.

Geste essayé : glisser le robot du haut gauche du terrain vers une position à hauteur des rectangles (coordonnées de vue 101,292 → 100,372). Le contrôle du navigateur refuse avant l'envoi du geste : `Cannot safely inspect fractional iframe input coordinates`. La lecture des limites DOM du cadre confirme des positions/dimensions fractionnaires. Le bouton externe Launch in fullscreen n'a pas donné un terrain agrandi dans la capture ; le clic sur le contrôle visible du terrain est refusé pour la même raison. Aucun placement interne injecté ni contournement du contrôle.

Résultat : R10 et partie pratique R14 restent bloqués sur le placement ; aucune nouvelle approche RB08, aucune comparaison de seuil ni scène A/B/C validée. Le problème observé concerne l'automatisation de l'iframe, pas une impossibilité démontrée pour l'élève de manipuler le simulateur. Un essai humain du placement dans le navigateur de cours, ou un autre outil de contrôle autorisé permettant ce geste, est nécessaire pour débloquer cette partie. Relever les positions, l'orientation et les mesures proche/éloignée puis refaire le placement avant R11/R12. Les références et leçons restent intactes et en préparation. La taille temporaire de vue est retirée en fin de recette.

## Statut et périmètre

Recette technique professeur, pas validation de classe ni publication de RB07/RB08. Aucun matériel, achat, installation ou partage public. Leçons RB01–RB06 et leurs fichiers restent intacts. Outil : MakeCode micro:bit 9.0.12, navigateur intégré, extension Microsoft microbit-robot chargée par import du départ RB06, modèle elecfreaks cutebot. Version incorporée de l’extension non relevée séparément.

La [documentation officielle](https://makecode.microbit.org/pkg/microsoft/microbit-robot) confirme lecture de distance en cm, détecteurs de ligne, simulation des obstacles et déplacement du robot à la souris. L’extension est bêta ; ces annonces ne remplacent pas les essais.

## Méthode

Diagnostic préparé en JavaScript visible puis converti dans l’éditeur de blocs MakeCode. Distance, comparaison et commandes moteur sont de vrais blocs. **Les deux conversions ternaires booléen → 1/0 des détecteurs de ligne restent des expressions JavaScript grises après import** : ne pas les présenter comme des blocs élèves prêts à assembler. Ce code de recette est réservé au professeur : pas une nouvelle consigne JavaScript élève, pas de validation de la construction autonome des blocs. Console : bouton **Show data — Simulator**. `serial.writeValue` rend la mesure précise visible, contrairement à l’assistance 5 cm de l’écran micro:bit. Les 1/0 de ligne sont une conversion de diagnostic d’un booléen, pas une unité de distance.

Configuration : initialisation du modèle avant les autres commandes, aides line following / speed smoothing / sensor and motor display OFF, arrêt initial. Aucun afficheur d’assistance ni suivi automatique de ligne interprété comme programme élève.

## Observations attestées

1. Diagnostic sans mouvement : `distance_cm:40`, stable à plusieurs lectures, départ de la scène en haut à gauche orienté vers la droite. **On ne déduit pas que 40 est une mesure précise d’espace libre ou la portée maximale** : le comportement sans cible reste à caractériser.
2. Virage déclenché par A (direction 100, puissance 50, durée 2000 ms, arrêt) : console 40 → 34 → 33 → 31 → 30 → 29, puis 29 conservé robot arrêté. La distance réagit à la visée ; ce n’est pas une preuve de calibration physique.
3. Lecture `detectLine(Left/Right)` convertie en 1/0 : 1/1 sur la ligne au départ ; 0/0 après un trajet quittant le tracé. Les transitions gauche et droite indépendantes n’ont pas été caractérisées.
4. Première approche (virage A 2000 ms puis B, décision répétée distance < 20 → arrêt, sinon direction 0 / puissance 25) : le robot manque les rectangles et continue, distance revenant à 40, détecteurs 0/0. Simulation arrêtée par le professeur. **Essai non concluant pour l’arrêt devant obstacle**, pas capteur déclaré défectueux.
5. Orientation de préparation A portée à 5000 ms, seul réglage modifié : distance stabilisée à 28. Après B : 28 → 26 → 25 avec AVANCE, puis distance 19 et ARRET répété. Robot immobile avant les rectangles, sans relance entre avance et arrêt ; maintien observé sur plusieurs lectures. Détecteurs ensuite 1/0. Cette transition atteste une décision selon une mesure actualisée, mais pas encore la répétabilité de deux scènes identiques.

Référence de recette fixe exportée réellement puis réimportée, blocs et nom retrouvés : `resources/robotique/makecode/RB07-Capteurs-recette-fixe-prof.hex` (1 455 116 octets). Ce fichier contient diagnostic série, orientation sur A et boucle sur B : **référence technique professeur, pas départ élève ni solution pédagogique publiée**.

Variante avec `seuil = 20` à la place de la limite fixe, autres paramètres inchangés : après A, mesure stabilisée 27 ; B déclenche l’avance, puis ARRET et distance stabilisée à 18, robot arrêté avant les rectangles. Même règle fonctionnelle, mais les positions finales ne sont pas identiques au centimètre près : ne pas déclarer une équivalence métrique stricte ni une parfaite répétabilité du simulateur. Variante exportée réellement dans `resources/robotique/makecode/RB08-Capteurs-recette-seuil-prof.hex` ; export conservé à 20, pas à la valeur d’essai suivante.

Comparaison suivante : changer **uniquement** l’initialisation à `seuil = 25`, préparer A avec les mêmes paramètres, mesure de départ 27 puis lancer B. Arrêt observé à 24, avant contact et maintenu sur plusieurs lectures. Avec 20, arrêt à 18 ; avec 25, arrêt à 24 : le réglage plus grand demande l’arrêt pour une mesure plus éloignée. Cette paire d’essais étaye le rôle du seuil, sans promettre une distance de freinage exacte. La variante à 25 n’a pas été exportée séparément.

Preuves visuelles conservées dans le dossier de travail : `capteurs-arret-19.jpg`, `capteurs-seuil-20.jpg`, `capteurs-seuil-25.jpg`. L’export variable à 20 n’a pas encore été réimporté. Les essais n’ont pas validé les valeurs invalides/absence de cible ni un retour éloigné après arrêt dans la même exécution.

**Reprise fixe après import :** après le même A 5000 ms, distance stabilisée à 17 au lieu de 28. B choisit donc arrêt dès le départ. Les sources sont conservées, la branche proche fonctionne, mais le geste préparatoire ne fournit pas deux scènes éloignées identiques. Ce résultat ne compte pas comme une deuxième approche réussie. La préparation par virage temporisé est un outil de recette provisoire, pas une procédure élève fiabilisée. Il faut vérifier le placement souris réel ou un autre départ reproductible dans le même outil, avant publication.

Les couleurs des rectangles varient entre essais ; identifier leur position et la visée plutôt qu’une couleur constante. Le trait noir n’est pas un obstacle testé. Ne pas promettre des angles exacts avec une durée de virage.

## Limites d’interface constatées

- Le glisser-déposer à la souris a été tenté en vue normale et plein écran : l’outil de contrôle refuse les coordonnées fractionnaires de l’iframe. Aucun contournement par script, aucune position interne injectée. **Le geste élève de placement reste non vérifié** ; ce blocage d’automatisation ne prouve pas que la souris d’un utilisateur échouerait.
- À fenêtre étroite, le simulateur disparaît de la vue console. Une taille de test 1280 × 720 a été utilisée pour observer scène et données ; restaurer la taille normale en fin de recette. L’accès élève doit vérifier une vue où robot et mesures restent visibles, éventuellement le plein écran. Ce n’est pas une simple préférence esthétique.
- Les premiers déplacements automatisés sont parfois très peu visibles et les relances/recompilations peuvent réinitialiser la scène. Faire charger la scène puis déclencher un test, noter départ, orientation et mesures ; ne pas confondre console qui tourne et simulation physique correctement observée.
- Premier diagnostic de mise en place et boucle concurrente non retenu comme référence. Le test professeur A puis B sépare les phases ; il ne décide pas de l’interface de lancement future de la leçon.
- Pas de test de carte réelle, pas de garantie de sécurité, pas de validation d’un seuil ou d’une puissance pour du matériel.

## Code du dernier essai professeur

Ne pas appuyer à nouveau A une fois B lancé. B lance une boucle infinie de recette ; utiliser Stop avant tout réglage/placement. Les deux lectures de distance (diagnostic et décision) ne constituent pas une trace atomique ; ne pas interpréter leur ordre à la milliseconde près.

```typescript
input.onButtonPressed(Button.A, function () {
    robot.motorSteer(100, 50, 5000)
    robot.motorStop()
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        if (robot.obstacleDistance() < 20) {
            robot.motorStop()
            serial.writeLine("ARRET")
        } else {
            robot.motorSteer(0, 25)
            serial.writeLine("AVANCE")
        }
        basic.pause(100)
    }
})
robot.elecfreaksCuteBot.start()
robot.setAssist(RobotAssist.LineFollowing, false)
robot.setAssist(RobotAssist.Speed, false)
robot.setAssist(RobotAssist.Display, false)
robot.motorStop()
basic.forever(function () {
    serial.writeValue("distance_cm", robot.obstacleDistance())
    serial.writeValue("ligne_gauche", robot.detectLine(RobotLineDetector.Left) ? 1 : 0)
    serial.writeValue("ligne_droite", robot.detectLine(RobotLineDetector.Right) ? 1 : 0)
    basic.pause(500)
})
```

## Conditions avant adaptation/publication de RB07/RB08

Les [protocoles R10–R12](protocoles-verifications-manuelles.md) détaillent les contrôles encore nécessaires : placements immobiles répétables, deux mesures proches/éloignées, comportement sans cible, approche avec arrêt avant contact dans une même exécution et deux relances, puis substitution du nombre par `seuil` et comparaison de deux limites. Sauvegarde/export et réimport des nouveaux projets à tester avant distribution. Les tests techniques encore réalisables par l’agent ne sont pas transférés automatiquement à l’utilisateur.

Le tableau logique d’égalité reste valable indépendamment du simulateur : avec distance < 20, 19 choisit arrêt, 20 et 21 choisissent sinon. **Cette lecture de tableau n’est pas un essai sensoriel à 19/20/21 cm.**

Références : [spécification séance 4](specification-robotique-seance-4.md), [recette RB05/RB06](recette-makecode-robot.md), [registre manuel](verifications-manuelles-en-attente.md). Les spécifications historiques ne sont pas des programmes exécutables validés.
