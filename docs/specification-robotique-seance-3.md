# Robotique KidnKod — séance 3 : Piloter un robot

Préparation du 8 octobre 2026. RB05 « Retrouver les repères sur micro:bit » et RB06 « Avancer, tourner, arrêter », selon la [roadmap](roadmap-robotique-kidnkod.md). Suite de la [séance 2 corrigée](specification-robotique-seance-2.md).

**Mise à jour du 9 octobre : RB05/RB06 intégrés dans CodeCraft avec leurs guides ; recette technique partielle effectuée.** Référence A/B, départ robot sans mouvement et références moteur exportés ; départ et trajet complet réimportés. Captures des vrais blocs disponibles. Voir la [recette MakeCode](recette-makecode-robot.md) pour paramètres et limites : délais de chargement, auto-sauvegarde indisponible dans le navigateur intégré et relances à confirmer. L’extension n’est pas confirmée par KidnKod et l’accès élève reste à vérifier. Ne pas présenter le stage entier comme validé. Les propositions d’essais ci-dessous restent la spécification pédagogique historique, à lire avec cette recette.

## 1. Résultat et prérequis

Découvrir brièvement une autre carte programmable, puis faire avancer et arrêter un robot simulé. Ajouter un virage simple et adapter la durée de ligne droite avec une prévision. La comparaison de puissance est un approfondissement facultatif après le travail principal.

Faire retrouver oralement entrée, programme et sortie sur le bouton–LED du jour 2. Lire une séquence et expliquer une attente avec aide. Ni câblage autonome ni défi inversé réussi sans aide ne sont requis. Les programmes Tinkercad ne sont pas importés dans MakeCode.

Exclusions : variable, condition sur une distance, suivi de ligne, radio, télécommande, déplacement exact en centimètres, angle garanti, plusieurs modes moteurs, Javascript ou Python. La variable et la décision autonome viendront au jour 4.

## 2. Deux projets, deux usages

| Projet proposé | Usage | Limite |
| --- | --- | --- |
| `Mes-images` | Carte micro:bit seule : A affiche une image, B une autre | Découverte événement/entrée/écran, environ quinze minutes hors accès |
| `Mon-trajet` | Base robot accompagnée, initialisation lisible, séquence au démarrage | Un seul endroit commande les moteurs ; aucun événement moteur ajouté |

Un appui bref sur A ou B déclenche l’action associée ; ce n’est pas une règle « tant que le bouton est maintenu ». Le geste documenté pour A/B comprend appui puis relâchement dans la seconde ; son usage dans le simulateur reste à vérifier. [Événement de bouton MakeCode](https://makecode.microbit.org/reference/input/on-button-pressed).

Sur la carte seule, faire observer l’image après le geste, puis déclencher l’autre image. L’absence de commande d’effacement explique qu’elle reste affichée dans ce programme. Comparer avec la LED du jour 2, qui recevait une nouvelle commande après lecture du relâchement. Pas de variable cachée, de bascule ou de longue expérience de maintien nécessaire.

Conserver `Mes-images` séparément : ses affichages ne seront pas copiés dans le robot, afin de ne pas mélanger l’activité avec l’affichage d’assistance de l’extension.

## 3. Base robot candidate — paramètres non validés

Référence candidate : [extension Microsoft microbit-robot](https://makecode.microbit.org/pkg/microsoft/microbit-robot), documentation consultée le 8 octobre 2026, version affichée 2.7.4, bêta. Le choix exact du modèle, de la version et des aides actives reste à fixer et essayer. Aucun matériel à acheter.

La documentation demande de sélectionner le modèle avant toute commande robot. Elle propose un mode « steer » avec direction, puissance et durée facultative ; la fin de la durée ne doit pas être traitée comme un arrêt automatique. Un bloc d’arrêt distinct existe. La simulation ne garantit pas un angle ni une distance physiques exacts. Ces principes documentés ne constituent pas une recette de notre projet.

Choix pédagogique proposé : **un seul mode steer**, commande temporisée puis arrêt explicite, dans une séquence exécutée une fois au démarrage. L’initialisation est fournie et montrée ; l’élève construit la partie déplacement. Aucun programme de déplacement parallèle ni boucle continue. Ne pas reprendre tel quel le bloc « toujours » de Tinkercad.

| Paramètre | Proposition à essayer | Ce qui doit rester observable |
| --- | --- | --- |
| Ligne droite | Direction neutre ; puissance modérée fixe ; durée courte | Robot avance sans arriver trop vite au bord |
| Virage | Une direction non neutre, même puissance, durée courte | Orientation change, sans promettre un angle exact |
| Comparaison facultative | Démonstration professeur avec deux valeurs positives modérées de puissance | Ligne droite seule, autres réglages et position initiale identiques |
| Fin | Arrêter explicitement | Robot immobile après la dernière commande |
| Reprise | Arrêter la simulation, remettre position et orientation, relancer | Départ comparable, initialisation rejouée |

Ne pas fixer des nombres ou des unités dans la fiche élève avant essais. Le professeur relèvera notamment l’unité de durée du bloc réel. Employer « réglage de vitesse » comme langage courant tout en précisant que la commande règle la puissance moteur, pas une vitesse mesurée.

Le mode de lancement au démarrage évite le besoin de gérer des appuis successifs pendant un trajet. La remise en position n’est pas supposée automatique lors d’une relance. Préparer le geste réel et arrêter la simulation avant déplacement manuel du robot.

Expliquer le changement de déclencheur au passage entre projets : dans `Mes-images`, A/B déclenchent les affichages ; dans `Mon-trajet`, c’est le démarrage du programme qui lance la séquence. A/B n’y commandent aucun moteur. Faire montrer le bloc de lancement et prévoir quand le robot commencera à bouger avant de lancer la simulation. Le robot suit ici des commandes préparées ; il ne prend pas encore de décision selon un obstacle.

## 4. Progression

1. Retrouver entrée et sortie du jour 2, puis repérer dans MakeCode blocs, programme et simulateur. Pas de visite exhaustive des catégories.
2. Dans `Mes-images`, construire A → image 1 et B → image 2. Prévoir, essayer A, attendre sans appuyer, puis essayer B. Distinguer déclenchement ponctuel et consultation répétée.
3. Ouvrir `Mon-trajet`, montrer la carte, les moteurs et l’initialisation fournie. Faire observer le robot immobile avant toute commande de déplacement.
4. Lire le schéma « initialiser → avancer pendant une courte durée → arrêter → fin ». Repérer l’arrêt déjà fourni, insérer la commande d’avance avant lui, prévoir puis essayer. Ne pas demander d’ajouter un deuxième arrêt ni de constater volontairement un robot lancé sans arrêt.
5. Relancer depuis le même départ. Ajouter un virage temporisé entre avancer et arrêter, puis vérifier l’arrêt final. Le virage est une nouvelle action, pas une nouvelle condition.
6. Défi : dans une copie `Mon-trajet-perso`, garder l’arrêt et obtenir un résultat observable, par exemple commencer le virage plus près du départ que le modèle. Garder puissance et commande de virage fixes, sans distance exacte à atteindre. L’élève propose une modification avant de recevoir l’indice sur la durée de ligne droite, prévoit puis essaie deux fois depuis le même départ. Cette comparaison suffit pour travailler « un seul réglage modifié » dans le socle.
7. Approfondissement facultatif, si le travail principal est terminé et le temps disponible : observer deux puissances sur une démonstration professeur avancer/arrêter en ligne droite seule. Durée, départ et orientation restent identiques. L’élève prévoit puis explique l’effet ; il n’a pas à retirer puis restaurer le virage de son projet. Aucun projet élève supplémentaire. Ne pas déduire une vitesse des points d’arrivée de trajets avec virage.
8. Retrouver les projets, exporter une sauvegarde récupérable avec aide et faire le bilan. Pas de publication publique requise.

Le socle minimal est avancer puis arrêter, et comprendre le lancement unique. Si l’accès ralentit fortement le groupe, supprimer d’abord l’approfondissement de puissance, puis accompagner davantage le défi. Conserver essais, pause et sauvegarde. Noter explicitement si le virage ou le défi n’a pas été réalisé ; la comparaison de puissance n’est pas un prérequis du jour 4.

## 5. Supports futurs et critères

À créer ensuite : référence micro:bit seule ; base robot avec initialisation et arrêt de sécurité, sans mouvement caché ; modèle avancer/arrêter ; modèle avec virage ; schéma partiel « dernière action manquante » sans nouvelle copie ; départ et procédure de reprise ; export/import essayé ; captures correspondant aux vrais blocs.

| Observation | Preuve recherchée |
| --- | --- |
| A puis attente sans autre appui, puis B | Action associée au déclenchement, image conservée en l’absence d’autre commande |
| Avance puis fin de séquence | Arrêt explicite identifié et immobilité constatée |
| Ajout du virage | Changement d’orientation puis arrêt, sans angle promis |
| Comparaison de puissance, facultative | Démonstration en ligne droite seule, puissance seule modifiée, départ et durée identiques, prévision confrontée à l’essai |
| Défi personnel | Modification expliquée, arrêt conservé, deux essais depuis un départ comparable |
| Reprise | Projet nommé retrouvé et sauvegarde externe disponible avec aide |

Question de sortie : « Après l’arrêt, le robot recommence-t-il tout seul ? Que faut-il faire pour rejouer notre séquence ? » Attendu : non, pas de boucle ; préparer le départ et relancer. Noter les aides de manipulation séparément du raisonnement. Pas de compétence déduite d’un fichier exporté.

Vérifier également au passage vers le robot : l’élève montre le lancement au démarrage, sans supposer que les boutons A/B pilotent ce nouveau projet. Accepter une explication en mots simples plutôt qu’une définition du terme événement.

## 6. Recette différée

Avant usage, au moment choisi par l’utilisateur :

1. Vérifier accès navigateur, gestes A/B, affichage, langue des blocs et reprise des projets.
2. Choisir modèle/version de l’extension ; vérifier initialisation, simulation et configuration des aides intégrées. Expliquer toute assistance active ; éviter qu’un comportement automatique rende les essais trompeurs.
3. Vérifier commandes steer temporisées, unités, arrêt, lancement unique et absence de commandes concurrentes.
4. Choisir des valeurs lentes et des durées courtes donnant avance et virage visibles dans une zone dégagée. Le commencement du virage doit être visible dans le défi sans outil de mesure supplémentaire. Si l’approfondissement de puissance est retenu, préparer et tester une démonstration professeur en ligne droite seule, avec arrêt explicite et conditions identiques ; aucune restauration du projet élève n’est nécessaire.
5. Vérifier remise au même départ et relance, deux essais par référence, sans supposer qu’un redémarrage remet la position.
6. Vérifier copies, export et réimportation. Les projets restent dans le stockage local du navigateur ; cette copie peut disparaître si ses données sont effacées. Préparer une sauvegarde externe et le canal institutionnel, sans données personnelles. [Sauvegarde MakeCode](https://makecode.microbit.org/save), [importation](https://makecode.microbit.org/courses/csintro/making/activity).
7. Mettre gestes, paramètres retenus et captures dans les supports avant distribution.

Si le robot est indisponible, micro:bit seul peut permettre une activité de repli mais ne remplace pas le robot roulant annoncé. Noter l’écart et prévoir une solution convenue avec l’organisme ; pas de substitution silencieuse d’outil.

## 7. Revue pédagogique appliquée

La structure RB05/RB06 est conservée. La revue transversale maintient les transitions explicites et l’arrêt fourni, puis allège le socle : avancer/arrêter, virage et défi de durée. La puissance devient une démonstration facultative après le travail principal. La fiche élève suit les repères « Je prévois / Je fais / Je vérifie » ; les précisions techniques restent dans le guide.

Suite : la [séance 4](specification-robotique-seance-4.md) reprend l’arrêt et la décision à deux cas. Les corrections documentaires sont appliquées ; la préparation et les essais des projets restent différés.
