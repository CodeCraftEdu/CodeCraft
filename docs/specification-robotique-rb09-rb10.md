# RB09/RB10 — dernier lot du parcours CodeCraft

9 octobre 2026. **Pages RB09/RB10, guides et fiche commune intégrés en préparation ; revue transversale appliquée.** Voir [l’intégration et ses réserves](integration-robotique-missions.md). Adaptation de la [séance 5 corrigée](specification-robotique-seance-5.md), de sa [fiche élève](robotique-seance-5-eleve.md) et de son [guide](robotique-seance-5-professeur.md). Validation technique des scènes toujours en attente.

## 1. Découpage permanent

Étape 4 « Réaliser sa mission », après RB07/RB08 dans `robotique-debutants` :

| Module proposé | Rôle | Production / pause |
| --- | --- | --- |
| RB09 — Ma mission de robot (`robotique-mission`) | Choisir une contrainte, justifier un réglage, faire un premier essai A | Copie `Ma-mission-robot`, mission, premier résultat A et sauvegarde ; confirmation et B/C restent à faire |
| RB10 — Tester, expliquer, améliorer (`robotique-tests`) | Confronter prévisions et résultats, diagnostiquer si besoin, présenter | Traces A/B/C, conclusion avec limites et aides reçues, projet récupérable |

Même projet et même fiche de trace, sans copie par essai. RB09 ne reconstruit pas RB08 ; RB10 ne devient pas un bloc redondant de liens vers ses exercices. Pages réutilisables hors stage : ni calendrier KidnKod ni minutage imposé. Le conducteur de 120 minutes demeure dans les documents atelier.

Entrée : montrer mesure, deux branches de `<`, affectation/utilisation de `seuil` et sauvegarde, avec aide si nécessaire. Si un repère manque, reprise ciblée avec le professeur, sans relecture complète obligatoire. Aucune compétence validée par l’ouverture d’une page.

Si le changement guidé RB08 a été reporté ou reste difficile à expliquer, utiliser la reprise RB09 avant le choix personnel : prévoir sur papier avec mesure 23 et seuil 20 puis 25, pointer les deux endroits du réglage, puis comparer deux valeurs réellement vérifiées depuis une même scène avec aide. Les nombres du papier ne sont pas une recette. Si cet essai manque, conserver « non testé » et différer le choix personnel ; si la variable elle-même manque, reprendre son introduction RB08.

## 2. Conditions techniques

La [réserve capteurs](integration-robotique-capteurs.md) reste ouverte. Les quatre HEX RB07/RB08 sont réimportables ; cela ne valide pas les approches ni les placements. R10–R12 et la partie pratique de R14 précèdent la recette des missions.

Avant distribution : trois scènes A/B/C reproductibles, deux missions réalisables et plages de seuils vérifiées. Ne figer ni coordonnées ni distance d’arrêt non essayées. Maintenir « Support en préparation — essais accompagnés » tant que ces conditions manquent. Une prévision sur papier peut continuer, mais ne valide pas la mission simulée.

`Reference-arret` : copie professeur de la référence fixe RB08, limite conservée pendant les comparaisons. La valeur actuelle 20 est un point de départ de recette, pas une garantie. Même modèle, aides, puissance et cadence que RB08 ; une seule pile motrice, aucun événement A/B moteur ajouté. Tout ajustement technique doit être documenté et harmonisé avant publication des consignes.

## 3. RB09 — contenu élève

Objectif : « Choisir une mission réalisable, expliquer ton réglage et observer un premier résultat. »

1. **Retrouver la règle.** Compléter « distance < seuil ? Oui → … ; Non → … », puis pointer les actions dans le programme intact. Repérage court, pas un nouveau cours ni une panne volontaire.
2. **Préserver et nommer.** Exporter `Mon-robot-prudent`, réimporter une copie nommée `Ma-mission-robot`. Garder l’original hors navigateur. Si perdu, base de reprise professeur équivalente à RB08 : règle complète légitime ici, puisqu’elle a déjà été travaillée. Dire ce qui est fourni ; ne pas prétendre repartir de zéro.
3. **Observer puis choisir.** Avant le choix, le professeur montre l’avance et l’arrêt de `Reference-arret` dans A, sans donner la valeur solution ni le sens du changement. Thème livreur, explorateur ou secours sans nouvelle mécanique. Dans A : « prudente » = avancer puis s’arrêter avec une marge plus grande que la référence ; « approche » = avancer puis s’arrêter avec une marge plus petite, toujours avant contact. Le thème seul n’est pas le défi. Approche n’est jamais une recherche du contact : seules les valeurs effectivement vérifiées sont proposées, sans défi de seuil minimal.
4. **Justifier et prévoir.** Choisir dans la plage vérifiée pour la mission. Conserver une valeur pertinente est autorisé. Montrer affectation et emploi ; ne changer ni puissance ni autre commande. Demander une prévision avant l’indice sur le sens du changement, sans donner une valeur solution dans la page.
5. **Prévoir et essayer A.** Prévoir puis lancer le projet depuis les mêmes conditions que la référence. Noter en quelques mots le premier résultat, ou le dire au professeur. Vérifier si la marge semble répondre à la mission ; diagnostiquer et corriger seulement si nécessaire. Lire brièvement B/C, sans imposer leurs prévisions écrites avant la pause : elles seront formulées juste avant chaque essai en RB10. Ce premier résultat A ne valide pas les trois situations.
6. **Sauvegarder avant la pause.** Exporter la copie et garder la fiche. RB10 peut reprendre un autre jour sans reconstruire le programme.

Les essentiels : mission observable ; mesure distincte du réglage ; affectation/utilisation montrées ; première prévision confrontée au résultat A et original conservé. Ne pas annoncer la réussite complète avant confirmation et B/C. Si la recette bloque A, noter « non testé », pas un résultat fictif.

## 4. RB10 — contenu élève

Objectif : « Tester ta mission dans plusieurs situations, expliquer les résultats et améliorer seulement si nécessaire. » Retrouver projet et premier résultat A de RB09. Confirmer A depuis le départ connu avec le même réglage ; retrouver la référence, ou la remontrer si la séance est séparée. Puis prévoir et tester B/C. Garder la trace du premier essai, sans recopier toute la fiche.

| Situation | Manipulation accompagnée | Conclusion permise |
| --- | --- | --- |
| A — départ éloigné, obstacle devant | Référence puis projet, mêmes départ, orientation, obstacle et puissance | Avance puis arrêt avant contact ; plus loin ou plus près que la référence selon la mission |
| B — obstacle proche, sans contact au départ | Même réglage personnel ; mesure proche valide pour toutes les valeurs autorisées | Branche Arrêter et immobilité maintenue ; cet arrêt initial ne prouve pas la réussite de A |
| C — autre position d’obstacle, départ encore éloigné | Même réglage, sans l’ajuster pour réussir C | Avance puis arrêt dans une autre scène ; pas de comparaison relative à la référence sans refaire cette comparaison |

Trois situations ne signifient pas trois lancements : A comprend référence et projet ; une correction exige un nouvel essai. Observer avance puis arrêt dans **la même exécution** en A/C. Arrêter avant tout placement, jamais déplacer le robot en mouvement. Égalité traitée sur tableau, pas par placement exact.

Prévoir → essayer → noter → comparer → conclure. Si un résultat surprend : vérifier scène, mesure valide, valeur effectivement initialisée, commandes concurrentes et règle avant de modifier. Changer un seul élément pertinent puis retester. Si le programme change, reprendre A/B/C avant conclusion finale. Ne pas imposer d’erreur ou de correction à un projet conforme.

Présentation courte : capteur d’entrée, question et deux actions commandées aux moteurs de sortie, choix conservé ou modifié, preuve et portée. Dire ce qui était préparé et les aides reçues. Une difficulté expliquée avec une piste précise prouve du raisonnement, pas une réussite technique. Aucun concours ni badge automatique.

Fin : exporter puis réimporter le projet final ; retrouver nom, valeur et blocs. Les essentiels : prévision distincte de l’observation ; comparaison équitable ; décision répétée expliquée ; diagnostic avant modification ; preuve et sauvegarde. Le robot peut repartir si la distance redevient grande : ni arrêt mémorisé ni sécurité matérielle.

## 5. Ressources et accompagnement

**Ressource intégrée** : [fiche de trace commune imprimable](../resources/robotique/fiche-mission-robot.html). Une phrase « Ma mission est… », valeur retenue, puis « prévu / observé » pour A/B/C ; la ligne A permet de noter premier essai et confirmation sans nouvelle fiche. Les intitulés donnent les conditions de départ sans donner les réponses B/C : recueillir une prévision justifiée par mesure/seuil avant l’essai ou l’indice. Justification, conclusion et explication peuvent être orales, recueillies par le professeur. Ajouter seulement si utile une note de correction et son nouvel essai. Aides, détails techniques, limites et preuve de reprise restent dans le relevé professeur ; garder le nom du fichier sur la fiche. Téléchargement et impression réels restent à vérifier.

Préparer une fiche professeur des scènes : capture du départ, orientation, obstacle, procédure de remise en place, lectures, limite fixe, plages admissibles par mission, résultats et répétabilité. Un HEX qui sauvegarde le programme ne doit pas être présenté comme une scène sauvegardée.

Réutiliser les schémas RB07/RB08 et les HEX variable/fixe comme reprise/référence, après validation pratique. Pas de quatre programmes identiques pour représenter trois scènes. Tout export supplémentaire doit avoir un rôle distinct et être réimporté. Références professeur hors téléchargements élèves ; reprise complète clairement contextualisée.

Un guide par module : prérequis, préparation, questions/réponses, aides graduées, erreurs, critères, ressources et limites. Questions : « Comment sauras-tu que ton objectif est atteint ? », « Pourquoi l’arrêt au départ ne suffit-il pas pour A ? », « Que vérifie C ? », « Que vérifier avant de changer le nombre ? » Aide : question → pointage → choix entre deux valeurs admissibles → démonstration. Conserver une prévision personnelle, noter l’aide.

Élève rapide : répéter un essai ou préciser une conclusion ; pas de radio, ligne, minuterie, recul, évitement ou nouvelle variable. Si simulation indisponible : préparation sur papier explicitement non testée, pas substitution silencieuse au robot.

## 6. Visuel et navigation

Même DA robotique bleu-vert que RB07/RB08, bandeau existant, CodeCraft et fil d’Ariane sur une ligne à largeur suffisante, nom de leçon conservé. Essentiels visibles sans accordéon ; styles existants distinguant théorie/activité, sans nouvelle décoration.

Étape 4 et compteurs 1/2 puis 2/2. RB09 : précédent RB08, suivant RB10. RB10 : précédent RB09, action finale « Revenir au parcours », sans faux suivant ni doublon Accueil en bas. Fiche de trace liée à l’activité, pas bloc de consolidation superflu.

Pause d’étape : montrer mission, règle, preuves et sauvegarde, avec aides identifiées. Essais non réalisés explicitement à reprendre. Fin de parcours = découverte simulée, pas niveau confirmé.

## 7. Ordre de réalisation et recette

1. Revue pédagogique effectuée : premier résultat A en RB09 ; référence montrée avant choix ; trace écrite allégée ; mission approche encadrée sans recherche de contact. Ces quatre ajustements sont appliqués.
2. Corrections appliquées ; fiche commune intégrée. Préparation et validation des scènes restent à terminer.
3. Deux pages et guides implémentés en préparation ; parcours sans module fantôme.
4. Contrôles d’intégration effectués : catalogue, ordre/stage, ressources, rendu et navigation jusqu’au retour final. Ces contrôles ne valident pas les scènes ni l’accès de cours.
5. Recette **R15** avant distribution : scènes A/B/C, deux missions réalisables, comparaisons répétées, accès de cours et reprise. R13 reste l’observation pédagogique réelle.

Si « approche » n’est pas reproductible avant contact, ne pas la distribuer ni la remplacer silencieusement : revoir objectifs et supports après recette. Aucun résultat pratique de RB09/RB10 n’est attesté à ce stade.
