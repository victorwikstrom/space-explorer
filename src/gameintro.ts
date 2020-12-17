class GameIntro {
  private gameGUI: IGameState;
  private isActive: boolean;
  public button: p5.Element;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.button = createButton("Go to Game Play GUI");
  }

  public draw() {
    if (!this.isActive) {
      this.isActive = true;
    }

    this.createElements();

    // GO TO NEXT GUI
    this.button.mousePressed(() => {
      this.isActive = false;
      this.button.hide();
      this.gameGUI.updateGUI("play");
    });
  }

  createElements() {
    // CREATE TEXT
    fill("blue");
    noStroke();
    textSize(30);
    text("This is the Intro GUI", 10, 40);
    // CREATE BUTTON
    this.button.show();
    this.button.position(10, 50);
    this.button.size(150, 30);
  }
}
