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
    this.damage = 3;
    this.radius = 17;
    this.color = color(95, 45, 139);

    //     this.collisionSound = p5.SoundFile;
  }

  update() {
    super.update();
  }

  draw() {
    push();
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.radius*2 , this.radius*2);
    pop();
  }
}
