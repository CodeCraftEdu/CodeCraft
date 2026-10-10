# GDevelop - lot 1 : projet, objets et premiers événements

> Référence de production : roadmap stabilisée v1 et seconde revue clôturée dans les documents. Acquis nécessaires, chemin conseillé et outils d'aide doivent être distingués lors de l'ajustement de ce lot. Aucun changement de leçon/guides/catalogue n'est réalisé par cette stabilisation.

> État actuel : GD01–GD03 et leurs guides sont corrigés dans `lesson-data.js`. GD04 et son guide sont également intégrés ; voir leur [spécification et état de recette](specification-gdevelop-gd04.md). Ordre courant GD01 → GD04 → GD02 → GD03 ; aucun essai moteur déclaré. Le corps original et les addenda datés ci-dessous sont historiques, pas l'état courant de la navigation.

> Révision de roadmap du 8 octobre 2026 : ce document conserve la conception du lot initial déjà intégré. La [roadmap actuelle](roadmap-gdevelop.md) fait foi pour la suite : GD04 après GD01, exemple complet puis partiel dans GD03, premier jeu sans défaite obligatoire, reprise séparée en GD25. Les corrections et le nouvel ordre restent à appliquer aux leçons/guides/tests ; les passages historiques GD04–GD24 ci-dessous ne définissent plus un tronc de 24 modules. Prochaine action : ajuster l'entrée et spécifier GD04, pas produire tous les lots.

Spécification préparée le 7 octobre 2026, à partir de la [roadmap GDevelop](roadmap-gdevelop.md). Trois leçons/guides et kit intégrés le 8 octobre ; recette moteur en attente. La [revue pédagogique documentée](revue-pedagogique-gdevelop.md) propose des corrections non appliquées : exemple initial GD03, étayage progressif et déplacement avancé dans l'ordre. Les sections de conception ci-dessous décrivent le lot initial ; voir la revue avant de le généraliser.

## 1. Périmètre et résultat

Trois modules pour un élève qui commence GDevelop après Scratch. À la fin, il conserve un projet local, distingue objet et exemplaire, place quelques éléments et construit une interaction clavier compréhensible. Ce n'est pas encore un jeu complet ; le déplacement puis les contacts viennent au lot suivant.

| Repère | Identifiant réservé, non publié | Titre | Compétence proposée |
| --- | --- | --- | --- |
| GD01 | `gdevelop-projet` | Mon premier projet GDevelop | `gdevelop.workspace` - créer, prévisualiser et conserver un projet avec ses ressources |
| GD02 | `gdevelop-objets` | Placer mes personnages et mes objets | `gdevelop.instances` - distinguer objet et exemplaires, modifier leurs positions |
| GD03 | `gdevelop-evenements` | Quand ceci arrive, fais cela | `gdevelop.events` - relier condition et action et prévoir les deux états d'une interaction |

Parcours implémenté : `gdevelop-debutants`, « Mes premiers jeux avec GDevelop », dans le domaine existant `jeux-video`. Les trois IDs et leurs compétences sont ajoutés au catalogue, sans validation automatique. GD01 peut être ouvert avec aide sur l'interface ; GD02 requiert le projet réouvrable ; GD03 requiert placement et distinction objet/instance ainsi que le repère condition/action déjà travaillé dans Scratch.

Les premiers cours n'exigent pas de score, clone, message entre personnages ou bloc personnalisé Scratch. Le seuil global de la roadmap guide l'orientation vers le parcours complet ; chaque leçon reste accessible avec ses seuls prérequis utiles.

Exclusions : comportement de déplacement, collision, variable, boucle explicite, chronomètre, création dynamique, animation, son, physique, caméra mobile, plusieurs scènes, JavaScript, IA, publication et compte élève obligatoire. Aucun calendrier de séances.

## 2. État technique et choix à vérifier

Référence prévue : application de bureau GDevelop, interface française, projet local. Les vérifications non mutantes des dossiers usuels `Program Files`, `Program Files (x86)`, `AppData/Local/Programs`, des dossiers directs de `AppData/Local` et des processus actifs n'ont identifié ni installation ni processus GDevelop. Cela ne prouve pas qu'aucune version portable existe ailleurs.

**Version précise, menus français et workflow réel non vérifiés.** Ne pas installer un logiciel ni créer un compte dans cette étape de conception. Ne pas déduire de la documentation que la sauvegarde du kit fonctionne déjà sur le poste du professeur.

Le prochain essai dans l'application doit relever : version, OS, langue, création d'un projet vide, choix local sans connexion, import d'une image, aperçu, fermeture et réouverture, conservation d'une copie complète du dossier. Captures et libellés seront figés après cet essai. La variante navigateur reste non spécifiée jusqu'à une recette équivalente de récupération des ressources.

Le kit doit vivre dans le dossier du projet avant son import. Un fichier source n'est pas une garantie que les images sont incorporées : conserver et tester le dossier complet. La documentation du [type Resource](https://docs.gdevelop.io/GDCore%20Documentation/classgd_1_1_resource.html) décrit notamment un fichier relatif au répertoire du projet ; elle ne remplace pas notre essai de portabilité.

## 3. Ressources produites

Le kit `resources/gdevelop/kit-depart.zip` contient les trois PNG transparents, la notice et la licence CC0. Les sources SVG originales sont conservées dans `resources/gdevelop/sources` ; `scripts/build-gdevelop-kit.cjs` reconstruit les PNG et le ZIP. Les schémas pédagogiques sont dans `images/gdevelop-*.svg`, explicitement présentés comme schémas, pas captures de l'application. Les projets de reprise préfabriqués restent différés jusqu'à une recette moteur ; les leçons permettent de reconstruire les bases avec le kit, sans fichier JSON inventé.

Petit kit local téléchargeable, sans image distante ni achat :

- `images/personnage.png` : personnage statique ou pion lisible, 64 × 64 pixels.
- `images/jeton.png` et `images/jeton-alternatif.png` : deux silhouettes distinctes de 32 × 32 pixels, mêmes dimensions pour comparer sans changement de taille.
- Un fichier de licence et une fiche expliquant comment extraire le dossier et garder les ressources près de la source.

Graphismes originaux ou licence autorisant leur redistribution, sans franchise commerciale. Pas de génération par les élèves ni de dessin à réaliser pour commencer. Les deux jetons se distinguent par leur forme, pas seulement leur couleur.

Organisation pédagogique indicative : dossier `mon-premier-jeu`, fichier source `jeu.json` si ce format est confirmé par la version retenue, sous-dossier `images`. GD02 et GD03 prolongent le même projet. Avant modification risquée, copie du **dossier complet**, pas seulement « Enregistrer sous » supposé copier les ressources.

### Base élève et démonstration professeur

Le chemin guidé commence dans un projet vide ; la création d'un premier objet est enseignée en GD01. Une base de secours peut fournir uniquement une scène et les ressources enregistrées pour un élève aidé sur les fichiers. Elle ne contient ni comportement ni événement.

Un point de reprise GD02 comporte un seul personnage placé, aucune logique ; un point de reprise GD03 comporte ce personnage et trois jetons, aucune logique. Le texte de GD03 est créé dans la leçon, pas discrètement fourni sans explication. Démonstration finale professeur séparée avec deux événements et un seul message.

Ces fichiers sont prévus, pas disponibles. Les bases de secours doivent permettre de continuer sans effacer le travail de l'élève. Aucun projet personnel existant n'est utilisé.

## 4. GD01 - Mon premier projet GDevelop

### Objectif élève

« Fais apparaître un personnage dans ton premier projet, regarde le résultat et conserve ton travail pour pouvoir le reprendre. »

Résultat : une scène avec un personnage visible dans l'aperçu, une source enregistrée et réouverte avec son image. L'apparition à l'écran précède les explications détaillées de fichiers.

### Préparation et déroulé

1. Garder CodeCraft ouvert, lancer l'application et régler la langue avec aide si nécessaire. Installation et extraction du kit sont des gestes accompagnables, pas des tests de programmation.
2. Créer un projet vide avec une scène nommée `Jeu`. Ne pas partir d'un modèle de jeu ou visiter la boutique, les extensions et les propositions IA.
3. Repérer seulement la scène où l'on place les éléments, la liste des objets et le lancement de l'aperçu. L'onglet des événements est nommé comme endroit des règles futures, sans devoir l'explorer.
4. Créer un objet Sprite nommé `Personnage`, sélectionner l'image du kit, puis placer un exemplaire dans la scène. Expliquer : choisir une image définit l'objet ; le placer permet de le voir. Aucun import d'animation multi-images ni éditeur de dessin à maîtriser.
5. Lancer l'aperçu et constater : personnage visible, aucune action au clavier pour l'instant. Fermer l'aperçu avant de retourner à l'édition.
6. Déplacer visuellement le personnage, relancer un aperçu neuf et comparer. Un changement dans l'éditeur ne modifie pas nécessairement un aperçu déjà lancé ; le rechargement à chaud n'est pas enseigné ici.
7. Enregistrer localement, fermer le projet puis rouvrir la source enregistrée. Retrouver la dernière position et vérifier l'image dans un nouvel aperçu.

Cadre conseillé 800 × 450, caméra fixe et échelle par défaut : le réglage peut être préparé/accompagné ; il n'est pas une compétence de GD01. Ne pas demander un portrait, une résolution ou un fond élaboré. L'exemple doit rester visible sans coordonnée numérique obligatoire.

### Guidé, autonomie, bonus

- Guidé : comparer deux placements, distinguer l'éditeur et l'aperçu, enregistrer puis rouvrir.
- Autonomie : placer le personnage ailleurs, annoncer le résultat attendu, sauvegarder, fermer et retrouver cette modification sans reprendre tout le tutoriel. Ne pas demander un nouvel objet ou des événements.
- Bonus : préparer une copie de sécurité du dossier, l'ouvrir et vérifier que les images sont conservées, avec aide aux fichiers autorisée. Ne jamais supprimer l'original pour effectuer ce test.

### Les essentiels

- Je distingue la scène que je modifie et l'aperçu dans lequel je joue.
- Je peux retrouver et placer mon personnage.
- Je retrouve mon projet et ses images après réouverture.

### Guide professeur minimal requis

Speech : « Dans Scratch, tu avais déjà un chat. Ici, nous choisissons un élément, puis nous le plaçons dans notre scène. Voir le personnage ne veut pas encore dire qu'il sait se déplacer : nous lui donnerons des règles ensuite. »

Questions : « Où changes-tu le projet ? Où regardes-tu le résultat ? Qu'as-tu conservé pour pouvoir revenir demain ? » Réponses attendues : scène/éditeur, aperçu, source et ressources du projet ; pas besoin du mot JSON.

Pannes : objet créé mais jamais placé ; image manquante ; ancien aperçu observé ; source ouverte depuis un autre dossier. Réaction : identifier l'étape manquante, ne pas demander de recréer tout le projet. Critère autonome : modification conservée et explication ; aide sur extraction ou chemin relevée séparément.

## 5. GD02 - Placer mes personnages et mes objets

### Objectif élève

« Place plusieurs jetons avec un seul objet et découvre ce qui change pour un exemplaire ou pour tous. »

Projet GD01 réouvert ; personnage inchangé. Créer `Jeton` avec `jeton.png`, placer trois instances espacées. Un « exemplaire » est introduit en langage courant, puis relié au mot « instance » utilisé dans le logiciel.

### Exemple et repères

Dans le cadre 800 × 450 à caméra fixe : personnage près de (100, 200), jetons aux positions (300, 150), (400, 150), (500, 150). Valeurs proposées pour la démonstration, pas une évaluation de calcul. L'origine des images reste celle fournie/default vérifiée ; aucune modification de pivot ou de point d'origine.

1. Montrer un objet `Jeton` dans la liste, trois exemplaires dans la scène. Ne pas créer `Jeton1`, `Jeton2`, `Jeton3`.
2. Sélectionner un exemplaire dans la scène, changer uniquement son X ; observer qu'un seul se déplace.
3. Changer son Y en prédisant le sens : à caméra fixe, vers le bas quand Y augmente. Comparer explicitement au repère Scratch, sans donner une transformation de coordonnées à calculer.
4. Dans la définition de l'objet `Jeton`, remplacer l'image de son unique animation/image par `jeton-alternatif.png`. Ne pas ajouter une seconde animation sélectionnable : les trois exemplaires doivent partager la modification de la même image.
5. Observer les trois images modifiées, positions conservées. Sauvegarder et relancer l'aperçu.

Un schéma original « définition Jeton → trois exemplaires » et un repère X/Y sobre sont nécessaires. Aucun schéma de clones dynamiques, de mémoire ou de moteur physique.

### Guidé, autonomie, bonus

- Guidé : prévoir ce qui change avant la modification de position puis avant le remplacement d'image. Vérifier dans l'aperçu, pas seulement dans la liste.
- Autonomie : ajouter un quatrième exemplaire du même objet ; placer les quatre en carré simple, sans chevauchement, puis déplacer seulement celui du bas à droite. Retrouver un objet dans la liste et quatre exemplaires dans la scène.
- Bonus : retirer un exemplaire de la scène et en replacer un depuis la même définition. Enseigner la suppression de l'instance sélectionnée, pas la suppression de l'objet depuis la liste. Ne pas mélanger ce geste d'éditeur avec la future suppression pendant le jeu.

### Les essentiels

- Je distingue un objet de ses exemplaires placés.
- Je peux changer la position d'un seul exemplaire.
- Je peux prévoir une modification partagée de l'image.
- Je sais dans quel sens X et Y augmentent dans cette scène.

### Guide professeur minimal requis

Speech : « Jeton décrit l'élément que nous pouvons placer. Les trois jetons visibles sont trois exemplaires de cette définition. Changer où se trouve un exemplaire ne déplace pas les autres. Changer l'image commune modifie ce qu'ils montrent. »

Questions : « Combien d'objets Jeton ? Combien d'exemplaires ? Si je veux déplacer un seul jeton, où agir ? Pourquoi les trois ont-ils changé d'image ? » Vérifier les réponses par une manipulation annoncée, pas par le vocabulaire seul.

Pannes : trois définitions différentes ; coordonnées modifiées sur le mauvais exemplaire ; Y interpreté comme dans Scratch ; seconde animation ajoutée au lieu de modifier l'image commune. Consolidation : deux exemplaires seulement et un déplacement ; ne pas introduire d'événement pour réparer une confusion d'éditeur.

## 6. GD03 - Quand ceci arrive, fais cela

### Objectif élève

« Fais apparaître un message tant que tu maintiens une touche, puis fais-le disparaître quand tu ne la maintiens plus. »

Projet GD02 conservé. Enseigner la création d'un objet **Texte** `Message`, avec un seul exemplaire placé et le contenu fixe « Bonjour ! ». Police standard, texte sombre sur fond clair, taille lisible ; aucun téléchargement de police ni expression de variable.

Avant programmation, le texte est visible : ce n'est pas une panne, car aucune règle ne le masque encore. Fermer l'aperçu pour écrire les règles.

### Modèle conceptuel à deux événements

| Événement | Condition | Action | Résultat attendu |
| --- | --- | --- | --- |
| 1 | La touche Espace est maintenue | Montrer `Message` | Le message est visible pendant l'appui |
| 2 | La touche Espace n'est pas maintenue | Masquer `Message` | Le message est invisible au repos et après relâchement |

Choisir la condition de maintien, **pas** « vient d'être pressée » ni « vient d'être relâchée ». Pour l'événement 2, expliquer l'inversion de la même condition : elle teste l'état opposé. Les libellés exacts et le geste d'inversion français restent à relever dans l'application. Source : [référence clavier](https://wiki.gdevelop.io/gdevelop5/all-features/keyboard/reference/) ; un [tutoriel officiel](https://wiki.gdevelop.io/gdevelop5/tutorials/roadrider/) illustre des conditions clavier inversées.

Les conditions et actions sont cherchées et choisies dans l'éditeur ; le tableau est un schéma à assembler, pas du texte à coller. Une règle ne remplace pas une pile Scratch et n'attend pas que la touche soit relâchée pour autoriser les autres règles.

Les deux événements sont exclusifs. Dès les premiers tests, l'élève doit savoir pourquoi il faut une règle pour l'état sans appui : montrer un objet ne le remasque pas automatiquement. La visibilité seule ne démontre pas combien de fois l'événement est évalué ; ne pas prétendre observer un nombre d'exécutions sans outil. Expliquer sobrement que les règles sont retestées pendant le jeu, sans imposer un chiffre fixe d'images par seconde.

### Guidé, autonomie, bonus

- Guidé : construire l'événement 1, observer que le texte ne disparaît pas tout seul, puis construire l'événement 2. Tester repos → maintien → relâchement → nouvel appui. Cliquer dans l'aperçu pour lui donner le focus si nécessaire.
- Autonomie : afficher « Prêt à jouer ! » avec une autre touche simple choisie, sans ajouter de troisième événement. Modifier la touche **dans les deux conditions**, puis tester ancienne touche, nouvelle touche maintenue et relâchement. La consigne décrit le résultat ; l'indice rappelle de chercher les deux règles seulement si nécessaire.
- Bonus : sur une copie conservée, transformer le message en « Maintiens la touche pour cacher ce message ». Il doit être visible au repos et caché pendant l'appui. Réutiliser les deux conditions connues et choisir les actions correspondant au nouveau résultat ; annoncer ce qui doit changer puis tester les deux états et un second appui. Pas de troisième événement, de bascule ni de combinaison de touches. Ce bonus n'est requis ni pour GD04 ni pour la compétence principale.

Les conditions multiples AND/OR sont reportées à un approfondissement ultérieur : pas de règle combinée nécessaire à cette première interaction.

### Les essentiels

- Je distingue la condition testée et l'action réalisée.
- J'explique pourquoi une règle masque aussi le message.
- Je teste maintien, relâchement et nouvel appui.
- Je peux changer la touche sans laisser une règle liée à l'ancienne.

### Guide professeur minimal requis

Speech : « Une règle pose une question au jeu. Si Espace est maintenue, montre Message. Une autre règle teste le contraire et le masque. Nous ne lui avons pas dit de se souvenir d'un clic : nous décrivons ce qui doit être visible selon l'état de la touche. »

Questions : « Quelle partie teste ? Quelle partie change quelque chose ? Que se passe-t-il sans appuyer ? Si je retire la deuxième règle, que prévois-tu ? » Attendu : condition, action, message masqué, après le premier appui il reste visible faute d'action contraire. La suppression d'une règle pour démonstration se fait sur une copie, ou se répare avant la sauvegarde finale.

Pannes : condition de nouvel appui au lieu de maintien ; touche modifiée dans une règle seulement ; mauvais objet visé ; action de masquage sans condition qui annule l'autre règle ; aperçu sans focus. Faire distinguer panne de logique et réception clavier. Ne pas ajouter variable, attente ou « Déclencher une fois » pour masquer le problème.

## 7. Intégration future dans CodeCraft

- Ajouter seulement ces trois modules et leurs trois guides après réalisation/recette ; aucun placeholder pour GD04 à GD24.
- Ajouter le parcours au domaine Jeu vidéo, conserver Scratch et toutes ses routes. Le dernier bouton suivant de GD03 ne renvoie pas à une page GD04 absente.
- Conserver la DA Jeu vidéo chaleureuse, le bandeau fondu et les formes discrètes, les activités et les essentiels. Le thème technique exact devra être compatible avec les palettes existantes ; pas de recoloration globale Scratch pour distinguer un moteur.
- Les modèles d'événements ne doivent pas emprunter les blocs Scratch, ce qui laisserait croire à la même syntaxe. Choisir d'abord un schéma statique conditions/actions avec texte accessible et échappé ; inspecter le renderer existant avant tout ajout. Les paragraphes seuls peuvent servir de fallback.
- Lien de téléchargement officiel limité à la préparation GD01. Aucun bouton prétendant lancer un fichier local ou un moteur intégré au site.
- Pré-requis, consolidation, bonus et critères restent dans les données ; les orientations détaillées restent dans les guides. Les nouvelles compétences sont évaluées manuellement et n'entraînent aucune équivalence automatique Scratch.
- Pas de changement de format privé, localStorage, donnée élève, dépendance tierce, commit, push ou déploiement dans cette étape.

## 8. Revue pédagogique préalable et ajustements retenus

Relecture effectuée sur la conception, sans avis externe ni validation en classe :

| Risque identifié | Ajustement retenu |
| --- | --- |
| Tout demander avant le premier résultat | Personnage visible dans GD01 avant d'approfondir l'organisation des fichiers |
| Refaire un cours Scratch entier | Diagnostic court et reprises ciblées ; aucun bonus Scratch imposé |
| GD01 trop chargé en vocabulaire | Scène, objet et aperçu utiles ; la comparaison objet/instances appartient à GD02 |
| Réutiliser les axes de Scratch | Exemple à caméra fixe et explication explicite de Y vers le bas |
| Confondre copie et nouvelle définition | Un objet Jeton, plusieurs exemplaires ; positions locales et image partagée comparées |
| Message présent sans notion enseignée | Objet Texte créé et expliqué dans GD03 |
| Appui ponctuel confondu avec maintien | Condition de maintien et son opposé ; quatre tests d'état simples |
| « Relâchée » compris comme nouvel événement | Employer « n'est pas maintenue » dans le modèle et enseigner l'inversion |
| Deux événements contradictoires | Conditions exclusives, pas de masquage inconditionnel permanent |
| Autonomie consistant à recopier | Modifier la règle et annoncer/tester son effet, sans ajouter une mécanique inconnue |
| Bonus ajoutant AND/OR avant consolidation | Bonus limité à inverser le résultat visible avec les deux conditions connues ; combinaisons de touches reportées |
| Aide souris/fichiers prise pour manque de logique | Critères de manipulation et compréhension consignés séparément |
| Projet déclaré sauvegardé sans ses images | Réouverture et copie du dossier complet à essayer réellement |

Conclusion : périmètre cohérent pour un lot d'entrée. **Prêt pour un essai technique puis l'implémentation autorisée**, pas déclaré techniquement validé. Le test du workflow local est un préalable à la publication des consignes définitives.

## 9. Recette à réaliser, preuves attendues

### Dans le vrai moteur

| Contrôle | Attendu | Statut |
| --- | --- | --- |
| Version/langue/accès local | Version relevée, français, pas de compte requis pour les opérations du lot | À faire |
| GD01 fermé puis réouvert | Position modifiée et image conservées dans un aperçu neuf | À faire |
| Copie du dossier complet | Source et ressources utilisables depuis la copie, original intact | À faire |
| GD02 modification d'un X/Y | Un seul exemplaire déplacé dans le sens prévu | À faire |
| GD02 image commune remplacée | Tous les jetons changent d'apparence sans changer de position | À faire |
| GD03 aperçu démarré sans appui | Message invisible | À faire |
| GD03 appui maintenu puis relâché deux fois | Visible pendant maintien, invisible sans maintien, fonctionne à nouveau | À faire |
| GD03 touche changée dans les deux règles | Ancienne touche sans effet ; nouvelle touche contrôle les deux états | À faire |
| GD03 panne intentionnelle | Cause identifiée, correction ciblée, fonctionnement de nouveau testé | À faire |
| Bonus | Message visible au repos, caché pendant maintien, visible après relâchement ; second appui fonctionnel | À faire |

Ne pas compter un test Node ou une simulation de visibilité comme essai GDevelop. Ne pas lancer de recette sur un fichier élève personnel. Pas de nouvelle publication ni de compte créé pour tester.

### Dans CodeCraft après implémentation

Contrôler intégrité des références et des trois compétences, guides complets, accès direct/parcours, précédent/suivant, absence de lien vers GD04 non publié, liens du kit et attribution. Vérifier la palette Jeu vidéo, schémas lisibles sur ordinateur et 390 px, clavier et textes accessibles. Tester le suivi manuel avec données fictives et le format privé inchangé. Régressions ciblées Scratch/Python/Web selon fichiers modifiés.

### Essai professeur distinct

Observer si l'élève sait reprendre son dossier, manipuler un seul exemplaire et expliquer les deux règles. Relever l'aide à l'interface séparément ; demander un transfert sans modèle complet. Ce contrôle restera à faire après la recette technique, sans calendrier imposé.

## 10. Sources et prochaine action

Sources officielles consultées pour préparer la spécification : [interface](https://wiki.gdevelop.io/gdevelop5/interface/), [objets](https://wiki.gdevelop.io/gdevelop5/objects/), [Sprite](https://wiki.gdevelop.io/gdevelop5/objects/sprite/), [concepts de base](https://wiki.gdevelop.io/gdevelop5/tutorials/basic-game-making-concepts/), [clavier](https://wiki.gdevelop.io/gdevelop5/all-features/keyboard/reference/), [tutoriel utilisant l'inversion clavier](https://wiki.gdevelop.io/gdevelop5/tutorials/roadrider/), [ressources](https://docs.gdevelop.io/GDCore%20Documentation/classgd_1_1_resource.html). Les activités, titres, critères et tests sont une conception CodeCraft.

### État d'implémentation au 8 octobre 2026

Les trois leçons, compétences et guides sont implémentés dans le catalogue unique. Le domaine conserve ses quatorze modules Scratch. Le téléchargement officiel n'apparaît que dans GD01 ; aucune fausse redirection CodePen dans GD02/GD03. GD03 n'a pas de lien vers un GD04 encore absent.

Contrôles CodeCraft : 128 tests unitaires réussis ; 20 vues navigateur ciblées réussies, dont 13 du lot GDevelop (parcours, leçons, guides, vues mobiles à 390 px), plus les régressions Scratch/Python/Web. Contrôles sur catalogue, prérequis, références de blocs, aides graduées, dimensions/format PNG, intégrité du ZIP, téléchargements HTTP comparés aux fichiers, palette et navigation. Captures ordinateur et mobile inspectées. Ces contrôles ne lancent pas GDevelop.

Prochaine étape actuelle : spécifier GD04 accessible après GD01 et effectuer la recette moteur sur une version disponible avant généralisation. L'installation n'est pas nécessaire pour vérifier le site et n'est pas autorisée par ces ajustements. Version, libellés français, import, sauvegarde/réouverture, copies et logique clavier restent ouverts. Voir `verifications-manuelles-en-attente.md`. Aucun essai en classe n'est annoncé comme fait.

## 11. Addendum — ajustements du lot initial appliqués le 8 octobre 2026

- GD01 : trois paragraphes de modèle centrés sur le résultat visible ; kit/fichiers accompagnables ; préparation d'une pièce à explorer. Une réouverture complète dans la mission autonome, plutôt que deux cycles répétés. Copie complète conservée en bonus.
- GD02 : comparer une position individuelle et une image commune avant X/Y. Coordonnées du schéma illustratives, plus de carré prescrit. Complément guidé d'un remplacement d'image puis arrangement personnel de quatre jetons visibles/espacés. Si le mouvement a été étudié, le conserver sans l'imposer comme prérequis.
- GD03 : indice du jeu au lieu d'un Bonjour sans mission. Lecture/prévision puis construction de la paire complète avant premier essai clavier. Retrait/restauration de Masquer sur copie, modèle partiel avec F, puis choix autonome d'un indice et d'une commande inutilisée. Tester ancienne et nouvelle commande, maintien/relâchement et nouvel appui.
- Guides : raisonnement modélisé, aide interface distinguée du transfert, préparation des copies/exemples déclarée et absence de fichier moteur préfabriqué testé rappelée. Aucun diagnostic Afficher seule sur texte déjà visible.
- Identifiants de modules, blocs, tâches, compétences et parcours conservés ; aucun nouveau prérequis, faux lien GD04, module vide, format privé ou acquisition automatique. Kit et illustrations inchangés, descriptions des schémas alignées.

Vérifications après ajustement : **130 tests unitaires réussis**, dont deux nouvelles régressions pédagogiques GDevelop ; **13 vues navigateur ciblées réussies**, parcours, trois leçons et guides, mobile 390 px et téléchargements. Captures GD03 ordinateur et GD02 mobile inspectées. Les essais navigateur utilisent un serveur temporaire de test, pas une preuve que localhost:8000 est lancé. Ces contrôles ne lancent pas GDevelop ; recette moteur et observation élève toujours en attente.
