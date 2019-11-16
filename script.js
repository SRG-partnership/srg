function plusButton() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    console.log("This is it!")
   }

function dblClick(){
    console.log("That's double click!");
    var node = document.createElement("rect");
    node.setAttribute("class", "grabbable");
    node.setAttribute("x", "10");
    node.setAttribute("y", "10");
    node.setAttribute("width", "8");
    node.setAttribute("height", "10");
    node.setAttribute("fill", "#f15640");
    document.getElementById("canvas").appendChild(node);
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
            offset = getMousePosition(evt);
            offset.x -= parseFloat(selectedElement.getAttributeNS(null, "x"));
            offset.y -= parseFloat(selectedElement.getAttributeNS(null, "y"));
          }
    }
  
    function drag(evt) {
        if (selectedElement) {
            evt.preventDefault();
            var coord = getMousePosition(evt);
            selectedElement.setAttributeNS(null, "x", coord.x - offset.x);
            selectedElement.setAttributeNS(null, "y", coord.y - offset.y);
          }
    }
  
    function endDrag(evt) {
        console.log("Drop!");
        selectedElement = null;
    }

    function getMousePosition(evt) {
        var CTM = svg.getScreenCTM();
        return {
          x: (evt.clientX - CTM.e) / CTM.a,
          y: (evt.clientY - CTM.f) / CTM.d
        };
      }
  }
