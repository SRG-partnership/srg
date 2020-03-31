$(document).click(function(event) {

    var object = $(event.target);
    var preClass = object[0].className;
    console.log(object[0]);

    
    var div = object.parent();
    var className = div[0].className;
    console.log(div[0]);
    console.log(div);

    if (className === "show" || className == "hide"){
        div.toggleClass("hide");
        div.toggleClass("show");
    }
});