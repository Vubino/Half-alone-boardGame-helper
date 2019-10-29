customElements.define(
    "hb-wiki-mecanic",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'})

            this.titleEl = document.createElement("h1")
            this.body = document.createElement("div")

            this.shadowRoot.appendChild(this.titleEl)
            this.shadowRoot.appendChild(this.body)
        }

        updateContent() {
            const data = wikiData.mecanic.find(meca => meca.name === this.path)
            this.titleEl.textContent = data.name
            this.body.innerHTML = data.content
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
