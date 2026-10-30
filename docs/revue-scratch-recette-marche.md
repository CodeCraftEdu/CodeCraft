# Revue : Animer une marche

Statut historique : le modèle long examiné ici a été remplacé à la demande de l’utilisateur par une pile courte et deux indications discrètes. Voir le [format actuel du carnet](cadrage-recettes-scratch.md). Les recommandations ci-dessous ne doivent pas réintroduire un cours dans les recettes.

Date : 29 octobre 2026. Périmètre : première fiche du carnet, réutilisation dans un jeu existant, explications et rendu. Aucune correction du cours appliquée pendant cette revue.

Suite de la revue : les deux P2 et le P3 ont été corrigés dans les textes de la fiche. Les prérequis précisent aussi le pilotage continu ; le lien existant sert au rappel de x et des flèches. Le script reste celui du modèle initial. L’essai dans l’éditeur Scratch demeure à effectuer.

## Conclusion

Deux corrections de priorité P2 sont nécessaires avant de considérer cette fiche comme un modèle de recette autonome. Le mécanisme de comparaison de positions est cohérent pour une scène fixe et ses limites principales sont annoncées. La séparation entre mouvement et apparence est expliquée correctement.

## P2 : adapter aussi le nom écrit dans la comparaison

Fichier : `content/modules/jeux-video/scratch-recette-marche.json`, lignes 28 et 37, comparaison aux lignes 125 à 136.

La fiche autorise à conserver les noms de costumes du jeu et demande de les sélectionner dans les menus. Elle demande ensuite explicitement d’écrire `marche-a` dans la comparaison. Cette valeur est un texte saisi, pas un menu qui suivrait le choix du costume.

Cas concret : l’élève conserve `chat-a` et `chat-b`, les sélectionne dans tous les blocs de changement de costume, mais copie la comparaison `nom du costume = marche-a`. Celle-ci est toujours fausse ; la branche qui affiche le second costume n’est jamais utilisée. Le personnage reste sur le premier costume pendant ses déplacements.

Correction : préciser que le nom du premier costume doit aussi être recopié dans le champ texte de la comparaison. Ajouter ce point au dépannage. Vérifier la recette avec des noms différents de ceux du modèle.

## P2 : annoncer la compatibilité avec les autres animations du jeu

Fichier : `content/modules/jeux-video/scratch-recette-marche.json`, ligne 36 et branche de repos aux lignes 167 à 177.

La consigne traite le remplacement d’une ancienne animation de marche. Elle ne traite pas les costumes de saut, d’attaque ou de fin de partie. Or la nouvelle boucle réaffiche l’un de ses deux costumes à chaque comparaison, même lorsque le personnage ne se déplace plus.

Cas concret : un script de défaite affiche un costume « blessé » et arrête uniquement les commandes. La boucle d’animation continue et remplace ce costume par la pose de repos. Le même conflit existe avec une animation de saut.

Correction proportionnée : indiquer dès les prérequis que cette première recette convient à un personnage dont elle gère les costumes pendant l’exécution. Si le jeu possède déjà plusieurs états d’animation, expliquer que la pile doit être raccordée à ces états et que le modèle fourni ne couvre pas ce raccord. Ne pas demander de supprimer les autres animations. Une variante avec états pourra être traitée séparément.

## P3 : préciser le retour au repos

Fichier : `content/modules/jeux-video/scratch-recette-marche.json`, ligne 193.

La phrase « Après un arrêt, la pose de repos revient à la comparaison suivante » est trop catégorique. Si le personnage a bougé pendant la première partie de l’attente, puis s’est arrêté, la comparaison suivante détecte encore une différence. La pose de repos n’est imposée qu’après un intervalle complet sans changement de x.

Correction : écrire « La pose de repos revient dès que deux positions comparées sont identiques. » Le délai peut couvrir presque deux intervalles d’attente, plus l’ordonnancement de Scratch ; ne pas le présenter comme une garantie de durée exacte. L’allongement à 0.24 rend ce décalage plus visible.

## Points pédagogiques et vérifications

- Le lien vers `scratch-pilotage` rappelle des déplacements par pressions brèves. Ce cours indique explicitement qu’il ne construit pas le mouvement continu attendu par la recette. Présenter ce lien comme un rappel de x et des flèches ; le pilotage continu doit rester un prérequis explicite.
- Les prérequis, la portée locale de la variable, le maintien du pilotage existant et la distinction entre position et costume sont utiles et correctement placés.
- Le carnet ne fournit aucun projet de départ et la navigation ne force aucun ordre entre recettes, conformément à la demande.
- La capture finale à 320 px reste lisible, mais les emboîtements rendent la pile très haute. Ce constat ne justifie pas à lui seul une refonte du rendu commun.
- Réutilisation des résultats précédents : 258 tests Node réussis, suites navigateur réussies et contrôle final de l’affichage élève aux trois largeurs. Aucune suite relancée pour cette revue documentaire.
- Aucun essai réalisé dans l’éditeur Scratch pendant cette revue. Les cas ci-dessus proviennent de la lecture des blocs et de leurs conditions, pas d’une exécution complète du moteur Scratch. La recette manuelle devra couvrir le déplacement, l’arrêt, le redémarrage et les costumes renommés.

## Sources vérifiées

- [Scratch, Make a sprite walk](https://scratch.mit.edu/help/studio/tips/howto/walking/) : principe de costumes de marche et sens de rotation gauche-droite. Cette aide historique ne valide pas le mécanisme de comparaison de positions propre à CodeCraft.
- [Scratch VM, blocs Apparence](https://github.com/scratchfoundation/scratch-vm/blob/develop/src/blocks/scratch3_looks.js) : `getCostumeNumberName` renvoie le nom du costume courant ; `switchCostume` modifie ce costume. Cela étaye l’analyse du nom saisi et du conflit entre piles. Le fichier a été consulté dans sa version disponible à la date de revue.
- Le guide Raspberry Pi lié dans la fiche a déjà été consulté pendant le cadrage. Sa page ciblée dépend de JavaScript lors de cette nouvelle lecture ; aucune nouvelle affirmation n’est fondée sur un contenu qui n’a pas pu être relu.
