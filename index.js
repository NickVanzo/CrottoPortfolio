var dialogs = [];
var dialog;
var id_dialog;

//prende tutti gli elementi con class "draggable" e li rende draggable()
$(".draggable").draggable();

//al caricamento della pagina
$(window).on("load", function () {

    //$("*") ==> prende tutti gli elementi all'interno della pagina e gli applica un foreach loop
    $("*").each(function () {

        //se l'elemento in questione ha un id (this.id) e la class dell'oggetto include "dialog"
        // ==> inserisco l'id all'interno dell'array dialogs e nascondo il rispettivo dialog nell'html tramite .hide()
        if (this.id && this.className.includes("dialog")) {
            dialogs.push(this.id);
            $("#" + this.id).hide();
        }
    });
});

//prende tutti gli elementi con class "folder" e gestisce l'evento dblclick (doppio click)
$(function () {
    $(".folder").dblclick(function () {

        //cerco il dialog rispettivo dell'id che chiama la funzione (cartella su cui faccio doppio click) es. id:"my_project" ==> dialog:"dialog_my_project"
        dialog = dialogs.filter((id) => id.includes(this.id));

        //costruisco l'id es. "#my_project"
        id_dialog = "#" + dialog;

        //costruisco il titolo es. "My project"
        let title = createTitleDialog(this.id);

        //mostro il dialog che ha come id: id_dialog tramite .dialog()
        // ==> impostando tutto ciò che mi serve (title, position, ...)
        $(id_dialog).dialog({
            title: title,
            position: {
                my: "left center",
                at: "center",
                of: $("#" + this.id),
                collision: "fit fit"
            }
            
        });

        //porta davanti la finestra cliccata
        bringToFront();

    });
});

//creo il titolo del dialog tramite il suo id  es. "my_project"
const createTitleDialog = (id_dialog) => {
    //id_dialog = id_dialog.substring(8);
    id_dialog = id_dialog.replace("_", " ");  //replace di '_' con ' '  es. "my project"
    id_dialog = id_dialog.substring(0, 1).toUpperCase() + id_dialog.substring(1);  //UpperCase del primo carattere  es. "My project"
    return id_dialog;
}

//imposto lo z-index a 9999 ==> la finestra cliccata deve essere davanti a tutto
function bringToFront() {
    $(".ui-dialog").css("zIndex", 9999);
}
