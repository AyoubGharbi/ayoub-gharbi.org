// https://en.wikipedia.org/wiki/Mathematical_beauty
// https://en.wikipedia.org/wiki/Pythagorean_theorem
// https://www.geogebra.org/m/f7UdJmAb

let pointOffsetX;
let pointOffsetY;
let canvas;

function setup() {
  canvas = createCanvas(800, 800);

  pointOffsetX = width/20;
  pointOffsetY = height/20;
}

function draw() {
  background(255);
  createGrid();

  let point1 = new GridPoint(8 * pointOffsetX, 10 * pointOffsetY);
  let point2 = new GridPoint(12 * pointOffsetX, 10 * pointOffsetY);
  let point3 = new GridPoint(12 * pointOffsetX, 8 * pointOffsetY);

  point1.createPoint();
  point2.createPoint();
  point3.createPoint();

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

class GridPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  createPoint() {
    stroke(0);
    strokeWeight(10);
    point(this.x, this.y);
  }
}