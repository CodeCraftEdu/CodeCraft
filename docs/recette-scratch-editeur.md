# Recette dans l’éditeur Scratch

Relevé du 13 octobre 2026, après les corrections de la [revue des supports](revue-supports-scratch-stage.md). Éditeur officiel en ligne, navigateur intégré Codex sur Windows, langue française, sans connexion à un compte Scratch. Vue de bureau utilisée pour manipuler les blocs.

## Statut

**Import, sauvegarde et essais ciblés confirmés pour les six projets.** La reconstruction intégrale depuis les palettes et les variantes restent à faire avant de considérer l’activité autonome entièrement éprouvée. Les observations initiales ci-dessous et les compléments en fin de document distinguent les étapes de cette recette. Les essais du moteur consignés dans les recettes individuelles restent distincts.

## Gestes et libellés

Dans cette version, Paramètres permet de choisir Français. Le menu Fichier affiche « Load from your computer » pour le chargement et « Sauvegarder sur votre ordinateur » pour l’export. Ne pas présenter « Importer depuis votre ordinateur » comme un libellé confirmé de ce menu.

Les consignes élèves indiquent désormais de charger le fichier depuis le menu Fichier. Dans le projet des vies, Danger est sélectionné à l’importation : la consigne demande de cliquer sur Pilote pour retrouver ses piles.

## Observations

| Support          | Confirmé dans l’éditeur                                                                                                                                                                                                                                                                                                                                                | Restant                                                                                                                                                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Clones mobiles   | Import de la référence, deux piles retrouvées, copie visible après le drapeau, scène vide à la fin du trajet. Export par le menu, puis réimport du fichier téléchargé avec Balle et les deux piles retrouvées. Comparaison `abscisse x > 200` reconstruite depuis Opérateurs et Mouvement : saisie de 200, insertion du bloc abscisse x et emboîtement dans la boucle. | Reconstruction complète des deux piles depuis le départ, adaptation des paramètres et sauvegarde de cette reconstruction. Le nombre exact de clones simultanés n’a pas été mesuré dans cette recette UI.                                                     |
| Niveaux et états | Import de la référence, départ avec score 0, niveau 1 et état en jeu. Trois clics donnent score 3 puis niveau 2, avec petite cible bleue. Six clics donnent score 6 puis état gagné ; un clic après la victoire conserve score 6. Relance et export par le menu effectués.                                                                                             | Réimport du fichier exporté, reconstruction complète, variantes quatre/huit. Les clics pendant les deux secondes précises du message ne sont pas confirmés ici : le clic supplémentaire est observé après la victoire.                                       |
| Vies et contacts | Après import dans un éditeur rechargé, costume Pilote de 32 × 32 et scène visible. Au drapeau : trois vies et position x = -120. Placement au contact par le champ x : une vie retirée, compteur maintenu à deux. Séparation puis retour : une deuxième vie retirée. Troisième contact : zéro. Relance et export par le menu effectués.                                | Réimport du fichier exporté, reconstruction de la surveillance et variantes. Les flèches pendant le contact et le contact supplémentaire à zéro sont confirmés dans le complément ci-dessous. |

## Exports conservés

Les téléchargements sont copiés dans `browser-artifacts/recette-scratch-editeur-2026-10-13/`, dossier local ignoré par Git. `exports.json` relève la structure de chaque archive. Les trois exports sont des ZIP lisibles, contiennent leurs costumes et ont des empreintes d’assets cohérentes.

- Clones : Balle, 15 blocs, deux piles, costume balle.
- États : Cible, 35 blocs, quatre piles, deux costumes ; variables globales score, niveau et etat.
- Vies : Danger et Pilote, 25 blocs et deux piles dans Pilote ; variable globale vies.

Ces structures sont conservées par rapport aux références sources. Les fichiers du dépôt n’ont pas été remplacés par les exports de recette. Ce contrôle des archives ne confirme pas une réouverture dans l’interface.

## Incidents et limites du contrôle

Le sélecteur de fichier a répondu très lentement lors de premières importations. Après plusieurs projets ouverts dans le même éditeur, le support des vies a présenté une scène vide et un costume de 0 × 0. Un rechargement de l’éditeur suivi de l’import du même fichier a retrouvé un costume de 32 × 32 et la scène attendue. Aucun changement d’archive n’a été nécessaire ; la cause exacte de cet incident de session n’est pas établie.

Lors de la réimportation de la sauvegarde des vies, le contrôle du sélecteur a échoué, puis le navigateur n’a plus répondu aux commandes. La remise à la taille habituelle du navigateur n’a pas pu être confirmée. Cette interruption empêche de valider les dernières manipulations, sans démontrer un défaut des archives.

Les captures ont été examinées pendant les essais mais ne sont pas enregistrées dans ce dossier de recette. Les preuves locales conservées sont les trois exports et leur relevé de structure. Aucun essai avec un élève n’a été effectué.

## Reprise utile

**Sol High.** Reprendre dans un navigateur de cours stable : importer les trois départs, reconstruire les piles en suivant les supports, sauvegarder puis réouvrir chaque construction. Les flèches pendant l’attente des vies sont confirmées dans le complément ci-dessous ; vérifier les clics pendant le message final. Les essais déjà confirmés ci-dessus n’ont pas besoin d’être repris isolément ; ils peuvent servir de points de contrôle de la reconstruction.

Références : [vies et contacts](recette-scratch-vies-contacts.md), [clones mobiles](recette-scratch-clones-mobiles.md), [niveaux et états](recette-scratch-niveaux-etats.md).

## Complément : compte Scratch et vérification au clavier

Essais complémentaires du 13 octobre, connecté au compte CodeCraftEdu. Les six projets sont enregistrés séparément, sans partage public. Leurs identifiants sont conservés pour reprendre les essais sans créer de doublons.

| Support | Départ | Exemple |
| --- | --- | --- |
| Vies et contacts | `1391213130` | `1391211682` |
| Clones mobiles | `1391213631` | `1391213388` |
| Niveaux et victoire | `1391213849` | `1391213735` |

### Vies : contrôles supplémentaires réussis

Après import local, le costume Pilote mesure 32 × 32. Les flèches sont maintenues via les commandes clavier du navigateur, sans modification des blocs.

- Entrée au contact : Pilote en x = -27, vies = 2.
- Déplacement pendant l’attente de séparation : x passe à -3, vies reste à 2.
- Sortie complète du contact : x = 84, vies reste à 2.
- Retour après séparation : vies = 1, puis 0 lors du contact suivant.
- Nouvelle séparation et quatrième contact : le compteur reste à 0, le déplacement continue.

### Correction des costumes à la réouverture

L’exemple des vies enregistré dans le compte se rouvrait avec une scène blanche et un costume Pilote de 0 × 0. Un export depuis cette session contenait pourtant les dessins SVG. Le réimport du fichier local rétablissait le costume et les collisions ; une nouvelle sauvegarde suivie d’un rechargement reproduisait le défaut.

Un essai avec `version="1.1"` et un `viewBox` correspondant aux dimensions de chaque SVG a conservé le costume de 32 × 32 après sauvegarde et rechargement du projet en ligne. Cette correction est appliquée aux costumes et aux arrière-plans des six archives locales ; leurs identifiants et empreintes d’assets ont été recalculés. Les piles, variables, positions, centres de rotation et dimensions restent identiques. Ce résultat confirme la correction dans cet éditeur, sans établir la cause interne exacte du défaut.

Le test Node des archives contrôle les dimensions, le `viewBox`, la présence de chaque asset et la cohérence des empreintes. Il ne remplace pas la réouverture dans Scratch.

Lors de cette première tentative, seul l’exemple des vies avait été corrigé et rouvert dans le compte. Le sélecteur de fichier a bloqué l’import suivant et les commandes de l’onglet de remplacement. La reprise décrite ci-dessous a permis de terminer la mise à jour des cinq autres projets et les essais ciblés.

Preuves locales : `browser-artifacts/scratch-verification-2026-10-13/vies-clavier.jpg`, archive d’essai `vies-viewbox.sb3`, et export avant correction `vies-export-avant-correction.sb3` dans ce même dossier. Aucun essai avec un élève ni reconstruction complète des piles n’est ajouté à cette recette.

### Contrôles du dépôt après correction

Formatage, lint, catalogue et 225 tests Node réussis. Les cinq suites navigateur élève passent dans `browser-artifacts/run-s0nZdY/` ; la suite professeur échoue une fois sur la restauration du défilement après fermeture du conducteur, puis passe intégralement lors de sa reprise isolée dans `browser-artifacts/run-MB5GYz/`. L’exécution initiale de `npm run check` termine donc en échec ; ne pas la présenter comme une exécution complète verte. Aucun fichier professeur n’est modifié pour contourner cet échec.

Le profil Scratch intermédiaire passe avec 88 tests Node. Les captures de l’encart vies et de la vérification au clavier sont examinées. Les blocs des trois références et leurs centres de rotation sont également comparés aux exports conservés avant correction : aucune différence.

### Reprise : six projets corrigés et essais ciblés terminés

Les onglets d’essai temporaires ont été fermés automatiquement à la fin du tour ; l’utilisateur ne voyait donc que « Mes projets » et les trois anciens onglets localhost sans serveur. La reprise utilise uniquement l’onglet Scratch existant. Plusieurs imports ont abouti malgré un délai de commande dépassé : un rétablissement de la connexion de contrôle, puis une nouvelle observation de l’éditeur, ont permis de constater le chargement effectif. Un délai dépassé n’est pas à lui seul un échec d’import.

Les six projets du tableau ont reçu les archives corrigées, sans création de doublons ni partage public. Chaque sauvegarde est suivie d’un rechargement depuis le compte. Les noms finaux et les six identifiants sont retrouvés dans « Mes projets ». Le dernier départ a affiché un échec de sauvegarde ; « Essayer à nouveau » a permis de conserver la version corrigée, vérifiée après rechargement.

| Projet | Observation après rechargement et essai |
| --- | --- |
| Vies, exemple | Pilote de 32 × 32 conservé ; essais clavier et dégâts décrits plus haut. |
| Vies, départ | Pilote de 32 × 32 ; une pile de déplacement. Flèche droite : x = 6 au contact, compteur toujours à 3, sans pile de dégâts. |
| Clones, exemple | Balle de 24 × 24 conservée ; trois copies visibles simultanément environ 1,3 seconde après le drapeau. |
| Clones, départ | Balle de 24 × 24 conservée ; modèle visible et aucun script de création fourni. |
| Niveaux, exemple | Deux costumes de 100 × 100 conservés ; progression puis protection des clics pendant la victoire confirmées. |
| Niveaux, départ | Deux costumes de 100 × 100 ; aucun script fourni. Drapeau et clic sur la cible conservent score 0, niveau 1 et état préparation. |

Dans l’exemple des niveaux, le sixième clic donne score 6. Les trois clics suivants sont envoyés à environ 278, 414 et 578 ms après le début de cette série ; le score reste à 6 et l’état devient gagné. La capture montre encore la bulle « Gagné ! » : ces essais ont lieu pendant les deux secondes d’affichage, avant l’arrêt. Le journal conserve les valeurs réellement lues, y compris le bref délai entre l’incrément du score et la transition d’état.

Preuves complémentaires dans `browser-artifacts/scratch-verification-2026-10-13/` : `victoire-clics.json`, `victoire-clics.jpg`, `clones-trois.jpg`, `vies-depart.jpg`, `clones-depart.jpg`, `niveaux-depart.jpg` et `six-projets-corriges.jpg`. Les captures sont relues ; certaines captures prises immédiatement après une action affichent encore la vue précédente. Les relevés DOM des dimensions, positions et compteurs complètent ces images.

Les vérifications ciblées demandées sont terminées. Les constructions intégrales depuis les palettes, les variantes et une utilisation par un élève restent distinctes ; elles ne sont pas déclarées réalisées. Aucun nouveau changement fonctionnel du dépôt n’est ajouté lors de cette reprise : les contrôles précédents restent applicables aux six mêmes archives.

## Publication et intégration des liens

Les six projets sont ensuite partagés le 13 octobre avec leurs consignes, leurs crédits et une miniature. Le profil public CodeCraftEdu affiche les six identifiants du tableau, parmi 15 projets partagés. Les liens sont intégrés aux trois modules et aux guides professeur, avec les fichiers locaux conservés. Le [relevé de publication](publication-scratch-supports.md) contient les URL et les textes enregistrés.

L’intégration passe un nouveau `npm run check` complet : 226 tests Node et les six suites navigateur réussis dans `browser-artifacts/run-xahjkg/`. Les nouveaux contrôles vérifient les deux liens en ligne et les téléchargements, sans imposer l’ouverture de Scratch aux tests locaux.
