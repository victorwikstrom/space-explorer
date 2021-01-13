class GameIntro {
  private gameGUI: IGameState;
  private isActive: boolean;
  private gameObjects: Array<GameObject>;
  private introBox: p5.Element;
  public input: p5.Element;
  private highscoreChart: HighscoreChart;
  public continueButton: p5.Element;
  private playButton: p5.Element;
  

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.gameObjects = [];
    this.introBox = createDiv();
    this.highscoreChart = new HighscoreChart();
    this.input = createInput("");
    this.playButton = createButton("START GAME");
    this.continueButton = createButton("CONTINUE");
  }

  public update() {
    this.highscoreChart.update();
    // this.continueButton.mousePressed(this.toggleBackstory);
    this.playButton.mousePressed(this.changeGui);
    gameGUI.sound.update();

  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
      this.createGameObjects();
      this.isActive = true;
    }

    this.drawGameObjects();
    this.createElements();
    gameGUI.sound.draw();

    //this.createBackstoryText();

    //DRAW HIGHSCORE CHART
    this.highscoreChart.createHighscoreList();

    // GO TO NEXT GUI -  OBS FINNS EN MOUSEPRESSED FUNKTION I UPDATE()
    // this.button.mousePressed(() => {
    //   this.isActive = false;
    //   //this.createBackstoryText()
    //   this.changeGui();
    //   //this.button.hide();
    //   this.input.hide();
    //   //this.introBox.hide();
    // });
  }

  public createElements() {
    // CREATE INTROBOX
    push();
    this.introBox.show();
    this.introBox.position(width/2 - 450, height / 2 - 350/2);
    this.introBox.size(900, 350);
    this.introBox.style("background-color", "#00f4");
    this.introBox.style("border-radius", "8px");
    pop();

    //CREATE INPUTFIELD
    push();
    this.input.show();
    this.input.position(windowWidth/2 - 410, windowHeight/2 - 90);
    this.input.size(380, 60);
    this.input.style("stroke", "red");
    this.input.style("strokeWeight", "4");
    this.input.style("background-color", "#00f2");
    this.input.style("color", "#FAFDEB");
    this.input.style("border", "4px solid red");
    this.input.style("border-radius", "8px");
    this.input.style("font-size", "20");
    this.input.style("textAlign", "LEFT");
    this.input.style("padding", "10");
    storeItem("playerName", this.input.value());
    pop(); 

    // CREATE PLAY BUTTON
    push();
    this.playButton.show();
    this.playButton.position(windowWidth/2 - 150, windowHeight/2 + 90);
    this.playButton.size(300, 65);
    this.playButton.style("background-color", "#01c2cb");
    this.playButton.style("color", "white");
    //this.playButton.style("font", "statusbarAndOther");
    this.playButton.style("font-size", "35");
    // this.playButton.style("textStyle","bold");
    this.playButton.style("border", "1px solid red");
    this.playButton.style("border-radius", "8px");
    this.playButton.style("box-shadow", "0 3px #f009");
    pop();

    // CREATE CONTINUE BUTTON
    push();
    this.continueButton.show();
    this.continueButton.position(windowWidth/2 - 410, windowHeight/2 + 10);
    this.continueButton.size(300, 80);
    this.continueButton.style("background-color", "#01c2cb");
    this.continueButton.style("color", "white");
    //this.continueButton.style("font", "statusbarAndOther");
    this.continueButton.style("font-size", "35");
    this.continueButton.style("border", "1px solid red");
    this.continueButton.style("border-radius", "8px");
    this.continueButton.style("box-shadow", "0 3px #f009");
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
    textSize(100);
    textAlign(CENTER);
    textFont(spaceExplorerHeading);
    text("SPACE EXPLORER", width/2 - 40, 140);
    fill("blue");
    text("SPACE EXPLORER", width/2 - 37, 140);
    
    // PLEASE ENTER YOUR NAME
    fill("#01c2cb");
    textSize(17);
    textAlign(LEFT);
    textFont(spaceExplorerBold);
    text("PLEASE ENTERYOUR NAME HERE: ", width/2 - 410, height/2 - 115);
    // text("YOUR NAME HERE:", width / 2 - 400, height / 2 - 120);
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

  // CHANGE GUI TO PLAY
  private changeGui = () => {
    this.gameGUI.updateGUI("play");
    this.continueButton.hide();
  };
}
