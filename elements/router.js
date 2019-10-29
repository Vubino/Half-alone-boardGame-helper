function fillFooter(footer) {
    for (let type in wikiData) {
        if (wikiData.hasOwnProperty(type)) {
            let category = document.createElement("div")
            category.classList.add("footerCategory")
            footer.appendChild(category)

            let title = document.createElement("div")
            title.classList.add("footerCategoryTitle")
            title.textContent = type
            category.appendChild(title)

            let span = document.createElement("span")
            span.textContent = "ቖ"
            category.appendChild(span)
            for (let object of wikiData[type]) {
                let link = document.createElement("a")
                link.classList.add("footerElement")
                link.textContent = object.name
                link.href = `#${type}/${object.name}`
                category.appendChild(link)

                let span = document.createElement("span")
                span.textContent = "ቖ"
                category.appendChild(span)
            }
        }
    }
}

customElements.define(
    "hb-wiki-router",
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'})
            this.body = document.createElement("div")
            this.body.id = "body"
            this.shadowRoot.appendChild(this.body)

            const footer = document.createElement("div")
            footer.id = "footer"
            fillFooter(footer)
            this.shadowRoot.appendChild(footer)

            window.onhashchange = () => {
                this.path = window.location.hash.substring(1)
            }
            console.log(this)
        }

        updateContent() {
            console.log(this.path)
            let split = this.path.split("/")
            console.log(split)
            let body = document.createElement(`hb-wiki-${split.shift()}`)
            body.path = split.join("/")

            while (this.body.firstElementChild) {
                this.body.firstElementChild.remove()
            }
            this.body.appendChild(body)
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (name === "path") {
                if(newValue !== oldValue) {
                    window.location.hash = newValue
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
