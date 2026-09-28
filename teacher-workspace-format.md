# Format privé Espace CodeCraft — schemaVersion 1

Le contrat exécutable est `schema` dans `teacher-model.js`. Les structures ci-dessous sont réservées ; cette étape ne fournit aucune interface de gestion pédagogique. Le fichier est créé par le navigateur dans un dossier privé, jamais publié avec le site.

## Racine

| Champ | Type / règle |
| --- | --- |
| schemaVersion | entier `1` ; version inconnue refusée sans écriture |
| workspaceId | identifiant stable non vide, UUID lors de la création |
| revision | entier positif ou nul, incrémenté à chaque écriture préparée |
| createdAt, updatedAt | horodatage ISO UTC avec millisecondes ; updatedAt ≥ createdAt |
| metadata | objet `{ label: string }` ; seul champ éditable pour le test technique |
| contexts, frameworks, classes, students, memberships, progress, sessions | tableaux, présents et vides à la création |

Les champs sont obligatoires sauf mention « facultatif ». Les champs inconnus sont refusés pour éviter une réécriture qui les perdrait. Aucune migration automatique n’est effectuée. Les identifiants sont uniques dans leur collection et ne dépendent pas des noms. Les textes libres restent des textes, jamais du HTML à exécuter.

## Structures réservées

- **contexts** : `id`, `name`. Un organisme, une association ou un contexte indépendant.
- **frameworks** : `id`, `name`, `version`, `source` (texte facultatif), `objectives`.
  - Chaque objectif : `id`, `code`, `title`, `skillIds` (tableau sans doublons).
  - Identifiants et codes uniques à l’intérieur d’une version. Pour une autre version, créer une autre entrée avec un nouvel id ; les classes conservent ainsi leur référence. Les mappings ne valident jamais automatiquement les objectifs.
- **classes** : `id`, `name`, `contextId` facultatif, `frameworkId` facultatif.
- **students** : `id`, `name`, `note` facultative. Aucun autre champ personnel.
- **memberships** : `classId`, `studentId`. Un seul rattachement par couple ; plusieurs classes possibles pour un même élève.
- **progress** : `studentId`, `skillId`, `status`, `acquiredOn`, `updatedAt`, `note` facultative.
  - Un seul enregistrement par couple élève/compétence.
  - `not-started` = À voir ; `in-progress` = En cours ; `acquired` = Acquis.
  - L’absence d’entrée signifie À voir. Pas de statut `to-review`.
  - `acquiredOn` : date valide `YYYY-MM-DD` pour Acquis, `null` sinon. La future interface prendra la date locale lors de la décision manuelle du professeur ; aucune validation issue des cases élève.
- **sessions** : `id`, `classId`, `date` (`YYYY-MM-DD`), `status` (`draft`, `completed`, `archived`), `skillIds`, `attendance` facultatif, `conductor`, `notes`.
  - `attendance` : tableau de `{ studentId, status }`, où status est `present`, `absent` ou `unknown` ; absence d’entrée = non renseigné. Un élève n’apparaît qu’une fois.
  - `conductor` : `{ title, slots, reminders }` ; reminders est un tableau de textes.
  - Chaque créneau : `id`, `startMinute` (entier ≥ 0), `durationMinutes` (entier > 0), `title`, `instructions` (texte), `moduleIds`, `skillIds`, `studentIds` facultatif, `pathwayId` facultatif.
  - Les listes d’identifiants n’ont pas de doublons. Les ids de créneaux sont uniques dans le conducteur.
  - `studentIds` et `pathwayId` sont des snapshots : ils ne sont jamais recalculés à partir de la progression ou des rattachements courants. La validation ne les compare pas à la composition actuelle de la classe. Un élève historique référencé doit rester dans la collection students ; sa suppression physique rendrait le document invalide.

## Références et validation

Les références internes (classe, élève, contexte, référentiel) doivent exister. Les références aux compétences, modules et parcours publics peuvent devenir inconnues après une évolution du catalogue : elles sont conservées et signalées, pas supprimées. Les conducteurs restent des données privées de séance, pas des modules de bibliothèque.

Une copie téléchargée reflète la mémoire au moment du clic. Sa révision et sa date technique peuvent encore correspondre à la dernière écriture principale : télécharger une copie n’est pas enregistrer le fichier principal. Ne pas confondre copie de secours et synchronisation distante.
