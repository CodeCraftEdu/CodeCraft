# CodeCraft

Mini-site pédagogique statique, sans framework, dépendance, backend ni étape de build.

Le [cadrage pédagogique et la roadmap](docs/roadmap-pedagogique.md) centralisent les décisions HTML/CSS puis JavaScript, les correspondances avec le catalogue existant, les exigences de qualité et l’état des lots réalisés. Les contenus prévus y sont distingués des modules déjà disponibles et des essais professeur restant à confirmer.

## Prévisualisation

Ouvrir `index.html` directement dans un navigateur, ou lancer un serveur statique local à la racine du dossier :

```bash
python -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

L’espace professeur est disponible sur `prof.html`. Le conducteur initial reste consultable dans `prof-conducteur-historique.html`.

## Bibliothèque permanente

Le catalogue se trouve dans `lesson-data.js` :

- `domains` décrit les domaines et leurs parcours ; avec un seul domaine, l'accueil affiche directement ses parcours et diagnostics.
- `skills` définit les compétences internes, sans référentiel externe.
- `modules` contient chaque contenu une seule fois, avec un identifiant stable, un `domainId`, un `type`, des `skillIds` et des `blocks`.
- `pathways` contient les listes ordonnées `moduleIds` : plusieurs parcours peuvent référencer le même module.
- `moduleTypes` déclare `lesson`, `practice`, `challenge`, `project` et `diagnostic`.
- `teacher` conserve les anciennes données du conducteur ; l’archive professeur en contient une copie autonome figée.

Les vingt-quatre modules actuels sont : Titres et paragraphes, Listes HTML, Mini-page des fondations, Liens HTML, Révision HTML, Images HTML, Classes et couleurs CSS, Mini-page HTML complète, Découvrir le CSS, Mon affiche numérique, Structure d’un document HTML, Fichiers et chemins, Relier une feuille de style, Organiser une page en zones, Rendre les textes lisibles, Boîtes et espacements, Dimensions et images dans une carte, Ma carte personnelle, Relier plusieurs pages, Mon mini-site, Préparer un projet de cartes, Parent et enfants, Flexbox et Diagnostic Web. Les cours CSS non rédigés ne sont pas créés automatiquement à partir des compétences.

Fondations suit : Titres et paragraphes → Listes → Mini-page des fondations → Liens → Images → Mini-page HTML complète → Découvrir le CSS → Classes et couleurs → Mon affiche numérique. Les modules partagés existent une seule fois. Débutants conserve son départ : Titres et paragraphes → Listes → Liens → Révision HTML → Images → Classes et couleurs → Mini-page HTML complète, puis poursuit avec Structure d’un document HTML → Fichiers et chemins → Relier une feuille de style → Parent et enfants → Organiser une page en zones → Rendre les textes lisibles → Boîtes et espacements → Dimensions et images dans une carte → Ma carte personnelle → Relier plusieurs pages → Mon mini-site. Découvrir le CSS est une reprise accessible avant les classes ou la feuille externe, avec retour possible par la navigation du navigateur ; l’affiche reste un prolongement facultatif proposé depuis la mini-page. Ces détours ne créent pas de faux précédent/suivant dans un parcours qui ne les contient pas. La liste Avancés et Diagnostic Web restent inchangés. Parent et enfants est partagé avec Débutants ; sa transition propose désormais les zones HTML ou Flexbox selon les prérequis.

Les blocs conservent leurs types `lesson`, `tasks`, `checklist`, `callout` et `details`. Révision HTML possède ses propres exercices de révision, indépendants des blocs des autres modules. Le type existant `reference` (`moduleId`, `blockId`) est utilisé uniquement pour réafficher les cartes de ressources image du module Images dans Dimensions, le projet Carte et Mon mini-site. Les fichiers SVG, sources encodées et contrôles de copie restent définis une seule fois ; aucun exercice de Révision n’est recouplé aux cours. Conserver des identifiants de tâches uniques dans chaque module.

Pour ajouter un contenu, ajouter un module au catalogue et référencer son identifiant dans le parcours voulu. Pour un diagnostic, utiliser `diagnosticModuleIds` du domaine. Ne pas renommer les identifiants existants : ils servent aux liens partagés. Aucun changement de séance hebdomadaire n'est nécessaire. L'ajout de nouveaux contenus nécessite toujours une publication des fichiers statiques.

## Liens et navigation

### Relations pédagogiques et guides

Dix-sept modules renseignent les métadonnées facultatives suivantes dans `lesson-data.js` : Images HTML, Parent et enfants, Flexbox, Mini-page HTML complète, Découvrir le CSS, Classes et couleurs CSS, Mon affiche numérique, Structure d’un document HTML, Fichiers et chemins, Relier une feuille de style, Organiser une page en zones, Rendre les textes lisibles, Boîtes et espacements, Dimensions et images dans une carte, Ma carte personnelle, Relier plusieurs pages et Mon mini-site. Les autres modules restent lisibles ; une absence de prérequis signifie « non détaillés », jamais « acquis ».

| Champ | Contrat |
| --- | --- |
| `prerequisiteSkills` | Liste de `{ skillId, expectation }` : compétences d’entrée et niveau précisément attendu. Ce ne sont pas des liens vers des cours à terminer. |
| `skillIds` | Compétences travaillées, y compris celles mobilisées par un bonus. Leur présence ne signifie ni prérequis ni acquisition. |
| `masteryCriteria` | Textes décrivant des comportements observables. Aucun calcul de validation. |
| `consolidation`, `bonusActivities`, `nextSteps` | Listes de références à des contenus existants : `{ moduleId, blockId?, itemId?, label?, prerequisiteSkills? }`. `blockId` cible une activité identifiée, y compris dans un bloc replié ; `itemId` cible une tâche de ce bloc et exige `blockId`. Les prérequis d’une référence s’appliquent uniquement à cette activité. |
| `teacherGuide` | Guide générique complet : `objective`, `entryDiagnosis`, `preparation`, `why`, `discoverySpeech`, `example` (`target`, `comments`), `questions` (`question`, `answer`), `accompaniedActivity`, `independentActivity`, `differentiation`, `commonErrors` (`symptom`, `helps`), `notes`, `quickConductor`, `references` (`title`, `url`). Les exemples et activités pointent vers les blocs élèves ; critères et orientations viennent des métadonnées communes. |
| `resources` | Ressources d’exercice `{ id, title, path, alt, codepenSrc }`, affichées par un bloc `resource` avec son `resourceId`. |

Les identifiants de blocs doivent être uniques dans un module, ceux des tâches aussi. Les relations ciblent le contenu, sans le recopier. Les aides `hints` d’une tâche sont révélées progressivement : attention, difficulté, comparaison, correction. `hint` et `syntax` existants restent compatibles.

`pedagogy.js` rend ces informations et ressources sans accès au suivi. Aucun verrouillage, rythme imposé ou moteur de recommandation individuel n’est ajouté. Les choix de suite sont des propositions, pas une certification. Exemple de lien vers une activité : `index.html#module/html-images?parcours=web-fondations&activite=depannage`. Ajouter `&tache=source-incorrecte` permet de viser une tâche. Si le module cible appartient au parcours courant, ce contexte est conservé ; sinon le module s’ouvre directement. Un ancien lien sans activité reste valide.

Les guides sont accessibles dans `prof.html`, dans « Guides professeur par module », même sans fichier privé ouvert : `prof.html#guide/html-images`, `prof.html#guide/html-parent-enfants`, `prof.html#guide/css-flexbox`. `teacher-guides.js` assure leur rendu séparé des consignes élèves. Ces guides sont publics, sans données individuelles ni référentiel d’organisme. Le conducteur historique et les outils de séances restent indépendants.

Le lot HTML complet/premiers styles a ajouté les guides `prof.html#guide/html-mini-page`, `prof.html#guide/css-decouverte`, `prof.html#guide/css-classes-couleurs` et `prof.html#guide/web-affiche-numerique`. Ses routes élèves sont `#module/css-decouverte` et `#module/web-affiche-numerique`. Le défi HTML garde son type `challenge`, ses exigences et son ID ; l’affiche est un `project` distinct, sans CSS avancé obligatoire. Les cadres locaux fournis restent une aide, pas une validation des compétences de fichiers ou de feuille externe.

Le lot fichiers ajoute les modules `html-document`, `html-fichiers-chemins` et `css-feuille-style`, et leurs guides sur `prof.html#guide/<id>`. Leurs exercices se réalisent dans des fichiers locaux avec un éditeur et un navigateur : CodePen ne reproduit pas la manipulation du cadre, des dossiers et du chargement d’une feuille externe. Le carré SVG du module Images est réutilisé, sans nouvel asset ni service distant. Trois compétences indépendantes sont ajoutées : `html.document`, `html.paths`, `css.stylesheets`. Les douze anciennes gardent leur sens ; le format privé reste inchangé. Sans entrée de progression, ces compétences restent À voir ; aucun acquis ni mapping externe n’est déduit ou créé.

Le lot zones/lisibilité/espacements ajoute `html-zones`, `css-textes-lisibles` et `css-boites-espacements`, avec leurs guides `prof.html#guide/<id>`. Les exercices fonctionnent dans CodePen ou dans une copie de projet local avec feuille déjà reliée. `html.landmarks` et `css.fonts` complètent les compétences sans modifier les anciennes. `css.spacing` et `css.borders` sont réutilisées ; le guide précise que la bordure simple ne valide pas les arrondis également inclus dans `css.borders`. Le suivi reste manuel, sans changement de format privé. Les tests Chrome vérifient l’arbre HTML, l’interligne à taille constante et les distances padding/margin/bordure réelles.

Le lot carte ajoute `css-dimensions-images` (cours) et `web-carte-personnelle` (projet), disponibles à la fin de Débutants et directement par `#module/<id>`. Les deux guides suivent `prof.html#guide/<id>`. La compétence `css.sizing` distingue dimensions/proportions des compétences antérieures ; aucun acquis n’est reporté et le JSON privé reste compatible sans migration. Le projet réinvestit HTML, images, classes, lisibilité et espacements sans Flexbox obligatoire ni solution complète côté élève. Flexbox conserve ses exercices et propose désormais les reprises Boîtes et Dimensions ; son ordre dans Avancés ne change pas.

Le lot multipage ajoute `html-multipage` (« Relier plusieurs pages », cours) et `web-mini-site` (« Mon mini-site », projet), à la suite de Carte dans Débutants, avec leurs guides `prof.html#guide/<id>`. Deux fichiers locaux et des liens relatifs suffisent au cours ; le projet réinvestit une feuille CSS commune, les images et la lisibilité. La troisième page reste un bonus, sans Flexbox ni publication obligatoire. La nouvelle compétence `html.navigation` ne reprend aucun acquis automatiquement depuis `html.links` ou `html.paths` ; aucune migration du fichier privé ni correspondance externe n’est ajoutée.

Les SVG originaux de `assets/exercices/` sont des ressources pédagogiques créées pour CodeCraft, pas des assets tiers. Pour un projet local, les conserver dans cette arborescence à côté de la page HTML. Le code CodePen utilise une adresse `data:image/svg+xml,...` embarquant le même dessin : il est utilisable avant publication et sans serveur d’images. Le bouton « Copier uniquement la source » copie cette adresse entière à coller entre les guillemets de `src` ; l’élève rédige lui-même `alt`. La source encodée reste repliée et peut être ouverte pour une copie manuelle. Le test vérifie que les sources embarquées correspondent aux fichiers. Toute modification des dessins doit mettre à jour leur `codepenSrc` dans le catalogue. Aucune indisponibilité de ressource n’est présentée comme une faute de l’élève.

Vérifications : `node --test tests/pedagogy.test.cjs`, puis `node tests/student-catalog.cjs` pour les parcours, guides et exemples dans Chrome isolé. Les tests professeur existants couvrent toujours le format privé et les opérations de suivi.

Les tests navigateur créent aussi des fichiers d’exercice temporaires et les ouvrent réellement en `file://` : title/h1, images et liens relatifs, renommages, CSS externe, chemin incorrect et sélecteur incorrect, puis sous-dossiers. Le lot multipage vérifie aussi les allers/retours et entrées directes entre deux puis trois pages, la réparation des menus après renommage, la feuille commune et la distinction panne de liaison / classe / image. Ils n’utilisent ni un fichier personnel ni le dossier Drive ; leurs fichiers et captures restent dans le dossier temporaire affiché en fin de test.

### Routes existantes

- `#parcours/web-debutants` : liste des modules du parcours.
- `#module/html-images` : accès direct au module, indépendant d'un parcours.
- `#module/html-images?parcours=web-debutants` : même contenu, avec précédent/suivant et couleur du parcours.
- `#domaine/web` : accès explicite au domaine ; le choix des domaines apparaît à l'accueil lorsqu'il y en a plusieurs.

Les anciens hash `#fondations`, `#debutants`, `#avances` et `#rattrapage` restent des alias. Rattrapage ouvre Diagnostic Web, séparé des parcours. Un contexte de parcours incompatible est ignoré ; le module reste accessible sans précédent/suivant arbitraire.

## Cases temporaires

Les cases servent uniquement de repères pendant que la page reste ouverte. Leur état est conservé en mémoire pendant la navigation, y compris lorsqu'un exercice est partagé entre deux parcours. Un rechargement les réinitialise. Le site élève n'utilise ni `localStorage` ni `sessionStorage` et ne lit ni ne supprime les anciennes clés de séance. Il ne s'agit pas d'un suivi des acquis.

## Professeur

`prof.html` est une page publique, accessible directement sans lien depuis la navigation élève. Elle permet de gérer les classes, les élèves, leur progression CodeCraft, les référentiels externes privés et les séances avec leur conducteur. Le conducteur historique reste une archive indépendante.

### Classes, élèves et compétences

- Créer une classe avec son nom et, facultativement, un contexte/organisme en texte libre. La liste « Classe sélectionnée » permet de changer de classe. Son nom et son contexte peuvent être modifiés dans « Renommer / modifier le contexte » ; ces changements sont enregistrés à la sortie du champ.
- « Ajouter un nouvel élève » crée une fiche avec son seul prénom ou nom d’affichage puis la rattache à la classe. « Ajouter un élève existant » propose les fiches qui ne sont pas encore membres de la classe et crée uniquement le `membership` : les progressions restent communes à l’élève. Si un nom strictement identique existe déjà, l’interface propose de rattacher ou d’ouvrir cette fiche tout en laissant possible la création d’un véritable homonyme.
- Cliquer sur un élève ouvre sa fiche. « Modifier le nom, la remarque ou gérer l’élève » permet de modifier son nom (en quittant le champ), sa remarque facultative et son rattachement.
- « Parcours actuel dans cette classe » permet de choisir un parcours CodeCraft ou « Non renseigné ». Le choix est sauvegardé immédiatement dans le rattachement `memberships`, jamais dans la fiche globale `students`. Un même élève peut ainsi avoir des parcours différents selon la classe.
- Les compétences du catalogue apparaissent avec leurs libellés humains, regroupées en HTML et CSS. Les boutons « À voir », « En cours », « Acquis » appliquent uniquement la décision du professeur. La sauvegarde démarre immédiatement après le clic, ou prend la suite d’une écriture déjà en cours.
- Sans entrée de progression, la compétence est « À voir ». Passer à « Acquis » renseigne la date locale du jour. Recliquer « Acquis » ne change pas la date. Revenir à un autre statut l’efface. Les remarques sont conservées ; les modifier ne change ni statut ni date.
- Les remarques générales et par compétence sont enregistrées après 600 ms sans saisie. On peut changer d’élève pendant cette attente : la remarque reste attachée à la bonne fiche.
- « Retirer de cette classe » supprime seulement le rattachement courant après confirmation. La fiche globale, les progressions et les séances historiques restent intactes.
- « Supprimer définitivement l’élève » est une action secondaire signalée visuellement. Depuis sa dernière classe, elle supprime en une seule opération le rattachement courant, la fiche et ses progressions actuelles après confirmation. Si l’élève appartient aussi à d’autres classes, l’action est bloquée avant confirmation et indique lesquelles doivent d’abord le retirer. Les snapshots des séances sont toujours conservés.
- Dans les vues historiques et l’impression, un `studentId` encore présent dans `students` affiche toujours le nom actuel de l’élève. Si la fiche globale a été supprimée, le nom conservé dans le snapshot de séance sert de secours. Le renommage ne réécrit donc jamais les anciennes séances.
- « Supprimer cette classe », dans le panneau de modification, retire la classe et ses rattachements après confirmation tout en conservant les fiches élèves et leurs progressions. Une classe possédant des séances historiques est protégée : la suppression est bloquée avec une explication afin de ne pas perdre cet historique.
- Aucune progression n’est dérivée des cases du site élève.

### Référentiels externes privés

- Le dépôt ne contient aucun référentiel d’organisme. Un fichier d’import JSON privé peut être sélectionné dans « Référentiels externes privés » ; son contenu est validé puis copié dans `frameworks` au sein de l’Espace CodeCraft ouvert.
- Une classe peut choisir un référentiel importé ou rester sur « Aucun — compétences CodeCraft uniquement ». Sans référentiel, sa fiche élève ne change pas.
- La fiche d’un élève affiche alors les niveaux, étapes et objectifs officiels, leur couverture CodeCraft et l’état actuel des compétences correspondantes. Cette lecture ne valide rien automatiquement.
- Chaque objectif externe possède sa propre décision professeur « À voir / En cours / Acquis », sa date d’acquisition et une remarque facultative dans `frameworkProgress`. Elle reste indépendante de `progress`.
- Les fichiers d’import privés doivent rester hors du dépôt, comme `espace-codecraft.json`.

Le statut de sauvegarde et le bouton de réessai restent visibles pendant le défilement. Après ouverture, le panneau du fichier se replie pour laisser la place aux classes. Les outils de relecture et de copie sont dans « Fichier, copie de secours et test technique ». L’ancien libellé technique reste facultatif dans un sous-panneau replié ; sa valeur existante est conservée.

### Séances et conducteurs

Dans une classe, les boutons **Élèves / Séances** permettent de passer du suivi à la préparation. La date d’une nouvelle séance est préremplie, le titre est facultatif et la composition actuelle de la classe est automatiquement conservée avec les noms. La séance peut être créée immédiatement sans préparation avancée. Toutes les présences commencent à **Non renseigné** ; cela ne signifie pas absent.

L’historique est limité à la classe sélectionnée, trié par date décroissante. Cliquer sur une séance permet de la modifier, y compris lorsqu’elle est Terminée ou Archivée. Le référentiel de la classe au moment de la création est conservé dans la séance, même si celui de la classe change ensuite.

- **Conducteur rapide** accepte un déroulé libre sur plusieurs lignes et affiche par défaut un aperçu opérationnel. Les lignes commençant par une plage horaire deviennent automatiquement des blocs avec horaire, groupe, thème et consignes ; les lignes non reconnues sont conservées. Une enveloppe copiée composée du titre Markdown « Conducteur rapide » et d’une fence globale `text` est ignorée uniquement à l’affichage, sans modifier le JSON. **Modifier** ouvre le textarea et **Ouvrir le conducteur** active une vue plein écran à défilement unique, lisible pendant le cours.
- **Préparation détaillée** conserve, dans un panneau replié, le texte pédagogique long préparé avant le cours. Sa vue de lecture interprète un sous-ensemble sûr de Markdown — titres, paragraphes, listes, gras, code et séparateurs — sans autoriser de HTML. **Modifier / Terminer l’édition** permet de revenir au texte source. Elle est indépendante du conducteur rapide et des notes de séance, et n’est pas imprimée dans le PDF conducteur.
- **Tout le monde présent** marque tout le roster Présent en un clic ; il suffit ensuite de corriger les absents. **Non renseigné** reste disponible individuellement.
- Les éléments quotidiens restent visibles : date, titre, conducteur rapide, présences, notes et bouton **Terminer la séance**. Ce bouton ne valide aucune compétence.
- **Préparation avancée** conserve dans un panneau replié le statut complet, l’heure de départ, les compétences, modules, objectifs externes, l’aide à la préparation et le conducteur structuré. Aucun de ces champs n’est obligatoire.
- Choisir facultativement des compétences, modules et objectifs externes. Aucun choix, statut ou présence ne modifie les progressions.
- Consulter l’aide à la préparation : élèves, parcours actuel dans cette classe (issu du rattachement, ou « Non renseigné »), présences, compétences actuelles En cours / Acquises, liens vers les modules et objectifs officiels. Le parcours courant ne renseigne ni ne modifie automatiquement le parcours des créneaux, qui reste choisi par le professeur.
- Ajouter des créneaux : minute de début, durée, titre, instructions, élèves ciblés, parcours et ressources facultatifs. Une heure de départ facultative permet d’afficher les horaires correspondants. Sans élève ciblé, le créneau s’adresse à toute la classe.
- **Monter / Descendre** change l’ordre des créneaux, sans recalculer leurs horaires. **Supprimer** demande confirmation. Les créneaux sont repliables pour une lecture rapide pendant le cours.
- Les notes générales restent privées et ne sont pas imprimées. Les rappels, saisis à raison d’un par ligne, figurent sur le conducteur imprimé.
- Le bouton **Imprimer / PDF** du Mode conducteur et le bouton d’impression de la séance produisent le même document épuré : métadonnées de séance, blocs horaires du conducteur rapide sans marqueurs bruts, puis conducteur structuré sous un titre distinct lorsqu’il existe aussi. La préparation détaillée, les notes, les remarques élèves, leur progression complète et les outils de gestion sont exclus. Choisir **Enregistrer au format PDF** dans Chrome/Edge ; désactiver les en-têtes/pieds de page du navigateur si nécessaire.

Les séances restent dans le même `espace-codecraft.json`. Les clics déclenchent la sauvegarde immédiatement ; les textes sont sauvegardés après une pause de 600 ms. La préparation ne crée aucun autre fichier privé. Une impression ou un PDF est uniquement un export volontaire.

### Fichier privé et navigateur

Utiliser Chrome ou Edge sur ordinateur, via GitHub Pages en HTTPS ou `http://localhost:8000/prof.html` pour les tests locaux. L’accès direct au fichier repose sur la File System Access API, sans compte CodeCraft, serveur de données ni API Google Drive.

1. Cliquer sur **Créer un Espace CodeCraft**, puis choisir `espace-codecraft.json` dans un dossier Google Drive synchronisé disponible sur l’ordinateur, **en dehors de ce dépôt**. Un fichier non vide ne sera pas écrasé par cette action.
2. Pour un fichier existant, utiliser **Ouvrir un Espace CodeCraft** et accorder la permission de lecture/écriture. Le JSON est validé avant de remplacer l’espace en mémoire. Une ouverture seule ne réécrit pas le fichier.
3. Créer une classe, ajouter un élève et renseigner une compétence. Si nécessaire, importer d’abord un référentiel privé puis le sélectionner pour la classe. Les actions pédagogiques déclenchent directement la sauvegarde ; les remarques attendent une pause de 600 ms. Le bouton **Enregistrer / réessayer** permet de demander l’écriture immédiatement ou de redemander une permission.
4. Attendre **Enregistré dans le fichier local** : cet état exige la fermeture réussie du flux d’écriture, sa relecture et l’absence d’une modification plus récente en attente. Il ne confirme pas la synchronisation Google Drive ; vérifier celle-ci dans l’application Drive avant de changer de poste.

Seul le handle du fichier est éventuellement mémorisé dans IndexedDB. Aucune donnée pédagogique n’est stockée dans localStorage, IndexedDB ou un cache applicatif. Au chargement, CodeCraft tente automatiquement de relire ce fichier sans déclencher de demande de permission. Si l’autorisation est encore valide, l’espace s’ouvre directement. Si Chrome exige une nouvelle interaction, le bouton devient **Autoriser l’accès à l’Espace CodeCraft** ; le handle reste mémorisé. **Rouvrir le dernier fichier** reste disponible comme solution manuelle. La suppression des données du navigateur fait seulement perdre cet accès mémorisé : sélectionner de nouveau le JSON avec **Ouvrir**. Un autre navigateur, profil ou port localhost ne partage pas forcément le handle.

Les modifications non sauvegardées restent uniquement dans la mémoire de l’onglet et peuvent être perdues si celui-ci est fermé ou si le navigateur s’arrête. Un avertissement de fermeture est demandé, sans garantie qu’il soit affiché dans toutes les situations.

### Erreurs, conflits et copie de secours

- JSON invalide, champs inconnus ou version de schéma inconnue : refus d’ouverture, aucun remplacement automatique et aucune migration destructive.
- Permission refusée, fichier indisponible ou erreur d’écriture : message explicite ; les modifications restent en mémoire. Réessayer ou télécharger une copie avant de quitter.
- Modification externe détectée avant une écriture : refus d’écraser. Télécharger les changements en mémoire, puis **Relire le fichier** ; aucune fusion automatique.
- **Télécharger une copie de secours** génère un JSON privé complet depuis la mémoire, y compris les dernières saisies. Cela ne change pas l’état du fichier principal ni sa révision. Le navigateur gère le téléchargement : vérifier le fichier obtenu et le ranger dans un dossier privé. La copie peut être rouverte avec **Ouvrir**.

Utiliser **un seul onglet et un seul ordinateur à la fois**. La comparaison du contenu avant écriture détecte les conflits déjà visibles ; elle n’est pas un verrou distribué et ne peut pas empêcher toutes les courses avec un autre processus ou Google Drive. La synchronisation cloud reste extérieure à CodeCraft.

Les référentiels externes, leurs versions, objectifs et mappings sont privés et réservés dans le JSON. Aucun référentiel d’organisme n’est fourni dans le dépôt. La page utilise `textContent` pour les textes du fichier et n’envoie pas le JSON sur le réseau. Ce fichier n’est pas chiffré par CodeCraft : protéger son dossier et ses partages Drive. Les noms `espace-codecraft*.json` sont ignorés par Git, mais cela ne protège pas un fichier privé renommé ou ajouté de force.

### Code et format

- `teacher-model.js` : schéma V1 déclaratif, validation, création et sérialisation ; indépendant du navigateur.
- `teacher-file-access.js` : adaptateur Chromium, permission, flux de fichier, handle IndexedDB et téléchargement.
- `teacher-app.js` : interface, copie de travail en mémoire et sauvegardes séquencées.
- `teacher-classroom.js` : classes, fiches élèves, compétences et couche facultative de référentiel ; aucun accès direct au fichier ou au stockage navigateur.
- `teacher-sessions.js` : historique, préparation des séances, conducteur et vue d’impression ; utilise le même signal de sauvegarde que le suivi élèves.
- `teacher.css` : styles professeur isolés ; aucune modification du style élève.
- `teacher-workspace-format.md` : contrat du fichier privé et structures réservées aux étapes suivantes.
- `prof-conducteur-historique.html` : conducteur initial intégral, avec ses données et styles embarqués ; indépendant du catalogue actuel.

Tests sans dépendance supplémentaire (Node.js nécessaire pour les tests uniquement) :

```bash
node --test tests/teacher.test.cjs tests/teacher-sessions.test.cjs tests/teacher-student-removal.test.cjs
```

Les tests utilisent des documents fictifs et des fichiers simulés en mémoire, sans accéder au Google Drive de l’utilisateur.

Test d’intégration supplémentaire, avec Chrome installé (Windows par défaut, ou chemin de l’exécutable dans `CHROME_PATH`) :

```bash
node tests/teacher-browser.cjs
```

Ce test démarre un serveur local temporaire et un profil Chrome headless isolé. Il utilise de vrais flux de fichiers OPFS (stockage privé du navigateur), IndexedDB et un téléchargement réel, mais simule les sélecteurs de fichiers. Ses captures et son fichier fictif sont placés dans un dossier temporaire affiché à la fin ; aucun fichier personnel n’est sélectionné. Les sélecteurs natifs, les permissions Windows et la synchronisation Drive doivent toujours être vérifiés manuellement dans Chrome/Edge.

## GitHub Pages

Dans le dépôt GitHub, ouvrir **Settings → Pages**, choisir **Deploy from a branch**, puis sélectionner la branche principale et le dossier **/(root)**. Enregistrer et attendre la publication de l'URL.
