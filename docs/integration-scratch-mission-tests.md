# Mission balises : Tests personnels intégré

16 octobre 2026. Septième et dernier chapitre rédigé du [parcours Scratch avancé](roadmap-scratch-avance.md), après [États revu et corrigé](revue-scratch-mission-etats.md).

## Chemin disponible

Le module [scratch-mission-tests.json](../content/modules/jeux-video/scratch-mission-tests.json) est un projet. Il poursuit le fichier personnel `mission-06.sb3`, conserve une base de comparaison `mission-07-base.sb3` et aboutit à la version personnalisée `mission-07.sb3`. Le parcours compte désormais ses sept modules en trois parties. Le catalogue contient 82 modules, dont 24 Scratch, et huit parcours.

Le chemin visible comprend :

- Un carnet papier ou texte avec fichier, départ, action, attendu, observé et conclusion.
- Des essais des quatre commandes, des bornes, du point par contact et des deux positions de Balise.
- Une copie de seuils : score de départ 1, contacts réels vers deux, trois, quatre, cinq et six points ; puis score 0 et une vie pour la défaite. La relance de cette copie retrouve une vie, et le retour à la base restaure trois vies.
- Une enquête dans une copie volontairement défectueuse du même jeu, avec observation avant hypothèse, indices gradués et correction repliés. La réparation est conservée séparément avant le retour à la base personnelle.
- Une comparaison de l'intervalle 1.2 puis 1.8 seconde, sur environ dix secondes à l'abri, sans collecter. L'élève compte les nouvelles apparitions et distingue leur fréquence de la vitesse de déplacement.
- Un choix limité de règle personnelle : quatre vies, intervalle 1.5 seconde ou déplacements par pas de 5 dans les quatre directions. L'élève prévoit et teste sans recopier une pile complète.
- Une recette depuis le fichier personnel rechargé, avec les valeurs du choix conservé, les deux fins et les relances pendant et après annonce.

La base personnelle est rechargée entre les expériences. Après le choix final, la recette conserve au contraire le réglage personnel : elle attend quatre vies si ce choix a été retenu et trois pour les autres choix. Le carnet et les fichiers d'essai restent séparés. Le chapitre ne publie pas de solution unique prétendant représenter toutes les versions `mission-07.sb3`.

L'aide Débogage s'ouvre dans un autre onglet avec une consigne de retour. Les 17 modules débutants et les trois ressources indépendantes sont conservés. Aucun changement de rendu, de suivi ou de schéma n'est nécessaire.

## Laboratoire de panne

Le fichier [mission-panne-relance.sb3](../assets/scratch/mission/mission-panne-relance.sb3) est identifié comme une panne volontaire. Il reprend la référence États, conserve niveau à 2 comme dans une sauvegarde après passage de secteur et omet sa remise à 1 au drapeau. Le départ retrouve le décor 1 et la vitesse 4, mais garde niveau 2 : à trois points, le changement de secteur ne se déclenche pas.

Le laboratoire est importé après conservation de la base personnelle. Les indications élève ne révèlent pas immédiatement le bloc manquant. Les indices distinguent la variable du décor, puis orientent vers l'initialisation. La correction ajoute `mettre niveau à 1` avec les autres valeurs de départ sur la scène. Les deux autres acteurs et Obstacle gardent exactement leurs définitions d'États.

Le [générateur public](../scripts/scratch-mission/README.md) produit huit archives : sept références de base à États, puis cette panne. Les sept archives précédentes ont conservé leurs empreintes SHA-256 après la nouvelle génération. La référence correcte de comparaison reste États ; aucune archive finale supplémentaire n'est dupliquée pour Tests personnels.

## Vérifications et limites

Les tests du parcours incluent le septième module, l'absence de bouton de cours suivant, le guide, les réponses repliées, les liens d'aide et les téléchargements réellement servis. Le contrôle de la panne vérifie la valeur conservée, l'absence de remise à 1, la conservation des autres blocs et des acteurs. Les captures ciblent la méthode, l'enquête, la comparaison, le choix et la recette finale sur ordinateur et mobile.

Les 96 tests Node du profil Scratch ont réussi. `npm run check` complet a réussi : formatage, lint, catalogue, 233 tests Node et sept suites navigateur. Rapport : `browser-artifacts/run-e6ACM9/summary.json`. Les captures du cours sont dans `scratch-mission-browser/codecraft-catalog-qa-lyi834/` de ce rapport. Captures examinées : panne à 320 px, enquête et choix à 1280 px, recette finale à 320 px. Les textes restent longs sur mobile et les liens de téléchargement se répartissent sur plusieurs lignes ; aucun débordement horizontal n'est observé dans ces captures.

La recette du moteur Scratch a réussi les huit contrôles suivants :

- Fichier public de panne : niveau 2 au départ, décor 1 et vitesse 4 toujours présents à trois points.
- Réparation par l'ajout de l'initialisation au drapeau : premier secteur à deux points, transition à trois, puis nouveau départ à niveau 1.
- Contacts réels vers les limites deux/trois et cinq/six, avec score conservé à quatre.
- Comparaison d'environ dix secondes par réglage : huit apparitions avec 1.2 seconde, cinq avec 1.8 seconde dans l'exécution mesurée ; déplacements à 4 dans les deux cas. Ces nombres sont des observations de cette recette, pas une exigence de chronométrage pour l'élève.
- Réglage personnel à 1.5 seconde exécuté sans modification de la vitesse ni du score.
- Quatre contacts distincts retirant les quatre vies jusqu'à la défaite, retour à quatre au drapeau et conservation de ce réglage après export/réimport `.sb3` par le moteur.
- Pas de 5 dans les quatre directions, quatre bornes conservées.
- Rechargement de la base avec score 0, vies 3, niveau 1, vitesse 4 et premier secteur.

Script et variantes locaux ignorés : `browser-artifacts/check-mission-tests.cjs`, `browser-artifacts/variants-mission-tests.py`. Résultats : `browser-artifacts/scratch-mission-tests-engine/resultats.json`, captures dans `codecraft-catalog-qa-lEVhth/` du même dossier. La première exécution a atteint le contrôle des commandes puis rencontré une assertion du scénario distinguant le zéro signé négatif de zéro ; l'assertion a été corrigée pour comparer la valeur absolue du déplacement, puis l'exécution complète a réussi. Aucun changement du jeu n'a été nécessaire pour cette correction du scénario.

Les contrôles moteur préparent des positions et certains compteurs pour isoler les règles. Ils ne remplacent ni une partie entière au clavier avec les obstacles, ni une reconstruction depuis les seules consignes, ni une observation d'autonomie avec un élève. Les carnets d'élèves et leurs modifications personnelles ne sont pas simulés comme des acquis.

## Suite

Faire la revue pédagogique de Tests personnels en Astra High, puis appliquer les corrections en Sol High. Poursuivre ensuite la recette du parcours entier depuis les seules consignes, en distinguant fonctionnement technique, chemin documentaire et essais en situation. Les sept chapitres rédigés ne suffisent pas à déclarer cette recette d'autonomie réalisée.
