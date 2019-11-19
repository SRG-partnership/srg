function plusButton() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    console.log("This is it!")
   }

function dblClick(){
    var svg = document.getElementById("canvas"); //Get svg element
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'rect'); //Create a path in SVG's namespace
    var colInput = document.getElementById("colorPicker").nodeValue;
    var theColor = colInput.nodeValue;
    console.log(colInput);
    newElement.setAttribute ("width", "3");
    newElement.setAttribute ("height", "4");
    newElement.setAttribute ("class", "draggable");
    newElement.setAttribute ("x", "3");
    newElement.setAttribute ("y", "2");
    newElement.setAttribute ("fill", "#32a89d");
    svg.appendChild(newElement);
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
