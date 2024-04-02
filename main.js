// CREDIT: https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  

let eggCount = 0;
let cheatChance = 0;

async function playVideo(){
    let videoHider = document.getElementById("videohider")
    videoHider.hidden = false

    let main = document.getElementById("main")
    main.hidden = true

    let content = document.getElementById("content")
    await content.play();

}

function eggEvent(){
    let rng = Math.random() * 100;
    console.log(eggCount + " vs " + rng);
    if (rng < eggCount){
        playVideo()
    }
    else {
        let cclabel = document.getElementById("cclabel")
        cclabel.innerText = ("Chance to open the egg: " + eggCount + "%")
    }
}

// binded to egg element's onclick
function eggClick(){
    let rngAdd = Math.round((Math.random() * 3) + 1)
    cheatChance = cheatChance + rngAdd
    if (cheatChance == 10){
        let rngX = Math.round(Math.random() * 100);
        let rngY = Math.round(Math.random() * 100);
        let cheategg = document.getElementById("cheategg")
        cheategg.style.left = rngX + "%";
        cheategg.style.top = rngY + "%";
        cheategg.hidden = false
    }
    if (cheatChance > 10){
        cheatChance = 0;
        cheategg.hidden = true
    }

    let adjust = (Math.round(Math.random()) * 2) - 1
    let body = document.body
    console.log(adjust)
      
    if (adjust > 0){
        body.style.backgroundImage = "url(media/green.png)"
    }
    else {
        body.style.backgroundImage = "url(media/red.png)"
    }
    eggCount = eggCount + adjust
    eggEvent()
}

// binded to cheat menu
function cheatClick(type){
    cheatChance = 0
    cheategg.hidden = true
    console.log("CHEAT")
    console.log(type)
    if (type == 2){
        eggCount = eggCount * 2
    }
    else {
        eggCount = Math.round(eggCount * 0.5)
    }
    cclabel.innerText = ("Chance to open the egg: " + eggCount + "%")

    let cheatmenu = document.getElementById("cheatmenu")
    cheatmenu.hidden = true
}

function openCheat(){
    let cheatmenu = document.getElementById("cheatmenu")
    cheatmenu.hidden = false
}