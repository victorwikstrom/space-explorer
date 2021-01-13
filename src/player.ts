class Player {
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  radius: number;
  name: string;
  score: number;
  isAlive: boolean;
  isMoving: boolean;
  currentHealth: number;
  image: p5.Image;
  textColor: p5.Color;
  rechargeGun: number;
  shots: Array<Shot>;

  constructor() {
    this.position = createVector(100, height * 0.5);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0.0, 0.0);
    this.radius = width / 20;
    this.name = "Player";
    this.score = 0;
    this.isAlive = true;
    this.isMoving = false;
    this.currentHealth = 10;
    this.image = this.setPlayerImage(shipImg);
    this.textColor = color("white");

    this.shots = [];

    this.rechargeGun = 500;
  }

  update() {
    this.isMoving = false;

    this.checkEdges();
    this.move();
    this.handleSpacebarEvent();
    this.updateFiredShots();

    this.rechargeGun -= deltaTime;
  }

  public draw() {
    image(this.image, this.position.x, this.position.y);
  }

  private move() {
    this.velocity.limit(4);
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

  private checkEdges() {
    if (this.position.x >= width - 20) {
      this.position.x = width - 20;
    }
    if (this.position.x <= 20) {
      this.position.x = 20;
    }
    if (this.position.y <= 95) {
      this.position.y = 95;
    }
    if (this.position.y >= height - 95) {
      this.position.y = height - 95;
    }
  }

  public setPlayerImage(img: p5.Image) {
    img.resize(this.radius, 0);
    return img;
  }

  private handleSpacebarEvent() {
    if (keyIsDown(32)) {
      if (this.rechargeGun < 0) {
        this.shoot();
        this.rechargeGun = 500;
      }
    }
  }

  private shoot() {
    let shot = new Shot(
      this.position.x + this.radius * 0.6,
      this.position.y + this.radius * 0.37
    );
    this.shots.push(shot);
  }

  private updateFiredShots() {
    if (this.shots.length) {
      for (let i = 0; i < this.shots.length; i++) {
        this.shots[i].draw();
        this.shots[i].update();
        if (this.shots[i].position.x > width) {
          this.shots.splice(i, 1);
        }
      }
    }
  }

  updateScore() {}

  updateHealth() {}

  public collides(obj: GameObject): boolean {
    let d = dist(
      this.position.x + 10,
      this.position.y + 10,
      obj.position.x,
      obj.position.y
    );
    if (d < this.radius + 5 && !obj.isHit) {
      return true;
    } else {
      obj.isHit = false;
      return false;
    }
  }

  die() {
    this.drawPlayerDiedView();
    setTimeout(this.updateGUI, 2000);
  }

  drawPlayerDiedView() {
    //CHANGE IMAGE
    this.radius = this.radius*2
    this.image = this.setPlayerImage(explosionImg);
    //DRAW TEXT
    push();
    fill("#01c2cb");
    textFont(spaceExplorerBold);
    textSize(35);
    textAlign(CENTER);
    fill("red");
    textSize(30);
    text("OH NO, YOUR SPACESHIP GOT DESTROYED...", width / 2, height / 2);
    pop();
    //STOP DRAW
    noLoop();
  }

  updateGUI() {
    //START DRAW
    loop();
    gameGUI.updateGUI("over");
  }
}
