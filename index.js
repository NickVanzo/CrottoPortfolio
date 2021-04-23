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

function openDialog(dialogName, idParent, delay, top, left) {

    dialogStyle.top = top;
    dialogStyle.left = left;
    //mostro il dialog
    $(dialogName).delay(delay).fadeIn(500);

    //prendo la posizione dell'elemento su cui faccio dblclick
    let positionParent = $("#" + idParent).offset();
    //la imposto nel dialogStyle
    // dialogStyle.top = positionParent.top;
    // dialogStyle.left = positionParent.left;

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
                openDialog("#dialogRandomStuff", this.id, 0);
                break;

            case "contact_me":
                dialogStyle.width = "30%";
                openDialog("#dialogContactMe", this.id, 0, "35%", "35%");
                break;

            case "about_me":
                dialogStyle.width = "50%";
                openDialog("#dialogAboutMe", this.id, 500, "30%", "10  %");
                dialogStyle.width = "203px";
                openDialog("#dialogAboutMePhoto", this.id, 0, "70%", "5%");
                break;

            case "works":
                dialogStyle.width = "42%";
                openDialog("#dialogWorks", this.id, 0, "10%", "40%");
                break;

            case "scattofisso":
                dialogStyle.width = "22.5%";
                openDialog("#dialogScattofissoPranzo", this.id, 0, "25%", "75%");
                openDialog("#dialogScattofissoPranzo2", this.id, 500, "40%", "2%");
                dialogStyle.width = "50%";
                openDialog("#dialogScattofissoPranzo3", this.id, 1000, "2%", "5%");
                openDialog("#dialogScattofissoPranzo4", this.id, 1500, "45%", "25%");
                dialogStyle.width = "25%";
                openDialog("#dialogScattofissoPhoto", this.id, 2000, "3%", "65%");
                break;

            case "bates":
                dialogStyle.width = "28%";
                openDialog("#dialogBates01", this.id, 0, "5%", "10%");
                dialogStyle.width = "40%";
                openDialog("#dialogBates06", this.id, 500, "55%", "22%");
                dialogStyle.width = "20%";
                openDialog("#dialogBates02", this.id, 1000, "30%", "5%");
                dialogStyle.width = "28%";
                openDialog("#dialogBates03", this.id, 1500, "40%", "70%");
                openDialog("#dialogBates04", this.id, 2000, "60%", "60%");
                dialogStyle.width = "35%";
                openDialog("#dialogBates05", this.id, 2500, "7%", "50%");
                break;

            case "pranzo":
                dialogStyle.width = "20%";
                openDialog("#dialogPranzo01", this.id, 0, "2%", "3%");
                dialogStyle.width = "30%";
                openDialog("#dialogPranzo03", this.id, 500, "4%", "45%");
                dialogStyle.width = "25%";
                openDialog("#dialogPranzo02", this.id, 1000, "22%", "10%");
                dialogStyle.width = "37%";
                openDialog("#dialogPranzo04", this.id, 1500, "22%", "60%");
                dialogStyle.width = "17%";
                openDialog("#dialogPranzo05", this.id, 2000, "35%", "40%");
                dialogStyle.width = "30%";
                openDialog("#dialogPranzo06", this.id, 2500, "50%", "2%");
                dialogStyle.width = "25%";
                openDialog("#dialogPranzo07", this.id, 3000, "50%", "63%");
                break;

            case "brucke":
                dialogStyle.width = "30%";
                openDialog("#dialogBrucke03", this.id, 0, "5%", "3%");
                dialogStyle.width = "28%";
                openDialog("#dialogBrucke01", this.id, 500, "5%", "65%");
                dialogStyle.width = "50%";
                openDialog("#dialogBruckeA9", this.id, 1000, "28%", "9%");
                dialogStyle.width = "26%";
                openDialog("#dialogBrucke02", this.id, 1500, "63%", "65%")
                dialogStyle.width = "25%";
                openDialog("#dialogBruckeG1", this.id, 2000, "40%", "70%");
                dialogStyle.width = "14%";
                openDialog("#dialogBruckeG2", this.id, 2500, "66%", "3%");
                break;

            case "archer":
                dialogStyle.width = "42.3%";
                openDialog("#dialogArcherSpeciment", this.id, 0, "10%", "5%");
                dialogStyle.width = "14.3%";
                openDialog("#dialogArcherIconSistem", this.id, 500, "60%", "70%");
                dialogStyle.width = "30%";
                openDialog("#dialogInfografica", this.id, 1000, "15%", "60%");
                dialogStyle.width = "32.15%";
                openDialog("#dialogIconSistemPerUnaBiblioteca", this.id, 1500, "60%", "35%");
            default:
                break;
        }
    });

    $(".dialog").on("click", function () {
        bringToFront("#" + this.id);
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

function rotateLogo(angle) {
    setInterval(function () { 
        document.getElementById("logo").style.transform = "rotate(" + (angle - 0.2) + "deg)"; 
        angle -= 0.2; 
    }, 10);
}

/* SLIDESHOW JS */
var slideIndex = [1,1,1,1];
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
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}