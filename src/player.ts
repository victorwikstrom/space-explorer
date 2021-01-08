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
  textColor: p5.Color;
  rechargeGun: number;
  shots: Array<Shot>;

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
    this.textColor = color("white");

    this.shots = [];

    this.rechargeGun = 500;
  }

  update() {
    this.isMoving = false;

    this.checkEdges();
    this.move();
    this.handleSpacebarEvent();
    this.deleteFiredShots();

    this.rechargeGun -= deltaTime;
  }

  public draw() {
    push();
    fill(this.textColor);
    textSize(12);
    //text(this.name, this.position.x, this.position.y - 20);
    image(this.image, this.position.x, this.position.y);
    pop();
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

  private setPlayerImage(img: p5.Image) {
    img.resize(100, 0);
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
    let shot = new Shot(this.position.x + 100, this.position.y + 36);
    this.shots.push(shot);
  }

  private deleteFiredShots() {
    if (this.shots) {
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

  

  die() {
    //KOM IHÅG ATT KOMMENTERA TILLBAKS INPUTS I GAMEINTRO
   this.drawPlayerDiedView();
   setTimeout(this.updateGUI, 2000);
  }

  drawPlayerDiedView(){
    //DRAW RECTANGLE
     push();
     noStroke();
     fill(color("#00f4"));
     rect(width/2-500, height/2 - 200, 1000, 400, 8);
     pop();
     //DRAW TEXT
     push()
     fill(color("white"));
     textSize(90)
     text("YOU DIED", width/2-200, height/2); 
     pop();
     //STOP DRAW
     noLoop();
   }

  updateGUI(){
    //START DRAW
    loop();
    gameGUI.updateGUI("over")
  }
}
