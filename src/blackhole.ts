class BlackHole extends GameObject {
  public image: p5.Image;

  constructor() {
    super();
    this.position = this.position;
    this.radius = width / random(10, 12);
    this.velocity = createVector(random(2, 3), 0);
    this.damage = 100; 
    this.image = this.setPlayerImage(blackHoleImg);
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
