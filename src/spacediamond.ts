class SpaceDiamond extends GameObject {
  // private collisionSound: string - To be added later
  color: p5.Color;
  damage: number;
  image: p5.Image;

  constructor() {
    super();
    // this.collisionSound = "" To be added later
    this.position = this.position;
    this.velocity = createVector(random(4, 8), 0);
    // this.acceleration = createVector(0, 0);
    this.color = color("yellow");
    this.radius = 10;
    this.damage = -1; // Negative damage in order to apply health
    this.image = this.setPlayerImage(spaceDiamondImg);
  }

  public update() {
    super.update();
  }

  public draw() {
    image(this.image, this.position.x, this.position.y, this.radius*2, this.radius*2);

    //OLD DESIGN:
    //push
    // fill(this.color);
    // ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    //pop
  }

  private setPlayerImage(img: p5.Image) {
    img.resize(100, 0);
    return img;
  }
}
