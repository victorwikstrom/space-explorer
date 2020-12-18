class GamePlay {
  private gameGUI: IGameState;
  private player: Player;
  private isActive: boolean;
  public button: p5.Element;
  private gameObjects: Array<GameObject>;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.button = createButton("Go to GameOver GUI");
    this.gameObjects = [];
    this.player = new Player();
  }

  public update() {
    this.player.update();
    this.updateGameObjects();
    this.button.mousePressed(this.changeGui);
  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
      this.createGameObjects();
      this.isActive = true;
    }

    this.createGuiButtonAndText(); // NEEDS TO BE DRAWN ALL THE TIME
    this.player.draw();
    this.drawGameObjects();
  }

  /** Creates button and text for changing gui */
  private createGuiButtonAndText() {
    // CREATE TEXT
    fill("white");
    textSize(30);
    noStroke();
    text("This is the GamePlay GUI", 10, 40);
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
    for (let i = 0; i < 8; i++) {
      this.gameObjects.push(new Planet());
    }for (let i = 0; i < 5; i++) {
      this.gameObjects.push(new Spacediamond());
    }
    for (let i = 0; i < 3; i++) {
      this.gameObjects.push(new Meteorite());
    }
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
}
