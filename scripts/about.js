// typing effect

let index = 0
function type(elements, texts, speed){
    let skips = 0
    console.log("running")
    for (let i = 0; i<elements.length; i++) {
        if (index < texts[i].length) {
            elements[i].innerHTML += texts[i].charAt(index)
        } else {skips += 1}}
    index++
    if (skips != elements.length){
        setTimeout(() => {type(elements, texts, speed)}, speed)
    }
}
console.log("about script loaded")
setTimeout(() => {type([document.getElementById('typing'), document.getElementById('typing-2')], ["About Us", "Why this site was built"], 100)}, 1000)

