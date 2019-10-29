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
