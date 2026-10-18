# Revue transversale du parcours Minecraft

18 octobre 2026. Lecture des huit modules et des guides, du [parcours](../content/pathways/minecraft-algorithmes.json), des compétences, du [cadrage validé](audit-scratch-minecraft.md), du rendu des liens et des prérequis. Cette revue examine les raccords et les usages du parcours ; elle complète les revues individuelles, dont la [revue de la mission 8](revue-minecraft-automatisation.md).

## Verdict

La progression est cohérente et n'appelle pas de reconstruction. Les notions reprises de Scratch servent des problèmes supplémentaires : orientation relative, transformation du terrain, état entre appels, comparaison de coûts et limites d'une stratégie. Le parcours fonctionne comme initiation autonome, avec des prérequis internes enseignés avant leur utilisation.

La revue a relevé une correction P2 : rendre le chemin abrégé réellement utilisable par un élève autonome venant de Scratch. Cette correction est maintenant appliquée, comme décrit en fin de document. Aucun contenu de cours n'avait été modifié pendant la phase de revue.

## P2 : rendre visible le chemin adapté aux acquis

**Sources :** [minecraft-trajets.json](../content/modules/jeux-video/minecraft-trajets.json), bloc `entree-scratch` ; [minecraft-algorithmes.json](../content/pathways/minecraft-algorithmes.json), objectif ; différenciation des guides des missions 2, 4, 5 et 6.

Le cadrage prévoit qu'après un diagnostic spatial, un élève venant de Scratch passe directement à la comparaison, puis travaille surtout les traces, raccords et contre-exemples. Il prévoit aussi l'accès direct au projet final pour quelqu'un qui sait déjà composer et comparer.

L'encart élève actuel autorise seulement à sauter l'essai de Hero 1 et à commencer la grille de la mission 1. Après cette grille, la page enchaîne Hero 3 et les variantes ; la navigation suivante reste en bas. Les consignes d'abrègement ultérieures sont dans le guide professeur. La carte dit que l'on peut réutiliser Scratch, sans expliquer comment choisir ce chemin. Le sommaire permet de naviguer librement, mais ne fournit pas le critère de choix.

**Conséquence :** un élève expérimenté travaillant seul peut suivre toute la séquence débutante par défaut. Cela recrée une partie du doublon que le positionnement validé cherchait à éviter. Ce problème concerne l'orientation dans le parcours, pas la justesse des exercices.

**Correction proposée :** ajouter un court choix d'entrée visible, avec des liens vers les activités existantes. Après distinction joueur/Agent et une trace incluant un départ orienté autrement que vers le nord, indiquer comment rejoindre la comparaison de la mission 2. Rendre les conseils de transfert utiles accessibles dans les chapitres concernés, sans copier les remarques d'évaluation du professeur. Pour l'entrée directe au projet, annoncer les acquis nécessaires et le bilan Aquatic à retrouver. Conserver une seule version des modules et la liberté de reprendre les aides.

**Critère de clôture :** depuis l'entrée publique du parcours, un élève peut identifier le chemin complet, le chemin adapté à ses acquis et leurs liens, sans ouvrir l'espace professeur. Le raccourci conserve les différences propres à Code.org et ne suppose pas que tout élève venant de Scratch maîtrise les procédures.

## Progression et raccords

| Mission                          | Apport propre                                                            | Raccord avec la suivante                                                 |
| -------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Prévoir le trajet de l'Agent     | Position et direction, virages relatifs, différence Agent/joueur         | La répétition conserve l'état atteint à chaque tour.                     |
| Comparer deux programmes         | Motif, écriture et exécution, critère de comparaison                     | Le nombre de tours doit ensuite couvrir les bonnes cases.                |
| Construire un passage            | Terrain construit distinct du déplacement ; premier manque et correction | Une procédure doit décrire des effets sur le terrain et sur l'Agent.     |
| Lire et raccorder des procédures | Définition/appel, état avant et après, commandes de raccord              | Les définitions fournies deviennent modifiables dans Hero 12.            |
| Composer des motifs              | Boucles imbriquées, extraction d'un groupe, place des virages            | Le raisonnement sur l'état courant sert ensuite à situer un test.        |
| Choisir selon le chemin          | Condition vraie/fausse, moment du test, arrêt de boucle                  | Le test de la case voisine est comparé au test du sol occupé.            |
| Éprouver une stratégie           | Règles associées aux repères, contre-exemples, hypothèses de réussite    | Le projet final exige de prévoir, comparer et éprouver une modification. |
| Concevoir une automatisation     | Choix d'une construction, deux organisations, variante et bilan          | Ouverture vers Scratch, un autre problème ou la programmation textuelle. |

Les prérequis déclarés ont tous été rencontrés dans les missions précédentes ; aucune compétence Scratch n'est exigée implicitement. La transition vers Aquatic annonce le contrôle direct du personnage. Le retour à Hero annonce de nouveau l'Agent, la remise au départ et la conservation du travail antérieur. L'introduction de deux types de tests et de la boucle jusqu'au but est expliquée sur place.

Les répétitions pédagogiques sont justifiées : une même arrivée ne garantit pas le même terrain en mission 3 ; les appels dépendent de l'état courant en mission 4 ; le dernier virage et l'ordre placer/avancer sont isolés en mission 5 ; l'élève utilise ces distinctions sans solution complète en mission 8. Le retour à Hero 12 est une réutilisation du support, pas la reprise intégrale du même exercice.

Le projet final vérifie principalement construction et composition. Les décisions conditionnelles sont mobilisées par les traces Aquatic et leur explication, avec des liens de reprise. Cela respecte la limite validée de la palette Hero ; le projet n'est pas présenté comme la programmation réunie de toutes les notions.

## Charge de travail et autonomie

Le relevé des sources compte 79 items à cocher dans le chemin principal, plus deux dans le bonus de la mission 2. Ce ne sont pas 79 exercices indépendants : plusieurs items décomposent un même essai. Le parcours utilise 13 niveaux Code.org distincts dans son chemin complet, Hero 12 étant réutilisé ; Aquatic 4 et 11 sont des ouvertures facultatives.

Les missions 4 à 7 associent lecture de programme, essais, transfert et grille originale. La mission 8 demande deux organisations, une variante et un bilan. Ce volume correspond à plusieurs séances, avec des pauses possibles après une phase d'essai ou de conservation. La lecture des fichiers ne permet pas de garantir un nombre d'heures : aucune durée n'a été chronométrée avec des élèves.

Les aides et corrigés sont repliés, les grilles précisent leurs règles et les guides acceptent les réponses orales ou dessinées. Les captures et le carnet portent la reprise. Les cases CodeCraft sont conservées en mémoire pendant la navigation, sans constituer un suivi durable ni une validation automatique. Aucune nouvelle infrastructure de progression n'est nécessaire pour corriger le choix d'entrée.

Pour limiter la charge, conserver les comparaisons qui changent réellement le problème et permettre l'abrègement selon les acquis. Supprimer globalement les grilles ou les demandes de prévision retirerait précisément l'apport complémentaire du parcours.

## Usage ponctuel pendant le stage

Les guides indiquent déjà de sélectionner une activité puis de revenir au travail du groupe. Le tableau suivant rend ce choix concret ; il ne constitue pas huit cours supplémentaires ni un conducteur imposé jour par jour. Le professeur doit garder visibles les consignes ou le programme qui précèdent la tâche ciblée.

| Besoin rencontré                                           | Ressource à ouvrir                                       | Point de retour au travail du groupe                                  |
| ---------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------- |
| Confusion entre tourner et avancer                         | Mission 1, `reperes`, puis un item de `grille`           | L'élève prévoit une case et une direction depuis son départ.          |
| « Moins de blocs » confondu avec « moins de déplacements » | Mission 2, `programme-a`, `programme-b`, `comparaison`   | L'élève nomme ce qui diminue et ce qui reste identique.               |
| Agent arrivé mais pont incomplet                           | Mission 3, `placer` et `premier-essai`                   | Il distingue case occupée, case construite et passage du joueur.      |
| Mauvais départ du deuxième appel                           | Mission 4, `raccorder`                                   | Il annonce la position et la direction laissées par le premier appel. |
| Confusion entre nombre de répétitions et nombre d'appels   | Mission 5, `definir-troncon`, `appeler-angle`, `guide`   | Il prévoit un tronçon et le virage qui prépare le suivant.            |
| Test faux pris pour une fin de programme                   | Mission 6, `condition`, `boucle-but`                     | Il distingue l'action sautée et la raison d'arrêt de la boucle.       |
| Règle correcte sur une carte supposée valable partout      | Mission 7, `defi-papier` et une variante de `autonomie`  | Il localise le premier écart provoqué par un repère déplacé.          |
| Élève prêt pour une conception personnelle                 | Mission 8, projet complet ou phase explicitement choisie | Distinguer ce travail de projet d'une aide ponctuelle courte.         |

Ces identifiants existent dans les sources et peuvent être ciblés avec les liens d'activité actuels. Une fiche professeur réunissant ces accès serait un confort utile avant le stage, sans être un défaut bloquant du parcours autonome. Il n'est pas nécessaire de recréer une seconde progression destinée au stage.

## Contrôles et limites

Lecture des blocs élèves des huit missions, des diagnostics, différenciations et conducteurs des huit guides ; contrôle des prérequis dans l'ordre du parcours, des six références internes déclarées dans les blocs et du raccordement au domaine Jeu vidéo. Les huit missions sont accessibles sans déverrouillage. Les liens externes restent distincts des routes CodeCraft et les ressources ne passent pas par le registre des projets Scratch.

Les revues individuelles et les preuves de l'audit Code.org sont réutilisées. Les captures mobiles des missions 1 et 6 dans `browser-artifacts/run-6li3e8/student-browser/codecraft-catalog-qa-WXWcvt/` ont été réexaminées pour la lisibilité des consignes. Ce contrôle partiel du rendu ne constitue pas une nouvelle recette visuelle de toutes les pages.

Le dernier contrôle applicatif complet reste celui de la mission 8 : 242 tests Node et sept suites navigateur réussis, journal `browser-artifacts/mission8-check.log`, rapport `browser-artifacts/run-6li3e8/summary.json`. Aucun contenu applicatif n'a changé pendant cette revue. Seuls le formatage, les liens documentaires et le diff sont contrôlés à nouveau.

La reprise avec un compte, le rythme réel et l'autonomie d'élèves restent à observer en situation. Aucun nouveau test systématique des puzzles, publication ou commit pendant cette revue.

## Suite

La correction du chemin adapté aux acquis est appliquée. La fiche d'accès ponctuels du professeur reste un complément pratique facultatif. Aucune nouvelle mission, refonte générale ni extension à Designer n'est nécessaire pour traiter les conclusions de cette revue.

## Correction appliquée après la revue

L'objectif public du parcours annonce le choix d'entrée dans la première mission. Le bloc existant `entree-scratch`, conservé sous le même identifiant, distingue le débutant et l'élève déjà expérimenté. Son lien ouvre les deux variantes du diagnostic spatial. Le diagnostic donne désormais la grille et la suite d'actions complète : il peut être suivi sans avoir lu les essais précédents.

Le bloc `suite-diagnostic` rejoint directement les programmes A et B de la mission 2 après une prévision expliquée depuis les deux orientations. Il redonne C4 nord comme départ commun de la comparaison. Les variantes difficiles renvoient à la prise en main. La conservation des traces tient compte de ceux qui n'ont pas fait Hero 3.

Un accès direct au projet final énonce les acquis de construction, composition et comparaison nécessaires, ainsi que les traces Aquatic à retrouver par les aides du projet. Il ne déduit pas la maîtrise des procédures de la seule pratique de Scratch. La préparation du projet convient aussi à un premier accès à Hero 12.

Les missions 2, 4, 5 et 6 proposent des liens locaux pour rejoindre respectivement la comparaison, la lecture de la procédure fournie, la composition par appels et la décision d'Aquatic. La préparation de Hero 12 et la lecture de la boucle jusqu'au but restent demandées. La consigne du programme principal en mission 5 décrit maintenant l'assemblage complet sans supposer que la ligne de six rails a été construite auparavant. Les huit missions et leurs identifiants sont conservés.

Le nouveau test de navigation suit le diagnostic vers la comparaison, l'accès direct au projet et les quatre raccourcis locaux. Le premier passage ciblé a révélé l'absence de `scrollIntoView` dans jsdom ; ce comportement est simulé dans ce test, comme dans les autres tests de navigation. Les dix tests Minecraft passent ensuite.

Les liens diagnostic, comparaison et projet ont aussi été suivis dans Chrome. Une vérification de la position finale a révélé un déplacement des cibles après le chargement de l'illustration : le décalage mesuré de 602 pixels correspondait à sa hauteur. Le routeur recale désormais la section après chargement ou échec des images en attente, uniquement si cette section appartient encore au cours affiché. Le scénario navigateur élève contrôle la position finale du diagnostic puis de la comparaison, images chargées.

Captures finales à 1280 et 320 pixels dans `browser-artifacts/codecraft-catalog-qa-qGrZkL/`. Les choix d'entrée, l'accès projet, les encarts des missions 4 à 6, le choix après diagnostic et l'arrivée sur les programmes A et B ont été examinés à 320 pixels : textes et liens lisibles, sans débordement horizontal détecté. Le script de capture attend l'arrivée effective à la section et reste local, ignoré par Git.

Le premier contrôle complet après modification du contenu a validé le formatage, le lint, 243 tests Node et six suites navigateur. Il a échoué sur le retour de défilement de l'espace professeur, dans `tests/teacher-session-scenario.cjs:300` ; rapport `browser-artifacts/run-IK08JZ/summary.json`. La correction du décalage des liens d'activité a ensuite motivé un nouveau contrôle complet sur l'état final du code. Le contenu professeur et son assertion de retour ne sont pas modifiés pour cette correction.

Le contrôle complet final réussit : formatage, lint, catalogue synchronisé, 243 tests Node et sept suites navigateur, y compris l'espace professeur et les nouveaux contrôles d'arrivée après chargement des images. Journal `browser-artifacts/minecraft-entrees-final-check.log`, rapport `browser-artifacts/run-fcxraB/summary.json`. L'échec professeur du premier passage ne s'est pas reproduit ; sa cause n'est pas établie par cette correction. Seule la documentation est complétée ensuite. La correction P2 est clôturée ; aucun commit ni push effectué.
