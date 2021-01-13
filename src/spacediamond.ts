class SpaceDiamond extends GameObject {
  damage: number;
  image: p5.Image;
  // private collisionSound: string - To be added later

  constructor() {
    super();
    this.position = this.position;
    this.radius = width / 100;
    this.velocity = createVector(random(4, 8), 0);
    this.image = this.setPlayerImage(spaceDiamondImg);
    this.damage = -1; // Negative damage in order to apply health
    // this.collisionSound = "" To be added later
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
