var _canvas = document.getElementById('chart');
var _ctx = _canvas.getContext("2d");
var baseX = 110;
var baseY = 375; 
var chartWidth = 475;
var salesData = [{
  category: "Basketballs",
  sales: 150
}, {
  category: "Baseballs",
  sales: 125
}, {
  category: "Footballs",
  sales: 300
}];
// Colors can be named hex or RGB.
colors = ["orange", "#0092bf", "rgba(240, 101, 41, 0.90)"];

drawAxes(baseX, baseY, chartWidth);
drawAxesLabels();
//drawBars(salesData, baseX, baseY);
//drawBarsColours(salesData, baseX, baseY, colors);
drawBarsGradient(salesData, baseX, baseY, colors);

function drawAxes(baseX, baseY, chartWidth) {
  var leftY, rightX;
  leftY = 5;
  rightX = baseX + chartWidth;
  // Draw y axis.
  _ctx.moveTo(baseX, leftY);
  _ctx.lineTo(baseX, baseY);
  // Draw arrow for y axis.
  _ctx.moveTo(baseX, leftY);
  _ctx.lineTo(baseX + 5, leftY + 5);
  _ctx.moveTo(baseX, leftY);
  _ctx.lineTo(baseX - 5, leftY + 5);
  // Draw x axis.
  _ctx.moveTo(baseX, baseY);
  _ctx.lineTo(rightX, baseY);
  // Draw arrow for x axis.
  _ctx.moveTo(rightX, baseY);
  _ctx.lineTo(rightX - 5, baseY + 5);
  _ctx.moveTo(rightX, baseY);
  _ctx.lineTo(rightX - 5, baseY - 5);
  // Define style and stroke lines.
  _ctx.strokeStyle = "#000";
  _ctx.stroke();
}

// Drawing the axis labels
function drawAxesLabels() {  
  var height, widthOffset, heightOffset;
  height = _ctx.canvas.height;
  widthOffset = _ctx.canvas.width/2;
  heightOffset = _ctx.canvas.height/2;
  _ctx.font = "bold 18px sans-serif";
  _ctx.fillText("Product", widthOffset, height - 20);
  _ctx.fillText("Units", 20, heightOffset);
}

// Drawing the bars
function drawBars(salesData, baseX, baseY){
  /*
    In this code, the width of each bar is a fixed value, while the height is obtained from the sales 
    property of each product within the array.
  */
  var i, length, category, sales, height, labelWidth;
  var barWidth = 80;
  var xPos = baseX + 30;
  var height = _ctx.canvas.height;
  var labelWidth = barWidth + 40;

  for (i = 0, length = salesData.length; i < length; i++) {
    category = salesData[i].category;        
    _ctx.fillText(category, labelWidth, height - 50);
    sales = salesData[i].sales;
    _ctx.fillRect(xPos, baseY - sales-1, barWidth, sales);
    xPos += 125;
    labelWidth += barWidth + 52;
  }
}

function drawBarsColours(salesData, baseX, baseY, colors){
  var i, length, category, sales, height, labelWidth;
  var barWidth = 80;
  var xPos = baseX + 30;
  var height = _ctx.canvas.height;
  var labelWidth = barWidth + 40;
  
  for (i = 0, length = salesData.length; i < length; i++) {
    category = salesData[i].category;
    _ctx.fillStyle = "#000";
    _ctx.fillText(category, labelWidth, height - 50);
    sales = salesData[i].sales;
    _ctx.fillStyle = colors[i % length];
    _ctx.fillRect(xPos, baseY - sales-1, barWidth, sales);
    xPos += 125;
    labelWidth += barWidth + 52;
  }
}

function drawBarsGradient(salesData, baseX, baseY, colors){
  var i, length, category, sales, height, labelWidth;
  var barWidth = 80;
  var xPos = baseX + 30;
  var height = _ctx.canvas.height;
  var labelWidth = barWidth + 40;
  
  for (i = 0, length = salesData.length; i < length; i++) {
    category = salesData[i].category;
    _ctx.fillStyle = "#000";
    _ctx.fillText(category, labelWidth, height - 50);
    sales = salesData[i].sales;
    _ctx.fillStyle = createGradient(xPos, baseY - sales-1, barWidth, colors[i % length]);
    _ctx.fillRect(xPos, baseY - sales-1, barWidth, sales);
    xPos += 125;
    labelWidth += barWidth + 52;
  }
}

function createGradient(x, y, width, color) {
  var gradient;
  gradient = _ctx.createLinearGradient(x, y, x+width, y);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, "#efe3e3");
  return gradient;
}