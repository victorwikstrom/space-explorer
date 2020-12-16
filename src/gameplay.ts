class GamePlay {
    private gameGUI: IGameState;

    constructor(gameGUI: IGameState) {
        this.gameGUI = gameGUI;
    }

    public draw(){
        this.gameOver()
    }

    private gameOver() {
        this.gameGUI.updateGUI("over");
    }

}

