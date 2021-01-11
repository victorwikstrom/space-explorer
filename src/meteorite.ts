class Meteorite extends GameObject {
  damage: number;
  image: p5.Image;
  // private collisionSound: string - To be added later

  //VARIABLES NOT USED ANYMORE:
  //color: p5.Color;

  constructor() {
    super();
    this.position = this.position;
    this.velocity = createVector(random(8, 10), 0);
    this.damage = 5;
    this.radius = 50;
    this.image = this.setPlayerImage(meteoriteImg);
    // this.collisionSound = p5.SoundFile;
  }

  update() {
    super.update();
  }

  draw() {
    push();
    image(this.image, this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    pop();

    //OLD DESIGN
    // noStroke();
    // fill(this.color);
    // ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }

  private setPlayerImage(img: p5.Image) {
    img.resize(100, 0);
    return img;
  }
}
