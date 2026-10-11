# Contenus pédagogiques

Lire `docs/carte-projet.md` pour localiser les responsabilités, et `docs/README.md` pour distinguer les règles actuelles des spécifications historiques. Les modules de rendu sont dans `src/student/`, les styles éditables dans `styles/` ; les fichiers CSS de la racine sont leurs points d’entrée.

Après une modification JavaScript, lancer `npm run lint`. Utiliser `npm run format` pour harmoniser les sources éditables. Après une modification structurelle ou visuelle, lancer `npm test` puis `npm run test:browser` et examiner les captures concernées. `npm run check` lance le contrôle de formatage, le lint et les tests Node et navigateur utilisés par GitHub. Voir `docs/verification-developpement.md` pour les contrôles ciblés et les limites des simulations.

Les messages de commit doivent toujours être rédigés en anglais.

Pour travailler sur un domaine, utiliser `npm run check:target -- <profil>` (`web`, `python`, `scratch`, `robotique`, `gdevelop`, `prof`, `student`, `tooling`). La correspondance fichiers/tests est dans `docs/verification-developpement.md`. Avant livraison, conserver `npm run check` complet. `npm run dev` sert l’aperçu, surveille les contenus et recharge la page. Consulter `browser-artifacts/index.html` et les `failure.html` pour les captures et erreurs ; ces fichiers locaux sont ignorés par Git.

Les contenus sont édités dans `content/`, jamais dans `generated/catalog.js`. Lire `docs/organisation-contenus.md` avant de modifier leur structure. Après une modification de contenu, lancer `node scripts/build-catalog.cjs` puis les tests. Conserver les identifiants existants.

Pour toute création ou modification de texte élève, lire et appliquer `docs/regles-editoriales.md`. Cette règle concerne tous les parcours, pas seulement le module modifié.

Les textes doivent rester directs : action, observation, explication. Éviter les interdictions inutiles, les accumulations de cas particuliers et les remarques d’évaluation destinées au professeur. Conserver les précautions utiles de sécurité, de confidentialité, de sauvegarde et les distinctions techniques nécessaires.
