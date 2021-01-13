class Planet extends GameObject {
  damage: number;
  color: p5.Color;
  images: Array<p5.Image>;
  number: number;
  collisionSound: p5.SoundFile;

  constructor() {
    super();
    this.size = 0;
    this.position = this.position;
    this.velocity = createVector(random(3, 5), 0);
    // this.acceleration = createVector(0, 0);
    this.damage = 3;
    this.radius = width / random(25, 35);
    this.color = color(95, 45, 139);
    this.images = [
      planet1,
      planet2,
      planet3,
      planet4,
      planet5,
      planet6,
      planet7,
      planet8,
      planet9,
      planet10,
      planet11,
      planet12,
    ];
    this.number = floor(random(12));
    this.collisionSound = explodeSound;
  }

  update() {
    super.update();
  }

  draw() {
    image(
      this.images[this.number],
      this.position.x,
      this.position.y,
      this.radius * 2,
      this.radius * 2
    );
  }
}
