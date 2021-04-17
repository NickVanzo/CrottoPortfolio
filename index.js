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
                openDialog("#dialogAboutMe", this.id, 0, "30%", "10  %");
                dialogStyle.width = "203px";
                openDialog("#dialogAboutMePhoto", this.id, 1000, "70%", "5%");
                break;
            case "works":
                dialogStyle.width = "42%";
                openDialog("#dialogWorks", this.id, 0, "10%", "40%");
                break;
            case "scattofisso":
                dialogStyle.width = "22.5%";
                openDialog("#dialogScattofissoPranzo", this.id, 0, "25%", "75%");
                openDialog("#dialogScattofissoPranzo2", this.id, 1000, "40%", "2%");
                dialogStyle.width = "50%";
                openDialog("#dialogScattofissoPranzo3", this.id, 2000, "2%", "5%");
                openDialog("#dialogScattofissoPranzo4", this.id, 3000, "45%", "25%");
                dialogStyle.width = "25%";
                openDialog("#dialogScattofissoPhoto", this.id, 4000, "3%", "65%");
                break;
            case "bates":
                dialogStyle.width = "28%";
                openDialog("#dialogBates01", this.id, 0, "5%", "10%");
                dialogStyle.width = "40%";
                openDialog("#dialogBates06", this.id, 1000, "55%", "22%");
                dialogStyle.width = "20%";
                openDialog("#dialogBates02", this.id, 2000, "30%", "5%");
                dialogStyle.width = "28%";
                openDialog("#dialogBates03", this.id, 3000, "40%", "70%");
                openDialog("#dialogBates04", this.id, 4000, "60%", "60%");
                dialogStyle.width = "35%";
                openDialog("#dialogBates05", this.id, 5000, "7%", "50%");
                break;
            case "brucke":
                dialogStyle.width = "28%";
                openDialog("#dialogBrucke01", this.id, 0);
                openDialog("#dialogBrucke02", this.id, 1000);
                openDialog("#dialogBrucke03", this.id, 2000);
                openDialog("#dialogBrucke04", this.id, 3000);
                openDialog("#dialogBrucke05", this.id, 4000);
                openDialog("#dialogBrucke06", this.id, 5000);
                openDialog("#dialogBrucke07", this.id, 6000);
                openDialog("#dialogBrucke08", this.id, 7000);
                openDialog("#dialogBrucke09", this.id, 8000);
                openDialog("#dialogBruckeG1", this.id, 9000);
                openDialog("#dialogBruckeG2", this.id, 10000);
            default:
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