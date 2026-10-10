# Ma mission de robot — fiche élève en préparation

**Non prête à distribuer :** les projets de départ, réglages et gestes du simulateur doivent encore être préparés et vérifiés. Pas de matériel à acheter.

## Ta mission

Ton robot peut être livreur, explorateur ou robot de secours. Tu réutilises la règle du cours précédent : avancer lorsque l’obstacle est suffisamment éloigné et s’arrêter lorsqu’il est proche.

Tu vas choisir une mission, régler ton robot, tester le résultat et expliquer ton programme.

## 1 — Retrouver la règle

Complète cette règle connue, puis retrouve ses deux actions dans ton programme :

```text
La distance est-elle plus petite que seuil ?
  Oui → __________________
  Non → __________________
```

Ouvre `Mon-robot-prudent` avec le professeur. Garde-le intact et crée la copie `Ma-mission-robot`. Si tu ne le retrouves pas, demande une base de reprise.

Si tu n’as pas encore essayé un autre seuil, ou si son effet reste difficile à expliquer, fais une reprise avant le choix de mission. Sur papier, prévois l’action avec une mesure de 23 pour seuil = 20 puis 25. Ensuite, montre les deux endroits de `seuil` et compare avec le professeur deux valeurs vérifiées depuis la même scène. Ces nombres du papier ne garantissent pas un essai de simulation. Si la manipulation manque, note « non testé » et reprends-la avant le choix personnel. Si tu l’as déjà effectuée et expliquée, passe directement à la référence.

## 2 — Choisir ton projet

Observe d’abord le robot `Reference-arret` avancer puis s’arrêter dans la scène A. Repère l’espace qui reste devant l’obstacle : c’est sa marge d’arrêt.

Complète une phrase : « Mon robot est un… ; sa mission est de s’arrêter avec une marge plus grande / plus petite que la référence. » Tu peux expliquer ton choix à l’oral.

Choisis :

- **Prudente** : avancer puis s’arrêter avec une marge plus grande que la référence.
- **Approche** : avancer puis s’arrêter avec une marge plus petite, toujours avant contact. Il ne s’agit pas de toucher l’obstacle ni de chercher le plus petit seuil possible.

`Reference-arret` garde son réglage. Choisis ta valeur parmi celles vérifiées par le professeur pour ta mission et note `seuil = …`. Tu peux garder celle du jour 4 si elle convient : explique pourquoi à l’oral, puis vérifie ton choix. Dans la scène A, ton robot doit d’abord avancer puis s’arrêter avant l’obstacle.

La distance vient du capteur. `seuil` est la limite que tu choisis : ce n’est pas la distance mesurée. Pour cette comparaison, ne change ni la puissance ni les autres commandes.

## 3 — Comparer puis vérifier

**Je prévois :** avant chaque essai, indique ce que fera le robot. Montre où `seuil` reçoit sa valeur et où il est utilisé.

**Premier résultat — RB09 :** après ta prévision, lance ton projet dans A, dans les mêmes conditions que la référence : départ, orientation, obstacle et puissance. Note ou explique ce que tu observes. Sauvegarde ta copie avant une pause ; ce premier résultat ne suffit pas à valider toute la mission.

**Confirmation et autres situations — RB10 :** retrouve ton projet et la même fiche. Reprends A depuis le départ connu, avec le même réglage ; le professeur remontre la référence si nécessaire. Prévois puis essaie B, ensuite C. Arrête toujours la simulation avant de déplacer le robot ou l’obstacle.

**Je vérifie :** compare chaque observation à ta prévision :

| Essai | Ma prévision | Ce que j’observe |
| --- | --- | --- |
| A — Même départ éloigné, orientation et obstacle que la référence | … | Premier essai : … ; confirmation : … |
| B — Obstacle proche au départ, sans contact initial ; même réglage | … | … |
| C — Autre position d’obstacle, départ éloigné ; même réglage | … | … |

Avant B/C, compare la mesure valide au seuil et explique l’action que tu prévois. Pour C, indique aussi ce qui pourrait changer pendant le déplacement. Après l’essai, compare tes observations à cette prévision. Une comparaison de marge à la référence dans C demanderait de refaire l’essai de la référence dans cette scène.

Quelques mots dans « prévu / observé » suffisent ; tu peux les dicter au professeur. Justification et conclusion peuvent être orales. Si un résultat te surprend, montre-le au professeur et vérifie d’abord la scène et le réglage utilisé. Modifie seulement si nécessaire, puis reteste ; si tu changes le programme, reprends A/B/C avant de conclure. Un réglage qui convient peut être conservé.

Pendant l’essai, note l’action au départ puis les changements éventuels **sans relancer entre les deux**. Explique avec la mesure relue et la règle.

S’il reste du temps, refais un essai depuis le départ connu pour vérifier ton résultat. Le professeur peut aussi proposer un retour à une position éloignée si le geste a été vérifié.

## 4 — Montrer ton travail

Prépare une explication courte :

- Voici le capteur qui fournit l’entrée et la question du programme.
- Voici les deux actions possibles commandées aux moteurs : les moteurs sont les sorties.
- Voici la mission et le réglage que j’ai choisis, et un essai qui montre son effet.

Tu peux aussi montrer un résultat inattendu et expliquer ce qu’il faudrait vérifier. Dis quelles aides tu as utilisées : elles font partie du travail.

## 5 — Garder ton projet

Avec le professeur, sauvegarde `Ma-mission-robot` selon la procédure prévue, puis vérifie que tu peux le retrouver. N’ajoute pas de données personnelles et garde tes anciens projets.

## Les essentiels

- Distinguer la distance reçue et la limite choisie.
- Expliquer Avancer, Arrêter et la répétition de la question.
- Prévoir, tester dans plusieurs situations et expliquer ton résultat.

Notre robot est simulé. Il peut repartir si la distance redevient suffisamment grande ; nous n’avons pas fabriqué une sécurité pour un robot réel.
