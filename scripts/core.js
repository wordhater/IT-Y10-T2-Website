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


function apply_settings(){
    let settings = getCookie('settings').split(",")
    console.log(settings)
    document.documentElement.style.setProperty('--font', settings[0])
    // set theme
    if (settings[1] == 1){
        document.body.classList.add("lightmode")
    } else {
        document.body.classList.remove("lightmode")
    }
}
setTimeout(() => {apply_settings()}, 100)

function process_settings() {
    // get inputs
    let inputs = []
    inputs[0] = document.querySelector('input[name="font"]:checked').value;
    inputs[1] = Number(document.querySelector('input[name="mode"]:checked').value);
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