const wikiData = {
    mecanic: [
        {
            name: "lore",
            content: `
<h1>Histoire</h1>

<p>
Vous êtes chercheurs dans un laboratoire ultra secret sur la lune. Votre but est de modifier génétiquement des animaux pour les rendre plus rentables.<br><br>
Dernièrement, le gouvernement vous à demander de créer des créatures pouvant remplacer les soldats sur le champ de bataille : des monstres capables de résister à des explosions en série, capable de se régénérer en mangeant leurs adversaire; Des créatures maîtresses dans l'art de la destruction.<br><br>
Un matin l'alarme sonne... Vous connaissez cette alarme : ce n'est pas une perte d'oxygène... ni un problème de micro-gravité... C'est bien pire... L'un d'eux s'est échappé... Des mesures de sécurité on été prises. L'électricité à été coupé pour le bloquer derrière la porte du laboratoire, vous avez une lampe torche pour ses situations là. Aucun espoir de voir des secours arriver à temps, il leur faut au moins 1 mois pour préparer une mission de sauvetage.<br><br>
</p>
<h3>C'est lui ou vous.</h3>
`
        },
        {
            name: "map",
            content: `
<p>la taille de la carte depend du nombre de scientifique</p>

<table>
    <tr>
        <th>nb scientifique</th>
        <th>taille</th>
        <th>nb cases</th>
        <th>difference</th>
    </tr>
    <tr>
        <td>1</th>
        <td>6 x 6</th>
        <td>36</th>
        <td></th>
    </tr>
    <tr>
        <td>2</th>
        <td>8 x 6</th>
        <td>48</th>
        <td>12</th>
    </tr>
    <tr>
        <td>3</th>
        <td>8 x 7</th>
        <td>56</th>
        <td>8</th>
    </tr>
    <tr>
        <td>4</th>
        <td>9 x 7</th>
        <td>63</th>
        <td>7</th>
    </tr>
    <tr>
        <td>5</th>
        <td>9 x 9</th>
        <td>81</th>
        <td>18</th>
    </tr>
</table>
`
        },
        {
            name: "random",
            content: `
<p>Le jeu peux se jouer avec *4d6*, *2d10* ou *1d20* (ou tout ensemble de dés permettant un résultat proche de 5%)</p>

<p>Les proba sont affiché pour les 3 groupes de dès proposés à chaque fois</p>

> Exemple :  <br>
>  <br>
> d: 8|4|1(5%)  <br>
>  <br>
> indique que l'événement se produit si  <br>
> 4d6 font un résultat <= 8  <br>
> 2d10 font un résultat <= 4  <br>
> 1d20 font un résultat <= 1  <br>
>  <br>
> ce qui est proche de 5% de chance  <br>
`
        }
    ],
    monster: [
        {
            name: "lizard",
            img: "path/to/lizard.png",
            description: `
<p>ce lézard n'est pas un simple lézard, c'est un géant agile et rapide pouvant se cacher</p>
`,
            capacities: [
                {
                    name: "marcher",
                    description: ``
                },
                {
                    name: "odorat",
                    description: `
(nécessite position assassin) désigne 1 case sans portée maximale :
<ul>
    <li>les survivants doivent dire s'il sont sur cette case ou une case atteignable en 2 déplacements</li>
    <li>les survivants sur la case désignée deviennent effrayés pendant 3  tours</li>
</ul>`
                },
                {
                    name: "courir",
                    description: `
(nécessite position chasseur) déplacement de 3 cases au lieu de 2`
                },
                {
                    name: "odorat",
                    description: `
(nécessite position chasseur) désigne 1 case sans portée maximale :
<ul>
    <li>les survivants doivent dire s'il sont sur cette case</li>
    <li>les survivants sur la case désignée ou une case atteignable en 2 déplacements deviennent effrayés pendant 3  tours</li>
</ul>`
                },
                {
                    name: "trainer un corps",
                    description: `
(nécessite position chasseur) désigne 1 case sans portée maximale :
<ul>
    <li>déplace le monstre ainsi qu'un joueur a terre sur une position adjacente</li>
    <li>les effet de marcher(du monstre) s'appliquent sur les deux joueurs</li>
    <li>le joueur a terre laisse une traînée de sang</li>
    <li>le joueur ne peux pas se deplacer ce tour ci</li>
</ul>`
                },
                {
                    name: "changer de position",
                    description: `
alterne entre la position de chasseur et la position assassin`
                }
            ],
            talents: [
                {
                    name: "silent",
                    description: "in assassin stance, you have 50% not to be detected by scientist"
                }
            ]
        },
        {
            name: "slime",
            img: "path/to/slime.png",
            description: `
<p>slime's desc</p>
`
        }
    ],
    trap: [
        {
            name: "piques",
            description: `
<p>piques's desc</p>
`,
            costs: [
                {name: "action", quantity: 1},
                {name: "metal", quantity: 1}
            ],
            scraps: [
                {name: "metal", quantity: 1}
            ],
            effects: {
                monster: "lose 1 hp",
                scientist: "get to the ground, make noise"
            }
        }
    ]
}
