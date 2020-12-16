class GamePlay {
  private gameGUI: IGameState;
  private isInit: boolean;
  private button: p5.Element;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isInit = false;
    this.button = createButton("Go to GameOver GUI");
  }

  public draw() {
    if (!this.isInit) {
      background(0);
      console.log(this.gameGUI);
      createCanvas(windowWidth, windowHeight);
      fill("white");
      textSize(20);
      text("This is the GamePlay GUI", 100, 100);
      this.button.position(width / 2, height / 2);
      this.isInit = true;
    }
    this.button.mousePressed(this.gameOver);
  }

  private gameOver() {
    this.gameGUI.updateGUI("over");
  }
}
