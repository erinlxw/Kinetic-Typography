let font, points=[], r=60, angle = 0;


function preload(){
  font = loadFont("Yeseva_One/YesevaOne-Regular.ttf")
}

function setup() {
  frameRate(5);
  createCanvas(800, 800);
  points = font.textToPoints("PCC",150,300,300, {sampleFactor:.2,simplifyThreshold:0});
  print(points);
  angleMode(degrees);
}

function draw() {
  background(0);
  for(let i=0; i<points.length;i++)
  {
    //ellipse(points[i].x,points[i].y,10,10);
    ellipse(points[i].x+r*sin(angle +i*25),points[i].y,10,10);
    //ellipse(points[i].x, points[i].y + r*sin(angle + i*25),5,5);

  }
  angle += 10;
}
