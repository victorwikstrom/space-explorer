abstract class GameObject {
    protected size: number
    protected position: p5.Vector 
    protected velocity: p5.Vector
    protected acceleration: p5.Vector

    constructor() {
        this.size = 0;
        this.position = createVector(0,0);
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0,0);
    }
    
    protected draw(){ 
    }

    protected update(){
    }
     
}
