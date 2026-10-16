# Revue du chapitre États de Mission balises

15 octobre 2026. Revue du [sixième chapitre intégré](integration-scratch-mission-etats.md), de ses transformations depuis Messages, de ses diagnostics et de son guide professeur.

## Verdict

La progression décision, protections, puis annonce peut être conservée. La référence Scratch exécute les comportements attendus dans les scénarios déjà contrôlés. Les deux corrections de priorité moyenne décrites ci-dessous sont appliquées le 16 octobre 2026 : diagnostic depuis le jeu terminé et présence de copies au moment de tester leur suppression.

## P2 : adapter le dépannage à la version terminée

**Source :** [scratch-mission-etats.json](../content/modules/jeux-video/scratch-mission-etats.json), `depannage/actions-tardives`, deuxième paragraphe, avec les aides professeur qui renvoient à la copie sans arrêt.

Le dépannage final demande de refaire le diagnostic sans arrêt dans une copie. Or le diagnostic précédent, `diagnostic/copie`, demande de retirer les deux `stop tout` des branches de fin de la scène. Ces deux blocs ont ensuite été remplacés par les émissions de `resultat`. Dans la version terminée, l'unique `stop tout` se trouve après l'annonce dans Pilote.

Un élève qui cherche une protection manquante après avoir construit l'annonce ne trouve donc plus les blocs que la procédure lui demande de retirer. S'il laisse l'arrêt final de Pilote, celui-ci supprime les clones au bout de deux secondes et peut masquer une erreur de suppression des copies.

**Vérification :** comparaison du diagnostic, des étapes `signal` et `annonce`, puis lecture de l'archive finale : zéro arrêt sur la scène, un dans Pilote, zéro dans Balise et Obstacle. Le premier diagnostic est correct à son emplacement initial ; c'est son renvoi tardif qui manque d'adaptation.

**Correction proposée :** préciser une procédure pour la version finale : sauvegarder `mission-06.sb3`, travailler dans une copie, retirer uniquement le `stop tout` placé après le `si … sinon` de l'annonce dans Pilote, conserver le changement d'état et le signal, puis observer les protections au-delà de la bulle. Recharger la version principale après l'essai. Aligner les aides professeur et distinguer ce cas du diagnostic intermédiaire à deux arrêts sur la scène.

**Critère de clôture :** l'élève peut suivre le dépannage depuis la version terminée sans chercher des blocs disparus ; le test ne conserve aucun arrêt global susceptible de masquer l'erreur, et la reprise restaure l'arrêt final.

**Correction appliquée le 16 octobre :** le dépannage décrit la sauvegarde de `mission-06.sb3`, le retrait du seul arrêt après l'annonce de Pilote dans la copie, puis l'observation au-delà de la bulle. La copie d'essai est conservée sous `mission-06-depannage.sb3` et le retour au fichier principal exige score 0, vies 3 et l'arrêt final de Pilote. Les aides professeur distinguent le diagnostic intermédiaire de celui du jeu terminé.

## P2 : imposer des copies présentes au moment de la fin

**Source :** [scratch-mission-etats.json](../content/modules/jeux-video/scratch-mission-etats.json), `diagnostic/victoire` et `diagnostic/defaite`.

L'essai de victoire prépare score 5 puis demande une activation, sans exiger qu'une copie existe encore au moment du résultat. L'essai de défaite prépare une vie puis demande de toucher une copie, sans exiger une autre copie encore présente. La copie touchée se supprime déjà dans sa pile de dégât, indépendamment de la nouvelle sortie de boucle liée à l'état.

Ces essais peuvent donc laisser passer l'oubli de `ou non etat = en jeu` dans la condition de sortie : aucune copie restante ne permet alors d'observer cet oubli. L'aide professeur mentionne plusieurs copies, mais cette précondition n'est pas dans le chemin élève. La recette technique précédente attendait explicitement deux copies avant de déclencher les fins.

**Vérification supplémentaire :** dans une copie locale du diagnostic sans arrêt, seule la sortie liée à l'état a été retirée. La protection des actions, la sortie par le bord et la suppression après coup ont été conservées. Une victoire déclenchée avant la première création laisse zéro copie et ne révèle pas le défaut. Le même fichier, terminé avec deux copies présentes, laisse les deux copies figées après 1.4 seconde. Le défaut est introduit volontairement dans cette copie ; il n'existe pas dans la référence publique.

Script et préparation locaux ignorés : `browser-artifacts/review-etats-diagnostic.cjs` et `browser-artifacts/review-etats-mutant.py`. Résultats dans `browser-artifacts/review-etats-engine/resultats.json`, capture `copies-figees.png` dans `codecraft-catalog-qa-Z5S04E/` du même dossier. Les positions sont injectées pour isoler la précondition ; les contacts et les piles sont exécutés par le moteur. Ce contrôle ne mesure pas le temps d'un trajet au clavier.

**Correction proposée :** rendre la précondition visible dans les tâches élève : déclencher la victoire alors qu'au moins une copie est encore présente, et la défaite alors qu'une autre copie que celle touchée reste présente. Prévoir un placement d'attente sûr et une façon concrète de déclencher la fin sans attendre que ces copies sortent naturellement. Vérifier leur disparition, puis attendre plus d'un intervalle de création pour vérifier séparément l'absence de nouvelles copies.

**Critère de clôture :** une copie volontairement privée de la sortie liée à l'état échoue au diagnostic élève ; la version correcte réussit. Le retrait des copies existantes et le refus des nouvelles créations sont réellement observés.

**Correction appliquée le 16 octobre :** pour la victoire, l'élève attend deux copies avec Pilote à (-160, -140), puis change seulement son ordonnée à 0 pour activer la balise. Pour la défaite, il attend également deux copies et touche celle de droite alors qu'une autre est encore présente. Les consignes distinguent la disparition des copies et l'attente suivante de plus de 1.2 seconde sans nouvelle création.

**Vérification des corrections :** huit scénarios du moteur combinent diagnostic intermédiaire ou final, victoire ou défaite, référence correcte ou copie privée de la sortie liée à l'état. Les huit résultats sont conformes : les copies disparaissent dans la référence et restent visibles dans la copie défectueuse, sans arrêt global pour masquer le défaut. Le rechargement de la référence restaure les compteurs normaux et l'arrêt final après l'annonce. Résultats dans `browser-artifacts/etats-fixes-engine/resultats.json`, script `browser-artifacts/verify-etats-fixes.cjs`, variantes préparées par `browser-artifacts/verify-etats-fixes.py`. Les hauteurs sont fixées à zéro et les positions préparées pour isoler les contacts ; ces essais ne constituent pas une partie entière au clavier ni un essai avec un élève.

Le catalogue a été régénéré et validé. Le formatage et le diff ont été contrôlés. Les captures du diagnostic à 1280 px et du dépannage à 320 px ont été examinées dans `browser-artifacts/etats-fixes-content/codecraft-catalog-qa-L4tF6A/`. Cette correction porte sur les textes élève et professeur ; les suites générales déjà réussies n'ont pas été relancées.

## Éléments conservables et limites

- Les trois jalons rendent explicites les propriétaires, les enveloppes `si` et les changements d'emplacement des arrêts. Le verrouillage précède le signal. La seconde protection de la scène empêche le passage de secteur au tour où la fin est décidée.
- La fabrique contrôle l'état après son attente ; la boucle de chaque clone combine la sortie par le bord et la fin de partie. Les commandes, la collecte et les dégâts disposent de protections cohérentes.
- Les sauvegardes intermédiaires, les variantes, les suffixes des téléchargements et le retour au fichier principal sont nommés. Les réponses de priorité et de variation sont repliées.
- Les modèles complets correspondent aux piles de la référence selon les contrôles existants. Les 232 tests Node et sept suites navigateur avaient réussi dans `browser-artifacts/run-i2VzmD/summary.json`. La recette moteur précédente couvre également les deux fins, la relance pendant l'annonce et la variation de durée.
- Les captures existantes du diagnostic sur ordinateur, de l'annonce et des clones sur mobile ont été examinées pendant l'intégration ; les consignes de clones à 320 px ont été relues pendant cette revue. Les imbrications sont longues à petite largeur, sans débordement visible dans les captures examinées.

Aucun autre défaut bloquant identifié dans le périmètre examiné. Les suites générales n'ont pas été relancées pour cette revue documentaire. Les contrôles moteur ciblés ne constituent ni une reconstruction complète dans l'éditeur, ni un essai d'autonomie avec un élève.

## Suite

Poursuivre le chapitre Tests personnels en Sol High, puis sa revue pédagogique en Astra High.
