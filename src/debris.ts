class Debris extends GameObject {
  private color: String;
  public x: number;
  public y: number;
  private xspeed: number;
  private yspeed: number;
  public opacity;
  // private collisionSound: string - To be added later

  constructor(x: number, y: number, color: String) {
    super();
    this.x = x;
    this.y = y;
    this.xspeed = random(-5, 5);
    this.yspeed = random(-5, 5);
    this.radius = random(2, 10);
    this.opacity = 255;
    this.color = color;

    // this.collisionSound = p5.SoundFile;
  }

  update() {
    this.x = this.x - this.xspeed;
    this.y = this.y + this.yspeed;
    if (this.opacity > 0) {
      this.opacity -= deltaTime * 0.1;
    }
  }

  draw() {
    push();
    strokeWeight(this.radius);
    stroke(this.getColor(this.color));
    line(this.x, this.y, this.x, this.y);
    pop();
  }

  private getColor(c: String) {
    if (c === "blue") {
      return color(102, 255, 255, this.opacity);
    } else if (c === "red") {
      return color(255, 51, 51, this.opacity);
    } else if (c === "yellow") {
      return color(255, 255, 102, this.opacity);
    } else {
      return color(255, this.opacity);
    }
  }
}
