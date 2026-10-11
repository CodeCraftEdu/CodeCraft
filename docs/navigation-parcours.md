# Sommaire commun des cours — 10 octobre 2026

Les cours disposent d'un sommaire construit à partir du catalogue existant, sans duplication des contenus ni suivi de progression ajouté.

- À partir de 1200 px : colonne gauche de 280 px, fixe pendant le défilement du cours grâce à `position: sticky`, liste à défilement indépendant.
- En dessous : bouton « Dans ce parcours », replié initialement ; ouverture au clavier ou au clic. Les liens masqués ne sont pas accessibles au clavier.
- Module actuel indiqué par `aria-current="page"`, un fond léger et une bordure aux couleurs du parcours. Aucun statut « terminé ». Numéros décoratifs retirés des liens du sommaire et des cartes sur les pages de parcours ; repères « Partie » conservés.
- Étapes existantes conservées en robotique et GDevelop. Python dispose de quatre parties de cinq modules : premiers programmes, calculs et choix, boucles et hasard, données et fonctions pour un quiz. Ces parties sont des repères éditoriaux (`chapters`), sans pause ou validation automatique ajoutée. Elles apparaissent aussi sur la page du parcours. Les autres parcours gardent leur ordre actuel.
- Tous les liens du sommaire conservent le contexte du parcours, y compris les leçons Web partagées.
- Une entrée directe n'affiche un sommaire que si le module appartient à un unique parcours ; aucun choix arbitraire pour les modules partagés.
- Le titre du parcours n'est pas répété en haut du sommaire. Le fil d'Ariane ramène au premier cours ; navigation précédente/suivante conservée en bas du cours. L'objectif global reste consultable dans un encart repliable du sommaire.
- Sommaire absent de l'impression, de l'accueil et de l'espace enseignant. Les pages intermédiaires de parcours sont remplacées par le premier cours : anciennes routes `#parcours/...` compatibles par remplacement de l'historique. Python et robotique s'ouvrent directement depuis l'accueil ; Web et Jeu vidéo gardent le choix du parcours, dont chaque carte ouvre le premier cours.

Vérifications : tests du catalogue complet, ordre, module actif, ouverture/fermeture, changement de largeur et nettoyage des écouteurs. Contrôle visuel local de Python (début et fin du parcours), robotique et menu à 390 px. Aucun débordement horizontal observé sur la vue robotique à 1440 px.

Scratch est regroupé en quatre parties (commandes, premier jeu, enrichissement, correction et projet personnel). Web Fondations a trois parties (première page HTML, liens et images, CSS). Web Débutants a cinq parties (bases HTML, personnalisation, fichiers et structure, mise en forme, mini-site). L'ordre, les identifiants et le contenu des modules partagés restent inchangés. Web Avancés, court et en pause, reste en liste simple ; robotique et GDevelop gardent leurs étapes.

Suite : validation visuelle par l'utilisateur, puis poursuite de la revue des cours.

Les titres élèves sont nettoyés à l'affichage : préfixes numériques comme « 1 — » retirés, séparateurs à tirets remplacés par deux-points. Les mots composés, données sources, extraits de code et étapes procédurales des exercices sont conservés.
