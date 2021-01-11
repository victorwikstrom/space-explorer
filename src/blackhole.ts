class BlackHole extends GameObject {
  //private image: string; //- TO BE ADDED LATER
  public damage: number; // - TO BE ADDED LATER
  // private collisionSound: string; // TO BE ADDED LATER
  public fill: p5.Color;
  private stroke: p5.Color;

  constructor() {
    super();
    //this.image = "" //TO BE ADDED LATER
    //this.damage = 10; // TO BE ADDED LATER
    //this.collisionSound: "" //TO BE ADDED LATER
    this.position = this.position;
    this.velocity = createVector(random(2, 3), 0);

    this.radius = 30;
    this.damage = 12; //Högre värde än 10 pga man ska kunna dö

    //this.acceleration = createVector(0, 0);
    this.fill = color("black");
    this.stroke = color("white");
  }
  public update() {
    super.update();
  }

  public draw() {
    push();
    fill(this.fill);
    stroke(this.stroke);
    strokeWeight(3);
    ellipse(this.position.x, this.position.y, this.radius * 3, this.radius * 2);
    pop();
  }

  public handleShot() {}
}
