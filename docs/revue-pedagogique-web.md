# Revue pédagogique Web — socle HTML

## Lot 1 appliqué — 7 octobre 2026

Périmètre : Titres et paragraphes, Listes HTML et Liens HTML. Les trois modules restent uniques et partagés entre Fondations et Débutants. Aucun identifiant historique de module, bloc ou tâche n’est supprimé. Aucun parcours, thème, acquis automatique ni format de suivi privé n’est modifié.

## Constats et corrections

### Titres et paragraphes

- La saisie guidée précédait l’explication d’une balise : ajout d’un exemple court distinguant ouverture, texte et fermeture.
- Le choix libre de h2 à h6 pouvait encourager un choix selon la taille : deux parties de même importance utilisent ici deux h2. h3 reste expliqué comme une sous-partie, pas demandé dans le socle.
- Un aperçu satisfaisant ne prouve pas la structure du code : vérification des balises et distinction entre retour à la ligne et nouveau paragraphe.
- Le bonus demandait d’effacer le travail : copie de sauvegarde et nouvel essai, sans obligation de bonus pour continuer.

### Listes HTML

- Préparation limitée aux repères ouverture/fermeture ; aucune maîtrise préalable des titres ou de CSS n’est exigée.
- Le guidé conserve les titres et paragraphes ; le quatrième li se place avant /ul.
- L’activité autonome ajoute une seconde liste au lieu de remplacer la première.
- Vérification dans le code et dans l’aperçu : bornes de ul, éléments li, nombre d’éléments et explication de leurs rôles. L’indentation n’est pas présentée comme créant des éléments.

### Liens HTML

- Le texte visible et la destination sont modifiés séparément, puis comparés.
- Les liens externes utilisent une adresse complète et un libellé annonçant la destination.
- Les consignes demandent de prévoir puis tester l’ouverture, pas seulement d’obtenir un lien visuellement reconnaissable.
- Une activité autonome distincte demande un autre lien et l’explication de href.
- L’aperçu, le site distant ou le réseau peuvent limiter le test : ne pas attribuer automatiquement ce blocage au code de l’élève. Aucun lien externe n’est ouvert automatiquement par les tests.

## Critères et accompagnement

Chaque module possède quatre critères observables dans « Les essentiels », ainsi qu’un guide professeur : diagnostic d’entrée, préparation, exemple commenté, six questions/réponses, guidé, transfert autonome, différenciation et trois erreurs fréquentes avec quatre aides graduées.

Les attentes ne valident aucune compétence automatiquement. Le professeur distingue reproduction, compréhension, transfert et aides reçues. Les cases élèves restent temporaires. L’évaluation en situation reste nécessaire ; les tests techniques ne prouvent pas l’efficacité pédagogique.

La préparation précise la zone HTML de CodePen et la conservation du code dans un fichier texte : aucun compte ni sauvegarde durable de l’onglet n’est supposé. Les contenus partagés gardent les couleurs de chaque parcours et le modèle de page existant.

## Vérifications reproductibles

- `node --test tests/pedagogy.test.cjs tests/python.test.cjs tests/web-foundations.test.cjs` : références, repères historiques, exemples, prérequis, critères, sauvegarde et tests des liens.
- `node tests/python-browser.cjs "html-titres-paragraphes|html-listes|html-liens"` : parcours Fondations/Débutants, accès direct, vues mobiles et trois guides professeur.
- Relecture visuelle des bandeaux, préparations, tâches et essentiels ; aucune nouvelle DA.

Résultat du 7 octobre 2026 : 47 tests réussis et 17 vues navigateur vérifiées, dont les deux parcours à 390 px et les trois guides professeur. Les captures contrôlées conservent le thème bleu des Fondations, le vert des Débutants et la navigation précédente/suivante sans doublon. Le déroulement réel dans CodePen et l'efficacité des consignes auprès d'élèves restent à confirmer en situation.

## Références techniques primaires

- [WHATWG — Titres et niveaux de sections](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements).
- [WHATWG — Liste non ordonnée et éléments de liste](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element).
- [WHATWG — Liens et href](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element).

## Lot 2 appliqué — réinvestissement et préparation

Périmètre : Mini-page des fondations, Révision HTML et Préparer un projet de cartes. Modules, parcours, compétences et anciens repères de blocs/tâches conservés ; aucun contenu Diagnostic Web modifié.

### Mini-page des fondations

- Cahier des charges sans modèle complet ; conservation de l’essai précédent et trace des aides utilisées.
- Vérification du rôle des titres et de la structure des paragraphes/listes dans le code, pas seulement de leur visibilité.
- Modification d’un paragraphe et ajout d’un li sans perte du reste, suivis d’une explication.
- Retrait de la promesse « prêt pour Débutants » : aucune orientation n’est déduite d’une checklist. Le nouvel essai facultatif est replié et reprend le thème bleu, sans encart générique « Vérification et suite ».

### Révision HTML

- Deux parties de même importance utilisent deux h2 ; h3 n’est pas demandé au socle et n’apparaît en bonus que pour une vraie sous-partie.
- Socle limité aux notions déjà travaillées : titres, paragraphes, liste et lien. Les images et CSS ne sont pas des exigences cachées.
- Destination prévue puis testée ; limite de réseau ou d’aperçu distinguée d’une erreur HTML.
- L’ancien « Point de validation » devient une activité concrète : comparer code et aperçu, tester le lien, modifier sans perdre le reste et conserver les résultats/aides.

### Préparer un projet de cartes

- Deux entrées maintenues : projet personnel ou base fournie, sans prérequis Flexbox.
- Explication minimale du groupe cartes, de la classe carte et des rôles de border, padding, margin et border-radius.
- Checklist reformulée comme présence et observation, et non comme déclaration « j’ai créé » après une copie.
- Essais de padding puis margin séparés, avec retour aux valeurs de départ. Aucune distance exacte entre cartes n’est exigée.
- Ajout d’une quatrième carte sans recopier toute la base, avec explication de l’application de .carte.
- Survol testé avec une souris si disponible ; aucune pénalisation d’une limite tactile. Les deux codes sont conservés dans des fichiers texte avant remplacement.

Les trois modules possèdent chacun quatre essentiels et un guide professeur : six questions/réponses, trois erreurs fréquentes et quatre aides graduées par erreur. Les guides distinguent réussite autonome, avec modèle ou avec aide. La préparation technique ne vaut pas maîtrise globale du HTML/CSS et aucun suivi privé n’est écrit automatiquement.

Vérifications : 51 tests réussis avec la commande de tests unitaires ci-dessus, puis 12 vues vérifiées avec `node tests/python-browser.cjs "html-mini-page-fondations|html-revision|web-projet-cartes"` : thèmes bleu/vert/violet, accès directs mobiles à 390 px et trois guides. Captures de la Révision et des fins de Mini-page/Cartes relues visuellement ; aucun débordement détecté. Le déroulement réel dans CodePen et l’efficacité auprès des élèves restent à confirmer.

Références complémentaires : [MDN — padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding), [MDN — margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) et [MDN — hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover).

## Retrait de Diagnostic Web — 7 octobre 2026

Décision utilisateur : supprimer ce module plutôt que le revoir. Son contenu et sa carte dans le domaine Web sont retirés. Les anciennes adresses `#rattrapage` et `#module/diagnostic-web` renvoient au domaine Web, y compris avec des paramètres d’activité devenus inutiles. Le choix d’un parcours reste libre.

Le catalogue contient désormais 54 modules, dont 23 Web ; tous les modules Web restants possèdent leurs essentiels. Aucun parcours, compétence ou fichier de suivi privé n’est supprimé. Le conducteur historique reste une archive, pas une entrée vers le module retiré. Le retrait est récupérable dans l’historique Git et le diff local.

Vérification du retrait : 52 tests réussis et 6 vues navigateur contrôlées, dont le domaine Web, les anciennes adresses avec/sans paramètres et l’alias Fondations. Le domaine présente seulement ses trois parcours, sans carte ni lien vers Diagnostic Web.

## Revue transversale des parcours — 7 octobre 2026

Ordre et thèmes conservés : Fondations bleu, Débutants vert, Avancés violet. Aucun module supplémentaire ni validation automatique.

- Fondations → Débutants : les notions partagées ne sont pas à refaire systématiquement. Après l’affiche, Structure d’un document HTML est une entrée possible si l’élève peut expliquer son HTML, ses classes et ses couleurs ; sinon, reprise ciblée. Les objectifs des parcours décrivent désormais aussi leurs projets finaux.
- Débutants : Découvrir le CSS reste une reprise explicite avant Classes et couleurs, et non un passage obligatoire pour tous. Les trois mini-pages intègrent successivement listes, liens puis images ; la mini-page complète demande deux h2 de même importance, pas des niveaux de titres arbitraires.
- Avancés : une base de cartes reste disponible pour l’entrée. La copie ne vaut pas maîtrise. Parent et enfants se travaille dans un Pen distinct après conservation des deux codes ; Flexbox reprend une copie du projet de cartes original et sauvegarde le CSS avant remplacement.
- Navigation : retrait des mentions de reprises « en bas », disparues avec le nouveau modèle. Le fil d’Ariane permet de retrouver le parcours et la leçon concernée ; les liens de reprise ciblés existants sont conservés.
- Projets : pas de Flexbox ni de publication exigés dans le mini-site local, pas de CSS requis pour les défis HTML. Les tâches demandent des modifications, des tests et une explication, pas seulement une copie ou des cases cochées.

Les tests de références, de transitions et de conservation des essais protègent ces choix. La réussite technique et la relecture ne remplacent pas un essai avec des élèves, notamment pour le temps réel de réalisation et le choix des reprises.

Vérification finale : 54/54 tests du catalogue réussis et 141 vues navigateur contrôlées, avec relecture des captures desktop et mobiles bleu/vert/violet. La suite unitaire complète donne 113/114 : seul le test exigeant le CSS actuel dans l’archive professeur figée échoue. Cet écart existe déjà dans HEAD avant ce lot (archive historique et CSS comparés sans modification). L’archive et le suivi privé restent intacts ; ce test historique doit faire l’objet d’une décision séparée, pas d’une mise à jour silencieuse de l’archive.
