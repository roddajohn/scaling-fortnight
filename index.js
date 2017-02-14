var clear_btn = document.getElementById("clear");

var canvas = document.getElementById("canvas");

var content = canvas.getContext("2d");

content.fillStyle = "#000000";

var clear = function(event){
    content.clearRect(0, 0, canvas.width, canvas.height);
}

var drawRect = function(event){
    var x = event.offsetX;
    var y = event.offsetY;
    
    var width = (Math.random() * 25) + 25;
    var height = (Math.random() * 25) + 25;
    
    content.fillRect(x, y, x + width, y - height);
}

clear_btn.addEventListener('click', clear);
canvas.addEventListener('click', drawRect);

