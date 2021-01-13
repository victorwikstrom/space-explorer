abstract class GameObject {
  public position: p5.Vector;
  public radius: number;
  public velocity: p5.Vector;
  protected acceleration: p5.Vector;
  public isHit: boolean;
  public damage: number;

  constructor() {
    this.position = createVector(random(width, width*2), random(95, height));
    this.radius = 0;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.isHit = false;
    this.damage = 0;
  }

  public update() {
    this.position.sub(this.velocity);
    if (this.position.x < 0) {
      this.position.x = width;
      this.position.y = random(95, height);
    }
  }

  public draw() {}
}
