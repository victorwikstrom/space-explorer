class BlackHole extends GameObject {
  public damage: number;
  // private collisionSound: string; // TO BE ADDED LATER
  public image: p5.Image;

  //VARIABLES NOT USED ANYMORE:
  //public fill: p5.Color;
  //private stroke: p5.Color;

  constructor() {
    super();
    //this.collisionSound: "" //TO BE ADDED LATER
    this.position = this.position;
    this.velocity = createVector(random(2, 3), 0);

    this.radius = 40;
    this.damage = 12; //HIGHER THAN 10 TO DIE
    this.image = this.setPlayerImage(blackHoleImg);
  }
  public update() {
    super.update();
  }

  public draw() {
    image(this.image, this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    
    //OLD DESIGN
    //push();
    // fill(this.fill);
    // stroke(this.stroke);
    // strokeWeight(3);
    // ellipse(this.position.x, this.position.y, this.radius * 3, this.radius * 2);
    //pop();
  }

  public handleShot() {}

  private setPlayerImage(img: p5.Image) {
    img.resize(100, 0);
    return img;
  }
}
