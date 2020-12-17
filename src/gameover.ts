class GameOver {
  private gameGUI: IGameState;
  private isActive: boolean;
  public button: p5.Element;

  constructor(gameGUI: GameGUI) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.button = createButton("Go to Intro GUI");
  }

  public draw() {
    if (!this.isActive) {
      this.isActive = true;
    }

    this.createElements();

    //GO TO NEXT GUI
    this.button.mousePressed(() => {
      this.isActive = false;
      this.button.hide();
      this.gameGUI.updateGUI("intro");
    });
  }

  createElements() {
    // CREATE TEXT
    fill("red");
    noStroke();
    textSize(30);
    text("This is the GameOver GUI", 10, 40);
    //CREATE BUTTON
    this.button.show();
    this.button.size(150, 30);
    this.button.position(10, 50);
  }
}
