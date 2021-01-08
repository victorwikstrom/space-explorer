class SpaceDiamond extends GameObject {
  // private collisionSound: string - To be added later
  color: p5.Color;
  damage: number;

  constructor() {
    super();
    // this.collisionSound = "" To be added later
    this.position = this.position;
    this.velocity = createVector(random(5, 8), 0);
    // this.acceleration = createVector(0, 0);
    this.color = color("yellow");
    this.radius = 5;
    this.damage = -1; // Negative damage in order to apply health
  }

  public update() {
    super.update();
  }

  public draw() {
    push();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    pop();
  }
}
