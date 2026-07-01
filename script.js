var LCount = 0;
var ICount = 1;
var KCount = 2;
var ECount = 3;

function changeColors() {
    var avaliableColors = ["#12786f", "#214191", "#cfbc0a", "#a33a17"]
    
    document.getElementById("L").style.color = avaliableColors[LCount];
    document.getElementById("I").style.color = avaliableColors[ICount];
    document.getElementById("K").style.color = avaliableColors[KCount];
    document.getElementById("E").style.color = avaliableColors[ECount];

    LCount++;
    ICount++;
    KCount++;
    ECount++;

    if (LCount > 3) {
        LCount = 0;
    }

    if (ICount > 3) {
        ICount = 0;
    }

    if (KCount > 3) {
        KCount = 0;
    }

    if (ECount > 3) {
        ECount = 0;
    }
}

changeColors();

setInterval(() => {
  changeColors();
}, 3000); 

function resetNav() {
    if (document.head.title == "Handhelds I Like") {
        document.getElementById("controller_link").color = "#105041";
    }
    else {
        document.getElementById("handheld_link").color = "#105041";
    }
}