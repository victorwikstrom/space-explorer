class Planet extends GameObject {
  damage: number;
  color: p5.Color;
  //   collisionSound: p5.SoundFile;

  constructor() {
    super();
    this.size = 0;
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(3, 5), 0);
    // this.acceleration = createVector(0, 0);
    this.damage = 0;
    this.radius = 17;
    this.color = color(95, 45, 139);

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
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.radius*2 , this.radius*2);
    pop();
  }
}
