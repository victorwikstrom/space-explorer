class BlackHole extends GameObject {
  //private image: string; //- TO BE ADDED LATER
  // private damage: number; // - TO BE ADDED LATER
  // private collisionSound: string; // TO BE ADDED LATER

  constructor() {
    super();
    //this.image = "" //TO BE ADDED LATER
    //this.damage = 10; // TO BE ADDED LATER
    //this.collisionSound: "" //TO BE ADDED LATER
    this.position = createVector(width, random(height));
    this.velocity = createVector(random(4, 6), 0);
    this.acceleration = createVector(0, 0);
  }

  public update() {
    this.position.sub(this.velocity);
    if (this.position.x < 0) {
      this.position.x = width;
      this.position.y = random(height);
    }
  }

  public draw() {
    push();
    fill(color("black"));
    stroke(color("white"));
    strokeWeight(3);
    ellipse(this.position.x, this.position.y, 60, 60);
    pop();
  }

  public handleShot() {}
}
