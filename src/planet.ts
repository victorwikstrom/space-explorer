class Planet extends GameObject {
  damage: number;
  //   collisionSound: p5.SoundFile;

  constructor() {
    super();
    this.size = 0;
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(3, 5), 0);
    this.acceleration = createVector(0, 0);
    this.damage = 0;
    //     this.collisionSound = p5.SoundFile;
  }

  update() {
    this.position.sub(this.velocity);
    if (this.position.x < 0) {
      this.position.x = width;
      this.position.y = random(height);
    }
  }

  draw() {
    push();
    noStroke();
    fill(color(95, 45, 139));
    ellipse(this.position.x, this.position.y, 35, 35);
    pop();
  }
}
