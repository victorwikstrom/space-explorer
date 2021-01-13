class BlackHole extends GameObject {
  public damage: number;
  // private collisionSound: string; // TO BE ADDED LATER
  public image: p5.Image;

  constructor() {
    super();
    this.position = this.position;
    this.radius = width / random(10, 12);
    this.velocity = createVector(random(2, 3), 0);
    this.image = this.setPlayerImage(blackHoleImg);
    this.damage = 12; //HIGHER THAN 10 TO DIE
    //this.collisionSound: "" //TO BE ADDED LATER
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
