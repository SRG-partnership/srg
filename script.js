function plusButton() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    console.log("This is it!")   
}

const svgImage = document.getElementById("canvas");

function dblClick(){
   var svg = document.getElementById("canvas"); //Get svg element
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'rect'); //Create a path in SVG's namespace
    var colInput = document.getElementById("forma").getElementsByClassName("color");
    var theColor = colInput[0].value;
    console.log(colInput[0].value);
    newElement.setAttribute ("width", "3");
    newElement.setAttribute ("height", "4");
    newElement.setAttribute ("class", "draggable");
    newElement.setAttribute ("x", "3");
    newElement.setAttribute ("y", "2");
    newElement.setAttribute ("fill", theColor);
    newElement.setAttribute ("fill-opacity", "0.5");
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

//custom zoom/////////////////////////////////////////////////////////////////////////////////

//const svgImage = document.getElementById("canvas");

/*
const svgContainer = document.getElementById("svgContainer");

console.log(svgImage);

var viewBox = {x:0,y:0,w:300,h:200};
svgImage.setAttribute('viewBox', `0 0 30 20`);
const svgSize = {w:300,h:200};
var isPanning = false;
var startPoint = {x:0,y:0};
var endPoint = {x:0,y:0};;
var scale = 1;

svgContainer.onmousewheel = function(e) {
   e.preventDefault();
   var w = viewBox.w;
   var h = viewBox.h;
   var mx = e.x;//mouse x  
   var my = e.y;    
   var dw = w*Math.sign(e.deltaY)*0.05;
   var dh = h*Math.sign(e.deltaY)*0.05;
   var dx = dw*mx/svgSize.w;
   var dy = dh*my/svgSize.h;
   viewBox = {x:viewBox.x+dx,y:viewBox.y+dy,w:viewBox.w-dw,h:viewBox.h-dh};
   scale = svgSize.w/viewBox.w;
   zoomValue.innerText = `${Math.round(scale*100)/100}`;
   svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
}


svgContainer.onmousedown = function(e){
   isPanning = true;
   startPoint = {x:e.x,y:e.y};   
}

svgContainer.onmousemove = function(e){
   if (isPanning){
  endPoint = {x:e.x,y:e.y};
  var dx = (startPoint.x - endPoint.x)/scale;
  var dy = (startPoint.y - endPoint.y)/scale;
  var movedViewBox = {x:viewBox.x+dx,y:viewBox.y+dy,w:viewBox.w,h:viewBox.h};
  svgImage.setAttribute('viewBox', `${movedViewBox.x} ${movedViewBox.y} ${movedViewBox.w} ${movedViewBox.h}`);
   }
}

svgContainer.onmouseup = function(e){
   if (isPanning){ 
  endPoint = {x:e.x,y:e.y};
  var dx = (startPoint.x - endPoint.x)/scale;
  var dy = (startPoint.y - endPoint.y)/scale;
  viewBox = {x:viewBox.x+dx,y:viewBox.y+dy,w:viewBox.w,h:viewBox.h};
  svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
  isPanning = false;
   }
}

svgContainer.onmouseleave = function(e){
 isPanning = false;
}
*/