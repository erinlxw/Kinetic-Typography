let font;

function preload(){
  font = loadFont("Yeseva_One/YesevaOne-Regular.ttf")
}
function setup() {
  createCanvas(400, 400);
  fill('red');
  textFont(font);
  textSize(36);
}

function draw() {
  background(220);
  text('hello',10,50);

}
