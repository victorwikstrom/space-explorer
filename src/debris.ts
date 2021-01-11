class Debris extends GameObject {
  public color: p5.Color;
  public x: number;
  public y: number;
  private xspeed: number;
  private yspeed: number;
  private opacity;

  // private collisionSound: string - To be added later

  constructor(x: number, y: number, color: p5.Color) {
    super();
    this.size = 0;
    this.x = x;
    this.y = y;
    this.xspeed = random(-5, 5);
    this.yspeed = random(-5, 5);
    this.radius = random(2, 10);
    this.opacity = 1;
    this.color = color;

    // this.collisionSound = p5.SoundFile;
  }

  update() {
    this.x = this.x - this.xspeed;
    this.y = this.y + this.yspeed;
  }

  draw() {
    push();
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    pop();
  }
}
