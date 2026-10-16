# Contrôle final des raccords de Mission balises

16 octobre 2026. Contrôle réalisé après les sept revues et leurs corrections, dans le périmètre confirmé avec l'utilisateur : vérifier les raccords, sans recommencer les revues ni reconstruire systématiquement les chapitres déjà contrôlés.

## Résultat

Aucun raccord manquant ou contradictoire identifié dans les six passages entre chapitres. Les sauvegardes principales, les reprises de secours et les transformations des piles correspondent. Les variantes reviennent aux constantes attendues avant la suite. Le dernier chapitre conserve explicitement le réglage personnel choisi.

La navigation réelle passe les sept chapitres dans l'ordre. Les huit liens d'aide s'ouvrent au clavier dans un autre onglet et leur fermeture conserve le chapitre, la position de lecture et la case cochée. Les 15 liens de téléchargement présents dans le parcours servent des archives accessibles.

Ce résultat clôt le contrôle final des raccords demandé. Il ne déclare pas une construction manuelle intégrale dans Scratch ni une observation d'autonomie avec un élève.

## Passages vérifiés

| Passage                     | Fichier personnel repris | Reprise de secours proposée | Raccord vérifié                                                                                                                                                                                                                                                                                         |
| --------------------------- | ------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Commandes vers Balises      | `mission-01.sb3`         | `mission-commandes.sb3`     | Pilote conserve sa pile, les quatre pas de 4 et les limites. Le score et la collecte sont ajoutés sur la scène et Balise. La variante à 8 est séparée puis le principal rechargé.                                                                                                                       |
| Balises vers Vies           | `mission-02.sb3`         | `mission-balises.sb3`       | Le principal gagne encore à six points après l'essai à deux. Pilote et Balise sont conservés ; trois vies, le danger fixe et la priorité de défaite sont ajoutés.                                                                                                                                       |
| Vies vers Clones            | `mission-03.sb3`         | `mission-vies.sb3`          | La variante à quatre vies est abandonnée par retour au principal à trois. L'ancienne pile entière d'Obstacle est supprimée ; les deux piles de clones la remplacent. La scène prépare la vitesse à 4.                                                                                                   |
| Clones vers Messages        | `mission-04.sb3`         | `mission-clones.sb3`        | Vitesse 4 et intervalle 1.2 seconde sont restaurés après les comparaisons. Pilote et Balise sont conservés. Deux réceptions et le test unique de secteur sont ajoutés ; l'envoi isolé est raccordé puis le bloc de diagnostic retiré par retour au principal.                                           |
| Messages vers États         | `mission-05.sb3`         | `mission-messages.sb3`      | Le seuil de secteur revient à trois points et les constantes de test sont retirées. Les protections complètent les piles existantes. Les deux arrêts de la scène sont remplacés par `resultat` ; l'unique arrêt final appartient ensuite à l'annonce de Pilote. Les copies de diagnostic sont séparées. |
| États vers Tests personnels | `mission-06.sb3`         | `mission-etats.sb3`         | Le principal conserve huit piles et deux annonces de deux secondes après l'essai à trois secondes. Il devient la base personnelle `mission-07-base.sb3`. Seuils, panne et intervalle restent séparés ; la version finale `mission-07.sb3` conserve son choix vérifié.                                   |

L'entrée de Commandes fournit bien `mission-base.sb3`, sans code. Les acteurs, leurs costumes et leurs tailles restent stables dans les sept archives de base à États. Les valeurs d'initialisation évoluent seulement aux endroits annoncés : score, vies, vitesse, niveau, puis état.

Les nombres de piles par archive, dans l'ordre scène/Pilote/Balise/Obstacle, sont : base 0/0/0/0, Commandes 0/1/0/0, Balises 1/1/1/0, Vies 1/1/1/1, Clones 1/1/1/2, Messages 2/1/1/3, États 2/2/1/3. Les archives conservent intégralement Pilote jusqu'à Messages et Balise de Vies à Messages, conformément aux consignes.

## Contrôles exécutés

- `node scripts/build-catalog.cjs --check` : 82 modules et huit parcours cohérents.
- `node --test tests/scratch-mission.test.cjs` : sept tests réussis, couvrant navigation, modèles et archives, panne, protections et transformations des clones et messages.
- Inspection ciblée des sept archives : costumes et tailles, nombres de piles, piles conservées et valeurs préparées au drapeau. Résultats locaux : `browser-artifacts/scratch-mission-raccords/archives.json`.
- Navigation réelle par les six boutons de suite, contrôle des boutons précédents et absence de bouton de suite après Tests personnels.
- Téléchargement des 15 ressources liées dans les sept chapitres : réponses HTTP 200 et signatures ZIP. Les contrôles Node complètent cette vérification de service par la lecture des projets.
- Ouverture des huit aides avec Entrée, puis fermeture de chaque onglet : adresse du chapitre, case cochée et position de lecture conservées. Les deux premières aides sont bien accessibles après ouverture de leur encart replié.

Scénario navigateur local ignoré : `browser-artifacts/check-scratch-raccords.cjs`. Rapport réussi et sept captures de reprise : `browser-artifacts/scratch-mission-raccords/codecraft-catalog-qa-Kq0fUq/`. La capture du raccord États vers Tests personnels a été examinée, avec les deux boutons et les valeurs de reprise lisibles.

La première exécution du scénario attendait une position de défilement identique au pixel près et a signalé un ajustement de sept pixels pendant la mise en page, avec adresse et case conservées. Le scénario a été stabilisé avant l'ouverture et accepte un ajustement de 24 pixels au maximum. Lors de la nouvelle exécution complète, les huit retours ont un décalage mesuré de zéro. Aucun changement de l'application n'a été nécessaire.

## Portée et suite

Les [revues des chapitres](README.md) et les recettes moteur existantes restent les preuves de leurs vérifications respectives. Elles n'ont pas été relancées intégralement pour ce contrôle de raccords. Aucun contenu élève, schéma, fichier de jeu ou rendu n'a été modifié ici.

Les sauvegardes personnelles ont été suivies dans les consignes, pas produites par une reconstruction manuelle complète. Les imports de reprise ne sont pas assimilés à cette reconstruction. L'utilisation avec un élève reste à observer.

Le contrôle demandé est terminé ; il n'introduit pas une nouvelle série de revues obligatoires. Les prochaines corrections peuvent partir des difficultés concrètes d'utilisation. Le chantier local reste à commiter et pousser lorsque l'utilisateur le demande.
