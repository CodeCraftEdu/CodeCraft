# Contenus pédagogiques

## Mode économique par défaut

L’utilisateur demande de préserver son usage Codex. Rechercher le résultat utile avec le minimum de lectures, d’appels d’outils et de vérifications nécessaires, sans réduire la qualité du travail demandé.

- Rester dans le périmètre demandé. Une petite retouche ne doit pas devenir une harmonisation générale ou un nouveau chantier.
- Réutiliser les informations, documents déjà lus et résultats de contrôle présents dans le contexte. Lire seulement les fichiers et passages utiles à la décision ; éviter les relectures et recherches larges par réflexe.
- Pour une petite modification, privilégier une lecture ciblée, une modification et une validation groupée. Régénérer le catalogue et vérifier le formatage une fois sur le résultat final. Si le rendu doit être examiné, une seule capture ciblée suffit généralement ; recommencer seulement si un problème ou un changement visuel le justifie.
- Ne pas multiplier les tests, captures, recherches Internet ou analyses annexes sans besoin concret. Après les contrôles adaptés ci-dessous, terminer. Les modifications fonctionnelles conservent leurs vérifications nécessaires.

## Direction artistique

Pour toute création d’image ou modification visuelle du site, lire la section « Référence visuelle validée » de `docs/direction-visuelle.md`. Elle fixe la DA PS1 minimaliste choisie par l’utilisateur : grandes formes simples, textures peintes douces, créatures non humaines sans traits de visage et skyboxes peintes très présentes. La référence approuvée est conservée dans le dépôt ; s’y appuyer avant d’ajouter des détails ou de réinterpréter le style.

## Organisation et vérifications

Lire `docs/carte-projet.md` pour localiser les responsabilités, et `docs/README.md` pour distinguer les règles actuelles des spécifications historiques. Les modules de rendu sont dans `src/student/`, les styles éditables dans `styles/` ; les fichiers CSS de la racine sont leurs points d’entrée.

Adapter les vérifications à la modification. Pour une retouche purement textuelle (titre, consigne, orthographe), sans changement de code, de structure des données, de lien ni de ressource : régénérer et valider le catalogue si le contenu change, vérifier le formatage des fichiers concernés et relire le résultat. Lancer seulement les tests concernés si une assertion dépend du texte modifié. Vérifier l’encart rendu si la longueur ou la mise en forme peut affecter sa lisibilité. Ne pas lancer toutes les suites Node et Chrome pour cette seule retouche. Pour une modification documentaire uniquement, relire le diff et vérifier les liens modifiés ; aucun test applicatif n’est nécessaire.

Après une modification JavaScript, lancer `npm run lint`. Utiliser Prettier sur les fichiers modifiés pour harmoniser leur formatage. Pour une modification fonctionnelle, structurelle ou des styles, lancer `npm run check` et examiner les captures concernées. Cette commande lance le contrôle de formatage, le lint et les tests Node et navigateur utilisés par GitHub. Voir `docs/verification-developpement.md` pour les contrôles ciblés et les limites des simulations.

Les messages de commit doivent toujours être rédigés en anglais.

Ne jamais créer de nouvelle branche Git. Effectuer les commits et les push directement sur `main`, en préservant les changements locaux hors du périmètre demandé.

Pour travailler sur un domaine, utiliser `npm run check:target -- <profil>` (`web`, `python`, `scratch`, `robotique`, `gdevelop`, `prof`, `student`, `tooling`) pendant les changements fonctionnels. La correspondance fichiers/tests est dans `docs/verification-developpement.md`. Avant un push, conserver un `npm run check` complet réussi sur les changements à publier. Ne pas le répéter si ces mêmes changements ont déjà été validés. `npm run dev` sert l’aperçu, surveille les contenus et recharge la page. Consulter `browser-artifacts/index.html` et les `failure.html` pour les captures et erreurs ; ces fichiers locaux sont ignorés par Git.

Les contenus sont édités dans `content/`, jamais dans `generated/catalog.js`. Lire `docs/organisation-contenus.md` avant de modifier leur structure. Après une modification de contenu, lancer `node scripts/build-catalog.cjs`, puis les vérifications proportionnées décrites ci-dessus. Conserver les identifiants existants.

Pour toute création ou modification de texte élève, lire et appliquer `docs/regles-editoriales.md`. Cette règle concerne tous les parcours, pas seulement le module modifié.

Les textes doivent rester directs : action, observation, explication. Éviter les interdictions inutiles, les accumulations de cas particuliers et les remarques d’évaluation destinées au professeur. Conserver les précautions utiles de sécurité, de confidentialité, de sauvegarde et les distinctions techniques nécessaires.
