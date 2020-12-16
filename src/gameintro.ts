class GameIntro {
    private gameGUI: IGameState;

    constructor(gameGUI: IGameState) {
        this.gameGUI = gameGUI;
    }

    public draw(){
        createCanvas(windowWidth, windowHeight);
        background(0)
        let button = createButton("Start Game")
        button.position(width/2, height/2)
        button.mousePressed(this.startGame)
    }

    private startGame() {
        this.gameGUI.updateGUI("play");
        console.log("button clicked")
    }

}

