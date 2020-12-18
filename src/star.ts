class Star extends GameObject {
  x: number;
  y: number;
  xspeed: number;
  private opacity: number;
  private color: number;

  constructor() {
    super();
    this.opacity = random(100, 200);
    this.x = random(width);
    this.y = random(height);
    this.xspeed = random(0.5, 1);
    (this.color = random(229, 255)), 255, 255;
  }

  public draw() {
    strokeWeight(1);

    if (this.xspeed < 0.7) {
      this.opacity = random(50, 100);
      strokeWeight(1.5);
    } else if (this.xspeed > 0.9) {
      strokeWeight(3);
    }
    line(this.x, this.y, this.x, this.y);
    stroke(this.color, this.opacity);
  }

  public update() {
    this.x -= this.xspeed;
    if (this.x < 0) {
      this.x = width + 1;
    }
  }
}
