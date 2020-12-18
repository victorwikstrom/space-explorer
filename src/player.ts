class Player {
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;

  name: string;
  score: number;
  isAlive: boolean;
  isMoving: boolean;

  currentHealth: number;
  image: p5.Image;

  constructor() {
    this.position = createVector(100, height * 0.5);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0.0, 0.0);

    this.name = "Player";
    this.score = 0;
    this.isAlive = true;
    this.isMoving = false;

    this.currentHealth = 10;
    this.image = this.setPlayerImage(shipImg);
  }

  draw() {
    fill(255);
    textSize(12);
    text(this.name, this.position.x, this.position.y - 20);
    image(this.image, this.position.x, this.position.y);
  }

  update() {
    this.isMoving = false;

    this.checkEdges();
    this.move();
  }

  move() {
    this.velocity.limit(8);
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

  checkEdges() {
    if (this.position.x >= width - 20) {
      this.position.x = width - 20;
    }
    if (this.position.x <= 20) {
      this.position.x = 20;
    }
    if (this.position.y <= 20) {
      this.position.y = 20;
    }
    if (this.position.y >= height - 20) {
      this.position.y = height - 20;
    }
  }

  setPlayerImage(img: p5.Image) {
    img.resize(100, 0);
    return img;
  }

  updateScore() {}

  updateHealth() {}

  die() {}

  shoot() {}
}
