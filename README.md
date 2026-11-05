# dbz-recap-fr

Petit guide de découverte en français, adapté au téléphone, pour comprendre
Dragon Ball et Dragon Ball Z en environ six minutes.

## Ouvrir le guide

Ouvrir [index.html](./index.html) dans un navigateur en conservant
[styles.css](./styles.css), [script.js](./script.js) et le dossier
[images/](./images/) à côté du fichier. Aucun outil de compilation ni aucune
dépendance ne sont nécessaires. Le récit et l'animation fonctionnent hors ligne ;
seule la vidéo YouTube demande Internet.

Les fichiers sont séparés pour faciliter les modifications :

- [index.html](./index.html) : contenu du guide et structure.
- [styles.css](./styles.css) : mise en page, responsive et effets visuels.
- [script.js](./script.js) : progression de lecture, éveil au défilement et vidéo.
- [images/](./images/) : illustrations et portraits locaux.

Le guide comprend quatre chapitres :

1. Les origines de Dragon Ball.
2. Les Saiyans.
3. Namek et Freezer.
4. Cell et Boo en accéléré.

Il inclut une frise chronologique et des fiches personnages. Sans JavaScript,
le récit et les fiches restent accessibles. Le récit s'arrête à la saga de Boo.
Il privilégie les grands repères et les liens entre les héros, sans développer
les combats secondaires ni les détails techniques.

## Transformation Super Saiyan

L'éveil de Goku se révèle au défilement, sans clic : le visuel retrouve ses
couleurs et une aura dorée apparaît autour de lui. Les trois étapes suivent
l'avancée dans la page, y compris en remontant. Cette animation réutilise la
boucle de progression de lecture, sans bibliothèque ni défilement imposé.

Sans JavaScript ou avec la préférence « réduire les animations », l'image
complète reste visible, sans effet animé.

La [vidéo YouTube choisie](https://www.youtube.com/watch?v=obj1GFwRdo8) est
intégrée directement dans la section, en VOSTFR, sans volet à ouvrir. Le lecteur
`youtube-nocookie.com` utilise le chargement différé et ne lance pas la vidéo
automatiquement. Il reste présent sans JavaScript.
En ouvrant le HTML depuis le disque, YouTube peut bloquer la lecture car son
lecteur exige une identification HTTP du site d'origine. Le lien YouTube reste
accessible ; un hébergement HTTP ou HTTPS permet l'intégration normale.
La vidéo nécessite Internet ; le récit et l'animation fonctionnent hors ligne.

## Images

Le guide affiche 25 images WebP du dossier [images/](./images/) :
17 visuels pour la couverture et les sagas, et 8 fichiers du sous-dossier
personnages dans les fiches. Les scènes gardent leurs proportions et disposent de
textes alternatifs et de légendes. Les portraits accompagnent le nom de leur
personnage, sans le répéter aux lecteurs d'écran.

L'image du [Commando Ginyu](./images/11-commando-ginyu.webp) reste disponible dans
le dossier mais n'est plus affichée : cette sous-intrigue est exclue du résumé.

Les illustrations du récit sont intercalées après les passages correspondants
dans le HTML. Sur téléphone, elles suivent donc leur texte au fil de la lecture ;
sur ordinateur, les textes et leurs images sont disposés côte à côte.

La couverture est chargée en priorité ; les autres images utilisent le
chargement différé natif du navigateur. Les dimensions sont déclarées pour
réserver leur place pendant le chargement. Les fiches sans portrait fourni
conservent un emblème symbolique.

Les fichiers fournis sont conservés tels quels. Deux sont encore des visuels
d'attente à remplacer en gardant leurs noms :
[le combat contre Raditz](./images/04-combat-goku-piccolo-raditz.webp) et
[Piccolo](./images/personnages/portrait-piccolo.webp).
Certaines images montrent des scènes plutôt que des portraits.
Le fichier [portrait-krilin.webp](./images/personnages/portrait-krilin.webp)
montre surtout le Grand Doyen : il illustre donc sa fiche, tandis que Krilin
conserve son emblème. Les légendes tiennent compte du contenu réel des visuels.

## Hébergement

### Aperçus de partage

Le HTML contient les métadonnées Open Graph (WhatsApp, Facebook, etc.) et
Twitter Card : titre, description en français et image JPEG dédiée de
1 200 × 630 pixels, [images/partage-dragon-ball.jpg](./images/partage-dragon-ball.jpg).
Elles sont disponibles sans JavaScript et ne changent pas l'affichage du guide.

L'adresse publique configurée est
<https://sephizack.github.io/dbz-recap-fr/>. En cas de changement
d'hébergement, mettre à jour les URL absolues dans la balise `canonical` et les
métadonnées `og:url`, `og:image`, `og:image:secure_url` et `twitter:image`.
Le HTML et le JPEG doivent être accessibles publiquement en HTTPS, sans
authentification ni blocage des robots de partage.

WhatsApp choisit la présentation de l'aperçu et peut conserver une ancienne
version en cache. Après publication, tester dans un nouveau message avec
`https://sephizack.github.io/dbz-recap-fr/?v=2` pour demander un
aperçu avec une URL distincte. Un message déjà envoyé ne sera pas forcément
actualisé.

Publier [index.html](./index.html), [styles.css](./styles.css),
[script.js](./script.js) et le dossier [images/](./images/) sur un hébergement
statique, en conservant les noms et chemins relatifs, y compris le sous-dossier
[images/personnages/](./images/personnages/).

Pour partager le guide hors ligne, envoyer une archive ZIP contenant les trois
fichiers du site et le dossier d'images. Télécharger le HTML seul ne suffit pas.
