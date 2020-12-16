class GameOver {
  private gameGUI: IGameState;
  private isInit: boolean;
  private button: p5.Element;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isInit = false;
    this.button = createButton("Go to Intro GUI");
  }

  public draw() {
    if (!this.isInit) {
      createCanvas(windowWidth, windowHeight);
      background(0);
      fill("white");
      textSize(20);
      text("This is the GameOver GUI", 100, 100);
      this.button.position(width / 2, height / 2);
      this.isInit = true;
    }
    this.button.mousePressed(this.gameIntro);
  }

  private gameIntro() {
    this.gameGUI.updateGUI("intro");
  }
}
