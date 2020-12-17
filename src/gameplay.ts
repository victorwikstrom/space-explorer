class GamePlay {
  private gameGUI: IGameState;
  private player: Player;
  private isActive: boolean;
  public button: p5.Element;
  private stars: Array<Star>;
  private spacediamonds: Array<Spacediamond>; // THIS ARRAY IS GOING TO BE A GAME OBJECTS ARRAY INSTEAD. FELICIA WILL CHANGE.

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.button = createButton("Go to GameOver GUI");
    this.stars = [];
    this.player = new Player();
    this.spacediamonds = [];
  }

  public update() {
    this.player.update();
    this.button.mousePressed(this.changeGui);

    for (let star of this.stars) {
      star.update();
    }
    for (let spacediamond of this.spacediamonds) {
      spacediamond.update();
    }
  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
      this.createStars();
      this.createSpaceDiamonds();
      this.isActive = true;
    }

    for (let star of this.stars) {
      star.draw();
    }

    for (let spacediamond of this.spacediamonds) {
      spacediamond.draw();
    }

    this.createElements();
    this.player.draw();
  }

  private createElements() {
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

  private changeGui = () => {
    this.gameGUI.updateGUI("over");
  };

  private createStars() {
    for (let i = 0; i < 1000; i++) {
      this.stars[i] = new Star();
    }
  }

  private createSpaceDiamonds() {
    for (let i = 0; i < 5; i++) {
      this.spacediamonds[i] = new Spacediamond();
    }
  }
}
