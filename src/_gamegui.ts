class GameGUI implements IGameState {
  private currentGUI: "play" | "intro" | "over";
  private gameIntro: GameIntro;
  private gamePlay: GamePlay;
  private gameOver: GameOver;

  constructor() {
    this.currentGUI = "play";
    this.gameIntro = new GameIntro(this);
    this.gamePlay = new GamePlay(this);
    this.gameOver = new GameOver(this);
  }

  public updateGUI(gui: "play" | "intro" | "over") {
    this.currentGUI = gui;
  }

  public draw() {
    this.gameIntro.button.hide();
    this.gameOver.button.hide();
    this.gamePlay.button.hide();

    if (this.currentGUI === "intro") {
      this.gameIntro.draw();
    }
    if (this.currentGUI === "play") {
      this.gamePlay.draw();
    }
    if (this.currentGUI === "over") {
      this.gameOver.draw();
    }
  }

  public update() {
    if (this.currentGUI === "intro") {
      // this.gameIntro.update();
    }
    if (this.currentGUI === "play") {
      this.gamePlay.update();
    }
    if (this.currentGUI === "over") {
      //  this.gameOver.update();
    }
  }
}
