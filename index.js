var dialogStyle = {
    "width": "25%",
    "position": "fixed",
    "top": "50%",
    "left": "50%"
}
var angle = 0;

//prende tutti gli elementi con class "draggable" e li rende draggable()
$(".draggable").draggable();


//al caricamento della pagina
$(window).on("load", function () {
    //reset di tutti i dialog
    $(".dialog").css("z-index", 0)

    //rotazione del logo
    rotateLogo(angle);
});

function openDialog(dialogName, delay, top, left) {

    dialogStyle.top = top;
    dialogStyle.left = left;
    //mostro il dialog
    $(dialogName).delay(delay).fadeIn(500);

    //aggiungo il css
    $(dialogName).css(dialogStyle);

    bringToFront(dialogName);
}

//prende tutti gli elementi con class "folder" e gestisce l'evento dblclick (doppio click)
$(function () {
    $(".folder").dblclick(function () {
        dialogStyle.width = "25%";

        switch (this.id) {
            case "randomStuff":
                openDialog("#dialogRandomStuff", 0);
                break;

            case "contact_me":
                dialogStyle.width = "30%";
                openDialog("#dialogContactMe", 0, "35%", "35%");
                break;

            case "about_me":
                dialogStyle.width = "50%";
                openDialog("#dialogAboutMe", 500, "30%", "10%");
                dialogStyle.width = "203px";
                openDialog("#dialogAboutMePhoto", 0, "70%", "5%");
                break;

            case "works":
                dialogStyle.width = "42%";
                openDialog("#dialogWorks", 0, "10%", "40%");
                break;

            case "scattofisso":
                dialogStyle.width = "22.5%";
                openDialog("#dialogScattofissoPranzo", 0, "25%", "75%");
                openDialog("#dialogScattofissoPranzo2", 500, "40%", "2%");
                dialogStyle.width = "50%";
                openDialog("#dialogScattofissoPranzo3", 1000, "2%", "5%");
                openDialog("#dialogScattofissoPranzo4", 1500, "45%", "25%");
                dialogStyle.width = "25%";
                openDialog("#dialogScattofissoPhoto", 2000, "3%", "65%");
                break;

            case "bates":
                dialogStyle.width = "28%";
                openDialog("#dialogBates01", 0, "5%", "10%");
                dialogStyle.width = "40%";
                openDialog("#dialogBates06", 500, "55%", "22%");
                dialogStyle.width = "20%";
                openDialog("#dialogBates02", 1000, "30%", "5%");
                dialogStyle.width = "28%";
                openDialog("#dialogBates03", 1500, "40%", "70%");
                openDialog("#dialogBates04", 2000, "60%", "60%");
                dialogStyle.width = "35%";
                openDialog("#dialogBates05", 2500, "7%", "50%");
                break;

            case "pranzo":
                dialogStyle.width = "20%";
                openDialog("#dialogPranzo01", 0, "2%", "3%");
                dialogStyle.width = "30%";
                openDialog("#dialogPranzo03", 500, "4%", "45%");
                dialogStyle.width = "25%";
                openDialog("#dialogPranzo02", 1000, "22%", "10%");
                dialogStyle.width = "37%";
                openDialog("#dialogPranzo04", 1500, "22%", "60%");
                dialogStyle.width = "17%";
                openDialog("#dialogPranzo05", 2000, "35%", "40%");
                dialogStyle.width = "30%";
                openDialog("#dialogPranzo06", 2500, "50%", "2%");
                dialogStyle.width = "25%";
                openDialog("#dialogPranzo07", 3000, "50%", "63%");
                break;

            case "brucke":
                dialogStyle.width = "30%";
                openDialog("#dialogBrucke03", 0, "5%", "3%");
                dialogStyle.width = "28%";
                openDialog("#dialogBrucke01", 500, "5%", "65%");
                dialogStyle.width = "50%";
                openDialog("#dialogBruckeA9", 1000, "28%", "9%");
                dialogStyle.width = "26%";
                openDialog("#dialogBrucke02", 1500, "63%", "65%")
                dialogStyle.width = "25%";
                openDialog("#dialogBruckeG1", 2000, "40%", "70%");
                dialogStyle.width = "14%";
                openDialog("#dialogBruckeG2", 2500, "66%", "3%");
                break;

            case "archer":
                dialogStyle.width = "42.3%";
                openDialog("#dialogArcherSpeciment", 0, "10%", "5%");
                dialogStyle.width = "14.3%";
                openDialog("#dialogArcherIconSistem", 500, "60%", "70%");
                dialogStyle.width = "30%";
                openDialog("#dialogInfografica", 1000, "15%", "60%");
                dialogStyle.width = "32.15%";
                openDialog("#dialogIconSistemPerUnaBiblioteca", 1500, "60%", "35%");
            default:
                break;
        }
    });

    $(".dialog").on("click", function () {
        bringToFront("#" + this.id);
    });

    // quando si clicca sul bottone "fullscreen", questo bottone viene "reso invisibile" tramite display: none;
    // e il bottone "riduci a icona" (identificato da this.parentElement.children[0] -->
    // --> questo perchè nel div padre abbiamo posizionato nell'ordine: NO_FULLSCREEN, fullscreen e close, rispettivamente in posizioni [0],1,2)
    // viene "reso visibile" tramite display: block
    $(".fullButton").on("click", function () {
        $(this).css("display", "none");
        $(this.parentElement.children[0]).css("display", "block");
    });

    // quando si clicca sul bottone "NO fullscreen", questo bottone viene "reso invisibile" tramite display: none;
    // e il bottone "fullscreen" (identificato da this.parentElement.children[1] -->
    // --> questo perchè nel div padre abbiamo posizionato nell'ordine: no_fullscreen, FULLSCREEN e close, rispettivamente in posizioni 0,[1],2)
    // viene "reso visibile" tramite display: block
    $(".noFullButton").on("click", function () {
        $(this).css("display", "none");
        $(this.parentElement.children[1]).css("display", "block");
    });
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
$(function () {
    $("#chiudiTutto").on("click", function () {
        $(".dialog").fadeOut(500);
    });
});

function closeWindowsOfProject(projectID) {
    $("." + projectID).fadeOut(500);
}

function fullScreen(projectID, width, top, left) {
    $("#" + projectID).animate({
        "width": width,
        "top": top,
        "left": left
    }, "slow");
}

function noFullScreen(projectID, width, top, left) {
    $("#" + projectID).animate({
        "width": width,
        "top": top,
        "left": left
    }, "slow");
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