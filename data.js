const wikiData = {
    mecanic: [
        {
            name: "lore",
            content: `
<p>lore's content</p>
`
        },
        {
            name: "map",
            content: `
<p>map's content</p>
`
        },
        {
            name: "random",
            content: `
<p>random's content</p>
`
        }
    ],
    monster: [
        {
            name: "lizard",
            img: "path/to/lizard.png",
            description: `
<p>lizard's desc</p>
`,
            capacities: [
                {
                    name: "walk",
                },
                {
                    name: "run",
                    description: `this is faster`
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
            cost: [
                {name: "action", quantity: 1},
                {name: "metal", quantity: 1}
            ],
            scrap: [
                {name: "metal", quantity: 1}
            ],
            effect: {
                monster: "lose 1 hp",
                scientific: "get to the ground, make noise"
            },
            description: `
<p>piques's desc</p>
`
        }
    ]
}
