# Bouton et décision — adaptation RB03/RB04

Intégration du 9 octobre 2026. Leçons : `#module/robotique-bouton?parcours=robotique-debutants` et `#module/robotique-decision?parcours=robotique-debutants`. Guides : `prof.html#guide/robotique-bouton` et `prof.html#guide/robotique-decision`.

## Découpage conservé

RB03 : préserver Mon-signal → copier le départ à relier → distinguer entrée/sortie → compléter uniquement D2 vers Terminal 2a → prévoir et observer le diagnostic professeur 0/1/0 → conserver Mon-bouton. Aucun si/sinon ni moniteur série à construire par l’élève.

RB04 : reprendre ce départ → relier 0/LOW et 1/HIGH à la lecture D2, distincte de la commande D8 → choisir sinon sur un schéma avant la règle complète → lire quatre consultations, dont « toujours maintenu » → construire les deux branches dans forever → vérifier la prévision et essayer repos/maintien/relâchement deux fois → proposer le résultat opposé sur Mon-bouton-inverse avant les indices → retrouver les deux versions.

Les bases à relier/préconnectée ne contiennent pas la solution. Les références principale/inversée et le diagnostic sont uniquement proposés dans les guides. Aucun calendrier de stage, événement d’appui, compteur ou C++ n’est imposé. Le bonus reste facultatif. Les compétences restent suivies manuellement, sans validation par les cases.

## Visuels et limites

`robotique-bouton-entree.svg` décrit les connexions, pas la position physique des bornes ; leur nom doit être repéré dans le composant. `robotique-bouton-decision.svg` est une trace, pas une pile de blocs à recopier. Le support partiel sinon manquant est textuel et ne nécessite aucune nouvelle copie exécutable.

Partages vérifiés dans [le suivi](partage-tinkercad.md). Les essais professeur et leurs limites sont dans [la recette](recette-tinkercad-bouton.md). Ouverture, duplication, enregistrement, reprise avec accès élève distinct, observation continue d’un maintien prolongé et accessibilité du geste restent à tester. Aucune validation en classe ni publication distante n’est annoncée.

## Vérification de l’intégration

Les 140 tests `tests/*.test.cjs` passent, dont les contrôles des identifiants, compétences et cibles des guides RB03/RB04. Sur le serveur local : deux pages élèves affichées, navigation RB04 → RB03 vérifiée, schéma RB03 chargé, deux guides accessibles et parcours mis à jour. Le thème robotique est repris par les composants existants. Aucun commit effectué.
