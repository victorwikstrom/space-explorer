class GameGUI implements IGameState {
  private currentGUI: "play" | "intro" | "over";
  private gameIntro: GameIntro;
  private gamePlay: GamePlay;
  private gameOver: GameOver;
  public sound: Sound;
  public highscoreChart: HighscoreChart;

  constructor() {
    this.currentGUI = "intro";
    this.gameIntro = new GameIntro(this);
    this.gamePlay = new GamePlay(this);
    this.gameOver = new GameOver(this);
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
      this.gameOver.update();
    }
  }

  public draw() {
    this.gameIntro.playButton.hide();
    this.gameIntro.nameInput.hide();
    this.gameIntro.introBox.hide();
    this.gameIntro.nameInput.hide();
    this.gameOver.gameoverBox.hide();
    this.gameOver.button.hide();

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

  public updateGUI(gui: "play" | "intro" | "over") {
    this.currentGUI = gui;

    if (this.currentGUI === "play") {
      removeElements();
      this.gamePlay = new GamePlay(this);
      this.gameOver = new GameOver(this);
      this.gameIntro = new GameIntro(this);
    } 
  }
}
