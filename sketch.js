function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 242, 235);
  noStroke();
}

function draw() {
    if (frameCount % 7 == 0) {
  fill(random(50, 200), random(100, 220), random(150, 255));

    if (random(1) < 0.7) {
      rect(mouseX, mouseY, random(20, 80), random(20, 80));
    } else {
      square(mouseX, mouseY, random(20, 70));

    }
 }
 
   if (mouseX < width / 2) {

    fill(random(100, 220), random(100, 200), random(150, 220));

    push();
    translate(mouseX, mouseY);

    beginShape();
    vertex(0, -30);
    bezierVertex(40, -50, 50, 20, 10, 35);
    bezierVertex(-30, 50, -50, 0, 0, -30);
    endShape(CLOSE);

    pop();
  }
  }