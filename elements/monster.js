customElements.define(
    "hb-wiki-monster",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'})

            this.titleEl = document.createElement("h1")
            this.shadowRoot.appendChild(this.titleEl)

            this.img = document.createElement("img")
            this.shadowRoot.appendChild(this.img)

            this.description = document.createElement("div")
            this.shadowRoot.appendChild(this.description)

            this.shadowRoot.append("Capacities")
            this.capacities = document.createElement("ul")
            this.shadowRoot.appendChild(this.capacities)

            this.shadowRoot.append("Talents")
            this.talents = document.createElement("ul")
            this.shadowRoot.appendChild(this.talents)

        }

        updateContent() {
            const data = wikiData.monster.find(monster => monster.name === this.path)
            this.titleEl.textContent = data.name
            this.img.src = data.img
            this.description.innerHTML = data.description

            while (this.capacities.firstElementChild) { this.capacities.firstElementChild.remove() }
            for (let capacity of data.capacities) {
                let el = document.createElement("li")
                el.innerHTML = capacity.name + " : " + capacity.description
                this.capacities.appendChild(el)
            }

            while (this.talents.firstElementChild) { this.talents.firstElementChild.remove() }
            for (let telent of data.talents) {
                let el = document.createElement("li")
                el.textContent = telent.name + " : " + telent.description
                this.talents.appendChild(el)
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
