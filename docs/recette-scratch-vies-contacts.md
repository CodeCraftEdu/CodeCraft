# Scratch : vies et contacts

Ressource originale CodeCraft intégrée le 13 octobre 2026. Elle explique une règle précise : un dégât par contact continu, puis une séparation avant le dégât suivant. Elle peut soutenir une explication dans un atelier existant. L’activité complète reste repliée et facultative ; elle ne constitue pas une étape supplémentaire obligatoire du stage.

## Accès

- [Explication courte](http://localhost:8000/#module/scratch-vies-contacts?parcours=scratch-debutants&activite=solution)
- [Dépannage](http://localhost:8000/#module/scratch-vies-contacts?parcours=scratch-debutants&activite=depannage)
- [Activité indépendante](http://localhost:8000/#module/scratch-vies-contacts?parcours=scratch-debutants&activite=atelier)
- [Guide professeur](http://localhost:8000/prof.html#guide/scratch-vies-contacts)

Contenu : `content/modules/jeux-video/scratch-vies-contacts.json`. Projets éditables : `assets/scratch/vies-contacts-depart.sb3` et `assets/scratch/vies-contacts-reference.sb3`. Le départ contient le déplacement ; la référence ajoute la surveillance des vies. Les costumes et les projets sont créés pour cet exemple.

## Vérification du site

`npm run check` réussi : 219 tests Node et toutes les suites navigateur. Le profil `scratch` inclut les nouveaux tests de navigation et de fichiers publics.

Vérifications : accès direct à la solution, ouverture des parents pour un lien vers une activité imbriquée, activité et dépannage repliés par défaut, présence du guide professeur, téléchargement des deux archives, type MIME et signature ZIP. Captures examinées sur ordinateur et à 320 px ; la page ne déborde pas, les grands schémas utilisent le défilement de leur panneau.

Captures locales ignorées par Git : `browser-artifacts/run-4mPHmX/scratch-lot3-browser/codecraft-catalog-qa-rW77PO/`.

## Vérification dans le moteur Scratch

Essais effectués avec les bibliothèques officielles `@scratch/scratch-vm`, `@scratch/scratch-render` et `@scratch/scratch-storage` version 15.2.0, dans Chrome. Les archives `.sb3` sont importées par `loadProject` ; le rendu et la détection de contact sont ceux du moteur Scratch. Les bibliothèques et le banc d’essai restent dans `browser-artifacts/scratch-runtime/`, hors du site et de ses dépendances.

| Essai                                               | Résultat observé                                                     |
| --------------------------------------------------- | -------------------------------------------------------------------- |
| Drapeau, loin de Danger                             | Trois vies, Pilote en (-120, 0)                                      |
| Premier contact puis maintien de cinq secondes      | Une vie retirée, compteur stable à deux                              |
| Flèche droite pendant l’attente                     | Pilote continue de se déplacer                                       |
| Séparation complète puis nouveau contact, deux fois | Compteur à un, puis à zéro                                           |
| Contact supplémentaire à zéro                       | Compteur reste à zéro                                                |
| Deux relances successives pendant un contact        | Trois vies et position de départ retrouvées                          |
| Export par `saveProjectSb3`, puis réimport          | Trois vies au drapeau, retrait unique au contact                     |
| Import du départ                                    | Déplacement fonctionnel, aucune surveillance de dégâts déjà présente |

Captures locales : `browser-artifacts/codecraft-catalog-qa-iz9X22/`. Le compteur de ce banc d’essai est affiché hors de la scène ; l’interface de l’éditeur Scratch n’est pas reproduite.

## Contrôle restant dans l’éditeur

Le [relevé du 13 octobre dans l’éditeur officiel](recette-scratch-editeur.md) confirme une partie des gestes et comportements. Il distingue les résultats observés des contrôles encore à faire.

Avant la séance autonome, confirmer les gestes d’importation, la reconstruction des blocs depuis les palettes françaises et l’enregistrement depuis le menu Fichier dans l’éditeur utilisé en classe. Refaire les essais du tableau en utilisant les flèches. Le contrôle moteur valide les archives et leur comportement, pas ces gestes d’interface ni la compréhension d’un élève.

L’approfondissement à deux dangers doit être essayé après reconstruction : une seule pile surveille `touche Danger ? ou touche Danger2 ?` et attend `non (touche Danger ? ou touche Danger2 ?)`. Un chevauchement simultané retire une vie ; quitter seulement le premier danger ne termine pas ce contact continu. Cette variante n’est pas contenue dans les deux fichiers fournis.

La fin de partie et l’invulnérabilité temporisée sont des règles différentes. Elles ne sont pas implémentées dans cette référence ; à zéro vie, Pilote peut encore se déplacer.
