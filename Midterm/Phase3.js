function setup() {
  createCanvas(500, 500);
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  triangle(4, 100, 20, 10, 54, 100);
  triangle(54, 100, 70, 10, 104, 100);
  triangle(104, 100, 120, 10, 150, 100);
  rect(0, 30, 150, 10);
  pop();
}

function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 100, 1);
  drawObject(0, 200, 1);
}
