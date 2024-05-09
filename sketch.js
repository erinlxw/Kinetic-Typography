let x = 0;
let y = 0;
let font;
let points = [];
let diameter = 20;
let r = 10;
let angle = 0;
let dragging = false;

function preload() {
  font = loadFont("Yeseva_One/YesevaOne-Regular.ttf")
}

function setup() {
  createCanvas(900, 900);
  points = font.textToPoints("el", 150, 300, 300, { sampleFactor: .2, simplifyThreshold: 0 });
  print(points);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  for (let i = 0; i < points.length; i++) {
    if (dragging) {
      let randomRed = random(255);
      let randomGreen = random(255);
      let randomBlue = random(255);
      fill(randomRed, randomGreen, randomBlue);
      ellipse(points[i].x + r * sin(angle + i * 25) + mouseX - x, points[i].y + mouseY - y, 10, 10);
    }
    else {
      ellipse(points[i].x + r * sin(angle + i * 25), points[i].y, 10, 10);
    }

  }
  angle += 10;
}

function mousePressed() {
  for (let i = 0; i < points.length; i++) {
    if (dist(points[i].x, points[i].y, mouseX, mouseY) < diameter) {
      dragging = true;
      x = points[points.length - 1].x - points[0].x + mouseX - 90;
      y = points[0].y - points[points.length - 1].y + mouseY - 5;
    }
  }
}

function mouseReleased() {
  dragging = false;
}

setInterval(randomOscillator, 100);

function randomOscillator() {
  let randomTime = random(15);
  r = randomTime;
}