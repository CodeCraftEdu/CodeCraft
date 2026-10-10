# Faire agir un circuit — fiche élève en préparation

**Note de préparation :** cette fiche d’atelier n’est pas encore prête à distribuer. Le montage et les commandes LOW / HIGH ont été essayés dans une [recette partielle](recette-tinkercad-premiere-lumiere.md), mais les départs spécifiques de l’atelier et l’accès élève restent à vérifier. Les noms d’actions ci-dessous décrivent leur rôle, pas une capture de l’interface. Toutes les activités sont virtuelles, dans Tinkercad Circuits.

## Ton objectif

Faire clignoter une petite lumière, puis choisir combien de temps elle reste allumée. À la fin, tu montreras ton circuit et tu expliqueras une modification.

## Avant de commencer

Ouvre la classe et le circuit indiqués par le professeur. Tu n’as rien à acheter ni à brancher sur ton ordinateur. Si tu ne trouves pas la page ou si tu as du mal avec les fils, demande une aide : comprendre et manipuler sont deux choses différentes.

Nomme ton projet `Mon-signal`. Ce projet sera conservé pour la prochaine séance. Ne modifie pas la démonstration du professeur.

## 1 — Une lumière dans un circuit

Observe le circuit présenté par le professeur. Une LED est une petite lumière. La résistance aide à protéger le circuit. Les fils relient les composants pour former un chemin complet.

Avant l’essai, réponds : si l’un des fils manque, la LED pourra-t-elle encore s’allumer ? Observe le résultat, puis la connexion restaurée. Montre la LED et la résistance. Tu n’as pas à reconstruire toute cette démonstration.

## 2 — Une carte qui commande la lumière

Dans ton montage principal, la carte Arduino commande une LED placée à côté d’elle. C’est cette LED externe que nous observons, pas une petite lumière déjà présente sur la carte.

Avec le professeur, retrouve la sortie utilisée, la résistance, les deux bornes de la LED et le retour GND. Suis les connexions du modèle préparé. Arrête la simulation avant de changer un fil. Garde la résistance dans le circuit.

Dans ta copie, le professeur prépare une seule connexion à compléter après l’avoir montrée sur le modèle. Repère les deux bornes, rétablis ce fil avec une aide adaptée et explique quelle partie du chemin tu réunis. Garde les autres fils et le sens de la LED ; fais vérifier le montage avant les essais Éteindre/Allumer.

Complète la connexion demandée et explique ce qu’elle relie. Demande de l’aide si tu ne reconnais pas une borne.

Sur le même montage, prévois puis essaie la commande Éteindre. Change seulement cette commande pour Allumer, puis relance selon les indications du professeur. La LED externe change-t-elle d’état ? Une lumière déjà allumée ne suffit pas à vérifier la commande. Si le résultat ne correspond pas, ne change pas tout : vérifie avec le professeur une connexion et la sortie utilisée par le programme.

## 3 — Lire le signal avant de l’essayer

Voici le cycle en mots :

1. Allumer la LED.
2. Attendre une seconde.
3. Éteindre la LED.
4. Attendre une seconde.

↳ Retour à la première action : le cycle recommence. Cette flèche est un schéma de lecture, pas un cinquième bloc à ajouter.

Pendant l’attente qui suit l’allumage, la LED reste allumée. L’attente ne l’éteint pas : c’est l’action suivante qui demande l’extinction.

Avant de lancer le modèle, montre l’ordre des actions. À quel moment la lumière s’éteindra-t-elle ? Où recommencera le cycle ?

Construis les quatre actions avec le professeur. Il te montrera comment leur répétition fonctionne dans le support préparé. Observe au moins trois cycles. Si tu modifies les blocs, suis la procédure indiquée par le professeur pour relancer la simulation.

## 4 — Compléter un petit morceau

Sur la copie partielle indiquée par le professeur, une action manque entre la première attente et la deuxième.

Quelle action faut-il ajouter pour que la LED soit ensuite éteinte ? Explique ton choix avant de l’ajouter. Lance la simulation et compare au modèle. Garde ton projet principal intact.

## 5 — À toi : une lumière qui reste allumée plus longtemps

Reviens à `Mon-signal`.

Ta mission : la lumière doit rester allumée deux secondes, puis éteinte une seconde, et recommencer.

- Montre l’attente que tu vas changer. Prévois le résultat avant la modification.
- Change seulement cette attente. Ne change ni les fils ni l’autre durée.
- Observe au moins trois cycles et compare à ta prévision.
- Explique pourquoi l’attente choisie change le temps allumé, pas le temps éteint.

Si tu bloques, retrouve d’abord l’action Allumer puis l’attente qui la suit. Une aide de navigation est possible ; essaie d’expliquer le choix toi-même.

## Bonus facultatif — Un autre rythme

Si ton signal fonctionne et que tu sais l’expliquer, choisis une autre durée allumée ou éteinte. Prévois le résultat, change un seul réglage, puis essaie. Ne change pas la résistance ou le montage pour modifier le rythme.

Tu n’as pas besoin de réussir ce bonus pour poursuivre.

## Les essentiels

- Je montre la LED commandée et une connexion de mon circuit.
- Je sais pourquoi nous gardons la résistance et un chemin complet.
- Je lis les actions dans l’ordre et montre où elles recommencent.
- Je sais ce que fait la LED pendant chaque attente.
- Je modifie une attente en prévoyant son effet, puis je vérifie.

Une LED qui clignote ne suffit pas : explique au moins un de tes choix. Si un point reste difficile, reprends-le avec une aide ; tu n’as pas à tout recommencer.

Petite question de fin : si tu voulais maintenant une seconde allumée et deux secondes éteinte, que changerais-tu ? Montre l’action et explique, avant de demander un indice. Tu n’as pas à créer un deuxième projet.

## Conserver ton travail

Arrête la simulation. Vérifie le nom `Mon-signal` et l’enregistrement selon les indications du professeur. Retourne à la liste de tes circuits, retrouve ton projet, ouvre-le et relance-le.

Montre qu’il fonctionne encore. Si tu ne le retrouves pas, demande une aide avant de créer un nouveau circuit : nous reprendrons celui-ci au prochain cours.
