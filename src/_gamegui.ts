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
    this.gameIntro.startgameButton.hide();
    this.gameIntro.continueButton.hide();
    this.gameIntro.nameInput.hide();
    this.gameOver.button.hide();
    this.gameIntro.backstoryText1.hide();
    this.gameIntro.backstoryText2.hide();
    this.gameIntro.backstoryText3.hide();
    this.gameIntro.backstoryText4.hide();
    this.gameIntro.backstoryText5.hide();
    this.gameIntro.backstoryText6.hide();
    this.gameIntro.backstoryText7.hide();
    this.gameIntro.backstoryText8.hide();
    this.gameIntro.backstoryText9.hide();
    this.gameIntro.backstoryText10.hide();
    this.gameIntro.backstoryText11.hide();

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
