# Point de reprise Scratch après le redémarrage du 16 octobre 2026

Le dépannage de Codex intervient juste avant la revue pédagogique du dernier chapitre. Ne pas recommencer l'intégration déjà réalisée.

## Travail conservé

Les sept chapitres du parcours `scratch-avances` sont rédigés et intégrés autour du même jeu : Commandes, Balises, Vies, Clones, Messages, États et Tests personnels. Les six premiers sont revus et leurs corrections sont appliquées. Tests personnels attend sa revue pédagogique en Astra High.

Les sources sont dans `content/modules/jeux-video/scratch-mission-*.json`, l'ordre dans [scratch-avances.json](../content/pathways/scratch-avances.json). La [roadmap](roadmap-scratch-avance.md) et le [compte rendu de Tests personnels](integration-scratch-mission-tests.md) décrivent la suite et les limites des vérifications.

Dernière validation complète avant le plantage : `npm run check`, 233 tests Node et sept suites navigateur réussis. Rapport local : `browser-artifacts/run-e6ACM9/summary.json`. La recette de Tests personnels passe ses huit contrôles dans le moteur Scratch : `browser-artifacts/scratch-mission-tests-engine/resultats.json`. Ces essais ne remplacent pas la reconstruction du parcours depuis les seules consignes ni des observations avec des élèves.

Après redémarrage, le catalogue est toujours cohérent : 82 modules et huit parcours. Les fichiers du chantier sont présents, avec les modifications et ajouts Git attendus. Le dernier commit local reste `03444a7`, antérieur au nouveau parcours autonome ; ce chantier n'est pas encore commité. Le préserver avant toute opération de nettoyage ou de restauration Git.

## Suite à reprendre

- Terminer le dépannage des réglages et de l'enregistrement du projet dans Codex, sans remplacer les fichiers de CodeCraft.
- Faire la revue pédagogique de Tests personnels en Astra High, puis appliquer les éventuelles corrections en Sol High.
- Réaliser la recette du parcours entier depuis les seules consignes, en distinguant fonctionnement technique, chemin suivi et autonomie observée.
- Commiter avec un message en anglais et pousser lorsque l'utilisateur le demande ; ne pas confondre les fichiers locaux conservés avec une sauvegarde GitHub déjà réalisée.
