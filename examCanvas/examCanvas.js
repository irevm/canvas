//It receives an identifier of the canvas element and loads the canvas
//Returns the canvas context or FALSE if it could not be obtained.
function loadCanvasContext(idCanvas){
   var element = document.getElementById(idCanvas);
   if(element && element.getContext){
      var context = element.getContext('2d');
      if(context){
         return context;
      }
   }
   return false;
}

window.onload = function(){
  
  var ctx = loadCanvasContext('mycanvas');
  if(ctx){
    ctx.beginPath();
    ctx.moveTo(1,1);
    
    // Insert your code here

    ctx.stroke();
  }
  
}