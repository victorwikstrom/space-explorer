class Shot extends GameObject {
  private stroke: p5.Color;
  //   shotSound: p5.SoundFile;

  constructor(x: number, y: number) {
    super();
    this.size = 0;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.stroke = color("white");
    //     this.shotSound = p5.SoundFile;
  }

  update() {
    this.position.x = this.position.x + 15;
  }

  draw() {
    stroke(this.stroke);
    strokeWeight(7);
    line(
      this.position.x,
      this.position.y,
      this.position.x + 5,
      this.position.y
    );
  }
}
