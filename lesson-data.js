/* Bibliothèque permanente : identifiants stables, contenus uniques et parcours par références. */
window.CODECRAFT_DATA = {
  "schemaVersion": 1,
  "site": {
    "name": "CodeCraft",
    "subtitle": "Espace de cours",
    "codepenLabel": "Ouvrir CodePen",
    "codepenUrl": "https://codepen.io/pen",
    "homeLabel": "Retour à l'accueil",
    "homeIntro": "Choisis ton univers. Construis à ton rythme.",
    "homeChoiceLabel": "Quel univers veux-tu explorer ?"
  },
  "scratchProjects": {
    "chat-cible": {
      "title": "Un chat et une cible",
      "starterUrl": "https://scratch.mit.edu/projects/1388027652/",
      "demoUrl": "https://scratch.mit.edu/projects/1388025424/",
      "studentInstructions": "Cette base prépare seulement les personnages : suis les étapes du module pour construire le programme. Clique sur Voir à l’intérieur. Si tu es connecté à ton compte Scratch, clique sur Remix pour conserver ta propre version. Sans compte, utilise Fichier → Sauvegarder sur votre ordinateur pour conserver ton travail. Ne travaille pas sur le compte du professeur.",
      "teacherInstructions": "La base partagée contient Chat sans script en x = -100, y = 0, et une souris nommée Cible sans script en x = 80, y = 0. Ne pas ajouter une deuxième cible. Depuis un projet vide, Ball renommé Cible reste une alternative. Piloter un personnage utilise seulement le chat ; laisse la cible de côté. Pour Compter et mémoriser, conserve le programme réalisé dans Faire réagir le jeu : ne repars pas de la base vide. La démonstration complète Le chat et la souris utilise des événements clavier séparés, une cible aléatoire et un son ; ce sont des différences à expliquer, pas des prérequis cachés ni une solution exacte des modules. Montrer le résultat sans demander de recopier tout son code."
    },
    "labyrinthe": {
      "title": "Labyrinthe",
      "starterUrl": "https://scratch.mit.edu/projects/1388027832/",
      "demoUrl": "https://scratch.mit.edu/projects/1388025497/"
    },
    "carte-animee": {
      "title": "Carte animée",
      "starterUrl": "https://scratch.mit.edu/projects/1388027889/",
      "demoUrl": "https://scratch.mit.edu/projects/1388025602/",
      "studentInstructions": "Ouvre la base puis Voir à l’intérieur. Avec ton compte, utilise Remix pour garder ta copie ; sans compte, sauvegarde depuis Fichier sur ton ordinateur. Pico et Tera sont déjà présents, sans scripts. Giga et les décors supplémentaires peuvent rester de côté pour le premier dialogue : ne recopie pas le projet terminé.",
      "teacherInstructions": "La base Carte animée fournit les personnages et décors, sans scripts. Le module propose un nouveau dialogue minimal entre Pico et Tera, pas une reproduction de la démonstration complète. Celle-ci utilise des délais et des changements d’arrière-plan : elle illustre un résultat possible, pas une solution exacte aux messages. Giga sert seulement à une extension facultative."
    }
  },
  "moduleTypes": {
    "lesson": "Cours",
    "practice": "Entraînement",
    "challenge": "Défi",
    "project": "Projet",
    "diagnostic": "Diagnostic"
  },
  "domains": {
    "python": {
      "title": "Python",
      "homeDescription": "Écris tes premiers programmes, pose des questions et construis tes propres projets avec Thonny.",
      "homeTag": "PYTHON · THONNY",
      "pathwayIds": ["python-debutants"],
      "diagnosticModuleIds": []
    },
    "jeux-video": {
      "title": "Jeu vidéo",
      "homeDescription": "Donne vie à tes idées avec Scratch : personnages, mouvements et premiers jeux.",
      "homeTag": "SCRATCH",
      "pathwayIds": ["scratch-debutants"],
      "diagnosticModuleIds": []
    },
    "web": {
      "title": "Web",
      "homeDescription": "Construis tes premières pages et apprends à les mettre en forme avec HTML et CSS.",
      "homeTag": "HTML · CSS",
      "pathwayIds": [
        "web-fondations",
        "web-debutants",
        "web-avances"
      ],
      "diagnosticModuleIds": [
        "diagnostic-web"
      ]
    }
  },
  "skills": {
    "python.workspace": { "title": "Créer, enregistrer et exécuter un programme Python" },
    "python.output": { "title": "Afficher des messages et expliquer leur ordre" },
    "python.variables": { "title": "Conserver et réutiliser des valeurs dans des variables" },
    "python.input": { "title": "Demander et utiliser une réponse textuelle" },
    "python.numbers": { "title": "Calculer et conserver des valeurs numériques" },
    "python.conversion": { "title": "Convertir une réponse attendue en entier" },
    "python.debugging": { "title": "Diagnostiquer une erreur et vérifier sa correction" },
    "python.conditions": { "title": "Construire et tester un choix à deux issues" },
    "python.branches": { "title": "Ordonner et tester plusieurs issues avec elif" },
    "python.for": { "title": "Prévoir et modifier une répétition avec for/range" },
    "python.while": { "title": "Expliquer et actualiser une répétition conditionnelle" },
    "python.accumulation": { "title": "Initialiser et actualiser un compteur ou un total" },
    "python.random": { "title": "Importer random et distinguer tirage conservé et nouveaux appels" },
    "python.lists": { "title": "Créer, consulter, parcourir et compléter une liste" },
    "python.text": { "title": "Observer et transformer du texte selon une règle explicite" },
    "scratch.clones": { "title": "Créer et gérer des copies temporaires d’un personnage" },
    "scratch.time": { "title": "Mesurer et limiter le temps d’une partie" },
    "scratch.debugging": { "title": "Observer, expliquer et corriger une erreur dans un programme" },
    "scratch.messages": { "title": "Coordonner des personnages avec des messages" },
    "scratch.custom-blocks": { "title": "Créer et réutiliser un bloc personnalisé" },
    "scratch.game-rules": {
      "title": "Définir une fin de partie et recommencer proprement"
    },
    "scratch.loops": {
      "title": "Répéter des actions avec une boucle"
    },
    "scratch.conditions": {
      "title": "Tester une condition et choisir une action"
    },
    "scratch.contacts": {
      "title": "Détecter un contact et faire réagir le jeu"
    },
    "scratch.variables": {
      "title": "Mémoriser et modifier une valeur avec une variable"
    },
    "scratch.workspace": {
      "title": "Se repérer dans Scratch et conserver son projet"
    },
    "scratch.events": {
      "title": "Déclencher un programme avec un événement"
    },
    "scratch.sequence": {
      "title": "Ordonner des actions et observer leur résultat"
    },
    "scratch.coordinates": {
      "title": "Repérer et modifier la position X/Y"
    },
    "scratch.keyboard": {
      "title": "Piloter un personnage au clavier"
    },
    "html.headings": {
      "title": "Créer et organiser des titres"
    },
    "html.text": {
      "title": "Créer des paragraphes"
    },
    "html.lists": {
      "title": "Créer des listes"
    },
    "html.links": {
      "title": "Créer des liens"
    },
    "html.images": {
      "title": "Insérer et décrire des images"
    },
    "html.structure": {
      "title": "Identifier la structure HTML, les parents et les enfants"
    },
    "css.selectors": {
      "title": "Créer et utiliser des classes CSS"
    },
    "css.colors": {
      "title": "Changer les couleurs"
    },
    "css.spacing": {
      "title": "Utiliser margin et padding"
    },
    "css.borders": {
      "title": "Utiliser les bordures et border-radius"
    },
    "css.hover": {
      "title": "Créer un effet au survol"
    },
    "css.flexbox": {
      "title": "Organiser des éléments avec Flexbox"
    },
    "html.document": {
      "title": "Créer la structure complète d’un document HTML"
    },
    "html.paths": {
      "title": "Organiser les fichiers et utiliser des chemins relatifs"
    },
    "css.stylesheets": {
      "title": "Relier et vérifier une feuille de style externe"
    },
    "html.landmarks": {
      "title": "Organiser une page en zones HTML selon leur rôle"
    },
    "css.fonts": {
      "title": "Régler la police, la taille, l’interligne et l’alignement du texte"
    },
    "css.sizing": {
      "title": "Régler la largeur d’une carte et préserver les proportions d’une image"
    },
    "html.navigation": {
      "title": "Relier des pages HTML et vérifier leur navigation"
    }
  },
  "modules": {
    "python-thonny": {
      "domainId": "python", "title": "Premiers pas avec Thonny", "type": "lesson", "theme": "fondations",
      "presentation": "workshop",
      "objective": "Créer, enregistrer, exécuter et retrouver un programme Python.",
      "tool": { "label": "Télécharger Thonny", "url": "https://thonny.org/" },
      "skillIds": ["python.workspace"], "prerequisiteSkills": [], "prerequisitesInContent": true,
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Aucune expérience en programmation n’est nécessaire. Ouvre Thonny sur ton ordinateur et garde CodeCraft à côté. Si Thonny n’est pas installé, le bouton Télécharger Thonny mène au site officiel : installe la version adaptée à ton système, puis ouvre l’application. Aucun compte n’est requis." },
        { "type": "lesson", "id": "reperes", "title": "1 - Où écrire et où lire ?", "paragraphs": [
          "Dans l’éditeur, en haut, tu écris les instructions du programme. Dans la console, en bas, tu lis les résultats. Si elle est masquée, utilise Affichage → Console.",
          "Exécuter (triangle vert) lance le fichier ouvert dans l’éditeur. Arrêter / redémarrer (carré rouge) interrompt un programme et remet la console à zéro. La disposition peut varier : le schéma sert de repère.",
          "Si tu vois >>> dans la console, cela signifie que Python attend une instruction. Ce symbole est affiché automatiquement : ne le recopie pas dans ton fichier. Pour ces activités, écris le code dans l’éditeur."
        ], "codeDiagram": {
          "filename": "bonjour.py",
          "codeParts": [{ "text": "print", "kind": "function" }, { "text": "(" }, { "text": "\"Bonjour !\"", "kind": "string" }, { "text": ")" }],
          "output": "Bonjour !",
          "note": "Après une modification du code, exécute à nouveau pour actualiser le résultat."
        } },
        { "type": "lesson", "id": "exemple", "title": "2 - Ton premier fichier", "paragraphs": [
          "Choisis Fichier → Nouveau. Dans l’éditeur vide, écris la ligne ci-dessous avec des guillemets droits et les deux parenthèses. print affiche le message placé entre guillemets ; tu le découvriras plus en détail ensuite.",
          "Choisis Fichier → Enregistrer sous, crée ou choisis un dossier pour tes programmes, puis nomme le fichier bonjour.py. .py indique un fichier Python. Si Thonny demande où enregistrer, choisis Cet ordinateur.",
          "Clique sur Exécuter, ou utilise F5. Dans la console, tu dois lire Bonjour ! : le message affiché est le résultat, pas une nouvelle instruction à recopier."
        ], "code": "print(\"Bonjour !\")", "actionSteps": [
          { "title": "Écrire", "paragraphIndex": 0, "showCode": true },
          { "title": "Enregistrer", "paragraphIndex": 1 },
          { "title": "Exécuter", "paragraphIndex": 2, "output": "Bonjour !" }
        ] },
        { "type": "tasks", "id": "guide", "title": "Exercice guidé - écrire, lancer, retrouver", "items": [
          { "id": "premier-fichier", "text": "Crée bonjour.py, écris le modèle et exécute-le.", "hint": "Écris dans l’éditeur du haut. Si la ligne échoue, compare les guillemets et parenthèses. Demande de l’aide pour l’installation ou le clavier si nécessaire." },
          { "id": "modifier-message", "text": "Remplace Bonjour ! par un autre message. Enregistre avec Ctrl+S (Cmd+S sur Mac), puis exécute à nouveau.", "hint": "Modifie seulement le texte entre guillemets. Modifier le fichier n’exécute pas automatiquement le nouveau code." },
          { "id": "rouvrir-fichier", "text": "Enregistre, ferme le fichier, puis utilise Fichier → Ouvrir pour retrouver bonjour.py et le relancer.", "hint": "Note le dossier choisi. Un onglet fermé n’efface pas un fichier enregistré. Ne ferme pas sans enregistrer tes modifications." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "À toi - créer et retrouver un fichier", "intro": "Essaie sans démonstration. Garde bonjour.py : tu vas créer un autre fichier, pas le remplacer.", "items": [
          { "id": "retrouver-seul", "text": "Crée accueil.py avec un message de ton choix, enregistre-le dans ton dossier et exécute-le. Ferme ensuite son onglet, rouvre le fichier et relance-le.", "hint": "Fichier → Nouveau, puis Enregistrer sous avec un autre nom. Après sauvegarde, Ouvrir retrouve le fichier ; Exécuter lance ses instructions." },
          { "id": "distinguer-zones", "text": "Montre où se trouve ton code et où apparaît son résultat. Explique ce qu’il faut faire après une modification.", "hint": "Éditeur → instructions ; console → résultat ; enregistrer puis exécuter." }
        ] },
        { "type": "tasks", "id": "bonus", "title": "Bonus - garder deux essais", "items": [
          { "id": "deuxieme-fichier", "text": "Ouvre bonjour.py et accueil.py. Avant de lancer chacun, repère son nom dans l’onglet et prédis le message affiché. Modifie seulement accueil.py et vérifie que bonjour.py garde son message.", "hint": "Le fichier actif est celui dont l’onglet est sélectionné. Enregistre ta modification ; deux fichiers différents conservent deux programmes distincts." }
        ] }
      ],
      "masteryCriteria": ["Distinguer le code dans l’éditeur du résultat dans la console.", "Modifier un message, enregistrer et relancer sans recopier toute la ligne.", "Créer et nommer un nouveau fichier sans remplacer le précédent, puis l’enregistrer, le retrouver et le relancer ; distinguer les aides reçues de l’autonomie."],
      "consolidation": [{ "moduleId": "python-thonny", "blockId": "guide", "label": "Reprendre l’enregistrement et la réouverture" }],
      "bonusActivities": [{ "moduleId": "python-thonny", "blockId": "bonus", "label": "Conserver deux fichiers" }],
      "nextSteps": [{ "moduleId": "python-affichage", "label": "Afficher des messages", "prerequisiteSkills": [{ "skillId": "python.workspace", "expectation": "Créer, enregistrer et relancer un fichier sans remplacer le précédent ; sinon reprendre l’activité autonome Thonny." }] }],
      "teacherGuide": {
        "objective": "Installer des repères fiables avant d’évaluer du code. Aucun acquis en programmation n’est supposé.",
        "entryDiagnosis": ["Faire montrer où écrire et où lire, sans supposer que l’élève connaît ces zones.", "Observer les besoins d’aide au clavier, à la lecture et à l’enregistrement, séparément du raisonnement."],
        "preparation": ["Installer Thonny depuis le site officiel selon le système ; sélectionner l’interpréteur Python local, pas MicroPython.", "Vérifier que la console est visible, que Exécuter et Arrêter / redémarrer fonctionnent et que le dossier choisi est accessible.", "Tester le modèle dans un nouveau fichier. Aucun terminal, compte, extension ou package n’est requis ; accompagner l’installation si nécessaire."],
        "why": "L’élève doit savoir retrouver et lancer son travail avant de pouvoir avancer sans démonstration permanente.",
        "discoverySpeech": ["« L’éditeur contient tes instructions. La console montre ce qui se passe quand elles sont exécutées. »", "« Modifier une ligne ne la lance pas. Enregistre puis exécute pour voir la différence. »", "« Le fichier sauvegardé reste sur ton ordinateur même si tu fermes son onglet. »"],
        "example": { "target": { "moduleId": "python-thonny", "blockId": "exemple" }, "comments": ["Lire la ligne sans détailler toutes les notions : print affiche le texte. Ne pas faire saisir >>>.", "Faire choisir puis retrouver le dossier et le fichier ; fermer seulement après enregistrement.", "Montrer Arrêter / redémarrer sans imposer une boucle pour l’illustrer. Le schéma est générique ; pointer les contrôles réels de la version installée."] },
        "questions": [{ "question": "Où modifies-tu le programme ?", "answer": "Dans l’éditeur, pas dans le résultat affiché dans la console." }, { "question": "Le résultat change-t-il dès que tu modifies le code ?", "answer": "Non : il faut exécuter à nouveau. Enregistrer conserve la modification dans le fichier." }, { "question": "Comment retrouver le programme après fermeture ?", "answer": "Ouvrir le fichier .py dans le dossier où il a été enregistré." }],
        "accompaniedActivity": { "moduleId": "python-thonny", "blockId": "guide" }, "independentActivity": { "moduleId": "python-thonny", "blockId": "autonomie" },
        "differentiation": ["Lire une consigne à la fois et accompagner le choix du dossier sans conclure que la notion Python est incomprise.", "Demander de créer, nommer puis retrouver accueil.py sans démonstration ; relever séparément les aides au clavier et aux fichiers.", "Pour un élève à l’aise, comparer les deux onglets dans le bonus ; pas de temps imposé."],
        "commonErrors": [{ "symptom": "Le message n’apparaît pas ou seul >>> est visible.", "helps": ["Faire montrer les deux zones.", "Vérifier le fichier actif et le clic Exécuter.", "Comparer la ligne au modèle : guillemets droits et parenthèses.", "Accompagner une correction, relancer puis laisser l’élève modifier le message."] }, { "symptom": "Le fichier semble perdu.", "helps": ["Demander où il a été enregistré.", "Regarder Fichier → Ouvrir et le dossier choisi.", "Distinguer fermer un onglet, enregistrer et supprimer un fichier.", "Accompagner la réouverture puis faire refaire seul avec le deuxième fichier."] }],
        "notes": "Distinguer réussite autonome, avec modèle ou avec aide. Une installation ou un enregistrement accompagné ne prouve pas l’autonomie ; aucune case ne valide une compétence.",
        "quickConductor": ["Repérer éditeur, console et commandes.", "Écrire, enregistrer, exécuter le premier message.", "Modifier puis retrouver le fichier sauvegardé.", "Faire créer, nommer et retrouver accueil.py sans démonstration ; comparer les onglets en bonus.", "Choisir consolidation ou Afficher des messages selon les repères observés."],
        "references": [{ "title": "Thonny - site officiel et fonctionnalités", "url": "https://thonny.org/" }]
      }
    },
    "python-affichage": {
      "domainId": "python", "title": "Afficher des messages", "type": "lesson", "theme": "fondations",
      "objective": "Afficher plusieurs messages et prévoir leur ordre.",
      "prerequisitesInContent": true,
      "tool": { "label": "Site officiel de Thonny", "url": "https://thonny.org/" }, "skillIds": ["python.output"],
      "prerequisiteSkills": [{ "skillId": "python.workspace", "expectation": "Ouvrir, enregistrer et exécuter un fichier dans Thonny. Sinon, reprendre Premiers pas avec Thonny." }],
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Il faut savoir créer, enregistrer et exécuter un fichier dans Thonny. Sinon, reprends Premiers pas avec Thonny. Enregistre ton travail précédent, puis crée messages.py sans remplacer les autres fichiers.", "moduleLink": { "moduleId": "python-thonny", "text": "Revoir les fichiers dans Thonny" } },
        { "type": "lesson", "id": "exemple", "title": "1 - Du texte, une instruction par ligne", "paragraphs": ["print affiche ce qui se trouve entre ses parenthèses. Les guillemets droits délimitent le texte : ils ne font pas partie du message affiché. Garde une parenthèse ouvrante et une fermante.", "Python exécute ces instructions de haut en bas. Chaque print de cet exemple affiche une nouvelle ligne. Observe : deux instructions produisent deux lignes de résultat.", "Avant d’exécuter, annonce quelle phrase apparaîtra en premier."], "code": "print(\"Bienvenue !\")\nprint(\"Voici mon premier programme.\")" },
        { "type": "tasks", "id": "guide", "title": "Exercice guidé - trois messages", "items": [
          { "id": "afficher-modele", "text": "Écris et exécute les deux instructions du modèle dans messages.py.", "hint": "N’écris pas le résultat ni >>> dans l’éditeur. Utilise les guillemets droits du clavier, pas les guillemets courbes d’un traitement de texte." },
          { "id": "personnaliser-textes", "text": "Modifie les deux messages sans retirer leurs guillemets.", "hint": "Change seulement le texte à l’intérieur des guillemets." },
          { "id": "troisieme-instruction", "text": "Ajoute une troisième instruction pour afficher une phrase de fin.", "hint": "Une nouvelle ligne avec print, des parenthèses et du texte entre guillemets." },
          { "id": "inverser-ordre", "text": "Inverse les deux premières instructions. Prédis le résultat, puis exécute et explique la différence.", "hint": "Déplace les lignes entières ; changer les phrases n’est pas la même chose que changer l’ordre." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "À toi - une présentation sans modèle", "intro": "Enregistre messages.py. Crée presentation.py ; essaie sans ouvrir l’indice.", "items": [
          { "id": "presentation-personnelle", "text": "Affiche une présentation de trois lignes sur un personnage ou un sujet de ton choix, avec tes propres phrases.", "hint": "Chaque phrase peut avoir son propre print. Tu n’as pas besoin de variable ni de question pour ce module." },
          { "id": "prediction-personnelle", "text": "Explique l’ordre avant d’exécuter, puis déplace une instruction pour vérifier ta prédiction.", "hint": "Python suit ici les lignes de haut en bas." }
        ] },
        { "type": "lesson", "id": "erreur", "title": "Pour consolider - une faute à repérer", "paragraphs": ["Cette ligne est volontairement incorrecte : il manque un guillemet droit. Une erreur indique que Python ne peut pas exécuter cette instruction telle quelle, pas que ton idée est mauvaise. Compare les paires de guillemets et de parenthèses, corrige puis relance.", "Une phrase différente de celle attendue n’est pas forcément une erreur Python : le programme peut fonctionner mais ne pas réaliser ta consigne."], "code": "print(\"Bonjour !)" },
        { "type": "tasks", "id": "bonus", "title": "Bonus - un dessin en texte", "items": [{ "id": "dessin-texte", "text": "Avec plusieurs print, dessine une petite forme en utilisant seulement des espaces, des étoiles et des traits.", "hint": "Chaque ligne du dessin est un texte entre guillemets. Évite les antislashs pour cet essai : aucune nouvelle notation n’est nécessaire." }] }
      ],
      "masteryCriteria": ["Produire plusieurs lignes personnelles sans recopier les phrases du modèle.", "Prédire et expliquer l’effet d’une inversion des instructions.", "Repérer un guillemet manquant et expliquer le rôle des guillemets et parenthèses."],
      "consolidation": [{ "moduleId": "python-affichage", "blockId": "erreur", "label": "Repérer une faute simple" }, { "moduleId": "python-thonny", "blockId": "guide", "label": "Reprendre les manipulations de Thonny" }],
      "bonusActivities": [{ "moduleId": "python-affichage", "blockId": "bonus", "label": "Composer un dessin en texte" }],
      "nextSteps": [{ "moduleId": "python-variables", "label": "Variables et valeurs", "prerequisiteSkills": [{ "skillId": "python.output", "expectation": "Savoir afficher du texte et expliquer son ordre ; sinon reprendre les trois messages." }] }],
      "teacherGuide": {
        "objective": "Faire comprendre l’affichage et la séquence, pas seulement obtenir trois lignes copiées.",
        "entryDiagnosis": ["Faire ouvrir un fichier et exécuter une instruction ; reprendre Thonny si cela bloque.", "Demander où apparaîtra le message et distinguer aide à la saisie et compréhension."],
        "preparation": ["Ouvrir messages.py neuf et conserver bonjour.py.", "Prévoir le modèle, sa version inversée et la faute volontaire ; aucun autre exemple n’est erroné.", "Faire vérifier guillemets droits et parenthèses sur le clavier utilisé."],
        "why": "L’ordre d’exécution permettra ensuite de comprendre les changements de variables et les questions.",
        "discoverySpeech": ["« Les guillemets entourent le message ; les parenthèses entourent ce qu’on demande d’afficher. »", "« Lis les lignes de haut en bas et prédis ce qui apparaîtra. »", "« Un programme qui tourne peut quand même ne pas afficher ce que tu voulais : comparons à la consigne. »"],
        "example": { "target": { "moduleId": "python-affichage", "blockId": "exemple" }, "comments": ["Résultat attendu : Bienvenue ! puis Voici mon premier programme., sur deux lignes.", "Inverser les instructions doit inverser les résultats, sans autre changement.", "Une phrase écrite toute seule dans un fichier n’est pas un remplacement de print ; travailler dans l’éditeur, pas uniquement la console."] },
        "questions": [{ "question": "Les guillemets sont-ils affichés ?", "answer": "Non, ils délimitent le texte dans le code." }, { "question": "Que change l’inversion des deux instructions ?", "answer": "L’ordre des messages, car ces instructions s’exécutent de haut en bas." }, { "question": "Un programme sans erreur affiche-t-il forcément le résultat souhaité ?", "answer": "Non. Il faut encore comparer le résultat à la consigne et à la prédiction." }],
        "accompaniedActivity": { "moduleId": "python-affichage", "blockId": "guide" }, "independentActivity": { "moduleId": "python-affichage", "blockId": "autonomie" },
        "differentiation": ["Faire réussir une ligne puis deux, sans imposer immédiatement trois lignes à saisir.", "Demander à l’élève à l’aise de prédire l’inversion avant le test et de réparer sans le modèle.", "Ne pas introduire variables, boucles ou caractères échappés dans le bonus."],
        "commonErrors": [{ "symptom": "SyntaxError après la saisie.", "helps": ["Faire lire la ligne signalée.", "Cibler guillemets droits et parenthèses.", "Comparer au modèle ou à la faute volontaire.", "Corriger un signe puis exécuter avant d’ajouter d’autres lignes."] }, { "symptom": "La présentation fonctionne mais l’ordre est inexpliqué.", "helps": ["Faire lire les résultats.", "Pointer la première instruction.", "Faire prédire un échange de deux lignes.", "Déplacer puis tester et demander une nouvelle prédiction sans aide."] }],
        "notes": "Noter séparément reproduction avec modèle, prédiction et création autonome. Une faute de clavier ne suffit pas à conclure à une incompréhension.",
        "quickConductor": ["Vérifier l’exécution dans l’éditeur.", "Expliquer print, guillemets et ordre.", "Personnaliser puis inverser les messages.", "Faire créer trois phrases sans modèle.", "Réparer une faute ; proposer reprise ou variables."],
        "references": [{ "title": "Python - print", "url": "https://docs.python.org/fr/3/library/functions.html#print" }]
      }
    },
    "python-variables": {
      "domainId": "python", "title": "Variables et valeurs", "type": "lesson", "theme": "fondations",
      "objective": "Conserver une information sous un nom et réutiliser sa valeur.",
      "prerequisitesInContent": true,
      "tool": { "label": "Site officiel de Thonny", "url": "https://thonny.org/" }, "skillIds": ["python.variables"],
      "prerequisiteSkills": [{ "skillId": "python.workspace", "expectation": "Lancer un fichier enregistré." }, { "skillId": "python.output", "expectation": "Afficher du texte et prévoir l’ordre de plusieurs instructions. Sinon, reprendre Afficher des messages." }],
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Il faut savoir afficher du texte et prévoir l’ordre des instructions. Sinon, reprends Afficher des messages. Enregistre tes essais, puis crée variables.py sans remplacer tes autres fichiers. Écris les instructions dans l’éditeur et exécute le fichier entier.", "moduleLink": { "moduleId": "python-affichage", "text": "Revoir l’affichage et l’ordre" } },
        { "type": "lesson", "id": "exemple", "title": "1 - Un nom et une valeur", "paragraphs": ["personnage est le nom de la variable ; \"Luna\" est sa valeur textuelle. Le signe = affecte la valeur de droite au nom de gauche. Ce n’est pas une question ni une égalité mathématique.", "Sans guillemets, personnage demande la valeur associée à ce nom. Avec guillemets, \"personnage\" est simplement le texte personnage.", "Prédis les deux messages, puis exécute le fichier entier."], "code": "personnage = \"Luna\"\nprint(personnage)\nprint(\"personnage\")" },
        { "type": "lesson", "id": "changer", "title": "2 - La valeur peut changer", "paragraphs": ["Chaque instruction utilise la valeur disponible à cet instant. Le deuxième = remplace la valeur associée au nom personnage. Il ne modifie pas un message déjà affiché.", "Les noms respectent les majuscules : personnage et Personnage sont différents. Choisis des noms simples comme personnage ou animal ; sans espace, sans tiret et sans chiffre au début. N’utilise pas print comme nom de variable."], "code": "personnage = \"Luna\"\nprint(personnage)\npersonnage = \"Milo\"\nprint(personnage)" },
        { "type": "tasks", "id": "guide", "title": "Exercice guidé - changer la valeur", "items": [
          { "id": "comparer-nom-texte", "text": "Exécute le premier exemple. Explique pourquoi les deux messages sont différents.", "hint": "La valeur est Luna ; le nom écrit entre guillemets reste le texte personnage." },
          { "id": "remplacer-valeur", "text": "Change Luna par un autre prénom fictif, sans changer le nom de la variable. Prédis puis teste.", "hint": "Le premier résultat change ; le texte \"personnage\" ne change pas." },
          { "id": "predire-remplacement", "text": "Enregistre variables.py, puis crée remplacement.py pour le deuxième exemple. Garde le premier fichier, annonce les deux résultats et exécute le nouveau fichier.", "hint": "Lis de haut en bas : la valeur est d’abord Luna, puis Milo. Tes deux fichiers permettent de comparer les exemples." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "À toi - deux informations", "intro": "Enregistre ton essai actuel, puis crée personnage.py. Garde variables.py et remplacement.py ; essaie sans recopier le modèle.", "items": [
          { "id": "deux-variables", "text": "Crée deux variables textuelles avec des noms de ton choix et affiche leurs valeurs.", "hint": "Une instruction d’affectation pour chaque information ; puis un print pour chaque variable, sans guillemets autour de son nom." },
          { "id": "modifier-une-valeur", "text": "Après les premiers affichages, change une seule valeur et affiche-la à nouveau. Prédis ce qui changera.", "hint": "Garde le même nom et affecte-lui un nouveau texte. Le premier affichage reste présent ; seul le suivant utilise la nouvelle valeur." },
          { "id": "test-propre", "text": "Enregistre personnage.py. Clique sur Arrêter / redémarrer puis exécute le fichier entier : vérifie qu’il fonctionne sans les essais précédents.", "hint": "Le fichier doit définir lui-même chaque variable avant de l’utiliser. Le redémarrage permet de vérifier qu’un ancien essai ne cachait pas un oubli." }
        ] },
        { "type": "lesson", "id": "erreur", "title": "Pour consolider - un nom incohérent", "paragraphs": ["Cette panne est volontaire : compare les noms. Après Arrêter / redémarrer, exécuter le fichier provoque NameError parce que Python ne connaît pas la variable animal. Corrige le nom pour afficher la valeur prévue, puis relance."], "code": "compagnon = \"chat\"\nprint(animal)" },
        { "type": "tasks", "id": "bonus", "title": "Bonus - une valeur réutilisée", "items": [{ "id": "reutiliser-valeur", "text": "Affiche la même variable à trois endroits dans ton fichier. Change sa valeur de départ et prédis les trois résultats avant de relancer.", "hint": "Aucune boucle nécessaire : réutilise son nom dans plusieurs print." }] }
      ],
      "masteryCriteria": ["Distinguer un nom de variable et ce même nom entre guillemets.", "Prédire les affichages avant et après un remplacement de valeur.", "Créer et réutiliser deux variables personnelles dans un fichier qui fonctionne après redémarrage."],
      "consolidation": [{ "moduleId": "python-variables", "blockId": "erreur", "label": "Repérer une variable inconnue" }, { "moduleId": "python-affichage", "blockId": "guide", "label": "Revoir print et les guillemets" }],
      "bonusActivities": [{ "moduleId": "python-variables", "blockId": "bonus", "label": "Réutiliser une valeur" }],
      "nextSteps": [{ "moduleId": "python-saisie", "label": "Poser une question", "prerequisiteSkills": [{ "skillId": "python.variables", "expectation": "Créer une variable et expliquer la valeur utilisée ; sinon reprendre les deux informations." }] }],
      "teacherGuide": {
        "objective": "Comprendre l’affectation et la valeur au moment de l’exécution ; ne pas confondre nom, texte et égalité.",
        "entryDiagnosis": ["Faire expliquer print et l’ordre de deux lignes ; reprendre Afficher des messages si nécessaire.", "Vérifier que les instructions sont écrites dans le fichier, pas uniquement dans la console."],
        "preparation": ["Prévoir variables.py et remplacement.py pour conserver les deux exemples ; ouvrir éventuellement Affichage → Variables.", "Redémarrer avant le test de variable inconnue et le test autonome propre ; ne pas nommer les fichiers comme des bibliothèques Python."],
        "why": "Une valeur nommée peut être remplacée et réutilisée ; cela prépare la réponse fournie par l’utilisateur.",
        "discoverySpeech": ["« Sans guillemets, Python cherche la valeur liée au nom. Entre guillemets, il garde le texte tel quel. »", "« = veut dire : associe cette valeur à ce nom. Ce n’est pas une égalité à résoudre. »", "« Suivons les lignes : quelle valeur est disponible au moment de chaque print ? »"],
        "example": { "target": { "moduleId": "python-variables", "blockId": "exemple" }, "comments": ["Résultats attendus : Luna, puis personnage. Faire expliquer les deux, pas seulement constater la différence.", "Dans le deuxième modèle : Luna puis Milo. Le remplacement ne change pas rétroactivement les sorties.", "La vue Variables illustre la valeur courante ; elle ne montre pas automatiquement toutes les anciennes valeurs."] },
        "questions": [{ "question": "Faut-il renommer la variable pour changer sa valeur ?", "answer": "Non, une nouvelle affectation au même nom remplace sa valeur." }, { "question": "Pourquoi les deux print du deuxième exemple affichent-ils des prénoms différents ?", "answer": "La valeur est remplacée entre les deux instructions : Luna puis Milo." }, { "question": "Pourquoi le test propre est-il important ?", "answer": "Il vérifie que le fichier définit lui-même les variables nécessaires au lieu de dépendre d’un ancien essai en console." }],
        "accompaniedActivity": { "moduleId": "python-variables", "blockId": "guide" }, "independentActivity": { "moduleId": "python-variables", "blockId": "autonomie" },
        "differentiation": ["Commencer avec une variable et accompagner la lecture ligne par ligne.", "Faire prédire les changements et produire deux variables sans modèle pour distinguer copie et compréhension.", "La vue Variables est une aide, pas une obligation ni un nouveau système de suivi."],
        "commonErrors": [{ "symptom": "Le nom est affiché au lieu de la valeur.", "helps": ["Faire lire le résultat souhaité.", "Regarder les guillemets autour du nom.", "Comparer print(personnage) et print(\"personnage\").", "Retirer les guillemets autour du nom uniquement, puis faire un autre exemple sans aide."] }, { "symptom": "NameError ou résultat dépendant d’un ancien essai.", "helps": ["Lire le nom indiqué dans l’erreur.", "Chercher son affectation avant l’affichage.", "Comparer orthographe et majuscules puis redémarrer la console.", "Corriger le fichier et relancer entièrement ; ne pas masquer la faute en définissant la variable dans la console."] }],
        "notes": "Observer prédiction, explication et création séparément. Une affectation copiée n’est pas une validation automatique de python.variables.",
        "quickConductor": ["Vérifier affichage et ordre.", "Comparer nom sans guillemets et texte entre guillemets.", "Suivre le remplacement d’une valeur.", "Créer deux informations sans modèle puis tester après redémarrage.", "Choisir reprise ou saisie textuelle selon la compréhension."],
        "references": [{ "title": "Python - variables et premières valeurs", "url": "https://docs.python.org/fr/3/tutorial/introduction.html" }]
      }
    },
    "python-saisie": {
      "domainId": "python", "title": "Poser une question", "type": "lesson", "theme": "fondations",
      "objective": "Demander une réponse textuelle, la conserver et l’utiliser.",
      "prerequisitesInContent": true,
      "tool": { "label": "Site officiel de Thonny", "url": "https://thonny.org/" }, "skillIds": ["python.input"],
      "prerequisiteSkills": [{ "skillId": "python.workspace", "expectation": "Exécuter et arrêter un fichier dans Thonny." }, { "skillId": "python.output", "expectation": "Afficher du texte avec print." }, { "skillId": "python.variables", "expectation": "Créer une variable et réutiliser sa valeur. Sinon, reprendre Variables et valeurs." }],
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Il faut savoir exécuter un fichier, afficher un message et réutiliser une variable. Sinon, reprends Variables et valeurs. Enregistre ton travail précédent et crée questions.py sans effacer les autres fichiers.", "moduleLink": { "moduleId": "python-variables", "text": "Revoir les variables" } },
        { "type": "lesson", "id": "exemple", "title": "1 - Demander, attendre, utiliser", "paragraphs": ["input affiche la question entre ses parenthèses, puis attend une réponse. Après avoir exécuté, clique dans la console à la suite de la question, écris ta réponse et appuie sur Entrée. Le programme peut alors continuer.", "Le texte répondu devient la valeur de pseudo. La question reste dans le code ; la réponse vient de la personne qui utilise le programme.", "Dans print(\"Bienvenue\", pseudo), la virgule sépare deux éléments à afficher : un texte et une valeur. print ajoute ici un espace entre eux. On ne met pas la virgule entre les guillemets.", "input fournit du texte, même si tu réponds avec des chiffres. Nous ne faisons pas encore de calcul avec cette réponse."], "code": "pseudo = input(\"Quel pseudo choisis-tu ? \")\nprint(\"Bienvenue\", pseudo)" },
        { "type": "lesson", "id": "attente", "title": "2 - Une attente n’est pas une panne", "paragraphs": ["Tant que tu n’as pas validé avec Entrée, la ligne suivante attend. Pour recommencer sans répondre, clique sur Arrêter / redémarrer, puis Exécuter.", "Ne modifie pas le code pour écrire ta réponse : réponds dans la console. Si tu modifies le programme pendant qu’il attend, arrête-le puis relance pour tester la nouvelle version." ] },
        { "type": "tasks", "id": "guide", "title": "Exercice guidé - deux essais différents", "items": [
          { "id": "repondre-console", "text": "Exécute le modèle, réponds avec un pseudo fictif dans la console et valide avec Entrée.", "hint": "Le curseur doit être dans la console après la question. Le résultat attendu est Bienvenue suivi du pseudo fourni." },
          { "id": "nouvelle-reponse", "text": "Relance et réponds autrement. Explique ce qui change sans modifier le fichier.", "hint": "La question reste identique ; la valeur de pseudo vient de la nouvelle réponse." },
          { "id": "changer-question", "text": "Change seulement le texte de la question dans input. Relance pour tester.", "hint": "Garde le même nom de variable ; modifie le texte entre guillemets dans input, pas la réponse dans le code." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "À toi - une préférence", "intro": "Enregistre questions.py, puis crée preference.py. Essaie avant l’indice.", "items": [
          { "id": "question-personnelle", "text": "Demande une activité préférée, conserve la réponse dans une variable de ton choix et affiche une phrase qui l’utilise.", "hint": "Une affectation avec input, puis un print contenant un texte et le nom de ta variable, séparés par une virgule. Pas de guillemets autour du nom." },
          { "id": "tester-preference", "text": "Teste avec deux réponses différentes. Montre où se trouvent la question, la variable et la réponse saisie.", "hint": "Exécute à nouveau pour chaque réponse ; la question est dans le fichier, la saisie dans la console." }
        ] },
        { "type": "tasks", "id": "bonus", "title": "Bonus - deux questions", "items": [{ "id": "deux-questions", "text": "Pose deux questions, avec deux noms de variables différents. Réutilise les deux réponses dans les messages finaux.", "hint": "Python attend la première réponse avant de poser la deuxième question. Garde les deux réponses sous des noms différents." }] }
      ],
      "masteryCriteria": ["Saisir et valider une réponse dans la console sans la remplacer dans le code.", "Expliquer la pause provoquée par input et la valeur enregistrée dans la variable.", "Créer une autre question puis utiliser sa réponse, sans recopier tout le modèle."],
      "consolidation": [{ "moduleId": "python-saisie", "blockId": "guide", "label": "Reprendre question, réponse et relance" }, { "moduleId": "python-variables", "blockId": "guide", "label": "Revoir nom et valeur" }],
      "bonusActivities": [{ "moduleId": "python-saisie", "blockId": "bonus", "label": "Conserver deux réponses" }],
      "nextSteps": [{ "moduleId": "python-conversation", "label": "Une conversation interactive", "prerequisiteSkills": [{ "skillId": "python.input", "expectation": "Poser une question et réutiliser la réponse ; sinon reprendre l’activité Une préférence." }] }],
      "teacherGuide": {
        "objective": "Comprendre que la saisie fournit une valeur au programme ; distinguer question, réponse et attente.",
        "entryDiagnosis": ["Faire créer une variable et afficher sa valeur ; reprendre Variables et valeurs si nécessaire.", "Faire repérer Exécuter, la console et Arrêter / redémarrer avant de lancer un programme interactif."],
        "preparation": ["Créer questions.py et tester le modèle avec deux réponses fictives.", "Prévoir le temps de saisie ; ne pas lancer deux essais en concurrence.", "Aucune conversion, concaténation, condition ni saisie de donnée personnelle réelle n’est nécessaire."],
        "why": "Un programme peut utiliser une information inconnue au moment où il est écrit.",
        "discoverySpeech": ["« La question est dans le fichier ; la réponse vient de la personne qui utilise le programme. »", "« Il attend Entrée : ce n’est pas une panne. La ligne suivante ne peut pas encore utiliser la réponse. »", "« La virgule sépare le texte et la valeur à afficher ; print place un espace entre eux. »"],
        "example": { "target": { "moduleId": "python-saisie", "blockId": "exemple" }, "comments": ["Avec la réponse Nova, le message final est Bienvenue Nova.", "Faire exécuter, cliquer dans la console, saisir puis Entrée ; ne pas dicter une réponse à intégrer au fichier.", "La réponse 12 reste une chaîne de caractères. Réserver les conversions au futur module numérique ; ne pas laisser un calcul comme prérequis caché."] },
        "questions": [{ "question": "Pourquoi le programme n’affiche-t-il pas encore Bienvenue ?", "answer": "Il attend la réponse à input et sa validation avec Entrée." }, { "question": "Que se passe-t-il si une autre personne exécute le même fichier ?", "answer": "Elle peut fournir une autre réponse ; le message final utilisera cette nouvelle valeur." }, { "question": "Quel est le rôle de la virgule dans print ?", "answer": "Elle sépare les éléments à afficher ; print ajoute ici un espace entre le texte et la valeur." }],
        "accompaniedActivity": { "moduleId": "python-saisie", "blockId": "guide" }, "independentActivity": { "moduleId": "python-saisie", "blockId": "autonomie" },
        "differentiation": ["Accompagner une saisie dans la console avant de demander une question personnelle.", "Faire créer une nouvelle question avec un autre nom de variable et tester deux réponses sans modèle.", "Lire les consignes si nécessaire ; ne pas confondre vitesse de frappe et compréhension."],
        "commonErrors": [{ "symptom": "L’élève pense que le programme est bloqué.", "helps": ["Faire lire la dernière question affichée.", "Montrer la console et son curseur.", "Comparer avant et après validation avec Entrée.", "Faire répondre ; si l’essai doit être interrompu, Arrêter / redémarrer puis relancer."] }, { "symptom": "La réponse n’est pas réutilisée.", "helps": ["Faire comparer la réponse saisie au résultat.", "Vérifier le nom passé à print et ses guillemets.", "Comparer texte fixe et variable, puis les deux éléments séparés par une virgule.", "Corriger le print et tester deux nouvelles réponses pour vérifier le transfert."] }],
        "notes": "Distinguer saisie accompagnée, exemple reproduit et nouvelle question autonome. Ne pas ajouter de conversion ou de validation numérique dans ce lot.",
        "quickConductor": ["Vérifier les variables et les zones de Thonny.", "Expliquer input et la virgule de print.", "Répondre dans la console puis relancer autrement.", "Créer une préférence sans modèle.", "Choisir consolidation, deux questions ou conversation."],
        "references": [{ "title": "Python - input", "url": "https://docs.python.org/fr/3/library/functions.html#input" }, { "title": "Python - print et séparateurs", "url": "https://docs.python.org/fr/3/library/functions.html#print" }]
      }
    },
    "python-conversation": {
      "domainId": "python", "title": "Une conversation interactive", "type": "project", "theme": "fondations",
      "objective": "Assembler affichage, variables et questions dans un programme personnel.",
      "prerequisitesInContent": true,
      "tool": { "label": "Site officiel de Thonny", "url": "https://thonny.org/" },
      "skillIds": ["python.workspace", "python.output", "python.variables", "python.input"],
      "prerequisiteSkills": [{ "skillId": "python.workspace", "expectation": "Créer, conserver et relancer un fichier .py." }, { "skillId": "python.output", "expectation": "Afficher des messages dans l’ordre choisi." }, { "skillId": "python.variables", "expectation": "Conserver plusieurs informations sous des noms différents." }, { "skillId": "python.input", "expectation": "Poser une question et afficher sa réponse. Sinon, reprendre Poser une question." }],
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Il faut savoir créer un fichier, afficher un message et conserver puis réutiliser une réponse dans une variable. Sinon, reprends Poser une question. Enregistre les exercices précédents puis crée conversation.py : ne les efface pas. Choisis un thème et des réponses fictifs, sans renseignement personnel.", "moduleLink": { "moduleId": "python-saisie", "text": "Revoir la saisie" } },
        { "type": "lesson", "id": "plan", "title": "1 - Prépare ton petit dialogue", "paragraphs": ["Imagine un message d’accueil, trois questions et les phrases finales qui utiliseront les réponses. Par exemple : choisir un pseudo fictif, un lieu imaginaire et une activité. Tu peux inventer un autre thème.", "Tout le monde suit le même ordre de questions : pas de choix conditionnel, calcul ni boucle dans ce projet. Le programme est interactif parce que ses messages utilisent les réponses saisies.", "Écris d’abord une version avec une question. Teste-la, puis ajoute une question à la fois. Une version courte qui fonctionne est un bon point de départ." ] },
        { "type": "tasks", "id": "guide", "title": "Préparation accompagnée - une première réponse", "intro": "Si nécessaire, commence ici avant d’assembler le projet. Les indices sont des rappels séparés, pas une solution complète.", "items": [
          { "id": "accueil-minimal", "text": "Affiche ton message d’accueil.", "hint": "Utilise print avec ton texte entre guillemets et entre parenthèses." },
          { "id": "question-minimale", "text": "Pose une première question et conserve sa réponse.", "hint": "Choisis un nom de variable, puis = et input avec ta question entre guillemets et parenthèses." },
          { "id": "reponse-minimale", "text": "Affiche un message qui utilise cette réponse, puis teste avec deux réponses différentes.", "hint": "Dans print, sépare ton texte et le nom de la variable par une virgule. Le nom de variable n’est pas entre guillemets." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "2 - Construis ta conversation", "intro": "Continue dans conversation.py. Essaie avant les indices ; ajoute une question à la fois, sans supprimer tes exercices sauvegardés.", "items": [
          { "id": "accueil-projet", "text": "Affiche un message d’accueil adapté à ton thème.", "hint": "Ce message peut être du texte fixe ; les réponses ne sont pas encore connues." },
          { "id": "trois-questions", "text": "Pose au moins trois questions et garde leurs réponses dans trois variables différentes.", "hint": "Une ligne avec input pour chaque question. Le programme attend chaque réponse avant de passer à la suivante. Garde des noms différents pour ne pas remplacer une réponse précédente." },
          { "id": "trois-reponses", "text": "Après les questions, réutilise chacune des trois réponses dans tes messages finaux.", "hint": "Tu peux faire plusieurs print. Vérifie que chaque nom de variable est réellement utilisé, pas recopié entre guillemets." },
          { "id": "sauvegarder-projet", "text": "Enregistre conversation.py dans ton dossier de programmes.", "hint": "Conserve les fichiers des modules précédents. Une modification doit être enregistrée pour rester après fermeture." }
        ] },
        { "type": "tasks", "id": "verification", "title": "3 - Vérifie ton travail", "items": [
          { "id": "tester-deux-dialogues", "text": "Arrête / redémarre, puis exécute deux fois avec trois réponses différentes. Les messages finaux doivent utiliser les réponses du nouvel essai.", "hint": "Ne remplace pas les réponses par du texte fixé dans le code. Le fichier doit définir toutes ses variables sans ancien essai en console." },
          { "id": "retrouver-dialogue", "text": "Après enregistrement, ferme puis rouvre le fichier et teste-le à nouveau.", "hint": "Retrouve conversation.py dans ton dossier ; tes anciennes réponses ne sont pas une sauvegarde de ton programme." },
          { "id": "expliquer-dialogue", "text": "Explique où le programme attend et quelle variable conserve chaque réponse. Enregistre, puis utilise Enregistrer sous pour créer conversation_modifiee.py. Dans cette copie, renomme une variable et tous ses usages ; teste avec de nouvelles réponses.", "hint": "Choisis un nom distinct des deux autres. Change le nom à gauche de = et dans chaque print qui l’utilise. La question peut rester identique ; conserve conversation.py." }
        ] },
        { "type": "tasks", "id": "bonus", "title": "Bonus - enrichir sans nouvelle notion", "items": [{ "id": "quatrieme-question", "text": "Ajoute une quatrième question et utilise sa réponse dans un nouveau message final.", "hint": "Une nouvelle variable, un input et un print : aucune condition ou boucle n’est nécessaire." }] },
        { "type": "callout", "id": "suite", "title": "Et après ?", "text": "Si tu sais expliquer et modifier ta conversation avec peu ou pas d’aide, tu peux passer aux nombres et calculs. Sinon, reprends une question ou une variable. Terminer le projet ne valide pas automatiquement tes compétences ; en cours, choisis la suite avec le professeur." }
      ],
      "masteryCriteria": ["Créer un dialogue personnel avec trois réponses réellement conservées et réutilisées.", "Expliquer l’ordre, les attentes et la différence entre texte fixe et valeur saisie.", "Renommer une variable et ses usages dans une copie conservée, puis tester de nouvelles réponses après redémarrage.", "Retrouver le fichier sauvegardé ; distinguer réussite autonome, avec modèle ou avec aide pour chaque compétence."],
      "consolidation": [{ "moduleId": "python-conversation", "blockId": "guide", "label": "Repartir d’une seule question" }, { "moduleId": "python-saisie", "blockId": "guide", "label": "Revoir la saisie dans la console" }, { "moduleId": "python-variables", "blockId": "changer", "label": "Revoir les valeurs et leur remplacement" }, { "moduleId": "python-affichage", "blockId": "guide", "label": "Revoir affichage et ordre" }, { "moduleId": "python-thonny", "blockId": "guide", "label": "Retrouver les fichiers" }],
      "bonusActivities": [{ "moduleId": "python-conversation", "blockId": "bonus", "label": "Ajouter une quatrième question" }], "nextSteps": [{ "moduleId": "python-calculs", "label": "Nombres et calculs", "prerequisiteSkills": [{ "skillId": "python.input", "expectation": "Conserver et afficher une réponse dans une variable ; sinon reprendre Poser une question." }] }],
      "teacherGuide": {
        "objective": "Vérifier l’assemblage des premières notions dans un projet personnel, sans supposer une acquisition parce qu’un dialogue a été exécuté.",
        "entryDiagnosis": ["Demander une question et un affichage de sa réponse sans modèle ; choisir une reprise ciblée si nécessaire.", "Vérifier les noms distincts de variables et l’enregistrement, séparément de l’aide au clavier."],
        "preparation": ["Conserver les fichiers précédents et créer conversation.py ; aucun projet externe n’est requis.", "Préparer des thèmes fictifs et des réponses de test différentes ; ne pas demander de donnée personnelle.", "Le projet n’a volontairement pas de solution complète : s’appuyer sur les rappels des modules 2 à 4 et l’étape à une question."],
        "why": "Assembler plusieurs notions révèle les écarts entre reproduire un exemple et construire un programme qui utilise réellement ses entrées.",
        "discoverySpeech": ["« Choisis trois questions : que feras-tu de chacune des réponses ? »", "« Nous construisons une petite version qui fonctionne, puis nous ajoutons une question à la fois. »", "« Si je donne de nouvelles réponses, tes phrases finales doivent les utiliser sans modifier le programme. »"],
        "example": { "target": { "moduleId": "python-conversation", "blockId": "plan" }, "comments": ["Commenter le plan, pas fournir un programme complet à recopier : accueil, trois saisies distinctes, sorties qui réutilisent chaque valeur.", "Si nécessaire, accompagner une seule question puis laisser ajouter les suivantes.", "Attendu : deux exécutions avec des réponses différentes donnent des messages finaux différents ; aucun if, calcul ou boucle requis."] },
        "questions": [{ "question": "Quelle ligne changer pour modifier une question sans changer l’utilisation de sa réponse ?", "answer": "Modifier le texte entre guillemets dans input, en conservant le nom de variable utilisé ensuite." }, { "question": "Pourquoi conserver les trois réponses sous des noms différents ?", "answer": "Réaffecter le même nom remplacerait sa valeur ; on perdrait l’accès aux premières réponses sous ce nom." }, { "question": "Le dialogue qui fonctionne suffit-il à prouver que tu comprends ?", "answer": "Non : il faut expliquer les attentes et valeurs, puis réussir une modification ou une nouvelle question sans recopier toute la solution." }],
        "accompaniedActivity": { "moduleId": "python-conversation", "blockId": "guide" }, "independentActivity": { "moduleId": "python-conversation", "blockId": "autonomie" },
        "differentiation": ["Consolider une question puis deux avant d’en viser trois ; ne pas imposer une durée ni retirer l’accès au projet.", "Pour un élève à l’aise, demander une quatrième question avec nouvelle variable et sortie, sans modèle.", "Évaluer workspace, output, variables et input séparément ; accompagner la saisie ou l’enregistrement sans annuler une compréhension démontrée."],
        "commonErrors": [{ "symptom": "Les trois messages affichent seulement la dernière réponse.", "helps": ["Faire comparer les réponses saisies aux sorties.", "Repérer les noms à gauche des trois affectations.", "Montrer que le même nom est remplacé ; comparer à trois noms distincts.", "Renommer les variables et leurs usages ensemble, puis retester deux dialogues."] }, { "symptom": "Le dialogue ne varie pas ou échoue après redémarrage.", "helps": ["Faire un test avec des réponses très différentes.", "Chercher du texte fixe à la place d’une variable ou une affectation manquante.", "Comparer à l’exercice à une question ; vérifier l’ordre des définitions.", "Corriger une utilisation puis exécuter le fichier entier après Arrêter / redémarrer ; demander une modification autonome."] }],
        "notes": "Observer reproduction, compréhension, transfert et aides nécessaires, sans nouveau dispositif de suivi. Seul le professeur attribue manuellement un statut ; le projet ne valide jamais automatiquement ses quatre compétences.",
        "quickConductor": ["Vérifier les premières notions et proposer une reprise ciblée.", "Faire choisir un thème fictif et un plan.", "Tester une question puis ajouter les autres.", "Tester deux dialogues après redémarrage.", "Faire renommer une variable et ses usages dans conversation_modifiee.py ; vérifier le transfert avant de choisir la suite."],
        "references": [{ "title": "Python - input", "url": "https://docs.python.org/fr/3/library/functions.html#input" }, { "title": "Thonny - variables et exécution pas à pas", "url": "https://thonny.org/" }]
      }
    },
    "python-calculs": {
      "domainId": "python", "title": "Nombres et calculs", "type": "lesson", "theme": "fondations",
      "objective": "Calculer avec des nombres, puis convertir une réponse en entier.",
      "prerequisitesInContent": true,
      "tool": { "label": "Site officiel de Thonny", "url": "https://thonny.org/" }, "skillIds": ["python.numbers", "python.conversion"],
      "prerequisiteSkills": [{ "skillId": "python.workspace", "expectation": "Créer et exécuter un fichier .py." }, { "skillId": "python.output", "expectation": "Afficher une valeur avec print." }, { "skillId": "python.variables", "expectation": "Définir et réutiliser une variable." }, { "skillId": "python.input", "expectation": "Poser une question et conserver sa réponse ; sinon reprendre Poser une question." }],
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Il faut savoir exécuter un fichier, afficher une variable et réutiliser une réponse de input. Si tu hésites sur un point, reprends le module correspondant. Enregistre tes anciens programmes et crée calculs.py sans les effacer. Commence par des nombres fixes : la question viendra ensuite.", "moduleLink": { "moduleId": "python-variables", "text": "Revoir les variables" } },
        { "type": "lesson", "id": "exemple", "title": "1 - Nombre ou texte ?", "paragraphs": ["12 est un nombre. \"12\" est du texte : les guillemets changent la façon dont Python utilise la valeur, même si print les affiche de manière semblable.", "Avec deux nombres, + additionne. Avec deux textes, + les colle : \"12\" + \"3\" donne le texte 123, pas le nombre 15. Prédis les trois lignes avant d’exécuter le modèle."], "code": "print(12 + 3)\nprint(\"12\" + \"3\")\nprint(\"12 + 3\")" },
        { "type": "lesson", "id": "operations", "title": "2 - Calculer et conserver", "paragraphs": ["Avec des nombres, + additionne. Le calcul à droite de = est effectué, puis son résultat devient la valeur de total.", "Dans print, le nom sans guillemets utilise cette valeur. Prédis le total avant d’exécuter : changer points suffit pour calculer un autre résultat."], "code": "points = 4\nbonus = 3\ntotal = points + bonus\nprint(\"Total :\", total)" },
        { "type": "tasks", "id": "guide", "title": "Exercice guidé - prévoir les résultats", "items": [{ "id": "texte-nombre", "text": "Prédis puis exécute les trois lignes du premier modèle. Explique pourquoi elles ne donnent pas le même résultat.", "hint": "Tu dois lire 15, 123 et 12 + 3. Les deux dernières lignes travaillent avec du texte." }, { "id": "modifier-total", "text": "Exécute le deuxième modèle, puis change points à 10. Prédis le nouveau total avant de relancer.", "hint": "La ligne total utilise la valeur de points ; le nouveau total est 13." }] },
        { "type": "lesson", "id": "conversion", "title": "3 - Une réponse utilisable dans un calcul", "paragraphs": ["Un entier est un nombre sans partie décimale, comme 0, 5 ou -2. input fournit du texte : int transforme le texte \"12\" en entier 12. On conserve d’abord la réponse, puis on la convertit ; les deux étapes sont visibles.", "Réponds avec un entier écrit en chiffres, sans unité, virgule ni point. Le programme n’accepte pas cinq, 5 pièces ou 2.5 : int provoque une ValueError et arrête cet essai. Ce modèle n’est pas une saisie protégée ; le module suivant apprend à lire cette erreur."], "code": "reponse = input(\"Combien de pièces ? Entier uniquement : \")\npieces = int(reponse)\ntotal = pieces + 2\nprint(\"Avec le bonus :\", total)" },
        { "type": "tasks", "id": "saisie", "title": "Teste la conversion", "items": [{ "id": "deux-entiers", "text": "Teste le modèle avec 5 puis avec 0. Prédis chaque total et montre où le texte devient un entier.", "hint": "Les totaux sont 7 et 2. int(reponse) effectue la conversion ; input seul ne le fait pas." }] },
        { "type": "tasks", "id": "autonomie", "title": "À toi - un total de points", "intro": "Enregistre calculs.py puis crée points.py. Essaie sans recopier le modèle complet.", "items": [{ "id": "total-personnel", "text": "Demande un nombre entier de points, ajoute un bonus fixe de 4 et affiche le total. La question doit annoncer le format attendu.", "hint": "Conserve le texte de input, transforme-le avec int, puis additionne 4 à la valeur numérique. Utilise des noms adaptés aux points." }, { "id": "preuve-calcul", "text": "Teste avec 3 puis 10, et modifie le bonus à 1. Explique la différence entre la réponse textuelle et le nombre utilisé.", "hint": "Avec le bonus 4, attends 7 et 14. Avec le bonus 1, attends 4 et 11. Relance pour chaque test." }] },
        { "type": "tasks", "id": "bonus", "title": "Bonus - deux valeurs numériques", "items": [{ "id": "deux-valeurs", "text": "Dans un nouveau fichier, demande deux entiers et affiche leur somme. Teste 2 et 7, puis 0 et 4.", "hint": "Deux noms distincts, deux input et deux conversions int. Additionne les nombres, pas les textes." }] },
        { "type": "details", "id": "exploration", "title": "Pour explorer - autres opérations et écritures", "blocks": [
          { "type": "lesson", "id": "autres-operations", "title": "Soustraire, multiplier, diviser", "paragraphs": ["Cette exploration est facultative : l’addition et la conversion suffisent pour continuer le parcours. Crée operations.py sans remplacer calculs.py.", "- soustrait, * multiplie et / divise. Prédis puis teste ces trois lignes : tu dois lire 6, 16 et 4.0. La division donne ici une écriture décimale ; ne divise pas par zéro."], "code": "print(8 - 2)\nprint(8 * 2)\nprint(8 / 2)" },
          { "type": "lesson", "id": "priorites", "title": "Grouper un calcul", "paragraphs": ["La multiplication et la division passent avant l’addition et la soustraction. Des parenthèses donnent la priorité à un groupe. Prédis puis compare les deux résultats : 20 et 14."], "code": "print((2 + 3) * 4)\nprint(2 + 3 * 4)" },
          { "type": "lesson", "id": "ecriture-courte", "title": "Réunir saisie et conversion", "paragraphs": ["Après avoir compris les deux étapes séparées, int(input(...)) peut les réunir. Il convertit le résultat de input, pas le texte de la question. Cette écriture ne protège toujours pas des entrées invalides.", "Dans un fichier distinct, teste 5 : la valeur numérique affichée doit être 5. La forme en deux lignes reste tout aussi correcte."], "code": "pieces = int(input(\"Pièces, entier uniquement : \"))\nprint(pieces)" }
        ] }
      ],
      "masteryCriteria": ["Distinguer 12 et le texte \"12\" et prévoir une addition numérique.", "Conserver et modifier un résultat dans une variable numérique.", "Convertir une réponse attendue en entier et expliquer la limite de ce format.", "Créer un calcul personnel et le vérifier avec plusieurs entrées sans recopier tout le modèle."],
      "consolidation": [{ "moduleId": "python-calculs", "blockId": "guide", "label": "Revoir nombre, texte et addition" }, { "moduleId": "python-calculs", "blockId": "saisie", "label": "Reprendre la conversion" }],
      "bonusActivities": [{ "moduleId": "python-calculs", "blockId": "bonus", "label": "Additionner deux réponses" }, { "moduleId": "python-calculs", "blockId": "exploration", "label": "Explorer d’autres opérations et écritures" }],
      "nextSteps": [{ "moduleId": "python-erreurs", "label": "Comprendre et corriger une erreur", "prerequisiteSkills": [{ "skillId": "python.conversion", "expectation": "Expliquer pourquoi int attend un entier écrit en chiffres ; sinon reprendre la conversion." }] }],
      "teacherGuide": {
        "objective": "Passer du texte aux valeurs numériques sans faire de la conversion un prérequis caché.",
        "entryDiagnosis": ["Faire créer une variable et afficher sa valeur sans guillemets autour du nom.", "Faire poser une question et réutiliser la réponse. Reprendre la saisie si cette étape demande encore un modèle complet."],
        "preparation": ["Créer calculs.py et conserver les fichiers précédents.", "Tester les modèles avec 5 et 0 ; réserver la saisie aux entiers.", "Noyau : nombre/texte, addition, variable numérique et conversion séparée. Les autres opérations, priorités et écritures sont dans l’exploration facultative ; aucune boucle ou exception capturée nécessaire."],
        "why": "Une réponse affichable n’est pas forcément une valeur calculable.",
        "discoverySpeech": ["« Que vont afficher 12 + 3 et deux textes collés ? »", "« Le résultat du calcul devient une valeur que la variable conserve. »", "« input fournit du texte ; int le convertit si ce texte représente un entier. »"],
        "example": { "target": { "moduleId": "python-calculs", "blockId": "conversion" }, "comments": ["Avec 5, attendre un total de 7 ; avec 0, attendre 2.", "Faire repérer les deux variables et la conversion séparée ; ne pas imposer la forme imbriquée pour valider le socle.", "Ne pas masquer une réponse invalide : annoncer ValueError, puis réserver sa lecture au module suivant."] },
        "questions": [{ "question": "Pourquoi deux textes 12 et 3 donnent-ils 123 avec + ?", "answer": "Les guillemets en font des textes ; + les colle au lieu de les additionner." }, { "question": "À quelle ligne la réponse devient-elle numérique ?", "answer": "pieces = int(reponse) transforme le texte attendu en entier." }, { "question": "Peut-on répondre 2.5 à ce modèle ?", "answer": "Non : le texte 2.5 n’est pas accepté par int. On demande un entier, pas un décimal." }],
        "accompaniedActivity": { "moduleId": "python-calculs", "blockId": "guide" }, "independentActivity": { "moduleId": "python-calculs", "blockId": "autonomie" },
        "differentiation": ["Séparer les calculs fixes et la conversion en deux temps si nécessaire.", "Accompagner la frappe mais demander une prédiction avant chaque essai.", "Pour le transfert, changer le contexte et le bonus ; proposer ensuite deux valeurs saisies."],
        "commonErrors": [{ "symptom": "Le total colle des chiffres ou la conversion échoue.", "helps": ["Comparer la réponse au total attendu.", "Repérer input puis int dans le fichier.", "Vérifier que la saisie représente un entier sans unité.", "Corriger une conversion ou la réponse de test, relancer et demander une explication."] }],
        "notes": "Évaluer séparément calcul numérique et conversion. Une réponse invalide ne doit pas conduire à introduire try/except avant son module. Les cases ne valident rien automatiquement.",
        "quickConductor": ["Diagnostiquer variables et saisie.", "Comparer texte et nombres.", "Calculer avec des valeurs fixes.", "Convertir deux réponses entières.", "Créer un total personnel, tester et expliquer."],
        "references": [{ "title": "Python - nombres", "url": "https://docs.python.org/fr/3/tutorial/introduction.html#numbers" }, { "title": "Python - int", "url": "https://docs.python.org/fr/3/library/functions.html#int" }]
      }
    },
    "python-erreurs": {
      "domainId": "python", "title": "Comprendre et corriger une erreur", "type": "lesson", "theme": "fondations",
      "objective": "Lire un message d’erreur et vérifier une correction ciblée.",
      "prerequisitesInContent": true,
      "tool": { "label": "Site officiel de Thonny", "url": "https://thonny.org/" }, "skillIds": ["python.debugging"],
      "prerequisiteSkills": [{ "skillId": "python.workspace", "expectation": "Enregistrer et relancer le fichier entier." }, { "skillId": "python.output", "expectation": "Lire les sorties de print." }, { "skillId": "python.variables", "expectation": "Distinguer un nom de variable et sa valeur." }, { "skillId": "python.input", "expectation": "Répondre dans la console." }, { "skillId": "python.numbers", "expectation": "Prévoir un calcul simple." }, { "skillId": "python.conversion", "expectation": "Convertir une réponse entière ; sinon reprendre Nombres et calculs." }],
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Il faut savoir relancer un fichier, utiliser une variable, prévoir une addition et convertir une réponse entière. Sinon, reprends Nombres et calculs. Les exemples incorrects sont volontaires : utilise un fichier distinct pour chacun, sans effacer tes programmes précédents.", "moduleLink": { "moduleId": "python-calculs", "text": "Revoir nombres et calculs" } },
        { "type": "lesson", "id": "exemple", "title": "1 - Lire avant de modifier", "paragraphs": ["Crée diagnostic_nom.py pour ce premier exemple. Ce modèle est volontairement incorrect : la dernière ligne devrait afficher 7, mais le nom utilisé ne correspond pas au nom défini. Exécute-le pour observer le message.", "Dans la console, lis la dernière ligne du message : NameError indique qu’un nom n’est pas défini. Repère ensuite le numéro de ligne et le nom du fichier signalés, puis regarde cette ligne dans l’éditeur. Le numéro dépend de ton propre fichier.", "La ligne signalée indique où Python a rencontré le problème ; sa cause peut être plus haut. Compare les noms, corrige seulement celui qui est incohérent, puis relance le fichier entier. Ne recopie pas le message d’erreur dans l’éditeur."], "code": "points = 5\nbonus = 2\nprint(point + bonus)" },
        { "type": "lesson", "id": "syntaxe", "title": "2 - Une instruction impossible à lire", "paragraphs": ["Enregistre ton premier essai, puis crée diagnostic_syntaxe.py. Ce modèle incorrect produit une SyntaxError : il manque un guillemet fermant. Python ne peut pas lire l’instruction et n’exécute pas le fichier.", "Regarde les guillemets et les parenthèses par paires. L’indicateur dans le message aide à chercher, mais ne promet pas de pointer exactement le caractère manquant. Corrige une cause et reteste."], "code": "print(\"Bonjour !)" },
        { "type": "lesson", "id": "conversion", "title": "3 - Une valeur non convertible", "paragraphs": ["Enregistre tes essais et crée diagnostic_conversion.py. Ce modèle est correct pour une réponse entière. Essaie 5, puis relance avec cinq : la conversion produit une ValueError. Le texte fourni ne représente pas l’entier attendu.", "Avec cette entrée invalide, la ligne après int n’est pas exécutée. Pour vérifier le diagnostic, relance avec 5 : le résultat doit être 7. Les mots exacts du message peuvent varier selon la version de Python.", "Lire l’erreur n’est pas la gérer : ce programme s’arrête toujours pour une mauvaise entrée. Nous n’ajoutons pas encore de nouvelle tentative ni de try/except."], "code": "reponse = input(\"Points, entier uniquement : \")\npoints = int(reponse)\nprint(points + 2)" },
        { "type": "tasks", "id": "guide", "title": "Exercice guidé - une cause à la fois", "items": [{ "id": "nom-incoherent", "text": "Dans diagnostic_nom.py, teste le modèle NameError, repère la ligne et corrige le nom. Vérifie que le résultat devient 7.", "hint": "points est défini, point ne l’est pas. La correction ne demande pas de nouvelle variable." }, { "id": "guillemet-manquant", "text": "Dans diagnostic_syntaxe.py, corrige le modèle SyntaxError. Explique ce qui manquait et vérifie le message Bonjour !.", "hint": "Le texte doit se terminer par un guillemet avant la parenthèse fermante." }] },
        { "type": "lesson", "id": "resultat", "title": "4 - Sans message d’erreur, mais faux", "paragraphs": ["Crée diagnostic_resultat.py et garde tes essais précédents. L’objectif est d’ajouter un bonus de 2 aux 5 points, donc d’afficher 7. Le signe - soustrait : ce modèle fait une soustraction au lieu de l’addition demandée. Prévois le résultat puis corrige le signe.", "Une exécution sans erreur n’est pas une preuve de réussite. Compare toujours la sortie au résultat attendu, puis teste une autre valeur après la correction."], "code": "points = 5\nbonus = 2\nprint(points - bonus)" },
        { "type": "lesson", "id": "mission", "title": "Un programme à diagnostiquer", "paragraphs": ["Dans correction.py, l’objectif est d’ajouter 3 à 10, puis d’afficher la valeur de message. Ce modèle contient volontairement deux défauts. Prédis ce qui devrait s’afficher selon l’objectif avant de le tester."], "code": "print(10 - 3)\nmessage = \"Bonjour\"\nprint(mesage)" },
        { "type": "tasks", "id": "autonomie", "title": "À toi - retrouver l’intention", "intro": "Crée correction.py pour le modèle à diagnostiquer. Conserve les fichiers des exemples guidés ; essaie avant les indices.", "items": [{ "id": "deux-defauts", "text": "Saisis les trois lignes du modèle à diagnostiquer. Annonce les résultats attendus selon l’objectif, puis exécute le fichier.", "hint": "Selon la consigne, tu attends 13 puis Bonjour. Compare ces attentes à la sortie et au message d’erreur." }, { "id": "diagnostic-correction", "text": "Repère le message d’erreur et corrige sa cause. Compare ensuite la première sortie à l’objectif et corrige l’autre défaut. Relance après chaque changement.", "hint": "Compare le nom défini au nom utilisé, puis vérifie si le calcul ajoute réellement 3." }, { "id": "retour-test", "text": "Remplace 10 par 4, prédis le nouveau résultat et vérifie-le. Explique pourquoi le premier calcul faux n’a pas produit de message d’erreur.", "hint": "Une soustraction est une instruction valide même lorsqu’elle ne correspond pas à l’objectif." }, { "id": "diagnostic-saisie", "text": "Rouvre diagnostic_conversion.py. Choisis une réponse qui fait échouer ce programme et une autre qui le fait réussir. Avant les essais, prédis ce qui se passera ; puis explique la ligne concernée, la cause et le résultat de l’essai réussi.", "hint": "Observe le format demandé par la question et le rôle de chaque ligne. Relance pour chaque réponse ; lire une erreur ne signifie pas l’intercepter." }] },
        { "type": "tasks", "id": "bonus", "title": "Bonus - expliquer une correction", "items": [{ "id": "journal", "text": "Sur un exemple déjà testé, note le résultat attendu, le symptôme, la cause, la correction et un test qui la vérifie. Explique-les sans ouvrir l’indice.", "hint": "Distingue le nom de l’erreur et sa cause précise dans ce programme. Une correction doit être suivie d’un nouvel essai." }] }
      ],
      "masteryCriteria": ["Repérer le fichier, la ligne et la catégorie d’une erreur sans recopier le message.", "Relier NameError, SyntaxError et ValueError à une cause précise sur les exemples enseignés.", "Corriger une cause à la fois puis relancer un test pertinent.", "Détecter un résultat faux même sans exception et expliquer la correction."],
      "consolidation": [{ "moduleId": "python-erreurs", "blockId": "guide", "label": "Revoir noms et syntaxe" }, { "moduleId": "python-erreurs", "blockId": "conversion", "label": "Revoir une saisie non convertible" }, { "moduleId": "python-calculs", "blockId": "conversion", "label": "Revoir le format entier" }],
      "bonusActivities": [{ "moduleId": "python-erreurs", "blockId": "bonus", "label": "Expliquer une correction" }],
      "nextSteps": [{ "moduleId": "python-conditions", "label": "Faire un choix", "prerequisiteSkills": [{ "skillId": "python.debugging", "expectation": "Lire une erreur et vérifier la correction ; sinon reprendre les diagnostics." }] }],
      "teacherGuide": {
        "objective": "Installer une méthode de diagnostic, sans confondre correction du code et gestion d’une entrée invalide.",
        "entryDiagnosis": ["Faire prévoir 5 + 2 et expliquer int sur la réponse 5.", "Vérifier que l’élève relance le bon fichier après modification."],
        "preparation": ["Prévoir diagnostic_nom.py, diagnostic_syntaxe.py, diagnostic_conversion.py et diagnostic_resultat.py pour conserver les exemples séparément, puis correction.py pour l’autonomie.", "Tester les trois catégories d’erreur ; le numéro de ligne dépend du fichier réel.", "Prévoir un calcul valide mais contraire à l’objectif ; ne pas introduire try/except."],
        "why": "Une erreur est une information à relier à une intention, pas un signal pour réécrire tout le programme.",
        "discoverySpeech": ["« Qu’espérais-tu lire ? Qu’as-tu réellement obtenu ? »", "« Lis la dernière ligne puis retrouve la ligne du fichier signalée. »", "« Change une cause, relance et vérifie : un résultat sans exception peut rester faux. »"],
        "example": { "target": { "moduleId": "python-erreurs", "blockId": "exemple" }, "comments": ["Le modèle échoue volontairement sur point ; la variable définie est points.", "Après correction, le résultat attendu est 7.", "Faire décrire la cause avant de fournir une correction ; la ligne signalée est un point de départ."] },
        "questions": [{ "question": "Une SyntaxError et une NameError arrivent-elles au même moment ?", "answer": "Une erreur de syntaxe empêche la lecture du fichier ; une NameError apparaît lorsque l’exécution utilise un nom non défini." }, { "question": "Faut-il modifier int si cinq provoque ValueError ?", "answer": "Pas pour ce modèle qui demande un entier en chiffres. Tester 5 vérifie le diagnostic ; accepter les mots demanderait un autre traitement." }, { "question": "L’absence d’erreur prouve-t-elle que le résultat est bon ?", "answer": "Non : il faut comparer la sortie à l’objectif et à une prédiction." }],
        "accompaniedActivity": { "moduleId": "python-erreurs", "blockId": "guide" }, "independentActivity": { "moduleId": "python-erreurs", "blockId": "autonomie" },
        "differentiation": ["Commencer par un nom incohérent avant de comparer les catégories.", "Aider à lire le message sans dicter la correction.", "Demander une nouvelle valeur de test et une explication sans indice."],
        "commonErrors": [{ "symptom": "L’élève change plusieurs lignes au hasard.", "helps": ["Demander le résultat attendu.", "Faire lire la dernière ligne et retrouver le fichier signalé.", "Isoler une cause et formuler une correction avant de la saisir.", "Tester cette seule correction puis comparer la sortie à l’objectif."] }],
        "notes": "Évaluer la démarche et le transfert, pas la mémorisation de messages exacts. Une erreur d’exécution peut survenir après des sorties déjà produites. La robustesse des entrées reste pour plus tard.",
        "quickConductor": ["Faire prévoir la sortie.", "Lire et corriger un nom.", "Comparer syntaxe et conversion dans des fichiers distincts.", "Chercher un résultat faux sans exception.", "Corriger deux défauts successifs puis faire choisir et expliquer un essai de saisie invalide et un essai valide sans dicter la cause."],
        "references": [{ "title": "Python - erreurs et exceptions", "url": "https://docs.python.org/fr/3/tutorial/errors.html" }]
      }
    },
    "python-conditions": {
      "domainId": "python", "title": "Faire un choix", "type": "lesson", "theme": "fondations",
      "objective": "Construire un choix à deux issues et tester chaque branche.",
      "prerequisitesInContent": true,
      "tool": { "label": "Site officiel de Thonny", "url": "https://thonny.org/" }, "skillIds": ["python.conditions"],
      "prerequisiteSkills": [{ "skillId": "python.workspace", "expectation": "Créer et relancer le fichier entier." }, { "skillId": "python.output", "expectation": "Afficher un message." }, { "skillId": "python.variables", "expectation": "Définir une variable avant son utilisation." }, { "skillId": "python.input", "expectation": "Conserver une réponse de input." }, { "skillId": "python.numbers", "expectation": "Utiliser une valeur numérique." }, { "skillId": "python.conversion", "expectation": "Convertir une réponse entière." }, { "skillId": "python.debugging", "expectation": "Lire la ligne signalée et retester une correction ; sinon reprendre Comprendre et corriger une erreur." }],
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Il faut savoir afficher une variable numérique, convertir une réponse entière et relire une erreur après un essai. Sinon, reprends le point concerné. Enregistre tes essais précédents et crée choix.py sans les effacer. Commence avec une valeur fixe : la question viendra ensuite.", "moduleLink": { "moduleId": "python-erreurs", "text": "Revoir le diagnostic des erreurs" } },
        { "type": "lesson", "id": "comparer", "title": "1 - Une comparaison, deux réponses", "paragraphs": [">= signifie supérieur ou égal. points >= 10 est vrai pour 10 et 12, faux pour 9. Python affiche True pour vrai et False pour faux.", "> signifie strictement supérieur et < strictement inférieur. == compare deux valeurs : points == 10 demande si elles sont égales. Un seul = affecte une valeur à une variable ; il ne fait pas une comparaison."], "code": "points = 10\nprint(points >= 10)\nprint(points > 10)\nprint(points == 10)" },
        { "type": "lesson", "id": "exemple", "title": "2 - Choisir une seule branche", "paragraphs": ["if signifie si : le premier message s’affiche si la comparaison est vraie. else signifie sinon : son message s’affiche si elle est fausse. Une seule des deux branches s’exécute.", "Chaque ligne if ou else se termine par deux-points. Les instructions de sa branche commencent quatre espaces plus loin : c’est l’indentation. else est aligné avec if. Thonny peut ajouter les espaces après les deux-points ; vérifie leur alignement.", "La dernière ligne revient au même alignement que if : elle est hors des branches et s’exécute dans les deux cas. Avec points = 10, attends Passage ouvert puis Fin du test."], "code": "points = 10\nif points >= 10:\n    print(\"Passage ouvert\")\nelse:\n    print(\"Encore quelques points\")\nprint(\"Fin du test\")" },
        { "type": "tasks", "id": "guide", "title": "Exercice guidé - vérifier la frontière", "items": [{ "id": "trois-cas", "text": "Prédis puis teste le modèle avec 9, 10 et 11. Pour chaque essai, indique la branche choisie et le message qui s’affiche toujours.", "hint": "9 choisit else ; 10 et 11 choisissent if. Fin du test s’affiche dans les trois cas." }, { "id": "strict", "text": "Remplace >= par > et reteste 10. Explique ce qui change, puis restaure >=.", "hint": "10 n’est pas strictement supérieur à 10 : avec >, il choisit else." }, { "id": "alignement", "text": "Montre les deux-points, les lignes indentées et la ligne hors des branches. Explique le rôle de chacun.", "hint": "Les espaces ne sont pas une décoration : ils indiquent les instructions appartenant à chaque branche." }] },
        { "type": "lesson", "id": "saisie", "title": "3 - Le choix dépend d’une réponse", "paragraphs": ["Enregistre choix.py, puis utilise Enregistrer sous pour créer choix_saisie.py et conserver le modèle à valeur fixe. Dans cette copie, remplace seulement points = 10 par les deux lignes ci-dessous, au début du fichier, sans indentation. Garde ensuite le même if/else et le print final : on modifie seulement l’origine des points.", "Réponds avec un entier écrit en chiffres, sans unité ni décimale. La conversion a lieu avant la comparaison. Une entrée comme dix provoque toujours ValueError : if/else ne protège pas cette conversion.", "Teste 9, 10 et 11 en relançant pour chaque réponse. Une seule exécution ne prouve pas que les deux branches fonctionnent."], "code": "reponse = input(\"Points, entier uniquement : \")\npoints = int(reponse)" },
        { "type": "tasks", "id": "autonomie", "title": "À toi - ouvrir un coffre", "intro": "Enregistre choix_saisie.py puis crée coffre.py. Conserve tes deux modèles. Le coffre s’ouvre à partir de 5 clés ; essaie sans recopier la décision complète.", "items": [{ "id": "coffre-question", "text": "Demande un nombre entier de clés, conserve-le comme nombre et affiche Coffre ouvert s’il y en a au moins 5, sinon Pas assez de clés.", "hint": "Après input et int, compare avec >= 5. Chaque branche contient son propre print indenté." }, { "id": "coffre-tests", "text": "Prédis puis teste 4, 5 et 6. Ajoute un message Fin qui s’affiche toujours après le choix.", "hint": "4 ne suffit pas ; 5 et 6 ouvrent le coffre. Le dernier print doit être aligné avec if, pas avec le print d’une branche." }, { "id": "coffre-modifier", "text": "Change le seuil à 8 et choisis trois nouveaux tests : en dessous, exactement au seuil, au-dessus. Explique le rôle de la comparaison et des espaces.", "hint": "Teste 7, 8 et 9. Le cas exactement au seuil vérifie la différence entre > et >=." }] },
        { "type": "tasks", "id": "bonus", "title": "Bonus - comparer du texte", "items": [{ "id": "mot-cle", "text": "Dans un nouveau fichier, demande un mot. Affiche Bienvenue si la réponse est exactement étoile, sinon Mot différent. Teste étoile, Etoile et lune.", "hint": "input suffit pour du texte, sans int. Compare la variable à \"étoile\" avec ==. Les majuscules et les accents comptent." }] },
        { "type": "callout", "id": "suite", "title": "Pour la suite", "text": "Si tu sais construire les deux branches et tester la frontière sans recopier tout le modèle, tu peux ajouter plusieurs possibilités. Sinon, consolide les tests et l’indentation. Finir cette page ne valide pas automatiquement tes compétences." }
      ],
      "masteryCriteria": ["Distinguer = et ==, et expliquer la frontière de >=.", "Construire un if/else avec deux-points et indentation cohérente.", "Tester les deux branches et la valeur exactement au seuil.", "Modifier le seuil et distinguer une instruction de branche d’une instruction exécutée toujours."],
      "consolidation": [{ "moduleId": "python-conditions", "blockId": "guide", "label": "Reprendre les branches et la frontière" }, { "moduleId": "python-erreurs", "blockId": "guide", "label": "Relire une erreur" }],
      "bonusActivities": [{ "moduleId": "python-conditions", "blockId": "bonus", "label": "Comparer un mot exact" }], "nextSteps": [{ "moduleId": "python-elif", "label": "Plusieurs possibilités", "prerequisiteSkills": [{ "skillId": "python.conditions", "expectation": "Construire if/else et tester les deux branches ; sinon reprendre le coffre." }] }],
      "teacherGuide": {
        "objective": "Comprendre le choix exclusif entre deux branches, leur structure et la nécessité de tester la frontière.",
        "entryDiagnosis": ["Faire utiliser une variable numérique et expliquer int sur une réponse entière.", "Faire relancer après modification et lire un message d’erreur ; proposer une reprise ciblée si nécessaire."],
        "preparation": ["Prévoir choix.py à valeur fixe, choix_saisie.py pour sa copie interactive, puis coffre.py pour l’autonomie ; conserver les trois fichiers.", "Tester 9, 10 et 11 ; prévoir les deux sorties et le message commun.", "Pas de elif, condition composée, boucle ni exception capturée dans ce module."],
        "why": "Une même suite d’instructions peut choisir une action en fonction d’une information.",
        "discoverySpeech": ["« Est-ce que 10 suffit si la règle dit au moins 10 ? »", "« if et else proposent deux issues ; un essai n’en choisit qu’une. »", "« Les espaces indiquent à quelle branche appartient une instruction. »"],
        "example": { "target": { "moduleId": "python-conditions", "blockId": "exemple" }, "comments": ["Avec 10, attendre Passage ouvert et Fin du test.", "Faire prévoir 9 puis 11 ; tester le seuil lui-même, pas seulement les extrêmes.", "Distinguer les print indentés du message commun avant d’ajouter une saisie."] },
        "questions": [{ "question": "Les deux messages des branches s’affichent-ils pour 10 ?", "answer": "Non : seule la branche if s’exécute, puis le message commun hors des branches." }, { "question": "Pourquoi tester exactement 10 ?", "answer": "Pour vérifier que le seuil est inclus par >= et comprendre la différence avec >." }, { "question": "Le choix protège-t-il une réponse dix ?", "answer": "Non : int échoue avant que la comparaison soit exécutée." }, { "question": "Quelle différence entre = et == ?", "answer": "= affecte une valeur ; == compare deux valeurs." }],
        "accompaniedActivity": { "moduleId": "python-conditions", "blockId": "guide" }, "independentActivity": { "moduleId": "python-conditions", "blockId": "autonomie" },
        "differentiation": ["Rester sur une valeur fixe avant d’ajouter input.", "Aider à l’indentation mais faire expliquer l’appartenance des lignes.", "Demander un nouveau seuil sans modèle ; proposer ensuite une égalité textuelle."],
        "commonErrors": [{ "symptom": "L’alignement ou le seuil ne correspond pas à l’intention.", "helps": ["Demander la branche attendue pour la valeur testée.", "Vérifier la comparaison et les deux-points.", "Repérer les quatre espaces des branches et l’alignement de else.", "Corriger une cause puis retester en dessous, au seuil et au-dessus."] }],
        "notes": "Une branche jamais testée peut contenir une erreur d’exécution. Une erreur de syntaxe peut empêcher tout le fichier de démarrer. Évaluer explication et transfert séparément des aides à la frappe ; aucun statut automatique.",
        "quickConductor": ["Vérifier les acquis numériques.", "Lire des comparaisons.", "Construire deux branches et un message commun.", "Tester les trois valeurs puis une saisie.", "Créer le coffre et modifier son seuil."],
        "references": [{ "title": "Python - if", "url": "https://docs.python.org/fr/3/tutorial/controlflow.html#if-statements" }]
      }
    },
    "python-elif": {
      "domainId": "python", "title": "Plusieurs possibilités", "type": "lesson", "theme": "fondations",
      "objective": "Ordonner plusieurs conditions et vérifier quelle issue est choisie.", "prerequisitesInContent": true,
      "tool": { "label": "Site officiel de Thonny", "url": "https://thonny.org/" }, "skillIds": ["python.branches"],
      "prerequisiteSkills": [{ "skillId": "python.workspace", "expectation": "Créer et relancer un fichier .py." }, { "skillId": "python.output", "expectation": "Afficher et lire les résultats." }, { "skillId": "python.variables", "expectation": "Définir une valeur avant de la comparer." }, { "skillId": "python.input", "expectation": "Conserver une réponse de input." }, { "skillId": "python.numbers", "expectation": "Comparer des nombres." }, { "skillId": "python.conversion", "expectation": "Convertir une réponse entière." }, { "skillId": "python.debugging", "expectation": "Lire une erreur et retester sa correction." }, { "skillId": "python.conditions", "expectation": "Construire if/else et tester le seuil ; sinon reprendre Faire un choix." }],
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Il faut savoir construire un if/else, comparer des nombres et tester les deux branches. Pour la saisie, il faut aussi savoir convertir un entier. Enregistre choix.py et crée possibilites.py sans effacer tes anciens fichiers.", "moduleLink": { "moduleId": "python-conditions", "text": "Revoir le choix à deux issues" } },
        { "type": "lesson", "id": "exemple", "title": "1 - Ajouter une autre condition", "paragraphs": ["elif signifie sinon si. Si la condition du if est fausse, Python teste celle du elif. Si aucune condition n’est vraie, il exécute else. Les mots if, elif et else sont alignés ; chaque branche commence quatre espaces plus loin et chaque en-tête se termine par deux-points.", "Python choisit seulement la première condition vraie de cette chaîne. Avec 10 points, les deux comparaisons seraient vraies, mais seule la première branche est exécutée : on lit Grand passage, puis Fin du choix.", "Ici, 10 ou plus ouvre le grand passage ; de 5 à 9 ouvre le petit passage ; moins de 5 fait patienter. La dernière ligne non indentée s’exécute dans tous les cas."], "code": "points = 10\nif points >= 10:\n    print(\"Grand passage\")\nelif points >= 5:\n    print(\"Petit passage\")\nelse:\n    print(\"Patienter\")\nprint(\"Fin du choix\")" },
        { "type": "lesson", "id": "ordre", "title": "2 - L’ordre change la décision", "paragraphs": ["Crée ordre_conditions.py pour ce modèle volontairement mal ordonné. Prédis ce qu’il affiche avec 12, puis exécute-le. Compare le résultat au grand passage attendu pour cette valeur et cherche ce qui empêche de le choisir.", "Après ton essai, vérifie si un premier test couvre déjà tous les cas du suivant. L’ordre des seuils n’est pas une règle universelle : il doit correspondre aux issues attendues."], "code": "points = 12\nif points >= 5:\n    print(\"Petit passage\")\nelif points >= 10:\n    print(\"Grand passage\")\nelse:\n    print(\"Patienter\")" },
        { "type": "lesson", "id": "independants", "title": "3 - Deux if ne font pas une chaîne", "paragraphs": ["Crée conditions_independantes.py pour conserver ce troisième modèle. Les deux if sont indépendants. Python teste chacun, même si le premier est vrai. Avec 12, les deux messages s’affichent.", "Choisis une chaîne if/elif/else quand les issues doivent être exclusives. Des if indépendants conviennent lorsque plusieurs actions peuvent se produire ensemble. Le mot else se rattache au if ou à la chaîne qui le précède, pas à tous les if du fichier."], "code": "points = 12\nif points >= 10:\n    print(\"Grand passage\")\nif points >= 5:\n    print(\"Petit passage\")" },
        { "type": "tasks", "id": "guide", "title": "Exercice guidé - deux frontières", "items": [{ "id": "frontieres", "text": "Sur le premier modèle, prédis puis teste 4, 5, 9 et 10. Une seule issue doit s’afficher à chaque essai, suivie de Fin du choix.", "hint": "4 : Patienter ; 5 et 9 : Petit passage ; 10 : Grand passage. Relance après chaque modification." }, { "id": "corriger-ordre", "text": "Teste le modèle mal ordonné avec 12, puis corrige l’ordre des conditions en gardant chaque message associé à son seuil. Reteste 4, 5 et 10.", "hint": "Avec 12, le premier test >= 5 est déjà vrai : la branche >= 10 n’est donc pas choisie. Déplace la condition et sa branche ensemble ; >= 10 doit précéder >= 5 pour cette règle." }, { "id": "comparer-if", "text": "Compare le modèle à deux if et la chaîne avec 12. Explique pourquoi l’un affiche deux issues et l’autre une seule.", "hint": "Deux if font deux décisions indépendantes. Dans la chaîne, Python ne choisit que la première condition vraie." }] },
        { "type": "lesson", "id": "saisie", "title": "4 - Choisir avec une réponse", "paragraphs": ["Rouvre possibilites.py et utilise Fichier → Enregistrer sous pour créer possibilites_saisie.py. Dans cette copie, remplace points = 10 par ces deux lignes au début du fichier, sans indentation, puis garde la chaîne et le message final. Demande un entier écrit en chiffres, sans unité ni décimale.", "Teste 4, 5, 9 et 10 en répondant dans la console. elif ne protège pas la conversion : une réponse comme dix provoque ValueError avant le choix. Arrête puis relance pour un nouvel essai."], "code": "reponse = input(\"Points, entier uniquement : \")\npoints = int(reponse)" },
        { "type": "tasks", "id": "autonomie", "title": "À toi - trois coffres", "intro": "Enregistre possibilites_saisie.py puis crée coffres.py sans remplacer les autres essais. Écris ta propre décision avant d’ouvrir l’indice.", "items": [{ "id": "coffres-regle", "text": "Demande un nombre entier de clés. Affiche Coffre doré à partir de 8, Coffre argenté de 3 à 7, sinon Aucun coffre. Une seule issue doit s’afficher.", "hint": "Convertis la réponse, puis teste >= 8 avant >= 3. else couvre les valeurs restantes ; aucun deuxième test de borne n’est nécessaire ici." }, { "id": "coffres-tests", "text": "Prédis puis teste 2, 3, 7 et 8. Change ensuite le seuil doré à 10 et choisis de nouveaux tests autour de cette frontière.", "hint": "Aux seuils initiaux : aucun, argenté, argenté, doré. Après modification, 9 doit rester argenté et 10 devenir doré." }, { "id": "expliquer-chaine", "text": "Explique pourquoi 8 ne déclenche pas deux coffres et pourquoi inverser les tests changerait le résultat.", "hint": "Le premier test vrai sélectionne la branche et écarte les autres branches de la chaîne." }] },
        { "type": "tasks", "id": "bonus", "title": "Bonus - une quatrième issue", "items": [{ "id": "quatre-issues", "text": "Dans un nouveau fichier, ajoute un coffre de bronze de 1 à 2 clés. Garde argenté à partir de 3, doré à partir de 8 et aucun coffre pour moins de 1. Teste 0, 1, 2, 3, 7 et 8.", "hint": "Une chaîne peut contenir plusieurs elif : ajoute le test >= 1 après >= 3, avant else." }] }
      ],
      "masteryCriteria": ["Expliquer le rôle de elif et la sélection de la première condition vraie.", "Ordonner des seuils qui se recouvrent et tester les deux frontières.", "Distinguer une chaîne exclusive de plusieurs if indépendants.", "Construire une décision personnelle, modifier un seuil et choisir les tests correspondants."],
      "consolidation": [{ "moduleId": "python-elif", "blockId": "guide", "label": "Revoir ordre et frontières" }, { "moduleId": "python-conditions", "blockId": "guide", "label": "Reprendre if/else" }],
      "bonusActivities": [{ "moduleId": "python-elif", "blockId": "bonus", "label": "Ajouter une quatrième issue" }],
      "nextSteps": [{ "moduleId": "python-aventure", "label": "Une aventure à choix", "prerequisiteSkills": [{ "skillId": "python.branches", "expectation": "Construire et tester trois issues exclusives ; sinon reprendre les coffres." }] }],
      "teacherGuide": {
        "objective": "Enseigner la sélection exclusive et l’ordre des tests sans introduire de conditions composées.",
        "entryDiagnosis": ["Faire écrire un if/else et prévoir la branche au seuil.", "Faire convertir une réponse entière avant de passer à la variante interactive."],
        "preparation": ["Conserver choix.py et créer possibilites.py, ordre_conditions.py et conditions_independantes.py. Pour la saisie, enregistrer une copie du premier modèle sous possibilites_saisie.py.", "Préparer 4, 5, 9 et 10, puis comparer la chaîne au modèle mal ordonné et aux if indépendants.", "Aucune boucle, imbrication ou bibliothèque nécessaire ; la saisie numérique reste limitée aux entiers."],
        "why": "Plusieurs conditions vraies ne doivent pas toujours déclencher plusieurs actions.",
        "discoverySpeech": ["« Pour 10, les deux seuils sont atteints : quelle issue doit gagner ? »", "« Dans une chaîne, la première condition vraie choisit une seule branche. »", "« Deux if indépendants peuvent exécuter deux actions : comparons les sorties. »"],
        "example": { "target": { "moduleId": "python-elif", "blockId": "exemple" }, "comments": ["10 donne Grand passage puis Fin du choix, pas Petit passage.", "Faire prédire les quatre essais avant de changer la valeur.", "Expliquer l’exclusion par la chaîne, pas par une prétendue fausseté du test >= 5 pour 10."] },
        "questions": [{ "question": "Pourquoi ne lit-on pas Petit passage pour 10 ?", "answer": "Le premier test vrai a déjà sélectionné Grand passage ; Python ne choisit pas une seconde branche." }, { "question": "Pourquoi >= 5 avant >= 10 empêche-t-il le grand passage ?", "answer": "Tous les nombres au moins égaux à 10 satisfont déjà le premier test >= 5." }, { "question": "Quelle différence avec deux if ?", "answer": "Ils sont testés indépendamment ; les deux actions peuvent s’exécuter." }],
        "accompaniedActivity": { "moduleId": "python-elif", "blockId": "guide" }, "independentActivity": { "moduleId": "python-elif", "blockId": "autonomie" },
        "differentiation": ["Garder une valeur fixe jusqu’à compréhension des trois issues.", "Faire tracer oralement un essai en repérant la première condition vraie.", "Demander de nouveaux seuils ou une quatrième issue, sans imposer le bonus."],
        "commonErrors": [{ "symptom": "Une branche est inaccessible ou deux coffres s’affichent.", "helps": ["Demander le résultat attendu pour la valeur saisie.", "Faire suivre les tests dans leur ordre réel.", "Comparer les seuils et repérer if indépendant ou elif.", "Corriger une cause puis retester chaque frontière en expliquant l’issue choisie."] }],
        "notes": "Ne pas transformer cette activité en bornes doubles avec and. Évaluer le transfert, pas seulement le modèle recopié ; aucune acquisition automatique.",
        "quickConductor": ["Diagnostiquer if/else.", "Lire une chaîne à trois issues.", "Faire prédire puis tester l’ordre incorrect avant d’en expliquer la cause ; comparer ensuite les if indépendants.", "Tester les frontières puis une saisie.", "Construire les coffres et modifier un seuil."],
        "references": [{ "title": "Python - if et elif", "url": "https://docs.python.org/fr/3/tutorial/controlflow.html#if-statements" }]
      }
    },
    "python-aventure": {
      "domainId": "python", "title": "Une aventure à choix", "type": "project", "theme": "fondations",
      "objective": "Créer une scène interactive avec trois destinations et une issue pour un choix inconnu.", "prerequisitesInContent": true,
      "tool": { "label": "Site officiel de Thonny", "url": "https://thonny.org/" }, "skillIds": ["python.workspace", "python.output", "python.variables", "python.input", "python.conditions", "python.branches", "python.debugging"],
      "prerequisiteSkills": [{ "skillId": "python.workspace", "expectation": "Créer, conserver et relancer un fichier." }, { "skillId": "python.output", "expectation": "Afficher des messages dans l’ordre voulu." }, { "skillId": "python.variables", "expectation": "Conserver plusieurs réponses sous des noms distincts." }, { "skillId": "python.input", "expectation": "Poser une question et réutiliser sa réponse textuelle." }, { "skillId": "python.conditions", "expectation": "Comparer une valeur avec == et indenter les branches." }, { "skillId": "python.branches", "expectation": "Construire une chaîne exclusive ; sinon reprendre Plusieurs possibilités." }, { "skillId": "python.debugging", "expectation": "Comparer la sortie attendue à la sortie réelle et corriger une cause." }],
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Il faut savoir conserver une réponse textuelle, comparer avec == et construire if/elif/else. Sinon, reprends Plusieurs possibilités. Enregistre tes essais et crée aventure.py sans effacer les autres fichiers. Choisis un univers fictif : aucun renseignement personnel n’est nécessaire.", "moduleLink": { "moduleId": "python-elif", "text": "Revoir plusieurs issues" } },
        { "type": "lesson", "id": "plan", "title": "1 - Une scène, trois destinations", "paragraphs": ["Imagine un accueil, un pseudo fictif et trois lieux accessibles depuis la même scène. Choisis des mots simples à saisir, par exemple tour, jardin et grotte. Prévois un message différent pour chaque destination.", "Le programme pose une seule question de destination, puis raconte une issue. Ce n’est pas encore une aventure à plusieurs décisions successives : pas de boucle ou de conditions imbriquées nécessaires.", "Prévois aussi ce qui s’affiche si le mot ne correspond à aucun lieu. Le programme doit expliquer les choix possibles et se terminer ; il ne repose pas automatiquement la question." ] },
        { "type": "lesson", "id": "texte", "title": "2 - Un choix textuel exact", "paragraphs": ["Pour du texte, compare la réponse à un mot entre guillemets avec ==. Ne convertis pas le lieu avec int : ce n’est pas un nombre.", "La comparaison est exacte : tour, Tour et tour suivi d’un espace sont trois textes différents. Écris les mots acceptés dans la question pour guider la saisie. Ce projet ne corrige pas automatiquement les majuscules ou les espaces.", "Tu peux ajouter deux elif après le premier if, puis un else pour le mot inconnu. Comme dans le module précédent, les en-têtes sont alignés et les messages de branche sont indentés." ] },
        { "type": "tasks", "id": "guide", "title": "Préparation accompagnée - une destination", "items": [{ "id": "une-question", "text": "Affiche un accueil et demande un lieu en annonçant tour comme choix accepté. Conserve la réponse dans une variable.", "hint": "Utilise print pour l’accueil, puis une variable affectée au résultat de input. Ne mets pas la réponse dans le fichier." }, { "id": "une-issue", "text": "Avec if/else, affiche un événement si la réponse est exactement tour, sinon un message indiquant que le lieu est inconnu.", "hint": "Compare ta variable à \"tour\" avec ==. Le else ne doit pas faire entrer dans un lieu non choisi." }, { "id": "deux-essais", "text": "Prédis puis teste tour et lune. Explique quelle branche a été choisie.", "hint": "Un essai reconnaît le lieu ; l’autre utilise else. Relance pour chaque réponse." }] },
        { "type": "tasks", "id": "autonomie", "title": "3 - Construis ton aventure", "intro": "Enregistre le premier essai, puis crée mon_aventure.py pour ton projet personnel. Utilise tes propres lieux et messages ; essaie avant les indices.", "items": [{ "id": "accueil-pseudo", "text": "Affiche un accueil, demande un pseudo fictif et réutilise-le dans un message. Garde cette réponse distincte du choix de destination.", "hint": "Deux informations nécessitent deux noms de variables différents. print peut afficher un texte et une variable séparés par une virgule." }, { "id": "trois-lieux", "text": "Annonce trois mots acceptés et demande la destination. Construis une chaîne if/elif/elif/else : un événement propre à chaque lieu, puis un message utile pour tout autre mot.", "hint": "Trois comparaisons exactes avec == ; else conseille les mots acceptés. Une seule issue doit s’afficher par essai." }, { "id": "fin-commune", "text": "Ajoute un message de fin qui s’affiche après le choix, quelle que soit la destination.", "hint": "Aligne ce print avec if, pas avec les messages des branches." }] },
        { "type": "tasks", "id": "verification", "title": "4 - Vérifie chaque route", "items": [{ "id": "quatre-routes", "text": "Prédis puis teste les trois mots acceptés et un mot inconnu. Note pour chaque essai le mot saisi et l’unique événement attendu. Vérifie aussi le message de fin.", "hint": "Ne teste pas seulement ton lieu préféré. Utilise un nouveau pseudo pour vérifier qu’il vient réellement de la saisie." }, { "id": "casse-espace", "text": "Teste un mot accepté avec une majuscule, puis avec un espace ajouté. Vérifie que le message pour lieu inconnu s’affiche et explique pourquoi.", "hint": "L’égalité textuelle est exacte : on n’utilise ici aucun traitement automatique des réponses." }, { "id": "modifier-route", "text": "Renomme une destination : change le mot dans la question, dans la comparaison et dans tout rappel des choix affiché par else. Teste le nouveau mot, l’ancien, les deux autres destinations et un mot inconnu.", "hint": "L’ancien mot devient inconnu ; les autres routes doivent continuer à fonctionner. Le message de else doit annoncer les choix à jour, sans l’ancien mot." }, { "id": "retrouver-projet", "text": "Enregistre, ferme et rouvre le fichier. Relance-le et explique l’origine de chaque réponse et le choix des branches.", "hint": "Le fichier conserve les instructions, pas les réponses de la précédente exécution. Toutes les variables nécessaires doivent être définies dans le fichier." }] },
        { "type": "tasks", "id": "bonus", "title": "Bonus - une destination supplémentaire", "items": [{ "id": "quatrieme-lieu", "text": "Ajoute une quatrième destination annoncée dans la question et une branche elif avant else. Teste les quatre destinations et un mot inconnu.", "hint": "Garde else en dernier : il reste réservé à toute réponse non reconnue. Pas de nouvelle notion nécessaire." }] },
        { "type": "callout", "id": "suite", "title": "Pour la suite", "text": "Si tu peux expliquer et modifier les routes avec peu ou pas d’aide, tu as réinvesti les premières décisions. Sinon, reprends une route ou la chaîne. La prochaine étape prévue est de répéter des actions avec des boucles ; elle n’est pas nécessaire pour terminer cette scène." }
      ],
      "masteryCriteria": ["Créer une scène personnelle avec trois destinations réellement choisies par la saisie.", "Conserver le pseudo et le lieu dans des variables distinctes, sans conversion numérique du lieu.", "Tester les trois routes et une entrée inconnue ; expliquer l’égalité exacte et l’issue exclusive.", "Modifier une destination sans casser les autres et retrouver le programme enregistré.", "Distinguer reproduction, compréhension et transfert pour chaque compétence réinvestie."],
      "consolidation": [{ "moduleId": "python-aventure", "blockId": "guide", "label": "Repartir d’une destination" }, { "moduleId": "python-elif", "blockId": "guide", "label": "Revoir les issues exclusives" }, { "moduleId": "python-saisie", "blockId": "guide", "label": "Revoir la réponse textuelle" }],
      "bonusActivities": [{ "moduleId": "python-aventure", "blockId": "bonus", "label": "Ajouter une destination" }], "nextSteps": [{ "moduleId": "python-for", "label": "Répéter un nombre de fois", "prerequisiteSkills": [{ "skillId": "python.conditions", "expectation": "Repérer le bloc indenté et les instructions après ; sinon reprendre Faire un choix." }] }],
      "teacherGuide": {
        "objective": "Observer le transfert des premières notions dans une scène interactive originale, sans fournir un jeu complet à recopier.",
        "entryDiagnosis": ["Faire comparer une réponse textuelle à un mot avec ==.", "Faire expliquer une chaîne à trois issues et son else ; consolider ce point avant de multiplier les routes."],
        "preparation": ["Conserver les fichiers précédents et créer aventure.py, puis mon_aventure.py.", "Préparer trois mots de test et une entrée inconnue ; annoncer des mots simples, sans données personnelles.", "Pas de solution complète publiée, int, normalisation de texte, boucle ou condition imbriquée dans ce projet."],
        "why": "Une histoire interactive permet de vérifier si une réponse déclenche réellement l’issue prévue.",
        "discoverySpeech": ["« Quels mots peut-on saisir et que se passe-t-il pour chacun ? »", "« Quelle réponse donner si le lieu n’existe pas ? »", "« Testons toutes les routes, puis changeons une destination sans casser les autres. »"],
        "example": { "target": { "moduleId": "python-aventure", "blockId": "plan" }, "comments": ["Le plan décrit une scène à trois issues, pas un arbre de décisions imbriquées.", "Accompagner un lieu si nécessaire, puis laisser construire les autres sans modèle complet.", "Chaque test affiche une seule issue, puis le message de fin, y compris pour un choix inconnu."] },
        "questions": [{ "question": "Pourquoi ne pas utiliser int sur le lieu ?", "answer": "La réponse attendue est textuelle ; on compare le mot avec == sans conversion." }, { "question": "Que doit produire un mot inconnu ?", "answer": "Le message de else, puis la fin commune ; aucune destination valide ni nouvelle question automatique." }, { "question": "Renommer uniquement le mot dans la question suffit-il ?", "answer": "Non : il faut aussi modifier la comparaison et tout rappel des choix dans else. Tester le nouveau mot, l’ancien, les autres routes et un mot inconnu ; le rappel ne doit plus annoncer l’ancien mot." }, { "question": "La scène qui fonctionne prouve-t-elle tous les acquis ?", "answer": "Non : demander explication, tests de toutes les routes et modification autonome ; noter séparément les aides reçues." }],
        "accompaniedActivity": { "moduleId": "python-aventure", "blockId": "guide" }, "independentActivity": { "moduleId": "python-aventure", "blockId": "autonomie" },
        "differentiation": ["Construire une route avec aide puis passer à trois routes progressivement.", "Aider au clavier sans donner le choix de comparaison ni la structure complète.", "Proposer un quatrième lieu seulement après les tests et le transfert."],
        "commonErrors": [{ "symptom": "Une route n’est pas reconnue ou plusieurs événements s’affichent.", "helps": ["Comparer le mot réellement saisi au mot annoncé.", "Vérifier les mots entre guillemets, leur casse et les espaces.", "Repérer les elif, l’alignement et l’indentation des messages.", "Corriger une cause, tester cette route et les autres, puis demander une modification autonome."] }, { "symptom": "Le pseudo remplace la destination ou le projet dépend d’un ancien essai.", "helps": ["Relancer avec un pseudo et un lieu très différents.", "Repérer les noms à gauche des deux saisies.", "Vérifier les noms distincts et leurs usages dans les affichages et comparaisons.", "Corriger puis relancer le fichier entier après redémarrage ; vérifier la sauvegarde et la réouverture."] }],
        "notes": "Évaluer les compétences séparément. Ce projet n’exige ni calcul ni conversion ; il ne valide pas ces compétences. Les cases et routes consultées ne constituent pas une preuve d’acquisition.",
        "quickConductor": ["Diagnostiquer comparaison textuelle et elif.", "Préparer les trois lieux et l’issue inconnue.", "Accompagner une route si nécessaire.", "Construire et tester la scène personnelle.", "Modifier une route et le rappel de else, tester aussi un mot inconnu, puis rouvrir le fichier et choisir une reprise ou un bonus."],
        "references": [{ "title": "Python - décisions", "url": "https://docs.python.org/fr/3/tutorial/controlflow.html#if-statements" }, { "title": "Python - input", "url": "https://docs.python.org/fr/3/library/functions.html#input" }]
      }
    },
    "python-for": {
      "domainId": "python",
      "title": "Répéter un nombre de fois",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Construire une répétition avec for/range et prévoir ses passages.",
      "prerequisitesInContent": true,
      "tool": {
        "label": "Site officiel de Thonny",
        "url": "https://thonny.org/"
      },
      "skillIds": [
        "python.for"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "python.workspace",
          "expectation": "Créer, conserver et relancer un fichier."
        },
        {
          "skillId": "python.output",
          "expectation": "Afficher et prévoir l’ordre des résultats."
        },
        {
          "skillId": "python.variables",
          "expectation": "Définir et réutiliser une valeur."
        },
        {
          "skillId": "python.conditions",
          "expectation": "Repérer un bloc indenté et une ligne hors du bloc ; sinon reprendre Faire un choix."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "preparer",
          "title": "Avant de commencer",
          "text": "Il faut savoir afficher, réutiliser une variable et repérer un bloc indenté. Sinon, reprends le point concerné. Enregistre tes anciens programmes et crée repetitions.py sans les effacer. Commence avec un nombre de tours fixe.",
          "moduleLink": {
            "moduleId": "python-conditions",
            "text": "Revoir les blocs indentés"
          }
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "1 - Une action répétée",
          "paragraphs": [
            "Au lieu d’écrire trois print identiques, for répète un bloc. for tour in range(3) signifie ici : pour chaque valeur fournie par range(3), exécuter les instructions indentées.",
            "tour est un nom de variable : for lui affecte successivement les valeurs fournies. in relie ce nom à la suite parcourue. Garde les deux-points et quatre espaces devant les instructions du bloc.",
            "Prédis combien de Bonjour ! et de Fin s’afficheront. Le print de Fin, non indenté, vient après la boucle."
          ],
          "code": "for tour in range(3):\n    print(\"Bonjour !\")\nprint(\"Fin\")"
        },
        {
          "type": "lesson",
          "id": "valeurs",
          "title": "2 - Les valeurs de tour",
          "paragraphs": [
            "Enregistre repetitions.py puis crée tours.py pour ce modèle. range(3) fournit 0, 1, 2 : trois valeurs, en commençant par 0. La borne 3 est exclue.",
            "Exécute, puis remplace range(3) par range(1, 4). Prédis les valeurs : elles vont de 1 à 3, pas jusqu’à 4. La première borne est le début ; la seconde est la fin exclue.",
            "range n’est pas une liste. Ici, for parcourt une suite de nombres ; plus tard, il pourra parcourir d’autres éléments. Pas besoin d’une liste pour ces essais."
          ],
          "code": "for tour in range(3):\n    print(\"Tour\", tour)\nprint(\"Fin\")"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé - prévoir les passages",
          "items": [
            {
              "id": "passages",
              "text": "Dans repetitions.py, prédis puis teste range(1), range(3) et range(0). Vérifie aussi le message après la boucle.",
              "hint": "Un, trois puis zéro Bonjour ! ; Fin s’affiche une seule fois dans les trois essais."
            },
            {
              "id": "bornes",
              "text": "Dans tours.py, compare range(1, 4), range(1, 5) et range(1, 1). Prédis les valeurs et le nombre de passages avant chaque essai.",
              "hint": "1 à 3, puis 1 à 4, puis aucun tour : la borne de fin est exclue. Fin reste affiché."
            },
            {
              "id": "bloc",
              "text": "Rouvre repetitions.py et rétablis range(3). Place provisoirement le print de Fin dans le bloc. Prédis la différence avec trois tours, teste, puis remets-le après la boucle.",
              "hint": "Dans le bloc, Fin se répète à chaque tour ; hors du bloc, il s’affiche une seule fois."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "À toi - ton parcours de tours",
          "intro": "Enregistre repetitions.py et tours.py, puis crée parcours_tours.py. Conserve les exemples ; essaie avant les indices.",
          "items": [
            {
              "id": "tours-personnels",
              "text": "Affiche les tours de 1 à 4 avec un message de ton choix à chaque tour, puis un seul message de fin. Essaie sans recopier le modèle complet.",
              "hint": "Avec range à deux bornes, la première valeur est incluse et la dernière borne est exclue. Affiche la variable sans guillemets autour de son nom."
            },
            {
              "id": "changer-tours",
              "text": "Passe à six tours en changeant la borne. Explique le début, la dernière valeur et le nombre de passages avant de tester.",
              "hint": "Pour commencer à 1 et finir à 6, la borne exclue doit être 7."
            },
            {
              "id": "aucun-tour",
              "text": "Enregistre ton programme, puis crée parcours_vide.py avec Enregistrer sous. Modifie les bornes pour n’avoir aucun tour. Prédis puis teste le message final ; rouvre ensuite le premier fichier.",
              "hint": "Deux bornes égales ne donnent aucun passage. Un print hors du bloc doit encore s’exécuter."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus - choisir le nombre de tours",
          "items": [
            {
              "id": "nombre-saisi",
              "text": "Dans repetitions_saisie.py, demande un entier de 0 à 6, conserve la réponse puis convertis-la avec int en deux lignes. Utilise le nombre pour répéter ton message. Teste 0, 1 et 4.",
              "hint": "range peut recevoir la variable numérique. Ce programme ne contrôle pas le domaine 0 à 6 ; une saisie non convertible provoque toujours ValueError. Pas de gestion d’erreur à ajouter."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Prévoir les valeurs de range à une ou deux bornes et distinguer fin exclue et dernière valeur.",
        "Construire une répétition personnelle puis modifier son nombre de tours.",
        "Expliquer les instructions dans le bloc et après, même sans passage.",
        "Conserver les variantes et distinguer reproduction, explication et modification autonome."
      ],
      "consolidation": [
        {
          "moduleId": "python-for",
          "blockId": "guide",
          "label": "Revoir valeurs, bornes et bloc"
        },
        {
          "moduleId": "python-affichage",
          "blockId": "guide",
          "label": "Revoir affichage et ordre"
        },
        {
          "moduleId": "python-conditions",
          "blockId": "guide",
          "label": "Revoir l’indentation"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "python-for",
          "blockId": "bonus",
          "label": "Choisir le nombre de répétitions"
        }
      ],
      "nextSteps": [
        {
          "moduleId": "python-while",
          "label": "Répéter tant que",
          "prerequisiteSkills": [
            {
              "skillId": "python.for",
              "expectation": "Prévoir les passages et expliquer le bloc répété ; sinon reprendre les tours."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Enseigner une répétition connue et sa borne exclue, sans liste ni compteur de score.",
        "entryDiagnosis": [
          "Faire prévoir trois print puis montrer un bloc indenté.",
          "Distinguer l’aide au clavier de la compréhension de l’ordre."
        ],
        "preparation": [
          "Créer repetitions.py, tours.py puis parcours_tours.py ; garder les variantes.",
          "Préparer zéro, un et plusieurs passages ; aucune conversion nécessaire au socle."
        ],
        "why": "Une seule structure répète un bloc sans recopier ses instructions.",
        "discoverySpeech": [
          "« Combien de fois ce message doit-il apparaître ? »",
          "« Quelles valeurs tour reçoit-il ? »",
          "« Quelles lignes ne se répètent pas ? »"
        ],
        "example": {
          "target": {
            "moduleId": "python-for",
            "blockId": "exemple"
          },
          "comments": [
            "Trois Bonjour ! puis Fin.",
            "Afficher ensuite tour pour rendre visibles 0, 1, 2.",
            "range(1, 1) ne passe jamais dans le bloc."
          ]
        },
        "questions": [
          {
            "question": "Pourquoi 3 n’est-il pas affiché par range(3) ?",
            "answer": "La borne de fin est exclue ; les valeurs sont 0, 1, 2."
          },
          {
            "question": "Quelle différence avec range(1, 4) ?",
            "answer": "Trois passages aussi, mais les valeurs sont 1, 2, 3."
          },
          {
            "question": "Que devient Fin avec zéro passage ?",
            "answer": "Il s’affiche si son instruction est après le bloc, non indentée."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "python-for",
          "blockId": "guide"
        },
        "independentActivity": {
          "moduleId": "python-for",
          "blockId": "autonomie"
        },
        "differentiation": [
          "Rester d’abord sur un message identique, puis afficher tour.",
          "Faire suivre les valeurs oralement plutôt que demander un tableau logiciel.",
          "Proposer la saisie numérique seulement en bonus."
        ],
        "commonErrors": [
          {
            "symptom": "Le nombre de tours ou de Fin est incorrect.",
            "helps": [
              "Faire annoncer la sortie attendue.",
              "Repérer les bornes et les espaces du print.",
              "Suivre les valeurs sans inclure la borne de fin.",
              "Corriger une borne ou un alignement puis retester zéro, un et plusieurs passages."
            ]
          }
        ],
        "notes": "for peut parcourir autre chose que des nombres ; ne pas ajouter listes ou pas négatif ici. Aucune validation automatique.",
        "quickConductor": [
          "Diagnostiquer affichage et bloc.",
          "Lire puis exécuter la répétition.",
          "Afficher les valeurs et comparer les bornes.",
          "Créer, modifier et expliquer les tours personnels.",
          "Conserver la variante vide et choisir une reprise."
        ],
        "references": [
          {
            "title": "Python - for et range",
            "url": "https://docs.python.org/fr/3/tutorial/controlflow.html#the-range-function"
          }
        ]
      }
    },
    "python-while": {
      "domainId": "python",
      "title": "Répéter tant que",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Actualiser une condition de répétition et vérifier comment la boucle s’arrête.",
      "prerequisitesInContent": true,
      "tool": {
        "label": "Site officiel de Thonny",
        "url": "https://thonny.org/"
      },
      "skillIds": [
        "python.while"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "python.workspace",
          "expectation": "Créer, conserver et relancer un fichier."
        },
        {
          "skillId": "python.output",
          "expectation": "Afficher et prévoir l’ordre des résultats."
        },
        {
          "skillId": "python.variables",
          "expectation": "Définir et réutiliser une valeur."
        },
        {
          "skillId": "python.input",
          "expectation": "Poser une question et répondre dans la console."
        },
        {
          "skillId": "python.conditions",
          "expectation": "Comparer avec == ou < et indenter un bloc."
        },
        {
          "skillId": "python.numbers",
          "expectation": "Additionner 1 à une valeur numérique pour la variante à borne fixe."
        },
        {
          "skillId": "python.for",
          "expectation": "Prévoir les passages d’une répétition connue."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "preparer",
          "title": "Avant de commencer",
          "text": "Il faut savoir comparer, répondre à input et repérer un bloc répété. Pour le modèle numérique, il faut aussi savoir additionner 1. Enregistre tes essais puis crée encore.py. Avant de lancer, repère Arrêter / redémarrer : interromps un programme qui ne finit pas avant de le modifier.",
          "moduleLink": {
            "moduleId": "python-for",
            "text": "Revoir une répétition connue"
          }
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "1 - Tester avant chaque passage",
          "paragraphs": [
            "while signifie tant que. Avant chaque passage, Python teste la condition : si elle est vraie, il exécute le bloc ; sinon, il continue après la boucle. Contrairement à if, il revient tester après le bloc.",
            "La première question donne une valeur à reponse avant le premier test. Dans le bloc, une nouvelle question actualise cette valeur : le test suivant peut alors devenir faux.",
            "Ici, seul oui permet un tour. Tout autre texte arrête, même Oui ou oui suivi d’un espace. Ce n’est pas une correction automatique des réponses ; un premier non donne zéro passage."
          ],
          "code": "reponse = input(\"Continuer ? oui pour continuer : \")\nwhile reponse == \"oui\":\n    print(\"Un nouveau tour\")\n    reponse = input(\"Continuer ? oui pour continuer : \")\nprint(\"Fin\")"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé - suivre les essais",
          "items": [
            {
              "id": "arret-immediat",
              "text": "Prédis puis teste non dès la première question. Explique pourquoi Fin apparaît sans nouveau tour.",
              "hint": "La condition est fausse dès le premier test ; le bloc ne s’exécute pas."
            },
            {
              "id": "plusieurs-tours",
              "text": "Relance avec oui puis non, puis avec oui, oui, non. Annonce le nombre de tours avant chaque essai et repère la nouvelle saisie.",
              "hint": "Un puis deux tours. La question du bloc actualise reponse avant le prochain test."
            },
            {
              "id": "sans-mise-a-jour",
              "text": "Sans exécuter une version incorrecte, imagine que la nouvelle saisie du bloc est supprimée. Avec un premier oui, explique pourquoi la condition resterait vraie.",
              "hint": "reponse garderait oui. Arrêter / redémarrer interrompt une répétition involontaire ; l’absence de nouvelle saisie n’est pas à tester en lançant cette panne."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "numerique",
          "title": "2 - Faire évoluer une valeur",
          "paragraphs": [
            "Enregistre encore.py puis crée while_tours.py. tour commence à 1 ; tant que tour < 4, on l’affiche puis on l’augmente.",
            "Dans tour = tour + 1, Python lit l’ancienne valeur à droite, ajoute 1, puis conserve le résultat sous le même nom. Ce n’est pas une égalité mathématique. La mise à jour dans le bloc permet d’atteindre l’arrêt.",
            "Prédis puis teste : 1, 2, 3 puis Fin. Avec tour initialisé à 4 ou 5, il n’y a aucun passage. Restaure ensuite tour = 1."
          ],
          "code": "tour = 1\nwhile tour < 4:\n    print(\"Tour\", tour)\n    tour = tour + 1\nprint(\"Fin\")"
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "À toi - choisir la continuation",
          "intro": "Enregistre encore.py et while_tours.py puis crée repetition_personnelle.py. Essaie avant les indices ; garde les modèles.",
          "items": [
            {
              "id": "mot-personnel",
              "text": "Choisis ton mot de continuation et un message personnel. Pose une première question, répète le message tant que la réponse correspond au mot, puis redemande à chaque passage.",
              "hint": "Initialise la réponse avant while ; actualise-la dans le bloc. Le print final reste hors de la boucle."
            },
            {
              "id": "tests-personnels",
              "text": "Prédis puis teste un arrêt immédiat et deux accords suivis d’un arrêt. Explique la ligne qui permet à la condition de changer.",
              "hint": "Le premier essai ne produit aucun tour ; le second en produit deux. Chaque saisie remplace la réponse précédente."
            },
            {
              "id": "renommer-mot",
              "text": "Enregistre puis renomme le mot accepté dans les deux questions et dans la comparaison. Teste le nouveau mot puis l’ancien ; l’ancien doit maintenant arrêter.",
              "hint": "La question initiale et celle répétée doivent annoncer le même mot que celui comparé."
            },
            {
              "id": "borne-personnelle",
              "text": "Enregistre ton fichier. Rouvre while_tours.py puis crée borne_personnelle.py avec Enregistrer sous. Garde tour = 1, choisis une autre borne pour produire cinq tours et prédis la dernière valeur. Teste aussi un départ exactement à ta borne puis au-dessus.",
              "hint": "La borne doit être 6 pour afficher 1 à 5. Avec un départ à 6 ou à 7, aucun tour ; Fin s’affiche. Vérifie que l’addition de 1 reste dans le bloc."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus - une autre progression",
          "items": [
            {
              "id": "autre-depart",
              "text": "Dans un nouveau fichier, pars de 2 et augmente de 2 tant que la valeur est inférieure à 8. Prédis puis vérifie les valeurs et explique pourquoi la boucle finit.",
              "hint": "Les valeurs affichées sont 2, 4, 6 ; la mise à jour atteint 8 et le test devient faux. Aucun compte à rebours nécessaire."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Expliquer le test préalable et répété, y compris zéro passage.",
        "Construire une répétition textuelle avec saisie actualisée et arrêt vérifié.",
        "Modifier une borne numérique et tester départ inférieur, égal et supérieur.",
        "Expliquer le rôle de la mise à jour et distinguer attente de input et répétition sans fin."
      ],
      "consolidation": [
        {
          "moduleId": "python-while",
          "blockId": "guide",
          "label": "Revoir test, nouvelle saisie et arrêt"
        },
        {
          "moduleId": "python-saisie",
          "blockId": "guide",
          "label": "Revoir la réponse dans la console"
        },
        {
          "moduleId": "python-conditions",
          "blockId": "guide",
          "label": "Revoir comparaison et bloc"
        },
        {
          "moduleId": "python-for",
          "blockId": "guide",
          "label": "Revoir une répétition connue"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "python-while",
          "blockId": "bonus",
          "label": "Changer le départ et la progression"
        }
      ],
      "nextSteps": [
        {
          "moduleId": "python-compteurs",
          "label": "Compter et calculer un score",
          "prerequisiteSkills": [
            {
              "skillId": "python.variables",
              "expectation": "Lire l’ancienne valeur et réaffecter le résultat d’une addition ; sinon reprendre le modèle numérique."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire expliquer l’arrêt par actualisation, pas par mémorisation d’un modèle.",
        "entryDiagnosis": [
          "Faire prévoir une comparaison textuelle et montrer où répondre.",
          "Faire lire une boucle for et prévoir une addition de 1 avant le modèle numérique."
        ],
        "preparation": [
          "Préparer encore.py, while_tours.py, repetition_personnelle.py et borne_personnelle.py.",
          "Repérer l’arrêt dans Thonny. Aucune boucle intentionnellement infinie à lancer."
        ],
        "why": "Le nombre de tours peut dépendre de réponses inconnues avant le lancement.",
        "discoverySpeech": [
          "« Que se passe-t-il si le premier test est faux ? »",
          "« Quelle ligne permet au prochain test de changer ? »",
          "« Une attente de réponse est-elle une panne ? »"
        ],
        "example": {
          "target": {
            "moduleId": "python-while",
            "blockId": "exemple"
          },
          "comments": [
            "La première question précède while.",
            "Une question dans le bloc actualise la réponse.",
            "Toute réponse autre que oui termine ; pas de normalisation ni de saisie protégée."
          ]
        },
        "questions": [
          {
            "question": "Pourquoi faut-il une réponse avant while ?",
            "answer": "La comparaison doit utiliser une variable déjà définie."
          },
          {
            "question": "Pourquoi redemander dans le bloc ?",
            "answer": "Pour actualiser la réponse ; sans cela, un premier oui resterait vrai."
          },
          {
            "question": "Avec tour = 4 et tour < 4, combien de passages ?",
            "answer": "Zéro : la condition est fausse avant le premier passage."
          },
          {
            "question": "Pourquoi tour = tour + 1 fait-il évoluer la valeur ?",
            "answer": "La droite utilise l’ancienne valeur, puis l’affectation conserve le résultat augmenté."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "python-while",
          "blockId": "guide"
        },
        "independentActivity": {
          "moduleId": "python-while",
          "blockId": "autonomie"
        },
        "differentiation": [
          "Suivre zéro puis un passage avant plusieurs.",
          "Aider à la frappe sans choisir le test ni l’emplacement de la nouvelle saisie.",
          "Ne pas imposer le bonus ; faire modifier la borne du transfert numérique."
        ],
        "commonErrors": [
          {
            "symptom": "Le programme attend ou répète sans fin.",
            "helps": [
              "Demander ce qui est attendu : réponse ou nouveau tour.",
              "Si la répétition ne finit pas, interrompre avant de modifier.",
              "Repérer la première valeur, le test et la nouvelle saisie ou addition dans le bloc.",
              "Corriger l’actualisation puis tester une sortie immédiate et plusieurs passages."
            ]
          },
          {
            "symptom": "La variante numérique a un tour de trop.",
            "helps": [
              "Faire annoncer les valeurs attendues.",
              "Repérer la comparaison et l’ordre affichage/mise à jour.",
              "Suivre la dernière valeur affichée puis celle qui rend le test faux.",
              "Changer une borne et retester départ inférieur, égal et supérieur."
            ]
          }
        ],
        "notes": "Ne pas faire exécuter un modèle sans mise à jour. Évaluer prédiction et modification autonome, pas les seules cases.",
        "quickConductor": [
          "Repérer interruption et console.",
          "Prédire les séquences textuelles.",
          "Comparer if et while.",
          "Lire puis modifier une boucle numérique.",
          "Construire la continuation personnelle et vérifier ses deux questions."
        ],
        "references": [
          {
            "title": "Python - while",
            "url": "https://docs.python.org/fr/3/reference/compound_stmts.html#the-while-statement"
          }
        ]
      }
    },
    "python-compteurs": {
      "domainId": "python",
      "title": "Compter et calculer un score",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Initialiser et actualiser un compteur ou un score au bon endroit.",
      "prerequisitesInContent": true,
      "tool": {
        "label": "Site officiel de Thonny",
        "url": "https://thonny.org/"
      },
      "skillIds": [
        "python.accumulation"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "python.workspace",
          "expectation": "Créer, conserver et relancer un fichier."
        },
        {
          "skillId": "python.output",
          "expectation": "Afficher et prévoir l’ordre des résultats."
        },
        {
          "skillId": "python.variables",
          "expectation": "Définir et réutiliser une valeur."
        },
        {
          "skillId": "python.numbers",
          "expectation": "Additionner des valeurs numériques ; sinon reprendre Nombres et calculs."
        },
        {
          "skillId": "python.input",
          "expectation": "Conserver une réponse textuelle."
        },
        {
          "skillId": "python.conditions",
          "expectation": "Comparer une réponse et indenter une branche."
        },
        {
          "skillId": "python.for",
          "expectation": "Construire une répétition à nombre connu."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "preparer",
          "title": "Avant de commencer",
          "text": "Il faut savoir additionner, utiliser for/range et comparer une réponse textuelle. Prédis points = 2 puis points = points + 3 : on obtient 5. Sinon, reprends l’addition. Enregistre tes essais et crée total.py. while et la conversion ne sont pas nécessaires au socle de ce module.",
          "moduleLink": {
            "moduleId": "python-calculs",
            "text": "Revoir nombre et addition"
          }
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "1 - Garder le total entre les tours",
          "paragraphs": [
            "score = 0 initialise la valeur avant la boucle, une seule fois. À chaque passage, score = score + 2 lit l’ancienne valeur, ajoute 2 et conserve le nouveau résultat.",
            "Les valeurs après les passages sont 2, 4, 6, 8. Prédis le bilan. Le print après la boucle affiche le résultat final une seule fois.",
            "Pour observer les valeurs, ajoute provisoirement print(score) après la mise à jour dans le bloc ; teste puis retire cet affichage. score = 2 remplacerait toujours la valeur par 2, sans accumuler."
          ],
          "code": "score = 0\nfor tour in range(4):\n    score = score + 2\nprint(\"Score :\", score)"
        },
        {
          "type": "lesson",
          "id": "compteur",
          "title": "2 - Compter des événements",
          "paragraphs": [
            "Enregistre total.py puis crée compteur.py. Ici, une augmentation de 1 compte les passages. Dans le modèle précédent, une augmentation de 2 additionnait les gains.",
            "Compteur et score sont ici deux usages de variables numériques, pas deux types différents de Python. L’initialisation reste avant la boucle ; le bilan vient après."
          ],
          "code": "passages = 0\nfor tour in range(3):\n    passages = passages + 1\nprint(\"Passages :\", passages)"
        },
        {
          "type": "lesson",
          "id": "branche",
          "title": "3 - Une décision dans chaque tour",
          "paragraphs": [
            "Enregistre compteur.py puis crée decisions.py. Un if peut se trouver dans un for : à chaque tour, la question est posée puis sa réponse est comparée.",
            "Les instructions du tour ont quatre espaces. L’instruction de la branche en a huit : elle appartient au if, lui-même dans le for. Fin n’a pas d’espace au début et vient après tous les tours. Ce n’est pas une boucle à l’intérieur d’une boucle.",
            "Teste oui, non, oui. On lit deux Trouvé puis une seule Fin ; un tour sans oui a bien lieu mais ne produit pas Trouvé. La comparaison textuelle reste exacte."
          ],
          "code": "for tour in range(3):\n    reponse = input(\"Objet trouvé ? oui pour confirmer : \")\n    if reponse == \"oui\":\n        print(\"Trouvé\")\nprint(\"Fin\")"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé - réussites puis score",
          "items": [
            {
              "id": "total-valeurs",
              "text": "Dans total.py, prédis puis teste le total après quatre gains de 2. Remplace provisoirement score = score + 2 par score = 2, compare les résultats puis restaure l’accumulation.",
              "hint": "Le total devient 8 avec l’accumulation, mais reste 2 avec l’affectation constante."
            },
            {
              "id": "compter-reussites",
              "text": "Enregistre decisions.py puis crée collecte.py avec Enregistrer sous. Ajoute une variable reussites initialisée à 0 avant for. Augmente-la de 1 seulement pour oui, puis affiche son bilan après les trois tours.",
              "hint": "Place la mise à jour dans la branche à huit espaces. L’initialisation et le bilan ne sont pas dans le bloc."
            },
            {
              "id": "tester-reussites",
              "text": "Prédis puis teste non, non, non ; oui, oui, oui ; oui, non, oui. Explique pourquoi les trois tours ne donnent pas forcément trois réussites.",
              "hint": "Les nombres de réussites sont 0, 3, 2. La comparaison décide si le compteur augmente."
            },
            {
              "id": "ajouter-score",
              "text": "Enregistre collecte.py puis crée collecte_score.py avec Enregistrer sous. Garde le compteur de réussites et ajoute un score initialisé à 0, augmenté de 2 seulement lors d’une réussite. Reteste la séquence mixte.",
              "hint": "Deux variables suffisent : réussites et score. Pour oui, non, oui, attends 2 réussites et 4 points ; pas besoin d’un compteur de tous les tours."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "À toi - ton score",
          "intro": "Enregistre collecte.py et collecte_score.py, puis crée mon_score.py. Choisis tes messages et ton mot accepté ; essaie sans recopier la solution complète.",
          "items": [
            {
              "id": "score-personnel",
              "text": "Prévois quatre tours avec une question personnelle annonçant un mot accepté. Compte les réponses qui correspondent et donne 3 points à chacune ; tout autre texte rapporte zéro. Affiche réussites et score après la boucle.",
              "hint": "Initialise les deux valeurs avant for ; actualise-les dans la branche concernée. input donne du texte : aucune conversion nécessaire."
            },
            {
              "id": "tests-score",
              "text": "Prédis puis teste quatre refus, quatre accords et deux accords/deux refus. Note réussites et score attendus, puis explique les valeurs obtenues.",
              "hint": "Les couples attendus sont 0 et 0, 4 et 12, 2 et 6. Ne compte pas seulement la dernière réponse."
            },
            {
              "id": "modifier-gain",
              "text": "Enregistre, passe le gain de 3 à 2 et choisis un nouveau test mixte. Prédis les deux bilans. Explique pourquoi l’initialisation n’est pas répétée à chaque tour.",
              "hint": "Changer le gain modifie le score, pas le nombre de réussites. Réinitialiser dans la boucle ferait perdre le total précédent."
            },
            {
              "id": "retrouver-score",
              "text": "Enregistre, ferme puis rouvre mon_score.py. Relance dans un état propre et explique les lignes à zéro, quatre et huit espaces.",
              "hint": "Le fichier doit définir lui-même ses variables. Arrêter / redémarrer avant la relance permet de vérifier qu’un ancien essai ne cachait pas un oubli."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus - un score avec continuation",
          "items": [
            {
              "id": "score-while",
              "text": "Dans score_while.py, réutilise la continuation textuelle du module Répéter tant que. Compte les tours acceptés et ajoute 2 points par accord. Prédis puis teste un arrêt immédiat et deux accords suivis d’un arrêt.",
              "hint": "Reprends python-while si nécessaire. Initialise les valeurs avant la boucle, actualise-les dans le bloc et redemande la réponse. Attends 0 tour/0 point puis 2 tours/4 points."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Expliquer l’ancienne valeur à droite de = et le résultat conservé.",
        "Initialiser avant la boucle, actualiser dans la branche concernée et afficher après.",
        "Distinguer passages, réussites et score sur une séquence mixte.",
        "Créer un score personnel, modifier le gain et retester dans un fichier autonome."
      ],
      "consolidation": [
        {
          "moduleId": "python-compteurs",
          "blockId": "guide",
          "label": "Revoir accumulation et réussites"
        },
        {
          "moduleId": "python-calculs",
          "blockId": "operations",
          "label": "Revoir addition et variable numérique"
        },
        {
          "moduleId": "python-for",
          "blockId": "guide",
          "label": "Revoir les tours"
        },
        {
          "moduleId": "python-conditions",
          "blockId": "guide",
          "label": "Revoir une branche"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "python-compteurs",
          "blockId": "bonus",
          "label": "Compter avec une continuation",
          "prerequisiteSkills": [
            {
              "skillId": "python.while",
              "expectation": "Actualiser une réponse et vérifier l’arrêt ; sinon reprendre Répéter tant que."
            }
          ]
        }
      ],
      "nextSteps": [{ "moduleId": "python-hasard", "label": "Tirer un nombre au hasard", "prerequisiteSkills": [{ "skillId": "python.variables", "expectation": "Conserver une valeur et expliquer ses usages ; sinon reprendre les variables." }] }],
      "teacherGuide": {
        "objective": "Enseigner l’accumulation et l’emplacement des mises à jour avec deux valeurs finales seulement.",
        "entryDiagnosis": [
          "Faire prévoir 2 puis une addition de 3 réaffectée au même nom.",
          "Faire montrer un bloc for et une comparaison textuelle ; while n’est pas un prérequis du socle."
        ],
        "preparation": [
          "Créer total.py, compteur.py, decisions.py puis collecte.py et collecte_score.py ; mon_score.py est personnel.",
          "Commencer par un seul compteur de réussites ; ajouter ensuite le score. Pas de conversion, hasard ou liste."
        ],
        "why": "Une valeur conservée entre les tours permet un bilan de plusieurs événements.",
        "discoverySpeech": [
          "« Quelle valeur reste après chaque passage ? »",
          "« Ce tour a-t-il eu lieu sans réussite ? »",
          "« Où faut-il ajouter les points et où lire le bilan ? »"
        ],
        "example": {
          "target": {
            "moduleId": "python-compteurs",
            "blockId": "exemple"
          },
          "comments": [
            "La valeur est initialisée une fois.",
            "Suivre 2, 4, 6, 8 puis comparer avec une affectation constante.",
            "Enseigner les deux niveaux d’indentation dans decisions.py avant collecte.py."
          ]
        },
        "questions": [
          {
            "question": "Pourquoi ne pas mettre score = 0 dans la boucle ?",
            "answer": "Chaque tour effacerait le score des tours précédents."
          },
          {
            "question": "Pourquoi un refus ne rapporte-t-il pas de point ?",
            "answer": "La mise à jour appartient à la branche réservée au mot accepté."
          },
          {
            "question": "Après deux réussites à 3 points, que valent le compteur et le score ?",
            "answer": "On conserve 2 réussites et un total de 6 points : deux usages numériques distincts."
          },
          {
            "question": "Pourquoi changer le gain ne change-t-il pas les réussites ?",
            "answer": "Le compteur augmente de 1 par accord ; seul le score utilise le gain."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "python-compteurs",
          "blockId": "guide"
        },
        "independentActivity": {
          "moduleId": "python-compteurs",
          "blockId": "autonomie"
        },
        "differentiation": [
          "Faire compter les réussites avant d’ajouter le score.",
          "Suivre oralement une réussite, un refus, une réussite.",
          "Réserver la variante while au bonus après diagnostic de son arrêt."
        ],
        "commonErrors": [
          {
            "symptom": "Le total ne conserve que le dernier tour.",
            "helps": [
              "Faire annoncer le bilan attendu sur une séquence mixte.",
              "Repérer l’initialisation et les affectations dans le bloc.",
              "Comparer réinitialisation, affectation constante et ancienne valeur plus gain.",
              "Déplacer l’initialisation ou corriger l’accumulation puis retester plusieurs séquences."
            ]
          },
          {
            "symptom": "Un refus rapporte des points ou le bilan se répète.",
            "helps": [
              "Comparer le test réel au mot annoncé.",
              "Repérer les niveaux zéro, quatre et huit espaces.",
              "Vérifier que les mises à jour sont dans if et le bilan hors de for.",
              "Corriger un alignement puis tester tous les refus, tous les accords et une séquence mixte."
            ]
          }
        ],
        "notes": "Ne pas déduire l’acquisition de while ou de conversion de ce score textuel. Distinguer aides, explication et transfert ; aucun statut automatique.",
        "quickConductor": [
          "Diagnostiquer addition et bloc.",
          "Lire l’accumulation et le compteur.",
          "Enseigner if dans for.",
          "Compter les réussites puis ajouter le score.",
          "Construire, tester et modifier le score personnel."
        ],
        "references": [
          {
            "title": "Python - affectation",
            "url": "https://docs.python.org/fr/3/reference/simple_stmts.html#assignment-statements"
          },
          {
            "title": "Python - contrôle de flux",
            "url": "https://docs.python.org/fr/3/tutorial/controlflow.html"
          }
        ]
      }
    },
    "python-listes": {
      "domainId": "python", "title": "Regrouper des valeurs dans une liste", "type": "lesson", "theme": "fondations",
      "objective": "Conserver plusieurs valeurs, consulter une position, parcourir et compléter une liste.",
      "prerequisitesInContent": true,
      "tool": { "label": "Site officiel de Thonny", "url": "https://thonny.org/" },
      "skillIds": ["python.lists"],
      "prerequisiteSkills": [
        { "skillId": "python.workspace", "expectation": "Créer, enregistrer et relancer un fichier." },
        { "skillId": "python.output", "expectation": "Afficher et lire une valeur." },
        { "skillId": "python.variables", "expectation": "Conserver une valeur dans une variable." },
        { "skillId": "python.for", "expectation": "Suivre les passages et le bloc d'un for." }
      ],
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Il faut savoir afficher une variable et suivre un for. Crée inventaire.py et fais-le évoluer pendant les étapes ; enregistre avant chaque copie. Ni hasard ni while n'est nécessaire ici. Le bonus seul utilise input.", "moduleLink": { "moduleId": "python-for", "text": "Revoir les répétitions" } },
        { "type": "lesson", "id": "exemple", "title": "1 - Plusieurs valeurs, une liste", "paragraphs": [
          "Les crochets entourent la liste ; les virgules séparent ses éléments. Ici, chaque élément est du texte entre guillemets. La variable objets conserve cette liste ordonnée. Deux éléments peuvent avoir la même valeur.",
          "print(objets) affiche la liste complète, avec ses crochets et guillemets. objets[0] consulte un seul élément : l'indice 0 désigne la première position. Son affichage donne carte, sans les crochets de la liste."
        ], "code": "objets = [\"carte\", \"corde\", \"lampe\"]\nprint(objets)\nprint(objets[0])" },
        { "type": "lesson", "id": "indices", "title": "2 - Position et nombre d'éléments", "paragraphs": [
          "Dans inventaire.py, ajoute print(objets[1]) puis print(objets[2]). Prévois corde puis lampe. Pour trois éléments, les indices sont 0, 1 et 2 : on commence à zéro.",
          "Ajoute print(len(objets)). len donne le nombre d'éléments : 3, pas le dernier indice. Les parenthèses appellent len sur la liste ; les crochets consultent une position. Un indice 3 n'existe pas dans cette liste."
        ] },
        { "type": "lesson", "id": "parcours", "title": "3 - Parcourir les valeurs", "paragraphs": [
          "Enregistre inventaire.py puis crée parcours_liste.py. for peut parcourir directement une liste : objet reçoit successivement carte, corde et lampe, pas les indices 0, 1 et 2. Le nom de cette variable est libre ; il est ici distinct de objets.",
          "Le print indenté s'exécute pour chaque élément. Fin, sans indentation, s'affiche une fois après la boucle. Prévois l'ordre avant de lancer."
        ], "code": "objets = [\"carte\", \"corde\", \"lampe\"]\nfor objet in objets:\n    print(\"Objet :\", objet)\nprint(\"Fin\")" },
        { "type": "lesson", "id": "ajout", "title": "4 - Ajouter à la fin", "paragraphs": [
          "Continue dans parcours_liste.py. Après Fin, ajoute les lignes ci-dessous, puis un second parcours. objets.append(\"boussole\") ajoute une valeur à la fin de la liste existante. Le point appelle une méthode de cette liste ; les parenthèses contiennent la valeur à ajouter.",
          "Prévois quatre éléments, dans l'ordre carte, corde, lampe, boussole. L'appel append occupe sa propre ligne : n'écris ni objets = objets.append(...) ni print(objets.append(...)). C'est la liste modifiée que tu affiches ensuite. Chaque relance recrée la liste initiale avant cet ajout."
        ], "code": "objets.append(\"boussole\")\nprint(objets)\nprint(len(objets))" },
        { "type": "tasks", "id": "guide", "title": "Vérifier tes essais", "items": [
          { "id": "positions-liste", "text": "Dans inventaire.py, montre la liste complète, ses trois positions et sa longueur. Explique pourquoi 3 est la longueur mais pas un indice utilisable ici.", "hint": "Trois positions : 0, 1 et 2. len compte les éléments, il ne donne pas la dernière position." },
          { "id": "parcours-ajout", "text": "Dans parcours_liste.py, compare les deux parcours autour de l'ajout. Repère le moment où la liste change et explique la valeur reçue par objet à chaque passage.", "hint": "Le premier parcours a trois passages ; le second en a quatre. append est entre eux et ajoute à la fin." },
          { "id": "vide-liste", "text": "Enregistre puis crée collection_vide.py avec Enregistrer sous. Garde seulement une liste objets = [], son affichage, len et un for suivi de Fin ; retire les consultations d'indice et l'ajout. Prévois puis vérifie le résultat.", "hint": "[] contient zéro élément : len vaut 0, for ne fait aucun passage, mais Fin s'affiche. Aucun élément à l'indice 0." },
          { "id": "diagnostic-indice", "text": "Dans diagnostic_indice.py, définis trois éléments puis affiche objets[3]. Lis l'erreur, choisis une position existante et reteste. Garde les autres fichiers.", "hint": "IndexError signale ici une position inexistante. Corrige l'indice en 0, 1 ou 2 ; il ne s'agit pas d'un nom de variable inconnu." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "À toi - ta collection", "intro": "Crée ma_collection.py avec tes propres valeurs et messages. Fais évoluer ce fichier ; essaie avant les indices et conserve les exemples.", "items": [
          { "id": "collection-personnelle", "text": "Choisis trois éléments textuels. Affiche leur nombre, puis chaque élément avec un for. Consulte aussi le premier et le troisième. Prévois longueur, positions et ordre avant d'exécuter.", "hint": "Une liste entre crochets, len pour le nombre, indices 0 et 2 pour ces positions ; for reçoit directement les valeurs." },
          { "id": "collection-complete", "text": "Ajoute un quatrième élément avec append après le premier parcours, puis affiche le nouveau nombre et refais le parcours. Explique ce qui change, sans réécrire la liste de départ.", "hint": "Place l'ajout avant le second bilan, hors du premier for. La nouvelle valeur arrive à la fin." },
          { "id": "collection-modifiee", "text": "Enregistre puis crée ma_collection_modifiee.py avec Enregistrer sous. Change une valeur dans la définition initiale. Prévois et vérifie son effet sur les positions, le nombre et les deux parcours. Explique aussi pourquoi collection_vide.py fait zéro passage.", "hint": "Remplacer une valeur ne change pas le nombre d'éléments. Garde la première version pour comparer ; une liste vide ne fournit aucune valeur à for." }
        ] },
        { "type": "tasks", "id": "bonus", "title": "Bonus - compléter par une réponse", "items": [
          { "id": "collection-reponse", "text": "Dans collection_saisie.py, demande un élément avec input, ajoute la réponse à une liste fixe et affiche le bilan. Relance avec une autre réponse : retrouve-t-on la précédente ?", "hint": "Conserve la réponse dans une variable, puis appelle append avec cette variable. Chaque lancement recrée la liste fixe ; ce programme ne sauvegarde pas de données sur disque." }
        ] }
      ],
      "masteryCriteria": ["Créer une liste personnelle et distinguer élément, liste complète et longueur.", "Expliquer l'indice zéro, consulter une position existante et reconnaître un IndexError.", "Parcourir les valeurs dans l'ordre et expliquer zéro passage pour une liste vide.", "Ajouter à la fin avec append, prédire le nouveau bilan et tester une modification personnelle."],
      "consolidation": [
        { "moduleId": "python-listes", "blockId": "guide", "label": "Revoir positions, parcours et ajout" },
        { "moduleId": "python-variables", "blockId": "guide", "label": "Revoir les variables" },
        { "moduleId": "python-for", "blockId": "guide", "label": "Revoir le bloc répété" },
        { "moduleId": "python-erreurs", "blockId": "guide", "label": "Revoir la lecture d'une erreur" }
      ],
      "bonusActivities": [{ "moduleId": "python-listes", "blockId": "bonus", "label": "Ajouter une réponse", "prerequisiteSkills": [{ "skillId": "python.input", "expectation": "Conserver la réponse d'input ; sinon reprendre Poser une question." }] }],
      "nextSteps": [{ "moduleId": "python-texte", "label": "Explorer et préparer du texte", "prerequisiteSkills": [{ "skillId": "python.lists", "expectation": "Distinguer longueur, position et parcours ; sinon reprendre les essais de liste." }] }],
      "teacherGuide": {
        "objective": "Passer d'une valeur à une collection ordonnée sans confondre position, longueur et valeur parcourue.",
        "entryDiagnosis": ["Faire afficher une variable et suivre un for existant.", "Ne pas exiger que le nombre mystère ou ses bonus soient terminés."],
        "preparation": ["Faire évoluer inventaire.py puis parcours_liste.py ; vérifier les essais dans ces fichiers sans les recopier.", "Réserver les copies aux cas vide, au diagnostic et au transfert personnel. Le bonus seul utilise input."],
        "why": "Une liste rassemble plusieurs valeurs qu'un programme peut consulter et parcourir.",
        "discoverySpeech": ["« Qu'affiche la liste entière ? Et une seule position ? »", "« Pourquoi la première position porte-t-elle zéro ? »", "« for reçoit-il une position ou une valeur ? »"],
        "example": { "target": { "moduleId": "python-listes", "blockId": "exemple" }, "comments": ["Expliquer crochets de définition et de consultation avant la pratique.", "Le texte seul n'a pas les crochets de la représentation de liste.", "Montrer longueur et positions avec trois éléments, sans range(len)."] },
        "questions": [
          { "question": "Quels indices existent pour trois éléments ?", "answer": "0, 1 et 2 ; len vaut 3, ce n'est pas un indice disponible." },
          { "question": "Que reçoit objet dans for objet in objets ?", "answer": "Chaque valeur de la liste, successivement et dans l'ordre." },
          { "question": "Que fait for sur [] ?", "answer": "Zéro passage ; le code après le bloc s'exécute quand même." },
          { "question": "Faut-il affecter le résultat d'append à objets ?", "answer": "Non : append modifie la liste existante ; appeler la méthode seule puis afficher la liste." }
        ],
        "accompaniedActivity": { "moduleId": "python-listes", "blockId": "guide" }, "independentActivity": { "moduleId": "python-listes", "blockId": "autonomie" },
        "differentiation": ["Séparer liste complète, position et longueur si nécessaire.", "Reprendre le parcours avant l'ajout ; ne pas imposer plusieurs nouveautés dans le même essai.", "Réserver input au bonus et distinguer aide clavier et compréhension."],
        "commonErrors": [
          { "symptom": "IndexError ou confusion entre indice et longueur.", "helps": ["Lire la dernière ligne de l'erreur.", "Compter les éléments de la liste active.", "Écrire leurs positions à partir de zéro.", "Choisir une position existante puis retester ; ne pas consulter une liste vide."] },
          { "symptom": "La liste disparaît après append ou l'ajout se répète dans for.", "helps": ["Repérer la ligne qui change la liste.", "Vérifier l'indentation et le nombre d'appels.", "Chercher une affectation objets = objets.append(...).", "Appeler append seul une fois hors du parcours, puis afficher objets et len(objets)."] }
        ],
        "notes": "Pas de gestion d'exception, alias, copie de liste ou compréhension. Enregistrer sous copie le fichier, pas une liste à l'exécution. Validation manuelle sur explication et transfert.",
        "quickConductor": ["Diagnostiquer variables et for.", "Observer liste et positions.", "Distinguer len et indice.", "Parcourir puis ajouter.", "Vérifier vide et diagnostic.", "Créer et modifier une collection personnelle."],
        "references": [{ "title": "Python - listes", "url": "https://docs.python.org/fr/3/tutorial/datastructures.html#more-on-lists" }]
      }
    },
    "python-texte": {
      "domainId": "python", "title": "Explorer et préparer du texte", "type": "lesson", "theme": "fondations",
      "objective": "Observer les caractères et préparer une réponse selon une règle explicite.",
      "prerequisitesInContent": true, "tool": { "label": "Site officiel de Thonny", "url": "https://thonny.org/" },
      "skillIds": ["python.text"],
      "prerequisiteSkills": [
        { "skillId": "python.workspace", "expectation": "Conserver et relancer les fichiers." },
        { "skillId": "python.output", "expectation": "Lire les affichages." },
        { "skillId": "python.variables", "expectation": "Conserver des valeurs textuelles." },
        { "skillId": "python.input", "expectation": "Poser une question et garder sa réponse." },
        { "skillId": "python.conditions", "expectation": "Construire deux issues avec if/else." },
        { "skillId": "python.for", "expectation": "Suivre un parcours et son indentation." },
        { "skillId": "python.lists", "expectation": "Distinguer longueur, indice zéro et valeurs parcourues." }
      ],
      "blocks": [
        { "type": "callout", "id": "preparer", "title": "Avant de commencer", "text": "Il faut savoir conserver une réponse et construire un if/else. Reprends longueur, indices et for si nécessaire. Crée texte.py ; fais évoluer tes fichiers pendant chaque activité et conserve les variantes importantes. Ni conversion numérique, hasard ni while n'est requis.", "moduleLink": { "moduleId": "python-listes", "text": "Revoir positions et parcours" } },
        { "type": "lesson", "id": "exemple", "title": "1 - Un texte, des caractères", "paragraphs": [
          "Une chaîne de caractères est du texte ordonné. len compte ici les caractères, pas les mots. for parcourt successivement chaque caractère : prévois 4, puis C, o, d et e.",
          "Dans texte.py, ajoute ensuite un espace dans le texte et prévois la nouvelle longueur. L'espace compte aussi et apparaît comme une ligne vide au cours du parcours. Ces essais simples ne décrivent pas toutes les écritures complexes ou les emojis."
        ], "code": "mot = \"Code\"\nprint(len(mot))\nfor caractere in mot:\n    print(caractere)" },
        { "type": "lesson", "id": "indices", "title": "2 - Lire une position", "paragraphs": [
          "Dans texte.py, rétablis mot = \"Code\" puis ajoute print(mot[0]) et print(mot[3]). Prévois C et e : l'indice commence à zéro comme pour les listes. Une position inexistante produit IndexError.",
          "Enregistre puis crée texte_vide.py avec Enregistrer sous. Garde mot = \"\", len et for seulement : longueur 0 et aucun passage. Retire les consultations d'indice. Ne consulte pas le premier caractère d'une réponse qui peut être vide.",
          "Un texte n'est pas une liste que l'on modifie par position : mot[0] = \"c\" n'est pas une modification possible. Pour transformer le texte, on va produire un nouveau résultat."
        ] },
        { "type": "lesson", "id": "transformation", "title": "3 - Conserver le texte transformé", "paragraphs": [
          "Crée transformation_texte.py. reponse.strip() retire les espaces aux bords dans cet exemple ; sans_bords.lower() met les lettres en minuscules. Le point appelle une méthode du texte, les parenthèses l'exécutent. Chaque résultat est conservé dans une variable.",
          "L'original reste inchangé, contrairement à append qui modifie une liste. Ajoute ensuite reponse.lower() sur une ligne seule, puis affiche reponse : sans conserver le résultat, sa valeur ne change pas. Prédis puis vérifie.",
          "strip ne retire pas les espaces au milieu ; lower ne corrige ni les fautes ni les accents. Les deux opérations sont séparées pour suivre chaque résultat."
        ], "code": "reponse = \"  TOUR  \"\nsans_bords = reponse.strip()\nnormalisee = sans_bords.lower()\nprint(\"Original :\", reponse)\nprint(\"Préparé :\", normalisee)" },
        { "type": "lesson", "id": "comparaison", "title": "4 - Choisir une règle de réponse", "paragraphs": [
          "Enregistre transformation_texte.py puis crée comparaison_texte.py. Le modèle accepte tour, même avec des majuscules ou des espaces aux bords. Il ne tolère pas une faute ou un espace au milieu. == compare ici le texte préparé au mot accepté.",
          "Prévois les deux issues, puis teste tour et lune. Une réponse vide ou composée d'espaces peut être comparée sans erreur : on ne consulte aucun indice. Le message Refusé indique simplement que la réponse ne correspond pas à la règle."
        ], "code": "reponse = input(\"Écris tour : \")\nsans_bords = reponse.strip()\nnormalisee = sans_bords.lower()\nif normalisee == \"tour\":\n    print(\"Accepté\")\nelse:\n    print(\"Refusé\")" },
        { "type": "tasks", "id": "guide", "title": "Vérifier les transformations", "items": [
          { "id": "caracteres-texte", "text": "Dans texte.py, explique longueur, positions et parcours. Compare avec texte_vide.py : pourquoi aucun indice n'y est-il consulté ?", "hint": "Un texte vide a zéro caractère ; aucun indice n'existe. Le code après for reste exécuté." },
          { "id": "original-resultat", "text": "Dans transformation_texte.py, montre les valeurs de reponse, sans_bords et normalisee. Explique l'effet de l'appel lower dont tu n'as pas conservé le résultat.", "hint": "Les résultats sont de nouveaux textes. reponse garde les majuscules et espaces d'origine." },
          { "id": "regle-tests", "text": "Dans comparaison_texte.py, prévois puis teste tour, Tour, tour entouré d'espaces, TO UR, lune, une réponse vide et une réponse composée d'espaces. Explique chaque issue.", "hint": "Les trois premiers correspondent. Les autres non : ni correction des espaces internes, ni faute corrigée. Vide et espaces donnent un texte préparé vide, sans IndexError." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "À toi - ton mot accepté", "intro": "Crée mon_mot.py avec ton propre mot et tes messages. Choisis un mot simple en minuscules, sans accent ni espace ; essaie avant de consulter les indices.", "items": [
          { "id": "mot-personnel", "text": "Annonce ta règle : majuscules et espaces aux bords tolérés. Pose la question, garde la réponse originale, prépare-la en deux étapes et affiche un message personnel pour chaque issue.", "hint": "input conserve le texte d'origine ; strip puis lower produisent les résultats. Compare le texte préparé au mot choisi avec if/else." },
          { "id": "mot-tests", "text": "Choisis des tests avec majuscules, espaces aux bords, un mot différent et une réponse vide. Prévois chaque issue puis exécute. Explique les limites de ta règle et montre que l'original reste disponible.", "hint": "Les deux transformations ne retirent pas les espaces internes et ne corrigent pas une faute. N'utilise pas d'indice sur la réponse." },
          { "id": "mot-modifie", "text": "Enregistre puis crée mon_mot_modifie.py avec Enregistrer sous. Change le mot accepté dans la question et la comparaison. Teste le nouveau et l'ancien mot : explique ce qui a changé.", "hint": "La question annonce la règle mais seule la comparaison décide. Conserve mon_mot.py pour retrouver le premier essai." }
        ] },
        { "type": "tasks", "id": "transfert", "title": "Changer la règle sans tout refaire", "items": [
          { "id": "mot-casse", "text": "Enregistre mon_mot.py puis crée mon_mot_casse.py avec Enregistrer sous. Remplace normalisee = sans_bords.lower() par normalisee = sans_bords ; garde strip. Actualise la question pour annoncer que les majuscules comptent. Prévois puis teste une majuscule et un espace au bord.", "hint": "La variable comparée reste définie, mais n'est plus mise en minuscules. Une majuscule est refusée si le mot accepté est en minuscules ; les espaces aux bords restent tolérés. Ce n'est donc pas une comparaison entièrement exacte." }
        ] },
        { "type": "lesson", "id": "remplacement", "title": "Bonus - remplacer une partie du texte", "paragraphs": [
          "Dans remplacement_texte.py, replace cherche le premier texte donné et remplace ses occurrences par le second. Conserve le résultat ; l'original reste intact. Prévois puis vérifie les deux affichages, puis change les textes du remplacement. Ce bonus n'est pas requis pour continuer."
        ], "code": "message = \"Bonjour, voyageur !\"\nnouveau = message.replace(\"voyageur\", \"pilote\")\nprint(message)\nprint(nouveau)" }
      ],
      "masteryCriteria": ["Distinguer longueur, caractères et indices sur un texte simple, y compris un texte vide.", "Conserver le résultat d'une transformation et expliquer pourquoi l'original reste inchangé.", "Créer une comparaison personnelle avec tests de casse, bords, autre mot et vide.", "Expliquer les limites de strip/lower sans prétendre corriger les fautes ou accents.", "Modifier la règle dans une copie et vérifier l'effet précis sur casse et espaces aux bords."],
      "consolidation": [
        { "moduleId": "python-texte", "blockId": "guide", "label": "Revoir original, résultat et tests" },
        { "moduleId": "python-listes", "blockId": "guide", "label": "Revoir longueur et positions" },
        { "moduleId": "python-saisie", "blockId": "guide", "label": "Revoir la réponse conservée" },
        { "moduleId": "python-conditions", "blockId": "guide", "label": "Revoir les deux issues" }
      ],
      "bonusActivities": [{ "moduleId": "python-texte", "blockId": "remplacement", "label": "Remplacer une partie d'un message" }], "nextSteps": [],
      "teacherGuide": {
        "objective": "Observer une chaîne puis construire une règle de comparaison explicite, sans masquer les transformations.",
        "entryDiagnosis": ["Faire expliquer longueur et indice d'une liste.", "Reprendre une réponse conservée et une comparaison textuelle exacte ; ne pas présupposer la normalisation."],
        "preparation": ["Faire évoluer texte.py et transformation_texte.py ; les tâches guidées vérifient les essais existants.", "Conserver texte_vide.py et les copies personnelles ; aucune installation supplémentaire."],
        "why": "Un programme doit annoncer ce qu'il considère comme une réponse équivalente.",
        "discoverySpeech": ["« Combien de caractères, et non de mots ? »", "« Quelle variable garde l'original ? »", "« Quelles différences la règle accepte-t-elle ? »"],
        "example": { "target": { "moduleId": "python-texte", "blockId": "transformation" }, "comments": ["Expliquer les appels de méthode et conserver chaque résultat séparément.", "Comparer à append : ici le texte initial ne change pas.", "Ne pas enseigner d'emblée input(...).strip().lower()."] },
        "questions": [
          { "question": "Que donne len sur Code ?", "answer": "4 caractères, pas un nombre de mots ; un espace ajouterait un caractère dans ces exemples." },
          { "question": "reponse.lower() seul change-t-il reponse ?", "answer": "Non : il produit un résultat non conservé. La variable garde son texte initial." },
          { "question": "TO UR correspond-il à tour après strip/lower ?", "answer": "Non : l'espace intérieur reste présent." },
          { "question": "Que change normalisee = sans_bords dans la copie ?", "answer": "La casse n'est plus ignorée ; strip continue à retirer les espaces aux bords. La variable comparée reste définie." },
          { "question": "Pourquoi une réponse vide ne provoque-t-elle pas IndexError ici ?", "answer": "On la transforme et compare sans consulter de position." }
        ],
        "accompaniedActivity": { "moduleId": "python-texte", "blockId": "guide" }, "independentActivity": { "moduleId": "python-texte", "blockId": "autonomie" },
        "differentiation": ["Séparer observation des caractères et transformation de réponse.", "Commencer par le texte fixe, puis suivre les trois variables avant input.", "Le transfert de casse fait partie du socle ; replace reste facultatif."],
        "commonErrors": [
          { "symptom": "La comparaison utilise toujours les majuscules de l'original.", "helps": ["Montrer la variable réellement comparée.", "Afficher original et résultat préparé.", "Vérifier que les résultats de strip et lower sont affectés.", "Comparer normalisee au mot en minuscules, puis retester la casse et les bords séparément."] },
          { "symptom": "La copie sans lower produit NameError ou ignore encore la casse.", "helps": ["Lire l'erreur ou comparer la règle annoncée au code.", "Repérer la définition de normalisee.", "Remplacer la ligne au lieu de la supprimer : normalisee = sans_bords.", "Garder strip, actualiser la question et tester majuscule puis espaces au bord."] },
          { "symptom": "Une réponse vide provoque IndexError.", "helps": ["Repérer la ligne qui consulte un indice.", "Vérifier la longueur de la réponse.", "Distinguer comparaison de tout le texte et consultation d'un caractère.", "Retirer la consultation superflue du programme de comparaison, puis retester vide et espaces."] }
        ],
        "notes": "Exemples simples sans découpage en mots, slicing ni gestion d'exception. Les transformations n'effacent pas les accents. Pas de compétence automatique et pas de page de fonctions vide.",
        "quickConductor": ["Diagnostiquer indices et comparaison.", "Observer caractères et cas vide.", "Conserver les résultats de strip/lower.", "Tester les deux issues et leurs limites.", "Créer un mot personnel, modifier puis changer la règle de casse."],
        "references": [{ "title": "Python - chaînes de caractères", "url": "https://docs.python.org/fr/3/tutorial/introduction.html#text" }, { "title": "Python - méthodes des chaînes", "url": "https://docs.python.org/fr/3/library/stdtypes.html#string-methods" }]
      }
    },
    "python-hasard": {
      "domainId": "python",
      "title": "Tirer un nombre au hasard",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Importer random, conserver un tirage et expliquer ses valeurs possibles.",
      "prerequisitesInContent": true,
      "tool": {
        "label": "Site officiel de Thonny",
        "url": "https://thonny.org/"
      },
      "skillIds": [
        "python.random"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "python.workspace",
          "expectation": "Créer, conserver et relancer un fichier."
        },
        {
          "skillId": "python.output",
          "expectation": "Afficher et lire les résultats."
        },
        {
          "skillId": "python.variables",
          "expectation": "Conserver et réutiliser une valeur numérique."
        },
        {
          "skillId": "python.numbers",
          "expectation": "Lire une valeur entière."
        },
        {
          "skillId": "python.for",
          "expectation": "Prévoir les passages de for/range ; sinon reprendre les tours."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "preparer",
          "title": "Avant de commencer",
          "text": "Il faut savoir afficher une variable numérique et suivre un for. Enregistre tes essais et crée tirage.py. Ne nomme pas ton fichier random.py ni une variable random : ces noms peuvent masquer le module utilisé. random fait partie de Python ; aucun package à installer.",
          "moduleLink": {
            "moduleId": "python-for",
            "text": "Revoir les tours et leurs valeurs"
          }
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "1 - Importer et tirer",
          "paragraphs": [
            "import random rend accessible le module random de la bibliothèque standard. Dans random.randint, le point désigne une fonction de ce module ; les parenthèses appellent cette fonction. On utilise une fonction existante, sans apprendre encore à en définir une.",
            "random.randint(1, 6) fournit un entier de 1 à 6, bornes comprises. La variable nombre conserve le résultat de cet appel ; print l’affiche.",
            "Attention à la différence : range(1, 6) fournit les valeurs de 1 à 5, tandis que randint(1, 6) peut aussi donner 6. Avant le lancement, annonce les valeurs possibles, pas un résultat exact."
          ],
          "code": "import random\nnombre = random.randint(1, 6)\nprint(\"Nombre :\", nombre)"
        },
        {
          "type": "lesson",
          "id": "relance",
          "title": "2 - Nouveau tirage ne veut pas dire résultat différent",
          "paragraphs": [
            "Relance tirage.py plusieurs fois. Chaque exécution fait un nouvel appel, mais deux résultats consécutifs peuvent être identiques.",
            "Quelques essais ne garantissent pas de voir toutes les valeurs ou les deux bornes. Un résultat doit rester dans la plage annoncée ; ne corrige pas le code seulement parce qu’une valeur se répète."
          ]
        },
        {
          "type": "lesson",
          "id": "conserver",
          "title": "3 - Un tirage, plusieurs affichages",
          "paragraphs": [
            "Enregistre tirage.py puis crée valeur_conservee.py. Le tirage est avant for : il a lieu une fois, puis les trois passages utilisent la même valeur.",
            "Annonce ce qui est garanti avant d’exécuter : les trois affichages sont identiques dans cette exécution, même si tu ne connais pas leur valeur."
          ],
          "code": "import random\nnombre = random.randint(1, 6)\nfor tour in range(3):\n    print(nombre)"
        },
        {
          "type": "lesson",
          "id": "renouveler",
          "title": "4 - Un nouveau tirage à chaque tour",
          "paragraphs": [
            "Enregistre valeur_conservee.py puis crée nouveaux_tirages.py. Le tirage est maintenant dans le bloc : chaque passage appelle randint, puis affiche la valeur obtenue.",
            "Les trois résultats peuvent différer, mais aussi se répéter. C’est le nombre d’appels et leur emplacement qui changent, pas une obligation d’obtenir trois valeurs différentes."
          ],
          "code": "import random\nfor tour in range(3):\n    nombre = random.randint(1, 6)\n    print(nombre)"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé - garanties et appels",
          "items": [
            {
              "id": "bornes-hasard",
              "text": "Dans tirage.py, montre l’import, les bornes et la variable résultat. Compare les valeurs possibles de randint(1, 6) à celles de range(1, 6).",
              "hint": "randint inclut 6 ; range l’exclut. Un tirage est un entier, pas toute la suite."
            },
            {
              "id": "valeur-unique",
              "text": "Enregistre puis crée tirage_fixe.py avec Enregistrer sous. Remplace les bornes par randint(4, 4), prédis puis teste plusieurs fois.",
              "hint": "La seule valeur possible est 4. Le programme appelle quand même randint."
            },
            {
              "id": "appels",
              "text": "Compare valeur_conservee.py et nouveaux_tirages.py. Montre combien de fois la ligne du tirage est exécutée et explique les répétitions possibles des résultats.",
              "hint": "Un appel avant for contre trois appels dans for ; des appels différents peuvent produire la même valeur."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "À toi - ton intervalle",
          "intro": "Enregistre les exemples puis crée mon_tirage.py. Choisis tes messages et essaie avant les indices ; garde tous les fichiers.",
          "items": [
            {
              "id": "plage-personnelle",
              "text": "Choisis une plage positive, par exemple 3 à 9. Tire une fois et réutilise le nombre dans deux messages personnels. Annonce les valeurs possibles et repère la ligne qui tire.",
              "hint": "Un appel à randint conserve la valeur dans une variable. Les deux print réutilisent son nom sans refaire le tirage."
            },
            {
              "id": "trois-appels",
              "text": "Enregistre puis crée mon_tirage_repetition.py avec Enregistrer sous. Fais trois tirages successifs et explique ce que tu as déplacé. Trois nombres différents ne sont pas exigés.",
              "hint": "Le tirage doit appartenir au bloc répété. Vérifie l’emplacement, pas seulement les sorties."
            },
            {
              "id": "modifier-plage",
              "text": "Change les bornes, annonce les nouvelles possibilités puis teste. Dans une copie nommée mon_tirage_fixe.py, réduis la plage à une seule valeur et vérifie ta prédiction.",
              "hint": "Des bornes égales donnent toujours cette valeur. Garde mon_tirage.py et sa plage initiale."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus - réagir au tirage",
          "items": [
            {
              "id": "tirage-seuil",
              "text": "Dans un nouveau fichier, fais cinq tirages de 1 à 6. À chaque tour, affiche un message si le nombre obtenu vaut au moins 4. Montre que la comparaison utilise le tirage conservé.",
              "hint": "Un tirage dans for, puis un if sur la variable. Ne refais pas un tirage dans le test ; reprends les conditions si nécessaire."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Expliquer import, l’appel random.randint et la variable résultat.",
        "Distinguer les bornes incluses de randint de la fin exclue de range.",
        "Réutiliser un tirage conservé et distinguer affichages répétés et nouveaux appels.",
        "Modifier une plage, vérifier une valeur unique et expliquer pourquoi deux tirages peuvent être identiques."
      ],
      "consolidation": [
        {
          "moduleId": "python-hasard",
          "blockId": "guide",
          "label": "Revoir bornes et appels"
        },
        {
          "moduleId": "python-variables",
          "blockId": "guide",
          "label": "Revoir la valeur conservée"
        },
        {
          "moduleId": "python-for",
          "blockId": "guide",
          "label": "Revoir les bornes de range"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "python-hasard",
          "blockId": "bonus",
          "label": "Réagir à chaque tirage",
          "prerequisiteSkills": [
            {
              "skillId": "python.conditions",
              "expectation": "Construire un test et repérer son bloc ; sinon reprendre Faire un choix."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "python-nombre-mystere",
          "label": "Trouver le nombre mystère",
          "prerequisiteSkills": [
            {
              "skillId": "python.random",
              "expectation": "Conserver un tirage et expliquer ses bornes ; sinon reprendre ton intervalle."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Introduire une bibliothèque standard et distinguer un tirage conservé de nouveaux appels.",
        "entryDiagnosis": [
          "Faire afficher une variable fixe et prévoir les valeurs d’un range.",
          "Demander les possibilités plutôt que deviner une sortie aléatoire."
        ],
        "preparation": [
          "Utiliser tirage.py, jamais random.py ; éviter une variable nommée random.",
          "Conserver valeur_conservee.py, nouveaux_tirages.py et les copies à valeur unique. Aucun package supplémentaire."
        ],
        "why": "Un programme peut choisir une valeur sans qu’elle soit fixée dans son code.",
        "discoverySpeech": [
          "« Quelles valeurs sont possibles ? »",
          "« Combien de fois cette ligne est-elle exécutée ? »",
          "« Deux résultats identiques prouvent-ils qu’il n’y a pas eu de nouveau tirage ? »"
        ],
        "example": {
          "target": {
            "moduleId": "python-hasard",
            "blockId": "exemple"
          },
          "comments": [
            "Import avant usage ; fonction existante appelée avec deux bornes.",
            "randint inclut les deux bornes, contrairement à la fin de range.",
            "Ne pas exiger une sortie différente à chaque relance."
          ]
        },
        "questions": [
          {
            "question": "randint(1, 6) peut-il donner 6 ?",
            "answer": "Oui ; les deux bornes sont incluses."
          },
          {
            "question": "Pourquoi trois print de la même variable donnent-ils la même valeur ?",
            "answer": "Ils réutilisent un tirage conservé, sans nouvel appel."
          },
          {
            "question": "Trois appels doivent-ils donner trois valeurs distinctes ?",
            "answer": "Non : chaque appel peut retrouver une valeur déjà obtenue."
          },
          {
            "question": "Faut-il installer random ?",
            "answer": "Non, il appartient à la bibliothèque standard de Python."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "python-hasard",
          "blockId": "guide"
        },
        "independentActivity": {
          "moduleId": "python-hasard",
          "blockId": "autonomie"
        },
        "differentiation": [
          "Commencer par un seul tirage affiché.",
          "Comparer ensuite les deux emplacements de la ligne dans des fichiers distincts.",
          "Réserver la réaction conditionnelle au bonus."
        ],
        "commonErrors": [
          {
            "symptom": "random n’est pas accessible ou n’a pas randint.",
            "helps": [
              "Repérer le fichier actif et lire le message.",
              "Vérifier import random avant usage.",
              "Chercher un fichier random.py ou une variable random qui masque le module.",
              "Renommer le fichier ou la variable, enregistrer et redémarrer avant de retester ; ne pas installer un package au hasard."
            ]
          },
          {
            "symptom": "L’élève attend des résultats tous différents.",
            "helps": [
              "Demander la garantie réellement annoncée.",
              "Compter les appels en suivant le bloc.",
              "Distinguer nouvelle opération et résultat nécessairement nouveau.",
              "Tester une plage à valeur unique puis expliquer un exemple personnel sans imposer de diversité."
            ]
          }
        ],
        "notes": "Le contrôle technique des appels ne demande pas d’enseigner seed. Aides, prédictions et modifications évaluées séparément ; aucun acquis automatique.",
        "quickConductor": [
          "Diagnostiquer variables et range.",
          "Importer et tirer.",
          "Comparer les bornes.",
          "Comparer un appel et trois appels.",
          "Créer, modifier et expliquer l’intervalle personnel."
        ],
        "references": [
          {
            "title": "Python - random.randint",
            "url": "https://docs.python.org/fr/3/library/random.html#random.randint"
          }
        ]
      }
    },
    "python-nombre-mystere": {
      "domainId": "python",
      "title": "Trouver le nombre mystère",
      "type": "project",
      "theme": "fondations",
      "objective": "Construire un jeu à secret stable, indices et compteur d’essais.",
      "prerequisitesInContent": true,
      "tool": {
        "label": "Site officiel de Thonny",
        "url": "https://thonny.org/"
      },
      "skillIds": [
        "python.workspace",
        "python.output",
        "python.variables",
        "python.input",
        "python.numbers",
        "python.conversion",
        "python.debugging",
        "python.conditions",
        "python.branches",
        "python.while",
        "python.accumulation",
        "python.random"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "python.workspace",
          "expectation": "Créer, conserver et relancer un fichier."
        },
        {
          "skillId": "python.output",
          "expectation": "Afficher et lire les résultats."
        },
        {
          "skillId": "python.variables",
          "expectation": "Conserver et réutiliser une valeur numérique."
        },
        {
          "skillId": "python.input",
          "expectation": "Conserver une réponse de input."
        },
        {
          "skillId": "python.numbers",
          "expectation": "Lire un entier et ajouter 1."
        },
        {
          "skillId": "python.conversion",
          "expectation": "Convertir une réponse entière en deux étapes."
        },
        {
          "skillId": "python.debugging",
          "expectation": "Lire une erreur et retester une correction."
        },
        {
          "skillId": "python.conditions",
          "expectation": "Comparer avec <, > et ==."
        },
        {
          "skillId": "python.branches",
          "expectation": "Construire une chaîne à trois issues."
        },
        {
          "skillId": "python.while",
          "expectation": "Actualiser la valeur testée et expliquer l’arrêt."
        },
        {
          "skillId": "python.accumulation",
          "expectation": "Initialiser un compteur puis l’augmenter sans le remettre à zéro."
        },
        {
          "skillId": "python.random",
          "expectation": "Importer random et conserver un tirage."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "preparer",
          "title": "Avant de commencer",
          "text": "Il faut savoir convertir une réponse entière, comparer, actualiser un while et compter les essais. Sinon, reprends le point concerné. Enregistre tes anciens programmes et crée comparaison_mystere.py. Commence avec un secret fixe pour vérifier la logique avant le hasard.",
          "moduleLink": {
            "moduleId": "python-while",
            "text": "Revoir la mise à jour et l’arrêt"
          }
        },
        {
          "type": "lesson",
          "id": "contrat",
          "title": "1 - La règle du jeu",
          "paragraphs": [
            "Au lancement, le programme choisit une fois un entier de 1 à 10. À chaque proposition, il indique Trop petit ou Trop grand, jusqu’à la réussite. Il annonce alors le total d’essais, y compris la proposition gagnante.",
            "Annonce un entier écrit en chiffres, sans unité ni décimale. Un entier hors de la plage est comparé et compte comme essai. Une entrée comme cinq provoque ValueError et termine cet essai : le jeu n’est pas protégé contre les mauvaises saisies.",
            "Pas de limite d’essais ni de nouvelle partie automatique ici. Si une version répète sans fin, utilise Arrêter / redémarrer avant de la corriger."
          ]
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Préparation accompagnée - un choix fixe",
          "items": [
            {
              "id": "comparaison-fixe",
              "text": "Dans comparaison_mystere.py, fixe secret à 6. Demande une proposition entière avec input, puis convertis la réponse avec int dans une autre ligne.",
              "hint": "Le secret est une valeur numérique. Garde distincts le texte de la réponse et le nombre comparé."
            },
            {
              "id": "trois-issues",
              "text": "Affiche Trop petit si la proposition est inférieure au secret, Trop grand si elle est supérieure, sinon Trouvé. Prédis puis teste 4, 6 et 8 dans trois exécutions.",
              "hint": "Une chaîne if/elif/else ; chaque message dépend de la comparaison. Ce premier fichier n’a pas encore de boucle."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "difference",
          "title": "2 - Continuer quand les valeurs diffèrent",
          "paragraphs": [
            "Enregistre ton premier essai puis crée inegalite.py pour ce petit exemple. != signifie différent de : le résultat est vrai lorsque les valeurs diffèrent, faux lorsqu’elles sont égales.",
            "Prédis puis vérifie True, puis False. Ce signe ne fait pas une affectation. Quand proposition devient égale à secret, proposition != secret devient faux : c’est ce qui permettra d’arrêter la répétition."
          ],
          "code": "secret = 6\nproposition = 4\nprint(proposition != secret)\nproposition = 6\nprint(proposition != secret)"
        },
        {
          "type": "lesson",
          "id": "structure",
          "title": "3 - Passer du choix à la répétition",
          "paragraphs": [
            "Rouvre comparaison_mystere.py puis crée repetition_mystere.py avec Enregistrer sous. Garde le secret fixe et la première question suivie de sa conversion avant while. Répète tant que proposition != secret.",
            "Dans while, garde seulement les indices Trop petit et Trop grand selon la comparaison. Retire la branche Trouvé de l’ancienne chaîne : lorsque le bloc est exécuté, la proposition diffère forcément du secret. Place le message de réussite après la boucle, non indenté.",
            "Après l’indice, pose une nouvelle question puis convertis la réponse dans le bloc de while. Ces deux lignes actualisent la proposition avant le test suivant. Quatre espaces pour les instructions de while, huit pour les messages de ses branches, zéro pour la réussite finale."
          ]
        },
        {
          "type": "tasks",
          "id": "repetition",
          "title": "Vérifie la répétition fixe",
          "items": [
            {
              "id": "routes-fixes",
              "text": "Avec le secret à 6, prédis puis teste 6 ; 4 puis 6 ; 8 puis 6 ; 4, 8 puis 6. Vérifie les indices et l’absence de nouvelle question après réussite.",
              "hint": "La première séquence ne passe pas dans while. Les autres passent une, une puis deux fois. Trouvé apparaît seulement après l’arrêt."
            },
            {
              "id": "compter-essais",
              "text": "Enregistre ta version. Initialise essais à 1 après la première proposition convertie. Augmente-le de 1 après chaque nouvelle conversion dans while. Affiche le bilan après la réussite et reteste les quatre séquences.",
              "hint": "Les totaux attendus sont 1, 2, 2, 3. Le compteur compte les propositions converties, pas seulement les tours de while."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "tirage",
          "title": "4 - Remplacer la source du secret",
          "paragraphs": [
            "Enregistre repetition_mystere.py puis crée mystere_aleatoire.py avec Enregistrer sous. Ajoute import random au début et remplace seulement secret = 6 par secret = random.randint(1, 10), avant toute question et avant while.",
            "Ne refais pas le tirage après un échec : le secret reste le même pendant toute la partie. Une relance en tire un nouveau, qui peut toutefois être identique au précédent.",
            "Pour diagnostiquer, tu peux afficher provisoirement le secret juste après le tirage, en annonçant que c’est une aide de test. Retire cet affichage du jeu final. Ne nomme pas le fichier random.py."
          ]
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "À toi - ton nombre mystère",
          "intro": "Enregistre les fichiers guidés puis crée mon_nombre_mystere.py. Prépare une courte description de ta règle et de tes variables ; essaie avant les indices.",
          "items": [
            {
              "id": "jeu-personnel",
              "text": "Construis ta version avec une plage de 1 à 12 et tes propres messages. Tire une fois, demande et convertis chaque proposition, indique trop petit ou trop grand, puis affiche la réussite et le total d’essais.",
              "hint": "Prépare le rôle des variables avant le code. La première saisie est avant while ; les suivantes sont dans le bloc. Le secret ne change pas pendant la partie."
            },
            {
              "id": "tests-personnels",
              "text": "Enregistre puis crée test_nombre_mystere.py avec Enregistrer sous. Remplace provisoirement le tirage par un secret fixe à 7. Choisis toi-même une proposition inférieure et une supérieure. Prédis puis teste : réussite immédiate, chaque échec suivi de réussite, puis les deux échecs avant réussite.",
              "hint": "Par exemple 3 et 10 entourent 7. Attends 1, 2, 2 et 3 essais ; aucune question après la réussite. Les valeurs sont des aides, pas des choix imposés."
            },
            {
              "id": "bornes-et-format",
              "text": "Dans le fichier de test, utilise successivement un secret à 1 puis à 12 et vérifie la réussite immédiate. Essaie aussi un entier hors plage suivi du secret. Puis teste un texte non convertible, explique l’arrêt et relance avec un entier.",
              "hint": "L’entier hors plage compte comme essai ; un texte non convertible provoque ValueError sur int et n’atteint pas la réussite. Pas de try/except à ajouter."
            },
            {
              "id": "retrouver-aleatoire",
              "text": "Enregistre le fichier de test. Rouvre mon_nombre_mystere.py et vérifie le tirage aléatoire unique, sans affichage du secret. Ferme, rouvre puis relance le jeu ; explique la place du tirage, des deux saisies et du compteur.",
              "hint": "La copie fixe sert au diagnostic ; la version personnelle conserve randint. Le fichier doit définir toutes les valeurs nécessaires sans ancien essai."
            },
            {
              "id": "modifier-plage",
              "text": "Enregistre puis crée mystere_modifie.py avec Enregistrer sous. Change la plage, mets à jour son annonce dans les deux questions et teste les nouvelles bornes dans une copie à secret fixe.",
              "hint": "Garde les versions précédentes. Les bornes de randint sont incluses ; modifier l’annonce seule ne change pas le tirage."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus - commenter le bilan",
          "items": [
            {
              "id": "appreciation",
              "text": "Dans une copie du jeu, ajoute après réussite une appréciation selon le total d’essais, avec deux seuils de ton choix. Vérifie chaque issue avec un secret fixe et conserve le total exact.",
              "hint": "Une chaîne if/elif/else après while suffit. Pas de plafond d’essais ni de nouvelle partie à ajouter."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Conserver un secret stable et expliquer le tirage unique.",
        "Utiliser !=, actualiser la proposition et arrêter dès la réussite, même au premier essai.",
        "Donner les bons indices et compter les propositions sans décalage de 1.",
        "Choisir des tests fixes pour les routes et les bornes puis retrouver la version aléatoire sans révéler le secret.",
        "Modifier la plage et expliquer les limites de saisie ; distinguer aides et autonomie pour chaque compétence."
      ],
      "consolidation": [
        {
          "moduleId": "python-nombre-mystere",
          "blockId": "guide",
          "label": "Repartir d’une comparaison fixe"
        },
        {
          "moduleId": "python-calculs",
          "blockId": "conversion",
          "label": "Revoir la conversion entière"
        },
        {
          "moduleId": "python-elif",
          "blockId": "guide",
          "label": "Revoir les trois issues"
        },
        {
          "moduleId": "python-while",
          "blockId": "guide",
          "label": "Revoir actualisation et arrêt"
        },
        {
          "moduleId": "python-compteurs",
          "blockId": "guide",
          "label": "Revoir le compteur"
        },
        {
          "moduleId": "python-hasard",
          "blockId": "guide",
          "label": "Revoir le tirage conservé"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "python-nombre-mystere",
          "blockId": "bonus",
          "label": "Personnaliser l’appréciation"
        }
      ],
      "nextSteps": [{ "moduleId": "python-listes", "label": "Regrouper des valeurs dans une liste", "prerequisiteSkills": [{ "skillId": "python.variables", "expectation": "Conserver et afficher une valeur ; sinon reprendre les variables. Le jeu terminé n'est pas requis." }, { "skillId": "python.for", "expectation": "Suivre un for ; sinon reprendre Répéter un nombre de fois." }] }],
      "teacherGuide": {
        "objective": "Observer le transfert de saisie, décision, répétition, compteur et hasard sans solution complète à recopier.",
        "entryDiagnosis": [
          "Faire convertir une réponse entière puis expliquer une comparaison.",
          "Faire repérer la mise à jour de while et l’initialisation d’un compteur ; reprendre ces notions si nécessaire."
        ],
        "preparation": [
          "Commencer par secret = 6 ; conserver comparaison_mystere.py, inegalite.py, repetition_mystere.py et mystere_aleatoire.py.",
          "Le fichier autonome utilise 1 à 12 ; garder une copie à secret fixe pour diagnostiquer.",
          "Ne pas masquer ValueError : le projet compare des entiers mais ne gère pas les entrées non convertibles."
        ],
        "why": "Des tests déterministes permettent de comprendre un jeu avant d’ajouter le hasard.",
        "discoverySpeech": [
          "« Quelle valeur doit rester stable pendant la partie ? »",
          "« Où la nouvelle proposition peut-elle rendre le test faux ? »",
          "« Combien d’essais compte une réussite immédiate ? »"
        ],
        "example": {
          "target": {
            "moduleId": "python-nombre-mystere",
            "blockId": "contrat"
          },
          "comments": [
            "Comparer trois issues avant la répétition.",
            "Enseigner != puis sortir Trouvé de la chaîne : la réussite est après while.",
            "Ajouter le compteur avant de remplacer la source fixe du secret."
          ]
        },
        "questions": [
          {
            "question": "Pourquoi ne pas tirer le secret dans while ?",
            "answer": "Il changerait pendant la partie ; les indices ne concerneraient plus le même nombre."
          },
          {
            "question": "Pourquoi Trouvé est-il après la boucle ?",
            "answer": "Le bloc n’est exécuté que si les valeurs diffèrent ; la réussite correspond à l’arrêt."
          },
          {
            "question": "Pourquoi essais commence-t-il à 1 ici ?",
            "answer": "La première proposition a déjà été demandée et convertie avant while."
          },
          {
            "question": "Un texte invalide est-il automatiquement redemandé ?",
            "answer": "Non : int produit ValueError et termine l’essai. La boucle normale n’intercepte pas cette erreur."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "python-nombre-mystere",
          "blockId": "guide"
        },
        "independentActivity": {
          "moduleId": "python-nombre-mystere",
          "blockId": "autonomie"
        },
        "differentiation": [
          "Valider une comparaison fixe avant de répéter.",
          "Accompagner un test et laisser choisir les autres propositions en autonomie.",
          "Ajouter l’appréciation seulement après indices, compteur et copie de test."
        ],
        "commonErrors": [
          {
            "symptom": "Le jeu n’atteint pas la réussite ou l’indice est incohérent.",
            "helps": [
              "Interrompre une répétition involontaire avant de modifier.",
              "Lire les valeurs du secret et de la proposition dans une copie de diagnostic.",
              "Vérifier tirage avant while, comparaison numérique et nouvelle conversion dans le bloc.",
              "Corriger une cause puis tester bas, haut et réussite sans nouvelle question après égalité."
            ]
          },
          {
            "symptom": "Le total d’essais est décalé ou se remet à zéro.",
            "helps": [
              "Faire compter les propositions réellement saisies.",
              "Tester une réussite immédiate puis deux échecs avant réussite.",
              "Vérifier essais = 1 avant while et une augmentation après chaque nouvelle conversion.",
              "Corriger l’emplacement puis vérifier 1, 2 et 3 essais dans une copie à secret fixe."
            ]
          },
          {
            "symptom": "Une mauvaise saisie provoque une erreur.",
            "helps": [
              "Lire le format annoncé et la valeur fournie.",
              "Repérer la ligne int et la dernière ligne du message.",
              "Distinguer entier hors plage et texte non convertible.",
              "Relancer avec un entier valide et expliquer la limite sans ajouter une gestion d’exception cachée."
            ]
          }
        ],
        "notes": "Comparer aides, explications et modification autonome. Ce projet ne prouve pas for ; les cases n’attribuent aucun acquis.",
        "quickConductor": [
          "Diagnostiquer conversion, while et compteur.",
          "Construire la comparaison fixe et enseigner !=.",
          "Transformer le choix en répétition puis compter.",
          "Ajouter le tirage unique.",
          "Construire le jeu personnel, choisir les tests et vérifier la copie aléatoire."
        ],
        "references": [
          {
            "title": "Python - random",
            "url": "https://docs.python.org/fr/3/library/random.html#random.randint"
          },
          {
            "title": "Python - comparaisons",
            "url": "https://docs.python.org/fr/3/reference/expressions.html#comparisons"
          }
        ]
      }
    },
    "scratch-boucles": {
      "domainId": "jeux-video",
      "title": "Répéter des actions",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Choisir une répétition limitée ou continue et expliquer ce qui se répète.",
      "tool": {
        "label": "Ouvrir Scratch",
        "url": "https://scratch.mit.edu/projects/editor/"
      },
      "skillIds": [
        "scratch.loops"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "scratch.workspace",
          "expectation": "Assembler des blocs et sauvegarder un .sb3 : reprendre Prendre en main Scratch si nécessaire."
        },
        {
          "skillId": "scratch.sequence",
          "expectation": "Lire une pile dans l’ordre et utiliser une pause : reprendre Déclencher et enchaîner des actions."
        }
      ],
      "blocks": [
        {
          "type": "lesson",
          "id": "notions",
          "title": "1 — Au lieu de recopier",
          "paragraphs": [
            "Une boucle exécute plusieurs fois les blocs placés à l’intérieur. Dans Contrôle (orange), « répéter 10 fois » possède un nombre modifiable et un creux pour y accrocher les actions. Sur nos modèles, « fin du bloc » repère le bas du creux : ce n’est pas un bloc à ajouter dans Scratch.",
            "« Répéter 4 fois » fait quatre tours puis continue après la boucle. Un bloc placé après la boucle se fait une seule fois, pas à chaque tour.",
            "« Répéter indéfiniment » continue jusqu’à l’arrêt du projet. Le bouton rouge au-dessus de la scène arrête la boucle. Une action après cette boucle ne sera pas atteinte dans cette pile."
          ]
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "2 — Quatre petits déplacements",
          "paragraphs": [
            "Le chat du projet neuf regarde à droite : avancer de 20 pas le déplace vers la droite. Nous ne changeons pas sa direction dans cet essai.",
            "Les quatre déplacements de 20 pas donnent au total 80 pas. Tu peux compter quatre mouvements ; une difficulté de calcul ne t’empêche pas de comprendre les quatre tours.",
            "Le message Fini est APRÈS la boucle. La pause de 0.3 secondes est DANS la boucle pour séparer les mouvements. Scratch utilise un point dans ce nombre décimal."
          ],
          "shortSteps": [
            "Sauvegarde ton projet actuel, puis choisis Fichier → Nouveau. Garde le chat et glisse-le vers le centre : ton précédent essai reste dans sa sauvegarde.",
            "Dans Contrôle, prends « répéter 10 fois », change 10 en 4 et place les deux actions dans son creux, comme ci-dessous.",
            "Prédis combien de déplacements tu verras. Lance au drapeau, observe, puis replace le chat au centre avant de recommencer."
          ],
          "visualScript": {
            "caption": "2 — Quatre petits déplacements",
            "note": "Modèle de blocs à assembler dans Scratch. Les menus dessinés ici ne sont pas interactifs.",
            "blocks": [
              {
                "category": "events",
                "label": "Événements",
                "parts": [
                  "quand le ",
                  {
                    "flag": true
                  },
                  " est cliqué"
                ],
                "explanation": "Le drapeau démarre la pile."
              },
              {
                "category": "control",
                "label": "Contrôle",
                "parts": [
                  "répéter ",
                  {
                    "value": "4"
                  },
                  " fois"
                ],
                "explanation": "Quatre tours : seules les actions dans le creux sont répétées.",
                "children": [
                  {
                    "category": "motion",
                    "label": "Mouvement",
                    "parts": [
                      "avancer de ",
                      {
                        "value": "20"
                      },
                      " pas"
                    ],
                    "explanation": "Un déplacement à chaque tour."
                  },
                  {
                    "category": "control",
                    "label": "Contrôle",
                    "parts": [
                      "attendre ",
                      {
                        "value": "0.3"
                      },
                      " secondes"
                    ],
                    "explanation": "Une pause ralentit les essais."
                  }
                ]
              },
              {
                "category": "looks",
                "label": "Apparence",
                "parts": [
                  "dire ",
                  {
                    "value": "Fini !"
                  },
                  " pendant ",
                  {
                    "value": "1"
                  },
                  " secondes"
                ],
                "explanation": "Le message est visible pendant la durée indiquée."
              }
            ]
          },
          "code": "quand le drapeau vert est cliqué\n  répéter 4 fois\n    avancer de 20 pas\n    attendre 0.3 secondes\n  dire Fini ! pendant 1 secondes"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "À toi — change la répétition",
          "intro": "Change une seule chose et prédis avant de tester.",
          "items": [
            {
              "id": "quatre",
              "text": "Assemble l’exemple. Vérifie quatre déplacements puis un seul message Fini.",
              "hint": "Avancer et attendre sont dans le creux orange ; dire Fini vient après."
            },
            {
              "id": "deux",
              "text": "Change 4 en 2. Replace le chat au centre, teste et explique ce qui change.",
              "hint": "On fait deux tours. La distance par tour reste 20 pas."
            },
            {
              "id": "ordre",
              "text": "Place le message Fini à l’intérieur de la boucle. Teste, puis remets-le après.",
              "hint": "À l’intérieur, il apparaît à chaque tour. Après, une seule fois."
            },
            {
              "id": "sauvegarder",
              "text": "Télécharge ton essai en .sb3.",
              "hint": "Fichier → Sauvegarder sur votre ordinateur."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "continue",
          "title": "3 — Répéter jusqu’à l’arrêt",
          "paragraphs": [
            "Un costume est une apparence du même sprite. Dans l’onglet Costumes, le chat de départ possède deux costumes : ce modèle passe de l’un à l’autre, puis recommence.",
            "Sans pause, les changements sont trop rapides pour être bien observés. Attendre 0.5 secondes rend chaque apparence visible. La pause ne termine pas la boucle."
          ],
          "shortSteps": [
            "Sauvegarde l’essai précédent, puis choisis Fichier → Nouveau. Garde le chat : tu crées cette animation sans supprimer les blocs du premier essai.",
            "Dans Apparence (violet), prends « costume suivant » ; place-le et une pause dans « répéter indéfiniment » (Contrôle).",
            "Lance : les costumes alternent. Clique sur le bouton rouge pour arrêter."
          ],
          "visualScript": {
            "caption": "3 — Répéter jusqu’à l’arrêt",
            "note": "Modèle de blocs à assembler dans Scratch. Les menus dessinés ici ne sont pas interactifs.",
            "blocks": [
              {
                "category": "events",
                "label": "Événements",
                "parts": [
                  "quand le ",
                  {
                    "flag": true
                  },
                  " est cliqué"
                ],
                "explanation": "Le drapeau démarre la pile."
              },
              {
                "category": "control",
                "label": "Contrôle",
                "parts": [
                  "répéter indéfiniment"
                ],
                "explanation": "Cette boucle reste active jusqu’à l’arrêt.",
                "children": [
                  {
                    "category": "looks",
                    "label": "Apparence",
                    "parts": [
                      "costume suivant"
                    ],
                    "explanation": "Passer à l’apparence suivante du chat."
                  },
                  {
                    "category": "control",
                    "label": "Contrôle",
                    "parts": [
                      "attendre ",
                      {
                        "value": "0.5"
                      },
                      " secondes"
                    ],
                    "explanation": "Une pause ralentit les essais."
                  }
                ]
              }
            ]
          },
          "code": "quand le drapeau vert est cliqué\n  répéter indéfiniment\n    costume suivant\n    attendre 0.5 secondes"
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "Sans modèle — choisis la bonne boucle",
          "intro": "Sauvegarde ton animation actuelle, puis choisis Fichier → Nouveau. Dans ce projet neuf avec le chat, crée une petite animation avec les blocs connus : aucune ancienne boucle ne tournera en même temps.",
          "items": [
            {
              "id": "trois",
              "text": "Fais changer le chat de costume exactement trois fois, avec une pause entre chaque changement.",
              "hint": "Utilise une répétition limitée à trois tours."
            },
            {
              "id": "fin",
              "text": "Ajoute un message qui apparaît seulement quand les trois changements sont terminés.",
              "hint": "Il se place après la boucle, hors du creux."
            },
            {
              "id": "continu",
              "text": "Dans une copie, fais continuer les changements jusqu’au bouton rouge. Explique quelle boucle tu choisis.",
              "hint": "Répéter indéfiniment ; garder une pause."
            },
            {
              "id": "expliquer",
              "text": "Montre ce qui se répète et ce qui ne se répète pas, puis sauvegarde.",
              "hint": "La place à l’intérieur ou après la boucle change le résultat."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus — deux réglages, deux effets",
          "intro": "Utilise seulement les notions déjà expliquées.",
          "items": [
            {
              "id": "rythme",
              "text": "Compare une pause de 0.2 puis 0.8 seconde avec la même répétition limitée.",
              "hint": "Le rythme change, pas le nombre de tours."
            },
            {
              "id": "compter",
              "text": "Change ensuite le nombre de tours sans changer la pause. Explique la différence.",
              "hint": "Le nombre de changements varie, pas la pause par tour."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Choisir une boucle limitée ou continue à partir du résultat demandé.",
        "Montrer quels blocs sont à l’intérieur, puis prévoir le nombre d’actions.",
        "Expliquer la différence entre une action dans la boucle et après elle.",
        "Arrêter une boucle continue et expliquer le rôle de la pause."
      ],
      "consolidation": [
        {
          "moduleId": "scratch-boucles",
          "blockId": "guide",
          "label": "Comparer deux et quatre tours"
        },
        {
          "moduleId": "scratch-actions",
          "blockId": "notions",
          "label": "Revoir l’ordre et les pauses"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "scratch-boucles",
          "blockId": "bonus",
          "label": "Distinguer rythme et nombre de tours"
        }
      ],
      "nextSteps": [
        {
          "moduleId": "scratch-reactions",
          "blockId": "preparer",
          "label": "Faire réagir le jeu",
          "prerequisiteSkills": [
            {
              "skillId": "scratch.coordinates",
              "expectation": "Savoir changer X/Y et revenir à une position : sinon reprendre Piloter un personnage."
            },
            {
              "skillId": "scratch.loops",
              "expectation": "Savoir placer des actions dans une boucle continue."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Choisir une répétition limitée ou continue et expliquer ce qui se répète.",
        "entryDiagnosis": [
          "Assembler des blocs et sauvegarder un .sb3 : reprendre Prendre en main Scratch si nécessaire.",
          "Lire une pile dans l’ordre et utiliser une pause : reprendre Déclencher et enchaîner des actions."
        ],
        "preparation": [
          "Ouvrir Scratch en français et CodeCraft ; sauvegarde locale .sb3 sans compte ni publication obligatoire.",
          "Lire les consignes visibles et le modèle, puis utiliser les explications repliées si nécessaire.",
          "Sauvegarder puis choisir Fichier → Nouveau au début, avant l’animation continue et avant la mission autonome. Ne pas supprimer les essais précédents. Garder le même projet pour les petites modifications du même exercice ; le chat possède deux costumes déjà fournis."
        ],
        "why": "Une boucle exprime une répétition sans recopier les mêmes actions.",
        "discoverySpeech": [
          "« Qu’est-ce qui doit se refaire : toute la pile ou seulement les blocs dans le creux ? »",
          "« Quatre tours : prédis ce que nous verrons. Où placer le message de fin pour le voir une seule fois ? »",
          "« Indéfiniment veut dire jusqu’à l’arrêt, pas un très grand nombre écrit dans une case. »"
        ],
        "example": {
          "target": {
            "moduleId": "scratch-boucles",
            "blockId": "exemple",
            "label": "Modèle commenté"
          },
          "comments": [
            "Quatre tours : quatre déplacements de 20 pas et quatre pauses de 0.3 seconde, puis un seul message Fini !. Le total est 80 pas ; replacer le chat au centre avant de comparer.",
            "Deux tours : deux déplacements et deux pauses, soit 40 pas. Le nombre de tours change, pas la distance ni la pause par tour.",
            "Le message dans la boucle revient à chaque tour ; après la boucle limitée, il apparaît une fois. Après une boucle infinie, il n’est pas atteint. La mention visuelle fin du bloc repère le creux, pas un bloc Scratch supplémentaire."
          ]
        },
        "questions": [
          {
            "question": "Avec quatre tours et un mouvement par tour, combien de mouvements ?",
            "answer": "Quatre ; le total est 80 pas si chaque mouvement fait 20 pas."
          },
          {
            "question": "Pourquoi le message se répète-t-il lorsqu’il est dans la boucle ?",
            "answer": "Il fait partie des actions refaites à chaque tour."
          },
          {
            "question": "Une action après répéter indéfiniment sera-t-elle atteinte ?",
            "answer": "Non, cette boucle ne termine pas normalement ; arrêter le projet n’exécute pas la suite."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "scratch-boucles",
          "blockId": "guide",
          "label": "Tests guidés"
        },
        "independentActivity": {
          "moduleId": "scratch-boucles",
          "blockId": "autonomie",
          "label": "Modifier sans modèle"
        },
        "differentiation": [
          "Pour un CE2 : une manipulation à la fois, faire montrer la place avant de nommer les termes ; lire la consigne si nécessaire.",
          "Pour un élève plus autonome : masquer le modèle, demander une prédiction et une modification justifiée avant le bonus.",
          "Reprendre le prérequis fragile. Aucun nombre de séances imposé, aucune validation par consultation ou case cochée."
        ],
        "commonErrors": [
          {
            "symptom": "Une seule action semble se répéter.",
            "helps": [
              "Faire suivre le creux orange du doigt.",
              "Repérer si avancer et attendre sont vraiment à l’intérieur.",
              "Comparer un bloc dans et après la boucle.",
              "Raccrocher uniquement le bloc mal placé puis retester."
            ]
          },
          {
            "symptom": "L’animation semble figée ou trop rapide.",
            "helps": [
              "Vérifier que le chat possède deux costumes.",
              "Repérer la pause dans le creux.",
              "Comparer sans pause et avec 0.5 seconde.",
              "Ajouter la pause et faire compter les changements."
            ]
          }
        ],
        "notes": "Le calcul 4 × 20 est un appui, pas un prérequis mathématique à valider ici. Le déplacement relatif nécessite de replacer le chat avant chaque comparaison. Distinguer réussite autonome, avec modèle ou avec aide dans les remarques existantes ; aucun nouveau dispositif de suivi.",
        "quickConductor": [
          "Vérifier les prérequis par une question et un petit essai.",
          "Préparer la base minimale puis repérer les creux des blocs.",
          "Assembler et prédire le résultat du modèle.",
          "Comparer quatre puis deux tours ; déplacer le message dans puis après la boucle et expliquer le résultat.",
          "Proposer la modification autonome, choisir reprise ou bonus puis télécharger le .sb3."
        ],
        "references": [
          {
            "title": "Scratch — idées et tutoriels",
            "url": "https://scratch.mit.edu/ideas"
          },
          {
            "title": "Scratch — projets de départ officiels",
            "url": "https://scratch.mit.edu/help/starter_projects/"
          }
        ]
      }
    },
    "scratch-reactions": {
      "scratchProjectId": "chat-cible",
      "domainId": "jeux-video",
      "title": "Faire réagir le jeu",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Tester une condition pour déplacer le chat et réagir à un contact.",
      "tool": {
        "label": "Ouvrir Scratch",
        "url": "https://scratch.mit.edu/projects/editor/"
      },
      "skillIds": [
        "scratch.conditions",
        "scratch.contacts"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "scratch.loops",
          "expectation": "Utiliser une boucle continue et l’arrêter : reprendre Répéter des actions."
        },
        {
          "skillId": "scratch.coordinates",
          "expectation": "Modifier X et revenir à une position : reprendre Piloter un personnage."
        },
        {
          "skillId": "scratch.keyboard",
          "expectation": "Reconnaître les flèches du clavier."
        }
      ],
      "blocks": [
        {
          "type": "lesson",
          "id": "preparer",
          "title": "1 — Un chat et une cible",
          "paragraphs": [
        "Sauvegarde ton projet actuel avant de commencer. Ouvre ensuite le projet de départ proposé au-dessus : le chat et la souris nommée Cible sont prêts, sans scripts. Tu peux aussi choisir Fichier → Nouveau pour ne pas mélanger les anciennes commandes, sans supprimer ton travail précédent. Le chat reste le joueur.",
            "Avec le projet de départ, garde la souris Cible : n’ajoute pas de deuxième cible. Si tu pars d’un projet vide, clique en bas à droite sur Choisir un sprite et prends Ball dans la bibliothèque. Sélectionne sa miniature puis, dans le champ du nom sous la scène, renomme-le Cible.",
            "Avec Cible sélectionnée, règle x à 80 et y à 0 dans ses champs sous la scène. La cible reste immobile : on ne lui ajoute pas de code.",
            "Sélectionne à nouveau la miniature du chat : toute la programmation ci-dessous appartient au chat. Le chat démarre à x = -100, y = 0 ; la cible est assez éloignée pour qu’ils ne se touchent pas au départ."
          ]
        },
        {
          "type": "callout",
          "id": "reprise",
          "title": "Besoin de revoir les déplacements ?",
          "text": "Reprends Piloter un personnage si X/Y ou le retour au départ te semblent difficiles. Ne recopie pas ses anciennes piles de touches dans cet essai : nous les remplaçons par des tests dans une boucle.",
          "moduleLink": {
            "moduleId": "scratch-pilotage",
            "text": "Piloter un personnage"
          }
        },
        {
          "type": "lesson",
          "id": "condition",
          "title": "2 — Une question qui peut être vraie ou fausse",
          "paragraphs": [
            "Dans Contrôle (orange), « si … alors » possède un emplacement de condition et un creux pour les actions. Si la condition est vraie, les actions à l’intérieur s’exécutent. Si elle est fausse, on les saute et on continue la pile.",
            "Dans Capteurs (bleu clair), « touche espace pressée ? » pose une question. Son menu permet de choisir flèche droite ou gauche. Place ce bloc dans l’emplacement de condition du si.",
            "Contrairement à l’événement « quand la touche … est pressée », ce capteur ne démarre pas de pile. Il vérifie si une touche est maintenue à cet instant. La boucle permet de reposer la question.",
            "Le capteur « touche le … ? » se trouve aussi dans Capteurs. Choisis Cible dans son menu : la condition devient vraie quand le chat touche ce sprite.",
            "Dans les modèles, les encadrés bleu clair sont les conditions à placer dans les si. Les actions indentées restent à l’intérieur. « Fin du bloc » repère seulement le bas du creux ; aucun bloc de ce nom n’est à chercher."
          ]
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "3 — Maintenir une touche, toucher la cible",
          "paragraphs": [
            "Les tests droite et gauche sont deux si séparés, l’un après l’autre. Appuyer sur les deux touches ensemble peut annuler les déplacements ; teste d’abord une touche à la fois.",
            "La pause de 0.03 seconde est dans la boucle, après les si ; elle ralentit la vérification. Les touches doivent rester accessibles au clavier : clique d’abord sur la scène.",
            "Au contact, le message dure une seconde puis le chat retourne au départ. Ce retour le sépare de la cible : la réaction ne se répète pas simplement parce qu’il reste collé dessus.",
            "Aucun mur n’est programmé : le chat peut aller trop loin à gauche. Reviens avec droite ou relance le drapeau ; on n’essaie pas encore de construire un labyrinthe complet."
          ],
          "shortSteps": [
            "Sur le chat, assemble une seule pile au drapeau. Place les deux si de touches et le si de contact à l’intérieur de la boucle.",
            "Pour les conditions, prends les blocs dans Capteurs puis choisis droite, gauche ou Cible. Pour chaque action, retrouve sa catégorie.",
            "Clique sur la scène. Maintiens droite pour rejoindre la cible : le chat parle puis revient à gauche. Teste aussi gauche ; le bouton rouge arrête l’essai."
          ],
          "visualScript": {
            "caption": "3 — Maintenir une touche, toucher la cible",
            "note": "Modèle de blocs à assembler dans Scratch. Les menus dessinés ici ne sont pas interactifs.",
            "blocks": [
              {
                "category": "events",
                "label": "Événements",
                "parts": [
                  "quand le ",
                  {
                    "flag": true
                  },
                  " est cliqué"
                ],
                "explanation": "Le drapeau démarre la pile."
              },
              {
                "category": "motion",
                "label": "Mouvement",
                "parts": [
                  "aller à x: ",
                  {
                    "value": "-100"
                  },
                  " y: ",
                  {
                    "value": "0"
                  }
                ],
                "explanation": "Au départ, le chat est à gauche de la cible."
              },
              {
                "category": "control",
                "label": "Contrôle",
                "parts": [
                  "répéter indéfiniment"
                ],
                "explanation": "La boucle vérifie à nouveau touches et contact.",
                "children": [
                  {
                    "category": "control",
                    "label": "Contrôle",
                    "parts": [
                      "si ",
                      {
                        "condition": [
                          "touche ",
                          {
                            "choice": "flèche droite"
                          },
                          " pressée ?"
                        ]
                      },
                      " alors"
                    ],
                    "explanation": "Si la touche est maintenue, on change X.",
                    "children": [
                      {
                        "category": "motion",
                        "label": "Mouvement",
                        "parts": [
                          "ajouter ",
                          {
                            "value": "3"
                          },
                          " à x"
                        ],
                        "explanation": "Le chat va à droite."
                      }
                    ]
                  },
                  {
                    "category": "control",
                    "label": "Contrôle",
                    "parts": [
                      "si ",
                      {
                        "condition": [
                          "touche ",
                          {
                            "choice": "flèche gauche"
                          },
                          " pressée ?"
                        ]
                      },
                      " alors"
                    ],
                    "explanation": "Si la touche est maintenue, on change X.",
                    "children": [
                      {
                        "category": "motion",
                        "label": "Mouvement",
                        "parts": [
                          "ajouter ",
                          {
                            "value": "-3"
                          },
                          " à x"
                        ],
                        "explanation": "Le chat va à gauche."
                      }
                    ]
                  },
                  {
                    "category": "control",
                    "label": "Contrôle",
                    "parts": [
                      "si ",
                      {
                        "condition": [
                          "touche le ",
                          {
                            "choice": "Cible"
                          },
                          " ?"
                        ]
                      },
                      " alors"
                    ],
                    "explanation": "Un contact déclenche seulement les blocs à l’intérieur.",
                    "children": [
                      {
                        "category": "looks",
                        "label": "Apparence",
                        "parts": [
                          "dire ",
                          {
                            "value": "Touché !"
                          },
                          " pendant ",
                          {
                            "value": "1"
                          },
                          " secondes"
                        ],
                        "explanation": "Le message est visible pendant la durée indiquée."
                      },
                      {
                        "category": "motion",
                        "label": "Mouvement",
                        "parts": [
                          "aller à x: ",
                          {
                            "value": "-100"
                          },
                          " y: ",
                          {
                            "value": "0"
                          }
                        ],
                        "explanation": "Au départ, le chat est à gauche de la cible."
                      }
                    ]
                  },
                  {
                    "category": "control",
                    "label": "Contrôle",
                    "parts": [
                      "attendre ",
                      {
                        "value": "0.03"
                      },
                      " secondes"
                    ],
                    "explanation": "Une pause ralentit les essais."
                  }
                ]
              }
            ]
          },
          "code": "quand le drapeau vert est cliqué\n  aller à x: -100 y: 0\n  répéter indéfiniment\n    si <touche flèche droite pressée ?> alors\n      ajouter 3 à x\n    si <touche flèche gauche pressée ?> alors\n      ajouter -3 à x\n    si <touche le Cible ?> alors\n      dire Touché ! pendant 1 secondes\n      aller à x: -100 y: 0\n    attendre 0.03 secondes"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "À toi — observer vrai et faux",
          "intro": "Avant le test, dis si la condition devrait être vraie.",
          "items": [
            {
              "id": "immobile",
              "text": "Lance sans toucher aux flèches. Vérifie que le chat reste au départ.",
              "hint": "Les conditions de touches sont fausses ; les déplacements sont sautés."
            },
            {
              "id": "maintenir",
              "text": "Maintiens droite, puis relâche. Explique pourquoi le chat s’arrête.",
              "hint": "La boucle continue, mais le capteur devient faux au relâchement."
            },
            {
              "id": "contact",
              "text": "Va jusqu’à la cible. Vérifie un message puis le retour à gauche.",
              "hint": "Le si de contact contient les deux actions dans cet ordre."
            },
            {
              "id": "absence",
              "text": "Relance puis reste loin de la cible. Le chat doit-il dire Touché ? Explique et teste.",
              "hint": "Non : le contact est faux."
            },
            {
              "id": "sauver",
              "text": "Télécharge le projet .sb3 pour pouvoir le reprendre dans le module du score.",
              "hint": "Garde la version avec le chat, Cible et cette pile."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "Sans modèle — change une règle",
          "intro": "Tu peux garder ton programme ; fais les choix toi-même.",
          "items": [
            {
              "id": "touche",
              "text": "Remplace la commande droite par la touche d. Prédis et teste quelle touche fonctionne désormais.",
              "hint": "Change seulement le menu du capteur, pas l’événement au drapeau."
            },
            {
              "id": "message",
              "text": "Choisis un autre message au contact, sans le déclencher quand le chat est loin.",
              "hint": "Le message doit rester dans le si de contact."
            },
            {
              "id": "cible",
              "text": "Déplace Cible à x = 120, y = 0. Rejoins-la et explique si le code doit changer.",
              "hint": "Le capteur teste le contact avec le sprite, pas une coordonnée écrite en dur."
            },
            {
              "id": "comprendre",
              "text": "Demande à quelqu’un de choisir une situation avec ou sans contact. Annonce les actions attendues, puis teste.",
              "hint": "Réussir n’est pas seulement recopier : explique quelle condition est vraie."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus — ajouter haut et bas",
          "intro": "Si X/Y et les si sont compris.",
          "items": [
            {
              "id": "vertical",
              "text": "Ajoute deux si pour les touches haut et bas, en changeant Y de 3 et -3.",
              "hint": "Place-les dans la même boucle, avant la pause ; un si par touche."
            },
            {
              "id": "nouvelle-cible",
              "text": "Pour ce bonus, sélectionne successivement le chat et Cible et mets leur champ Taille sous la scène à 100. Place Cible à x = 80, y = 120. Relance pour que le chat soit à y = 0, puis avance vers elle sans monter : vérifie l’absence de contact. Monte ensuite pour la rejoindre et explique la différence.",
              "hint": "À ces tailles, la cible est assez haut pour ne pas toucher le chat resté à y = 0. Droite change seulement X ; haut change Y. Le contact dépend des dessins, pas seulement de leurs centres."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Distinguer un événement qui démarre une pile et un capteur qui répond vrai/faux.",
        "Prévoir quelles actions sont exécutées ou sautées dans un si.",
        "Expliquer pourquoi une touche relâchée arrête le déplacement malgré la boucle active.",
        "Tester une réaction au contact et une absence de réaction loin de la cible."
      ],
      "consolidation": [
        {
          "moduleId": "scratch-reactions",
          "blockId": "guide",
          "label": "Tester une condition à la fois"
        },
        {
          "moduleId": "scratch-pilotage",
          "blockId": "position",
          "label": "Revoir X/Y"
        },
        {
          "moduleId": "scratch-boucles",
          "blockId": "continue",
          "label": "Revoir la boucle continue"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "scratch-reactions",
          "blockId": "bonus",
          "label": "Commander aussi le déplacement vertical",
          "prerequisiteSkills": [
            {
              "skillId": "scratch.coordinates",
              "expectation": "Choisir Y et son signe pour monter ou descendre."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "scratch-variables",
          "blockId": "preparer",
          "label": "Compter les contacts",
          "prerequisiteSkills": [
            {
              "skillId": "scratch.contacts",
              "expectation": "Reconstruire et expliquer la réaction à Cible ; reprendre les essais guidés si nécessaire."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Tester une condition pour déplacer le chat et réagir à un contact.",
        "entryDiagnosis": [
          "Utiliser une boucle continue et l’arrêter : reprendre Répéter des actions.",
          "Modifier X et revenir à une position : reprendre Piloter un personnage.",
          "Reconnaître les flèches du clavier."
        ],
        "preparation": [
          "Ouvrir Scratch en français et CodeCraft ; sauvegarde locale .sb3 sans compte ni publication obligatoire.",
          "Lire les consignes visibles et le modèle, puis utiliser les explications repliées si nécessaire.",
          "Sauvegarder le projet précédent, puis ouvrir la base sans scripts ou choisir Fichier → Nouveau. Garder Chat et la souris Cible sans ajouter de deuxième cible ; depuis un projet vide, Ball renommé Cible convient aussi. Conserver ensuite une copie de ce programme pour les modules Score, Fin de partie et Mini-jeu : ne pas repartir d’une base vide à chaque suite."
        ],
        "why": "Les règles d’un jeu sont des tests : une action n’arrive que dans certaines situations.",
        "discoverySpeech": [
          "« Ce capteur répond à une question. Il ne démarre pas la pile : le drapeau le fait. »",
          "« La boucle repose la question. Si la réponse est fausse, que fait-on des actions dans ce si ? »",
          "« Nous renvoyons le chat à gauche après le contact : il ne reste pas collé à la cible. »"
        ],
        "example": {
          "target": {
            "moduleId": "scratch-reactions",
            "blockId": "exemple",
            "label": "Modèle commenté"
          },
          "comments": [
            "Sans touche, le chat reste à (-100, 0). Une touche maintenue déplace le chat ; relâchée, elle ne déclenche plus le déplacement, même si la boucle continue.",
            "Au contact : dire Touché ! pendant 1 seconde puis revenir à (-100, 0). Le message suspend cette pile pendant sa durée : elle ne vérifie pas les touches en parallèle durant cette pause. Le retour sépare les sprites et évite de répéter le même contact.",
            "Les creux contiennent les actions du si ; fin du bloc n’est pas un bloc Scratch. Bonus vertical : Taille 100 pour Chat et Cible, cible (80, 120). Tester d’abord le trajet horizontal à Y = 0 sans contact, puis la montée. Les dimensions des costumes comptent pour le contact."
          ]
        },
        "questions": [
          {
            "question": "Pourquoi le chat s’arrête-t-il quand on relâche droite ?",
            "answer": "La boucle continue mais le capteur de touche devient faux."
          },
          {
            "question": "Si le contact est faux, le message se produit-il ?",
            "answer": "Non ; les blocs dans ce si sont sautés."
          },
          {
            "question": "Faut-il modifier la condition quand la cible passe de x=80 à x=120 ?",
            "answer": "Non : elle teste le sprite Cible, pas une coordonnée."
          },
          {
            "question": "Pourquoi ne pas garder les anciennes piles flèche droite/gauche ?",
            "answer": "Elles ajouteraient des déplacements à ceux de la boucle et rendraient l’essai confus."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "scratch-reactions",
          "blockId": "guide",
          "label": "Tests guidés"
        },
        "independentActivity": {
          "moduleId": "scratch-reactions",
          "blockId": "autonomie",
          "label": "Modifier sans modèle"
        },
        "differentiation": [
          "Pour un CE2 : une manipulation à la fois, faire montrer la place avant de nommer les termes ; lire la consigne si nécessaire.",
          "Pour un élève plus autonome : masquer le modèle, demander une prédiction et une modification justifiée avant le bonus.",
          "Reprendre le prérequis fragile. Aucun nombre de séances imposé, aucune validation par consultation ou case cochée."
        ],
        "commonErrors": [
          {
            "symptom": "Le chat ne réagit pas aux touches.",
            "helps": [
              "Cliquer sur la scène pour donner le focus.",
              "Vérifier le capteur et sa touche choisie.",
              "Comparer événement de touche et capteur dans le si.",
              "Tester un seul si avec le chat sélectionné."
            ]
          },
          {
            "symptom": "Le contact ne déclenche pas le message.",
            "helps": [
              "Vérifier les positions et le rapprochement visuel.",
              "Lire le nom du sprite dans le menu du capteur.",
              "Comparer Cible et pointeur de souris ou bord.",
              "Choisir Cible et vérifier que le message est dans le si."
            ]
          },
          {
            "symptom": "Le chat bouge trop vite ou réagit deux fois.",
            "helps": [
              "Repérer toutes les piles sur le chat.",
              "Chercher les anciennes piles de touches.",
              "Sauvegarder le projet avec ses anciens scripts avant de changer d’essai.",
              "Ouvrir la base sans scripts ou Fichier → Nouveau, reconstruire uniquement la pile de Réactions et vérifier la pause. Ne pas supprimer le travail précédent."
            ]
          }
        ],
        "notes": "La mise en place de Cible peut être accompagnée ; évaluer séparément le raisonnement vrai/faux. Pas de score exigé dans ce module. Distinguer réussite autonome, avec modèle ou avec aide dans les remarques existantes ; aucun nouveau dispositif de suivi.",
        "quickConductor": [
          "Vérifier les prérequis par une question et un petit essai.",
          "Préparer la base minimale puis repérer les creux des blocs.",
          "Assembler et prédire le résultat du modèle.",
          "Faire les tests avec et sans la situation déclenchante.",
          "Proposer la modification autonome, choisir reprise ou bonus puis télécharger le .sb3."
        ],
        "references": [
          {
            "title": "Scratch — idées et tutoriels",
            "url": "https://scratch.mit.edu/ideas"
          },
          {
            "title": "Scratch — projets de départ officiels",
            "url": "https://scratch.mit.edu/help/starter_projects/"
          }
        ]
      }
    },
    "scratch-clones": {
      "domainId": "jeux-video", "title": "Créer plusieurs personnages avec des clones", "type": "lesson", "theme": "fondations",
      "objective": "Créer des copies temporaires d’un sprite, les placer et comprendre leur disparition.",
      "tool": { "label": "Ouvrir Scratch", "url": "https://scratch.mit.edu/projects/editor/" },
      "skillIds": ["scratch.clones", "scratch.loops", "scratch.coordinates"],
      "prerequisiteSkills": [
        { "skillId": "scratch.workspace", "expectation": "Choisir un sprite et conserver une copie de son projet." },
        { "skillId": "scratch.coordinates", "expectation": "Placer un sprite avec aller à x/y et comprendre ajouter à x." },
        { "skillId": "scratch.loops", "expectation": "Utiliser répéter un nombre de fois ; sinon reprendre Répéter des actions." }
      ],
      "blocks": [
        { "type": "lesson", "id": "preparer", "title": "1 — Un modèle, plusieurs copies", "paragraphs": [
          "Sauvegarde ton travail précédent avant de choisir Fichier → Nouveau. Dans ce projet neuf, supprime le chat, puis choisis le sprite Star dans la bibliothèque. Dans le champ Taille sous la scène, mets 40 pour que plusieurs étoiles tiennent côte à côte. Tout le code suivant appartient à Star.",
          "Dupliquer un sprite crée un autre personnage dans la liste. Un clone est différent : c’est une copie temporaire créée pendant l’exécution. Il n’ajoute pas une nouvelle vignette dans la liste des sprites et utilise le code du modèle.",
          "Dans Apparence (violet), cacher rend le modèle invisible, sans arrêter son code ; montrer rend une copie visible. Dans Contrôle (orange), créer un clone de moi-même copie le sprite à sa position actuelle. Le clone hérite aussi de sa visibilité : comme notre modèle sera caché, il faudra montrer chaque clone.",
          "Quand je commence comme un clone lance une pile uniquement pour la nouvelle copie. Supprimer ce clone la détruit, contrairement à cacher. Le modèle original reste disponible pour fabriquer d’autres copies."
        ] },
        { "type": "lesson", "id": "exemple", "title": "2 — Trois étoiles temporaires",
          "shortSteps": ["Sur Star, construis la pile de drapeau : cacher, aller à (-120, 0), puis répéter 3 fois la création et le déplacement de 80.", "À côté, construis quand je commence comme un clone → montrer → attendre 2 secondes → supprimer ce clone.", "Lance le drapeau : trois étoiles apparaissent à -120, -40 et 40, puis disparaissent après environ deux secondes."],
          "paragraphs": ["Dans la boucle du modèle, crée d’abord la copie, puis déplace le modèle. Inverser ces deux actions change les positions obtenues.", "Les copies ne suivent pas les déplacements suivants du modèle : chacune garde sa propre position. À la fin de la boucle, le modèle est à 120 mais reste invisible.", "Les deux piles appartiennent au même sprite Star. Ne mets pas créer un clone dans la pile qui démarre les clones : chacun fabriquerait de nouvelles copies.", "Relancer le drapeau supprime les anciens clones avant de recommencer. Sauvegarde ton essai depuis Fichier ou avec ton compte personnel."],
          "visualScript": { "caption": "Dans Star — une fabrique et une vie de copie", "note": "Le modèle caché crée trois copies. Chaque copie lance sa propre pile orange.", "stacks": [
            { "caption": "Le modèle original", "blocks": [
              { "category": "events", "label": "Événements", "parts": ["quand le ", { "flag": true }, " est cliqué"], "explanation": "Démarrer une nouvelle série." },
              { "category": "looks", "label": "Apparence", "parts": ["cacher"], "explanation": "Le modèle travaille sans être affiché." },
              { "category": "motion", "label": "Mouvement", "parts": ["aller à x: ", { "value": "-120" }, " y: ", { "value": "0" }], "explanation": "Position de la première copie." },
              { "category": "control", "label": "Contrôle", "parts": ["répéter ", { "value": "3" }, " fois"], "explanation": "Trois créations, pas une boucle infinie.", "children": [
                { "category": "control", "label": "Contrôle", "parts": ["créer un clone de ", { "choice": "moi-même" }], "explanation": "Copier à la position actuelle." },
                { "category": "motion", "label": "Mouvement", "parts": ["ajouter ", { "value": "80" }, " à x"], "explanation": "Déplacer le modèle pour la prochaine copie." }
              ] }
            ] },
            { "caption": "Chaque clone", "blocks": [
              { "category": "control", "label": "Contrôle", "parts": ["quand je commence comme un clone"], "explanation": "Cette pile appartient aux copies." },
              { "category": "looks", "label": "Apparence", "parts": ["montrer"], "explanation": "La copie était cachée comme son modèle." },
              { "category": "control", "label": "Contrôle", "parts": ["attendre ", { "value": "2" }, " secondes"], "explanation": "Laisser le temps de la voir." },
              { "category": "control", "label": "Contrôle", "parts": ["supprimer ce clone"], "explanation": "Retirer cette copie, pas le modèle." }
            ] }
          ] },
          "code": "Dans Star — modèle :\nquand le drapeau vert est cliqué\n  cacher\n  aller à x: -120 y: 0\n  répéter 3 fois\n    créer un clone de moi-même\n    ajouter 80 à x\n\nDans Star — copies :\nquand je commence comme un clone\n  montrer\n  attendre 2 secondes\n  supprimer ce clone"
        },
        { "type": "tasks", "id": "guide", "title": "Observer avant de modifier", "items": [
          { "id": "compter", "text": "Lance : compte trois étoiles visibles, mais une seule vignette de sprite sous la scène.", "hint": "Le modèle est caché ; les trois étoiles visibles sont ses clones." },
          { "id": "position", "text": "Explique pourquoi la deuxième étoile est en x = -40. Montre le bloc qui prépare sa position.", "hint": "Le modèle passe de -120 à -40 avec ajouter 80 à x, après la première création." },
          { "id": "disparition", "text": "Dans la pile des clones, change la pause à 4 secondes. Prédis ce qui change, puis relance.", "hint": "La quantité et les positions ne changent pas. Seule la durée de vie change." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "Sans modèle — quatre copies bien espacées", "items": [
          { "id": "quatre", "text": "Pars de ton essai : fais quatre copies, depuis -120, avec un déplacement de 60 entre les créations. Essaie avant de rouvrir le modèle.", "hint": "Change la répétition à 4 et le déplacement à 60 dans le modèle, pas dans la pile des clones." },
          { "id": "predire", "text": "Annonce les quatre positions avant de lancer. Teste et vérifie que toutes les copies sont visibles.", "hint": "Les positions sont -120, -60, 0 et 60. Le modèle finit à 120, caché." },
          { "id": "distinguer", "text": "Explique ce qui lance le modèle et ce qui lance chaque copie. Relance avant leur disparition : aucune ancienne copie ne doit s’accumuler." },
          { "id": "conserver", "text": "Sauvegarde ta version. Savoir reproduire la pile n’est pas la même chose que savoir expliquer les positions et la disparition." }
        ] },
        { "type": "details", "id": "bonus", "title": "Bonus facultatif — ramasser les étoiles", "blocks": [
          { "type": "lesson", "id": "ramasser", "title": "Une étoile, un point", "paragraphs": [
            "Prérequis : savoir créer une variable globale et ajouter un point ; sinon laisse ce bonus de côté et reprends Compter et mémoriser.",
            "Travaille dans une copie. Crée score pour tous les sprites. Au tout début de la pile de drapeau, mets score à 0. Garde le modèle caché et les créations.",
            "Dans la pile quand je commence comme un clone, garde montrer mais retire attendre et supprimer ce clone : les étoiles doivent rester jusqu’au clic.",
            "Ajoute dans Star une nouvelle pile Événements : quand ce sprite est cliqué → ajouter 1 à score → supprimer ce clone. Le clic lance le code de la copie touchée. Le modèle caché ne peut pas être cliqué.",
            "Teste : chaque étoile disparaît au clic et vaut exactement un point. La suppression empêche de recliquer la même étoile. Le drapeau remet le score à zéro et recrée les copies."
          ], "code": "Au début de la pile du drapeau : mettre score à 0\n\nquand je commence comme un clone\n  montrer\n\nquand ce sprite est cliqué\n  ajouter 1 à score\n  supprimer ce clone" }
        ] }
      ],
      "masteryCriteria": ["Distinguer une copie temporaire d’un sprite dupliqué dans la liste.", "Expliquer pourquoi le modèle est caché et les clones montrés.", "Prédire les positions de plusieurs copies et adapter la boucle.", "Faire disparaître les clones sans supprimer le modèle ; distinguer copie du modèle et explication autonome."],
      "consolidation": [{ "moduleId": "scratch-clones", "blockId": "guide", "label": "Observer trois copies et leur disparition" }, { "moduleId": "scratch-boucles", "blockId": "exemple", "label": "Reprendre la répétition" }, { "moduleId": "scratch-pilotage", "blockId": "exemple", "label": "Revoir X et Y" }],
      "bonusActivities": [{ "moduleId": "scratch-clones", "blockId": "bonus", "label": "Ramasser les copies avec un score", "prerequisiteSkills": [{ "skillId": "scratch.variables", "expectation": "Créer score, le remettre à zéro et ajouter un point." }] }],
      "nextSteps": [{ "moduleId": "scratch-temps-difficulte", "label": "Limiter une partie dans le temps", "prerequisiteSkills": [{ "skillId": "scratch.variables", "expectation": "Comprendre la remise à zéro et le changement d’une variable ; reprise dans Compter et mémoriser." }, { "skillId": "scratch.conditions", "expectation": "Comprendre une condition ; reprise dans Faire réagir le jeu." }, { "skillId": "scratch.game-rules", "expectation": "Comprendre stop tout et le redémarrage au drapeau ; sinon reprendre Gagner, perdre et recommencer." }] }],
      "teacherGuide": {
        "objective": "Distinguer original, copie temporaire et script de démarrage d’un clone avant un bonus à points.",
        "entryDiagnosis": ["Faire placer le sprite en (-120, 0) et prédire -40 après +80.", "Faire expliquer répéter 3 fois. Reprendre les coordonnées ou boucles si nécessaire ; Mes blocs n’est pas requis."],
        "preparation": ["Faire sauvegarder le travail précédent avant Fichier → Nouveau. Projet neuf, sprite Star seul, taille 40 dans le champ sous la scène.", "Deux piles dans Star : fabrique au drapeau et comportement des copies. Aucun projet partagé ni fichier de départ nécessaire."],
        "why": "Un modèle peut fabriquer plusieurs éléments qui vivent séparément sans créer à la main un sprite pour chacun.",
        "discoverySpeech": ["« Notre original est une fabrique cachée. Chaque étoile visible est une copie temporaire. »", "« Je copie d’abord à cette position, puis je prépare la place suivante. »", "« La copie hérite du modèle caché : elle doit se montrer elle-même. »"],
        "example": { "target": { "moduleId": "scratch-clones", "blockId": "exemple", "label": "Trois créations et trois vies" }, "comments": ["Fabrique : cacher, départ -120, répéter 3 fois créer puis +80. Positions : -120, -40, 40 ; original final 120 caché.", "Copies : montrer, attendre 2 s, supprimer. Les pauses commencent à la création de chaque clone ; elles sont presque simultanées, pas trois pauses consécutives du modèle.", "Quatre copies avec un pas de 60 : -120, -60, 0, 60. Demander une prédiction avant de montrer la correction."] },
        "questions": [
          { "question": "Pourquoi une seule vignette alors que trois étoiles sont visibles ?", "answer": "La vignette représente le sprite modèle. Les clones sont temporaires, pas des sprites dupliqués dans la liste." },
          { "question": "Pourquoi montrer est-il nécessaire ?", "answer": "Les clones héritent de la visibilité du modèle caché." },
          { "question": "Que change créer après le déplacement ?", "answer": "Les positions deviennent -40, 40 et 120 au lieu de -120, -40 et 40." },
          { "question": "Cacher et supprimer ce clone sont-ils équivalents ?", "answer": "Non : cacher laisse la copie exister ; supprimer la détruit. Le modèle reste intact." }
        ],
        "accompaniedActivity": { "moduleId": "scratch-clones", "blockId": "guide", "label": "Compter, prédire et prolonger la durée" },
        "independentActivity": { "moduleId": "scratch-clones", "blockId": "autonomie", "label": "Quatre copies sans modèle" },
        "differentiation": ["CE2 : construire les deux piles ensemble, puis changer un seul nombre et raconter l’effet.", "Plus autonome : prédire les positions avant les essais ; expliquer la différence avec une duplication.", "Bonus à points seulement si les variables sont comprises. Aucun rythme imposé."],
        "commonErrors": [
          { "symptom": "Aucune copie visible.", "helps": ["Lancer le drapeau puis regarder avant deux secondes.", "Vérifier que Star est sélectionné.", "Chercher montrer sous quand je commence comme un clone.", "Ajouter montrer dans cette pile, puisque le modèle est caché."] },
          { "symptom": "Toutes les copies se superposent.", "helps": ["Observer une étoile puis compter les créations dans le code.", "Repérer le déplacement du modèle.", "Vérifier qu’ajouter 80 à x est dans la boucle après créer.", "Mettre créer puis ajouter à x dans répéter, pas dans la pile des clones."] },
          { "symptom": "Les copies se multiplient sans contrôle.", "helps": ["Arrêter avec le bouton rouge.", "Chercher toutes les créations.", "Repérer une création dans quand je commence comme un clone.", "Retirer cette création : seul le modèle au drapeau doit fabriquer les trois clones."] }
        ],
        "notes": "Distinguer réussite autonome, avec modèle ou avec aide dans les remarques existantes. Un score du bonus ne valide pas la compétence ; demander une explication et une modification prédite.",
        "quickConductor": ["Vérifier boucle et coordonnées.", "Montrer modèle caché et copie visible.", "Assembler et tester trois copies.", "Prédire quatre positions puis essayer.", "Choisir reprise ou bonus variables et sauvegarder."],
        "references": [{ "title": "Scratch — idées et tutoriels", "url": "https://scratch.mit.edu/ideas" }]
      }
    },
    "scratch-temps-difficulte": {
      "domainId": "jeux-video", "title": "Gérer le temps et la difficulté", "type": "lesson", "theme": "fondations",
      "objective": "Limiter la durée d’une partie et comparer une difficulté en changeant un réglage à la fois.",
      "tool": { "label": "Ouvrir Scratch", "url": "https://scratch.mit.edu/projects/editor/" },
      "skillIds": ["scratch.time", "scratch.variables", "scratch.conditions", "scratch.game-rules"],
      "prerequisiteSkills": [
        { "skillId": "scratch.variables", "expectation": "Créer une variable pour tous les sprites, remettre à zéro et ajouter un point ; sinon reprendre Compter et mémoriser." },
        { "skillId": "scratch.conditions", "expectation": "Utiliser si … alors ; sinon reprendre Faire réagir le jeu." },
        { "skillId": "scratch.game-rules", "expectation": "Comprendre stop tout et le redémarrage au drapeau ; sinon reprendre Gagner, perdre et recommencer." }
      ],
      "blocks": [
        { "type": "lesson", "id": "preparer", "title": "1 — Dix secondes pour cliquer", "paragraphs": [
          "Sauvegarde ton travail précédent avant de choisir Fichier → Nouveau, puis garde le chat. Cet essai est un petit défi de clics, pas encore un jeu complet. Il ne nécessite ni clones ni ancien projet. Tout le code est placé dans le chat.",
          "Dans Variables, crée score et duree pour tous les sprites. Score compte les clics, duree contient la durée autorisée en secondes. Garde score affiché.",
          "Dans Capteurs (bleu clair), le bloc ovale chronomètre donne le temps écoulé. Glisse cet ovale dans une case : ne tape pas le mot chronomètre au clavier. Réinitialiser le chronomètre repart de zéro pour tout le projet. On le fait une seule fois au début de la partie, pas à chaque clic.",
          "Dans Opérateurs (vert), < compare deux nombres : chronomètre < duree signifie qu’il reste du temps. > signifie strictement supérieur : chronomètre > duree devient vrai juste après la limite. Glisse les ovales chronomètre et duree dans les deux cases de ces comparaisons.",
          "Dans Contrôle, attendre jusqu’à ce que attend que sa condition soit vraie. Dans Apparence, mettre la taille à 100 % de la taille initiale retrouve la taille de départ ; 50 % donnera un chat plus petit."
        ] },
        { "type": "lesson", "id": "exemple", "title": "2 — Démarrer, compter et terminer",
          "shortSteps": ["Construis la pile de drapeau : score = 0, duree = 10, position (0, 0), taille 100 %, puis réinitialiser le chronomètre.", "Ajoute attendre jusqu’à ce que chronomètre > duree, dire Terminé ! pendant 2 secondes, puis stop tout.", "À côté, construis quand ce sprite est cliqué → si chronomètre < duree alors ajouter 1 à score. Lance et clique sur le chat."],
          "paragraphs": ["Quand ce sprite est cliqué est un événement jaune : il démarre une pile pour chaque clic sur le chat. Ajouter 1 doit rester à l’intérieur du si.", "Pendant les dix premières secondes, les clics donnent des points. À dix secondes exactement, chronomètre < duree est faux : les clics ne comptent plus, même pendant le message final de deux secondes.", "Le message apparaît dès que le temps dépasse dix secondes, puis stop tout arrête les scripts. Le chronomètre de Scratch peut continuer à avancer : c’est le score qui reste bloqué. Au drapeau suivant, score et chronomètre repartent de zéro.", "Si tu coches chronomètre dans Capteurs, sa valeur s’affiche sur la scène pour observer les essais. Le temps concerne tout le projet, pas un chronomètre différent par sprite."],
          "visualScript": { "caption": "Dans le chat — une partie et des clics autorisés", "note": "Les comparaisons sont des blocs verts ; chronomètre et duree sont des valeurs glissées dans leurs cases.", "stacks": [
            { "caption": "Démarrer puis terminer", "blocks": [
              { "category": "events", "label": "Événements", "parts": ["quand le ", { "flag": true }, " est cliqué"], "explanation": "Une nouvelle partie." },
              { "category": "variables", "label": "Variables", "parts": ["mettre ", { "choice": "score" }, " à ", { "value": "0" }], "explanation": "Effacer les anciens points." },
              { "category": "variables", "label": "Variables", "parts": ["mettre ", { "choice": "duree" }, " à ", { "value": "10" }], "explanation": "La limite choisie pour cet essai." },
              { "category": "motion", "label": "Mouvement", "parts": ["aller à x: ", { "value": "0" }, " y: ", { "value": "0" }], "explanation": "Retrouver le centre." },
              { "category": "looks", "label": "Apparence", "parts": ["mettre la taille à ", { "value": "100" }, " % de la taille initiale"], "explanation": "Retrouver une taille connue." },
              { "category": "sensing", "label": "Capteurs", "parts": ["réinitialiser le chronomètre"], "explanation": "Le départ du temps, une seule fois." },
              { "category": "control", "label": "Contrôle", "parts": ["attendre jusqu’à ce que ", { "condition": [{ "value": "chronomètre" }, " > ", { "value": "duree" }], "operator": true }], "explanation": "Attendre la fin du temps." },
              { "category": "looks", "label": "Apparence", "parts": ["dire ", { "value": "Terminé !" }, " pendant ", { "value": "2" }, " secondes"], "explanation": "Les points sont déjà bloqués par la condition de clic." },
              { "category": "control", "label": "Contrôle", "parts": ["stop ", { "choice": "tout" }], "explanation": "Arrêter les scripts de la partie." }
            ] },
            { "caption": "Un clic pendant le temps autorisé", "blocks": [
              { "category": "events", "label": "Événements", "parts": ["quand ce sprite est cliqué"], "explanation": "Le clic sur le chat déclenche cette pile." },
              { "category": "control", "label": "Contrôle", "parts": ["si ", { "condition": [{ "value": "chronomètre" }, " < ", { "value": "duree" }], "operator": true }, " alors"], "explanation": "Ne compter que les clics avant la limite.", "children": [
                { "category": "variables", "label": "Variables", "parts": ["ajouter ", { "value": "1" }, " à ", { "choice": "score" }], "explanation": "Un clic autorisé vaut un point." }
              ] }
            ] }
          ] },
          "code": "quand le drapeau vert est cliqué\n  mettre score à 0\n  mettre duree à 10\n  aller à x: 0 y: 0\n  mettre la taille à 100 % de la taille initiale\n  réinitialiser le chronomètre\n  attendre jusqu’à ce que <chronomètre > duree>\n  dire Terminé ! pendant 2 secondes\n  stop tout\n\nquand ce sprite est cliqué\n  si <chronomètre < duree> alors\n    ajouter 1 à score"
        },
        { "type": "tasks", "id": "guide", "title": "Vérifier la limite", "items": [
          { "id": "cliquer", "text": "Lance, clique plusieurs fois sur le chat, puis continue pendant Terminé ! : les points ne doivent plus augmenter.", "hint": "La condition du clic bloque le score avant que stop tout soit exécuté." },
          { "id": "relancer", "text": "Relance le drapeau. Vérifie score = 0, le chat au centre et une nouvelle durée complète.", "hint": "Cherche les remises à zéro au début de la pile, pas dans celle du clic." },
          { "id": "expliquer", "text": "Montre ce qui mesure le temps, ce qui fixe la limite et ce qui autorise un point. Explique sans simplement relire les blocs." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "Comparer deux difficultés", "intro": "Change un seul réglage par essai pour comprendre son effet, sans imposer un score à atteindre.", "items": [
          { "id": "temps", "text": "Dans la pile de départ, passe duree de 10 à 15, teste, puis à 5 et teste. Prédis ce qui change sans toucher la taille.", "hint": "Il y a plus ou moins de temps pour cliquer ; un clic vaut toujours un point." },
          { "id": "taille", "text": "Remets duree à 10. Dans la même pile, passe la taille de 100 à 50 %. Compare en relançant entre les essais.", "hint": "Le chat est plus petit, mais le temps reste identique. Le réglage de la pile remplace la taille au lancement." },
          { "id": "choisir", "text": "Choisis une version facile et une version plus difficile. Explique les réglages choisis et vérifie pour chacune que le score s’arrête à la limite." },
          { "id": "sauver", "text": "Sauvegarde ton essai. Un bon score ne prouve pas à lui seul que tu comprends le chronomètre ou les conditions." }
        ] },
        { "type": "details", "id": "bonus", "title": "Bonus facultatif — plus difficile en cours de partie", "blocks": [
          { "type": "lesson", "id": "progressif", "title": "Une cible qui rétrécit", "paragraphs": [
            "Seulement si le temps, les conditions et les piles parallèles sont compris : travaille dans une copie avec duree = 10 et taille = 100 au départ.",
            "Ajoute une troisième pile dans le chat : drapeau → attendre 5 secondes → si chronomètre < duree alors mettre la taille à 50 % de la taille initiale. Ne remets ni score ni chronomètre à zéro dans cette pile.",
            "Pendant les cinq premières secondes, la cible est grande ; ensuite elle rétrécit si la partie continue. La limite reste dix secondes. Relancer doit retrouver la grande taille grâce à la première pile.",
            "Essaie duree = 4 : la condition empêche le rétrécissement après la fin du temps. Explique pourquoi avant de tester."
          ], "code": "quand le drapeau vert est cliqué\n  attendre 5 secondes\n  si <chronomètre < duree> alors\n    mettre la taille à 50 % de la taille initiale" }
        ] },
        { "type": "lesson", "id": "suite", "title": "Consolider avant de poursuivre", "paragraphs": ["Tu peux réutiliser une limite de temps dans un jeu que tu comprends déjà, mais ce transfert est facultatif. Déboguer son jeu propose ensuite une méthode pour chercher les erreurs. Reprends les essais ci-dessus si le score continue après la limite ou si le redémarrage ne fonctionne pas."] }
      ],
      "masteryCriteria": ["Distinguer temps mesuré et durée autorisée.", "Réinitialiser au départ sans prolonger la partie à chaque clic.", "Bloquer les points à la limite et expliquer la condition, au-delà de la reproduction du modèle.", "Comparer deux réglages de difficulté en changeant une seule valeur, puis vérifier le redémarrage."],
      "consolidation": [{ "moduleId": "scratch-temps-difficulte", "blockId": "guide", "label": "Revoir la limite et la remise à zéro" }, { "moduleId": "scratch-variables", "blockId": "exemple", "label": "Reprendre le score" }, { "moduleId": "scratch-reactions", "blockId": "exemple", "label": "Reprendre une condition" }, { "moduleId": "scratch-fin-partie", "blockId": "exemple", "label": "Revoir arrêt et reprise" }],
      "bonusActivities": [{ "moduleId": "scratch-temps-difficulte", "blockId": "bonus", "label": "Changer la difficulté pendant la partie", "prerequisiteSkills": [{ "skillId": "scratch.time", "expectation": "Expliquer la limite et le redémarrage." }, { "skillId": "scratch.events", "expectation": "Comprendre que deux piles de drapeau peuvent avancer en parallèle." }] }],
      "nextSteps": [{ "moduleId": "scratch-debogage", "label": "Chercher et corriger une erreur", "prerequisiteSkills": [{ "skillId": "scratch.sequence", "expectation": "Lire une pile dans l’ordre." }, { "skillId": "scratch.variables", "expectation": "Comprendre le score et la remise à zéro ; reprendre Compter et mémoriser si nécessaire." }, { "skillId": "scratch.conditions", "expectation": "Comprendre une comparaison ; reprendre Faire réagir le jeu si nécessaire." }] }],
      "teacherGuide": {
        "objective": "Mesurer une partie, bloquer les actions à la limite et comparer un seul paramètre de difficulté à la fois.",
        "entryDiagnosis": ["Demander de remettre score à zéro et d’ajouter un point.", "Faire expliquer une condition si et stop tout. Reprendre variables, réactions ou fin de partie si nécessaire ; les clones ne sont pas requis."],
        "preparation": ["Faire sauvegarder le travail précédent avant Fichier → Nouveau. Projet neuf avec le chat, variables score et duree pour tous les sprites.", "Prévoir une cible fixe au centre. Afficher le chronomètre pour observer la limite si utile ; aucune base partagée nécessaire."],
        "why": "Une durée et une taille sont des règles testables : changer une valeur à la fois permet d’expliquer ce qui rend l’essai plus difficile.",
        "discoverySpeech": ["« Le chronomètre mesure. Duree indique notre limite. Ce ne sont pas la même chose. »", "« Un clic n’a pas le droit de remettre le temps à zéro, sinon on ne finirait jamais. »", "« Même pendant le message final, la condition refuse les points. »"],
        "example": { "target": { "moduleId": "scratch-temps-difficulte", "blockId": "exemple", "label": "Un temps limité et un score protégé" }, "comments": ["Départ : score 0, duree 10, position 0/0, taille 100, reset du chronomètre. Fin : attendre chrono > duree, message 2 s, stop tout.", "Clic : si chrono < duree, ajouter 1. À 10 exactement, cette condition est fausse ; le message attend le premier instant supérieur à 10. Pas de point pendant sa pause.", "Stop tout arrête les scripts, pas nécessairement la valeur du chronomètre. Évaluer le score figé et le nouveau départ, pas un affichage de temps figé.", "Bonus : troisième pile drapeau, attente 5 s, condition chrono < duree puis taille 50. Avec duree 4, le test est faux ; le message de fin n’autorise pas de rétrécissement."] },
        "questions": [
          { "question": "Quel bloc mesure, quelle valeur fixe la limite ?", "answer": "Chronomètre mesure ; la variable duree contient la limite choisie." },
          { "question": "Pourquoi ne pas réinitialiser à chaque clic ?", "answer": "Cela repousserait sans cesse la fin et ne mesurerait plus la durée de la partie." },
          { "question": "Le clic à dix secondes exactement compte-t-il ?", "answer": "Non : 10 < 10 est faux. La fin affichée arrive juste après, lorsque 10 est dépassé." },
          { "question": "Pourquoi ne pas changer taille et durée ensemble pour comparer ?", "answer": "On ne saurait pas quelle modification explique la différence. On teste une valeur à la fois." }
        ],
        "accompaniedActivity": { "moduleId": "scratch-temps-difficulte", "blockId": "guide", "label": "Observer le score pendant la fin" },
        "independentActivity": { "moduleId": "scratch-temps-difficulte", "blockId": "autonomie", "label": "Comparer durée puis taille" },
        "differentiation": ["CE2 : assembler avec le modèle puis changer seulement duree ; faire raconter avant/après.", "Élève autonome : justifier les deux comparaisons et tester les clics pendant le message final.", "Le score obtenu n’est pas un niveau de compréhension. Bonus parallèle seulement après maîtrise du test simple."],
        "commonErrors": [
          { "symptom": "La partie ne se termine jamais.", "helps": ["Afficher et observer le chronomètre.", "Chercher ses réinitialisations.", "Vérifier que les cases de la comparaison contiennent des ovales et non des mots tapés.", "Garder un seul reset au départ et glisser chronomètre et duree dans chrono > duree."] },
          { "symptom": "Les points continuent pendant Terminé !.", "helps": ["Cliquer pendant le message pour confirmer.", "Observer la pile du clic.", "Vérifier que ajouter 1 est dans le si, pas dessous.", "Encadrer l’ajout avec si chronomètre < duree alors."] },
          { "symptom": "La difficulté choisie disparaît au drapeau.", "helps": ["Relancer et observer la taille et la durée.", "Repérer les réglages dans la pile de départ.", "Comparer le champ Taille sous la scène et le bloc du programme.", "Modifier les valeurs de cette pile, qui réinitialise chaque partie, puis relancer."] }
        ],
        "notes": "Distinguer réussite autonome, avec modèle ou avec aide dans les remarques existantes. Demander une prédiction, l’explication de la limite et un test de reprise ; ni le score ni les cases ne valident automatiquement une compétence.",
        "quickConductor": ["Vérifier variables et condition.", "Présenter mesure et limite.", "Construire les deux piles et tester pendant le message.", "Comparer durée puis taille.", "Choisir reprise ou difficulté progressive et sauvegarder."],
        "references": [{ "title": "Scratch — idées et tutoriels", "url": "https://scratch.mit.edu/ideas" }]
      }
    },
    "scratch-debogage": {
      "domainId": "jeux-video", "title": "Déboguer son jeu", "type": "lesson", "theme": "fondations",
      "objective": "Comparer le résultat attendu au résultat observé, puis corriger une erreur et vérifier la reprise.",
      "tool": { "label": "Ouvrir Scratch", "url": "https://scratch.mit.edu/projects/editor/" },
      "skillIds": ["scratch.debugging", "scratch.events", "scratch.sequence", "scratch.variables", "scratch.conditions"],
      "prerequisiteSkills": [
        { "skillId": "scratch.events", "expectation": "Lancer une pile avec un événement ; sinon reprendre Déclencher et enchaîner des actions." },
        { "skillId": "scratch.sequence", "expectation": "Lire les actions de haut en bas." },
        { "skillId": "scratch.coordinates", "expectation": "Comprendre aller à x/y et ajouter à x ; sinon reprendre Piloter un personnage." },
        { "skillId": "scratch.variables", "expectation": "Créer score et ajouter un point ; sinon reprendre Compter et mémoriser avant les défis de score." },
        { "skillId": "scratch.conditions", "expectation": "Comprendre si et une comparaison ; sinon reprendre Faire réagir le jeu avant le défi de seuil." }
      ],
      "blocks": [
        { "type": "lesson", "id": "methode", "title": "1 — Une erreur, une enquête", "paragraphs": [
          "Un bug est une différence entre ce que tu veux obtenir et ce que fait ton programme. Il ne signifie pas que tout est raté. Sauvegarde ton travail actuel avant de choisir Fichier → Nouveau, puis garde le chat. Nous allons réparer de petits scripts dans ce projet neuf : aucun jeu partagé n’est nécessaire.",
          "Dis d’abord : Je veux que… Puis décris : Quand je fais…, j’observe… Lance toujours de la même façon pour comparer. Choisis une piste, change une seule chose et reteste. Si elle ne résout pas le problème, remets la version précédente avant d’essayer autre chose.",
          "Vérifie le sprite sélectionné, l’événement qui lance la pile, les blocs accrochés, leur ordre, puis les conditions et les valeurs. Un bloc détaché ne fait pas partie de la pile. Cliquer directement sur une pile teste ses actions, mais ne prouve pas que le drapeau la lance.",
          "Après une correction, refais le test qui échouait, puis recommence la partie. La solution doit fonctionner aussi au redémarrage. Garde une copie avant d’enquêter dans un grand jeu."
        ] },
        { "type": "lesson", "id": "exemple", "title": "2 — Le chat revient au mauvais endroit",
          "shortSteps": ["Dans un projet neuf, construis exactement la pile volontairement incorrecte ci-dessous, sur le chat.", "Résultat voulu : au drapeau, partir de (0, 0) puis finir en (40, 0). Lance et observe les champs X/Y sous la scène.", "Explique quel bloc efface le déplacement. Change uniquement l’ordre des deux actions, puis lance deux fois pour vérifier."],
          "paragraphs": ["Ajouter 40 à x déplace depuis la position actuelle. Aller à x: 0 y: 0 fixe une position et remplace le déplacement précédent. Les actions sont exécutées de haut en bas.", "Dans ce modèle incorrect, la dernière action remet toujours le chat au centre. La position finale est (0, 0), même s’il a bougé brièvement. Lis X/Y : le mouvement peut être trop rapide pour le voir.", "Essaie avant d’ouvrir l’indice. Il n’est pas nécessaire d’ajouter un nouveau bloc ou une pause."],
          "visualScript": { "caption": "À réparer — ordre volontairement incorrect", "note": "C’est un problème à résoudre, pas la solution. Lis X/Y après le lancement.", "blocks": [
            { "category": "events", "label": "Événements", "parts": ["quand le ", { "flag": true }, " est cliqué"], "explanation": "Le test démarre au drapeau." },
            { "category": "motion", "label": "Mouvement", "parts": ["ajouter ", { "value": "40" }, " à x"], "explanation": "Déplacement avant le placement dans cette version incorrecte." },
            { "category": "motion", "label": "Mouvement", "parts": ["aller à x: ", { "value": "0" }, " y: ", { "value": "0" }], "explanation": "Cette action remplace la position obtenue juste avant." }
          ] },
          "code": "Version volontairement incorrecte :\nquand le drapeau vert est cliqué\n  ajouter 40 à x\n  aller à x: 0 y: 0"
        },
        { "type": "tasks", "id": "guide", "title": "Réparer et expliquer", "items": [
          { "id": "observation", "text": "Annonce la position voulue et celle observée. Indique le dernier bloc exécuté." },
          { "id": "ordre", "text": "Répare uniquement l’ordre. Vérifie la position (40, 0) après deux lancements.", "hint": "Il faut d’abord aller à (0, 0), puis ajouter 40 à x. Sinon le placement efface le déplacement." },
          { "id": "evenement", "text": "Dans une copie de l’essai réparé, remplace le drapeau par quand la touche espace est pressée (Événements). Teste le drapeau puis espace. Est-ce un bug si le drapeau ne lance plus cette pile ?", "hint": "Non : elle attend maintenant espace. Un événement différent explique un lancement différent, sans erreur dans les actions." }
        ] },
        { "type": "lesson", "id": "score", "title": "3 — Un score qui reste à un", "paragraphs": [
          "Enregistre le premier essai, puis crée un autre projet neuf avec le chat pour ne pas mélanger les scripts. Crée score pour tous les sprites dans Variables et garde son affichage coché.",
          "Construis les deux piles ci-dessous. Quand ce sprite est cliqué, dans Événements, lance une pile à chaque clic sur le chat. La pile du clic est volontairement incorrecte : après trois clics, score devrait compter 1, 2, 3, mais reste à 1.",
          "Mettre score à 0 remplace la valeur ; ajouter 1 à score augmente la valeur actuelle. Compare quand ces actions doivent être exécutées : au départ ou à chaque clic ?",
          "Répare maintenant ce premier problème, avant de passer au seuil. Lance le drapeau, vérifie score = 0, puis clique trois fois : le score doit afficher 1, 2, 3. Essaie avant d’ouvrir l’indice de l’enquête sur le score plus bas. Garde ce même projet pour l’exercice suivant."
        ], "visualScript": { "caption": "À réparer — la remise à zéro est répétée", "note": "Deux piles dans le même chat. Cherche celle qui efface les points à chaque clic.", "stacks": [
          { "caption": "Le départ", "blocks": [
            { "category": "events", "label": "Événements", "parts": ["quand le ", { "flag": true }, " est cliqué"], "explanation": "Le début de la partie." },
            { "category": "variables", "label": "Variables", "parts": ["mettre ", { "choice": "score" }, " à ", { "value": "0" }], "explanation": "La remise à zéro est utile au départ." }
          ] },
          { "caption": "Le clic — version incorrecte", "blocks": [
            { "category": "events", "label": "Événements", "parts": ["quand ce sprite est cliqué"], "explanation": "Cette pile repart à chaque clic." },
            { "category": "variables", "label": "Variables", "parts": ["mettre ", { "choice": "score" }, " à ", { "value": "0" }], "explanation": "Cette action efface les points précédents." },
            { "category": "variables", "label": "Variables", "parts": ["ajouter ", { "value": "1" }, " à ", { "choice": "score" }], "explanation": "Ajouter un point après les avoir effacés." }
          ] }
        ] }, "code": "Pile de départ :\nquand le drapeau vert est cliqué\n  mettre score à 0\n\nPile volontairement incorrecte :\nquand ce sprite est cliqué\n  mettre score à 0\n  ajouter 1 à score" },
        { "type": "lesson", "id": "seuil", "title": "4 — Un message qui arrive trop tard", "paragraphs": [
          "Après avoir réparé le score, ajoute si … alors sous ajouter 1 dans la pile du clic. Place la comparaison verte score > 3 dans la condition et dire Gagné ! pendant 1 seconde à l’intérieur du si.",
          "Prends > dans Opérateurs. Glisse l’ovale score de Variables dans sa première case et écris 3 dans l’autre. Ne tape pas le mot score comme du texte. > signifie strictement plus grand : 3 > 3 est faux, 4 > 3 est vrai.",
          "Résultat voulu : afficher Gagné ! dès le troisième clic, pas seulement au quatrième. Avant chaque test, lance le drapeau et vérifie score = 0. Clique ensuite une fois à la fois et observe le score et le message. Ce test vérifie uniquement le seuil du message : il ne termine pas une partie. Corrige le nombre comparé sans changer la valeur d’un point."
        ], "visualScript": { "caption": "À réparer — le seuil arrive un point trop tard", "note": "Sous ajouter 1 dans le clic réparé. Le nombre comparé est volontairement incorrect.", "blocks": [
          { "category": "control", "label": "Contrôle", "parts": ["si ", { "condition": [{ "value": "score" }, " > ", { "value": "3" }], "operator": true }, " alors"], "explanation": "Est-ce vrai lorsque score vaut exactement trois ?", "children": [
            { "category": "looks", "label": "Apparence", "parts": ["dire ", { "value": "Gagné !" }, " pendant ", { "value": "1" }, " seconde"], "explanation": "Le message dépend du test, sans arrêter le jeu." }
          ] }
        ] }, "code": "À ajouter sous ajouter 1 à score :\nsi <score > 3> alors\n  dire Gagné ! pendant 1 seconde\n\nSeuil volontairement incorrect pour gagner dès 3 points." },
        { "type": "tasks", "id": "autonomie", "title": "Sans solution — deux enquêtes", "intro": "Essaie avant les indices : attendu, observé, une piste, une modification, nouveau test.", "items": [
          { "id": "score-fixe", "text": "Répare le score qui reste à 1 avant de passer au seuil. Lance le drapeau, vérifie score = 0, puis teste trois clics : 1, 2, 3. Relance le drapeau : 0, puis le premier clic doit donner 1.", "hint": "Garde mettre score à 0 uniquement au drapeau. Retire cette remise à zéro du clic, mais garde ajouter 1." },
          { "id": "seuil-trois", "text": "Répare le seuil. Avant chaque test, lance le drapeau et vérifie score = 0. Clique une fois à la fois : aucun Gagné ! aux clics 1 et 2, puis Gagné ! au clic 3. Change seulement le nombre de la comparaison.", "hint": "Score > 2 est vrai à partir de 3. Il reste vrai aux clics suivants : nous n’avons pas demandé un arrêt ou un message unique." },
          { "id": "preuve", "text": "Explique pourquoi chaque ancienne version échouait. Cite un test qui prouve ta correction, puis sauvegarde." }
        ] },
        { "type": "details", "id": "bonus", "title": "Bonus facultatif — enquêter dans ton jeu", "blocks": [
          { "type": "lesson", "id": "transfert", "title": "Une panne à la fois", "paragraphs": [
            "Prérequis : avoir un jeu dont tu comprends les événements et les règles. Sinon, les petits essais suffisent.",
            "Dans une copie, choisis un comportement à vérifier : démarrage, commande, score ou fin. Décris le résultat attendu, puis teste. S’il y a un problème, change une seule chose à la fois.",
            "Si tout fonctionne, déplace volontairement une remise à zéro dans le mauvais événement ou change un seuil déjà compris. Prédis la panne, constate-la puis restaure la version correcte. N’utilise pas une notion inconnue.",
            "Explique la cause, pas seulement le jeu réparé. Vérifie un lancement complet et un redémarrage."
          ] }
        ] },
        { "type": "lesson", "id": "suite", "title": "Garder la méthode", "paragraphs": ["Une erreur ne demande pas forcément de recommencer tout le projet. Garde la méthode : attendu, observé, une piste, un test. Mon projet personnel te permet ensuite de choisir un petit jeu avec les notions que tu comprends. Tu peux aussi consolider ton mini-jeu existant avant ce jalon."] }
      ],
      "masteryCriteria": ["Décrire précisément attendu et observé.", "Expliquer une erreur d’ordre, d’événement, de remise à zéro ou de seuil.", "Changer une seule chose puis vérifier le test initial et un redémarrage.", "Résoudre une panne sans recopier sa correction ; distinguer réussite autonome, avec indice ou avec aide."],
      "consolidation": [{ "moduleId": "scratch-debogage", "blockId": "guide", "label": "Reprendre l’enquête sur l’ordre" }, { "moduleId": "scratch-actions", "blockId": "exemple", "label": "Revoir événements et ordre" }, { "moduleId": "scratch-variables", "blockId": "exemple", "label": "Revoir la remise à zéro" }, { "moduleId": "scratch-reactions", "blockId": "exemple", "label": "Revoir les conditions" }],
      "bonusActivities": [{ "moduleId": "scratch-debogage", "blockId": "bonus", "label": "Appliquer la méthode à ton jeu", "prerequisiteSkills": [{ "skillId": "scratch.game-rules", "expectation": "Comprendre les règles du jeu testé et son redémarrage." }] }],
      "nextSteps": [{ "moduleId": "scratch-projet-personnel", "label": "Concevoir ton petit jeu", "prerequisiteSkills": [{ "skillId": "scratch.variables", "expectation": "Comprendre score et remise à zéro ; reprendre Compter et mémoriser si nécessaire." }, { "skillId": "scratch.conditions", "expectation": "Comprendre les conditions choisies pour les règles." }, { "skillId": "scratch.game-rules", "expectation": "Comprendre fin et reprise ; reprendre Gagner, perdre et recommencer si nécessaire." }] }, { "moduleId": "scratch-mini-jeu", "label": "Consolider ton premier mini-jeu", "prerequisiteSkills": [{ "skillId": "scratch.variables", "expectation": "Comprendre score et remise à zéro." }, { "skillId": "scratch.conditions", "expectation": "Comprendre contacts et conditions." }, { "skillId": "scratch.game-rules", "expectation": "Comprendre victoire, défaite et reprise ; utiliser les reprises du projet si nécessaire." }] }],
      "teacherGuide": {
        "objective": "Faire expliquer une panne et sa cause, puis vérifier une correction au lieu de changer des blocs au hasard.",
        "entryDiagnosis": ["Faire expliquer aller à x/y et ajouter à x, puis lire une pile de haut en bas.", "Vérifier score et si avant les défis correspondants. Ni clones ni chronomètre nécessaires."],
        "preparation": ["Faire sauvegarder le travail actuel avant Fichier → Nouveau : garder le chat pour l’ordre. Sauvegarder cet essai avant un second projet neuf pour le score, puis garder ce second projet pour le seuil. Aucun fichier partagé requis.", "Préparer les versions incorrectes sans les corriger avant l’observation. Afficher X/Y et score."],
        "why": "Trouver une cause précise et refaire un test rend la correction réutilisable.",
        "discoverySpeech": ["« Avant de toucher aux blocs, dis ce que tu voulais et ce que tu as observé. »", "« Quel est le dernier bloc qui change cette valeur ? »", "« Une seule modification : sinon on ne saura pas ce qui a réparé le problème. »"],
        "example": { "target": { "moduleId": "scratch-debogage", "blockId": "exemple", "label": "Une position effacée" }, "comments": ["Incorrect : +40 puis aller à 0/0, résultat final 0/0. Correct : aller à 0/0 puis +40, résultat 40/0 après chaque drapeau. Une pause rend le mouvement visible mais ne répare pas la position finale.", "Score : remise à zéro uniquement au drapeau ; clic → ajouter 1. Faire résoudre cette enquête et vérifier 0, 1, 2, 3 avant d’ajouter le seuil dans le même projet.", "Seuil : sous ajouter, si score > 2 alors dire Gagné ! 1 s. Avant chaque comparaison, lancer le drapeau et vérifier score = 0, puis cliquer une fois à la fois. Le test est faux à 1 et 2, vrai à 3 et ensuite ; aucun arrêt ni message unique demandé.", "Le modèle visuel contient volontairement les erreurs. Ne pas le présenter comme une solution à recopier définitivement."] },
        "questions": [
          { "question": "Pourquoi finir à zéro ?", "answer": "Le dernier aller à 0/0 remplace le déplacement précédent." },
          { "question": "Une pile avec événement espace doit-elle démarrer au drapeau ?", "answer": "Non. Elle attend espace ; cela ne rend pas ses actions incorrectes." },
          { "question": "Pourquoi le score reste-t-il à un ?", "answer": "Chaque clic efface les points avant d’en ajouter un. Remettre à zéro appartient au départ." },
          { "question": "Pourquoi score > 3 ne gagne-t-il pas dès trois points ?", "answer": "3 > 3 est faux. Score > 2 devient vrai à 3 sans changer le gain d’un point." },
          { "question": "Que vérifier après la réparation ?", "answer": "Le test qui échouait, puis le redémarrage. Demander aussi l’explication de la cause." }
        ],
        "accompaniedActivity": { "moduleId": "scratch-debogage", "blockId": "guide", "label": "Observer et réparer l’ordre" },
        "independentActivity": { "moduleId": "scratch-debogage", "blockId": "autonomie", "label": "Réparer score et seuil" },
        "differentiation": ["CE2 : une panne à la fois ; pointer le bloc responsable et raconter avant/après. Consolider l’ordre avant le score si nécessaire.", "Plus autonome : annoncer piste et test avant de modifier ; transférer ensuite à une copie de son jeu.", "Aucun bonus obligatoire ni rythme imposé : reprendre seulement la notion qui bloque."],
        "commonErrors": [
          { "symptom": "Plusieurs modifications au hasard.", "helps": ["Demander attendu et observé.", "Pointer la dernière action qui change la valeur.", "Choisir une seule piste et prédire son effet.", "Restaurer la version initiale puis déplacer seulement les deux actions."] },
          { "symptom": "Le score échoue au redémarrage.", "helps": ["Faire un nouveau drapeau puis un clic.", "Chercher toutes les remises à zéro.", "Distinguer le départ et le clic.", "Garder la remise à zéro uniquement au drapeau, puis tester 0, 1, 2, 3 et un nouveau départ."] },
          { "symptom": "Le message arrive encore au quatrième point.", "helps": ["Lire le score lors du message.", "Lire le signe et le nombre comparé.", "Demander si 3 est strictement supérieur à 3.", "Comparer à 2 puis vérifier les clics 1, 2 et 3 depuis zéro."] }
        ],
        "notes": "Noter autonomie, modèle/indice ou aide dans les remarques existantes. Un jeu réparé sans explication, une visite ou des cases cochées ne valent pas acquisition automatique.",
        "quickConductor": ["Vérifier les bases utiles.", "Faire dire attendu et observé.", "Réparer l’ordre et tester deux départs.", "Résoudre score puis seuil selon les acquis.", "Expliquer la cause et choisir reprise ou transfert."],
        "references": [{ "title": "Scratch — idées et tutoriels", "url": "https://scratch.mit.edu/ideas" }]
      }
    },
    "scratch-projet-personnel": {
      "domainId": "jeux-video", "title": "Mon projet personnel", "type": "project", "theme": "fondations",
      "objective": "Concevoir un petit jeu avec des notions comprises, le tester et expliquer ses choix.",
      "tool": { "label": "Ouvrir Scratch", "url": "https://scratch.mit.edu/projects/editor/" },
      "scratchProjectId": "chat-cible",
      "skillIds": ["scratch.workspace", "scratch.events", "scratch.conditions", "scratch.variables", "scratch.game-rules", "scratch.debugging"],
      "prerequisiteSkills": [
        { "skillId": "scratch.workspace", "expectation": "Sélectionner le bon sprite et conserver une copie de son travail." },
        { "skillId": "scratch.events", "expectation": "Démarrer et piloter ses actions avec les événements choisis." },
        { "skillId": "scratch.conditions", "expectation": "Expliquer les conditions utilisées pour les règles ; reprendre Faire réagir le jeu si nécessaire." },
        { "skillId": "scratch.variables", "expectation": "Comprendre son score et sa remise à zéro ; reprendre Compter et mémoriser si nécessaire." },
        { "skillId": "scratch.game-rules", "expectation": "Construire une fin et un redémarrage ; reprendre Gagner, perdre et recommencer si nécessaire." },
        { "skillId": "scratch.debugging", "expectation": "Comparer attendu et observé, puis tester une modification à la fois ; reprendre Déboguer son jeu si nécessaire." }
      ],
      "blocks": [
        { "type": "lesson", "id": "exemple", "title": "1 — Un petit jeu à toi", "paragraphs": [
          "Choisis une idée que tu peux expliquer en une phrase. Ce projet ne demande pas d’utiliser tout Scratch : choisis seulement des notions que tu comprends. Tu peux demander une aide, puis reprendre une étape seul.",
          "Sauvegarde ton travail actuel avant de changer de projet. Tu peux ensuite choisir Fichier → Nouveau, créer une copie personnelle de ton mini-jeu ou ouvrir la base chat/cible proposée en haut. Cette base est facultative : elle fournit des personnages sans scripts, pas un jeu terminé. Avec ton compte, utilise Remix pour la base partagée ; sans compte, conserve un fichier depuis Fichier → Sauvegarder sur votre ordinateur. Si tu reprends ton mini-jeu, garde son original et travaille dans une copie sous un autre nom.",
          "Un plan possible, pas une solution à recopier : un personnage se déplace à droite et à gauche, touche une cible fixe pour gagner un point et retourne au départ. Trois points font gagner ; le drapeau remet tout au départ. Personnalise l’histoire et les règles, pas seulement le titre.",
          "Ne cherche pas tout de suite un grand monde, plusieurs niveaux ou de beaux dessins. Ta première version doit simplement se lancer, se jouer, se terminer et recommencer. Aucun compte ni partage public n’est obligatoire."
        ] },
        { "type": "callout", "id": "choix-poursuite", "title": "Option — une poursuite simple", "text": "Déplace un personnage vers une cible fixe, compte les contacts et choisis une victoire atteignable. Prérequis : touches, positions et contacts. Reprends Mon premier mini-jeu si ces règles sont encore difficiles. La cible aléatoire de certaines démonstrations n’est pas demandée.", "moduleLink": { "moduleId": "scratch-mini-jeu", "text": "Mon premier mini-jeu" } },
        { "type": "callout", "id": "choix-clics", "title": "Option — des clics chronométrés", "text": "Clique sur une cible pendant un temps limité, compte les points et termine la partie quand le temps est écoulé. Prérequis supplémentaire : chronomètre et condition qui bloque les points. Reprends Gérer le temps et la difficulté avant de choisir cette option si nécessaire.", "moduleLink": { "moduleId": "scratch-temps-difficulte", "text": "Gérer le temps et la difficulté" } },
        { "type": "callout", "id": "choix-labyrinthe", "title": "Option — un labyrinthe que tu connais déjà", "text": "Choisis cette option seulement si tu possèdes déjà un labyrinthe et sais expliquer ses déplacements, ses murs et le retour au départ. Travaille dans une copie. Ce projet n’enseigne pas de nouvelles règles de murs. Sinon, commence par la poursuite avec Mon premier mini-jeu ; un labyrinthe n’est pas nécessaire pour réussir ce projet.", "moduleLink": { "moduleId": "scratch-mini-jeu", "text": "Mon premier mini-jeu" } },
        { "type": "tasks", "id": "plan", "title": "2 — Prépare ton plan avant de coder", "intro": "Tu peux l’écrire dans un petit document ou le dire à quelqu’un. Quelques phrases suffisent.", "items": [
          { "id": "idee", "text": "Décris le but en une phrase et choisis un nom pour ton jeu.", "hint": "Par exemple : ramasser trois objets, ou obtenir des points en cliquant avant la fin du temps." },
          { "id": "commandes", "text": "Choisis les commandes : quelles touches ou quels clics ? Dis quelle action produit chacune." },
          { "id": "regles", "text": "Décris ce qui donne un point, ce qui termine la partie et ce que le drapeau remet à zéro. Une victoire OU une fin au temps suffit ; une défaite supplémentaire n’est pas obligatoire." },
          { "id": "limite", "text": "Choisis seulement une mécanique principale. Pour chaque notion encore inconnue, enlève-la du premier plan ou ouvre sa reprise avant de l’utiliser." }
        ] },
        { "type": "checklist", "id": "guide", "title": "3 — Construis une version minimale", "items": [
          { "id": "demarrer", "text": "Un drapeau qui remet le score, les positions et les autres valeurs utilisées au départ." },
          { "id": "jouer", "text": "Une commande qui permet vraiment d’agir, avec une cible ou un but accessible." },
          { "id": "compter", "text": "Un score lisible qui compte uniquement les actions prévues, sans points gratuits ni doublons." },
          { "id": "finir", "text": "Une fin atteignable et annoncée clairement. Après la fin, aucune action ne change encore le résultat." },
          { "id": "reprendre", "text": "Un nouveau drapeau permet de rejouer depuis l’état initial." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "4 — Construis, teste, explique", "intro": "Construis une étape puis teste-la, plutôt que tout programmer avant le premier essai. Il n’y a pas de solution complète à recopier ici ; les cours restent accessibles plus bas.", "items": [
          { "id": "copie", "text": "Crée ta version de travail et conserve un premier fichier ou remix sous un nom reconnaissable. Ne modifie pas l’original d’un autre projet." },
          { "id": "premier-test", "text": "Teste le départ et les commandes avant d’ajouter le score. Corrige ce qui bloque, une modification à la fois.", "hint": "Si rien ne démarre, vérifie le sprite sélectionné, le bon événement et les blocs accrochés." },
          { "id": "points-fin", "text": "Ajoute le score puis la fin prévue. Teste les points sans atteindre la fin, puis atteins-la. Vérifie que les actions ne modifient plus le résultat après la fin.", "hint": "Pour les clics au temps, protège l’ajout du point par une condition de temps : stop tout seul n’empêche pas un nouvel événement de clic." },
          { "id": "notice", "text": "Écris une petite notice : but, commandes, fin et redémarrage. Mets-la dans les instructions Scratch si tu utilises ton compte, ou dans un texte à côté du fichier." },
          { "id": "faire-jouer", "text": "Fais jouer quelqu’un avec cette notice. Si tu es seul, suis-la sans lire le code. Note un problème concret ou une amélioration utile." },
          { "id": "justifier", "text": "Montre une règle dans ton code, explique pourquoi elle fonctionne puis prédis l’effet d’un petit changement. Teste ce changement dans une copie.", "hint": "Change un seuil ou une durée déjà compris, pas plusieurs réglages à la fois. Une réussite avec modèle et une explication autonome sont deux observations différentes." },
          { "id": "sauver", "text": "Sauvegarde la version finale et rouvre le fichier ou le remix pour vérifier que tu retrouves ton travail. Un ancien téléchargement ne se met pas à jour tout seul." }
        ] },
        { "type": "checklist", "id": "verification", "title": "5 — Vérifie ton jeu", "items": [
          { "id": "notice-test", "text": "Les commandes et le but correspondent à la notice ; le jeu est jouable sans explication orale indispensable." },
          { "id": "sans-action", "text": "Sans action du joueur, pas de points injustifiés. Si le temps fait partie des règles, la partie peut se terminer sans clic." },
          { "id": "un-point", "text": "Une action prévue donne le bon nombre de points : un contact prolongé ne donne pas une victoire instantanée." },
          { "id": "fin-test", "text": "La fin annoncée est atteignable et le score reste inchangé après elle." },
          { "id": "deux-parties", "text": "Deux parties complètes fonctionnent, avec remise à zéro et retour au départ entre elles." },
          { "id": "preuve-test", "text": "Tu peux expliquer une règle, une difficulté rencontrée et le test qui a confirmé une correction." }
        ] },
        { "type": "details", "id": "bonus", "title": "Bonus facultatif — une seule extension", "blocks": [
          { "type": "lesson", "id": "extension", "title": "Améliorer sans casser la base", "paragraphs": [
            "Sauvegarde une copie de la version jouable. Choisis une seule extension dont tu maîtrises déjà les prérequis ; tu peux aussi simplement améliorer la notice ou choisir un décor de la bibliothèque Scratch.",
            "Si tu comprends les messages : ajoute un court échange entre deux personnages avec Coordonner plusieurs personnages. Si tu comprends les clones et les variables : ajoute des objets à ramasser avec Créer plusieurs personnages avec des clones.",
            "Si tu comprends définition et appels : organise une action répétée avec Créer ses propres blocs. Si tu comprends le chronomètre : compare deux difficultés avec Gérer le temps et la difficulté.",
            "Ces options ne sont pas une liste à compléter. Laisse de côté celles que tu ne comprends pas encore. Après l’extension, refais les tests de points, fin et redémarrage. Si elle casse la base, reviens à ta copie et cherche une seule cause."
          ] }
        ] },
        { "type": "lesson", "id": "suite", "title": "Et après ce projet ?", "paragraphs": ["Tu as un jeu que tu peux présenter, expliquer et améliorer. Ce n’est pas une validation automatique de toutes les compétences Scratch. Reprends les notions qui demandent encore de l’aide, ou choisis une nouvelle idée de même taille. Passer à un autre outil n’est pas obligatoire et aucun rythme n’est imposé."] }
      ],
      "masteryCriteria": ["Choisir des règles réalisables avec les notions comprises et expliquer son plan.", "Construire une version jouable avec score, fin et redémarrage, sans solution intégrale fournie.", "Tester les limites et deux parties, identifier une panne et justifier sa correction.", "Expliquer une règle et prédire un changement, en distinguant autonomie, modèle ou aide ; une décoration ou un score élevé ne prouve pas la compréhension."],
      "consolidation": [{ "moduleId": "scratch-mini-jeu", "blockId": "guide", "label": "Reprendre un jeu horizontal simple" }, { "moduleId": "scratch-pilotage", "blockId": "exemple", "label": "Revoir les déplacements au clavier" }, { "moduleId": "scratch-variables", "blockId": "exemple", "label": "Revoir le score et sa remise à zéro" }, { "moduleId": "scratch-fin-partie", "blockId": "exemple", "label": "Revoir fin et reprise" }, { "moduleId": "scratch-debogage", "blockId": "autonomie", "label": "Chercher une panne avec méthode" }],
      "bonusActivities": [
        { "moduleId": "scratch-projet-personnel", "blockId": "bonus", "label": "Choisir une seule extension dans une copie" },
        { "moduleId": "scratch-coordination", "blockId": "exemple", "label": "Revoir un échange par messages", "prerequisiteSkills": [{ "skillId": "scratch.messages", "expectation": "Expliquer émission, réception et ordre de l’échange." }] },
        { "moduleId": "scratch-clones", "blockId": "bonus", "label": "Revoir des copies à ramasser", "prerequisiteSkills": [{ "skillId": "scratch.clones", "expectation": "Distinguer modèle et copies et supprimer une copie." }, { "skillId": "scratch.variables", "expectation": "Ajouter un point et remettre score à zéro." }] },
        { "moduleId": "scratch-blocs-personnalises", "blockId": "guide", "label": "Revoir définition et appels", "prerequisiteSkills": [{ "skillId": "scratch.custom-blocks", "expectation": "Comprendre la définition réutilisée par chaque appel." }] },
        { "moduleId": "scratch-temps-difficulte", "blockId": "autonomie", "label": "Comparer deux difficultés", "prerequisiteSkills": [{ "skillId": "scratch.time", "expectation": "Comprendre le chronomètre, la limite et le nouveau départ." }] }
      ],
      "nextSteps": [],
      "teacherGuide": {
        "objective": "Accompagner un projet personnel limité, observer les choix et la compréhension sans imposer toutes les notions du parcours.",
        "entryDiagnosis": ["Demander une idée en une phrase et faire nommer les notions déjà comprises. Choisir une mécanique principale.", "Vérifier score, condition de fin et remise à zéro. Une réussite au mini-jeu avec aide ne prouve pas leur maîtrise autonome.", "Pour les clics, vérifier le chronomètre ; pour un labyrinthe, vérifier les murs déjà enseignés dans son projet. Sinon proposer la poursuite connue. Ni clones, messages ni Mes blocs obligatoires."],
        "preparation": ["Faire sauvegarder le travail actuel avant de choisir Fichier → Nouveau, une copie personnelle du mini-jeu ou la base chat/cible facultative. Conserver l’original du mini-jeu et travailler sous un autre nom ; la base fournit des sprites sans scripts. La démonstration complète n’est pas une solution à recopier.", "Préparer un endroit où noter le plan et la notice, plus une sauvegarde locale ou un remix personnel. Pas de compte élève obligatoire.", "Ne pas demander la base Labyrinthe à un débutant sans cours sur les murs. Utiliser un labyrinthe existant seulement si l’élève en explique déjà les règles."],
        "why": "Un projet limité permet de choisir, relier et expliquer des règles plutôt que reproduire toutes les fonctionnalités d’un modèle.",
        "discoverySpeech": ["« Ton idée doit tenir en une phrase. Quelle est la plus petite version qu’on peut vraiment jouer ? »", "« D’abord les règles qui fonctionnent, ensuite un bonus. »", "« Tu n’as pas besoin de montrer tous les blocs appris. Choisis ceux qui servent ton jeu. »", "« Montre-moi pourquoi cette règle fonctionne, pas seulement un jeu qui marche. »"],
        "example": { "target": { "moduleId": "scratch-projet-personnel", "blockId": "exemple", "label": "Un plan, pas une solution complète" }, "comments": ["Exemple de plan : déplacement horizontal, cible fixe, un point par contact avec séparation, victoire à trois et reset au drapeau. Réutiliser les cours si nécessaire ; ne pas livrer un programme final complet.", "Variante clics : score zéro, durée connue, réinitialisation du chrono, points protégés par chrono < duree, message de fin et reprise. Un nouvel événement clic peut repartir après stop tout : la condition reste nécessaire.", "Labyrinthe : seulement un projet déjà compris ; les murs et leur comportement ne doivent pas devenir un prérequis caché. Une fin atteignable suffit, pas obligation de victoire et défaite ni d’extension."] },
        "questions": [
          { "question": "Quelle est la première version jouable ?", "answer": "Une commande, un but, des points, une fin et une reprise. Les niveaux, décor travaillé et extensions attendent." },
          { "question": "Comment prouver qu’un point n’est pas donné plusieurs fois ?", "answer": "Tester une action isolée puis un contact prolongé. Le score doit correspondre à la règle annoncée, sans incréments gratuits." },
          { "question": "Que vérifier après la fin ?", "answer": "Que les actions ne changent plus le résultat, puis qu’un nouveau drapeau rétablit toutes les valeurs utiles." },
          { "question": "Faut-il utiliser des clones et des messages ?", "answer": "Non. Ils sont facultatifs, utiles seulement si l’élève en comprend le rôle et si son projet en a besoin." },
          { "question": "Comment distinguer copie et compréhension ?", "answer": "Demander d’expliquer une règle, prédire une modification puis la tester, en notant l’aide utilisée." }
        ],
        "accompaniedActivity": { "moduleId": "scratch-projet-personnel", "blockId": "guide", "label": "Réduire le plan à une version minimale" },
        "independentActivity": { "moduleId": "scratch-projet-personnel", "blockId": "autonomie", "label": "Construire, faire jouer et justifier" },
        "differentiation": ["CE2 : plan oral, une commande simple, un score et une fin ; base chat/cible ou reprise du mini-jeu si utile. Faire une étape puis tester.", "Élève autonome : choix des règles, notice compréhensible, tests de limites et explication sans modèle.", "Les reprises ne demandent pas de refaire tout le parcours. La réalisation peut prendre plusieurs moments, sans séance datée ni vitesse de groupe imposée."],
        "commonErrors": [
          { "symptom": "Le projet est trop grand pour démarrer.", "helps": ["Demander le but en une phrase.", "Choisir la seule action centrale du joueur.", "Séparer indispensable et bonus.", "Revenir à une commande, un score et une fin connus ; différer niveaux, clones ou autres extensions."] },
          { "symptom": "Le score change encore après la fin.", "helps": ["Faire agir le joueur après le message final.", "Repérer tous les endroits qui ajoutent un point.", "Comparer la règle de fin et la condition qui autorise ces ajouts.", "Pour les clics au temps, protéger chaque ajout avec chrono < duree puis tester pendant et après le message."] },
          { "symptom": "Une seule partie fonctionne.", "helps": ["Relancer et comparer au premier départ.", "Lister score, positions et valeurs utilisées.", "Repérer celles qui ne sont pas réinitialisées.", "Rétablir leurs valeurs au drapeau ; pour le temps remettre aussi le chronomètre à zéro, puis faire deux parties."] }
        ],
        "notes": "Observer séparément les compétences utilisées. Ne pas déclarer tous les acquis du parcours à partir d’un projet terminé. Utiliser les remarques existantes pour autonomie, modèle ou aide ; aucun nouveau dispositif de suivi. Décoration et performance du joueur ne remplacent pas l’explication.",
        "quickConductor": ["Choisir une idée limitée et vérifier ses prérequis.", "Énoncer commandes, score, fin et reprise.", "Construire puis tester chaque étape.", "Faire jouer et demander une prédiction justifiée.", "Vérifier deux parties, sauvegarder puis choisir reprise ou une extension."],
        "references": [{ "title": "Scratch — idées et tutoriels", "url": "https://scratch.mit.edu/ideas" }]
      }
    },
    "scratch-coordination": {
      "domainId": "jeux-video", "title": "Coordonner plusieurs personnages", "type": "lesson", "theme": "fondations",
      "objective": "Faire communiquer des personnages avec des messages pour organiser une courte scène.",
      "tool": { "label": "Ouvrir Scratch", "url": "https://scratch.mit.edu/projects/editor/" },
      "scratchProjectId": "carte-animee",
      "skillIds": ["scratch.messages", "scratch.events", "scratch.sequence"],
      "prerequisiteSkills": [
        { "skillId": "scratch.workspace", "expectation": "Sélectionner le bon personnage et conserver sa propre copie." },
        { "skillId": "scratch.events", "expectation": "Déclencher une pile au drapeau." },
        { "skillId": "scratch.sequence", "expectation": "Assembler dire pendant … secondes et comprendre l’ordre d’une pile : reprendre Déclencher et enchaîner des actions." }
      ],
      "blocks": [
        { "type": "lesson", "id": "preparer", "title": "1 — Deux personnages, deux programmes", "paragraphs": [
          "Sauvegarde ton travail précédent avant d’ouvrir le projet de départ Carte animée proposé au-dessus, puis garde ta copie de cette base. Pico et Tera sont prêts, sans code. Pour ce premier essai, laisse Giga de côté : il n’a aucun rôle à programmer.",
          "Sans la base partagée, après la sauvegarde, choisis Fichier → Nouveau : supprime le chat avec la corbeille de sa miniature, ajoute Pico et Tera depuis Choisir un sprite. Place Pico en x = -150, y = -50 et Tera en x = 150, y = -50 avec leurs champs sous la scène.",
          "Quand tu sélectionnes la miniature de Pico, tu écris pour Pico. Quand tu sélectionnes Tera, tu écris pour Tera. Une pile de Pico ne se déplace pas automatiquement dans Tera.",
          "Nous voulons ce dialogue : Pico dit Bonjour, Tera répond Salut, puis Pico termine. Deux piles au drapeau démarreraient en même temps : un message permettra de choisir quand Tera parle."
        ] },
        { "type": "callout", "id": "reprise", "title": "L’ordre des actions reste difficile ?", "text": "Reprends Déclencher et enchaîner des actions pour comparer le drapeau et les actions qui se suivent.", "moduleLink": { "moduleId": "scratch-actions", "text": "Déclencher et enchaîner des actions" } },
        { "type": "lesson", "id": "messages", "title": "2 — Envoyer un signal, pas une bulle", "paragraphs": [
          "Dans Événements (jaune), prends envoyer à tous … et attendre. Ouvre son menu, choisis Nouveau message et nomme-le reponse. C’est le nom d’un signal dans le programme : ce texte ne s’affiche pas dans une bulle.",
          "Dans Tera, prends quand je reçois … dans Événements et sélectionne le même message reponse. Les actions placées sous ce bloc se lancent quand le signal arrive, pas au drapeau.",
          "Envoyer à tous … et attendre lance les piles qui reçoivent ce message et attend qu’elles soient terminées avant de poursuivre. Envoyer à tous … sans attendre les lance aussi, mais l’expéditeur poursuit immédiatement.",
          "Un message est reçu par tous les personnages qui ont une pile correspondante. Ici, seul Tera reçoit reponse. Garde une réception courte, sans boucle infinie : sinon Pico attendrait sans fin."
        ] },
        { "type": "lesson", "id": "exemple", "title": "3 — Un dialogue dans le bon ordre",
          "shortSteps": [
            "Dans Pico, assemble le drapeau, Bonjour pendant 2 secondes, envoyer reponse et attendre, puis À bientôt pendant 2 secondes.",
            "Dans Tera, assemble quand je reçois reponse puis Salut pendant 2 secondes. Ne mets pas de drapeau sur cette réponse.",
            "Lance le drapeau : Bonjour → Salut → À bientôt. Relance : le même ordre doit recommencer."
          ],
          "paragraphs": ["Les deux piles du modèle appartiennent à deux personnages différents : sélectionne la bonne miniature avant de construire.", "Dans Apparence (violet), dire … pendant … secondes garde la bulle visible puis laisse passer à l’action suivante. Une attente fixe copiée sur Tera serait fragile si on changeait la durée du Bonjour ; le message part après sa fin.", "Modifie Bonjour pour durer 4 secondes : Tera doit toujours répondre après, sans changer de délai chez Tera."],
          "visualScript": { "caption": "Deux personnages — un signal reponse", "note": "Modèles à construire sur les deux sprites. Aucun éditeur interactif ici.", "stacks": [
            { "caption": "Pico — lance le dialogue", "blocks": [
              { "category": "events", "label": "Événements", "parts": ["quand le ", { "flag": true }, " est cliqué"], "explanation": "Pico démarre au drapeau." },
              { "category": "looks", "label": "Apparence", "parts": ["dire ", { "value": "Bonjour !" }, " pendant ", { "value": "2" }, " secondes"], "explanation": "Pico parle avant d’envoyer le signal." },
              { "category": "events", "label": "Événements", "parts": ["envoyer à tous ", { "choice": "reponse" }, " et attendre"], "explanation": "Tera reçoit le signal ; Pico attend la fin de sa pile." },
              { "category": "looks", "label": "Apparence", "parts": ["dire ", { "value": "À bientôt !" }, " pendant ", { "value": "2" }, " secondes"], "explanation": "Pico reprend après la réponse." }
            ] },
            { "caption": "Tera — répond au signal", "blocks": [
              { "category": "events", "label": "Événements", "parts": ["quand je reçois ", { "choice": "reponse" }], "explanation": "Cette pile démarre au message, pas au drapeau." },
              { "category": "looks", "label": "Apparence", "parts": ["dire ", { "value": "Salut !" }, " pendant ", { "value": "2" }, " secondes"], "explanation": "La pile termine après les deux secondes." }
            ] }
          ] },
          "code": "Pico :\nquand le drapeau vert est cliqué\n  dire Bonjour ! pendant 2 secondes\n  envoyer à tous reponse et attendre\n  dire À bientôt ! pendant 2 secondes\n\nTera :\nquand je reçois reponse\n  dire Salut ! pendant 2 secondes"
        },
        { "type": "tasks", "id": "guide", "title": "À toi — vérifier le passage de parole", "items": [
          { "id": "ordre", "text": "Lance le dialogue puis relance-le : vérifie Bonjour, Salut, À bientôt dans cet ordre.", "hint": "Le signal part après Bonjour et Pico attend que la réception finisse." },
          { "id": "duree", "text": "Fais durer Bonjour 4 secondes. Prédis quand Tera répond, puis teste.", "hint": "Tera attend le message, pas un délai fixé depuis le drapeau." },
          { "id": "comparer", "text": "Dans une copie, remplace envoyer et attendre par envoyer sans attendre. Observe les deux dernières bulles, puis restaure.", "hint": "Salut et À bientôt peuvent apparaître en même temps. Sans attendre ne veut pas dire sans envoyer." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "Sans modèle — un autre échange", "intro": "Sauvegarde ton premier dialogue pour le conserver. Ouvre ensuite une nouvelle copie de la base Carte animée sans code, ou choisis Fichier → Nouveau et ajoute Pico et Tera comme au début. Construis ce nouvel échange dans un projet distinct : ne supprime pas les piles de ton premier dialogue. Change l’histoire sans inventer de nouveau mécanisme.", "items": [
          { "id": "inverser", "text": "Fais commencer Tera, répondre Pico, puis terminer Tera. Essaie avant d’ouvrir l’indice.", "hint": "L’expéditeur porte la pile du drapeau ; l’autre porte quand je reçois. Garde le même message dans les deux menus et pas d’ancienne pile concurrente." },
          { "id": "textes", "text": "Écris trois nouvelles répliques et change une durée. Explique pourquoi la réponse arrive toujours au bon moment.", "hint": "Le signal est envoyé à la fin de la première réplique et l’expéditeur attend la fin du receveur." },
          { "id": "sauver", "text": "Teste deux lancements puis sauvegarde ta copie sur ton compte ou sur ton ordinateur." }
        ] },
        { "type": "details", "id": "bonus", "title": "Bonus facultatif — une scène suivante", "blocks": [
          { "type": "lesson", "id": "decors", "title": "Un décor appartient à la scène", "paragraphs": [
            "Un costume change l’apparence d’un personnage ; un arrière-plan change le décor de toute la scène. Sélectionne la miniature Scène en bas à droite, puis l’onglet Arrière-plans. Choisis deux décors dans la bibliothèque si nécessaire et renomme-les Depart et Suite dans le champ de nom de cet onglet.",
            "Sur la scène, ajoute une pile au drapeau avec basculer sur l’arrière-plan Depart, dans Apparence. Cette pile remet le décor au départ à chaque lancement.",
            "À la fin de la pile du personnage qui lance le dialogue, après sa dernière réplique, ajoute basculer sur l’arrière-plan Suite depuis Apparence. Ce changement vient après la réponse grâce à envoyer et attendre. Il n’envoie pas de message à lui seul.",
            "Teste le décor suivant puis relance : Depart doit revenir. Ce bonus n’est pas nécessaire pour poursuivre. Si tu ajoutes plus tard Giga à un message, toutes les réceptions de ce message démarrent ensemble : ce n’est pas un troisième tour de parole automatique."
          ] }
        ] }
      ],
      "masteryCriteria": ["Distinguer un message interne et une bulle de dialogue.", "Placer émission et réception sur les bons personnages avec le même signal.", "Prédire l’effet de envoyer avec ou sans attendre, puis tester.", "Inverser les rôles ou changer la durée sans bricoler un délai sur le receveur."],
      "consolidation": [{ "moduleId": "scratch-coordination", "blockId": "guide", "label": "Revoir le passage de parole" }, { "moduleId": "scratch-actions", "blockId": "guide", "label": "Revoir l’ordre d’une pile" }],
      "bonusActivities": [{ "moduleId": "scratch-coordination", "blockId": "bonus", "label": "Passer à un autre décor après le dialogue", "prerequisiteSkills": [{ "skillId": "scratch.messages", "expectation": "Comprendre quand la réception termine et savoir relancer le dialogue." }] }],
      "nextSteps": [{ "moduleId": "scratch-blocs-personnalises", "label": "Organiser ton code avec Mes blocs", "prerequisiteSkills": [{ "skillId": "scratch.sequence", "expectation": "Identifier des actions à réutiliser dans plusieurs endroits." }, { "skillId": "scratch.coordinates", "expectation": "Placer un sprite avec aller à x/y et comprendre ajouter à x ; sinon reprendre Piloter un personnage." }] }],
      "teacherGuide": {
        "objective": "Coordonner deux sprites par un signal, sans confondre synchronisation et délais copiés.",
        "entryDiagnosis": ["Faire sélectionner Pico puis Tera et vérifier à qui appartient une pile.", "Demander ce qui se passe avec deux drapeaux : les deux piles démarrent, elles ne s’attendent pas.", "Faire modifier la durée d’un dire pendant avant de présenter les messages."],
        "preparation": ["Faire sauvegarder le travail précédent avant d’ouvrir une copie de la base Carte animée sans scripts : Pico et Tera suffisent, Giga reste sans code.", "Sans base : après sauvegarde, choisir Fichier → Nouveau, ajouter les deux sprites et placer leurs centres en (-150, -50) et (150, -50).", "Pour l’inversion autonome, conserver le premier dialogue sauvegardé et construire la nouvelle version dans une nouvelle copie de la base sans code, ou un projet neuf avec Pico et Tera.", "La démonstration partagée montre un résultat plus riche, pas la solution du nouveau dialogue. Aucun compte ni publication obligatoire."],
        "why": "Les personnages ont des programmes séparés. Un signal relie leurs actions sans supposer une durée fixe chez le receveur.",
        "discoverySpeech": ["« Pico a fini de parler. Comment prévenir Tera maintenant, même si on allonge sa phrase ? »", "« Le message est un signal entre programmes, pas le texte de la bulle. »", "« Avec et attendre, Pico laisse Tera finir sa pile avant de continuer la sienne. »"],
        "example": { "target": { "moduleId": "scratch-coordination", "blockId": "exemple", "label": "Deux piles, deux personnages" }, "comments": ["Solution : Pico drapeau → Bonjour 2 s → envoyer reponse et attendre → À bientôt 2 s ; Tera réception reponse → Salut 2 s.", "Ordre attendu : Bonjour entre 0 et 2 s, Salut entre 2 et 4 s, À bientôt entre 4 et 6 s. Si Bonjour dure 4 s, la réponse commence à 4 s sans toucher Tera.", "Sans attendre, Salut et À bientôt commencent après Bonjour et peuvent se chevaucher. Avec plusieurs receveurs, leurs piles commencent ensemble et l’expéditeur attend leur fin à toutes."] },
        "questions": [
          { "question": "Le mot reponse apparaît-il dans une bulle ?", "answer": "Non : c’est le signal choisi dans les menus. Le bloc dire affiche la bulle." },
          { "question": "Si Bonjour dure plus longtemps, faut-il ajouter une attente dans Tera ?", "answer": "Non. Le signal est envoyé seulement après la première réplique." },
          { "question": "Deux personnages reçoivent le même signal : parlent-ils l’un après l’autre ?", "answer": "Non, leurs réceptions commencent ensemble. Un autre signal ou un enchaînement distinct serait nécessaire pour les faire parler à tour de rôle." },
          { "question": "Pourquoi une réception avec une boucle infinie bloquerait-elle Pico ?", "answer": "Envoyer et attendre attend sa fin ; cette pile ne se termine jamais." }
        ],
        "accompaniedActivity": { "moduleId": "scratch-coordination", "blockId": "guide", "label": "Observer et comparer les envois" },
        "independentActivity": { "moduleId": "scratch-coordination", "blockId": "autonomie", "label": "Inverser les rôles" },
        "differentiation": ["CE2 : deux sprites seulement, lire les trois répliques ensemble et montrer les miniatures avant chaque assemblage.", "Plus autonome : masquer le modèle, inverser les rôles puis expliquer sans nommer les blocs.", "Le décor et Giga restent facultatifs. Reprendre événements/séquences si nécessaire, sans imposer un nombre de séances."],
        "commonErrors": [
          { "symptom": "Tera ne répond pas.", "helps": ["Observer la miniature sélectionnée.", "Comparer les menus du message dans Pico et Tera.", "Vérifier que Salut est sous quand je reçois, pas détaché.", "Choisir reponse dans les deux menus puis tester un envoi."] },
          { "symptom": "Les dernières bulles se chevauchent.", "helps": ["Faire lire l’ordre attendu.", "Regarder le bloc d’envoi.", "Comparer envoyer à tous et envoyer à tous et attendre.", "Remplacer seulement l’envoi puis retester avec Bonjour à 4 secondes."] },
          { "symptom": "Le dialogue se mélange après inversion.", "helps": ["Tester un seul drapeau.", "Compter les anciennes piles de drapeau et de réception.", "Comparer avec une émission et une réception seulement.", "Sauvegarder le premier dialogue sans supprimer ses piles, puis construire les deux rôles inversés dans une nouvelle copie de la base sans code, ou un projet neuf avec Pico et Tera."] }
        ],
        "notes": "Distinguer reproduction et compréhension par le changement de durée et l’inversion. Noter autonomie, modèle ou aide dans les remarques existantes ; aucun acquis automatique. Les messages ne sont pas les communications réseau ni les données privées.",
        "quickConductor": ["Vérifier sélection et ordre d’une pile.", "Construire émission et réception.", "Tester avec une durée différente.", "Comparer avec/sans attendre puis inverser les rôles.", "Proposer reprise ou décor facultatif et sauvegarder."],
        "references": [{ "title": "Scratch — idées et tutoriels", "url": "https://scratch.mit.edu/ideas" }]
      }
    },
    "scratch-blocs-personnalises": {
      "domainId": "jeux-video", "title": "Créer ses propres blocs", "type": "lesson", "theme": "fondations",
      "objective": "Donner un nom à des actions réutilisables, puis les appeler sans recopier leur code.",
      "tool": { "label": "Ouvrir Scratch", "url": "https://scratch.mit.edu/projects/editor/" },
      "skillIds": ["scratch.custom-blocks", "scratch.sequence", "scratch.coordinates"],
      "prerequisiteSkills": [
        { "skillId": "scratch.sequence", "expectation": "Comprendre l’ordre des actions d’une pile." },
        { "skillId": "scratch.coordinates", "expectation": "Placer un personnage avec aller à x/y et le déplacer horizontalement." },
        { "skillId": "scratch.workspace", "expectation": "Sélectionner le sprite qui possède le code et conserver une copie." }
      ],
      "blocks": [
        { "type": "lesson", "id": "preparer", "title": "1 — Une action que tu répètes", "paragraphs": [
          "Sauvegarde ton travail précédent avant de choisir Fichier → Nouveau, puis garde le chat. Ce petit essai ne demande ni score ni jeu précédent. Sélectionne le chat : tout le code de ce module lui appartient.",
          "Nous allons nommer l’action qui remet le chat en x = -100, y = 0 : retour au départ. Ce nom décrit une action ; ce n’est pas une nouvelle variable ni un message.",
          "Un bloc personnalisé contient une recette. Créer sa définition ne la lance pas automatiquement au drapeau. Pour l’utiliser dans ton programme, place le bloc portant son nom dans une pile : c’est l’appel. Dans Scratch, Mes blocs appartient au sprite sélectionné, pas automatiquement à tous les sprites."
        ] },
        { "type": "lesson", "id": "creer", "title": "2 — Définir la recette", "paragraphs": [
          "Dans Mes blocs (rose), clique sur Créer un bloc. Écris retour au départ et valide avec OK. Ne coche pas Exécuter sans rafraîchissement d’écran : ce réglage n’est pas nécessaire ici.",
          "Un bloc définir retour au départ apparaît dans la zone de code. Accroche sous lui aller à x: -100 y: 0, trouvé dans Mouvement. Ne lui ajoute pas un drapeau : définir est le début de cette recette.",
          "Le bloc retour au départ est maintenant disponible dans Mes blocs. Chaque fois qu’il est appelé sur ce sprite, Scratch exécute les actions sous définir, puis reprend la pile qui l’a appelé."
        ] },
        { "type": "lesson", "id": "exemple", "title": "3 — Appeler la même recette deux fois",
          "shortSteps": ["Construis définir retour au départ → aller à (-100, 0).", "À côté, construis drapeau → retour au départ → ajouter 60 à x → attendre 1 seconde → retour au départ.", "Lance : le chat part à gauche, avance vers -40, puis revient à -100. La définition n’est écrite qu’une seule fois."],
          "paragraphs": ["Les deux piles sont dans le chat. Les blocs roses d’appel portent seulement retour au départ, pas définir.", "Ajouter 60 à x donne -40 depuis -100, sans dépendre de la direction du costume. La pause d’une seconde permet de voir le déplacement avant le second retour.", "Change seulement X dans la définition, de -100 à -150. Les deux appels utiliseront cette nouvelle valeur : le chat passera par -90 avant de revenir à -150. Remets ensuite -100."],
          "visualScript": { "caption": "Une définition, deux appels — dans le même sprite", "note": "La recette n’est pas une pile de drapeau. Les appels réutilisent sa définition.", "stacks": [
            { "caption": "La recette", "blocks": [
              { "category": "custom", "label": "Mes blocs", "parts": ["définir retour au départ"], "explanation": "Donner un nom aux actions, sans les lancer au drapeau." },
              { "category": "motion", "label": "Mouvement", "parts": ["aller à x: ", { "value": "-100" }, " y: ", { "value": "0" }], "explanation": "L’action de la recette." }
            ] },
            { "caption": "Les appels", "blocks": [
              { "category": "events", "label": "Événements", "parts": ["quand le ", { "flag": true }, " est cliqué"], "explanation": "Cette pile démarre réellement au drapeau." },
              { "category": "custom", "label": "Mes blocs", "parts": ["retour au départ"], "explanation": "Premier appel : placer au départ." },
              { "category": "motion", "label": "Mouvement", "parts": ["ajouter ", { "value": "60" }, " à x"], "explanation": "Modifier X après le premier appel." },
              { "category": "control", "label": "Contrôle", "parts": ["attendre ", { "value": "1" }, " secondes"], "explanation": "Voir la position intermédiaire." },
              { "category": "custom", "label": "Mes blocs", "parts": ["retour au départ"], "explanation": "Second appel, sans recopier aller à x/y." }
            ] }
          ] },
          "code": "Dans le chat — définition :\ndéfinir retour au départ\n  aller à x: -100 y: 0\n\nDans le chat — utilisation :\nquand le drapeau vert est cliqué\n  retour au départ\n  ajouter 60 à x\n  attendre 1 secondes\n  retour au départ"
        },
        { "type": "tasks", "id": "guide", "title": "À toi — une modification, deux effets", "items": [
          { "id": "tester", "text": "Teste les deux appels. Compte une seule définition et deux blocs retour au départ.", "hint": "Définir n’est pas un appel : il indique où la recette commence." },
          { "id": "changer", "text": "Dans la définition, change le départ à -150. Prédis la position intermédiaire puis teste. Remets -100.", "hint": "Le déplacement de +60 donne -90 depuis -150. Les deux appels reviennent à -150." },
          { "id": "expliquer", "text": "Explique pourquoi tu n’as changé qu’un seul bloc aller à x/y, alors que le retour est utilisé deux fois." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "Sans modèle — ta propre recette", "intro": "Réutilise uniquement des actions déjà connues.", "items": [
          { "id": "recette", "text": "Crée un bloc saluer qui dit ton message pendant 1 seconde puis ajoute 20 à x.", "hint": "Créer un bloc saluer, puis accrocher les deux actions sous définir saluer." },
          { "id": "appels", "text": "Dans une nouvelle pile, au clic sur la touche espace, appelle d’abord retour au départ, puis saluer deux fois. Chaque essai commence ainsi en (-100, 0). Laisse la pile du drapeau terminer avant de tester avec espace.", "hint": "Quand la touche espace est pressée se trouve dans Événements. Accroche retour au départ avant les deux appels saluer : depuis -100, +20 puis +20 mènent à -60." },
          { "id": "predire", "text": "Avant de changer la recette, prédis l’effet de +30 à la place de +20. Modifie une seule définition puis appuie sur espace : retour au départ remet le chat à -100 avant les deux appels.", "hint": "Depuis -100, deux déplacements de 30 mènent à -40. Les deux appels utilisent la recette modifiée." },
          { "id": "sauver", "text": "Sauvegarde. Si ton mini-jeu fonctionne déjà, tu peux remplacer ses deux retours au départ par des appels, sans changer ses règles.", "hint": "Cette reprise du jeu est facultative. Crée la définition dans Chat et garde score = 0 séparé au drapeau : un contact ne doit pas effacer les points." }
        ] },
        { "type": "details", "id": "bonus", "title": "Bonus facultatif — une distance au choix", "blocks": [
          { "type": "lesson", "id": "parametre", "title": "Un paramètre donne une valeur à chaque appel", "paragraphs": [
            "Quand les définitions et appels sont compris, crée un autre bloc nommé deplacer. Dans la fenêtre Créer un bloc, ajoute une entrée nombre ou texte, nomme-la distance, puis valide. Garde le réglage sans rafraîchissement décoché.",
            "Sous définir deplacer (distance), ajoute le bloc Mouvement ajouter … à x. Glisse le petit ovale distance du bloc définir dans sa case numérique. N’écris pas le mot distance au clavier : il faut utiliser le reporter du paramètre.",
            "Travaille dans une copie. Retire l’ancienne pile de drapeau de l’essai simple, mais garde définir retour au départ. Une seule pile de drapeau doit piloter ce test : deux piles qui déplacent le même chat en même temps mélangeraient les résultats.",
            "Dans une nouvelle pile de drapeau, appelle retour au départ puis deplacer (20), attendre 1 seconde, deplacer (50). Chaque appel fournit sa propre distance : depuis -100, tu passes à -80 puis -30.",
            "Distance n’est pas une variable globale à créer : c’est une entrée disponible dans cette définition. Ne mets pas retour au départ dans deplacer, sinon chaque appel effacerait le déplacement précédent. Essaie ensuite 10 et 30 et prédis la position finale."
          ],
          "visualScript": { "caption": "Dans le chat — une distance différente à chaque appel", "note": "Bonus : la case distance reçoit la valeur donnée à chaque appel. Les ovales du modèle représentent les valeurs, pas des menus.", "stacks": [
            { "caption": "La définition avec entrée", "blocks": [
              { "category": "custom", "label": "Mes blocs", "parts": ["définir deplacer ", { "value": "distance" }], "explanation": "Distance est l’entrée de cette recette." },
              { "category": "motion", "label": "Mouvement", "parts": ["ajouter ", { "value": "distance" }, " à x"], "explanation": "Glisser l’ovale distance de la définition dans cette case." }
            ] },
            { "caption": "Deux valeurs fournies", "blocks": [
              { "category": "events", "label": "Événements", "parts": ["quand le ", { "flag": true }, " est cliqué"], "explanation": "Départ de l’essai bonus." },
              { "category": "custom", "label": "Mes blocs", "parts": ["retour au départ"], "explanation": "Partir de -100 avant les deux déplacements." },
              { "category": "custom", "label": "Mes blocs", "parts": ["deplacer ", { "value": "20" }], "explanation": "Premier appel : +20." },
              { "category": "control", "label": "Contrôle", "parts": ["attendre ", { "value": "1" }, " secondes"], "explanation": "Observer -80." },
              { "category": "custom", "label": "Mes blocs", "parts": ["deplacer ", { "value": "50" }], "explanation": "Second appel : +50 depuis la position actuelle, donc -30." }
            ] }
          ] }, "code": "définir deplacer (distance)\n  ajouter (distance) à x\n\nquand le drapeau vert est cliqué\n  retour au départ\n  deplacer (20)\n  attendre 1 secondes\n  deplacer (50)" }
        ] },
        { "type": "lesson", "id": "suite", "title": "Et ensuite ?", "paragraphs": ["Garde une recette simple que tu sais expliquer. Les paramètres sont un bonus, pas une obligation pour poursuivre. Tu peux ensuite découvrir les clones si tu sais placer un sprite et répéter des actions. Sinon, reprends ces bases avant de continuer."] }
      ],
      "masteryCriteria": ["Distinguer définir une recette et appeler son bloc.", "Utiliser deux appels de la même définition sans recopier ses actions.", "Prédire l’effet d’une modification unique sur les deux appels.", "Expliquer à quel sprite appartient la définition et, si le bonus est travaillé, d’où vient la valeur du paramètre."],
      "consolidation": [{ "moduleId": "scratch-blocs-personnalises", "blockId": "guide", "label": "Comparer définition et appels" }, { "moduleId": "scratch-actions", "blockId": "exemple", "label": "Revoir l’ordre d’une pile" }],
      "bonusActivities": [{ "moduleId": "scratch-blocs-personnalises", "blockId": "bonus", "label": "Donner une distance différente à chaque appel", "prerequisiteSkills": [{ "skillId": "scratch.custom-blocks", "expectation": "Savoir créer une définition et utiliser ses appels avant d’ajouter une entrée." }] }],
      "nextSteps": [{ "moduleId": "scratch-clones", "label": "Créer des copies temporaires", "prerequisiteSkills": [{ "skillId": "scratch.loops", "expectation": "Comprendre une répétition finie ; sinon reprendre Répéter des actions." }, { "skillId": "scratch.coordinates", "expectation": "Placer un sprite puis ajouter à x ; sinon reprendre Piloter un personnage." }] }],
      "teacherGuide": {
        "objective": "Factoriser une action dans un bloc propre au sprite ; travailler définition et appels avant un paramètre facultatif.",
        "entryDiagnosis": ["Demander un placement en (-100, 0) puis ajouter 60 à x et prédire -40.", "Faire repérer une suite d’actions qu’on pourrait nommer.", "Vérifier le sprite sélectionné ; aucun score ni message n’est requis pour l’essai minimal."],
        "preparation": ["Faire sauvegarder le travail précédent avant Fichier → Nouveau, puis garder le chat pour cet essai indépendant.", "Préparer Mes blocs → Créer un bloc. Laisser le réglage sans rafraîchissement décoché.", "Pour le bonus, désactiver l’ancienne pile de drapeau de démonstration dans la copie : une seule pile de test doit repositionner le chat."],
        "why": "Une recette nommée évite de recopier et permet de changer une action une fois pour tous ses appels.",
        "discoverySpeech": ["« Écrire une recette ne fait pas le plat. L’appel demande d’exécuter la recette. »", "« Si je change le départ dans la définition, combien d’appels seront affectés ? »", "« Ce bloc appartient à ce personnage ; ce n’est pas un signal envoyé aux autres. »"],
        "example": { "target": { "moduleId": "scratch-blocs-personnalises", "blockId": "exemple", "label": "Définition et deux appels" }, "comments": ["Définition : retour au départ → aller à (-100, 0). Utilisation : drapeau → retour → ajouter 60 à x → attendre 1 s → retour.", "Positions attendues : -100, -40 pendant une seconde, puis -100. Si la définition passe à -150, on observe -150, -90, -150.", "Activité autonome : espace → retour au départ → saluer → saluer, avec le retour remis à (-100, 0). Deux déplacements de 20 terminent à -60 ; deux déplacements de 30 terminent à -40. Chaque pression repart de -100. Attendre la fin de la pile du drapeau avant espace pour éviter deux déplacements concurrents.", "Dans le mini-jeu, remplacer seulement les retours de position par un appel. Ne pas mettre score à 0 dans cette recette : le retour au contact ne doit pas supprimer les points."] },
        "questions": [
          { "question": "Définir lance-t-il la recette au drapeau ?", "answer": "Non. Il faut un appel sous un événement ou dans une pile exécutée." },
          { "question": "Deux appels demandent-ils deux définitions ?", "answer": "Non : une définition est réutilisée par les deux appels." },
          { "question": "Pourquoi Tera ne trouve-t-il pas automatiquement le bloc créé dans Pico ?", "answer": "Les blocs personnalisés appartiennent au sprite où ils sont définis. Un message est le mécanisme vu pour coordonner des sprites." },
          { "question": "Bonus : deplacer 20 puis deplacer 50 depuis -100 donne quoi ?", "answer": "-80 puis -30. Chaque appel fournit la valeur de distance ; on ne revient pas au départ entre eux." }
        ],
        "accompaniedActivity": { "moduleId": "scratch-blocs-personnalises", "blockId": "guide", "label": "Une modification, deux effets" },
        "independentActivity": { "moduleId": "scratch-blocs-personnalises", "blockId": "autonomie", "label": "Créer et réutiliser saluer" },
        "differentiation": ["CE2 : garder une recette avec une action et deux appels ; faire compter les appels et pointer la seule définition.", "Élève autonome : créer saluer sans modèle puis justifier les positions après deux appels.", "Paramètre facultatif seulement après distinction définition/appel. Aucun rythme imposé ni obligation de refactoriser tout le jeu."],
        "commonErrors": [
          { "symptom": "Le bloc est défini mais rien ne se passe.", "helps": ["Lancer le drapeau et observer.", "Chercher un appel sous un événement.", "Comparer le bloc définir et le petit bloc portant seulement le nom.", "Ajouter un appel dans la pile de drapeau, pas un autre définir."] },
          { "symptom": "Le déplacement bonus ne cumule pas.", "helps": ["Tester +20 puis +50 depuis -100.", "Regarder si deplacer contient un retour au départ.", "Comparer ajouter à x et aller à x/y.", "Garder seulement ajouter distance à x dans deplacer, et un retour avant les appels."] },
          { "symptom": "Le paramètre agit comme zéro.", "helps": ["Regarder la case du bloc ajouter à x.", "Vérifier si distance a été tapé comme texte.", "Comparer avec l’ovale distance disponible sur définir.", "Glisser cet ovale dans la case, donner 20 à l’appel et retester."] }
        ],
        "notes": "Observer une modification de définition et la prédiction des deux appels pour distinguer compréhension et copie. Consigner autonomie, modèle ou aide dans les remarques existantes sans nouveau dispositif. Ne pas déduire que le paramètre est acquis quand seuls les appels simples le sont.",
        "quickConductor": ["Vérifier position et ordre.", "Nommer une recette et distinguer l’appel.", "Tester deux appels et une modification unique.", "Créer saluer sans modèle.", "Choisir reprise, transfert au jeu ou paramètre facultatif puis sauvegarder."],
        "references": [{ "title": "Scratch — idées et tutoriels", "url": "https://scratch.mit.edu/ideas" }]
      }
    },
    "scratch-fin-partie": {
      "domainId": "jeux-video",
      "title": "Gagner, perdre et recommencer",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Choisir une condition de victoire et de défaite, arrêter la partie et la relancer proprement.",
      "tool": { "label": "Ouvrir Scratch", "url": "https://scratch.mit.edu/projects/editor/" },
      "scratchProjectId": "chat-cible",
      "scratchProjectContinuation": true,
      "skillIds": ["scratch.game-rules", "scratch.conditions", "scratch.variables"],
      "prerequisiteSkills": [
        { "skillId": "scratch.variables", "expectation": "Obtenir un point par contact et remettre score à 0 au drapeau : reprendre Compter et mémoriser." },
        { "skillId": "scratch.conditions", "expectation": "Placer une action dans le bon si et expliquer quand elle s’exécute." },
        { "skillId": "scratch.coordinates", "expectation": "Savoir que diminuer X déplace vers la gauche ; le départ est x = -100, y = 0." }
      ],
      "blocks": [
        { "type": "lesson", "id": "preparer", "title": "1 — Une partie avec des règles",
          "paragraphs": [
            "Reprends ton programme de Compter et mémoriser : Chat revient à (-100, 0) après un contact avec Cible et gagne 1 point. Cible reste à (80, 0). Teste deux contacts puis le drapeau : score doit faire 1, 2, puis 0.",
            "Sans ce programme, ouvre Compter et mémoriser et reconstruis son modèle. La base Scratch sans scripts ne suffit pas ici. Ne repars pas du jeu complet avec la souris aléatoire : ses règles sont différentes.",
            "Notre règle : à 3 points, tu gagnes. Si tu pars trop à gauche, avec X plus petit que -180, tu perds. Dans les deux cas, le jeu affiche un message et s’arrête. Le drapeau vert démarre une nouvelle partie."
          ] },
        { "type": "callout", "id": "reprise", "title": "Le compteur n’est pas prêt ?",
          "text": "Reprends Compter et mémoriser : un point par contact, puis remise à zéro au drapeau.",
          "moduleLink": { "moduleId": "scratch-variables", "text": "Compter et mémoriser" } },
        { "type": "lesson", "id": "comparaisons", "title": "2 — Comparer avant de décider",
          "paragraphs": [
            "Dans Opérateurs (vert), prends le bloc avec =. Il compare deux valeurs. Glisse le petit bloc ovale score depuis Variables dans sa première case et écris 3 dans la seconde. La question « score = 3 » est vraie à 3 points, fausse à 0, 1 ou 2.",
            "Pour la limite à gauche, prends le bloc < dans Opérateurs. Dans Mouvement (bleu), prends le bloc ovale abscisse x : il donne la position horizontale du personnage. Glisse-le dans la première case et écris -180 dans la seconde. « abscisse x < -180 » est vraie à -181 ou -190, mais fausse à -180 ou -100. Plus petit ne veut pas dire plus proche de zéro.",
            "Ces blocs verts posent des questions : ils ne modifient ni score ni X. Place chaque comparaison dans le trou du bloc si … alors. Dans les modèles, la question verte distingue la comparaison d’un capteur bleu clair.",
            "Dans Contrôle (orange), le bloc stop possède un menu : choisis tout. Il arrête les scripts de tous les personnages. Un simple message ne suffit pas à terminer une partie. Le drapeau relancera les scripts : garde mettre score à 0 et aller à (-100, 0) avant la boucle."
          ] },
        { "type": "lesson", "id": "exemple", "title": "3 — Deux tests pour terminer",
          "shortSteps": [
            "Garde la pile du chat déjà construite. Dans sa boucle, après le si de contact et avant attendre 0.03 secondes, ajoute les deux si du modèle.",
        "Dans chaque si, place le message dire … pendant 2 secondes puis stop tout. Les conditions vertes se construisent avec Opérateurs et les blocs ovales score / abscisse x.",
            "Teste 3 contacts pour gagner, puis relance et pars à gauche pour perdre. Après chaque fin, le drapeau doit remettre score à 0 et le chat au départ."
          ],
          "paragraphs": [
            "Le modèle montre seulement les deux ajouts à placer dans la boucle existante. Ne crée pas une deuxième boucle ni une deuxième pile de drapeau. Les tests de touches, le contact et son retour au départ restent en place.",
            "Teste la victoire après le contact : le troisième point est déjà ajouté. Le retour à (-100, 0) n’est pas une défaite puisque -100 est plus grand que -180. Choisis stop tout, pas stop ce script.",
            "Avec un point par contact, score passe exactement par 3. Si tu avais essayé 2 points par contact, remets 1 avant ce modèle : 0, 2, 4 ne rencontre jamais 3. On adaptera les règles autonomes en gardant des valeurs atteignables."
          ],
          "visualScript": {
            "caption": "Ajouts dans la boucle du chat — après le contact", "note": "Deux blocs si à insérer, pas une nouvelle pile. Les actions indentées appartiennent à leur si.",
            "blocks": [
              { "category": "control", "label": "Contrôle + Opérateurs", "parts": ["si ", { "condition": [{ "value": "score" }, " = ", { "value": "3" }], "operator": true }, " alors"], "explanation": "À trois points, on annonce la victoire puis on arrête tout.",
                "children": [
                  { "category": "looks", "label": "Apparence", "parts": ["dire ", { "value": "Gagné !" }, " pendant ", { "value": "2" }, " secondes"] },
                  { "category": "control", "label": "Contrôle", "parts": ["stop ", { "choice": "tout" }] }
                ] },
              { "category": "control", "label": "Contrôle + Opérateurs", "parts": ["si ", { "condition": [{ "value": "abscisse x" }, " < ", { "value": "-180" }], "operator": true }, " alors"], "explanation": "À gauche de la limite, on annonce la défaite puis on arrête tout.",
                "children": [
                  { "category": "looks", "label": "Apparence", "parts": ["dire ", { "value": "Perdu !" }, " pendant ", { "value": "2" }, " secondes"] },
                  { "category": "control", "label": "Contrôle", "parts": ["stop ", { "choice": "tout" }] }
                ] }
            ]
          },
          "code": "À insérer dans la boucle existante, après le si de contact :\nsi <score = 3> alors\n  dire Gagné ! pendant 2 secondes\n  stop tout\nsi <abscisse x < -180> alors\n  dire Perdu ! pendant 2 secondes\n  stop tout"
        },
        { "type": "tasks", "id": "guide", "title": "À toi — tester les deux fins", "intro": "Une règle est prête seulement si tu l’as testée.", "items": [
          { "id": "victoire", "text": "Touche Cible trois fois. Vérifie le message Gagné et l’arrêt des déplacements après le message.", "hint": "Le test score = 3 est dans la boucle après le contact ; stop tout est dans le si." },
          { "id": "defaite", "text": "Relance. Sans toucher Cible, maintiens gauche jusqu’à dépasser la limite. Vérifie Perdu et l’arrêt.", "hint": "À x = -180, le test est encore faux ; il devient vrai juste après, vers la gauche." },
          { "id": "recommencer", "text": "Relance après chaque fin : vérifie score = 0 et Chat en (-100, 0). Sauvegarde ta version.", "hint": "La remise à zéro et la position de départ restent avant la boucle de drapeau." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "Sans modèle — change une règle", "intro": "Essaie avant d’ouvrir l’indice. Une modification à la fois.", "items": [
          { "id": "seuil", "text": "Demande cinq contacts pour gagner. Prédis quand la partie s’arrêtera puis vérifie.", "hint": "Garde 1 point par contact et compare score à 5." },
          { "id": "limite", "text": "Fais perdre plus près du départ : choisis une limite entre -180 et -100. Explique pourquoi le départ reste autorisé.", "hint": "Par exemple -150 : au départ -100 < -150 est faux, mais -151 < -150 est vrai." },
          { "id": "preuve", "text": "Sans nommer les blocs, explique ce qui fait gagner, perdre et recommencer. Teste deux nouvelles parties.", "hint": "Décris les événements du jeu et montre ensuite où ton programme applique chaque règle." }
        ] },
        { "type": "tasks", "id": "bonus", "title": "Bonus — une règle impossible ?", "intro": "Seulement si les deux fins et le redémarrage sont compris. Travaille dans une copie.", "items": [
          { "id": "saut", "text": "Avec victoire à 3, fais gagner 2 points par contact. Prédis le problème, teste puis corrige sans nouvelle propriété.", "hint": "Depuis 0, le score fait 2, 4, 6 : jamais 3. Remets un point par contact ou choisis une victoire à 4." }
        ] }
      ],
      "masteryCriteria": [
        "Expliquer la différence entre compter un contact et tester une fin de partie.",
        "Prédire le résultat de score = 3 et de abscisse x < -180, notamment à la limite.",
        "Tester victoire, défaite et deux redémarrages avec score et position réinitialisés.",
        "Modifier une règle atteignable et expliquer son effet, sans recopier seulement le modèle."
      ],
      "consolidation": [{ "moduleId": "scratch-fin-partie", "blockId": "guide", "label": "Retester les fins et le nouveau départ" }, { "moduleId": "scratch-variables", "blockId": "guide", "label": "Revoir les points et la remise à zéro" }],
      "bonusActivities": [{ "moduleId": "scratch-fin-partie", "blockId": "bonus", "label": "Comprendre un seuil impossible" }],
      "nextSteps": [{ "moduleId": "scratch-mini-jeu", "label": "Assembler ton premier mini-jeu", "prerequisiteSkills": [{ "skillId": "scratch.game-rules", "expectation": "Savoir tester les deux fins et recommencer ; sinon reprendre les tests guidés." }] }],
      "teacherGuide": {
        "objective": "Faire décider et tester une victoire, une défaite et un redémarrage, sans ajouter de vies ni de chronomètre.",
        "entryDiagnosis": ["Demander deux contacts puis un redémarrage : score attendu 1, 2, 0.", "Faire montrer ce qui est au départ, dans la boucle et dans le si de contact.", "Demander vers où va le chat quand X diminue. Reprendre le prérequis fragile avant les comparaisons."],
        "preparation": ["Ouvrir une copie du programme Score, avec Cible immobile à (80, 0), Chat au départ (-100, 0) et 1 point par contact.", "Afficher le compteur score. Préparer Opérateurs (= et <), le bloc ovale abscisse x (position horizontale du personnage) et stop tout.", "Ne pas remplacer le modèle par le jeu complet partagé : il comporte des règles supplémentaires. Mettre Scratch en français via Settings → Language si nécessaire."],
        "why": "Une fin de partie est une règle testée par le programme ; un message seul ne bloque pas les actions.",
        "discoverySpeech": ["« Le compteur sait combien tu as touché de cibles. Maintenant, à quel nombre veux-tu gagner ? »", "« Le bloc vert pose une question. Il ne donne pas de point et ne déplace pas le chat. »", "« Annoncer Gagné, ce n’est pas encore arrêter. Que se passe-t-il si je continue à appuyer ? »", "« Le drapeau est une nouvelle partie : qu’est-ce qu’il faut remettre au départ ? »"],
        "example": { "target": { "moduleId": "scratch-fin-partie", "blockId": "exemple", "label": "Deux tests de fin" }, "comments": ["Insérer les deux si dans la boucle existante, après le contact ; ne pas ajouter de boucle concurrente.", "Victoire : score = 3, dire Gagné 2 secondes, stop tout. Défaite : abscisse x < -180, dire Perdu 2 secondes, stop tout. Abscisse x est le nom du bloc Scratch qui donne la position horizontale.", "À -180, le test strict est faux. Avec un pas de -3 depuis -100, on passe de -178 à -181 : la défaite est réellement atteignable.", "Le contact remet Chat à -100 avant le test de victoire ; ce départ ne déclenche pas la défaite. Le drapeau remet score à 0 et la position au départ."] },
        "questions": [
          { "question": "À -180 exactement, a-t-on perdu ?", "answer": "Non : < veut dire strictement plus petit. À -181 oui ; à -100 non." },
          { "question": "Pourquoi garder un point par contact pour gagner à 3 ?", "answer": "Le compteur doit atteindre 3. En ajoutant 2 depuis 0, il passe de 2 à 4 et ne sera jamais égal à 3." },
          { "question": "Dire Gagné suffit-il à arrêter ?", "answer": "Non. Après le message, stop tout arrête les scripts. Sans lui, la boucle continue." },
          { "question": "Comment savoir que recommencer fonctionne ?", "answer": "Après victoire et défaite, relancer puis vérifier position initiale, score zéro et déplacements possibles." }
        ],
        "accompaniedActivity": { "moduleId": "scratch-fin-partie", "blockId": "guide", "label": "Tester les deux fins" },
        "independentActivity": { "moduleId": "scratch-fin-partie", "blockId": "autonomie", "label": "Changer une règle et expliquer" },
        "differentiation": ["CE2 : faire gagner à 3, puis traiter la limite gauche séparément ; lire les valeurs négatives avec une ligne de nombres si nécessaire.", "Ne pas exiger le bonus pour accéder au projet. Fournir le modèle de la base si sa reconstruction bloque, puis distinguer cette aide de la compréhension des règles de fin.", "Pour les plus autonomes : demander une prédiction à -180 et -181 puis masquer le modèle pour changer le seuil."],
        "commonErrors": [
          { "symptom": "Gagné s’affiche mais le jeu continue.", "helps": ["Attendre la fin du message puis appuyer à droite.", "Chercher stop dans le si de victoire.", "Comparer son menu : tout ou ce script.", "Ajouter stop tout après le message, dans le si, puis tester."] },
          { "symptom": "Le jeu perd immédiatement.", "helps": ["Observer X au départ.", "Vérifier l’ordre des deux valeurs dans <.", "Comparer abscisse x < -180 avec -180 < abscisse x : ce n’est pas la même question.", "Glisser l’ovale abscisse x à gauche, écrire -180 à droite et garder le départ à -100 avant la boucle."] },
          { "symptom": "La nouvelle partie garde les points.", "helps": ["Relancer après une victoire et lire score.", "Repérer mettre score à 0.", "Comparer la remise à zéro avant la boucle avec l’ajout au contact.", "Replacer la remise à zéro sous le drapeau puis retester après les deux fins."] }
        ],
        "notes": "Distinguer réussite autonome, avec modèle et avec aide dans les remarques existantes. Une reproduction correcte ne prouve pas la compréhension : demander une prédiction et une modification. Aucun acquis automatique ni rythme imposé.",
        "quickConductor": ["Vérifier score et retour au départ.", "Faire verbaliser gagner, perdre, recommencer.", "Construire une comparaison puis placer les tests.", "Tester victoire, défaite et nouvelle partie.", "Choisir consolidation, modification autonome ou projet selon les acquis."],
        "references": [{ "title": "Scratch — idées et tutoriels", "url": "https://scratch.mit.edu/ideas" }]
      }
    },
    "scratch-mini-jeu": {
      "domainId": "jeux-video", "title": "Mon premier mini-jeu", "type": "project", "theme": "fondations",
      "objective": "Assembler et expliquer un petit jeu jouable avec déplacement, contact, score et fin de partie.",
      "tool": { "label": "Ouvrir Scratch", "url": "https://scratch.mit.edu/projects/editor/" },
      "scratchProjectId": "chat-cible", "scratchProjectContinuation": true,
      "skillIds": ["scratch.keyboard", "scratch.coordinates", "scratch.loops", "scratch.contacts", "scratch.variables", "scratch.game-rules"],
      "prerequisiteSkills": [
        { "skillId": "scratch.keyboard", "expectation": "Déplacer le personnage à droite et à gauche." },
        { "skillId": "scratch.contacts", "expectation": "Déclencher une action au contact et séparer les personnages ensuite." },
        { "skillId": "scratch.variables", "expectation": "Compter les contacts et remettre score à 0 au départ." },
        { "skillId": "scratch.game-rules", "expectation": "Tester victoire, défaite et redémarrage : reprendre Gagner, perdre et recommencer si nécessaire." }
      ],
      "blocks": [
        { "type": "lesson", "id": "exemple", "title": "1 — Choisis ton petit jeu", "paragraphs": [
          "Reprends une copie de ton programme Gagner, perdre et recommencer. Tu peux garder le chat et la souris : aucun nouveau dessin n’est obligatoire. Si tu n’as plus ta copie, reconstruis les modèles des modules Score et Fin de partie ; ils restent accessibles.",
          "Choisis une histoire en une phrase : par exemple, le chat rapporte trois objets sans aller trop loin à gauche. Ce n’est qu’une idée : tu peux inventer la tienne avec les mêmes règles.",
          "Écris ou dis tes quatre règles avant de coder : quelles touches déplacent, ce qui donne un point, ce qui fait gagner, ce qui fait perdre. Le drapeau recommence la partie.",
            "Pour ce premier projet, garde le déplacement horizontal, la cible fixe et un point par contact. Choisis un seuil entier de 3 à 5 (3, 4 ou 5) et une limite gauche entre -180 et -120. Le départ reste (-100, 0) et la cible (80, 0) : les règles sont atteignables."
        ] },
        { "type": "callout", "id": "reprise", "title": "Une fin de partie reste difficile ?", "text": "Reprends Gagner, perdre et recommencer pour tester les règles avant de les personnaliser.", "moduleLink": { "moduleId": "scratch-fin-partie", "text": "Gagner, perdre et recommencer" } },
        { "type": "checklist", "id": "guide", "title": "2 — Les éléments de ton jeu", "items": [
          { "id": "joueur", "text": "Un personnage contrôlé avec droite et gauche." },
          { "id": "contact", "text": "Une cible fixe : un contact donne un point et le personnage retourne au départ." },
          { "id": "compteur", "text": "Un score visible, sans point gagné loin de la cible." },
          { "id": "victoire", "text": "Une victoire atteignable qui affiche un message puis arrête tout." },
          { "id": "defaite", "text": "Une défaite testable en allant trop à gauche, avec message puis arrêt." },
          { "id": "reset", "text": "Le drapeau remet score à 0 et le personnage au départ pour rejouer." }
        ] },
        { "type": "tasks", "id": "autonomie", "title": "3 — Personnalise et fais jouer", "intro": "Essaie sans rouvrir les modèles ; une aide reste possible. Tu n’as pas besoin de nouvelles notions.", "items": [
          { "id": "regles", "text": "Choisis d’abord un seuil entier de victoire : 3, 4 ou 5 contacts. Prédis, change seulement ce seuil et teste une victoire. Ensuite choisis une limite gauche entre -180 et -120, prédis, modifie seulement la limite et teste une défaite après un nouveau drapeau.", "hint": "Garde un point par contact. Teste chaque changement séparément : le départ -100 doit rester à droite de la limite." },
          { "id": "messages", "text": "Écris tes propres messages de victoire et de défaite, adaptés à ton histoire.", "hint": "Change seulement le texte de dire … pendant 2 secondes. Garde stop tout après chaque message." },
          { "id": "consigne", "text": "Ajoute les commandes et les règles dans les instructions de la page Scratch, ou dans un petit texte conservé à côté du fichier.", "hint": "Écris comment bouger, gagner, perdre et recommencer. La publication n’est pas obligatoire." },
          { "id": "testeur", "text": "Fais jouer quelqu’un avec tes instructions. Si tu es seul, teste le jeu en suivant ces instructions sans lire le code.", "hint": "Teste un joueur qui gagne et un joueur qui perd, pas seulement un chemin heureux." },
          { "id": "sauver", "text": "Conserve ta version : sauvegarde sur ton propre compte ou télécharge un nouveau .sb3.", "hint": "Ne modifie pas le compte du professeur. Un ancien téléchargement ne se met pas à jour." }
        ] },
        { "type": "tasks", "id": "verification", "title": "Vérifie ton travail", "intro": "Les cases sont des repères, pas une validation de compétence.", "items": [
          { "id": "sans-contact", "text": "Ne bouge pas : aucun point ne s’ajoute et la partie n’est pas perdue au départ.", "hint": "Le départ est hors du contact et du côté autorisé de la limite." },
          { "id": "gagner", "text": "Gagne avec le nombre annoncé de contacts. Après le message, les touches ne déplacent plus le personnage." },
          { "id": "perdre", "text": "Relance puis perds en passant la limite. Après le message, les touches ne déplacent plus le personnage." },
          { "id": "rejouer", "text": "Relance après chaque fin. Vérifie deux parties avec score zéro et position initiale." },
          { "id": "comprendre", "text": "Sans regarder le modèle, montre les règles dans ton code et explique ce qui changerait avec un autre seuil." }
        ] },
        { "type": "tasks", "id": "bonus", "title": "Bonus facultatif — ton univers", "intro": "Seulement quand les règles fonctionnent. Sauvegarde d’abord une copie.", "items": [
          { "id": "decor", "text": "Choisis un autre décor dans la bibliothèque Scratch et vérifie que les personnages restent visibles.", "hint": "Clique sur Choisir un arrière-plan en bas à droite. Un décor ne change pas les règles de contact." },
          { "id": "costume", "text": "Si tu sais déjà changer de costume, personnalise le personnage puis reteste le départ et le contact.", "hint": "Reprends les essais de costumes dans Répéter des actions si nécessaire. La taille du dessin peut changer le moment du contact." }
        ] },
        { "type": "lesson", "id": "suite", "title": "Un premier jalon, pas une course", "paragraphs": [
          "Un jeu court qui fonctionne et que tu sais expliquer vaut mieux qu’un grand jeu recopié. Si une règle reste fragile, reprends le module correspondant. Pour explorer une autre façon d’organiser des actions, ouvre Coordonner plusieurs personnages : ses prérequis sont les événements et l’ordre d’une pile, pas un jeu validé automatiquement."
        ] }
      ],
      "masteryCriteria": ["Expliquer les commandes et les règles du jeu sans lire une solution.", "Montrer un point par contact, sans gain spontané ni répétition du même contact.", "Faire tester deux fins atteignables et le redémarrage après chacune.", "Modifier une règle et prédire son effet ; préciser les aides utilisées plutôt que confondre copie et compréhension."],
      "consolidation": [
        { "moduleId": "scratch-mini-jeu", "blockId": "verification", "label": "Retester une partie complète" },
        { "moduleId": "scratch-fin-partie", "blockId": "guide", "label": "Revoir les deux fins et le redémarrage" },
        { "moduleId": "scratch-variables", "blockId": "guide", "label": "Revoir le score" },
        { "moduleId": "scratch-reactions", "blockId": "guide", "label": "Revoir le contact" }
      ],
      "bonusActivities": [{ "moduleId": "scratch-mini-jeu", "blockId": "bonus", "label": "Personnaliser sans changer les règles", "prerequisiteSkills": [{ "skillId": "scratch.game-rules", "expectation": "Avoir testé les deux fins et le nouveau départ." }] }],
      "nextSteps": [{ "moduleId": "scratch-coordination", "label": "Explorer les messages entre personnages", "prerequisiteSkills": [{ "skillId": "scratch.events", "expectation": "Savoir déclencher une pile : reprendre Déclencher et enchaîner des actions si nécessaire." }, { "skillId": "scratch.sequence", "expectation": "Comprendre l’ordre des actions et leur durée." }] }],
      "teacherGuide": {
        "objective": "Observer le transfert des notions dans un petit jeu personnel : aucune notion nouvelle obligatoire ni vitesse imposée.",
        "entryDiagnosis": ["Demander une victoire, une défaite et un redémarrage sur le programme précédent.", "Faire expliquer un point par contact et la place de mettre score à 0.", "Si une règle est fragile, reprendre son module ; l’accès au projet n’atteste pas un acquis."],
        "preparation": ["Garder une copie du programme précédent, pas une base sans code ni le jeu complet aléatoire.", "Prévoir les modèles Score et Fin de partie comme aides, sans les imposer à l’élève autonome.", "Mettre Scratch en français. Compte élève facultatif ; sauvegarde locale possible. Aucun nom d’élève ni fichier privé à publier."],
        "why": "Un projet jalon montre si l’élève peut combiner des notions et expliquer une règle au-delà d’une reproduction bloc par bloc.",
        "discoverySpeech": ["« Tu connais les pièces. Choisis maintenant les règles d’un jeu court que quelqu’un d’autre pourra comprendre. »", "« Tu peux garder les dessins. Ce qui compte ici, c’est un jeu qui fonctionne et que tu sais expliquer. »", "« Avant d’essayer, qu’attends-tu quand je touche trois fois la cible ? Et quand je pars trop à gauche ? »", "« Tu peux demander une aide. On distinguera ce que tu sais refaire seul et ce qui a encore besoin d’un modèle. »"],
        "example": { "target": { "moduleId": "scratch-mini-jeu", "blockId": "exemple", "label": "Choisir des règles atteignables" }, "comments": ["L’histoire proposée n’est pas une solution à recopier ; garder un terrain horizontal simple.", "Le socle attendu vient des modules précédents : drapeau → score 0 et départ ; boucle → touches, contact avec point et séparation, tests de fin.", "Un seuil entier 3, 4 ou 5 est atteignable avec un point par contact. Changer et tester d’abord ce seuil, puis la limite de défaite. Une limite entre -180 et -120 ne condamne pas le départ -100."] },
        "questions": [
          { "question": "Pourquoi ne pas faire un point à chaque tour de boucle ?", "answer": "Les points seraient gagnés sans action du joueur. L’ajout doit rester dans le si de contact." },
          { "question": "Comment un autre joueur sait-il qu’il peut recommencer ?", "answer": "Les instructions disent d’utiliser le drapeau ; ce drapeau réinitialise score et position." },
          { "question": "Changer le décor prouve-t-il que le jeu est compris ?", "answer": "Non. Demander une explication, une prédiction et une modification de règle, puis tester." },
          { "question": "Quel changement peux-tu faire sans recopier tout le modèle ?", "answer": "Par exemple passer la victoire de 3 à 5, prévoir cinq contacts, modifier la comparaison puis vérifier." }
        ],
        "accompaniedActivity": { "moduleId": "scratch-mini-jeu", "blockId": "guide", "label": "Vérifier le socle du jeu" },
        "independentActivity": { "moduleId": "scratch-mini-jeu", "blockId": "autonomie", "label": "Choisir, modifier, faire jouer" },
        "differentiation": ["CE2 : faire choisir une règle à la fois ; accepter une formulation orale et écrire les instructions avec l’élève si la lecture limite le travail.", "Pour les plus grands : masquer les modèles et demander au testeur de suivre les instructions, puis justifier une correction.", "Pas de nouvelle fonctionnalité pour aller vite : proposer le bonus visuel seulement après les tests. La publication n’est jamais obligatoire."],
        "commonErrors": [
          { "symptom": "L’élève personnalise mais ne peut expliquer ses règles.", "helps": ["Lui faire jouer une partie.", "Demander ce qui provoque un point puis une victoire.", "Faire retrouver seulement le si concerné, pas toute la pile.", "Faire changer un seuil et prédire avant de tester."] },
          { "symptom": "La défaite arrive dès le départ.", "helps": ["Lire la position et la limite choisies.", "Repérer l’ordre dans la comparaison <.", "Vérifier que -100 est plus grand que la limite entre -180 et -120.", "Corriger une seule valeur ou l’ordre des entrées puis retester."] },
          { "symptom": "Le jeu n’est pas rejouable.", "helps": ["Faire une deuxième partie après chacune des fins.", "Observer score et position au drapeau.", "Comparer avec les deux réinitialisations avant la boucle.", "Restaurer le départ et score zéro puis tester deux nouvelles parties."] }
        ],
        "notes": "Projet jalon : observer transfert et explication. Relever réussite autonome, avec modèle ou avec aide dans les remarques existantes ; ne pas créer de nouveau suivi ni valider automatiquement les skills. Les cases, le score et le partage du projet ne certifient rien.",
        "quickConductor": ["Vérifier le jeu précédent.", "Faire choisir une histoire et quatre règles.", "Personnaliser et tester un seuil entier, puis modifier et tester séparément la limite ; personnaliser les messages.", "Faire tester victoire, défaite et deux départs.", "Demander une prédiction et une explication, puis choisir reprise ou bonus."],
        "references": [{ "title": "Scratch — idées et tutoriels", "url": "https://scratch.mit.edu/ideas" }]
      }
    },
    "scratch-variables": {
      "scratchProjectId": "chat-cible",
      "scratchProjectContinuation": true,
      "domainId": "jeux-video",
      "title": "Compter et mémoriser",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Créer un score, l’augmenter lors d’un contact et le remettre à zéro au départ.",
      "tool": {
        "label": "Ouvrir Scratch",
        "url": "https://scratch.mit.edu/projects/editor/"
      },
      "skillIds": [
        "scratch.variables"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "scratch.contacts",
          "expectation": "Faire réagir le chat au contact de Cible : reprendre Faire réagir le jeu."
        },
        {
          "skillId": "scratch.conditions",
          "expectation": "Comprendre les actions à l’intérieur d’un si."
        },
        {
          "skillId": "scratch.loops",
          "expectation": "Repérer ce qui se répète et ce qui se fait une fois au départ."
        }
      ],
      "blocks": [
        {
          "type": "lesson",
          "id": "preparer",
          "title": "1 — Retrouve ou reconstruis la base",
          "paragraphs": [
        "Ouvre une copie de ton .sb3 de Faire réagir le jeu, sans créer un projet vide : nous prolongeons le programme. Si tu n’as pas ce fichier, ouvre Faire réagir le jeu avec le lien ci-dessous pour construire les sprites et la pile, tester les contacts et sauvegarder. Reviens ensuite dans Compter et mémoriser avec cette base prête avant d’ajouter le score.",
            "La base attendue : un chat à gauche, un sprite nommé exactement Cible à x = 80, y = 0, une boucle de déplacement droite/gauche et un retour à x = -100, y = 0 au contact.",
            "Si tu avais remplacé une touche ou déplacé Cible, tu peux garder ces choix, à condition de savoir expliquer et tester les contacts. Le modèle ci-dessous repart de droite/gauche et de Cible à (80, 0)."
          ]
        },
        {
          "type": "callout",
          "id": "reprise",
          "title": "La base n’est pas encore prête ?",
          "text": "Ouvre Faire réagir le jeu pour créer les sprites et les commandes ; ce module reste accessible même sans projet précédent.",
          "moduleLink": {
            "moduleId": "scratch-reactions",
            "text": "Faire réagir le jeu"
          }
        },
        {
          "type": "lesson",
          "id": "notions",
          "title": "2 — Une boîte qui garde un nombre",
          "paragraphs": [
            "Une variable est une valeur mémorisée qui peut changer. Ici, score garde le nombre de cibles touchées.",
            "Dans Variables (orange foncé), clique sur Créer une variable. Nomme-la score et choisis Pour tous les sprites. Coche la case à côté de score pour afficher le compteur sur la scène.",
            "« Mettre score à 0 » remplace la valeur : c’est notre remise à zéro. « Ajouter 1 à score » augmente la valeur actuelle : 0 devient 1, puis 2 au contact suivant.",
            "Le menu de chaque bloc Variables doit sélectionner score. Créer la variable ne donne pas encore de points : il faut écrire quand elle change.",
            "La remise à zéro va avant la boucle : une fois par nouveau départ. L’ajout de point va dans le si de contact : pas à chaque tour de boucle."
          ]
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "3 — Un point par contact",
          "paragraphs": [
            "Le retour du chat à gauche sépare les sprites après chaque point. Sans ce retour, un contact qui dure peut donner plusieurs points au fil des tours de boucle.",
            "Ne mets pas score à 0 dans la boucle : elle effacerait sans cesse les points. Ne mets pas ajouter 1 hors du si : tu gagnerais des points sans toucher la cible.",
            "Les anciens blocs droite/gauche et la pause restent inchangés. Nous ajoutons seulement la mémoire du score ; pas encore de fin de partie, de vies ni de chronomètre."
          ],
          "shortSteps": [
            "Crée score et affiche son compteur, puis ajoute les deux blocs orange foncé à la pile du chat.",
            "Mets score à 0 juste après le drapeau, hors de la boucle. Mets « ajouter 1 à score » dans le si de contact, avant le message et le retour.",
            "Lance, touche la cible deux fois : le score doit afficher 2. Relance le drapeau : il revient à 0."
          ],
          "visualScript": {
            "caption": "3 — Un point par contact",
            "note": "Modèle de blocs à assembler dans Scratch. Les menus dessinés ici ne sont pas interactifs.",
            "blocks": [
              {
                "category": "events",
                "label": "Événements",
                "parts": [
                  "quand le ",
                  {
                    "flag": true
                  },
                  " est cliqué"
                ],
                "explanation": "Le drapeau démarre la pile."
              },
              {
                "category": "variables",
                "label": "Variables",
                "parts": [
                  "mettre ",
                  {
                    "choice": "score"
                  },
                  " à ",
                  {
                    "value": "0"
                  }
                ],
                "explanation": "Une remise à zéro, au départ et hors de la boucle."
              },
              {
                "category": "motion",
                "label": "Mouvement",
                "parts": [
                  "aller à x: ",
                  {
                    "value": "-100"
                  },
                  " y: ",
                  {
                    "value": "0"
                  }
                ],
                "explanation": "Au départ, le chat est à gauche de la cible."
              },
              {
                "category": "control",
                "label": "Contrôle",
                "parts": [
                  "répéter indéfiniment"
                ],
                "explanation": "La boucle vérifie à nouveau touches et contact.",
                "children": [
                  {
                    "category": "control",
                    "label": "Contrôle",
                    "parts": [
                      "si ",
                      {
                        "condition": [
                          "touche ",
                          {
                            "choice": "flèche droite"
                          },
                          " pressée ?"
                        ]
                      },
                      " alors"
                    ],
                    "explanation": "Si la touche est maintenue, on change X.",
                    "children": [
                      {
                        "category": "motion",
                        "label": "Mouvement",
                        "parts": [
                          "ajouter ",
                          {
                            "value": "3"
                          },
                          " à x"
                        ],
                        "explanation": "Le chat va à droite."
                      }
                    ]
                  },
                  {
                    "category": "control",
                    "label": "Contrôle",
                    "parts": [
                      "si ",
                      {
                        "condition": [
                          "touche ",
                          {
                            "choice": "flèche gauche"
                          },
                          " pressée ?"
                        ]
                      },
                      " alors"
                    ],
                    "explanation": "Si la touche est maintenue, on change X.",
                    "children": [
                      {
                        "category": "motion",
                        "label": "Mouvement",
                        "parts": [
                          "ajouter ",
                          {
                            "value": "-3"
                          },
                          " à x"
                        ],
                        "explanation": "Le chat va à gauche."
                      }
                    ]
                  },
                  {
                    "category": "control",
                    "label": "Contrôle",
                    "parts": [
                      "si ",
                      {
                        "condition": [
                          "touche le ",
                          {
                            "choice": "Cible"
                          },
                          " ?"
                        ]
                      },
                      " alors"
                    ],
                    "explanation": "Un contact déclenche seulement les blocs à l’intérieur.",
                    "children": [
                      {
                        "category": "variables",
                        "label": "Variables",
                        "parts": [
                          "ajouter ",
                          {
                            "value": "1"
                          },
                          " à ",
                          {
                            "choice": "score"
                          }
                        ],
                        "explanation": "Le compteur gagne un point."
                      },
                      {
                        "category": "looks",
                        "label": "Apparence",
                        "parts": [
                          "dire ",
                          {
                            "value": "Touché !"
                          },
                          " pendant ",
                          {
                            "value": "1"
                          },
                          " secondes"
                        ],
                        "explanation": "Le message est visible pendant la durée indiquée."
                      },
                      {
                        "category": "motion",
                        "label": "Mouvement",
                        "parts": [
                          "aller à x: ",
                          {
                            "value": "-100"
                          },
                          " y: ",
                          {
                            "value": "0"
                          }
                        ],
                        "explanation": "Au départ, le chat est à gauche de la cible."
                      }
                    ]
                  },
                  {
                    "category": "control",
                    "label": "Contrôle",
                    "parts": [
                      "attendre ",
                      {
                        "value": "0.03"
                      },
                      " secondes"
                    ],
                    "explanation": "Une pause ralentit les essais."
                  }
                ]
              }
            ]
          },
          "code": "quand le drapeau vert est cliqué\n  mettre score à 0\n  aller à x: -100 y: 0\n  répéter indéfiniment\n    si <touche flèche droite pressée ?> alors\n      ajouter 3 à x\n    si <touche flèche gauche pressée ?> alors\n      ajouter -3 à x\n    si <touche le Cible ?> alors\n      ajouter 1 à score\n      dire Touché ! pendant 1 secondes\n      aller à x: -100 y: 0\n    attendre 0.03 secondes"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "À toi — vérifier le compteur",
          "intro": "Teste les règles du score, pas seulement son affichage.",
          "items": [
            {
              "id": "zero",
              "text": "Au drapeau, vérifie score = 0. Attends sans bouger : il doit rester à 0.",
              "hint": "La remise à zéro est hors de la boucle ; l’ajout est dans le si de contact."
            },
            {
              "id": "deux",
              "text": "Touche la cible deux fois. Vérifie 1 puis 2.",
              "hint": "Le chat repart à gauche entre les contacts."
            },
            {
              "id": "sans-contact",
              "text": "Reste loin de Cible quelques secondes. Le score doit rester identique.",
              "hint": "Aucun contact, aucun point."
            },
            {
              "id": "reset",
              "text": "Relance au drapeau et explique pourquoi le score revient à 0.",
              "hint": "Le bloc mettre remplace l’ancienne valeur."
            },
            {
              "id": "sauver",
              "text": "Télécharge une nouvelle version .sb3, distincte si tu veux garder l’essai sans score.",
              "hint": "Un fichier téléchargé précédemment ne se met pas à jour tout seul."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "Sans modèle — choisis ta règle de points",
          "intro": "Change seulement la règle de score, puis explique.",
          "items": [
            {
              "id": "points",
              "text": "Fais gagner 2 points par contact. Avant de tester, prédis le score après trois contacts.",
              "hint": "Changer ajouter 1 en ajouter 2 ; après trois contacts depuis 0, on attend 6."
            },
            {
              "id": "depart",
              "text": "Choisis un score de départ de 5. Prédis la valeur après un contact avec ta règle actuelle.",
              "hint": "Mettre remplace la valeur au départ ; ajouter part de cette valeur."
            },
            {
              "id": "restaurer",
              "text": "Remets le départ à 0 et un point par contact. Vérifie sans regarder le modèle.",
              "hint": "Ne confonds pas mettre et ajouter."
            },
            {
              "id": "expliquer",
              "text": "Montre où tu placerais chaque bloc et explique pourquoi avant de le déplacer.",
              "hint": "Au départ hors boucle : mettre. Au contact dans le si : ajouter."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus — diagnostiquer un score étrange",
          "intro": "Travaille dans une copie et restaure le programme après chaque essai.",
          "items": [
            {
              "id": "erreur-reset",
              "text": "Déplace mettre score à 0 dans la boucle. Prédis, observe puis corrige.",
              "hint": "La remise à zéro devient répétée. Ramène-la avant la boucle."
            },
            {
              "id": "erreur-points",
              "text": "Déplace ajouter 1 à score hors du si mais dans la boucle. Prédis, observe puis corrige.",
              "hint": "Les points augmentent sans contact. Replace l’ajout dans le si."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "suite",
          "title": "Et ensuite ?",
          "paragraphs": [
          "Tu sais maintenant compter une action du jeu. Continue avec Gagner, perdre et recommencer si tu sais expliquer le score et sa remise à zéro. Sinon, reprends les tests du compteur avant d’ajouter une fin de partie."
          ]
        }
      ],
      "masteryCriteria": [
        "Créer et afficher une variable puis distinguer mettre et ajouter.",
        "Prévoir une valeur après plusieurs contacts et expliquer le calcul, avec aide au calcul si nécessaire.",
        "Montrer pourquoi la remise à zéro est hors de la boucle et l’ajout dans le si.",
        "Tester qu’aucun point n’est attribué sans contact et qu’un nouveau départ remet à zéro."
      ],
      "consolidation": [
        {
          "moduleId": "scratch-variables",
          "blockId": "guide",
          "label": "Vérifier zéro, contacts et nouveau départ"
        },
        {
          "moduleId": "scratch-reactions",
          "blockId": "guide",
          "label": "Revoir la condition de contact"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "scratch-variables",
          "blockId": "bonus",
          "label": "Comprendre deux erreurs de placement"
        }
      ],
    "nextSteps": [{ "moduleId": "scratch-fin-partie", "label": "Décider quand la partie se termine", "prerequisiteSkills": [{ "skillId": "scratch.variables", "expectation": "Savoir compter un point par contact et remettre à zéro ; sinon refaire les tests guidés du compteur." }] }],
    "teacherGuide": {
      "objective": "Créer un score, l’augmenter lors d’un contact et le remettre à zéro au départ.",
        "entryDiagnosis": [
          "Faire réagir le chat au contact de Cible : reprendre Faire réagir le jeu.",
          "Comprendre les actions à l’intérieur d’un si.",
          "Repérer ce qui se répète et ce qui se fait une fois au départ."
        ],
        "preparation": [
          "Ouvrir Scratch en français et CodeCraft ; sauvegarde locale .sb3 sans compte ni publication obligatoire.",
          "Lire les consignes visibles et le modèle, puis utiliser les explications repliées si nécessaire.",
          "Reprendre le programme de contact réalisé avec Chat et Cible. La base partagée sans scripts ne remplace pas ce prérequis. Aucun fichier privé ni image à fournir."
        ],
        "why": "Une variable permet de garder le résultat des actions de la partie.",
        "discoverySpeech": [
          "« Mettre remplace ce qui est dans la boîte ; ajouter part de ce qui y est déjà. »",
          "« Où faut-il remettre à zéro : à chaque tour ou seulement quand on démarre ? »",
          "« Les points doivent arriver parce qu’on touche la cible, pas simplement parce que la boucle tourne. »"
        ],
        "example": {
          "target": {
            "moduleId": "scratch-variables",
            "blockId": "exemple",
            "label": "Modèle commenté"
          },
          "comments": [
            "Conserver la pile de contact : mettre score à 0 avant la boucle et ajouter 1 dans le si, avant le message et le retour. Ne pas recopier une deuxième pile de drapeau.",
            "Résultats attendus : drapeau → 0 ; premier contact → 1 ; deuxième contact → 2. Sans contact, la valeur reste inchangée. Le retour au départ sépare les sprites et évite plusieurs points pour un contact prolongé.",
            "Un nouveau drapeau remet score à 0. Avec 2 points par contact, trois contacts depuis zéro donnent 6 ; depuis 5, un contact donne 7. Rétablir ensuite zéro et un point. Aider le calcul séparément de l’explication des blocs."
          ]
        },
        "questions": [
          {
            "question": "Depuis zéro, trois contacts à deux points donnent combien ?",
            "answer": "6. Aider le calcul si nécessaire tout en évaluant le placement des blocs séparément."
          },
          {
            "question": "Modifier une pause devrait-il modifier les points par contact ?",
            "answer": "Non, si le chat est séparé de la cible après le contact."
          },
          {
            "question": "Pourquoi ne pas créer un score qui se remet à zéro dans chaque tour ?",
            "answer": "La mémoire serait effacée continuellement."
          },
          {
            "question": "Mettre score à 1 signifie-t-il gagner un point ?",
            "answer": "Non : cela remplace le score par 1 ; ajouter 1 l’augmente."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "scratch-variables",
          "blockId": "guide",
          "label": "Tests guidés"
        },
        "independentActivity": {
          "moduleId": "scratch-variables",
          "blockId": "autonomie",
          "label": "Modifier sans modèle"
        },
        "differentiation": [
          "Pour un CE2 : une manipulation à la fois, faire montrer la place avant de nommer les termes ; lire la consigne si nécessaire.",
          "Pour un élève plus autonome : masquer le modèle, demander une prédiction et une modification justifiée avant le bonus.",
          "Reprendre le prérequis fragile. Aucun nombre de séances imposé, aucune validation par consultation ou case cochée."
        ],
        "commonErrors": [
          {
            "symptom": "Le score reste ou revient toujours à zéro.",
            "helps": [
              "Observer un contact puis la valeur affichée.",
              "Chercher où se trouve mettre score à 0.",
              "Comparer un départ hors boucle et un bloc dans la boucle.",
              "Déplacer seulement la remise à zéro avant la boucle."
            ]
          },
          {
            "symptom": "Le score augmente sans toucher la cible.",
            "helps": [
              "Lancer sans appuyer et observer.",
              "Repérer ajouter dans ou hors du si.",
              "Comparer avec la condition de contact.",
              "Replacer l’ajout dans le si puis retester loin de la cible."
            ]
          },
          {
            "symptom": "Le score n’est pas affiché.",
            "helps": [
              "Regarder la catégorie Variables.",
              "Vérifier que score existe et que sa case est cochée.",
              "Comparer affichage de la variable et blocs qui la modifient.",
              "Cocher score sans ajouter de nouveau compteur."
            ]
          }
        ],
        "notes": "Observer prédiction, test sans contact et nouveau départ. Ne pas transformer le score du jeu en validation de compétence CodeCraft. Distinguer réussite autonome, avec modèle ou avec aide dans les remarques existantes ; aucun nouveau dispositif de suivi.",
        "quickConductor": [
          "Vérifier les prérequis par une question et un petit essai.",
          "Préparer la base minimale puis repérer les creux des blocs.",
          "Assembler et prédire le résultat du modèle.",
          "Faire les tests avec et sans la situation déclenchante.",
          "Proposer la modification autonome, choisir reprise ou bonus puis télécharger le .sb3."
        ],
        "references": [
          {
            "title": "Scratch — idées et tutoriels",
            "url": "https://scratch.mit.edu/ideas"
          },
          {
            "title": "Scratch — projets de départ officiels",
            "url": "https://scratch.mit.edu/help/starter_projects/"
          }
        ]
      }
    },
    "scratch-decouverte": {
      "domainId": "jeux-video",
      "title": "Prendre en main Scratch",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Repérer les zones de Scratch, lancer une action et conserver son projet.",
      "tool": {
        "label": "Ouvrir Scratch",
        "url": "https://scratch.mit.edu/projects/editor/"
      },
      "skillIds": [
        "scratch.workspace"
      ],
      "prerequisiteSkills": [],
      "blocks": [
        {
          "type": "lesson",
          "id": "reperes",
          "title": "1 — Ton atelier de jeu",
          "paragraphs": [
            "Clique sur Ouvrir Scratch. L’éditeur s’ouvre dans un nouvel onglet : garde CodeCraft ouvert pour retrouver les consignes. Aucun compte n’est nécessaire pour cet essai ; nous téléchargerons le projet sur ton ordinateur.",
            "Si Scratch est en anglais, clique sur le globe en haut et choisis Français. Ferme le tutoriel qui masque l’éditeur si nécessaire. Nous gardons le chat déjà présent.",
            "La scène est la zone où tu vois le résultat. Un sprite est un personnage ou un objet du projet : le chat est notre premier sprite. Clique sur sa miniature sous la scène pour le sélectionner.",
            "L’onglet Code affiche les catégories de blocs à gauche et la zone de programmation au centre. Fais glisser un bloc vers cette zone pour donner une instruction au sprite sélectionné. Un script est un ensemble de blocs accrochés."
          ]
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "2 — Une première action",
          "paragraphs": [
            "Dans la catégorie bleue Mouvement, glisse « avancer de 10 pas » au centre. Clique directement sur ce bloc : le chat avance un peu. Clique une deuxième fois pour observer un nouveau déplacement.",
            "Dans la catégorie jaune Événements, prends « quand le drapeau vert est cliqué ». Accroche le bloc bleu juste dessous : rapproche-le jusqu’à voir qu’ils s’emboîtent.",
            "Clique maintenant sur le drapeau vert au-dessus de la scène : le script démarre. Le bouton rouge voisin sert à arrêter les scripts en cours. Ce petit script finit vite : si rien ne tourne encore, arrêter ne change rien.",
            "Assemble les deux blocs comme sur le modèle ci-dessous. C’est un repère visuel : retrouve les vrais blocs dans Scratch, puis teste avec le drapeau."
          ],
          "visualScript": {
            "caption": "Deux blocs accrochés — un seul script",
            "note": "Modèle à reproduire dans Scratch, pas un éditeur interactif.",
            "blocks": [
              { "category": "events", "label": "Événements", "parts": ["quand le ", { "flag": true }, " est cliqué"], "explanation": "Le départ : un clic sur le drapeau lance la pile." },
              { "category": "motion", "label": "Mouvement", "parts": ["avancer de ", { "value": "10" }, " pas"], "explanation": "L’action : le chat avance de 10 pas." }
            ]
          },
          "shortSteps": [
            "Cherche le départ dans Événements (jaune) et « avancer de 10 pas » dans Mouvement (bleu).",
            "Accroche le bloc bleu sous le bloc jaune, comme sur le modèle.",
            "Clique sur le drapeau vert au-dessus de la scène : observe le chat. Le bouton rouge arrête les scripts en cours."
          ],
          "code": "Événements : quand le drapeau vert est cliqué\n  Mouvement : avancer de 10 pas"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "À toi — repérer et essayer",
          "intro": "Avance une étape à la fois.",
          "items": [
            {
              "id": "scene",
              "text": "Montre la scène, puis sélectionne la miniature du chat.",
              "hint": "La scène montre le résultat. La miniature choisit le sprite dont tu modifies le code."
            },
            {
              "id": "bloc",
              "text": "Assemble les deux blocs de l’exemple, puis clique sur le drapeau vert.",
              "hint": "Le bloc jaune doit toucher le bloc bleu. Le drapeau est au-dessus de la scène."
            },
            {
              "id": "changer",
              "text": "Remplace 10 par 30 dans le bloc bleu. Prédis ce qui change, puis teste.",
              "hint": "Le nombre indique la distance. Ce n’est pas la vitesse ni le nombre de clics."
            },
            {
              "id": "expliquer",
              "text": "Explique avec tes mots où tu écris les instructions et où tu vois leur résultat.",
              "hint": "La zone Code contient les blocs ; la scène montre ce qu’ils font."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "conserver",
          "title": "3 — Sauvegarder sans compte",
          "paragraphs": [
            "Choisis Fichier → Sauvegarder sur votre ordinateur. Ton navigateur télécharge un fichier .sb3. Repère-le dans tes téléchargements et garde-le dans un dossier que tu peux retrouver. Tu peux le nommer premier-essai.sb3.",
            "Le téléchargement garde l’état du projet à ce moment-là. Après de nouvelles modifications, télécharge une nouvelle version : ne suppose pas que l’ancien fichier a changé.",
            "Pour rouvrir : dans Scratch, choisis Fichier → Charger depuis votre ordinateur et sélectionne ton .sb3. Attention : charger remplace le projet ouvert. Sauvegarde d’abord ton travail actuel si tu veux le garder.",
            "N’utilise pas ton nom complet ou d’autres informations personnelles dans le titre. Il n’est pas nécessaire de partager le projet en ligne."
          ]
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "Sans modèle — retrouve ton atelier",
          "intro": "Replie ou remonte moins souvent vers les exemples. Tu peux utiliser un indice si tu bloques.",
          "items": [
            {
              "id": "reouvrir",
              "text": "Télécharge ton projet, puis recharge ce fichier. Vérifie que tes deux blocs sont encore présents.",
              "hint": "Sauvegarde avant de charger. Un fichier .sb3 contient le projet, pas seulement une image."
            },
            {
              "id": "autonome",
              "text": "Sans regarder le modèle, montre le sprite sélectionné, la zone de code, le drapeau et le bouton d’arrêt.",
              "hint": "Essaie de les montrer avant de relire la partie 1."
            },
            {
              "id": "preuve",
              "text": "Relance ton script et explique pourquoi cliquer sur le drapeau le démarre.",
              "hint": "Le bloc Événements indique ce qui déclenche le script."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus — un autre essai",
          "intro": "Seulement si les repères sont clairs.",
          "items": [
            {
              "id": "distance",
              "text": "Teste 5 puis 40 pas. Explique quelle valeur déplace le chat le plus loin, puis sauvegarde.",
              "hint": "Tu changes seulement le nombre du bloc Mouvement."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Retrouver la scène, le sprite sélectionné et sa zone de code sans modèle.",
        "Modifier un nombre et prévoir l’effet, plutôt que seulement recopier.",
        "Télécharger puis recharger un .sb3 et retrouver le script."
      ],
      "consolidation": [
        {
          "moduleId": "scratch-decouverte",
          "blockId": "guide",
          "label": "Reprendre les repères et la première action"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "scratch-decouverte",
          "blockId": "bonus",
          "label": "Comparer deux distances"
        }
      ],
      "nextSteps": [
        {
          "moduleId": "scratch-actions",
          "blockId": "exemple",
          "label": "Enchaîner des actions — savoir retrouver les blocs et sauvegarder son projet"
        }
      ],
      "teacherGuide": {
        "objective": "Repérer les zones de Scratch, lancer une action et conserver son projet.",
        "entryDiagnosis": [
          "Demander de montrer la scène et de déplacer un bloc, sans supposer une expérience antérieure.",
          "Observer la lecture et la manipulation ; lire la consigne à voix haute si nécessaire sans donner la solution."
        ],
        "preparation": [
          "Ouvrir l’éditeur Scratch en français et CodeCraft dans deux onglets.",
          "Prévoir un emplacement pour les .sb3 ; aucun compte ni partage public requis.",
          "Utiliser le chat fourni par Scratch : aucun projet privé ni asset à préparer pour ce lot."
        ],
        "why": "Se repérer et récupérer son travail permet de créer ensuite sans dépendre du compte ou de la démonstration du professeur.",
        "discoverySpeech": [
          "« La scène montre ce que ton jeu fait ; les blocs disent ce qu’il doit faire. »",
          "« Clique sur le bloc bleu. Maintenant, comment le drapeau pourrait-il déclencher cette action ? »",
          "« Nous gardons le projet dans un fichier : fermer l’onglet ne doit pas nous faire perdre notre travail. »"
        ],
        "example": {
          "target": {
            "moduleId": "scratch-decouverte",
            "blockId": "exemple",
            "label": "Lire et assembler l’exemple"
          },
          "comments": [
            "Les lignes sont un modèle textuel de blocs, pas un programme à coller.",
            "Faire retrouver la catégorie puis le bloc ; laisser l’élève assembler.",
            "Demander une prédiction, lancer, comparer et expliquer."
          ]
        },
        "questions": [
          {
            "question": "Le code de quel sprite modifies-tu ?",
            "answer": "Celui dont la miniature est sélectionnée."
          },
          {
            "question": "30 pas veut-il dire 30 secondes ?",
            "answer": "Non, c’est une distance de déplacement."
          },
          {
            "question": "Le fichier téléchargé change-t-il tout seul après une modification ?",
            "answer": "Non : il faut enregistrer une nouvelle version."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "scratch-decouverte",
          "blockId": "guide",
          "label": "Essais guidés"
        },
        "independentActivity": {
          "moduleId": "scratch-decouverte",
          "blockId": "autonomie",
          "label": "Essai sans modèle"
        },
        "differentiation": [
          "Pour un CE2 débutant : une consigne à la fois, lire les termes si nécessaire, faire montrer avant de demander d’écrire ou de calculer.",
          "Pour un élève à l’aise : demander une prédiction et une modification sans modèle, puis le bonus. Ne pas imposer un nombre de séances.",
          "Reprendre le prérequis manquant ; aucun accès au module ni case cochée ne constitue un acquis."
        ],
        "commonErrors": [
          {
            "symptom": "Le chat ne bouge pas au drapeau.",
            "helps": [
              "Faire cliquer directement le bloc bleu.",
              "Vérifier le sprite sélectionné.",
              "Comparer une pile attachée et deux blocs isolés.",
              "Raccrocher le bloc Mouvement sous l’événement puis retester."
            ]
          },
          {
            "symptom": "Le projet semble perdu.",
            "helps": [
              "Chercher le fichier .sb3 dans les téléchargements.",
              "Distinguer télécharger un fichier et garder l’onglet ouvert.",
              "Faire charger une copie connue après sauvegarde du projet actuel.",
              "Accompagner le choix du fichier sans évaluer cela comme un problème de logique."
            ]
          }
        ],
        "notes": "Noter séparément le repérage, la manipulation de la souris et l’explication. Un téléchargement accompagné ne prouve pas la sauvegarde autonome.",
        "quickConductor": [
          "Vérifier les repères ou prérequis.",
          "Faire assembler l’exemple et prédire son résultat.",
          "Changer une chose, tester et expliquer.",
          "Proposer la mission autonome ; distinguer réussite autonome, avec modèle ou avec aide.",
          "Sauvegarder le .sb3 ; choisir reprise ou suite selon la compréhension."
        ],
        "references": [
          {
            "title": "Scratch — idées et tutoriels officiels",
            "url": "https://scratch.mit.edu/ideas"
          },
          {
            "title": "Scratch — projets de départ officiels",
            "url": "https://scratch.mit.edu/help/starter_projects/"
          }
        ]
      }
    },
    "scratch-actions": {
      "domainId": "jeux-video",
      "title": "Déclencher et enchaîner des actions",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Construire une courte séquence, prévoir son ordre et la déclencher.",
      "tool": {
        "label": "Ouvrir Scratch",
        "url": "https://scratch.mit.edu/projects/editor/"
      },
      "skillIds": [
        "scratch.events",
        "scratch.sequence"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "scratch.workspace",
          "expectation": "Sélectionner le sprite, assembler des blocs et conserver un .sb3. Sinon, reprendre Prendre en main Scratch."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "reprise",
          "title": "Avant de commencer",
          "text": "Sauvegarde ton projet actuel, puis choisis Fichier → Nouveau pour cet essai avec le chat. Ton travail précédent reste dans sa sauvegarde. Si tu hésites pour retrouver les zones ou conserver ton travail, reprends Prendre en main Scratch.",
          "moduleLink": {
            "moduleId": "scratch-decouverte",
            "text": "Prendre en main Scratch"
          }
        },
        {
          "type": "lesson",
          "id": "notions",
          "title": "1 — Un départ et un ordre",
          "paragraphs": [
            "Un événement est ce qui déclenche le script. « quand le drapeau vert est cliqué » démarre les blocs attachés dessous lorsque tu cliques sur le drapeau.",
            "Les blocs d’une même pile s’exécutent de haut en bas. Des blocs posés à côté, sans être accrochés, ne font pas partie de cette pile.",
            "Dans Apparence, catégorie violette, « dire Bonjour ! pendant 2 secondes » affiche une bulle puis attend la durée indiquée. Tu peux modifier le message et la durée.",
            "Dans Contrôle, catégorie orange, « attendre 1 secondes » fait une pause avant la suite. Dans Mouvement, « avancer de 10 pas » déplace le sprite selon sa direction.",
            "Relancer ce script ne remet pas le chat à sa position initiale : il avancera encore. Le retour au départ sera expliqué dans Piloter un personnage."
          ]
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "2 — Assemble cette petite scène",
          "paragraphs": [
            "Sélectionne le chat du projet neuf préparé au début. Il n’a pas d’ancienne pile : tu peux construire cet essai sans supprimer ton travail précédent. Reste dans ce projet pour modifier les messages, l’ordre et la pause.",
            "Prends chaque bloc dans sa catégorie, change les textes et nombres, puis accroche-les dans l’ordre ci-dessous. Ce modèle se lit ; il ne se colle pas comme du code texte.",
            "Avant de cliquer sur le drapeau, annonce ce que fera le chat en premier, puis en dernier. Observe ensuite les deux déplacements et la pause."
          ],
          "shortSteps": [
            "Sélectionne le chat du projet neuf préparé au début. Construis une seule pile au drapeau ; garde ce projet pour les modifications guidées.",
            "Assemble ces blocs, puis choisis les messages et nombres du modèle.",
            "Annonce la première et la dernière action. Clique sur le drapeau, puis compare avec ta prédiction."
          ],
          "visualScript": {
            "caption": "Une pile : les actions de haut en bas",
            "note": "Assemble ces blocs dans Scratch. Le modèle n’est pas interactif.",
            "blocks": [
              {
                "category": "events",
                "label": "Événements",
                "parts": [
                  "quand le ",
                  {
                    "flag": true
                  },
                  " est cliqué"
                ],
                "explanation": "Le drapeau démarre cette pile."
              },
              {
                "category": "looks",
                "label": "Apparence",
                "parts": [
                  "dire ",
                  {
                    "value": "Bonjour !"
                  },
                  " pendant ",
                  {
                    "value": "2"
                  },
                  " secondes"
                ],
                "explanation": "Le chat parle pendant 2 secondes avant la suite."
              },
              {
                "category": "motion",
                "label": "Mouvement",
                "parts": [
                  "avancer de ",
                  {
                    "value": "30"
                  },
                  " pas"
                ],
                "explanation": "Premier déplacement de 30 pas."
              },
              {
                "category": "control",
                "label": "Contrôle",
                "parts": [
                  "attendre ",
                  {
                    "value": "1"
                  },
                  " secondes"
                ],
                "explanation": "Une pause d’une seconde."
              },
              {
                "category": "motion",
                "label": "Mouvement",
                "parts": [
                  "avancer de ",
                  {
                    "value": "30"
                  },
                  " pas"
                ],
                "explanation": "Deuxième déplacement de 30 pas."
              },
              {
                "category": "looks",
                "label": "Apparence",
                "parts": [
                  "dire ",
                  {
                    "value": "À bientôt !"
                  },
                  " pendant ",
                  {
                    "value": "2"
                  },
                  " secondes"
                ],
                "explanation": "Le dernier message termine la scène."
              }
            ]
          },
          "code": "Événements : quand le drapeau vert est cliqué\n  Apparence : dire Bonjour ! pendant 2 secondes\n  Mouvement : avancer de 30 pas\n  Contrôle : attendre 1 secondes\n  Mouvement : avancer de 30 pas\n  Apparence : dire À bientôt ! pendant 2 secondes"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — change l’histoire",
          "intro": "Un seul changement à la fois : prédis, teste, explique.",
          "items": [
            {
              "id": "assembler",
              "text": "Construis et lance la pile proposée.",
              "hint": "Vérifie que chaque bloc s’accroche au précédent, sans espace."
            },
            {
              "id": "texte",
              "text": "Change les deux messages, sans déplacer les blocs.",
              "hint": "Les cases blanches du bloc violet contiennent le texte."
            },
            {
              "id": "ordre",
              "text": "Place le premier message après le premier déplacement. Prédis puis teste la différence.",
              "hint": "Détache d’abord la suite sous le premier message en prenant le premier déplacement : les blocs suivants viennent avec lui. Isole ensuite le message du drapeau. Raccroche la suite sous le drapeau, puis glisse le message entre le premier déplacement et la pause. Vérifie : drapeau → déplacement → premier message → pause → second déplacement → dernier message."
            },
            {
              "id": "pause",
              "text": "Change la pause de 1 à 3 secondes. Observe ce qui reste inchangé.",
              "hint": "La pause change le temps entre les actions ; pas la distance."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "À toi — une scène sans modèle",
          "intro": "Sauvegarde ton exercice guidé, puis choisis Fichier → Nouveau. Dans ce projet neuf avec le chat, crée ta scène avec les blocs connus. Ton premier essai reste conservé et ne se lance pas en même temps. Essaie avant l’indice.",
          "items": [
            {
              "id": "scene-personnelle",
              "text": "Au drapeau : affiche un message, déplace le chat, fais une pause, puis affiche un autre message.",
              "hint": "Tu connais déjà les quatre types de blocs nécessaires. Choisis toi-même les valeurs."
            },
            {
              "id": "prediction",
              "text": "Explique l’ordre avant de lancer, puis déplace un bloc pour changer l’histoire.",
              "hint": "Changer seulement un message ne change pas l’ordre des actions."
            },
            {
              "id": "sauver",
              "text": "Teste deux fois, explique pourquoi le chat ne revient pas au départ, puis télécharge ton .sb3.",
              "hint": "Les déplacements s’ajoutent ; aucun bloc de ce script ne réinitialise la position."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus — déclencher autrement",
          "intro": "Aucune boucle nécessaire.",
          "items": [
            {
              "id": "espace",
              "text": "Dans une copie de ta pile, remplace le départ par Événements → « quand la touche espace est pressée ». Clique sur la scène et appuie sur espace.",
              "hint": "Choisis espace dans le menu du bloc jaune. Utilise une copie, sans supprimer ton essai sauvegardé."
            },
            {
              "id": "comparer",
              "text": "Explique ce qui déclenche chacune des deux piles.",
              "hint": "Le départ change, mais l’ordre interne reste celui des blocs."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Distinguer l’événement de départ des actions.",
        "Prédire l’ordre et expliquer un changement observé après avoir déplacé un bloc.",
        "Créer une courte séquence personnelle sans recopier toute la pile."
      ],
      "consolidation": [
        {
          "moduleId": "scratch-actions",
          "blockId": "guide",
          "label": "Reprendre un changement à la fois"
        },
        {
          "moduleId": "scratch-decouverte",
          "blockId": "conserver",
          "label": "Retrouver la sauvegarde locale"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "scratch-actions",
          "blockId": "bonus",
          "label": "Déclencher avec une touche"
        }
      ],
      "nextSteps": [
        {
          "moduleId": "scratch-pilotage",
          "blockId": "position",
          "label": "Piloter un personnage — comprendre le départ et l’ordre des blocs"
        }
      ],
      "teacherGuide": {
        "objective": "Construire une courte séquence, prévoir son ordre et la déclencher.",
        "entryDiagnosis": [
          "Sélectionner le sprite, assembler des blocs et conserver un .sb3. Sinon, reprendre Prendre en main Scratch."
        ],
        "preparation": [
          "Ouvrir l’éditeur Scratch en français et CodeCraft dans deux onglets.",
          "Prévoir un emplacement pour les .sb3 ; aucun compte ni partage public requis.",
          "Utiliser le chat fourni par Scratch. Sauvegarder puis choisir Fichier → Nouveau au début et avant la scène autonome ; conserver le même projet pour les modifications guidées et le bonus d’événement. Ne pas supprimer le travail précédent."
        ],
        "why": "Comprendre l’ordre d’une pile prépare aux règles de jeu et évite de traiter les blocs comme une recette à recopier.",
        "discoverySpeech": [
          "« Avant de lancer, raconte-moi la scène de haut en bas. »",
          "« Si je déplace cette phrase après le mouvement, qu’est-ce qui changera ? »",
          "« Attendre laisse passer du temps ; avancer change la position. Ce sont deux choses différentes. »"
        ],
        "example": {
          "target": {
            "moduleId": "scratch-actions",
            "blockId": "exemple",
            "label": "Lire et assembler l’exemple"
          },
          "comments": [
            "Les lignes sont un modèle de blocs, pas du texte à coller. Construire l’exemple dans un projet neuf ; garder ce projet pour les modifications guidées.",
            "Pour déplacer seulement le premier message : détacher la suite en prenant le premier déplacement, isoler le message, raccrocher la suite au drapeau puis insérer le message entre premier déplacement et pause. Ordre attendu : déplacement → premier message → pause → second déplacement → dernier message.",
            "Faire prédire puis observer : le chat bouge maintenant avant de parler. Avant la scène autonome, sauvegarder puis Fichier → Nouveau pour éviter deux piles de drapeau concurrentes."
          ]
        },
        "questions": [
          {
            "question": "Un bloc posé à côté s’exécute-t-il avec la pile ?",
            "answer": "Non, il doit être attaché ou avoir son propre événement."
          },
          {
            "question": "Pourquoi le chat avance-t-il encore au deuxième départ ?",
            "answer": "Le script ajoute un déplacement ; il n’a aucun retour au départ."
          },
          {
            "question": "Quels blocs font attendre, et où est la pause entre les deux déplacements ?",
            "answer": "Chaque dire … pendant attend la durée du message. Le bloc attendre ajoute une pause entre les deux déplacements ; dans le modèle initial, le premier déplacement sépare le premier message de cette pause."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "scratch-actions",
          "blockId": "guide",
          "label": "Essais guidés"
        },
        "independentActivity": {
          "moduleId": "scratch-actions",
          "blockId": "autonomie",
          "label": "Essai sans modèle"
        },
        "differentiation": [
          "Pour un CE2 débutant : une consigne à la fois, lire les termes si nécessaire, faire montrer avant de demander d’écrire ou de calculer.",
          "Pour un élève à l’aise : demander une prédiction et une modification sans modèle, puis le bonus. Ne pas imposer un nombre de séances.",
          "Reprendre le prérequis manquant ; aucun accès au module ni case cochée ne constitue un acquis."
        ],
        "commonErrors": [
          {
            "symptom": "Tout part deux fois ou dans un ordre inattendu.",
            "helps": [
              "Repérer combien de départs au drapeau existent.",
              "Comparer les piles présentes au modèle de cet essai.",
              "Sauvegarder ce projet pour conserver toutes les piles, puis choisir Fichier → Nouveau.",
              "Reconstruire uniquement la pile de l’activité en cours et commenter son ordre ; ne pas supprimer les anciens essais."
            ]
          },
          {
            "symptom": "La pause n’a pas l’effet attendu.",
            "helps": [
              "Faire lire le nombre et l’emplacement du bloc attendre.",
              "Comparer une durée de message et une pause entre mouvements.",
              "Tester avec une pause de trois secondes.",
              "Remettre la pause entre les deux déplacements et faire prédire."
            ]
          }
        ],
        "notes": "Distinguer copie correcte et ordre compris : déplacer un bloc puis demander une prédiction. Ne pas introduire de boucle ou de variable pour rallonger le programme.",
        "quickConductor": [
          "Vérifier les repères ou prérequis.",
          "Faire assembler l’exemple et prédire son résultat.",
          "Changer une chose, tester et expliquer.",
          "Proposer la mission autonome ; distinguer réussite autonome, avec modèle ou avec aide.",
          "Sauvegarder le .sb3 ; choisir reprise ou suite selon la compréhension."
        ],
        "references": [
          {
            "title": "Scratch — idées et tutoriels officiels",
            "url": "https://scratch.mit.edu/ideas"
          },
          {
            "title": "Scratch — projets de départ officiels",
            "url": "https://scratch.mit.edu/help/starter_projects/"
          }
        ]
      }
    },
    "scratch-pilotage": {
      "scratchProjectId": "chat-cible",
      "domainId": "jeux-video",
      "title": "Piloter un personnage",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Déplacer un personnage avec les flèches et le remettre à une position de départ.",
      "tool": {
        "label": "Ouvrir Scratch",
        "url": "https://scratch.mit.edu/projects/editor/"
      },
      "skillIds": [
        "scratch.coordinates",
        "scratch.keyboard",
        "scratch.events"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "scratch.workspace",
          "expectation": "Sélectionner le bon sprite et sauvegarder son projet."
        },
        {
          "skillId": "scratch.events",
          "expectation": "Expliquer ce qui déclenche une pile ; reprendre Déclencher et enchaîner des actions en cas d’hésitation."
        },
        {
          "skillId": "scratch.sequence",
          "expectation": "Lire une pile de haut en bas."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "reprise",
          "title": "Avant de commencer",
          "text": "Sauvegarde ton projet actuel, puis choisis Fichier → Nouveau et garde le chat. Tu conserves ton ancien travail et aucune ancienne commande ne perturbe cet essai. Tu peux aussi ouvrir la base facultative sans scripts proposée en haut. Si les événements et l’ordre des blocs sont encore difficiles, reprends Déclencher et enchaîner des actions.",
          "moduleLink": {
            "moduleId": "scratch-actions",
            "text": "Déclencher et enchaîner des actions"
          }
        },
        {
          "type": "lesson",
          "id": "position",
          "title": "1 — Où est le personnage ?",
          "paragraphs": [
            "Sous la scène, sélectionne le chat. Les valeurs x et y indiquent sa position : x repère gauche/droite, y repère bas/haut. Au centre, x = 0 et y = 0.",
            "Quand x augmente, le chat va à droite ; quand x diminue, il va à gauche. Quand y augmente, il monte ; quand y diminue, il descend. Un nombre négatif comme -10 permet ici d’aller dans le sens opposé.",
            "La scène va de -240 à 240 horizontalement et de -180 à 180 verticalement. Pour cet essai, reste près du centre : un sprite peut dépasser du cadre.",
            "Dans Mouvement, « aller à x: 0 y: 0 » fixe une position précise. Place-le sous le départ au drapeau : chaque nouveau départ remettra le chat au centre."
          ],
          "shortSteps": [
            "Sélectionne le chat : les valeurs x et y sont sous la scène.",
            "X indique gauche/droite ; Y indique bas/haut. Observe les directions ci-dessous.",
            "Dans Mouvement, prends « aller à x: 0 y: 0 ». Accroche-le sous le départ au drapeau et teste le retour au centre."
          ],
          "coordinateDiagram": {
            "caption": "X et Y : quatre directions depuis le centre",
            "up": "↑ Haut · Y augmente (+)",
            "left": "← Gauche · X diminue (−)",
            "center": "Centre\nx = 0 · y = 0",
            "right": "Droite → · X augmente (+)",
            "down": "↓ Bas · Y diminue (−)",
            "note": "X change horizontalement. Y change verticalement. Par exemple : ajouter −10 à Y fait descendre."
          },
          "visualScript": {
            "caption": "Le drapeau remet au centre",
            "note": "Aller à fixe une position. Ajouter un déplacement est une autre action.",
            "blocks": [
              {
                "category": "events",
                "label": "Événements",
                "parts": [
                  "quand le ",
                  {
                    "flag": true
                  },
                  " est cliqué"
                ],
                "explanation": "Le drapeau démarre cette pile."
              },
              {
                "category": "motion",
                "label": "Mouvement",
                "parts": [
                  "aller à x: ",
                  {
                    "value": "0"
                  },
                  " y: ",
                  {
                    "value": "0"
                  }
                ],
                "explanation": "Le chat revient au centre, quelle que soit sa position précédente."
              }
            ]
          },
          "code": "Événements : quand le drapeau vert est cliqué\n  Mouvement : aller à x: 0 y: 0"
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "2 — Quatre touches, quatre petites piles",
          "paragraphs": [
            "Dans Événements, « quand la touche espace est pressée » possède un menu : choisis flèche droite, gauche, haut ou bas. Chaque pile ci-dessous possède son propre départ.",
            "Dans Mouvement, « ajouter 10 à x » change seulement x ; « ajouter 10 à y » change seulement y. Modifie le nombre pour écrire -10 lorsque nécessaire.",
            "Garde aussi la pile au drapeau de la partie 1. Les quatre piles de touches sont séparées, pas accrochées sous le drapeau.",
            "Clique sur la scène pour qu’elle reçoive le clavier, puis appuie brièvement sur une flèche. Le modèle montre des déplacements par touches ; on ne cherche pas encore un mouvement continu avec une touche maintenue. Aucune boucle ni collision nécessaire."
          ],
          "shortSteps": [
            "Dans Événements, prends le bloc « quand la touche espace est pressée » : son menu permet de choisir chaque flèche.",
            "Crée quatre piles séparées comme ci-dessous. Dans Mouvement, prends « ajouter 10 à x » ou « ajouter 10 à y », puis change le signe si nécessaire.",
            "Garde le retour au centre au drapeau. Clique sur la scène et teste chaque flèche par une pression brève : pas encore de mouvement continu."
          ],
          "visualScript": {
            "caption": "Quatre piles séparées, une par flèche",
            "note": "Garde aussi la pile au drapeau. Clique sur la scène puis presse brièvement une flèche.",
            "stacks": [
              {
                "caption": "Flèche droite",
                "blocks": [
                  {
                    "category": "events",
                    "label": "Événements",
                    "parts": [
                      "quand la touche ",
                      {
                        "choice": "flèche droite"
                      },
                      " est pressée"
                    ],
                    "explanation": "Le menu de ce bloc choisit la touche."
                  },
                  {
                    "category": "motion",
                    "label": "Mouvement",
                    "parts": [
                      "ajouter ",
                      {
                        "value": "10"
                      },
                      " à x"
                    ],
                    "explanation": "X augmente : vers la droite."
                  }
                ]
              },
              {
                "caption": "Flèche gauche",
                "blocks": [
                  {
                    "category": "events",
                    "label": "Événements",
                    "parts": [
                      "quand la touche ",
                      {
                        "choice": "flèche gauche"
                      },
                      " est pressée"
                    ],
                    "explanation": "Le menu de ce bloc choisit la touche."
                  },
                  {
                    "category": "motion",
                    "label": "Mouvement",
                    "parts": [
                      "ajouter ",
                      {
                        "value": "-10"
                      },
                      " à x"
                    ],
                    "explanation": "X diminue : vers la gauche."
                  }
                ]
              },
              {
                "caption": "Flèche haut",
                "blocks": [
                  {
                    "category": "events",
                    "label": "Événements",
                    "parts": [
                      "quand la touche ",
                      {
                        "choice": "flèche haut"
                      },
                      " est pressée"
                    ],
                    "explanation": "Le menu de ce bloc choisit la touche."
                  },
                  {
                    "category": "motion",
                    "label": "Mouvement",
                    "parts": [
                      "ajouter ",
                      {
                        "value": "10"
                      },
                      " à y"
                    ],
                    "explanation": "Y augmente : vers le haut."
                  }
                ]
              },
              {
                "caption": "Flèche bas",
                "blocks": [
                  {
                    "category": "events",
                    "label": "Événements",
                    "parts": [
                      "quand la touche ",
                      {
                        "choice": "flèche bas"
                      },
                      " est pressée"
                    ],
                    "explanation": "Le menu de ce bloc choisit la touche."
                  },
                  {
                    "category": "motion",
                    "label": "Mouvement",
                    "parts": [
                      "ajouter ",
                      {
                        "value": "-10"
                      },
                      " à y"
                    ],
                    "explanation": "Y diminue : vers le bas."
                  }
                ]
              }
            ]
          },
          "code": "Événements : quand la touche flèche droite est pressée\n  Mouvement : ajouter 10 à x\n\nÉvénements : quand la touche flèche gauche est pressée\n  Mouvement : ajouter -10 à x\n\nÉvénements : quand la touche flèche haut est pressée\n  Mouvement : ajouter 10 à y\n\nÉvénements : quand la touche flèche bas est pressée\n  Mouvement : ajouter -10 à y"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — essaie les commandes",
          "intro": "Prédis la direction avant chaque essai.",
          "items": [
            {
              "id": "depart",
              "text": "Construis la pile de retour au centre et clique sur le drapeau.",
              "hint": "Utilise aller à x/y, pas ajouter à x/y : fixer une position n’est pas ajouter un déplacement."
            },
            {
              "id": "horizontal",
              "text": "Construis les piles droite et gauche. Fais une pression brève à droite, puis à gauche.",
              "hint": "Les deux piles changent x avec des nombres opposés."
            },
            {
              "id": "vertical",
              "text": "Construis les piles haut et bas. Teste séparément chaque direction.",
              "hint": "Les deux piles changent y, pas x."
            },
            {
              "id": "retour",
              "text": "Éloigne le chat, puis clique sur le drapeau. Vérifie le retour à x = 0, y = 0.",
              "hint": "Le drapeau déclenche le bloc aller à, quel que soit l’endroit atteint."
            },
            {
              "id": "sauver",
              "text": "Télécharge ton projet de commandes au format .sb3.",
              "hint": "Fichier → Sauvegarder sur votre ordinateur."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "Sans modèle — choisis et explique",
          "intro": "Garde ton projet sauvegardé. Essaie avant de lire les indices.",
          "items": [
            {
              "id": "nouveau-depart",
              "text": "Choisis un nouveau départ proche du centre, différent de (0, 0), et modifie seulement la pile au drapeau.",
              "hint": "Par exemple x = -60, y = 40. Le point exact t’appartient."
            },
            {
              "id": "nouveau-pas",
              "text": "Choisis une autre distance pour les touches. Garde la même distance à droite/gauche et à haut/bas.",
              "hint": "Les nombres de chaque paire ont la même taille mais des signes opposés."
            },
            {
              "id": "verifier",
              "text": "Prédis ce qu’afficheront x et y après une touche droite depuis le départ ; teste et explique.",
              "hint": "Seul x doit changer. Exemple : x = -60, ajouter 10 donne -50."
            },
            {
              "id": "comprehension",
              "text": "Sans regarder le modèle : choisis le bloc et le signe pour aller vers le bas. Puis explique pourquoi le drapeau ramène toujours au même point.",
              "hint": "Descendre change y avec un nombre négatif ; aller à fixe x et y."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus — un retour par touche",
          "intro": "Seulement si les quatre commandes sont comprises.",
          "items": [
            {
              "id": "reset",
              "text": "Ajoute une pile qui remet le chat au départ quand tu presses espace, puis teste depuis deux positions différentes.",
              "hint": "Utilise l’événement espace et le même aller à x/y que dans la pile au drapeau."
            },
            {
              "id": "expliquer",
              "text": "Explique pourquoi cette commande fonctionne depuis plusieurs endroits.",
              "hint": "Elle fixe une position ; elle ne fait pas un déplacement relatif."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "suite",
          "title": "Pour continuer",
          "paragraphs": [
            "Tu as une base pour piloter un personnage. Continue avec Répéter des actions lorsque tu sais expliquer tes commandes, ou consolide-les si tu hésites. Une case cochée ne valide pas une compétence."
          ]
        }
      ],
      "masteryCriteria": [
        "Choisir x ou y et le signe à partir d’une direction demandée sans modèle.",
        "Distinguer ajouter un déplacement et fixer une position.",
        "Expliquer et tester le retour au départ depuis deux positions.",
        "Modifier ses commandes et prévoir les coordonnées, avec aide sur le calcul si nécessaire."
      ],
      "consolidation": [
        {
          "moduleId": "scratch-pilotage",
          "blockId": "guide",
          "label": "Reprendre une direction à la fois"
        },
        {
          "moduleId": "scratch-actions",
          "blockId": "notions",
          "label": "Revoir les événements"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "scratch-pilotage",
          "blockId": "bonus",
          "label": "Créer une touche de retour au départ"
        }
      ],
        "nextSteps": [{ "moduleId": "scratch-boucles", "blockId": "notions", "label": "Répéter des actions — savoir lire une pile et utiliser une pause" }],
        "teacherGuide": {
        "objective": "Déplacer un personnage avec les flèches et le remettre à une position de départ.",
        "entryDiagnosis": [
          "Sélectionner le bon sprite et sauvegarder son projet.",
          "Expliquer ce qui déclenche une pile ; reprendre Déclencher et enchaîner des actions en cas d’hésitation.",
          "Lire une pile de haut en bas."
        ],
        "preparation": [
          "Ouvrir l’éditeur Scratch en français et CodeCraft dans deux onglets.",
          "Prévoir un emplacement pour les .sb3 ; aucun compte ni partage public requis.",
          "Sauvegarder le travail actuel puis choisir Fichier → Nouveau, ou ouvrir la base chat/cible sans scripts. Ne pas reprendre une ancienne scène avec ses piles. Garder ensuite ce projet pour les quatre commandes, la mission autonome de modification et le bonus : cinq piles de base, puis éventuellement le retour par espace. La cible de la base peut rester de côté."
        ],
        "why": "Un déplacement contrôlé et un départ reproductible constituent une base de jeu ; la compréhension des directions précède les collisions.",
        "discoverySpeech": [
          "« X suit gauche et droite ; Y suit bas et haut. Montrons chaque direction sur la scène. »",
          "« Ajouter change la position depuis où tu es ; aller à choisit une position précise. »",
          "« Le drapeau démarre notre retour au départ. Les flèches ont chacune leur propre événement. »"
        ],
        "example": {
          "target": {
            "moduleId": "scratch-pilotage",
            "blockId": "exemple",
            "label": "Lire et assembler l’exemple"
          },
          "comments": [
            "Les lignes sont un modèle textuel de blocs, pas un programme à coller.",
            "Faire retrouver la catégorie puis le bloc ; laisser l’élève assembler.",
            "Demander une prédiction, lancer, comparer et expliquer."
          ]
        },
        "questions": [
          {
            "question": "Pour aller à gauche, quelle coordonnée et quel signe ?",
            "answer": "X, avec une valeur négative."
          },
          {
            "question": "Après une touche droite, Y doit-il changer ?",
            "answer": "Non : la commande change seulement X."
          },
          {
            "question": "Pourquoi le drapeau fonctionne-t-il depuis deux endroits différents ?",
            "answer": "Aller à fixe la même position plutôt que d’ajouter un déplacement."
          },
          {
            "question": "X vaut -60 ; ajouter 10 donne quoi ?",
            "answer": "-50. Autoriser une aide au calcul et observer séparément le choix de l’axe et du sens."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "scratch-pilotage",
          "blockId": "guide",
          "label": "Essais guidés"
        },
        "independentActivity": {
          "moduleId": "scratch-pilotage",
          "blockId": "autonomie",
          "label": "Essai sans modèle"
        },
        "differentiation": [
          "Pour un CE2 débutant : une consigne à la fois, lire les termes si nécessaire, faire montrer avant de demander d’écrire ou de calculer.",
          "Pour un élève à l’aise : demander une prédiction et une modification sans modèle, puis le bonus. Ne pas imposer un nombre de séances.",
          "Reprendre le prérequis manquant ; aucun accès au module ni case cochée ne constitue un acquis."
        ],
        "commonErrors": [
          {
            "symptom": "Les flèches n’agissent pas.",
            "helps": [
              "Cliquer sur la scène pour donner le focus.",
              "Vérifier le menu de touche du bloc jaune.",
              "Comparer le sprite sélectionné et celui qui doit bouger.",
              "Tester une seule pile avec une pression brève."
            ]
          },
          {
            "symptom": "Le chat descend avec la flèche haut.",
            "helps": [
              "Faire montrer l’axe vertical.",
              "Repérer le signe du nombre dans ajouter à y.",
              "Comparer +10 et -10 séparément.",
              "Corriger la paire haut/bas puis demander une nouvelle prédiction."
            ]
          },
          {
            "symptom": "Le drapeau ajoute un déplacement au lieu de revenir.",
            "helps": [
              "Relancer depuis deux positions.",
              "Repérer ajouter versus aller à.",
              "Comparer les coordonnées après chaque essai.",
              "Remplacer uniquement le bloc de départ par aller à x/y."
            ]
          }
        ],
        "notes": "La réussite avec modèle ne suffit pas : demander une direction sans nommer X/Y. Distinguer autonomie, modèle ou aide dans les remarques existantes, sans nouveau suivi. Une difficulté avec les nombres négatifs peut être accompagnée sans invalider toute compréhension des événements.",
        "quickConductor": [
          "Vérifier les repères ou prérequis.",
          "Faire assembler l’exemple et prédire son résultat.",
          "Changer une chose, tester et expliquer.",
          "Proposer la mission autonome ; distinguer réussite autonome, avec modèle ou avec aide.",
          "Sauvegarder le .sb3 ; choisir reprise ou suite selon la compréhension."
        ],
        "references": [
          {
            "title": "Scratch — idées et tutoriels officiels",
            "url": "https://scratch.mit.edu/ideas"
          },
          {
            "title": "Scratch — projets de départ officiels",
            "url": "https://scratch.mit.edu/help/starter_projects/"
          }
        ]
      }
    },
    "html-multipage": {
      "domainId": "web",
      "title": "Relier plusieurs pages",
      "type": "lesson",
      "theme": "debutants",
      "objective": "Relier des fichiers HTML, prévoir le retour et vérifier les destinations de chaque lien.",
      "skillIds": [
        "html.navigation"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.document",
          "expectation": "Repérer head et body et enregistrer un document HTML complet."
        },
        {
          "skillId": "html.paths",
          "expectation": "Retrouver un fichier à partir d’un chemin relatif."
        },
        {
          "skillId": "html.links",
          "expectation": "Distinguer l’adresse href et le texte visible d’un lien."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "environnement",
          "title": "Ici, on travaille avec des fichiers",
          "text": "Le bouton CodePen reste disponible dans CodeCraft, mais un Pen unique ne remplace pas les fichiers de ce cours. Utilise un éditeur comme VS Code et un navigateur. Si créer et enregistrer un fichier HTML est encore difficile, reprends Structure d’un document HTML, puis reviens ici avec Retour dans le navigateur. Aucun serveur, compte, extension ni publication n’est nécessaire.",
          "moduleLink": {
            "moduleId": "html-document",
            "text": "Structure d’un document HTML"
          }
        },
        {
          "type": "lesson",
          "id": "depart",
          "title": "1 — Deux pages, deux fichiers",
          "paragraphs": [
            "Résultat attendu : tu peux aller de l’accueil à une page de découvertes, puis revenir par un lien présent sur la page, sans dépendre du bouton Retour du navigateur.",
            "Crée un NOUVEAU dossier mini-navigation, pour garder tes exercices précédents. Dans ton éditeur, crée puis enregistre deux fichiers distincts avec les noms ci-dessous. Affiche les extensions dans l’explorateur si nécessaire : decouvertes.html.txt n’est pas le fichier demandé.",
            "Les noms de fichiers sont ici en minuscules, sans espace ni accent. Respecte exactement leur écriture, même si ton ordinateur tolère parfois des différences de majuscules. Le texte visible peut, lui, avoir des accents.",
            "Chaque fichier possède son propre document complet, son title pour l’onglet et son h1 visible. Ne colle pas les deux documents à la suite dans un même fichier. Travaille sans IA."
          ],
          "code": "mini-navigation/\n├── index.html\n└── decouvertes.html"
        },
        {
          "type": "lesson",
          "id": "liens",
          "title": "2 — Une destination depuis la page actuelle",
          "paragraphs": [
            "Dans href, decouvertes.html désigne ici un fichier situé dans le même dossier que la page contenant le lien. Le navigateur cherche la destination depuis cette page, pas depuis ton éditeur.",
            "Le texte Découvertes annonce la destination ; modifier seulement ce texte ne change pas le fichier ouvert. Pour revenir, href=\"index.html\" vise le fichier d’accueil.",
            "N’écris pas le chemin complet de ton ordinateur ni un / au début : nous utilisons des fichiers voisins avec leurs noms et extensions. Un chemin relatif reste valable si le dossier complet est déplacé en conservant cette organisation.",
            "Cliquer charge l’autre document. Un lien ne crée pas un fichier, ne recopie pas son contenu et ne fabrique pas automatiquement un lien de retour : il faut écrire celui-ci sur la deuxième page."
          ],
          "code": "<a href=\"decouvertes.html\">Découvertes</a>"
        },
        {
          "type": "lesson",
          "id": "navigation",
          "title": "3 — Retrouver les mêmes choix",
          "paragraphs": [
            "nav regroupe les principaux liens de navigation. C’est un conteneur HTML qui s’ouvre et se ferme ; les liens sont placés à l’intérieur. Il ne crée pas de boutons ni de mise en page automatiquement.",
            "Dans notre petite navigation, les deux pages proposent Accueil et Découvertes dans le même ordre. Un lien vers la page déjà affichée est possible ; il la recharge simplement.",
            "Le menu est écrit dans chaque fichier HTML. Une modification de ce menu dans un fichier ne se recopie pas toute seule dans l’autre. Nous vérifierons les deux.",
            "La disposition proposée est volontairement simple : aucun CSS n’est nécessaire pour apprendre à passer d’un fichier à l’autre."
          ],
          "code": "<nav>\n  <a href=\"index.html\">Accueil</a>\n  <a href=\"decouvertes.html\">Découvertes</a>\n</nav>"
        },
        {
          "type": "lesson",
          "id": "accueil",
          "title": "index.html — Le document d’accueil",
          "paragraphs": [
            "Copie uniquement ce document dans index.html, puis enregistre. Son titre d’onglet et son titre visible permettront de reconnaître la page."
          ],
          "code": "<!doctype html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Accueil du carnet</title>\n</head>\n<body>\n  <h1>Mon carnet</h1>\n  <nav>\n    <a href=\"index.html\">Accueil</a>\n    <a href=\"decouvertes.html\">Découvertes</a>\n  </nav>\n  <p>Bienvenue dans mon carnet de découvertes.</p>\n</body>\n</html>"
        },
        {
          "type": "lesson",
          "id": "seconde",
          "title": "decouvertes.html — Le deuxième document",
          "paragraphs": [
            "Copie ce document dans decouvertes.html, pas à la suite du précédent. Enregistre aussi ce fichier."
          ],
          "code": "<!doctype html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Découvertes du carnet</title>\n</head>\n<body>\n  <h1>Mes découvertes</h1>\n  <nav>\n    <a href=\"index.html\">Accueil</a>\n    <a href=\"decouvertes.html\">Découvertes</a>\n  </nav>\n  <p>Je compare des formes et je note mes idées.</p>\n</body>\n</html>"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — Faire l’aller et le retour",
          "intro": "Ouvre index.html depuis ton dossier dans un navigateur. Si le double-clic ouvre l’éditeur, utilise Ouvrir avec et choisis ton navigateur.",
          "items": [
            {
              "id": "aller",
              "text": "Clique sur Découvertes dans la page. Vérifie le nom decouvertes.html dans la barre d’adresse, le titre de l’onglet et le h1 Mes découvertes."
            },
            {
              "id": "retour",
              "text": "Clique sur Accueil dans la deuxième page. Vérifie que tu retrouves index.html et Mon carnet, sans utiliser le bouton Retour du navigateur."
            },
            {
              "id": "direct",
              "text": "Ferme cet onglet de test ou ouvre un nouvel onglet, puis ouvre directement decouvertes.html depuis le dossier. Utilise son lien Accueil : il doit fonctionner sans historique préalable."
            },
            {
              "id": "texte-lien",
              "text": "Dans les deux fichiers, remplace seulement le texte visible Découvertes par Mes idées, sans toucher à href. Enregistre, actualise et vérifie que le lien ouvre toujours decouvertes.html.",
              "hints": [
                "Repère ce qui se trouve entre <a> et </a>.",
                "Ce sont les mots du lien, pas l’adresse.",
                "Compare les guillemets de href au texte visible.",
                "Change seulement les mots, garde href=\"decouvertes.html\" dans les deux menus."
              ]
            },
            {
              "id": "expliquer",
              "text": "Explique pourquoi la deuxième page a besoin de son propre lien de retour et pourquoi changer le titre ne renomme pas le fichier."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "mission",
          "title": "Mission autonome — Renommer sans perdre les chemins",
          "intro": "Travaille dans une copie du dossier mini-navigation. Essaie avant d’ouvrir les indices.",
          "items": [
            {
              "id": "renommer",
              "text": "Renomme decouvertes.html en idees.html dans le dossier de copie, en gardant index.html. Ne modifie pas encore les liens."
            },
            {
              "id": "predire",
              "text": "Avant de cliquer, prédis ce qui arrivera à l’ancien lien. Ouvre index.html de la copie et observe : l’ancien nom ne désigne plus un fichier présent."
            },
            {
              "id": "reparer-menus",
              "text": "Répare les destinations nécessaires dans les DEUX menus, sans recréer un fichier vide avec l’ancien nom. Conserve le lien Accueil.",
              "hints": [
                "Ouvre les deux documents dans l’éditeur.",
                "Recherche l’ancien nom dans les attributs href.",
                "Un menu peut encore pointer vers l’ancien fichier même si l’autre a été corrigé.",
                "Dans index.html et idees.html, remplace href=\"decouvertes.html\" par href=\"idees.html\". Garde href=\"index.html\"."
              ]
            },
            {
              "id": "nouveau-contenu",
              "text": "Choisis un autre sujet pour la deuxième page. Modifie son title, son h1 et son paragraphe ; donne au lien un texte qui annonce ce sujet dans les deux menus."
            },
            {
              "id": "parcours-complet",
              "text": "Teste tous les liens depuis chaque page, puis ouvre idees.html directement et reviens à l’accueil par son lien. Explique la différence entre nom de fichier, titre de l’onglet et texte du lien."
            }
          ]
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie ton travail",
          "items": [
            {
              "id": "verifier-1",
              "text": "Chaque page est un fichier HTML complet et enregistré ; les deux noms sont distincts."
            },
            {
              "id": "verifier-2",
              "text": "Le menu apparaît dans les deux pages, dans le même ordre, avec des textes compréhensibles."
            },
            {
              "id": "verifier-3",
              "text": "Chaque href désigne le bon fichier, avec son nom exact et son extension."
            },
            {
              "id": "verifier-4",
              "text": "Je peux aller, revenir et démarrer depuis la deuxième page sans dépendre de l’historique."
            },
            {
              "id": "verifier-5",
              "text": "Après le renommage, j’ai contrôlé les liens dans tous les fichiers concernés."
            },
            {
              "id": "verifier-6",
              "text": "Je peux expliquer une réparation sans seulement recopier l’exemple."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "panne",
          "title": "Consolidation — Un lien visible, mais une destination absente",
          "paragraphs": [
            "Dans une copie de ta version réparée, remplace seulement le lien vers idees.html de index.html par celui-ci. Le texte reste correct ; l’adresse comporte une faute.",
            "Teste le lien. Selon le navigateur, une page d’erreur ou une indication de fichier introuvable apparaît. Pour réparer, reviens à l’éditeur et au fichier ; une erreur de navigation n’a pas supprimé ton travail."
          ],
          "code": "<a href=\"idee.html\">Mes idées</a>"
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Réparer en cherchant la cause",
          "intro": "Ne change pas au hasard le titre ou le texte du lien.",
          "items": [
            {
              "id": "corriger-fichier",
              "text": "Compare href au fichier réellement présent. Corrige uniquement la référence, enregistre puis rouvre index.html et reteste.",
              "hints": [
                "Regarde les noms dans ton dossier.",
                "Une lettre manque dans l’adresse.",
                "Compare idee.html et idees.html.",
                "Rétablis href=\"idees.html\". Changer Mes idées n’aurait pas corrigé la destination."
              ]
            },
            {
              "id": "retour-manquant",
              "text": "Dans une autre copie, enlève le lien Accueil de idees.html. Ouvre cette page directement, constate l’absence de retour dans la page puis rétablis-le.",
              "hints": [
                "Le bouton Retour du navigateur n’est pas le menu du site.",
                "La page peut être la première visitée.",
                "Vise index.html, qui est au même niveau.",
                "Ajoute <a href=\"index.html\">Accueil</a> dans nav de idees.html."
              ]
            },
            {
              "id": "diagnostic",
              "text": "Explique la différence entre un lien vers un fichier absent et l’absence de lien de retour. Dans le premier cas, le lien existe mais sa destination ne convient pas ; dans le second, l’action manque dans la page."
            }
          ]
        },
        {
          "type": "details",
          "id": "bonus-detail",
          "title": "Bonus facultatif — Une troisième destination",
          "blocks": [
            {
              "type": "tasks",
              "id": "bonus",
              "title": "Ajouter une page sans modifier l’organisation des dossiers",
              "intro": "Si les deux pages fonctionnent et que tu peux expliquer les liens, fais une nouvelle copie du dossier.",
              "items": [
                {
                  "id": "troisieme",
                  "text": "Crée observations.html dans le même dossier en copiant le cadre d’une page existante. Change title, h1 et paragraphe ; ne garde pas un deuxième accueil déguisé."
                },
                {
                  "id": "ajouter-menu",
                  "text": "Ajoute un lien Observations vers ce fichier dans les trois menus, en conservant Accueil et le lien vers idees.html.",
                  "hints": [
                    "Le nouveau fichier est voisin des deux autres.",
                    "Le nouveau lien doit aussi exister dans la nouvelle page.",
                    "Vérifie chaque nav séparément.",
                    "Ajoute <a href=\"observations.html\">Observations</a> dans les trois nav, dans le même ordre."
                  ]
                },
                {
                  "id": "tester-trois",
                  "text": "Depuis chacune des trois pages, teste toutes les destinations, puis ouvre observations.html directement. Aucun passage par l’accueil ne doit être nécessaire pour retrouver les autres pages."
                }
              ]
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Créer deux documents distincts et relier leurs fichiers avec des chemins relatifs corrects.",
        "Prévoir un retour qui fonctionne même quand la deuxième page est ouverte directement.",
        "Modifier le texte d’un lien sans changer sa destination, puis réparer un renommage dans les menus concernés.",
        "Différencier contenu, titre et nom de fichier ; vérifier les destinations au lieu de juger seulement l’apparence du menu.",
        "Expliquer une réparation ou un transfert sans modèle ; la troisième page est facultative."
      ],
      "consolidation": [
        {
          "moduleId": "html-multipage",
          "label": "Réparer destination et retour",
          "blockId": "panne"
        },
        {
          "moduleId": "html-liens",
          "label": "Reprendre texte et destination",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Reconnaître un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe."
            }
          ]
        },
        {
          "moduleId": "html-fichiers-chemins",
          "label": "Reprendre noms et chemins",
          "prerequisiteSkills": [
            {
              "skillId": "html.links",
              "expectation": "Reconnaître un lien et href."
            },
            {
              "skillId": "html.images",
              "expectation": "Distinguer src et alt dans les exercices de cette reprise."
            }
          ]
        },
        {
          "moduleId": "html-document",
          "label": "Reprendre le document complet",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe."
            }
          ]
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "html-multipage",
          "label": "Ajouter une troisième destination",
          "blockId": "bonus-detail",
          "prerequisiteSkills": [
            {
              "skillId": "html.navigation",
              "expectation": "Expliquer et tester l’aller/retour entre deux pages."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "web-mini-site",
          "label": "Construire un mini-site avec un style commun",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Repérer head et body et enregistrer un document HTML complet."
            },
            {
              "skillId": "html.paths",
              "expectation": "Retrouver un fichier à partir d’un chemin relatif."
            },
            {
              "skillId": "html.links",
              "expectation": "Distinguer l’adresse href et le texte visible d’un lien."
            },
            {
              "skillId": "html.navigation",
              "expectation": "Tester les menus des pages, y compris en ouverture directe."
            },
            {
              "skillId": "css.stylesheets",
              "expectation": "Relier une feuille et vérifier son chargement."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Réutiliser des classes."
            },
            {
              "skillId": "html.images",
              "expectation": "Insérer une image avec un alt adapté."
            },
            {
              "skillId": "css.fonts",
              "expectation": "Choisir des textes lisibles."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Choisir l’espace intérieur."
            },
            {
              "skillId": "css.sizing",
              "expectation": "Adapter une image et son conteneur sans déformer."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une déclaration de couleur et choisir un contraste lisible."
            }
          ]
        },
        {
          "moduleId": "css-feuille-style",
          "label": "Reprendre la liaison CSS avant le projet",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Repérer head et body."
            },
            {
              "skillId": "html.paths",
              "expectation": "Lire un chemin relatif."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une déclaration simple."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire construire et vérifier une navigation entre documents, puis réparer un renommage en distinguant destination, libellé, contenu et historique du navigateur.",
        "entryDiagnosis": [
          "Demander de montrer deux fichiers voisins et de lire un href relatif. Si la distinction fichier/dossier manque, reprendre Fichiers et chemins.",
          "Faire expliquer texte du lien et destination, puis retrouver head/body et title/h1. Reprendre la notion précise si nécessaire.",
          "Vérifier que l’élève sait enregistrer deux fichiers distincts ou peut être aidé pour cette manipulation. Un Pen unique ne permet pas d’attester cet essai multipage."
        ],
        "preparation": [
          "Nouveau dossier de travail hors de tout projet important ; éditeur et navigateur, extensions visibles si nécessaire.",
          "Préparer les deux documents fournis et une copie pour le renommage. Aucun serveur, compte ou publication requis.",
          "Les consignes et sources restent consultables sans partage d’écran. Prévoir une aide à Ouvrir avec si le double-clic lance l’éditeur."
        ],
        "why": "Un visiteur peut entrer par n’importe quelle page. Une navigation compréhensible doit fonctionner sans connaître son historique ni les chemins techniques du dossier.",
        "discoverySpeech": [
          "« Cette fois, chaque page vit dans son propre fichier. Le lien indique au navigateur quel autre document ouvrir ; il ne le crée pas pour nous. »",
          "« Le texte du lien annonce le voyage. href donne la destination. Changeons seulement les mots et vérifions que nous arrivons au même endroit. »",
          "« Le bouton Retour dépend de ce que tu as visité. Notre lien Accueil appartient à la page : il doit fonctionner même si tu commences ici. »",
          "« Nous écrivons le menu dans chaque fichier. Si nous renommons une destination, il faut vérifier toutes les références qui la nomment ; corriger une seule page ne met pas les autres à jour. »"
        ],
        "example": {
          "target": {
            "moduleId": "html-multipage",
            "label": "Lire le document d’accueil et ses liens",
            "blockId": "accueil"
          },
          "comments": [
            "Pointer title, h1 et les deux href sans confondre leurs rôles.",
            "Le nav est un regroupement de liens, pas un mécanisme de création automatique de pages. La présentation sans CSS convient.",
            "Ouvrir le deuxième document par le lien, puis directement depuis le dossier ; demander le retour par le menu.",
            "Le menu identique dans les deux fichiers est une répétition volontaire de ce petit site statique, pas une inclusion automatique."
          ]
        },
        "questions": [
          {
            "question": "Le lien crée-t-il decouvertes.html ?",
            "answer": "Non. Le fichier doit être créé et enregistré séparément ; href donne seulement où le trouver."
          },
          {
            "question": "Pourquoi écrire index.html pour revenir ?",
            "answer": "Dans cet exemple, le document d’accueil est un fichier voisin qui porte exactement ce nom."
          },
          {
            "question": "Changer Découvertes en Mes idées renomme-t-il le fichier ?",
            "answer": "Non. Le texte cliquable change, pas href ni le nom du fichier. Le titre de l’onglet et le h1 sont encore deux autres textes."
          },
          {
            "question": "Pourquoi ne pas se contenter du bouton Retour ?",
            "answer": "La deuxième page peut avoir été ouverte directement, sans accueil dans l’historique. Son menu doit permettre le retour indépendamment."
          },
          {
            "question": "Après un renommage, quels fichiers vérifier ?",
            "answer": "Tous ceux qui contiennent un href vers l’ancien nom, y compris le fichier renommé si son menu contient ce lien. Ici index.html et idees.html."
          },
          {
            "question": "Un menu identique se met-il à jour partout quand j’en modifie un ?",
            "answer": "Non. Le HTML des deux documents est indépendant. Il faut enregistrer et vérifier chaque menu."
          },
          {
            "question": "Pourquoi éviter C:\\\\... et /decouvertes.html ?",
            "answer": "Le premier dépend de l’ordinateur ; le second ne demande pas simplement un fichier voisin. Pour cet exercice, garder le nom relatif decouvertes.html, sans chemin absolu ni slash initial."
          },
          {
            "question": "Doit-on apprendre CSS avant de réussir ?",
            "answer": "Non. Des liens reconnaissables avec l’apparence du navigateur suffisent. La feuille commune intervient dans le projet suivant."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "html-multipage",
          "label": "Tester l’aller et le retour",
          "blockId": "guide"
        },
        "independentActivity": {
          "moduleId": "html-multipage",
          "label": "Renommer et réparer les menus",
          "blockId": "mission"
        },
        "differentiation": [
          "Aider à créer/enregistrer les fichiers sans dicter la destination. Distinguer difficulté d’éditeur et compréhension du lien.",
          "Si deux fichiers sont déjà prêts, faire directement le test sans historique puis le renommage, sans copie obligatoire.",
          "La troisième page est un bonus, pas une condition de poursuite. Ne pas ajouter sous-dossiers, ancres ou publication pour occuper un élève rapide."
        ],
        "commonErrors": [
          {
            "symptom": "Deux documents collés dans le même fichier.",
            "helps": [
              "Demander combien de fichiers existent réellement.",
              "Ouvrir chaque onglet de l’éditeur et vérifier son nom.",
              "Conserver un seul cadre complet par fichier, puis modifier le deuxième h1 pour prouver que ce sont deux documents."
            ]
          },
          {
            "symptom": "Lien visible mais fichier introuvable.",
            "helps": [
              "Lire le href et le dossier côte à côte.",
              "Comparer nom, extension et emplacement, pas les couleurs du lien.",
              "Rétablir le nom relatif exact, enregistrer, puis rouvrir la page source ; vérifier aussi que l’on teste la bonne copie."
            ]
          },
          {
            "symptom": "Aller réussi, retour impossible.",
            "helps": [
              "Ouvrir la deuxième page directement.",
              "Chercher un lien Accueil dans son nav.",
              "Ajouter le href vers index.html ; faire retester sans utiliser l’historique."
            ]
          },
          {
            "symptom": "Un seul menu réparé après renommage.",
            "helps": [
              "Demander où l’ancien nom est encore écrit.",
              "Inspecter nav dans les deux fichiers.",
              "Remplacer les deux références puis tester chaque lien de chaque page."
            ]
          }
        ],
        "notes": [
          "Solution de mission : idees.html remplace decouvertes.html ; les deux menus contiennent index.html et idees.html. Le title, h1 et texte visible sont adaptés au thème, sans obligation de correspondre exactement au nom technique.",
          "Consolidation : corriger idee.html en idees.html ; restaurer séparément le lien Accueil dans la page secondaire. Ne pas recréer un faux fichier pour masquer la faute.",
          "Bonus : observations.html possède un document complet et le même menu à trois destinations que les autres pages. Chaque destination doit être testée depuis chaque page.",
          "Observer réussite autonome, avec modèle ou avec aide. Une copie fonctionnelle n’est pas une preuve suffisante : demander un changement de nom et une explication.",
          "La compétence html.navigation est distincte de html.links et html.paths. Aucun report d’acquisition ni validation automatique de référentiel ; le suivi manuel existant suffit.",
          "Avant Mon mini-site, vérifier aussi CSS externe, classes et image lisible. Proposer les reprises nécessaires ; le multipage ne conditionne pas l’entrée dans Flexbox ou JavaScript."
        ],
        "quickConductor": [
          "Diagnostiquer document, href et fichiers voisins.",
          "Créer/enregistrer les deux pages et expliquer le menu.",
          "Tester aller, retour puis entrée directe sur la deuxième page.",
          "Faire modifier les mots puis renommer la destination.",
          "Consolider la cause exacte ou proposer la troisième page.",
          "Décider d’une reprise CSS ou du projet selon les acquis, sans rythme imposé."
        ],
        "references": [
          {
            "title": "MDN — Créer des liens",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links"
          },
          {
            "title": "MDN — Manipuler les fichiers",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          },
          {
            "title": "MDN — nav",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav"
          }
        ]
      }
    },
    "web-mini-site": {
      "domainId": "web",
      "title": "Mon mini-site",
      "type": "project",
      "theme": "debutants",
      "objective": "Réaliser deux pages reliées avec une feuille CSS commune, puis vérifier navigation, images et lisibilité.",
      "skillIds": [
        "html.document",
        "html.navigation",
        "html.links",
        "html.paths",
        "html.images",
        "css.stylesheets",
        "css.selectors",
        "css.colors",
        "css.fonts",
        "css.spacing",
        "css.sizing"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.document",
          "expectation": "Repérer head et body et enregistrer un document HTML complet."
        },
        {
          "skillId": "html.paths",
          "expectation": "Retrouver un fichier à partir d’un chemin relatif."
        },
        {
          "skillId": "html.links",
          "expectation": "Distinguer l’adresse href et le texte visible d’un lien."
        },
        {
          "skillId": "html.navigation",
          "expectation": "Tester aller/retour et entrée directe entre deux fichiers."
        },
        {
          "skillId": "html.images",
          "expectation": "Utiliser un fichier image et rédiger son alt."
        },
        {
          "skillId": "css.stylesheets",
          "expectation": "Relier un fichier CSS et prouver son chargement."
        },
        {
          "skillId": "css.selectors",
          "expectation": "Réutiliser une classe pour un même rôle."
        },
        {
          "skillId": "css.colors",
          "expectation": "Choisir texte et fond lisibles."
        },
        {
          "skillId": "css.fonts",
          "expectation": "Régler taille et interligne."
        },
        {
          "skillId": "css.spacing",
          "expectation": "Distinguer espace intérieur et extérieur."
        },
        {
          "skillId": "css.sizing",
          "expectation": "Garder une image proportionnée dans son conteneur."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "reprise",
          "title": "Avant le projet",
          "text": "Ce projet se réalise avec de vrais fichiers locaux. Si les liens entre pages ne sont pas encore clairs, reprends Relier plusieurs pages puis reviens ici. Si seule une autre notion bloque, utilise sa reprise en bas sans recommencer tout le parcours. Ni Flexbox ni publication ne sont nécessaires.",
          "moduleLink": {
            "text": "Relier plusieurs pages",
            "moduleId": "html-multipage"
          }
        },
        {
          "type": "lesson",
          "id": "intention",
          "title": "1 — Un petit site, pas deux copies de la même page",
          "paragraphs": [
            "Choisis un thème libre et non personnel : par exemple un petit musée de formes, un lieu imaginaire ou un carnet d’idées. Ne publie aucune identité, adresse, photo personnelle ou donnée d’élève.",
            "L’accueil présente le thème et indique où aller. La seconde page apporte un contenu différent. Deux pages suffisent ; une troisième est un bonus facultatif.",
            "Le résultat doit fonctionner depuis n’importe quelle page, garder des styles cohérents et afficher au moins une image. Le projet réutilise les notions apprises : le but est de décider, vérifier et expliquer, pas d’ajouter des effets.",
            "Travaille sans IA, dans une copie de tes fichiers ou un nouveau dossier. Garde tes réalisations précédentes. Le bouton CodePen de l’interface n’est pas l’environnement de cet exercice multipage ; utilise un éditeur et un navigateur."
          ]
        },
        {
          "type": "checklist",
          "id": "cahier-charges",
          "title": "Cahier des charges",
          "items": [
            {
              "id": "exigence-1",
              "text": "Deux fichiers HTML complets dans le même dossier, avec un accueil index.html et une seconde page au nom simple choisi."
            },
            {
              "id": "exigence-2",
              "text": "Un title distinct pour chaque onglet et un h1 qui annonce le contenu de chaque page."
            },
            {
              "id": "exigence-3",
              "text": "Au moins un paragraphe pertinent sur chaque page, avec des contenus différents."
            },
            {
              "id": "exigence-4",
              "text": "Une navigation nav présente sur les deux pages, avec les mêmes destinations et le même ordre ; un retour Accueil fonctionne depuis la seconde page."
            },
            {
              "id": "exigence-5",
              "text": "Un seul fichier style.css commun, relié dans head de chaque document ; des classes réutilisées pour des rôles comparables."
            },
            {
              "id": "exigence-6",
              "text": "Un style lisible et cohérent : texte/fond contrastés, taille/interligne et espace intérieur choisis."
            },
            {
              "id": "exigence-7",
              "text": "Au moins une image présente dans le dossier images, affichée avec un alt adapté et sans déformation."
            },
            {
              "id": "exigence-8",
              "text": "Une vérification de toutes les destinations, de la feuille commune et des images, depuis chaque page et à une largeur plus étroite."
            },
            {
              "id": "exigence-9",
              "text": "Une modification de style commun et une réparation expliquées ; une troisième page reste facultative."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "dossier",
          "title": "2 — Préparer l’organisation",
          "paragraphs": [
            "Tu peux garder index.html et idees.html de l’exercice précédent, dans une copie. L’arbre ci-dessous est un exemple d’organisation : adapte le nom de ta seconde page et celui de l’image.",
            "Les deux HTML et style.css restent voisins. Les dessins sont rangés dans images. Conserver cette organisation limite les nouveaux chemins à comprendre : chaque HTML peut utiliser href=\"style.css\" et src=\"images/carre-bleu.svg\".",
            "Vérifie les extensions et les noms exacts. On ne place pas les deux pages HTML dans style.css ; ce fichier reçoit seulement les règles CSS. Pas besoin de serveur ni de mise en ligne pour ces liens et fichiers."
          ],
          "code": "mon-mini-site/\n├── index.html\n├── idees.html\n├── style.css\n└── images/\n    └── carre-bleu.svg"
        },
        {
          "type": "lesson",
          "id": "liaison",
          "title": "3 — Une feuille pour les deux documents",
          "paragraphs": [
            "Dans head de CHAQUE page, relie le même fichier style.css. Cette ligne est un rappel de Relier une feuille de style ; elle n’est pas un lien cliquable à placer dans le menu.",
            "Si tu pars d’une copie qui utilisait un autre fichier CSS, garde une copie de sauvegarde puis remplace son ancienne liaison par celle vers la feuille commune. Ne conserve pas une deuxième feuille ou un ancien bloc style qui masquerait tes essais."
          ],
          "code": "<link rel=\"stylesheet\" href=\"style.css\">"
        },
        {
          "type": "lesson",
          "id": "partage",
          "title": "Un petit essai pour prouver le partage",
          "paragraphs": [
            "Avant la réalisation complète, donne class=\"titre\" au h1 de chacune des deux pages et ajoute cette règle dans l’unique style.css. Ouvre les deux documents : leurs titres doivent être bleu marine.",
            "Change navy en darkgreen uniquement dans style.css, enregistre puis actualise CHACUNE des pages. Si les deux titres changent, tu as une preuve que cette règle commune agit sur les deux.",
            "Le fichier commun est relu lors du chargement ou de l’actualisation de chaque page ; une page déjà ouverte ne se met pas à jour toute seule pendant la saisie.",
            "CSS partage les règles d’apparence, pas le contenu HTML. Modifier le menu dans un fichier ne modifie donc pas automatiquement l’autre. Ne crée pas style-accueil.css et style-idees.css pour reproduire les mêmes règles."
          ],
          "code": ".titre {\n  color: navy;\n}"
        },
        {
          "type": "tasks",
          "id": "preparer",
          "title": "Préparer avant de remplir les pages",
          "intro": "Tu peux réutiliser le cadre complet du cours précédent, mais pas conserver deux contenus identiques.",
          "items": [
            {
              "id": "message",
              "text": "Écris le rôle de chaque page : ce que l’accueil présente et ce que la seconde page apporte. Choisis les mots du menu."
            },
            {
              "id": "fichiers",
              "text": "Crée ou copie tes deux HTML, puis crée style.css et le dossier images. Vérifie que tu travailles dans la bonne copie."
            },
            {
              "id": "menus",
              "text": "Teste d’abord les liens entre les deux pages sans te préoccuper des couleurs. Les menus doivent être utilisables depuis une ouverture directe."
            },
            {
              "id": "css-partage",
              "text": "Réalise le petit essai de couleur commune ci-dessus. Si une page ne change pas, vérifie sa liaison et la classe de son titre avant de recopier la règle ailleurs."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "ressource-intro",
          "title": "Une image disponible pour ton site local",
          "paragraphs": [
            "Tu peux utiliser le carré fourni pour un thème de formes ou le remplacer par un fichier d’exercice déjà disponible. Aucun téléchargement d’image personnelle ni recherche Internet n’est requis.",
            "Dans la ressource ci-dessous, choisis Télécharger pour un projet local et place carre-bleu.svg dans ton dossier images. Pour ce projet, tu n’as pas besoin du bouton de source encodée destiné à CodePen.",
            "Dans le HTML de la page illustrée, utilise une balise img avec src=\"images/carre-bleu.svg\", une classe pour son style et un alt que tu rédiges pour décrire le dessin. Réutilise les réglages de proportions du cours Dimensions.",
            "Si la même image sert sur deux pages voisines, les deux src peuvent viser le même fichier : inutile de le dupliquer. Ne déplace pas les ressources d’un autre projet ; copie-les ou télécharge-les dans celui-ci."
          ]
        },
        {
          "type": "reference",
          "id": "source-image",
          "moduleId": "html-images",
          "blockId": "ressource-carre"
        },
        {
          "type": "tasks",
          "id": "realisation",
          "title": "4 — Réaliser ton mini-site",
          "intro": "Essaie avant d’ouvrir les aides. Les cours restent accessibles ; aucune solution complète du projet n’est fournie.",
          "items": [
            {
              "id": "contenus",
              "text": "Rédige les deux pages : title et h1 distincts, puis un contenu qui correspond au rôle choisi. Dans chaque nav, garde les mêmes textes de liens et destinations.",
              "hints": [
                "Sépare les mots de la page et les noms des fichiers.",
                "Un visiteur doit comprendre la destination avant de cliquer.",
                "Le title est dans head ; le h1 et les liens sont dans body.",
                "Reprends le cadre du cours multipage si nécessaire, puis écris des contenus différents et reteste le menu."
              ]
            },
            {
              "id": "styles",
              "text": "Dans style.css, règle la présentation commune de tes titres et paragraphes avec des classes cohérentes. Choisis une lecture facile ; noir sur blanc convient.",
              "hints": [
                "Choisis un nom de classe par rôle utile.",
                "Compare les classes présentes dans les deux HTML.",
                "Une règle peut servir dans plusieurs pages si chaque page charge le fichier.",
                "Reprends l’essai .titre et applique le même raisonnement aux paragraphes ; évite de recopier une règle identique pour chaque page."
              ]
            },
            {
              "id": "image",
              "text": "Ajoute ton image sur au moins une page. Rédige alt, vérifie le chemin et conserve ses proportions en adaptant sa largeur.",
              "hints": [
                "Vérifie d’abord que l’image se charge.",
                "Le chemin est lu depuis le fichier HTML.",
                "Une image chargée mais écrasée est un problème de dimensions, pas de src.",
                "Utilise Images pour la source/alt, ou Dimensions pour width et height auto ; ne cache pas le problème avec une hauteur choisie au hasard."
              ]
            },
            {
              "id": "espace",
              "text": "Aère les contenus et teste une largeur plus étroite. Tu peux réutiliser une carte ou un conteneur déjà construit ; aucune nouvelle mise en page n’est imposée.",
              "hints": [
                "Localise l’espace manquant.",
                "L’air entre lignes et l’air autour du contenu ne se règlent pas de la même façon.",
                "Un conteneur trop large peut dépasser même si son image lui obéit.",
                "Reprends Lisibilité, Boîtes ou Dimensions selon le seul point fragile."
              ]
            },
            {
              "id": "identite",
              "text": "Vérifie que les pages se reconnaissent comme un même site sans avoir le même texte. Des couleurs, classes et liens cohérents suffisent."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "verifier",
          "title": "5 — Vérifier comme un visiteur",
          "intro": "Enregistre tous les fichiers. Tester seulement index.html ne suffit pas.",
          "items": [
            {
              "id": "toutes-destinations",
              "text": "Depuis index.html, clique sur chaque lien ; recommence depuis la seconde page. Vérifie le nom du fichier, le titre visible et le contenu atteint."
            },
            {
              "id": "entree-directe",
              "text": "Ouvre la seconde page directement depuis le dossier, puis retrouve l’accueil par son menu, sans utiliser Retour."
            },
            {
              "id": "preuve-css",
              "text": "Change temporairement une couleur ou un réglage de texte dans une règle commune, sans modifier les HTML. Actualise chaque page et explique pourquoi le résultat change aux deux endroits."
            },
            {
              "id": "controle-images",
              "text": "Sur chaque page illustrée, vérifie que l’image charge, garde sa forme et possède un alt pertinent. Un texte alternatif ne dispense pas de réparer une image absente."
            },
            {
              "id": "largeur",
              "text": "Compare chaque page dans une fenêtre large puis plus étroite. Les textes et images doivent rester accessibles ; ne diminue pas tout le texte pour cacher un dépassement."
            },
            {
              "id": "transfert",
              "text": "Sans agrandir les lettres, donne davantage d’air entre les lignes des paragraphes sur les DEUX pages en changeant une seule déclaration commune. Explique où tu as travaillé."
            },
            {
              "id": "presenter",
              "text": "Présente le rôle des pages, un trajet de navigation et une décision CSS. Dis ce que tu as réalisé seul, avec modèle ou avec aide. Si tu es en cours, montre ton résultat au professeur ; sinon utilise ces vérifications pour choisir une reprise."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "consolider",
          "title": "Consolidation — Trois causes à ne pas mélanger",
          "intro": "Fais ces essais dans une copie du dossier. Répare chaque panne avant la suivante.",
          "items": [
            {
              "id": "lien-casse",
              "text": "Dans le menu de l’accueil, remplace temporairement le href de la seconde page par absent.html. Observe le lien cassé, puis corrige uniquement la destination.",
              "hints": [
                "Le texte cliquable peut être correct malgré une mauvaise adresse.",
                "Compare href au nom réel du second fichier.",
                "Ne renomme pas le title pour réparer un chemin.",
                "Rétablis le vrai nom dans href, enregistre puis rouvre l’accueil et teste le lien."
              ]
            },
            {
              "id": "feuille-absente",
              "text": "Dans head de la seconde page seulement, remplace href=\"style.css\" par href=\"absent.css\". Observe que cette page perd les règles de la feuille, alors que l’accueil les garde. Répare la liaison.",
              "hints": [
                "La navigation peut fonctionner même sans le style.",
                "Compare les deux link.",
                "La feuille existe ; une page demande un autre nom.",
                "Rétablis href=\"style.css\", enregistre puis actualise cette page. Ne duplique pas le CSS dans le HTML."
              ]
            },
            {
              "id": "classe-absente",
              "text": "Avec les bonnes liaisons, change temporairement class=\"titre\" en class=\"autre\" sur un seul h1. Le reste du style doit encore agir : explique puis corrige la classe.",
              "hints": [
                "La feuille peut être chargée même si un titre n’est pas ciblé.",
                "Compare sélecteur et attribut class.",
                "Regarde si les paragraphes gardent leur style.",
                "Remets la classe attendue ou adapte consciemment une règle ; une nouvelle copie du fichier CSS ne résoudrait pas le ciblage."
              ]
            },
            {
              "id": "image-absente",
              "text": "Si seule une image manque, vérifie son src et son fichier plutôt que les liens du menu ou link. Explique le rôle des trois adresses."
            }
          ]
        },
        {
          "type": "details",
          "id": "bonus-detail",
          "title": "Bonus facultatif — Une troisième page cohérente",
          "blocks": [
            {
              "type": "tasks",
              "id": "bonus",
              "title": "Prolonger le même site",
              "intro": "Seulement si tu peux déjà expliquer et modifier les deux pages.",
              "items": [
                {
                  "id": "troisieme",
                  "text": "Crée une troisième page dans le même dossier, avec un title, un h1 et un contenu propres. Réutilise le cadre et la feuille commune ; une copie de HTML doit être adaptée."
                },
                {
                  "id": "menus-trois",
                  "text": "Ajoute sa destination dans les trois menus, dans le même ordre. Garde le lien Accueil et les destinations précédentes."
                },
                {
                  "id": "controle-trois",
                  "text": "Teste tous les liens depuis chacune des trois pages et prouve qu’une modification de style.css atteint les trois après actualisation. Ne crée pas une feuille CSS supplémentaire."
                }
              ]
            }
          ]
        },
        {
          "type": "callout",
          "id": "suite",
          "title": "Après ce jalon",
          "text": "Conserve ton dossier complet : HTML, CSS et images vont ensemble. Ce projet reste local ; aucune publication n’est demandée. Une suite ou une consolidation se choisit selon les acquis, pas parce que toutes les cases sont cochées. Le multipage n’est pas un passage obligé avant Flexbox ou JavaScript ; aucun module JavaScript n’est encore proposé ici."
        }
      ],
      "masteryCriteria": [
        "Concevoir deux pages aux rôles distincts et une navigation explicite, vérifiée depuis chaque entrée.",
        "Relier la même feuille aux deux documents et prouver un changement commun sans modifier leurs HTML.",
        "Utiliser des fichiers images et des chemins corrects, avec texte alternatif et proportions adaptés.",
        "Différencier fichier destination absent, feuille non chargée, sélecteur incorrect et image absente.",
        "Justifier les choix puis réaliser une modification commune sans nom de propriété, en précisant le niveau d’aide.",
        "Vérifier réellement les fichiers ; le projet, l’apparence et la checklist ne déclenchent aucune acquisition automatique."
      ],
      "consolidation": [
        {
          "moduleId": "web-mini-site",
          "label": "Séparer les causes et réparer",
          "blockId": "consolider"
        },
        {
          "moduleId": "html-multipage",
          "label": "Reprendre les liens entre documents",
          "blockId": "panne",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Repérer head et body et enregistrer un document HTML complet."
            },
            {
              "skillId": "html.paths",
              "expectation": "Retrouver un fichier à partir d’un chemin relatif."
            },
            {
              "skillId": "html.links",
              "expectation": "Distinguer l’adresse href et le texte visible d’un lien."
            }
          ]
        },
        {
          "moduleId": "css-feuille-style",
          "label": "Reprendre chargement et sélecteur",
          "blockId": "reparer",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Repérer head/body."
            },
            {
              "skillId": "html.paths",
              "expectation": "Lire un chemin."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une règle simple."
            }
          ]
        },
        {
          "moduleId": "html-images",
          "label": "Reprendre src et alt",
          "blockId": "depannage",
          "prerequisiteSkills": [
            {
              "skillId": "html.text",
              "expectation": "Modifier un extrait HTML."
            }
          ]
        },
        {
          "moduleId": "html-fichiers-chemins",
          "label": "Reprendre le rangement des ressources",
          "prerequisiteSkills": [
            {
              "skillId": "html.links",
              "expectation": "Lire href."
            },
            {
              "skillId": "html.images",
              "expectation": "Distinguer src et alt."
            }
          ]
        },
        {
          "moduleId": "css-textes-lisibles",
          "label": "Reprendre l’interligne",
          "blockId": "panne",
          "prerequisiteSkills": [
            {
              "skillId": "css.selectors",
              "expectation": "Cibler une classe."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une déclaration."
            }
          ]
        },
        {
          "moduleId": "css-dimensions-images",
          "label": "Réparer proportions ou dépassement",
          "blockId": "panne",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Repérer la carte parent et l’image à l’intérieur."
            },
            {
              "skillId": "html.images",
              "expectation": "Insérer une source dans src et rédiger un alt adapté."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier les classes HTML aux règles CSS."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Distinguer padding et margin et lire une bordure simple."
            }
          ]
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "web-mini-site",
          "label": "Ajouter une troisième page sans dupliquer les styles",
          "blockId": "bonus-detail",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Repérer head et body et enregistrer un document HTML complet."
            },
            {
              "skillId": "html.paths",
              "expectation": "Retrouver un fichier à partir d’un chemin relatif."
            },
            {
              "skillId": "html.links",
              "expectation": "Distinguer l’adresse href et le texte visible d’un lien."
            },
            {
              "skillId": "html.navigation",
              "expectation": "Tester aller/retour et entrée directe entre deux fichiers."
            },
            {
              "skillId": "html.images",
              "expectation": "Utiliser un fichier image et rédiger son alt."
            },
            {
              "skillId": "css.stylesheets",
              "expectation": "Relier un fichier CSS et prouver son chargement."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Réutiliser une classe pour un même rôle."
            },
            {
              "skillId": "css.colors",
              "expectation": "Choisir texte et fond lisibles."
            },
            {
              "skillId": "css.fonts",
              "expectation": "Régler taille et interligne."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Distinguer espace intérieur et extérieur."
            },
            {
              "skillId": "css.sizing",
              "expectation": "Garder une image proportionnée dans son conteneur."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "css-flexbox",
          "label": "Explorer Flexbox si les bases de mise en page sont comprises",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Identifier parents et enfants directs."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier classe et règle."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Distinguer espaces intérieur et extérieur."
            },
            {
              "skillId": "css.sizing",
              "expectation": "Lire la largeur d’une carte et de son contenu."
            }
          ]
        },
        {
          "moduleId": "web-mini-site",
          "label": "Approfondir le même site selon tes besoins",
          "blockId": "bonus-detail",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Repérer head et body et enregistrer un document HTML complet."
            },
            {
              "skillId": "html.paths",
              "expectation": "Retrouver un fichier à partir d’un chemin relatif."
            },
            {
              "skillId": "html.links",
              "expectation": "Distinguer l’adresse href et le texte visible d’un lien."
            },
            {
              "skillId": "html.navigation",
              "expectation": "Tester aller/retour et entrée directe entre deux fichiers."
            },
            {
              "skillId": "html.images",
              "expectation": "Utiliser un fichier image et rédiger son alt."
            },
            {
              "skillId": "css.stylesheets",
              "expectation": "Relier un fichier CSS et prouver son chargement."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Réutiliser une classe pour un même rôle."
            },
            {
              "skillId": "css.colors",
              "expectation": "Choisir texte et fond lisibles."
            },
            {
              "skillId": "css.fonts",
              "expectation": "Régler taille et interligne."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Distinguer espace intérieur et extérieur."
            },
            {
              "skillId": "css.sizing",
              "expectation": "Garder une image proportionnée dans son conteneur."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire organiser et vérifier un petit ensemble de pages avec des styles communs, puis observer une réparation et un transfert sans introduire une nouvelle mise en page.",
        "entryDiagnosis": [
          "Faire ouvrir une deuxième page directement puis revenir à l’accueil par son menu. Attendu : navigation indépendante de l’historique.",
          "Demander de prouver qu’un fichier CSS agit : changer une déclaration, enregistrer, actualiser. Si cette preuve manque, reprendre C3.",
          "Faire expliquer href du menu, href de link et src de l’image. Accepter une explication simple des trois rôles avant le vocabulaire.",
          "Vérifier classes, image proportionnée et distinction interligne/padding. Le projet ne doit pas devenir un apprentissage forcé de tous les prérequis en même temps."
        ],
        "preparation": [
          "Copie du dossier multipage ou nouveau dossier ; un seul style.css voisin des deux HTML, images dans images.",
          "Garder la ressource téléchargeable et les liens de reprise accessibles. Pas d’image personnelle ni de recherche externe obligatoire.",
          "Préparer une fenêtre large et une plus étroite ; pas de serveur, de publication, de compte ni d’extension requis.",
          "Préparer les trois pannes dans une copie, une à la fois ; ne pas casser la réalisation que l’élève souhaite conserver."
        ],
        "why": "Le partage d’une feuille donne une apparence cohérente et rend un changement vérifiable sur plusieurs pages. L’élève apprend aussi à distinguer les adresses et les causes d’une panne.",
        "discoverySpeech": [
          "« Notre accueil et notre deuxième page ont des contenus différents, mais des repères communs. Le menu dit où aller ; le style aide à reconnaître le même site. »",
          "« Les deux documents peuvent lire le même fichier CSS. Nous allons le prouver en changeant une seule règle, puis en actualisant les deux pages. »",
          "« Attention : partager le CSS ne partage pas le menu HTML. Si tu changes une destination, il faudra encore vérifier chaque menu. »",
          "« Si une page s’ouvre sans couleurs, ce n’est pas forcément un lien de navigation cassé. Si une image manque, ce n’est pas forcément le CSS. Cherchons quelle adresse ou quel sélecteur fait le travail. »",
          "« Deux pages bien vérifiées suffisent. La troisième est une possibilité, pas une obligation pour aller plus vite vers une autre notion. »"
        ],
        "example": {
          "target": {
            "moduleId": "web-mini-site",
            "label": "Prouver une règle commune",
            "blockId": "partage"
          },
          "comments": [
            "Ajouter la liaison dans head des deux documents et class=\"titre\" aux deux h1 avant de demander l’effet de .titre.",
            "Passer navy à darkgreen seulement dans style.css, enregistrer puis recharger chaque page. Ne pas confondre actualisation et modification automatique en direct.",
            "Tester la panne de liaison sur la seconde page puis celle de classe : dans la seconde panne, les autres règles continuent d’agir."
          ]
        },
        "questions": [
          {
            "question": "Faut-il un CSS différent pour chaque page ?",
            "answer": "Non pour ce projet : les deux documents lient le même style.css et partagent des classes pour des rôles comparables."
          },
          {
            "question": "Pourquoi une page déjà ouverte garde-t-elle l’ancien style ?",
            "answer": "Après enregistrement, il faut l’actualiser pour qu’elle recharge la feuille. L’exercice ne dispose pas d’un outil de rafraîchissement automatique."
          },
          {
            "question": "Le menu change-t-il partout si je modifie un HTML ?",
            "answer": "Non. La feuille partage les styles, pas les éléments HTML. Les menus restent à contrôler dans chaque document."
          },
          {
            "question": "Les liens fonctionnent mais une page a perdu son style : que vérifier ?",
            "answer": "Son link dans head, le chemin exact vers style.css et l’enregistrement. Ne pas modifier les destinations du menu pour réparer la feuille."
          },
          {
            "question": "Un seul titre perd la couleur, mais les paragraphes restent stylés : que vérifier ?",
            "answer": "La classe du titre et le sélecteur. La feuille est probablement chargée puisque les autres règles agissent ; comparer avant de changer le chemin."
          },
          {
            "question": "Quel chemin utilise l’image rangée dans images ?",
            "answer": "Depuis ces HTML voisins, images/nom-du-fichier.svg. Le src est relatif à la page qui contient img, pas au dossier où l’on imagine le dessin."
          },
          {
            "question": "Comment aérer les paragraphes de deux pages sans agrandir les lettres ?",
            "answer": "Changer line-height dans la règle de leur classe commune, garder font-size puis enregistrer et actualiser les deux pages."
          },
          {
            "question": "Trois pages sont-elles obligatoires pour valider ?",
            "answer": "Non. Deux suffisent au cahier des charges ; on observe explications, tests et transfert avec leur niveau d’aide. Rien n’est validé automatiquement."
          },
          {
            "question": "Faut-il publier le mini-site pour qu’il fonctionne ?",
            "answer": "Non. Ces fichiers HTML/CSS et images fonctionnent localement. La publication est hors du lot, et l’ordinateur doit conserver le dossier complet."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "web-mini-site",
          "label": "Planifier et prouver la feuille commune",
          "blockId": "preparer"
        },
        "independentActivity": {
          "moduleId": "web-mini-site",
          "label": "Réaliser les pages et vérifier",
          "blockId": "realisation"
        },
        "differentiation": [
          "Aider à gérer les copies, extensions ou téléchargements sans choisir toutes les destinations. Noter séparément manipulation et compréhension.",
          "Si une seule notion manque, garder la production et utiliser la reprise correspondante. Une belle page copiée ne justifie pas un acquis global.",
          "Un élève maîtrisant la navigation peut commencer par le partage CSS et les pannes, puis produire ses contenus ; aucune répétition de durée fixe.",
          "La troisième page n’introduit que du réinvestissement. Ne pas ajouter effets, JavaScript ou publication comme obligation."
        ],
        "commonErrors": [
          {
            "symptom": "Deux CSS identiques deviennent différents par accident.",
            "helps": [
              "Faire montrer les link des deux pages.",
              "Demander quel fichier contient réellement la règle commune.",
              "Dans une copie, rassembler les règles utiles dans style.css et relier ce seul fichier ; retester une modification commune sans jeter les originaux."
            ]
          },
          {
            "symptom": "Une page charge mais n’est pas stylée.",
            "helps": [
              "Vérifier le fichier demandé dans link et le fichier réellement enregistré.",
              "Comparer la classe du titre si les autres règles agissent.",
              "Réparer la liaison OU le ciblage selon le constat, pas les deux au hasard."
            ]
          },
          {
            "symptom": "Le menu ou une image manque après changement de nom.",
            "helps": [
              "Lire l’adresse concernée : href du a, href du link ou src du img.",
              "Comparer depuis le document qui la contient.",
              "Réparer le nom exact puis tester toutes les pages qui le référencent."
            ]
          },
          {
            "symptom": "Les couleurs réussies masquent une compréhension fragile.",
            "helps": [
              "Demander un changement sans nom de propriété.",
              "Faire expliquer pourquoi les deux pages doivent être actualisées.",
              "Accompagner un premier essai puis proposer un autre changement sans modèle ; noter le niveau d’aide."
            ]
          }
        ],
        "notes": [
          "Solution possible, non imposée : index.html présente un musée de formes ; idees.html explique un dessin. Chaque page possède son title, un h1 class=\"titre\", un nav à deux liens et un p class=\"lecture\". La seconde ajoute img class=\"illustration\" avec le carré local et un alt descriptif.",
          "Dans les deux head : link rel=\"stylesheet\" href=\"style.css\". Exemple de styles communs : .titre { color: navy; font-size: 28px; }, .lecture { font-size: 18px; line-height: 1.5; }. Un conteneur .page peut reprendre width: 640px, max-width: 100%, box-sizing: border-box et padding: 16px ; .illustration reprend width: 100% et height: auto. Ces nombres ne sont pas une solution universelle à imposer.",
          "Transfert attendu : line-height 1.5→1.7 dans l’unique règle .lecture, sans changer 18px ni les HTML ; les deux pages reflètent la modification après actualisation.",
          "Pannes : rétablir le vrai nom de la seconde page dans a ; rétablir style.css dans link ; rétablir titre dans class. Pour une image absente, vérifier src et le fichier, pas le menu.",
          "Observer réussite autonome, avec modèle ou avec aide par compétence. Orthographe, goût graphique, aisance de fichier et compréhension ne sont pas la même chose. Ne pas déduire de validation officielle ou d’acquis global d’un projet terminé.",
          "Les zones header/main/footer peuvent être réinvesties si comprises, sans devenir une exigence cachée de ce petit projet. Aucun CSS avancé, arrondi, Flexbox ou effet au survol n’est obligatoire.",
          "Vers Flexbox : vérifier regroupements, classes, espaces et dimensions. Le multipage reste un approfondissement utile, pas un seuil obligatoire pour Flexbox ou JavaScript. Les modules JavaScript restent à créer."
        ],
        "quickConductor": [
          "Vérifier navigation, fichiers, classes et liaison CSS.",
          "Faire choisir deux rôles de page et lire le cahier des charges.",
          "Prouver la feuille commune par un essai simple.",
          "Laisser réaliser puis tester toutes les entrées, images et largeur.",
          "Donner le transfert puis une panne ciblée ; demander l’explication.",
          "Noter les acquis manuellement, consolider ou proposer le bonus selon les besoins."
        ],
        "references": [
          {
            "title": "MDN — Créer des liens",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links"
          },
          {
            "title": "MDN — link et feuille externe",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link"
          },
          {
            "title": "MDN — Fichiers et chemins",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          }
        ]
      }
    },
    "css-dimensions-images": {
      "domainId": "web",
      "title": "Dimensions et images dans une carte",
      "type": "lesson",
      "theme": "debutants",
      "objective": "Régler la largeur d’une carte et adapter son image sans la déformer ni la faire dépasser.",
      "skillIds": [
        "css.sizing",
        "html.images"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.structure",
          "expectation": "Repérer la carte parent et l’image à l’intérieur."
        },
        {
          "skillId": "html.images",
          "expectation": "Insérer une source dans src et rédiger un alt adapté."
        },
        {
          "skillId": "css.selectors",
          "expectation": "Relier les classes HTML aux règles CSS."
        },
        {
          "skillId": "css.spacing",
          "expectation": "Distinguer padding et margin et lire une bordure simple."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "reprise",
          "title": "Avant de commencer",
          "text": "Si tu confonds l’espace intérieur et extérieur, reprends Boîtes et espacements, puis reviens ici avec Retour dans le navigateur. Les reprises Images et Classes restent accessibles en bas ; copier une source ne prouve pas que tu sais expliquer src et alt.",
          "moduleLink": {
            "text": "Boîtes et espacements",
            "moduleId": "css-boites-espacements"
          }
        },
        {
          "type": "lesson",
          "id": "depart",
          "title": "1 — Une carte qui laisse sa place à l’image",
          "paragraphs": [
            "Tu vas obtenir une carte de 320px de large dans un aperçu assez grand. Elle pourra devenir plus étroite si la place manque ; son image suivra sa largeur en gardant sa forme.",
            "Ouvre un nouveau Pen : HTML et CSS vont dans leurs panneaux respectifs. En local, utilise une copie de ton projet avec feuille déjà reliée : contenu dans body, règles dans le fichier CSS, puis enregistre et actualise. La reprise Relier une feuille de style est accessible plus bas.",
            "Travaille sans IA. Les dessins fournis suffisent : aucune recherche d’image, aucun téléversement ni compte supplémentaire ne sont nécessaires. Un thème personnel ne demande aucune information personnelle."
          ]
        },
        {
          "type": "lesson",
          "id": "largeur",
          "title": "2 — Largeur de la carte : que mesure-t-on ?",
          "paragraphs": [
            "width fixe ici la largeur souhaitée de la carte. px signifie pixel CSS : width: 320px vise une largeur de 320 pixels CSS.",
            "Par défaut, la largeur d’une div désigne seulement son contenu : padding et bordure s’ajoutent. Avec 320px de contenu, 16px de padding de chaque côté et une bordure de 2px, la boîte ferait 356px de large.",
            "box-sizing: border-box change ce calcul : les 320px comprennent alors le contenu, le padding et la bordure. Le contenu dispose ici de 284px : 320 − 32 − 4. La margin, si tu en ajoutes une, reste à l’extérieur ; cet exemple n’en met pas sur la carte.",
            "max-width pose une limite. Ici 100% représente toute la largeur disponible du parent, pas toujours celle de l’écran. Avec border-box, la carte peut rétrécir pour tenir dans ce parent au lieu de conserver obligatoirement 320px.",
            "Ces règles aident dans les largeurs testées, elles ne rendent pas tout contenu automatiquement adaptable : des mots très longs ou un padding trop grand peuvent encore poser problème. Les adaptations avancées aux écrans viendront plus tard."
          ]
        },
        {
          "type": "lesson",
          "id": "proportions",
          "title": "3 — Image : une largeur et une hauteur liée",
          "paragraphs": [
            "Une image a des dimensions d’origine. Les deux dessins ci-dessous font 160 × 120 : le fichier entier est un rectangle, même si la forme dessinée à l’intérieur est un cercle ou un carré.",
            "Sur .illustration, width: 100% prend la largeur du contenu de la carte, sans son padding ni sa bordure. Cette règle peut agrandir une petite image ; une photo de faible qualité pourrait alors devenir floue.",
            "height est la hauteur. height: auto laisse le navigateur la calculer à partir des proportions de l’image. Quand la largeur est multipliée par deux, la hauteur l’est aussi : le cercle reste rond.",
            "Ne fixe pas en même temps une hauteur arbitraire pour faire rentrer l’image. Le texte peut prendre plusieurs lignes : on ne fixe pas non plus la hauteur de la carte. Elle grandit avec son contenu.",
            "Une image absente est un autre problème : commence par vérifier src et le chargement, pas par modifier ses dimensions. alt décrit le dessin ; ce n’est ni son adresse ni un réglage de taille."
          ]
        },
        {
          "type": "lesson",
          "id": "sources",
          "title": "4 — Choisir une source sans la retaper",
          "paragraphs": [
            "Pour le premier essai, prends le cercle orange. Clique sur Copier uniquement la source dans sa carte ci-dessous. Colle TOUT ce texte entre les guillemets de src dans l’exemple HTML, sans le retaper ni le modifier. Rédige ensuite toi-même alt entre ses propres guillemets.",
            "Le code court avec src=\"\" ci-dessous est un squelette à compléter, pas une image prête à s’afficher. Les données encodées restent repliées dans la ressource.",
            "En local, utilise plutôt Télécharger pour un projet local : place cercle-orange.svg dans un dossier images à côté de index.html, puis écris src=\"images/cercle-orange.svg\". Le texte alternatif reste à rédiger. Le carré suit la même logique avec carre-bleu.svg."
          ]
        },
        {
          "type": "reference",
          "id": "source-cercle",
          "moduleId": "html-images",
          "blockId": "ressource-cercle"
        },
        {
          "type": "reference",
          "id": "source-carre",
          "moduleId": "html-images",
          "blockId": "ressource-carre"
        },
        {
          "type": "lesson",
          "id": "html",
          "title": "HTML — Squelette à compléter",
          "paragraphs": [
            "Colle cet extrait dans HTML (ou dans body en local). Complète src et alt avant d’évaluer la taille de l’image. Les classes carte et illustration relient les éléments aux règles ci-dessous."
          ],
          "code": "<div class=\"carte\">\n  <h2>Un dessin à observer</h2>\n  <img class=\"illustration\" src=\"\" alt=\"\">\n  <p>Je compare sa forme avant et après le redimensionnement.</p>\n</div>"
        },
        {
          "type": "lesson",
          "id": "css",
          "title": "CSS — La carte et son image",
          "paragraphs": [
            "Colle ces règles dans CSS, sans balises <style>. Les propriétés de largeur concernent deux éléments différents : la carte et l’image. L’image ne possède ici ni padding ni bordure.",
            "La bordure et le fond sont des repères déjà rencontrés ; le petit espace qui peut rester sous une image en ligne n’est pas une déformation et n’a pas à être corrigé dans ce module."
          ],
          "code": ".carte {\n  width: 320px;\n  max-width: 100%;\n  box-sizing: border-box;\n  padding: 16px;\n  border: 2px solid navy;\n  background-color: white;\n}\n.illustration {\n  width: 100%;\n  height: auto;\n}"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — Observer un changement à la fois",
          "intro": "Agrandis l’aperçu pour laisser au moins 400px de place à la carte, puis compare.",
          "items": [
            {
              "id": "charger",
              "text": "Complète src avec la source du cercle et rédige alt. Vérifie d’abord que le cercle s’affiche. Si l’image est absente, utilise la reprise Images plutôt que de changer width."
            },
            {
              "id": "largeur-carte",
              "text": "Dans .carte seulement, remplace width: 320px par 240px. Prédis ce qui arrive à l’image, puis observe. Remets 320px.",
              "hints": [
                "Repère le parent de l’image.",
                "La largeur de l’image est un pourcentage du contenu de sa carte.",
                "Sa hauteur doit suivre sa largeur.",
                "À 240px, le contenu fait 204px avec ces espacements ; l’image mesure environ 204 × 153. À 320px, elle mesure 284 × 213."
              ]
            },
            {
              "id": "apercu-etroit",
              "text": "Réduis l’aperçu ou la fenêtre jusqu’à environ 260px. Vérifie que la carte rétrécit et que le cercle reste rond. Élargis de nouveau l’aperçu."
            },
            {
              "id": "texte-long",
              "text": "Ajoute une phrase avec des mots ordinaires au paragraphe. Observe les retours à la ligne et la carte qui grandit en hauteur ; ne lui ajoute pas de hauteur fixe."
            },
            {
              "id": "expliquer-taille",
              "text": "Explique pourquoi width: 100% sur l’image ne signifie pas 100 pixels, et pourquoi l’image est moins large que les 320px de la carte."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "mission",
          "title": "Mission autonome — Changer la carte sans écraser le dessin",
          "intro": "Essaie d’abord sans les indices ; conserve une copie de ton départ.",
          "items": [
            {
              "id": "remplacer-image",
              "text": "Remplace le cercle par le carré avec la seconde ressource. Change la source entière et réécris alt pour décrire le nouveau dessin."
            },
            {
              "id": "sans-nom-largeur",
              "text": "Donne à ta carte une largeur souhaitée plus petite, par exemple 280px, tout en lui permettant de rétrécir dans un aperçu plus étroit.",
              "hints": [
                "Repère la règle du conteneur.",
                "Change la largeur souhaitée, pas celle de l’image.",
                "La limite à 100% et le calcul incluant la bordure restent utiles.",
                "Dans .carte, mets width: 280px ; conserve max-width: 100% et box-sizing: border-box."
              ]
            },
            {
              "id": "sans-nom-image",
              "text": "Fais suivre à l’image la place disponible dans la carte, sans déformer le carré. Teste en rétrécissant puis en élargissant l’aperçu.",
              "hints": [
                "Observe le dessin, pas seulement le rectangle du fichier.",
                "La hauteur doit suivre les proportions d’origine.",
                "Compare une hauteur fixe et une hauteur calculée.",
                "Garde width: 100% et height: auto dans .illustration ; ne fixe pas une autre hauteur."
              ]
            },
            {
              "id": "predire-padding",
              "text": "En gardant la largeur de carte à 280px, passe son padding de 16px à 24px. Avant de tester, prédis ce qui arrive à la largeur extérieure et à l’image.",
              "hints": [
                "La bordure est comprise dans la largeur avec border-box.",
                "L’espace intérieur prend plus de place.",
                "Le contenu restant devient plus étroit.",
                "La carte reste à 280px si la place suffit ; le contenu passe de 244px à 228px. L’image suit ce contenu."
              ]
            },
            {
              "id": "expliquer",
              "text": "Présente une modification que tu as choisie et explique la règle qui agit. Une copie réussie ne remplace pas cette explication."
            }
          ]
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie ton travail",
          "items": [
            {
              "id": "verifier-1",
              "text": "L’image est réellement chargée et son alt décrit le dessin utilisé."
            },
            {
              "id": "verifier-2",
              "text": "Je distingue la largeur de la carte, son contenu et la largeur de l’image."
            },
            {
              "id": "verifier-3",
              "text": "La forme reste proportionnée dans un aperçu large puis étroit."
            },
            {
              "id": "verifier-4",
              "text": "Je peux réduire la largeur de la carte sans imposer une hauteur à l’image."
            },
            {
              "id": "verifier-5",
              "text": "Le texte reste dans la carte lorsqu’une phrase ajoute des lignes."
            },
            {
              "id": "verifier-6",
              "text": "J’explique pourquoi le padding change la place restante pour l’image."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "panne",
          "title": "Consolidation — Le cercle est devenu ovale",
          "paragraphs": [
            "Dans une copie, remets le cercle, la carte à 320px et un aperçu assez large. Remplace uniquement .illustration par cette règle : l’adresse de l’image reste correcte."
          ],
          "code": ".illustration {\n  width: 100%;\n  height: 80px;\n}"
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Réparer les proportions puis un débordement",
          "intro": "Deux essais distincts : répare le premier avant de passer au second.",
          "items": [
            {
              "id": "reparer-hauteur",
              "text": "Rends le cercle rond sans réduire arbitrairement la largeur ni changer sa source.",
              "hints": [
                "Le cercle se charge déjà.",
                "Cherche le réglage qui impose une hauteur sans tenir compte de la largeur.",
                "Compare 80px et auto.",
                "Rétablis height: auto dans .illustration ; la hauteur redevient proportionnelle à la largeur."
              ]
            },
            {
              "id": "reparer-limite",
              "text": "Dans .carte, enlève temporairement max-width: 100%, garde width: 320px, puis rétrécis l’aperçu à environ 260px. Explique pourquoi la carte dépasse, puis rétablis seulement la limite.",
              "hints": [
                "Regarde d’abord la carte, pas son image.",
                "L’image peut suivre une carte trop large.",
                "Une largeur souhaitée et une limite n’ont pas le même rôle.",
                "Rétablis max-width: 100% dans .carte ; conserve border-box. Si le dépassement reste, vérifie d’éventuelles marges ajoutées ou un mot sans espace."
              ]
            }
          ]
        },
        {
          "type": "details",
          "id": "bonus-detail",
          "title": "Bonus facultatif — Limiter l’image sans l’agrandir",
          "blocks": [
            {
              "type": "lesson",
              "id": "bonus-explication",
              "title": "Remplir ou seulement limiter ?",
              "paragraphs": [
                "Si les proportions sont comprises, compare dans une copie les deux choix sur une carte à 320px. La règle de base width: 100% remplit son contenu, même quand le dessin d’origine est plus petit.",
                "Pour garder la largeur naturelle du dessin quand il a assez de place, remplace la règle .illustration entière par celle-ci. width: auto laisse sa largeur naturelle ; max-width: 100% le réduit seulement si le contenu de la carte est plus étroit. height: auto conserve les proportions."
              ],
              "code": ".illustration {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n}"
            },
            {
              "type": "tasks",
              "id": "bonus",
              "title": "Comparer avec la même image",
              "intro": "Ce choix est facultatif ; il n’est pas nécessaire pour passer au projet.",
              "items": [
                {
                  "id": "comparer-naturel",
                  "text": "À 320px de carte, compare le cercle de la règle de base et celui de la variante. Explique pourquoi le second reste à 160 × 120."
                },
                {
                  "id": "reduire-bonus",
                  "text": "Dans la variante, passe la carte à 160px. Le contenu est plus petit que le dessin naturel : vérifie que l’image rétrécit et garde ses proportions."
                },
                {
                  "id": "choisir",
                  "text": "Choisis entre remplir l’espace et ne pas agrandir une petite image. Justifie sans déclarer qu’une des deux règles convient à toutes les images."
                }
              ]
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Choisir la règle du conteneur pour changer sa largeur, et expliquer la largeur du contenu après padding et bordure.",
        "Conserver les proportions d’une image pendant une modification de largeur sans fixer arbitrairement sa hauteur.",
        "Réparer séparément une image déformée, une carte trop large et une image non chargée.",
        "Adapter src et alt lors d’un remplacement ; évaluer ce réinvestissement séparément du réglage CSS.",
        "Expliquer un transfert sans nom de propriété ; la comparaison facultative de taille naturelle n’est pas requise."
      ],
      "consolidation": [
        {
          "moduleId": "css-dimensions-images",
          "label": "Réparer la déformation et le débordement",
          "blockId": "panne"
        },
        {
          "moduleId": "html-images",
          "label": "Reprendre src et alt si l’image ne charge pas",
          "blockId": "depannage",
          "prerequisiteSkills": [
            {
              "skillId": "html.text",
              "expectation": "Reconnaître une balise et modifier un extrait."
            }
          ]
        },
        {
          "moduleId": "css-boites-espacements",
          "label": "Reprendre intérieur et extérieur",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Repérer la carte parent et l’image à l’intérieur."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier les classes HTML aux règles CSS."
            }
          ]
        },
        {
          "moduleId": "css-classes-couleurs",
          "label": "Reprendre le ciblage de la carte et de son image",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une règle CSS simple."
            }
          ]
        },
        {
          "moduleId": "css-feuille-style",
          "label": "Relier le CSS si tu travailles avec des fichiers",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Repérer head et body."
            },
            {
              "skillId": "html.paths",
              "expectation": "Lire un chemin de fichier."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une règle CSS."
            }
          ]
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "css-dimensions-images",
          "label": "Comparer remplissage et taille naturelle",
          "blockId": "bonus-detail",
          "prerequisiteSkills": [
            {
              "skillId": "css.sizing",
              "expectation": "Adapter la largeur et expliquer le maintien des proportions."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "web-carte-personnelle",
          "label": "Créer ta carte personnelle avec les acquis nécessaires",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Repérer la carte parent et l’image à l’intérieur."
            },
            {
              "skillId": "html.images",
              "expectation": "Insérer une source dans src et rédiger un alt adapté."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier les classes HTML aux règles CSS."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Distinguer padding et margin et lire une bordure simple."
            },
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre adapté au contenu."
            },
            {
              "skillId": "html.text",
              "expectation": "Rédiger des paragraphes en HTML."
            },
            {
              "skillId": "css.colors",
              "expectation": "Choisir un texte lisible sur son fond."
            },
            {
              "skillId": "css.fonts",
              "expectation": "Régler taille et interligne."
            },
            {
              "skillId": "css.sizing",
              "expectation": "Adapter la carte et son image aux largeurs testées."
            }
          ]
        },
        {
          "moduleId": "css-textes-lisibles",
          "label": "Reprendre la lisibilité avant le projet",
          "prerequisiteSkills": [
            {
              "skillId": "css.selectors",
              "expectation": "Cibler un élément par sa classe."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une déclaration CSS."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire raisonner sur la largeur disponible et les proportions, puis transférer à une autre carte sans confondre chargement, dimension et espace intérieur.",
        "entryDiagnosis": [
          "Montrer la carte et l’image : faire nommer le parent direct et retrouver les deux classes. Reprendre seulement le regroupement ou le ciblage en cas de difficulté.",
          "Faire insérer une source et expliquer src/alt. Une aide au collage n’est pas une erreur de compréhension ; une image absente n’est pas une erreur de dimensions.",
          "Faire distinguer padding et margin et lire border: 2px solid navy. Reprendre les boîtes si nécessaire, sans supposer ces notions acquises parce que le code précédent les contenait."
        ],
        "preparation": [
          "Nouveau Pen vide ou copie locale avec CSS effectivement relié. En local, préparer images/cercle-orange.svg et images/carre-bleu.svg à partir des ressources publiques existantes.",
          "Préparer une largeur d’aperçu supérieure à 400px, puis une largeur autour de 260px ; ne pas changer le zoom pour simuler le rétrécissement.",
          "Les cartes de ressource réutilisent les boutons existants : copier seulement la source entière, laisser les données encodées repliées et rédiger alt séparément.",
          "Prévoir l’exemple et la panne disponibles par liens ; pas de partage d’écran obligatoire ni de recherche d’images personnelles."
        ],
        "why": "Une largeur fixée ne garantit ni que la carte tient dans son parent ni que l’image garde ses proportions. Comprendre les relations évite de corriger au hasard ou de masquer le dépassement.",
        "discoverySpeech": [
          "« Cette largeur concerne la carte. L’image a une autre règle : elle suit le contenu disponible dans sa carte, pas la largeur entière de ton écran. »",
          "« Avec border-box, le padding et la bordure sont déjà compris dans la largeur annoncée. Si je leur donne plus de place, il en reste moins pour le texte et l’image. »",
          "« Le dessin a des proportions. Une hauteur choisie au hasard peut l’écraser ; auto laisse sa hauteur suivre sa largeur. Un cercle doit rester rond. »",
          "« La largeur souhaitée et la limite ne font pas le même travail. 320px est notre souhait ; 100% du parent empêche ici de l’imposer quand il manque de place. »",
          "« Nous vérifions d’abord que l’image se charge, puis sa forme. Nous pouvons ensuite choisir un autre dessin et expliquer ce qui reste identique dans les règles. »"
        ],
        "example": {
          "target": {
            "moduleId": "css-dimensions-images",
            "label": "Carte et image : deux règles",
            "blockId": "css"
          },
          "comments": [
            "Compléter d’abord le squelette avec la source entière et un alt personnel. Faire identifier la cible de chaque règle avant de modifier.",
            "À largeur suffisante : carte extérieure 320px, contenu 284px, dessin 284 × 213. À 240px de carte : contenu 204px et dessin 204 × 153.",
            "Ces nombres décrivent ce code sans marge sur la carte ni bordure sur l’image ; les arrondis du navigateur peuvent varier légèrement au zoom.",
            "Sur un aperçu plus étroit, vérifier la bordure droite et la forme du dessin. L’image peut rester proportionnée dans une carte qui dépasse si la limite manque : observer les deux éléments."
          ]
        },
        "questions": [
          {
            "question": "width: 100% veut-il dire 100 pixels ?",
            "answer": "Non : ici, la largeur de l’image correspond à toute la largeur du contenu de sa carte. À 320px de carte avec ce padding et cette bordure, cela fait 284px."
          },
          {
            "question": "Pourquoi le dessin n’est-il pas large de 320px ?",
            "answer": "La carte comprend aussi 16px de padding de chaque côté et deux bordures de 2px, soit 36px. Le contenu restant fait 284px."
          },
          {
            "question": "Que change border-box ?",
            "answer": "width comprend contenu, padding et bordure. Les marges restent dehors. Sans ce réglage sur la div, ces espacements s’ajouteraient à la largeur du contenu."
          },
          {
            "question": "Comment réparer le cercle devenu ovale ?",
            "answer": "Remplacer la hauteur fixe 80px par auto dans la règle de l’image, en gardant la largeur adaptée. Ne pas changer src : le fichier est déjà chargé."
          },
          {
            "question": "Pourquoi le cercle est-il dans un fichier rectangulaire ?",
            "answer": "Le dessin rond occupe une zone de 160 × 120 avec du blanc autour. Le rapport à conserver est celui du fichier entier, 4 pour 3."
          },
          {
            "question": "Que faire si l’image n’apparaît pas du tout ?",
            "answer": "Vérifier src, la copie entière ou le chemin local, et le chargement. Les dimensions ne réparent pas une source absente."
          },
          {
            "question": "Faut-il imposer une hauteur à la carte ?",
            "answer": "Non ici. Sa hauteur suit le contenu ; des phrases supplémentaires doivent pouvoir ajouter des lignes sans sortir de la carte."
          },
          {
            "question": "max-width: 100% sur l’image seule suffit-il à réparer une carte trop large ?",
            "answer": "Non. L’image est limitée par sa carte ; c’est la carte elle-même qui doit pouvoir tenir dans son parent."
          },
          {
            "question": "Dans le bonus, faut-il garder width: 100% en plus ?",
            "answer": "Non. La variante remplace la règle par width: auto, max-width: 100% et height: auto pour ne pas agrandir le dessin au-delà de sa largeur naturelle."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "css-dimensions-images",
          "label": "Changer une largeur et observer",
          "blockId": "guide"
        },
        "independentActivity": {
          "moduleId": "css-dimensions-images",
          "label": "Remplacer le dessin et transférer les réglages",
          "blockId": "mission"
        },
        "differentiation": [
          "Aider à coller une source longue ou à redimensionner l’aperçu sans décider de la propriété à modifier.",
          "Si le calcul 320 − 36 freine l’élève, accepter une explication qualitative du contenu réduit ; faire observer les deux bords sans exiger un calcul mental rapide.",
          "Un élève à l’aise peut aller directement au remplacement, à la prédiction sur le padding puis au bonus. Aucun nombre d’essais ni temps fixé."
        ],
        "commonErrors": [
          {
            "symptom": "Données encodées abîmées ou alt collé dans src.",
            "helps": [
              "Demander si le dessin se charge.",
              "Vérifier les deux attributs séparément.",
              "Recopier uniquement la source entière depuis le bouton, sans modifier le texte encodé, puis rédiger alt ; reprendre Images si la distinction reste floue."
            ]
          },
          {
            "symptom": "L’image est déformée.",
            "helps": [
              "Demander ce qui a changé : largeur, hauteur ou source.",
              "Chercher une hauteur fixe dans .illustration ou un ancien style.",
              "Rétablir height: auto puis modifier la carte sans toucher à la hauteur ; faire prédire la forme."
            ]
          },
          {
            "symptom": "La carte dépasse alors que l’image lui obéit.",
            "helps": [
              "Regarder la bordure extérieure dans l’aperçu étroit.",
              "Vérifier max-width et box-sizing sur la carte, pas seulement sur l’image.",
              "Rétablir la limite, retirer une éventuelle marge ajoutée pour revenir au test de base, puis distinguer carte et contenu."
            ]
          },
          {
            "symptom": "Le padding est ajouté au-delà de la largeur attendue.",
            "helps": [
              "Lire le calcul de la boîte.",
              "Vérifier que border-box est appliqué à .carte.",
              "Comparer les deux modèles avec le même code ; revenir au réglage fourni avant la mission."
            ]
          }
        ],
        "notes": [
          "Solution de transfert possible : carte width 280px/max-width 100%/border-box ; image width 100%/height auto. Avec padding 24px et bordure 2px, le contenu fait 228px et le dessin 228 × 171.",
          "Consolidation 1 : remplacer 80px par auto ; consolidation 2 : rétablir max-width 100% sur la carte. Réparer et expliquer séparément les deux causes.",
          "Bonus : à 320px, la variante garde le dessin naturel à 160 × 120 ; à 160px de carte, le contenu est 124px et le dessin 124 × 93. Ce bonus n’est pas un prérequis du projet.",
          "La compétence css.sizing cible ce périmètre, pas tout le responsive. Aucune media query, grille, Flexbox, recadrage ou object-fit n’est requis.",
          "Observer réussite autonome, avec modèle ou avec aide. Distinguer l’aide à la manipulation, la compréhension de src/alt et celle des dimensions. Rien ne valide automatiquement les compétences ou un objectif de référentiel.",
          "Les bordures/espacements du départ servent de prérequis ; leur présence ne prouve pas leur acquisition et les arrondis restent hors du cours."
        ],
        "quickConductor": [
          "Vérifier images, classes et espaces ; proposer une reprise ciblée.",
          "Compléter la source et alt, puis expliquer les deux règles de largeur.",
          "Comparer aperçu large/étroit et contenu plus long.",
          "Demander remplacement et changement de largeur sans nom de propriété.",
          "Réparer la déformation ou le dépassement selon la difficulté.",
          "Proposer le projet si les acquis requis sont observés, sinon consolider ; bonus facultatif."
        ],
        "references": [
          {
            "title": "MDN — Dimensions en CSS",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing"
          },
          {
            "title": "MDN — box-sizing",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-sizing"
          },
          {
            "title": "MDN — max-width",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/max-width"
          },
          {
            "title": "MDN — height",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/height"
          }
        ]
      }
    },
    "web-carte-personnelle": {
      "domainId": "web",
      "title": "Ma carte personnelle",
      "type": "project",
      "theme": "debutants",
      "objective": "Concevoir, réaliser et vérifier une carte illustrée en réutilisant tes acquis HTML et CSS.",
      "skillIds": [
        "html.headings",
        "html.text",
        "html.images",
        "html.structure",
        "css.selectors",
        "css.colors",
        "css.fonts",
        "css.spacing",
        "css.sizing"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.headings",
          "expectation": "Créer un titre principal adapté au sujet."
        },
        {
          "skillId": "html.text",
          "expectation": "Créer des paragraphes et retrouver leurs balises."
        },
        {
          "skillId": "html.structure",
          "expectation": "Repérer la carte parent et l’image à l’intérieur."
        },
        {
          "skillId": "html.images",
          "expectation": "Insérer une source dans src et rédiger un alt adapté."
        },
        {
          "skillId": "css.selectors",
          "expectation": "Relier les classes HTML aux règles CSS."
        },
        {
          "skillId": "css.spacing",
          "expectation": "Distinguer padding et margin et lire une bordure simple."
        },
        {
          "skillId": "css.colors",
          "expectation": "Choisir une couleur de texte lisible sur son fond."
        },
        {
          "skillId": "css.fonts",
          "expectation": "Régler la taille du texte et l’interligne."
        },
        {
          "skillId": "css.sizing",
          "expectation": "Adapter la largeur d’une carte et préserver les proportions de son image."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "reprise",
          "title": "Avant le projet",
          "text": "Le projet réutilise des notions déjà expliquées. Si tu ne sais pas encore adapter la carte et son image, reprends Dimensions et images dans une carte, puis reviens avec Retour dans le navigateur. Les autres reprises sont accessibles plus bas : tu n’as pas à refaire tout un parcours.",
          "moduleLink": {
            "text": "Dimensions et images dans une carte",
            "moduleId": "css-dimensions-images"
          }
        },
        {
          "type": "lesson",
          "id": "intention",
          "title": "1 — Une création personnelle, sans données personnelles",
          "paragraphs": [
            "Crée une carte qui présente une idée, un lieu imaginaire, une activité ou un objet inventé. Personnel signifie que tu fais tes choix : ne mets ni nom complet, ni photo de toi, ni adresse, ni autre information privée.",
            "Résultat attendu : une seule carte illustrée, avec un titre, deux courts paragraphes et une présentation lisible. Elle tient dans les largeurs que tu testes, sans déformer son image.",
            "Ce n’est ni une course ni un concours de décoration. Tu peux garder des couleurs simples et utiliser le dessin fourni. Ce qui compte : choisir, expliquer et modifier ton code.",
            "Travaille sans IA. Le projet n’impose ni Flexbox, ni arrondis, ni survol, ni publication. Les liens, les listes et les zones de page ne sont pas nécessaires pour cette seule carte."
          ]
        },
        {
          "type": "checklist",
          "id": "cahier-charges",
          "title": "Cahier des charges — Ce que ta carte doit contenir",
          "items": [
            {
              "id": "exigence-1",
              "text": "Un conteneur avec une classe CSS, qui regroupe tout le contenu de la carte."
            },
            {
              "id": "exigence-2",
              "text": "Un h1 qui présente clairement ton thème, à l’intérieur du conteneur."
            },
            {
              "id": "exigence-3",
              "text": "Deux courts paragraphes sur ce thème, avec un style commun grâce à une classe réutilisée."
            },
            {
              "id": "exigence-4",
              "text": "Une image chargée, avec une classe pour ses dimensions et un alt que tu rédiges pour la décrire."
            },
            {
              "id": "exigence-5",
              "text": "Un texte lisible sur son fond, une taille et un interligne choisis pour lire facilement."
            },
            {
              "id": "exigence-6",
              "text": "De l’espace entre le contenu et le bord de la carte ; une bordure simple est facultative."
            },
            {
              "id": "exigence-7",
              "text": "Une largeur de carte choisie, limitée à l’espace disponible, et une image qui garde ses proportions."
            },
            {
              "id": "exigence-8",
              "text": "Une vérification dans un aperçu large puis plus étroit, et une modification expliquée sans recopier une solution complète."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "organisation",
          "title": "2 — Choisir ton environnement",
          "paragraphs": [
            "Dans CodePen : crée un nouveau Pen, avec le contenu dans HTML et les règles dans CSS. Tu peux aussi partir d’une copie de ton exercice Dimensions, mais il faudra changer le contenu, ajouter le second paragraphe et justifier tes choix.",
            "En local : fais une copie de ton dossier HTML/CSS. Garde le cadre complet, sa ligne link et les fichiers associés ; remplace le contenu de body et adapte la feuille. Enregistre les deux fichiers et actualise index.html. La gestion des fichiers n’est pas une nouvelle exigence si tu choisis CodePen.",
            "Les cours restent consultables : essayer seul ne signifie pas rester bloqué sans aide. Note simplement ce que tu as repris et ce que tu as pu faire sans modèle."
          ]
        },
        {
          "type": "tasks",
          "id": "preparer",
          "title": "Préparer le message avant de coder",
          "intro": "Pas besoin de dessiner une maquette détaillée.",
          "items": [
            {
              "id": "choisir-theme",
              "text": "Choisis un thème et écris les mots du titre, puis deux phrases ou petits paragraphes qui vont ensemble."
            },
            {
              "id": "choisir-image",
              "text": "Choisis le dessin fourni ou une image déjà disponible dans tes fichiers d’exercice et autorisée à être utilisée. Le dessin générique suffit : aucune recherche sur Internet n’est demandée."
            },
            {
              "id": "planifier",
              "text": "Explique le regroupement prévu : la carte est parent du titre, des paragraphes et de l’image. Choisis des noms de classes compréhensibles."
            },
            {
              "id": "petit-essai",
              "text": "Si tu pars d’une copie de Dimensions, change seulement la largeur souhaitée et prédis l’effet sur l’image. Si ce test bloque, reprends ce réglage avant de construire le reste."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "ressource-intro",
          "title": "Une illustration disponible sans recherche",
          "paragraphs": [
            "Tu peux choisir un thème comme « Un signal orange » avec ce dessin. Dans CodePen, copie uniquement la source entière avec le bouton puis colle-la entre les guillemets de src ; ne la retape pas. Écris ton propre alt séparément. Les données encodées restent repliées.",
            "En local, télécharge le dessin dans images à côté de index.html et utilise images/cercle-orange.svg. Pour le carré ou une aide à la source, le cours Dimensions et le module Images restent accessibles dans les reprises.",
            "Tu n’as pas besoin d’inventer un nouveau chemin si la source que tu utilisais fonctionne déjà. Rédige toutefois alt pour l’image réellement présente."
          ]
        },
        {
          "type": "reference",
          "id": "source-image",
          "moduleId": "html-images",
          "blockId": "ressource-cercle"
        },
        {
          "type": "tasks",
          "id": "realisation",
          "title": "3 — Réaliser ta carte",
          "intro": "Essaie chaque étape avant d’ouvrir son indice. Aucun code complet de projet n’est fourni ici.",
          "items": [
            {
              "id": "assembler",
              "text": "Crée le conteneur et place le titre, les deux paragraphes et l’image à l’intérieur. Vérifie les fermetures avant de passer au style.",
              "hints": [
                "Repère l’ouverture et la fermeture du conteneur.",
                "Les quatre éléments sont ses enfants directs ; img n’a pas de balise fermante.",
                "Le deuxième paragraphe doit rester avant la fermeture du conteneur.",
                "Reprends l’exemple Parent et enfants si l’imbrication reste floue, puis reviens avec tes propres textes."
              ]
            },
            {
              "id": "cibler",
              "text": "Relie tes classes aux règles CSS. Donne la même classe aux deux paragraphes pour pouvoir régler leur texte ensemble.",
              "hints": [
                "Compare chaque attribut class à son sélecteur.",
                "Le point appartient au sélecteur CSS, pas au nom écrit dans class.",
                "Deux paragraphes peuvent partager une classe.",
                "Reprends Classes et couleurs seulement si tu ne retrouves pas la règle qui les sélectionne."
              ]
            },
            {
              "id": "lire",
              "text": "Choisis des couleurs contrastées et une taille/interligne lisibles. Tu peux garder du texte noir sur blanc. Le titre doit rester repérable.",
              "hints": [
                "Lis réellement les deux paragraphes.",
                "Ne change qu’un réglage à la fois.",
                "Une couleur du fond et la couleur des lettres sont deux choix distincts.",
                "Reprends le cours Rendre les textes lisibles pour comparer taille et interligne, sans recopier tous les styles."
              ]
            },
            {
              "id": "espacer",
              "text": "Laisse respirer le contenu à l’intérieur de la carte. Ajoute une bordure simple seulement si elle sert ta présentation.",
              "hints": [
                "Localise l’espace qui manque par rapport au bord.",
                "Ne confonds pas marge extérieure et espace intérieur.",
                "Une bordure n’est pas nécessaire pour appliquer un padding.",
                "Reprends Boîtes et espacements si tu ne sais pas choisir entre padding et margin."
              ]
            },
            {
              "id": "dimensionner",
              "text": "Choisis la largeur souhaitée et garde une limite pour l’aperçu étroit. Adapte ton image en conservant sa forme ; laisse la carte grandir avec le texte.",
              "hints": [
                "Vérifie quelle règle cible la carte et quelle règle cible l’image.",
                "La largeur du contenu exclut l’espace intérieur et la bordure.",
                "Une hauteur arbitraire peut écraser l’image.",
                "Retourne à Dimensions pour vérifier les règles de largeur, leur limite et la hauteur automatique ; ajuste tes propres classes."
              ]
            }
          ]
        },
        {
          "type": "tasks",
          "id": "verifier",
          "title": "4 — Vérifier puis expliquer",
          "intro": "Le résultat visuel et l’explication comptent ensemble.",
          "items": [
            {
              "id": "check-contenu",
              "text": "Relis le cahier des charges : titre, deux paragraphes, conteneur, image et alt. Corrige sans ajouter d’informations personnelles."
            },
            {
              "id": "check-largeurs",
              "text": "Élargis l’aperçu au-delà de 400px puis rétrécis-le autour de 260px. La bordure droite de la carte et l’image restent visibles sans défilement horizontal dans ces essais."
            },
            {
              "id": "check-forme",
              "text": "Vérifie la forme de l’image aux deux largeurs : un cercle reste rond, un carré reste carré. Une image absente demande d’abord un contrôle de src."
            },
            {
              "id": "check-texte",
              "text": "Ajoute temporairement une phrase avec des mots ordinaires. Le texte et la carte doivent grandir en hauteur ; ne cache pas les mots qui dépassent."
            },
            {
              "id": "check-transfert",
              "text": "Sans changer le nombre de paragraphes ni agrandir les lettres, donne davantage d’air entre leurs lignes. Puis rends la carte un peu moins large sans déformer son image. Explique les règles choisies."
            },
            {
              "id": "check-presentation",
              "text": "Présente brièvement ton thème et une décision HTML puis une décision CSS. Dis aussi quelle aide tu as utilisée. Si tu es en cours, montre le résultat au professeur ; seul, compare aux critères puis choisis ta reprise ou ta suite."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "consolider",
          "title": "Consolidation — Reprendre seulement le point fragile",
          "intro": "N’efface pas tout le projet. Garde une copie et choisis le symptôme qui correspond.",
          "items": [
            {
              "id": "source-absente",
              "text": "L’image est absente : vérifie source entière ou fichier local, puis alt. Reprends Images si tu ne distingues pas ces rôles.",
              "hints": [
                "Le problème peut être le chargement, pas la taille.",
                "Compare src au fichier ou à la source copiée.",
                "Ne colle pas la description dans l’adresse.",
                "Utilise la reprise Images au bas du module et reviens à ta carte après un essai réussi."
              ]
            },
            {
              "id": "dessin-deforme",
              "text": "L’image s’affiche mais sa forme est écrasée : repère une hauteur imposée et reviens à la consolidation de Dimensions.",
              "hints": [
                "Compare forme d’origine et forme affichée.",
                "Une largeur adaptée n’empêche pas une hauteur incorrecte.",
                "Teste une hauteur automatique sans modifier src.",
                "Utilise le lien vers la panne du cercle ovale ; rapporte ensuite la correction à ta propre classe d’image."
              ]
            },
            {
              "id": "texte-serre",
              "text": "Les lignes se serrent, ou le texte colle au bord : distingue l’interligne de l’espace intérieur avant de choisir la reprise.",
              "hints": [
                "Pointe l’endroit précis où il manque de l’air.",
                "Entre les lignes d’un paragraphe : interligne ; autour du contenu : padding.",
                "Changer la taille des lettres ou la marge extérieure ne répond pas toujours au besoin.",
                "Choisis le cours Lisibilité ou Boîtes, fais un seul essai puis reviens à ta carte."
              ]
            },
            {
              "id": "carte-large",
              "text": "La carte dépasse : vérifie sa largeur, sa limite et ce qui est compris dans cette largeur. Reprends Dimensions, sans ajouter de règle pour cacher le contenu."
            }
          ]
        },
        {
          "type": "details",
          "id": "bonus-detail",
          "title": "Bonus facultatif — Deux cartes, deux usages",
          "blocks": [
            {
              "type": "tasks",
              "id": "bonus",
              "title": "Comparer sans nouvelle mise en page",
              "intro": "À faire seulement si tu peux déjà expliquer ton projet.",
              "items": [
                {
                  "id": "copie",
                  "text": "Fais deux copies de ton Pen ou dossier. Garde les mêmes textes et la même image."
                },
                {
                  "id": "variantes",
                  "text": "Dans une version, choisis une carte plus compacte ; dans l’autre, plus large et plus aérée. Ne change que les largeurs, espacements et réglages de texte déjà appris."
                },
                {
                  "id": "justifier",
                  "text": "Compare à une même largeur d’aperçu, puis teste les deux à une largeur plus étroite. Justifie l’usage de chaque version. Tu n’as pas à les placer côte à côte ni à apprendre Flexbox pour ce bonus."
                }
              ]
            }
          ]
        },
        {
          "type": "callout",
          "id": "suite",
          "title": "Après cette carte",
          "text": "Si tu peux modifier et expliquer ta carte avec peu d’aide, conserve-la comme point de départ. Relier plusieurs pages puis Mon mini-site permettent de poursuivre avec des fichiers locaux si leurs prérequis sont compris. Tu peux aussi approfondir ta carte ou explorer Flexbox selon les besoins. Ce projet ne valide rien automatiquement : l’orientation reste un choix pédagogique."
        }
      ],
      "masteryCriteria": [
        "Assembler une carte cohérente et expliquer les relations parent/enfants sans se limiter à une copie.",
        "Remplacer ou insérer une image et rédiger un alt pertinent ; distinguer l’aide au collage de la compréhension.",
        "Réutiliser une classe sur deux paragraphes, choisir lisibilité et espace intérieur, puis expliquer l’effet d’un changement.",
        "Vérifier carte et image dans deux largeurs d’aperçu et corriger un défaut ciblé.",
        "Réussir les demandes de transfert sans nom de propriété ou préciser le modèle/l’aide nécessaires.",
        "Présenter ses choix et ses vérifications ; ni le nombre de cases cochées ni le seul rendu ne prouvent l’acquisition."
      ],
      "consolidation": [
        {
          "moduleId": "web-carte-personnelle",
          "label": "Identifier le seul point à reprendre",
          "blockId": "consolider"
        },
        {
          "moduleId": "html-parent-enfants",
          "label": "Reprendre le regroupement",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Repérer un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Reconnaître les balises d’un paragraphe."
            }
          ]
        },
        {
          "moduleId": "html-images",
          "label": "Reprendre source et texte alternatif",
          "blockId": "depannage",
          "prerequisiteSkills": [
            {
              "skillId": "html.text",
              "expectation": "Reconnaître une balise et modifier un extrait."
            }
          ]
        },
        {
          "moduleId": "css-classes-couleurs",
          "label": "Reprendre les classes",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une règle simple."
            }
          ]
        },
        {
          "moduleId": "css-textes-lisibles",
          "label": "Reprendre l’interligne",
          "blockId": "panne",
          "prerequisiteSkills": [
            {
              "skillId": "css.selectors",
              "expectation": "Cibler une classe."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une déclaration."
            }
          ]
        },
        {
          "moduleId": "css-boites-espacements",
          "label": "Reprendre l’espace intérieur",
          "blockId": "panne",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Repérer le parent du contenu."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Cibler une classe."
            },
            {
              "skillId": "css.colors",
              "expectation": "Distinguer texte et fond."
            }
          ]
        },
        {
          "moduleId": "css-dimensions-images",
          "label": "Réparer la déformation ou le dépassement",
          "blockId": "panne",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Repérer la carte parent et l’image à l’intérieur."
            },
            {
              "skillId": "html.images",
              "expectation": "Insérer une source dans src et rédiger un alt adapté."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier les classes HTML aux règles CSS."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Distinguer padding et margin et lire une bordure simple."
            }
          ]
        },
        {
          "moduleId": "css-feuille-style",
          "label": "Si le CSS local n’agit pas",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Repérer head et body."
            },
            {
              "skillId": "html.paths",
              "expectation": "Lire un chemin relatif."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une règle simple."
            }
          ]
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "web-carte-personnelle",
          "label": "Comparer deux présentations avec les acquis",
          "blockId": "bonus-detail",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre principal adapté au sujet."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer des paragraphes et retrouver leurs balises."
            },
            {
              "skillId": "html.structure",
              "expectation": "Repérer la carte parent et l’image à l’intérieur."
            },
            {
              "skillId": "html.images",
              "expectation": "Insérer une source dans src et rédiger un alt adapté."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier les classes HTML aux règles CSS."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Distinguer padding et margin et lire une bordure simple."
            },
            {
              "skillId": "css.colors",
              "expectation": "Choisir une couleur de texte lisible sur son fond."
            },
            {
              "skillId": "css.fonts",
              "expectation": "Régler la taille du texte et l’interligne."
            },
            {
              "skillId": "css.sizing",
              "expectation": "Adapter la largeur d’une carte et préserver les proportions de son image."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "html-multipage",
          "label": "Relier plusieurs pages avec des fichiers locaux",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Repérer head et body et enregistrer un document HTML complet."
            },
            {
              "skillId": "html.paths",
              "expectation": "Retrouver un fichier à partir d’un chemin relatif."
            },
            {
              "skillId": "html.links",
              "expectation": "Distinguer l’adresse href et le texte visible d’un lien."
            }
          ]
        },
        {
          "moduleId": "css-flexbox",
          "label": "Explorer une collection si les cartes et leurs prérequis sont compris",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Identifier le parent et ses enfants directs."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier les classes aux règles."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Distinguer les espaces des cartes."
            },
            {
              "skillId": "css.sizing",
              "expectation": "Lire une largeur et distinguer la carte de son contenu."
            }
          ]
        },
        {
          "moduleId": "web-carte-personnelle",
          "label": "Approfondir la même carte sans nouvelle notion",
          "blockId": "bonus-detail",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre principal adapté au sujet."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer des paragraphes et retrouver leurs balises."
            },
            {
              "skillId": "html.structure",
              "expectation": "Repérer la carte parent et l’image à l’intérieur."
            },
            {
              "skillId": "html.images",
              "expectation": "Insérer une source dans src et rédiger un alt adapté."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier les classes HTML aux règles CSS."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Distinguer padding et margin et lire une bordure simple."
            },
            {
              "skillId": "css.colors",
              "expectation": "Choisir une couleur de texte lisible sur son fond."
            },
            {
              "skillId": "css.fonts",
              "expectation": "Régler la taille du texte et l’interligne."
            },
            {
              "skillId": "css.sizing",
              "expectation": "Adapter la largeur d’une carte et préserver les proportions de son image."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Observer la mobilisation et le transfert d’acquis HTML/CSS dans une production choisie, sans confondre résultat copié, autonomie, rapidité et qualité graphique.",
        "entryDiagnosis": [
          "Faire expliquer src/alt, la classe du conteneur et le parent de l’image. Proposer une reprise ciblée si un élément manque.",
          "Demander comment changer l’air entre les lignes, puis l’air entre texte et bordure : attendu line-height puis padding, pas le même réglage.",
          "Demander une modification de largeur qui garde l’image proportionnée. Une réussite accompagnée signale le niveau d’aide, pas une interdiction d’accéder au projet.",
          "Vérifier l’accès aux deux panneaux ou à la feuille locale ; ne pas confondre une difficulté de fichier avec les compétences de présentation."
        ],
        "preparation": [
          "Garder le cahier des charges et les reprises visibles. Le cercle fourni suffit : ne pas ajouter une recherche d’image comme travail préalable.",
          "Préparer un nouveau Pen ou une copie du projet précédent. Aucune publication, photo personnelle, adresse ni identité d’élève dans le contenu.",
          "Préparer deux largeurs d’aperçu et une demande de modification. Les consignes essentielles sont écrites ; le partage d’écran reste facultatif."
        ],
        "why": "Le jalon réunit des notions déjà travaillées pour observer des choix, une vérification et une adaptation. Il ne constitue pas une certification automatique ni une fin de séance imposée.",
        "discoverySpeech": [
          "« Personnel veut dire que tu choisis le message et la présentation, pas que tu dois écrire des informations sur toi. Un objet inventé ou un dessin suffit. »",
          "« Lis d’abord ce que ta carte doit contenir. Nous n’allons pas apprendre de nouvelles propriétés pour la décorer ; nous allons réutiliser ce que tu sais et repérer une reprise utile si nécessaire. »",
          "« Tu peux partir d’une copie de ton exercice. Ensuite, change le message, ajoute les éléments demandés et explique quelle règle répond à ton intention. Copier seul n’est pas notre critère. »",
          "« Nous vérifierons large, étroit et avec un peu plus de texte. Puis je te demanderai un changement sans nommer la propriété pour voir ce que tu choisis. »",
          "« Si une chose bloque, on garde le projet et on reprend seulement cette chose. Le bonus n’est pas une obligation et terminer vite n’est pas le but. »"
        ],
        "example": {
          "target": {
            "moduleId": "css-dimensions-images",
            "label": "Rappel ciblé : largeur de la carte et de l’image",
            "blockId": "css"
          },
          "comments": [
            "Cet exemple est celui du cours préalable, pas une solution complète du projet. Lire les deux cibles puis cacher le modèle pour une modification.",
            "Si le projet démarre d’une copie, remplacer les textes, choisir un h1, ajouter le second paragraphe et une classe commune ; ne pas accepter l’exemple inchangé comme projet terminé.",
            "Faire vérifier le chargement et alt avant de discuter taille ou esthétique."
          ]
        },
        "questions": [
          {
            "question": "Doit-on inventer un thème très original ?",
            "answer": "Non. Un thème simple ou fictif convient. On observe les choix de code et la capacité de les expliquer, pas l’inspiration littéraire."
          },
          {
            "question": "Peut-on garder l’image et les couleurs fournies ?",
            "answer": "Oui. Demander tout de même de décrire le dessin dans alt et de réaliser une modification expliquée ; ne pas évaluer une recherche d’assets."
          },
          {
            "question": "Comment aérer seulement les lignes des paragraphes ?",
            "answer": "Modifier line-height dans la règle de leur classe commune en gardant font-size et les autres classes inchangés."
          },
          {
            "question": "Comment éloigner le texte du bord sans changer l’interligne ?",
            "answer": "Modifier padding sur le conteneur. L’interligne agit à l’intérieur des paragraphes ; margin agit dehors."
          },
          {
            "question": "Comment rétrécir la carte sans écraser l’image ?",
            "answer": "Changer la largeur souhaitée de la carte en gardant sa limite et border-box ; l’image conserve width 100% et height auto, ou la variante naturelle expliquée dans le cours."
          },
          {
            "question": "Une image qui déborde impose-t-elle Flexbox ?",
            "answer": "Non. Vérifier ses dimensions et celles du parent. La carte unique ne demande aucune organisation en rangée."
          },
          {
            "question": "Le projet impose-t-il un fichier local ?",
            "answer": "Non. CodePen convient. Si l’élève choisit les fichiers, observer la liaison et les chemins séparément, avec les reprises existantes."
          },
          {
            "question": "Un résultat conforme suffit-il à déclarer toutes les compétences Acquis ?",
            "answer": "Non. Demander des explications et un transfert, distinguer le niveau d’aide par compétence et décider manuellement. Aucun objectif externe n’est validé par ce projet."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "web-carte-personnelle",
          "label": "Préparer ses choix et vérifier un réglage",
          "blockId": "preparer"
        },
        "independentActivity": {
          "moduleId": "web-carte-personnelle",
          "label": "Réaliser la carte",
          "blockId": "realisation"
        },
        "differentiation": [
          "Faire choisir entre deux thèmes simples si la page blanche bloque ; aider à la saisie ou au collage sans choisir toutes les règles.",
          "Si la carte est réalisée avec modèle, demander ensuite un changement différent sans modèle. Ne pas faire refaire tous les modules pour une seule hésitation.",
          "Un élève autonome peut comparer deux versions. Ne pas ajouter arrondis, survol ou Flexbox comme obligation pour l’occuper.",
          "Évaluer le fond HTML/CSS séparément de l’orthographe, du goût graphique et de l’aisance au clavier."
        ],
        "commonErrors": [
          {
            "symptom": "L’élève recopie le cours mais ne sait pas modifier la carte.",
            "helps": [
              "Demander quelle partie doit changer.",
              "Faire retrouver son élément HTML et sa classe.",
              "Proposer un premier changement accompagné puis un deuxième sans nom de propriété ; noter la distinction d’aide."
            ]
          },
          {
            "symptom": "Les deux paragraphes demandent deux règles identiques.",
            "helps": [
              "Demander ce qu’ils ont en commun.",
              "Comparer leurs attributs class.",
              "Réutiliser une classe puis modifier une seule déclaration pour observer les deux effets."
            ]
          },
          {
            "symptom": "La présentation manque d’air mais toutes les valeurs changent à la fois.",
            "helps": [
              "Faire pointer entre lignes, intérieur du bord ou extérieur de la carte.",
              "Choisir une seule propriété à tester.",
              "Utiliser la consolidation Lisibilité ou Boîtes puis revenir à la production."
            ]
          },
          {
            "symptom": "L’image charge mal ou se déforme.",
            "helps": [
              "Distinguer absence, forme écrasée et dépassement.",
              "Vérifier src pour l’absence, hauteur pour la déformation, parent/limite pour le dépassement.",
              "Utiliser la reprise correspondante, conserver le reste du projet et demander une explication après réparation."
            ]
          }
        ],
        "notes": [
          "Solution possible, non imposée : div class=\"carte\" contenant h1 class=\"titre\", img class=\"illustration\" et deux p class=\"lecture\". Source du cercle et alt descriptif rédigé ; les textes portent sur un signal imaginaire.",
          "Réglages possibles : .carte avec width 320px, max-width 100%, box-sizing border-box, padding 16px, fond blanc et texte noir ; .illustration avec width 100% et height auto. Une bordure de 2px est facultative. .lecture : font-size 18px, line-height 1.5 et font-family sans-serif ; .titre : font-size 28px. D’autres choix justifiés conviennent.",
          "Transfert : passer line-height de la classe lecture à 1.7 sans changer 18px ; réduire width de la carte à 280px en conservant limite et proportions. Vérifier le résultat et l’explication, pas une valeur exacte universelle.",
          "Le squelette du cours de dimensions peut servir d’aide, mais le projet doit comporter le titre choisi, deux textes cohérents et une classe commune. Ne pas confondre une base fournie et une réalisation autonome.",
          "Observer réussite autonome, avec modèle ou avec aide pour chaque compétence. Noter séparément l’aide à la manipulation ; aucun nouveau statut ou dispositif de suivi n’est créé.",
          "Pas d’acquisition globale du projet ni de calcul de référentiel. La bordure facultative ne permet pas de conclure sur border-radius ; ce projet n’ajoute pas css.borders à ses compétences cibles.",
          "Vers Flexbox : vérifier parent/enfants, classes, espacements et dimensions ; le module fournit un départ pour la collection, aucune obligation d’avoir déjà fait un mini-site. Si ces bases manquent, choisir la reprise ciblée.",
          "Relier plusieurs pages puis Mon mini-site sont disponibles. Vérifier document complet, fichiers/chemins et liens avant le cours multipage, puis les prérequis CSS du projet. Ce jalon ne devient pas un passage obligé avant Flexbox."
        ],
        "quickConductor": [
          "Diagnostiquer les bases et les manipulations sans refaire tout le parcours.",
          "Lire le cahier des charges, choisir un thème non personnel et une source disponible.",
          "Lancer la réalisation, proposer seulement les aides utiles.",
          "Vérifier contenu, largeur, image, lisibilité et texte ajouté.",
          "Demander le transfert sans nom de propriété puis une explication de choix.",
          "Décider manuellement consolidation, comparaison facultative ou suite selon les acquis."
        ],
        "references": [
          {
            "title": "MDN — L’élément img",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img"
          },
          {
            "title": "MDN — Dimensions en CSS",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing"
          },
          {
            "title": "MDN — Le modèle de boîte",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model"
          },
          {
            "title": "MDN — line-height",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/line-height"
          }
        ]
      }
    },
    "html-zones": {
      "domainId": "web",
      "title": "Organiser une page en zones",
      "type": "lesson",
      "theme": "debutants",
      "objective": "Choisir des zones HTML selon le rôle de leur contenu et les imbriquer correctement.",
      "skillIds": [
        "html.landmarks"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.headings",
          "expectation": "Créer un titre principal et un sous-titre."
        },
        {
          "skillId": "html.text",
          "expectation": "Créer un paragraphe et retrouver ses balises."
        },
        {
          "skillId": "html.structure",
          "expectation": "Identifier le parent direct d’un élément et fermer les conteneurs au bon endroit."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "reprise",
          "title": "Avant de commencer",
          "text": "Tu dois pouvoir retrouver le parent direct d’un titre ou d’un paragraphe. Si tu hésites, reprends Parent et enfants, puis reviens ici avec Retour dans ton navigateur. Aucun CSS n’est nécessaire.",
          "moduleLink": {
            "text": "Parent et enfants",
            "moduleId": "html-parent-enfants"
          }
        },
        {
          "type": "lesson",
          "id": "depart",
          "title": "1 — Donner un rôle aux regroupements",
          "paragraphs": [
            "Résultat attendu : une petite page avec une introduction, son contenu principal et une information finale. Tu sauras dire pourquoi chaque contenu est à cet endroit, même sans couleur.",
            "Une div regroupe des éléments sans préciser leur rôle. Certaines balises permettent d’indiquer ce que contient le regroupement : c’est le sens du contenu, pas sa décoration.",
            "Pour cet exercice, utilise un nouveau Pen : colle l’extrait dans HTML et laisse CSS vide. En local, garde ton document complet et remplace uniquement l’intérieur de body par l’extrait ; ne colle pas un deuxième body. Enregistre puis actualise."
          ]
        },
        {
          "type": "lesson",
          "id": "roles",
          "title": "2 — Trois zones pour cette page",
          "paragraphs": [
            "header présente ici la page : son titre et une courte introduction. Ce n’est pas head : head contient les informations du document, alors que ce header est un élément affiché dans body.",
            "main contient le sujet principal de la page. Dans cet exercice, utilise un seul main ; place-le après header, pas à l’intérieur de header.",
            "footer contient ici une information de fin sur la page. Ce n’est pas une commande pour coller le texte en bas de la fenêtre.",
            "Ces balises s’ouvrent et se ferment comme p. Tu places les titres et paragraphes entre leurs balises. Elles donnent des repères utiles, notamment aux technologies d’assistance, mais ne créent ni colonnes ni couleurs toutes seules."
          ]
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "Exemple — Introduction, sujet, information finale",
          "paragraphs": [
            "Lis les fermetures : header, main et footer sont au même niveau. Le h2 est enfant de main ; le h1 est enfant de header. Les espaces en début de ligne rendent l’imbrication plus facile à lire."
          ],
          "code": "<header>\n  <h1>Le carnet nature</h1>\n  <p>Des idées pour observer dehors.</p>\n</header>\n<main>\n  <h2>Observer les arbres</h2>\n  <p>Je compare les formes des feuilles.</p>\n</main>\n<footer>\n  <p>Un carnet pour partager mes découvertes.</p>\n</footer>"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — Repérer les rôles",
          "intro": "Utilise l’exemple, puis change une seule chose à la fois.",
          "items": [
            {
              "id": "copier",
              "text": "Colle l’exemple dans HTML. Repère dans l’aperçu le titre, le sujet principal et la phrase finale."
            },
            {
              "id": "adapter",
              "text": "Change le nom du carnet dans h1 et sa présentation dans le p de header, sans déplacer les balises."
            },
            {
              "id": "expliquer",
              "text": "Montre le parent direct du h2, puis celui de la dernière phrase. Explique leur rôle, pas seulement leur position.",
              "hints": [
                "Repère les balises qui entourent chaque élément.",
                "Distingue le début de la page de son sujet principal.",
                "Regarde les ouvertures ET les fermetures.",
                "Le h2 est dans main ; la dernière phrase est dans footer. header présente la page."
              ]
            },
            {
              "id": "pas-style",
              "text": "Explique pourquoi la page n’a pas automatiquement un grand bandeau coloré. Ne rajoute pas de CSS pour réussir cet exercice."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "sections",
          "title": "3 — Plusieurs sujets dans le contenu principal",
          "paragraphs": [
            "Si main contient plusieurs parties sur des thèmes différents, section regroupe un de ces thèmes. Donne généralement un titre à chaque section pour annoncer son sujet.",
            "Dans cette variante, remplace le main de l’exemple par celui ci-dessous ; garde header et footer. N’ajoute pas un deuxième main.",
            "Les deux section sont enfants directs de main. Chaque h2 est enfant de sa section et descendant de main. Tu n’as pas besoin de section autour de chaque phrase ni uniquement pour changer une couleur."
          ],
          "code": "<main>\n  <section>\n    <h2>Observer les arbres</h2>\n    <p>Je compare les formes des feuilles.</p>\n  </section>\n  <section>\n    <h2>Observer les oiseaux</h2>\n    <p>Je reconnais quelques chants.</p>\n  </section>\n</main>"
        },
        {
          "type": "tasks",
          "id": "mission",
          "title": "Mission autonome — Un carnet sur un autre thème",
          "intro": "Essaie avant d’ouvrir les indices. Pars d’une zone HTML vide ou remanie ton exemple sans en copier les textes.",
          "items": [
            {
              "id": "creer-zones",
              "text": "Crée une page sur un thème de ton choix avec une introduction (h1 et p), le contenu principal et une courte information de fin.",
              "hints": [
                "Choisis d’abord le rôle des trois regroupements.",
                "Tu connais header, main et footer.",
                "Vérifie que chaque conteneur est fermé avant le suivant.",
                "Utilise header pour h1/p, un seul main pour le sujet et footer pour l’information finale ; écris tes propres textes."
              ]
            },
            {
              "id": "deux-themes",
              "text": "Dans le contenu principal, crée deux parties thématiques. Chacune doit contenir un h2 et un paragraphe. Choisis et ferme les conteneurs nécessaires.",
              "hints": [
                "Repère les deux thèmes que tu annonces.",
                "Chaque thème est un regroupement à l’intérieur de main.",
                "Évite un main dans chaque partie.",
                "Crée deux section sœurs à l’intérieur du même main, chacune avec son h2 et son p."
              ]
            },
            {
              "id": "transferer",
              "text": "Ajoute une troisième partie sur un autre sujet. Explique son parent direct et pourquoi tu ne la places pas dans l’introduction."
            },
            {
              "id": "argumenter",
              "text": "Explique tes choix sans lire l’exemple. Une page qui s’affiche ne prouve pas à elle seule que les contenus sont bien regroupés."
            }
          ]
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie ton travail",
          "items": [
            {
              "id": "verifier-1",
              "text": "Un seul main contient les parties du sujet principal."
            },
            {
              "id": "verifier-2",
              "text": "header présente la page et footer donne une information finale pertinente."
            },
            {
              "id": "verifier-3",
              "text": "Chaque section a un thème identifiable et un titre."
            },
            {
              "id": "verifier-4",
              "text": "Je peux retrouver les parents directs en suivant les ouvertures et fermetures."
            },
            {
              "id": "verifier-5",
              "text": "J’explique le rôle des zones sans m’appuyer seulement sur leur apparence."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "panne",
          "title": "Consolidation — Tout dans l’introduction ?",
          "paragraphs": [
            "Cette page s’affiche, mais son contenu principal est rangé dans header. Lis l’extrait avant de corriger ; ne cherche pas un effet CSS."
          ],
          "code": "<header>\n  <h1>Mon carnet</h1>\n  <main>\n    <h2>Les arbres</h2>\n    <p>Je compare les feuilles.</p>\n  </main>\n</header>\n<footer>\n  <p>Un carnet de découvertes.</p>\n</footer>"
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Réparer le regroupement",
          "intro": "Dans une copie de ton Pen ou de ton fichier, essaie le code ci-dessus.",
          "items": [
            {
              "id": "sortir-main",
              "text": "Fais de header, main et footer trois zones sœurs, sans supprimer les textes.",
              "hints": [
                "Suis où header commence et se termine.",
                "main doit sortir de header.",
                "Compare la position de </header> et de <main>.",
                "Déplace </header> juste après le h1 et avant <main>. Supprime son ancienne occurrence après </main>."
              ]
            },
            {
              "id": "expliquer-reparation",
              "text": "Explique pourquoi déplacer cette fermeture change le parent de main même si la page reste presque identique visuellement."
            }
          ]
        },
        {
          "type": "details",
          "id": "bonus-navigation",
          "title": "Bonus facultatif — Un groupe de liens de navigation",
          "blocks": [
            {
              "type": "lesson",
              "id": "nav-explication",
              "title": "nav : seulement si tu proposes une navigation",
              "paragraphs": [
                "Prérequis de ce bonus : savoir créer un lien avec a/href. Si ce n’est pas encore clair, laisse ce bonus de côté ; les trois zones et les sections suffisent.",
                "nav regroupe les principaux liens pour se déplacer entre des pages ou des parties. Un lien isolé dans un paragraphe ne demande pas automatiquement nav.",
                "Cet exemple fait une petite navigation vers deux ressources externes. Colle-la après </header> et avant <main> dans une copie ; aucun fichier supplémentaire ni lien interne avec # n’est nécessaire. Les noms visibles expliquent les destinations."
              ],
              "code": "<nav>\n  <a href=\"https://developer.mozilla.org/fr/\">Documentation Web</a>\n  <a href=\"https://www.w3.org/\">Standards du Web</a>\n</nav>"
            },
            {
              "type": "tasks",
              "id": "bonus",
              "title": "Tester la navigation",
              "intro": "Ce bonus n’est pas obligatoire pour poursuivre.",
              "items": [
                {
                  "id": "tester-nav",
                  "text": "Ouvre les deux liens pour vérifier leurs destinations, puis reviens à ton aperçu avec Retour dans le navigateur."
                },
                {
                  "id": "expliquer-nav",
                  "text": "Explique pourquoi ces liens sont regroupés dans nav et pourquoi une simple phrase de présentation n’y a pas sa place."
                }
              ]
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Choisir header, main et footer à partir du rôle des contenus, pas seulement reproduire leur ordre.",
        "Ajouter une section thématique et expliquer son parent ainsi que celui de son titre.",
        "Réparer une mauvaise imbrication sans supprimer le contenu et expliquer pourquoi l’apparence ne suffit pas.",
        "Distinguer head de header ; ne pas attribuer à ces balises un effet de mise en page automatique."
      ],
      "consolidation": [
        {
          "moduleId": "html-zones",
          "label": "Réparer l’emplacement du contenu principal",
          "blockId": "panne"
        },
        {
          "moduleId": "html-parent-enfants",
          "label": "Reprendre parents directs et fermetures",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre principal et un sous-titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises."
            }
          ]
        },
        {
          "moduleId": "html-document",
          "label": "Distinguer head et contenu de body",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre principal et un sous-titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises."
            }
          ]
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "html-zones",
          "label": "Regrouper des liens de navigation",
          "blockId": "bonus-navigation",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Identifier le parent direct d’un élément et fermer les conteneurs au bon endroit."
            },
            {
              "skillId": "html.links",
              "expectation": "Créer un lien et expliquer href."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "css-textes-lisibles",
          "label": "Rendre les textes lisibles si tu sais cibler une classe",
          "prerequisiteSkills": [
            {
              "skillId": "css.selectors",
              "expectation": "Relier class=\"carte\" dans HTML au sélecteur .carte dans CSS."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une déclaration CSS et modifier une valeur."
            }
          ]
        },
        {
          "moduleId": "css-classes-couleurs",
          "label": "Reprendre les classes si nécessaire",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre principal et un sous-titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une règle CSS : sélecteur, propriété et valeur."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire choisir des regroupements sémantiques à partir du contenu et transférer le raisonnement parent/enfants sans confondre structure et apparence.",
        "entryDiagnosis": [
          "Faire entourer mentalement le parent du h2 dans l’exemple initial. Attendu : main, pas header ni body directement.",
          "Faire expliquer la différence entre titre principal et sous-titre. Proposer une reprise ciblée si nécessaire.",
          "Demander ce que signifie déplacer une balise fermante. Si l’élève répond seulement « ça change la couleur », reprendre Parent et enfants."
        ],
        "preparation": [
          "Nouveau Pen avec CSS vide, ou copie d’un document local dont seul body sera modifié.",
          "Garder l’exemple, la variante à deux sections et la panne accessibles par leurs liens ; aucune consigne essentielle ne dépend d’un partage d’écran.",
          "Préparer un thème alternatif fictif, sans nom d’élève ni donnée personnelle."
        ],
        "why": "Les regroupements deviennent des repères de sens. Une structure lisible dans le code et pour les outils d’assistance reste utile même sans décoration.",
        "discoverySpeech": [
          "« Nous savons mettre des éléments dans une boîte. Nous allons maintenant donner un rôle à certaines boîtes : présenter la page, porter son sujet, donner une information finale. »",
          "« Lisons header comme introduction de cette page. main porte le sujet principal ; footer termine avec une information sur la page. Ce sont des choix de sens, pas des commandes de couleur ou de position. »",
          "« head et header se ressemblent à l’écrit. head décrit le document ; notre header est dans body et son titre s’affiche. Montre lequel contient les mots visibles. »",
          "« Dans main, deux sujets méritent deux sections. Je ferme la première avant d’ouvrir la suivante : ce sont des sœurs, pas une section cachée dans l’autre. »"
        ],
        "example": {
          "target": {
            "moduleId": "html-zones",
            "label": "Lire les trois zones",
            "blockId": "exemple"
          },
          "comments": [
            "Lire chaque ouverture avec sa fermeture, puis pointer les contenus enfants.",
            "Remplacer main par la variante section, sans le dupliquer. Faire prédire le parent du deuxième h2.",
            "Ne pas colorer les zones pour en faire le seul indice ; demander ensuite de justifier à partir des textes."
          ]
        },
        "questions": [
          {
            "question": "Pourquoi un seul main dans cet exercice ?",
            "answer": "Il rassemble le sujet principal unique de cette page. Les thèmes de ce sujet se répartissent en sections, pas en plusieurs main visibles."
          },
          {
            "question": "header et head sont-ils la même chose ?",
            "answer": "Non. head contient les métadonnées du document ; le header de cet exercice est dans body et présente un contenu visible."
          },
          {
            "question": "footer sera-t-il collé en bas de l’écran ?",
            "answer": "Non. Sans règle de placement, il suit le contenu dans la page. Le nom indique ici une information de fin, pas une position fixe."
          },
          {
            "question": "Dans la variante, quel est le parent du h2 ?",
            "answer": "Sa section ; main est un ancêtre. Les deux section ont main pour parent commun."
          },
          {
            "question": "Faut-il une section pour colorer un paragraphe ?",
            "answer": "Non. Une section correspond à un thème de contenu ; une classe permet de cibler une apparence sans inventer de thème."
          },
          {
            "question": "Une page sans couleurs peut-elle être bien structurée ?",
            "answer": "Oui. La structure indique les rôles et relations, même si l’apparence change peu."
          },
          {
            "question": "Tous les liens doivent-ils être dans nav ?",
            "answer": "Non. nav convient à un ensemble de liens de navigation ; un lien au milieu d’un texte peut y rester."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "html-zones",
          "label": "Repérer et modifier les zones",
          "blockId": "guide"
        },
        "independentActivity": {
          "moduleId": "html-zones",
          "label": "Concevoir un autre carnet",
          "blockId": "mission"
        },
        "differentiation": [
          "Aider à sélectionner/coller le code sans donner la réponse sur les parents. L’aide au clavier n’est pas une erreur de compréhension.",
          "Si l’imbrication est fragile, garder header/main/footer avec un seul sujet, puis ajouter les sections après explication.",
          "Pour un élève à l’aise : troisième section et bonus nav, seulement si a/href sont connus. Ne pas imposer CSS ou liens pour le noyau."
        ],
        "commonErrors": [
          {
            "symptom": "main reste enfant de header.",
            "helps": [
              "Demander de suivre l’ouverture de header jusqu’à sa fermeture.",
              "Faire comparer la position de </header> et de <main>.",
              "Dans la panne, déplacer </header> après h1 : main devient frère de header. Faire expliquer ce qui a changé."
            ]
          },
          {
            "symptom": "Un main par thème ou des sections imbriquées involontairement.",
            "helps": [
              "Demander quel est le sujet global et quelles sont ses parties.",
              "Compter les main et suivre les fermetures section.",
              "Garder un main et fermer chaque section avant la suivante ; faire ajouter une troisième sœur sans modèle."
            ]
          },
          {
            "symptom": "L’élève attend une mise en page automatique.",
            "helps": [
              "Comparer contenu et règles CSS : ici aucune règle n’est fournie.",
              "Demander de décrire le rôle plutôt que la couleur de chaque zone.",
              "Dire explicitement que footer ne signifie pas position fixe et que header n’est pas une décoration."
            ]
          }
        ],
        "notes": [
          "Solution de mission possible : header(h1,p), main(section(h2,p), section(h2,p), section(h2,p)), footer(p). Les textes et le nombre de parties ne sont pas un gabarit universel.",
          "Solution de la panne : </header> doit précéder <main>. Le navigateur peut afficher un contenu mal regroupé ; ne pas évaluer uniquement l’aperçu.",
          "Dans ce module, header/footer désignent les zones de la page. Leurs autres usages dans des contenus autonomes sont hors périmètre ; ne pas enseigner qu’ils doivent toujours être uniques dans tout HTML.",
          "Observer choix justifié, modification et réparation. Distinguer réussite autonome, avec modèle ou avec aide dans le suivi existant ; les cases ne valident rien.",
          "Vers la lisibilité : vérifier les classes et une règle simple. Si elles manquent, prendre la reprise C2 ; aucun bonus nav n’est requis."
        ],
        "quickConductor": [
          "Diagnostiquer le parent et les fermetures.",
          "Expliquer les trois rôles et head/header avec l’exemple sans CSS.",
          "Faire modifier puis créer deux sections thématiques.",
          "Observer une troisième partie et la justification sans modèle.",
          "Faire réparer la panne si nécessaire ; proposer nav selon les acquis.",
          "Décider manuellement d’une reprise ou de la suite, sans durée imposée."
        ],
        "references": [
          {
            "title": "MDN — Structurer un document",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          },
          {
            "title": "MDN — L’élément main",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main"
          }
        ]
      }
    },
    "css-textes-lisibles": {
      "domainId": "web",
      "title": "Rendre les textes lisibles",
      "type": "lesson",
      "theme": "debutants",
      "objective": "Choisir une police, une taille, un interligne et un alignement adaptés à la lecture.",
      "skillIds": [
        "css.fonts"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.headings",
          "expectation": "Créer un titre principal et un sous-titre."
        },
        {
          "skillId": "html.text",
          "expectation": "Créer un paragraphe et retrouver ses balises."
        },
        {
          "skillId": "css.selectors",
          "expectation": "Relier class=\"carte\" dans HTML au sélecteur .carte dans CSS."
        },
        {
          "skillId": "css.colors",
          "expectation": "Lire une déclaration et distinguer sélecteur, propriété et valeur."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "reprise",
          "title": "Avant de commencer",
          "text": "Il faut savoir relier une classe HTML à une règle CSS. Si tu hésites, reprends Classes et couleurs CSS puis utilise Retour dans le navigateur. La couleur n’est pas l’objectif ici : conserve un texte sombre sur un fond clair.",
          "moduleLink": {
            "text": "Classes et couleurs CSS",
            "moduleId": "css-classes-couleurs"
          }
        },
        {
          "type": "lesson",
          "id": "depart",
          "title": "1 — Aider à lire, pas seulement décorer",
          "paragraphs": [
            "Résultat attendu : un titre bien repérable et deux paragraphes faciles à lire. Tu modifieras un réglage à la fois et expliqueras la différence.",
            "Ouvre un nouveau Pen : le code HTML va dans HTML, les règles dans CSS. Ne copie pas les noms des panneaux dans le code. En local, utilise une copie de ton projet avec sa feuille CSS déjà reliée : extrait HTML dans body, règles dans le fichier CSS. Si cette liaison est nouvelle pour toi, le module Relier une feuille de style est accessible dans les reprises.",
            "Travaille sans IA. Compare les effets et garde les mots identiques pendant les premiers essais ; une page reproduite ne suffit pas pour montrer que tu comprends chaque réglage."
          ]
        },
        {
          "type": "lesson",
          "id": "notions",
          "title": "2 — Quatre réglages différents",
          "paragraphs": [
            "font-family choisit la famille de caractères. sans-serif demande une police sans empattements disponible sur l’appareil ; serif en demande une avec de petites terminaisons. Le dessin exact peut varier selon l’ordinateur. Aucun téléchargement de police n’est nécessaire.",
            "font-size règle la taille des caractères. Ici px signifie pixel CSS, une unité de taille à l’écran : 18px donne des lettres plus grandes que 12px. N’ajoute pas d’espace entre 18 et px.",
            "line-height règle la hauteur des lignes. Avec 1.5 sans unité, chaque ligne occupe une hauteur égale à 1,5 fois la taille du texte : à 18px cela fait 27px. Cela aère les lignes à l’intérieur d’un même paragraphe, pas l’espace entre deux paragraphes.",
            "text-align aligne le texte dans la largeur disponible de son élément : left à gauche, center au centre, right à droite. Centrer les mots ne centre pas la boîte qui les contient.",
            "Pour du français, un paragraphe long aligné à gauche est un bon point de départ. Un titre court peut être centré. Les nombres de l’exemple sont des choix à comparer, pas une règle universelle de bonne lecture."
          ]
        },
        {
          "type": "lesson",
          "id": "html",
          "title": "HTML — Deux classes, deux rôles",
          "paragraphs": [
            "Les deux paragraphes partagent lecture : une règle pourra améliorer les deux. Le titre garde sa classe titre."
          ],
          "code": "<h1 class=\"titre\">Le carnet des découvertes</h1>\n<p class=\"lecture\">Observer demande de prendre son temps. Je regarde les formes, je compare les détails et je note ce qui change. Puis je relis mes observations pour pouvoir les expliquer avec mes propres mots.</p>\n<p class=\"lecture\">Un petit détail peut donner une nouvelle idée. Je garde une phrase claire pour raconter ce que j’ai remarqué et une autre pour poser ma prochaine question.</p>"
        },
        {
          "type": "lesson",
          "id": "css",
          "title": "CSS — Un point de départ lisible",
          "paragraphs": [
            "Copie les règles, puis observe avant de modifier. N’ajoute pas de balises <style> dans le panneau CSS ou le fichier CSS.",
            "Ces propriétés peuvent se transmettre d’un parent à ses enfants : on parle d’héritage. Ici on les place directement sur les éléments ciblés pour voir les essais simplement ; changer .lecture ne doit pas changer le h1."
          ],
          "code": ".titre {\n  font-family: sans-serif;\n  font-size: 28px;\n  line-height: 1.2;\n  text-align: center;\n}\n.lecture {\n  font-family: sans-serif;\n  font-size: 18px;\n  line-height: 1.5;\n  text-align: left;\n}"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — Comparer un réglage à la fois",
          "intro": "Après chaque essai, observe puis rétablis le réglage indiqué.",
          "items": [
            {
              "id": "taille",
              "text": "Dans .lecture seulement, compare font-size: 12px puis 18px. Garde 18px. Décris ce qui change et ce qui reste identique."
            },
            {
              "id": "lignes",
              "text": "Réduis la largeur de l’aperçu CodePen ou de la fenêtre jusqu’à avoir au moins trois lignes dans un paragraphe. Compare line-height: 1 puis 1.5 ; garde 1.5.",
              "hints": [
                "Le réglage agit entre les lignes d’un même paragraphe.",
                "Si tout tient sur une ligne, rétrécis l’aperçu plutôt que d’ajouter des <br>.",
                "Ne change ni la taille ni les mots pendant cette comparaison.",
                "Avec 18px, les hauteurs de ligne sont 18px puis 27px. Le second essai laisse davantage d’air entre les lignes."
              ]
            },
            {
              "id": "famille",
              "text": "Compare serif puis sans-serif dans .lecture. Choisis celle que tu trouves la plus lisible et justifie sans parler de taille."
            },
            {
              "id": "alignement",
              "text": "Dans .titre, compare left, center et right. Remets center. Vérifie que les paragraphes gardent leur alignement à gauche."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "mission",
          "title": "Mission autonome — Une note facile à lire",
          "intro": "Écris tes propres textes : un titre et deux paragraphes de plusieurs phrases. Essaie avant les indices.",
          "items": [
            {
              "id": "nouveaux-textes",
              "text": "Conserve les deux classes ou crée de nouveaux noms cohérents dans HTML et CSS. N’invente pas de nouvelle propriété."
            },
            {
              "id": "regler",
              "text": "Rends le titre plus grand que les paragraphes. Choisis une famille, puis un interligne qui laisse respirer les lignes des paragraphes.",
              "hints": [
                "Sépare les choix du titre et des paragraphes.",
                "Vérifie que les deux paragraphes ont la même classe.",
                "Taille des lettres et hauteur des lignes sont deux réglages différents.",
                "Exemple de choix possible : titre 28px, paragraphes 18px et line-height: 1.5 ; ces valeurs ne sont pas la seule solution."
              ]
            },
            {
              "id": "sans-nom",
              "text": "Sans changer la taille des lettres, donne davantage d’air entre les lignes des deux paragraphes, mais pas du titre. Explique quel réglage tu as choisi et pourquoi.",
              "hints": [
                "Repère ce qui sépare les lignes dans un paragraphe.",
                "La taille des lettres doit rester constante.",
                "Compare font-size et line-height.",
                "Modifie seulement line-height dans .lecture, par exemple de 1.5 à 1.7 ; ne change pas font-size ni .titre."
              ]
            },
            {
              "id": "lecture",
              "text": "Garde les paragraphes alignés à gauche ; choisis l’alignement du titre. Ajoute un troisième paragraphe de même style sans écrire de nouvelle règle CSS."
            },
            {
              "id": "verifier-largeur",
              "text": "Compare l’aperçu large et étroit. Lis quelques phrases : tous les textes restent présents, sans forcer une minuscule taille pour les faire tenir."
            }
          ]
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie ton travail",
          "items": [
            {
              "id": "verifier-1",
              "text": "Je distingue taille des lettres et hauteur des lignes."
            },
            {
              "id": "verifier-2",
              "text": "Un changement de .lecture atteint tous les paragraphes de cette classe, pas le titre."
            },
            {
              "id": "verifier-3",
              "text": "Je sais expliquer pourquoi j’ai choisi ces réglages après comparaison."
            },
            {
              "id": "verifier-4",
              "text": "Mon titre reste repérable et mes paragraphes restent lisibles dans un aperçu plus étroit."
            },
            {
              "id": "verifier-5",
              "text": "Je ne confonds pas aligner le texte et placer sa boîte."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "panne",
          "title": "Consolidation — Pourquoi les lignes sont-elles serrées ?",
          "paragraphs": [
            "Dans une copie, remplace seulement la règle .lecture par celle-ci. Les deux déclarations sont valides : c’est le choix des valeurs qu’il faut discuter."
          ],
          "code": ".lecture {\n  font-family: sans-serif;\n  font-size: 24px;\n  line-height: 0.8;\n  text-align: left;\n}"
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Réparer sans tout changer",
          "intro": "Fais tenir un paragraphe sur plusieurs lignes.",
          "items": [
            {
              "id": "interligne",
              "text": "Conserve la taille 24px et augmente seulement l’espace entre les lignes. Explique pourquoi agrandir encore les lettres n’est pas la bonne première réparation.",
              "hints": [
                "Lis la propriété qui parle des lignes.",
                "0.8 donne une ligne moins haute que la taille du texte.",
                "À taille constante, compare 0.8 puis 1.5.",
                "Garde font-size: 24px et essaie line-height: 1.5. Les lettres ont la même taille, mais les lignes ont plus de place."
              ]
            },
            {
              "id": "expliquer",
              "text": "Explique la différence entre une déclaration invalide et un réglage valide mais difficile à lire."
            }
          ]
        },
        {
          "type": "details",
          "id": "bonus-detail",
          "title": "Bonus facultatif — Deux ambiances, même lecture",
          "blocks": [
            {
              "type": "tasks",
              "id": "bonus",
              "title": "Deux versions sans nouvelles propriétés",
              "intro": "Si tu expliques les quatre réglages, fais une copie de ton Pen ou de ton projet.",
              "items": [
                {
                  "id": "comparer",
                  "text": "Garde les mêmes textes. Dans une version, utilise serif et un titre à gauche ; dans l’autre, sans-serif et un titre centré. Garde des paragraphes suffisamment grands, aérés et alignés à gauche."
                },
                {
                  "id": "argumenter-bonus",
                  "text": "Compare les deux versions à largeur identique. Justifie ton choix de lecture plutôt que de déclarer qu’une police est toujours meilleure."
                }
              ]
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Associer famille, taille, interligne et alignement à leurs effets distincts.",
        "Aérer un paragraphe sur consigne sans nom de propriété, sans modifier la taille des lettres.",
        "Réutiliser la même classe sur un nouveau paragraphe sans recopier la règle.",
        "Justifier un choix à partir d’une comparaison large/étroite, au-delà d’une copie de l’exemple."
      ],
      "consolidation": [
        {
          "moduleId": "css-textes-lisibles",
          "label": "Réparer un interligne serré",
          "blockId": "panne"
        },
        {
          "moduleId": "css-classes-couleurs",
          "label": "Reprendre le ciblage par classe",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre principal et un sous-titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une règle CSS : sélecteur, propriété et valeur."
            }
          ]
        },
        {
          "moduleId": "css-feuille-style",
          "label": "Relier la feuille si tu travailles dans des fichiers",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Retrouver head et body."
            },
            {
              "skillId": "html.paths",
              "expectation": "Lire le chemin d’un fichier."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une règle CSS simple."
            }
          ]
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "css-textes-lisibles",
          "label": "Comparer deux ambiances de lecture",
          "blockId": "bonus-detail",
          "prerequisiteSkills": [
            {
              "skillId": "css.fonts",
              "expectation": "Expliquer les quatre réglages et les modifier séparément."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "css-boites-espacements",
          "label": "Distinguer l’espace intérieur et extérieur",
          "prerequisiteSkills": [
            {
              "skillId": "css.selectors",
              "expectation": "Relier class=\"carte\" dans HTML au sélecteur .carte dans CSS."
            },
            {
              "skillId": "html.structure",
              "expectation": "Identifier le parent direct d’un élément et fermer les conteneurs au bon endroit."
            }
          ]
        },
        {
          "moduleId": "html-parent-enfants",
          "label": "Reprendre les regroupements avant les boîtes",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre principal et un sous-titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire choisir et expliquer des réglages de lecture, en distinguant lettres, lignes et alignement du texte ; observer un transfert sans nom de propriété.",
        "entryDiagnosis": [
          "Montrer class=\"lecture\" et demander la règle qui la cible : attendu .lecture. Reprendre C2 si le point ou le lien ne sont pas compris.",
          "Demander de changer une valeur dans une déclaration simple. Ne pas demander de deviner font-size avant son explication.",
          "Vérifier que l’élève retrouve les panneaux ou la feuille réellement chargée ; dissocier manipulation et notions."
        ],
        "preparation": [
          "Utiliser un nouveau Pen ou une copie avec CSS relié ; exemple sombre sur fond clair et sans police externe.",
          "Rétrécir l’aperçu à environ 360px pour voir plusieurs lignes. Ne pas demander de balises br pour simuler les retours.",
          "Préparer la comparaison 18px/27px et la panne 24px avec line-height 0.8."
        ],
        "why": "Un style se juge aussi par la facilité de lecture. Modifier une seule variable permet d’expliquer son effet plutôt que d’obtenir un résultat par hasard.",
        "discoverySpeech": [
          "« La famille est le dessin des caractères ; la taille est leur grandeur. On peut changer l’une sans changer l’autre. »",
          "« Les lettres peuvent garder 18px pendant que les lignes prennent plus de place. line-height: 1.5 leur donne 27px de hauteur : observons plusieurs lignes pour voir la différence. »",
          "« text-align aligne les mots dans leur zone. Il ne déplace pas la zone elle-même. Centrer un titre court et lire un long paragraphe sont deux usages différents. »",
          "« Nous n’allons pas chercher une valeur magique. Nous comparons, lisons, puis expliquons un choix que nous pouvons modifier. »"
        ],
        "example": {
          "target": {
            "moduleId": "css-textes-lisibles",
            "label": "Lire les quatre réglages",
            "blockId": "css"
          },
          "comments": [
            "Lire la classe et chaque déclaration avant la copie.",
            "Avec .lecture à 18px, comparer line-height 1 et 1.5 sans autre modification ; attendu 18px puis 27px de hauteur de ligne.",
            "Faire ajouter un troisième p class=\"lecture\" : il reçoit les mêmes réglages sans nouvelle règle.",
            "L’héritage est signalé, pas une nouvelle mission : une règle sur un parent peut expliquer un effet inattendu sur ses enfants."
          ]
        },
        "questions": [
          {
            "question": "Comment aérer les lignes sans agrandir les lettres ?",
            "answer": "Augmenter line-height en gardant font-size. Pour 18px, 1.5 donne 27px, 1.7 donne 30,6px."
          },
          {
            "question": "Pourquoi l’essai semble ne rien faire ?",
            "answer": "Peut-être que le paragraphe tient sur une ligne. Rétrécir l’aperçu pour observer plusieurs lignes, puis vérifier le ciblage."
          },
          {
            "question": "text-align: center centre-t-il la boîte du titre ?",
            "answer": "Non, il aligne le texte au centre dans la largeur disponible de cette boîte. Le placement de la boîte est une autre question."
          },
          {
            "question": "Pourquoi les deux paragraphes changent-ils ensemble ?",
            "answer": "Ils portent la même classe lecture ciblée par .lecture. Le titre a une autre classe."
          },
          {
            "question": "serif est-il toujours moins lisible ?",
            "answer": "Non. Le contexte, la taille et l’interligne comptent. On demande une comparaison justifiée, pas une interdiction de famille."
          },
          {
            "question": "Pourquoi sans-serif n’a-t-il pas exactement le même dessin partout ?",
            "answer": "C’est une famille générique ; le navigateur choisit une police disponible sur l’appareil. Aucune police externe n’est chargée."
          },
          {
            "question": "0.8 est-il une faute de syntaxe ?",
            "answer": "Non. C’est un multiplicateur valide mais très serré ici : 19,2px de ligne pour du texte de 24px. Il faut corriger le choix pour cet usage."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "css-textes-lisibles",
          "label": "Comparer les réglages",
          "blockId": "guide"
        },
        "independentActivity": {
          "moduleId": "css-textes-lisibles",
          "label": "Composer et expliquer sa note",
          "blockId": "mission"
        },
        "differentiation": [
          "Aider à rétrécir l’aperçu sans nommer la propriété à choisir dans le transfert.",
          "Si le ciblage est fragile, limiter à un paragraphe puis en ajouter un deuxième partageant la classe.",
          "Si l’élève maîtrise déjà ces choix, demander directement la consigne sans nom de propriété, puis la comparaison facultative ; aucune répétition imposée."
        ],
        "commonErrors": [
          {
            "symptom": "La taille augmente alors qu’on veut seulement aérer les lignes.",
            "helps": [
              "Reformuler : garder la taille des lettres.",
              "Comparer les rôles de font-size et line-height.",
              "Rétablir la taille initiale et ne changer que line-height ; demander de prédire l’effet."
            ]
          },
          {
            "symptom": "Aucun changement sur un paragraphe.",
            "helps": [
              "Vérifier la classe et le point du sélecteur.",
              "Comparer 18px avec une écriture comme 18 px et vérifier les accolades.",
              "En local, prouver d’abord le chargement de la feuille ; ne pas déclarer la notion incomprise pour un fichier non enregistré."
            ]
          },
          {
            "symptom": "Le titre centré est pris pour une boîte déplacée.",
            "helps": [
              "Demander ce qui a bougé : les mots ou toute une carte ?",
              "Comparer left et right sur le même h1.",
              "Expliquer que la boîte garde sa place et que les mots s’alignent dans sa largeur."
            ]
          }
        ],
        "notes": [
          "Solution possible du transfert : .lecture { font-size: 18px; line-height: 1.7; } avec les autres déclarations conservées. Le h1 ne change pas.",
          "Pour la panne : garder 24px, passer line-height à 1.5, soit 36px. Valider le raisonnement et la comparaison, pas un nombre unique.",
          "Le px CSS est une unité de mise en page, pas forcément un pixel matériel. Le zoom reste possible ; ne pas exiger que tous les textes tiennent sans retour à la ligne.",
          "Observer réussite autonome, avec modèle ou avec aide ; distinguer saisie/zoom/gestion des panneaux de compréhension. Le suivi reste manuel.",
          "La compétence css.fonts décrit ces réglages, pas toutes les propriétés typographiques. Les espacements autour des boîtes viendront ensuite."
        ],
        "quickConductor": [
          "Vérifier le ciblage par classe et le panneau CSS.",
          "Expliquer les quatre réglages avec l’exemple.",
          "Comparer un changement à la fois, sur plusieurs lignes.",
          "Donner le transfert sans nom de propriété et ajouter un paragraphe.",
          "Consolider l’interligne ou proposer le bonus selon l’explication.",
          "Orienter vers les boîtes si regroupements et classes sont compris."
        ],
        "references": [
          {
            "title": "MDN — Fondamentaux du style de texte",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals"
          },
          {
            "title": "MDN — line-height",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/line-height"
          },
          {
            "title": "MDN — text-align",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-align"
          }
        ]
      }
    },
    "css-boites-espacements": {
      "domainId": "web",
      "title": "Boîtes et espacements",
      "type": "lesson",
      "theme": "debutants",
      "objective": "Distinguer contenu, espace intérieur, bordure et espace extérieur pour aérer une carte.",
      "skillIds": [
        "css.spacing",
        "css.borders"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "css.selectors",
          "expectation": "Relier class=\"carte\" dans HTML au sélecteur .carte dans CSS."
        },
        {
          "skillId": "html.structure",
          "expectation": "Identifier le parent direct d’un élément et fermer les conteneurs au bon endroit."
        },
        {
          "skillId": "css.colors",
          "expectation": "Distinguer la couleur du texte et celle du fond dans une règle."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "reprise",
          "title": "Avant de commencer",
          "text": "Il faut repérer le conteneur d’une carte et relier ses classes au CSS. Si le parent direct reste flou, reprends Parent et enfants. Les reprises de classes sont aussi disponibles en bas. Tu n’as besoin ni de Flexbox ni d’images pour cet exercice.",
          "moduleLink": {
            "text": "Parent et enfants",
            "moduleId": "html-parent-enfants"
          }
        },
        {
          "type": "lesson",
          "id": "depart",
          "title": "1 — Une boîte autour du contenu",
          "paragraphs": [
            "Résultat attendu : deux cartes dont le texte ne touche pas la bordure et qui sont séparées du cadre extérieur. Tu sauras changer l’espace du bon côté de la bordure.",
            "Ouvre un nouveau Pen, puis utilise HTML et CSS séparément. En local, travaille dans une copie avec une feuille déjà reliée : extrait HTML dans body, règles dans le fichier CSS, puis enregistre et actualise. Le cours de liaison est accessible dans les reprises si nécessaire.",
            "Une boîte contient du contenu, par exemple un titre et un paragraphe. Autour du contenu viennent le padding (espace intérieur), la border (bordure) et la margin (espace extérieur). Les mots anglais sont les noms utilisés en CSS."
          ]
        },
        {
          "type": "lesson",
          "id": "couches",
          "title": "2 — De l’intérieur vers l’extérieur",
          "paragraphs": [
            "padding éloigne le contenu de sa bordure. Le fond de la boîte remplit aussi cet espace intérieur.",
            "border trace ici une ligne autour du contenu et du padding. border: 2px solid navy signifie une épaisseur de 2 pixels CSS, un trait continu (solid) et la couleur bleu marine (navy). Épaisseur, style du trait et couleur ont chacun leur rôle.",
            "margin crée de l’espace à l’extérieur de la bordure. Cet espace est transparent : on voit le fond du parent, pas le fond blanc de la carte.",
            "Avec une seule valeur, padding: 16px et margin: 12px règlent les quatre côtés. px signifie pixel CSS, une unité de taille ; 0 peut s’écrire sans unité. Nous n’avons pas besoin de régler chaque côté séparément ici.",
            "Les titres et paragraphes ont souvent leurs propres marges par défaut. Dans cet exercice, .titre et .texte ont margin: 0 pour les enlever et observer uniquement les espaces de .carte. Ce réglage de démonstration n’est pas une obligation pour toutes tes pages."
          ],
          "code": "contenu : titre et paragraphe\n→ padding : espace intérieur\n→ border : ligne de bordure\n→ margin : espace extérieur"
        },
        {
          "type": "lesson",
          "id": "html",
          "title": "HTML — Deux cartes dans un atelier",
          "paragraphs": [
            "Les deux .carte sont enfants directs de .atelier. Le h2 et le p de chaque carte sont ses enfants. Les classes titre et texte servent ici à retirer leurs marges par défaut."
          ],
          "code": "<div class=\"atelier\">\n  <div class=\"carte\">\n    <h2 class=\"titre\">Observer</h2>\n    <p class=\"texte\">Je prends le temps de regarder.</p>\n  </div>\n  <div class=\"carte\">\n    <h2 class=\"titre\">Raconter</h2>\n    <p class=\"texte\">Je décris ce que j’ai remarqué.</p>\n  </div>\n</div>"
        },
        {
          "type": "lesson",
          "id": "css",
          "title": "CSS — Voir les deux sortes d’espace",
          "paragraphs": [
            "Le cadre gris de .atelier permet de repérer le parent. Dans chaque carte, le fond blanc continue jusqu’à sa bordure bleue. Dehors, on voit le gris du parent.",
            "Observe surtout le côté gauche de la première carte : la distance entre le cadre gris et la bordure bleue montre sa marge ; la distance entre la bordure bleue et les mots montre son padding.",
            "Les cartes s’empilent naturellement, sans Flexbox. Leurs marges verticales peuvent se regrouper au lieu de s’additionner : deux marges de 12px ne donnent pas forcément 24px entre les cartes. Pour la première comparaison, mesure visuellement à gauche, pas entre les deux cartes."
          ],
          "code": ".atelier {\n  background-color: lightgray;\n  border: 2px solid gray;\n}\n.carte {\n  background-color: white;\n  border: 2px solid navy;\n  padding: 16px;\n  margin: 12px;\n}\n.titre {\n  margin: 0;\n}\n.texte {\n  margin: 0;\n}"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — Changer un seul espace",
          "intro": "Garde les mots et l’épaisseur des bordures pendant les comparaisons.",
          "items": [
            {
              "id": "observer",
              "text": "Copie les deux extraits. Repère le contenu, l’espace blanc, la bordure bleue et l’espace gris à gauche d’une carte."
            },
            {
              "id": "interieur",
              "text": "Dans .carte, compare padding: 0 puis padding: 24px. Garde margin: 12px. Explique de quel côté de la bordure l’espace change.",
              "hints": [
                "Regarde les mots par rapport à la ligne bleue.",
                "Le padding est à l’intérieur.",
                "Compare le blanc entre les mots et la bordure.",
                "À padding: 24px, les mots sont plus éloignés de la bordure. Rétablis ensuite padding: 16px."
              ]
            },
            {
              "id": "exterieur",
              "text": "Avec padding: 16px, compare margin: 0 puis margin: 24px. Observe l’espace gris à gauche de la bordure, puis remets margin: 12px."
            },
            {
              "id": "bordure",
              "text": "Compare border: 2px solid navy puis border: 6px solid navy. Explique pourquoi un trait plus épais n’est pas une marge. Remets 2px."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "mission",
          "title": "Mission autonome — Choisir l’espace utile",
          "intro": "Essaie sans lire les noms de propriétés dans les indices. Garde une copie de ton départ.",
          "items": [
            {
              "id": "contenu-propre",
              "text": "Garde les deux cartes et remplace leurs textes par deux conseils de ton choix."
            },
            {
              "id": "sans-nom-interieur",
              "text": "Les mots sont trop près de la bordure : donne-leur plus d’air, sans augmenter l’espace gris extérieur ni l’épaisseur de la ligne.",
              "hints": [
                "Repère le côté de la bordure où se trouvent les mots.",
                "La modification concerne l’intérieur.",
                "Compare les rôles de padding et margin.",
                "Augmente seulement padding dans .carte, par exemple de 16px à 24px. Garde margin et border."
              ]
            },
            {
              "id": "sans-nom-exterieur",
              "text": "Les cartes sont trop près du cadre de l’atelier : éloigne leurs bordures du cadre, sans changer l’air entre les mots et leur propre bordure.",
              "hints": [
                "Regarde l’espace entre deux bordures, à gauche.",
                "Cet espace est extérieur à la carte.",
                "Le fond gris vient du parent.",
                "Augmente margin dans .carte, par exemple de 12px à 24px. Ne change pas padding ni border."
              ]
            },
            {
              "id": "troisieme",
              "text": "Ajoute une troisième carte avec un titre et un paragraphe. Réutilise les classes carte, titre et texte sans ajouter de règle CSS."
            },
            {
              "id": "expliquer",
              "text": "Explique les deux réglages précédents et prédis l’effet si tu remets seulement l’espace intérieur à zéro."
            }
          ]
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie ton travail",
          "items": [
            {
              "id": "verifier-1",
              "text": "Je distingue l’intérieur et l’extérieur de la bordure."
            },
            {
              "id": "verifier-2",
              "text": "Je peux éloigner les mots sans changer la marge extérieure."
            },
            {
              "id": "verifier-3",
              "text": "Je peux éloigner la carte du cadre sans changer son padding."
            },
            {
              "id": "verifier-4",
              "text": "La nouvelle carte reçoit le style grâce aux classes réutilisées."
            },
            {
              "id": "verifier-5",
              "text": "Je sais que les marges verticales ne s’additionnent pas toujours."
            },
            {
              "id": "verifier-6",
              "text": "Je peux expliquer mes choix sans seulement réciter le code."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "panne",
          "title": "Consolidation — Beaucoup d’espace, mais du mauvais côté",
          "paragraphs": [
            "Dans une copie, remplace seulement la règle .carte par celle-ci ; garde le HTML, le cadre et les marges à zéro des titres et paragraphes."
          ],
          "code": ".carte {\n  background-color: white;\n  border: 2px solid navy;\n  padding: 0;\n  margin: 32px;\n}"
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Réparer une carte trop serrée",
          "intro": "Les mots touchent presque la bordure malgré le grand espace autour.",
          "items": [
            {
              "id": "corriger",
              "text": "Redonne de l’air aux mots sans agrandir encore l’espace extérieur. Explique pourquoi augmenter margin ne corrige pas ce problème.",
              "hints": [
                "Pointe l’espace manquant à l’intérieur de la ligne.",
                "La marge est déjà grande, mais elle est dehors.",
                "Compare padding: 0 et margin: 32px.",
                "Essaie padding: 16px en gardant margin: 32px. Ensuite seulement, réduis la marge si tu souhaites moins d’espace extérieur."
              ]
            },
            {
              "id": "distinguer",
              "text": "Si le texte reste décalé avec padding: 0, vérifie les marges de .titre et .texte : un enfant peut avoir sa propre marge. Explique quel élément porte chaque règle."
            }
          ]
        },
        {
          "type": "details",
          "id": "bonus-detail",
          "title": "Bonus facultatif — Compact ou aéré ?",
          "blocks": [
            {
              "type": "tasks",
              "id": "bonus",
              "title": "Deux versions avec les mêmes textes",
              "intro": "Si tu sais distinguer les deux espaces, fais deux copies de ton Pen ou de ton projet.",
              "items": [
                {
                  "id": "compact",
                  "text": "Dans la première, essaie padding: 8px et margin: 8px sur .carte, en gardant les bordures à 2px."
                },
                {
                  "id": "aere",
                  "text": "Dans la seconde, essaie padding: 24px et margin: 20px. Garde exactement les mêmes textes et la même taille de caractères."
                },
                {
                  "id": "choisir",
                  "text": "Compare à largeur identique et explique deux différences : l’espace dans la carte et celui autour. Choisis une version selon l’usage, sans dire que plus d’espace est toujours mieux."
                }
              ]
            }
          ]
        },
        {
          "type": "callout",
          "id": "suite",
          "title": "Garder une base pour la suite",
          "text": "Tu peux conserver ces cartes pour le cours Dimensions et images dans une carte, puis réaliser Ma carte personnelle. Vérifie d’abord les prérequis des suites ci-dessous ; si l’espace intérieur/extérieur reste flou, reprends la consolidation. Le bonus n’est pas obligatoire."
        }
      ],
      "masteryCriteria": [
        "Choisir padding ou margin à partir d’un besoin décrit sans nom de propriété.",
        "Identifier le contenu, le padding, la bordure et la marge dans l’exemple ; expliquer quel fond est visible.",
        "Réparer un manque d’espace intérieur sans augmenter inutilement l’espace extérieur.",
        "Réutiliser les classes sur une troisième carte et expliquer le résultat.",
        "Lire les trois valeurs d’une bordure simple ; les arrondis ne sont ni enseignés ni réputés acquis ici."
      ],
      "consolidation": [
        {
          "moduleId": "css-boites-espacements",
          "label": "Réparer un espace placé du mauvais côté",
          "blockId": "panne"
        },
        {
          "moduleId": "html-parent-enfants",
          "label": "Reprendre le parent et les enfants",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre principal et un sous-titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises."
            }
          ]
        },
        {
          "moduleId": "css-classes-couleurs",
          "label": "Reprendre les règles par classe",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre principal et un sous-titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une règle CSS : sélecteur, propriété et valeur."
            }
          ]
        },
        {
          "moduleId": "css-feuille-style",
          "label": "Reprendre la liaison CSS dans un projet local",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Repérer head et body."
            },
            {
              "skillId": "html.paths",
              "expectation": "Lire un chemin relatif."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une déclaration simple."
            }
          ]
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "css-boites-espacements",
          "label": "Comparer une version compacte et une version aérée",
          "blockId": "bonus-detail",
          "prerequisiteSkills": [
            {
              "skillId": "css.spacing",
              "expectation": "Modifier séparément les espaces intérieur et extérieur."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "css-dimensions-images",
          "label": "Adapter la largeur et l’image de ta carte si les prérequis sont compris",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Repérer la carte parent et l’image à l’intérieur."
            },
            {
              "skillId": "html.images",
              "expectation": "Insérer une source dans src et rédiger un alt adapté."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier les classes HTML aux règles CSS."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Distinguer padding et margin et lire une bordure simple."
            }
          ]
        },
        {
          "moduleId": "web-affiche-numerique",
          "label": "Réinvestir facultativement dans une affiche",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre principal et un sous-titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier class=\"carte\" dans HTML au sélecteur .carte dans CSS."
            },
            {
              "skillId": "css.colors",
              "expectation": "Changer le texte et le fond avec une règle CSS."
            }
          ]
        },
        {
          "moduleId": "css-textes-lisibles",
          "label": "Reprendre la lisibilité si les mots restent difficiles à lire",
          "prerequisiteSkills": [
            {
              "skillId": "css.selectors",
              "expectation": "Relier class=\"carte\" dans HTML au sélecteur .carte dans CSS."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une déclaration et modifier une valeur."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire choisir padding ou margin selon le problème observé, lire une bordure et distinguer les espaces du parent et des enfants.",
        "entryDiagnosis": [
          "Faire montrer les enfants directs de .atelier puis de .carte. Attendu : cartes, puis titre/paragraphe ; reprendre H7 si nécessaire.",
          "Demander quelle règle agit sur les deux cartes : .carte grâce à class=\"carte\". Reprendre les classes si la relation manque.",
          "Demander quel fond apparaîtra derrière la carte ; ne pas présumer padding/margin connus parce qu’ils existaient dans un code fourni."
        ],
        "preparation": [
          "Nouveau Pen ou copie de projet avec CSS chargé, sans autres règles qui masquent l’observation.",
          "Garder le cadre parent avec sa bordure et les marges du h2/p à zéro pour isoler la comparaison ; commencer par le côté gauche.",
          "Préparer les deux règles de comparaison et la panne ; ne pas ajouter largeur, hauteur, Flexbox ou arrondis."
        ],
        "why": "Une carte peut avoir beaucoup de vide à l’extérieur tout en serrant son texte. Choisir l’espace utile évite de changer des nombres au hasard.",
        "discoverySpeech": [
          "« Suivons le chemin depuis les mots : contenu, espace intérieur, ligne de bordure, puis espace extérieur. Le côté de la ligne compte plus que la quantité de vide. »",
          "« Le padding garde le fond blanc de la carte. La marge est dehors, transparente : ici elle laisse voir le gris de l’atelier. »",
          "« border: 2px solid navy décrit une épaisseur, un trait continu et une couleur. Épaissir ce trait ne revient pas à ajouter de l’air aux mots. »",
          "« Nous remettons les marges des titres et paragraphes à zéro uniquement pour voir les espaces de leur parent. Dans d’autres pages, les enfants peuvent aussi avoir des marges. »",
          "« Changeons un seul nombre et prédisons l’effet à gauche. Entre deux cartes, les marges verticales peuvent se regrouper : nous ne les additionnons pas automatiquement. »"
        ],
        "example": {
          "target": {
            "moduleId": "css-boites-espacements",
            "label": "Observer les couches dans le CSS",
            "blockId": "css"
          },
          "comments": [
            "Pointer .atelier, .carte et les enfants dans le HTML avant de lire les règles.",
            "À gauche, de l’intérieur du cadre parent à la bordure bleue : margin 12px. De l’intérieur de la bordure bleue au début de la boîte du texte : padding 16px. L’épaisseur propre de la bordure ajoute 2px si l’on mesure depuis son bord extérieur.",
            "Modifier padding seul de 16 à 24 : le retrait de la carte par rapport au cadre reste identique ; son contenu se décale de 8px.",
            "Modifier margin seule de 12 à 24 : la carte se décale de 12px à gauche ; son padding reste constant. Ne pas promettre une largeur ou une hauteur extérieure inchangée."
          ]
        },
        "questions": [
          {
            "question": "Les mots touchent la bordure : quelle propriété choisir ?",
            "answer": "padding, l’espace intérieur. Augmenter margin ne fait qu’éloigner la carte de l’extérieur."
          },
          {
            "question": "La carte touche presque le cadre parent : que modifier ?",
            "answer": "margin sur .carte, sans changer son padding si l’air autour du texte convient."
          },
          {
            "question": "Pourquoi la marge est-elle grise ?",
            "answer": "Elle est transparente ; on voit le fond lightgray du parent .atelier. Ce n’est pas une couleur propre à margin."
          },
          {
            "question": "Que signifient les trois valeurs de border ?",
            "answer": "2px : épaisseur ; solid : trait continu ; navy : couleur bleu marine. Une couleur seule ne suffit pas à rendre un trait visible par défaut."
          },
          {
            "question": "Deux marges verticales de 12px donnent-elles toujours 24px ?",
            "answer": "Non. Ici, les marges verticales des cartes empilées peuvent fusionner en 12px. Les comparaisons de base portent sur le côté gauche ; le calcul complet de fusion n’est pas exigé."
          },
          {
            "question": "Pourquoi retirer les marges des titres et paragraphes ?",
            "answer": "Pour isoler les espaces du parent .carte. Sinon les marges par défaut des enfants pourraient être prises pour son padding."
          },
          {
            "question": "Pourquoi la troisième carte reçoit-elle le style ?",
            "answer": "Elle porte les mêmes classes. Inutile de recopier les règles pour chaque exemplaire."
          },
          {
            "question": "Sait-on déjà utiliser border-radius ?",
            "answer": "Non. Une bordure simple et des angles arrondis sont deux observations différentes. Ce module n’enseigne pas border-radius."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "css-boites-espacements",
          "label": "Comparer les trois réglages",
          "blockId": "guide"
        },
        "independentActivity": {
          "moduleId": "css-boites-espacements",
          "label": "Aérer au bon endroit sans nom de propriété",
          "blockId": "mission"
        },
        "differentiation": [
          "Faire pointer les deux côtés d’une bordure avant toute saisie ; proposer une seule carte si le repérage est fragile.",
          "Aider à copier et à ouvrir les panneaux sans décider de la propriété. Faire verbaliser la prédiction avant de regarder le résultat.",
          "L’élève déjà à l’aise peut faire directement les deux consignes sans nom de propriété et ajouter une carte ; le bonus compare des usages, pas un volume de travail obligatoire."
        ],
        "commonErrors": [
          {
            "symptom": "La marge augmente mais le texte reste collé.",
            "helps": [
              "Demander de pointer l’espace qui manque.",
              "Faire distinguer les zones blanche et grise.",
              "Dans la panne, mettre padding: 16px tout en conservant d’abord margin: 32px ; vérifier avant un second changement."
            ]
          },
          {
            "symptom": "Les mesures verticales semblent fausses.",
            "helps": [
              "Vérifier si l’élève additionne les marges de deux cartes.",
              "Observer d’abord à gauche comme demandé.",
              "Expliquer que les marges verticales peuvent fusionner ; ne pas ajouter un dispositif Flexbox pour cacher la difficulté."
            ]
          },
          {
            "symptom": "L’espace des enfants est confondu avec celui de la carte.",
            "helps": [
              "Pointer quel sélecteur porte la déclaration.",
              "Vérifier les classes titre et texte ainsi que leurs margin: 0.",
              "Comparer la règle du parent à celle de l’enfant ; rétablir le départ de démonstration avant de retester."
            ]
          }
        ],
        "notes": [
          "Solutions possibles : padding 24px pour la demande intérieure, puis margin 24px pour la demande extérieure. D’autres valeurs sont recevables si l’élève change le bon espace et explique.",
          "Consolidation : garder d’abord margin 32px et augmenter padding de 0 à 16px. Corriger une variable à la fois établit la cause.",
          "La compétence css.spacing peut être observée ici. css.borders garde son libellé existant incluant border-radius : ce cours n’en couvre que la bordure simple. Noter cette couverture partielle ; ne pas marquer toute la compétence Acquis uniquement sur cet exercice.",
          "Observer réussite autonome, avec modèle ou avec aide ; distinguer gestion de l’éditeur et compréhension. Aucun nouvel état, calcul ou mécanisme de suivi n’est ajouté.",
          "Dimensions et images dans une carte puis Ma carte personnelle sont disponibles. Vérifier aussi src/alt avant de poursuivre ; une bordure fournie ne suffit toujours pas à valider les arrondis.",
          "Réinvestir dans l’affiche est facultatif ; ne pas exiger de refaire son cahier des charges si l’élève sait déjà transférer les espacements."
        ],
        "quickConductor": [
          "Vérifier regroupements et ciblage par classe.",
          "Présenter les quatre couches, les couleurs témoins et les marges des enfants.",
          "Comparer padding, margin et border séparément.",
          "Donner les deux consignes sans nom de propriété puis ajouter une carte.",
          "Consolider l’intérieur/extérieur ou comparer compact/aéré.",
          "Noter manuellement ce qui est compris et l’aide apportée ; distinguer bordure et arrondis."
        ],
        "references": [
          {
            "title": "MDN — Le modèle de boîte",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model"
          },
          {
            "title": "MDN — Fusion des marges",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_model/Margin_collapsing"
          },
          {
            "title": "MDN — border",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/border"
          }
        ]
      }
    },
    "html-titres-paragraphes": {
      "domainId": "web",
      "title": "Titres et paragraphes",
      "type": "lesson",
      "objective": "Créer et modifier des titres et des paragraphes en HTML.",
      "skillIds": [
        "html.headings",
        "html.text"
      ],
      "blocks": [
        {
          "type": "tasks",
          "title": "Exercice guidé — Titre et paragraphe",
          "items": [
            {
              "id": "html-codepen",
              "text": "Clique sur « Ouvrir CodePen », puis repère la zone HTML."
            },
            {
              "id": "premier-h1",
              "text": "Tape <h1>Mon site</h1>.",
              "code": true
            },
            {
              "id": "modifier-titre",
              "text": "Change seulement le texte « Mon site ». Garde les balises <h1> et </h1>."
            },
            {
              "id": "premier-p",
              "text": "Ajoute <p>Bienvenue sur ma page.</p>.",
              "code": true
            },
            {
              "id": "modifier-p",
              "text": "Change seulement le texte du paragraphe."
            },
            {
              "id": "deuxieme-p",
              "text": "Ajoute maintenant un deuxième paragraphe sans recopier l'exemple.",
              "hint": "Un paragraphe commence par <p> et se termine par </p>.",
              "syntax": "<p>Mon deuxième paragraphe</p>"
            }
          ],
          "id": "guide"
        },
        {
          "id": "niveaux-titres",
          "type": "lesson",
          "title": "Les niveaux de titres",
          "paragraphs": [
            "h1 est généralement le titre principal de la page.",
            "h2 à h6 permettent de créer différents niveaux de sous-titres."
          ],
          "code": "<h1>Mon site</h1>\n<h2>Mes jeux préférés</h2>\n<p>Voici quelques jeux que j’aime.</p>"
        },
        {
          "id": "autonome",
          "type": "tasks",
          "title": "À toi de jouer — sans modèle",
          "intro": "Choisis un nouveau sujet pour ta page. Essaie de créer les éléments suivants sans recopier l’exercice guidé. Fais un premier essai avant d’ouvrir les indices.",
          "items": [
            {
              "id": "titre-autonome",
              "text": "Crée un titre principal pour présenter ton sujet.",
              "hint": "Le titre principal utilise h1. Écris ton texte entre la balise ouvrante et la balise fermante.",
              "syntax": "<h1>Mon sujet</h1>"
            },
            {
              "id": "sous-titres-autonomes",
              "text": "Crée au moins deux sous-titres avec des balises h2 à h6.",
              "hint": "Choisis les niveaux de titres qui correspondent à l’organisation de ta page. Deux parties de même importance peuvent utiliser h2.",
              "syntax": "<h2>Première partie</h2>\n<h2>Deuxième partie</h2>"
            },
            {
              "id": "paragraphes-autonomes",
              "text": "Crée deux paragraphes pour développer ton sujet.",
              "hint": "Chaque paragraphe possède sa propre balise p ouvrante et fermante.",
              "syntax": "<p>Mon premier paragraphe.</p>\n<p>Mon deuxième paragraphe.</p>"
            }
          ]
        }
      ],
      "theme": "fondations",
      "bonus": "Efface ton HTML et essaie de refaire seulement un titre et un paragraphe sans regarder les exemples."
    },
    "html-mini-page-fondations": {
      "domainId": "web",
      "title": "Mini-page des fondations",
      "type": "challenge",
      "objective": "Réutiliser seul les premières bases du HTML.",
      "skillIds": [
        "html.headings",
        "html.text",
        "html.lists"
      ],
      "blocks": [
        {
          "id": "defi",
          "type": "tasks",
          "title": "Crée ta mini-page sans modèle",
          "intro": "Choisis un sujet qui te plaît et crée une petite page dans la zone HTML de CodePen. Essaie d’abord sans modèle. En cas de blocage, ouvre seulement l’indice de l’étape concernée.",
          "items": [
            {
              "id": "titre-principal",
              "text": "Crée un h1 pour le titre principal de ta page.",
              "hint": "Place ton titre entre la balise ouvrante h1 et sa balise fermante."
            },
            {
              "id": "sous-titre",
              "text": "Ajoute un h2 pour présenter une partie de ta page.",
              "hint": "Un sous-titre utilise ici h2. Pense à ouvrir puis à fermer cette balise."
            },
            {
              "id": "deux-paragraphes",
              "text": "Écris deux paragraphes sur ton sujet.",
              "hint": "Chaque paragraphe a sa propre balise p ouvrante et fermante."
            },
            {
              "id": "liste",
              "text": "Crée une liste contenant au moins trois éléments.",
              "hint": "La liste utilise ul. À l’intérieur, chaque élément utilise li. Vérifie que tes trois éléments sont bien dans la même liste."
            }
          ]
        },
        {
          "id": "verification",
          "type": "checklist",
          "title": "Vérifie ton travail",
          "items": [
            {
              "id": "titres-visibles",
              "text": "Les titres s’affichent."
            },
            {
              "id": "paragraphes-presents",
              "text": "Les deux paragraphes sont présents."
            },
            {
              "id": "trois-elements",
              "text": "La liste contient au moins trois éléments."
            },
            {
              "id": "balises",
              "text": "Les balises sont correctement ouvertes et fermées."
            }
          ]
        }
      ],
      "theme": "fondations",
      "bonus": "Si tu arrives à refaire cette mini-page avec peu ou pas d’aide, tu es prêt à continuer avec le parcours Débutants. Ce repère n’est pas une validation automatique : si tu es en cours, le professeur reste libre de te proposer le parcours adapté."
    },
    "html-listes": {
      "domainId": "web",
      "title": "Listes HTML",
      "type": "lesson",
      "objective": "Créer et modifier une liste HTML.",
      "skillIds": [
        "html.lists"
      ],
      "blocks": [
        {
          "id": "cours",
          "type": "lesson",
          "title": "Comprendre une liste HTML",
          "paragraphs": [
            "Une liste non ordonnée utilise la balise <ul>. Elle permet de regrouper des éléments sans les numéroter.",
            "Chaque élément de la liste utilise une balise <li>.",
            "Les éléments <li> sont placés à l’intérieur du <ul>, entre sa balise ouvrante et sa balise fermante."
          ],
          "code": "<ul>\n  <li>Jeux</li>\n  <li>Sport</li>\n  <li>Musique</li>\n</ul>"
        },
        {
          "type": "tasks",
          "title": "Exercice guidé — Après les titres et paragraphes",
          "items": [
            {
              "id": "liste-trois",
              "text": "Crée une liste avec trois éléments.",
              "hint": "La liste utilise <ul>. Chaque élément utilise <li>.",
              "syntax": "<ul>\n  <li>Jeux</li>\n  <li>Sport</li>\n  <li>Musique</li>\n</ul>"
            },
            {
              "id": "modifier-li",
              "text": "Remplace les trois éléments par trois choses que tu aimes."
            },
            {
              "id": "quatrieme-li",
              "text": "Ajoute seul un quatrième élément.",
              "hint": "Regarde comment sont écrits les trois autres éléments."
            }
          ],
          "id": "guide"
        },
        {
          "id": "defi",
          "type": "tasks",
          "title": "Petit défi autonome",
          "items": [
            {
              "id": "nouvelle-liste",
              "text": "Crée une nouvelle liste sur un autre sujet avec au moins quatre éléments, sans regarder l’exemple sauf si tu bloques."
            }
          ]
        }
      ],
      "theme": "fondations"
    },
    "html-liens": {
      "domainId": "web",
      "title": "Liens HTML",
      "type": "lesson",
      "objective": "Créer un lien vers un site.",
      "skillIds": [
        "html.links"
      ],
      "blocks": [
        {
          "id": "cours",
          "type": "lesson",
          "title": "Comprendre un lien HTML",
          "paragraphs": [
            "La balise <a> crée un lien cliquable.",
            "L’attribut href indique l’adresse vers laquelle le lien mène. L’adresse entre guillemets est la destination.",
            "Le texte entre <a> et </a> est le texte visible et cliquable. Dans l’exemple, c’est « Visiter le site »."
          ],
          "code": "<a href=\"https://example.com\">Visiter le site</a>"
        },
        {
          "id": "exercices",
          "type": "tasks",
          "title": "À toi de jouer avec les liens",
          "intro": "Travaille dans la zone HTML de CodePen. Essaie chaque étape avant d’ouvrir son indice.",
          "items": [
            {
              "id": "lien-exemple",
              "text": "Reproduis ou utilise le lien d’exemple.",
              "hint": "La balise ouvrante contient href et l’adresse. Ajoute ensuite le texte visible puis la balise fermante.",
              "syntax": "<a href=\"https://example.com\">Visiter le site</a>"
            },
            {
              "id": "texte-lien",
              "text": "Modifie uniquement le texte visible du lien. Garde la même adresse.",
              "hint": "Change le texte entre <a> et </a>, sans toucher à l’adresse entre guillemets."
            },
            {
              "id": "adresse-lien",
              "text": "Modifie l’adresse pour que le lien mène vers un autre site.",
              "hint": "Remplace la destination dans href. Conserve les guillemets autour de la nouvelle adresse."
            },
            {
              "id": "deuxieme-lien",
              "text": "Crée un deuxième lien avec une autre adresse et un autre texte. Essaie sans regarder l’exemple.",
              "hint": "Choisis une nouvelle destination et un texte qui annonce le site. Écris une nouvelle balise a avec son href et sa fermeture.",
              "syntax": "<a href=\"https://www.wikipedia.org\">Découvrir Wikipédia</a>"
            }
          ]
        }
      ],
      "theme": "debutants"
    },
    "html-revision": {
      "domainId": "web",
      "title": "Révision HTML",
      "type": "practice",
      "objective": "Reconstruire seul une page avec les notions déjà apprises.",
      "skillIds": [
        "html.headings",
        "html.text",
        "html.lists",
        "html.links"
      ],
      "blocks": [
        {
          "type": "lesson",
          "id": "consigne",
          "title": "Mission autonome — Révision",
          "paragraphs": [
            "Crée une petite page sur le sujet de ton choix. Essaie d'abord sans indice ni aide extérieure."
          ]
        },
        {
          "id": "revision-html-titres-paragraphes",
          "type": "tasks",
          "title": "Titres et paragraphes — Révision",
          "items": [
            {
              "id": "titres",
              "text": "Créer un titre principal puis au moins deux sous-titres avec des balises de h1 à h6.",
              "hint": "h1 est le titre principal. h2, h3... servent à créer des niveaux de titres.",
              "syntax": "<h1>Mon site</h1>\n<h2>Première partie</h2>\n<h3>Sous-partie</h3>"
            },
            {
              "id": "deux-p",
              "text": "Créer deux paragraphes.",
              "hint": "Chaque paragraphe utilise la même balise.",
              "syntax": "<p>Mon paragraphe</p>"
            }
          ]
        },
        {
          "id": "revision-html-listes",
          "type": "tasks",
          "title": "Liste — Révision",
          "items": [
            {
              "id": "liste",
              "text": "Créer une liste de trois éléments.",
              "hint": "La liste utilise ul et chaque élément utilise li.",
              "syntax": "<ul>\n  <li>Élément 1</li>\n  <li>Élément 2</li>\n  <li>Élément 3</li>\n</ul>"
            }
          ]
        },
        {
          "id": "revision-html-liens",
          "type": "tasks",
          "title": "Créer un lien",
          "items": [
            {
              "id": "lien",
              "text": "Créer un lien vers un site de ton choix.",
              "hint": "La destination se place dans href.",
              "syntax": "<a href=\"https://example.com\">Visiter le site</a>"
            }
          ]
        },
        {
          "type": "tasks",
          "title": "Pour aller plus loin",
          "intro": "Continue avec uniquement les notions que tu connais déjà.",
          "items": [
            {
              "id": "bonus-section",
              "text": "Ajoute une nouvelle section avec un h2 ou h3 et un paragraphe."
            },
            {
              "id": "bonus-liste",
              "text": "Ajoute une deuxième liste sur un autre sujet."
            },
            {
              "id": "bonus-lien",
              "text": "Ajoute un deuxième lien vers un autre site."
            },
            {
              "id": "bonus-hierarchie",
              "text": "Organise ta page avec plusieurs niveaux de titres entre h1 et h6."
            },
            {
              "id": "bonus-verification",
              "text": "Relis tout ton HTML et corrige les erreurs que tu trouves."
            }
          ],
          "id": "approfondissement"
        },
        {
          "type": "callout",
          "tone": "neutral",
          "title": "Point de validation",
          "text": "Vérifie que tu sais refaire les éléments principaux sans regarder les exemples. Si tu es en cours, tu peux montrer ton travail au professeur. Sinon, passe au module suivant quand tu te sens prêt.",
          "id": "pause"
        }
      ],
      "theme": "debutants"
    },
    "html-images": {
      "domainId": "web",
      "title": "Images HTML",
      "type": "lesson",
      "objective": "Insérer une image, distinguer src et alt, remplacer l’image et commencer à diagnostiquer une image absente.",
      "skillIds": [
        "html.images",
        "html.links"
      ],
      "blocks": [
        {
          "type": "lesson",
          "id": "cours",
          "title": "1 — Une source et un texte alternatif — exemple explicatif",
          "paragraphs": [
            "img insère une image. src indique sa source ; alt donne un texte qui transmet l’information utile apportée par l’image dans cette page.",
            "Le texte alternatif aide notamment les personnes qui utilisent un lecteur d’écran et peut remplacer une image absente. Ce n’est pas une légende visible sous l’image.",
            "Une image montrant une forme à reconnaître peut avoir alt=\"Un carré bleu\". Après remplacement par un cercle orange, cette description doit changer.",
            "Contrairement à p ou a, img n’entoure pas de contenu : elle n’a pas de balise de fermeture.",
            "L’extrait court ci-dessous sert à lire la structure de la balise. Son chemin correspond à un projet local avec les fichiers fournis ; ce n’est pas un extrait prêt à coller dans CodePen."
          ],
          "code": "<img src=\"assets/exercices/carre-bleu.svg\" alt=\"Un carré bleu\">"
        },
        {
          "type": "lesson",
          "id": "ressources-intro",
          "title": "2 — Choisis la bonne source",
          "paragraphs": [
            "L’exemple court ci-dessus fonctionne dans un projet local seulement si le dossier assets/exercices contient l’image, à côté de ta page HTML. Dans CodePen, ce chemin ne pointe pas vers ton ordinateur.",
            "Pour CodePen, clique sur « Copier uniquement la source » sous le dessin choisi. Colle cette source entière entre les guillemets de src, sans la retaper ni la modifier. Ensuite, rédige toi-même alt entre ses propres guillemets. La source contient le dessin et fonctionne sans serveur d’images ; ses données encodées restent repliées.",
            "Les deux dessins sont fournis par CodeCraft. Tu peux les télécharger pour un projet local. Si une ressource ne se charge pas même depuis cette page, préviens le professeur si tu es en cours, ou réessaie plus tard : ce n’est pas forcément une erreur dans ton code."
          ]
        },
        {
          "type": "resource",
          "id": "ressource-carre",
          "title": "Image de départ — carré bleu",
          "resourceId": "carre-bleu"
        },
        {
          "type": "resource",
          "id": "ressource-cercle",
          "title": "Image de remplacement — cercle orange",
          "resourceId": "cercle-orange"
        },
        {
          "type": "tasks",
          "id": "exercices",
          "title": "3 — Exercice guidé",
          "intro": "Dans HTML sur CodePen, commence avec <img src=\"\" alt=\"\">. Remplis d’abord src, puis rédige toi-même alt. Avance une étape à la fois.",
          "items": [
            {
              "id": "premiere-image",
              "text": "Clique sur « Copier uniquement la source » du carré bleu. Colle toute la source entre les guillemets de src, sans la retaper ni la modifier. Vérifie que l’image s’affiche.",
              "hints": [
                "Repère src et ses deux guillemets.",
                "Place le curseur entre ces guillemets ; ne colle pas une balise img complète à cet endroit.",
                "Compare la structure avec l’exemple explicatif : src contient la source, alt contiendra ton texte.",
                "Recopie uniquement la source avec le bouton puis colle-la entre les guillemets de src. Écris ensuite ta description dans alt."
              ]
            },
            {
              "id": "modifier-alt",
              "text": "Décris la forme et sa couleur avec tes mots dans alt. Observe que ce texte ne devient pas une légende."
            },
            {
              "id": "modifier-image",
              "text": "Copie uniquement la source du cercle orange et remplace toute l’ancienne valeur de src entre les guillemets. Ne modifie pas la source copiée. Rédige ensuite un nouveau alt adapté.",
              "hints": [
                "Regarde d’abord ce qui a changé dans l’image.",
                "Change le contenu des guillemets de src, puis ceux de alt.",
                "Compare le dessin affiché avec les mots que tu as écrits dans alt.",
                "Remplace un attribut à la fois et vérifie le résultat après chaque changement."
              ]
            }
          ]
        },
        {
          "type": "details",
          "id": "aide-fondations",
          "title": "Besoin d’un squelette titre/paragraphe ? — Fondations ou autre parcours",
          "blocks": [
            {
              "type": "lesson",
              "id": "squelette",
              "title": "Une petite page à compléter",
              "paragraphs": [
                "Si tu ne sais pas encore créer un titre et un paragraphe, utilise ce squelette fourni. Le titre et le texte sont déjà prêts : leur création n’est pas nécessaire pour travailler les images.",
                "Sous le carré bleu, clique sur « Copier uniquement la source ». Dans le squelette, colle cette source entière entre les guillemets de src sans la retaper ni la modifier. Rédige toi-même alt pour décrire l’information utile de l’image. Tu peux ensuite personnaliser les textes.",
                "Si sélectionner ou coller te bloque, demande une aide à la manipulation si tu es en cours. Cette aide ne préjuge pas de ta compréhension de src et alt."
              ],
              "code": "<h1>Mes formes</h1>\n<p>Voici une forme que je reconnais.</p>\n<img src=\"\" alt=\"\">"
            }
          ]
        },
        {
          "type": "tasks",
          "id": "mission",
          "title": "4 — Mission autonome",
          "intro": "Présente une forme avec un titre, un paragraphe et une image. Si tu ne sais pas encore créer les textes, utilise le squelette repliable juste au-dessus. Tu peux réussir la partie images avec ce support. Si ces bases sont maîtrisées, commence sans squelette.",
          "items": [
            {
              "id": "image-section",
              "text": "Crée un titre et un paragraphe, ou conserve ceux du squelette fourni pour te concentrer sur l’image."
            },
            {
              "id": "mission-image",
              "text": "Copie la source entière du dessin choisi dans src, sans la modifier, puis rédige toi-même un alt utile."
            },
            {
              "id": "mission-remplacer",
              "text": "Remplace l’image et vérifie que son texte alternatif reste adapté."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "depannage",
          "title": "Consolidation — Une image absente",
          "intro": "Teste volontairement une erreur, puis corrige-la. Utilise les deux ressources disponibles au-dessus.",
          "items": [
            {
              "id": "source-incorrecte",
              "text": "Remplace temporairement src par image-introuvable.svg. Observe, puis rétablis une source fournie.",
              "hints": [
                "Observe l’image absente et relis src.",
                "Un nom de fichier seul ne suffit pas si ce fichier n’existe pas à cet endroit.",
                "Compare src avec la source obtenue par « Copier uniquement la source ».",
                "Remplace toute la valeur de src par la source copiée, sans la retaper ni la modifier, puis recharge l’aperçu."
              ]
            },
            {
              "id": "attributs-inverses",
              "text": "Répare cet extrait : <img src=\"Un carré bleu\" alt=\"assets/exercices/carre-bleu.svg\">. Dans CodePen, utilise la source CodePen du carré.",
              "hints": [
                "Quel attribut doit contenir la description ?",
                "src attend la source, alt attend le texte alternatif.",
                "Compare avec le premier exemple commenté.",
                "Copie la source du carré dans src avec le bouton dédié, puis rédige la description dans alt. Teste le résultat."
              ]
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus-presentation",
          "title": "Bonus — Deuxième présentation illustrée",
          "intro": "Si ta première présentation fonctionne, ajoute une autre présentation. Si tu ne connais pas h2, le titre et le paragraphe sont fournis dans l’indice : utilise-les sans devoir maîtriser une nouvelle balise.",
          "items": [
            {
              "id": "deuxieme-image",
              "text": "Ajoute une deuxième présentation avec titre, paragraphe et image. Utilise les textes fournis dans l’indice si nécessaire, puis remplis src et rédige alt.",
              "hint": "Tu peux recopier le h2 et le p ci-dessous tels quels. Ton objectif ici reste l’image et sa description.",
              "syntax": "<h2>Une autre forme</h2>\n<p>Voici une deuxième forme à observer.</p>\n<img src=\"\" alt=\"\">"
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus-lien",
          "title": "Bonus — Une image cliquable",
          "intro": "Seulement si tu sais déjà créer un lien avec a et href. Sinon, tu peux passer ce bonus et revenir après Liens HTML.",
          "items": [
            {
              "id": "image-lien",
              "text": "Transforme une image en lien vers https://example.com. Vérifie la destination et adapte alt pour annoncer le lien.",
              "hints": [
                "Repère l’image et le lien qui doit l’entourer.",
                "L’image remplace le texte cliquable entre <a> et </a>.",
                "Compare avec la syntaxe repliée ci-dessous.",
                "Entoure img de <a href=\"https://example.com\"> et </a>. Dans le modèle, colle la source entière dans src et rédige toi-même alt pour annoncer la destination du lien. Teste le clic."
              ],
              "syntax": "<a href=\"https://example.com\">\n  <img src=\"\" alt=\"\">\n</a>"
            }
          ]
        }
      ],
      "theme": "debutants",
      "prerequisiteSkills": [
        {
          "skillId": "html.text",
          "expectation": "Reconnaître une balise et modifier le texte d’un petit extrait HTML."
        }
      ],
      "masteryCriteria": [
        "Insérer une image à partir d’une source fournie, sans ajouter </img>.",
        "Expliquer que src désigne la source et que alt transmet l’information utile de l’image.",
        "Remplacer la source puis adapter alt au nouveau contenu.",
        "Face à une image absente, vérifier la source et les guillemets avant de conclure à une faute HTML.",
        "Distinguer la réussite sur src et alt de l’aide reçue pour créer les titres, paragraphes ou manipuler le copier-coller."
      ],
      "resources": [
        {
          "id": "carre-bleu",
          "title": "Le carré bleu",
          "path": "assets/exercices/carre-bleu.svg",
          "alt": "Un carré bleu",
          "codepenSrc": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22120%22%20viewBox%3D%220%200%20160%20120%22%3E%3Crect%20width%3D%22160%22%20height%3D%22120%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2240%22%20y%3D%2220%22%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22royalblue%22%2F%3E%3C%2Fsvg%3E"
        },
        {
          "id": "cercle-orange",
          "title": "Le cercle orange",
          "path": "assets/exercices/cercle-orange.svg",
          "alt": "Un cercle orange",
          "codepenSrc": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22160%22%20height%3D%22120%22%20viewBox%3D%220%200%20160%20120%22%3E%3Crect%20width%3D%22160%22%20height%3D%22120%22%20fill%3D%22white%22%2F%3E%3Ccircle%20cx%3D%2280%22%20cy%3D%2260%22%20r%3D%2240%22%20fill%3D%22darkorange%22%2F%3E%3C%2Fsvg%3E"
        }
      ],
      "consolidation": [
        {
          "moduleId": "html-images",
          "blockId": "depannage",
          "label": "Réparer une source ou des attributs"
        },
        {
          "moduleId": "html-titres-paragraphes",
          "label": "Reprendre titres et paragraphes si nécessaire"
        },
        {
          "moduleId": "html-listes",
          "label": "Reprendre les listes avant la mini-page si nécessaire"
        },
        {
          "moduleId": "html-liens",
          "label": "Reprendre les liens avant la mini-page ou le bonus cliquable"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "html-images",
          "blockId": "bonus-presentation",
          "label": "Ajouter une deuxième présentation"
        },
        {
          "moduleId": "html-images",
          "blockId": "bonus-lien",
          "label": "Rendre une image cliquable",
          "prerequisiteSkills": [
            {
              "skillId": "html.links",
              "expectation": "Savoir créer un lien et distinguer href de son texte."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "html-mini-page",
          "label": "Mini-page HTML — si les bases nécessaires sont maîtrisées",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Savoir créer un titre principal et des sous-titres."
            },
            {
              "skillId": "html.text",
              "expectation": "Savoir écrire plusieurs paragraphes."
            },
            {
              "skillId": "html.lists",
              "expectation": "Savoir créer une liste."
            },
            {
              "skillId": "html.links",
              "expectation": "Savoir créer des liens."
            },
            {
              "skillId": "html.images",
              "expectation": "Savoir insérer une image et adapter alt."
            }
          ]
        },
        {
          "moduleId": "css-classes-couleurs",
          "label": "Classes et couleurs — si titres et paragraphes sont maîtrisés",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Savoir créer un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Savoir créer un paragraphe."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire distinguer le fichier ou la source à charger de l’information textuelle qui remplace l’image. Observer l’élève remplacer une image et expliquer son choix de texte alternatif.",
        "entryDiagnosis": [
          "Présenter <p>Bonjour</p> : demander de modifier seulement Bonjour et d’identifier la balise. Attendu : le texte change, les balises restent intactes.",
          "Demander de montrer les guillemets dans un extrait HTML. Si la manipulation est fragile, proposer le squelette plutôt que d’ajouter une difficulté de saisie.",
          "Les liens ne sont pas un prérequis d’entrée. Les vérifier uniquement avant de proposer le bonus image cliquable.",
          "Vérifier si titres et paragraphes peuvent être produits seuls. Sinon, fournir le squelette : ce n’est pas un obstacle à l’apprentissage des images. Fournir également h2 dans le bonus si nécessaire."
        ],
        "preparation": [
          "Ouvrir CodePen sur un projet vide et vérifier l’accès à la zone HTML.",
          "Ouvrir les deux dessins de la section Ressources. Leur bouton « Copier uniquement la source » fournit l’adresse complète, sans balise HTML ni alt ; les données encodées restent repliées.",
          "Pour un projet local, fournir assets/exercices/carre-bleu.svg et cercle-orange.svg avec la même arborescence que dans l’exemple. Un chemin local ne fonctionne pas dans CodePen.",
          "Si un fichier manque ou si un service est indisponible, fournir à nouveau la ressource : ne pas traiter la panne comme une erreur de l’élève."
        ],
        "why": "Une page doit transmettre son contenu même lorsque l’image n’est pas perçue. Séparer src et alt évite de confondre adresse, description et légende.",
        "discoverySpeech": [
          "« Voici une forme que nous voulons présenter. L’image n’est pas écrite entre deux balises : img indique où la trouver. »",
          "« Dans src, nous mettons sa source. Dans alt, nous écrivons l’information que quelqu’un doit comprendre s’il ne voit pas l’image. »",
          "« Si je remplace le carré par un cercle, que dois-je vérifier en plus de la source ? Essayons puis décrivons le résultat. »"
        ],
        "example": {
          "target": {
            "moduleId": "html-images",
            "blockId": "cours",
            "label": "Exemple minimal"
          },
          "comments": [
            "Lire chaque attribut séparément : src est le chemin du dessin ; alt donne ici sa forme et sa couleur.",
            "L’extrait court explique la structure et utilise un chemin local. Pour CodePen, partir de <img src=\"\" alt=\"\">, copier uniquement la source, la coller entière dans src sans la retaper ni la modifier, puis laisser l’élève rédiger alt.",
            "Il n’existe pas de </img>. Ne pas présenter alt comme une légende ou une infobulle."
          ]
        },
        "questions": [
          {
            "question": "Que contient src ?",
            "answer": "Une source que le navigateur peut charger, pas la description."
          },
          {
            "question": "Si le carré devient un cercle, que faut-il adapter ?",
            "answer": "La source et le texte alternatif, selon l’information utile."
          },
          {
            "question": "Pourquoi alt ne s’affiche-t-il pas sous l’image ?",
            "answer": "C’est un remplacement textuel accessible, pas une légende visible."
          },
          {
            "question": "Une image absente prouve-t-elle une faute HTML ?",
            "answer": "Non : vérifier aussi la disponibilité du fichier, la source et l’accès au service."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "html-images",
          "blockId": "exercices",
          "label": "Copier, décrire, remplacer"
        },
        "independentActivity": {
          "moduleId": "html-images",
          "blockId": "mission",
          "label": "Présenter une forme avec titre, paragraphe et image"
        },
        "differentiation": [
          "Si nécessaire, fournir le squelette avec les titres et paragraphes déjà écrits. Accompagner la sélection puis le collage de la source entière ; laisser l’élève choisir et écrire alt.",
          "Si les bases HTML sont maîtrisées, demander une présentation sans squelette puis le remplacement autonome de la source et de alt. Le niveau d’aide dépend des besoins observés, pas du nom du parcours."
        ],
        "commonErrors": [
          {
            "symptom": "La description a été écrite dans src.",
            "helps": [
              "Demander quel attribut doit charger quelque chose.",
              "Cibler la différence source/texte.",
              "Comparer avec l’exemple minimal.",
              "Remettre une source fournie dans src, puis faire écrire alt par l’élève."
            ]
          },
          {
            "symptom": "L’image a changé mais alt décrit encore l’ancienne.",
            "helps": [
              "Faire décrire l’image actuelle à voix haute.",
              "Cibler la valeur de alt.",
              "Comparer les descriptions des deux dessins.",
              "Faire remplacer le texte puis relire l’ensemble."
            ]
          },
          {
            "symptom": "L’adresse est incomplète ou l’image est indisponible.",
            "helps": [
              "Observer si le dessin s’affiche dans le module.",
              "Vérifier que src contient uniquement la source entière, entre ses guillemets.",
              "Comparer avec la source accessible par le bouton ou le panneau de copie manuelle.",
              "Recopier uniquement la source avec le bouton, sans modification. Si elle échoue aussi, vérifier la ressource ou l’environnement avant d’attribuer l’échec au code."
            ]
          }
        ],
        "notes": [
          "Le texte alternatif dépend du contexte, pas seulement des pixels. Dans un exercice sur les formes, leur forme et leur couleur sont utiles.",
          "Une image purement décorative peut avoir alt=\"\" : les lecteurs d’écran peuvent alors l’ignorer. Ne pas omettre l’attribut et ne pas rendre une image informative muette.",
          "Pour une image qui sert de lien, le texte alternatif doit annoncer sa fonction ou sa destination ; faire formuler ce texte par l’élève dans le bonus.",
          "Observer la réussite avec le niveau d’aide reçu. Aucune case ni consultation ne vaut acquisition ; décider manuellement dans le suivi professeur.",
          "Évaluer séparément l’insertion, la distinction src/alt et le remplacement. Une aide pour h1, h2, p ou le copier-coller ne suffit pas à conclure à une difficulté sur les images.",
          "Lors de l’observation, distinguer réussite autonome, avec modèle ou avec aide, en utilisant si utile la remarque pédagogique existante. Aucun nouveau statut ni validation automatique."
        ],
        "quickConductor": [
          "Vérifier modification d’une balise et manipulation des guillemets.",
          "Présenter source et texte alternatif sur une image visible.",
          "Accompagner le collage de la source entière dans src sans modification, puis laisser rédiger alt et remplacer le dessin.",
          "Lancer la présentation autonome ; garder les consignes écrites accessibles.",
          "En cas de difficulté : consolidation src/alt ; si réussite : deuxième présentation, puis image cliquable si les liens sont maîtrisés.",
          "Observer insertion, explication et diagnostic ; décider de la suite à partir du travail.",
          "Avant une suite, vérifier ses prérequis affichés ; proposer les reprises ciblées si nécessaire. Distinguer la compréhension des images des autres aides reçues."
        ],
        "references": [
          {
            "title": "MDN — Élément img",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img"
          },
          {
            "title": "W3C WAI — Images décoratives",
            "url": "https://www.w3.org/WAI/tutorials/images/decorative/"
          },
          {
            "title": "MDN — Adresses data:",
            "url": "https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data"
          }
        ]
      }
    },
    "css-classes-couleurs": {
      "domainId": "web",
      "title": "Classes et couleurs CSS",
      "type": "lesson",
      "objective": "Relier une classe HTML à un sélecteur CSS pour changer la couleur du texte.",
      "skillIds": [
        "css.selectors",
        "css.colors"
      ],
      "theme": "debutants",
      "blocks": [
        {
          "type": "callout",
          "id": "reprise-css",
          "title": "Avant de commencer — Comprends-tu une règle ?",
          "tone": "neutral",
          "text": "Dans p { color: blue; }, peux-tu montrer la cible, la propriété et la valeur, puis changer seulement le fond avec background-color ? Si tu hésites, ouvre Découvrir le CSS et reviens ici ensuite. Si tu sais déjà l’expliquer, continue sans refaire ce cours.",
          "moduleLink": {
            "text": "Découvrir le CSS",
            "moduleId": "css-decouverte"
          }
        },
        {
          "type": "lesson",
          "id": "classe-html",
          "title": "1 — Donner une classe en HTML",
          "paragraphs": [
            "Sache créer un titre et un paragraphe, et expliquer une règle CSS simple. Tu peux utiliser un nouveau CodePen : commencer sans anciennes règles rend les résultats plus faciles à comprendre.",
            "Le HTML décrit le contenu. Le CSS permet de changer son apparence, par exemple la couleur du texte.",
            "Dans le panneau HTML de CodePen, l’attribut class donne un nom de groupe à un élément. Ici, le titre appartient à la classe titre.",
            "Résultat attendu : un titre et deux paragraphes dont tu peux changer les couleurs par groupes. Une classe sert à choisir un groupe précis, au lieu de viser tous les éléments portant la même balise."
          ],
          "code": "<h1 class=\"titre\">Mon site</h1>"
        },
        {
          "type": "lesson",
          "id": "selecteur-css",
          "title": "2 — Retrouver cette classe en CSS",
          "paragraphs": [
            "Dans le panneau CSS de CodePen, écris la règle ci-dessous. Ne la mets pas dans le panneau HTML.",
            "Le sélecteur .titre choisit les éléments dont la classe est titre. Le point se met dans le CSS, pas dans la valeur de class en HTML. Les deux noms doivent correspondre exactement.",
            "Les accolades { et } entourent les instructions. color change la couleur du texte ; blue signifie bleu. Les deux-points séparent la propriété de sa valeur, et le point-virgule termine l’instruction.",
            "Plusieurs éléments peuvent partager la même classe : ils recevront tous la même couleur."
          ],
          "code": ".titre {\n  color: blue;\n}"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — Un titre en couleur",
          "items": [
            {
              "id": "html",
              "text": "Dans HTML, crée le titre de l’exemple avec class=\"titre\"."
            },
            {
              "id": "css",
              "text": "Dans CSS, ajoute la règle .titre de l’exemple. Vérifie que le titre devient bleu.",
              "hint": "Vérifie le point devant titre dans le CSS et l’absence de point dans class=\"titre\"."
            },
            {
              "id": "rouge",
              "text": "Remplace blue par red dans le CSS. Vérifie que le texte devient rouge."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "autonomie",
          "title": "À toi de jouer — Relier HTML et CSS",
          "intro": "Essaie d’abord seul. Les noms de couleurs CSS utilisés ici sont en anglais : green signifie vert, orange signifie orange.",
          "items": [
            {
              "id": "paragraphe",
              "text": "Ajoute un paragraphe avec la classe texte. Écris sa règle CSS pour le rendre vert.",
              "hints": [
                "Regarde la classe attribuée au paragraphe.",
                "Son nom doit être le même dans le sélecteur, avec un point seulement dans CSS.",
                "Compare class=\"titre\" et .titre dans l’exemple.",
                "Utilise class=\"texte\" puis .texte { color: green; }. Vérifie ce paragraphe avant d’en ajouter un autre."
              ]
            },
            {
              "id": "partager",
              "text": "Ajoute un deuxième paragraphe avec la même classe texte. Vérifie que les deux paragraphes sont verts."
            },
            {
              "id": "couleur",
              "text": "Change la couleur de la classe texte en orange. Vérifie que les deux paragraphes changent, mais pas le titre."
            },
            {
              "id": "renommer",
              "text": "Renomme la classe titre en vedette dans le HTML et adapte le sélecteur CSS pour conserver sa couleur.",
              "hints": [
                "Compare le nom dans HTML et celui dans CSS.",
                "Changer seulement un des deux rompt la correspondance.",
                "Le point appartient au sélecteur, pas au nom dans class.",
                "Remplace titre par vedette dans class, et .titre par .vedette dans la règle."
              ]
            }
          ]
        },
        {
          "type": "tasks",
          "id": "defi",
          "title": "Petit défi — Deux classes, deux couleurs",
          "intro": "Crée une nouvelle petite page avec un titre et deux paragraphes. Essaie sans regarder les exemples.",
          "items": [
            {
              "id": "defi-classes",
              "text": "Choisis une classe pour le titre et une autre classe commune aux deux paragraphes."
            },
            {
              "id": "defi-couleurs",
              "text": "Écris les deux règles CSS : le titre doit avoir une couleur différente des paragraphes.",
              "hint": "Chaque règle commence par un point suivi du nom de la classe. Utilise color entre accolades."
            },
            {
              "id": "defi-verifier",
              "text": "Vérifie les couleurs, puis explique pourquoi modifier une seule règle change les deux paragraphes."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "fond",
          "title": "Réutiliser aussi un fond",
          "paragraphs": [
            "Si tu as compris le ciblage, ajoute un fond aux paragraphes qui partagent texte. background-color règle leur fond ; color règle les lettres. Cette règle remplace ta règle .texte actuelle.",
            "Le fond peut occuper plus de place que les mots : il colore la zone de chaque paragraphe, pas seulement ses lettres. black signifie noir et lightyellow jaune clair. Tu peux choisir des couleurs, mais garde les lettres bien lisibles."
          ],
          "code": ".texte {\n  color: black;\n  background-color: lightyellow;\n}"
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie ton travail",
          "items": [
            {
              "id": "verifier-ciblage",
              "text": "Le titre et les paragraphes correspondent aux bonnes règles."
            },
            {
              "id": "verifier-groupe",
              "text": "Changer une règle modifie tous les éléments portant cette classe."
            },
            {
              "id": "verifier-renommage",
              "text": "Après renommage, la classe HTML et le sélecteur correspondent encore."
            },
            {
              "id": "verifier-explication",
              "text": "Je peux prévoir quels éléments changeront avant de modifier une règle."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "panne",
          "title": "Consolidation — Un groupe qui ne change pas",
          "paragraphs": [
            "Teste les deux extraits suivants dans un nouvel essai. Le premier va dans HTML, le second dans CSS. Les deux textes devraient devenir verts : cherche pourquoi un seul change."
          ],
          "code": "<p class=\"info\">Premier message</p>\n<p class=\"infos\">Deuxième message</p>"
        },
        {
          "type": "lesson",
          "id": "panne-css",
          "title": "CSS de cet essai",
          "paragraphs": [],
          "code": ".info {\n  color: green;\n}"
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Répare la correspondance",
          "intro": "Cherche avant d’ouvrir les aides. Répare seulement ce qui ne correspond pas.",
          "items": [
            {
              "id": "reparer-groupe",
              "text": "Fais appartenir les deux paragraphes au même groupe info, puis vérifie qu’une seule règle les change tous les deux.",
              "hints": [
                "Compare les deux attributs class.",
                "Les noms info et infos sont différents.",
                "Compare chacun des noms avec .info.",
                "Remplace class=\"infos\" par class=\"info\" dans le deuxième paragraphe. La règle CSS reste inchangée."
              ]
            },
            {
              "id": "reparer-justifier",
              "text": "Explique pourquoi ajouter une deuxième règle n’était pas nécessaire pour cette consigne."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus — Deux variantes visuelles",
          "intro": "Facultatif : utilise uniquement des classes et des couleurs. Tu peux garder le même HTML et changer ses classes.",
          "items": [
            {
              "id": "bonus-variantes",
              "text": "Crée deux paragraphes avec class=\"calme\" et class=\"fort\". Donne au premier des lettres noires sur fond blanc, au second des lettres blanches sur fond navy (bleu très foncé).",
              "hints": [
                "Prévois une règle pour chaque classe.",
                "Réutilise color et background-color.",
                "Compare avec la règle .texte du cours.",
                "Écris .calme { color: black; background-color: white; } et .fort { color: white; background-color: navy; }."
              ]
            },
            {
              "id": "bonus-transfert",
              "text": "Change seulement la classe du premier paragraphe en fort. Prédis puis vérifie son apparence, sans modifier ses mots ni ajouter de règle."
            }
          ]
        },
        {
          "type": "callout",
          "id": "local",
          "tone": "neutral",
          "title": "Avec VS Code",
          "text": "Tu peux réutiliser le squelette de Découvrir le CSS : les balises restent dans body et tes règles dans style. Enregistre le fichier puis actualise le navigateur. Le squelette fourni suffit ; aucune feuille externe n’est nécessaire ici.",
          "moduleLink": {
            "text": "Découvrir le CSS",
            "moduleId": "css-decouverte"
          }
        }
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.headings",
          "expectation": "Créer et modifier un titre."
        },
        {
          "skillId": "html.text",
          "expectation": "Créer et modifier un paragraphe."
        },
        {
          "skillId": "css.colors",
          "expectation": "Expliquer une règle CSS simple : élément ciblé, propriété et valeur ; distinguer couleur du texte et du fond."
        }
      ],
      "masteryCriteria": [
        "Relier un attribut class à son sélecteur CSS, sans mettre le point dans le nom HTML.",
        "Modifier une seule règle et prédire tous les éléments concernés.",
        "Renommer une classe des deux côtés puis réparer une différence de nom en expliquant son effet.",
        "Transférer un style à un nouvel élément avec une classe existante ; distinguer copie et choix expliqué."
      ],
      "consolidation": [
        {
          "moduleId": "css-decouverte",
          "label": "Reprendre une règle CSS avant les classes si nécessaire",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer et modifier un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer et modifier un paragraphe."
            }
          ]
        },
        {
          "moduleId": "css-classes-couleurs",
          "blockId": "reparer",
          "label": "Réparer la correspondance HTML/CSS"
        },
        {
          "moduleId": "html-titres-paragraphes",
          "label": "Reprendre la création des textes si nécessaire"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "css-classes-couleurs",
          "blockId": "bonus",
          "label": "Créer deux variantes",
          "prerequisiteSkills": [
            {
              "skillId": "css.colors",
              "expectation": "Expliquer une règle CSS simple : élément ciblé, propriété et valeur ; distinguer couleur du texte et du fond."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier class au sélecteur .classe et réutiliser une classe sur plusieurs éléments."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "html-mini-page",
          "label": "Réinvestir les bases dans la mini-page HTML",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer des titres et sous-titres."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer plusieurs paragraphes."
            },
            {
              "skillId": "html.lists",
              "expectation": "Créer une liste."
            },
            {
              "skillId": "html.links",
              "expectation": "Créer un lien et modifier sa destination."
            },
            {
              "skillId": "html.images",
              "expectation": "Insérer une image et rédiger alt."
            }
          ]
        },
        {
          "moduleId": "web-affiche-numerique",
          "label": "Créer une affiche — si règles et classes sont comprises",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer et modifier un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer et modifier un paragraphe."
            },
            {
              "skillId": "css.colors",
              "expectation": "Expliquer une règle CSS simple : élément ciblé, propriété et valeur ; distinguer couleur du texte et du fond."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier class au sélecteur .classe et réutiliser une classe sur plusieurs éléments."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire comprendre qu’une classe associe des éléments à un style réutilisable. Observer ciblage, renommage et transfert plutôt que la seule couleur obtenue.",
        "entryDiagnosis": [
          "Demander de modifier un titre et un paragraphe. Si les balises restent fragiles, proposer une reprise HTML ou une aide de saisie distincte.",
          "Présenter p { color: blue; }. Attendu : p choisit les paragraphes, color est la propriété, blue la valeur. Demander ensuite de changer le fond sans modifier les lettres.",
          "Si l’explication ou le choix de propriété manque, proposer Découvrir le CSS puis revenir ici. Ne pas imposer ce détour à un élève qui sait faire."
        ],
        "preparation": [
          "Utiliser un CodePen vierge ou enlever les anciennes règles de cet essai pour éviter des résultats dus à un style précédent.",
          "En local, le squelette de Découvrir le CSS suffit. Aider à enregistrer/actualiser sans confondre cette manipulation avec le ciblage.",
          "Rendre les extraits visibles et les noms de couleurs disponibles ; aucune démonstration par partage d’écran n’est nécessaire."
        ],
        "why": "Les classes permettent de choisir quels éléments partagent une apparence sans recopier la même règle pour chacun.",
        "discoverySpeech": [
          "« Une règle p vise tous les paragraphes. Mais si je veux donner une apparence à un groupe seulement, comment le reconnaître ? Nous allons lui donner un nom avec class. »",
          "« Ici class est l’attribut HTML, titre est le nom choisi. Dans CSS, le point de .titre annonce que nous cherchons cette classe. Je ne mets pas ce point dans class. »",
          "« Ajoutons deux paragraphes avec le même nom de classe. Je change une seule couleur : avant de regarder, lesquels vont changer ? »",
          "« Je renomme titre en vedette. Le nom n’est pas magique : les deux côtés doivent encore correspondre. Quelle ligne faut-il adapter ? »"
        ],
        "example": {
          "target": {
            "moduleId": "css-classes-couleurs",
            "blockId": "selecteur-css",
            "label": "Relier la classe à sa règle"
          },
          "comments": [
            "Montrer class=\"titre\" dans l’extrait HTML précédent puis .titre ici. color et blue gardent les rôles de propriété et valeur.",
            "Ajouter class=\"texte\" à deux paragraphes ; écrire une seule règle .texte { color: green; }. Les deux changent.",
            "Renommer un seul côté provisoirement, constater la perte du style, puis rétablir la correspondance. Cela explique le rôle du nom, pas seulement celui du point."
          ]
        },
        "questions": [
          {
            "question": "Est-ce que titre est un mot réservé pour les titres ?",
            "answer": "Non. C’est un nom choisi. Avec class=\"vedette\" et .vedette, la règle fonctionne aussi."
          },
          {
            "question": "Peut-on donner la même classe à deux paragraphes ?",
            "answer": "Oui, tous deux recevront les déclarations de la règle correspondante."
          },
          {
            "question": "Pourquoi le deuxième texte de la consolidation reste-t-il sans la couleur voulue ?",
            "answer": "Il porte infos, alors que le sélecteur est .info. Enlever le s dans son class satisfait le groupe demandé."
          },
          {
            "question": "Pourquoi n’écrit-on pas class=\".titre\" ?",
            "answer": "Le point fait partie de la syntaxe du sélecteur CSS. Le nom HTML attendu est titre, sans point."
          },
          {
            "question": "Dois-je créer une nouvelle règle pour ajouter un troisième texte au même groupe ?",
            "answer": "Non : lui donner la classe existante suffit. Demander de le montrer, puis d’expliquer."
          },
          {
            "question": "Le texte devient difficile à lire sur le fond choisi. Ai-je raté les classes ?",
            "answer": "Pas forcément. Vérifier séparément le ciblage et le choix lisible des couleurs ; proposer noir/blanc ou blanc/navy."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "css-classes-couleurs",
          "blockId": "guide",
          "label": "Un titre en couleur"
        },
        "independentActivity": {
          "moduleId": "css-classes-couleurs",
          "blockId": "defi",
          "label": "Deux classes, deux couleurs"
        },
        "differentiation": [
          "Laisser un modèle de syntaxe si nécessaire, mais demander à l’élève de choisir quelle classe partager. Ne pas confondre support de mémoire et choix de ciblage.",
          "Pour observer le transfert, demander un troisième paragraphe de même apparence sans nouvelle règle.",
          "Si le point est compris mais la couleur échoue, cibler la déclaration ; si la règle est comprise mais un seul élément change, comparer les noms."
        ],
        "commonErrors": [
          {
            "symptom": "Les noms HTML et CSS diffèrent.",
            "helps": [
              "Faire désigner les éléments à regrouper.",
              "Comparer lettre par lettre les noms.",
              "Utiliser le petit exemple titre/.titre.",
              "Aligner les noms, puis demander un renommage différent sans aide."
            ]
          },
          {
            "symptom": "Toutes les phrases changent alors qu’un groupe seulement était demandé.",
            "helps": [
              "Regarder le début de la règle.",
              "Le sélecteur p choisit toutes les balises p, pas une classe particulière.",
              "Comparer p et .texte.",
              "Utiliser .texte et attribuer cette classe aux seuls éléments concernés."
            ]
          },
          {
            "symptom": "L’élève recopie une règle par paragraphe.",
            "helps": [
              "Demander quels éléments doivent partager leur style.",
              "Repérer leur classe commune.",
              "Observer une seule règle avec deux éléments.",
              "Faire ajouter un troisième élément avec cette classe sans nouvelle règle."
            ]
          }
        ],
        "notes": [
          "Solution possible du défi : un h1 class=\"vedette\", deux p class=\"texte\", puis .vedette { color: purple; } et .texte { color: darkgreen; }. D’autres noms/couleurs conviennent si le ciblage est expliqué.",
          "Solution du bonus : .calme { color: black; background-color: white; } et .fort { color: white; background-color: navy; }. Donner fort au premier paragraphe suffit à transférer le style.",
          "Observer réussite autonome, avec modèle ou avec aide ; séparer la manipulation du clavier de la compréhension. Aucun nouveau statut ni validation automatique.",
          "Si règle et ciblage sont compris, proposer le défi HTML seulement avec ses prérequis, ou l’affiche. Une difficulté isolée appelle la consolidation correspondante, pas le parcours entier.",
          "Les couleurs orange/vert des essais sont des observations ; pour une production lisible, revoir le couple texte/fond. Le bonus est facultatif."
        ],
        "quickConductor": [
          "Vérifier lecture de règle ; proposer C1 uniquement si nécessaire.",
          "Expliquer class et le point du sélecteur.",
          "Modifier ensemble une classe partagée.",
          "Lancer le défi et demander le transfert à un troisième élément.",
          "Consolider la correspondance ou proposer les variantes.",
          "Choisir une suite selon les prérequis ; noter manuellement les observations."
        ],
        "references": [
          {
            "title": "MDN — Sélecteurs de classe",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Class_selectors"
          },
          {
            "title": "MDN — Découvrir la syntaxe CSS",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS"
          },
          {
            "title": "MDN — color",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color"
          },
          {
            "title": "MDN — background-color",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-color"
          }
        ]
      }
    },
    "html-mini-page": {
      "domainId": "web",
      "title": "Mini-page HTML complète",
      "type": "challenge",
      "objective": "Réaliser une page complète sans indices.",
      "skillIds": [
        "html.headings",
        "html.text",
        "html.lists",
        "html.links",
        "html.images"
      ],
      "blocks": [
        {
          "type": "lesson",
          "id": "defi",
          "title": "Défi autonome",
          "paragraphs": [
            "Crée une mini-page complète sur un sujet de ton choix. Essaie de ne regarder aucun indice. Utilise la checklist pour vérifier que rien ne manque.",
            "Résultat attendu : une page lisible sur un sujet de ton choix, où les liens fonctionnent et les images sont décrites. Tu réutilises les notions déjà apprises ; aucun CSS n’est demandé.",
            "Travaille sans IA et essaie sans modèle. Les liens de consolidation en bas permettent de reprendre seulement une notion si tu bloques ; reviens ensuite à ton propre défi, sans recopier une page complète.",
            "Dans CodePen, utilise HTML ; CSS et JS peuvent rester vides. Pour les images, les ressources du module Images restent disponibles : copie uniquement la source entière dans src et rédige toi-même alt.",
            "Tu peux améliorer une page déjà commencée. Vérifie alors chaque exigence et fais aussi une modification nouvelle pour montrer ce que tu comprends."
          ]
        },
        {
          "type": "tasks",
          "id": "preparer",
          "title": "Prépare ton défi",
          "intro": "Cette préparation ne donne pas la solution HTML. Elle t’aide à organiser ton travail.",
          "items": [
            {
              "id": "choisir-sujet",
              "text": "Choisis un sujet sans donnée personnelle. Écris en quelques mots ce que tes rubriques vont raconter."
            },
            {
              "id": "prevoir-contenu",
              "text": "Repère dans la checklist les textes à écrire, les liens à choisir et les images à insérer. Réalise une rubrique à la fois."
            }
          ]
        },
        {
          "type": "callout",
          "id": "ressources-images",
          "title": "Besoin d’une source d’image ?",
          "tone": "neutral",
          "text": "Ouvre Images HTML pour utiliser les deux dessins fournis. Ils fonctionnent dans CodePen sans chercher une image sur un autre site. Tu peux choisir un sujet autour des formes pour les réutiliser.",
          "moduleLink": {
            "text": "Images HTML",
            "moduleId": "html-images"
          }
        },
        {
          "type": "checklist",
          "id": "exigences",
          "title": "Ta page doit contenir",
          "items": [
            {
              "id": "titre-principal",
              "text": "Un titre principal h1."
            },
            {
              "id": "niveaux-titres",
              "text": "Plusieurs niveaux de titres."
            },
            {
              "id": "paragraphes",
              "text": "Au moins 3 paragraphes."
            },
            {
              "id": "liste",
              "text": "Une liste."
            },
            {
              "id": "liens",
              "text": "2 liens."
            },
            {
              "id": "images",
              "text": "2 images."
            }
          ]
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie ton travail",
          "items": [
            {
              "id": "fermeture-balises",
              "text": "Les balises qui entourent un contenu sont correctement fermées. La balise img n’a pas de balise fermante."
            },
            {
              "id": "liens-fonctionnels",
              "text": "Les liens fonctionnent."
            },
            {
              "id": "images-visibles",
              "text": "Les images s’affichent."
            },
            {
              "id": "alt-adapte",
              "text": "Chaque image possède un alt adapté."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "comprehension",
          "title": "Montre que tu peux modifier ta page",
          "intro": "Après la checklist, essaie ces changements sans regarder de solution.",
          "items": [
            {
              "id": "changer-destination",
              "text": "Change la destination d’un lien sans modifier son texte visible. Teste-le et explique quelle partie tu as modifiée."
            },
            {
              "id": "changer-image",
              "text": "Remplace une image, puis adapte son texte alternatif. Explique ce qui est source et ce qui est description."
            },
            {
              "id": "ajouter-element",
              "text": "Ajoute un élément à la liste à l’endroit voulu, puis explique comment tu sais qu’il appartient à cette liste."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus — Une nouvelle rubrique",
          "intro": "Facultatif, avec les mêmes notions seulement. La page HTML peut être réussie sans ce bonus et sans CSS.",
          "items": [
            {
              "id": "rubrique-supplementaire",
              "text": "Ajoute une rubrique sur un autre aspect de ton sujet, avec un sous-titre et un paragraphe. Choisis un lien ou une image utile si tu veux l’illustrer."
            },
            {
              "id": "verifier-rubrique",
              "text": "Reprends les vérifications pour cette rubrique. Explique comment elle se rattache à ton titre principal."
            }
          ]
        },
        {
          "type": "details",
          "id": "local",
          "title": "Avec VS Code — Cadre de fichier fourni",
          "blocks": [
            {
              "type": "lesson",
              "id": "squelette-local",
              "title": "Cadre vide, pas une solution du défi",
              "paragraphs": [
                "Crée index.html, colle ce cadre, puis place ton propre contenu entre <body> et </body>, à la place du commentaire. Enregistre et ouvre le fichier dans ton navigateur ; actualise-le après chaque enregistrement.",
                "Le commentaire entre <!-- et --> est une indication, pas un texte visible. head contient des réglages ; title donne le titre de l’onglet, pas le h1 à créer dans la page. body reçoit le contenu visible. Tu peux garder ce cadre tel quel.",
                "Pour une image locale, utilise un fichier dont tu connais le chemin, ou la source entière fournie dans Images. Dans CodePen, n’utilise pas ce cadre : le panneau HTML reçoit seulement le contenu du défi."
              ],
              "code": "<!doctype html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Ma mini-page</title>\n</head>\n<body>\n  <!-- Écris ici le contenu de ton défi. -->\n</body>\n</html>"
            }
          ]
        }
      ],
      "theme": "debutants",
      "prerequisiteSkills": [
        {
          "skillId": "html.headings",
          "expectation": "Créer et modifier un titre."
        },
        {
          "skillId": "html.text",
          "expectation": "Créer et modifier un paragraphe."
        },
        {
          "skillId": "html.headings",
          "expectation": "Utiliser aussi des sous-titres, par exemple h2."
        },
        {
          "skillId": "html.lists",
          "expectation": "Placer les éléments li dans une liste ul."
        },
        {
          "skillId": "html.links",
          "expectation": "Distinguer destination href et texte cliquable."
        },
        {
          "skillId": "html.images",
          "expectation": "Insérer/remplacer une image avec src et rédiger alt."
        }
      ],
      "masteryCriteria": [
        "Construire une page respectant toutes les exigences HTML et vérifier réellement ses liens et images.",
        "Expliquer la place des sous-titres et des éléments de liste, pas seulement compter les balises.",
        "Modifier séparément le texte d’un lien et sa destination ; remplacer une image avec un alt adapté.",
        "Identifier une difficulté et reprendre uniquement la notion concernée. Distinguer réussite autonome, avec modèle ou avec aide."
      ],
      "consolidation": [
        {
          "moduleId": "html-titres-paragraphes",
          "label": "Reprendre les titres et paragraphes"
        },
        {
          "moduleId": "html-listes",
          "label": "Reprendre la liste et ses éléments"
        },
        {
          "moduleId": "html-liens",
          "label": "Reprendre texte et destination des liens"
        },
        {
          "moduleId": "html-images",
          "blockId": "depannage",
          "label": "Réparer source et texte alternatif"
        },
        {
          "moduleId": "html-images",
          "blockId": "ressource-carre",
          "label": "Retrouver les sources d’images fournies"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "html-mini-page",
          "blockId": "bonus",
          "label": "Ajouter une rubrique avec les notions déjà maîtrisées",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer et modifier un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer et modifier un paragraphe."
            },
            {
              "skillId": "html.headings",
              "expectation": "Utiliser aussi des sous-titres, par exemple h2."
            },
            {
              "skillId": "html.lists",
              "expectation": "Placer les éléments li dans une liste ul."
            },
            {
              "skillId": "html.links",
              "expectation": "Distinguer destination href et texte cliquable."
            },
            {
              "skillId": "html.images",
              "expectation": "Insérer/remplacer une image avec src et rédiger alt."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "css-decouverte",
          "label": "Découvrir le CSS si les règles sont encore nouvelles",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer et modifier un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer et modifier un paragraphe."
            }
          ]
        },
        {
          "moduleId": "css-classes-couleurs",
          "label": "Reprendre ou continuer les classes si la règle simple est comprise",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer et modifier un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer et modifier un paragraphe."
            },
            {
              "skillId": "css.colors",
              "expectation": "Expliquer une règle CSS simple : élément ciblé, propriété et valeur ; distinguer couleur du texte et du fond."
            }
          ]
        },
        {
          "moduleId": "web-affiche-numerique",
          "label": "Mon affiche numérique — prolongement CSS facultatif",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer et modifier un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer et modifier un paragraphe."
            },
            {
              "skillId": "css.colors",
              "expectation": "Expliquer une règle CSS simple : élément ciblé, propriété et valeur ; distinguer couleur du texte et du fond."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier class au sélecteur .classe et réutiliser une classe sur plusieurs éléments."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Observer un réinvestissement HTML complet sans modèle de page à recopier, puis une modification expliquée. Le CSS ne fait pas partie des critères de ce défi.",
        "entryDiagnosis": [
          "Faire expliquer ce que l’élève prévoit pour le titre, les rubriques et la liste. Si une seule notion manque, proposer son lien de reprise, pas tout le parcours.",
          "Faire distinguer texte/destination d’un lien et source/description d’une image avant de lancer le défi sans modèle.",
          "Vérifier les manipulations de collage de source. Une aide technique ne préjuge pas de la compréhension de src/alt."
        ],
        "preparation": [
          "Rendre la checklist accessible. Aucun partage d’écran professeur nécessaire : toutes les exigences sont sur la page.",
          "Garder les deux ressources Images accessibles et vérifier leur chargement. En CodePen, seule leur source est copiée ; alt est rédigé par l’élève.",
          "En local, fournir le cadre vide ; son emploi n’est pas une validation des futurs modules de structure et chemins."
        ],
        "why": "Assembler plusieurs notions oblige à choisir les bons éléments selon le contenu, à les vérifier et à expliquer leurs rôles dans une page personnelle.",
        "discoverySpeech": [
          "« Tu connais les pièces de cette page. Cette fois, tu choisis un sujet et tu les assembles sans recopier une page entière. La checklist dit ce qui doit être présent, pas comment écrire la solution. »",
          "« Si tu hésites sur une pièce, reprends seulement son cours. Une aide sur une liste ne veut pas dire que tu dois refaire tous tes titres. »",
          "« Une fois la page affichée, nous allons changer une destination et une image. Ce qui m’intéresse est que tu saches retrouver la bonne partie du code et expliquer ton changement. »"
        ],
        "example": {
          "target": {
            "moduleId": "html-mini-page",
            "blockId": "exigences",
            "label": "Lire le cahier des charges"
          },
          "comments": [
            "Exemple de démarche, pas de solution : pour une page sur les formes, prévoir un titre, des rubriques et des ressources avant d’écrire les balises.",
            "Faire associer chaque exigence à un rôle : h1 annonce le sujet, les sous-titres organisent les rubriques, les paragraphes développent.",
            "Ne pas livrer une page prête à copier. La preuve attendue comprend une modification nouvelle, même si l’élève repart d’un travail existant."
          ]
        },
        "questions": [
          {
            "question": "Ai-je besoin de CSS pour réussir ?",
            "answer": "Non. Les six exigences sont HTML. La personnalisation CSS est un prolongement séparé."
          },
          {
            "question": "Puis-je utiliser ma page déjà commencée ?",
            "answer": "Oui. Vérifier toutes les exigences et demander les modifications de compréhension pour distinguer réutilisation et simple présentation d’un ancien travail."
          },
          {
            "question": "Comment sais-tu que ton nouveau li est dans la bonne liste ?",
            "answer": "Il est placé entre l’ouverture et la fermeture du ul visé, et son rendu apparaît dans cette liste."
          },
          {
            "question": "Le lien a le bon texte : est-ce suffisant ?",
            "answer": "Non. Tester aussi sa destination href ; le texte visible ne prouve pas l’adresse."
          },
          {
            "question": "Faut-il fermer img comme p ?",
            "answer": "Non. img n’entoure pas de contenu et n’a pas de balise fermante. p, a et les éléments qui entourent du contenu doivent être fermés correctement."
          },
          {
            "question": "Je bloque sur une image, faut-il recommencer toute la page ?",
            "answer": "Non. Conserver le reste, vérifier source/alt avec la consolidation Images, puis reprendre le défi."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "html-mini-page",
          "blockId": "preparer",
          "label": "Organiser les exigences sans donner la solution"
        },
        "independentActivity": {
          "moduleId": "html-mini-page",
          "blockId": "defi",
          "label": "Réaliser puis vérifier sa page"
        },
        "differentiation": [
          "Si une notion manque, proposer sa reprise ciblée puis un nouvel essai sans modèle. Préserver les exigences du défi plutôt que les supprimer silencieusement.",
          "Autoriser le squelette local ou l’aide au collage et observer séparément la production HTML.",
          "Pour un élève autonome, demander un changement sans citer l’attribut attendu, puis le bonus s’il le souhaite."
        ],
        "commonErrors": [
          {
            "symptom": "Une exigence est cochée mais absente ou non fonctionnelle.",
            "helps": [
              "Relire une exigence précise.",
              "Faire montrer la partie correspondante dans le rendu et le code.",
              "Comparer avec le cours de cette seule notion.",
              "Faire corriger puis tester de nouveau, sans valider automatiquement la compétence."
            ]
          },
          {
            "symptom": "Le texte du lien change mais pas sa destination.",
            "helps": [
              "Faire cliquer le lien.",
              "Demander quelle partie contient l’adresse.",
              "Reprendre la distinction texte/href.",
              "Modifier href seulement, garder le texte, puis retester."
            ]
          },
          {
            "symptom": "L’image est remplacée mais sa description n’est plus adaptée.",
            "helps": [
              "Faire décrire l’image actuelle.",
              "Comparer cette description avec alt.",
              "Revoir src et alt dans Images.",
              "Rédiger un nouvel alt ; ne pas copier une balise complète depuis la ressource."
            ]
          }
        ],
        "notes": [
          "Pas de solution HTML complète publiée dans ce défi. Pour la correction, vérifier : un h1, plusieurs niveaux de titres, trois p au moins, un ul/li, deux a avec destinations testées, deux img avec sources et alt utiles.",
          "Solution attendue du transfert : changer href sans toucher au texte du a ; remplacer la valeur de src et réécrire alt ; insérer un nouveau li à l’intérieur du ul. Le sujet et les mots restent libres.",
          "Observer et noter si utile autonome/avec modèle/avec aide dans la remarque existante, sans nouvel outil. Une case cochée ne vaut pas acquisition.",
          "Si le noyau HTML est compris, proposer C1, C2 ou l’affiche selon les acquis CSS. Aucun passage obligé par un bonus. Structure d’un document HTML et Fichiers et chemins sont désormais accessibles pour poursuivre avec des fichiers locaux.",
          "Le même défi reste exigeant et réutilisable dans Fondations et Débutants ; un changement de parcours n’oblige pas à refaire un défi déjà compris."
        ],
        "quickConductor": [
          "Vérifier les prérequis et le collage des ressources.",
          "Faire préparer les rubriques et lire la checklist.",
          "Laisser réaliser sans modèle, avec reprises ciblées.",
          "Tester les liens et les images.",
          "Demander destination changée, image remplacée et élément ajouté à la liste.",
          "Décider de la suite HTML/CSS et relever séparément les aides."
        ],
        "references": [
          {
            "title": "MDN — Élément img",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img"
          },
          {
            "title": "HTML Standard — Sémantique des éléments",
            "url": "https://html.spec.whatwg.org/multipage/semantics.html"
          },
          {
            "title": "HTML Standard — Élément style",
            "url": "https://html.spec.whatwg.org/multipage/semantics.html#the-style-element"
          }
        ]
      }
    },
    "css-decouverte": {
      "domainId": "web",
      "title": "Découvrir le CSS",
      "type": "lesson",
      "theme": "fondations",
      "objective": "Lire une règle CSS et changer la couleur du texte et du fond.",
      "skillIds": [
        "css.colors"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.headings",
          "expectation": "Créer et modifier un titre."
        },
        {
          "skillId": "html.text",
          "expectation": "Créer et modifier un paragraphe."
        }
      ],
      "blocks": [
        {
          "type": "lesson",
          "id": "demarrer",
          "title": "1 — Contenu et apparence",
          "paragraphs": [
            "Tu vas obtenir un titre bleu sur fond blanc et deux paragraphes noirs sur fond jaune clair. Puis tu changeras leur apparence sans changer leurs mots.",
            "Le HTML décrit le contenu : titre, paragraphe… Le CSS règle son apparence. Le navigateur applique déjà une présentation par défaut ; tu peux la modifier avec tes règles.",
            "Travaille dans un nouveau CodePen pour éviter des règles anciennes. Copie le premier extrait dans HTML et le second dans CSS. Le panneau JS reste vide. Travaille sans IA ; tu peux utiliser les indices du cours.",
            "Si tu travailles avec VS Code et des fichiers, utilise le squelette facultatif en bas de ce module. Il ne faut pas savoir créer une feuille CSS externe pour faire cette activité."
          ]
        },
        {
          "type": "lesson",
          "id": "html",
          "title": "HTML — Le contenu de départ",
          "paragraphs": [
            "Un titre et deux paragraphes : observe les trois éléments avant de leur donner des couleurs."
          ],
          "code": "<h1>Mon atelier</h1>\n<p>Je découvre le CSS.</p>\n<p>Je peux changer l’apparence.</p>"
        },
        {
          "type": "lesson",
          "id": "regle",
          "title": "CSS — Lire une règle",
          "paragraphs": [
            "h1 est le sélecteur : il choisit les éléments h1 de la page. Ici, il y en a un. On écrit h1 sans les chevrons du HTML.",
            "Entre les accolades { et }, chaque déclaration indique une propriété et sa valeur. Dans color: blue;, color est la propriété et blue la valeur. Les deux-points séparent les deux ; termine chaque déclaration par un point-virgule.",
            "color règle la couleur des lettres. background-color règle le fond de l’élément sélectionné, pas forcément celui de toute la page. Ici, un bloc de fond peut être plus large que les mots.",
            "blue signifie bleu, white blanc. Les mots de couleur CSS de ces exemples sont en anglais."
          ],
          "code": "h1 {\n  color: blue;\n  background-color: white;\n}"
        },
        {
          "type": "lesson",
          "id": "paragraphes",
          "title": "Une règle pour tous les paragraphes",
          "paragraphs": [
            "Ajoute cette deuxième règle après la première dans CSS. Le sélecteur p choisit tous les paragraphes de la page : les deux changent ensemble.",
            "black signifie noir et lightyellow jaune clair. Les règles sont séparées ; celle de p ne remplace pas celle de h1."
          ],
          "code": "p {\n  color: black;\n  background-color: lightyellow;\n}"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — Changer une chose à la fois",
          "intro": "Garde les mots du HTML identiques pendant ces essais.",
          "items": [
            {
              "id": "copier",
              "text": "Place les trois extraits dans les panneaux indiqués. Vérifie les couleurs du titre et des deux paragraphes.",
              "hints": [
                "Regarde les étiquettes HTML et CSS.",
                "Les balises vont dans HTML ; les règles avec accolades vont dans CSS.",
                "Compare les sélecteurs h1 et p et la ponctuation.",
                "Recopie une règle à la fois dans CSS puis vérifie l’aperçu."
              ]
            },
            {
              "id": "changer-texte",
              "text": "Dans la règle h1, remplace blue par purple (violet). Qu’est-ce qui change ?"
            },
            {
              "id": "changer-fond",
              "text": "Dans la règle p, remplace lightyellow par white. Le texte reste-t-il noir ?"
            },
            {
              "id": "expliquer",
              "text": "Montre le sélecteur, la propriété et la valeur qui ont modifié le fond. Explique pourquoi les deux paragraphes changent ensemble."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "mission",
          "title": "Mission autonome — Choisir les bonnes règles",
          "intro": "Crée un nouveau titre et deux paragraphes sur un autre sujet. Essaie avant d’ouvrir les indices.",
          "items": [
            {
              "id": "mission-titre",
              "text": "Rends seulement le titre vert foncé sur fond blanc. Tu peux utiliser darkgreen et white.",
              "hints": [
                "Quel élément veux-tu modifier ?",
                "Les mots du titre restent dans HTML ; son apparence se règle dans CSS.",
                "Compare le rôle des deux propriétés du cours.",
                "Dans la règle h1, écris color: darkgreen; et background-color: white; entre accolades."
              ]
            },
            {
              "id": "mission-paragraphes",
              "text": "Donne aux deux paragraphes un texte noir sur fond jaune clair, sans changer les couleurs du titre.",
              "hints": [
                "Repère les deux balises p.",
                "Un seul sélecteur peut les choisir toutes les deux.",
                "Compare avec la règle p, pas avec h1.",
                "Écris une règle p avec color: black; et background-color: lightyellow;."
              ]
            },
            {
              "id": "mission-transfert",
              "text": "Ajoute un troisième paragraphe. Avant de regarder l’aperçu, prédis son apparence et explique pourquoi tu n’as pas besoin d’une nouvelle règle."
            }
          ]
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie ton travail",
          "items": [
            {
              "id": "verifier-texte",
              "text": "Les mots sont restés dans HTML et les règles dans CSS."
            },
            {
              "id": "verifier-couleurs",
              "text": "Le titre et les paragraphes ont les couleurs demandées."
            },
            {
              "id": "verifier-regle",
              "text": "Je peux montrer le sélecteur, une propriété et sa valeur."
            },
            {
              "id": "verifier-fond",
              "text": "Je peux changer seulement un fond, sans changer la couleur des lettres."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Consolidation — Une règle à réparer",
          "intro": "Dans un essai séparé, copie dans HTML <p>Texte à réparer</p> et dans CSS : p { color = blue; background-color: white; }. Le texte devrait devenir bleu, mais la déclaration de couleur est incorrecte.",
          "items": [
            {
              "id": "reparer-declaration",
              "text": "Repère puis corrige l’erreur. Explique la différence entre l’écriture incorrecte et celle qui fonctionne.",
              "hints": [
                "Regarde la ponctuation après color.",
                "Une déclaration sépare propriété et valeur par un signe précis.",
                "Compare avec color: blue; dans le cours.",
                "Remplace = par : ; garde le point-virgule. La règle devient p { color: blue; background-color: white; }."
              ]
            },
            {
              "id": "reparer-cible",
              "text": "La couleur fonctionne. Remplace maintenant p par h1 dans CSS, sans changer le HTML. Pourquoi le paragraphe n’est-il plus bleu ? Rétablis la bonne cible.",
              "hints": [
                "Cherche un h1 dans cet extrait HTML.",
                "La règle doit choisir un élément qui existe.",
                "Compare le nom de balise avec le sélecteur.",
                "Remets p : cette règle vise le paragraphe. Un sélecteur sans élément correspondant ne colore rien."
              ]
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus — Deux ambiances",
          "intro": "Ce bonus est facultatif. Utilise seulement les propriétés déjà expliquées.",
          "items": [
            {
              "id": "deux-ambiances",
              "text": "Essaie des lettres noires sur fond blanc, puis des lettres blanches sur fond navy (bleu très foncé). Garde les mêmes textes. Choisis une ambiance dont les lettres restent faciles à lire."
            },
            {
              "id": "changer-mots",
              "text": "Change ensuite uniquement une phrase dans HTML. Vérifie que son style reste le même et explique le rôle de chaque langage."
            }
          ]
        },
        {
          "type": "details",
          "id": "projet-local",
          "title": "Avec VS Code — Squelette facultatif fourni",
          "blocks": [
            {
              "type": "lesson",
              "id": "squelette-local",
              "title": "Un fichier prêt à accueillir tes essais",
              "paragraphs": [
                "Crée un fichier index.html dans ton dossier de travail, colle ce squelette, puis enregistre-le. Ouvre ce fichier dans un navigateur. Après chaque modification, enregistre dans VS Code puis actualise le navigateur.",
                "Le texte entre <!-- et --> et celui entre /* et */ sont des commentaires : des indications invisibles dans la page. Colle le HTML à la place du commentaire dans body, et le CSS à la place du commentaire dans style. Garde les autres lignes.",
                "head contient ici les réglages du document ; title donne le titre de l’onglet. body accueille ce qui est visible. style accueille les règles CSS dans cet exemple fourni. Tu n’as pas à reconstruire ce cadre de mémoire.",
                "Dans CodePen, n’utilise pas ce squelette complet : les panneaux HTML et CSS prennent en charge ce cadre pour toi. Le chargement d’un fichier CSS séparé sera une autre activité."
              ],
              "code": "<!doctype html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Mes essais CSS</title>\n  <style>\n    /* Colle les règles CSS ici. */\n  </style>\n</head>\n<body>\n  <!-- Colle le contenu HTML ici. -->\n</body>\n</html>"
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Distinguer une modification de mots en HTML d’une modification d’apparence en CSS.",
        "Identifier sélecteur, propriété et valeur dans une règle simple, puis modifier la déclaration demandée.",
        "Changer un fond sans changer les lettres ; prédire le style d’un nouveau paragraphe.",
        "Expliquer une correction de ponctuation ou de cible, au-delà de la reproduction du modèle."
      ],
      "consolidation": [
        {
          "moduleId": "css-decouverte",
          "blockId": "reparer",
          "label": "Réparer une règle et sa cible"
        },
        {
          "moduleId": "html-titres-paragraphes",
          "label": "Reprendre titre et paragraphe si nécessaire"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "css-decouverte",
          "blockId": "bonus",
          "label": "Comparer deux ambiances",
          "prerequisiteSkills": [
            {
              "skillId": "css.colors",
              "expectation": "Expliquer une règle CSS simple : élément ciblé, propriété et valeur ; distinguer couleur du texte et du fond."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "css-classes-couleurs",
          "label": "Continuer ou retourner à Classes et couleurs CSS",
          "prerequisiteSkills": [
            {
              "skillId": "css.colors",
              "expectation": "Expliquer une règle CSS simple : élément ciblé, propriété et valeur ; distinguer couleur du texte et du fond."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire lire une règle et choisir une modification de texte ou de fond. La copie sert de départ ; l’explication et le transfert servent à observer la compréhension.",
        "entryDiagnosis": [
          "Faire créer ou modifier un h1 et un p. Attendu : texte entre les balises, sans casser leur structure. Si nécessaire, proposer la reprise HTML ciblée.",
          "Présenter h1 { color: blue; }. Demander ce qui est choisi et ce qui est changé. Si l’élève explique déjà et modifie correctement une règle, proposer directement Classes et couleurs.",
          "Demander de montrer les panneaux HTML et CSS. Une difficulté de clic, de clavier ou de collage appelle une aide de manipulation, pas une conclusion sur les acquis CSS."
        ],
        "preparation": [
          "Ouvrir un CodePen vierge ; les snippets HTML et CSS sont visibles dans le module, aucun écran du professeur indispensable.",
          "En VS Code, fournir le squelette repliable et vérifier enregistrement/actualisation avant d’observer le CSS. Ne pas évaluer head/body ou le lien vers une feuille externe ici.",
          "Garder les couleurs fournies disponibles. Ne pas exiger de mémoriser leurs noms en anglais."
        ],
        "why": "Séparer le contenu de sa présentation permet de modifier une apparence sans réécrire les mots, puis de partager une règle entre plusieurs éléments.",
        "discoverySpeech": [
          "« Lis le titre : ses mots viennent du HTML. Si nous voulons les rendre violets sans changer ce qu’ils disent, nous allons agir dans CSS. »",
          "« Dans h1 { color: blue; }, h1 est notre sélecteur : qui choisit-on ? color est la propriété : que change-t-on ? blue est la valeur : quel choix fait-on ? Les accolades regroupent les déclarations. »",
          "« Maintenant, voici background-color. Ce n’est pas la couleur des lettres, mais le fond de l’élément. Je change une seule valeur : prédis le résultat avant de regarder. »",
          "« La règle p choisit tous nos paragraphes. Ajoutons-en un : faut-il recopier le CSS ? Pourquoi ? »"
        ],
        "example": {
          "target": {
            "moduleId": "css-decouverte",
            "blockId": "regle",
            "label": "La règle du titre"
          },
          "comments": [
            "Montrer h1 dans l’extrait HTML puis dans la règle ; pas de chevrons dans le sélecteur.",
            "Changer seulement color: blue en color: purple et observer les lettres. Puis utiliser la règle p pour modifier un fond indépendamment.",
            "Prononcer le vocabulaire en montrant chaque partie : sélecteur, déclaration, propriété, valeur. Ne pas appeler toute la règle « la propriété »."
          ]
        },
        "questions": [
          {
            "question": "Le fond est jaune mais les mots doivent rester noirs. Que modifies-tu ?",
            "answer": "background-color dans la règle ciblée ; garder color: black. Faire montrer la déclaration, sans exiger sa récitation."
          },
          {
            "question": "Pourquoi mon troisième paragraphe reçoit-il déjà une couleur ?",
            "answer": "Le sélecteur p correspond à tous les éléments p, y compris celui ajouté après."
          },
          {
            "question": "Pourquoi les titres sont-ils grands alors que je n’ai écrit aucun CSS ?",
            "answer": "Le navigateur fournit des styles par défaut. Nos règles peuvent modifier cette présentation."
          },
          {
            "question": "Faut-il retenir les noms de toutes les couleurs ?",
            "answer": "Non. Fournir les valeurs et vérifier que l’élève choisit la bonne propriété et la bonne cible."
          },
          {
            "question": "Pourquoi le fond dépasse-t-il la longueur des mots ?",
            "answer": "Il peint la zone de l’élément, pas seulement les lettres. Les paragraphes de l’exemple occupent une ligne de largeur disponible ; les dimensions seront étudiées plus tard."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "css-decouverte",
          "blockId": "guide",
          "label": "Modifier une seule déclaration"
        },
        "independentActivity": {
          "moduleId": "css-decouverte",
          "blockId": "mission",
          "label": "Changer une apparence et prédire"
        },
        "differentiation": [
          "Donner le HTML si la saisie prend toute l’attention ; observer séparément la capacité à choisir une règle et une valeur.",
          "Après un essai réussi, demander une modification sans nommer color ou background-color. Si seule la copie fonctionne, reprendre la comparaison ciblée.",
          "Un élève déjà à l’aise peut passer à C2 ; le bonus ambiances n’est pas obligatoire."
        ],
        "commonErrors": [
          {
            "symptom": "Le CSS apparaît comme du texte dans la page.",
            "helps": [
              "Montrer où le texte a été collé.",
              "Identifier le panneau HTML et le panneau CSS.",
              "Comparer les étiquettes des extraits.",
              "Déplacer la règle dans CSS ; en local, entre les balises style du squelette."
            ]
          },
          {
            "symptom": "Une déclaration ne produit rien.",
            "helps": [
              "Vérifier que le sélecteur correspond à un élément.",
              "Regarder : et ;, puis les accolades.",
              "Comparer la déclaration avec color: blue;.",
              "Pour la consolidation, remplacer = par : et garder p comme cible."
            ]
          },
          {
            "symptom": "L’élève change les lettres au lieu du fond.",
            "helps": [
              "Demander de montrer ce qui devait changer.",
              "Distinguer lettres et zone derrière.",
              "Comparer les deux lignes de la règle.",
              "Modifier background-color seulement, puis faire un second essai sans aide."
            ]
          }
        ],
        "notes": [
          "Solution de mission : h1 { color: darkgreen; background-color: white; } puis p { color: black; background-color: lightyellow; }. Le troisième p reçoit la même règle.",
          "Observer réussite autonome, avec modèle ou avec aide. Distinguer aide à la manipulation et choix de déclaration. Utiliser la remarque existante si utile, sans nouvel état de suivi.",
          "Seule css.colors est associée ici. La découverte d’un sélecteur de balise ne prouve pas la maîtrise des classes de css.selectors.",
          "Pour poursuivre : l’élève doit choisir la cible et distinguer texte/fond. Sinon, reprendre seulement la consolidation concernée. Les liens restent ouverts.",
          "La syntaxe locale est un support fourni, pas un cours C3 anticipé. Aucun HTML supplémentaire n’est à mémoriser pour réussir les objectifs CSS."
        ],
        "quickConductor": [
          "Vérifier titres/paragraphes et environnement.",
          "Présenter cible, propriété et valeur avec une règle.",
          "Faire modifier texte puis fond séparément.",
          "Lancer la mission et demander une prédiction pour le troisième paragraphe.",
          "Consolider si nécessaire ; sinon, proposer C2 sans imposer le bonus.",
          "Observer le niveau d’aide et décider manuellement des acquis."
        ],
        "references": [
          {
            "title": "MDN — Découvrir la syntaxe CSS",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS"
          },
          {
            "title": "MDN — Sélecteurs de type",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Type_selectors"
          },
          {
            "title": "MDN — color",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color"
          },
          {
            "title": "MDN — background-color",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-color"
          },
          {
            "title": "HTML Standard — Élément style",
            "url": "https://html.spec.whatwg.org/multipage/semantics.html#the-style-element"
          }
        ]
      }
    },
    "web-affiche-numerique": {
      "domainId": "web",
      "title": "Mon affiche numérique",
      "type": "project",
      "theme": "fondations",
      "objective": "Créer une petite affiche HTML et personnaliser ses textes et ses fonds avec des classes CSS.",
      "skillIds": [
        "html.headings",
        "html.text",
        "css.selectors",
        "css.colors"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.headings",
          "expectation": "Créer et modifier un titre."
        },
        {
          "skillId": "html.text",
          "expectation": "Créer et modifier un paragraphe."
        },
        {
          "skillId": "css.colors",
          "expectation": "Expliquer une règle CSS simple : élément ciblé, propriété et valeur ; distinguer couleur du texte et du fond."
        },
        {
          "skillId": "css.selectors",
          "expectation": "Relier class au sélecteur .classe et réutiliser une classe sur plusieurs éléments."
        }
      ],
      "blocks": [
        {
          "type": "lesson",
          "id": "projet",
          "title": "Ton projet — Une affiche qui transmet un message",
          "paragraphs": [
            "Crée une affiche sur une activité imaginaire, une idée ou une passion, sans information personnelle. Une affiche doit faire comprendre son sujet et donner quelques informations utiles.",
            "Résultat attendu : un titre, au moins deux paragraphes et deux groupes de styles lisibles. Les couleurs servent à distinguer le titre et les informations ; tu n’as pas besoin de décoration supplémentaire.",
            "Tu peux partir d’une page existante ou d’un essai neuf. Le but est de décider quels éléments partagent un style et d’expliquer tes choix, pas de recopier une affiche terminée.",
            "Travaille sans IA. Dans CodePen, écris le contenu dans HTML et les règles dans CSS ; laisse JS vide. Une image, un lien et une liste ne sont pas obligatoires."
          ]
        },
        {
          "type": "checklist",
          "id": "cahier-charges",
          "title": "Cahier des charges",
          "items": [
            {
              "id": "objectif-titre",
              "text": "Un h1 annonce le sujet de mon affiche."
            },
            {
              "id": "objectif-textes",
              "text": "Au moins deux paragraphes donnent des informations compréhensibles."
            },
            {
              "id": "objectif-classes",
              "text": "Deux classes différentes distinguent titre et informations ; les deux paragraphes partagent une classe."
            },
            {
              "id": "objectif-styles",
              "text": "Mes règles choisissent les couleurs du texte et du fond. Au moins deux groupes ont une apparence différente et lisible."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "exemple-html",
          "title": "Petit exemple à comprendre — Pas l’affiche finale",
          "paragraphs": [
            "Cet essai montre le lien entre contenu et style. annonce désigne ici le titre et information le paragraphe. Ces noms sont choisis : ils n’ont pas de pouvoir particulier.",
            "Tu peux tester cet extrait dans HTML, puis celui qui suit dans CSS avant de préparer ton propre sujet. Ajoute un second p portant information pour prédire ce qu’il recevra."
          ],
          "code": "<h1 class=\"annonce\">Atelier découverte</h1>\n<p class=\"information\">Une idée à essayer.</p>"
        },
        {
          "type": "lesson",
          "id": "exemple-css",
          "title": "CSS — Deux groupes lisibles",
          "paragraphs": [
            ".annonce choisit les éléments dont class vaut annonce ; .information choisit ceux portant information.",
            "color donne la couleur des lettres, background-color celle de leur fond. white signifie blanc, navy bleu très foncé, black noir et lightyellow jaune clair.",
            "Le fond des paragraphes peut être plus large que leurs mots : il appartient à chaque élément. L’affiche peut rester très simple ; aucune mise en page nouvelle n’est demandée."
          ],
          "code": ".annonce {\n  color: white;\n  background-color: navy;\n}\n\n.information {\n  color: black;\n  background-color: lightyellow;\n}"
        },
        {
          "type": "tasks",
          "id": "preparer",
          "title": "Préparer puis essayer",
          "intro": "Tu peux utiliser l’essai comme aide, mais ton affiche finale doit porter ton propre message.",
          "items": [
            {
              "id": "choisir-message",
              "text": "Choisis ton sujet, ton titre et deux informations à transmettre. Écris ces textes avant de choisir tes couleurs."
            },
            {
              "id": "essayer-groupe",
              "text": "Dans le petit exemple, ajoute un deuxième paragraphe avec la même classe. Change une couleur de cette classe. Observe les deux paragraphes.",
              "hints": [
                "Regarde le class du premier paragraphe.",
                "Le nouveau paragraphe peut partager ce même nom.",
                "Une seule règle peut servir aux deux.",
                "Ajoute un p class=\"information\", puis modifie color dans .information. Les deux paragraphes doivent changer."
              ]
            },
            {
              "id": "choisir-palette",
              "text": "Choisis un couple texte/fond facile à lire pour chaque groupe. Tu peux garder les couleurs proposées ; le choix artistique ne mesure pas ta compréhension du code."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "realisation",
          "title": "Réalise ton affiche",
          "intro": "Crée ton propre contenu, ou transforme une page que tu possèdes déjà. Essaie sans recopier toute la solution d’exemple.",
          "items": [
            {
              "id": "ecrire-contenu",
              "text": "Écris ton h1 et au moins deux paragraphes. Relis le message : quelqu’un doit pouvoir comprendre le sujet sans explication orale."
            },
            {
              "id": "attribuer-classes",
              "text": "Choisis une classe pour le titre et une autre, commune aux paragraphes. Les noms peuvent être différents de l’exemple.",
              "hints": [
                "Repère les éléments qui doivent partager une apparence.",
                "Ils peuvent porter le même nom dans class.",
                "Compare le lien annonce/.annonce de l’exemple.",
                "Ajoute class à ton h1 et à tes p ; utilise le même nom pour les p. Écris ensuite les sélecteurs correspondants, avec le point dans CSS seulement."
              ]
            },
            {
              "id": "personnaliser",
              "text": "Écris les deux règles CSS pour changer les lettres et les fonds. Vérifie que le bon groupe change.",
              "hints": [
                "Commence par une seule règle.",
                "Distingue le texte à colorer de son fond.",
                "Relis color et background-color dans l’exemple.",
                "Ajoute ces deux propriétés entre accolades, avec : et ;. Puis teste l’autre classe."
              ]
            },
            {
              "id": "adapter",
              "text": "Fais une modification personnelle : change une phrase et un couple de couleurs. Explique quel langage tu utilises pour chacun de ces changements."
            }
          ]
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie puis présente ton travail",
          "items": [
            {
              "id": "verifier-message",
              "text": "Le sujet et les deux informations se comprennent en lisant la page."
            },
            {
              "id": "verifier-html",
              "text": "Mon titre et mes paragraphes ont des balises correctement ouvertes et fermées."
            },
            {
              "id": "verifier-regles",
              "text": "Les classes HTML et les sélecteurs CSS correspondent ; une règle commune agit sur les deux paragraphes."
            },
            {
              "id": "verifier-lecture",
              "text": "Les lettres restent faciles à lire sur chaque fond."
            },
            {
              "id": "verifier-explication",
              "text": "Je peux expliquer une modification de contenu et une modification de style."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "transfert",
          "title": "Un dernier changement sans modèle",
          "intro": "Cette petite demande vérifie un choix, pas seulement la reproduction d’un résultat.",
          "items": [
            {
              "id": "nouvelle-information",
              "text": "Ajoute une troisième information ayant exactement le style des deux premières, sans ajouter de règle CSS. Prédis puis vérifie le résultat."
            },
            {
              "id": "montrer-regle",
              "text": "Change le fond des trois informations en gardant leurs lettres identiques. Montre la règle responsable et explique ton choix."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Consolidation — Retrouver la cause",
          "intro": "Conserve ta page. Choisis seulement l’essai correspondant à ta difficulté.",
          "items": [
            {
              "id": "correspondance",
              "text": "Si un seul paragraphe ne reçoit pas le style commun, compare les class des paragraphes et le sélecteur. Corrige le nom différent.",
              "hints": [
                "Commence par le paragraphe qui ne change pas.",
                "Compare son class avec celui qui fonctionne.",
                "Les noms doivent correspondre au même sélecteur.",
                "Rétablis le même nom de classe sur les paragraphes et vérifie ; inutile d’ajouter une règle par phrase."
              ]
            },
            {
              "id": "fond-lettres",
              "text": "Si tu changes les lettres alors que tu veux changer le fond, garde le même sélecteur et retrouve la bonne déclaration.",
              "hints": [
                "Montre les lettres et la zone derrière.",
                "Deux propriétés différentes règlent ces parties.",
                "Compare color et background-color.",
                "Garde color et modifie background-color uniquement, puis reteste."
              ]
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus — Une seconde ambiance",
          "intro": "Facultatif, sans nouvelle notion et sans changer le message.",
          "items": [
            {
              "id": "autre-ambiance",
              "text": "Note tes couples de couleurs, puis essaie une autre ambiance avec les mêmes deux classes. Par exemple, inverse blanc et navy. Garde une version lisible."
            },
            {
              "id": "comparer-ambiances",
              "text": "Explique ce qui a changé et ce qui est resté identique. Choisis ta version préférée sans refaire le HTML."
            }
          ]
        },
        {
          "type": "callout",
          "id": "local",
          "tone": "neutral",
          "title": "Avec VS Code",
          "text": "Utilise le cadre fourni dans Découvrir le CSS : place ton contenu dans body et les règles dans style. Enregistre puis actualise le navigateur. Tu n’as pas besoin de créer une feuille externe pour cette affiche.",
          "moduleLink": {
            "text": "Découvrir le CSS",
            "moduleId": "css-decouverte"
          }
        },
        {
          "type": "lesson",
          "id": "suite",
          "title": "Et ensuite ?",
          "paragraphs": [
            "Si tu sais réaliser et expliquer les changements avec peu ou pas d’aide, tu peux continuer dans Débutants à partir du premier besoin restant. Tu n’as pas à refaire les compétences déjà comprises.",
            "Une difficulté sur une classe ou une couleur appelle une reprise ciblée. L’affiche n’est pas une validation automatique, et son bonus n’est pas obligatoire. Si tu es en cours, le professeur choisit avec toi la suite adaptée.",
            "Si tu n’as pas encore réalisé la mini-page HTML complète, elle reste accessible ci-dessous lorsque titres, listes, liens et images sont compris. Aucun nouveau cours annoncé mais indisponible n’est nécessaire pour terminer cette affiche."
          ]
        }
      ],
      "masteryCriteria": [
        "Produire un message personnel compréhensible avec titre et paragraphes, indépendamment du choix décoratif.",
        "Organiser deux groupes avec des classes et réutiliser une règle commune aux paragraphes.",
        "Changer séparément contenu, couleur de lettres et fond, en expliquant le rôle de HTML et CSS.",
        "Ajouter une information avec un style existant sans nouvelle règle ; réussir un changement demandé sans nom de propriété donné."
      ],
      "consolidation": [
        {
          "moduleId": "web-affiche-numerique",
          "blockId": "reparer",
          "label": "Réparer seulement le ciblage ou la déclaration"
        },
        {
          "moduleId": "css-classes-couleurs",
          "blockId": "reparer",
          "label": "Reprendre les correspondances de classes"
        },
        {
          "moduleId": "css-decouverte",
          "blockId": "reparer",
          "label": "Reprendre la lecture d’une règle"
        },
        {
          "moduleId": "html-titres-paragraphes",
          "label": "Reprendre titre et paragraphes"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "web-affiche-numerique",
          "blockId": "bonus",
          "label": "Comparer deux ambiances avec les mêmes notions",
          "prerequisiteSkills": [
            {
              "skillId": "css.colors",
              "expectation": "Expliquer une règle CSS simple : élément ciblé, propriété et valeur ; distinguer couleur du texte et du fond."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "html-mini-page",
          "label": "Compléter le noyau HTML si ce défi reste à faire",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer et modifier un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer et modifier un paragraphe."
            },
            {
              "skillId": "html.headings",
              "expectation": "Utiliser aussi des sous-titres, par exemple h2."
            },
            {
              "skillId": "html.lists",
              "expectation": "Placer les éléments li dans une liste ul."
            },
            {
              "skillId": "html.links",
              "expectation": "Distinguer destination href et texte cliquable."
            },
            {
              "skillId": "html.images",
              "expectation": "Insérer/remplacer une image avec src et rédiger alt."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire réaliser une petite production personnelle en réutilisant HTML, classes et couleurs. L’élève doit pouvoir modifier son affiche sur demande, pas seulement présenter un rendu copié.",
        "entryDiagnosis": [
          "Demander un h1 et un p, puis une phrase expliquant le rôle de HTML et CSS.",
          "Présenter une classe sur deux paragraphes : demander de prédire le résultat d’une modification de leur règle commune.",
          "Demander de changer un fond sans toucher aux lettres. Si cette distinction manque, proposer C1 ; si le nom de classe manque, proposer C2."
        ],
        "preparation": [
          "Préparer un CodePen ou un fichier local avec le cadre fourni. Aucune image, aucun lien, aucun compte supplémentaire ni publication ne sont requis pour cette affiche.",
          "Garder les noms de couleurs à portée de main. Les deux palettes fournies permettent de se concentrer sur le code.",
          "Vérifier que l’élève retrouve son panneau CSS ou la zone style. Aider à cette manipulation séparément du choix des règles."
        ],
        "why": "Un petit projet réunit message, ciblage et style. Les choix et modifications donnent des indices de compréhension sans exiger une décoration avancée.",
        "discoverySpeech": [
          "« Ton affiche doit transmettre une idée à quelqu’un qui la lit sans t’entendre. Choisis d’abord ce que tu veux dire ; les couleurs viendront ensuite. »",
          "« Nous avons deux groupes : le titre et les informations. Avec deux règles, nous pouvons garder une apparence cohérente quand nous ajoutons une phrase. »",
          "« Tu peux garder ma palette. Ce n’est pas un concours de décoration. Je veux surtout que tu saches retrouver et expliquer la règle qui agit. »",
          "« Pour finir, ajoute une information de même style sans écrire de nouvelle règle, puis change seulement le fond du groupe. Prédis ce qui va se passer. »"
        ],
        "example": {
          "target": {
            "moduleId": "web-affiche-numerique",
            "blockId": "exemple-css",
            "label": "Deux groupes et deux couples de couleurs"
          },
          "comments": [
            "Associer .annonce au h1 et .information au p de l’extrait précédent. Les noms sont choisis, pas réservés.",
            "Faire ajouter le second p pendant l’essai accompagné. Une règle commune agit sur les deux, sans répétition de CSS.",
            "L’exemple a volontairement un seul paragraphe au départ et ne constitue pas l’affiche finale. La production exige son propre message et au moins deux informations."
          ]
        },
        "questions": [
          {
            "question": "Dois-je ajouter une image pour que ce soit une affiche ?",
            "answer": "Non. Ici le message et les styles suffisent. Une illustration éventuelle ne remplace aucun critère HTML/CSS et ne doit pas devenir un prérequis caché."
          },
          {
            "question": "Pourquoi deux paragraphes avec le même class changent-ils ensemble ?",
            "answer": "Ils correspondent au même sélecteur de classe ; la même règle leur est appliquée."
          },
          {
            "question": "Puis-je garder les couleurs de l’exemple ?",
            "answer": "Oui. Demander toutefois une modification expliquée pour observer le choix de la bonne règle."
          },
          {
            "question": "Comment ajouter une information sans nouvelle règle ?",
            "answer": "Créer un p avec la classe des informations existantes. Il reçoit le style du groupe."
          },
          {
            "question": "Si ma phrase est fausse, dois-je la corriger dans CSS ?",
            "answer": "Non. Les mots sont dans HTML ; CSS change leur présentation."
          },
          {
            "question": "J’ai un joli résultat : est-ce automatiquement acquis ?",
            "answer": "Non. Demander une modification et une explication, puis distinguer autonomie, modèle et aide."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "web-affiche-numerique",
          "blockId": "preparer",
          "label": "Préparer le message et essayer une classe commune"
        },
        "independentActivity": {
          "moduleId": "web-affiche-numerique",
          "blockId": "realisation",
          "label": "Réaliser son affiche"
        },
        "differentiation": [
          "Proposer des noms de couleurs ou aider au collage sans décider à la place de l’élève quelle règle doit changer.",
          "Conserver la même exigence de ciblage pour une affiche simple ; ne pas exiger une mise en page non apprise.",
          "Un élève autonome peut comparer les ambiances. Un élève bloqué reprend seulement class ou propriété, puis revient à sa production."
        ],
        "commonErrors": [
          {
            "symptom": "Une règle par paragraphe rend les changements incohérents.",
            "helps": [
              "Faire identifier le groupe d’informations.",
              "Comparer leurs noms de classe.",
              "Revoir la règle commune de l’exemple.",
              "Utiliser la même classe pour les informations puis demander d’en ajouter une troisième sans règle supplémentaire."
            ]
          },
          {
            "symptom": "La personnalisation masque les lettres.",
            "helps": [
              "Faire lire la phrase sur le fond.",
              "Comparer couleur des lettres et du fond.",
              "Revenir à un couple fourni lisible.",
              "Tester noir/blanc ou blanc/navy, puis conserver un changement de couleur distinct et expliqué."
            ]
          },
          {
            "symptom": "Le rendu est copié mais la modification demandée bloque.",
            "helps": [
              "Demander quelle partie du rendu doit changer.",
              "Faire retrouver son élément HTML puis sa classe.",
              "Comparer le rôle des deux déclarations.",
              "Accompagner un essai, puis proposer une nouvelle modification sans nommer la propriété."
            ]
          }
        ],
        "notes": [
          "Solution minimale possible : h1 class=\"annonce\", deux p class=\"information\", avec les deux règles de l’exemple. Les mots doivent former un message personnel ; d’autres noms et couleurs sont acceptés.",
          "Transfert attendu : ajouter un troisième p class=\"information\", puis modifier seulement background-color dans .information. color reste inchangé. L’élève doit expliquer pourquoi les trois changent.",
          "Observer réussite autonome, avec modèle ou avec aide ; ne pas confondre le goût graphique, l’orthographe, la manipulation et la compréhension des règles.",
          "L’affiche est le jalon de première personnalisation de Fondations et un prolongement facultatif de Débutants. Le noyau HTML complet reste un autre défi.",
          "Si les choix sont expliqués, orienter vers le premier besoin restant dans Débutants ; si une notion manque, proposer sa consolidation ciblée. Ne pas transformer le bonus en passage obligé.",
          "Le suivi reste manuel avec ses statuts existants. Le projet, sa checklist et sa consultation ne produisent aucune validation."
        ],
        "quickConductor": [
          "Vérifier règles, classes et modification indépendante du fond.",
          "Faire choisir le message et lire le cahier des charges.",
          "Essayer une classe commune puis lancer la réalisation autonome.",
          "Vérifier lisibilité, ciblage et présence des textes.",
          "Demander la troisième information puis le changement de fond.",
          "Consolider ou poursuivre selon l’observation, sans bonus obligatoire."
        ],
        "references": [
          {
            "title": "MDN — Sélecteurs de classe",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Class_selectors"
          },
          {
            "title": "MDN — color",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color"
          },
          {
            "title": "MDN — background-color",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-color"
          },
          {
            "title": "MDN — Découvrir la syntaxe CSS",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS"
          }
        ]
      }
    },
    "html-document": {
      "domainId": "web",
      "title": "Structure d’un document HTML",
      "type": "lesson",
      "theme": "debutants",
      "objective": "Organiser un document HTML complet et distinguer le titre de l’onglet du titre visible.",
      "skillIds": [
        "html.document"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.headings",
          "expectation": "Créer un titre dans une petite page."
        },
        {
          "skillId": "html.text",
          "expectation": "Créer un paragraphe et retrouver ses balises dans le code."
        }
      ],
      "blocks": [
        {
          "type": "lesson",
          "id": "depart",
          "title": "1 — Du contenu à un fichier complet",
          "paragraphs": [
            "Tu as déjà assemblé une petite page avec un titre et du texte. Tu vas maintenant créer son cadre complet dans un fichier : le résultat sera une page visible dans le navigateur avec un nom dans son onglet.",
            "Dans CodePen, le panneau HTML reçoit habituellement le contenu visible ; CodePen fournit le cadre autour. Ne colle pas le document complet de ce cours dans ce panneau pour tester le titre d’onglet.",
            "Pour réaliser les essais, utilise VS Code ou un éditeur de texte déjà installé, et un navigateur. Aucun serveur, extension ou publication n’est nécessaire. Si tu ne peux pas créer de fichiers, lis le document et repère ses parties ; demande une aide d’installation ou de manipulation si tu es en cours, puis fais les essais sur un poste adapté.",
            "Travaille sans IA. Une aide pour cliquer, sélectionner ou enregistrer ne remplace pas tes choix dans le code."
          ]
        },
        {
          "type": "lesson",
          "id": "comprendre",
          "title": "2 — À quoi servent les parties ?",
          "paragraphs": [
            "<!doctype html> annonce un document HTML moderne. Cette déclaration se place au début ; elle n’a pas de balise fermante.",
            "html entoure le document. lang=\"fr\" indique sa langue principale. À l’intérieur, head rassemble les informations pour le navigateur et body contient ce que tu veux afficher dans la page.",
            "title, placé dans head, nomme l’onglet. h1, placé dans body, est le titre principal visible. Ils peuvent être différents ; modifier l’un ne modifie pas automatiquement l’autre.",
            "meta charset=\"utf-8\" indique comment lire les caractères, notamment les accents. Garde cette ligne ; meta n’a pas de balise fermante. Elle n’écrit pas une phrase dans la page.",
            "Les espaces au début des lignes aident à lire les parties. Ce sont les balises, pas ces espaces, qui les délimitent."
          ]
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "Le fichier index.html de départ",
          "paragraphs": [
            "Lis d’abord le code : prédis le texte de l’onglet et le titre visible. Copie ensuite ce document entier dans le fichier de l’exercice."
          ],
          "code": "<!doctype html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Mon carnet</title>\n</head>\n<body>\n  <h1>Ma page locale</h1>\n  <p>Je construis un document HTML.</p>\n</body>\n</html>"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — Créer, enregistrer, observer",
          "intro": "Utilise un nouveau dossier pour ne pas écraser une page existante.",
          "items": [
            {
              "id": "creer-dossier",
              "text": "Crée un dossier nommé atelier-web. Dans VS Code, utilise Fichier → Ouvrir le dossier, puis choisis ce dossier."
            },
            {
              "id": "creer-fichier",
              "text": "Dans la liste de fichiers de VS Code, crée index.html, colle le document de départ puis enregistre avec Ctrl+S (Cmd+S sur Mac).",
              "hints": [
                "Regarde le nom du fichier dans la liste, pas seulement le titre du navigateur.",
                "Le fichier doit se terminer par .html, pas par .html.txt.",
                "Compare index.html avec le nom demandé.",
                "Si nécessaire, renomme le fichier avec son extension complète ; conserve son contenu, puis enregistre."
              ]
            },
            {
              "id": "ouvrir-fichier",
              "text": "Ouvre index.html dans Chrome ou Edge depuis l’explorateur de fichiers : clic droit → Ouvrir avec → ton navigateur si le double-clic ouvre l’éditeur. Vérifie l’onglet et le h1."
            },
            {
              "id": "modifier-onglet",
              "text": "Remplace uniquement Mon carnet dans title par Carnet des idées. Enregistre, puis actualise le navigateur. Le titre visible a-t-il changé ?"
            },
            {
              "id": "modifier-page",
              "text": "Remplace ensuite uniquement Ma page locale dans h1 par Mes découvertes. Enregistre et actualise. Vérifie que le nom de l’onglet reste Carnet des idées."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "mission",
          "title": "Mission autonome — Deux titres, deux rôles",
          "intro": "Pars d’une copie de ton cadre, ou remplace seulement le contenu de body par ta petite page déjà réalisée. Ne place pas un second document complet dans body.",
          "items": [
            {
              "id": "mission-onglet",
              "text": "Choisis un nom court pour l’onglet et un titre visible différent sur le même sujet. Place chacun au bon endroit.",
              "hints": [
                "Cherche la partie qui contient les informations du document et celle du contenu visible.",
                "title et h1 n’ont pas le même rôle.",
                "Compare head/body dans l’exemple.",
                "Place title dans head et h1 dans body. Enregistre et vérifie les deux endroits du navigateur."
              ]
            },
            {
              "id": "mission-texte",
              "text": "Ajoute deux paragraphes dans le contenu visible sans modifier le nom de l’onglet."
            },
            {
              "id": "mission-transfert",
              "text": "Sans regarder le modèle, change seulement le nom de l’onglet. Explique pourquoi les mots de ta page sont restés identiques."
            }
          ]
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie ton document",
          "items": [
            {
              "id": "verifier-cadre",
              "text": "Le document possède un head et un body dans html."
            },
            {
              "id": "verifier-titres",
              "text": "Le nom de l’onglet vient de title ; le titre visible vient de h1."
            },
            {
              "id": "verifier-contenu",
              "text": "Les paragraphes sont dans body et les balises qui entourent du contenu sont fermées."
            },
            {
              "id": "verifier-fichier",
              "text": "J’ai enregistré le bon fichier et actualisé la page ouverte dans le navigateur."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "panne",
          "title": "Consolidation — Les titres ont été inversés",
          "paragraphs": [
            "Le code ci-dessous est lisible par le navigateur, mais il ne répond pas à la demande : l’onglet doit annoncer Carnet et la page doit afficher Les volcans. Corrige les deux textes sans déplacer les balises ni réécrire le document."
          ],
          "code": "<!doctype html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Les volcans</title>\n</head>\n<body>\n  <h1>Carnet</h1>\n  <p>Des montagnes particulières.</p>\n</body>\n</html>"
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Explique ta correction",
          "intro": "Cherche avant de révéler une aide.",
          "items": [
            {
              "id": "corriger-titres",
              "text": "Corrige l’extrait pour obtenir l’onglet Carnet et le titre visible Les volcans.",
              "hints": [
                "Regarde title et h1.",
                "Le texte de l’onglet ne vient pas de h1.",
                "Compare avec le premier document.",
                "Écris Carnet entre title et /title, puis Les volcans entre h1 et /h1. Enregistre et actualise."
              ]
            },
            {
              "id": "corriger-fichier",
              "text": "Si aucun changement n’apparaît, vérifie l’enregistrement, le fichier ouvert et l’actualisation avant de changer d’autres balises."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Bonus — Ajouter une rubrique",
          "intro": "Facultatif : si tu sais utiliser un h2 et un paragraphe, ajoute une rubrique au contenu visible. Sinon, reprends les niveaux de titres avant ce bonus.",
          "items": [
            {
              "id": "bonus-rubrique",
              "text": "Ajoute un sous-titre h2 et un paragraphe dans body, sans toucher au head."
            },
            {
              "id": "bonus-expliquer",
              "text": "Montre où commence et où se termine le contenu de body, puis explique ce qui reste dans head."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Repérer head et body dans un document complet et expliquer leurs rôles avec ses mots.",
        "Modifier title sans modifier h1, puis faire l’inverse.",
        "Insérer un contenu visible dans body sans dupliquer le cadre du document.",
        "Distinguer une erreur de code d’un fichier non enregistré ou d’un autre fichier ouvert."
      ],
      "consolidation": [
        {
          "moduleId": "html-document",
          "blockId": "reparer",
          "label": "Réparer la confusion title/h1"
        },
        {
          "moduleId": "html-titres-paragraphes",
          "label": "Reprendre titres et paragraphes"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "html-document",
          "blockId": "bonus",
          "label": "Ajouter une rubrique au bon endroit",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Utiliser un h2 comme sous-titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "html-fichiers-chemins",
          "label": "Organiser les fichiers et retrouver les images",
          "prerequisiteSkills": [
            {
              "skillId": "html.links",
              "expectation": "Distinguer le texte cliquable de sa destination href."
            },
            {
              "skillId": "html.images",
              "expectation": "Distinguer src et alt et remplacer une image."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire identifier le cadre réel d’une page hors CodePen et distinguer métadonnées du document et contenu affiché, avec modification indépendante de title et h1.",
        "entryDiagnosis": [
          "Demander de retrouver le h1 et un paragraphe dans une petite page déjà faite. Attendu : les balises sont repérées, leur texte peut être changé.",
          "Demander ce que CodePen reçoit dans son panneau HTML. Ne pas supposer que l’élève connaît déjà head/body parce qu’une ancienne activité fournissait un squelette.",
          "Vérifier ouvrir un dossier, créer un fichier et enregistrer. Fournir une aide au clavier ou au fichier sans conclure à une difficulté HTML."
        ],
        "preparation": [
          "Préparer un dossier neuf ou une copie de travail ; ne pas écraser un projet personnel.",
          "Vérifier la présence d’un éditeur de texte et d’un navigateur. Aucun module complémentaire ni serveur n’est requis pour ces extraits.",
          "Garder l’exemple affiché sur CodeCraft. Si le poste ne permet pas les fichiers, dissocier le repérage sur le code de l’essai pratique encore à réaliser."
        ],
        "why": "CodePen masque une partie du cadre du document. Comprendre ce cadre permet de savoir où placer les informations du navigateur et le contenu visible dans un projet local.",
        "discoverySpeech": [
          "« Jusqu’ici, tu écrivais surtout ce qu’on voit dans la page. CodePen préparait le document autour. Voici maintenant ce document entier. »",
          "« head contient les informations qui accompagnent la page. body contient notre contenu visible. Le mot head n’est pas le titre que l’on voit en haut de la page. »",
          "« Regarde title et h1. Je vais changer le nom de l’onglet sans toucher au titre visible. Quelle ligne choisirais-tu ? Vérifions après enregistrement. »",
          "« Copier le cadre aide à démarrer. Ce qui m’intéresse ensuite, c’est de te voir placer un nouveau paragraphe et choisir seul le bon titre à modifier. »"
        ],
        "example": {
          "target": {
            "moduleId": "html-document",
            "blockId": "exemple",
            "label": "Comparer le document et le navigateur"
          },
          "comments": [
            "Lire le cadre de haut en bas ; expliquer doctype, html/lang, head, meta/charset, title et body sans exiger leur récitation.",
            "Faire prédire Mon carnet dans l’onglet et Ma page locale dans la page avant l’ouverture.",
            "Changer un seul texte à la fois, enregistrer et actualiser ; ne pas interpréter une page inchangée comme une preuve d’incompréhension sans vérifier le fichier."
          ]
        },
        "questions": [
          {
            "question": "Si le h1 change, le nom de l’onglet change-t-il aussi ?",
            "answer": "Non : le titre d’onglet vient de title. Faire changer un seul des deux pour le démontrer."
          },
          {
            "question": "Où faut-il ajouter un paragraphe visible ?",
            "answer": "Dans body, avant sa balise fermante. Pas dans head et pas après le document."
          },
          {
            "question": "Est-ce que head est un titre affiché en haut de la page ?",
            "answer": "Non. C’est la partie des informations du document ; h1 est le titre principal de son contenu visible."
          },
          {
            "question": "Pourquoi y avait-il déjà une page dans CodePen sans ce cadre ?",
            "answer": "Le panneau reçoit habituellement le contenu de body ; CodePen construit le cadre. Cela ne prouve pas que l’élève sait l’organiser dans un fichier."
          },
          {
            "question": "Faut-il une balise fermante pour meta ou doctype ?",
            "answer": "Non. meta est un élément sans contenu et doctype une déclaration ; conserver les lignes fournies."
          },
          {
            "question": "Le rendu paraît bon : le code est-il forcément bien organisé ?",
            "answer": "Non, le navigateur peut corriger certaines erreurs de structure. Relire aussi le fichier source plutôt que juger seulement son apparence."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "html-document",
          "blockId": "guide",
          "label": "Créer puis modifier séparément les deux titres"
        },
        "independentActivity": {
          "moduleId": "html-document",
          "blockId": "mission",
          "label": "Organiser sa petite page"
        },
        "differentiation": [
          "Fournir le fichier si la création prend toute l’attention ; distinguer cette aide du choix de title/body.",
          "Laisser le cadre disponible comme aide-mémoire et demander une modification sans citer de balise.",
          "Si les rôles sont compris, poursuivre ; ne pas imposer la copie répétée du document ni le bonus."
        ],
        "commonErrors": [
          {
            "symptom": "Le texte de l’onglet a été écrit dans h1.",
            "helps": [
              "Faire montrer l’endroit qui devait changer.",
              "Chercher title et h1.",
              "Comparer les deux résultats de l’exemple.",
              "Corriger title, puis proposer un autre changement indépendant."
            ]
          },
          {
            "symptom": "Aucun changement après la modification.",
            "helps": [
              "Vérifier le fichier réellement ouvert.",
              "Regarder si le fichier a été enregistré.",
              "Comparer son chemin avec celui du navigateur.",
              "Enregistrer puis actualiser ce même fichier ; ne pas réécrire tout le HTML."
            ]
          },
          {
            "symptom": "Un document complet a été collé dans body.",
            "helps": [
              "Faire compter les balises html/head/body.",
              "Repérer le cadre extérieur déjà présent.",
              "Comparer avec l’exemple qui n’a qu’un cadre.",
              "Conserver un seul document et déplacer seulement le contenu visible dans son body."
            ]
          }
        ],
        "notes": [
          "Correction de la consolidation : title contient Carnet ; h1 contient Les volcans. Le reste peut rester identique.",
          "Réponse attendue de la mission : un cadre complet unique, deux textes de titres distincts et deux p dans body. Le thème reste libre.",
          "La compétence html.document est indépendante de html.structure (parents/enfants) : ne pas reporter une acquisition existante automatiquement.",
          "Observer réussite autonome, avec modèle ou avec aide ; séparer manipulation/enregistrement et choix du bon élément. Utiliser la remarque existante si utile.",
          "Avant Fichiers et chemins, vérifier liens et images ; une difficulté sur une seule notion appelle sa reprise ciblée. Aucun rythme de séance imposé."
        ],
        "quickConductor": [
          "Vérifier petite page HTML et accès aux fichiers.",
          "Montrer le cadre et faire prédire onglet/contenu.",
          "Créer le fichier et modifier title puis h1.",
          "Lancer la mission avec cadre disponible si nécessaire.",
          "Demander une modification sans nommer la balise.",
          "Consolider ou poursuivre selon les prérequis ; observer le niveau d’aide."
        ],
        "references": [
          {
            "title": "MDN — Le head et les métadonnées du document",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata"
          },
          {
            "title": "HTML Standard — Élément title",
            "url": "https://html.spec.whatwg.org/multipage/semantics.html#the-title-element"
          },
          {
            "title": "MDN — Manipuler des fichiers",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          }
        ]
      }
    },
    "html-fichiers-chemins": {
      "domainId": "web",
      "title": "Fichiers et chemins",
      "type": "lesson",
      "theme": "debutants",
      "objective": "Organiser les ressources d’une page et écrire des chemins relatifs qui fonctionnent.",
      "skillIds": [
        "html.paths"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.links",
          "expectation": "Distinguer le texte cliquable de sa destination href."
        },
        {
          "skillId": "html.images",
          "expectation": "Distinguer src et alt et remplacer une image."
        }
      ],
      "blocks": [
        {
          "type": "lesson",
          "id": "depart",
          "title": "1 — Le navigateur doit retrouver un fichier",
          "paragraphs": [
            "Tu vas afficher un dessin enregistré dans un dossier et créer un lien qui ouvre ce même dessin. Le résultat attendu est une image visible et un lien qui mène au bon fichier.",
            "Un fichier contient des données ; un dossier sert à ranger des fichiers. Une extension comme .html ou .svg fait partie du nom et indique un type de fichier. Le dessin fourni est un SVG : une image que le navigateur sait afficher, sans devoir en écrire le code.",
            "Utilise ton dossier atelier-web ou crée une copie de travail. Il te faut un éditeur de texte, un navigateur et l’accès aux dossiers. Travaille sans IA ; une aide pour déplacer un fichier peut rester séparée de ton raisonnement sur le chemin.",
            "Dans CodePen, écrire images/carre-bleu.svg ne donne pas accès à un dossier de ton ordinateur. Ici, les essais se font dans tes fichiers locaux. Sans accès aux fichiers, tu peux raisonner sur l’arbre, mais l’essai de chargement restera à faire dans cet environnement."
          ]
        },
        {
          "type": "callout",
          "id": "ressource",
          "title": "Récupère le dessin fourni",
          "tone": "neutral",
          "text": "Dans Images HTML, sous le carré bleu, utilise « Télécharger pour un projet local », pas « Copier uniquement la source ». Le fichier téléchargé doit s’appeler carre-bleu.svg. Reviens ensuite à ces consignes avec le bouton Retour du navigateur. Le dessin existe déjà : inutile de chercher une image ailleurs.",
          "moduleLink": {
            "text": "Images HTML",
            "moduleId": "html-images"
          }
        },
        {
          "type": "lesson",
          "id": "arbre",
          "title": "2 — Ton dossier de départ",
          "paragraphs": [
            "Si tu n’as pas encore de dossier de travail, crée atelier-web, ouvre-le dans VS Code avec Fichier → Ouvrir le dossier, puis crée un fichier nommé index.html. Son contenu complet est fourni plus bas. Tu n’as pas besoin d’avoir fait le cours précédent pour disposer de ce cadre.",
            "Crée un dossier images à côté de index.html dans atelier-web. Place le fichier téléchargé carre-bleu.svg dans images. Vérifie son nom exact, y compris le tiret et l’extension.",
            "Si le téléchargement reste dans Téléchargements, la page ne le trouvera pas avec le chemin demandé. Déplace ou copie le fichier dans images. Ne modifie pas le dessin lui-même.",
            "L’arbre ci-dessous décrit les dossiers et fichiers, pas le HTML à copier. Les lignes décalées se trouvent à l’intérieur du dossier au-dessus."
          ],
          "code": "atelier-web/\n├── index.html\n└── images/\n    └── carre-bleu.svg"
        },
        {
          "type": "lesson",
          "id": "chemin",
          "title": "3 — Lire un chemin relatif",
          "paragraphs": [
            "Dans ce document, un chemin relatif part du dossier qui contient index.html. images/carre-bleu.svg signifie : entrer dans images, puis prendre carre-bleu.svg.",
            "On utilise / pour séparer les dossiers dans le chemin HTML, même sous Windows. Ne copie pas le chemin complet de ton ordinateur : il ne désignerait pas la même chose sur un autre poste.",
            "Garde les mêmes lettres, majuscules/minuscules et extensions que les fichiers. Certains systèmes tolèrent une différence de casse, d’autres non. Utilise les noms simples de l’exemple.",
            "Un chemin ne déplace pas le fichier : il indique où le chercher. Si tu renommes ou déplaces le fichier, les références qui le désignent doivent être adaptées.",
            "Dans src, le navigateur charge l’image pour l’afficher. Dans href d’un lien a, il attend le clic pour ouvrir la destination. Ici, les deux chemins désignent volontairement le même dessin ; le texte du lien et alt ne sont pas des chemins."
          ]
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "Le fichier index.html",
          "paragraphs": [
            "Copie ce cadre dans ton fichier d’exercice si tu n’en as pas encore. Si tu connais déjà le document complet, tu peux insérer seulement le contenu entre body et /body dans ton cadre existant.",
            "head contient ici les réglages et le titre d’onglet ; body contient les éléments visibles. Pour comprendre ce cadre en détail, utilise Structure d’un document HTML dans les reprises en bas.",
            "Observe la même adresse dans src et href. Le h1, le paragraphe, le lien et l’image utilisent des notions déjà rencontrées. alt décrit le dessin, tandis que le texte du lien annonce ce qui s’ouvrira."
          ],
          "code": "<!doctype html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Mes ressources</title>\n</head>\n<body>\n  <h1>Une forme à observer</h1>\n  <p>Mon dessin est rangé dans le dossier images.</p>\n  <img src=\"images/carre-bleu.svg\" alt=\"Un carré bleu\">\n  <p><a href=\"images/carre-bleu.svg\">Ouvrir le dessin du carré</a></p>\n</body>\n</html>"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — Suivre le chemin",
          "intro": "Enregistre index.html puis ouvre-le dans le navigateur. Aucun serveur n’est nécessaire.",
          "items": [
            {
              "id": "verifier-dossiers",
              "text": "Compare tes fichiers avec l’arbre. Vérifie que le dessin est bien dans images, pas simplement visible dans les téléchargements.",
              "hints": [
                "Regarde l’emplacement réel du fichier.",
                "index.html et images doivent être dans le même dossier atelier-web.",
                "Compare les niveaux de l’arbre.",
                "Place carre-bleu.svg dans images puis garde le chemin images/carre-bleu.svg dans HTML."
              ]
            },
            {
              "id": "verifier-image",
              "text": "Vérifie que le carré s’affiche. Si ce n’est pas le cas, suis le chemin mot par mot depuis index.html."
            },
            {
              "id": "verifier-lien",
              "text": "Clique sur Ouvrir le dessin du carré : le navigateur doit afficher le dessin seul. Reviens à la page avec le bouton Retour."
            },
            {
              "id": "dire-chemin",
              "text": "Explique le chemin avec tes mots en montrant le dossier de départ, le dossier images et le fichier."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "mission",
          "title": "Mission autonome — Renommer sans perdre la ressource",
          "intro": "Garde le dossier images. Tu vas changer un nom, pas le dessin.",
          "items": [
            {
              "id": "renommer",
              "text": "Renomme le fichier carre-bleu.svg en forme.svg dans ton dossier. Avant d’actualiser la page, prédis ce qui ne fonctionnera plus."
            },
            {
              "id": "adapter",
              "text": "Adapte le code pour que l’image s’affiche de nouveau et que le lien ouvre le fichier renommé. Ne modifie ni le texte visible du lien ni alt, car le dessin reste le même.",
              "hints": [
                "Repère les deux références vers l’ancien nom.",
                "L’image et le lien ont chacun leur propre chemin.",
                "Compare src et href avec le nom forme.svg dans le dossier images.",
                "Remplace images/carre-bleu.svg par images/forme.svg dans src et dans href. Enregistre, actualise et teste le clic."
              ]
            },
            {
              "id": "expliquer-transfert",
              "text": "Explique pourquoi corriger uniquement l’image n’aurait pas réparé le lien."
            }
          ]
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie ton travail",
          "items": [
            {
              "id": "verifier-exactitude",
              "text": "Les noms de dossiers, fichiers et extensions correspondent exactement au code."
            },
            {
              "id": "verifier-affichage",
              "text": "L’image apparaît après enregistrement et actualisation."
            },
            {
              "id": "verifier-clic",
              "text": "Le lien ouvre bien le dessin, y compris après renommage."
            },
            {
              "id": "verifier-explication",
              "text": "Je peux retrouver le fichier depuis le dossier de index.html et distinguer chemin, alt et texte du lien."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Consolidation — Image absente, quelle cause ?",
          "intro": "Utilise maintenant ton fichier images/forme.svg. Crée une erreur volontaire puis répare-la.",
          "items": [
            {
              "id": "fichier-absent",
              "text": "Remplace uniquement src par forme.svg. L’image ne se charge plus. Explique où ce chemin cherche le dessin, puis répare-le.",
              "hints": [
                "Regarde le dossier qui contient index.html.",
                "Le chemin sans dossier cherche forme.svg à côté de index.html.",
                "Compare avec l’arbre : le dessin est dans images.",
                "Rétablis images/forme.svg dans src ; ne déplace pas le dessin pour masquer l’erreur de chemin."
              ]
            },
            {
              "id": "diagnostic-ressource",
              "text": "Si le chemin paraît correct mais que l’image reste absente, ouvre directement le fichier depuis l’explorateur. S’il ne s’ouvre pas non plus, vérifie le téléchargement avant d’accuser le HTML."
            },
            {
              "id": "expliquer-erreur",
              "text": "Explique la différence entre un fichier absent et un chemin qui cherche au mauvais endroit."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "bonus-explication",
          "title": "Bonus — Un niveau de dossier supplémentaire",
          "paragraphs": [
            "Facultatif : un chemin peut traverser plusieurs dossiers en les séparant par /. Dans media/images/forme.svg, on entre d’abord dans media, puis images, puis on ouvre forme.svg.",
            "Pour essayer sans perdre ton travail, fais une copie de ton dossier atelier-web avec son contenu. Dans cette copie, crée media puis déplace images à l’intérieur. Garde index.html à la racine."
          ],
          "code": "atelier-web-copie/\n├── index.html\n└── media/\n    └── images/\n        └── forme.svg"
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Adapte les deux références",
          "intro": "Ce bonus n’est pas obligatoire pour continuer vers une feuille de style.",
          "items": [
            {
              "id": "bonus-chemins",
              "text": "Dans la copie du projet, adapte le chemin de l’image et celui du lien, puis vérifie les deux.",
              "hints": [
                "Pars du dossier de index.html.",
                "Traverse chaque dossier dans l’ordre.",
                "Compare avec l’arbre du bonus.",
                "Utilise media/images/forme.svg dans src et href."
              ]
            },
            {
              "id": "bonus-explication",
              "text": "Explique le nouveau chemin sans montrer d’abord le code. Garde le projet de base pour l’activité suivante."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Reconstituer un chemin relatif à partir du dossier du document HTML et de l’emplacement réel de la ressource.",
        "Adapter src et href après un renommage sans confondre leurs rôles ni modifier inutilement alt.",
        "Tester le chargement et le clic séparément ; expliquer pourquoi une seule référence corrigée ne suffit pas.",
        "Distinguer fichier absent, fichier illisible et mauvais chemin, avec le niveau d’aide observé."
      ],
      "consolidation": [
        {
          "moduleId": "html-fichiers-chemins",
          "blockId": "reparer",
          "label": "Retrouver l’origine d’une image absente"
        },
        {
          "moduleId": "html-document",
          "label": "Comprendre le cadre du fichier si nécessaire",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre dans une petite page."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises dans le code."
            }
          ]
        },
        {
          "moduleId": "html-images",
          "blockId": "depannage",
          "label": "Reprendre src et alt"
        },
        {
          "moduleId": "html-liens",
          "label": "Reprendre texte et destination du lien"
        },
        {
          "moduleId": "css-decouverte",
          "label": "Préparer la suite CSS si une règle reste difficile",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre dans une petite page."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises dans le code."
            }
          ]
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "html-fichiers-chemins",
          "blockId": "bonus-explication",
          "label": "Essayer un dossier supplémentaire",
          "prerequisiteSkills": [
            {
              "skillId": "html.paths",
              "expectation": "Savoir retrouver une ressource dans un sous-dossier."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "css-feuille-style",
          "label": "Relier une feuille de style — si document, chemins et règle CSS sont compris",
          "prerequisiteSkills": [
            {
              "skillId": "html.document",
              "expectation": "Repérer head et body dans un document complet."
            },
            {
              "skillId": "html.paths",
              "expectation": "Relier un chemin relatif à un fichier réellement présent."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une règle CSS et modifier une couleur ; reprendre Découvrir le CSS si nécessaire."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire raisonner sur l’emplacement réel d’une ressource et modifier ses références, au lieu d’essayer des noms au hasard.",
        "entryDiagnosis": [
          "Demander à quoi servent href, src et alt. Attendu : destination du lien, source de l’image, texte alternatif.",
          "Faire montrer index.html et un dossier dans l’explorateur. Si l’action de déplacement est difficile, l’accompagner en laissant l’élève annoncer le chemin.",
          "Vérifier le document complet ou fournir le cadre. Ce cours ne doit pas supposer qu’un fichier cadre copié est déjà compris."
        ],
        "preparation": [
          "Télécharger le carré SVG depuis Images HTML, sans dépendance à un site d’images externe. Vérifier que le fichier s’ouvre directement.",
          "Préparer un dossier de travail ou sa copie. Vérifier le nom complet : éviter carre-bleu (1).svg ou une extension ajoutée par erreur.",
          "Faire les essais avec de vrais fichiers locaux. Le panneau HTML de CodePen ne charge pas automatiquement un dossier personnel images."
        ],
        "why": "Le code indique où chercher, il ne transporte pas un fichier local. Le lien entre rangement et référence est nécessaire pour des images et, ensuite, une feuille de style.",
        "discoverySpeech": [
          "« Nous partons du dossier de index.html. Le premier mot images nous fait entrer dans un dossier, le deuxième nom nous donne le fichier. Montre le trajet avant de taper. »",
          "« src demande d’afficher le dessin ; href attend notre clic pour l’ouvrir. Deux utilisations peuvent pointer vers la même ressource. »",
          "« Si je renomme le fichier, les mots du code ne changent pas tout seuls. Que faudra-t-il adapter ? Prédis le résultat avant d’actualiser. »",
          "« Un dessin absent ne prouve pas une erreur HTML : cherchons d’abord si le fichier existe à l’endroit indiqué. »"
        ],
        "example": {
          "target": {
            "moduleId": "html-fichiers-chemins",
            "blockId": "exemple",
            "label": "Une ressource chargée et ouverte par un lien"
          },
          "comments": [
            "Afficher l’arbre puis suivre images/carre-bleu.svg depuis index.html. Dire le trajet avant la saisie.",
            "Comparer les valeurs de src et href, puis alt et le texte visible du lien. La description et le texte ne sont pas des adresses.",
            "Ouvrir le dessin par le lien puis revenir à la page. Cela teste deux usages, pas seulement le rendu de img."
          ]
        },
        "questions": [
          {
            "question": "Pourquoi carre-bleu.svg seul ne fonctionne-t-il pas dans l’arbre de départ ?",
            "answer": "Il serait cherché à côté de index.html, alors que le fichier est rangé dans images."
          },
          {
            "question": "Après renommage, pourquoi le lien est-il encore cassé alors que l’image apparaît ?",
            "answer": "src et href sont deux références indépendantes. La seconde pointe encore vers l’ancien nom."
          },
          {
            "question": "Le dessin n’a pas changé : faut-il changer alt quand on renomme le fichier ?",
            "answer": "Non : le chemin change, pas l’information donnée par l’image. Garder un alt adapté au dessin."
          },
          {
            "question": "Pourquoi ne pas copier le chemin complet de mon ordinateur ?",
            "answer": "Ce chemin décrit un emplacement sur ce poste. Le chemin relatif décrit l’organisation du projet et reste cohérent si le dossier complet est déplacé."
          },
          {
            "question": "Le fichier ne s’ouvre pas même depuis l’explorateur. Est-ce une faute dans src ?",
            "answer": "Pas nécessairement : vérifier la présence et la validité du fichier téléchargé avant de corriger le HTML."
          },
          {
            "question": "Pourquoi respecter les majuscules alors que cela marche parfois sur mon poste ?",
            "answer": "Les environnements ne traitent pas tous la casse de la même façon. Utiliser exactement le nom réel évite un problème lors d’un changement d’environnement."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "html-fichiers-chemins",
          "blockId": "guide",
          "label": "Parcourir le dossier et tester les deux usages"
        },
        "independentActivity": {
          "moduleId": "html-fichiers-chemins",
          "blockId": "mission",
          "label": "Renommer et réparer les deux références"
        },
        "differentiation": [
          "Aider au déplacement ou au renommage si nécessaire, puis laisser l’élève dicter le chemin et choisir src/href.",
          "Si le raisonnement est fragile, partir d’un seul sous-dossier et tracer le trajet sur l’arbre. Le bonus à deux niveaux reste facultatif.",
          "Pour vérifier le transfert, donner un nom de fichier nouveau et demander quelles références changent sans nommer les attributs."
        ],
        "commonErrors": [
          {
            "symptom": "Le fichier téléchargé n’est pas au bon endroit.",
            "helps": [
              "Ouvrir son emplacement réel.",
              "Comparer avec le dossier images du projet.",
              "Relire l’arbre, pas seulement l’adresse écrite.",
              "Déplacer/copier le SVG dans images puis vérifier son nom complet."
            ]
          },
          {
            "symptom": "Le chemin perd le nom du dossier.",
            "helps": [
              "Faire partir le trajet de index.html.",
              "Montrer que le dessin est un niveau plus bas.",
              "Comparer forme.svg et images/forme.svg.",
              "Rétablir le dossier dans le chemin puis tester."
            ]
          },
          {
            "symptom": "Le chemin est bon dans src mais pas dans href.",
            "helps": [
              "Tester séparément affichage et clic.",
              "Retrouver les deux anciennes références.",
              "Comparer leur valeur avec le nom du fichier.",
              "Mettre images/forme.svg dans les deux, puis refaire les deux tests."
            ]
          }
        ],
        "notes": [
          "Correction de mission : après renommage, src et href valent images/forme.svg ; alt reste Un carré bleu. Le texte du lien peut rester identique.",
          "Correction de consolidation : forme.svg seul cherche au mauvais niveau ; rétablir images/forme.svg. Correction du bonus : media/images/forme.svg dans les deux attributs.",
          "Les chemins s’appliquent ici au document sans élément base. Ne pas introduire bases d’URL, chemins racine ou remontées de dossiers pour résoudre cet exercice simple.",
          "Observer autonome/avec modèle/avec aide ; séparer maîtrise du chemin et manipulation du système de fichiers. Aucun nouveau dispositif de suivi.",
          "Avant la feuille de style, vérifier head/body et une règle CSS. Proposer les reprises correspondantes sans imposer le bonus ni recommencer le parcours.",
          "Aucune navigation multipage n’est enseignée ici : le lien ouvre une ressource image. Les ressources et noms sont génériques, sans donnée personnelle."
        ],
        "quickConductor": [
          "Vérifier liens/images et accès aux dossiers.",
          "Télécharger le dessin et construire l’arbre.",
          "Faire lire le trajet puis tester image et lien.",
          "Renommer le fichier, prédire puis réparer les deux références.",
          "Consolider une cause précise, ou proposer le bonus de dossier.",
          "Vérifier les prérequis CSS avant la suite et noter le niveau d’aide."
        ],
        "references": [
          {
            "title": "MDN — Manipuler des fichiers",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          },
          {
            "title": "MDN — Résolution des références relatives",
            "url": "https://developer.mozilla.org/en-US/docs/Web/API/URL_API/Resolving_relative_references"
          }
        ]
      }
    },
    "css-feuille-style": {
      "domainId": "web",
      "title": "Relier une feuille de style",
      "type": "lesson",
      "theme": "debutants",
      "objective": "Relier un fichier CSS à une page HTML et vérifier que ses règles sont bien chargées.",
      "skillIds": [
        "css.stylesheets"
      ],
      "prerequisiteSkills": [
        {
          "skillId": "html.document",
          "expectation": "Repérer head et body dans un document complet."
        },
        {
          "skillId": "html.paths",
          "expectation": "Relier un chemin relatif à un fichier réellement présent."
        },
        {
          "skillId": "css.colors",
          "expectation": "Lire une règle CSS et modifier une couleur ; reprendre Découvrir le CSS si nécessaire."
        }
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "prerequis-css",
          "title": "Avant de commencer — La règle CSS",
          "tone": "neutral",
          "text": "Tu dois pouvoir expliquer h1 { color: blue; } et modifier sa couleur. Si tu hésites encore entre sélecteur, propriété et valeur, reprends Découvrir le CSS puis utilise Retour dans ton navigateur pour revenir ici. Les liens de reprise du document et des chemins sont aussi disponibles en bas.",
          "moduleLink": {
            "text": "Découvrir le CSS",
            "moduleId": "css-decouverte"
          }
        },
        {
          "type": "lesson",
          "id": "depart",
          "title": "1 — Deux fichiers, deux rôles",
          "paragraphs": [
            "Tu vas obtenir un titre bleu dont la couleur est définie dans un fichier style.css séparé. Puis tu modifieras ce fichier et vérifieras que la page suit bien le changement.",
            "Le fichier index.html conserve le contenu et son cadre. Le fichier style.css contient seulement les règles CSS, sans balises HTML. Une feuille externe est un fichier séparé de la page, pas forcément un fichier sur Internet.",
            "CodePen relie son panneau CSS à l’aperçu pour toi. Les essais de ce module se font avec de vrais fichiers locaux dans un éditeur comme VS Code. Tu n’as pas à coller link dans le panneau HTML de CodePen ni à téléverser un fichier.",
            "Utilise un nouveau dossier atelier-style. Tu gardes ainsi tes exercices précédents. Aucun serveur ni publication n’est requis. Travaille sans IA ; si tu as besoin d’aide pour les fichiers, distingue cette manipulation de l’explication du lien HTML/CSS."
          ]
        },
        {
          "type": "lesson",
          "id": "liaison",
          "title": "2 — La ligne qui relie HTML et CSS",
          "paragraphs": [
            "Ajoute cette ligne dans head du document. link indique une ressource liée ; rel=\"stylesheet\" précise qu’il s’agit d’une feuille de style. href donne le chemin vers le fichier CSS.",
            "Ici style.css est dans le même dossier que index.html, donc son nom suffit. Ne l’écris pas styles.css : le nom doit être exactement celui du fichier créé.",
            "link ne produit pas un lien cliquable dans la page, contrairement à a. Elle n’entoure pas de contenu et n’a pas de balise fermante.",
            "Le navigateur doit trouver le fichier ET une règle correspondant aux éléments HTML. Un bon chemin ne corrige pas une règle qui cible un élément absent."
          ],
          "code": "<link rel=\"stylesheet\" href=\"style.css\">"
        },
        {
          "type": "lesson",
          "id": "arbre",
          "title": "Le dossier de cet exercice",
          "paragraphs": [
            "Crée les deux fichiers dans atelier-style. Vérifie les extensions .html et .css : un fichier style.css.txt n’est pas celui demandé."
          ],
          "code": "atelier-style/\n├── index.html\n└── style.css"
        },
        {
          "type": "lesson",
          "id": "html",
          "title": "index.html — Le document complet",
          "paragraphs": [
            "Copie ce document dans index.html. Repère link dans head et h1 dans body. Cet essai ne contient aucun ancien bloc style : ainsi, le résultat dépend du fichier CSS externe."
          ],
          "code": "<!doctype html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Mon premier style externe</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Une page reliée</h1>\n  <p>Le contenu et son style sont dans deux fichiers.</p>\n</body>\n</html>"
        },
        {
          "type": "lesson",
          "id": "css",
          "title": "style.css — Seulement des règles",
          "paragraphs": [
            "Copie cette règle dans style.css. N’ajoute ni <style>, ni </style>, ni cadre HTML dans ce fichier. Le sélecteur h1 et color ont le même sens que dans le panneau CSS de CodePen."
          ],
          "code": "h1 {\n  color: blue;\n}"
        },
        {
          "type": "tasks",
          "id": "guide",
          "title": "Exercice guidé — Prouver que la feuille est chargée",
          "intro": "Enregistre les deux fichiers. Ouvre index.html dans le navigateur, pas style.css.",
          "items": [
            {
              "id": "observer",
              "text": "Vérifie que le h1 est bleu. La présence du nom style.css dans le dossier ne suffit pas : son effet doit être visible."
            },
            {
              "id": "modifier-css",
              "text": "Dans style.css seulement, remplace blue par purple (violet). Enregistre ce fichier puis actualise index.html dans le navigateur."
            },
            {
              "id": "expliquer-liaison",
              "text": "Explique pourquoi la couleur a changé sans modifier les mots dans index.html. Montre le chemin qui permet au navigateur de retrouver le CSS."
            },
            {
              "id": "verifier-erreur",
              "text": "Si le titre ne change pas, vérifie d’abord enregistrement et chemin, puis le sélecteur et la déclaration. Utilise la consolidation si nécessaire.",
              "hints": [
                "Vérifie que tu regardes le bon index.html.",
                "Compare le nom du CSS à href dans link.",
                "Compare ensuite la règle avec le h1 présent.",
                "Rétablis rel=\"stylesheet\", href=\"style.css\" et h1 { color: purple; }, puis enregistre les deux fichiers et actualise."
              ]
            }
          ]
        },
        {
          "type": "tasks",
          "id": "mission",
          "title": "Mission autonome — Retrouver la bonne feuille",
          "intro": "Après l’essai violet, fais une modification de nom, puis une nouvelle règle. Essaie avant d’ouvrir les aides.",
          "items": [
            {
              "id": "renommer-feuille",
              "text": "Renomme style.css en theme.css dans ton dossier. Avant d’actualiser la page, prédis pourquoi le style va disparaître."
            },
            {
              "id": "reparer-liaison",
              "text": "Rétablis le style en modifiant uniquement la référence dans HTML, pas les règles de couleur.",
              "hints": [
                "Cherche la ligne qui désigne l’ancien fichier.",
                "Le contenu de theme.css n’a pas changé.",
                "Compare le nom réel avec href dans link.",
                "Remplace href=\"style.css\" par href=\"theme.css\" ; garde rel=\"stylesheet\". Enregistre index.html puis actualise."
              ]
            },
            {
              "id": "regle-paragraphe",
              "text": "Dans theme.css, ajoute une règle pour rendre le paragraphe vert foncé (darkgreen). Prédis quel élément changera, puis vérifie.",
              "hints": [
                "Le paragraphe est un p dans HTML.",
                "Écris une deuxième règle à côté de celle du h1, pas à l’intérieur.",
                "Reprends la syntaxe sélecteur, accolades, propriété et valeur.",
                "Ajoute p { color: darkgreen; } dans theme.css, enregistre puis actualise."
              ]
            },
            {
              "id": "expliquer-preuve",
              "text": "Montre comment tu peux prouver que c’est theme.css qui est utilisé : modifie une couleur dans ce fichier, sans changer le HTML."
            }
          ]
        },
        {
          "type": "checklist",
          "id": "verification",
          "title": "Vérifie ton travail",
          "items": [
            {
              "id": "verifier-separation",
              "text": "Mon HTML et mon CSS sont dans deux fichiers distincts ; le CSS ne contient pas de balises style."
            },
            {
              "id": "verifier-link",
              "text": "link se trouve dans head, avec rel=\"stylesheet\" et le chemin exact du fichier."
            },
            {
              "id": "verifier-changement",
              "text": "Une modification enregistrée dans le CSS apparaît après actualisation du HTML."
            },
            {
              "id": "verifier-explication",
              "text": "Je distingue le rôle du chemin de celui du sélecteur et de la déclaration."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Consolidation — Chemin ou règle ?",
          "intro": "Pars de ta version avec theme.css et les règles h1 et p. Fais les deux essais séparément, en réparant le premier avant le second.",
          "items": [
            {
              "id": "mauvais-fichier",
              "text": "Dans link, remplace temporairement theme.css par absent.css. Observe que les couleurs de la feuille disparaissent. Corrige seulement le chemin.",
              "hints": [
                "Le fichier demandé existe-t-il dans le dossier ?",
                "Un chemin incorrect empêche de charger toute cette feuille.",
                "Compare absent.css avec le nom réel.",
                "Rétablis href=\"theme.css\" puis enregistre et actualise."
              ]
            },
            {
              "id": "mauvais-selecteur",
              "text": "Garde le bon chemin. Dans le CSS, remplace seulement le sélecteur h1 par h2. Le titre n’est plus coloré, mais le paragraphe l’est encore. Explique, puis répare.",
              "hints": [
                "Vérifie quels éléments existent dans body.",
                "La feuille est chargée : la règle p agit encore.",
                "Le h2 n’existe pas dans cet exemple ; sa règle ne choisit pas le h1.",
                "Remets h1 comme sélecteur. Le chemin n’avait pas besoin d’être changé."
              ]
            },
            {
              "id": "distinguer-causes",
              "text": "Explique la différence entre une feuille introuvable et une règle qui ne sélectionne pas le bon élément."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "bonus-explication",
          "title": "Bonus — Ranger le CSS dans un dossier",
          "paragraphs": [
            "Facultatif : fais une copie du projet. Crée un dossier css à côté de index.html puis déplace theme.css dedans.",
            "Depuis index.html, le chemin devient css/theme.css : même raisonnement qu’avec les images. Les règles dans le fichier CSS ne changent pas. Adapte seulement href dans link.",
            "Ce rangement est un essai, pas une obligation pour réussir le module."
          ],
          "code": "atelier-style-copie/\n├── index.html\n└── css/\n    └── theme.css"
        },
        {
          "type": "tasks",
          "id": "bonus",
          "title": "Vérifie ce nouvel emplacement",
          "intro": "Travaille dans la copie et garde la version de base.",
          "items": [
            {
              "id": "bonus-deplacer",
              "text": "Adapte le chemin vers la feuille déplacée, puis vérifie les couleurs du titre et du paragraphe.",
              "hints": [
                "Pars du dossier de index.html.",
                "Entre dans le dossier css avant le nom du fichier.",
                "Compare avec l’arbre du bonus.",
                "Utilise <link rel=\"stylesheet\" href=\"css/theme.css\"> dans head."
              ]
            },
            {
              "id": "bonus-predire",
              "text": "Explique pourquoi le déplacement du fichier ne change pas les sélecteurs h1 et p à l’intérieur."
            }
          ]
        }
      ],
      "masteryCriteria": [
        "Relier une feuille externe avec link dans head en expliquant rel et href.",
        "Garder le CSS sans balises HTML et prouver le chargement par une modification enregistrée.",
        "Adapter le chemin après renommage ou déplacement sans modifier inutilement les règles.",
        "Distinguer fichier non chargé et sélecteur incorrect à partir d’un essai concret, au-delà d’une copie fonctionnelle."
      ],
      "consolidation": [
        {
          "moduleId": "css-feuille-style",
          "blockId": "reparer",
          "label": "Distinguer chemin et sélecteur"
        },
        {
          "moduleId": "html-document",
          "label": "Reprendre head et body",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre dans une petite page."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises dans le code."
            }
          ]
        },
        {
          "moduleId": "html-fichiers-chemins",
          "label": "Reprendre les chemins relatifs",
          "prerequisiteSkills": [
            {
              "skillId": "html.links",
              "expectation": "Distinguer le texte cliquable de sa destination href."
            },
            {
              "skillId": "html.images",
              "expectation": "Distinguer src et alt et remplacer une image."
            }
          ]
        },
        {
          "moduleId": "css-decouverte",
          "label": "Reprendre la lecture d’une règle",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre dans une petite page."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises dans le code."
            }
          ]
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "css-feuille-style",
          "blockId": "bonus-explication",
          "label": "Ranger la feuille dans un sous-dossier",
          "prerequisiteSkills": [
            {
              "skillId": "css.stylesheets",
              "expectation": "Relier une feuille et prouver son chargement."
            },
            {
              "skillId": "html.paths",
              "expectation": "Lire un chemin vers un sous-dossier."
            }
          ]
        }
      ],
      "nextSteps": [
        {
          "moduleId": "html-parent-enfants",
          "label": "Continuer avec Parent et enfants si l’assemblage HTML est compris",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre dans une petite page."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises dans le code."
            }
          ]
        },
        {
          "moduleId": "css-classes-couleurs",
          "label": "Reprendre les classes si tu ne sais pas encore cibler un groupe",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre dans une petite page."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises dans le code."
            },
            {
              "skillId": "css.colors",
              "expectation": "Lire une règle CSS et distinguer texte et fond."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire établir et vérifier une liaison HTML/CSS, puis diagnostiquer une ressource introuvable sans la confondre avec une règle inefficace.",
        "entryDiagnosis": [
          "Demander de retrouver head et body. Si le cadre est seulement copié, reprendre Structure d’un document HTML.",
          "Présenter un fichier rangé dans un sous-dossier et demander son chemin depuis index.html. Reprendre Fichiers et chemins si nécessaire.",
          "Faire lire h1 { color: blue; } : attendu, cible h1, propriété color et valeur blue. Reprendre Découvrir le CSS si la règle n’est pas comprise ; les classes ne sont pas requises dans ce premier exemple."
        ],
        "preparation": [
          "Créer un nouveau dossier ou une copie ; éviter un ancien style interne qui masquerait la preuve de chargement externe.",
          "Vérifier que l’élève peut enregistrer deux fichiers et actualiser le navigateur sur index.html. Pas de serveur ni extension nécessaire.",
          "Préparer les deux extraits visibles ; ne pas demander un partage d’écran pour accéder à une consigne indispensable."
        ],
        "why": "Séparer les règles et le contenu rend le rôle de chaque fichier explicite. Savoir prouver le chargement évite de corriger au hasard une page qui n’utilise pas le bon CSS.",
        "discoverySpeech": [
          "« Dans CodePen, les panneaux sont reliés pour toi. Ici, nous devons dire au navigateur où trouver les règles. La ligne link dans head est cette indication. »",
          "« rel lui dit quel type de ressource nous relions ; href lui dit où elle se trouve. Cette ligne n’est pas un bouton ni un lien à cliquer dans la page. »",
          "« Pour prouver que ce fichier agit, changeons seulement sa couleur de titre, enregistrons et actualisons. L’existence du fichier ne suffit pas comme preuve. »",
          "« Une feuille introuvable et une règle qui vise h2 au lieu de h1 ne sont pas le même problème. Observons ce qui continue de fonctionner avant de corriger. »"
        ],
        "example": {
          "target": {
            "moduleId": "css-feuille-style",
            "blockId": "html",
            "label": "Localiser la liaison dans le document"
          },
          "comments": [
            "Pointer link dans head et lire rel/href séparément ; montrer les deux fichiers réels.",
            "Le h1 n’a pas besoin d’une classe pour correspondre à la règle h1 de ce module. Ne pas ajouter de prérequis de ciblage par classe.",
            "Faire passer blue à purple dans le fichier CSS, pas dans le HTML. Enregistrer puis actualiser pour observer la liaison."
          ]
        },
        "questions": [
          {
            "question": "Ouvre-t-on style.css pour voir la page ?",
            "answer": "Non, on ouvre index.html. Le navigateur charge la feuille référencée pour présenter ce document."
          },
          {
            "question": "Faut-il mettre <style> dans le fichier .css ?",
            "answer": "Non. Le fichier externe contient seulement les règles ; les balises style appartiennent à une autre façon d’intégrer du CSS dans HTML."
          },
          {
            "question": "Pourquoi le style disparaît-il après avoir renommé le fichier ?",
            "answer": "La référence HTML utilise encore l’ancien nom. Corriger href, pas les règles de couleur."
          },
          {
            "question": "Le paragraphe reste vert mais le titre perd sa couleur : le CSS est-il forcément introuvable ?",
            "answer": "Non. La règle du paragraphe agit : dans notre essai, la feuille est chargée et le sélecteur h2 ne correspond pas au h1. Rétablir h1."
          },
          {
            "question": "Un a href vers le fichier CSS remplacerait-il link ?",
            "answer": "Non : a créerait un lien cliquable. link avec rel=\"stylesheet\" indique au navigateur d’utiliser les règles pour le document."
          },
          {
            "question": "Le fichier existe et rien ne change. Que vérifier en premier ?",
            "answer": "Le fichier réellement ouvert, l’enregistrement, l’actualisation et le chemin. Ensuite seulement la correspondance du sélecteur et la déclaration."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "css-feuille-style",
          "blockId": "guide",
          "label": "Prouver le chargement par un changement de couleur"
        },
        "independentActivity": {
          "moduleId": "css-feuille-style",
          "blockId": "mission",
          "label": "Renommer puis enrichir la feuille"
        },
        "differentiation": [
          "Aider à créer/enregistrer les deux fichiers sans choisir à la place de l’élève le chemin à adapter.",
          "Si la règle est déjà maîtrisée, consacrer l’effort à la liaison et au diagnostic. Le bonus de dossier ne devient pas un prérequis obligatoire.",
          "Après réussite avec le modèle, demander un nouveau nom de feuille et une preuve de chargement sans citer href ou color."
        ],
        "commonErrors": [
          {
            "symptom": "Le fichier est nommé style.css.txt ou styles.css.",
            "helps": [
              "Afficher le nom complet dans l’éditeur ou l’explorateur.",
              "Comparer ce nom avec href.",
              "Reprendre l’arbre des deux fichiers.",
              "Rendre le nom et la référence identiques ; vérifier aussi rel=\"stylesheet\"."
            ]
          },
          {
            "symptom": "Les balises style ont été copiées dans le CSS externe.",
            "helps": [
              "Ouvrir le fichier CSS.",
              "Séparer balises HTML et règles.",
              "Comparer l’extrait style.css avec le document HTML.",
              "Garder seulement h1 { color: blue; } ou la couleur choisie dans le fichier externe."
            ]
          },
          {
            "symptom": "L’élève change le chemin pour réparer un mauvais sélecteur.",
            "helps": [
              "Vérifier si une autre règle fonctionne encore.",
              "Repérer le h1 du HTML et le h2 de l’essai.",
              "Comparer le cas absent.css avec le cas h2.",
              "Rétablir le sélecteur h1 sans toucher au chemin correct."
            ]
          }
        ],
        "notes": [
          "Solution de mission : après renommage, link utilise href=\"theme.css\" avec rel=\"stylesheet\" ; la feuille garde h1 { color: purple; } et ajoute p { color: darkgreen; }. Une autre couleur d’essai est acceptable si le changement est expliqué.",
          "Consolidation : absent.css coupe cette feuille ; h2 laisse la règle p fonctionner. Bonus : href=\"css/theme.css\" après déplacement, sans modifier les règles.",
          "Observer réussite autonome, avec modèle ou avec aide. Séparer manipulation de fichiers, compréhension du chemin et lecture d’une règle.",
          "La nouvelle compétence css.stylesheets ne modifie pas le sens ni les anciennes validations de css.selectors ou css.colors. Pas de validation automatique par chargement réussi.",
          "Le futur partage d’une feuille entre plusieurs pages n’est pas réalisé ici. Pas de publication, de framework ou de serveur nécessaire pour ces exercices.",
          "Pour poursuivre, proposer Parent et enfants ou une reprise des classes selon les acquis ; garder les liens ouverts et le professeur responsable de l’orientation."
        ],
        "quickConductor": [
          "Vérifier cadre HTML, chemins et règle simple.",
          "Créer les deux fichiers et expliquer link/rel/href.",
          "Prouver le chargement par une couleur modifiée.",
          "Faire renommer la feuille et rétablir la liaison.",
          "Comparer feuille absente et mauvais sélecteur.",
          "Proposer reprise, bonus ou suite ; relever séparément les aides."
        ],
        "references": [
          {
            "title": "MDN — Élément link",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link"
          },
          {
            "title": "MDN — Relier le CSS au document",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started"
          },
          {
            "title": "MDN — Résolution des références relatives",
            "url": "https://developer.mozilla.org/en-US/docs/Web/API/URL_API/Resolving_relative_references"
          }
        ]
      }
    },
    "web-projet-cartes": {
      "domainId": "web",
      "title": "Préparer un projet de cartes",
      "type": "practice",
      "objective": "Préparer une base de plusieurs cartes avant d'apprendre à les organiser avec Flexbox.",
      "skillIds": [
        "html.structure",
        "css.selectors",
        "css.borders",
        "css.spacing",
        "css.hover"
      ],
      "blocks": [
        {
          "type": "tasks",
          "title": "1 — Choisis ta base de travail",
          "intro": "Si tu possèdes déjà une page avec plusieurs cartes, ouvre-la pour l’utiliser. Sinon, ouvre CodePen et crée une base avec le HTML et le CSS de départ fournis ci-dessous. Aucun cours précédent n’est nécessaire.",
          "items": [
            {
              "id": "retrouver-projet",
              "text": "Ouvre ta page de cartes si tu en as une ; sinon, ouvre un nouveau CodePen et utilise la base de départ ci-dessous."
            }
          ],
          "id": "projet"
        },
        {
          "type": "details",
          "title": "Créer une base de départ si tu n’as pas de cartes",
          "blocks": [
            {
              "type": "lesson",
              "title": "HTML de départ",
              "code": "<div class=\"cartes\">\n  <div class=\"carte\">\n    <h2>Carte 1</h2>\n    <p>Premier contenu.</p>\n  </div>\n\n  <div class=\"carte\">\n    <h2>Carte 2</h2>\n    <p>Deuxième contenu.</p>\n  </div>\n\n  <div class=\"carte\">\n    <h2>Carte 3</h2>\n    <p>Troisième contenu.</p>\n  </div>\n</div>",
              "paragraphs": [
                "Recopie ce code dans la zone HTML de CodePen. Il contient un conteneur .cartes et trois .carte, chacune avec un titre et un paragraphe. Tu peux personnaliser leurs textes."
              ]
            },
            {
              "type": "lesson",
              "title": "CSS de départ",
              "code": ".cartes {\n  max-width: 800px;\n  margin: 20px auto;\n}\n\n.carte {\n  border: 2px solid #24324a;\n  padding: 20px;\n  margin: 10px;\n  border-radius: 12px;\n}\n\n.carte:hover {\n  background-color: #eeeeee;\n}",
              "paragraphs": [
                "Recopie ce code dans la zone CSS. Les cartes restent les unes sous les autres : cette base sert uniquement à préparer leur contenu et leur apparence. Survole une carte pour observer son changement de fond."
              ]
            }
          ],
          "id": "secours"
        },
        {
          "type": "lesson",
          "id": "role-checklist",
          "title": "À quoi sert la checklist ?",
          "paragraphs": [
            "La checklist vérifie seulement que ta base technique est prête. Cocher une case ne signifie pas que tu maîtrises déjà la notion : tu peux avoir utilisé le code de départ. Compare ta page et ton code avec chaque élément demandé."
          ]
        },
        {
          "type": "checklist",
          "title": "2 — Vérifie ta base de cartes",
          "items": [
            {
              "id": "html-structure",
              "text": "La page contient plusieurs éléments HTML bien organisés."
            },
            {
              "id": "classes",
              "text": "J'ai utilisé plusieurs classes CSS."
            },
            {
              "id": "trois-cartes",
              "text": "J'ai créé au moins 3 cartes."
            },
            {
              "id": "bordures",
              "text": "Mes cartes ont une bordure."
            },
            {
              "id": "padding",
              "text": "J'ai utilisé padding."
            },
            {
              "id": "margin",
              "text": "J'ai utilisé margin."
            },
            {
              "id": "radius",
              "text": "J'ai utilisé border-radius."
            },
            {
              "id": "hover",
              "text": "J'ai créé au moins un effet :hover."
            }
          ],
          "id": "verification"
        },
        {
          "type": "callout",
          "tone": "neutral",
          "title": "Point de vérification",
          "text": "Si tu réalises ce module pendant un cours, montre ton projet au professeur avant de continuer. Si tu travailles seul, vérifie que tous les éléments de la checklist sont présents avant de passer au module suivant.",
          "id": "pause"
        },
        {
          "type": "lesson",
          "id": "transition",
          "title": "Et ensuite ?",
          "paragraphs": [
            "Tes cartes sont maintenant prêtes. Dans le prochain module, tu vas apprendre à identifier leur parent et leurs enfants avant de les organiser avec Flexbox."
          ]
        }
      ],
      "theme": "avances",
      "bonus": "Ta base de travail est prête. Après le point de vérification, passe au module « Parent et enfants »."
    },
    "html-parent-enfants": {
      "domainId": "web",
      "title": "Parent et enfants",
      "type": "lesson",
      "objective": "Identifier le parent direct, les descendants et les éléments frères pour organiser une collection de cartes.",
      "skillIds": [
        "html.structure"
      ],
      "blocks": [
        {
          "type": "lesson",
          "id": "cours",
          "title": "Parent et enfants",
          "paragraphs": [
            "En HTML, on peut placer un élément à l’intérieur d’un autre. L’élément qui l’entoure immédiatement est son parent. L’élément placé juste à l’intérieur est son enfant direct.",
            "Observe les balises ouvrantes et fermantes : elles permettent de voir qui contient quoi. Les espaces au début des lignes rendent cette structure plus facile à lire.",
            "Dans les explications, .cartes désigne l’élément qui porte class=\"cartes\" et .carte désigne un élément qui porte class=\"carte\". Le point ne s’écrit pas dans l’attribut class.",
            "Une div est un conteneur qui peut regrouper d’autres éléments. Aucun CSS n’est nécessaire ici : les noms de classes servent à repérer les conteneurs.",
            "L’indentation (les espaces au début des lignes) facilite la lecture, mais ce sont les balises ouvrantes et fermantes qui définissent l’imbrication. Déplacer seulement les espaces ne change pas le parent."
          ]
        },
        {
          "type": "lesson",
          "id": "exemple",
          "title": "Observe ces deux cartes",
          "code": "<div class=\"cartes\">\n  <div class=\"carte\">\n    <h2>La forêt</h2>\n    <p>Un endroit pour se promener.</p>\n  </div>\n  <div class=\"carte\">\n    <h2>La montagne</h2>\n    <p>Un endroit pour admirer le paysage.</p>\n  </div>\n</div>"
        },
        {
          "type": "lesson",
          "id": "relations",
          "title": "Qui est le parent de qui ?",
          "paragraphs": [
            "Le conteneur .cartes est le parent des deux .carte : les .carte sont ses enfants directs.",
            "Dans chaque .carte, le h2 et le p sont les enfants directs de cette .carte.",
            "Les h2 et les p sont aussi à l’intérieur de .cartes, mais ils ne sont pas ses enfants directs : il y a une .carte entre les deux.",
            "Un même élément peut donc être un enfant et un parent : chaque .carte est enfant de .cartes, et parent de son h2 et de son p.",
            "Un descendant est un élément situé à l’intérieur, à n’importe quelle profondeur. Les h2 et p sont donc des descendants de .cartes, sans être ses enfants directs.",
            "Des éléments frères ont le même parent : les deux .carte sont sœurs ; le h2 et le p d’une même carte sont frères. Les h2 de deux cartes différentes ne sont pas frères."
          ]
        },
        {
          "type": "lesson",
          "id": "arborescence",
          "title": "La structure sous forme d’arbre",
          "paragraphs": [
            "Chaque décalage vers la droite descend d’un niveau. Les deux .carte sont au même niveau ; les titres et paragraphes sont un niveau plus bas."
          ],
          "code": ".cartes\n├── .carte\n│   ├── h2\n│   └── p\n└── .carte\n    ├── h2\n    └── p"
        },
        {
          "type": "tasks",
          "id": "observation",
          "title": "À toi d’observer",
          "intro": "Réponds avec tes mots avant d’ouvrir chaque indice. Tu peux ensuite comparer ta réponse avec la correction.",
          "items": [
            {
              "id": "parent-cartes",
              "text": "Quel est le parent des .carte ?",
              "hint": "Correction : leur parent est le conteneur .cartes, qui les entoure directement."
            },
            {
              "id": "enfants-directs",
              "text": "Quels sont les enfants directs de .cartes ?",
              "hint": "Correction : les deux éléments .carte. Aucun autre élément ne se trouve entre eux et .cartes."
            },
            {
              "id": "titre-direct",
              "text": "Le h2 est-il un enfant direct de .cartes ?",
              "hint": "Correction : non. Son parent direct est une .carte. Le h2 est à l’intérieur de .cartes, mais un niveau plus bas que ses enfants directs."
            },
            {
              "id": "parent-paragraphe",
              "text": "Quel est le parent du p ?",
              "hint": "Correction : c’est la .carte qui contient ce paragraphe. Chaque p a sa propre carte comme parent."
            },
            {
              "id": "freres",
              "text": "Les deux h2 de cartes différentes sont-ils frères ?",
              "hints": [
                "Cherche le parent direct de chaque h2.",
                "Ils n’ont pas le même parent : chacun appartient à sa carte.",
                "Compare les deux branches de l’arbre.",
                "Entoure un h2 et son p : ce sont eux qui partagent le même parent."
              ]
            }
          ]
        },
        {
          "type": "tasks",
          "id": "codepen",
          "title": "Dans CodePen — Ajoute une troisième carte",
          "intro": "Clique sur « Ouvrir CodePen » et travaille dans la zone HTML. Aucun CSS n’est nécessaire pour cet exercice.",
          "items": [
            {
              "id": "copier-structure",
              "text": "Recopie l’exemple des deux cartes dans la zone HTML."
            },
            {
              "id": "troisieme-carte",
              "text": "Ajoute une troisième .carte avec un h2 et un p, à côté des deux autres dans le même conteneur .cartes.",
              "hint": "Ajoute le nouveau bloc après la fermeture de la deuxième .carte et avant la dernière fermeture de .cartes. Ne le place pas à l’intérieur d’une autre carte."
            },
            {
              "id": "identifier-parent",
              "text": "Identifie mentalement le parent de ta nouvelle carte, puis le parent de son titre et de son paragraphe.",
              "hint": "Correction : la troisième .carte a pour parent .cartes. Son h2 et son p ont pour parent cette troisième .carte."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "defi",
          "title": "Mini-défi — Construis une galerie",
          "intro": "Sans recopier l’exemple, crée une nouvelle structure sous la précédente. Les noms galerie et photo sont seulement des noms de classes : tu n’as pas besoin d’ajouter d’images.",
          "items": [
            {
              "id": "galerie",
              "text": "Crée un conteneur div avec la classe galerie."
            },
            {
              "id": "photos",
              "text": "Place trois div avec la classe photo directement à l’intérieur de .galerie."
            },
            {
              "id": "contenu-photos",
              "text": "Ajoute un titre h2 ou un paragraphe p dans chacune des trois .photo."
            },
            {
              "id": "verifier-galerie",
              "text": "Vérifie que .galerie a trois enfants directs .photo, et que chaque titre ou paragraphe a une .photo comme parent."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Consolidation — Une carte au mauvais endroit",
          "intro": "Dans ton exemple, déplace volontairement la troisième carte à l’intérieur de la deuxième. Observe l’arbre que cela produit, puis répare.",
          "items": [
            {
              "id": "reparer-carte",
              "text": "Rends les trois .carte à nouveau sœurs, directement à l’intérieur de .cartes.",
              "hints": [
                "Repère les ouvertures et fermetures de la deuxième carte.",
                "La troisième carte doit commencer après la fermeture de la deuxième.",
                "L’arbre de départ montre deux branches. Ta troisième carte doit ajouter une troisième branche au même niveau.",
                "Coupe le bloc complet de la troisième carte puis colle-le avant la fermeture de .cartes, hors de la deuxième carte."
              ]
            },
            {
              "id": "expliquer-reparation",
              "text": "Explique pourquoi ajouter des espaces au début des lignes n’aurait pas suffi à changer le parent."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "regroupements",
          "title": "Bonus — Un groupe dans une carte",
          "intro": "Repars de tes cartes correctement placées.",
          "items": [
            {
              "id": "groupe-interne",
              "text": "Dans une carte, entoure le h2 et le p d’une nouvelle div portant class=\"description\"."
            },
            {
              "id": "parents-internes",
              "text": "Nomme le parent direct du h2, celui de .description et celui de .carte.",
              "hints": [
                "Suis un niveau à la fois.",
                "Le h2 est dans .description, qui est dans .carte.",
                "Compare avec la syntaxe repliée.",
                "Lis de l’intérieur vers l’extérieur : description → carte → cartes."
              ],
              "syntax": "<div class=\"cartes\">\n  <div class=\"carte\">\n    <div class=\"description\">\n      <h2>La forêt</h2>\n      <p>Un lieu à explorer.</p>\n    </div>\n  </div>\n</div>"
            }
          ]
        },
        {
          "type": "lesson",
          "id": "transition",
          "title": "Et ensuite ?",
          "paragraphs": [
            "Maintenant que tu sais identifier le parent et ses enfants, tu peux organiser une page en zones selon leur rôle. Si tu comprends aussi les classes CSS, tu peux explorer comment Flexbox organise les enfants d’un parent. Choisis la suite selon les prérequis indiqués ; les deux liens restent accessibles."
          ]
        }
      ],
      "theme": "avances",
      "prerequisiteSkills": [
        {
          "skillId": "html.text",
          "expectation": "Reconnaître une balise ouvrante et fermante dans un petit extrait."
        },
        {
          "skillId": "html.headings",
          "expectation": "Repérer les titres présents à l’intérieur d’une carte."
        }
      ],
      "masteryCriteria": [
        "Montrer le conteneur commun à plusieurs cartes et nommer ses enfants directs.",
        "Distinguer un enfant direct d’un descendant et reconnaître deux éléments frères.",
        "Ajouter une carte à l’intérieur du bon conteneur et expliquer sa position grâce aux balises."
      ],
      "consolidation": [
        {
          "moduleId": "html-parent-enfants",
          "blockId": "reparer",
          "label": "Réparer une carte mal placée"
        },
        {
          "moduleId": "html-titres-paragraphes",
          "label": "Reprendre titres et paragraphes avant les classes si nécessaire"
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "html-parent-enfants",
          "blockId": "regroupements",
          "label": "Créer un regroupement dans une carte"
        },
        {
          "moduleId": "html-parent-enfants",
          "blockId": "defi",
          "label": "Construire une galerie sans modèle"
        }
      ],
      "nextSteps": [
        {
          "moduleId": "html-zones",
          "label": "Organiser une page en zones si les regroupements sont compris",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Créer un titre principal et un sous-titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Créer un paragraphe et retrouver ses balises."
            },
            {
              "skillId": "html.structure",
              "expectation": "Identifier le parent direct d’un élément et fermer les conteneurs au bon endroit."
            }
          ]
        },
        {
          "moduleId": "css-flexbox",
          "label": "Flexbox — si structure et sélecteurs sont compris",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Identifier le parent et les enfants directs."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier class au sélecteur CSS et modifier une déclaration."
            }
          ]
        },
        {
          "moduleId": "css-classes-couleurs",
          "label": "Reprendre classes et sélecteurs avant Flexbox si nécessaire",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Savoir créer un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Savoir créer un paragraphe."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Faire lire l’imbrication HTML puis modifier une collection sans confondre parent direct, descendant et frère. La position doit pouvoir être expliquée à partir des balises.",
        "entryDiagnosis": [
          "Faire retrouver les ouvertures et fermetures d’un h2 et d’un p.",
          "Présenter deux éléments regroupés dans une div : demander ce qui les entoure immédiatement. Accepter une description simple avant le vocabulaire.",
          "Ne pas demander de CSS. Les noms de classes servent ici de repères dans le HTML."
        ],
        "preparation": [
          "Ouvrir l’exemple des deux cartes et son arborescence côte à côte si possible.",
          "Préparer une zone HTML de CodePen vide, sans CSS : la relation est structurelle, pas visuelle.",
          "Avoir le code de l’exemple disponible pour qu’une difficulté de copie ne bloque pas l’observation."
        ],
        "why": "Lire les regroupements permet de structurer une page en zones et, ensuite, d’organiser les enfants directs d’un conteneur avec Flexbox. L’élève doit savoir quels éléments le conteneur regroupe réellement.",
        "discoverySpeech": [
          "« Quelle boîte entoure les deux cartes ? Cherchons son ouverture et sa fermeture. »",
          "« Chaque carte contient aussi un titre et un paragraphe : elle est enfant du grand conteneur et parent de son propre contenu. »",
          "« Les espaces au début des lignes nous aident à lire. Mais déplacer les espaces ne déplace pas une carte : il faut déplacer ses balises et son contenu. »"
        ],
        "example": {
          "target": {
            "moduleId": "html-parent-enfants",
            "blockId": "exemple",
            "label": "Deux cartes dans un conteneur"
          },
          "comments": [
            "Suivre l’ouverture de .cartes jusqu’à sa fermeture, puis faire de même pour chaque .carte.",
            "Comparer avec l’arborescence : un niveau correspond à une relation parent/enfant direct.",
            "Les deux cartes sont sœurs. Le h2 est descendant du grand conteneur, mais son parent direct est une carte."
          ]
        },
        "questions": [
          {
            "question": "Les h2 sont-ils des enfants directs de .cartes ?",
            "answer": "Non, les .carte se trouvent entre les deux niveaux."
          },
          {
            "question": "Le h2 et le p d’une même carte sont-ils frères ?",
            "answer": "Oui, ils partagent le même parent direct."
          },
          {
            "question": "Deux h2 dans des cartes différentes sont-ils frères ?",
            "answer": "Non, leurs parents sont différents."
          },
          {
            "question": "Une troisième carte placée après la fermeture de .cartes appartient-elle au groupe ?",
            "answer": "Non : elle doit être à l’intérieur du conteneur."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "html-parent-enfants",
          "blockId": "codepen",
          "label": "Ajouter une troisième carte et expliquer sa place"
        },
        "independentActivity": {
          "moduleId": "html-parent-enfants",
          "blockId": "defi",
          "label": "Créer une galerie de trois éléments"
        },
        "differentiation": [
          "Si la lecture est fragile, faire repérer une paire de balises à la fois et accompagner le déplacement du bloc complet.",
          "Si l’élève réussit, demander le regroupement interne proposé en bonus puis une nouvelle arborescence. Le passage à Flexbox dépend de cette compréhension, pas de la rapidité."
        ],
        "commonErrors": [
          {
            "symptom": "La troisième carte est à l’intérieur de la deuxième.",
            "helps": [
              "Faire compter les enfants directs du grand conteneur.",
              "Cibler la fermeture de la deuxième carte.",
              "Comparer avec l’arbre initial à deux branches : la troisième carte ajoute une troisième branche au même niveau.",
              "Déplacer le bloc complet après cette fermeture, en restant à l’intérieur de .cartes."
            ]
          },
          {
            "symptom": "L’élève confond indentation et imbrication.",
            "helps": [
              "Demander quelle balise contient l’élément.",
              "Cibler les ouvertures et fermetures, pas les espaces.",
              "Comparer deux extraits identiques avec des indentations différentes.",
              "Remettre une indentation lisible après avoir expliqué les mêmes relations."
            ]
          },
          {
            "symptom": "Tous les éléments à l’intérieur sont appelés enfants directs.",
            "helps": [
              "Demander quel élément entoure immédiatement le titre.",
              "Cibler le niveau intermédiaire .carte.",
              "Comparer au chemin .cartes → .carte → h2.",
              "Faire nommer parent direct puis ancêtre, un niveau à la fois."
            ]
          }
        ],
        "notes": [
          "Une div est ici un conteneur générique. Le mot frère désigne des éléments de même parent, sans impliquer le même type de balise.",
          "La validation porte sur identifier, ajouter et expliquer. Une page visuellement correcte peut cacher une imbrication différente.",
          "Le bonus de regroupement interne prépare la distinction utile à Flexbox, sans exiger de nouvelle propriété CSS.",
          "Pour la suite Flexbox, vérifier aussi les sélecteurs CSS. S’ils restent fragiles, reprendre Classes et couleurs ; si nécessaire, reprendre d’abord titres et paragraphes. Les liens restent ouverts.",
          "Distinguer une réparation autonome, faite avec modèle ou accompagnée, dans l’observation ou la remarque existante ; aucune acquisition n’est déduite de la checklist."
        ],
        "quickConductor": [
          "Faire lire les deux cartes et repérer les paires de balises.",
          "Mettre en correspondance HTML et arborescence.",
          "Poser les questions enfant direct/descendant/frères.",
          "Accompagner l’ajout d’une carte, puis demander la galerie seul.",
          "Si nécessaire, réparer le mauvais conteneur ; sinon proposer un regroupement interne.",
          "Faire expliquer la position d’une carte ; conseiller Flexbox lorsque cette relation est comprise et les sélecteurs repérés."
        ],
        "references": [
          {
            "title": "MDN — Structure arborescente du document",
            "url": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
          }
        ]
      }
    },
    "css-flexbox": {
      "domainId": "web",
      "title": "Flexbox",
      "type": "lesson",
      "objective": "Organiser plusieurs éléments avec Flexbox et contrôler leur espacement et leur alignement.",
      "skillIds": [
        "css.flexbox"
      ],
      "blocks": [
        {
          "type": "callout",
          "id": "prerequis",
          "tone": "neutral",
          "title": "Avant de commencer",
          "moduleLink": {
            "text": "Préparer un projet de cartes",
            "moduleId": "web-projet-cartes"
          },
          "text": "Pour suivre ce module, prépare un conteneur .cartes contenant au moins trois éléments .carte. Si tu ne disposes pas encore de cette structure, commence par le module « Préparer un projet de cartes », accessible depuis l’accueil dans le parcours Avancés. Reviens ensuite ici avec ta base prête."
        },
        {
          "type": "lesson",
          "id": "apparence",
          "title": "Base fournie — Apparence et espace d’observation",
          "paragraphs": [
            "Si tu arrives avec uniquement du HTML, voici le CSS nécessaire pour le diagnostic et les essais. Copie-le avant les questions suivantes.",
            "Garde le HTML des trois cartes. Pour cet exercice, remplace le CSS de départ par la base ci-dessous ; ajoute ensuite les propriétés apprises dans la règle .cartes existante.",
            "Les bordures, couleurs, tailles et espaces intérieurs ci-dessous servent uniquement à rendre les cartes et leur conteneur visibles. min-height donne au conteneur de la place pour observer l’alignement. min-width évite que les cartes deviennent trop étroites.",
            "Tu n’as pas besoin de savoir recréer cette apparence pour commencer Flexbox. Copier ce CSS ne prouve pas que tu maîtrises ces propriétés. La marge des cartes est mise à zéro pour mieux observer gap.",
            "Dans ce module, tu apprends à manipuler display, flex-direction, gap, justify-content, align-items et flex-wrap."
          ],
          "code": ".cartes {\n  max-width: 900px;\n  min-height: 420px;\n  border: 2px dashed #52634a;\n}\n\n.carte {\n  box-sizing: border-box;\n  width: 160px;\n  min-width: 160px;\n  margin: 0;\n  padding: 12px;\n  border: 2px solid #52634a;\n  border-radius: 8px;\n  background-color: #f5f2e8;\n}"
        },
        {
          "type": "tasks",
          "id": "diagnostic",
          "title": "Diagnostic d’entrée — Que sais-tu expliquer ?",
          "intro": "Utilise le code de départ fourni juste au-dessus pour répondre. Si ton projet n’avait pas encore de CSS, copie d’abord cette base : un code absent n’est pas un sélecteur non compris.",
          "items": [
            {
              "id": "diag-parent",
              "text": "Montre le conteneur commun aux trois cartes et ses enfants directs."
            },
            {
              "id": "diag-classe",
              "text": "Dans la base fournie, retrouve la règle .cartes. Explique son lien avec class=\"cartes\" dans le HTML. Si le code est présent mais que tu ne sais pas expliquer ce lien, reprends Classes et couleurs CSS."
            },
            {
              "id": "diag-espaces",
              "text": "Repère les espaces présents dans le code de départ. Sais-tu lesquels sont à l’intérieur des cartes ou autour ? Si tu hésites, signale-le : tu peux utiliser la base fournie sans prétendre maîtriser ces propriétés."
            }
          ]
        },
        {
          "type": "lesson",
          "id": "cours",
          "title": "1 — Activer Flexbox sur le parent",
          "paragraphs": [
            "Le conteneur .cartes contient les éléments .carte. Ajoute display: flex dans sa règle CSS. Ses enfants directs deviennent les éléments organisés par Flexbox.",
            "Les h2 et p à l’intérieur d’une carte ne deviennent pas les enfants directs de .cartes. Mettre display: flex sur .carte organiserait le contenu de chaque carte, pas les cartes entre elles."
          ],
          "code": ".cartes {\n  display: flex;\n}",
          "demonstration": {
            "type": "flex-display",
            "title": "Observe — Active Flexbox",
            "intro": "Choisis le mode d’affichage du parent. Observe les cartes et la valeur qui change dans le code, puis reviens au premier choix pour comparer.",
            "controlLabel": "Affichage du parent",
            "previewLabel": ".cartes — le parent des trois cartes",
            "codeLabel": "Règle appliquée au parent",
            "cards": ["A", "B", "C"],
            "options": [
              {
                "value": "block",
                "label": "block — Sans Flexbox",
                "feedback": "Sans Flexbox : les trois cartes de cet exemple sont empilées."
              },
              {
                "value": "flex",
                "label": "flex — Avec Flexbox",
                "feedback": "Avec Flexbox : les mêmes cartes se placent côte à côte, dans le même ordre A, B, C."
              }
            ],
            "note": "Seule la propriété display du parent .cartes change, pas celle des enfants .carte. Les tailles, couleurs et marges de cette démonstration restent fixes ; le code affiche uniquement la règle que tu modifies."
          }
        },
        {
          "type": "lesson",
          "id": "axes",
          "title": "2 — Direction et axes",
          "paragraphs": [
            "Ajoute flex-direction: row au parent. Dans nos exemples en français, les cartes se suivent sur une ligne de gauche à droite : c’est l’axe principal. L’axe transversal lui est perpendiculaire.",
            "Remplace row par column : les cartes se suivent maintenant de haut en bas. L’axe principal devient vertical et l’axe transversal horizontal. Puis reviens à row.",
            "Les mots horizontal et vertical décrivent nos exemples avec une écriture horizontale. Retiens surtout : la direction choisie définit l’axe principal ; l’autre axe est perpendiculaire."
          ],
          "code": ".cartes {\n  display: flex;\n  flex-direction: row;\n}"
        },
        {
          "type": "lesson",
          "id": "espacement",
          "title": "3 — Régler gap",
          "paragraphs": [
            "Ajoute gap: 20px au parent. gap règle les gouttières entre les cartes ; il n’ajoute pas de marge extérieure autour de la collection.",
            "Teste 5px, 20px puis 30px. En column, l’écart suit la colonne. Avec plusieurs lignes, cette valeur s’applique aussi entre les lignes."
          ],
          "code": ".cartes {\n  display: flex;\n  gap: 20px;\n}"
        },
        {
          "type": "lesson",
          "title": "4 — Répartir avec justify-content",
          "paragraphs": [
            "justify-content répartit l’espace libre sur l’axe principal. Avec row dans notre exemple, il agit horizontalement ; avec column, verticalement.",
            "S’il ne reste pas de place libre, changer la répartition peut avoir peu ou pas d’effet. Pour tester en column, tu peux donner plus de hauteur au conteneur en changeant temporairement min-height: 420px en min-height: 800px.",
            "flex-start regroupe au début, flex-end à la fin, center au centre. space-between répartit l’espace libre entre les éléments ; space-around en met autour de chacun ; space-evenly crée des intervalles de répartition égaux, bords compris.",
            "Un gap reste présent : les valeurs de répartition peuvent ajouter de l’espace entre les cartes. Teste une valeur à la fois."
          ],
          "code": ".cartes {\n  display: flex;\n  gap: 20px;\n  justify-content: flex-start;\n}",
          "valuesTitle": "Valeurs de justify-content à tester",
          "values": [
            "flex-start",
            "flex-end",
            "center",
            "space-between",
            "space-around",
            "space-evenly"
          ],
          "id": "repartition"
        },
        {
          "type": "lesson",
          "id": "alignement",
          "title": "5 — Aligner avec align-items",
          "paragraphs": [
            "align-items place les cartes sur l’axe transversal : verticalement en row, horizontalement en column dans nos exemples.",
            "Teste flex-start, center puis flex-end. Dans notre conteneur plus haut que les cartes, observe leur placement. La valeur initiale stretch peut étirer les cartes sur cet axe si leur taille le permet.",
            "Reviens à row. Essaie justify-content: center et align-items: center ensemble : l’un agit sur l’axe principal, l’autre sur l’axe transversal."
          ],
          "code": ".cartes {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n}"
        },
        {
          "type": "lesson",
          "id": "retour-ligne",
          "title": "6 — Autoriser plusieurs lignes",
          "paragraphs": [
            "Par défaut, flex-wrap vaut nowrap : les cartes restent sur une seule ligne. Elles peuvent se rétrécir si leurs dimensions le permettent, ou déborder si elles ne tiennent pas.",
            "En row, réduis la largeur de l’aperçu. Ajoute flex-wrap: wrap : les cartes peuvent passer à la ligne suivante. Notre min-width fourni rend ce changement facile à observer.",
            "Chaque ligne est répartie séparément par justify-content. Cette observation est une première adaptation à l’espace disponible, pas une maîtrise complète du responsive."
          ],
          "code": ".cartes {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}"
        },
        {
          "type": "tasks",
          "title": "Mission jalon — Organiser une collection",
          "intro": "Utilise trois cartes avec un titre et un paragraphe. Procède par essais ; explique tes choix avec tes mots.",
          "items": [
            {
              "id": "cote-a-cote",
              "text": "Place les trois cartes côte à côte avec Flexbox.",
              "hint": "display: flex doit être placé sur le parent des cartes.",
              "syntax": ".cartes {\n  display: flex;\n}"
            },
            {
              "id": "gap",
              "text": "Ajoute un espace régulier entre les cartes avec gap.",
              "hint": "Essaie par exemple 10px, 20px puis 30px.",
              "syntax": ".cartes {\n  display: flex;\n  gap: 20px;\n}"
            },
            {
              "id": "justify-center",
              "text": "Centre les cartes avec justify-content."
            },
            {
              "id": "tester-justify",
              "text": "Teste au moins trois valeurs différentes de justify-content."
            },
            {
              "id": "choisir-justify",
              "text": "Choisis la valeur qui convient le mieux à ton projet."
            },
            {
              "id": "ameliorer-cartes",
              "text": "Facultatif : personnalise les textes et, avec les propriétés d’apparence que tu connais déjà, le design des cartes. Tu peux garder toute l’apparence fournie."
            },
            {
              "id": "mission-direction",
              "text": "Passe la collection en colonne puis remets-la en ligne. Explique ce qui change pour l’axe principal."
            },
            {
              "id": "mission-aligner",
              "text": "Aligne les cartes au centre sur l’axe transversal, puis au début."
            },
            {
              "id": "mission-wrap",
              "text": "Réduis l’aperçu et autorise le retour à la ligne. Explique au moins deux réglages que tu as choisis."
            }
          ],
          "id": "mission"
        },
        {
          "type": "lesson",
          "id": "reglages-observation",
          "title": "Réglages de départ pour vérifier et comparer",
          "paragraphs": [
            "Après la mission, utilise ces réglages pour la vérification de compréhension et le bonus à six cartes. Remplace les valeurs correspondantes dans tes règles existantes ; conserve le reste du CSS d’apparence.",
            "Le conteneur reçoit une largeur de 520px, limitée à l’espace disponible par max-width: 100%. Chaque carte reste large de 160px. Avec un écart de 20px, trois cartes tiennent sur une ligne de 520px ; six demandent plus de place.",
            "Pour comparer nettement, agrandis l’aperçu jusqu’à avoir au moins 524px disponibles (bordure comprise). Dans un aperçu plus étroit, moins de cartes tiendront par ligne. Pour la vérification à trois cartes en colonne, cette largeur laisse un espace visible de chaque côté lors du centrage."
          ],
          "code": ".cartes {\n  display: flex;\n  width: 520px;\n  max-width: 100%;\n  flex-direction: row;\n  gap: 20px;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: nowrap;\n}\n\n.carte {\n  box-sizing: border-box;\n  width: 160px;\n  min-width: 160px;\n}"
        },
        {
          "type": "tasks",
          "id": "comprehension",
          "title": "Vérifie ta compréhension — Choisis les réglages",
          "intro": "Garde trois cartes. Utilise les réglages de départ fournis juste avant cette activité. Essaie d’abord sans regarder les exemples de solution ; explique ensuite ce que tu as changé.",
          "items": [
            {
              "id": "consigne-sans-propriete",
              "text": "Mets les cartes en colonne, puis centre-les horizontalement dans leur conteneur. Explique tes choix et montre ce qui change quand tu annules seulement le centrage.",
              "hints": [
                "Repère le sens dans lequel les cartes se suivent et le sens dans lequel tu veux les centrer.",
                "Une fois les cartes en colonne, le centrage horizontal concerne l’autre axe.",
                "Compare avec les étapes « Direction et axes » et « Aligner avec align-items ».",
                "Change flex-direction en column et align-items en center sur .cartes. Avec flex-start à la place de center, observe le déplacement horizontal."
              ]
            },
            {
              "id": "expliquer-axes",
              "text": "Explique avec tes mots quel axe suit la colonne et quel axe permet ici le centrage horizontal."
            }
          ]
        },
        {
          "type": "tasks",
          "id": "reparer",
          "title": "Consolidation — Retrouver le bon élément et le bon axe",
          "intro": "Prends le temps de comparer avant de corriger.",
          "items": [
            {
              "id": "mauvais-parent",
              "text": "Imagine que display: flex a été mis sur .carte uniquement. Corrige pour organiser la collection.",
              "hints": [
                "Quels éléments veux-tu déplacer ensemble ?",
                "Leur parent commun doit porter display: flex.",
                "Compare avec l’étape 1.",
                "Retire display: flex de .carte et ajoute-le dans la règle .cartes. Vérifie les trois cartes."
              ]
            },
            {
              "id": "mauvais-axe",
              "text": "En column, tu veux centrer horizontalement les cartes mais justify-content: center ne le fait pas. Corrige.",
              "hints": [
                "Repère la direction et les deux axes.",
                "En column, l’axe horizontal est transversal.",
                "Compare avec l’étape align-items.",
                "Ajoute align-items: center au parent, puis compare avant et après."
              ]
            }
          ]
        },
        {
          "type": "tasks",
          "title": "Bonus — Étendre la collection",
          "intro": "Quand tu sais expliquer tes réglages, passe à six cartes et utilise à nouveau les réglages de départ fournis au-dessus. Ils remettent les cartes en ligne avant la comparaison.",
          "items": [
            {
              "id": "six-cartes",
              "text": "Duplique trois cartes pour en obtenir six au total. Utilise le conteneur de 520px, les cartes de 160px et gap: 20px du code fourni."
            },
            {
              "id": "tester-largeur",
              "text": "Avec flex-wrap: nowrap, observe les six cartes sur une seule ligne : elles dépassent du conteneur. Explique pourquoi 520px ne suffisent pas."
            },
            {
              "id": "wrap",
              "text": "Change uniquement flex-wrap de nowrap à wrap. À 520px de largeur disponible dans le conteneur, observe deux lignes de trois cartes. Repasse à nowrap puis à wrap et explique la différence.",
              "hint": "Conserve flex-direction: row, les dimensions et gap. Compare le nombre de lignes et le débordement.",
              "syntax": ".cartes {\n  flex-wrap: wrap;\n}"
            },
            {
              "id": "finaliser",
              "text": "Finalise les textes et, si tu les connais déjà, les couleurs, espacements et effets hover. Aucune nouvelle propriété d’apparence n’est exigée."
            }
          ],
          "id": "defi"
        },
        {
          "type": "tasks",
          "id": "navigation",
          "title": "Bonus — Une petite navigation",
          "intro": "Réutilise Flexbox dans un autre contexte. Si tu ne connais pas encore les liens, les éléments restent de simples textes ; tu n’as pas besoin d’ajouter de lien.",
          "items": [
            {
              "id": "menu-html",
              "text": "Crée un conteneur div class=\"navigation\" contenant trois paragraphes : Accueil, Activités et Contact."
            },
            {
              "id": "menu-css",
              "text": "Utilise .navigation comme sélecteur CSS. Place ses trois enfants en ligne, espace-les et choisis leur répartition.",
              "hints": [
                "Repère les trois enfants du même parent.",
                "Le sélecteur doit correspondre à class=\"navigation\".",
                "Compare avec .cartes en remplaçant seulement le nom du sélecteur.",
                "Ajoute display: flex, puis gap et justify-content, en testant après chaque ajout."
              ]
            },
            {
              "id": "menu-wrap",
              "text": "Autorise leur retour à la ligne et réduis l’aperçu. Explique ce que tu as réutilisé."
            }
          ]
        }
      ],
      "theme": "avances",
      "bonus": "Réutilise les réglages dans la petite navigation proposée en bonus, ou organise une deuxième collection de cartes. Ces activités ne valident pas automatiquement tes compétences.",
      "prerequisiteSkills": [
        {
          "skillId": "html.structure",
          "expectation": "Identifier le parent et les enfants directs d’une collection."
        },
        {
          "skillId": "css.selectors",
          "expectation": "Relier une classe HTML au bon sélecteur CSS et modifier une déclaration."
        }
      ],
      "masteryCriteria": [
        "Placer display: flex sur le conteneur commun et expliquer quels enfants il organise.",
        "Expliquer au moins deux réglages parmi direction, gap, répartition et alignement.",
        "À partir de « Mets les cartes en colonne, puis centre-les horizontalement », choisir les réglages et expliquer les deux axes.",
        "Observer une largeur réduite et autoriser le retour à la ligne lorsque les cartes ne tiennent plus."
      ],
      "consolidation": [
        {
          "moduleId": "css-flexbox",
          "blockId": "reparer",
          "label": "Corriger le parent ou l’axe"
        },
        {
          "moduleId": "html-parent-enfants",
          "blockId": "reparer",
          "label": "Revoir les regroupements"
        },
        {
          "moduleId": "html-titres-paragraphes",
          "label": "Reprendre titres et paragraphes avant les classes si nécessaire"
        },
        {
          "moduleId": "css-boites-espacements",
          "label": "Reprendre les espaces autour et dans les cartes si nécessaire",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Identifier le parent et le contenu d’une carte."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier une classe HTML à sa règle."
            },
            {
              "skillId": "css.colors",
              "expectation": "Distinguer texte et fond."
            }
          ]
        },
        {
          "moduleId": "css-dimensions-images",
          "label": "Reprendre les largeurs et proportions si les dimensions fournies restent floues",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Repérer la carte parent et l’image à l’intérieur."
            },
            {
              "skillId": "html.images",
              "expectation": "Insérer une source dans src et rédiger un alt adapté."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier les classes HTML aux règles CSS."
            },
            {
              "skillId": "css.spacing",
              "expectation": "Distinguer padding et margin et lire une bordure simple."
            }
          ]
        }
      ],
      "bonusActivities": [
        {
          "moduleId": "css-flexbox",
          "blockId": "navigation",
          "label": "Réutiliser Flexbox dans une navigation"
        },
        {
          "moduleId": "css-flexbox",
          "blockId": "defi",
          "label": "Étendre la collection"
        }
      ],
      "nextSteps": [
        {
          "moduleId": "css-flexbox",
          "blockId": "mission",
          "label": "Réinvestir dans une collection personnelle",
          "prerequisiteSkills": [
            {
              "skillId": "html.structure",
              "expectation": "Repérer le parent des cartes."
            },
            {
              "skillId": "css.selectors",
              "expectation": "Relier la classe HTML au sélecteur CSS."
            }
          ]
        },
        {
          "moduleId": "css-classes-couleurs",
          "label": "Reprendre les sélecteurs en cas de doute",
          "prerequisiteSkills": [
            {
              "skillId": "html.headings",
              "expectation": "Savoir créer un titre."
            },
            {
              "skillId": "html.text",
              "expectation": "Savoir créer un paragraphe."
            }
          ]
        }
      ],
      "teacherGuide": {
        "objective": "Amener l’élève à choisir le bon parent, raisonner sur les axes et régler une collection de cartes. Évaluer une modification expliquée, pas la copie d’un rendu.",
        "entryDiagnosis": [
          "Demander de montrer le parent commun et ses enfants directs. Si l’élève hésite, utiliser la consolidation de Parent et enfants.",
          "Fournir d’abord la base CSS, puis demander pourquoi .cartes cible class=\"cartes\". Un fichier sans CSS signifie code absent, pas incompréhension. Si l’extrait est présent mais que le lien n’est pas expliqué, reprendre Classes et couleurs CSS.",
          "Faire repérer padding, margin et les autres styles fournis, sans en déduire une maîtrise. Une hésitation sur l’apparence n’interdit pas l’expérimentation de Flexbox.",
          "Faire distinguer l’espace intérieur d’une carte de l’espace entre plusieurs cartes ; expliquer de nouveau gap pendant le cours."
        ],
        "preparation": [
          "Ouvrir une collection de trois cartes ; le module de préparation fournit le HTML si nécessaire.",
          "Utiliser la base d’apparence proposée dans Flexbox : elle réserve de l’espace dans le parent et une largeur minimale aux cartes, afin que les effets soient observables.",
          "Garder l’aperçu redimensionnable. Pour tester la répartition en column, donner suffisamment de hauteur au conteneur : sans espace libre, le changement peut être imperceptible.",
          "Ne pas cumuler plusieurs anciennes règles contradictoires : remplacer le CSS de départ puis enrichir la même règle .cartes.",
          "Pour vérifier la compréhension, utiliser les réglages d’observation avec trois cartes et un aperçu d’au moins 524px. Le code démarre en row avec align-items: flex-start. Le conteneur de 520px et les cartes de 160px évitent de masquer l’effet du centrage.",
          "Pour le bonus, repartir des mêmes réglages avec six cartes. nowrap fait déborder la ligne ; wrap donne deux lignes de trois cartes lorsque la largeur intérieure du conteneur est de 520px."
        ],
        "why": "Une règle portée par le parent organise la collection et continue à agir lorsqu’on ajoute une carte. Les axes permettent de comprendre les réglages dans plusieurs dispositions.",
        "discoverySpeech": [
          "« Nous voulons organiser ces trois cartes ensemble. Qui les contient toutes ? C’est à ce parent que nous allons donner la règle. »",
          "« Quand je passe de row à column, le sens principal change. Quel réglage doit suivre cet axe ? »",
          "« gap réserve un écart. justify-content répartit l’espace libre sur l’axe principal ; align-items agit sur l’autre axe. Testons un réglage à la fois. »",
          "« Quand la largeur diminue, que deviennent les cartes ? Autorisons plusieurs lignes et observons. »"
        ],
        "example": {
          "target": {
            "moduleId": "css-flexbox",
            "blockId": "alignement",
            "label": "Régler les deux axes"
          },
          "comments": [
            "Faire identifier chaque propriété et le sélecteur du parent avant de copier.",
            "Comparer row et column. Dans nos exemples à écriture horizontale, l’axe principal passe de l’horizontale à la verticale.",
            "La hauteur minimale fournie rend align-items visible en row. L’étirement initial n’est pas la même chose qu’un centrage.",
            "Afficher ensuite le bloc flex-wrap : une seule propriété supplémentaire autorise plusieurs lignes."
          ]
        },
        "questions": [
          {
            "question": "Pourquoi pas display: flex sur .carte ?",
            "answer": "Cela organise le contenu de chaque carte, pas les trois cartes comme enfants de .cartes."
          },
          {
            "question": "justify-content centre-t-il toujours horizontalement ?",
            "answer": "Non. Il suit l’axe principal défini par flex-direction ; en column dans notre exemple, il agit verticalement."
          },
          {
            "question": "Quel réglage centre horizontalement les cartes en column ?",
            "answer": "align-items: center, car cet axe est alors transversal."
          },
          {
            "question": "Pourquoi justify-content semble-t-il parfois ne rien changer ?",
            "answer": "Il faut de l’espace libre à répartir ; vérifier aussi le bon parent et l’axe."
          },
          {
            "question": "Pourquoi la collection change-t-elle à largeur réduite ?",
            "answer": "La place disponible diminue ; avec wrap, les cartes qui ne tiennent plus peuvent passer à une autre ligne."
          },
          {
            "question": "Mets les cartes en colonne, puis centre-les horizontalement. Quels réglages choisis-tu, et pourquoi ?",
            "answer": "Sur .cartes, flex-direction: column fait suivre l’axe principal vertical aux cartes ; align-items: center les centre sur l’axe transversal horizontal. Le conteneur de 520px et les cartes de 160px rendent le déplacement visible. justify-content: center agirait verticalement dans cette disposition, pas horizontalement."
          }
        ],
        "accompaniedActivity": {
          "moduleId": "css-flexbox",
          "blockId": "cours",
          "label": "Activer sur le parent, puis expérimenter les étapes 2 à 6"
        },
        "independentActivity": {
          "moduleId": "css-flexbox",
          "blockId": "mission",
          "label": "Mission jalon — Collection de cartes"
        },
        "differentiation": [
          "Si les regroupements ou classes sont fragiles, revenir à la notion concernée sans imposer de durée. Fournir l’apparence puis accompagner un seul réglage.",
          "Si les réglages sont expliqués, proposer les six cartes ou la navigation. Garder une consigne nouvelle à la fois et faire prédire le résultat avant de tester."
        ],
        "commonErrors": [
          {
            "symptom": "Le mauvais élément reçoit display: flex.",
            "helps": [
              "Faire désigner les éléments à organiser ensemble.",
              "Chercher leur parent commun dans le HTML.",
              "Comparer avec l’exemple de .cartes.",
              "Déplacer la déclaration vers le parent et vérifier les enfants concernés."
            ]
          },
          {
            "symptom": "Le centrage vise le mauvais axe.",
            "helps": [
              "Demander la valeur actuelle de flex-direction.",
              "Faire nommer l’axe principal et l’axe transversal.",
              "Comparer les essais row/column.",
              "Choisir justify-content ou align-items, modifier seulement cette propriété puis observer."
            ]
          },
          {
            "symptom": "L’effet est invisible ou le retour à la ligne ne se produit pas.",
            "helps": [
              "Observer la place disponible et les dimensions.",
              "Vérifier l’espace libre, nowrap/wrap et la largeur minimale fournie.",
              "Comparer avec la base d’apparence et l’étape 6.",
              "Réduire progressivement l’aperçu avec wrap actif ; si la carte elle-même est trop large, constater le débordement sans conclure que wrap suffit à tout résoudre."
            ]
          },
          {
            "symptom": "La consigne de vérification ne produit pas le centrage attendu.",
            "helps": [
              "Demander si les cartes sont réellement en colonne.",
              "Vérifier que le réglage est sur .cartes, et que les cartes de 160px ont de la place dans le conteneur de 520px.",
              "Si justify-content: center a été choisi, faire identifier son axe vertical en column.",
              "Solution attendue sur .cartes : flex-direction: column; align-items: center;. Comparer avec align-items: flex-start pour voir le déplacement horizontal."
            ]
          }
        ],
        "notes": [
          "Le CSS fourni pour l’apparence ne constitue pas un acquis. Les compétences de bordures, tailles ou survol ne sont pas validées par la copie.",
          "gap et la répartition d’espace libre peuvent se cumuler. Sur plusieurs lignes, justify-content agit sur chaque ligne ; ne pas introduire ici la gestion avancée de toutes les lignes.",
          "Les directions des axes dépendent aussi du mode d’écriture. Les observations horizontal/vertical du cours se rapportent à ses exemples.",
          "flex-wrap est une première observation de l’adaptation à la largeur, pas une validation complète du responsive.",
          "Le bonus navigation utilise des paragraphes comme libellés : aucun lien ni nouvelle compétence HTML n’est obligatoire.",
          "Après la mission, donner la consigne de l’activité « Vérifie ta compréhension » sans nommer de propriété. Observer avant de proposer les aides.",
          "Distinguer réussite autonome, avec modèle ou avec aide dans l’observation ou la remarque pédagogique existante. Ne pas ajouter de statut et ne pas conclure à l’acquisition sur la seule reproduction du rendu.",
          "Pour les six cartes, comparer à dimensions identiques : 6 × 160px + 5 × 20px = 1060px, donc plus que 520px. Avec wrap, chaque ligne de trois utilise 3 × 160px + 2 × 20px = 520px."
        ],
        "quickConductor": [
          "Fournir la base d’apparence avant de questionner les sélecteurs ; identifier ce qui est fourni et ce qui sera manipulé.",
          "Diagnostiquer regroupements, sélecteurs et espaces à partir de ce code ; distinguer code absent et sélecteur non compris.",
          "Activer Flexbox sur le parent et nommer les enfants concernés.",
          "Tester direction, gap, répartition et alignement, une propriété à la fois.",
          "Lancer la mission : trois cartes, écarts, alignement et fenêtre réduite.",
          "Donner la consigne sans propriété : cartes en colonne puis centrées horizontalement. Faire expliquer les axes ; distinguer autonomie, modèle ou aide. Ensuite, consolider si nécessaire ou comparer six cartes avec et sans retour à la ligne.",
          "Demander une modification à partir d’une consigne et l’explication de deux réglages ; renseigner manuellement le suivi selon l’observation."
        ],
        "references": [
          {
            "title": "MDN — Notions fondamentales de Flexbox",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts"
          },
          {
            "title": "MDN — align-items",
            "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-items"
          },
          {
            "title": "MDN — Apprendre Flexbox",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox"
          }
        ]
      }
    },
    "diagnostic-web": {
      "domainId": "web",
      "title": "Diagnostic Web",
      "type": "diagnostic",
      "objective": "Voir rapidement ce que tu sais déjà faire pour rejoindre le bon parcours.",
      "skillIds": [
        "html.headings",
        "html.text",
        "html.lists",
        "html.links",
        "css.colors",
        "css.selectors",
        "css.spacing",
        "css.hover"
      ],
      "blocks": [
        {
          "type": "callout",
          "tone": "neutral",
          "title": "Diagnostic rapide",
          "text": "Travaille sans Google, sans IA et sans aide. Fais uniquement ce que tu sais déjà faire. Dès qu'une étape est inconnue, arrête-toi et lève la main.",
          "id": "diagnostic-0"
        },
        {
          "type": "tasks",
          "title": "Fais les étapes dans l'ordre",
          "items": [
            {
              "id": "titre",
              "text": "Créer un titre principal avec HTML."
            },
            {
              "id": "autre-titre",
              "text": "Créer un autre niveau de titre."
            },
            {
              "id": "paragraphe",
              "text": "Créer un paragraphe."
            },
            {
              "id": "liste",
              "text": "Créer une liste de trois éléments."
            },
            {
              "id": "lien",
              "text": "Créer un lien vers un site."
            },
            {
              "id": "couleur",
              "text": "Si tu connais CSS, changer la couleur d'un élément."
            },
            {
              "id": "classe",
              "text": "Créer une classe CSS et l'utiliser sur un élément."
            },
            {
              "id": "espacements",
              "text": "Utiliser margin et padding."
            },
            {
              "id": "hover",
              "text": "Créer un effet :hover si tu connais cette notion."
            }
          ],
          "id": "diagnostic-1"
        },
        {
          "type": "callout",
          "tone": "stop",
          "title": "Tu as terminé ou tu es bloqué ?",
          "text": "Lève la main. Le professeur regardera jusqu'où tu es arrivé et te dira quel parcours rejoindre.",
          "id": "diagnostic-2"
        }
      ],
      "theme": "rattrapage",
      "stuck": {
        "title": "Je ne sais pas faire une étape",
        "steps": [
          "Ne cherche pas la réponse.",
          "Ne regarde pas d’indice.",
          "Arrête-toi à cette étape.",
          "Lève la main."
        ]
      },
      "bonus": "Aucun bonus pendant le diagnostic : attends que le professeur t'indique ton parcours."
    }
  },
  "pathways": {
    "python-debutants": {
      "domainId": "python", "title": "Premiers pas avec Python", "theme": "fondations",
      "objective": "Partir de zéro, créer des programmes interactifs, calculer, choisir et répéter des actions avec Thonny.",
      "moduleIds": ["python-thonny", "python-affichage", "python-variables", "python-saisie", "python-conversation", "python-calculs", "python-erreurs", "python-conditions", "python-elif", "python-aventure", "python-for", "python-while", "python-compteurs", "python-hasard", "python-nombre-mystere", "python-listes", "python-texte"]
    },
    "scratch-debutants": {
      "domainId": "jeux-video",
      "title": "Premiers pas avec Scratch",
      "theme": "fondations",
      "objective": "Découvrir les blocs, créer des actions et piloter un personnage avant de construire ses premiers jeux.",
      "moduleIds": ["scratch-decouverte", "scratch-actions", "scratch-pilotage", "scratch-boucles", "scratch-reactions", "scratch-variables", "scratch-fin-partie", "scratch-mini-jeu", "scratch-coordination", "scratch-blocs-personnalises", "scratch-clones", "scratch-temps-difficulte", "scratch-debogage", "scratch-projet-personnel"]
    },
    "web-fondations": {
      "domainId": "web",
      "title": "Fondations",
      "theme": "fondations",
      "objective": "Construire une première page HTML, puis la personnaliser avec des classes et des couleurs CSS.",
      "moduleIds": [
        "html-titres-paragraphes",
        "html-listes",
        "html-mini-page-fondations",
        "html-liens",
        "html-images",
        "html-mini-page",
        "css-decouverte",
        "css-classes-couleurs",
        "web-affiche-numerique"
      ]
    },
    "web-debutants": {
      "domainId": "web",
      "title": "Débutants",
      "theme": "debutants",
      "objective": "Construire une page HTML avec des titres, des textes, des listes, des liens et des images, puis découvrir les classes et les couleurs CSS.",
      "moduleIds": [
        "html-titres-paragraphes",
        "html-listes",
        "html-liens",
        "html-revision",
        "html-images",
        "css-classes-couleurs",
        "html-mini-page",
        "html-document",
        "html-fichiers-chemins",
        "css-feuille-style",
        "html-parent-enfants",
        "html-zones",
        "css-textes-lisibles",
        "css-boites-espacements",
        "css-dimensions-images",
        "web-carte-personnelle",
        "html-multipage",
        "web-mini-site"
      ]
    },
    "web-avances": {
      "domainId": "web",
      "title": "Avancés",
      "theme": "avances",
      "objective": "Approfondir la mise en page CSS en comprenant la structure parent/enfants et en utilisant Flexbox.",
      "moduleIds": [
        "web-projet-cartes",
        "html-parent-enfants",
        "css-flexbox"
      ]
    }
  },
  "aliases": {
    "fondations": "parcours/web-fondations",
    "debutants": "parcours/web-debutants",
    "avances": "parcours/web-avances",
    "rattrapage": "module/diagnostic-web"
  }
,
  teacher: {
    title: "Conducteur de la séance",
    subtitle: "Séance multi-parcours — 90 minutes",
    schedule: [
      {
        time: "00–05",
        title: "Accueil",
        items: [
          "Rappeler que chaque élève suit son parcours CodeCraft.",
          "Si une consigne n’est pas entendue ou si la connexion coupe, continuer la mission affichée.",
          "Fondations = 2 petits.",
          "Débutants = débutants autonomes.",
          "Avancés = anciens.",
          "Absents de la séance précédente = Rattrapage."
        ]
      },
      {
        time: "05–10",
        title: "Démarrage autonome",
        items: [
          "Fondations : commencer étape 1.",
          "Débutants : mission de révision.",
          "Avancés : retrouver le projet et faire la checklist.",
          "Rattrapage : commencer le diagnostic.",
          "Professeur : observer et classer les élèves en rattrapage."
        ]
      },
      {
        time: "10–32",
        title: "Avancés",
        items: [
          "Vérifier réellement le projet précédent : classes, cartes, border, padding, margin, border-radius et hover.",
          "Si le projet est perdu, utiliser immédiatement le projet de secours.",
          "Enseigner la notion de parent et d’enfants.",
          "Introduire display: flex, puis gap et justify-content.",
          "Faire tester flex-start, flex-end, center, space-between, space-around et space-evenly.",
          "Terminer en les envoyant sur Mission Flexbox, puis Défi autonome."
        ]
      },
      {
        time: "32–40",
        title: "Fondations",
        items: [
          "Vérifier h1 et p.",
          "Vérifier la modification du texte sans casser les balises.",
          "Faire recréer h1 et p presque seul.",
          "Ne passer à ul/li que si h1 et p sont suffisamment maîtrisés.",
          "Ne pas perdre de temps en dépannage Meet."
        ]
      },
      {
        time: "40–57",
        title: "Débutants",
        items: [
          "Vérifier la page reconstruite : titres h1 à h6, paragraphes, liste et lien.",
          "Enseigner img.",
          "Expliquer src et alt.",
          "Lancer ensuite l’exercice autonome avec plusieurs images."
        ]
      },
      {
        time: "57–73",
        title: "Avancés",
        items: [
          "Vérifier la compréhension réelle de display: flex, gap et justify-content.",
          "Demander de montrer au moins trois valeurs de justify-content.",
          "Passer à 6 cartes.",
          "Réduire la largeur de la fenêtre.",
          "Seulement s’ils sont à l’aise avec le reste, introduire flex-wrap: wrap.",
          "Ne pas aller plus loin aujourd’hui."
        ],
        say: [
          "Maintenant, si les cartes n’ont plus assez de place, elles peuvent passer à la ligne suivante."
        ]
      },
      {
        time: "73–82",
        title: "Petit tour Fondations + Débutants",
        groups: [
          {
            title: "Fondations",
            items: [
              "Test sans modèle : créer un h1, puis un p.",
              "Vérifier que les deux balises sont produites sans regarder.",
              "Noter : acquis, à consolider ou pas encore acquis."
            ],
            say: [
              "Fais-moi un titre tout seul.",
              "Maintenant un paragraphe."
            ]
          },
          {
            title: "Débutants",
            items: [
              "Vérifier img, src, alt et la deuxième image.",
              "Valider s’ils savent expliquer grossièrement les attributs et produire une image.",
              "Noter : acquis, à consolider ou pas encore acquis."
            ],
            say: [
              "À quoi sert src ?",
              "À quoi sert alt ?"
            ]
          }
        ]
      },
      {
        time: "82–88",
        title: "Bilan rapide",
        items: [
          "Demander éventuellement un partage d’écran très court à un débutant et à un avancé.",
          "Une seule réussite montrée par élève.",
          "Pas de présentation de cinq minutes."
        ],
        say: [
          "Montre simplement une chose nouvelle que tu as réussie aujourd’hui."
        ]
      },
      {
        time: "88–90",
        title: "Conclusion",
        items: [
          "Rappeler le fonctionnement par parcours et l’objectif d’autonomie."
        ],
        say: [
          "Aujourd’hui chacun a avancé sur son propre parcours. C’est comme ça qu’on va fonctionner : quand je travaille avec un groupe, les autres continuent leurs missions.",
          "Le but est que vous deveniez progressivement capables d’avancer sans attendre constamment une consigne orale."
        ]
      }
    ],
    principlesTitle: "Repères permanents",
    principles: [
      "Une nouveauté à un seul groupe à la fois.",
      "Les autres groupes consolident en autonomie.",
      "Aucune consigne importante uniquement à l'oral.",
      "Aucun partage d'écran du professeur nécessaire.",
      "Si la connexion est instable, les élèves continuent la mission affichée."
    ],
    connection: {
      title: "Si ma connexion coupe",
      items: [
        "Aucune consigne essentielle uniquement à l’oral.",
        "Les élèves continuent la mission affichée.",
        "Au retour, demander seulement où ils sont arrivés.",
        "Si l’audio est mauvais, utiliser le chat Meet avec une courte consigne par groupe."
      ],
      returnPrompt: "Où êtes-vous arrivés sur CodeCraft ?",
      chatExamples: [
        "Avancés : continuez Mission Flexbox.",
        "Débutants : restez sur l’exercice image.",
        "Fondations : continuez Étape 1."
      ]
    },
    notes: {
      title: "Notes professeur",
      description: "Après le cours, attribuer un seul état par notion observée.",
      states: ["Acquis", "À consolider", "Pas encore acquis"]
    },
    studentLinkLabel: "Ouvrir l'espace élèves"
  }
};
