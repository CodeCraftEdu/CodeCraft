# RB09/RB10 — intégration et fiche de préparation des scènes

9 octobre 2026. Pages `robotique-mission` et `robotique-tests`, deux guides et [fiche commune imprimable](../resources/robotique/fiche-mission-robot.html) intégrés **en préparation**, conformément à la [spécification ajustée](specification-robotique-rb09-rb10.md). Les trois scènes et leurs valeurs restent **non validées**. Ce document est une fiche de préparation, pas une recette réussie.

## Ressources et pédagogie

Finitions de la revue transversale du 9 octobre : reprise conditionnelle du seuil dans RB09 avant le choix de mission si la modification RB08 a été différée ; prévisions individuelles RB10 avant indices et exécution ; conditions B/C neutres sur la fiche, résultats attendus réservés au guide ; distinction capteur en entrée, actions et moteurs en sortie. Les supports de séance, la spécification, la roadmap et les protocoles sont alignés. Ces corrections éditoriales ne valident aucune nouvelle scène ni manipulation dans le simulateur.

- RB09 : référence montrée avant choix, mission observable, réglage justifié, premier essai A et export avant pause.
- RB10 : même fiche et projet ; confirmation A puis prévision/essai B/C, diagnostic et correction seulement si nécessaire, explication des limites et reprise du fichier.
- Deux missions conditionnelles : prudente, marge plus grande ; approche, marge plus petite avant contact, jamais seuil minimal ou recherche du contact. Valeurs proposées seulement après recette.
- Fiche élève HTML autonome sans stockage, nom complet ou compte ; téléchargement depuis les deux pages, ouverture locale et impression par le navigateur. Une phrase et prévu/observé ; justification/conclusion orales possibles. Si premier A manque, ne pas écrire confirmation fictive.
- Aucun HEX supplémentaire nécessaire à ce stade : reprise variable et référence fixe RB08 déjà exportées/réimportées. Références dans les guides uniquement, aucune solution motrice nouvelle distribuée dans les pages. Une base complète de reprise est légitime après RB08, mais doit être contextualisée.
- Même DA robotique ; quatre étapes et dix modules. RB10 a un retour final au parcours, pas un bouton Accueil supplémentaire. Aucun acquis automatique ni sécurité physique.

## Préparation professeur à compléter après recette

Date / testeur / navigateur / version / langue : **non renseignés — recette non effectuée**.

Programme de référence : `Reference-arret`, copie de `RB08-Obstacle-fixe-reference.hex`. Reprise : `RB08-Robot-prudent-reference.hex`, copie personnelle renommée. Paramètres hérités : modèle CuteBot, trois aides OFF, puissance 25, limite fixe 20, pause de consultation 100 ms et préparation avant répétition. Ce sont des paramètres de départ, pas une validation des missions. Tout ajustement impose mise à jour des supports et reprise des essais.

| Scène | Intention | Placement / orientation / cible / preuve | Mesures de départ et répétabilité |
| --- | --- | --- | --- |
| A | Avance puis arrêt ; référence et mission comparées à conditions égales | À préparer et capturer | Non vérifiées |
| B | Proche sans contact initial ; arrêt pour toutes les valeurs autorisées | À préparer et capturer | Non vérifiées |
| C | Autre cible/position ; départ éloigné, même réglage ; avance puis arrêt | À préparer et capturer | Non vérifiées |

Geste de remise au départ, simulation arrêtée : **à vérifier**. Un fichier HEX conserve le programme ; ne pas le présenter comme une scène sauvegardée. Aucun placement temporisé hérité des anciens prototypes A/B ne vaut placement reproductible.

| Mission | Valeurs réellement autorisées | Résultats A / B / C et répétitions |
| --- | --- | --- |
| Prudente | À vérifier — aucune plage annoncée | Non effectués |
| Approche | À vérifier — ne pas distribuer si marge fiable impossible | Non effectués |

Renseigner captures départ/fin, valeurs, conditions et résultats pour chaque valeur distribuée, pas seulement deux exemples. A seul compare à la référence ; C ne démontre pas une marge relative sans comparaison supplémentaire. Observation numérique seule ne prouve pas l’arrêt avant contact. Sauvegarde personnelle et accès élève à vérifier séparément.

## Conditions de distribution et suite

R10–R12 et partie pratique R14, puis [R15](protocoles-verifications-manuelles.md) avant le cours. R13 observe l’explication individuelle en séance ; ne pas cocher ces étapes à partir du seul rendu du site. Si placement bloqué : supports en préparation, raisonnement sur papier possible mais mission non testée. Si approche irréalisable : revoir objectifs/supports, aucune substitution silencieuse.

Routes : `index.html#module/robotique-mission?parcours=robotique-debutants`, `index.html#module/robotique-tests?parcours=robotique-debutants`. Guides : `prof.html#guide/robotique-mission`, `prof.html#guide/robotique-tests`.

## Contrôle d’intégration

143 tests automatisés réussis, aucun échec. Pages RB09/RB10, étape 4, deux guides et fiche HTML ouverts dans le navigateur. Thème robotique conservé ; retour final RB10 → parcours vérifié ; trois lignes de fiche et absence de débordement horizontal à la largeur observée. Version du script de rendu actualisée pour éviter l’ancienne navigation conservée en cache. Le test automatisé de téléchargement n’a pas abouti dans le navigateur intégré : téléchargement, ouverture locale et impression réelle restent dans R15, sans résultat de réussite annoncé. Aucun test de scène MakeCode nouveau, aucune nouvelle ressource HEX, aucun commit.
