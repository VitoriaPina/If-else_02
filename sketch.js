function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 242, 235);
  noStroke();
}

function draw() {
  fill(random(50, 200), random(100, 220), random(150, 255));

    if (random(1) < 0.3) {
      rect(mouseX, mouseY, random(20, 80), random(20, 80));
    } else {
      square(mouseX, mouseY, random(20, 70));

    }
 }