# Mission balises : chapitre États intégré

15 octobre 2026. Sixième chapitre du [parcours Scratch avancé](roadmap-scratch-avance.md), après [Messages revu et corrigé](revue-scratch-mission-messages.md).

## Chemin élève

Le module [scratch-mission-etats.json](../content/modules/jeux-video/scratch-mission-etats.json) poursuit la sauvegarde personnelle `mission-05.sb3` et produit `mission-06.sb3`. Le départ de secours fournit la fin de Messages après sauvegarde du projet courant. Le catalogue contient 81 modules, dont 23 Scratch, et huit parcours. La dernière partie du parcours, « Terminer et tester le jeu », commence avec ce chapitre ; aucun module Tests vide n'est ajouté.

Trois jalons séparent les transformations :

- **Décision avec arrêt immédiat.** Créer la variable commune `etat`, préparer le départ puis autoriser `en jeu`. La scène mémorise `perdu` ou `gagne` avant ses arrêts existants. Le test de défaite reste prioritaire. Une copie avec score 6 et vies 0 permet de prévoir puis constater la priorité ; la sauvegarde `mission-06-decision.sb3` garde les valeurs normales.
- **Protections avant annonce.** Modifier séparément commandes, collecte, fabrique et trajet des copies. Sauvegarder `mission-06-protections.sb3`, retirer les deux arrêts dans une copie de diagnostic et provoquer réellement une dernière collecte ou un dernier contact. Tester le clavier bloqué, le score inchangé au contact, la suppression des copies et l'absence de nouvelle création après l'attente. Recharger la sauvegarde principale avant la suite.
- **Annonce du résultat.** Remplacer les arrêts de la scène par le signal `resultat`, après le changement d'état. Pilote reçoit ce message, choisit la bulle de deux secondes avec un `si … sinon`, puis arrête tout. Tester les deux fins, les relances pendant la bulle et après l'arrêt, puis sauvegarder `mission-06.sb3`.

La variation change seulement les deux durées d'annonce à trois secondes. La prévision précède l'essai ; sa réponse est repliée. La copie de variation et les diagnostics sont conservés sous d'autres noms, puis le fichier principal est rechargé et ses réglages vérifiés. Les consignes tiennent compte des suffixes ajoutés par le navigateur aux téléchargements.

## Répartition des piles

La référence finale possède huit piles : scène deux, Pilote deux, Balise une, Obstacle trois. Les modèles complets et la référence téléchargeable sont repliés. L'aide existante sur les états s'ouvre dans un autre onglet avec une consigne de retour.

La scène initialise `etat` à `preparation`, remet les quatre autres variables et le décor, attend 0.03 seconde puis autorise `en jeu`. Dans la boucle, une première protection autorise la décision de fin. Une seconde protection, après cette décision, autorise le passage de secteur : elle refuse ce passage si le résultat vient d'être mémorisé au même tour.

Le véhicule protège ensemble les tests de touches et les limites. La collecte exige l'état de jeu et le contact avant le point et le déplacement de Balise. La fabrique teste l'état après son attente de 1.2 seconde. Chaque clone protège mouvement et dégât ; sa boucle se termine à la sortie du bord ou lorsque l'état quitte `en jeu`, puis la copie se supprime. Le test de vies positives est conservé. Les deux réceptions de `secteur2` gardent leur fonction.

La réception de `resultat` appartient uniquement à Pilote. L'état final est fixé avant l'envoi et ne redevient pas `en jeu` dans la boucle : aucune répétition d'annonce. Le drapeau termine l'ancienne exécution et la pile de Pilote efface la bulle avant ses commandes.

## Référence et vérifications

Le [générateur](../scripts/scratch-mission/README.md) produit maintenant sept archives, dont [mission-etats.sb3](../assets/scratch/mission/mission-etats.sb3). Les empreintes SHA-256 des six archives précédentes sont restées identiques après régénération.

Les tests Node comparent les huit modèles complets aux piles de l'archive. Un contrôle supplémentaire vérifie la décision avant le signal, les deux protections successives de la scène, le contrôle de création après attente, la sortie des clones et l'unique arrêt dans la réception de Pilote. Les téléchargements, les aides et la navigation cumulative incluent ce sixième chapitre.

La recette locale dans le moteur Scratch a réussi :

- Départ, commandes et collecte réelle conduisant au secteur 2.
- Victoire par dernière collecte réelle, une seule annonce, blocage du clavier et de la fabrique, suppression des clones avant l'arrêt.
- Défaite par dernière collision réelle, compteur arrêté à zéro, suppression et nouvelle partie.
- Deux conditions de fin préparées ensemble : défaite prioritaire et aucun changement de secteur au même tour.
- État mémorisé avant l'arrêt immédiat dans la variante du premier jalon.
- Copies sans arrêt : clavier et collecte bloqués, compteurs stables, clones supprimés, aucune création après l'attente malgré les piles encore actives.
- Relance pendant l'annonce : bulle effacée et nouvelle partie encore active au-delà de l'ancien délai.
- Variante avec annonce de trois secondes, puis rechargement de la référence principale.

Script local ignoré : `browser-artifacts/check-mission-etats.cjs`. Les variantes de diagnostic sont préparées depuis l'archive par `browser-artifacts/variants-etats.py`, sans modifier les ressources publiques. Résultats : `browser-artifacts/scratch-mission-etats-engine/resultats.json`, captures dans `codecraft-catalog-qa-s4gMjK/` du même dossier. Une première préparation des variantes utilisait à tort la structure du fichier `.sb3` pour modifier les blocs déjà normalisés par le moteur ; la recette a été corrigée pour charger des archives de test valides avant cette exécution réussie.

Les 95 tests Node du profil Scratch ont réussi. `npm run check` complet a ensuite réussi : formatage, lint, catalogue, 232 tests Node et sept suites navigateur. Rapport : `browser-artifacts/run-i2VzmD/summary.json`. Les captures du cours se trouvent dans `scratch-mission-browser/codecraft-catalog-qa-RZC1vt/` de ce rapport.

Captures examinées : diagnostic à 1280 px, annonce et boucle du clone à 320 px, ainsi que la bulle de victoire dans le moteur. Les imbrications restent longues sur mobile et certains noms se répartissent sur plusieurs lignes ; aucun débordement horizontal n'a été observé dans les captures examinées. Après la vérification complète, une dernière harmonisation purement textuelle a encadré les comparaisons dans le texte courant avec le style de code en ligne. Le catalogue a été régénéré et validé, le formatage contrôlé et les nouvelles captures de décision et de consignes de clones relues dans `browser-artifacts/mission-etats-final/codecraft-catalog-qa-kA0e86/`.

Ces contrôles préparent certaines positions et certains compteurs pour isoler les règles. Ils ne constituent ni une partie entière au clavier avec obstacles, ni une reconstruction du projet depuis les palettes, ni un essai d'autonomie avec un élève. Aucun de ces essais pédagogiques n'est déclaré réalisé.

## Suite

La [revue pédagogique d'États](revue-scratch-mission-etats.md) est terminée et ses deux corrections de diagnostic sont appliquées le 16 octobre 2026. Le dépannage distingue l'arrêt final de Pilote des anciens arrêts de la scène, et les essais exigent des copies présentes au moment de la fin. Huit contrôles moteur ciblés distinguent la référence correcte d'une copie défectueuse ; le catalogue et l'affichage des consignes sont vérifiés. Le dernier chapitre Tests personnels reste à rédiger dans le même jeu, en Sol High, puis à examiner en Astra High.
