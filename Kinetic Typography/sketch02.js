let font,points=[];

function preload(){
  font = loadFont("Yeseva_One/YesevaOne-Regular.ttf")
}

function setup() {
  createCanvas(400, 400);
  points = font.textToPoints("PCC",50,200,300);
  print(points);
}

function draw() {
  background(220);
}
