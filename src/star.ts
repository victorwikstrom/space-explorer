class Star extends GameObject {
  private opacity: number;

  constructor() {
    super();
    this.opacity = random(100, 200);
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0.2, 0);
    this.acceleration = createVector(50, 50);
  }

  public draw() {
    stroke(color(230, 255, 255, this.opacity));
    ellipse(this.position.x, this.position.y, random(0.2, width / 1000));
  }

  public update() {
    this.position.sub(this.velocity);
  }
}
