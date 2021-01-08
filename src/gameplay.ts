class GamePlay {
  // Skapa interface så att player får tillgång till shots<>
  private gameGUI: IGameState;
  private player: Player;
  private isActive: boolean;
  private gameObjects: Array<GameObject>;
  public shots: Array<Shot>;
  private statusBar: StatusBar;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.gameObjects = [];
    this.player = new Player();
    this.shots = this.player.shots;
    this.statusBar = new StatusBar();
  }

  public update() {
    this.statusBar.update();
    this.player.update();
    this.updateGameObjects();
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
    this.statusBar.draw();
  }

  private updateCollisionCount() {
    push();
    textSize(50);
    fill("white");
    text(String(this.player.currentHealth), width - 100, 120);
    pop();
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
      if (gameObject instanceof Star) {
        gameObject.draw();
      } else if (gameObject instanceof Planet) {
        gameObject.draw();
      } else if (gameObject instanceof Meteorite) {
        gameObject.draw();
      } else if (gameObject instanceof SpaceDiamond) {
        gameObject.draw();
      } else if (gameObject instanceof BlackHole) {
        gameObject.draw();
      }
    }
  }

  /** Call update() on all gameObjects */
  private updateGameObjects() {
    for (let gameObject of this.gameObjects) {
      if (gameObject instanceof Star) {
        gameObject.update();
        this.checkCollision(this.player, gameObject);
      } else if (gameObject instanceof Planet) {
        gameObject.update();
        this.checkCollision(this.player, gameObject);
      } else if (gameObject instanceof Meteorite) {
        gameObject.update();
        this.checkCollision(this.player, gameObject);
      } else if (gameObject instanceof SpaceDiamond) {
        gameObject.update();
        this.checkCollision(this.player, gameObject);
      } else if (gameObject instanceof BlackHole) {
        gameObject.update();
        this.checkCollision(this.player, gameObject);
      }
    }
  }

  private checkCollision(p: Player, o: GameObject) {
    let distance = dist(p.position.x, p.position.y, o.position.x, o.position.y);

    if (distance < o.radius + 40) {
      if (!o.isHit) {
        // Only trigger collision when an object is not already hit
        if (o instanceof BlackHole) {
          this.handleCollision(p, o);
        } else if (o instanceof Planet) {
          this.handleCollision(p, o);
        } else if (o instanceof Meteorite) {
          this.handleCollision(p, o);
        } else if (o instanceof SpaceDiamond) {
          this.handleCollision(p, o);
        }
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
    if (gameObject instanceof Planet) {
      health = this.player.currentHealth - gameObject.damage;
    } else if (gameObject instanceof BlackHole) {
      health = this.player.currentHealth - gameObject.damage;
    } else if (gameObject instanceof Meteorite) {
      health = this.player.currentHealth - gameObject.damage;
    } else if (gameObject instanceof SpaceDiamond) {
      health = this.player.currentHealth + gameObject.health;
    }
    if (health <= 0) {
      this.player.die();
    }
    return health;
  }
}
