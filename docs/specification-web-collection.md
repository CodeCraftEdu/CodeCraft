# Web Avancés — Ma collection de cartes

## Périmètre

Projet `web-collection-cartes`, après Préparer un projet de cartes → Parent et enfants → Flexbox, dans le thème violet existant. Réutiliser le support de la mission Flexbox, pas publier un deuxième cours ni une copie de ses neuf étapes. Aucun nouveau skill, suivi automatique, changement de DA ou commit inclus dans ce lot.

Objectif : adapter une collection personnelle, choisir sa disposition et expliquer son comportement quand le contenu, le nombre de cartes et la largeur changent.

## Prérequis observables

- Repérer le parent commun et ses enfants directs.
- Relier une classe HTML à sa règle CSS.
- Choisir le parent Flexbox, expliquer les axes, un écart et le retour à la ligne.

Un doute appelle une reprise ciblée, pas tout un parcours. Les titres et paragraphes sont réinvestis depuis la base préparée ; demander une aide si leur écriture reste fragile. Les propriétés d’apparence fournies dans Flexbox peuvent être conservées sans être évaluées. Ni images, feuilles externes, multipage ni publication requis.

## Travail demandé

1. Sauvegarder les deux codes avant adaptation ; travailler sur une copie du projet personnel ou des essais conservés. Sans support, reprendre Préparer un projet de cartes puis revenir, sans modèle complet publié dans ce projet.
2. Choisir un thème non personnel sensible ; quatre cartes de contenus différents, titre et paragraphe par carte, même parent et même classe commune. Si quatre cartes existent déjà, les adapter, pas tout refaire.
3. Écrire un plan : disposition en ligne avec retour à la ligne, écart et répartition souhaités. Le projet est autonome : pas de succession de déclarations à recopier.
4. Réaliser, comparer une propriété à la fois, justifier le choix final. Conserver l’apparence fournie si nécessaire.
5. Tester un aperçu large puis étroit (environ 700 et 300 px disponibles, ou deux largeurs réellement possibles), observer lignes, contenu et ordre ; ne pas imposer un nombre exact de cartes par ligne.
6. Ajouter une cinquième carte sans règle CSS individuelle ; prévoir puis constater l’effet. Allonger un paragraphe avec des mots ordinaires et conserver le contenu lisible.
7. Sur une copie, demander une colonne centrée horizontalement sans nommer les propriétés ; comparer avec le projet en ligne et expliquer les axes. L’extension optionnelle est une seconde collection, pas six cartes à recopier comme le bonus du cours.

## Essentiels

Quatre critères visibles : structure commune et contenu personnalisé ; choix de disposition expliqués ; comparaison des largeurs et ajout d’une carte ; changement de direction/centrage compris sans masquer le contenu. Rendu, modification, explication et aides reçues sont observés ensemble. Une case ou un projet ouvert ne valide rien.

## Guide professeur

Diagnostic d’entrée, préparation/sauvegarde, exemple commenté renvoyant à la mission existante, activité accompagnée limitée si nécessaire, puis transfert autonome. Six questions/réponses, trois erreurs fréquentes avec quatre aides graduées : mauvais parent/sélecteur, confusion des axes, wrap ou contenu débordant. Le suivi reste manuel ; distinguer autonome, avec modèle et avec aide.

## Revue pédagogique avant implémentation

- Doublon : garder les tâches et repères de `css-flexbox/mission`, mais les nommer mise en pratique plutôt que projet final. Le nouveau projet demande personnalisation, plan et tests nouveaux ; ses indices ne sont pas un code complet.
- Prérequis cachés : évaluer structure/sélecteurs/Flexbox seulement ; ne pas attribuer maîtrise des dimensions, bordures ou responsive global par la copie de l’apparence.
- Alignement : en row, comparer des cartes de hauteurs différentes sur la même ligne. Pour le transfert en column, laisser une largeur supérieure à celle d’une carte ; sans espace libre, ne pas conclure à une erreur.
- Retour à la ligne : wrap organise des cartes sur plusieurs lignes, mais ne répare ni une carte elle-même plus large que l’espace disponible ni un mot interminable. Tester des mots ordinaires ; ne pas demander overflow caché ou une propriété non enseignée.
- Continuité : préserver les projets et les identifiants de tâches historiques ; ajouter seulement le dernier module et son guide, sans placeholders futurs. Navigation finale : précédent Flexbox, pas de suivant fictif ni doublon Accueil.

Décision : spécification ajustée puis implémentée. Un essai en situation reste nécessaire ; aucun rythme ni durée imposé.

## Vérification prévue

Références de blocs/tâches et compétences résolues, trois parcours initiaux préservés hors ajout final Avancés, anciens fichiers privés compatibles. Tests du guide et des essentiels ; navigateur desktop et mobile à 390 px, entrée directe et depuis Avancés, dernier/précédent, thème violet, absence de liens morts. Vérifier en navigateur une fixture professeur non publiée : parent, ajout, wrap, axes et contenu à plusieurs largeurs. Les tests techniques ne prouvent pas l’autonomie d’un élève.

Référence : [MDN — align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-items), alignement sur l’axe transversal et dans chaque ligne Flexbox. Le projet ne traite pas align-content.

## Résultat technique

57 tests du catalogue réussis. 15 vues navigateur ciblées contrôlent le domaine Web, les modules Avancés, le partage Parent et enfants avec Débutants, le projet direct/parcours à 390 px et son guide professeur. Captures du nouveau projet relues : violet, quatre essentiels visibles, seul précédent Flexbox en fin de parcours.

`node tests/web-collection-browser.cjs` vérifie une fixture locale non publiée : cartes de hauteurs différentes en row, classe commune après ajout, wrap à 520/300 px, texte visible, débordement attendu en nowrap et centrage horizontal en column puis annulation du seul centrage. Cette fixture n’est pas un modèle fourni à l’élève.

Catalogue : 55 modules dont 24 Web, compétences inchangées. L’archive professeur figée et son écart de test historique documenté dans la revue précédente ne sont pas modifiés. Aucun commit ni push réalisé dans ce lot.
