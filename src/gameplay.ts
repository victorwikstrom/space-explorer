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
  gamePlaySound: p5.SoundFile;

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
    this.gamePlaySound = gamePlaySound;
  }

  public update() {
    this.player.update();
    this.updateGameObjects(this.gameAcceleration);
    this.statusBar.update(this.gameAcceleration);
    this.spawnGameObjects();
    gameGUI.sound.update();
  }

  public draw() {
    // GUI SETUP
    if (this.isActive === false) {
      gameGUI.sound.loopSound(this.gamePlaySound);
      this.createStars();
      this.isActive = true;
    }

    this.player.draw();
    this.drawGameObjects();
    this.statusBar.draw(this.player.currentHealth);
    gameGUI.sound.draw();
  }

  /** Change gui to Game Over */
  // private changeGui = () => {
  //   this.gameGUI.updateGUI("over");
  // };

  private createStars() {
    for (let i = 0; i < 1000; i++) {
      this.stars.push(new Star());
    }
  }

  /** Create all game object instances */
  private spawnGameObjects() {
    const spawnRate: number = random(1);

    if (spawnRate < 0.02) {
      this.gameObjects.push(new Planet());
    }
    if (spawnRate < 0.005) {
      this.gameObjects.push(new SpaceDiamond());
    }
    if (spawnRate < 0.005) {
      this.gameObjects.push(new Meteorite());
    }
    if (spawnRate < 0.001) {
      this.gameObjects.push(new BlackHole());
    }
  }

  /** Call draw() on all gameObjects */
  private drawGameObjects() {
    for (let star of this.stars) {
      star.draw();
    }
    for (let gameObject of this.gameObjects) {
      gameObject.draw();
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
    if (obj instanceof BlackHole) {
      obj.isHit = true;
      this.player.currentHealth = this.updateHealth(p.currentHealth, obj);
    } else if (obj instanceof SpaceDiamond) {
      obj.isHit = true;
      gameGUI.sound.playSound(obj.hitSound);
      this.player.currentHealth = this.updateHealth(p.currentHealth, obj);
      this.gameObjects.splice(this.gameObjects.indexOf(obj), 1);
    } else {
      obj.isHit = true;
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
      this.createDebris(15, obj.position.x, obj.position.y, "blue");
      gameGUI.sound.playSound(obj.collisionSound);
    } else if (obj instanceof Planet) {
      gameGUI.sound.playSound(obj.collisionSound);
      this.createDebris(random(30, 40), obj.position.x, obj.position.y, "red");
    } else if (obj instanceof SpaceDiamond) {
      gameGUI.sound.playSound(obj.shotSound);
      this.createDebris(25, obj.position.x, obj.position.y, "yellow");
    } else {
      return;
    }
  }

  private createDebris(nr: number, x: number, y: number, color: String) {
    for (let i = 0; i < random(nr, nr + 10); i++) {
      this.debris.push(new Debris(x, y, color));
    }
  }

  private updateHealth(health: number, obj: GameObject) {
    health = this.player.currentHealth - obj.damage;
    if (health <= 0) {
      this.gameGUI.highscoreChart.setCurrentScore(
        this.statusBar.distanceFromEarth
      );
      this.gameGUI.highscoreChart.addNewHighscore();
      gameGUI.sound.stopSound(this.gamePlaySound);
      this.gameObjects = [];
      this.player.die();
    }
    return health;
  }
}
