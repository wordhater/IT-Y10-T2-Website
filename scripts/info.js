let terms = {
    "words": ["Doxing", "Trolling"],
    "define": ["Doxing is the act of revealing private information about a person",
"A person who deliberately posts mean or offensive images and texts to social media or messaging platforms. This is generally in pursue of reactions"],
    "external": ["", ""]
}
function search(){
    console.log('searching')
    let text = document.getElementById("search-text").value
    let keys = terms.words
    document.querySelectorAll(".search-list-item").forEach(element => {
        element.remove()
    })
    if (text == ""){return 1}
    for (let i = 0; i<keys.length; i++) {
        if (keys[i].toLowerCase().includes(text.toLowerCase())){
            document.getElementById('search-list').appendChild(create(
`<a class="list-item search-list-item" id=";list-item-${i}">
    <h2>${terms.words[i]}</h2>
    <p>${terms.define[i]}</p>
</a>`))
        }
    }
}

// listener for keypresses in search bar
function listener() {
    var searchbox = document.getElementById('search-text')
    searchbox.addEventListener("keydown", function(e){
        console.log("type")
        setTimeout(search, 100)
    })
}
setTimeout(listener, 1000)

function load_data() {
    for (let i = 0; i < terms.words.length; i++){
        document.getElementById('all-list').appendChild(create(
`<a class="list-item" id=";list-item-${i}" href="${terms.external[i]}">
    <h2>${terms.words[i]}</h2>
    <p>${terms.define[i]}</p>
</a>`))
    }
}

setTimeout(() => {load_data()}, 200)
