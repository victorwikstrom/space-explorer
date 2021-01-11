class GamePlay {
  // Skapa interface så att player får tillgång till shots<>
  private gameGUI: IGameState;
  private player: Player;
  private isActive: boolean;
  private gameObjects: Array<GameObject>;
  private stars: Array<Star>;
  public shots: Array<Shot>;
  private statusBar: StatusBar;
  private gameAcceleration: number;

  constructor(gameGUI: IGameState) {
    this.gameGUI = gameGUI;
    this.isActive = false;
    this.gameObjects = [];
    this.stars = [];
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
  }

  /** Call update() on all gameObjects */
  private updateGameObjects(gameAcceleration: number) {
    for (let i = 0; i < this.gameObjects.length; i++) {
      this.gameObjects[i].velocity.x += gameAcceleration * 0.05; // UPDATE VELOCITY OF ALL OBJECTS
      this.gameObjects[i].update();
    }
    for (let star of this.stars) {
      star.update();
    }
    this.checkCollision(this.player, this.gameObjects, this.shots);
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

  private checkCollision(
    p: Player,
    objs: Array<GameObject>,
    shots: Array<Shot>
  ) {
    for (let i = 0; i < objs.length; i++) {
      if (p.collides(objs[i]) && !objs[i].isHit) {
        if (objs[i] instanceof BlackHole) {
          this.handleCollision(p, objs[i]);
        } else {
          this.handleCollision(p, objs[i]);
          objs.splice(i, 1);
        }
      }
      if (this.shots.length) {
        for (let j = 0; j < shots.length; j++) {
          if (shots[j].hits(objs[i]) && !objs[i].isHit) {
            if (objs[i] instanceof BlackHole) {
              objs[i].isHit = true;
              shots.splice(j, 1);
            } else {
              objs[i].isHit = true;
              objs.splice(i, 1);
              shots.splice(j, 1);
            }
          }
        }
      }
    }
  }

  private handleCollision(p: Player, obj: GameObject) {
    this.player.currentHealth = this.updateHealth(p.currentHealth, obj);
    obj.isHit = true;
    // Then do something to the object that has been hit, e.g explode and play sound
  }

  private updateHealth(health: number, obj: GameObject) {
    if (obj.damage < 0) {
      obj.position.x = 0;
      obj.update();
    }

    health = this.player.currentHealth - obj.damage;
    /* if (health <= 0) {
      storeItem("highscore", this.statusBar.distanceFromEarth);
      this.player.die();
    } */
    return health;
  }
}
