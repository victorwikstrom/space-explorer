class GameIntro {
  private gameGUI: IGameState;
  private stars: Array<Star>;
  private isActive: boolean;
  public introBox: p5.Element;
  public nameInput: p5.Element;
  public playButton: p5.Element;
  private soundtrack: p5.SoundFile;
  private buttonSound: p5.SoundFile;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.stars = [];
    this.soundtrack = soundtrack;
    this.buttonSound = buttonClickSound;

    // CREATE INTROBOX
    this.introBox = createDiv();
    this.introBox.position(width / 2 - 560, height / 2 - 300 / 2);
    this.introBox.size(1120, 400);
    this.introBox.style("background-color", "#00f4");
    this.introBox.style("border-radius", "8px");

    //CREATE INPUTFIELD
    this.nameInput = createInput("");
    this.nameInput.position(windowWidth / 2 - 380, windowHeight / 2 + 180);
    this.nameInput.size(380, 50);
    this.nameInput.style("stroke", "red");
    this.nameInput.style("strokeWeight", "4");
    this.nameInput.style("background-color", "#00f2");
    this.nameInput.style("color", "#FAFDEB");
    this.nameInput.style("border", "2px solid red");
    this.nameInput.style("border-radius", "8px");
    this.nameInput.style("font-size", "20");
    this.nameInput.style("textAlign", "LEFT");
    this.nameInput.style("padding", "10");

    // CREATE PLAY BUTTON
    this.playButton = createButton("START GAME");
    this.playButton.position(width / 2 + 60, height / 2 + 160);
    this.playButton.size(300, 70);
    this.playButton.style("background-color", "#01c2cb");
    this.playButton.style("color", "white");
    this.playButton.style("font-family", "spaceExplorerBold");
    this.playButton.style("font-size", "20");
    this.playButton.style("border", "2px solid red");
    this.playButton.style("border-radius", "8px");
    this.playButton.style("box-shadow", "0 3px red");
  }

  public update() {
    gameGUI.highscoreChart.setPlayerName(this.getNameInput());
    this.playButton.show();
    this.nameInput.show();
    this.playButton.mousePressed(() => {
      gameGUI.sound.playSound(this.buttonSound);
      gameGUI.highscoreChart.setPlayerName(this.getNameInput());
      gameGUI.sound.stopSound(this.soundtrack);
      this.changeGui();
    });
    gameGUI.sound.update();
  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
      this.createStars();
      gameGUI.sound.loopSound(this.soundtrack);
      this.isActive = true;
    }

    for (let star of this.stars) {
      star.draw();
    }
    this.createElements();
    gameGUI.sound.draw();

    // GO TO NEXT GUI
    this.playButton.mousePressed(() => {
      this.isActive = false;
      this.changeGui();
      this.playButton.hide();
      this.nameInput.hide();
      this.introBox.hide();
    });
  }

  private createElements() {
    this.nameInput.show();
    this.introBox.show();
    this.playButton.show();

    // CREATE TEXT
    push();
    fill("red");
    noStroke();
    textSize(150);
    textAlign(CENTER);
    textFont(spaceExplorerHeading);
    text("SPACE EXPLORER", width / 2 + 3, 180);
    fill("blue");
    text("SPACE EXPLORER", width / 2, 180);

    // PLEASE ENTER YOUR NAME
    fill("#01c2cb");
    textSize(12);
    textAlign(LEFT);
    textFont(spaceExplorerBold);
    text("PLEASE ENTERYOUR NAME HERE: ", width / 2 - 375, height / 2 + 165);
    pop();

    // CREATE BACKSTORY TEXT
    push();
    fill("white");
    textSize(12);
    textFont(spaceExplorerBold);
    textAlign(CENTER);
    text(
      "YOU HAVE BEEN SENT ON A MISSION TO DISCOVER THE MOST REMOTE AREAS OF SPACE",
      windowWidth / 2,
      windowHeight / 2 - 100
    );
    text(
      "YOUR GOAL IS TO TRAVEL AS FAR FROM THE EARTH AS POSSIBLE",
      windowWidth / 2,
      windowHeight / 2 - 80
    );
    text(
      "YOU ARE SENT AWAY FROM EARTH IN A SPACESHIP WITH AN ENERGY-GENERATING SPEED SYSTEM ",
      windowWidth / 2,
      windowHeight / 2 - 60
    );
    text(
      "THAT MAKES THE SPACESHIPS SPEED INCREASE CONSTANTLY THE FURTHER AWAY FROM EARTH YOU GET",
      windowWidth / 2,
      windowHeight / 2 - 40
    );
    text(
      "DURING THE MISSION, YOU SHOULD AVOID OR ELIMINATE THE DANGERS THAT EXIST IN SPACE",
      windowWidth / 2,
      windowHeight / 2 - 20
    );
    text(
      "SUCH AS OTHER PLANETS, METEORITES AND ESPECIALLY BLACK HOLES",
      windowWidth / 2,
      windowHeight / 2
    );
    text(
      "FORTUNATELY, YOU HAVE BEEN ASSIGNED A SPACESHIP OF THE VERY LATEST MODEL",
      windowWidth / 2,
      windowHeight / 2 + 20
    );
    text(
      "IT CAN WITHSTAND SOME DAMAGE AND CAN EVEN REPAIR ITSELF",
      windowWidth / 2,
      windowHeight / 2 + 40
    );
    text(
      "WITH THE HELP OF THE VALUABLE SPACE DIAMONDS THAT YOU CAN COLLECT DURING THE JOURNEY",
      windowWidth / 2,
      windowHeight / 2 + 60
    );
    text(
      "USE ARROWS TO MOVE YOUR SHIP. PRESS SPACEBAR TO SHOOT",
      windowWidth / 2,
      windowHeight / 2 + 100
    );
    text(
      "STAY AWAY FROM SPACE OBJECTS!",
      windowWidth / 2,
      windowHeight / 2 + 120
    );
    pop();
  }

  // CREATE STARS
  private createStars() {
    for (let i = 0; i < 1000; i++) {
      this.stars.push(new Star());
    }
  }

  // CHANGE GUI TO PLAY
  private changeGui = () => {
    this.gameGUI.updateGUI("play");
  };

  private getNameInput() {
    return String(this.nameInput.value());
  }
}
