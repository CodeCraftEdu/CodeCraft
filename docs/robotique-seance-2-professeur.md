# Réagir à une entrée — guide professeur en préparation

Séance 2 du stage robotique KidnKod : RB03 + RB04, deux heures avec pause. [Spécification](specification-robotique-seance-2.md), [fiche élève](robotique-seance-2-eleve.md).

**Intégration RB03/RB04 effectuée le 9 octobre 2026, accès élève non validé.** Diagnostic D2, références complète et inversée, départ à relier et base préconnectée sont partagés par lien. Les états de lecture et de LED ont été observés ; voir la [recette et les liens](recette-tinkercad-bouton.md). Deux leçons autonomes et leurs guides existent sur le site : `robotique-bouton` et `robotique-decision`. Les essais avec l’accès élève restent à faire avant distribution.

## Objectif et entrée

Faire distinguer lecture d’entrée, condition et commande de sortie. Réutiliser la LED de la séance 1 ; ajouter uniquement l’entrée bouton et une décision à deux cas.

Faire montrer la LED externe et sa sortie, retrouver le projet et vérifier Éteindre/Allumer. Si nécessaire, reprendre le montage accompagné. Ni la réussite du bonus ni un vocabulaire électronique mémorisé n’est requis.

## Préparation avant distribution

Le départ à relier ne manque que de la connexion D2 → Terminal 2a du bouton. Arrêter la simulation pour la compléter. La base préconnectée fournit le même montage complet si les gestes ralentissent le groupe. Les deux départs ne contiennent pas la solution : LOW sur D8 dans `on start`, `forever` vide. Retirer LOW de `on start` lors de la construction pour retrouver la référence exacte. Le diagnostic série reste exclusivement une démonstration professeur.

Geste de maintien essayé : garder le bouton de souris enfoncé sur le bouton simulé puis le relâcher. Ne pas annoncer de commande clavier ou de Shift-clic persistant non vérifiés. Les libellés anglais relevés et le schéma d’action manquante sont dans la recette.

- Conserver `Mon-signal` ; vérifier copie vers `Mon-bouton` et copie distincte pour le résultat opposé.
- Utiliser le montage et les bornes relevés dans la recette ; confirmer leur repérage dans l’accès élève avant de demander la connexion D2.
- Utiliser le diagnostic séparé préparé : les états sont visibles sans présupposer que l’élève sait construire la condition. Présenter le moniteur série comme outil d’observation, pas comme nouvelle compétence.
- Retirer l’ancien clignotement dans la copie, et vérifier qu’aucune autre commande n’agit sur la sortie LED.
- Préparer le modèle complet et le schéma partiel avec sinon manquant ; pas de copie supplémentaire pour cet exercice. Faire essayer repos, maintien, relâchement deux fois pour les références exécutables. L’élève manipule seulement le principal et sa version inversée ; le diagnostic reste une démonstration professeur.
- Rendre la commande du bouton accessible au clavier ou à la souris selon les gestes effectivement disponibles ; ne pas inventer un maintien qui n’existe pas dans l’interface.

## Conducteur — 120 minutes

| Temps | Activité | Repère attendu |
| --- | --- | --- |
| 0–10 | Reprise, essais de sortie et copie du projet | Le départ fonctionne et l’original est préservé |
| 10–15 | Entrée versus sortie | Bouton et LED montrés |
| 15–30 | Observation de la lecture et des trois états | Information d’entrée distinguée de la commande |
| 30–50 | Entrée accompagnée, raccord 0/LOW–1/HIGH, cas sinon à proposer puis lecture de la règle complète | Lecture distinguée de la commande ; deux conséquences prévues |
| 50–60 | Pause hors écran | Aucun travail pendant la pause |
| 60–80 | Construction et essais du modèle complet | Deux branches et consultation répétée |
| 80–90 | Retour à la prévision du cas sinon, vérification et explication dans le principal | Choix confronté à l’essai après appui puis relâchement |
| 90–105 | Copie au résultat opposé | Deux actions adaptées, montage conservé |
| 105–115 | Sauvegarde et reprise de la référence | Versions distinctes retrouvées |
| 115–120 | Bilan bref | Consultation répétée expliquée |

L’observation initiale peut se faire sur la démonstration vérifiée du professeur avant que chaque enfant termine le câblage accompagné. Faire alterner prévision, geste et essai. Si le montage ralentit le groupe, distribuer la base préconnectée prévue ; préserver le raisonnement, la pause et les essais plutôt que demander une reconstruction à tous.

## Paroles de découverte

« La dernière fois, notre lumière suivait un rythme. Cette fois, nous allons décider selon une information : le bouton est-il appuyé maintenant ? »

« Le bouton ne commande pas directement la lumière dans notre montage. Il donne une information à la carte ; le programme choisit une action sur la sortie. »

« Lisons les deux cas avant de lancer : si oui, Allumer ; sinon, Éteindre. Au repos, quelle réponse reçoit la question ? »

« Sinon n’arrive pas quelques secondes après Allumer. C’est le cas choisi lorsque la question reçoit non. Si l’état change, la prochaine consultation peut choisir l’autre cas. »

« Dans ta copie, nous voulons une lumière éteinte pendant l’appui et allumée au repos. Que proposes-tu de changer dans le programme ? Prévois les résultats avant de modifier. » Ne donner la stratégie de changement des conséquences qu’en indice si nécessaire.

## Questions et réponses attendues

| Question | Réponse acceptable |
| --- | --- |
| Quelle est l’entrée ? La sortie ? | Bouton lu par la carte ; LED commandée par le programme |
| Que vérifie la condition ? | Si le bouton est appuyé à la consultation actuelle |
| Que signifie sinon ? | L’autre cas lorsque la condition n’est pas vraie, pas une attente |
| Pourquoi consulter de nouveau ? | Pour prendre en compte le maintien et le relâchement |
| Pourquoi tester après avoir appuyé, pas seulement au repos ? | Une LED éteinte au départ ne prouve pas qu’elle s’éteindra après avoir été allumée |
| Le maintien doit-il faire clignoter ? | Non, l’état reste celui commandé par la branche correspondant à la lecture |
| Pourquoi ne pas garder le programme de clignotement ? | Il commanderait lui aussi la même sortie et pourrait contredire la règle bouton |
| Les deux résistances ont-elles le même rôle ? | Celle de la LED limite le courant ; celle de l’entrée donne une référence au repos, sans calcul exigé |

Ne pas exiger les termes pull-down, événement, entrée flottante ou comparaison booléenne dans les réponses élèves. Les valeurs numériques de lecture servent d’observation accompagnée, pas de nouvelle variable à créer.

## Accompagnement et transfert

Construction : le professeur peut préparer le câblage d’entrée, aider à choisir les bornes et réaliser des gestes de souris. L’élève montre ce qui est lu et ce qui est commandé. Ne pas confondre capacité à connecter tous les fils et compréhension de la décision.

Modèle complet : prévoir les trois états, assembler les deux branches puis tester. Ne pas essayer Allumer seule comme preuve de la condition. Ne pas ajouter une commande d’extinction inconditionnelle pour compenser l’absence de sinon.

Lecture répétée : suivre les quatre lignes du tableau élève, notamment « toujours maintenu ». Faire montrer pourquoi la même branche reste choisie. Répéter la consultation n’implique pas alterner les sorties.

Support partiel sur schéma : avant de donner la règle complète et d’assembler les blocs, demander l’action manquante du cas sinon et sa place. Gradation d’aide — demander le résultat au relâchement ; montrer la question et le cas non ; proposer Allumer/Éteindre. Après construction, vérifier cette prévision dans le principal intact : l’essai doit inclure un appui avant le relâchement. Aucun projet supplémentaire.

Défi opposé : donner les résultats attendus et garder le circuit fixe, puis laisser proposer une modification du programme avant de fournir la stratégie. Indices gradués : relire les deux cas ; suggérer de conserver la question ; demander les deux actions correspondantes. Une autre proposition correcte peut être discutée, sans introduire de nouvelle notion ni faire modifier le câblage. Faire prévoir puis vérifier. Noter si la stratégie a été proposée ou donnée ; ne pas exiger le succès sans aide pour poursuivre. Pour un élève rapide, faire proposer un essai à quelqu’un plutôt qu’ajouter variables ou compteur.

## Erreurs fréquentes et enquête

| Symptôme | Aides graduées |
| --- | --- |
| Lecture identique au repos et en appui | Vérifier le geste simulé ; vérifier la broche lue ; contrôler les bornes internes du bouton et les connexions avec la référence ; reprendre la base testée, sans inventer une solution logicielle |
| LED clignote sans rapport avec le bouton | Rechercher les anciennes actions et attentes ; comparer la copie à la règle seule ; retirer les commandes concurrentes dans la copie, pas dans l’original |
| LED reste allumée après relâchement | Observer d’abord l’entrée ; si elle change, retrouver le cas sinon et son action ; vérifier la répétition ; reconstruire la paire complète avec aide |
| LED toujours éteinte | Vérifier la sortie seule ; observer l’état de l’entrée ; lire la comparaison et les deux actions ; éviter de modifier tous les éléments ensemble |
| Résultat opposé avant le défi | Vérifier l’état lu pendant l’appui et la configuration de rappel ; comparer à la référence ; ne pas adapter silencieusement la fiche à un câblage différent |
| Appui bref semble ignoré | Tester un maintien visible ; vérifier les longues attentes héritées du clignotement ; ne pas commencer un chapitre de rebond ou de temporisation |
| Deux copies confondues | Vérifier nom, circuit et règle avant modification ; retrouver l’original ; préserver les versions correctes avant de donner une base de reprise |

Si l’entrée n’est pas stable, corriger le support avec le professeur avant l’exercice. Ne pas faire supprimer une résistance ni modifier l’alimentation à l’aveugle.

## Bilan et suite

Faire montrer entrée, condition et sortie. Demander le résultat du maintien prolongé et son explication. Accepter l’oral ou le geste ; noter prévision, observation, explication et aides, sans validation automatique.

Conserver le modèle principal et la copie opposée. Annoncer le jour 3 : les mêmes idées serviront avec une autre carte et un robot ; la différence entre consultation répétée et événement ponctuel sera expliquée à ce moment, pas ajoutée comme prérequis aujourd’hui.

La revue documentaire de RB03/RB04 est appliquée et la revue transversale conserve cette structure. Leur préparation technique est consignée dans la recette ; l’accès élève et l’observation en classe restent non validés. La [séance 3](specification-robotique-seance-3.md) est rédigée et corrigée après revue, mais ses projets et paramètres techniques restent non essayés.
