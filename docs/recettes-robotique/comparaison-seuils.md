# Comparaison facultative reportée — seuils 15, 20 et 25

Décision du 10 octobre : ne plus demander cette série de répétitions pour poursuivre la préparation. Les essais déjà obtenus suffisent à attester le fonctionnement de base dans les scènes observées. Ce protocole reste disponible si une comparaison géométrique plus rigoureuse devient nécessaire ; il n’est ni effectué ni validé par ce report. Les consignes élève de comparer une seule modification dans des conditions similaires restent pertinentes.

État du 10 octobre 2026 : les trois réglages ont été essayés, mais la géométrie identique entre leurs départs n’est pas attestée. Ce relevé complète R12/R15 ; aucune ligne vide ne vaut essai effectué.

## Préparation commune

Utiliser la même règle variable `< seuil` pour les trois valeurs : CuteBot, trois aides OFF, direction 0, puissance 25, pause 100 ms et attente de A. Modifier seulement la valeur initiale de `seuil`. Les archives professeur et la référence variable 20 permettent de retrouver le programme ; elles ne conservent pas le terrain.

Choisir une seule cible identifiée par sa position, pas sa couleur. Après chaque relance, simulation active pendant l’attente de A et moteurs arrêtés, replacer le robot avec la même position et orientation. Viser un départ à 26 cm, strictement supérieur aux trois seuils. Conserver une capture du premier placement avant A avec robot, cible et mesure visibles, puis comparer les départs suivants à ce repère. Une même mesure 26 ne suffit pas à prouver la même orientation ou cible.

Relever cinq lectures stables avant l’appui. Maintenir A à l’écran environ une seconde puis relâcher, sans relance entre placement et appui. Observer l’avance puis l’arrêt, vérifier l’absence de contact visible et le maintien immobile pendant cinq secondes. Arrêter la simulation avant toute intervention après A. Ne pas modifier les aides, la puissance ou la cadence pour compenser un résultat.

## Relevé

| Seuil | Reprise | Départ et repère géométrique | Arrêt mesuré | Avance puis arrêt avant contact / maintien | Preuve et anomalies |
| --- | --- | --- | --- | --- | --- |
| 25 | 1 | Départ 26 rapporté ; cible de gauche visible à la fin, orientation et position initiales non capturées | 23 | Avance puis arrêt rapportés ; absence de contact visible ; durée de maintien non chronométrée | Capture ed655ce5, plateau final et nouvelles lignes à 23 ; essai partiellement renseigné |
| 25 | 2 | Non effectué | — | — | — |
| 20 | 1 | Non effectué | — | — | — |
| 20 | 2 | Non effectué | — | — | — |
| 15 | 1 | Non effectué | — | — | — |
| 15 | 2 | Non effectué | — | — | — |

Attendu à vérifier : marge à 25 plus grande qu’à 20, marge à 15 plus petite qu’à 20, toujours après une avance et avant contact. Les anciens arrêts 22–23 / 18 / 13 constituent des observations antérieures, pas des résultats à recopier dans ce tableau. Ne pas exiger exactement 25, 20 ou 15 à l’arrêt.

Complément utilisateur : avec ce même seuil 25, départ à 15 cm rapporté, robot immobile. Il s’agit d’une distance de départ, pas d’un essai avec seuil 15. Le maintien proche à 7 après relâchement de A avait déjà été confirmé. Après ces observations, seule l’initialisation de seuil dans le projet ouvert a été modifiée à 20 par l’agent ; puissance 25, direction 0 et pauses 100 ms retrouvées. Aucun résultat à seuil 20 n’est ajouté à ce relevé avant l’essai humain. Le nom local du projet reste celui de la copie 25 ; lire le bloc d’initialisation pour connaître le réglage en cours. L’archive HEX 25 du dépôt reste intacte.

La comparaison fixe 20 / variable 20 reste un contrôle distinct de substitution dans R12. L’accès élève, l’impression et l’apprentissage ne sont pas validés par ce relevé.

## Blocage d’automatisation

Nouvelle tentative autonome le 10 octobre : simulateur ouvert à 1280 × 720, seuil 25 vérifié dans les blocs, attente de A et aides OFF. Le glisser du robot vers la première cible est refusé avant envoi par le contrôle du navigateur : « Cannot safely inspect fractional iframe input coordinates ». Aucun placement à 26 ni nouveau lancement moteur attesté. Aucun contournement ni modification du programme. La confirmation proche à 7 après relâchement de A reste une preuve utilisateur déjà obtenue.

La comparaison ci-dessus nécessite donc un placement humain dans le simulateur tant que ce contrôle refuse le geste. Sources : [recette](../recette-makecode-capteurs.md), [protocoles](../protocoles-verifications-manuelles.md), [registre restant](../verifications-manuelles-en-attente.md).
