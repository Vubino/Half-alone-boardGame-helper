const routes = [
    { hash: /#home/, html: 'pages/home/home.html', js: 'pages/home/home.js', default: true },
    { hash: /#test([0-9]*)/, html: 'pages/home/home.html', js: 'pages/home/home.js', call: 'appendArgs' },
    { hash: /#a([0-9]+)&([0-9]+)/, js: 'pages/home/home.js', call: 'appendArgs' }
]

let home = routes.find(i => i.default)
let currentFile = ""
if (! home) {
    home = routes[0]
}

window.onhashchange = () => {
    let result = null;
    let route = null;

    for (var i = 0; i < routes.length && result === null; i++) {
        route = routes[i]
        route.hash.lastIndex = 0
        result = route.hash.exec(window.location.hash)
    }

    if (! result) {
        console.log("could not recognize route : " + window.location.hash)
        window.location.hash = home.hash.source
        return
    }

    changeHTML(route.html).then(a => {
        // console.log("success")
        document.body.innerHTML = a
    }).catch(a => {
        // console.log("error")
        // console.log(a)
    }).then(() => {
        args = result.filter((_, i) => i !== 0)

        addScriptTag(route.js).then(() => {
            if (window[route.call]) {
                window[route.call](...args)
            }
        }).catch(() => {
            if (window[route.call]) {
                window[route.call](...args)
            }
        })
    })
}

function addScriptTag(src) {
    return new Promise((res, rej) => {
        if (src) {
            if (document.querySelector(`script[src="${src}"]`)) {
                rej("src already present")
                return
            }
            let script = document.createElement("script")
            script.src = src
            document.head.appendChild(script)
            script.onload = () => res(src)
            script.onerror = e => rej(e)
        } else {
            rej("no src provided")
        }
    })
}

function changeHTML(src) {
    return new Promise((res, rej) => {
        if (src) {
            if (currentFile === src) {
                console.log("a")
                rej("file already displayed")
                return
            }
            currentFile = src
            let xhttp = new XMLHttpRequest()

            xhttp.onreadystatechange = () => {
                if (xhttp.readyState === xhttp.DONE) {
                    if (xhttp.status === 200) {
                        res(xhttp.responseText)
                    } else {
                        rej({status: xhttp.status, text: xhttp.statusText})
                    }
                }
            }

            xhttp.open('GET', src);
            xhttp.send();
        } else {
            rej("no src provided")
        }
    })
}

window.onhashchange()
