# Contenus pédagogiques

Lire `docs/carte-projet.md` pour localiser les responsabilités, et `docs/README.md` pour distinguer les règles actuelles des spécifications historiques. Les modules de rendu sont dans `src/student/`, les styles éditables dans `styles/` ; les fichiers CSS de la racine sont leurs points d’entrée.

Adapter les vérifications à la modification. Pour une retouche purement textuelle (titre, consigne, orthographe), sans changement de code, de structure des données, de lien ni de ressource : régénérer et valider le catalogue si le contenu change, vérifier le formatage des fichiers concernés et relire le résultat. Lancer seulement les tests concernés si une assertion dépend du texte modifié. Vérifier l’encart rendu si la longueur ou la mise en forme peut affecter sa lisibilité. Ne pas lancer toutes les suites Node et Chrome pour cette seule retouche. Pour une modification documentaire uniquement, relire le diff et vérifier les liens modifiés ; aucun test applicatif n’est nécessaire.

Après une modification JavaScript, lancer `npm run lint`. Utiliser Prettier sur les fichiers modifiés pour harmoniser leur formatage. Pour une modification fonctionnelle, structurelle ou des styles, lancer `npm run check` et examiner les captures concernées. Cette commande lance le contrôle de formatage, le lint et les tests Node et navigateur utilisés par GitHub. Voir `docs/verification-developpement.md` pour les contrôles ciblés et les limites des simulations.

Les messages de commit doivent toujours être rédigés en anglais.

Pour travailler sur un domaine, utiliser `npm run check:target -- <profil>` (`web`, `python`, `scratch`, `robotique`, `gdevelop`, `prof`, `student`, `tooling`) pendant les changements fonctionnels. La correspondance fichiers/tests est dans `docs/verification-developpement.md`. Avant un push, conserver un `npm run check` complet réussi sur les changements à publier. Ne pas le répéter si ces mêmes changements ont déjà été validés. `npm run dev` sert l’aperçu, surveille les contenus et recharge la page. Consulter `browser-artifacts/index.html` et les `failure.html` pour les captures et erreurs ; ces fichiers locaux sont ignorés par Git.

Les contenus sont édités dans `content/`, jamais dans `generated/catalog.js`. Lire `docs/organisation-contenus.md` avant de modifier leur structure. Après une modification de contenu, lancer `node scripts/build-catalog.cjs`, puis les vérifications proportionnées décrites ci-dessus. Conserver les identifiants existants.

Pour toute création ou modification de texte élève, lire et appliquer `docs/regles-editoriales.md`. Cette règle concerne tous les parcours, pas seulement le module modifié.

Les textes doivent rester directs : action, observation, explication. Éviter les interdictions inutiles, les accumulations de cas particuliers et les remarques d’évaluation destinées au professeur. Conserver les précautions utiles de sécurité, de confidentialité, de sauvegarde et les distinctions techniques nécessaires.
