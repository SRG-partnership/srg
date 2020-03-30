$(document).click(function(event) {

    var object = $(event.target);
    var div = object.parent();
    var className = div[0].className;

    if (className === "show" || className == "hide"){
        div.toggleClass("hide");
        div.toggleClass("show");
    }
});