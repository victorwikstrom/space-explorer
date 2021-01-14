// let enterYourName = createElement("h2");
//     enterYourName.html("ENTER YOUR NAME HERE:")
//     enterYourName.position(width / 2 - 390, height / 2 - 120);
//     enterYourName.style("color", "#01c2cb");
//     enterYourName.style("textFont", "spaceExplorerBold");
//     enterYourName.show();
class GameIntro {
  private gameGUI: IGameState;
  private isActive: boolean;
  private stars: Array<Star>;
  public continueBox: p5.Element;
  public startgameBox: p5.Element;
  public introBox: p5.Element;
  // public input: p5.Element;
  // private backstoryText: p5.Element;
  public continueButton: p5.Element;
  public startgameButton: p5.Element;
  public nameInput: p5.Element;
  private soundtrack: p5.SoundFile;
  private buttonSound: p5.SoundFile;
  public enterYourName: p5.Element;
  public backstoryText1: p5.Element;
  public backstoryText2: p5.Element;
  public backstoryText3: p5.Element;
  public backstoryText4: p5.Element;
  public backstoryText5: p5.Element;
  public backstoryText6: p5.Element;
  public backstoryText7: p5.Element;
  public backstoryText8: p5.Element;
  public backstoryText9: p5.Element;
  public backstoryText10: p5.Element;
  public backstoryText11: p5.Element;
  // private backstory: Array<string>;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.stars = [];
    this.continueBox = createDiv();
    this.startgameBox = createDiv();
    this.introBox = createDiv();
    this.nameInput = createInput("");
    this.startgameButton = createButton("START GAME");
    this.continueButton = createButton("CONTINUE");
    this.soundtrack = soundtrack;
    this.buttonSound = buttonClickSound;
    this.enterYourName = createP("ENTER YOUR NAME HERE:");
    this.backstoryText1 = createP("YOU HAVE BEEN SENT ON A MISSION TO DISCOVER THE MOST REMOTE AREAS OF SPACE.");
    this.backstoryText2 = createP("YOUR GOAL IS TO TRAVEL AS FAR FROM THE EARTH AS POSSIBLE.");
    this.backstoryText3 = createP("YOU ARE SENT AWAY FROM EARTH IN A SPACESHIP WITH AN ENERGY-GENERATING SPEED SYSTEM");
    this.backstoryText4 = createP("THAT MAKES THE SPACESHIPS SPEED INCREASE CONSTANTLY THE FURTHER AWAY FROM EARTH YOU GET.");
    this.backstoryText5 = createP("DURING THE MISSION, YOU SHOULD AVOID OR ELIMINATE THE DANGERS THAT EXIST IN SPACE,");
    this.backstoryText6 = createP("SUCH AS OTHER PLANETS, METEORITES AND ESPECIALLY BLACK HOLES.");
    this.backstoryText7 = createP("FORTUNATELY, YOU HAVE BEEN ASSIGNED A SPACESHIP OF THE VERY LATEST MODEL.");
    this.backstoryText8 = createP("IT CAN WITHSTAND SOME DAMAGE AND CAN EVEN REPAIR ITSELF,");
    this.backstoryText9 = createP("WITH THE HELP OF THE VALUABLE SPACE DIAMONDS THAT YOU CAN COLLECT DURING THE JOURNEY.");
    this.backstoryText10 = createP("USE ARROWS TO MOVE YOUR SHIP. PRESS SPACEBAR TO SHOOT.");
    this.backstoryText11 = createP("STAY AWAY FROM SPACE OBJECTS!");
    // this.highscoreChart = new HighscoreChart();
    // this.input = createInput("");
    // this.backstory = [
    //   "YOU HAVE BEEN SENT ON A MISSION TO DISCOVER THE MOST REMOTE AREAS OF SPACE",
    //   "YOUR GOAL IS TO TRAVEL AS FAR FROM THE EARTH AS POSSIBLE.",
    //   "YOU ARE SENT AWAY FROM EARTH IN A SPACESHIP WITH AN ENERGY-GENERATING SPEED SYSTEM ",
    //   "THAT MAKES THE SPACESHIPS SPEED INCREASE CONSTANTLY THE FURTHER AWAY FROM EARTH YOU GET.",
    //   "DURING THE MISSION, YOU SHOULD AVOID OR ELIMINATE THE DANGERS THAT EXIST IN SPACE,",
    //   "SUCH AS OTHER PLANETS, METEORITES AND ESPECIALLY BLACK HOLES.",
    //   "FORTUNATELY, YOU HAVE BEEN ASSIGNED A SPACESHIP OF THE VERY LATEST MODEL.",
    //   "IT CAN WITHSTAND SOME DAMAGE AND CAN EVEN REPAIR ITSELF,",
    //   "WITH THE HELP OF THE VALUABLE SPACE DIAMONDS THAT YOU CAN COLLECT DURING THE JOURNEY.",
    //   "USE ARROWS TO MOVE YOUR SHIP. PRESS SPACEBAR TO SHOOT.",
    //   "STAY AWAY FROM SPACE OBJECTS!",
    // ];
  }

  public update() {
    gameGUI.highscoreChart.setPlayerName(this.getNameInput());
    gameGUI.sound.update();
    // this.backstoryText.hide();

    // TOGGLE FROM NAME INPUT TO BACKSTORY TEXT
    this.continueButton.mousePressed(() => {
      this.isActive = false;
      this.continueButton.hide();
      this.nameInput.hide();
      // gameGUI.highscoreChart.hide();
      this.enterYourName.hide();
      this.backstoryText1.show();
      this.backstoryText2.show();
      this.backstoryText3.show();
      this.backstoryText4.show();
      this.backstoryText5.show();
      this.backstoryText6.show();
      this.backstoryText7.show();
      this.backstoryText8.show();
      this.backstoryText9.show();
      this.backstoryText10.show();
      this.backstoryText11.show();
      this.startgameButton.show();
      // this.toggleBackstoryText();
    });

    // GO TO NEXT GUI
    this.startgameButton.mousePressed(() => {
      this.isActive = false;
      gameGUI.sound.playSound(this.buttonSound);
      gameGUI.highscoreChart.setPlayerName(this.getNameInput());
      gameGUI.sound.stopSound(this.soundtrack);
      this.hideBackstoryText()
      // highscoreChart.highscoreList.hide();
      // removeElements();
      this.changeGui();
    });

    
  }
  //  TOGGLE TO BACKSTORY TEXT
    showBackstoryText() {
      this.backstoryText1.show();
      this.backstoryText2.show();
      this.backstoryText3.show();
      this.backstoryText4.show();
      this.backstoryText5.show();
      this.backstoryText6.show();
      this.backstoryText7.show();
      this.backstoryText8.show();
      this.backstoryText9.show();
      this.backstoryText10.show();
      this.backstoryText11.show();
  }

  hideBackstoryText() {
      this.backstoryText1.hide();
      this.backstoryText2.hide();
      this.backstoryText3.hide();
      this.backstoryText4.hide();
      this.backstoryText5.hide();
      this.backstoryText6.hide();
      this.backstoryText7.hide();
      this.backstoryText8.hide();
      this.backstoryText9.hide();
      this.backstoryText10.hide();
      this.backstoryText11.hide();
  }


  // CHANGE GUI TO PLAY
  private changeGui = () => {
    this.gameGUI.updateGUI("play");
  };

  private getNameInput() {
    return String(this.nameInput.value());
  }

  public draw() {
    clear();
    // GUI SETUP
    if (this.isActive === false) {
      this.createStars();
      // this.backstoryText.hide();
      gameGUI.sound.loopSound(this.soundtrack);
      this.isActive = true;
    }

    for (let star of this.stars) {
      star.draw();
    }

    //this.drawGameObjects();
    this.createElements();
    gameGUI.sound.draw();
    // this.createBackstoryText();
    gameGUI.highscoreChart.draw();
  }

  public createElements() {
    // CREATE INTROBOX
    push();
    this.introBox.show();
    this.introBox.position(width / 2 - 450, height / 2 - 150);
    this.introBox.size(900, 350);
    // this.introBox.style("background-color", "#00f4");
    this.introBox.style("background-color", "black");
    this.introBox.style("border", "1px solid red");
    this.introBox.style("border-radius", "8px");
    pop();

    //CREATE INPUTFIELD
    push();
    this.nameInput.show();
    this.nameInput.position(windowWidth / 2 - 390, windowHeight / 2 - 60);
    this.nameInput.size(380, 60);
    this.nameInput.style("stroke", "red");
    this.nameInput.style("strokeWeight", "4");
    this.nameInput.style("background-color", "#00f2");
    this.nameInput.style("color", "#FAFDEB");
    this.nameInput.style("border", "2px solid red");
    this.nameInput.style("border-radius", "8px");
    this.nameInput.style("font-size", "20");
    this.nameInput.style("textAlign", "LEFT");
    this.nameInput.style("padding", "10");
    pop();
    noLoop();

    // CREATE PLAY BUTTON
    push();
    this.startgameButton.hide();
    this.startgameButton.position(width / 2 - 140, height / 2 + 115);
    this.startgameButton.size(280, 70);
    this.startgameButton.style("background-color", "#01c2cb");
    this.startgameButton.style("color", "white");
    this.startgameButton.style("font", "spaceExplorerBold");
    this.startgameButton.style("font-size", "35");
    this.startgameButton.style("border", "1px solid red");
    this.startgameButton.style("border-radius", "8px");
    this.startgameButton.style("box-shadow", "0 3px #f009");
    pop();
    noLoop();

    // CREATE CONTINUE BUTTON
    push();
    this.continueButton.show();
    this.continueButton.position(windowWidth / 2 - 390, windowHeight / 2 + 30);
    this.continueButton.size(300, 80);
    this.continueButton.style("background-color", "#01c2cb");
    this.continueButton.style("color", "white");
    //this.continueButton.style("font-family, "spaceExplorerBold");
    this.continueButton.style("font-size", "35");
    // this.continueButton.style("font", "bold");
    this.continueButton.style("border", "1px solid red");
    this.continueButton.style("border-radius", "8px");
    this.continueButton.style("box-shadow", "0 3px #f009");
    pop();
    noLoop();

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
    pop();
    noLoop();

    // PLEASE ENTER YOUR NAME
    // push();
    // fill("#01c2cb");
    // textSize(30);
    // textAlign(LEFT);
    // textFont(spaceExplorerBold);
    this.enterYourName.position(width / 2 - 390, height / 2 - 120);
    this.enterYourName.style("color", "#01c2cb");
    this.enterYourName.style("font-size", "25");
    this.enterYourName.style("text-align", "center");
    this.enterYourName.style("font-weight", "bold");
    this.enterYourName.style("font-family", "spaceExplorerBold");
    // text("ENTER YOUR NAME HERE: ", width / 2 - 390, height / 2 - 100);
    // pop();
  
    // CREATE BACKSTORY TEXT
    this.backstoryText1.position(windowWidth/2 - 400, windowHeight/2 - 140);
    this.backstoryText1.style("color", "white");
    // this.backstoryText1.style("jystify-content", "center");
    // this.backstoryText2.position(windowWidth/2, windowHeight/2 - 120);
    this.backstoryText2.position(windowWidth/2 - 400, windowHeight/2 - 120);
    this.backstoryText2.style("color", "white");
    this.backstoryText3.position(windowWidth/2 - 400, windowHeight/2 - 100);
    this.backstoryText3.style("color", "white");
    this.backstoryText4.position(windowWidth/2 - 400, windowHeight/2 - 80);
    this.backstoryText4.style("color", "white");
    this.backstoryText5.position(windowWidth/2 - 400, windowHeight/2 - 60);
    this.backstoryText5.style("color", "white");
    this.backstoryText6.position(windowWidth/2 - 400, windowHeight/2 - 40);
    this.backstoryText6.style("color", "white");
    this.backstoryText7.position(windowWidth/2 - 400, windowHeight/2 - 20);
    this.backstoryText7.style("color", "white");
    this.backstoryText8.position(windowWidth/2 - 400, windowHeight/2);
    this.backstoryText8.style("color", "white");
    this.backstoryText9.position(windowWidth/2 - 400, windowHeight/2 + 20);
    this.backstoryText9.style("color", "white");
    this.backstoryText10.position(windowWidth/2 - 400, windowHeight/2 + 40);
    this.backstoryText10.style("color", "white");
    this.backstoryText11.position(windowWidth/2 - 400, windowHeight/2 + 60);  
    this.backstoryText11.style("color", "white");
  }

    public createBackstoryText() {
    push();
    fill("white");
    textSize(17);
    textAlign(CENTER);
    text(
      "YOU HAVE BEEN SENT ON A MISSION TO DISCOVER THE MOST REMOTE AREAS OF SPACE",
      windowWidth / 2,
      windowHeight / 2 - 100
    );
    text(
      "YOUR GOAL IS TO TRAVEL AS FAR FROM THE EARTH AS POSSIBLE.",
      windowWidth / 2,
      windowHeight / 2 - 80
    );
    text(
      "YOU ARE SENT AWAY FROM EARTH IN A SPACESHIP WITH AN ENERGY-GENERATING SPEED SYSTEM ",
      windowWidth / 2,
      windowHeight / 2 - 60
    );
    text(
      "THAT MAKES THE SPACESHIPS SPEED INCREASE CONSTANTLY THE FURTHER AWAY FROM EARTH YOU GET.",
      windowWidth / 2,
      windowHeight / 2 - 40
    );
    text(
      "DURING THE MISSION, YOU SHOULD AVOID OR ELIMINATE THE DANGERS THAT EXIST IN SPACE,",
      windowWidth / 2,
      windowHeight / 2 - 20
    );
    text(
      "SUCH AS OTHER PLANETS, METEORITES AND ESPECIALLY BLACK HOLES.",
      windowWidth / 2,
      windowHeight / 2
    );
    text(
      "FORTUNATELY, YOU HAVE BEEN ASSIGNED A SPACESHIP OF THE VERY LATEST MODEL.",
      windowWidth / 2,
      windowHeight / 2 + 20
    );
    text(
      "IT CAN WITHSTAND SOME DAMAGE AND CAN EVEN REPAIR ITSELF,",
      windowWidth / 2,
      windowHeight / 2 + 40
    );
    text(
      "WITH THE HELP OF THE VALUABLE SPACE DIAMONDS THAT YOU CAN COLLECT DURING THE JOURNEY.",
      windowWidth / 2,
      windowHeight / 2 + 60
    );
    text(
      "USE ARROWS TO MOVE YOUR SHIP. PRESS SPACEBAR TO SHOOT.",
      windowWidth / 2,
      windowHeight / 2 + 100
    );
    text(
      "STAY AWAY FROM SPACE OBJECTS!",
      windowWidth / 2,
      windowHeight / 2 + 120
    );
    pop();
    noLoop();
  }

  // CREATE GREETING
  // private greet() {
  //   greeting.html('Hello ' + playerName + '!');
  // input.value('');
  // }

  // CREATE STARS
  private createStars() {
    for (let i = 0; i < 1000; i++) {
      this.stars.push(new Star());
    }
  }
}

//-------------------------------------------------------------------------------------------------

// // class GameIntro {
// //   private gameGUI: IGameState;
// //   private isActive: boolean;
// //   private stars: Array<Star>;
// //   private introBox: p5.Element;
// //   public nameInput: p5.Element;
// //   public continueButton: p5.Element;
// //   public playButton: p5.Element;
// //   private soundtrack: p5.SoundFile;
// //   private buttonSound: p5.SoundFile;

// //   constructor(gameGUI: IGameState) {
// //     this.gameGUI = gameGUI;
// //     this.isActive = false;
// //     this.stars = [];
// //     this.introBox = createDiv();
// //     this.nameInput = createInput("");
// //     this.continueButton = createButton("CONTINUE");
// //     this.playButton = createButton("START GAME");
// //     this.soundtrack = soundtrack;
// //     this.buttonSound = buttonClickSound;
// //   }

// //   public update() {
// //     gameGUI.highscoreChart.setPlayerName(this.getNameInput());
// //     this.playButton.mousePressed(() => {
// //       gameGUI.sound.playSound(this.buttonSound);
// //       gameGUI.highscoreChart.setPlayerName(this.getNameInput());
// //       gameGUI.sound.stopSound(this.soundtrack);
// //       this.changeGui();

// //       //this.toggleBackstory();
// //     });
// //     gameGUI.sound.update();
// //   }

// //   public draw() {
// //     // GUI SETUP
// //     if (this.isActive === false) {
// //       this.createStars();
// //       gameGUI.sound.loopSound(this.soundtrack);
// //       this.isActive = true;
// //     }

// //     for (let star of this.stars) {
// //       star.draw();
// //     }
// //     //this.drawGameObjects();
// //     this.createElements();
// //     gameGUI.sound.draw();

// //     //this.createBackstoryText();
// //     gameGUI.highscoreChart.draw();

// //     //DRAW HIGHSCORE CHART

// //     // GO TO NEXT GUI -  OBS FINNS EN MOUSEPRESSED FUNKTION I UPDATE()
// //     // this.button.mousePressed(() => {
// //     //   this.isActive = false;
// //     //   //this.createBackstoryText()
// //     //   this.changeGui();
// //     //   //this.button.hide();
// //     //   this.input.hide();
// //     //   //this.introBox.hide();
// //     // });
// //   }

// //   public createElements() {
// //     // CREATE INTROBOX
// //     push();
// //     this.introBox.show();
// //     this.introBox.position(width / 2 - 450, height / 2 - 350 / 2);
// //     this.introBox.size(900, 350);
// //     this.introBox.style("background-color", "#00f4");
// //     this.introBox.style("border-radius", "8px");
// //     pop();

// //     //CREATE INPUTFIELD
// //     push();
// //     this.nameInput.show();
// //     this.nameInput.position(windowWidth / 2 - 400, windowHeight / 2 - 90);
// //     this.nameInput.size(380, 60);
// //     this.nameInput.style("stroke", "red");
// //     this.nameInput.style("strokeWeight", "4");
// //     this.nameInput.style("background-color", "#00f2");
// //     this.nameInput.style("color", "#FAFDEB");
// //     this.nameInput.style("border", "4px solid red");
// //     this.nameInput.style("border-radius", "8px");
// //     this.nameInput.style("font-size", "20");
// //     this.nameInput.style("textAlign", "LEFT");
// //     this.nameInput.style("padding", "10");
// //     pop();

// //     // CREATE PLAY BUTTON
// //     push();
// //     this.playButton.show();
// //     this.playButton.position(width / 2 - 140, height / 2 + 100);
// //     this.playButton.size(280, 70);
// //     this.playButton.style("background-color", "#01c2cb");
// //     this.playButton.style("color", "white");
// //     this.playButton.style("font", "spaceExplorerBold");
// //     this.playButton.style("font-size", "25");
// //     this.playButton.style("border", "1px solid red");
// //     this.playButton.style("border-radius", "8px");
// //     this.playButton.style("box-shadow", "0 3px #f009");
// //     pop();

// //     // CREATE CONTINUE BUTTON
// //     push();
// //     this.continueButton.show();
// //     this.continueButton.position(windowWidth / 2 - 410, windowHeight / 2 + 10);
// //     this.continueButton.size(300, 80);
// //     this.continueButton.style("background-color", "#01c2cb");
// //     this.continueButton.style("color", "white");
// //     //this.continueButton.style("font-family, "spaceExplorerBold");
// //     this.continueButton.style("font-size", "25");
// //     this.continueButton.style("border", "1px solid red");
// //     this.continueButton.style("border-radius", "8px");
// //     this.continueButton.style("box-shadow", "0 3px #f009");
// //     pop();

// //     // CREATE GREETING
// //     // private greet() {
// //     //   greeting.html('Hello ' + playerName + '!');
// //     // input.value('');
// //     // }

// //     // CREATE TEXT
// //     push();
// //     fill("red");
// //     noStroke();
// //     textSize(100);
// //     textAlign(CENTER);
// //     textFont(spaceExplorerHeading);
// //     text("SPACE EXPLORER", width / 2 - 40, 140);
// //     fill("blue");
// //     text("SPACE EXPLORER", width / 2 - 37, 140);

// //     // PLEASE ENTER YOUR NAME
// //     fill("#01c2cb");
// //     textSize(17);
// //     textAlign(LEFT);
// //     textFont(spaceExplorerBold);
// //     text("PLEASE ENTERYOUR NAME HERE: ", width / 2 - 410, height / 2 - 115);
// //     // text("YOUR NAME HERE:", width / 2 - 400, height / 2 - 120);
// //     //text("HIGHSCORE:", width / 2 + 210, height / 2 - 115);
// //     //text("HIGHSCORE", width / 2 + 140, height / 2 - 115);
// //     pop();
// //   }
// //   // CREATE BACKSTORY TEXT
// //   //   private createBackstoryText() {
// //   //   push();
// //   //   fill("white");
// //   //   textSize(17);
// //   //   text(
// //   //     "YOU HAVE BEEN SENT ON A MISSION TO DISCOVER THE MOST REMOTE AREAS OF SPACE",
// //   //     windowWidth / 2,
// //   //     windowHeight / 2 - 80
// //   //   );
// //   //   text(
// //   //     "YOUR GOAL IS TO TRAVEL AS FAR FROM THE EARTH AS POSSIBLE.",
// //   //     windowWidth / 2,
// //   //     windowHeight / 2 - 60
// //   //   );
// //   //   text(
// //   //     "YOU ARE SENT AWAY FROM EARTH IN A SPACESHIP WITH AN ENERGY-GENERATING SPEED SYSTEM ",
// //   //     windowWidth / 2,
// //   //     windowHeight / 2 - 40
// //   //   );
// //   //   text(
// //   //     "THAT MAKES THE SPACESHIPS SPEED INCREASE CONSTANTLY THE FURTHER AWAY FROM EARTH YOU GET.",
// //   //     windowWidth / 2,
// //   //     windowHeight / 2 - 20
// //   //   );
// //   //   text(
// //   //     "DURING THE MISSION, YOU SHOULD AVOID OR ELIMINATE THE DANGERS THAT EXIST IN SPACE,",
// //   //     windowWidth / 2,
// //   //     windowHeight / 2
// //   //   );
// //   //   text(
// //   //     "SUCH AS OTHER PLANETS, METEORITES AND ESPECIALLY BLACK HOLES.",
// //   //     windowWidth / 2,
// //   //     windowHeight / 2 + 20
// //   //   );
// //   //   text(
// //   //     "FORTUNATELY, YOU HAVE BEEN ASSIGNED A SPACESHIP OF THE VERY LATEST MODEL.",
// //   //     windowWidth / 2,
// //   //     windowHeight / 2 + 40
// //   //   );
// //   //   text(
// //   //     "IT CAN WITHSTAND SOME DAMAGE AND CAN EVEN REPAIR ITSELF,",
// //   //     windowWidth / 2,
// //   //     windowHeight / 2 + 60
// //   //   );
// //   //   text(
// //   //     "WITH THE HELP OF THE VALUABLE SPACE DIAMONDS THAT YOU CAN COLLECT DURING THE JOURNEY.",
// //   //     windowWidth / 2,
// //   //     windowHeight / 2 + 80
// //   //   );
// //   //   pop();
// //   // }

// //   // CREATE STARS
// //   private createStars() {
// //     for (let i = 0; i < 1000; i++) {
// //       this.stars.push(new Star());
// //     }
// //   }

// //   //  private drawGameObjects() {
// //   //    //let newPos = createVector(random(width), random(height));
// //   //    for (let gameObject of this.gameObjects) {
// //   //     if (gameObject instanceof Star) {
// //   //       gameObject.draw();
// //   //       gameObject.position.y = random(100)
// //   //     }
// //   //    }
// //   //  }

// //   // CHANGE GUI TO PLAY
// //   private changeGui = () => {
// //     this.gameGUI.updateGUI("play");
// //     this.continueButton.hide();
// //   };

// //   private getNameInput() {
// //     return String(this.nameInput.value());
// //   }
// // }

//-------------------------------------------------------------------------------------------------
