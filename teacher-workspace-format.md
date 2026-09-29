# Format privé Espace CodeCraft — schemaVersion 1

Le contrat exécutable est `schema` dans `teacher-model.js`. Classes, élèves, progressions, référentiels, séances et conducteurs sont utilisés par l’interface professeur. Le fichier reste privé. Le schéma reste en version 1 : les extensions des séances et `frameworkProgress` sont facultatives à la lecture pour conserver la compatibilité avec les fichiers du socle initial. Une ouverture ne modifie pas le document.

## Racine

| Champ | Type / règle |
| --- | --- |
| schemaVersion | entier `1` ; version inconnue refusée sans écriture |
| workspaceId | identifiant stable non vide, UUID lors de la création |
| revision | entier positif ou nul, incrémenté à chaque écriture préparée |
| createdAt, updatedAt | horodatage ISO UTC avec millisecondes ; updatedAt ≥ createdAt |
| metadata | objet `{ label: string }` ; libellé technique facultatif dans l’interface, conservé dans le document |
| contexts, frameworks, classes, students, memberships, progress, frameworkProgress, sessions | tableaux, présents et vides à la création |

Les champs sont obligatoires sauf mention « facultatif ». Les champs inconnus sont refusés pour éviter une réécriture qui les perdrait. Aucune migration automatique n’est effectuée. Les identifiants sont uniques dans leur collection et ne dépendent pas des noms. Les textes libres restent des textes, jamais du HTML à exécuter.

## Structures du document

- **contexts** : `id`, `name`. Un organisme, une association ou un contexte indépendant.
- **frameworks** : `id`, `name`, `version`, `source` (texte facultatif), `levels`, `commonObjectives` facultatif.
  - Chaque niveau : `id`, `code`, `name`, `ageRange` facultatif, `order`, `stages`.
  - Chaque étape : `id`, `code`, `name`, `order`, `objectives`.
  - Chaque objectif : `id`, `code`, `title`, `kind` facultatif (`objective` ou `project`) et `mapping`.
  - Un mapping contient `skillIds`, `coverage` (`covered`, `partial` ou `none`) et une `note` facultative. Une couverture `none` ne peut pas référencer de compétence ; une couverture `covered` doit en référencer au moins une.
  - Identifiants et codes des objectifs sont uniques à l’intérieur d’une version. Pour une autre version, créer une autre entrée avec un nouvel id ; les classes conservent ainsi leur référence. Les mappings ne valident jamais automatiquement les objectifs.
  - L’ancienne forme expérimentale `objectives` avec `skillIds` reste lisible, mais les nouveaux imports utilisent obligatoirement niveaux, étapes et mappings explicites.
- **classes** : `id`, `name`, `contextId` facultatif, `frameworkId` facultatif.
- **students** : `id`, `name`, `note` facultative. Aucun autre champ personnel.
- **memberships** : `classId`, `studentId`, `pathwayId` facultatif. Un seul rattachement par couple ; plusieurs classes possibles pour un même élève, chacune avec son propre parcours courant.
  - `pathwayId` référence un parcours CodeCraft existant ; sa validité est contrôlée avec le catalogue à l’ouverture et lors du choix. L’absence de champ signifie « Non renseigné » ; retirer le choix supprime ce champ facultatif.
  - Les anciens fichiers sans ce champ restent valides sans migration ni réécriture. Il n’est pas ajouté à `students` et n’a aucun effet sur les progressions ou les créneaux historiques.
- **progress** : `studentId`, `skillId`, `status`, `acquiredOn`, `updatedAt`, `note` facultative.
  - Un seul enregistrement par couple élève/compétence.
  - `not-started` = À voir ; `in-progress` = En cours ; `acquired` = Acquis.
  - L’absence d’entrée signifie À voir. Pas de statut `to-review`.
  - `acquiredOn` : date valide `YYYY-MM-DD` pour Acquis, `null` sinon. L’interface prend la date locale lors du passage manuel à Acquis ; aucune validation issue des cases élève. Un second clic sur Acquis ou une modification de remarque conserve la date. Revenir à En cours ou À voir remet la date à null, sans supprimer la remarque.
- **frameworkProgress** (facultatif dans les anciens fichiers V1) : `studentId`, `frameworkId`, `objectiveId`, `status`, `acquiredOn`, `updatedAt`, `note` facultative.
  - Un seul enregistrement par triplet élève/référentiel/objectif. L’absence d’entrée signifie À voir.
  - Les règles de statut, date et remarque sont les mêmes que pour `progress`, mais la décision reste entièrement indépendante des compétences CodeCraft correspondantes.
- **sessions** : `id`, `classId`, `date` (`YYYY-MM-DD`), `status` (`draft`, `completed`, `archived`), `skillIds`, `attendance` facultatif, `conductor`, `notes`.
  - Extensions facultatives : `title`, `className`, `startTime` (vide ou `HH:mm`), `roster`, `moduleIds`, `frameworkId`, `objectiveIds`.
  - `roster` contient `{ studentId, name }` pour chaque élève rattaché à la classe lors de la création. Noms, liste des élèves, nom de classe et référentiel sont des copies historiques. Les modifications ultérieures des fiches ou de la classe ne les réécrivent pas.
  - Dans une ancienne séance sans `roster`, les participants sont lus à partir des présences et des cibles existantes, sans ajout automatique des membres actuels de la classe.
  - `objectiveIds` désigne uniquement les objectifs du `frameworkId` conservé dans la séance. Ces choix n’agissent jamais sur `frameworkProgress` ou `progress`.
  - `attendance` : tableau de `{ studentId, status }`, où status est `present`, `absent` ou `unknown` ; absence d’entrée = non renseigné. Un élève n’apparaît qu’une fois.
  - `conductor` : `{ title, slots, reminders }` ; reminders est un tableau de textes.
  - Le titre de séance utilise `title` ; `conductor.title` reste conservé et sert de repli pour les anciennes séances.
  - Chaque créneau : `id`, `startMinute` (entier ≥ 0 depuis le début de la séance), `durationMinutes` (entier > 0), `title`, `instructions` (texte), `moduleIds`, `skillIds`, `studentIds` et `pathwayId` facultatifs.
  - L’ordre du tableau `slots` est l’ordre du conducteur. Un déplacement n’ajuste pas les minutes ; le professeur garde la maîtrise des horaires, y compris les chevauchements volontaires. Sans `startTime`, l’impression affiche les minutes ; sinon elle calcule les heures correspondantes.
  - Les listes d’identifiants n’ont pas de doublons. Les ids de créneaux sont uniques dans le conducteur.
  - `studentIds` et `pathwayId` sont des snapshots : ils ne sont jamais recalculés à partir de la progression ou des rattachements courants. La validation ne les compare pas à la composition actuelle de la classe. Un élève historique référencé doit rester dans la collection students ; sa suppression physique rendrait le document invalide.

## Références et validation

Les références internes (classe, élève, contexte, référentiel) doivent exister. Le parcours courant d’un rattachement doit exister dans le catalogue fourni. Les références pédagogiques historiques des conducteurs peuvent devenir inconnues après une évolution du catalogue : elles sont conservées et signalées, pas supprimées. Ce même principe de conservation s’applique aux compétences des progressions et mappings. Les conducteurs restent des données privées de séance, pas des modules de bibliothèque.

Une copie téléchargée reflète la mémoire au moment du clic. Sa révision et sa date technique peuvent encore correspondre à la dernière écriture principale : télécharger une copie n’est pas enregistrer le fichier principal. Ne pas confondre copie de secours et synchronisation distante.
