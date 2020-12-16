class GameOver {
    private gameGUI: IGameState;

    constructor(gameGUI: IGameState) {
        this.gameGUI = gameGUI;
    }

    public draw(){
        this.gameIntro()
    }

    private gameIntro() {
        this.gameGUI.updateGUI('intro');
    }

}
