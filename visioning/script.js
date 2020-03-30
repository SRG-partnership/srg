$(document).click(function(event) {

    var object = $(event.target);
    var div = object.parent();
    console.log(div);
    //object.toggleClass("show");
    //object.toggleClass("hide");
    
    div.toggleClass("hide");
    div.toggleClass("show");

    /*
    for (i=0; i<div.length; i++){
        console.log(div[i].className);
        var className = div[i].className;
        if (className === "front") {
            console.log("This is Show class");
            div[i].className = "hide";
            //div[i].style.transform = "rotateY(180deg)";
           
        } else if (className === "back") {
            console.log("This is Hide class");
            //div[i].className = "show";
            //div[i].style.transform = "rotateY(180deg)";
        }
    }

    */
});