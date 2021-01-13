class Meteorite extends GameObject {
  damage: number;
  image: p5.Image;
  // private collisionSound: string - To be added later

  constructor() {
    super();
    this.position = this.position;
    this.radius = width / 40;
    this.velocity = createVector(random(8, 10), 0);
    this.image = this.setPlayerImage(meteoriteImg);
    this.damage = 5;
    // this.collisionSound = p5.SoundFile;
  }

  update() {
    super.update();
  }

  draw() {
    image(
      this.image,
      this.position.x - this.radius,
      this.position.y - this.radius,
      this.radius * 2,
      this.radius * 2
    );
  }

  private setPlayerImage(img: p5.Image) {
    img.resize(this.radius * 2, 0);
    return img;
  }
}
