class Star extends GameObject {
  x: number;
  y: number;
  xspeed: number;
  private opacity: number;
  private color: p5.Color;

  constructor() {
    super();
    this.opacity = random(100, 200);
    this.x = random(width);
    this.y = random(height);
    this.xspeed = random(0.2, 0.5);
    this.color = color(230, 255, 255, this.opacity);
  }

  public draw() {
    strokeWeight(1);
    stroke(this.color);
    circle(this.x, this.y, random(0.1, width / 900));
  }

  public update() {
    this.x - this.xspeed;
    if (this.x < 0) {
      this.x = width + 1;
    }
  }
}
