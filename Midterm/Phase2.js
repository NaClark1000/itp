function setup() {
  createCanvas(150, 150);
}

function draw() {
  background(255);
  triangle(4, 100, 20, 10, 54, 100);
  triangle(54, 100, 70, 10, 104, 100);
  triangle(104, 100, 120, 10, 150, 100);
  rect(0, 30, 150, 10);
}