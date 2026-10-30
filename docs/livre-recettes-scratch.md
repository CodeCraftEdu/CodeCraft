# Livre de recettes Scratch

Intégration du 30 octobre 2026. Une seule recette, inchangée : « Animer la marche de mon personnage ».

## Rendu

Le routeur réserve `scratch-recettes` au composant `src/student/recipe-book.mjs`. Le livre remplace la barre latérale ; la navigation globale reste disponible. Le moteur est chargé uniquement sur cette page. Les autres cours conservent leur rendu.

Le composant construit ses pages HTML depuis `sequence.moduleIds` et les contenus JSON existants. Une couverture rigide, un sommaire paginé par douze liens et des doubles pages précèdent le dos rigide. Chaque recette occupe une page d’informations et une page de scripts. Les blocs graphiques viennent de `createBlock`, sans conversion en image. Ajouter une recette au catalogue et au parcours suffit ; aucune table de pages parallèle n’est à maintenir.

Le moteur officiel gère les plis, les couvertures, les ombres et le portrait. Les marges des pages restent manipulables à la souris ; l’intérieur permet la sélection et le défilement. Les piles longues restent à 14 px minimum et défilent dans la page, avec une lecture linéaire disponible pour les voir entièrement. La mise à l’échelle du livre ne réduit pas la taille des caractères des blocs.

## Liens et accessibilité

- `#module/scratch-recette-marche?parcours=scratch-recettes` ouvre directement la double page de la recette.
- `#parcours/scratch-recettes` ouvre la couverture et conserve la compatibilité de la redirection historique vers le premier module.
- Le lien de la bibliothèque ajoute `livre=couverture` pour ouvrir et recharger la couverture.
- Les liens du sommaire gardent une URL réelle ; leur activation dans le livre utilise son moteur et actualise l’URL et le titre. Les boutons utilisent `flipNext()`, `flipPrev()` et `flip()`.
- Les flèches du clavier fonctionnent depuis les commandes. Le corps des pages accepte le défilement au clavier. Les pages inactives sont inertes et masquées aux technologies d’assistance.
- La lecture sans animation est disponible à tout moment. Elle est choisie automatiquement avec `prefers-reduced-motion` et si le chargement du moteur échoue. Elle contient les mêmes données et blocs, avec une hauteur libre. L’impression utilise cette vue.
- Au départ d’une page, le routeur appelle le nettoyage du composant et `destroy()` du moteur ; les écouteurs propres au composant sont retirés.

## Distribution officielle

[StPageFlip](https://github.com/Nodlik/StPageFlip), paquet npm `page-flip@2.0.7`, licence MIT. Référence : [démonstration officielle](https://nodlik.github.io/StPageFlip/demo.html).

Le fichier `dist/js/page-flip.module.js` du paquet officiel est conservé sans modification dans `src/student/page-flip-vendor.mjs`. Son SHA-256 est `b718faafca6856bff51629baedeff601e2cc59482e951105bdbd6e46978cca38`. La licence originale est dans `resources/stpageflip-license.txt`. Le fichier fournisseur est exclu du formatage et du lint afin de conserver ses octets. Aucune dépendance transitive, aucun CDN et aucun bundler ne sont nécessaires sur GitHub Pages.

Pour mettre à jour, télécharger une version explicite du paquet officiel, remplacer la distribution et la licence, consigner la version et l’empreinte, puis refaire les vérifications.

## Vérifications

Les tests Node couvrent la lecture HTML avant initialisation, la conservation des données, le nettoyage et un catalogue de contrôle de trente et une recettes. Le scénario `tests/recipe-book-scenario.cjs`, exécuté dans `student-browser`, vérifie l’ouverture animée et ses ombres, le sommaire, les liens directs, le glissement d’un coin, les boutons, le portrait à 390 et 320 px, le défilement des blocs et la réduction des animations. Les captures sont conservées dans les rapports navigateur locaux.
