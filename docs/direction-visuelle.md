# Identité low-poly de l’interface élève

## Périmètre

Accueil, domaines, parcours, modules et navigation élèves. Aucun changement pédagogique, d’identifiant, de suivi ou de données privées. Aucun changement de l’espace professeur.

La feuille `student-lowpoly.css` est chargée uniquement dans `index.html`. Toutes ses règles sont limitées à `body.student-lowpoly` pour éviter de toucher aux autres pages.

## Palette et formes

- Fond sable/ivoire, panneaux de lecture pierre claire et texte anthracite.
- Accueil violet profond, Web vert, jeu vidéo ambre et Python bleu.
- Couleurs des parcours conservées : Fondations bleu, Débutants vert et Avancés violet. Diagnostic Web a été retiré du catalogue.
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

## Modèle commun des leçons

Le modèle validé sur « Poser une question » est généralisé aux 58 modules élèves avec `data-lesson-layout="standard"`. Le marqueur est retiré lors du retour à une bibliothèque. Les pages de domaine, l’accueil et les guides professeur conservent leur présentation.

- Une ligne de navigation réunit CodeCraft et le fil d’Ariane complet, leçon actuelle comprise ; elle se répartit sur deux lignes sur petit écran.
- Le bandeau compact utilise un fond clair et un fondu continu vers le paysage du domaine. Python garde ses montagnes bleues, Scratch ses îlots ambre ; Web utilise ses vallées, teintées selon le parcours choisi : bleu, vert ou violet.
- La préparation réunit les consignes existantes et les attentes des prérequis, sans deuxième encart ni note administrative répétée. Les liens d’outils restent secondaires : Thonny uniquement dans la première leçon, Scratch et CodePen conservés.
- Les cartes de lecture ont une bordure basse discrète ; les activités gardent un cadre fin et une petite facette de titre. Exemples, indices, cases, ressources et couleurs des blocs Scratch restent inchangés.
- « Les essentiels » est visible sans dépliage et reprend les critères propres au module. Aucun critère n’est ajouté aux anciens modules Web qui n’en possèdent pas : leur enrichissement relève d’une revue pédagogique séparée.
- Les orientations restent dans le catalogue et les guides professeur ; les listes de liens redondants ne sont plus rendues en fin de leçon élève. Les aides et bonus spécifiques au contenu sont conservés.
- La fin affiche uniquement les voisins réels du parcours, avec des boutons de même hauteur. En accès direct, les voisins ne sont déduits que si le module appartient à un seul parcours. Un contexte invalide est ignoré ; les modules partagés ne reçoivent pas une suite arbitraire. Aucun bouton Accueil ni lien intermédiaire « Voir le parcours » n’est ajouté.

## Repères d’étape GDevelop

Le parcours GDevelop regroupe les quatre leçons disponibles sous « Étape 1 — Prendre les commandes » : petite étiquette facettée, titre, description et séparation fine, sans nouveau bandeau illustré. Une courte note propose un point de pause ; l’étape suivante est seulement annoncée en texte, sans carte vide.

Les leçons affichent un repère compact entre navigation et bandeau : étape, intitulé et position du module. Le fil d’Ariane complet est conservé. Seule la dernière leçon porte la note de fin d’étape, sans nouveau bouton. Ces repères décrivent la structure du parcours, jamais des acquis ou une progression validée. Ils restent facultatifs dans les données et ne changent pas les autres parcours.

## Vérifications

Le harnais Chrome inclut tous les modules et leurs contextes de parcours, les accès directs et un contexte incompatible. Il vérifie les critères affichés, les liens précédent/suivant, le paysage, la palette, les indices/cases, les ressources et l’absence de débordement. Des vues mobiles complètent les vues desktop. Les contrôles des guides professeur restent distincts.

`node tests/python-browser.cjs` contrôle les pages Python, des vues Web et Scratch, les couleurs des parcours, les anciens hash, le skip link, les cases et indices ainsi que le débordement desktop/mobile. `node --test tests/python.test.cjs tests/pedagogy.test.cjs` contrôle les contenus et références pédagogiques. Le test vérifie aussi que la feuille low-poly n’est pas chargée dans les guides professeur.
