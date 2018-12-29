function setup() {
  createCanvas(500, 500);

}

function draw() {
  var g = mouseX;
	var b = mouseY;
  background(50, g, b);
  frameRate(20);

  fill(0);
  if (mouseIsPressed) {
  ellipse(random(500), random(500), winMouseX/5, winMouseY/5);
} else{
  ellipse(250, 250, winMouseX, winMouseY);
  
}
}
