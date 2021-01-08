class GamePlay {
  // Skapa interface så att player får tillgång till shots<>
  private gameGUI: IGameState;
  private player: Player;
  private isActive: boolean;
  private gameObjects: Array<GameObject>;
  public shots: Array<Shot>;
  private statusBar: StatusBar;
  private gameAcceleration: number;
  

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.gameObjects = [];
    this.player = new Player();
    this.shots = this.player.shots;
    this.statusBar = new StatusBar();
    this.gameAcceleration = 0.1;
  }

  public update() {
    this.player.update();
    this.updateGameObjects(/**this.gameAcceleration*/);
    this.statusBar.update(this.gameAcceleration);
  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
      this.createGameObjects();
      this.isActive = true;
    }

    this.player.draw();
    this.drawGameObjects();
    this.updateCollisionCount();

    // DRAW STATUSBAR
    this.statusBar.draw(this.player.currentHealth);
  }

  private updateCollisionCount() {
    push();
    textSize(50);
    fill("white");
    text(String(this.player.currentHealth), width - 100, 120);
    pop();
  }

  /** Change gui to Game Over */
  // private changeGui = () => {
  //   this.gameGUI.updateGUI("over");
  // };

  /** Create all game object instances */
  private createGameObjects() {
    for (let i = 0; i < 1000; i++) {
      this.gameObjects.push(new Star());
    }
    for (let i = 0; i < 2; i++) {
      //8 st
      this.gameObjects.push(new Planet());
    }
    for (let i = 0; i < 2; i++) {
      this.gameObjects.push(new SpaceDiamond());
    }
    for (let i = 0; i < 2; i++) {
      //3 st
      this.gameObjects.push(new Meteorite());
    }
    for (let i = 0; i < 2; i++) {
      this.gameObjects.push(new BlackHole());
    }
  }

  /** Call draw() on all gameObjects */
  private drawGameObjects() {
    for (let gameObject of this.gameObjects) {
      gameObject.draw();
    }
  }

  /** Call update() on all gameObjects */
  private updateGameObjects(/**gameAcceleration: number*/) {
    for (let gameObject of this.gameObjects) {
      gameObject.update();
      this.checkCollision(this.player, gameObject);
    }
  }

  /* private getValidYPos() {
    const yPositions = this.gameObjects.map(
      (gameObject) => gameObject.position.y
    );
    // const yPos = [0, 8, 50, 200, 230];

    const indexStart = floor(random(yPositions.length - 1));
    const indexEnd = indexStart + 1;

    const validYPos = random(
      yPositions[indexStart] + 25 * 2,
      yPositions[indexEnd] - 25 * 2
    );
    return validYPos;
  } */

  private checkCollision(p: Player, o: GameObject) {
    let distance = dist(p.position.x, p.position.y, o.position.x, o.position.y);

    if (distance < o.radius + 40) {
      if (!o.isHit) {
        this.handleCollision(p, o);
        o.isHit = true; // Make sure the object knows it has been hit after first intersection
      }
    } else {
      o.isHit = false;
    }
  }

  private handleCollision(p: Player, o: GameObject) {
    this.player.currentHealth = this.updateHealth(p.currentHealth, o);
    // Then do something to the object that has been hit, e.g explode and play sound
  }

  private updateHealth(health: number, gameObject: GameObject) {
    if (gameObject.damage < 0) {
      gameObject.position.x = 0;
      gameObject.update();
    }

    health = this.player.currentHealth - gameObject.damage;
    if (health <= 0) {
      this.player.die();
    }
    return health;
  }
}
