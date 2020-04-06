var list = []

$(document).click(function(event) {

    var object = $(event.target);

    var div = object.parent();
    var id = div[0].id;
    var className = div[0].className;

    if (className === "show" || className == "hide"){
        div.toggleClass("hide");
        div.toggleClass("show");
    }

    var a =list.indexOf(id);
    if (a>-1){
        list.splice(a,1);
    }else{
        list.push(id);
    }
});

function send() {
    console.log("We're sending!" + list);
    alert('Do you want to send your target selection to SRG?');
     document.location.href = "mailto:kryadchenko@srgpartnership.com?cc=mtalbot@srgpartnership.com&subject=SRG Visioning&body=Please receive my Visioning response%0D%0A"+ list +"%0D%0ABest Regards%0D";
}