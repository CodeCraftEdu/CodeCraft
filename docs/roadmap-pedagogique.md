# Roadmap pédagogique de CodeCraft

Document de référence : cadrage transmis et validé par le propriétaire du projet. Les sections 1 à 12 conservent les décisions pédagogiques ; les sections 13 à 19 distinguent l’état vérifié du dépôt, les lots réalisés et les contenus encore prévus. Aucun calendrier de progression élève n’est imposé.

## 1. Objectif et identité

CodeCraft est ma bibliothèque pédagogique réutilisable pour enseigner le développement web à des enfants de niveaux différents.

Le périmètre décidé est :
- un socle HTML/CSS ;
- trois parcours : Fondations, Débutants, Avancés ;
- une branche JavaScript accessible ensuite selon les acquis individuels ;
- des consolidations, bonus et projets jalons ;
- des contenus élèves et des teacherGuide détaillés pour chaque module.

CodeCraft est générique et indépendant de Startup Académie. Le référentiel Startup Académie reste une couche externe facultative de correspondance et de suivi professeur. Il ne dicte ni les intitulés publics ni l’ordre pédagogique.

Ne mélange pas ce projet avec mes cours Python, Scratch ou français pour d’autres organismes.

## 2. Progression adaptative

Ne crée aucune séance datée, aucun programme hebdomadaire fixe et aucune hypothèse de vitesse par groupe.

Un module n’est pas une séance. Il peut être abordé en plusieurs passages ou franchi rapidement si l’élève maîtrise déjà ses compétences.

Principes :
- Les parcours sont des itinéraires conseillés.
- Les modules sont définis une fois et réutilisés dans plusieurs parcours.
- Un changement de parcours n’oblige pas à refaire les compétences acquises.
- Les prérequis portent sur les compétences ; avoir consulté un module ne prouve pas leur acquisition.
- Une checklist sert à vérifier son travail, sans validation automatique.
- L’orientation reste sous le contrôle du professeur.
- Les modules restent directement accessibles.
- Un bonus ne devient pas implicitement obligatoire pour poursuivre.
- Une difficulté déclenche une consolidation ciblée, pas une reprise complète du parcours.

Préserve les outils existants de préparation et d’historique des séances. L’absence de calendrier imposé dans la roadmap ne justifie pas leur suppression.

## 3. Conditions d’enseignement à prendre en compte

J’enseigne à distance avec plusieurs niveaux. Je peux accompagner un groupe pendant que les autres travaillent en autonomie.

Les supports doivent permettre ce fonctionnement :
- aucune consigne indispensable uniquement à l’oral ;
- aucune activité dépendant obligatoirement d’un partage d’écran du professeur ;
- étapes courtes et explicites ;
- exemples faciles à retrouver ;
- aides graduées ;
- activités autonomes et bonus ;
- ressources légères autant que possible ;
- variantes adaptées à CodePen et à VS Code lorsqu’elles sont nécessaires.

Certains élèves ont encore des difficultés de clavier, souris ou navigation. Distingue l’aide à la manipulation de la compréhension de la notion.

L’utilisation d’IA par les élèves est interdite dans ce cadre. Ne construis pas d’activités exigeant ChatGPT ou Copilot.

## 4. État de départ et travail déjà réalisé

L’audit initial avait identifié :
- un domaine web ;
- trois parcours ;
- douze modules et douze compétences ;
- des modules partagés entre parcours ;
- un suivi manuel des compétences ;
- des référentiels externes dans le fichier privé professeur.

Parcours initiaux :

Fondations :
Titres et paragraphes → Listes HTML → Mini-page des fondations → Liens HTML → Images HTML.

Débutants :
Titres et paragraphes → Listes HTML → Liens HTML → Révision HTML → Images HTML → Classes et couleurs CSS → Mini-page HTML complète.

Avancés :
Préparer un projet de cartes → Parent et enfants → Flexbox.

Diagnostic Web est accessible séparément.

Selon tes comptes rendus, le premier lot a maintenant ajouté :
- les métadonnées pédagogiques et leur rendu ;
- les guides professeur ;
- l’enrichissement d’Images HTML, Parent et enfants et Flexbox ;
- les ressources d’exercice ;
- sept corrections issues de la revue pédagogique.

Les vérifications rapportées comprennent 64 tests automatisés et des vérifications Chrome élève/professeur. Aucun commit, push ou déploiement n’a été annoncé.

Lis l’état actuel du dépôt pour toute décision technique ; ne repars pas de l’audit initial comme si ces ajouts n’existaient pas. N’interprète pas ces comptes rendus comme une validation de mon confort d’utilisation en cours.

Conserve les corrections acquises :
- copie de la source d’image seule et rédaction séparée de alt ;
- distinction exemple court explicatif / source embarquée prête à coller ;
- squelette HTML pour les élèves qui en ont besoin ;
- prérequis explicites des suites conseillées ;
- code disponible avant le diagnostic Flexbox ;
- personnalisation visuelle facultative ;
- comparaison wrap/nowrap réellement observable ;
- indice cohérent sur la troisième branche ;
- vérification de compréhension sans donner systématiquement la propriété à utiliser.

Ne relance pas un audit général de ce premier lot sans problème concret nouveau.

## 5. Catalogue pédagogique HTML validé

Les codes H1, C1, J1, etc. ci-dessous sont des repères de conception, pas des identifiants techniques à imposer. Fais la correspondance avec les IDs existants sans les renommer.

| Repère | Module | Prérequis principaux | Compétence cible |
|---|---|---|---|
| H1 | Titres et paragraphes | Manipulation de l’éditeur avec aide si nécessaire | Créer et distinguer titres et paragraphes |
| H2 | Listes HTML | H1 | Construire une liste et ajouter un élément au bon endroit |
| H3 | Liens HTML | H1 | Distinguer texte du lien et destination |
| H4 | Images HTML | Reconnaître une balise et modifier un extrait | Insérer, remplacer et décrire une image avec src et alt |
| H5 | Structure d’un document HTML | Première petite page réalisée | Distinguer head/body et titre de l’onglet/titre visible |
| H6 | Fichiers et chemins | Liens et images | Organiser les ressources et comprendre un chemin relatif |
| H7 | Parent et enfants | Assembler plusieurs éléments HTML | Comprendre imbrication, parent direct, descendants et frères |
| H8 | Organiser une page en zones | H7 | Structurer avec header, main, footer, puis nav/section selon le contenu |
| H9 | Relier plusieurs pages | H5 et H6 | Créer et vérifier une navigation locale |

Pour H4, les titres et paragraphes peuvent être fournis dans un squelette. Les liens sont nécessaires au bonus d’image cliquable, pas à l’objectif principal.

Pour H5 et H6, distingue ce que l’environnement CodePen prend en charge de ce que l’élève devra construire dans un projet avec fichiers.

## 6. Catalogue pédagogique CSS validé

| Repère | Module | Prérequis principaux | Compétence cible |
|---|---|---|---|
| C1 | Découvrir une règle CSS | H1 | Identifier sélecteur, propriété, valeur ; modifier texte et fond |
| C2 | Classes et couleurs CSS | C1 | Relier class et .classe ; cibler et réutiliser |
| C3 | Relier une feuille de style | C1, H5, H6 | Relier style.css et vérifier son chargement |
| C4 | Rendre les textes lisibles | C2 | Régler police, taille, interligne et alignement |
| C5 | Boîtes et espacements | C2 et H7 | Distinguer contenu, padding, bordure et margin |
| C6 | Dimensions et images dans une carte | C5 et H4 | Régler la largeur, contenir une image et préserver ses proportions |
| C7 | Flexbox : disposer des éléments | H7, classes/sélecteurs et bases de C5 | Appliquer Flexbox au parent ; comprendre direction et axes |
| C8 | Flexbox : aligner et répartir | C7 | Choisir gap, justify-content et align-items |
| C9 | Flexbox : revenir à la ligne | C6 et C8 | Organiser une collection avec flex-wrap |
| C10 | Adapter une page aux écrans | C6 et C9 | Tester les largeurs, comprendre le viewport et une media query simple |
| C11 | États des liens et boutons | C2 et liens HTML | Distinguer lien/bouton ; rendre survol et focus repérables |
| C12 | Réutiliser et organiser son CSS | C3 et plusieurs composants réalisés | Partager des styles, créer des variantes et limiter les répétitions |

C7 à C9 peuvent rester des étapes du module Flexbox existant. Ce découpage pédagogique n’impose pas une restructuration technique.

Une propriété fournie dans le code de départ n’est pas automatiquement une compétence enseignée ou acquise.

## 7. Parcours cibles et projets jalons

Fondations :
1. H1 — Titres et paragraphes.
2. H2 — Listes.
3. Mini-page des fondations : titre, paragraphes et liste.
4. H3 — Liens.
5. H4 — Images.
6. Ma page HTML complète : réinvestissement des éléments précédents.
7. C1 — Découvrir le CSS.
8. C2 — Classes et couleurs.
9. Mon affiche numérique : petite création HTML avec personnalisation CSS.

Fondations va donc jusqu’à une première personnalisation CSS. Aucun Flexbox n’est requis pour son jalon final.

Débutants :
- Conserver le départ existant : H1 → H2 → H3 → Révision HTML → H4 → Classes et couleurs → Mini-page HTML complète.
- La révision porte sur les notions déjà rencontrées à cet endroit.
- La découverte C1 doit être accessible avant les classes aux élèves qui en ont besoin, sans répétition obligatoire pour ceux qui la maîtrisent.
- Poursuivre par H5 → H6 → C3 → H7 → H8 → C4 → C5 → C6.
- Jalon « Ma carte personnelle ».
- H9 — Relier plusieurs pages.
- Jalon « Mon mini-site » : deux ou trois pages avec un style commun.

Avancés :
- Conserver l’entrée : Préparer un projet de cartes → H7 → Flexbox.
- Vérifier les classes/sélecteurs, les espacements et les dimensions ; proposer les reprises nécessaires.
- Approfondir C7 à C9.
- Jalon « Ma collection de cartes ».
- H8 — Page complète.
- C10 — Adaptation aux écrans.
- C11 — États des liens et boutons.
- H9, C3 et C12 selon les acquis.
- Jalon « Mon site personnel » : cahier des charges, réalisation, vérification et présentation.
- Module « Publier et vérifier » : publication accompagnée puis contrôle des pages, liens et images.

Passerelles :
- Fondations vers Débutants : reprendre au premier prérequis manquant.
- Débutants vers Flexbox : regroupements, classes/sélecteurs, bases des espacements et carte simple compris.
- Le mini-site multipage n’est pas obligatoire avant la découverte de Flexbox.
- Aucun parcours ne représente une vitesse fixe ni un âge imposé.

Réutilise les jalons existants lorsqu’ils correspondent. Ne duplique pas une mini-page uniquement pour changer son intitulé. Préserve les attentes déjà proposées aux Débutants et distingue le noyau HTML des extensions CSS.

## 8. Consolidations et bonus

Prévoir des branches accessibles depuis les notions concernées :

| Domaine | Consolidation | Bonus avec les acquis |
|---|---|---|
| HTML de base | Réparer une petite page et expliquer | Ajouter une rubrique sur un autre thème |
| Liens et images | Corriger destination, source ou texte alternatif | Construire une sélection illustrée |
| Classes | Associer règles et éléments ciblés | Créer deux variantes visuelles |
| Parent/enfants | Réparer un mauvais regroupement | Ajouter des regroupements internes à une carte |
| Espacements | Corriger une carte trop serrée ou trop espacée | Produire une version compacte et une version aérée |
| Flexbox | Corriger parent, disposition ou alignement | Réutiliser dans une navigation ou comparer des dispositions |
| Adaptation aux écrans | Réparer un débordement | Adapter à une largeur supplémentaire |
| Projet complet | Vérifier avec une grille | Reproduire une petite maquette avec les notions acquises |

Les ombres, arrondis, transitions simples et CSS Grid sont des extensions facultatives envisagées. Leur contenu reste à définir ; elles ne conditionnent pas JavaScript.

Les appuis clavier/souris/éditeur sont transversaux, proposés selon les besoins.

## 9. Entrée dans JavaScript

JavaScript vient après un socle HTML/CSS suffisamment compris par l’élève.

Seuil pédagogique retenu :
- structurer une petite page ;
- utiliser des classes CSS ;
- identifier parents et enfants ;
- réaliser une mise en page simple avec espacements et Flexbox ;
- retrouver une partie du code et corriger une erreur simple avec aide limitée.

La maîtrise de tout le CSS, du multipage et de la publication n’est pas obligatoire avant JavaScript. Leur approfondissement peut continuer ensuite.

La branche JavaScript est commune et accessible individuellement selon ces acquis.

| Repère | Module | Prérequis principaux | Compétence cible |
|---|---|---|---|
| J1 | Découvrir JavaScript | Seuil d’entrée HTML/CSS | Exécuter une instruction, utiliser la console, distinguer les rôles des langages |
| J2 | Variables et valeurs | J1 | Stocker et modifier textes/nombres ; distinguer leurs types |
| J3 | Sélectionner et modifier un élément | J2 et classes HTML | Utiliser querySelector et textContent |
| J4 | Réagir à un clic | J3 | Relier événement et action ; première découverte des fonctions |
| J5 | Modifier une classe CSS | J4 et classes CSS | Changer l’apparence avec classList |
| J6 | Compter et afficher | J2 à J4 | Modifier une valeur puis son affichage |
| J7 | Prendre une décision | J2 et J4 | Comparaisons, booléens et conditions |
| J8 | Lire une saisie | J3, J4 et J7 | Lire un champ, convertir un nombre et traiter une saisie invalide |
| J9 | Organiser ses fonctions | Fonctions rencontrées avec les événements | Actions réutilisables, paramètres et valeur de retour |
| J10 | Stocker une liste de données | J2 | Tableau, accès à un élément et longueur |
| J11 | Répéter une action | J10 et bases des fonctions | Parcourir un tableau avec une boucle |
| J12 | Créer des éléments dans la page | J3, J9 à J11 | Générer et ajouter des éléments à partir de données |

Tout HTML nécessaire à une nouvelle interaction, notamment les boutons, champs et labels, doit être expliqué ou fourni avec une explication.

Jalons :
- après J5 : carte interactive ;
- après J6 : compteur avec remise à zéro ;
- après J8 : mini-quiz à une question avec vérification ;
- après J12 : collection générée à partir de données.

Commencer avec des tableaux de textes si cela suffit. Les objets pour décrire des cartes complètes viennent ensuite.

Objets, hasard, formulaires plus complets et petit jeu navigateur sont des extensions envisagées après ce premier socle. Ne les présente pas comme déjà rédigées ou disponibles.

Prévoir consolidations et bonus sur variables, sélection, événements, conditions, saisies, tableaux et boucles.

## 10. Niveau de détail pédagogique attendu

Un module ne doit pas se réduire à une règle et à du code à copier.

Côté élève :
- objectif concret ;
- résultat attendu ;
- explication accessible du pourquoi ;
- exemple court commenté ;
- manipulation guidée ;
- mission autonome ;
- checklist ;
- aides progressives ;
- consolidation et bonus ;
- suite conseillée avec conditions explicites.

Côté professeur :
- diagnostic d’entrée ;
- ressources à préparer ;
- vocabulaire ;
- speech réellement rédigé ;
- démonstration et explication ;
- questions et réponses attendues ;
- questions ou objections probables ;
- erreurs fréquentes et réactions proposées ;
- corrections ou exemples de solutions ;
- critères observables ;
- décisions de poursuite, consolidation ou approfondissement ;
- conducteur rapide distinct de la préparation détaillée.

Les critères doivent inclure une modification ou un transfert, pas seulement une reproduction. Distinguer réussite autonome, avec modèle ou avec aide.

Réutiliser les blocs existants lorsque possible. Les guides génériques peuvent être publics ; ils ne doivent contenir aucune donnée individuelle ou information interne à un organisme.

Vérifier les explications techniques avec des sources fiables, notamment MDN et les standards pertinents. Référencer sobrement les sources dans les guides.

## 11. Préservation technique

- Conserver les IDs, URLs, anciens hash et références d’activités.
- Préserver les données privées et leur compatibilité.
- Conserver le suivi manuel À voir / En cours / Acquis et la séparation avec les validations de référentiels externes.
- Ne pas ajouter de localStorage pour le suivi.
- Ne pas ajouter de compte élève ni exposer le fichier privé.
- Ne pas reconstruire l’architecture sans nécessité démontrée.
- Conserver GitHub Pages ; pas de migration Netlify.
- Ne pas transformer une future activité en page disponible contenant seulement un titre ou du remplissage.
- Distinguer l’état des contenus : prévu, rédigé, implémenté, vérifié techniquement, relu pédagogiquement, essayé par le professeur. Ne pas inventer les validations manquantes.

Ces distinctions peuvent rester dans la documentation de travail ; elles n’imposent pas la création d’un nouvel outil de suivi.

## 12. Fonctionnement retenu

Tu prends désormais en charge la conception détaillée, l’intégration et les vérifications dans ce projet, à partir de cette roadmap.

Nous travaillons par lots cohérents de production, sans les confondre avec des lots de séances élèves.

Pour chaque lot :
1. Expliquer brièvement le périmètre et les réutilisations.
2. Me consulter pour un changement pédagogique substantiel ou un arbitrage réellement ambigu.
3. Une fois le lot autorisé, réaliser les contenus, l’intégration et les corrections ordinaires sans validation à chaque sous-étape.
4. Vérifier les exemples, les liens, les parcours et les régressions pertinentes.
5. Relire les contenus pédagogiques et corriger les problèmes concrets.
6. Fournir un bilan court et les accès locaux pour mon essai.

Ne multiplier ni les audits généraux, ni les exports, ni les demandes de confirmation répétitives.

Je peux demander un second avis ailleurs, mais aucun transfert vers une autre conversation n’est une condition de poursuite.

Pour l’instant, aucun commit, push ou déploiement sans demande de ma part.

## 13. Correspondances vérifiées dans le dépôt

Cette section décrit l’état du code après les lots HTML complet/premiers styles, fichiers HTML/CSS, zones/lisibilité/espacements et carte personnelle, pas la disponibilité de toute la roadmap cible. Les repères H/C/J ne remplacent aucun identifiant. Source : [lesson-data.js](../lesson-data.js).

### HTML

| Repère | ID existant ou état | Portée réellement présente |
| --- | --- | --- |
| H1 | `html-titres-paragraphes` | Exercices guidés, niveaux de titres et exercice autonome. |
| H2 | `html-listes` | Cours ul/li, exercice guidé et défi. |
| H3 | `html-liens` | Cours a/href et progression d’exercices. |
| H4 | `html-images` | Cours, ressources, manipulation, mission, consolidation, bonus et teacherGuide enrichis. |
| H5 | `html-document` | Document complet, head/body, title/h1, exercices locaux, consolidation, bonus et teacherGuide. |
| H6 | `html-fichiers-chemins` | Dossiers, ressources existantes, chemins relatifs dans src/href, renommage, diagnostic, bonus et teacherGuide. |
| H7 | `html-parent-enfants` | Imbrication, parent direct, descendants, frères, arbre, activités et teacherGuide ; module partagé par Débutants et Avancés. |
| H8 | `html-zones` | header/main/footer, sections thématiques, nav facultatif après les liens, activités, consolidation et teacherGuide. |
| H9 | `html-multipage` | Deux fichiers locaux, liens relatifs, nav, retour indépendant de l’historique, renommage, consolidation, troisième page facultative et teacherGuide. |

### CSS

| Repère | ID existant ou état | Portée réellement présente |
| --- | --- | --- |
| C1 | `css-decouverte` | Découvrir le CSS : sélecteur de balise, propriété, valeur, texte/fond, activités, consolidation, bonus, squelette local et teacherGuide. |
| C2 | `css-classes-couleurs` | Module partagé enrichi : class/.classe, couleurs et fonds, réutilisation, diagnostic avec reprise C1, exercices, consolidation, bonus et teacherGuide. |
| C3 | `css-feuille-style` | Fichier CSS séparé, link/rel/href, preuve de chargement, renommage, distinction chemin/sélecteur et teacherGuide. |
| C4 | `css-textes-lisibles` | Famille, taille, interligne, alignement du texte, comparaisons, transfert, consolidation et teacherGuide. |
| C5 | `css-boites-espacements` | Contenu, padding, bordure simple et margin ; distances comparées, transfert, consolidation et teacherGuide. Les arrondis ne sont pas enseignés. |
| C6 | `css-dimensions-images` | Largeur/limite, border-box, proportions des images, ressources partagées, exercices, pannes, bonus naturel et teacherGuide. |
| C7 | `css-flexbox` | Blocs `cours`, `axes` ; parent, display et direction. |
| C8 | `css-flexbox` | Blocs `espacement`, `repartition`, `alignement` ; gap et axes d’alignement/répartition. |
| C9 | `css-flexbox` | Blocs `retour-ligne`, `reglages-observation`, `defi` ; comparaison concrète nowrap/wrap. |
| C10 | À créer | L’observation de wrap n’est pas un cours complet sur viewport et media queries. |
| C11 | À créer | `css.hover` et un survol fourni existent, pas le cours lien/bouton et focus. |
| C12 | À créer | La réutilisation élémentaire d’une classe en C2 ne constitue pas ce module d’organisation CSS. |

C7–C9 restent un seul module, avec ses identifiants d’activités actuels. Ne pas créer trois copies.

### JavaScript, jalons et autres contenus

- J1 à J12 : **à créer**, aucun module ni compétence JavaScript dans le catalogue actuel. Le tableau de la section 9 est une spécification pédagogique, pas du contenu déjà rédigé.
- Mini-page des fondations : `html-mini-page-fondations`, type `challenge`, déjà implémenté avant Liens et Images.
- Ma page HTML complète : `html-mini-page`, titre conservé « Mini-page HTML complète », type `challenge`. Partagé par Fondations et Débutants, avec exigences initiales inchangées, vérification de transfert, métadonnées et teacherGuide. Pas de solution complète fournie au défi.
- Mon affiche numérique : `web-affiche-numerique`, type `project`, implémenté avec cahier des charges, exemple court, réalisation autonome, vérification/transfert, consolidation, bonus et teacherGuide. Fin de l’extension Fondations et branche facultative Débutants.
- Ma carte personnelle : `web-carte-personnelle`, type `project`, cahier des charges, réalisation, vérifications/transfert, reprises ciblées, bonus et teacherGuide ; sans Flexbox obligatoire.
- Mon mini-site : `web-mini-site`, type `project`, deux pages (troisième facultative), navigation et feuille CSS commune, ressources réutilisées, vérifications/transfert, pannes, bonus et teacherGuide ; sans Flexbox ni publication obligatoire.
- Mon site personnel, Publier et vérifier : **à créer**.
- Ma collection de cartes : l’activité `css-flexbox/mission` s’intitule déjà « Mission jalon — Organiser une collection ». À réutiliser comme base ; le projet jalon complet n’est pas encore implémenté comme module autonome. Ne pas présenter `web-projet-cartes` comme ce projet final.
- `web-projet-cartes` : « Préparer un projet de cartes », type `practice`, base de travail et checklist, pas un projet final.
- `html-revision` : pratique autonome sur titres, paragraphes, listes et liens ; exercices propres au module, sans dépendance aux blocs des cours. Pas d’images exigées avant leur découverte.
- `diagnostic-web` : diagnostic séparé des trois parcours ; ne pas le convertir en parcours ou en certification.
- Les quatre jalons JavaScript de la section 9 : **à créer**.
- Ombres, arrondis, transitions, Grid et extensions JavaScript : envisagés, contenus à préciser. La présence d’arrondis dans du code fourni ne signifie pas que leur cours existe.

### Compétences et infrastructure réellement disponibles

Le domaine `web` et les parcours `web-fondations`, `web-debutants`, `web-avances` référencent désormais un catalogue de vingt-quatre modules (dont le diagnostic séparé). Les douze compétences initiales gardent leur définition :

`html.headings`, `html.text`, `html.lists`, `html.links`, `html.images`, `html.structure`, `css.selectors`, `css.colors`, `css.spacing`, `css.borders`, `css.hover`, `css.flexbox`.

Le lot fichiers ajoute trois compétences génériques distinctes : `html.document` (document complet), `html.paths` (fichiers et chemins relatifs), `css.stylesheets` (feuille externe). Elles ne renomment ni ne valident les anciennes ; le format privé ne change pas. L’absence de progression reste À voir. Aucun mapping de référentiel externe n’est ajouté.

Le lot zones/lisibilité ajoute `html.landmarks` (zones selon leur rôle) et `css.fonts` (famille, taille, interligne, alignement). Ce lot a porté le catalogue à dix-sept compétences, sans changement des quinze précédentes. C5 réutilise `css.spacing` et ne couvre que la bordure simple de `css.borders`, pas les arrondis.

Le lot carte ajoute `css.sizing` (largeur de carte et proportions d’image), portant le total à dix-huit compétences. Les dix-sept définitions antérieures restent intactes ; une acquisition des images ou des espacements n’est pas reportée vers cette compétence.

Le lot multipage ajoute `html.navigation`, portant le total actuel à dix-neuf compétences. Les dix-huit précédentes restent intactes ; les acquis de liens ou chemins ne sont pas reportés. Le suivi reste manuel, sans migration ni mapping externe.

L’existence d’un skill ne prouve pas l’existence d’un cours complet ni son acquisition. En particulier, `css.selectors` porte actuellement le libellé « Créer et utiliser des classes CSS » : ne pas déclarer cette compétence maîtrisée sur la seule découverte d’un sélecteur de balise en C1.

- [lesson-data.js](../lesson-data.js) : catalogue, contenus et guides. Métadonnées et guides renseignés pour les trois modules du premier lot, les quatre contenus du lot HTML complet/premiers styles, les trois modules du lot fichiers, les trois du lot zones/lisibilité/espacements les deux du lot carte et les deux du lot multipage ; les sept autres n’ont pas encore tous leurs prérequis, critères, orientations et guides détaillés.
- [pedagogy.js](../pedagogy.js), [pedagogy.css](../pedagogy.css) et [app.js](../app.js) : rendu public des ressources, prérequis, critères, relations et activités. Absence de métadonnée ≠ absence de prérequis.
- [teacher-guides.js](../teacher-guides.js) et [prof.html](../prof.html) : dix-sept guides consultables sans ouvrir le fichier privé. Les champs actuels permettent déjà des explications, speech, questions/réponses, aides, critères et conducteur rapide ; la qualité attendue en section 10 ne suppose pas un nouveau schéma.
- [teacher-model.js](../teacher-model.js), [teacher-classroom.js](../teacher-classroom.js) : suivi manuel CodeCraft et validations externes indépendantes.
- [teacher-app.js](../teacher-app.js), [teacher-file-access.js](../teacher-file-access.js), [teacher-workspace-format.md](../teacher-workspace-format.md) : accès et compatibilité du fichier privé existant. Aucun changement du mécanisme ni du format privé dans les lots pédagogiques.
- [teacher-sessions.js](../teacher-sessions.js), [prof-conducteur-historique.html](../prof-conducteur-historique.html) : préparation, historique et archive à conserver.

C5 et C6 sont désormais accessibles en reprises ciblées depuis Flexbox. Le module conserve ses prérequis d’entrée structure/sélecteurs, ses exemples dimensionnés et ses exercices ; ces reprises ne deviennent pas des passages obligatoires. Le projet Carte propose Flexbox aux élèves qui comprennent aussi les espaces et dimensions, sans exiger le mini-site.

## 14. États de production et preuves

Ces états sont distincts et peuvent coexister ; ils ne constituent ni un dispositif de suivi élève ni une validation automatique.

| État | Signification |
| --- | --- |
| Prévu | Périmètre pédagogique décidé, pas nécessairement rédigé. |
| Rédigé | Consignes, exemples, exercices et guide effectivement écrits. |
| Implémenté | Contenu intégré et accessible dans le site. |
| Vérifié techniquement | Tests identifiés et réussis sur la version concernée. |
| Relu pédagogiquement | Relecture du contenu réel et traitement des problèmes concrets. |
| Essayé par le professeur | Retour explicite du professeur sur l’usage réel ; jamais déduit de tests. |

État attesté des lots réalisés :

- Les vingt-deux modules actuels sont implémentés avec des contenus ; cela ne signifie pas que tous satisfont déjà le niveau de détail de la section 10.
- Images HTML, Parent et enfants et Flexbox : contenus et guides rédigés, implémentés, relus pédagogiquement et corrigés sur les sept points. Vérification technique rapportée dans le tour précédent : 64 tests automatisés réussis, tests Chrome élève/professeur, copie source seule avec presse-papiers simulé, géométrie de centrage et nowrap/wrap vérifiée. Cela ne vaut pas essai en situation d’enseignement.
- Aucun confort d’utilisation en cours ni essai professeur du premier lot n’est déclaré validé ici. Aucun nouvel audit général n’est demandé.
- Les autres contenus existants restent implémentés ; leurs guides absents sont à rédiger, sans leur attribuer une validation pédagogique nouvelle.
- Les modules de la roadmap toujours marqués **à créer** sont prévus ; ni leur rédaction ni leurs tests ne sont réalisés.
- Le lot HTML complet/premiers styles (section 15) a été autorisé, rédigé, implémenté et relu pédagogiquement. Les nouvelles notions sont expliquées avant usage ; les reprises restent ciblées et les bonus facultatifs. La mini-page ne fournit pas de solution intégrale. Aucune acquisition n’est automatique.
- Vérifications du lot HTML complet/premiers styles : 65 tests unitaires/modèle, intégrations Chrome élèves et professeur ; couleurs calculées des exemples, réparation de classe, ajout d’un élément sans règle nouvelle, squelette local, contexte des modules partagés, détour C1/retour C2, accès aux sept guides, mobile et régressions du premier lot. Les tests professeur emploient des données fictives et des sélecteurs natifs simulés.
- Essayé par le professeur : **à confirmer** pour le lot HTML complet/premiers styles. Les captures et tests ne valident pas le confort en cours.
- Fichiers du lot HTML complet/premiers styles : `lesson-data.js`, `tests/pedagogy.test.cjs`, `tests/student-catalog.cjs`, `README.md` et ce document. Aucun changement du renderer, des compétences, des données privées ou de leur schéma. Aucun commit, push ou déploiement.

## 15. Lot réalisé — HTML complet et premiers styles

### Périmètre et réutilisations

| Élément | Action réalisée après validation du lot | Prérequis et limites |
| --- | --- | --- |
| Ma page HTML complète | `html-mini-page` réutilisé avec son titre et le type `challenge`. Métadonnées, liens de consolidation et teacherGuide ajoutés. Partagé avec Fondations après Images. | Titres/sous-titres, paragraphes, listes, liens, images. Conserver les exigences actuelles : h1, plusieurs niveaux de titres, au moins 3 paragraphes, une liste, 2 liens, 2 images. Aucun CSS obligatoire. |
| C1 — Découvrir le CSS | Module `lesson` `css-decouverte` créé avec son guide. Contenu/apparence, sélecteur de balise, propriété et valeur ; texte et fond avec color/background-color. | Savoir créer et modifier un titre et un paragraphe. Pas de classe nécessaire pour la première découverte ; pas de feuille externe à apprendre avant C3. |
| C2 — Classes et couleurs CSS | Module partagé `css-classes-couleurs` enrichi, IDs préservés. Guide, diagnostic, aides graduées, consolidation, bonus et critères de transfert ajoutés. | Comprendre une règle simple de C1 ; lien de reprise avant les classes si nécessaire. Conserver ciblage, classe réutilisée sur plusieurs éléments et renommage cohérent HTML/CSS. Ne pas imposer de refaire C1 si ces compétences sont déjà comprises. |
| Mon affiche numérique | Module `project` réutilisable `web-affiche-numerique` créé avec cahier des charges, réalisation, vérification et teacherGuide. | Titres/paragraphes et C1/C2. Réutiliser une page existante ou créer un contenu court ; personnaliser texte/fond par des classes. Liens, images et liste peuvent être réinvestis si maîtrisés, sans nouveau prérequis caché. Aucun Flexbox, espacement, bordure, hover, typographie avancée ou publication exigé. |

La mini-page complète reste un défi sans solution intégrale donnée ; les aides orientent vers les activités de consolidation des notions concernées. Ne pas abaisser les exigences déjà proposées aux Débutants. L’affiche constitue une extension CSS distincte : la réussite du noyau HTML ne dépend pas de cette extension.

Pour C1, l’objectif ciblé comprend les couleurs (`css.colors`) et l’explication d’une règle. Ne pas modifier le sens de `css.selectors` ni inventer une acquisition pour faire entrer le diagnostic dans le suivi. Le lot peut réutiliser les compétences existantes, avec des critères textuels précis, sans changement du schéma privé.

### Place retenue dans les parcours

**Fondations après le lot :**

Titres et paragraphes → Listes HTML → **Mini-page des fondations (inchangée)** → Liens HTML → Images HTML → **Mini-page HTML complète (partagée)** → **Découvrir le CSS** → **Classes et couleurs CSS (partagé)** → **Mon affiche numérique**.

**Débutants après le lot :**

Conserver l’ordre principal actuel :
Titres et paragraphes → Listes HTML → Liens HTML → Révision HTML → Images HTML → Classes et couleurs CSS → Mini-page HTML complète.

Depuis l’entrée de Classes et couleurs, rendre C1 accessible comme reprise conseillée si l’élève n’explique pas encore une règle CSS. Le lien vers le module de découverte reste direct et ouvert ; prévoir un retour explicite vers C2. Aucun écran de validation ni blocage.

Après la mini-page complète, proposer Mon affiche numérique comme jalon CSS facultatif si C1/C2 sont compris. Cette branche ne devient pas obligatoire pour la suite H5/H6, désormais disponible. C1 et l’affiche sont des modules uniques, également utilisés par Fondations ; ils n’ont pas besoin de deux versions ni d’une insertion forcée dans l’ordre principal Débutants. Le contexte précédent/suivant reste celui des parcours contenant réellement le module.

**Avancés :** aucun changement dans ce lot. Les liens de reprise vers Classes et couleurs continueront d’ouvrir le même module enrichi.

### Niveau de production et contrôles du lot

Pour les quatre contenus concernés, préparer les supports élèves et les guides au niveau de la section 10, en réutilisant les blocs et métadonnées actuels. Les nouvelles notions C1 seront expliquées avant emploi ; les exercices distingueront copie, modification et transfert.

- Diagnostic bref sans présumer des acquis ; consolidation ciblée si nécessaire.
- Speech rédigé, vocabulaire expliqué, questions/réponses, objections probables, corrections et aides concrètes intégrés aux champs de guide existants.
- Manipulations CodePen explicites. Pour les projets locaux, fournir au besoin un squelette commenté ; ne pas imposer la maîtrise de H5/H6/C3 pour réussir ces premières activités HTML/CSS.
- Bonus limités aux acquis indiqués ; texte/fond lisibles, aucune décoration avancée nécessaire.
- Critères observables et niveau d’aide distingués ; décision manuelle, pas de validation par checklist.
- Vérification des explications avec MDN et standards lors de la rédaction ; sources sobres dans les guides, pas de prétendue vérification de cours encore absents.
- Exemples réellement exécutés ; liens, anciens IDs, contexte des modules partagés, ressources Images et non-régression du suivi vérifiés.
- Relecture ciblée suivie des corrections ordinaires, puis bilan et liens locaux pour essai du professeur.

### Arbitrages

Aucun arbitrage supplémentaire n’a été nécessaire pendant la réalisation de ce lot.

Les choix validés et appliqués sont : réutiliser le challenge HTML existant sans le dupliquer ni le renommer ; garder l’ordre principal Débutants et y proposer C1 en reprise accessible ; proposer l’affiche comme projet final de cette extension Fondations et branche facultative Débutants.

Le choix de séparer à l’avenir des compétences plus fines, ou de transformer la mission Flexbox en projet complet, n’est ni requis ni décidé par ce lot. Les prérequis renforcés C5/C6 de la roadmap seront alignés lors d’un lot ultérieur, sans retrait de contenu actuel.

### Accès locaux et essai professeur

Serveur à la racine du dépôt : `python -m http.server 8000`. Aucun déploiement nécessaire.

| Contenu | Élève | Guide |
| --- | --- | --- |
| Mini-page HTML complète | [Activité](http://127.0.0.1:8000/#module/html-mini-page?parcours=web-fondations) | [Guide](http://127.0.0.1:8000/prof.html#guide/html-mini-page) |
| Découvrir le CSS | [Activité](http://127.0.0.1:8000/#module/css-decouverte?parcours=web-fondations) | [Guide](http://127.0.0.1:8000/prof.html#guide/css-decouverte) |
| Classes et couleurs CSS | [Activité](http://127.0.0.1:8000/#module/css-classes-couleurs?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/css-classes-couleurs) |
| Mon affiche numérique | [Activité](http://127.0.0.1:8000/#module/web-affiche-numerique?parcours=web-fondations) | [Guide](http://127.0.0.1:8000/prof.html#guide/web-affiche-numerique) |

Essai court : ouvrir C2 dans Débutants, prendre le lien de reprise C1, exécuter l’exemple et modifier seulement le fond, puis revenir à C2. Ouvrir ensuite l’affiche depuis la mini-page et demander un troisième paragraphe de même style sans nouvelle règle. Comparer avec les réponses du guide, en distinguant aide à la manipulation et compréhension. L’essai du défi HTML conserve ses six exigences initiales.

## 16. Lot réalisé — Du contenu CodePen aux fichiers HTML/CSS

### Modules et place dans les parcours

Trois modules `lesson`, définis une seule fois dans [lesson-data.js](../lesson-data.js), avec métadonnées et guides détaillés :

| Repère | ID | Compétence ciblée | Prérequis et reprises |
| --- | --- | --- | --- |
| H5 | `html-document` | `html.document` | Avoir assemblé une petite page avec titres et paragraphes. Aide à la création/enregistrement du fichier distinguée du choix des balises. |
| H6 | `html-fichiers-chemins` | `html.paths` | Liens et images ; cadre complet fourni et reprise H5 disponible. Le SVG existant du module Images est téléchargé, pas recopié en source encodée. |
| C3 | `css-feuille-style` | `css.stylesheets` | Document complet, chemins relatifs et règle CSS simple. Reprises H5/H6/C1 accessibles avant les exercices ; les classes ne sont pas exigées par l’exemple h1. |

Débutants conserve ses sept premiers modules, puis poursuit par :
**Mini-page HTML complète → Structure d’un document HTML → Fichiers et chemins → Relier une feuille de style**.

Fondations et Avancés gardent exactement leurs listes et objectifs actuels, ainsi que leurs contenus élèves. Dans Débutants, le bouton suivant de la mini-page complète mène à H5 ; dans Fondations il continue de mener à C1. Seule une ancienne note de guide annonçant H5/H6 indisponibles a été actualisée. La fin de C3 renvoie vers le module Parent et enfants déjà existant ou une reprise des classes selon les acquis ; aucun autre module n’est ajouté au parcours dans ce lot.

### Périmètre réellement enseigné

- H5 : cadre du document, rôle de head/body, title vs h1, changements indépendants et vérification du bon fichier enregistré. La saisie du cadre peut être aidée ; son explication reste observée séparément.
- H6 : fichier/dossier/extension, chemin relatif depuis le document, dessin dans images, usages distincts de src et href, renommage et diagnostic d’absence. Le lien ouvre un dessin : ce n’est pas un cours multipage.
- C3 : HTML et CSS séparés, link dans head, rel/href, test de chargement par changement de couleur, renommage de feuille et distinction chemin absent/sélecteur incorrect.
- Les dossiers supplémentaires sont des bonus explicitement facultatifs. Aucune publication, media query, bibliothèque ou serveur obligatoire.
- CodePen ne remplace pas les essais de fichiers : son cadre et son raccordement CSS sont expliqués. Sans accès aux fichiers, le repérage reste possible mais la manipulation pratique n’est pas déclarée validée.
- Chaque guide contient diagnostic, préparation, speech, vocabulaire expliqué, exemple, questions/réponses, erreurs et aides, solutions attendues, critères, décisions de suite et conducteur rapide sans horaires.
- Sources vérifiées lors de la rédaction : MDN (head, fichiers, chemins, link et première feuille externe) et HTML Standard (title), référencées dans les guides.
- Les nouveaux skills sont ajoutés au catalogue, sans altérer les douze définitions existantes. Le suivi les affiche avec des libellés humains et les statuts manuels existants. L’ouverture d’un ancien JSON ne crée pas d’entrée et ne reporte pas une acquisition de html.structure vers html.document.

### Vérifications et état

**Rédigé, implémenté, relu pédagogiquement, vérifié techniquement. Essayé par le professeur : à confirmer.**

- 67 tests unitaires/modèle réussis ; références pédagogiques, reprises, anciens fichiers privés et nouveaux états À voir implicites.
- Intégration Chrome élève : navigation complète et anciens hash, dix guides sans fichier privé, activités directes, mobile, ressources et premiers lots sans régression.
- Vrais fichiers temporaires ouverts en `file://` : modification indépendante de title/h1, affichage et clic du SVG, renommage et réparation des deux chemins, sous-dossier supplémentaire, chargement de la feuille, couleur modifiée/rechargée, renommage, erreur de chemin vs sélecteur et rangement du CSS dans un dossier.
- Intégration Chrome professeur : suivi, séances, sauvegarde/rechargement, archive et impression. Documents fictifs et sélecteurs natifs simulés ; aucun accès au fichier Drive réel.
- Captures ciblées relues pour les cours et guides. Contrôle de portée : les autres modules, compétences initiales, alias, Fondations et Avancés sont conservés, hors la note professeur d’indisponibilité de la mini-page actualisée plus haut.
- Fichiers modifiés dans ce lot : `lesson-data.js`, `tests/pedagogy.test.cjs`, `tests/student-catalog.cjs`, `README.md`, ce document. Aucun renderer ni mécanisme privé modifié ; aucun nouvel asset. Aucun commit, push ou déploiement.

### Accès locaux

| Contenu | Élève | Guide |
| --- | --- | --- |
| Structure d’un document HTML | [Activité](http://127.0.0.1:8000/#module/html-document?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/html-document) |
| Fichiers et chemins | [Activité](http://127.0.0.1:8000/#module/html-fichiers-chemins?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/html-fichiers-chemins) |
| Relier une feuille de style | [Activité](http://127.0.0.1:8000/#module/css-feuille-style?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/css-feuille-style) |

Essai professeur court : créer le document et changer seulement l’onglet ; télécharger/ranger le carré, le renommer et réparer affichage + clic ; créer la feuille CSS, vérifier une couleur, renommer la feuille puis rétablir sa liaison. Utiliser les guides pour comparer compréhension autonome, modèle et aide de manipulation.

## 17. Lot réalisé — Structurer une page et maîtriser les espacements

### Périmètre et réutilisations

Lot autorisé : réutiliser H7 dans Débutants et créer H8, C4 et C5 avec contenus élèves et guides complets. Aucun nouveau renderer, style d’interface, asset, format privé ou mapping externe.

| Repère | Module unique | Contenu réellement disponible |
| --- | --- | --- |
| H7 | `html-parent-enfants` | Module existant partagé, sans copie. Exercices et références préservés ; transition et raison pédagogique élargies aux zones HTML, lien de suite H8 ajouté, Flexbox reste accessible. |
| H8 | `html-zones` | Rôles de header/main/footer, distinction head/header, un main et plusieurs sections thématiques, réparation d’imbrication et nav facultatif avec prérequis liens. |
| C4 | `css-textes-lisibles` | font-family, font-size, line-height, text-align ; exemples sans police externe, comparaisons à un réglage, mission sans nom de propriété, panne d’interligne et bonus de comparaison. |
| C5 | `css-boites-espacements` | Contenu, padding, border simple, margin ; exemple à fonds témoins, marges des enfants expliquées, comparaison latérale pour éviter une fausse addition des marges verticales, transfert et variantes compacte/aérée. |

Ordre final Débutants :

Titres et paragraphes → Listes HTML → Liens HTML → Révision HTML → Images HTML → Classes et couleurs CSS → Mini-page HTML complète → Structure d’un document HTML → Fichiers et chemins → Relier une feuille de style → **Parent et enfants → Organiser une page en zones → Rendre les textes lisibles → Boîtes et espacements**.

Fondations et la liste Avancés sont conservés. Le contenu Parent et enfants est unique : suivant/précédent suit Débutants ou Avancés selon le contexte. Ouvert directement, le module permet de retrouver l’un ou l’autre parcours. Les reprises restent accessibles et les bonus ne conditionnent pas la suite.

Deux nouveaux skills génériques sont distincts des acquis antérieurs : `html.landmarks` et `css.fonts`. L’absence d’entrée reste À voir. Une acquisition de `html.structure` ou de `css.colors` n’est pas reportée. Le guide C5 signale explicitement que la bordure simple ne suffit pas à valider l’ensemble de `css.borders`, dont le libellé inclut les arrondis.

Chaque guide contient diagnostic, préparation, speech rédigé, exemple commenté, questions/réponses, erreurs et aides graduées, solutions possibles, différenciation, critères et conducteur sans horaires. Les observations distinguent autonomie, modèle, aide pédagogique et aide de manipulation, sans nouveau mécanisme de suivi.

Les trois nouveaux modules fonctionnent dans CodePen ; une copie de projet local avec feuille reliée est également utilisable. Les consignes précisent les emplacements HTML/CSS et proposent les reprises nécessaires. Aucun nouveau serveur, compte, bibliothèque ni prérequis de publication.

### Relecture et vérifications

**Rédigé, implémenté, relu pédagogiquement et vérifié techniquement. Essayé par le professeur : à confirmer.**

- 69 tests unitaires/modèle réussis : références, tâches, prérequis, partage, guides, ancien fichier compatible et suivi manuel des nouveaux skills.
- Chrome élève : tous les parcours, précédent/suivant, accès directs, anciens hash, treize guides sans fichier privé, mobile et absence d’exception JavaScript.
- Exemples exécutés à partir du catalogue : arbre des zones, remplacement du main par les sections, ajout d’une troisième sœur, panne d’imbrication et destinations nav.
- Texte : paragraphes réellement multilignes à 360px ; interligne 18→27→30,6px sans changer font-size 18px ; titre indépendant, troisième paragraphe partageant la classe, boîte inchangée lorsque le texte est aligné à droite ; panne 24px/0.8 réparée avec 1.5.
- Boîtes : mesures réelles à gauche du parent et du contenu ; padding seul, margin seule, épaisseur de bordure, troisième carte, panne et deux variantes. Facteur d’échelle du navigateur de test fixé à 1 pour éviter l’arrondi des bordures au zoom Windows.
- Chrome professeur : suivi, séances, sauvegarde/rechargement, conflits, historique et impression sur données fictives ; aucun accès au fichier Drive réel. Les permissions natives ne sont pas retestées sur un fichier personnel.
- Sources MDN consultées et référencées dans les guides ; captures élèves et professeur contrôlées, pas de changement de design.

Fichiers du lot : `lesson-data.js`, `tests/pedagogy.test.cjs`, `tests/student-catalog.cjs`, `README.md`, ce document. Aucun commit, push ou déploiement.

### Accès locaux et essai court

| Contenu | Élève | Guide |
| --- | --- | --- |
| Parent et enfants partagé | [Activité Débutants](http://127.0.0.1:8000/#module/html-parent-enfants?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/html-parent-enfants) |
| Organiser une page en zones | [Activité](http://127.0.0.1:8000/#module/html-zones?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/html-zones) |
| Rendre les textes lisibles | [Activité](http://127.0.0.1:8000/#module/css-textes-lisibles?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/css-textes-lisibles) |
| Boîtes et espacements | [Activité](http://127.0.0.1:8000/#module/css-boites-espacements?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/css-boites-espacements) |

Essai : ajouter une troisième section et nommer le parent de son h2 ; aérer les lignes sans agrandir les lettres ; éloigner les mots de la bordure puis la carte du cadre. Comparer les explications aux guides, sans déduire d’acquisition d’une simple copie.

À la fin de ce lot, la suite prévue était C6 Dimensions et images dans une carte puis Ma carte personnelle ; leur réalisation est consignée en section 18. H9 a ensuite été réalisé en section 19 ; JavaScript reste prévu, sans contenu de remplissage ni lien vers une page inexistante.

## 18. Lot réalisé — Dimensions et carte personnelle

### Périmètre

- `css-dimensions-images`, cours « Dimensions et images dans une carte » : largeur souhaitée, limite relative au parent, prise en compte du padding/bordure avec border-box, largeur de l’image et hauteur automatique. Comparaisons, mission avec prédiction, distinction source absente/déformation/débordement, bonus facultatif de taille naturelle.
- `web-carte-personnelle`, projet « Ma carte personnelle » : thème libre sans donnée personnelle, conteneur, titre, deux paragraphes avec classe commune, image et alt, lisibilité, espace intérieur, largeur adaptée ; réalisation puis vérification et transfert sans nom de propriété. Pas de solution complète côté élève.
- Deux teacherGuide complets : diagnostics, préparation, speech, vocabulaire dans les explications, questions/réponses attendues, aides, erreurs, solutions possibles, critères, décisions de suite et conducteur sans rythme imposé.
- Dessins carré/cercle réutilisés par le type `reference` déjà pris en charge : seuls les blocs de ressource du module Images sont référencés. Les sources, boutons et SVG restent uniques ; aucun cours ou exercice de révision n’est dupliqué ni recouplé.
- La compétence nouvelle `css.sizing` est indépendante. Pas de changement de format privé, d’acquisition automatique, de référentiel externe ou de données personnelles.

### Intégration aux parcours

Débutants conserve tout son ordre antérieur, puis poursuit :

**Boîtes et espacements → Dimensions et images dans une carte → Ma carte personnelle**.

Les listes Fondations et Avancés sont inchangées. Flexbox ajoute uniquement des liens de consolidation vers Boîtes et Dimensions, sans nouveau passage imposé ni modification de ses exercices. Les anciens liens restent valides ; un détour depuis Avancés ouvre Dimensions directement, sans inventer un contexte de parcours qui ne contient pas ce cours.

La transition et une note professeur de Boîtes sont actualisées pour ne plus annoncer ces contenus absents. Les autres modules, leurs compétences et leurs activités restent inchangés.

À la fin de ce lot, Relier plusieurs pages et Mon mini-site restaient à créer ; leur réalisation est consignée en section 19. Une orientation facultative vers Flexbox depuis le projet indique les prérequis structure/classes/espaces/dimensions ; aucun besoin d’attendre le mini-site. La consolidation et le bonus restent des choix, pas un rythme imposé.

### Relecture et contrôles

**Rédigé, implémenté, relu pédagogiquement, vérifié techniquement. Essayé par le professeur : à confirmer.**

- 71 tests unitaires/modèle réussis : relations, ressources partagées, prérequis, nature du jalon, compatibilité des anciens JSON, absence de report d’acquisition et suivi manuel du nouveau skill.
- Chrome élève : parcours et anciens hash, précédent/suivant, accès directs et rechargement d’activités, quinze guides sans fichier privé, mobile, ressources repliées, copie de source seule avec presse-papiers simulé, régressions des lots antérieurs.
- Exemples du catalogue exécutés : carte 320px/image 284 × 213 ; carte 240px/image 204 × 153 ; transfert 280px/padding 24px/image 228 × 171. Contrôle du ratio naturel 4/3 et des limites aux largeurs d’aperçu 260, 390 et 500px.
- Pannes réellement reproduites : hauteur 80px déformante puis auto ; suppression de max-width provoquant un débordement puis réparation. Bonus : image naturelle 160 × 120 puis réduction 124 × 93 dans une carte de 160px.
- Réalisation possible du guide testée : deux paragraphes de même classe, lignes supplémentaires sans hauteur fixe, interligne 1.5→1.7 sans agrandir les lettres, largeur réduite sans déformation.
- Variante locale testée avec vrais fichiers temporaires : CSS externe et image SVG dans images, chargement et rechargement. Aucun fichier personnel utilisé.
- Chrome professeur : suivi, séances, sauvegarde/rechargement, erreurs/conflits, historique et impression sur données fictives ; aucun accès au fichier Drive réel ni nouvelle validation des permissions natives.
- Relecture ciblée : propriétés expliquées avant usage, source séparée de alt, calcul de boîte explicite, bonus non requis, rendu seul non assimilé à compréhension. Sources MDN référencées dans les guides.
- Captures des cours et guides contrôlées ; architecture et design conservés. Aucun commit, push ou déploiement.

Fichiers : `lesson-data.js`, `tests/pedagogy.test.cjs`, `tests/student-catalog.cjs`, `README.md`, ce document. Aucun nouveau fichier ou asset.

### Accès et essai professeur

| Contenu | Élève | Guide |
| --- | --- | --- |
| Dimensions et images dans une carte | [Activité](http://127.0.0.1:8000/#module/css-dimensions-images?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/css-dimensions-images) |
| Ma carte personnelle | [Projet](http://127.0.0.1:8000/#module/web-carte-personnelle?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/web-carte-personnelle) |

Essai court : copier seulement la source du cercle, écrire alt, comparer la carte large/étroite puis réparer la hauteur 80px. Ouvrir ensuite le cahier des charges du projet et demander les deux changements sans nom de propriété. Comparer aux réponses attendues en distinguant autonomie, modèle et aide.

## 19. Lot réalisé — Relier plusieurs pages et Mon mini-site

### Portée

- `html-multipage`, cours H9 « Relier plusieurs pages » : deux documents complets, liens relatifs entre voisins, nav expliqué avant usage, retour indépendant de l’historique. Exercice guidé, changement du texte visible, renommage et réparation dans les deux menus, pannes distinctes et troisième page facultative.
- `web-mini-site`, projet « Mon mini-site » : deux pages aux rôles distincts, navigation cohérente et une feuille CSS commune. Cahier des charges, preuve de partage, réalisation sans solution intégrale, images et lisibilité, transfert sans nom de propriété, réparations ciblées et troisième page facultative.
- Les deux guides fournissent diagnostic, préparation, explications, speeches, questions/réponses, activités, aides graduées, erreurs/solutions et critères selon le niveau d’aide. Les sources MDN sur liens, nav, fichiers et feuille externe sont référencées.
- La source image existante est réutilisée par référence, sans duplication de ressource. Aucun renderer, style d’interface, format privé, référentiel externe ou mécanisme de sauvegarde modifié.
- `html.navigation` est une compétence indépendante. Ni consulter un module, ni cocher, ni terminer le projet ne vaut acquisition. Les liens et chemins acquis ne valident pas automatiquement la navigation multipage.

### Parcours et prérequis

Débutants conserve tout son ordre précédent, puis termine désormais par :

Boîtes et espacements → Dimensions et images dans une carte → Ma carte personnelle → Relier plusieurs pages → Mon mini-site.

Fondations et Avancés ne changent pas. La transition de Carte propose le nouveau cours avec ses prérequis explicites et conserve Flexbox comme autre branche possible. Le multipage n’est pas un seuil obligatoire avant Flexbox ou JavaScript.

Le cours requiert document complet, fichiers/chemins et liens, mais pas CSS. Le projet réinvestit feuille externe, classes, couleurs, textes, espacements, dimensions et images ; les reprises sont accessibles. Aucun serveur, compte, publication, Flexbox ou effet avancé n’est demandé. Les activités se déroulent dans des fichiers locaux, pas dans un Pen unique.

### Vérifications

- 73 tests unitaires/modèle réussis : références, prérequis, guides, unicité des ressources, ordre des parcours, ancien JSON inchangé et suivi manuel.
- Chrome élève : parcours complets, anciens hash, précédent/suivant, accès directs, dix-sept guides, mobile et ressources.
- Les deux documents exacts du cours sont enregistrés en fichiers temporaires et ouverts réellement en `file://`. Tous les liens sont cliqués depuis les deux pages, puis les trois du bonus ; le retour fonctionne depuis une entrée directe.
- Renommage : destination absente constatée, href réparés dans les deux menus ; texte visible changé sans modifier la destination ; absence de retour distinguée d’un lien erroné.
- Projet : une solution possible du guide vérifie un CSS commun, couleur navy→darkgreen et interligne 1.5→1.7 sur les deux pages sans changement HTML ni taille de lettres ; pannes de feuille, classe et image séparées et réparées ; largeur réduite et proportions contrôlées.
- Intégration professeur existante : suivi, séances, historiques, sauvegarde/relecture et impression avec données fictives, sans accès à un fichier Drive personnel.
- Essai pédagogique par le professeur : **à confirmer**. Les tests ne valent pas validation en situation de cours.
- Aucun commit, push ni déploiement.

### Accès local

| Contenu | Élève | Professeur |
| --- | --- | --- |
| Relier plusieurs pages | [Cours](http://127.0.0.1:8000/#module/html-multipage?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/html-multipage) |
| Mon mini-site | [Projet](http://127.0.0.1:8000/#module/web-mini-site?parcours=web-debutants) | [Guide](http://127.0.0.1:8000/prof.html#guide/web-mini-site) |

Essai court : ouvrir directement la deuxième page puis rejoindre l’accueil par son menu ; renommer cette page et réparer les deux menus ; modifier une règle commune puis actualiser les deux pages. Comparer explication autonome, avec modèle ou avec aide.
