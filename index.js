var dialogs = [];
var dialog;
var id_dialog;

//prende tutti gli elementi con class "draggable" e li rende draggable()
$(".draggable").draggable();

//al caricamento della pagina
$(window).on("load", function () {

    //$("*") ==> prende tutti gli elementi all'interno della pagina e gli applica un foreach loop
    /*$("*").each(function () {

        //se l'elemento in questione ha un id (this.id) e la class dell'oggetto include "dialog"
        // ==> inserisco l'id all'interno dell'array dialogs e nascondo il rispettivo dialog nell'html tramite .hide()
        if (this.id && this.className.includes("dialog")) {
            dialogs.push(this.id);
            $("#" + this.id).hide();
        }
    });*/

});

var dialogStyle = {
    "width" : "25%",
    "border" : "2px solid red",
    "position" : "absolute",
    "margin" : "10% 0 0 10%"
}

function openDialog(dialogName, title, idDialog, position) {

    $(dialogName).show();
    $(dialogName).css(dialogStyle);
    $(dialogName).addClass(".draggable");
    
    //prende tutti gli elementi con class "draggable" e li rende draggable()
    $(".draggable").draggable();

    console.log($(dialogName));

    /*$(dialogName).dialog({
        title: title,
        position: {
            my: position,
            at: "center",
            of: $("#" + idDialog),
            collision: "fit fit"
        }
    });*/
}

//prende tutti gli elementi con class "folder" e gestisce l'evento dblclick (doppio click)
$(function () {
    $(".folder").dblclick(function () {
        dialogStyle.width = "25%";
        // //cerco il dialog rispettivo dell'id che chiama la funzione (cartella su cui faccio doppio click) es. id:"my_project" ==> dialog:"dialog_my_project"
        // dialog = dialogs.filter((id) => id.includes(this.id));

        // //costruisco l'id es. "#my_project"
        // id_dialog = "#" + dialog;

        // //costruisco il titolo es. "My project"
        // let title = createTitleDialog(this.id);
        switch(this.id) {
            case "randomStuff":
                openDialog("#dialogRandomStuff", "randomStuff", this.id, "left center");
            break;
            case "contact_me":
                openDialog("#dialogContactMe", "contact_me", this.id, "left center");
                break;
            case "about_me":
                dialogStyle.width = "50%";
                openDialog("#dialogAboutMe", "About me", this.id, "left center");
                dialogStyle.width = "203px";
                openDialog("#dialogAboutMePhoto", "Me", this.id, "top");
                break;
            case "works":
                openDialog("#dialogWorks", "works", this.id, "left center");
                break;
            default:
        }

        //porta davanti la finestra cliccata
        bringToFront();

    });
});

//creo il titolo del dialog tramite il suo id  es. "my_project"
/*const createTitleDialog = (id_dialog) => {
    //id_dialog = id_dialog.substring(8);
    id_dialog = id_dialog.replace("_", " ");  //replace di '_' con ' '  es. "my project"
    id_dialog = id_dialog.substring(0, 1).toUpperCase() + id_dialog.substring(1);  //UpperCase del primo carattere  es. "My project"
    return id_dialog;
}*/

//imposto lo z-index a 9999 ==> la finestra cliccata deve essere davanti a tutto
function bringToFront() {
    $(".ui-dialog").css("zIndex", 9999);
}
