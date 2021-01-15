class SpaceDiamond extends GameObject {
  damage: number;
  image: p5.Image;
  hitSound: p5.SoundFile;
  shotSound: p5.SoundFile;

  constructor() {
    super();
    this.position = this.position;
    this.radius = width / 100;
    this.velocity = createVector(random(4, 8), 0);
    this.image = this.setPlayerImage(spaceDiamondImg);
    this.damage = -1; // Negative damage in order to apply health
    this.hitSound = diamondHit;
    this.shotSound = diamondShot;
  }

  public update() {
    super.update();
  }

  public draw() {
    image(
      this.image,
      this.position.x - this.radius,
      this.position.y - this.radius,
      this.radius * 2,
      this.radius * 2
    );
  }

  private setPlayerImage(img: p5.Image) {
    img.resize(this.radius, 0);
    return img;
  }
}
