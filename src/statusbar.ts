class StatusBar {
  position: p5.Vector;
  textColor: p5.Color;
  stroke: p5.Color;
  ellipses: Array<any>;
  distanceFromEarth: number;
  currentSpeed: number;

  constructor() {
    this.position = createVector(0, 0);
    this.textColor = color("white");
    this.stroke = color("blue");
    this.ellipses = Array<any>();
    this.distanceFromEarth = 0;
    this.currentSpeed = 1;
  }

  update(gameAcceleration: number) {
    this.currentSpeed += gameAcceleration;
    this.distanceFromEarth += (deltaTime / 800) * this.currentSpeed;
  }

  draw(health: number) {
    push();
    strokeWeight(4);
    stroke(this.stroke);
    fill(0);
    rect(0, 0, width / 3, 70);
    rect(width / 3, 0, width / 3, 70);
    rect(width - width / 3, 0, width / 3, 70);
    pop();

    push();
    textSize(15);
    noStroke();
    fill("red");
    textAlign(CENTER);
    textFont(spaceExplorerBold);
    // DISTANCE FROM EARTH
    text("DISTANCE FROM EARTH", 200, 30);
    fill(this.textColor);
    text(this.distanceFromEarth.toFixed() + " 000", 200, 50);
    // CURRENT SPEED
    fill("red");
    text("CURRENT SPEED (KM/S)", width / 3 + 200, 30);
    fill(this.textColor);
    text(this.currentSpeed.toFixed() + " 000", width / 3 + 200, 50);
    // SPACESHIP CONDITION
    fill("red");
    text("SPACESHIP CONDITION", width - width / 3 + 200, 30);
    fill("blue");
    textAlign(CENTER);
    this.drawEllipses(health);
    pop();
  }

  drawEllipses(health: number) {
    for (let i = 0; i < health && i < 10; i++) {
      const x = width - width / 3 + 60 + i * 20;
      this.ellipses.push(ellipse(x, 50, 10, 10));
    }
  }
}
