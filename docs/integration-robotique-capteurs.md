# Intégration RB07/RB08 — 9 octobre 2026

## Statut

Deux leçons et deux guides ajoutés au site pour **préparation**, pas pour distribution immédiate en cours. L’étape capteur indique sa recette pratique incomplète ; chaque leçon porte un avertissement visible. La roadmap compte dix modules désormais intégrés, RB09/RB10 compris, avec recette pratique encore incomplète. Aucun acquis automatique ; aucun partage public MakeCode réalisé pour cette adaptation.

Accès : `index.html#module/robotique-distance?parcours=robotique-debutants`, `index.html#module/robotique-obstacle?parcours=robotique-debutants` ; guides `prof.html#guide/robotique-distance` et `prof.html#guide/robotique-obstacle`.

## Adaptation pédagogique

- RB07 : robot immobile, lecture numérique fournie, deux scènes valides accompagnées, distinction mesure/limite ; < et égalité sur tableau. Pas de moteur, variable ou capteur de ligne à construire.
- RB08 : départ distinct sans solution ; deux branches fixes ; approche et arrêt dans une même exécution après recette ; copie préservée puis `seuil` initialisé/utilisé à valeur identique ; modification accompagnée d’un seul réglage. Mission autonome réservée à RB09/RB10.
- Pas de calendrier de stage sur les pages. Le conducteur en cinq séances demeure une adaptation séparée. Couleurs, bandeau et essentiels utilisent le modèle robotique existant.
- Une répétition `while true` est fournie dans la pile au démarrage, **après** la préparation du modèle. Elle est lue comme « relire sans fin », pas reconstruite par l’élève. Aucun événement moteur A/B, aucune deuxième pile motrice ; pas de variable technique d’activation.
- La référence moteur n’a pas de durée bloquante : direction 0, puissance 25, limite 20, pause technique 100 ms. `seuil = 20` remplace ensuite la seule limite. Ces nombres prolongent les essais précédents mais ne valident pas les nouvelles scènes de cours.
- Console et comparaison relisent séparément le capteur. Les données ne sont pas une trace atomique de chaque décision. Aucun traitement d’absence de cible n’est inventé.

## Fichiers

Les HEX sont exportés depuis l’interface MakeCode, après saisie professeur et conversion en blocs. Les élèves travaillent en Blocs ; le code texte n’est pas une activité demandée.

| Fichier | Usage | Contenu |
| --- | --- | --- |
| RB07-Ma-distance-observation.hex | Élève / démonstration RB07 | Préparation CuteBot, trois aides OFF, arrêt, pause 2000 ms, lecture série toutes les 500 ms ; aucun mouvement |
| RB08-Mon-obstacle-depart.hex | Départ élève RB08 | Arrêt, attente de A avec lecture 100 ms, puis lecture seule ; aucune décision sur la distance, aucun motor steer, aucune variable |
| RB08-Obstacle-fixe-reference.hex | Professeur uniquement | Base + règle distance < 20, arrêt / direction 0 puissance 25 sans durée, pause 100 ms |
| RB08-Robot-prudent-reference.hex | Professeur uniquement | Même règle avec seuil initialisé à 20 avant répétition et utilisé à droite de < |

Les anciens `RB07-Capteurs-recette-fixe-prof.hex` et `RB08-Capteurs-recette-seuil-prof.hex` restent des diagnostics techniques séparés, non distribués comme départs. Ils contiennent orientation A, boucle B et diagnostics de ligne ; ne pas les confondre avec les nouveaux fichiers.

## Vérification et limites

Contrôle d’intégration du 9 octobre 2026 : 142 tests automatisés réussis, aucun échec. Les deux pages élèves, les deux guides professeur et les liens de l’étape 3 ont été ouverts dans le navigateur ; les deux illustrations sont chargées et aucun débordement horizontal n’est observé à la largeur testée. Un rechargement est nécessaire si le site était déjà ouvert avant ce lot.

Les quatre nouveaux HEX ont été réimportés depuis les fichiers du dépôt dans MakeCode et leurs blocs contrôlés : une seule pile au démarrage, CuteBot et trois aides OFF, arrêt initial avant répétition ; lecture seule à 500 ms pour RB07 et à 100 ms pour le départ RB08 ; deux branches avec limite 20 pour la référence fixe ; affectation de `seuil` à 20 avant répétition et utilisation dans la comparaison pour la dernière référence. Aucun bloc JavaScript gris ni événement moteur A/B observé. Cette reprise des fichiers valide leur contenu récupérable, **pas** les placements, approches, équivalences de scènes ou accès sur un autre poste : R10–R12 et la partie pratique de R14 restent à réaliser.

La lecture d’observation a affiché `distance_cm:40` répétée. Cela atteste l’affichage, pas une mesure calibrée en absence de cible. Conversion en blocs contrôlée sans expressions JavaScript grises. Les résultats d’approche et de comparaison des seuils précédents restent dans la [recette historique](recette-makecode-capteurs.md).

La préparation par virage temporisé donnait 28 puis 17 après réimport : elle n’est pas reprise sur les pages. La nouvelle pile au démarrage n’embarque aucune position/orientation fiabilisée. **Avant distribution**, appliquer [R10–R12 et R14](protocoles-verifications-manuelles.md) : placements immobiles et accès élèves, nouvelles références avec deux approches comparables, substitution et deux limites, export/réimport. Ne pas valider un essai proche comme seconde approche éloignée.

Si le placement fiable manque : conserver les pages en préparation, travailler éventuellement le tableau logique avec l’élève et marquer la manipulation capteur non réalisée. Ne pas annoncer l’acquisition de l’observation réelle. Aucun modèle physique n’est testé, aucun seuil de sécurité garanti.

Suite autorisée : finir ces vérifications et conserver leurs preuves. RB09/RB10 ont depuis été intégrés en préparation ; leur recette R15 reste distincte.

## Mise à jour du 10 octobre — placement puis lancement sur A

Les trois HEX RB08 remplacent leur pause initiale de 2000 ms par une attente fournie : tant que A n’est pas pressé, moteurs arrêtés et mesure série toutes les 100 ms. La seconde boucle reçoit la décision ; le départ élève ne donne toujours ni comparaison de distance ni avance. Dans la référence variable, `seuil = 20` précède cette attente. Aucun événement de bouton moteur ni variable d’activation : un nouvel appui ne crée pas une autre boucle.

Protocole : ▶ → placement humain, simulation active mais robot immobile → lecture stable → A maintenu environ une seconde puis relâché → observation sans déplacer le robot. Après chaque relance/import/modification, refaire le placement pendant l’attente de A. Ne pas utiliser Stop entre placement et A ; après lancement, arrêter avant toute intervention. A doit être relâché au démarrage. RB07 reste un programme de mesure immobile sans cette attente.

Les preuves du 9 octobre ci-dessus concernent les anciens fichiers. Dernier état du 10 octobre dans [la recette capteurs](recette-makecode-capteurs.md) : fixe 20 testé depuis 26 → 18 et proche 7 après A immobile ; variable 20 observée 26 → 18 ; variantes 15/25 essayées et réimportées, résultats détaillés dans l’intégration missions. La comparaison géométriquement identique et les contrôles de cours restent ouverts, pas tous les premiers essais. Un arrêt à 17 ou 18 pour une limite 20 est compatible avec `< 20`, pas une distance exacte garantie ; 17 appartient à l’ancienne version automatique.
