var dialogStyle = {
    "width": "25%",
    "position": "absolute",
    "top": "25%",
    "left": "25%"
}

//prende tutti gli elementi con class "draggable" e li rende draggable()
$(".draggable").draggable();


//al caricamento della pagina
$(window).on("load", function () {
    //reset di tutti i dialog
    $(".dialog").css("z-index", 0)
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
                break;
            case "contact_me":
                dialogStyle.width = "30%";
                openDialog("#dialogContactMe", "contact_me", this.id, "left center");
                break;
            case "about_me":
                dialogStyle.width = "50%";
                openDialog("#dialogAboutMe", "About me", this.id, "left center");
                dialogStyle.width = "203px";
                openDialog("#dialogAboutMePhoto", "Me", this.id, "top");
                break;
            case "works":
                dialogStyle.width = "30%";
                openDialog("#dialogWorks", "works", this.id, "left center");
                break;
            case "scattofisso":
                dialogStyle.width = "22.5%";
                openDialog("#dialogScattofissoPranzo", "Scattofisso pack", this.id, "top");
                openDialog("#dialogScattofissoPranzo2", "Scattofisso - delivery app", this.id, "top");
                break;
            default:
        }
    });

    $(".dialog").on("click", function () {
        bringToFront("#"+this.id);
    });

});

//imposto lo z-index a 9999 ==> la finestra cliccata deve essere davanti a tutto
function bringToFront(dialog) {

    //valore di zIndex di default
    var index_highest = 0;   
    
    //per ogni elemento che ha class .dialog
    $(".dialog").each(function() {

        // always use a radix when using parseInt
        var index_current = parseInt($(this).css("zIndex"), 10);
        if(index_current >= index_highest) {
            index_highest = index_current;
        }
    });

    //imposto il nuovo zIndex
    $(dialog).css("zIndex", index_highest + 1);
}

// chiudi tutto 
$(function () {
    $("#chiudiTutto").on("click", function () {
        $(".dialog").hide();
    });
});