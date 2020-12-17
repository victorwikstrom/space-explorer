class GamePlay {
  private player: Player;
  private gameGUI: IGameState;
  private isActive: boolean;
  public button: p5.Element;
  private stars: Array<Star>;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.button = createButton("Go to GameOver GUI");
    this.stars = [];
    this.player = new Player();
  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
      this.createStars();
      //this.player = new Player();
      this.isActive = true;
    }
    for (let star of this.stars) {
      star.draw();
      star.update();
    }
    this.createElements();
    this.player.draw();
  }

  public update() {
    this.player.update();
    this.button.mousePressed(this.changeGui);
  }

  createElements() {
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

  createStars() {
    for (let i = 0; i < 1000; i++) {
      this.stars[i] = new Star();
    }
  }

  changeGui = () => {
    this.gameGUI.updateGUI("over");
  };
}
