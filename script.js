function plusButton() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    console.log("This is it!")
   }

function dblClick(){
    console.log("That's double click!")
}

function makeDraggable(evt) {
    var svg = evt.target;
    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseleave', endDrag);
  
    function startDrag(evt) {
    }
  
    function drag(evt) {
    }
  
    function endDrag(evt) {
    }
  }