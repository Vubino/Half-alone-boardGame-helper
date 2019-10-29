customElements.define(
    "hb-wiki-monster",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'})
            this.titleEl = document.createElement("h1")
            this.titleEl.id = "title"
            this.shadowRoot.appendChild(this.titleEl)
            this.body = document.createElement("div")
            this.body.id = "body"
            this.shadowRoot.appendChild(this.body)
        }

        updateContent() {
            const data = wikiData.monster.find(monster => monster.name === this.path)
            this.titleEl.textContent = data.name
            this.body.innerHTML = data.description
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
