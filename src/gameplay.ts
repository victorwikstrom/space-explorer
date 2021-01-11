class GamePlay {
  // Skapa interface så att player får tillgång till shots<>
  private gameGUI: IGameState;
  private player: Player;
  private isActive: boolean;
  private gameObjects: Array<GameObject>;
  private stars: Array<Star>;
  public shots: Array<Shot>;
  public debris: Array<Debris>;
  private statusBar: StatusBar;
  private gameAcceleration: number;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.gameObjects = [];
    this.stars = [];
    this.debris = [];
    this.player = new Player();
    this.shots = this.player.shots;
    this.statusBar = new StatusBar();
    this.gameAcceleration = 0.05;
  }

  public update() {
    this.player.update();
    this.updateGameObjects(this.gameAcceleration);
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
    const nrOfStars = 1000;
    const nrOfPlanets = 3;
    const nrOfDiamonds = 5;
    const nrOfMeteorites = 5;
    const nrOfBlackHoles = 2;

    for (let i = 0; i < nrOfStars; i++) {
      this.stars.push(new Star());
    }
    for (let i = 0; i < nrOfPlanets; i++) {
      //8 st
      this.gameObjects.push(new Planet());
    }
    for (let i = 0; i < nrOfDiamonds; i++) {
      this.gameObjects.push(new SpaceDiamond());
    }
    for (let i = 0; i < nrOfMeteorites; i++) {
      //3 st
      this.gameObjects.push(new Meteorite());
    }
    for (let i = 0; i < nrOfBlackHoles; i++) {
      this.gameObjects.push(new BlackHole());
    }
  }

  /** Call draw() on all gameObjects */
  private drawGameObjects() {
    for (let gameObject of this.gameObjects) {
      gameObject.draw();
    }
    for (let star of this.stars) {
      star.draw();
    }
    if (this.debris.length) {
      for (let debris of this.debris) {
        debris.draw();
      }
    }
  }

  /** Call update() on all gameObjects */
  private updateGameObjects(gameAcceleration: number) {
    for (let obj of this.gameObjects) {
      obj.velocity.x += gameAcceleration * 0.05; // UPDATE VELOCITY OF ALL OBJECTS
      obj.update();
      this.checkCollision(obj, this.player, this.shots);
    }
    for (let star of this.stars) {
      star.update();
    }
    if (this.debris.length) {
      for (let debris of this.debris) {
        if (debris.opacity <= 0) {
          this.debris.splice(this.debris.indexOf(debris));
        }
        debris.update();
      }
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

  private checkCollision(obj: GameObject, p: Player, shots: Array<Shot>) {
    if (p.collides(obj)) {
      this.handleCollision(p, obj);
    }
    if (shots.length) {
      for (let shot of shots) {
        if (shot.hits(obj)) {
          this.handleShot(shot, obj);
        }
      }
    }
  }

  private handleCollision(p: Player, obj: GameObject) {
    obj.isHit = true;
    if (obj instanceof BlackHole) {
      this.player.currentHealth = this.updateHealth(p.currentHealth, obj);
    } else if (obj instanceof SpaceDiamond) {
      this.player.currentHealth = this.updateHealth(p.currentHealth, obj);
      this.gameObjects.splice(this.gameObjects.indexOf(obj), 1);
    } else {
      this.explode(obj);
      this.player.currentHealth = this.updateHealth(p.currentHealth, obj);
      this.gameObjects.splice(this.gameObjects.indexOf(obj), 1);
    }
  }

  private handleShot(shot: Shot, obj: GameObject) {
    obj.isHit = true;
    this.explode(obj);
    this.shots.splice(this.shots.indexOf(shot), 1);
    if (!(obj instanceof BlackHole)) {
      this.gameObjects.splice(this.gameObjects.indexOf(obj), 1);
    }
  }

  private explode(obj: GameObject) {
    if (obj instanceof Meteorite) {
      this.createDebris(obj.position.x, obj.position.y, "blue");
    } else if (obj instanceof Planet) {
      this.createDebris(obj.position.x, obj.position.y, "red");
    } else {
      return;
    }
  }

  private createDebris(x: number, y: number, color: String) {
    for (let i = 0; i < random(15, 25); i++) {
      this.debris.push(new Debris(x, y, color));
    }
  }

  private updateHealth(health: number, obj: GameObject) {
    health = this.player.currentHealth - obj.damage;
    /* if (health <= 0) {
      storeItem("highscore", this.statusBar.distanceFromEarth);
      this.player.die();
    } */
    return health;
  }
}
