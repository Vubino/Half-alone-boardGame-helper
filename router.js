window.onhashchange = () => {
    const hash = window.location.hash
    if(hash === "") {
        window.location.hash = "home"
        return
    }
    const splitted = hash.substring(1).split("/")

    console.log(`hb-wiki-${splitted[0]}`)
    const el = document.createElement(`hb-wiki-${splitted[0]}`)
}

window.onhashchange()
