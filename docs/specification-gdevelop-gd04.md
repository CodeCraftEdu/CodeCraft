# GD04 — Déplacer mon personnage

Spécification préparée le 8 octobre 2026, selon la [roadmap stabilisée v1](roadmap-gdevelop.md). **Leçon et guide revus, corrigés puis implémentés avec autorisation.** Le parcours suit désormais GD01 → GD04 → GD02 → GD03. Aucun essai dans GDevelop, installation ou projet moteur préfabriqué ; le corps ci-dessous conserve les choix de conception et les conditions de recette.

**Revue pédagogique effectuée ; ses quatre corrections sont appliquées.** Découverte allégée, adaptation guidée sans répétition du modèle, mission concrète centre → zone choisie → centre, comparaison de vitesse à valider avant usage en cours. Voir la [trace de revue](revue-pedagogique-gdevelop.md#11-revue-gd04--corrections-appliquées). La suite est la recette moteur et les corrections éventuelles, pas une nouvelle revue documentaire obligatoire.

## 1. Résultat et place dans le parcours

Objectif élève : « Pilote ton personnage avec les flèches et choisis une vitesse qui te permet de l'amener où tu veux. »

Résultat : le personnage de GD01 se déplace dans quatre directions, garde son image droite et ralentit jusqu'à l'arrêt quand on relâche. L'élève compare deux réglages, choisit le sien et retrouve ce fonctionnement dans son projet enregistré. Ce n'est pas encore un jeu avec objectif, collision ou fin.

- Repère stable : GD04 ; deuxième module du chemin, pas « leçon 4 » à afficher comme rang.
- Route proposée, à contrôler avant publication : `gdevelop-deplacement`.
- Parcours existant : `gdevelop-debutants` ; domaine `jeux-video` ; thème `fondations` selon le catalogue actuel.
- Compétence proposée : `gdevelop.movement`, régler et tester un déplacement fourni par un comportement. Vérifier sa disponibilité avant ajout ; aucune validation automatique.
- Chemin conseillé à migrer lors de l'implémentation : **GD01 → GD04 → GD02 → GD03**. La suite reste celle de la roadmap.

### Acquis nécessaires, chemin et aides

Acquis nécessaires : retrouver le projet local de GD01, repérer `Personnage`, distinguer scène et aperçu, lancer/fermer l'aperçu, enregistrer. Ces gestes peuvent être accompagnés ; aucune maîtrise des événements, variables, coordonnées numériques ou instances multiples n'est requise.

Chemin conseillé : reprendre GD01, puis placer les jetons en GD02. Un élève ayant déjà GD02/GD03 garde ses objets et ses règles ; ne pas reconstruire son projet ni ajouter le comportement à `Jeton` ou `Message`.

Aides : professeur pour chemins de fichiers, réglage du cadre, recherche du comportement ou lecture des champs. Noter ces aides séparément de la prévision et du choix de réglage. Aucun passage obligé par GD03 pour programmer des touches personnalisées : GD04 utilise uniquement les contrôles fournis.

## 2. Périmètre technique et points à essayer

Référence documentaire consultée le 8 octobre : [comportement Top-Down Movement, documentation officielle](https://wiki.gdevelop.io/gdevelop5/behaviors/topdown/). Il propose les flèches comme contrôles standards, des réglages d'accélération/décélération/vitesse maximale, des options de rotation et de diagonales. Notre choix est quatre directions sans rotation. Les intitulés français et les valeurs par défaut restent à vérifier dans la version retenue.

Réglage de conception :

| Élément | Choix de GD04 | Ce que l'élève doit comprendre |
| --- | --- | --- |
| Objet | `Personnage`, un exemplaire déjà placé | Le comportement est attaché au personnage, pas au décor |
| Comportement | Déplacement vu du dessus / Top-Down Movement | Fonctionnement fourni à ajouter puis régler, pas événement écrit par l'élève |
| Contrôles standards | Activés, flèches du clavier | Maintenir pour se déplacer ; cliquer dans l'aperçu si le clavier ne répond pas |
| Rotation | Désactivée | Le personnage se déplace sans faire tourner son image |
| Diagonales | Désactivées pour le modèle principal | Une direction à la fois ; comparaison de diagonales réservée au bonus |
| Vitesse maximale | 120 puis 240 comme essais provisoires | Une limite de vitesse, pas une position ni une distance ajoutée à chaque image |
| Accélération et décélération | Réglages de référence positifs préparés/accompagnés et relevés lors de la recette | Observer départ/arrêt ; aucun vocabulaire ou réglage autonome de ces paramètres exigé |
| Cadre | Celui de GD01, caméra fixe ; 800 × 450 conseillé | Faire de courts trajets visibles, pas traverser une carte avec caméra |

Les nombres 120/240 sont des candidats à essayer, pas des mesures validées. Garder une seule variable de comparaison : vitesse maximale. Ne pas changer simultanément accélération, taille du personnage et cadre. Si la comparaison n'est pas perceptible avant sortie du cadre, revoir les réglages de référence avec le professeur avant de publier les consignes. Ne pas enseigner une formule ni prétendre qu'un plafond doublé double immédiatement chaque déplacement.

**Critère de recette avant publication :** avec les mêmes réglages de départ/arrêt, le même départ central et un trajet horizontal repéré, les deux essais doivent montrer une différence perceptible sans sortir de l'écran. Relever cadre, valeurs et observations. Si les essais ne se distinguent pas, ajuster la référence technique puis refaire les deux essais ; ne pas demander à l'élève d'affirmer que la seconde vitesse est plus rapide sans pouvoir l'observer. Les valeurs finales et la consigne doivent correspondre à cette recette.

Le professeur peut expliquer que la vitesse maximale est exprimée en pixels par seconde après vérification du champ. L'élève doit surtout distinguer « plus rapide » de « part d'un autre endroit » ; aucun calcul de distance ou chronométrage exact exigé.

Exclusions : événements de déplacement, ZQSD/WASD, vitesse par image, forces, physique, animation directionnelle, coordonnées à calculer, murs solides, confinement dans l'écran, collecte, score, caméra, saut, mobile/manette, isométrique. Ne pas ajouter une mécanique cachée pour empêcher le personnage de sortir.

## 3. Avant de commencer — texte prévu

« Rouvre ton projet avec le personnage visible. Enregistre ton travail avant de changer ses réglages. Tu vas lui ajouter un comportement : un fonctionnement déjà fourni par GDevelop. Nous n'écrivons pas encore les règles de déplacement nous-mêmes. »

Si le personnage n'est pas visible, reprendre le placement et l'aperçu de GD01 ; aider sur le fichier manquant sans refaire tout le cours. Placer le départ loin des bords dans l'éditeur, visuellement, sans coordonnée imposée.

## 4. Exemple complet — piloter puis expliquer

### Bloc 1 : Lui donner un déplacement

1. Dans l'éditeur, ouvrir les propriétés de `Personnage`, puis sa partie comportements. Trouver et ajouter le déplacement vu du dessus. Les gestes exacts français seront illustrés après recette ; ne pas inventer un bouton ou une capture.
2. Garder les flèches fournies et désactiver la rotation. Le professeur accompagne le choix quatre directions et le réglage initial testé, sans expliquer toute la liste de paramètres. Aucun travail sur accélération/décélération demandé à l'élève avant de jouer.
3. Avant l'aperçu : « Que prévois-tu si je maintiens la flèche droite ? Et si je la relâche ? L'image doit-elle tourner ? »
4. Lancer un aperçu neuf, lui donner le focus, faire un court déplacement à droite puis revenir à gauche. Essayer haut/bas séparément, relâcher entre essais et laisser le personnage s'arrêter. Ne pas maintenir jusqu'à sortir du cadre.
5. Expliquer : les touches fonctionnent parce que le comportement les prend déjà en charge. Aucun événement de déplacement n'a été ajouté. Cela ne signifie pas qu'aucune logique ne s'exécute dans le moteur.

Faire pointer l'objet et le réglage qui permettent le déplacement. Ne pas demander le vocabulaire complet du logiciel avant ce premier résultat jouable.

Après ce premier essai seulement, repérer le champ de vitesse maximale pour la comparaison. Les paramètres de départ et d'arrêt sont des aides techniques préparées, pas des acquis à valider dans GD04.

### Bloc 2 : Comparer une vitesse, pas deux projets différents

1. Annoncer un petit trajet horizontal dans la zone centrale, repéré à l'œil. Faire un premier essai, relâcher et observer l'arrêt progressif éventuel.
2. Fermer l'aperçu ; changer seulement la vitesse maximale au second réglage. Prévoir ce qui changera et ce qui restera identique : commandes, orientation et position de départ dans l'éditeur.
3. Relancer depuis le même départ, comparer le même trajet, puis essayer de s'arrêter près d'un emplacement visuel choisi.
4. Expliquer le compromis : plus rapide peut être agréable pour explorer, moins rapide peut faciliter la précision. Aucun réglage n'est déclaré « meilleur pour tous ».

Un nouvel aperçu repart du placement enregistré dans l'éditeur, pas nécessairement de la dernière position jouée. Vérifier ce workflow avant publication ; ne pas confondre le départ et la vitesse.

## 5. Adaptation guidée — résoudre un problème de pilotage

Deux tâches avec indices gradués près des consignes. Ne pas répéter le test des quatre directions ni recopier la comparaison complète déjà démontrée.

1. **Trouver quoi changer.** « Avec le réglage rapide que tu viens d'essayer, tu voudrais viser un endroit plus facilement. Garde les mêmes commandes et la même orientation : quel réglage peux-tu changer ? Prévois l'effet, puis essaie. » L'élève retrouve le champ pertinent et choisit une valeur positive plus basse sans recevoir toute la solution. Indices : chercher ce qui influence la rapidité ; retrouver la vitesse maximale vue dans l'exemple ; diminuer seulement cette valeur. Si l'élève ne trouve pas le réglage rapide gênant, préciser que l'essai explore une conduite plus lente, sans inventer un échec qu'il n'a pas rencontré.
2. **Vérifier sa décision.** Repartir du même placement et viser le même endroit. Expliquer l'effet réellement observé ; conserver ou réajuster la valeur et retester si nécessaire, puis enregistrer. Indice : garder le même trajet et les autres réglages, ne pas confondre départ et vitesse. Ne pas imposer de revenir à une valeur prescrite.

Il s'agit d'une **adaptation guidée**, pas d'un modèle partiellement préparé : le modèle fonctionne déjà et l'élève décide d'un changement. Ne pas forcer un exemple incomplet pour respecter artificiellement un patron pédagogique. La consigne est présentée dans la leçon et reste faisable sans présence du professeur.

## 6. À toi — ma petite exploration

« Place ton personnage au centre dans l'éditeur. Choisis une zone à rejoindre, loin des bords : par exemple un peu plus haut et à droite du départ. Annonce un trajet avec un changement de direction, rejoins cette zone puis reviens près du centre. Relâche les flèches pour t'arrêter à l'aller et au retour. Choisis ta vitesse ; si elle ne te convient pas, ajuste-la et reteste. Explique ton choix. »

La zone est repérée à l'œil, avec le doigt ou sur un croquis ; une scène vide suffit. Aucun nouvel objet, événement, dessin de décor ou coordonnée numérique requis. Le schéma du cours peut montrer centre et zone, sans prétendre que des marqueurs existent déjà dans le projet.

Critères : un trajet avec au moins un changement de direction ; relâchement pour s'arrêter ; choix personnel de vitesse, justification et retest. Aucune précision au pixel ou temps record. Un thème personnel (robot, jardin, espace) peut accompagner la mission, mais changer le nom seul n'est pas un transfert.

Enregistrer le réglage retenu, fermer et rouvrir le projet une fois ; retrouver les flèches et le fonctionnement. Garder les ressources du kit. Pas de seconde reconstruction intégrale ni de suppression de l'original.

### Bonus facultatif : comparer quatre et huit directions

Sur une copie complète du dossier, activer les diagonales, garder tous les autres réglages et essayer deux flèches voisines ensemble. Comparer au modèle à quatre directions et expliquer le choix. Ne pas conclure sans essai ce que font deux touches simultanées lorsque les diagonales sont désactivées. Ce bonus n'ajoute ni rotation, ni animation, ni nouvelle commande ; il ne conditionne pas GD02.

## 7. Les essentiels — visibles, sans menu déroulant

- Je retrouve le comportement qui pilote mon personnage avec les flèches.
- Je teste les directions et ce qui se passe quand je relâche.
- Je change seulement la vitesse maximale pour comparer deux réglages et expliquer mon choix.
- Je retrouve le déplacement choisi dans mon projet enregistré.

Suivi manuel : une case cochée ne prouve ni compréhension ni maîtrise autonome. Accepter explication orale, pointage ou démonstration ; relever aide d'interface séparément.

## 8. Guide professeur à produire avec la leçon

### Speech et démonstration

« Tu avais déjà fait bouger un personnage dans Scratch. Ici, GDevelop propose un comportement qui sait lire les flèches et déplacer le personnage. Nous allons l'ajouter, regarder ses réglages et décider d'une vitesse. Nous apprendrons ensuite à écrire nos propres conditions et actions : aujourd'hui, ce n'est pas nécessaire pour ce déplacement. »

Démontrer sur le même personnage : état immobile sans comportement, réglage complet, aperçu quatre directions, comparaison d'un seul paramètre. Ne pas livrer un déplacement déjà installé sans l'expliquer. Ne pas exiger d'enlever un comportement fonctionnel sur le projet original pour prouver qu'il est utile.

### Questions et réponses attendues

| Question | Réponse ou preuve utile |
| --- | --- |
| Pourquoi les flèches fonctionnent-elles sans événements ajoutés ? | Le comportement fournit ce pilotage ; montrer où il est attaché |
| Où changes-tu la vitesse ? | Dans le comportement du personnage ; pas dans son placement |
| Si tu augmentes la vitesse maximale, le départ change-t-il ? | Non ; tester depuis le même placement |
| Que se passe-t-il après relâchement ? | Le mouvement ralentit puis s'arrête selon les réglages ; ne pas réciter « instantanément » si ce n'est pas observé |
| Plus rapide est-il toujours plus facile ? | Comparer précision/exploration avec les essais, pas réponse universelle |
| Le bord de l'écran est-il déjà un mur ? | Non, aucune règle de blocage n'a été enseignée ; annonce de GD05, sans la programmer ici |

### Pannes et reprises ciblées

- **Aucune réaction :** vérifier focus, flèches, bon objet, comportement présent, contrôles standards actifs et valeurs positives. Une vérification puis un essai ; ne pas ajouter d'événements comme première réparation.
- **Image qui tourne :** retrouver l'option de rotation ; distinguer orientation et déplacement. Ne pas régler un angle de Sprite pour masquer la cause.
- **Personnage qui glisse un peu :** observer la décélération ; ne pas diagnostiquer toute inertie comme panne. Les réglages de référence doivent permettre une conduite accessible ; adaptation professeur documentée, pas mini-cours de physique.
- **Sortie du cadre :** fermer l'aperçu et repartir du placement central ; essais plus courts ou vitesse moindre. Pas de caméra/mur/limite cachés.
- **Comparaison indécidable :** mêmes départ et trajet, une seule valeur modifiée ; distinguer aperçu ancien et neuf. Si l'accélération empêche de voir la différence, corriger l'exemple de référence avant généralisation.
- **Copie mécanique :** faire choisir un trajet proche et une vitesse, demander une prévision puis une explication. Ne pas imposer un deuxième personnage ou des touches personnalisées comme preuve.

Consolidation : droite/gauche seulement, puis haut/bas ; deux valeurs proposées et aide à trouver le champ. Garder la décision et l'explication à l'élève. Approfondissement limité au bonus ; ne pas avancer GD05–GD08 pour occuper un élève rapide.

## 9. Supports, DA et migration lors de l'implémentation

- Réutiliser le personnage et le kit de GD01 ; aucun asset supplémentaire obligatoire.
- Prévoir un schéma original simple « personnage → comportement → flèches » et une comparaison lente/rapide sans distance ou durée prétendument mesurée. Ce sont des schémas, pas captures de GDevelop.
- Captures de l'ajout et des options uniquement après essai de la version française ; pas de capture inventée, de JSON de projet deviné ou de base annoncée comme testée.
- DA Jeu vidéo : paysage et palette chaude existants, bannière lisible avec fondu, nav CodeCraft + fil d'Ariane complet. Contenus/activités différenciés et essentiels visibles selon le modèle actuel.
- Navigation basse : GD01 précédent, GD02 suivant ; aucun retour Accueil redondant ni lien central « Voir le parcours ».
- Ajouter le module, guide, compétence et activités dans les formats actuels. Vérifier disponibilité des nouveaux IDs ; conserver tous ceux de GD01–GD03 et les données de suivi.
- Mettre à jour l'ordre du parcours et les voisins de GD01/GD02. GD02 reste accessible avec les acquis de GD01 : déplacement conseillé, pas prérequis conceptuel ajouté à la distinction objet/instance.
- Vérifier GD01 pour annoncer le déplacement prochain ; GD02/GD03 gardent le comportement expliqué sur le chemin normal. Accès direct : aide de reprise explicite, sans attribution automatique d'un acquis GD04.

## 10. Recette prévue — aucune validation déjà acquise

### Dans GDevelop

Relever version, langue, plateforme, noms exacts et valeurs initiales. Essayer projet GD01 réouvert → ajout du comportement → quatre directions → relâchement/arrêt → image sans rotation → deux vitesses sur même trajet → choix → sauvegarde/réouverture. Vérifier la vitesse exprimée dans le champ, la comparabilité des deux essais et les effets de deux touches dans le bonus.

Vérifier l'état initial sans comportement, le cas focus perdu, la sortie d'écran puis retour par aperçu neuf. Pour le chemin ayant déjà GD02/GD03, tester que jetons et message ne sont pas pilotés et que l'indice fonctionne toujours. Garder l'original intact lors des pannes volontaires.

### Dans CodeCraft, après implémentation seulement

Tests catalogue et données, unicité des IDs, compétence et guides, progression sans GD03 préalable, liens/voisins selon le nouvel ordre, compatibilité du suivi existant, téléchargement du kit inchangé. Vérifier rendu bureau/mobile, navigation clavier, indices et essentiels, palette Jeu vidéo. Les tests du site ne valident pas le comportement moteur.

### Avec un élève, quand disponible

Observer prévision, essai, champ choisi, comparaison et mission personnelle. Relever aide reçue ; ne pas déduire une durée universelle ou une efficacité validée d'une seule réalisation. Corriger l'étayage si la mission impose une notion non enseignée.

## 11. Porte de sortie de la préparation

La revue a conservé : résultat jouable tôt, différence comportement/événement, prérequis limités à GD01, choix personnel borné, départ/arrêt et sauvegarde, absence de collisions ou nouvelles touches cachées. Elle a corrigé la charge initiale, la répétition de l'exercice et la mission trop vague. La comparaison de vitesse réellement observable reste une condition de recette moteur, pas un résultat de la revue documentaire.

Ensuite : implémentation autorisée de GD04 et migration ciblée → tests site et recette moteur → corrections. Préparer le contenu du site ne permet pas de déclarer les réglages moteur validés ; finaliser les valeurs et gestes après recette avant de présenter le cours comme prêt à utiliser. GD05 et les lots suivants ne sont pas lancés par la préparation de GD04. Aucun commit/push/déploiement sans demande séparée.

## 12. État après implémentation autorisée

- Module `gdevelop-deplacement`, compétence `gdevelop.movement`, guide professeur et schéma original intégrés. Flèches standard, réglage de vitesse, deux tâches d'adaptation, trajet choisi et bonus sur copie ; aucune règle moteur inventée ni projet JSON livré.
- Ordre et voisins migrés : GD01 → GD04 → GD02 → GD03. Préparation de GD02/GD03 et notes professeur alignées ; déplacement conseillé mais non requis conceptuellement en GD02. Identifiants des modules/tâches existants conservés, aucun format de suivi changé.
- Vérification : 133 tests unitaires réussis ; 17 vues navigateur GDevelop réussies, parcours, quatre leçons, guides, vrais viewports mobiles 390 px et ressources. Captures GD04 bureau/mobile et pied mobile inspectées ; palette Jeu vidéo conservée. Serveur localhost:8000 vérifié séparément : nouvelle leçon effectivement servie.
- Recette moteur/version française et essai élève non effectués. Valeurs 120/240 explicitement provisoires, aucune preuve d'efficacité ou de déplacement déduite des tests du site. Aucun commit, installation, connexion ou lot GD05 lancé.
