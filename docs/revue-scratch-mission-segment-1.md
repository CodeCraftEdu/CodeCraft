# Revue des trois premiers chapitres Mission balises

15 octobre 2026. Revue des cours intégrés après la [réalisation du premier segment](integration-scratch-mission-segment-1.md). Les constats ci-dessous décrivent la version examinée. Les deux corrections ont ensuite été appliquées aux cours.

## Corrections appliquées

- La base sans code conserve son nom `mission-base.sb3`. La première sauvegarde `mission-01.sb3` intervient après la construction des commandes. L'élève repère le téléchargement récent, y compris un éventuel suffixe, le recharge et teste les commandes avant de modifier la vitesse. La fin du chapitre conserve ce fichier vérifié sans demander une nouvelle sauvegarde identique. Les deux autres variations rappellent quel fichier reprendre.
- Les variations de Balises et Vies demandent une prévision puis un essai et une explication. Les résultats attendus sont placés après l'activité dans « Vérifier après ton essai », replié par défaut. Les identifiants des activités existantes sont conservés.

## Verdict

Conserver la progression Commandes, Balises, Vies et le même projet entre les chapitres. Deux corrections de priorité moyenne sont nécessaires pour renforcer le suivi autonome : identifier sans ambiguïté la sauvegarde à reprendre et laisser réellement prévoir les résultats des variations.

La répartition des responsabilités est cohérente : Pilote conserve le déplacement, Balise compte et change de côté, Obstacle surveille le contact, la scène initialise et décide la fin. Les étapes nomment le propriétaire et la place des ajouts. Les deux branches du `si … sinon` sont distinguées dans les modèles. Aucun défaut bloquant supplémentaire de logique n'a été identifié dans cette revue.

## P2 : distinguer la première sauvegarde de la version terminée

**Sources :** [Commandes](../content/modules/jeux-video/scratch-mission-commandes.json), blocs `depart`, `variation` et `reprise` ; ouverture du chapitre [Balises](../content/modules/jeux-video/scratch-mission-balises.json).

L'introduction demande de nommer la première sauvegarde `mission-01.sb3`, avant toute construction. La variation demande ensuite d'enregistrer la version complète sous le même nom, puis de recharger `mission-01.sb3`. Le cours n'indique pas comment distinguer ces deux états si les deux fichiers sont conservés, notamment si le téléchargement récent reçoit un suffixe au lieu de remplacer l'ancien.

Un élève peut donc suivre le nom demandé et rouvrir la base sans code après avoir terminé les commandes. Son travail peut encore exister dans le téléchargement récent, mais la procédure ne permet pas de le retrouver avec certitude. Le même nom utilisé à plusieurs moments devient une mauvaise indication de la version attendue.

**Correction proposée :** réserver `mission-01.sb3` à la version avec les commandes terminées et donner un nom distinct à une éventuelle sauvegarde initiale. Expliquer une seule fois comment repérer le fichier effectivement enregistré, y compris si son nom a été ajusté. Avant l'essai de vitesse, rouvrir cette sauvegarde et vérifier les commandes ; utiliser ensuite ce fichier vérifié pour le retour et le chapitre suivant. Garder une procédure courte, sans multiplier les cas de navigateur.

**Critère de clôture :** en conservant volontairement une ancienne sauvegarde et une version récente dans le même dossier, la consigne permet de retrouver le fichier contenant les commandes, de faire l'essai à vitesse 8, puis de reprendre les quatre déplacements à 4 ou -4. Aucun chargement d'une solution fournie n'est nécessaire.

## P2 : séparer la prédiction de sa réponse

**Sources :** [Balises](../content/modules/jeux-video/scratch-mission-balises.json), `variation/deux` ; [Vies](../content/modules/jeux-video/scratch-mission-vies.json), `variation/quatre`.

La première consigne demande de prévoir le nombre d'activations après le passage à `score > 1`, mais donne immédiatement « la deuxième termine la partie ». La seconde demande d'annoncer les valeurs après deux contacts avec quatre vies, puis fournit « 3 puis 2 » dans la même phrase visible.

Ces activités restent utilisables pour vérifier le fonctionnement, mais elles ne font plus travailler la prédiction annoncée. Le guide professeur les désigne comme activités autonomes ; la réponse déjà affichée ne permet pas de distinguer le raisonnement de la simple reproduction.

**Correction proposée :** conserver la modification et la question dans la consigne visible, demander de noter ou dire la prévision, puis de tester et d'expliquer le résultat. Mettre la réponse dans une vérification repliée, consultable après l'essai. Conserver les résultats attendus directement visibles dans les constructions guidées : ils y servent au dépannage et ne constituent pas le problème relevé ici.

**Critère de clôture :** en lisant uniquement l'activité ouverte, l'élève dispose des informations nécessaires pour raisonner sans recevoir la réponse. Après son essai, il peut vérifier les deux activations et les valeurs 3 puis 2, puis restaurer sa version principale.

## Éléments examinés et limites

- Lecture des trois cours, des guides associés, du parcours et du générateur des archives publiques ; comparaison des fragments visibles et de la logique des références.
- Examen des captures existantes : limites de Commandes et alternance de Balises à 1280 px, contact de Vies à 320 px. Les modèles restent lisibles ; à petite largeur, les conditions imbriquées prennent davantage de hauteur.
- Consultation du rapport moteur `browser-artifacts/scratch-mission-engine/resultats.json`, réussi sur les fichiers publics : déplacements, bornes, collecte, victoire, contacts, défaite et relance.
- Consultation du rapport `browser-artifacts/run-8k7Ct4/summary.json` : les sept suites navigateur avaient réussi. Les tests de correspondance des modèles contrôlent la structure des piles, pas tous leurs paramètres ; ce résultat ne remplace pas la lecture des conditions et des valeurs.

Cette revue ne rejoue pas les suites déjà réussies et ne constitue ni une reconstruction complète depuis les palettes de l'éditeur officiel ni un essai avec un élève. Elle ne confirme donc pas encore une autonomie éprouvée en situation réelle.

## Suite

Les corrections sont intégrées en Sol High. La recette navigateur contrôle la fermeture initiale des vérifications, leur ouverture et les captures des activités. La procédure de sauvegarde a été relue ; sa réalisation complète dans l'éditeur officiel par un élève reste à éprouver.

Après correction, `npm run check` complet réussi : formatage, lint, catalogue, 229 tests Node et sept suites navigateur. Rapport local : `browser-artifacts/run-KOf21y/`. Captures de sauvegarde, de prédiction et de réponse examinées sur ordinateur et mobile dans `scratch-mission-browser/codecraft-catalog-qa-ronZFH/`.

Poursuivre les quatre chapitres prévus dans la [roadmap](roadmap-scratch-avance.md). Une nouvelle refonte du parcours n'est pas nécessaire.
