customElements.define(
    "hb-wiki-trap",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'})

            this.titleEl = document.createElement("h1")
            this.shadowRoot.appendChild(this.titleEl)

            this.description = document.createElement("div")
            this.shadowRoot.appendChild(this.description)

            this.shadowRoot.append("Costs")
            this.costs = document.createElement("ul")
            this.shadowRoot.appendChild(this.costs)

            this.shadowRoot.append("Scrap")
            this.scraps = document.createElement("ul")
            this.shadowRoot.appendChild(this.scraps)

            this.shadowRoot.append("Effect on monster")
            let monsterEffectUl = document.createElement("ul")
            this.shadowRoot.appendChild(monsterEffectUl)
            this.monsterEffect = document.createElement("li")
            monsterEffectUl.appendChild(this.monsterEffect)

            this.shadowRoot.append("Effect on scientist")
            let scientistEffectUl = document.createElement("ul")
            this.shadowRoot.appendChild(scientistEffectUl)
            this.scientistEffect = document.createElement("li")
            scientistEffectUl.appendChild(this.scientistEffect)
        }

        updateContent() {
            const data = wikiData.trap.find(trap => trap.name === this.path)
            this.titleEl.textContent = data.name
            this.description.innerHTML = data.description
            this.monsterEffect.innerHTML = data.effects.monster
            this.scientistEffect.innerHTML = data.effects.scientist

            while (this.costs.firstElementChild) { this.costs.firstElementChild.remove() }
            for (let cost of data.costs) {
                let el = document.createElement("li")
                el.textContent = cost.name + " : " + cost.quantity
                this.costs.appendChild(el)
            }

            while (this.scraps.firstElementChild) { this.scraps.firstElementChild.remove() }
            for (let scrap of data.scraps) {
                let el = document.createElement("li")
                el.textContent = scrap.name + " : " + scrap.quantity
                this.scraps.appendChild(el)
            }
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (name === "path") {
                if(newValue !== oldValue) {
                    this.updateContent()
                }
            }
        }

        static get observedAttributes() {
            return ["path"]
        }

        set path(val) { this.setAttribute("path", val); return this }
        get path() { return this.getAttribute("path") }
    }
)
