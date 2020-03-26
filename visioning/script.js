$(document).click(function(event) {

    var object = $(event.target);
    var div = object.parent().parent().children();
    //console.log(div.length);
    //object.toggleClass("show");
    //object.toggleClass("hide");
    for (i=0; i<div.length; i++){
        console.log(div[i].className);
        var className = div[i].className;
        if (className === "show") {
            console.log("This is Show class");
            div[i].className = "hide";
           
        } else if (className === "hide") {
            console.log("This is Hide class");
            div[i].className = "show";
        }
    }

});