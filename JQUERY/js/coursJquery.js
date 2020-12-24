$(function($) { 
/* Similaire à : jQuery(document).ready(function(){}); Le $ en paramètre de fonction sert à éviter les conflits avec d'autres bibliothèques. */

    console.log("jQuery est prêt !!!");

    // Sélection des éléments
    let $liens = $("p .lien");
    let $lien1 = $("p .lien:first");
    let $lien3 = $("p .lien:eq(2)");
    console.log($liens);
    console.log($lien1);
    console.log($lien3);


    // Evénements souris
    $("#lien1").click(function() {
        alert("Vous avez cliqué sur le premier lien !");
    })

    /* Les événements souris : click, dblclick, hover, mouseenter, mouseleave, mousedown, mouseup, scroll. */


    // Evénements clavier
    $(document).keypress(function(touche) {   // on écoute l'évènement keypress()

        let appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés

        if (appui == 13) {  // Si le code de la touche est égal à 13 (Entrée)
            alert("Vous avez appuyé sur Entrée !");
        }
    })
    
    /* Les événements clavier : keypress, keyup, keydown. */


    // Evénements formulaires
    $("input").focus(function() {
        alert("Vous avez le focus !");
    })

    /* Les événements formulaires : focus, select, change, submit. */


    // Fonction trigger
    // $("#titre h1").click(function() {
    //     alert("Vous avez cliqué sur le titre !");
    // })

    // $("#titre h1").trigger("click");    // Déclenche la fonction au chargement de la page


    // Annuler comportement
    $("#lien2").click(function(e) {
        e.preventDefault();
    })


    // Ecouteurs d'événements
    $("#button1").on("click dblclick", function() {
        alert("Mais ça marche !");
    })

    $("#button2").on({
        click: function() {
            alert("Vous avez cliqué !");
        },
        mouseup: function() {
            console.log("Vous avez relaché le click !");
        }
    });


    // Délégation d'événements
    $("#div1").on("click", "p", function() {
        alert("Les paragraphes créés peuvent être cliqués !");
    })


    // Les espaces de noms
    $('button').on('click.nom', function () {
        alert('Premier évènement');
    });

    $('button').on('click.prenom', function () {
        alert('Second évènement');
    });

    $('button').trigger('click.nom'); // exécute le clic, MAIS ne lance que la première alerte !


    // Supprimer un événement
    $('p').on('click', function () {
        // du code ici
    });

    $('p').off('click'); // supprime tous les gestionnaires écoutant le clic

    $('p').off(); // supprimer tous les gestionnaires de n'importe quel évènement


    // Annuler la délégation
    $('body').on('click', 'p', function () {
        // du code ici
    });

    $('body').off('click', 'p'); // supprime tous les gestionnaires d'évènements délégués sur les paragraphes

    $('body').off('click', '**'); // supprime tous les gestionnaires d'évènements délégués


    /* ----- CSS ----- */

    // Récupérer la valeur d'une propriété
    console.log($("#para").css("color"));

    // Définition de propriété CSS
    $("#para").css({
        color: "red",
        fontSize: "20px"
        // La propriété "float" doit être mise entre guillemets, c'est un mot clé en javascript.
    });
    console.log($("#para").css("color"));


});











// $("button").click(function() {
//     $("#main").append(`<div class="essai" id="dossier4">Dossier 4</div>`);
// })

// // $(".essai").click(function() {
// //     var id = $(this).attr('id');
// //     alert(id);
// // }) 

// $(document).on("click", ".essai", function() {
//     var id = $(this).attr('id');
//     alert(id);
// });

// $("#titre").append(`<h1>Un Titre</h1>`);