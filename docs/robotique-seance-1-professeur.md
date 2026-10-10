# Faire agir un circuit — guide professeur en préparation

Séance 1 du stage robotique KidnKod, RB01 + RB02, deux heures avec pause. À lire avec la [spécification](specification-robotique-seance-1.md) et la [fiche élève](robotique-seance-1-eleve.md).

**Vérification partielle dans Tinkercad.** Le montage D8 / 220 Ω / LED externe et les deux états LOW / HIGH ont été essayés. Le départ pour la première leçon permanente est partagé par lien ; le prototype de clignotement 3 s / 3 s reste privé. Voir la [recette et ses limites](recette-tinkercad-premiere-lumiere.md). Les supports et l’accès élève de cet atelier, les durées prévues et la reprise en classe restent à confirmer avant distribution.

## Objectif et diagnostic d’entrée

Faire relier montage et programme, puis modifier une durée avec une prévision. Aucune maîtrise préalable de Scratch ou de l’électronique.

Diagnostic bref : l’élève sait-il repérer la page, sélectionner un objet et lire une consigne courte ? Distinguer une difficulté de souris d’une difficulté de compréhension. Demander « que faudrait-il pour allumer cette lumière ? » sans exiger de vocabulaire technique préalable.

Pas de visite de toute l’interface. Nommer seulement composants, connexions, simulation et zone de code utiles aujourd’hui.

## Préparation de l’enseignant, différée

- Accès de classe, départ élève, copie partielle et exemple professeur disponibles et vérifiés dans le contexte réel.
- Circuit de découverte court, un montage principal réutilisable au jour 2, sans plaque d’essai obligatoire.
- LED externe clairement désignée ; sortie du montage identique à celle des blocs.
- Résistance et polarité contrôlées ; pas de programme par défaut commandant une autre LED.
- Procédure réelle de répétition relevée. Expliquer le cycle automatique si l’environnement le fournit ; ne pas inventer un bloc « répéter » visible.
- Unités des attentes connues et modèle de trois cycles vérifié.
- Procédure de sauvegarde/reprise et aide de dépannage prête.

Ces éléments sont une liste de travail, pas une recette déjà effectuée ni des actions demandées maintenant à l’utilisateur.

Pour la connexion accompagnée de RB01, le départ partagé reste complet. Dans la copie personnelle, simulation arrêtée, montrer et noter les deux bornes d’un seul fil avant de l’ouvrir. L’élève le restaure et explique son rôle avec une aide adaptée ; vérifier avant de relancer sans changer résistance, polarité ou autres fils. Cette manipulation dans l’accès élève réel est à vérifier et documenter dans R01 : les essais antérieurs LOW/HIGH ne la valident pas.

## Conducteur proposé — 120 minutes

| Temps | Activité | Observation recherchée |
| --- | --- | --- |
| 0–10 | Accès, diagnostic, nom du projet | Chacun peut travailler ou recevoir une aide |
| 10–15 | Circuit de découverte : prévoir, ouvrir/restaurer une connexion | Chemin complet, LED et résistance repérés |
| 15–50 | Montage principal, connexion complétée tôt, essais Éteindre/Allumer puis lecture du cycle | Première manipulation utile dès que l’accès le permet ; changement d’état observable |
| 50–60 | Pause hors écran | Aucun travail exigé pendant la pause |
| 60–80 | Modèle complet puis action manquante sur copie | Prévision et choix de l’extinction |
| 80–95 | Défi « deux secondes allumée » | Une seule durée modifiée avec explication |
| 95–110 | Enregistrement, retour à la liste, reprise ; marge technique | Projet retrouvé et relancé |
| 110–120 | Bilan court, question de transfert puis annonce de la reprise | Une connexion et une attente expliquées ; nouvelle durée éteinte prévue |

Fractionner les phases en consigne courte → manipulation → essai. Ne pas faire vingt-cinq minutes de démonstration continue. Le temps du modèle et du défi peut être réparti autrement si la manipulation prend plus longtemps. Supprimer le bonus en premier ; conserver essai, pause et sauvegarde.

## Paroles de découverte proposées

« Aujourd’hui, nous ne fabriquons pas encore un robot. Nous allons apprendre à commander une lumière. Ce que nous comprendrons nous servira pour les moteurs plus tard. »

« Voici le chemin entre les composants. Avant de simuler : si ce fil manque, que prévois-tu ? Regardons, puis restaurons le circuit. »

« La résistance n’est pas une décoration. Nous la gardons pour protéger le montage ; nous ne calculons pas sa valeur aujourd’hui. »

« La carte a une sortie que notre programme commande. Montre-la dans le montage et dans l’action. Si les deux ne correspondent pas, nos instructions ne commandent pas la bonne lumière. »

« Allumer change l’état. Attendre garde le programme à cette étape ; cela n’éteint pas la LED. Quelle action lui demande ensuite de s’éteindre ? »

« Lisons un cycle et son retour au début. Tu n’as pas besoin de recopier du texte de programmation pour comprendre les quatre actions. »

## Questions et réponses attendues

| Question | Réponse acceptable |
| --- | --- |
| Quelle lumière observes-tu ? | La LED externe reliée à la sortie, pas seulement un témoin sur la carte |
| Pourquoi garder la résistance ? | Pour limiter le courant et protéger le montage ; pas pour choisir le rythme |
| Pourquoi un fil manquant peut-il empêcher l’allumage ? | Le chemin n’est plus complet |
| Pendant l’attente après Allumer, quel est l’état ? | La LED reste allumée |
| Si j’allonge cette attente, qu’est-ce qui change ? | Le temps allumé, sans allonger automatiquement le temps éteint |
| Pourquoi le clignotement continue-t-il ? | Le cycle est répété ; l’attente seule ne fait pas recommencer |
| Si les quatre actions n’étaient exécutées qu’une fois ? | Une alternance, puis la LED resterait dans le dernier état commandé ; c’est une prévision, pas un essai annoncé comme prêt |
| Changer le câblage est-il nécessaire pour changer le rythme ? | Non, on change la durée dans le programme |

Accepter une explication avec des gestes ou en montrant les actions. Ne pas exiger « anode », « cathode », « HIGH » ou « LOW » comme mots à réciter. Les noms de bornes servent à construire et vérifier, pas à classer les enfants.

## Activités et aides graduées

### Construction accompagnée

Laisser l’élève suivre et compléter au moins une connexion du montage principal. Si la souris bloque, réaliser une partie du geste tout en lui faisant indiquer les bornes. Noter l’aide de manipulation ; elle ne prouve ni n’invalide à elle seule la compréhension.

Faire prévoir puis essayer séparément Éteindre et Allumer avant le cycle. Ne changer que l’action sur le même montage, sans attendre de l’élève une nouvelle construction. Une LED déjà allumée ou reliée à une alimentation permanente ne démontre pas que la sortie est commandée. Si les deux états ne se distinguent pas, résoudre le problème avant les attentes.

Présenter quatre actions avec une flèche de retour au début, pas une cinquième instruction Recommencer. Le schéma de lecture ne préjuge pas des blocs visibles dans l’interface ; la représentation de la répétition sera fixée lors de la recette.

### Exemple partiel

Circuit et sortie inchangés. Retirer une action d’extinction sur une copie ; demander de compléter le cycle avant de simuler. Gradation : faire lire le résultat visé ; repérer la première attente ; demander l’état voulu ensuite ; proposer Allumer/Éteindre comme choix si nécessaire. Revenir au modèle puis refaire le choix, plutôt que distribuer immédiatement la solution.

### Défi indépendant

Contrainte commune : deux secondes allumée et une seconde éteinte. L’élève montre l’attente à modifier, prévoit l’effet puis essaie. Aides : retrouver Allumer ; montrer l’action suivante ; comparer les deux durées ; enfin accompagner la modification puis demander une nouvelle explication.

Différenciation : fiche lue avec l’élève, montage préconnecté, quatre actions déjà disposées ou modèle accessible pour revoir. Pour les plus rapides : nouveau rythme à une seule valeur modifiée, pas nouvel ensemble de notions.

## Erreurs fréquentes et accompagnement

| Symptôme | Enquête progressive |
| --- | --- |
| Rien ne s’allume | Vérifier simulation lancée et LED visée ; comparer broche du programme et du montage ; suivre les connexions puis la polarité avec les libellés ; reprendre le montage accompagné si nécessaire |
| Une lumière clignote sur la carte, mais pas la LED externe | Distinguer les deux lumières ; retrouver un éventuel programme par défaut ; vérifier que la commande vise bien la sortie câblée |
| LED toujours allumée | Vérifier qu’elle n’est pas reliée à une alimentation permanente ; chercher l’extinction sur la même broche ; observer où le cycle revient au début |
| Alternance trop rapide pour être vue | Faire nommer chaque attente ; contrôler son unité et sa valeur ; revenir aux durées du modèle ; ne pas demander d’imaginer un résultat invisible |
| Mauvais temps allongé | Faire associer chaque attente à l’état commandé juste avant ; garder l’autre durée fixe ; prévoir un cycle puis refaire l’essai |
| Avertissement sur un composant | Arrêter ; vérifier résistance, unité et connexions ; ne pas supprimer la résistance ou ignorer l’avertissement pour avancer |
| Projet introuvable | Vérifier la classe, le nom et l’accès utilisé ; accompagner le retour à la liste ; conserver ce qui existe avant de proposer une base de reprise |

Ne pas provoquer de surcharge ou de composant endommagé pour « montrer une panne ». Pour la démonstration de chemin ouvert, déconnecter seulement un fil sur la copie préparée, simulation arrêtée, puis le restaurer.

## Bilan sans validation automatique

Faire montrer une connexion, lire les quatre actions, expliquer une attente et montrer la modification du défi. Consigner, si utile, prévision / observation / explication / aide reçue. Ne pas conclure à la compréhension à partir d’une LED copiée, d’une activité cochée ou d’un projet partagé.

Question courte sans indice initial : « Une seconde allumée et deux secondes éteinte : que changerais-tu ? » Laisser montrer et expliquer l’attente après Éteindre, puis aider si nécessaire. Pas de deuxième projet ni de réussite obligatoire sans aide. La LED reste dans le dernier état commandé pendant l’attente ; l’attente ne commande pas elle-même un état.

Si un point reste difficile, proposer une reprise ciblée au début du prochain cours. Le bouton du jour 2 s’ajoutera à ce montage : conserver le circuit, son nom et la commande de LED, pas seulement une capture.

## Limites et prochaine préparation

Ce guide est corrigé après revue documentaire. Les projets et captures restent à préparer et vérifier lors de la recette différée ; aucune validation technique n’est revendiquée.

Références techniques et liste de recette : voir la spécification. La revue transversale conserve la structure de cette séance. La [séance 2](specification-robotique-seance-2.md) et les jours suivants sont rédigés et corrigés après revue.
