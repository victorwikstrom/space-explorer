class Star extends GameObject {
  private opacity: number;
  private color: number;

  constructor() {
    super();
    this.opacity = random(100, 200);
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(0.5, 1), 0);
    this.opacity = random(100, 200);
    (this.color = random(229, 255)), 255, 255;
  }

  public update() {
    super.update();
  }

  public draw() {
    strokeWeight(1);

    if (this.velocity.x < 0.7) {
      this.opacity = random(50, 100);
      strokeWeight(1.5);
    } else if (this.velocity.x > 0.9) {
      strokeWeight(3);
    }
    line(this.position.x, this.position.y, this.position.x, this.position.y);
    stroke(this.color, this.opacity);
  }
}
