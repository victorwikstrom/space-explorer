class GameIntro {
  private gameGUI: IGameState;
  private isActive: boolean;
  private stars: Array<Star>;
  private introBox: p5.Element;
  public nameInput: p5.Element;
  public continueButton: p5.Element;
  public playButton: p5.Element;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.stars = [];
    this.introBox = createDiv();
    this.nameInput = createInput("");
    this.continueButton = createButton("CONTINUE");
    this.playButton = createButton("START GAME");
  }

  public update() {
    gameGUI.highscoreChart.setPlayerName(this.getNameInput());
    this.playButton.mousePressed(() => {
      gameGUI.highscoreChart.setPlayerName(this.getNameInput());
      this.changeGui();

      //this.toggleBackstory();
    });
  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
      this.createStars();
      this.isActive = true;
    }

    for (let star of this.stars) {
      star.draw();
    }
    //this.drawGameObjects();
    this.createElements();
    gameGUI.sound.draw();

    //this.createBackstoryText();
    gameGUI.highscoreChart.draw();

    //DRAW HIGHSCORE CHART

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
    this.introBox.position(width / 2 - 450, height / 2 - 350 / 2);
    this.introBox.size(900, 350);
    this.introBox.style("background-color", "#00f4");
    this.introBox.style("border-radius", "8px");
    pop();

    //CREATE INPUTFIELD
    push();
    this.nameInput.show();
    this.nameInput.position(windowWidth / 2 - 400, windowHeight / 2 - 90);
    this.nameInput.size(380, 60);
    this.nameInput.style("stroke", "red");
    this.nameInput.style("strokeWeight", "4");
    this.nameInput.style("background-color", "#00f2");
    this.nameInput.style("color", "#FAFDEB");
    this.nameInput.style("border", "4px solid red");
    this.nameInput.style("border-radius", "8px");
    this.nameInput.style("font-size", "20");
    this.nameInput.style("textAlign", "LEFT");
    this.nameInput.style("padding", "10");
    pop();

    // CREATE PLAY BUTTON
    push();
    this.playButton.show();
    this.playButton.position(windowWidth / 2 - 400, windowHeight / 2 + 10);
    this.playButton.size(280, 70);
    this.playButton.style("background-color", "#01c2cb");
    this.playButton.style("color", "white");
    this.playButton.style("font", "spaceExplorerBold");
    this.playButton.style("font-size", "25");
    this.playButton.style("border", "1px solid red");
    this.playButton.style("border-radius", "8px");
    this.playButton.style("box-shadow", "0 3px #f009");
    pop();

    // CREATE CONTINUE BUTTON
    push();
    this.continueButton.show();
    this.continueButton.position(windowWidth / 2 - 410, windowHeight / 2 + 10);
    this.continueButton.size(300, 80);
    this.continueButton.style("background-color", "#01c2cb");
    this.continueButton.style("color", "white");
    //this.continueButton.style("font-family, "spaceExplorerBold");
    this.continueButton.style("font-size", "25");
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
    text("SPACE EXPLORER", width / 2 - 40, 140);
    fill("blue");
    text("SPACE EXPLORER", width / 2 - 37, 140);

    // PLEASE ENTER YOUR NAME
    fill("#01c2cb");
    textSize(17);
    textAlign(LEFT);
    textFont(spaceExplorerBold);
    text("PLEASE ENTERYOUR NAME HERE: ", width / 2 - 410, height / 2 - 115);
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
  private createStars() {
    for (let i = 0; i < 1000; i++) {
      this.stars.push(new Star());
    }
  }

  //  private drawGameObjects() {
  //    //let newPos = createVector(random(width), random(height));
  //    for (let gameObject of this.gameObjects) {
  //     if (gameObject instanceof Star) {
  //       gameObject.draw();
  //       gameObject.position.y = random(100)
  //     }
  //    }
  //  }

  // CHANGE GUI TO PLAY
  private changeGui = () => {
    this.gameGUI.updateGUI("play");
    this.continueButton.hide();
  };

  private getNameInput() {
    return String(this.nameInput.value());
  }
}
