# Programmer un signal — recette technique

Essais du 9 octobre 2026 sur le compte professeur, dans Tinkercad Circuits. Cette recette ne vaut pas validation avec un accès élève ni observation pédagogique en classe.

## Modèles distincts

- Départ élève partagé, inchangé : https://www.tinkercad.com/things/d5FVvQDz9b4-codecraft-ma-premiere-lumiere-depart-eleve . Montage D8 → résistance 220 Ω → LED externe → GND, avec LOW dans on start.
- Référence professeur privée : https://www.tinkercad.com/things/hHwSiKvaHwY/editel . Nom : CodeCraft — Programmer un signal — Référence professeur. Copie du prototype initial ; conserver celui-ci séparément.

## Essais effectués

- Une pile dans forever : HIGH sur 8, wait 1 secs, LOW sur 8, wait 1 secs ; on start vide. Simulation lancée, états lumineux et poursuite de la simulation constatés.
- Première attente changée à 2, seconde conservée à 1 ; simulation lancée sans erreur. Les valeurs et l’ordre des blocs ont été contrôlés. Pas de mesure instrumentée des durées.
- Retrait de LOW par clic droit → Delete Block : les deux attentes restent dans la pile. La LED reste allumée après un cycle. Ce retrait ne demande pas de supprimer la seconde attente.
- Restauration par ajout de set pin, réglage de la sortie à 8 et de l’état à LOW, entre les deux attentes ; simulation relancée.

Les variantes ont été essayées successivement sur la référence privée, simulation arrêtée avant chaque modification. Il ne s’agit pas de trois départs élève publiés. La référence finale est remise à 1 / 1, puis rechargée : nom et pile de blocs conservés. Lors de la restauration, les annulations de la barre principale ont affecté les fils plutôt que les blocs ; les trois fils ont été rétablis par Rétablir et le montage relancé. Pour retirer uniquement LOW, utiliser le menu du bloc, pas l’annulation générale du circuit.

## Vérifications encore distinctes

- Accès, création d’une copie et réouverture avec l’accès élève réel.
- Observation de trois cycles complets et comparaison des durées en cours, avec prévision et explication de l’élève.
- Manipulation autonome de la copie Signal-a-completer, sans modifier Mon-signal.
- Choix d’un autre rythme et reprise de la sauvegarde élève.

Le rendu de la page et le chargement du guide sont vérifiés dans le navigateur local. Le schéma est une aide de lecture, pas une capture de l’éditeur.
