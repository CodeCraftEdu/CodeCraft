/* Bibliothèque permanente : identifiants stables, contenus uniques et parcours par références. */
window.CODECRAFT_DATA = {
  "schemaVersion": 1,
  "site": {
    "name": "CodeCraft",
    "subtitle": "Espace de cours",
    "codepenLabel": "Ouvrir CodePen",
    "codepenUrl": "https://codepen.io/pen",
    "homeLabel": "Retour à l'accueil"
  },
  "shared": {
    "stuckTitle": "Je suis bloqué",
    "stuckSteps": [
      "Relire la consigne",
      "Relire l’exemple ou le code",
      "Chercher une faute",
      "Essayer une autre fois",
      "Si tu es en cours, demander de l’aide au professeur"
    ],
    "finishedTitle": "J'ai fini",
    "finishedText": "Relis ton travail et vérifie chaque consigne. Si tu es en cours, montre ensuite ton résultat au professeur."
  },
  "moduleTypes": {
    "lesson": "Cours",
    "practice": "Entraînement",
    "challenge": "Défi",
    "project": "Projet",
    "diagnostic": "Diagnostic"
  },
  "domains": {
    "web": {
      "title": "Web",
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
    }
  },
  "modules": {
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
      "objective": "Ajouter des images et utiliser src et alt.",
      "skillIds": [
        "html.images",
        "html.links"
      ],
      "blocks": [
        {
          "type": "lesson",
          "title": "Nouvelle notion : ajouter une image",
          "paragraphs": [
            "La balise img permet d'afficher une image.",
            "src indique l'adresse de l'image.",
            "alt contient une description de l'image.",
            "Le texte alt décrit l’image : il est notamment utile si l’image ne s’affiche pas.",
            "Il est aussi important pour l’accessibilité : les lecteurs d’écran peuvent lire cette description aux personnes qui ne voient pas l’image.",
            "Contrairement à <p> ou <a>, la balise <img> n’entoure pas de contenu et n’a pas de balise fermante."
          ],
          "code": "<img src=\"https://placehold.co/300x200?text=Mon+image\" alt=\"Image de démonstration\">",
          "id": "cours"
        },
        {
          "type": "tasks",
          "title": "À toi de jouer avec les images",
          "items": [
            {
              "id": "premiere-image",
              "text": "Ajoute l'image de l'exemple à ta page."
            },
            {
              "id": "modifier-alt",
              "text": "Modifie le texte alt pour qu'il décrive vraiment l'image."
            },
            {
              "id": "modifier-image",
              "text": "Change l'image en modifiant le texte « Mon image » dans son adresse."
            },
            {
              "id": "deuxieme-image",
              "text": "Ajoute une deuxième image avec un autre texte."
            },
            {
              "id": "image-section",
              "text": "Crée une nouvelle section avec un titre, un paragraphe et une image."
            },
            {
              "id": "image-lien",
              "text": "Essaie de transformer une image en lien cliquable.",
              "hint": "Tu peux placer une balise img à l'intérieur d'une balise a.",
              "syntax": "<a href=\"https://example.com\">\n  <img src=\"https://placehold.co/300x200?text=Image\" alt=\"Image cliquable\">\n</a>"
            }
          ],
          "id": "exercices"
        }
      ],
      "theme": "debutants"
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
            "Crée une mini-page complète sur un sujet de ton choix. Essaie de ne regarder aucun indice. Utilise la checklist pour vérifier que rien ne manque."
          ]
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
        }
      ],
      "theme": "debutants"
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
      "objective": "Identifier un conteneur et ses enfants directs.",
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
            "Dans les explications, .cartes désigne l’élément qui porte class=\"cartes\" et .carte désigne un élément qui porte class=\"carte\". Le point ne s’écrit pas dans l’attribut class."
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
            "Un même élément peut donc être un enfant et un parent : chaque .carte est enfant de .cartes, et parent de son h2 et de son p."
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
          "type": "lesson",
          "id": "transition",
          "title": "Et ensuite ?",
          "paragraphs": [
            "Maintenant que tu sais identifier le parent et ses enfants, tu vas pouvoir apprendre à demander au parent d'organiser ses enfants avec Flexbox."
          ]
        }
      ],
      "theme": "avances"
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
          "title": "1 — Découvrir Flexbox",
          "paragraphs": [
            "Flexbox permet d'organiser facilement plusieurs éléments dans un conteneur.",
            "display: flex active Flexbox sur le conteneur. Par défaut, les enfants se placent sur une ligne.",
            "gap ajoute un espace régulier entre les éléments.",
            "justify-content permet de choisir comment les éléments sont répartis sur l'axe principal."
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
          "id": "cours"
        },
        {
          "type": "tasks",
          "title": "2 — Mission Flexbox",
          "intro": "Applique les notions du module à ton propre projet.",
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
              "text": "Améliore maintenant le contenu et le design de tes trois cartes sans supprimer Flexbox."
            }
          ],
          "id": "mission"
        },
        {
          "type": "tasks",
          "title": "3 — Défi autonome",
          "intro": "Si ta mise en page fonctionne et que tu es à l’aise avec display: flex, gap et justify-content, relève ce défi en autonomie.",
          "items": [
            {
              "id": "six-cartes",
              "text": "Passe de 3 à 6 cartes."
            },
            {
              "id": "tester-largeur",
              "text": "Réduis puis agrandis la fenêtre du navigateur et observe ce qui se passe."
            },
            {
              "id": "wrap",
              "text": "Si tu es à l’aise avec display: flex, gap et justify-content, essaie flex-wrap: wrap et observe la différence.",
              "hint": "Ajoute cette propriété dans le même conteneur que display: flex.",
              "syntax": ".cartes {\n  display: flex;\n  flex-wrap: wrap;\n}"
            },
            {
              "id": "finaliser",
              "text": "Finalise ta page : textes, couleurs, espacements et effets hover."
            }
          ],
          "id": "defi"
        }
      ],
      "theme": "avances",
      "bonus": "Crée une deuxième section contenant plusieurs cartes et organise-la elle aussi avec Flexbox."
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
    "web-fondations": {
      "domainId": "web",
      "title": "Fondations",
      "theme": "fondations",
      "objective": "Apprendre les premières bases du HTML avec des titres, des paragraphes et des listes simples.",
      "moduleIds": [
        "html-titres-paragraphes",
        "html-listes",
        "html-mini-page-fondations"
      ]
    },
    "web-debutants": {
      "domainId": "web",
      "title": "Débutants",
      "theme": "debutants",
      "objective": "Construire une page HTML simple avec des titres, des textes, des listes, des liens et des images.",
      "moduleIds": [
        "html-titres-paragraphes",
        "html-listes",
        "html-liens",
        "html-revision",
        "html-images",
        "html-mini-page"
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
