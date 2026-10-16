# Mission balises : premier segment intégré

15 octobre 2026. Réalisation des trois premiers chapitres de la [roadmap Scratch avancé](roadmap-scratch-avance.md), après la [recette technique du prototype](recette-scratch-mission-balises.md).

## Disponible dans le catalogue

Une entrée **Scratch avancé : Mission balises** est ajoutée au domaine Jeu vidéo. Elle contient uniquement les trois chapitres réalisés ; aucun cours futur vide n'est déclaré.

| Chapitre  | Source élève et guide                                                                          | Résultat conservé                                                                           |
| --------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Commandes | [scratch-mission-commandes.json](../content/modules/jeux-video/scratch-mission-commandes.json) | Quatre directions, limites et départ de Pilote ; sauvegarde personnelle `mission-01.sb3`.   |
| Balises   | [scratch-mission-balises.json](../content/modules/jeux-video/scratch-mission-balises.json)     | Score, deux positions de la balise et arrêt au sixième point ; `mission-02.sb3`.            |
| Vies      | [scratch-mission-vies.json](../content/modules/jeux-video/scratch-mission-vies.json)           | Un dégât par contact continu, défaite à zéro, victoire à six et relance ; `mission-03.sb3`. |

L'[ordre du parcours](../content/pathways/scratch-avances.json) conserve le même projet d'un chapitre à l'autre. Le parcours débutant et les trois aides indépendantes restent accessibles avec leurs identifiants existants.

## Chemin autonome rédigé

Chaque chapitre indique la version de départ, le personnage ou la scène à sélectionner, les blocs à ajouter et l'observation à faire. Les constructions essentielles sont ouvertes. Les modèles complets, le dépannage et les références de comparaison sont regroupés dans des encarts repliables.

Les expériences sur les vitesses, seuils et vies utilisent une sauvegarde d'essai distincte. La fin du chapitre précise le fichier principal à recharger et les valeurs attendues avant de poursuivre. La différence entre modifier le projet affiché et remplacer un fichier déjà téléchargé est explicitée.

La base graphique sans code et les références de fin de chapitre se trouvent dans [assets/scratch/mission](../assets/scratch/mission/). Les reprises des chapitres Balises et Vies servent lorsque la sauvegarde précédente manque ; elles ne sont pas présentées comme une importation partielle de blocs. L'ouverture de Scratch et les consultations d'aides utilisent des onglets séparés, avec le geste de retour expliqué.

Les trois guides professeur contiennent diagnostic, préparation, explications, questions/réponses, erreurs et aides graduées, différenciation et conducteur. Aucun guide de stage interne n'est publié.

## Changements de rendu ciblés

Le modèle de blocs Scratch possède désormais `elseChildren` pour représenter la deuxième branche d'un vrai `si … sinon`. La branche est distincte dans le schéma, avec un seul repère de fermeture à la fin du bloc. Cette représentation correspond aux archives de Balise et de la scène ; deux `si` indépendants ne les remplacent pas.

`moduleLink.newTab` permet à un lien de reprise d'ouvrir un autre onglet avec `noopener noreferrer`. L'option est facultative : les anciens liens gardent leur comportement. Les schémas valident les deux nouveaux champs et refusent les descendants ou types invalides.

## Ressources et reproductibilité

Le [générateur Python](../scripts/scratch-mission/README.md) produit les quatre archives avec les costumes originaux, des dates ZIP fixes et une validation des ressources et des références internes. Il ne réécrit pas les JSON pédagogiques. Les fichiers `.sb3` sont versionnés et utilisables sans compte ; aucune nouvelle publication sur le compte Scratch n'est effectuée.

L'illustration d'entrée est une capture du canvas exécutant la référence Vies à ses positions initiales. Elle montre les vrais dessins du fichier à construire.

Les références du premier segment simplifient la première victoire en un `si` sans branche vide ; la scène de Vies ajoute ensuite son `si … sinon` pour la priorité de défaite. Ces fichiers publiés sont vérifiés directement dans le moteur : les résultats du prototype ne sont pas simplement reportés sur eux.

## Vérifications

- Génération et validation des quatre archives, avec empreintes inchangées après nettoyage du générateur.
- Essais dans Scratch VM et Scratch Render des fichiers du site : directions, limites, alternance, victoire, variation à deux points, contacts prolongés, sortie au clavier, défaite et relance. Une partie complète de Balises est jouée uniquement au clavier.
- Tests Node de navigation, modèles ouverts/repliés, fichiers servis, structure des piles complètes et deux branches conditionnelles ; validation des champs de schéma.
- Recette navigateur des trois cours, téléchargements réels et guides, aux largeurs 1280, 390 et 320 px. Ouverture d'une aide par un geste utilisateur, fermeture de son onglet et conservation du chapitre d'origine vérifiées.
- Captures des limites, de l'alternance, du contact et des réglages de reprise examinées sur ordinateur et à petite largeur.

Les journaux et captures sont locaux dans `browser-artifacts/`. Le scénario moteur du premier segment est relevé dans `browser-artifacts/scratch-mission-engine/resultats.json`. La recette du site est `scratch-mission-browser`, incluse dans le profil Scratch et dans le contrôle complet.

`npm run check` complet réussi : formatage, lint, catalogue, 229 tests Node et les sept suites navigateur. Rapport : `browser-artifacts/run-8k7Ct4/`. Captures du nouveau parcours : `scratch-mission-browser/codecraft-catalog-qa-GgPkZi/`. Les premiers échecs de recette provenaient des anciens totaux de catalogue figés et de deux gestes du scénario navigateur corrigés (titre de guide et clic d'ouverture d'onglet) ; aucun de ces échecs ne reste ouvert.

## Limites et prochaine étape

Le segment est rédigé pour une personne seule, mais sa reconstruction dans l'éditeur officiel depuis les seules consignes et un essai avec un élève ne sont pas encore réalisés. Les archives, le moteur et les tests d'interface ne suffisent pas à déclarer l'autonomie pédagogique éprouvée.

La [revue pédagogique des trois chapitres](revue-scratch-mission-segment-1.md) a relevé deux points, corrigés en Sol High : distinguer la sauvegarde des commandes terminées de la base vide et replier les réponses aux prédictions. La recette du site comprend les activités et les vérifications repliées.

**Suite : réaliser Clones, Messages, États et Tests personnels.** Le contrôle de difficulté du jeu complet avec obstacles mobiles reste distinct de ce premier segment à danger fixe.
