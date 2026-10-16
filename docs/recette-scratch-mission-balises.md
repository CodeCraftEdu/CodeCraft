# Prototype Scratch avancé : Mission balises

15 octobre 2026. Prototype construit après les corrections de la [roadmap](roadmap-scratch-avance.md) et de sa [revue pédagogique](revue-roadmap-scratch-avance.md). Il vérifie la continuité technique du jeu avant la rédaction des cours.

## Résultat

Neuf archives originales sont construites : base graphique, Commandes, Balises, Vies, Clones, Messages et trois jalons pour États. Les essais dans Scratch VM 15.2.0 avec Scratch Render passent. Les captures de six situations sont examinées : limites, clones actifs, secteur 2, victoire, défaite et réimport.

La version finale contient la scène et trois acteurs, avec sept piles principales. L'ajout des états conserve les propriétaires et les corps d'action : il ajoute les protections, modifie la décision et ajoute une réception pour l'annonce. Aucune migration professeur ni nouvelle infrastructure de personnage n'est nécessaire dans ce prototype.

Les sources, archives, inventaires, rapport JSON et captures sont conservés localement dans le dossier `prototype-mission-balises`, à côté de la préparation de travail, hors du dépôt public. Le pack est un livrable local ; le site et le compte Scratch ne reçoivent aucune nouvelle publication à cette étape.

## Contrôles exécutés

| Passage              | Résultat observé                                                                                                                                                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Commandes            | Les quatre touches déplacent dans le bon sens ; les coordonnées sont bornées à x = -200/200 et y = -140/140.                                                                                                                               |
| Balises              | Six activations font alterner les positions ; chaque contact donne un point ; arrêt à six et remise à zéro. Une partie complète de cette version est exécutée au clavier sans téléportation ni compteur injecté.                           |
| Variation et reprise | Une copie en mémoire gagne à deux points. La référence rechargée conserve la règle à six et permet de dépasser deux points. Les archives originales restent inchangées.                                                                    |
| Danger fixe          | Un contact prolongé retire une vie, le déplacement permet de sortir, un nouveau contact retire la suivante ; arrêt à zéro et remise à zéro.                                                                                                |
| Clones               | Modèle caché, copies visibles et mobiles ; suppression au contact et à la sortie. Une observation supplémentaire de quinze secondes ne montre pas d'accumulation. Plusieurs copies sur la dernière vie ne rendent pas le compteur négatif. |
| Messages             | Passage au troisième point, décor du secteur 2 et vitesse 7. Au quatrième point, aucun nouveau signal ; victoire à six, puis retour au premier secteur.                                                                                    |
| Jalon décision       | Avec les deux conditions de fin préparées simultanément, l'état devient perdu et le programme s'arrête.                                                                                                                                    |
| Jalon protections    | Sans annonce ni arrêt immédiat, l'état final bloque clavier et collecte ; les copies présentes se suppriment, les vies restent stables et l'attente de la fabrique ne déclenche pas de nouvelle création.                                  |
| Annonce finale       | Une collecte réelle déclenche la victoire à six. Le résultat n'est envoyé qu'une fois, les actions sont refusées et la fabrique ne crée rien à la sortie de son attente.                                                                   |
| Relance              | Relance pendant l'annonce, puis fonctionnement encore actif au-delà de son ancien délai ; défaite par dernière collision réelle, arrêt et nouvelle partie avec valeurs et positions initiales.                                             |
| Ordre de démarrage   | Dans Balises, Vies et États, inversion de l'ordre des acteurs, ancienne position sur la balise puis sur le danger : aucun point ni dégât parasite au drapeau.                                                                              |
| Export               | Export `.sb3` par le moteur puis réimport, collecte et clavier fonctionnels. Les neuf archives sources conservent leurs empreintes.                                                                                                        |

Les tests de seuil, de dernière vie et de priorité utilisent des valeurs contrôlées ; la dernière collecte ou collision est réellement exécutée lorsque le compte rendu l'indique. Le test de priorité injecte les deux conditions vraies pour observer la décision, sans prétendre simuler leur simultanéité naturelle.

## Transformations mesurées

Le relevé compare les définitions des piles utilisées pour générer les archives. Les positions d'éditeur et identifiants de blocs n'affectent pas cette comparaison.

| Passage                | Piles conservées | Modifiées | Ajoutées | Retirées |
| ---------------------- | ---------------- | --------- | -------- | -------- |
| Commandes → Balises    | 1                | 0         | 2        | 0        |
| Balises → Vies         | 2                | 1         | 1        | 0        |
| Vies → Clones          | 2                | 1         | 2        | 1        |
| Clones → Messages      | 4                | 1         | 1        | 0        |
| Messages → Décision    | 5                | 1         | 0        | 0        |
| Décision → Protections | 1                | 5         | 0        | 0        |
| Protections → Annonce  | 5                | 1         | 1        | 0        |

Le jalon Protections reste le plus chargé : cinq piles changent, dont le contrôleur de fin et les quatre piles d'action. La rédaction devra traiter séparément déplacement, collecte, fabrique et comportement des clones, avec l'essai de chacune avant de réunir les changements. Il n'y a pas de nouvelle pile à ajouter pendant ce jalon.

## Précisions confirmées pour la rédaction

- Balise et danger fixe attendent une séparation initiale après leur placement, avant d'entrer dans la surveillance des contacts. Ce passage évite qu'un ancien contact arrêté compte dans la nouvelle partie ; il doit apparaître dans les modèles et l'explication.
- Le remplacement du danger retire réellement l'ancienne pile de dégâts. La suppression du clone remplace l'attente de séparation pour cette nouvelle règle.
- La fabrique revérifie l'état après son attente ; chaque clone vérifie l'état avant ses actions et sort lorsque la partie est finie. Les copies disparaissent, le véhicule reste immobile et aucun point supplémentaire n'est obtenu.
- L'annonce est ajoutée après les protections. Elle appartient à Pilote ; la décision appartient toujours à la scène. Le drapeau termine l'ancienne exécution et réinitialise l'affichage.

## Limites et suite

Le prototype confirme le fonctionnement des mécanismes et fournit des références pour les transformations. Il ne démontre pas encore l'autonomie pédagogique. Les sept chapitres, leurs consignes, les aides de reprise et l'ouverture des ressources dans un autre onglet restent à réaliser sur le site.

La partie au clavier concerne la version Balises, sans danger. La difficulté du jeu complet avec obstacles n'a pas été évaluée par une partie complète au clavier ou par des élèves. La durée d'apprentissage, la reconstruction depuis les palettes de l'éditeur officiel et la préservation des personnalisations dans un parcours rédigé restent à éprouver. Les graphiques sont ceux d'un prototype.

Le premier lancement de Chrome a été bloqué par l'environnement ; les contrôles ont ensuite utilisé un profil local isolé avec l'autorisation d'exécution nécessaire. Une première exécution a relevé une erreur dans le panneau de compteurs de la page de test lorsque le moteur n'avait pas encore de scène. Le panneau est corrigé, le rapport n'est écrit comme réussi qu'après le contrôle des erreurs et l'exécution complète suivante réussit. Cette erreur ne venait pas des archives Scratch.

Le lint du dépôt et celui du scénario externe réussissent ; sources Python et archives sont contrôlées. Aucun code applicatif ni catalogue n'est modifié : les suites du site ne sont pas relancées pour ce prototype externe et cette documentation.

**Suite en Sol High :** rédiger Commandes → Balises → Vies depuis ces références, avec les valeurs de reprise et les piles explicitement fournies ou construites. Examiner ensuite ces cours en Astra High, puis poursuivre Clones → Messages → États → Tests. L'estimation initiale de 6 à 10 heures reste une enveloppe indicative ; le temps de rédaction et de reconstruction depuis les supports n'a pas été mesuré par ces essais.
