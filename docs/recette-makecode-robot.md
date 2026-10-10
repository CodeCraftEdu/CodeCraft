# MakeCode — recette RB05/RB06 du 9 octobre 2026

## Périmètre réellement essayé

Essais professeur dans le navigateur intégré, MakeCode micro:bit 9.0.12. Extension ajoutée depuis le catalogue officiel avec `https://github.com/microsoft/microbit-robot`. La [documentation Microsoft](https://makecode.microbit.org/pkg/microsoft/microbit-robot) affiche 2.7.4 et bêta ; ce numéro documentaire ne constitue pas à lui seul une vérification de la version incorporée aux exports. Le modèle utilisé est `elecfreaks cutebot`. Extension toujours non confirmée par KidnKod. Aucun logiciel installé, matériel acheté ou projet publié.

Les séquences ont été préparées dans l’éditeur de texte puis converties en vrais blocs MakeCode pour la recette. Les leçons demandent uniquement des blocs, pas du JavaScript à l’élève.

## Ressources

Fichiers réels exportés par MakeCode, dans `resources/robotique/makecode/` :

- `RB05-Mes-images-reference.hex` : A affiche un cœur ; B affiche un carré ; aucun affichage concurrent. Référence professeur, pas départ élève. Clic A puis absence d’autre appui : cœur conservé. Clic B : carré. Export puis réimport effectués, blocs retrouvés et A/B retestés.
- `RB06-Mon-trajet-depart.hex` : modèle initialisé, aides OFF, pause 2000 ms, arrêt. Aucun mouvement. Export et réimport effectués ; blocs retrouvés et robot immobile.
- `RB06-Trajet-reference.hex` : même préparation, avance direction 0 / puissance 50 % / 1500 ms, virage direction 50 / puissance 50 % / 600 ms, arrêt. Export et réimport effectués ; blocs, scène, mouvement et orientation finale retrouvés. Référence complète séparée du départ.

La référence minimale avancer/arrêter est également préparée et exportée : même préparation, direction 0 / 50 % / 1500 ms, puis arrêt. Son fichier est réservé au professeur ; ce n’est pas un second départ à imposer à l’élève.

## Configuration et interprétation

Une pile `on start`, pas de commande moteur sur A/B et pas de `forever`. Trois aides fournies sur OFF : `line following`, `speed smoothing`, `sensor and motor display`. La ligne dessinée dans la scène n’est pas suivie automatiquement. Les rectangles présents dans la scène ne participent pas à une décision dans ce programme.

Une pause de préparation de 2000 ms précède les mouvements. Les premiers essais courts immédiatement après chargement rendaient le déplacement peu visible. Avec la scène chargée, pause et relance, l’avance puis le virage sont visibles. Ce délai n’est pas une garantie sur toute connexion ; vérifier la scène avant la distribution.

Le bloc `robot motor steer` comporte une durée optionnelle, montrée avec le + lorsqu’elle est cachée ; unité réelle **ms**. La commande temporisée fait passer à la suite, mais ne remplace pas `robot motor stop`. Ne pas utiliser un programme volontairement sans arrêt comme essai élève. Le schéma incomplet se lit seulement.

La référence complète a été relancée : départ en haut à gauche, orientation vers la droite ; trajet puis orientation changée et immobilité finale. `Restart` a remis cette scène au départ observé. **Réserve : plusieurs essais en arrière-plan ont montré peu de déplacement. Après affichage du navigateur, deux relances de la référence minimale ont montré une avance nette puis un arrêt, depuis le même départ.** Cela suggère un effet de l’affichage, sans établir la cause avec certitude. Garder MakeCode visible, sans changement d’onglet pendant le trajet. Le fonctionnement n’est pas validé dans toutes les conditions d’affichage ; refaire la recette dans le navigateur de cours. Si le départ diffère, arrêter avant toute manipulation et accompagner la remise en place ; pas d’orientation manuelle inventée dans la fiche.

Pas de conversion du trajet en cm, d’angle garanti ou de puissance assimilée à une vitesse mesurée. Le capteur n’était pas testé dans cette recette RB05/RB06 ; voir désormais la [recette capteurs distincte](recette-makecode-capteurs.md). Elle ne valide pas à elle seule la publication de RB07/RB08.

## Sauvegarde : limite constatée

Exports et premier import anormalement lents par moments. MakeCode a affiché **Warning! Project Auto-Save Disabled** dans le navigateur intégré. Après acknowledgement, l’import de la référence et du départ a abouti. Ne pas masquer cette alerte ni prétendre que le stockage local est fiable ici.

La leçon impose une sauvegarde .hex externe, nommée et retrouvée avec aide : accueil → Import → Import File → sélection du .hex → Go ahead. Pas de branchement de carte, de WebUSB ou de compte nécessaire pour notre simulation. Le fichier conserve les sources importables. Tester sauvegarde, import, nom et reprise dans le navigateur réellement utilisé en cours. Le stockage local seul ne suffit pas.

## Restant avant animation

- Navigateur de cours, langue française, accès élève, chargement acceptable et persistance locale si utilisée.
- Réimport de la référence minimale ; principal et copie personnelle distincts, sauvegardes nommées. Le réimport RB05 a été effectué dans la recette professeur.
- Deux essais comparables du défi de durée, avec prévision avant indice et arrêt conservé ; observer raisonnement séparément des aides de souris.
- Si retenue : démonstration facultative de puissance, ligne droite seule, même durée et départ, deux puissances positives. Non essayée, donc absente des tâches élève publiées.
- Capteur et décision des modules suivants : recette distincte, sans déclarer l’ensemble du robot validé.

## Intégration

`robotique-microbit` et `robotique-trajet`, guides enseignants, captures des vrais blocs et téléchargement du seul départ élève. Deuxième étape du parcours désormais disponible. Aucun calendrier KidnKod imposé aux leçons et aucun commit créé. Les tests du site ne valident pas la pratique en classe.
