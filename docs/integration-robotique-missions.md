# RB09/RB10 — intégration et fiche de préparation des scènes

Intégration du 9 octobre, état consolidé au 10 octobre 2026. Pages `robotique-mission` et `robotique-tests`, deux guides et [fiche commune imprimable](../resources/robotique/fiche-mission-robot.html) intégrés **en préparation**, conformément à la [spécification ajustée](specification-robotique-rb09-rb10.md). Recette pratique partielle effectuée : variantes 15/25 testées et réimportées, résultats ci-dessous. Comparaisons équitables et utilisation en cours restent à vérifier ; ne pas confondre supports intégrés et parcours entièrement validé.

## Ressources et pédagogie

### Clôture des répétitions professeur — 10 octobre

À la demande de l’utilisateur, arrêt des répétitions 15/20/25. La comparaison géométrique stricte est facultative et reportée, sans validation fictive des lignes restantes. Les résultats observés suffisent au bilan du fonctionnement de base ; les accès élèves, l’utilisation pédagogique et la fiche locale/imprimée restent distincts. Cette décision remplace les suites proposées dans les paragraphes historiques ci-dessous. Fiche ouverte sur HTTP et rendu à l’écran vérifié à nouveau : titre, consignes, zones de réponse et bouton d’impression présents. Ni ouverture locale ni impression réelle confirmées dans le navigateur intégré. [Bilan opérationnel](bilan-robotique-preparation.md).

### Suite autonome après le contrôle proche à 25 — 10 octobre

Maintien immobile à 7 après relâchement de A confirmé par l’utilisateur (bf3b1891), désormais repris dans les guides, archives, roadmap et registre. Nouvelle tentative autonome de placement : glisser refusé avant envoi par le contrôle des coordonnées fractionnaires du cadre MakeCode ; aucun départ à 26 ni nouveau test moteur attesté. [Relevé comparatif](recettes-robotique/comparaison-seuils.md) préparé, deux reprises par valeur, lignes encore non effectuées. Vue temporaire 1280 × 720 retirée ; projet MakeCode conservé à seuil 25.

Serveur local relancé sur 127.0.0.1:8000. Rendu RB08 vérifié : décision dans la seconde boucle après l’attente de A, initialisation de seuil avant cette attente. Rendu RB07 vérifié : réimport du programme puis nouvelles lectures, sans prétendre retrouver les anciennes mesures. Guide RB10 rendu avec le maintien proche confirmé. Fiche HTML, référence variable 20 et nouveau relevé répondent HTTP 200 ; ceci ne valide pas téléchargement, ouverture locale ou impression. Statut R15 corrigé dans les protocoles : partiellement effectué. Suite complète : 145 tests réussis, aucun échec ; contrôle whitespace sans erreur. Comparaison à placements identiques, répétitions, accès de cours et fiche locale/imprimée restent ouverts.

### Contrôle de la fiche — 10 octobre 2026

Serveur local relancé sur 127.0.0.1:8000. RB09 et RB10 chargés dans le navigateur intégré : leurs liens renvoient tous deux à `resources/robotique/fiche-mission-robot.html`. Attribut de téléchargement RB09 contrôlé : `fiche-mission-robot.html`. Ouverture HTTP de la fiche réussie : titre, mission, tableau A/B/C, consignes et bouton Imprimer présents. Consigne obsolète « Arrête avant tout placement » corrigée : simulation active avec moteurs arrêtés pendant l’attente de A, placement puis appui ; arrêt avant intervention après lancement. Test de non-régression ajouté.

Limites : clic de téléchargement et récupération via le lien n’ont pas fourni de fichier confirmé (délais dépassés, aucun fichier correspondant trouvé dans Downloads). Le navigateur intégré interdit les URL `file:` : ouverture locale non testée, sans contournement. Clic Imprimer tenté, sans aperçu obtenu ; règles CSS A4/14 mm, masquage des commandes et protection du tableau contre les coupures présents dans le source, mais pagination et impression réelle non validées. Capture visuelle indisponible pendant ce contrôle. R15 conserve ces réserves.

Vérification restante dans un navigateur classique : depuis RB09 puis RB10, télécharger la fiche sous deux noms distincts ; comparer les contenus ; ouvrir le HTML téléchargé sans serveur et vérifier tableau/consignes. Ouvrir l’aperçu A4, contrôler toutes les pages (aucun texte tronqué, tableau entier, commandes masquées), puis annuler sans imprimer ou enregistrer un PDF de preuve. Sur une fiche HTML téléchargée seule, le lien relatif Parcours Robotique ne fonctionne pas hors du site ; il n’est pas nécessaire à l’exercice.

Finitions de la revue transversale du 9 octobre : reprise conditionnelle du seuil dans RB09 avant le choix de mission si la modification RB08 a été différée ; prévisions individuelles RB10 avant indices et exécution ; conditions B/C neutres sur la fiche, résultats attendus réservés au guide ; distinction capteur en entrée, actions et moteurs en sortie. Les supports de séance, la spécification, la roadmap et les protocoles sont alignés. Ces corrections éditoriales ne valident aucune nouvelle scène ni manipulation dans le simulateur.

- RB09 : référence montrée avant choix, mission observable, réglage justifié, premier essai A et export avant pause.
- RB10 : même fiche et projet ; confirmation A puis prévision/essai B/C, diagnostic et correction seulement si nécessaire, explication des limites et reprise du fichier.
- Deux missions conditionnelles : prudente, marge plus grande ; approche, marge plus petite avant contact, jamais seuil minimal ou recherche du contact. Valeurs proposées seulement après recette.
- Fiche élève HTML autonome sans stockage, nom complet ou compte ; téléchargement depuis les deux pages, ouverture locale et impression par le navigateur. Une phrase et prévu/observé ; justification/conclusion orales possibles. Si premier A manque, ne pas écrire confirmation fictive.
- Aucun HEX supplémentaire nécessaire à ce stade : reprise variable et référence fixe RB08 déjà exportées/réimportées. Références dans les guides uniquement, aucune solution motrice nouvelle distribuée dans les pages. Une base complète de reprise est légitime après RB08, mais doit être contextualisée.
- Même DA robotique ; quatre étapes et dix modules. RB10 a un retour final au parcours, pas un bouton Accueil supplémentaire. Aucun acquis automatique ni sécurité physique.

## Préparation professeur à compléter après recette

### Reprise du 10 octobre — premiers candidats issus de RB08

L’utilisateur a testé la référence fixe : proche à 7, immobile ; départ éloigné 26 → arrêt 18, avec reprise rapportée et maintien durable de l’arrêt. La référence variable à 20 donne également 26 → 18 ; la variante à 25 donne un arrêt à 23. Les captures et limites de preuve figurent dans la recette capteurs. Ces résultats permettent d’entamer les missions, pas de valider toutes les scènes R15.

Premier candidat : mission prudente, `seuil = 25`, marge observée plus grande que la référence à 20. Copie sauvegardée : [RB09-Mission-prudente-seuil-25.hex](recettes-robotique/RB09-Mission-prudente-seuil-25.hex), archive de recette professeur, non ajoutée comme départ élève. Garder la même règle, puissance 25 et cadence 100 ms. Pour les prochains essais, distinguer le **bouton A** des **situations A/B/C** de la fiche.

Prudente 25 : premier autre-rectangle 25 → 23, puis départ 26 après A confirmé par l’utilisateur, arrêts parfois 22, parfois 23. Capture proche d8856e8d : A enfoncé et mesure 7 visibles. Nouveau contrôle bf3b1891 : l’utilisateur confirme le maintien de l’immobilité à 7 après relâchement de A ; plateau et nouvelles lignes à 7 visibles. Copie prudente réimportée avec blocs retrouvés. Approche préparée séparément en ne changeant que `seuil = 15` : [archive professeur](recettes-robotique/RB09-Mission-approche-seuil-15.hex). Aucune plage continue ni distance d’arrêt exacte annoncée.

Approche 15 : première cible 26 → 13 après A, arrêt sans contact visible (capture cb1d0745). Proche 7, aucun mouvement après A confirmé par l’utilisateur. Autre cible 26 → 13 puis arrêt rapporté. HEX archivé réimporté : nom, blocs, seuil 15, attente de A et paramètres conservés. Restent répétitions/comparaisons équitables et fiche en contexte de cours ; R15 n’est pas entièrement validé.

Date / testeur / navigateur / version / langue : 10 octobre 2026, utilisateur pour les manipulations et agent pour les imports, MakeCode v9.0.12 en anglais dans le navigateur intégré. Recette partielle, pas observation d’apprentissage élève.

Programme de référence : `Reference-arret`, copie de `RB08-Obstacle-fixe-reference.hex`. Reprise : `RB08-Robot-prudent-reference.hex`, copie personnelle renommée. Paramètres hérités : modèle CuteBot, trois aides OFF, puissance 25, limite fixe 20, pause de consultation 100 ms et préparation avant répétition. Ce sont des paramètres de départ, pas une validation des missions. Tout ajustement impose mise à jour des supports et reprise des essais.

| Scène | Intention | Placement / orientation / cible / preuve | Mesures de départ et répétabilité |
| --- | --- | --- | --- |
| A | Avance puis arrêt ; comparaison équitable | Première cible testée ; géométrie identique entre valeurs non attestée | 15 : 26 → 13 ; 20 : 26 → 18 avec attente de A ; 25 : arrêt 23, départ 26 demandé initialement |
| B | Proche sans contact initial | Proche 7, après A confirmé pour 15 et fixe 20 ; à 25, immobilité après relâchement de A confirmée par l’utilisateur (bf3b1891) | Premier maintien proche confirmé pour les trois réglages ; pas de répétition systématique |
| C | Autre cible, départ éloigné | Autre rectangle testé depuis le côté opposé | 15 : 26 → 13 puis arrêt ; 25 : départ 26 confirmé, arrêts 22–23 rapportés ; premier essai 25 → 23 conservé |

Geste de remise au départ utilisé lors des essais humains du 10 octobre : après ▶, placer pendant l’attente du bouton A, simulation active et moteurs arrêtés ; relever la mesure stable puis presser A sans Stop/Restart intermédiaire. Refaire cette préparation après chaque relance/import. La reproduction géométrique exacte reste à contrôler pour les comparaisons. Un HEX conserve le programme, pas la scène. Aucun placement temporisé hérité des prototypes A/B ne vaut placement reproductible.

| Mission | Valeurs réellement autorisées | Résultats A / B / C et répétitions |
| --- | --- | --- |
| Prudente | 25 essayé, aucune plage continue annoncée | A/B/C partiellement documentés ci-dessus ; C depuis 26 confirmé le 10 octobre, arrêts 22–23 |
| Approche | 15 essayé, aucune plage continue annoncée | Trois situations exercées, proche après A confirmé ; répétitions/comparaison équitable restent ouvertes |

Renseigner captures départ/fin, valeurs, conditions et résultats pour chaque valeur distribuée, pas seulement deux exemples. A seul compare à la référence ; C ne démontre pas une marge relative sans comparaison supplémentaire. Observation numérique seule ne prouve pas l’arrêt avant contact. Sauvegarde personnelle et accès élève à vérifier séparément.

## Conditions de distribution et suite

R10–R12 et partie pratique R14, puis [R15](protocoles-verifications-manuelles.md) avant le cours. R13 observe l’explication individuelle en séance ; ne pas cocher ces étapes à partir du seul rendu du site. Si placement bloqué : supports en préparation, raisonnement sur papier possible mais mission non testée. Si approche irréalisable : revoir objectifs/supports, aucune substitution silencieuse.

Routes : `index.html#module/robotique-mission?parcours=robotique-debutants`, `index.html#module/robotique-tests?parcours=robotique-debutants`. Guides : `prof.html#guide/robotique-mission`, `prof.html#guide/robotique-tests`.

## Contrôle d’intégration

Contrôle complémentaire du 10 octobre après consolidation : routes `prof.html#guide/robotique-mission` et `prof.html#guide/robotique-tests` ouvertes sans Espace CodeCraft ni données de classe. Les résultats 15/20/25 et leurs réserves sont présents dans les guides rendus ; les copies réimportées ne sont plus présentées comme non vérifiées. RB10 distingue la preuve d’appui proche à 25 du maintien après relâchement encore non explicitement confirmé. Lien du guide RB10 vers `index.html#module/robotique-tests?activite=situations` et consigne cible contrôlés : placement simulation active pendant attente de A, lancement sans relance intermédiaire, arrêt avant intervention. Liens vers fiche et références présents. Aucun débordement horizontal détecté sur les deux guides à 1280 et 390 px ; leçon RB10 également contrôlée à 390 px. Pas de donnée de classe créée/modifiée, aucun test moteur supplémentaire ni validation d’impression. Aucune correction de rendu nécessaire sur les vues contrôlées.

Historique du 9 octobre : 143 tests automatisés réussis, aucun échec. Pages RB09/RB10, étape 4, deux guides et fiche HTML ouverts dans le navigateur. Thème robotique conservé ; retour final RB10 → parcours vérifié ; trois lignes de fiche et absence de débordement horizontal à la largeur observée. Version du script de rendu actualisée pour éviter l’ancienne navigation conservée en cache. Le test automatisé de téléchargement n’a pas abouti dans le navigateur intégré : téléchargement, ouverture locale et impression réelle restent dans R15. À cette date, aucun essai de mission ni archive 15/25 ; les sections du 10 octobre décrivent l’avancement ultérieur.

Contrôle autonome du 10 octobre : registre des vérifications restantes consolidé pour retirer les mentions contradictoires « approche non testée », « réimport à faire » et « autre cible depuis 26 à 25 non effectuée ». 45 chemins locaux du catalogue robotique et des trois documents principaux contrôlés, aucun absent. Test ajouté pour les preuves dans les guides, séparation archives professeur / téléchargements élèves, structure des deux HEX et sommes de contrôle de leurs enregistrements. Les lignes vides entre segments des exports sont conservées. Ces tests ne remplacent pas le réimport ni les essais humains. Archives décrites dans [leur notice](recettes-robotique/README.md). Aucun commit ni push.

Résultat final autonome : suite complète `node --test`, **145 tests réussis, zéro échec** ; `git diff --check` sans erreur de whitespace. Aucune mutation des projets MakeCode, des données de classe ou des autres parcours pendant cette consolidation. Les dernières actions non automatisables restent celles du registre : comparaison/répétition à conditions égales, téléchargement/local/impression dans un navigateur classique et utilisation en cours. Conserver le statut en préparation tant que ces conditions de distribution ne sont pas levées.
