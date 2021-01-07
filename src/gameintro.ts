class GameIntro {
  private gameGUI: IGameState;
  private isActive: boolean;
  private gameObjects: Array<GameObject>;
  private introBox: any; // Corr type!
  // private muteIcon: p5.Image;
  // private mute: boolean;
  private input: p5.Element;
  public button: p5.Element;
  private highscoreChart: HighscoreChart;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.gameObjects = [];
    // this.muteIcon = setMuteImage(muteImg);
    // this.mute = false;
    this.introBox = createDiv();
    this.highscoreChart = new HighscoreChart();
    this.input = createInput('PLEASE ENTER YOUR NAME HERE...');
    this.button = createButton('CONTINUE');
  }

  public update() {
    this.updateGameObjects();
    this.highscoreChart.update();
    this.createText();
    this.button.mousePressed(this.changeGui);
  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
      this.createGameObjects();
      this.isActive = true;
    }
    // if (!this.isActive) {
    //   this.isActive = true;
    // }

    this.drawGameObjects();
    this.createElements();
    this.createText();

    //DRAW HIGHSCORE CHART
    this.highscoreChart.draw();

    // GO TO NEXT GUI
    this.button.mousePressed(() => {
      this.isActive = false;
      this.button.hide();
      this.input.hide();
      this.introBox.hide();
      this.gameGUI.updateGUI('play');
    });
  }

  private createElements() {
    // CREATE TITLE
    push();
    fill('red');
    noStroke();
    textSize(80);
    textAlign(CENTER);
    text('SPACE EXPLORER', width / 2 - 40, 120);
    fill('blue');
    text('SPACE EXPLORER', width / 2 - 40, 123);
    pop();

    // CREATE INTROBOX
    push();
    this.introBox.show();
    this.introBox.position(width / 2 - 500, height / 2 - 200);
    this.introBox.size(1000, 400);
    this.introBox.style('background-color', '#00f4');
    // this.introBox.style('setAlpha', '128');
    pop();

    //CREATE INPUTFIELD
    push();
    this.input.show();
    this.input.position(windowWidth / 2 - 400, windowHeight / 2 - 130);
    this.input.size(380, 90);
    this.input.style('stroke', 'red');
    this.input.style('strokeWeight', '4');
    this.input.style('background-color', '#00f4');
    this.input.style('color', '#FAFDEB');
    this.input.style('font-size', '20');
    this.input.style('textAlign', 'CENTER');
    pop();

    // CREATE CONTINUE BUTTON
    push();
    this.button.show();
    this.button.position(windowWidth / 2 - 400, windowHeight / 2 + 20);
    this.button.size(380, 120);
    this.button.style('background-color', '#3BF7F7');
    this.button.style('color', '#FAFDEB');
    this.button.style('font-size', '45');
    pop();
  }

  // CREATE MUTE ICON
  // setMuteImage(img: p5.Image) {
  //   img.resize(50, 0);
  //   return img;
  // }

  // CREATE GREETING
  // private greet() {
  //   greeting.html('Hello ' + playerName + '!');
  // input.value('');
  // }

  // CREATE BACKSTORY TEXT
  private createText() {
    push();
    fill('white');
    textSize(17);
    text('YOU HAVE BEEN SENT ON A MISSION TO DISCOVER THE MOST REMOTE AREAS OF SPACE', windowWidth / 2 - 450, windowHeight / 2 - 80);
    text('YOUR GOAL IS TO TRAVEL AS FAR FROM THE EARTH AS POSSIBLE.', windowWidth / 2 - 450, windowHeight / 2 - 60);
    text('YOU ARE SENT AWAY FROM EARTH IN A SPACESHIP WITH AN ENERGY-GENERATING SPEED SYSTEM ', windowWidth / 2 - 450, windowHeight / 2 - 40);
    text('THAT MAKES THE SPACESHIPS SPEED INCREASE CONSTANTLY THE FURTHER AWAY FROM EARTH YOU GET.', windowWidth / 2 - 450, windowHeight / 2 - 20);
    text('DURING THE MISSION, YOU SHOULD AVOID OR ELIMINATE THE DANGERS THAT EXIST IN SPACE,', windowWidth / 2 - 450, windowHeight / 2);
    text('SUCH AS OTHER PLANETS, METEORITES AND ESPECIALLY BLACK HOLES.', windowWidth / 2 - 450, windowHeight / 2 + 20);
    text('FORTUNATELY, YOU HAVE BEEN ASSIGNED A SPACESHIP OF THE VERY LATEST MODEL.', windowWidth / 2 - 450, windowHeight / 2 + 40);
    text('IT CAN WITHSTAND SOME DAMAGE AND CAN EVEN REPAIR ITSELF,', windowWidth / 2 - 450, windowHeight / 2 + 60);
    text('WITH THE HELP OF THE VALUABLE SPACE DIAMONDS THAT YOU CAN COLLECT DURING THE JOURNEY.', windowWidth / 2 - 450, windowHeight / 2 + 80);
    // text('YOU HAVE BEEN SENT ON A MISSION TO DISCOVER THE MOST REMOTE AREAS OF SPACE. YOUR GOAL IS TO TRAVEL AS FAR FROM THE EARTH AS POSSIBLE. YOU ARE SENT AWAY FROM EARTH IN A SPACESHIP WITH AN ENERGY-GENERATING SPEED SYSTEM THAT MAKES THE SPACESHIPS SPEED INCREASE CONSTANTLY, THE FURTHER AWAY FROM EARTH YOU GET. DURING THE MISSION, YOU SHOULD AVOID OR ELIMINATE THE DANGERS THAT EXIST IN SPACE, SUCH AS OTHER PLANETS, METEORITES AND ESPECIALLY BLACK HOLES. FORTUNATELY, YOU HAVE BEEN ASSIGNED A SPACESHIP OF THE VERY LATEST MODEL. IT CAN WITHSTAND SOME DAMAGE AND CAN EVEN REPAIR ITSELF, WITH THE HELP OF THE VALUABLE SPACE DIAMONDS THAT YOU CAN COLLECT DURING THE JOURNEY.', 1000, windowHeight / 2 - 120);
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

  private updateGameObjects() {
    for (let gameObject of this.gameObjects) {
      if (gameObject instanceof Star) {
        gameObject.update();
      }
    }
  }

  // CHANGE GUI TO PLAY
  private changeGui = () => {
    this.gameGUI.updateGUI('play');
  };
}
