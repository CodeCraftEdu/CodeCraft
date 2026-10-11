# Ma mission de robot — guide professeur en préparation

Séance 5 : RB09 + RB10, 120 minutes avec pause. [Spécification](specification-robotique-seance-5.md), [fiche élève](robotique-seance-5-eleve.md).

**Recette technique partielle effectuée le 10 octobre dans MakeCode.** Les observations ci-dessous ne valident ni une séance élève ni la sécurité matérielle. Reprendre seulement les contrôles encore ouverts du jour 4 et de [R15](integration-robotique-missions.md).

## Résultats de préparation — 10 octobre

| Projet / limite | Arrêt observé | Preuve disponible |
| --- | --- | --- |
| Référence fixe 20 | 17–18 cm | 17 dans l’ancienne version automatique ; 18 également confirmé avec attente de A |
| Approche, seuil 15 | 13 cm | Départ 26 puis A devant chaque rectangle ; proche 7 immobile après A confirmé |
| Prudente, seuil 25 | 22–23 cm | Autre rectangle : départ 26 puis A confirmé, plusieurs résultats rapportés ; proche 7 immobile après relâchement de A confirmé par l’utilisateur |

Ce sont des valeurs ponctuelles essayées, pas une plage continue autorisée ni des distances d’arrêt garanties. L’effet attendu du seuil est observé, mais les comparaisons ne prouvent pas des placements strictement identiques. La cause exacte de l’écart 22/23 n’est pas établie. La règle `< seuil` commande l’arrêt à une consultation ; ne pas demander un arrêt exactement au seuil, le contact ou le seuil minimal.

Procédure commune : CuteBot, trois aides OFF, direction 0, puissance 25, consultation 100 ms, pile unique fournie avec attente de A. Après chaque relance/import, démarrer sans A, placer le robot immobile face à la cible, relever la mesure, puis maintenir **le bouton A à l’écran** environ une seconde sans relance intermédiaire. Après A, arrêter avant intervention. Le bouton A n’est pas la situation A du tableau ; le HEX ne sauvegarde ni scène ni résultats.

Copies professeur [prudente 25](recettes-robotique/RB09-Mission-prudente-seuil-25.hex) et [approche 15](recettes-robotique/RB09-Mission-approche-seuil-15.hex) exportées et réimportées avec nom/blocs/réglages retrouvés. Ne pas redemander les trois premiers essais approche comme s’ils n’avaient pas été faits. Restent comparaison/répétition à conditions égales, accès élèves et téléchargement/ouverture locale/impression de la fiche. Ces archives de recette ne remplacent pas le choix et l’explication de l’élève.

## Préparation différée

- Même robot, configuration, initialisation et règle répétée que le jour 4 ; puissance faible fixe et absence de commande concurrente.
- Préparer une référence professeur unique `Reference-arret`, issue de `Mon-obstacle-fixe`. Garder sa limite fixe pendant la séance et noter sur une fiche visible : limite, puissance, départ, orientation et obstacle de la scène A. Ce nom ne désigne pas le projet personnel du jour 4 ; aucune copie de référence supplémentaire à ouvrir par l’élève.
- Projet personnel duplicable et base de reprise équivalente si un élève a perdu son projet.
- Valeurs ponctuelles 15 et 25 essayées ; comparaison équitable à confirmer dans la scène A de cours, sans plage continue annoncée. Un réglage pertinent du jour 4 peut être conservé. Si une mission échoue dans cette scène, revoir le support avant de la proposer ; ne pas annoncer une distance physique exacte.
- Trois situations : A pour la comparaison, B avec obstacle proche sans contact initial, C avec obstacle à une autre position et départ éloigné. Choisir B pour obtenir Arrêter avec tous les réglages proposés, et C pour permettre une avance puis un arrêt avant contact avec ces mêmes réglages. Vérifier mesures valides et remise au départ pendant l’attente de A, simulation active et moteurs arrêtés ; lire la mesure puis presser A sans relance intermédiaire.
- Schéma de règle déjà présent sur la fiche élève, à compléter sans toucher au programme intact ; référence visible après la tentative.
- Sauvegarde et reprise réellement vérifiées. Aucun compte, partage public ou enregistrement vidéo n’est imposé par la séance.
- Effectif connu avant de répartir les 25 minutes de présentation ; pas de dépendance à des salles de visioconférence séparées.

## Conducteur — 120 minutes

| Temps | Activité | Repère attendu |
| --- | --- | --- |
| 0–10 | Reprise, schéma partiel connu et accès au projet | Deux cas retrouvés, besoin d’aide identifié |
| 10–20 | Démonstration de la référence dans A, puis thème et choix de mission | Marge d’arrêt repérée ; mission formulée, sans nouvelle mécanique |
| 20–40 | Copie, réglage, prévision et premier essai A | Premier résultat observé ; initialisation/emploi montrés ; sauvegarde avant pause |
| 40–50 | Pause | Simulation arrêtée, projet conservé |
| 50–80 | Confirmation A, puis prévision et essai B/C | Même fiche et projet ; observations et correction si nécessaire |
| 80–105 | Présentations courtes et échanges | Règle, choix et preuve expliqués |
| 105–115 | Sauvegarde et vérification de reprise | Projet personnel retrouvable, originaux conservés |
| 115–120 | Bilan du stage | Une acquisition et une prochaine envie exprimées |

## Accompagner la conception

Le jour 4 a construit la règle et introduit le réglage avec aide. Aujourd’hui, l’élève choisit une mission, justifie le réglage, prévoit les essais et présente des preuves. Un thème n’est pas une promesse de fonctionnalités.

Si la modification guidée du seuil a été reportée ou reste fragile, utiliser le temps de reprise/adaptation avant le choix personnel : faire prévoir les actions pour une mesure fictive de 23 avec seuil = 20 puis 25, pointer initialisation et comparaison, puis comparer deux valeurs effectivement vérifiées sur une même scène et puissance. Demander l’explication du résultat. Les valeurs du papier ne sont pas une recette. Si cette manipulation manque, conserver « non testé » et différer le choix personnel ; si la variable manque entièrement, reprendre son introduction RB08. Un élève ayant déjà effectué et expliqué cet essai peut passer directement à la référence.

Si son réglage du jour 4 convient déjà, autoriser sa conservation. Demander pourquoi il répond à la mission et ce que l’élève prévoit dans la nouvelle scène C. Observer le raisonnement, les résultats et les aides reçues ; une modification du code n’est pas obligatoire pour démontrer une compréhension. Une copie réussie sans explication ne suffit pas non plus.

Montrer l’arrêt de la référence dans A **avant** de laisser choisir la mission : faire pointer la marge, sans donner la valeur solution ni le sens du changement. Puis demander : « Quel réglage pourrait changer cette marge dans le sens choisi ? Que prévois-tu ? » Si nécessaire, faire lire la comparaison avec deux valeurs effectivement vérifiées pour cette mission, puis fournir un choix réduit. Approche signifie une marge plus petite mais toujours avant contact, jamais une course vers le contact ou une recherche du seuil minimal. Si cette mission n’est pas fiable, ne pas la proposer avant révision des supports.

RB09 doit apporter un premier résultat : prévoir puis essayer le projet dans A, noter l’observation et sauvegarder avant la pause. Si la scène n’est pas validée, noter non testé et conserver le support en préparation. RB10 confirme A dans les mêmes conditions puis traite B/C ; ce n’est pas une seconde fiche à recopier.

Pour un élève fragile, reprendre la différence mesure/limite et faire pointer initialisation/utilisation. Accompagner la sélection de valeur, mais lui laisser prévoir et expliquer au moins les deux branches. Noter l’aide reçue. Pour un élève rapide, demander une justification ou un essai supplémentaire, sans introduire de variable nouvelle.

## Conduire les essais

Dans A, montrer `Reference-arret` avec ses réglages, puis comparer le projet personnel dans les mêmes conditions. Seule la valeur de la limite diffère ; la référence utilise son nombre fixe, le projet utilise `seuil`. Vérifier l’avance initiale puis l’arrêt plus loin ou plus près de l’obstacle selon la mission, toujours avant contact. Cette première situation comprend donc l’observation de la référence et un lancement personnel.

Dans B, vérifier la branche Arrêter avec un obstacle proche au départ. Dans C, garder le réglage personnel et vérifier l’avance puis l’arrêt avant contact dans cette autre scène. C vérifie que le comportement fonctionne ailleurs ; ne pas en déduire un arrêt plus près ou plus loin que la référence dans C sans y refaire une comparaison. Cette comparaison supplémentaire est facultative.

Ces résultats sont les attendus professeur. Avant B/C, présenter seulement les conditions de départ et une mesure valide ; recueillir l’action prévue et sa justification avec seuil avant de montrer l’indice ou de lancer. La fiche élève ne donne plus les réponses dans les intitulés des scènes.

Le cas proche au départ doit produire Arrêter, même si ce même arrêt initial ne constitue pas une réussite du défi principal. Ne pas confondre ces deux critères.

Pendant l’approche naturelle, demander comment le programme peut passer d’Avancer à Arrêter dans la même exécution. Une relance depuis le départ connu peut confirmer le résultat. Pour un éventuel retour à une position libre, arrêter, repositionner et relancer : ce test montre la branche Avancer après reprise, pas une preuve de répétition en continu. Un retour sans relance n’est qu’un complément après vérification du geste.

Si le résultat surprend : vérifier scène, mesure valide, valeur effectivement initialisée et commande concurrente avant de modifier la règle. Une mesure absente ou hors plage n’est pas interprétée automatiquement comme « libre » ou « proche ». Ne pas imposer une erreur ou réécrire un programme qui fonctionne.

## Présenter avec un effectif inconnu

À préparer une fois l’effectif reçu : réserver quelques minutes d’introduction et de synthèse, puis répartir le temps restant. Avec huit élèves, viser environ deux minutes chacun ; avec un groupe plus grand, raccourcir le tour et recueillir les démonstrations individuelles pendant les 30 minutes d’essais. Ne pas promettre une présentation complète de trois minutes à chacun sans vérifier le calcul.

Chaque élève explique brièvement sa règle, son choix et une observation. Les autres prévoient une action ou posent une question liée à la preuve. Pas de concours du « meilleur robot ». Une seule démonstration collective ne suffit pas à observer la compréhension de tous.

## Observations à conserver

Écriture élève limitée à une phrase de mission, sa valeur et quelques mots « prévu / observé » pour A/B/C ; A distingue premier résultat et confirmation. Dicter au professeur est possible. Justification, conclusion et présentation peuvent être orales ; les détails techniques ne sont pas demandés sur la fiche élève.

Pour chaque élève : distingue mesure et limite ; pointe initialisation/utilisation ; explique deux branches et répétition ; justifie un réglage conservé ou modifié ; prévoit les résultats ; compare correctement dans A et teste le comportement dans C ; retrouve son projet. Ajouter au relevé professeur le type d’aide, les limites et une preuve courte, pas seulement des cases cochées ou un projet partagé.

La sauvegarde finale ne remplace pas le premier enregistrement avant la pause. Faire vérifier la reprise selon la procédure testée ; ne pas publier les fichiers pour gagner du temps.

## Bilan et suite

Faire nommer une notion comprise et une envie de projet futur. Le stage constitue une découverte simulée, pas une validation de sécurité physique ou une maîtrise autonome complète.

Revues pédagogique et transversale appliquées : trois situations essentielles, référence nommée, portée de chaque essai précisée et conservation d’un réglage pertinent autorisée. Les copies professeur 15/25 sont exportées et réimportées ; les observations du 10 octobre et leurs limites figurent en début de guide. Poursuivre les comparaisons à conditions égales, les répétitions et les contrôles d’accès et de fiche recensés dans le [registre manuel](verifications-manuelles-en-attente.md).
