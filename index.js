var dialogStyle = {
    "width": "25%",
    "position": "fixed",
    "top": "50%",
    "left": "50%"
}
var angle = 0;

/* New Style x animation fullscreen / noFullscreen */
var styleContactMe = null;
var styleAboutMe = null;
var styleAboutMePhoto = null;
var styleWorks = null;
var styleScattoFisso = null;
var styleBates = null;
var stylePranzo = null;
var styleBrucke = null;
var styleTeodora = null;
var styleArcher = null;

//prende tutti gli elementi con class "draggable" e li rende draggable()
$(".draggable").draggable();

//al caricamento della pagina
$(window).on("load", function () {
    //reset di tutti i dialog
    $(".dialog").css("z-index", 0)

    //rotazione del logo
    rotateLogo(angle);
});

function openDialog(dialogName, delay, { width, top, left }) {

    dialogStyle.width = width;
    dialogStyle.top = top;
    dialogStyle.left = left;
    //mostro il dialog
    $(dialogName).delay(delay).fadeIn(500);

    //aggiungo il css
    $(dialogName).css(dialogStyle);

    bringToFront(dialogName);
}

/*
function openDialog(dialogName, delay, top, left) {

    dialogStyle.top = top;
    dialogStyle.left = left;
    //mostro il dialog
    $(dialogName).delay(delay).fadeIn(500);

    //aggiungo il css
    $(dialogName).css(dialogStyle);

    bringToFront(dialogName);
}*/

//prende tutti gli elementi con class "folder" e gestisce l'evento dblclick (doppio click)

$(".folder").dblclick(function () {
    dialogStyle.width = "25%";

    switch (this.id) {
        case "randomStuff":
            openDialog("#dialogRandomStuff", 0);
            break;

        case "contact_me":
            styleContactMe = { width: "30%", top: "35%", left: "35%" };
            openDialog("#dialogContactMe", 0, styleContactMe);
            //dialogStyle.width = "30%";
            //openDialog("#dialogContactMe", 0, "35%", "35%");
            break;

        case "about_me":
            styleAboutMe = { width: "50%", top: "30%", left: "10%" };
            openDialog("#dialogAboutMe", 500, styleAboutMe);
            styleAboutMePhoto = { width: "203px", top: "70%", left: "5%" };
            openDialog("#dialogAboutMePhoto", 0, styleAboutMePhoto);
            break;

        case "works":
            styleWorks = { width: "44%", top: "10%", left: "40%" };
            openDialog("#dialogWorks", 0, styleWorks);
            break;

        case "scattofisso":
            styleScattoFisso = {
                0: { width: "22.6%", top: "25%", left: "75%" },
                1: { width: "22.6%", top: "40%", left: "2%" },
                2: { width: "50.4%", top: "2%", left: "5%" },
                3: { width: "50.4%", top: "45%", left: "25%" },
                4: { width: "25%", top: "3%", left: "65%" }
            };

            openDialog("#dialogScattofisso01", 0, styleScattoFisso[0]);
            openDialog("#dialogScattofisso02", 500, styleScattoFisso[1]);
            openDialog("#dialogScattofisso03", 1000, styleScattoFisso[2]);
            openDialog("#dialogScattofisso04", 1500, styleScattoFisso[3]);
            openDialog("#dialogScattofissoPhoto", 2000, styleScattoFisso[4]);
            break;

        case "bates":
            styleBates = {
                0: { width: "28%", top: "5%", left: "10%" },
                1: { width: "40%", top: "55%", left: "22%" },
                2: { width: "20%", top: "30%", left: "5%" },
                3: { width: "28%", top: "40%", left: "70%" },
                4: { width: "28%", top: "60%", left: "60%" },
                5: { width: "35%", top: "7%", left: "50%" }
            };

            case "archer":
                dialogStyle.width = "42.3%";
                openDialog("#dialogArcherSpeciment", this.id, 0, "10%", "5%");
                dialogStyle.width = "14.3%";
                openDialog("#dialogArcherIconSistem", this.id, 0, "60%", "70%");
                dialogStyle.width = "30%";
                openDialog("#dialogInfografica", this.id, 0, "15%", "60%");
                dialogStyle.width = "32.15%";
                openDialog("#dialogIconSistemPerUnaBiblioteca", this.id, 0, "60%", "35%");

            case "teodora":
                styleTeodora = {
                    0: { width: "28.5%", top: "10%", left: "55%"},
                    1: { width: "40%", top: "5%", left: "25%"},
                    2: { width: "28.5%", top: "50%", left: "5%%"},
                    3: { width: "35%", top: "60%", left: "30%"},
                    4: { width: "30%", top: "40%", left: "55%" }
                };

                openDialog("#dialogTeodoraInterni", 0, styleTeodora[0]);
                openDialog("#dialogTeodoraCover", 0, styleTeodora[1]);
                openDialog("#dialogTeodoraDettagli", 0, styleTeodora[2]);
                openDialog("#dialogTeodoraText", 0, styleTeodora[3]);
                openDialog("#dialogTeodoraInterni2", 0, styleTeodora[4]);
                break;
            case "bates":
                openDialog("#dialogBates01", 0, styleBates[0]);
                openDialog("#dialogBates06", 500, styleBates[1]);
                openDialog("#dialogBates02", 1000, styleBates[2]);
                openDialog("#dialogBates03", 1500, styleBates[3]);
                openDialog("#dialogBates04", 2000, styleBates[4]);
                openDialog("#dialogBates05", 2500, styleBates[5]);
            break;

        case "pranzo":
            stylePranzo = {
                0: { width: "20%", top: "2%", left: "3%" },
                1: { width: "30%", top: "4%", left: "45%" },
                2: { width: "25%", top: "22%", left: "10%" },
                3: { width: "37%", top: "22%", left: "60%" },
                4: { width: "17%", top: "35%", left: "40%" },
                5: { width: "30%", top: "50%", left: "2%" },
                6: { width: "25%", top: "50%", left: "63%" }
            };

            openDialog("#dialogPranzo01", 0, stylePranzo[0]);
            openDialog("#dialogPranzo03", 500, stylePranzo[1]);
            openDialog("#dialogPranzo02", 1000, stylePranzo[2]);
            openDialog("#dialogPranzo04", 1500, stylePranzo[3]);
            openDialog("#dialogPranzo05", 2000, stylePranzo[4]);
            openDialog("#dialogPranzo06", 2500, stylePranzo[5]);
            openDialog("#dialogPranzo07", 3000, stylePranzo[6]);
            break;

        case "brucke":
            styleBrucke = {
                0: { width: "30%", top: "5%", left: "3%" },
                1: { width: "28%", top: "5%", left: "65%" },
                2: { width: "50%", top: "28%", left: "9%" },
                3: { width: "26%", top: "63%", left: "65%" },
                4: { width: "25%", top: "40%", left: "70%" },
                5: { width: "14%", top: "66%", left: "3%" }
            };

            openDialog("#dialogBrucke01", 0, styleBrucke[0]);
            openDialog("#dialogBrucke02", 500, styleBrucke[1]);
            openDialog("#dialogBruckeA9", 1000, styleBrucke[2]);
            openDialog("#dialogBrucke03", 1500, styleBrucke[3])
            openDialog("#dialogBruckeG1", 2000, styleBrucke[4]);
            openDialog("#dialogBruckeG2", 2500, styleBrucke[5]);
            break;

        case "archer":
            styleArcher = {
                0: { width: "42.3%", top: "10%", left: "2%" },
                1: { width: "14.3%", top: "60%", left: "70%" },
                2: { width: "30%", top: "15%", left: "60%" },
                3: { width: "32.15%", top: "60%", left: "35%" }
            };

            openDialog("#dialogArcherSpeciment", 0, styleArcher[0]);
            openDialog("#dialogArcherIconSistem", 500, styleArcher[1]);
            openDialog("#dialogInfografica", 1000, styleArcher[2]);
            openDialog("#dialogIconSistemPerUnaBiblioteca", 1500, styleArcher[3]);
        default:
            break;
    }
});

// quando si clicca sul bottone "fullscreen", questo bottone viene "reso invisibile" tramite display: none;
// e il bottone "riduci a icona" (identificato da this.parentElement.children[0] -->
// --> questo perchè nel div padre abbiamo posizionato nell'ordine: NO_FULLSCREEN, fullscreen e close, rispettivamente in posizioni [0],1,2)
// viene "reso visibile" tramite display: block
$(".fullButton").on("click", function () {

    $(this).css("display", "none");
    $(this.parentElement.children[0]).css("display", "block");
    let projectID = "";
    let style;

    switch (this.id) {
        case "fullAboutMePhoto":
            projectID = "#dialogAboutMePhoto";
            style = { width: "53%", top: "1%", left: "23%" };
            break;

        case "fullBates01":
            projectID = "#dialogBates01";
            style = { width: "78%", top: "1%", left: "10%" };
            break;

        case "fullPranzo06":
            projectID = "#dialogPranzo06";
            style = { width: "75%", top: "1%", left: "14%" };
            break;

        case "fullPranzo07":
            projectID = "#dialogPranzo07";
            style = { width: "52%", top: "1%", left: "22%" };
            break;

        case "fullBrucke02":
            projectID = "#dialogBrucke02";
            style = { width: "80%", top: "1%", left: "10%" };
            break;

        case "fullBrucke03":
            projectID = "#dialogBrucke03";
            style = { width: "79%", top: "1%", left: "10%" };
            break;

        case "fullBruckeA9":
            projectID = "#dialogBruckeA9";
            style = { width: "78%", top: "1%", left: "10%" };
            break;

        case "fullBruckeG1":
            projectID = "#dialogBruckeG1";
            style = { width: "78%", top: "1%", left: "10%" };
            break;

        case "fullBruckeG2":
            projectID = "#dialogBruckeG2";
            style = { width: "52%", top: "1%", left: "25%" };
            break;

        default:
            break;
    }

    $(projectID).animate(style, "slow");

});

// quando si clicca sul bottone "NO fullscreen", questo bottone viene "reso invisibile" tramite display: none;
// e il bottone "fullscreen" (identificato da this.parentElement.children[1] -->
// --> questo perchè nel div padre abbiamo posizionato nell'ordine: no_fullscreen, FULLSCREEN e close, rispettivamente in posizioni 0,[1],2)
// viene "reso visibile" tramite display: block
$(".noFullButton").on("click", function () {
    $(this).css("display", "none");
    $(this.parentElement.children[1]).css("display", "block");
    let projectID = "";
    let style;

    switch (this.id) {
        case "noFullAboutMePhoto":
            projectID = "#dialogAboutMePhoto";
            style = styleAboutMePhoto;
            break;

        case "noFullBates01":
            projectID = "#dialogBates01";
            style = styleBates[0];
            break;

        case "noFullPranzo06":
            projectID = "#dialogPranzo06";
            style = stylePranzo[5];
            break;

        case "noFullBrucke02":
            projectID = "#dialogBrucke02";
            style = styleBrucke[1];
            break;

        case "noFullBrucke03":
            projectID = "#dialogBrucke03";
            style = styleBrucke[3];
            break;

        case "noFullBruckeA9":
            projectID = "#dialogBruckeA9";
            style = styleBrucke[2];
            break;

        case "noFullBruckeG1":
            projectID = "#dialogBruckeG1";
            style = styleBrucke[4];
            break;

        case "noFullBruckeG2":
            projectID = "#dialogBruckeG2";
            style = styleBrucke[5];
            break;

        default:
            break;
    }

    $(projectID).animate(style, "slow");
});


$(".dialog").on("click", function () {
    bringToFront("#" + this.id);
});


//imposto lo z-index a 9999 ==> la finestra cliccata deve essere davanti a tutto
function bringToFront(dialog) {

    //valore di zIndex di default
    var index_highest = 0;

    //per ogni elemento che ha class .dialog
    $(".dialog").each(function () {

        // always use a radix when using parseInt
        var index_current = parseInt($(this).css("zIndex"), 10);
        if (index_current >= index_highest) {
            index_highest = index_current;
        }
    });

    //imposto il nuovo zIndex
    $(dialog).css("zIndex", index_highest + 1);
}

// chiudi tutto 
$("#chiudiTutto").on("click", function () {
    $(".dialog").fadeOut(500);
});

function closeWindowsOfProject(projectID) {
    $("." + projectID).fadeOut(500);
}

function rotateLogo(angle) {
    setInterval(function () {
        document.getElementById("logo").style.transform = "rotate(" + (angle - 0.2) + "deg)";
        angle -= 0.2;
    }, 10);
}

/* SLIDESHOW JS */
var slideIndex = [1, 1, 1, 1];
var slideId = ["pranzoSlides1", "pranzoSlides2", "bruckeSlides1", "bruckeSlides2"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}