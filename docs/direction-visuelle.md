# Identité low-poly de l’interface élève

## Périmètre

Accueil, domaines, parcours, modules et navigation élèves. Aucun changement pédagogique, d’identifiant, de suivi ou de données privées. Aucun changement de l’espace professeur.

La feuille `student-lowpoly.css` est chargée uniquement dans `index.html`. Toutes ses règles sont limitées à `body.student-lowpoly` pour éviter de toucher aux autres pages.

## Palette et formes

- Fond sable/ivoire, panneaux de lecture pierre claire et texte anthracite.
- Accueil violet profond, Web vert, jeu vidéo ambre et Python bleu.
- Couleurs des parcours conservées : Fondations bleu, Débutants vert, Avancés violet et Diagnostic orange.
- Facettes et coins taillés sur les cartes, boutons, en-têtes et schémas ; cadres plus discrets pour la lecture.
- Petites gemmes décoratives en coin des cartes de bibliothèque, accordées à leur couleur. Aucun libellé de niveau ni représentation de progression acquise.
- Pas de texture derrière le code, de police externe, d’animation nouvelle ou d’asset de jeu.
- Les silhouettes et couleurs des blocs Scratch restent des repères pédagogiques, pas des éléments à recolorer.

Les pages de domaine reprennent leur paysage d’accueil dans un bandeau compact. Le parcours et les modules Scratch adoptent l’ambre, Python le bleu ; les couleurs des parcours Web restent distinctes. Ce choix est porté par `data-domain` dans le rendu élève, sans modifier les thèmes ni les identifiants du catalogue. Les en-têtes de parcours et de modules n’affichent plus le libellé générique « Espace de cours ». Le lien CodeCraft compact est un mot-symbole sans cadre violet.

Les retours secondaires ont des facettes accordées à la couleur du parcours. Le mot-symbole CodeCraft est le seul lien Accueil sur les domaines et les cours ; les liens précédent/suivant et les retours aux parcours restent conservés. La revue des parcours et cours comprend les indices ouverts, les fins de cours et les modèles Scratch à 390 px, sans recolorer les blocs pédagogiques.

## Point de retour

L’accueil propose un horizon crépusculaire original en SVG et des montagnes facettées. La bannière affiche seulement le mot-symbole CodeCraft avec un léger relief et la phrase d’accueil. Les cartes des trois univers utilisent un paysage CSS compact, un symbole intégré et des couleurs distinctes, avec le contenu sur fond clair. Le fond atmosphérique est limité à l’accueil ; les cours gardent leurs fonds de lecture. Aucun asset de Spyro n’est utilisé. Le logo précédent `images/logo-transparent.png` et l’essai `images/codecraft-emblem.svg` restent conservés sans être affichés dans la bannière.

Les fichiers `styles.css` et `pedagogy.css` de référence restent inchangés. Pour revenir à leur apparence, retirer la feuille `student-lowpoly.css` et la classe du même nom dans `index.html`. Le commit checkpoint précédent conserve également les essais et leur sélecteur.

`visual-trial.css` reste disponible comme référence, mais n’est plus chargé. Le sélecteur d’essai et la carte illustrative en doublon ont été retirés de la page Thonny : seules les cartes réelles de la bibliothèque et les liens utiles restent affichés.

## Vérifications

`node tests/python-browser.cjs` contrôle les pages Python, des vues Web et Scratch, les couleurs des parcours, les anciens hash, le skip link, les cases et indices ainsi que le débordement desktop/mobile. `node --test tests/python.test.cjs tests/pedagogy.test.cjs` contrôle les contenus et références pédagogiques. Le test vérifie aussi que la feuille low-poly n’est pas chargée dans les guides professeur.
