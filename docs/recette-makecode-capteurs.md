# Recette capteurs MakeCode — 9 octobre 2026

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
