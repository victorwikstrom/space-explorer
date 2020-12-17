class GameIntro {
  private gameGUI: IGameState;
  private isActive: boolean;
  private button: p5.Element;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.button = createButton("Go to Game Play GUI");
  }

  public draw() {
    if (!this.isActive) {
      this.createElements();
      this.isActive = true;
    }
    this.button.mousePressed(() => {
      this.isActive = false;
      this.button.hide();
      this.gameGUI.updateGUI("play");
    });
  }

  createElements() {
    // CREATE CANVAS
    createCanvas(windowWidth, windowHeight);
    background(random(30));
    // CREATE TEXT
    fill("white");
    textSize(30);
    text("This is the Intro GUI", 100, 100);
    // CREATE BUTTON
    this.button.show();
    this.button.position(100, height / 2);
    this.button.size(150, 30);
  }
}
