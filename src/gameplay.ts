
class GamePlay {
    private stars: Array<Star>
    private spacediamonds: Array<Spacediamond> // THIS ARRAY IS GOING TO BE A GAME OBJECTS ARRAY INSTEAD. FELICIA WILL CHANGE.
    private isVisible: boolean;
    private gameGUI: IGameState;
   

    constructor(gameGUI: IGameState) {
        this.gameGUI = gameGUI;
        this.isVisible = false;
        this.stars = [];
        this.spacediamonds = [];
        
    }

    public draw(){
        //this.gameOver()
        if(!this.isVisible) { 
            for(let i = 0; i < 1000; i++) {
                this.stars[i] = new Star();
                this.stars[i].draw();
            }

            for (let i = 0; i <5; i++){
                this.spacediamonds[i] = new Spacediamond();  
            }

            let button = createButton("Dont click this");
            button.position(10, 10);
            button.mousePressed(this.gameOver);
            this.isVisible = true;    
        }

         

        // for(let star of this.stars) {
        //     star.update();
        // }
        
        
    }


    public update(){
        for (let spacediamond of this.spacediamonds) {
            spacediamond.update();
            spacediamond.draw();
        }

    }

    private gameOver() {
        this.gameGUI.updateGUI("over");
    }

}

