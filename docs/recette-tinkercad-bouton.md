# Recette Tinkercad — RB03 / RB04 : bouton et deux actions

Essais du 9 octobre 2026, dans Tinkercad Circuits, interface anglaise, compte professeur connecté. Préparation technique avant intégration des deux leçons au site. Aucun essai avec un compte élève distinct ; aucune validation pédagogique en classe.

## Ressources créées et conservées

Les cinq ressources sont désormais **partagées par lien**, conformément à l’autorisation de l’utilisateur ; voir [le suivi des partages](partage-tinkercad.md). Les références et le diagnostic restent pédagogiquement réservés aux guides professeur. L’accès élève, la copie et la reprise n’ont pas encore été validés.

| Ressource | Usage | Lien |
| --- | --- | --- |
| Diagnostic de lecture | Démonstration professeur de D2, sans condition à construire | [Diagnostic](https://www.tinkercad.com/things/0HMEwEsJtNV-codecraft-bouton-diagnostic-de-lecture) |
| Référence si sinon | Programme complet, LED allumée pendant l’appui | [Référence principale](https://www.tinkercad.com/things/ed9JYU40iMH-codecraft-bouton-reference-si-sinon) |
| Référence inversée | Même question, deux actions échangées | [Référence inversée](https://www.tinkercad.com/things/d1QIg2g5Q82-codecraft-bouton-reference-inversee) |
| Départ élève préconnecté | Base de secours avec circuit complet, sans solution si/sinon | [Départ préconnecté](https://www.tinkercad.com/things/5Vadi6a5zpK-codecraft-bouton-depart-eleve-preconnecte) |
| Départ élève à relier | Même base, seul le fil D2 → Terminal 2a est absent | [Départ à relier](https://www.tinkercad.com/things/fgtbRtaPp9X-codecraft-bouton-depart-eleve-a-relier) |

Les circuits de Ma première lumière et Programmer un signal ont été conservés. Les nouvelles ressources sont des duplications distinctes ; aucun ancien modèle n’a été remplacé.

## Montage réel

- Arduino Uno R3 ; sortie D8 → résistance 220 Ω → anode de la LED externe ; cathode → GND.
- Bouton `Pushbutton` ; 5 V → `Terminal 1a` ; D2 → `Terminal 2a`.
- `Terminal 2b` → résistance 10 kΩ → GND. Les bornes 2a et 2b appartiennent au même côté du contact ; le bouton relie les deux côtés pendant l’appui.
- Les bornes sont relevées dans l’interface du composant, pas déduites d’une consigne générique « gauche/droite ». Ne pas transposer leurs positions si le composant est tourné.
- Dans le départ à relier, toutes les résistances et autres connexions restent présentes. Seul le fil de lecture D2 manque. Ne pas interpréter sa lecture avant connexion : l’entrée est alors déconnectée.

La création de ce fil entre `Terminal 2a` et D2 a été effectuée dans cette copie puis le fil a été retiré pour conserver le départ incomplet. La base préconnectée reste disponible si les gestes ralentissent l’élève.

## Blocs relevés

Libellés anglais observés, à adapter si la langue de l’accès élève est différente :

- Input : `read digital pin`, broche `2`.
- Math : comparaison `=` ; valeur `HIGH`.
- Control : `forever` et `if then else`.
- Output : `set pin 8 to HIGH` / `set pin 8 to LOW`.

Programme principal : dans `forever`, `if read digital pin 2 = HIGH`, alors `set pin 8 to HIGH`, sinon `set pin 8 to LOW`. `on start` vide. Aucun délai ni autre commande concurrente de D8.

Programme inversé : même condition ; alors LOW, sinon HIGH. `on start` vide ; aucun délai.

Départs élèves : `on start` contient seulement `set pin 8 to LOW`, et `forever` est vide. Pas de comparaison ni de moniteur série. Lors de la construction du modèle, retirer LOW de `on start` pour retrouver exactement la référence, puis mettre les deux commandes dans leurs branches.

Diagnostic professeur : `on start` éteint D8 ; `forever` affiche `read digital pin 2` via `print to serial monitor` avec `newline`. Le moniteur est un outil de démonstration préparé, **pas un nouvel objectif à enseigner**. Il n’est pas présent dans les départs élèves.

## Résultats observés

| Essai | Repos | Appui maintenu | Relâchement |
| --- | --- | --- | --- |
| Diagnostic D2 | 0 | Série de 1 | Retour à 0 |
| Règle principale | LED éteinte | LED allumée | LED éteinte |
| Règle inversée | LED allumée | LED éteinte | LED allumée |

Les deux références ont été lancées et plusieurs appuis ont été effectués. Les états lumineux opposés ont été observés. Les captures automatisées ne constituent pas un enregistrement continu de chaque maintien : conserver une recette visuelle complète avec l’accès utilisé en cours, notamment pour vérifier l’absence de clignotement pendant un maintien prolongé.

Geste essayé : **maintenir le bouton de souris enfoncé sur le centre du bouton simulé, puis relâcher**. Un Shift-clic n’a pas permis d’établir un maintien persistant ; ne pas le prescrire. Aucun accès clavier testé.

Le départ préconnecté démarre avec la LED éteinte. Il n’est volontairement pas encore réactif au bouton : l’élève doit construire la règle. Les simulations ont été arrêtées avant de conserver les modèles.

## Schéma d’action manquante

Support de lecture seulement, pas un programme incomplet à exécuter ni une copie supplémentaire à ouvrir :

```text
Consulter de nouveau le bouton
  Si le bouton est appuyé maintenant : Allumer la LED
  Sinon : [action à choisir]
Recommencer la consultation
```

Réponse professeur : Éteindre la LED. Faire vérifier le rôle de cette action dans le modèle complet, par un appui puis un relâchement. Ne pas supprimer sinon dans le projet fonctionnel.

## Avant distribution et intégration

- Partage des cinq ressources effectué ; ne pas distribuer les solutions comme départs élèves.
- Tester depuis un accès élève distinct l’ouverture, la duplication, l’enregistrement et la reprise ; préserver `Mon-signal`, puis conserver `Mon-bouton` et `Mon-bouton-inverse` séparément.
- Refaire deux cycles repos → maintien prolongé → relâchement sur chaque référence, avec observation continue de la LED ; vérifier les gestes disponibles à cet accès.
- Schémas de connexion et de trace ajoutés au site ; le cas sinon manquant reste un schéma de lecture textuel, sans copie à casser.
- RB03 et RB04 intégrées comme deux leçons distinctes et leurs guides : `robotique-bouton` et `robotique-decision`. Pas de compteur d’appuis ni d’événement de clic.

Les points de recette élève restent dans [les vérifications manuelles](verifications-manuelles-en-attente.md). La préparation technique ne démontre ni autonomie ni compréhension d’un élève.
