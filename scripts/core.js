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