class Star extends GameObject {
    private opacity: number;

    constructor() {
        super();
        this.opacity = random(100, 200);
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0,0);
    }

    public draw() {
        stroke(color(230, 255, 255, this.opacity));
        ellipse(random(width),random(height), random(0.2, 0.8));

    }

    public update() {
    }
}