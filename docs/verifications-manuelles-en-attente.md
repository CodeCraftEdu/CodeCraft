# Vérifications manuelles en attente

À la demande de l'utilisateur, ces actions sont mises de côté pour être rappelées lorsqu'il demandera les vérifications restantes. Aucun rappel programmé. Aucune case n'est validée par les tests techniques.

Procédures détaillées : [protocoles des vérifications manuelles](protocoles-verifications-manuelles.md). Chaque contrôle comporte préparation, gestes, attendu, preuve et critère de réussite ; relever aussi date, environnement, aides et statut. Les IDs R01–R14 couvrent la robotique, G01–G07 GDevelop, P01–P08 Python, W01 le Web et E01–E02 l’espace professeur. Les listes ci-dessous restent le registre historique ; une case n’est pas cochée par la seule rédaction du protocole.

RB07/RB08 : [pages, guides et nouveaux fichiers intégrés en préparation](integration-robotique-capteurs.md). Fonctionnement de base et reprise de références observés, sans validation complète de l’accès élève. R14 conserve les contrôles de fichiers/lancement ; les comparaisons strictes de R12 sont désormais facultatives. Un placement non conservé se refait pendant l’attente de A, sans prétendre qu’il est sauvegardé dans le HEX. Vérifier toute scène nouvelle avant distribution.

RB09/RB10 : [pages, guides et fiche commune intégrés en préparation](integration-robotique-missions.md). **R15 — état consolidé au 10 octobre** : approche 15 testée sur les deux cibles, 26 → 13 puis arrêt ; proche 7 immobile après A confirmé. Prudente 25 : autre cible depuis 26 après A confirmé, arrêts 22–23 rapportés ; proche 7 immobile après relâchement de A confirmé par l’utilisateur, capture bf3b1891. Les deux copies HEX sont archivées et réimportées avec nom, blocs et réglages retrouvés. Guides rendus et liens contrôlés sur le site. Aucun acquis élève ni validation complète de R15 n’en découle.

Décision du 10 octobre après les derniers essais : arrêter les répétitions professeur. Les comparaisons géométriques strictes et reprises à conditions égales sont un approfondissement facultatif, reporté, pas la prochaine action demandée à l’utilisateur. Le fonctionnement de base est observé ; les marges comparées ne sont pas calibrées. Restent prioritaires : téléchargement/ouverture locale/impression de la fiche dans un navigateur classique, accès et utilisation pédagogique en cours. Ne pas redemander les premiers essais approche ni le départ 26 devant l’autre cible à 25 comme s’ils étaient absents. Les preuves détaillées et leur chronologie sont conservées dans [la recette capteurs](recette-makecode-capteurs.md).

Fiche RB09/RB10, contrôle du 10 octobre : liens des deux leçons et ouverture HTTP vérifiés ; consigne de placement corrigée et protégée par test. Téléchargement HTML non confirmé dans le navigateur intégré ; ouverture locale `file:` interdite ; aperçu d’impression indisponible. Les gestes restant à faire dans un navigateur classique et leurs critères sont documentés dans [l’intégration des missions](integration-robotique-missions.md#contrôle-de-la-fiche--10-octobre-2026). Ne pas cocher téléchargement, ouverture locale ou impression sur la seule présence des liens/CSS.

Suite autonome après confirmation proche à 25 : nouvelle tentative de placement refusée par le contrôle du navigateur sur les coordonnées du cadre de simulation ; aucun nouveau résultat moteur. [Relevé de comparaison 15/20/25](recettes-robotique/comparaison-seuils.md) conservé comme approfondissement facultatif ; ses lignes incomplètes ne sont pas cochées. Le prochain contrôle humain utile porte sur l’accès élève et la fiche, pas sur un nouveau placement à 26. Voir le [bilan de préparation](bilan-robotique-preparation.md).

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

Reprise du 10 octobre : placement humain et mesures stables 20, 8 et 26 rapportés avec captures ; anciennes approches avec arrêts à 17 puis 18 rapportées. L’automatisation du glisser reste bloquée. Les trois HEX RB08 sont adaptés à ▶ → placement immobile avec mesure active → bouton A, sans relance intermédiaire. Ce changement ne valide pas encore les nouvelles approches. À terminer avec les fichiers actuels : cinq lectures au départ, deux approches comparables, maintien 5 s sans contact, scène proche après A, substitution fixe/seuil = 20 et comparaison d’une seconde limite depuis le même départ ; captures de positions, valeurs et résultats. Après Restart/import, refaire le placement pendant l’attente. R10–R12/R14 détaillent ces contrôles ; R15 reste distinct. Un arrêt exactement à 20 cm n’est pas exigé.

## Autres vérifications déjà mises de côté

- [ ] Web Avancés : revue manuelle de « Ma collection de cartes », sur ordinateur et fenêtre étroite ; ajout d'une carte et changement de direction. Le Web reste en pause, voir section 20 de la roadmap pédagogique.
- [ ] Espace professeur : les sélecteurs natifs, autorisations Windows et synchronisation du fichier avec Drive ne sont pas couverts par les tests qui simulent les sélecteurs. Utiliser une copie de test, pas le fichier réel de suivi, lors d'une future recette.

## Ce qui n'est pas une action manuelle à déléguer à l'utilisateur

Le test de l'archive historique professeur est corrigé : il contrôle désormais ses styles historiques embarqués, sans exiger les CSS actuels du site. L'archive figée reste inchangée et ne doit pas être actualisée automatiquement pour faire passer le test. Les campagnes automatisées et la préparation d'un commit relèvent du travail technique ; créer le commit exige un accord distinct.
