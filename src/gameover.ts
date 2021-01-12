class GameOver {
  private gameGUI: IGameState;
  private isActive: boolean;
  public button: p5.Element;
  private gameObjects: Array<GameObject>;
  private highscoreChart: HighscoreChart;
  private gameoverBox: p5.Element;
  // private muteIcon: p5.Image;
  // private mute: boolean;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.gameObjects = [];
    // this.muteIcon = setMuteImage(muteImg);
    // this.mute = false;
    this.gameoverBox = createDiv();
    this.highscoreChart = new HighscoreChart();
    this.button = createButton("PLAY AGAIN");
  }

  public update() {
    this.highscoreChart.update();
    this.button.mousePressed(this.changeGui);
  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
      this.createGameObjects();
      this.isActive = true;
    }

    this.drawGameObjects();
    this.createElements();

    //DRAW HIGHSCORE CHART
    this.highscoreChart.draw();

    //GO TO NEXT GUI
    this.button.mousePressed(() => {
      this.isActive = false;
      this.button.hide();
      //this.highscoreChart.hide();
      this.gameoverBox.hide();
      this.gameGUI.updateGUI("play");
    });
  }

  private createElements() {
    this.highscoreChart.draw();
    // CREATE GAMEOVERBOX
    push();
    this.gameoverBox.show();
    this.gameoverBox.position(width / 2 - 500, height / 2 - 200);
    this.gameoverBox.size(1000, 400);
    this.gameoverBox.style("background-color", "#00f4");
    this.gameoverBox.style("border-radius", "8px");
    pop();

    // CREATE PLAY AGAIN BUTTON
    push();
    this.button.show();
    this.button.position(windowWidth / 2 - 400, windowHeight / 2 + 20);
    this.button.size(380, 120);
    this.button.style("background-color", "#3BF7F7");
    this.button.style("color", "white");
    this.button.style("font-size", "45");
    this.button.style("border", "1px solid red");
    this.button.style("border-radius", "8px");
    this.button.style("box-shadow", "0 3px #f009");
    pop();

    // CREATE MUTE ICON
    // setMuteImage(img: p5.Image) {
    //   img.resize(50, 0);
    //   return img;
    // }

    // CREATE TEXT
    push();
    fill("#CCE5FF");
    noStroke();
    textSize(80);
    textAlign(CENTER);
    text("GAME OVER", width / 2 - 40, 120);
    fill("red");
    text("GAME OVER", width / 2 - 40, 123);
    textAlign(LEFT);
    fill("white");
    textSize(22);
    text("YOU REACHED:", width / 2 - 398, height / 2 - 115);
    //text("HIGHSCORE:", width / 2 + 140, height / 2 - 115);
    pop();
  }

  // CREATE STARS
  private createGameObjects() {
    for (let i = 0; i < 1000; i++) {
      this.gameObjects.push(new Star());
    }
  }

  private drawGameObjects() {
    for (let gameObject of this.gameObjects) {
      if (gameObject instanceof Star) {
        gameObject.draw();
      }
    }
  }

  // CHANGE GUI TO PLAY
  private changeGui = () => {
    this.gameGUI.updateGUI("play");
  };
}
