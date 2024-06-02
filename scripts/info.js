// dictionary containing all information needed for the info center
let terms = {
    "words": ["Doxing", "Trolling", "Cyberbullying", "Blocking", "Trojan horse", "Keyloggers", "Encryption", "Backups", "Malware", "Browser Extension",
"Firmware", "BIOS", "Operating System", "Antivirus software", "2 Factor Authentication", "Phishing", "Scams", "Remote Desktop"],
    "define": ["Doxing is the act of revealing private information about a person",
"A person who deliberately posts mean or offensive images and texts to social media or messaging platforms. This is generally in pursue of reactions",
"Cyberbullying is when someone uses the internet with the intention of causing harm to another person",
"Blocking someone online means to use an inbuilt function in the platform to prevent them from sending further messages",
"The Trojan horse was said to have been used by the greeks to attack a city. The horse was given to the enemy as a gift, however it contained soldiers that weakened the cities defense, allowing for further attacks.",
"A piece of software that runs on a computer and logs every input from a keyboard",
"Encryption is a means used in many different fields to hide data or other information from unintended viewer.",
"Backups are a means of preventing data loss through keeping multiple copies of your files, they can be done in many different ways, through a cloud storage provider or another drive",
"Malware is a piece of software that runs on a computer intended to disrupt, damage or gain unauthorised access to a computer system. Their purposes range greatly, from using your system resources for their own gain, to spying on your activities on your computer",
"A browser extension is a piece of software that can be added to a browser for more features, tools and tweaks to webpages to change their design",
"Firmware is software that provides base level control of a computer or similar hardware, it usually serves as a base level function for controlling the hardware",
"A BIOS is a type of firmware specific to PC's, it serves as a base that an operating system can boot from and allows the user some control over how it starts the Operating system",
"An Operating System shares some similarities with firmware. However, it is more advanced and runs at a higher level. The operating system performs tasks such as managing processes, memory, drivers,  I/O and networking. This part of your system can be swapped out, reinstalled and even have two installed alongside each other.",
"Antivirus software is a piece of software created to detect and remove malware from a computer",
"2 factor authentication, in short, is a technology that sends an email containing a code to you to confirm it's really you. However it has proven highly effective at protecting accounts from leaked passwords",
"Phishing is a means that cyber criminals use to trick you into giving them personal information, this can be performed over email, messages, social media and any other means of communication. In many cases it can be challenging to spot and even come from someone you know online.",
"A scam is a common means cybercriminals use to compromise accounts, computers or steal money. They are often extremely advanced and come in many shapes and sizes.",
"Remote Desktop software is often used for legitimate purposes as it allows another person such as a technician to remotely access your pc and fix issues you may have. However, it is also used in a scam setting for similar reasons.",

],
    
    "external": ["cyberbullying.html#doxing", 
"https://www.esafety.gov.au/young-people/trolling",
"cyberbullying.html",
"cyberbullying.html#blocking",


"https://en.wikipedia.org/wiki/Trojan_Horse",
"https://www.malwarebytes.com/keylogger",
"https://en.wikipedia.org/wiki/Encryption",
"https://www.cyber.gov.au/protect-yourself/securing-your-devices/how-back-up-your-files-and-devices",
"malware.html",
"https://en.wikipedia.org/wiki/Browser_extension",
"https://en.wikipedia.org/wiki/Firmware",
"https://en.wikipedia.org/wiki/BIOS",
"https://en.wikipedia.org/wiki/Operating_system",
"https://en.wikipedia.org/wiki/Antivirus_software",
"https://www.microsoft.com/en-us/security/business/security-101/what-is-two-factor-authentication-2fa",


"phishing.html",
"https://www.cyber.gov.au/threats/types-threats/scams",
"https://en.wikipedia.org/wiki/Remote_desktop_software"
]
}
// search function
function search(){
    console.log('searching')
    let text = document.getElementById("search-text").value
    let keys = terms.words
    document.querySelectorAll(".search-list-item").forEach(element => {
        element.remove()
    })
    if (text == ""){return 1}
    for (let i = 0; i<keys.length; i++) {
        if (terms.words[i].toLowerCase().includes(text.toLowerCase()) || terms.define[i].toLowerCase().includes(text.toLowerCase())) {
            document.getElementById('search-list').appendChild(create(
`<a class="list-item search-list-item" id=";list-item-${i}" target="_blank" href="${terms.external[i]}">
    <h2>${terms.words[i]}</h2>
    <p>${terms.define[i]}</p>
</a>`))
        }
    }
}

// listener for keypresses in search bar | Gives a more responsive result than click to search
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
`<a class="list-item" id=";list-item-${i}" target="_blank" href="${terms.external[i]}">
    <h2>${terms.words[i]}</h2>
    <p>${terms.define[i]}</p>
</a>`))
    }
}

setTimeout(() => {load_data()}, 200)
