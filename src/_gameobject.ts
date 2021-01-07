abstract class GameObject {
  protected size: number;
  public position: p5.Vector;
  protected velocity: p5.Vector;
  protected acceleration: p5.Vector;
  public radius: number;
  public isHit: boolean;
  public damage: number;

  constructor() {
    this.size = 0;
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.radius = 0;
    this.isHit = false;
    this.damage = 0;
  }

  public update() {
    this.position.sub(this.velocity);
    if (this.position.x < 0) {
      this.position.x = width;
      this.position.y = random(height);
    }
  }

  public draw() {}
}
