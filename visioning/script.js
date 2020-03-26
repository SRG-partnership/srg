$(document).click(function(event) {
    var object = $(event.target);
    console.log(object);
    object.find('.card-show').toggleClass('card-hide');
});