var list = []

$(document).click(function(event) {

    var object = $(event.target);

    var div = object.parent();
    var id = div[0].id;
    var className = div[0].className;

    if(className === "show" || className === "hide"){
        var a =list.indexOf(id);
        if (a>-1){
            list.splice(a,1);
            
                div.toggleClass("hide");
                div.toggleClass("show");
            
        }else{
            if(list.length === 10){
                alert('Please keep your selection to 10 cards.\nChoose only the most important features of your new office.');
            }else{
                list.push(id);
                    div.toggleClass("hide");
                    div.toggleClass("show");
                
            }
        }
    }

    console.log(list.length);
    console.log(list);
});

function send() {
    console.log("We're sending!" + list);
    alert('Do you want to send your target selection to SRG?');
    document.location.href = "mailto:mtalbot@srgpartnership.com?cc=skelsey@srgpartnership.com;ewright@srgpartnership.com&subject=SRG Visioning&body=Thank you for completing the exercise.%0D%0A%0D%0APlease provide further comments and/or any additional project priorities in the body of this email as necessary.%0D%0A"+ list +"%0D%0ABest Regards%0D";
}