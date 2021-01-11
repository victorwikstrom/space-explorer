class GameGUI implements IGameState {
  private currentGUI: "play" | "intro" | "over";
  private gameIntro: GameIntro;
  private gamePlay: GamePlay;
  private gameOver: GameOver;

  constructor() {
    this.currentGUI = "intro";
    this.gameIntro = new GameIntro(this);
    this.gamePlay = new GamePlay(this);
    this.gameOver = new GameOver(this);
  }

  public update() {
    if (this.currentGUI === "intro") {
      // this.gameIntro.update();
    }
    if (this.currentGUI === "play") {
      this.gamePlay.update();
    }
    if (this.currentGUI === "over") {
      //  this.gameOver.update();
    }
  }

  public draw() {
    this.gameIntro.button.hide();
    this.gameOver.button.hide();
    // this.gamePlay.button.hide();

    if (this.currentGUI === "intro") {
      this.gameIntro.draw();
    }
    if (this.currentGUI === "play") {
      this.gamePlay.draw();
    }
    if (this.currentGUI === "over") {
      this.gameOver.draw();
    }
  }

  public updateGUI(gui: "play" | "intro" | "over") {
    this.currentGUI = gui;
    this.createNewGameplay();
   
   //Om GUI är play och isactive är false, skapa ny gameplay instans... behöver vi ta bort gamla instansen?
    //
  }

   createNewGameplay(){
     if (this.gamePlay.isActive = false && this.currentGUI === "play") {
       
       
     }
   }
}

/// I gameplay klassen kolla om gameplay nått gameover 
// Om gameOver skett, skapa nytt gui
// this.isActive - kolla i gameover 

