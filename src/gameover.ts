class GameOver {
  private gameGUI: IGameState;
  private isActive: boolean;
  private playAgainButton: p5.Element;
  private gameObjects: Array<GameObject>;
  private highscoreChart: HighscoreChart;
  private gameoverBox: p5.Element;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.gameObjects = [];
    this.gameoverBox = createDiv();
    this.highscoreChart = new HighscoreChart();
    this.playAgainButton = createButton("PLAY AGAIN");
  }

  public update() {
    this.highscoreChart.update();
    this.playAgainButton.mousePressed(this.changeGui);
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
    this.playAgainButton.mousePressed(() => {
      this.isActive = false;
      this.playAgainButton.hide();
      // this.highscoreChart.hide();
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
    this.playAgainButton.show();
    this.playAgainButton.position(windowWidth / 2 - 400, windowHeight / 2 + 20);
    this.playAgainButton.size(280, 70);
    this.playAgainButton.style("background-color", "#01c2cb");
    this.playAgainButton.style("color", "white");
    // this.playAgainButton.style("textFont", "statusbarAndOther");
    this.playAgainButton.style("font-size", "25");
    this.playAgainButton.style("border", "1px solid red");
    this.playAgainButton.style("border-radius", "8px");
    this.playAgainButton.style("box-shadow", "0 3px #f009");
    pop();

    // CREATE TEXT
    push();
    fill("#CCE5FF");
    noStroke();
    textSize(100);
    textFont(spaceExplorerHeading);
    textAlign(CENTER);
    text("GAME OVER", width / 2 - 40, 140);
    fill("red");
    text("GAME OVER", width / 2 - 37, 140);
    textAlign(LEFT);
    textFont(spaceExplorerBold);
    fill("white");
    textSize(20);
    text("YOU REACHED:", width / 2 - 398, height / 2 - 100);
    text("HIGHSCORE:", width / 2 + 140, height / 2 - 115);
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
    this.playAgainButton.hide();
  };
}
