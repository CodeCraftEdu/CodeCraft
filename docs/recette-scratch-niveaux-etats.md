# Scratch : niveaux et états

Ressource originale CodeCraft intégrée le 13 octobre 2026. Elle sépare la progression (`niveau`) et l’autorisation des actions (`etat`). Une transition change d’abord la variable, puis envoie le message. La victoire ferme les actions avant son affichage.

Pendant un atelier accompagné, ouvrir la section utile puis revenir au projet des élèves. L’activité complète est repliée et facultative ; elle n’ajoute pas de travail obligatoire au stage.

## Accès et sources

- [Passage de niveau](http://localhost:8000/#module/scratch-niveaux-etats?parcours=scratch-debutants&activite=niveau)
- [Victoire](http://localhost:8000/#module/scratch-niveaux-etats?parcours=scratch-debutants&activite=victoire)
- [Protection des actions](http://localhost:8000/#module/scratch-niveaux-etats?parcours=scratch-debutants&activite=actions)
- [Dépannage](http://localhost:8000/#module/scratch-niveaux-etats?parcours=scratch-debutants&activite=depannage)
- [Activité indépendante](http://localhost:8000/#module/scratch-niveaux-etats?parcours=scratch-debutants&activite=atelier)
- [Guide professeur](http://localhost:8000/prof.html#guide/scratch-niveaux-etats)

Contenu : `content/modules/jeux-video/scratch-niveaux-etats.json`. Archives éditables : `assets/scratch/niveaux-etats-depart.sb3` et `assets/scratch/niveaux-etats-reference.sb3`. Le départ contient Cible sans script, deux costumes et trois variables globales. La référence contient un contrôleur au drapeau, une pile de clic et deux réceptions de messages.

Les seuils sont des scores cumulés : niveau 2 à trois points, victoire à six. Le changement de niveau conserve le score. Le test de victoire a priorité ; le test de niveau consulte encore l’état ensuite. Les costumes et projets sont créés pour cet exemple de clics, indépendant d’un jeu de stage.

## Vérification du site

Contrôle ciblé Scratch : 86 tests Node réussis. Le contrôle complet `npm run check` est réussi : formatage, lint, catalogue, 223 tests Node et toutes les suites navigateur.

Les tests vérifient l’accès direct aux trois sections, le dépannage et l’activité repliés par défaut, l’ouverture des parents d’une activité imbriquée, les liens professeur et les deux téléchargements. Les captures couvrent 1280, 390 et 320 px. Les grands schémas restent dans leur panneau, sans débordement de la page.

`tests/scratch-niveaux-etats.test.cjs` est inclus dans le profil `scratch`. Les trois ressources ponctuelles partagent les contrôles navigateur de largeur, de navigation et de téléchargement.

## Essais dans le moteur Scratch

Essais avec les bibliothèques officielles `@scratch/scratch-vm`, `@scratch/scratch-render` et `@scratch/scratch-storage` version 15.2.0 dans Chrome. Les archives sont importées par `loadProject`. Les clics passent par l’entrée souris du moteur ; le banc d’essai ne remplace pas les piles par une simulation JavaScript.

| Essai                                    | Résultat attendu et vérifié                                            |
| ---------------------------------------- | ---------------------------------------------------------------------- |
| Drapeau                                  | Score 0, niveau 1, état en jeu, costume orange et taille 100           |
| Trois clics                              | Score 3, niveau 2, costume bleu et taille 70 ; un seul message niveau2 |
| Clic suivant                             | Score 4, aucun nouvel envoi de niveau2                                 |
| Six clics au total                       | État gagné ; un seul message victoire                                  |
| Clics pendant le message final           | Score reste à 6                                                        |
| Après les deux secondes                  | Réception arrivée à stop tout, aucune pile restante                    |
| Clic après l’arrêt                       | Aucun point ajouté                                                     |
| Deux relances pendant la victoire        | Variables, costume et taille de départ retrouvés                       |
| Score porté directement à 10 au niveau 1 | Victoire prioritaire, aucun passage tardif au niveau 2                 |
| Export puis réimport de la référence     | Départ, transitions et arrêt retrouvés                                 |
| Import du départ                         | Aucun script ; les clics ne donnent aucun point                        |

Les bibliothèques, le banc d’essai `browser-artifacts/scratch-runtime/etats-check.cjs` et les captures restent locaux, ignorés par Git. Les compteurs du banc d’essai sont affichés hors de la scène ; ils ne reproduisent pas les moniteurs de l’éditeur.

Captures moteur : `browser-artifacts/codecraft-catalog-qa-jLA9Vg/`. Captures du site : `browser-artifacts/run-cp0NoY/scratch-lot3-browser/codecraft-catalog-qa-NEajGS/`. Relecture visuelle effectuée pour la victoire sur ordinateur et à 320 px, ainsi que pour la préparation complète sur ordinateur.

## Contrôle restant dans l’éditeur

Le [relevé du 13 octobre dans l’éditeur officiel](recette-scratch-editeur.md) confirme une partie des gestes et comportements. Il distingue les résultats observés des contrôles encore à faire.

Avant une séance autonome, confirmer importation, reconstruction des piles depuis les palettes françaises et sauvegarde via Fichier dans l’éditeur utilisé en classe. Le contrôle moteur valide les archives et leur fonctionnement, pas ces gestes d’interface ni la compréhension des élèves.

Les adaptations proposées, seuils quatre/huit et affichage de trois secondes, sont à essayer après reconstruction. Elles ne sont pas incluses dans la référence.

Dans un projet plus grand, protéger chaque action concernée par l’état, notamment après une attente. La référence protège les points d’une cible à cliquer ; elle ne comporte ni déplacements, ni dégâts, ni créations de clones. Ajouter une défaite ou une transition avec chargement demande de définir leur priorité et leur état avant d’intégrer les piles.
