# Décider avec un capteur — guide professeur en préparation

Séance 4 du stage robotique KidnKod : RB07 + RB08, deux heures avec pause. [Spécification](specification-robotique-seance-4.md), [fiche élève](robotique-seance-4-eleve.md).

**Recette partielle, pas séance prête à animer.** La [recette technique](recette-makecode-capteurs.md) et [l’intégration RB07/RB08](integration-robotique-capteurs.md) distinguent essais historiques et nouveaux départs/références. Des fichiers exécutables et une observation numérique existent ; les scènes répétables, gestes de placement et essais avec le nouveau lancement restent à vérifier. Ce conducteur conserve le format atelier ; les pages et leurs guides génériques sont séparés.

## Entrée et objectif

Faire montrer l’arrêt explicite du jour 3 et lire les deux cas bouton–LED du jour 2. Aider à retrouver ces notions sans exiger de refaire le câblage ou le défi de trajet.

Séparer quatre acquisitions : mesure reçue ; limite fixe choisie ; décision complète répétée ; variable `seuil` comme réglage nommé. Ne pas créer une variable `distance` dès la découverte : cela ferait apprendre le stockage avant de comprendre l’information reçue.

## Préparation différée

- Diagnostic professeur avec robot immobile et lecture numérique précise, sans projet supplémentaire élève ni affichage lent concurrent. Préparer plusieurs mesures valides.
- Base `Mon-obstacle-fixe`, même modèle que le jour 3, initialisation et arrêt accompagnés, sans ancien trajet ni événement moteur. Vérifier que la règle répétée ne démarre pas avant la préparation du robot.
- Règle complète `<` avec deux branches, lecture directe et faible puissance fixe, sans commande temporisée longue qui retarderait la décision. Définir la cadence après essais.
- Scènes permettant une avance initiale puis un arrêt avant contact pendant la même exécution ; procédure de reprise simulation arrêtée. Vérifier séparément si le retour à une mesure éloignée dans cette même exécution est possible ; ce retour reste complémentaire et n'exige pas de déplacer le robot en mouvement.
- Tableau de lecture avec égalité : les 20 cm de la fiche sont fictifs, pas le seuil de simulation annoncé. Ne pas exiger de fabriquer une mesure exactement égale dans l’interface.
- Référence avec limite fixe et copie `Mon-robot-prudent` : `seuil` initialisé au démarrage, puis utilisé dans la même comparaison. Aucune variable technique supplémentaire à enseigner.
- Réglages de référence visibles et seconde valeur vérifiée pour une modification guidée : avance initiale puis arrêt différent avant contact. Sauvegarde externe et procédure de reprise si l’élève a perdu le projet. Pas de nouvelle installation ni de compte requis par ces documents.

## Conducteur — 120 minutes

| Temps | Activité | Repère attendu |
| --- | --- | --- |
| 0–10 | Reprise, accès et nouvelle base | Arrêt et deux cas retrouvés ; ancien trajet préservé |
| 10–25 | Mesures observées, robot immobile | Capteur et distance reçue montrés |
| 25–35 | Limite fixe, prévisions et égalité sur support | Mesure/limite distinguées, `<` lu dans les trois cas |
| 35–50 | Construction des deux branches et premier essai accompagné | Avance ou arrêt expliqué à partir de la mesure |
| 50–60 | Pause hors écran | Aucun travail pendant la pause |
| 60–75 | Approche d'un obstacle dans une exécution et autres scènes préparées | Avance puis arrêt avant contact sans relance ; retour au loin facultatif |
| 75–100 | Copie, introduction accompagnée de `seuil`, essai à valeur identique puis modification guidée si possible | Initialisation et utilisation montrées ; prévision accompagnée d’un changement |
| 100–110 | Sauvegarde et reprise | Fixe préservé, prudent récupérable, aides notées |
| 110–120 | Bilan et reprise ciblée | Mesure reçue versus limite choisie expliqué ; besoins pour le jour 5 identifiés |

Ce minutage est un budget. Faire alterner prévision, geste et essai ; fournir les gestes d’interface si nécessaire. Prioriser les deux cas fixes compris et testés, puis introduire la variable avec aide et vérifier la substitution à valeur identique. Si cette étape prend le temps disponible, reporter la modification guidée au début du jour 5 et utiliser la reprise ciblée RB09 avant le choix personnel : comparer sur papier 23 à seuil = 20 puis 25, pointer initialisation/utilisation, puis prévoir et comparer deux valeurs réellement vérifiées depuis la même scène. Si la variable elle-même n’a pas pu être travaillée, reprendre d’abord son introduction RB08. Le défi autonome est réservé au jour 5 ; préserver la pause, les essais et la sauvegarde.

## Paroles de découverte

« Hier nous avions choisi une suite de mouvements. Aujourd’hui une information reçue va faire choisir l’action. Commençons avec le robot arrêté pour observer cette information. »

« La distance vient du capteur. La limite est un nombre que nous choisissons. Quel nombre change quand la scène change ? »

« Si la mesure est plus petite que notre limite : Arrêter. Sinon : Avancer. Une nouvelle lecture peut sélectionner de nouveau la même action ou l’autre. »

« Nous donnons maintenant un nom à notre réglage : seuil. Ce nom indique que le nombre est notre limite d'arrêt ; il ne donne pas un pouvoir nouveau au robot. Avec la même valeur, notre règle ne doit pas changer. Montre où nous lui donnons la valeur, puis où nous l’utilisons. »

Ne pas présenter le seuil comme une distance mesurée, la variable comme un compteur, ni l’arrêt automatique comme une sécurité physique garantie.

## Questions et réponses

| Question | Réponse acceptable |
| --- | --- |
| D’où vient la distance ? | Du capteur dans la scène simulée, pas du nombre choisi comme limite |
| Qui choisit la limite ? | Nous, comme réglage de la règle |
| À 20, avec la question distance < 20, quelle action ? | Sinon, donc Avancer ; 20 n’est pas plus petit que 20 |
| Si la mesure reste proche à la lecture suivante ? | Arrêter de nouveau ; pas une alternance obligatoire |
| Pourquoi relire ? | La situation peut changer, il faut pouvoir choisir selon la nouvelle mesure |
| Pourquoi retirer le trajet d’hier ? | Il pourrait commander les mêmes moteurs en contradiction avec la règle |
| `seuil` reçoit-il automatiquement la distance ? | Non, ici sa valeur est choisie au démarrage |
| Remplacer 20 par `seuil` valant 20 change-t-il la règle ? | Non, la comparaison utilise la même valeur ; exemple de lecture, pas réglage validé |
| Pourquoi relancer après avoir changé la valeur initiale ? | Pour exécuter de nouveau l’action qui donne sa valeur à `seuil` |
| Quand la mesure redevient éloignée ? | La règle peut redemander d’avancer ; ce n’est pas un arrêt mémorisé |

## Aides graduées

Mesure/limite : montrer une mesure puis une limite écrite séparément. Si l’élève les confond, garder la limite constante et montrer deux scènes ; ensuite garder une distance fictive constante et changer seulement la limite sur le tableau. Aucun calcul de physique.

Condition : lire « plus petite que », demander oui/non puis l’action. Pour l’égalité, comparer deux nombres identiques sur support, pas chercher un placement précis au simulateur. Construire les deux branches ensemble ; une seule commande Arrêter au début ne prouve pas la décision.

Répétition : lire une trace loin → proche → encore proche → loin. Faire constater au minimum loin → proche dans la même exécution : le robot avance, sa mesure diminue à l'approche, puis la règle commande l'arrêt sans relance. Des relances séparées prouvent les deux cas, pas à elles seules la réévaluation. Le retour au loin reste un essai complémentaire si son geste a été vérifié ; ne pas déclarer ce retour observé si le support ne le permet pas.

Variable : après la règle fixe, créer la copie ; donner une valeur à `seuil` avant la règle, puis remplacer le nombre de la comparaison par sa valeur. Faire pointer ces deux endroits, lire la même valeur et vérifier la conservation du résultat avant de modifier le réglage. Expliquer que ce nom rend le rôle du nombre lisible, sans être indispensable à ce petit programme ni ajouter une nouvelle capacité. Ne pas faire recopier une variante entièrement terminée comme preuve de compréhension.

Modification guidée : proposer une seconde valeur vérifiée et demander une prévision. Lire avec l’élève une même distance comparée à deux limites, puis expliquer ensemble l’effet attendu. La valeur choisie doit laisser une avance initiale et un arrêt avant contact. Garder puissance, comparateur, départ et obstacle fixes ; relancer pour appliquer l’initialisation et observer. Le professeur fournit le réglage et peut montrer le raisonnement. Le choix autonome de mission et de valeur vient au jour 5 ; ne pas en faire une exigence supplémentaire aujourd’hui.

## Erreurs et enquête

| Symptôme | Aides graduées |
| --- | --- |
| Valeur absente, nulle ou étrange | Vérifier validité et portée de la mesure sur la référence ; ne pas conclure automatiquement « obstacle au contact » ou « voie libre » |
| Robot tourne ou suit l’ancien trajet | Vérifier anciennes commandes, événements et assistance active ; retrouver la base à un seul contrôleur |
| Toujours arrêté ou toujours en avance | Lire la mesure réelle, le comparateur, la limite et chaque action ; tester des mesures valides des deux côtés |
| Contact avant l’arrêt | Arrêter la simulation ; vérifier puissance, seuil, orientation, fréquence et attentes avec la référence ; problème de support avant tout nouveau chapitre |
| Arrêt présent mais changement de scène ignoré | Vérifier lecture répétée et commande non bloquante ; une lecture initiale seule ne suffit pas |
| Résultat changé lors de la substitution | Comparer ancienne limite, valeur initiale et emplacement d’utilisation ; vérifier initialisation avant la règle |
| Nouvelle valeur sans effet | Vérifier endroit modifié, relance, initialisation et usage réel de `seuil`, plutôt que changer la scène |
| Robot repart alors qu’on pensait le manipuler | Arrêter la simulation avant repositionnement ; rappeler que la branche sinon peut relancer l’avance |
| Comparaison de seuil incohérente | Vérifier même départ, obstacle, puissance, règle et relance ; refaire deux essais comparables |

La validité des mesures, les gestes de scène et les délais sont des responsabilités de préparation technique. Ne pas inventer un filtrage, une variable de contrôle ou un traitement des valeurs invalides à faire découvrir en urgence aux débutants.

## Bilan et suite

Faire montrer entrée/mesure, limite, deux branches, répétition, initialisation et utilisation de `seuil`. Question de sortie : « Robot immobile et obstacle immobile, je change seulement la valeur initiale de seuil : est-ce la mesure reçue ou la limite choisie qui change ? » Accepter geste, oral ou lecture accompagnée. Noter compréhension et aides, pas validation automatique par une case ou un export.

Préserver le modèle fixe et conserver `Mon-robot-prudent` avec la valeur retenue lors du travail accompagné et une sauvegarde récupérable. Signaler ce qui reste à reprendre, surtout la variable et la réévaluation. Le jour 5 réinvestira ce projet avec une mission choisie : l’élève pourra conserver un réglage pertinent s’il le justifie et le vérifie.

Revue transversale appliquée aux trois supports : première variable davantage accompagnée, défi personnel réservé au jour 5 et fiche élève allégée. La [séance 5](specification-robotique-seance-5.md) est rédigée et corrigée après revue. La préparation et les essais techniques restent différés.
