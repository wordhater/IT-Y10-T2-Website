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
    fetch("../data/settings.json")
        .then((res) => res.json())
        .then((json) => {
            var root = document.querySelector(':root');
            console.log(json)
            // set font
            root.style.setProperty('--font', json.font)
            // set theme
            if (json.theme == 1){
                document.body.classList.add("lightmode")
            } else {
                document.body.classList.remove("lightmode")
            }
            // WIP animations
        })
        .catch((e) => {console.error(e); return 0});

}
setTimeout(() => {apply_settings()}, 100)