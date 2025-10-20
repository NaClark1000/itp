# MIDTERM
##Nathaniel Oviedo-Clark
###Phase 1 
Drew three triangles side by side with a thin rectangle on top.

###Phase 2
Went through the [p5.js reference site](https://p5js.org/reference/), specifically working with [triangles](https://p5js.org/reference/p5/triangle/),
so I could translate the drawing into pixel coordinates.

`function draw() {
  background(255);
  triangle(4, 100, 20, 10, 54, 100);
  triangle(54, 100, 70, 10, 104, 100);
  triangle(104, 100, 120, 10, 150, 100);`
  
Created three triangles first, then added a rectangle.

`  rect(0, 30, 150, 10);
}`

###Phase 3
Followed the given instructions, made sure to include functions; `drawObject` ,`translate` , and `scale` to position and scale the object. 
As well as `push()` and `pop()` to save and restore the current drawing style settings and transformations.  

`function drawObject(x, y, s) {
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
}`

###Phase 

####Setup
For phase four, I first split it into two parts.  Nested loops for the y-axis (columns) and x-axis (rows).  I know I wanted to have a user `prompt` input 
down the line, but for now they're both set to 5.  

`let columns = 5;
let rows = 5;`


To get individual cell widths:

 ` cellW = width / columns;
  cellH = height / rows;`

To ensure that each cell scales properly, it's divided by the columns (x-axis) and rows (y-axis):


#####Completed setup

`let columns = 5; 
let rows = 5; 
function setup() {
  createCanvas(500, 500); 
  cellW = width 
  cellH = height
}
`

I then copied the code from the previous phase for the `function drawObject()` to save my current object settings and transformations.

`function drawObject(x, y, s) {
  triangle(4, 100, 20, 10, 54, 100);
  triangle(54, 100, 70, 10, 104, 100);
  triangle(104, 100, 120, 10, 150, 100);
  rect(0, 30, 150, 10);
  pop();
}`


For the draw function, I needed a scale value that could change with different columns and row values.

To get that scale value, I needed to divide the original height and original width by the individual cell width and cell height,

`let s = (cellW / originalW, cellH / originalH);`

From here, I'll take the lowest of both values with `min` to get the smallest value the object can fit in. 
 
` let s = min(cellW / originalW, cellH / originalH);`

I then added the original widths and heights:

`
  let originalW = 150;
  let originalH = 100;`


I then created a nested for loop for both the column and row value, ensuring the loop stops when the value is equal to the given column and row value.

`for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {`  

According to the instructions, "You can multiply the cell width with the current x position in the nested for-loop to position your object in the x-axis. For the y-axis, this will be the cell height multiplied by the current y position."

`let x = i * cellW;
 let y = j * cellH;`
 
####Scaling and Translating
 
 
Places drawing in the center of the cell, which is where we want the object to appear:
 
 `translate(x + cellW / 2, y + cellH / 2);`
 
 Scale value that we calculated earlier:
 
 `scale(s);`
 
 Align objects center:
 
 `translate(-originalW / 2, -originalH / 2);`
 
Draw object with no additional scaling information:

` drawObject(0, 0, 1);` 

I had the most trouble figuring out scaling and translating, a lot of trial and error. 
I used [example sketches](https://editor.p5js.org/p5/sketches) found on 
[p5.js](https://p5js.org/reference/) to make sure I was using these functions corerectly. 

After the combined code was working, I went back and added the user prompt.



`let a = prompt("a x a");
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
  rect(0, 30, 150, 10)
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
}`


