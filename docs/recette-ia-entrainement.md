# Recette Teachable Machine et kit pilote

29 octobre 2026. Préparation du chapitre 4 ; aucun cours élève ajouté pendant ce lot.

## Recette historique du pilote à quatorze photos

Cette recette porte sur la première sélection de quatorze photographies. L’archive et le manifeste ont depuis été enrichis : leur composition actuelle est décrite plus bas. Les mesures suivantes restent celles du pilote, sans extrapolation aux nouveaux fichiers.

| Lot             | Cuillères | Tasses | Usage                           |
| --------------- | --------- | ------ | ------------------------------- |
| Départ          | 3         | 3      | Premier entraînement            |
| Essais          | 1         | 1      | Comparaison des deux versions   |
| Complément      | 2         | 2      | Ajout avant second entraînement |
| Nouveaux essais | 1         | 1      | Photos réservées à la fin       |

Ce kit compact sert à la recette et à une démonstration de la démarche. Il réduit les quantités envisagées dans le cadrage ; ce choix ne constitue pas un seuil suffisant pour apprendre une catégorie générale. Une partie des photos de tasses montre plusieurs exemplaires du même type. Les photos de cuillères sont souvent allongées : le recadrage carré de l’outil peut masquer une partie de l’objet. Les conditions de prise de vue et les auteurs sont peu diversifiés. Pour en faire une activité sur la généralisation, enrichir ou remplacer ce kit après la revue de la préparation.

## Manipulations réalisées

Dans le navigateur intégré, projet images standard, réglages d’entraînement par défaut : 50 époques, batch 16, taux d’apprentissage 0,001. Aucun compte Drive utilisé, aucun modèle publié, aucune caméra autorisée. Les fichiers sont importés dans les classes et l’aperçu de l’outil.

Premier entraînement terminé avec trois photos par classe. Class 1 correspond aux cuillères et Class 2 aux tasses pendant les mesures. Deux images absentes de l’entraînement sont testées :

| Image             | Attendu  | Première version              | Deuxième version             |
| ----------------- | -------- | ----------------------------- | ---------------------------- |
| `tasse-02.jpg`    | Tasse    | Tasse, score affiché 93 %     | Tasse, score affiché 100 %   |
| `cuillere-11.jpg` | Cuillère | Cuillère, score affiché 100 % | Cuillère, score affiché 98 % |

Ajout effectif de deux photos par classe, puis second entraînement terminé avec cinq photos par classe. Les deux photos réservées à la fin sont ensuite correctement classées dans cette exécution : `tasse-11.jpg` comme tasse et `cuillere-07.jpg` comme cuillère, avec 100 % affiché pour chacune. Ces pourcentages sont les scores arrondis de l’interface, pas des mesures de fiabilité. Deux réussites sur deux avant et après ne démontrent pas une amélioration. Aucun échec n’est fabriqué pour obtenir le résultat attendu par le cours.

Les noms des classes ont ensuite été changés en « Cuillères » et « Tasses » avant sauvegarde. Ce changement réactive le bouton d’entraînement. Les consignes élève devront donc nommer les classes dès le départ.

## Sauvegarde

La commande « Download project as file » produit `project.tm`. Le fichier téléchargé a été copié dans `browser-artifacts/ia-kit-preparation/projet-recette.tm` pour la recette ; ce dossier est ignoré par Git.

Inspection de l’archive : dix fichiers JPEG et un `manifest.json` contenant le type, la version de l’outil et les paramètres d’entraînement. Aucun fichier de poids du modèle dans cette sauvegarde de projet. Le projet sert à conserver les exemples et à reprendre la préparation ; l’export d’un modèle constitue une autre opération.

Réouverture du `.tm` dans un onglet neuf vérifiée : les deux catégories « Cuillères » et « Tasses » et leurs cinq photos sont rétablies. L’aperçu demande explicitement de relancer l’entraînement. Une seconde restauration a été vérifiée après passage de l’outil en français.

Le nouvel entraînement après restauration s’est terminé avec le statut « Modèle entraîné » et l’aperçu disponible. La sauvegarde locale permet donc de reprendre la démarche sans compte ; elle ne conserve pas un modèle immédiatement prêt à prédire.

## Observations pratiques

- Le premier import de trois images a anormalement pris environ six minutes dans l’automatisation ; les imports suivants ont répondu rapidement. Ne pas présenter ce délai isolé comme la durée normale de l’outil ni garantir son absence en classe.
- L’aperçu permet de choisir « File » pour tester un fichier sans l’ajouter à l’entraînement. Resélectionner « File » a permis de retrouver le sélecteur après le réentraînement.
- Un encart de découverte masquait l’aperçu ; sa fermeture a été vérifiée. Placer cette aide de manipulation seulement à l’endroit utile dans le futur cours.
- Les commandes françaises « Importer », « Entraîner le modèle », « Télécharger le projet en tant que fichier » et « Ouvrir le projet à partir du fichier » ont été constatées. Changer la langue recharge le projet et efface les exemples non sauvegardés : choisir le français avant de commencer ou enregistrer puis restaurer le projet. Les autres navigateurs restent à vérifier.

## Corrections après revue et kit actuel

L’[archive actuelle](../resources/ia/tasses-cuilleres.zip) contient vingt photographies et deux fichiers texte. Le [manifeste](sources-kit-ia.json) conserve leur provenance et leur empreinte. Le dossier décompressé est `resources/ia/tasses-cuilleres/`.

| Lot             | Cuillères | Tasses | Usage                                                                         |
| --------------- | --------- | ------ | ----------------------------------------------------------------------------- |
| Départ          | 3         | 3      | Importer toutes les photos, puis lancer explicitement le premier entraînement |
| Essais          | 2         | 2      | Comparer les deux versions sur les mêmes photos                               |
| Complément      | 3         | 3      | Choisir une ou deux photos par catégorie et expliquer leur intérêt            |
| Nouveaux essais | 2         | 2      | Essayer la seconde version sur des photos encore réservées                    |

Les six ajouts sont `cuillere-04.jpg`, `cuillere-05.jpg`, `cuillere-12.jpg`, `tasse-14.jpg`, `tasse-15.jpg` et `tasse-16.jpg`. Les cuillères apportent des groupes et une autre orientation ; les tasses ajoutent une forme haute tenue en main, une vue du dessus sur fond sombre et une tasse blanche sur fond clair. Une première photo candidate, vue intérieure surexposée, a été écartée car l’objet n’était pas assez identifiable.

Les deux catégories acceptent un ou plusieurs objets du même type ; la soucoupe et le contenu d’une tasse ne changent pas sa catégorie. Le kit ne contient pas de scène mélangeant tasses et cuillères. Cette définition remplace le critère initial d’un seul objet. Le recadrage carré de Teachable Machine peut toujours masquer une partie des objets allongés : le faire observer dans l’aperçu des exemples.

L’élève choisit un complément à partir d’une erreur ou d’une situation peu représentée dans le départ. Le chemin reste utilisable si tous les premiers essais réussissent. Une modification n’est pas présentée d’avance comme une amélioration ; comparer les mêmes réponses puis observer les nouveaux essais. Les pourcentages de l’outil restent distincts du comptage des catégories correctes.

Les six ajouts ont été examinés visuellement ; aucun nouveau score ni effet d’entraînement n’a été mesuré pour ces fichiers. Les photos sont distinctes par leur empreinte, mais le kit ne garantit pas l’indépendance statistique des objets ou des prises de vue. Plusieurs photographies restent issues des mêmes auteurs ou collections. Les quatre essais de comparaison et les quatre nouveaux essais servent à une observation limitée, pas à une mesure générale de fiabilité.

Le LIRE-MOI inclut maintenant le premier entraînement, le choix effectif des compléments et les essais séparés. Les crédits et les fichiers distribués sont synchronisés. Le cadrage utilise les quantités et critères actuels.

## Suite

Le chapitre est rédigé et intégré avec ce déroulé ; voir [la documentation IA](ia-experience.md) pour les vérifications d’interface. Il reste à observer son utilisation complète dans Teachable Machine par un élève avec le kit actuel. La recette du pilote confirme les manipulations de l’outil ; elle ne valide pas encore l’expérience complète d’un élève ni la durée du chapitre corrigé.

Sources : [FAQ officielle](https://teachablemachine.withgoogle.com/faq), interface [projet images](https://teachablemachine.withgoogle.com/train/image), [cadrage et sources pédagogiques](cadrage-ia-entrainement.md), pages Wikimedia propres à chaque photo dans les crédits du kit.
