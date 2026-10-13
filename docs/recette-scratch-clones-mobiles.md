# Scratch : clones mobiles

Ressource originale CodeCraft intégrée le 13 octobre 2026, après les bases des clones. Elle distingue le modèle qui crée les copies et la pile que chaque copie exécute pour avancer puis se supprimer.

Pendant un atelier accompagné, ouvrir seulement la section utile puis revenir au projet des élèves. L’activité complète est repliée et facultative ; elle n’ajoute pas de travail obligatoire au stage.

## Accès et sources

- [Création des copies](http://localhost:8000/#module/scratch-clones-mobiles?parcours=scratch-debutants&activite=fabrique)
- [Déplacement et suppression](http://localhost:8000/#module/scratch-clones-mobiles?parcours=scratch-debutants&activite=mouvement)
- [Dépannage](http://localhost:8000/#module/scratch-clones-mobiles?parcours=scratch-debutants&activite=depannage)
- [Activité indépendante](http://localhost:8000/#module/scratch-clones-mobiles?parcours=scratch-debutants&activite=atelier)
- [Guide professeur](http://localhost:8000/prof.html#guide/scratch-clones-mobiles)

Contenu : `content/modules/jeux-video/scratch-clones-mobiles.json`. Archives éditables : `assets/scratch/clones-mobiles-depart.sb3` et `assets/scratch/clones-mobiles-reference.sb3`. Le départ fournit un sprite Balle sans script ; la référence contient les deux piles. Les costumes et les projets sont créés pour cet exemple.

## Vérification du site

Contrôle ciblé Scratch : 84 tests Node réussis. `npm run check` complet : 221 tests Node et toutes les suites navigateur réussis.

Les tests couvrent l’accès direct aux deux piles, le dépannage et l’activité repliés par défaut, l’ouverture des parents d’une section imbriquée, les liens professeur et les téléchargements des deux archives. Les captures sont examinées aux largeurs 1280 et 320 px ; les tests couvrent également 390 px. Les grands schémas restent dans leur panneau, sans débordement de la page.

Les suites navigateur utilisent les mêmes contrôles d’accès, de téléchargement et de largeur pour les supports vies/contacts et clones mobiles. `tests/scratch-clones-mobiles.test.cjs` est inclus dans le profil `scratch`.

## Essais dans le moteur Scratch

Essais avec les bibliothèques officielles `@scratch/scratch-vm`, `@scratch/scratch-render` et `@scratch/scratch-storage` version 15.2.0 dans Chrome. Les deux archives sont importées par `loadProject`. Les bibliothèques et le banc d’essai local `browser-artifacts/scratch-runtime/clones-check.cjs` ne sont pas intégrés au site.

| Essai                                  | Résultat observé                                                   |
| -------------------------------------- | ------------------------------------------------------------------ |
| Drapeau                                | Modèle caché, immobile en (-180, 0)                                |
| Série de départs                       | Exactement trois créations, espacées d’environ 0,6 seconde         |
| Initialisation des copies              | Position (-180, 0) et visibilité cachée héritées du modèle         |
| Déplacement                            | Trois copies visibles à des x distincts ; le modèle reste immobile |
| Fin du trajet                          | Chaque copie supprimée après x = 200, aucune copie restante        |
| Relance pendant une série, deux essais | Anciennes copies supprimées, trois nouvelles créations             |
| Export puis réimport de la référence   | Série de trois copies et suppression retrouvées                    |
| Import du départ                       | Balle visible sans script ; le drapeau ne crée pas de copies       |

Captures moteur : `browser-artifacts/codecraft-catalog-qa-eiant4/`. Ces fichiers locaux sont ignorés par Git. Le compteur affiché dans le banc d’essai sert à observer les copies ; il ne fait pas partie du projet Scratch.

## Contrôle restant dans l’éditeur

Le [relevé du 13 octobre dans l’éditeur officiel](recette-scratch-editeur.md) confirme une partie des gestes et comportements. Il distingue les résultats observés des contrôles encore à faire.

Avant une séance autonome, confirmer les gestes d’importation, la reconstruction des deux piles depuis les palettes françaises et l’enregistrement depuis le menu Fichier dans l’éditeur utilisé en classe. Le contrôle moteur valide les archives et leur fonctionnement, pas ces gestes d’interface ni la compréhension des élèves.

La fiche élève propose ensuite des modifications séparées : pause de création à 0,3 seconde, pas de déplacement à 3, quatre copies, puis hauteur aléatoire dans une copie du projet. Ces variantes sont à essayer après reconstruction ; elles ne sont pas incluses dans la référence fournie.

Ce support traite du cycle des copies. Les contacts, les dégâts, le score et la fin de partie appartiennent au projet dans lequel les élèves l’utilisent. La borne x > 200 est choisie pour rester atteignable malgré la limite de déplacement des sprites près de la scène.
