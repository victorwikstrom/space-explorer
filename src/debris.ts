class Debris extends GameObject {
  public color: p5.Color;
  public startPos;

  // private collisionSound: string - To be added later

  constructor(startPos: number, color: p5.Color) {
    super();
    this.size = 0;
    this.startPos = startPos;
    this.velocity = createVector(random(8, 10), random(1, 2));
    this.damage = 5;
    this.radius = 30;
    this.color = color;

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
