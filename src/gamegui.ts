class GameGUI implements IGameState {
      private currentGUI: "play" | "intro" | "over";
      private gameIntro: GameIntro;
      private gamePlay: Gameplay;
      private gameOver: GameOver;

      constructor() {
            this.currentGUI = "intro";
            this.gameIntro = new gameIntro(this);
            this.gamePlay = new gamePlay();
            this.gamePlay = new gameOver(); 
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