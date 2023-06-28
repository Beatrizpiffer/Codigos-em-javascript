<!DOCTYPE html>
<html>
<head>
    <title>Animation Example</title>
    <style>
        #canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="400" height="400"></canvas>
    <script src="script.js"></script>
</body>
</html>

// Get the canvas element and its 2D rendering context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set the initial position of our shape
var x = 50;
var y = 50;

// Set the speed at which the shape will move
var dx = 2;
var dy = 2;

function draw() {
    // Clear the canvas on each frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the shape
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    // Update the shape's position
    x += dx;
    y += dy;

    // Reverse the direction if the shape hits the canvas boundaries
    if (x + dx > canvas.width - 20 || x + dx < 20) {
        dx = -dx;
    }
    if (y + dy > canvas.height - 20 || y + dy < 20) {
        dy = -dy;
    }
}

// Call the draw function repeatedly to animate the shape
setInterval(draw, 10);
