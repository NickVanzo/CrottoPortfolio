var dialogStyle = {
    "width": "25%",
    "position": "absolute",
    "top": "25%",
    "left": "25%"
}

//prende tutti gli elementi con class "draggable" e li rende draggable()
$(".draggable").draggable();

$(".dialog").resizable();

$(".innerMain").resizable(); 

//al caricamento della pagina
$(window).on("load", function () {

});


function openDialog(dialogName, title, idParent, position) {

    //mostro il dialog
    $(dialogName).show();

    //prendo la posizione dell'elemento su cui faccio dblclick
    let positionParent = $("#" + idParent).offset();
    //la imposto nel dialogStyle
    dialogStyle.top = positionParent.top;
    dialogStyle.left = positionParent.left;

    //aggiungo il css
    $(dialogName).css(dialogStyle);

}

//prende tutti gli elementi con class "folder" e gestisce l'evento dblclick (doppio click)
$(function () {
    $(".folder").dblclick(function () {
        dialogStyle.width = "25%";

        switch (this.id) {
            case "randomStuff":
                openDialog("#dialogRandomStuff", "randomStuff", this.id, "left center");
                //porta davanti la finestra cliccata
                bringToFront("#dialogRandomStuff");
                break;
            case "contact_me":
                dialogStyle.width = "30%";
                openDialog("#dialogContactMe", "contact_me", this.id, "left center");
                //porta davanti la finestra cliccata
                bringToFront("#dialogContactMe");
                break;
            case "about_me":
                dialogStyle.width = "50%";
                openDialog("#dialogAboutMe", "About me", this.id, "left center");
                dialogStyle.width = "203px";
                openDialog("#dialogAboutMePhoto", "Me", this.id, "top");
                //porta davanti la finestra cliccata
                bringToFront("#dialogAboutMePhoto");
                break;
            case "works":
                dialogStyle.width = "30%";
                openDialog("#dialogWorks", "works", this.id, "left center");
                //porta davanti la finestra cliccata
                bringToFront("#dialogWorks");
                break;
            default:
        }



    });
});

//imposto lo z-index a 9999 ==> la finestra cliccata deve essere davanti a tutto
// ############ DA AGGIUSTARE ############ 
function bringToFront(dialog) {
    $(dialog).css("zIndex", 9999);
}

// chiudi tutto 
$(function () {
    $("#chiudiTutto").on("click", function () {
        $(".dialog").hide();
    });
});