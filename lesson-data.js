/*
 * Contenu modifiable de CodeCraft.
 * Changez sessionId à chaque nouvelle séance : les cases à cocher repartiront
 * automatiquement de zéro sans effacer la progression des anciennes séances.
 */
window.CODECRAFT_DATA = {
  sessionId: "2026-09-27",
  site: {
    name: "CodeCraft",
    subtitle: "Espace de cours",
    banner: "Tu n’as pas entendu la consigne ou la connexion a coupé ? Continue simplement à partir de l’étape affichée sur ta page.",
    codepenLabel: "Ouvrir CodePen",
    codepenUrl: "https://codepen.io/pen",
    homeLabel: "Retour à l'accueil"
  },
  shared: {
    stuckTitle: "Je suis bloqué",
    stuckSteps: [
      "Relire la consigne",
      "Relire mon code",
      "Chercher une faute",
      "Essayer",
      "Lever la main"
    ],
    finishedTitle: "J'ai fini"
  },
  routes: [
    {
  id: "fondations",
  title: "Fondations",
  shortDescription: "Consolider les bases HTML",
  objective: "Savoir créer et modifier un titre et un paragraphe presque seul.",
  blocks: [
    {
      type: "tasks",
      title: "Étape 1 — Titre et paragraphe",
      items: [
        {
          id: "html-codepen",
          text: "Clique sur « Ouvrir CodePen », puis repère la zone HTML."
        },
        {
          id: "premier-h1",
          text: "Tape <h1>Mon site</h1>.",
          code: true
        },
        {
          id: "modifier-titre",
          text: "Change seulement le texte « Mon site ». Garde les balises <h1> et </h1>."
        },
        {
          id: "premier-p",
          text: "Ajoute <p>Bienvenue sur ma page.</p>.",
          code: true
        },
        {
          id: "modifier-p",
          text: "Change seulement le texte du paragraphe."
        },
        {
          id: "deuxieme-p",
          text: "Ajoute maintenant un deuxième paragraphe sans recopier l'exemple.",
          hint: "Un paragraphe commence par <p> et se termine par </p>.",
          syntax: "<p>Mon deuxième paragraphe</p>"
        }
      ]
    },
    {
      type: "tasks",
      title: "Étape 2 — Seulement si l'étape 1 est réussie",
      items: [
        {
          id: "liste-trois",
          text: "Crée une liste avec trois éléments.",
          hint: "La liste utilise <ul>. Chaque élément utilise <li>.",
          syntax: "<ul>\n  <li>Jeux</li>\n  <li>Sport</li>\n  <li>Musique</li>\n</ul>"
        },
        {
          id: "modifier-li",
          text: "Remplace les trois éléments par trois choses que tu aimes."
        },
        {
          id: "quatrieme-li",
          text: "Ajoute seul un quatrième élément.",
          hint: "Regarde comment sont écrits les trois autres éléments."
        }
      ]
    }
  ],
  bonus: "Efface ton HTML et essaie de refaire seulement un titre et un paragraphe sans regarder les exemples."
},
{
  id: "debutants",
  title: "Débutants",
  shortDescription: "Réviser puis découvrir les images",
  objective: "Reconstruire seul ce que tu as appris au dernier cours, puis apprendre à ajouter une image.",
  blocks: [
    {
      type: "tasks",
      title: "Mission autonome — Révision",
      intro: "Crée une petite page sur le sujet de ton choix. Essaie d'abord sans indice, sans IA et sans aide.",
      items: [
        {
          id: "titres",
          text: "Créer un titre principal puis au moins deux sous-titres avec des balises de h1 à h6.",
          hint: "h1 est le titre principal. h2, h3... servent à créer des niveaux de titres.",
          syntax: "<h1>Mon site</h1>\n<h2>Première partie</h2>\n<h3>Sous-partie</h3>"
        },
        {
          id: "deux-p",
          text: "Créer deux paragraphes.",
          hint: "Chaque paragraphe utilise la même balise.",
          syntax: "<p>Mon paragraphe</p>"
        },
        {
          id: "liste",
          text: "Créer une liste de trois éléments.",
          hint: "La liste utilise ul et chaque élément utilise li.",
          syntax: "<ul>\n  <li>Élément 1</li>\n  <li>Élément 2</li>\n  <li>Élément 3</li>\n</ul>"
        },
        {
          id: "lien",
          text: "Créer un lien vers un site de ton choix.",
          hint: "La destination se place dans href.",
          syntax: "<a href=\"https://example.com\">Visiter le site</a>"
        }
      ]
    },

    {
      type: "tasks",
      title: "Tu as fini avant le professeur ?",
      intro: "Continue avec uniquement les notions que tu connais déjà.",
      items: [
        {
          id: "bonus-section",
          text: "Ajoute une nouvelle section avec un h2 ou h3 et un paragraphe."
        },
        {
          id: "bonus-liste",
          text: "Ajoute une deuxième liste sur un autre sujet."
        },
        {
          id: "bonus-lien",
          text: "Ajoute un deuxième lien vers un autre site."
        },
        {
          id: "bonus-hierarchie",
          text: "Organise ta page avec plusieurs niveaux de titres entre h1 et h6."
        },
        {
          id: "bonus-verification",
          text: "Relis tout ton HTML et corrige les erreurs que tu trouves."
        }
      ]
    },

    {
      type: "callout",
      tone: "stop",
      title: "STOP — Attends le professeur",
      text: "Ne commence pas la partie suivante seul. Pendant que tu attends, continue à améliorer ta page avec uniquement ce que tu connais déjà."
    },

    {
      type: "lesson",
      title: "Nouvelle notion : ajouter une image",
      paragraphs: [
        "La balise img permet d'afficher une image.",
        "src indique l'adresse de l'image.",
        "alt contient une description de l'image."
      ],
      code: "<img src=\"https://placehold.co/300x200?text=Mon+image\" alt=\"Image de démonstration\">"
    },

    {
      type: "tasks",
      title: "À toi de jouer avec les images",
      items: [
        {
          id: "premiere-image",
          text: "Ajoute l'image de l'exemple à ta page."
        },
        {
          id: "modifier-alt",
          text: "Modifie le texte alt pour qu'il décrive vraiment l'image."
        },
        {
          id: "modifier-image",
          text: "Change l'image en modifiant le texte « Mon image » dans son adresse."
        },
        {
          id: "deuxieme-image",
          text: "Ajoute une deuxième image avec un autre texte."
        },
        {
          id: "image-section",
          text: "Crée une nouvelle section avec un titre, un paragraphe et une image."
        },
        {
          id: "image-lien",
          text: "Essaie de transformer une image en lien cliquable.",
          hint: "Tu peux placer une balise img à l'intérieur d'une balise a.",
          syntax: "<a href=\"https://example.com\">\n  <img src=\"https://placehold.co/300x200?text=Image\" alt=\"Image cliquable\">\n</a>"
        }
      ]
    }
  ],
  bonus: "Crée une mini-page complète sur un sujet de ton choix avec : un h1, plusieurs niveaux de titres, au moins 3 paragraphes, une liste, 2 liens et 2 images. Essaie de ne regarder aucun indice."
},
{
  id: "avances",
  title: "Avancés",
  shortDescription: "Reprendre un projet et apprendre Flexbox",
  objective: "Vérifier les acquis précédents puis commencer réellement Flexbox.",
  blocks: [
    {
      type: "tasks",
      title: "1 — Retrouve ton projet précédent",
      intro: "Commence par retrouver le projet réalisé au dernier cours. Ne recommence rien tant que tu n'as pas vérifié ce que tu avais déjà fait.",
      items: [
        {
          id: "retrouver-projet",
          text: "Ouvrir le projet de la séance précédente."
        }
      ]
    },

    {
      type: "checklist",
      title: "2 — Vérifie ton projet",
      items: [
        { id: "html-structure", text: "La page contient plusieurs éléments HTML bien organisés." },
        { id: "classes", text: "J'ai utilisé plusieurs classes CSS." },
        { id: "trois-cartes", text: "J'ai créé au moins 3 cartes." },
        { id: "bordures", text: "Mes cartes ont une bordure." },
        { id: "padding", text: "J'ai utilisé padding." },
        { id: "margin", text: "J'ai utilisé margin." },
        { id: "radius", text: "J'ai utilisé border-radius." },
        { id: "hover", text: "J'ai créé au moins un effet :hover." }
      ]
    },

    {
      type: "callout",
      tone: "stop",
      title: "STOP — Attends le professeur",
      text: "Quand tu as vérifié ton projet, arrête-toi ici. Le professeur va regarder ton travail avant de commencer Flexbox."
    },

    {
      type: "details",
      title: "Je n'ai plus mon projet",
      blocks: [
        {
          type: "lesson",
          title: "HTML de secours",
          code: "<div class=\"cartes\">\n  <div class=\"carte\">\n    <h2>Carte 1</h2>\n    <p>Premier contenu.</p>\n  </div>\n\n  <div class=\"carte\">\n    <h2>Carte 2</h2>\n    <p>Deuxième contenu.</p>\n  </div>\n\n  <div class=\"carte\">\n    <h2>Carte 3</h2>\n    <p>Troisième contenu.</p>\n  </div>\n</div>"
        },
        {
          type: "lesson",
          title: "CSS de secours",
          code: ".carte {\n  border: 2px solid #24324a;\n  padding: 20px;\n  margin: 10px;\n  border-radius: 12px;\n}\n\n.carte:hover {\n  background-color: #eeeeee;\n}"
        }
      ]
    },

    {
      type: "lesson",
      title: "Nouvelle notion — Flexbox",
      paragraphs: [
        "Flexbox permet d'organiser facilement plusieurs éléments dans un conteneur.",
        "Le conteneur est l'élément parent. Ici, .cartes est le parent et les .carte sont ses enfants.",
        "display: flex active Flexbox sur le conteneur. Par défaut, les enfants se placent sur une ligne.",
        "gap ajoute un espace régulier entre les éléments.",
        "justify-content permet de choisir comment les éléments sont répartis sur l'axe principal."
      ],
      code: ".cartes {\n  display: flex;\n  gap: 20px;\n  justify-content: flex-start;\n}",
      valuesTitle: "Valeurs de justify-content à tester",
      values: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly"
      ]
    },

    {
      type: "tasks",
      title: "3 — Mission Flexbox",
      intro: "Applique maintenant ce que nous venons de voir à ton propre projet.",
      items: [
        {
          id: "cote-a-cote",
          text: "Place les trois cartes côte à côte avec Flexbox.",
          hint: "display: flex doit être placé sur le parent des cartes.",
          syntax: ".cartes {\n  display: flex;\n}"
        },
        {
          id: "gap",
          text: "Ajoute un espace régulier entre les cartes avec gap.",
          hint: "Essaie par exemple 10px, 20px puis 30px.",
          syntax: ".cartes {\n  display: flex;\n  gap: 20px;\n}"
        },
        {
          id: "justify-center",
          text: "Centre les cartes avec justify-content."
        },
        {
          id: "tester-justify",
          text: "Teste au moins trois valeurs différentes de justify-content."
        },
        {
          id: "choisir-justify",
          text: "Choisis la valeur qui convient le mieux à ton projet."
        },
        {
          id: "ameliorer-cartes",
          text: "Améliore maintenant le contenu et le design de tes trois cartes sans supprimer Flexbox."
        }
      ]
    },

    {
      type: "tasks",
      title: "4 — Défi autonome",
      intro: "Si tout fonctionne, continue sans attendre le professeur.",
      items: [
        {
          id: "six-cartes",
          text: "Passe de 3 à 6 cartes."
        },
        {
          id: "tester-largeur",
          text: "Réduis puis agrandis la fenêtre du navigateur et observe ce qui se passe."
        },
        {
          id: "wrap",
          text: "Essaie flex-wrap: wrap et observe la différence.",
          hint: "Ajoute cette propriété dans le même conteneur que display: flex.",
          syntax: ".cartes {\n  display: flex;\n  flex-wrap: wrap;\n}"
        },
        {
          id: "finaliser",
          text: "Finalise ta page : textes, couleurs, espacements et effets hover."
        }
      ]
    }
  ],
  bonus: "Crée une deuxième section contenant plusieurs cartes et organise-la elle aussi avec Flexbox."
},
{
  id: "rattrapage",
  title: "Rattrapage",
  shortDescription: "Trouver ton point de départ",
  objective: "Voir rapidement ce que tu sais déjà faire pour rejoindre le bon parcours.",
  stuck: {
    title: "Je ne sais pas faire une étape",
    steps: [
      "Ne cherche pas la réponse.",
      "Ne regarde pas d’indice.",
      "Arrête-toi à cette étape.",
      "Lève la main."
    ]
  },
  blocks: [
    {
      type: "callout",
      tone: "neutral",
      title: "Diagnostic rapide",
      text: "Travaille sans Google, sans IA et sans aide. Fais uniquement ce que tu sais déjà faire. Dès qu'une étape est inconnue, arrête-toi et lève la main."
    },
    {
      type: "tasks",
      title: "Fais les étapes dans l'ordre",
      items: [
        {
          id: "titre",
          text: "Créer un titre principal avec HTML."
        },
        {
          id: "autre-titre",
          text: "Créer un autre niveau de titre."
        },
        {
          id: "paragraphe",
          text: "Créer un paragraphe."
        },
        {
          id: "liste",
          text: "Créer une liste de trois éléments."
        },
        {
          id: "lien",
          text: "Créer un lien vers un site."
        },
        {
          id: "couleur",
          text: "Si tu connais CSS, changer la couleur d'un élément."
        },
        {
          id: "classe",
          text: "Créer une classe CSS et l'utiliser sur un élément."
        },
        {
          id: "espacements",
          text: "Utiliser margin et padding."
        },
        {
          id: "hover",
          text: "Créer un effet :hover si tu connais cette notion."
        }
      ]
    },
    {
      type: "callout",
      tone: "stop",
      title: "Tu as terminé ou tu es bloqué ?",
      text: "Lève la main. Le professeur regardera jusqu'où tu es arrivé et te dira quel parcours rejoindre."
    }
  ],
  bonus: "Aucun bonus pendant le diagnostic : attends que le professeur t'indique ton parcours."
},
  ],
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
