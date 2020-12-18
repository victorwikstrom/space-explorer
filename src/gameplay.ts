class GamePlay {
  private gameGUI: IGameState;
  private player: Player;
  private isActive: boolean;
  public button: p5.Element;
  private stars: Array<Star>;
  private spacediamonds: Array<Spacediamond>; // THIS ARRAY IS GOING TO BE A GAME OBJECTS ARRAY INSTEAD.
  private meteorites: Array<Meteorite>; // THIS ARRAY IS GOING TO BE A GAME OBJECTS ARRAY INSTEAD.
  private blackholes: Array<BlackHole>;
  private gameObjects: Array<GameObject>;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.button = createButton("Go to GameOver GUI");
    this.gameObjects = [];
    this.player = new Player();
  }

  private createElements() {
    /** Creates button and text for changing gui */
  }

  private createGuiButtonAndText() {
    // CREATE TEXT
    push();
    fill("white");
    textSize(30);
    noStroke();
    text("This is the GamePlay GUI", 10, 40);
    pop();
    // CREATE BUTTON
    this.button.show();
    this.button.size(150, 30);
    this.button.position(10, 50);
  }

  /** Change gui to Game Over */
  private changeGui = () => {
    this.gameGUI.updateGUI("over");
  };

  /** Create all game object instances */
  private createGameObjects() {
    for (let i = 0; i < 1000; i++) {
      this.gameObjects.push(new Star());
    }
    for (let i = 0; i < 5; i++) {
      this.gameObjects.push(new Spacediamond());
    }
    for (let i = 0; i < 3; i++) {
      this.gameObjects.push(new Meteorite());
    }
  }

  private createBlackHoles() {
    for (let i = 0; i < 4; i++) {
      this.gameObjects.push(new BlackHole());
    }
  }

  /** Call draw() on all gameObjects */
  private drawGameObjects() {
    for (let gameObject of this.gameObjects) {
      if (gameObject instanceof Star) {
        gameObject.draw();
      }
      if (gameObject instanceof Planet) {
        gameObject.draw();
      }
      if (gameObject instanceof Meteorite) {
        gameObject.draw();
      }
      if (gameObject instanceof Spacediamond) {
        gameObject.draw();
      }
      if (gameObject instanceof BlackHole) {
        gameObject.draw();
      }
    }
  }

  /** Call update() on all gameObjects */
  private updateGameObjects() {
    for (let gameObject of this.gameObjects) {
      if (gameObject instanceof Star) {
        gameObject.update();
      }
      if (gameObject instanceof Planet) {
        gameObject.update();
      }
      if (gameObject instanceof Meteorite) {
        gameObject.update();
      }
      if (gameObject instanceof Spacediamond) {
        gameObject.update();
      }
      if (gameObject instanceof BlackHole) {
        gameObject.update();
      }
    }
  }

  public update() {
    this.player.update();
    this.updateGameObjects();
    this.button.mousePressed(this.changeGui);

    for (let star of this.stars) {
      star.update();
    }
    for (let spacediamond of this.spacediamonds) {
      spacediamond.update();
    }
    for (let meteorite of this.meteorites) {
      meteorite.update();
    }

    for (let blackhole of this.blackholes) {
      blackhole.update();
    }
  }

  public draw() {
    // GUI SETUP
    this.createGuiButtonAndText(); // NEEDS TO BE DRAWN ALL THE TIME
    this.player.draw();
    this.drawGameObjects();
    if (this.isActive === false) {
      this.createGameObjects();
      this.createStars();
      this.createSpaceDiamonds();
      this.createMeteorite();
      this.createBlackHoles();
      this.isActive = true;
    }

    for (let star of this.stars) {
      star.draw();
    }

    for (let spacediamond of this.spacediamonds) {
      spacediamond.draw();
    }

    for (let meteorite of this.meteorites) {
      meteorite.draw();
    }

    for (let blackhole of this.blackholes) {
      blackhole.draw();
    }

    this.createElements();
    this.player.draw();
  }
}
