class GameGUI implements IGameState {
  private currentGUI: "play" | "intro" | "over";
  private gameIntro: GameIntro;
  private gamePlay: GamePlay;
  private gameOver?: GameOver;
  public sound: Sound;
  public highscoreChart: HighscoreChart;

  constructor() {
    this.currentGUI = "intro";
    this.gameIntro = new GameIntro(this);
    this.gamePlay = new GamePlay(this);
    this.sound = new Sound();
    this.highscoreChart = new HighscoreChart();
  }

  public update() {
    if (this.currentGUI === "intro") {
      this.gameIntro.update();
    }
    if (this.currentGUI === "play") {
      this.gamePlay.update();
    }
    if (this.currentGUI === "over") {
      this.gameOver?.update();
    }
  }

  public draw() {
    if (this.currentGUI === "intro") {
      this.gameIntro.draw();
    }
    if (this.currentGUI === "play") {
      this.gamePlay.draw();
    }
    if (this.currentGUI === "over") {
      this.gameOver?.draw();
    }
  }

  public updateGUI(gui: "play" | "intro" | "over") {
    this.currentGUI = gui;
    removeElements();

    if (this.currentGUI === "play") {
      this.gamePlay = new GamePlay(this);
    } else if (this.currentGUI === "intro") {
      this.gameIntro = new GameIntro(this);
    } else if (this.currentGUI === "over") {
      this.gameOver = new GameOver(this);
    }
  }
}
