function plusButton() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    console.log("This is it!")
   }

function dblClick(){
    console.log("That's double click!")
}

var selectedElement = false;

function makeDraggable(evt) {
    var svg = evt.target;
    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseleave', endDrag);
  
    function startDrag(evt) {
        console.log("Start!");
        if (evt.target.classList.contains('draggable')) {
            selectedElement = evt.target;
          }
    }
  
    function drag(evt) {
        console.log("Drag!");
        if (selectedElement) {
            evt.preventDefault();
            var x = parseFloat(selectedElement.getAttributeNS(null, "x"));
            selectedElement.setAttributeNS(null, "x", x + 0.1);
          }
    }
  
    function endDrag(evt) {
        console.log("Drop!");
        selectedElement = null;
    }
  }