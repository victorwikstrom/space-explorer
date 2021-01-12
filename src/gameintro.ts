class GameIntro {
  private gameGUI: IGameState;
  private isActive: boolean;
  private gameObjects: Array<GameObject>;
  private introBox: p5.Element;
  private input: p5.Element;
  private highscoreChart: HighscoreChart;
  public continueButton: p5.Element;
  private playButton: p5.Element;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.gameObjects = [];
    this.introBox = createDiv();
    this.highscoreChart = new HighscoreChart();
    this.input = createInput("...");
    this.continueButton = createButton("CONTINUE");
    this.playButton = createButton("START GAME");
  }

  public update() {
    this.updateGameObjects();
    this.highscoreChart.update();
    // this.continueButton.mousePressed(this.toggleBackstory);
    this.playButton.mousePressed(this.changeGui);
  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
      this.createGameObjects();
      this.isActive = true;
    }

    this.drawGameObjects();
    this.createElements();

    //this.createBackstoryText();

    //DRAW HIGHSCORE CHART
    this.highscoreChart.createHighscoreList();

    // GO TO NEXT GUI
    this.playButton.mousePressed(() => {
      this.isActive = false;
      this.playButton.hide();
      this.input.hide();
      this.introBox.hide();
      //this.createBackstoryText()
      this.gameGUI.updateGUI("play");
    });
  }

  private createElements() {
    // CREATE INTROBOX
    push();
    this.introBox.show();
    this.introBox.position(width / 2 - 500, height / 2 - 200);
    this.introBox.size(1000, 400);
    this.introBox.style("background-color", "#00f4");
    this.introBox.style("border-radius", "8px");
    pop();

    //CREATE INPUTFIELD
    push();
    this.input.show();
    this.input.position(windowWidth / 2 - 400, windowHeight / 2 - 90);
    this.input.size(380, 60);
    this.input.style("stroke", "red");
    this.input.style("strokeWeight", "4");
    this.input.style("background-color", "#00f2");
    this.input.style("color", "#FAFDEB");
    this.input.style("font-size", "20");
    this.input.style("textAlign", "LEFT");
    this.input.style("padding", "10");
    storeItem("playerName", this.input.value());
    pop(); 

    // CREATE CONTINUE BUTTON
    push();
    this.continueButton.show();
    this.continueButton.position(windowWidth / 2 - 400, windowHeight / 2 + 10);
    this.continueButton.size(380, 120);
    this.continueButton.style("background-color", "#3BF7F7");
    this.continueButton.style("color", "white");
    this.continueButton.style("font-size", "45");
    this.continueButton.style("border", "1px solid red");
    this.continueButton.style("border-radius", "8px");
    this.continueButton.style("box-shadow", "0 3px #f009");
    pop();

    // CREATE PLAY BUTTON
    push();
    this.playButton.show();
    this.playButton.position(windowWidth / 2 - 400, windowHeight / 2 + 10);
    this.playButton.size(380, 120);
    this.playButton.style("background-color", "#3BF7F7");
    this.playButton.style("color", "white");
    this.playButton.style("font-size", "45");
    this.playButton.style("border", "1px solid red");
    this.playButton.style("border-radius", "8px");
    this.playButton.style("box-shadow", "0 3px #f009");
    pop();

    // CREATE GREETING
    // private greet() {
    //   greeting.html('Hello ' + playerName + '!');
    // input.value('');
    // }

    // CREATE TEXT
    push();
    fill("red");
    noStroke();
    textSize(80);
    textAlign(CENTER);
    text("SPACE EXPLORER", width / 2 - 40, 120);
    fill("blue");
    text("SPACE EXPLORER", width / 2 - 40, 123);
    fill("white");
    textSize(22);
    text("PLEASE ENTER YOUR NAME HERE:", width / 2 - 210, height / 2 - 115);
    //text("HIGHSCORE:", width / 2 + 210, height / 2 - 115);
    //text("HIGHSCORE", width / 2 + 140, height / 2 - 115);
    pop();
  }
  // CREATE BACKSTORY TEXT
  //   private createBackstoryText() {
  //   push();
  //   fill("white");
  //   textSize(17);
  //   text(
  //     "YOU HAVE BEEN SENT ON A MISSION TO DISCOVER THE MOST REMOTE AREAS OF SPACE",
  //     windowWidth / 2,
  //     windowHeight / 2 - 80
  //   );
  //   text(
  //     "YOUR GOAL IS TO TRAVEL AS FAR FROM THE EARTH AS POSSIBLE.",
  //     windowWidth / 2,
  //     windowHeight / 2 - 60
  //   );
  //   text(
  //     "YOU ARE SENT AWAY FROM EARTH IN A SPACESHIP WITH AN ENERGY-GENERATING SPEED SYSTEM ",
  //     windowWidth / 2,
  //     windowHeight / 2 - 40
  //   );
  //   text(
  //     "THAT MAKES THE SPACESHIPS SPEED INCREASE CONSTANTLY THE FURTHER AWAY FROM EARTH YOU GET.",
  //     windowWidth / 2,
  //     windowHeight / 2 - 20
  //   );
  //   text(
  //     "DURING THE MISSION, YOU SHOULD AVOID OR ELIMINATE THE DANGERS THAT EXIST IN SPACE,",
  //     windowWidth / 2,
  //     windowHeight / 2
  //   );
  //   text(
  //     "SUCH AS OTHER PLANETS, METEORITES AND ESPECIALLY BLACK HOLES.",
  //     windowWidth / 2,
  //     windowHeight / 2 + 20
  //   );
  //   text(
  //     "FORTUNATELY, YOU HAVE BEEN ASSIGNED A SPACESHIP OF THE VERY LATEST MODEL.",
  //     windowWidth / 2,
  //     windowHeight / 2 + 40
  //   );
  //   text(
  //     "IT CAN WITHSTAND SOME DAMAGE AND CAN EVEN REPAIR ITSELF,",
  //     windowWidth / 2,
  //     windowHeight / 2 + 60
  //   );
  //   text(
  //     "WITH THE HELP OF THE VALUABLE SPACE DIAMONDS THAT YOU CAN COLLECT DURING THE JOURNEY.",
  //     windowWidth / 2,
  //     windowHeight / 2 + 80
  //   );
  //   pop();
  // }

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

  private updateGameObjects() {
    for (let gameObject of this.gameObjects) {
      if (gameObject instanceof Star) {
        gameObject.update();
      }
    }
  }

  // CHANGE GUI TO PLAY
  private changeGui = () => {
    this.gameGUI.updateGUI("play");
    this.continueButton.hide();
    this.playButton.hide();
    this.input.hide();
  };
}
