function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245, 242, 235);
  noStroke();
}

function draw() {

  if (mouseX < width / 2) {

    if (frameCount % 7 == 0) {

      fill(random(50, 200), random(100, 220), random(150, 255));

      if (random(1) < 0.7) {
        rect(mouseX, mouseY, random(20, 80), random(20, 80));
      } else {
        square(mouseX, mouseY, random(20, 70));
      }
    }

  }

  else {

    if (frameCount % 5 == 0) {

      fill(random(100, 220), random(100, 200), random(150, 220));

      ellipse(mouseX, mouseY, 50, 40);
      ellipse(mouseX + 15, mouseY - 10, 35, 45);
      ellipse(mouseX - 15, mouseY + 10, 40, 35);

    }
  }
}