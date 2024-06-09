function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function play(id) {
    var audio = document.getElementById(id);
    audio.play();
}
// copied from prior project: useful to create html elements from javascript
function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

// Nav toggle function
function activatenav(){
    if (document.getElementById("nav-activator").classList.contains("active")){
        console.log('closing menu')
        document.querySelectorAll('.menubtn-bar, .dropdown-button, #nav').forEach(element => {
            element.classList.remove("active"); element.classList.add("inactive")});
    } else {
        document.querySelectorAll('.menubtn-bar, .dropdown-button, #nav').forEach(element => {
            element.classList.add("active"); element.classList.remove("inactive")});
    }
}

let animations = true
function apply_settings(){
    let settings = getCookie('settings').split(",")
    console.log(settings)
    document.documentElement.style.setProperty('--font', settings[0])
    // set theme
    document.body.classList.add(settings[1])
    if (settings[1] == "lightmode" | settings[1] == "lightbase"){
        try {
            document.querySelectorAll(".lightclass").forEach(element => {
                element.classList.add("lightmode")
            })
        }
        catch(err) {
            console.log('no elements found for specific lightmode class')
        }
    } else {
        document.body.classList.remove("lightmode")
        try {
            document.querySelectorAll(".lightclass").forEach(element => {
                element.classList.remove("lightmode")
            })
        }
        catch(err) {
            console.log('no elements found for specific lightmode class')
        }
    }
    
    // animations
    if (settings[2] == 1){
        document.getElementById("bgVideo").pause()
        animations = false
    }
}
setTimeout(() => {apply_settings()}, 100)

function process_settings() {
    // get inputs
    let inputs = []
    if (document.querySelectorAll('input[name="font"]:checked').length != 0) {
        inputs[0] = document.querySelector('input[name="font"]:checked').value;
    }else{inputs[0] = "standard"}
    if (document.querySelectorAll('input[name="mode"]:checked').length != 0) {
    inputs[1] = document.querySelector('input[name="mode"]:checked').value;
    }else{inputs[1] = 0}
    if (document.querySelectorAll('input[name="animations"]:checked').length == 0) {
        console.log(0)
        inputs[2] = 0
    } else {
        console.log(1)
        inputs[2] = 1
    }
    // write
    setCookie('settings', inputs)
    location.reload();
}

// Animations

//typing effect

let index = 0
function type(elements, texts, speed){

    let skips = 0
    if (animations){
      elements.forEach(element => {
        element.classList.add('typing')
      });
        for (let i = 0; i<elements.length; i++) {
            if (index < texts[i].length) {
                elements[i].innerHTML += texts[i].charAt(index)
            } else {skips += 1}}
        index++
        if (skips != elements.length){
            setTimeout(() => {type(elements, texts, speed)}, speed)
        } else {
			elements.forEach(element => {
				element.classList.remove('typing')
			});
		}
    } else {
		for (let i = 0; i<elements.length; i++) {
			elements[i].innerHTML = texts[i]
		}
	}
}
