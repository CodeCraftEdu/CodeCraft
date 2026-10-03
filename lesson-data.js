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
          "code": ".cartes {\n  display: flex;\n}"
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
