class GameGUI implements IGameState {
  private currentGUI: "play" | "intro" | "over";
  private gameIntro: GameIntro;
  private gamePlay: GamePlay;
  private gameOver: GameOver;
  public sound: Sound;
  public highscorechart: HighscoreChart;

  constructor() {
    this.currentGUI = "intro";
    this.gameIntro = new GameIntro(this);
    this.gamePlay = new GamePlay(this);
    this.gameOver = new GameOver(this);
    this.sound = new Sound();
    this.highscorechart = new HighscoreChart();
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
    this.gameIntro.startgameButton.hide();
    this.gameIntro.continueButton.hide();
    this.gameIntro.input.hide();
    // this.gameIntro.nameInput.hide();
    // this.highscorechart.createHighscoreList.hide();
    this.gameIntro.continueBox.hide();
    this.gameIntro.startgameBox.hide();
    this.gameOver.button.hide();

    if (this.currentGUI === "intro") {
      this.gameIntro.draw();
      //soundtrack.play();
    }
    if (this.currentGUI === "play") {
      //gamePlaySound.play();
      this.gamePlay.draw();
    }
    if (this.currentGUI === "over") {
      //soundtrack.play();
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
    } else {
      return;
    }
  }
}
