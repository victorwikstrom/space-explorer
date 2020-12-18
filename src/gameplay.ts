class GamePlay {
  private gameGUI: IGameState;
  private player: Player;
  private isActive: boolean;
  public button: p5.Element;
  private stars: Array<Star>;
  private spacediamonds: Array<Spacediamond>; // THIS ARRAY IS GOING TO BE A GAME OBJECTS ARRAY INSTEAD.
  private meteorites: Array<Meteorite>; // THIS ARRAY IS GOING TO BE A GAME OBJECTS ARRAY INSTEAD.
  private blackholes: Array<BlackHole>;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.button = createButton("Go to GameOver GUI");
    this.stars = [];
    this.player = new Player();
    this.spacediamonds = [];
    this.meteorites = [];
    this.blackholes = [];
  }

  private createElements() {
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

  private createMeteorite() {
    for (let i = 0; i < 3; i++) {
      this.meteorites[i] = new Meteorite();
    }
  }

  private createBlackHoles() {
    for (let i = 0; i < 4; i++) {
      this.blackholes[i] = new BlackHole();
    }
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
    for (let meteorite of this.meteorites) {
      meteorite.update();
    }

    for (let blackhole of this.blackholes) {
      blackhole.update();
    }
  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
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
