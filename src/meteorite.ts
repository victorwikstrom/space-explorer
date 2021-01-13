class Meteorite extends GameObject {
  damage: number;
  image: p5.Image;
  public collisionSound: p5.SoundFile;

  //VARIABLES NOT USED ANYMORE:
  //color: p5.Color;

  constructor() {
    super();
    this.position = this.position;
    this.velocity = createVector(random(8, 10), 0);
    this.damage = 5;
    this.radius = width / 40;
    this.image = this.setPlayerImage(meteoriteImg);
    this.collisionSound = explodeSound;
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
