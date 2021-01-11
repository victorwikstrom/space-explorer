class Meteorite extends GameObject {
  damage: number;
  color: p5.Color;

  // private collisionSound: string - To be added later

  constructor() {
    super();
    this.size = 0;
    this.position = this.position;
    this.velocity = createVector(random(8, 10), 0);
    // this.acceleration = createVector(0, 0);
    this.damage = 5;
    this.radius = 30;
    this.color = color("red");
    // this.collisionSound = p5.SoundFile;
  }

  update() {
    super.update();
  }

  draw() {
    push();
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    pop();
  }
}
