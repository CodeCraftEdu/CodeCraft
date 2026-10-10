# Ma première lumière — recette Tinkercad

Vérification du 8 octobre 2026, sur le compte professeur connecté. Cette recette concerne la première leçon du parcours permanent ; l’atelier KidnKod combine circuit et clignotement et conserve des préparations supplémentaires.

## Supports créés

- [Départ élève — Ma première lumière](https://www.tinkercad.com/things/d5FVvQDz9b4-codecraft-ma-premiere-lumiere-depart-eleve) : accessible à toute personne disposant du lien, sans référencement dans la galerie publique. L’élève crée sa copie avant de travailler.
- [Prototype professeur de clignotement](https://www.tinkercad.com/things/kUxQEjpMKHl-codecraft-robotique-01-allumer-une-led) : privé, HIGH 3 s puis LOW 3 s dans forever. Il anticipe la leçon suivante et ne sert pas de départ à la première lumière.

## Montage et commande

Arduino Uno R3 simulé : D8 → résistance 220 Ω → anode de la LED rouge externe ; cathode → GND. Pas de plaque d’essai ni de matériel physique.

Le modèle élève utilise Blocks. Un seul bloc `set pin 8 to LOW` est placé dans `on start`. Il n’y a ni attente ni bloc `forever`. LOW signifie ici éteinte ; HIGH signifie allumée. Le modèle enregistré revient à LOW.

## Essais réalisés

1. Copie du prototype créée, renommée, puis simplifiée sans modifier les fils.
2. Simulation avec LOW : LED externe éteinte.
3. Arrêt, remplacement de LOW par HIGH, relance : même LED externe allumée, sans avertissement visible.
4. Arrêt puis retour à LOW ; copie retrouvée dans le tableau de bord sous son nouveau nom.

La résistance et le câblage avaient été contrôlés sur le prototype avant duplication. Ces essais établissent le fonctionnement des deux états dans le simulateur sur le compte professeur, pas l’accès depuis un compte élève ni une validation électrique sur du matériel réel.

## Rattachement réalisé

Le lien du modèle est disponible dans le guide professeur et dans « Ouvrir le circuit de départ » sur la page élève. Les consignes de préparation expliquent la création d’une copie et la demande d’aide si la connexion bloque.

Après accord explicite de l’utilisateur, `Share link` a été enregistré et confirmé par l’interface : « Shared Link » et « Design is viewable by anyone with the link ». Le prototype de clignotement reste privé. La licence Attribution 3.0 déjà présente est conservée.

Le partage porte sur la consultation du modèle et sa copie. Ne pas distribuer le lien `Invite people` de l’éditeur : il autorise la modification de l’original. La session du propriétaire ne permet pas de vérifier la création d’une copie par un autre compte.

## Vérifications restantes

- Accès avec un compte différent, puis création et reprise d’une copie élève ; la session du propriétaire ne prouve pas ces points.
- Démonstration du fil manquant sur une copie professeur, suivie de sa restauration.
- Organisation de l’accès de classe si le contexte de cours l’exige.
- Pour l’atelier KidnKod complet : autres supports de départ, durées 1 s / 1 s, modification 2 s / 1 s et reprise au cours suivant. Le prototype 3 s / 3 s ne valide pas ces activités.
