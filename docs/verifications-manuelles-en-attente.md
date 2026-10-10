# Vérifications manuelles en attente

À la demande de l'utilisateur, ces actions sont mises de côté pour être rappelées lorsqu'il demandera les vérifications restantes. Aucun rappel programmé. Aucune case n'est validée par les tests techniques.

Procédures détaillées : [protocoles des vérifications manuelles](protocoles-verifications-manuelles.md). Chaque contrôle comporte préparation, gestes, attendu, preuve et critère de réussite ; relever aussi date, environnement, aides et statut. Les IDs R01–R14 couvrent la robotique, G01–G07 GDevelop, P01–P08 Python, W01 le Web et E01–E02 l’espace professeur. Les listes ci-dessous restent le registre historique ; une case n’est pas cochée par la seule rédaction du protocole.

RB07/RB08 : [pages, guides et nouveaux fichiers intégrés en préparation](integration-robotique-capteurs.md), **pas prêts à distribuer**. Ajouter R14 (nouveaux fichiers et lancement) à R10–R12 (placements, approche, seuil). Les essais historiques A/B ne valident pas le lancement de ces références ; conserver la réserve tant que le placement n’est pas reproductible.

RB09/RB10 : [pages, guides et fiche commune intégrés en préparation](integration-robotique-missions.md). **R15** complète les IDs R01–R14 : recette des trois scènes, deux missions au choix, comparaison équitable et reprise du projet. Non effectuée ; scènes et valeurs encore à préparer. Affichage de la fiche HTML contrôlé ; téléchargement dans le navigateur de cours, ouverture locale et impression réelle restent à vérifier. Aucun contrôle immédiat demandé à l’utilisateur.

## GDevelop - recette du premier lot (non effectuée dans le moteur)

- [ ] Relever version, langue et OS ; vérifier création vide et sauvegarde locale sans compte. Ne pas installer le logiciel sans accord séparé.
- [ ] GD01 : extraire le kit dans un nouveau dossier ; importer personnage.png, créer une seule instance, comparer deux positions dans deux aperçus ; enregistrer, fermer et rouvrir jeu.json avec l'image et la dernière position.
- [ ] GD01 : copier tout le dossier (source + images), ouvrir la copie et tester son aperçu ; conserver l'original intact.
- [ ] GD02 : un objet Jeton, trois instances ; prévoir/comparer déplacement individuel et image commune avant X/Y. Compléter un remplacement d'image, varier une coordonnée puis choisir quatre placements visibles/espacés. Retirer une instance sans supprimer l'objet.
- [ ] GD03 : Texte visible avant événements ; Espace maintenue → afficher ; même condition inversée → masquer. Relever le geste d'inversion et les libellés français. Tester repos, maintien, relâchement, deux fois, avec focus dans l'aperçu.
- [ ] GD03 : premier essai clavier avec la paire complète, pas Afficher seule. Retirer Masquer sur une copie, prévoir/observer puis restaurer. Compléter le modèle F avec l'action manquante et tester ; choisir ensuite son indice et une commande inutilisée, vérifier ancienne/nouvelle touche. Bonus sur copie : échanger les actions et retester.
- [ ] Observer avec un élève la distinction objet/instance et sa prévision avant essai ; noter les aides d'interface séparément de la compréhension. Aucun acquis ne découle des cases cochées.

Le kit et les trois leçons/guides existent dans CodeCraft. Tests du catalogue et du rendu réussis ; ils ne valident pas ces gestes dans GDevelop. Les fichiers de projets prêts à importer sont différés jusqu'à cette recette.

### GD04 — recette moteur en attente

La [leçon de déplacement](specification-gdevelop-gd04.md) et son guide sont intégrés dans le site, après GD01. Tests du site réussis, mais aucun déplacement dans GDevelop essayé. Recette à faire avant de présenter les réglages comme prêts à utiliser en cours.

- [ ] Relever les libellés français et valeurs du comportement vu du dessus ; contrôles aux flèches, rotation et diagonales désactivées, accélération/décélération positives.
- [ ] Tester quatre directions, relâchement et arrêt, focus et retour après sortie du cadre ; comparer deux vitesses depuis le même départ sans modifier les autres paramètres. Confirmer ou adapter les valeurs provisoires 120/240 avant publication.
- [ ] Tester adaptation guidée d'un réglage, trajet centre → zone choisie → centre, sauvegarde/réouverture et bonus diagonales sur copie ; vérifier la conservation des jetons et du message pour les projets ayant déjà GD02/GD03.

## Python - priorité à la prochaine recette

- [ ] Relire visuellement les trois dernières leçons et leurs guides : fonctions, return et quiz. Vérifier les consignes, les deux bonus distincts et la navigation à un zoom habituel.
- [ ] Dans Thonny : créer, enregistrer, fermer, rouvrir et relancer un fichier ; vérifier qu'une copie ne remplace pas l'original.
- [ ] Répondre dans la console, valider avec Entrée et utiliser Arrêter / redémarrer. Relancer le fichier entier dans un état propre.
- [ ] Module fonctions : définition seule, un puis deux appels du corps de deux instructions ; arguments différents/inversés ; diagnostic TypeError dans une copie ; création personnelle.
- [ ] Module return : affichage versus valeur renvoyée, None, deux résultats réutilisés, noms locaux distincts puis identiques et NameError intentionnel dans une copie ; règle personnelle renvoyant 1 ou 0.
- [ ] Quiz : question isolée, comparaison exacte puis texte préparé ; un seul appel compté, puis exactement trois ; parties avec scores 3, 0 et mélange incluant vide, casse et espaces.
- [ ] Quiz : changer une question et sa réponse attendue dans une copie ; tester nouvelle/ancienne réponse. Vérifier séparément quatrième question et message juste/faux placé avant return.
- [ ] Échantillonner les projets précédents : conversation, aventure et nombre mystère. Vérifier reprises, sauvegardes, bornes, compteur et arrêt effectif dans Thonny.
- [ ] Observer avec des élèves : compréhension avant indice, autonomie sans modèle complet, temps consacré aux fichiers, modifications et explications personnelles. Noter les aides reçues plutôt que déduire un acquis des cases.

Les vingt modules sont implémentés et relus ; leur efficacité en classe et les manipulations réelles de Thonny ne sont pas encore validées.

## Robotique — Ma première lumière

Le montage D8 / résistance 220 Ω / LED externe et les deux états LOW / HIGH ont été essayés dans Tinkercad. Le départ est partagé par lien et relié à la leçon ; le prototype professeur de clignotement reste privé. Voir la [recette](recette-tinkercad-premiere-lumiere.md).

- [ ] Avec un accès élève distinct : ouvrir le modèle, créer une copie, compléter la connexion repérée et préparée par le professeur (nouvelle consigne RB01), expliquer son rôle, vérifier LOW/HIGH, sauvegarder, quitter et reprendre sa copie sans modifier le modèle. Voir R01 pour bornes, étapes et preuves ; manipulation non validée par la rédaction.
- [ ] Sur une copie professeur : montrer un fil interrompu, simulation arrêtée pendant la modification, puis restaurer et vérifier le montage.
- [ ] Confirmer l’accès de classe utilisé en cours et observer une prévision puis une explication de l’élève, séparément de son aisance avec la souris.

## Robotique — Programmer un signal

La deuxième leçon et son guide sont intégrés. Les blocs 1 / 1, la modification 2 / 1 et le retrait/restauration de LOW ont été essayés sur une référence professeur privée ; voir la [recette](recette-tinkercad-signal.md).

- [ ] Avec l’accès élève réel : copier le départ, déplacer LOW dans forever, construire le cycle puis sauvegarder et rouvrir Mon-signal.
- [ ] Créer Signal-a-completer sans modifier Mon-signal ; retirer seulement LOW puis le restaurer entre les attentes.
- [ ] Observer trois cycles complets, comparer 1 / 1 à 2 / 1 et faire expliquer l’état conservé pendant chaque attente, sans déduire un acquis du seul clignotement.
- [ ] Observer le transfert oral vers 1 / 2 et la reprise d’un rythme personnel enregistré.

## Robotique — Bouton et choix entre deux actions (RB03 / RB04)

Diagnostic D2 et références principale/inversée essayés dans le compte professeur ; départs à relier et préconnecté créés. Les cinq ressources sont partagées par lien et les deux leçons avec guides sont intégrées au site. Voir la [recette](recette-tinkercad-bouton.md). Cela ne valide pas l’accès élève réel ni le maintien prolongé observé en continu.

- [ ] Après autorisation du partage : vérifier depuis l’accès élève les départs, leurs copies, sauvegardes et reprises sans modifier les modèles ni Mon-signal.
- [ ] Compléter seulement D2 → Terminal 2a, simulation arrêtée ; vérifier le maintien et le relâchement dans cet accès. Utiliser la base préconnectée si nécessaire.
- [ ] Observer en continu deux cycles repos → maintien prolongé → relâchement dans les deux règles ; la référence principale ne doit pas clignoter pendant le maintien. Les captures automatisées ne valident pas à elles seules toute la durée.
- [ ] Faire prévoir et expliquer entrée / question / deux actions ; montrer pourquoi « toujours maintenu » choisit encore la même branche. Noter les aides séparément des acquis.
- [ ] Avant la règle complète et l’assemblage, utiliser le schéma avec l’action sinon manquante ; vérifier la prévision après construction sans casser le modèle. Relier les lectures 0/LOW et 1/HIGH aux états de D2. Conserver Mon-bouton et Mon-bouton-inverse distincts.

## Robotique — micro:bit et trajet (RB05 / RB06)

Leçons et guides intégrés ; fichiers réels exportés ; départ et trajet complet réimportés. A/B puis avance, virage et arrêt observés. Recette partielle : [MakeCode](recette-makecode-robot.md). Le navigateur intégré a signalé l’auto-sauvegarde indisponible et certains essais courts ont montré peu de mouvement. Ce n’est pas une validation de séance.

- [ ] Navigateur de cours : menus et blocs français, chargement acceptable, A / attente / B et images conservées.
- [ ] Retrouver principal et copie personnelle par fichiers .hex distincts, réimporter puis tester. Vérifier la sauvegarde locale seulement si utilisée ; elle ne remplace pas l’export externe.
- [ ] Observer avance puis arrêt, puis avance/virage/arrêt deux fois ; vérifier que Restart remet le même départ et orientation. Si mouvement incohérent, traiter comme problème du simulateur, pas erreur élève.
- [ ] Défi : prévision avant indice, un seul réglage de durée modifié, deux essais comparables et arrêt conservé. Noter manipulation aidée séparément du raisonnement.
- [ ] Facultatif seulement après recette dédiée : démonstration professeur de deux puissances en ligne droite, même durée/départ ; aucune suppression du virage élève.

RB07/RB08 : voir la [recette capteurs](recette-makecode-capteurs.md) du 9 octobre : distance variable, détecteurs de ligne et premier arrêt selon distance observés. Les placements souris, la répétabilité des scènes et la distribution élève ne sont pas validés. Protocoles détaillés R10–R12 ; ce qui reste techniquement réalisable par l’agent n’est pas automatiquement délégué à l’utilisateur.

## Autres vérifications déjà mises de côté

- [ ] Web Avancés : revue manuelle de « Ma collection de cartes », sur ordinateur et fenêtre étroite ; ajout d'une carte et changement de direction. Le Web reste en pause, voir section 20 de la roadmap pédagogique.
- [ ] Espace professeur : les sélecteurs natifs, autorisations Windows et synchronisation du fichier avec Drive ne sont pas couverts par les tests qui simulent les sélecteurs. Utiliser une copie de test, pas le fichier réel de suivi, lors d'une future recette.

## Ce qui n'est pas une action manuelle à déléguer à l'utilisateur

Le test de l'archive historique professeur est corrigé : il contrôle désormais ses styles historiques embarqués, sans exiger les CSS actuels du site. L'archive figée reste inchangée et ne doit pas être actualisée automatiquement pour faire passer le test. Les campagnes automatisées et la préparation d'un commit relèvent du travail technique ; créer le commit exige un accord distinct.
