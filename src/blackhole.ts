class BlackHole extends GameObject {
    //private image: string; //- TO BE ADDED LATER
   // private damage: number; // - TO BE ADDED LATER
   // private collisionSound: string; // TO BE ADDED LATER

    constructor(){
        super();
        //this.image = "" //TO BE ADDED LATER
        //this.damage = 10; // TO BE ADDED LATER
        //this.collisionSound: "" //TO BE ADDED LATER
        this.position = createVector(width, random(height))
        this.velocity = createVector(random(0,4), 0)
        this.acceleration = createVector(0,0)
    }

    public update(){

    }

    public draw(){

    }

    public handleShot(){
        
    }
}