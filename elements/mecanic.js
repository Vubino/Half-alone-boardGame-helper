customElements.define(
    "hb-wiki-mecanic",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'})

            let title = document.createElement("h1")
            title.id = "title"
            let body = document.createElement("div")
            body.id = "body"

            this.shadowRoot.appendChild(title)
            this.shadowRoot.appendChild(body)
        }

        updateContent() {
            const data = wikiData.mecanic.find(meca => meca.name === this.path)
            this.shadowRoot.querySelector("#title").textContent = data.name
            this.shadowRoot.querySelector("#body").innerHTML = data.content
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
