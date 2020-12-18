class Planet extends GameObject {
  damage: number;
  //   collisionSound: p5.SoundFile;

  constructor() {
    super();
    this.size = 0;
    this.position = createVector(0, 0);
    this.velocity = createVector(0, 0);
    //     this.acceleration = createVector(0, 0);
    this.damage = 0;
    //     this.collisionSound = p5.SoundFile;
  }

  update() {}

  draw() {}
}
