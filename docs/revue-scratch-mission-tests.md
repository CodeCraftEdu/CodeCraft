# Revue du chapitre Tests personnels de Mission balises

16 octobre 2026. Revue du [dernier chapitre intégré](integration-scratch-mission-tests.md), de son raccordement à États, de ses essais, de ses sauvegardes et de son guide professeur. Revue demandée en Astra High.

## Verdict

Le chapitre peut être conservé dans sa structure actuelle : vérifier sa base, chercher une panne, comparer un réglage, puis conserver une modification personnelle. La correction de priorité moyenne décrite ci-dessous est appliquée le 16 octobre 2026 : la vérification des pas de 5 contrôle désormais les quatre valeurs dans le fichier rechargé avant l'essai des commandes et des limites. Aucun autre défaut bloquant identifié dans le périmètre examiné.

La revue initiale n'avait pas modifié les consignes. La correction textuelle est maintenant intégrée ; les archives Scratch sont conservées. La reconstruction du parcours complet depuis les seuls supports reste à faire.

## P2 : distinguer les pas de 5 des pas de 4 dans la vérification finale

**Source :** [scratch-mission-tests.json](../content/modules/jeux-video/scratch-mission-tests.json), `recette-finale/regle`, avec l'aide `verification-variation/repere-commandes`.

La consigne finale présente « quatre directions et bornes » comme l'essai qui distingue la règle personnelle de la base. Or les pas de 4 de la base et les pas de 5 demandés déplacent tous deux Pilote dans les quatre directions et atteignent exactement les mêmes limites. L'aide rappelle les quatre valeurs à modifier, mais ne complète pas le contrôle du fichier rechargé.

Si l'élève recharge par erreur sa base, oublie de sauvegarder la modification ou laisse une direction à 4, cet essai peut réussir. Il vérifie que les commandes et les limites fonctionnent, sans vérifier le réglage personnel annoncé. C'est particulièrement gênant dans un chapitre dont l'objectif est de construire des essais capables de révéler une erreur.

**Vérification :** lecture des consignes, des quatre déplacements et de leurs limites dans la référence, puis du scénario moteur déjà exécuté. Celui-ci vérifie séparément le signe et les multiples de 5 des déplacements avant de vérifier les bornes ; le texte élève ne donne que le dernier contrôle. Les limites sont rétablies par des blocs distincts des incréments : elles restent identiques à 4 et à 5. Ce constat ne dépend pas d'une estimation du temps d'apprentissage ou de la rapidité de frappe.

**Correction proposée :** conserver d'abord la recherche d'un essai personnel. Dans l'aide et dans la vérification après réouverture, demander de relire les quatre valeurs effectives des déplacements de Pilote dans le fichier rechargé : +5 à droite et en haut, -5 à gauche et en bas. Vérifier ensuite séparément les quatre directions et les limites inchangées. Présenter clairement la lecture du réglage et l'essai du comportement comme deux contrôles complémentaires. Une mesure de déplacement peut remplacer la lecture si elle définit un protocole fiable ; un simple appui « bref » ne garantit pas une seule itération de la boucle.

**Critère de clôture :** une base restée à 4, ou une version dont une seule direction est restée à 4, échoue au contrôle prescrit ; la version à 5 réussit, avec les quatre limites conservées. Le contrôle porte sur le fichier personnel effectivement rechargé. Aligner le guide professeur si une aide de vérification y est ajoutée.

**Correction appliquée le 16 octobre :** l'aide et la recette finale demandent de sélectionner Pilote dans le fichier personnel rechargé, puis de lire +5 à droite et en haut et -5 à gauche et en bas. L'essai des quatre flèches et des limites vient ensuite. Le carnet distingue le réglage lu du résultat observé. Le dépannage professeur rappelle pourquoi les directions et les bornes seules ne distinguent pas 4 et 5. Une base restée à 4 ou une direction oubliée ne satisfait donc plus le contrôle prescrit.

**Vérification de la correction :** catalogue régénéré et validé, formatage et diff contrôlés. Les deux encarts corrigés ont été capturés à 1280 et 320 px dans `browser-artifacts/mission-tests-correction/codecraft-catalog-qa-WZVqXO/`. Les captures mobiles de l'aide et de la recette finale ont été examinées : texte lisible, sans débordement horizontal. Cette retouche porte uniquement sur les textes élève et professeur ; les archives et le fonctionnement du jeu ne changent pas. Aucune assertion des tests existants ne dépend des formulations remplacées.

## Éléments conservables

- Le raccordement à États reprend bien la version principale à trois vies, intervalle 1.2 seconde et annonces de deux secondes. La variation d'annonce du chapitre précédent est enregistrée séparément puis abandonnée par rechargement du principal.
- Les copies de seuils, de panne et d'intervalle sont nommées et séparées. Le retour à la base restaure les constantes avant la personnalisation ; la dernière vérification conserve au contraire le choix personnel, dont quatre vies si ce choix est retenu.
- Le fichier de panne omet l'initialisation de niveau tout en conservant sa valeur 2. L'écart entre variable et décor est réel. Les indices et la réponse sont repliés ; le nouvel essai depuis le secteur 2 évite de confondre une valeur corrigée ponctuellement avec une initialisation réparée.
- La comparaison 1.2/1.8 seconde compte les apparitions sur une même durée, avec un placement sûr et sans changement de secteur. Elle distingue la fréquence de création du nombre de copies visibles et de leur vitesse.
- Le choix personnel reste limité à une règle, avec prévision, observation et sauvegarde. Le chapitre ne fournit pas une prétendue solution unique à toutes les versions personnelles.
- Le guide professeur distingue les résultats techniques et les observations d'un élève. Les aides de débogage s'ouvrent avec une consigne de retour.

## Vérifications et limites

Les sources du chapitre, la fin d'États, le parcours, le générateur et les contrôles d'archives ont été relus. Le rapport existant `browser-artifacts/scratch-mission-tests-engine/resultats.json` et son scénario ont été examinés : huit contrôles avaient réussi, avec positions et compteurs préparés. Ces résultats sont antérieurs à cette revue ; ils ne constituent pas une nouvelle exécution ni une partie complète au clavier.

Les captures existantes `scratch-mission-tests-variation-1280.png`, `scratch-mission-tests-recette-finale-320.png` et `scratch-mission-tests-methode-320.png` ont été examinées dans `browser-artifacts/run-e6ACM9/scratch-mission-browser/codecraft-catalog-qa-lyi834/`. Le texte reste lisible sans débordement visible sur ces vues. À 320 px, les consignes occupent beaucoup de hauteur ; cela ne justifie pas à lui seul une refonte et ne mesure pas leur compréhension par un élève.

Le contrôle ciblé `node --test --test-name-pattern="Mission Tests" tests/scratch-mission.test.cjs` a été relancé pendant cette revue et a réussi : comparaison de la panne avec la référence, indices repliés et téléchargements correctement désignés. Il ne vérifie pas la qualité pédagogique de l'essai des pas de 5.

La dernière validation complète consignée dans l'intégration reste de 233 tests Node et sept suites navigateur. Aucune suite générale n'est relancée pour cette revue documentaire. Les vérifications ciblées ne remplacent ni la reconstruction du parcours, ni des observations d'utilisation réelle.

## Suite

Le [contrôle final des raccords](controle-raccords-scratch-mission.md) est terminé, dans le périmètre confirmé après cette revue : transitions, versions attendues, fichiers de reprise et navigation. Il ne constitue pas une reconstruction manuelle complète ni une observation d'autonomie avec un élève. Aucune nouvelle série de revues n'est engagée.
