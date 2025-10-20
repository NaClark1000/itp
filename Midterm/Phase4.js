let a = prompt("a x a");
let columns = a;
let rows = a;

function setup() {
  createCanvas(500, 500);
  cellW = width / columns;
  cellH = height / rows;
}

function drawObject(x, y, s) {
  triangle(4, 100, 20, 10, 54, 100);
  triangle(54, 100, 70, 10, 104, 100);
  triangle(104, 100, 120, 10, 150, 100);
  rect(0, 30, 150, 10);

  pop();
}

function draw() {
  background(255);

  let originalW = 150;
  let originalH = 100;

  let s = min(cellW / originalW, cellH / originalH);

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;

      push();

      translate(x + cellW / 2, y + cellH / 2);

      scale(s);

      translate(-originalW / 2, -originalH / 2);
      drawObject(0, 0, 1);
      pop();
    }
  }
}
