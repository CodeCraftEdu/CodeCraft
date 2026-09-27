# CodeCraft

Mini-site pédagogique statique, sans framework, dépendance, backend ni étape de build.

## Prévisualisation

Ouvrir `index.html` directement dans un navigateur, ou lancer un serveur statique local à la racine du dossier :

```bash
python -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

Le conducteur de séance est disponible sur `prof.html`.

## Mettre à jour une séance

Tout le contenu pédagogique se trouve dans `lesson-data.js`. Modifier `sessionId` à chaque nouvelle séance pour repartir avec des cases décochées, sans supprimer la progression locale des séances précédentes.

## GitHub Pages

Dans le dépôt GitHub, ouvrir **Settings → Pages**, choisir **Deploy from a branch**, puis sélectionner la branche principale et le dossier **/(root)**. Enregistrer et attendre la publication de l'URL.
