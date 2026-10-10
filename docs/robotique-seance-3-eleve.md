# Piloter un robot — fiche élève en préparation

**Mise à jour du 9 octobre :** les leçons autonomes sont intégrées au site avec fichiers et captures ; voir la [recette](recette-makecode-robot.md). Cette fiche historique reste un support de préparation à adapter avant distribution : sauvegarde et fiabilité des relances dans le navigateur de cours restent à vérifier. Les activités sont virtuelles, sans robot à acheter.

## Ton objectif

Faire avancer, tourner et arrêter un robot. Puis modifier son trajet en prévoyant le résultat.

## 1 — Découvrir MakeCode

Nous utilisons une autre carte programmable, la micro:bit. Repère avec le professeur les blocs et le simulateur.

**Je prévois :** après un appui sur A, que restera-t-il affiché si je ne touche plus aux boutons ?

**Je fais :** dans `Mes-images`, prépare A → une image et B → une autre. Essaie A, attends, puis essaie B avec le geste montré par le professeur.

**Je vérifie :** l’image reste jusqu’à une nouvelle commande. Ici, l’appui déclenche une action. Au jour 2, le programme relisait le bouton et commandait aussi l’extinction après le relâchement.

## 2 — Avancer puis arrêter

Ouvre `Mon-trajet`. Garde au début la préparation du robot et repère la commande Arrêter déjà fournie. Dans ce projet, le démarrage lance le trajet ; A et B ne pilotent pas les moteurs.

Schéma de lecture : **préparer → avancer pendant une courte durée → arrêter → fin.**

**Je prévois :** quand le robot commencera-t-il à avancer ? Quelle commande l’arrêtera ?

**Je fais :** ajoute l’avance avant Arrêter, avec les réglages indiqués. Lance la simulation.

**Je vérifie :** le robot avance puis reste immobile. La fin de la durée permet de passer à la commande suivante ; nous gardons Arrêter pour immobiliser les moteurs.

## 3 — Ajouter un virage

**Je prévois :** de quel côté le robot tournera-t-il ? Montre son avant.

**Je fais :** arrête la simulation et remets le robot au départ avec le professeur. Ajoute un virage entre avancer et arrêter, puis relance.

**Je vérifie :** le robot avance, change de direction puis s’arrête. Il ne recommence pas tout seul. Nous cherchons un virage visible, sans angle exact à atteindre.

## 4 — À toi : changer le trajet

Garde `Mon-trajet` et crée la copie `Mon-trajet-perso` avec aide. Objectif : **commencer le virage plus près du départ que dans le modèle**, puis s’arrêter.

**Je prévois :** propose un seul réglage à modifier et explique l’effet attendu. Garde la puissance, le virage et l’arrêt du modèle.

**Je fais :** modifie ce réglage. Prépare la même position et la même orientation de départ, puis essaie. Arrête toujours la simulation avant de replacer le robot.

**Je vérifie :** compare le début du virage au modèle. Ajuste si nécessaire, puis refais un essai depuis le même départ.

Indice si nécessaire : cherche la durée de la ligne droite. Que se passerait-il si elle était plus courte ?

## Approfondissement facultatif — La puissance

Si le travail principal est terminé, observe les deux essais en ligne droite du professeur.

**Je prévois :** avec une autre puissance et la même durée, le robot parcourra-t-il autant de chemin ?

**Je fais :** regarde les essais depuis le même départ. Seule la puissance change.

**Je vérifie :** explique ce qui change dans le déplacement. Ce réglage commande les moteurs ; ce n’est pas une mesure de vitesse. Ton projet personnel reste disponible pour la sauvegarde.

## Les essentiels et la sauvegarde

- Je montre le lancement, les mouvements et l’arrêt final.
- Je prévois l’effet d’un réglage et compare depuis le même départ.
- Je sais que notre séquence ne recommence pas seule.

Question de fin : après l’arrêt, comment rejouer le trajet dans les mêmes conditions ?

Arrête la simulation. Avec le professeur, sauvegarde les projets `Mes-images`, `Mon-trajet` et `Mon-trajet-perso`, puis retrouve ton trajet. Conserve une copie récupérable hors du navigateur selon ses indications, sans données personnelles ni publication publique.
