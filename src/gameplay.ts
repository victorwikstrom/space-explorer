
class GamePlay {
    private stars: Array<Star>
    private isVisible: boolean;
    private gameGUI: IGameState;

    constructor(gameGUI: IGameState) {
        this.gameGUI = gameGUI;
        this.isVisible = false;
        this.stars = [];
    }

    public draw(){
        //this.gameOver()

        if(!this.isVisible) {
            for(let i = 0; i < 1000; i++) {
                this.stars[i] = new Star();
                this.stars[i].draw();
            }
            let button = createButton("Dont click this");
            button.position(10, 10);
            button.mousePressed(this.gameOver);
        this.isVisible = true;    
        }

        for(let star of this.stars) {
            star.update();
        }
    }

    private gameOver() {
        this.gameGUI.updateGUI("over");
    }

}

