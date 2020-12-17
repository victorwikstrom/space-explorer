class Player {
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;

  name: string;
  score: number;
  isAlive: boolean;
  isMoving: boolean;

  currentHealth: number;
  image: string;

  constructor() {
    this.position = createVector(100, height * 0.5);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0.0, 0.0);

    this.name = "Player";
    this.score = 0;
    this.isAlive = true;
    this.isMoving = false;

    this.currentHealth = 10;
    this.image = "image";
  }

  draw() {
    fill(255);
    ellipse(this.position.x, this.position.y, 50);
    noStroke();
    textSize(12);
    text(this.name, this.position.x - 20, this.position.y - 35);
  }

  update() {
    this.isMoving = false;
    this.velocity.setMag(8);

    if (!this.isMoving) {
      this.acceleration.set(0, 0);
    }

    if (keyIsDown(UP_ARROW)) {
      this.isMoving = true;
      this.acceleration.set(0, -2);
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.isMoving = true;
      this.acceleration.set(0, 2);
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.isMoving = true;
      this.acceleration.set(-2, 0);
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.isMoving = true;
      this.acceleration.set(2, 0);
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
  }

  setPlayerImage() {}

  updateScore() {}

  updateHealth() {}

  die() {}

  shoot() {}
}
