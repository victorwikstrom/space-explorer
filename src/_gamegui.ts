class GameGUI implements IGameState {
      private currentGUI: "play" | "intro" | "over";
      private gameIntro: GameIntro;
      private gamePlay: GamePlay;
      private gameOver: GameOver;

      constructor() {
            this.currentGUI = "play";
            this.gameIntro = new GameIntro(this);
            this.gamePlay = new GamePlay(gameGUI);
            this.gameOver = new GameOver(gameGUI); 
      }

      public updateGUI(gui: "play" | "intro" | "over") {
            this.currentGUI = gui;
      };

      public draw() {
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
}