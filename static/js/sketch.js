// https://en.wikipedia.org/wiki/Mathematical_beauty
// https://en.wikipedia.org/wiki/Pythagorean_theorem
// https://www.geogebra.org/m/f7UdJmAb

let pointOffsetX;
let pointOffsetY;
let canvas;

let point1;
let point2;
let point3;

function setup() {
  canvas = createCanvas(800, 800);

  pointOffsetX = width/20;
  pointOffsetY = height/20;

    
  point1 = new GridPoint(8 * pointOffsetX, 10 * pointOffsetY);
  point2 = new GridPoint(12 * pointOffsetX, 10 * pointOffsetY);
  point3 = new GridPoint(12 * pointOffsetX, 8 * pointOffsetY);

}

function draw() {
  background(255);
  createGrid();

  point1.update();
  point1.over();
  point1.show();
  
  point2.update();
  point2.over();
  point2.show();
  
  point3.update();
  point3.over();
  point3.show();
  
  strokeWeight(2);

  line(point1.x, point1.y, point2.x, point2.y)
  line(point2.x, point2.y, point3.x, point3.y)
  line(point3.x, point3.y, point1.x, point1.y)
}

function createGrid() {
  for(var x = 0; x < width + 1; x += pointOffsetX) {
    for(var y = 0; y < height + 1; y += pointOffsetY) {
      stroke(220);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}

function mousePressed() {
  point1.pressed();
  point2.pressed();
  point3.pressed();
}

function mouseReleased() {
  point1.released();
  point2.released();
  point3.released();
}

class GridPoint extends Draggable {
}