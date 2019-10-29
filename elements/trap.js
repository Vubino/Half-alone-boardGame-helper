customElements.define(
    "hb-wiki-trap",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'})
            this.body = document.createElement("div")
            this.body.id = "body"
            this.shadowRoot.appendChild(this.body)
        }

        updateContent() {
            this.body.textContent = this.path
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
