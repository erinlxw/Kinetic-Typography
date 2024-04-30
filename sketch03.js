let font;

function preload(){
  font = loadFont("Yeseva_One/YesevaOne-Regular.ttf")
}

function setup() {
  createCanvas(800, 800);
  points = font.textToPoints("PCC",150,300,300);
  print(points);
}

function draw() {
  background(220);
  for(let i=0; i<points.length;i++)
  {
    ellipse(points[i].x,points[i].y,10,10);
  }
}
