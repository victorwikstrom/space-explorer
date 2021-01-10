class StatusBar {
    position: p5.Vector;
    textColor: p5.Color;
    stroke: p5.Color;
    ellipses: Array<any>
    distanceFromEarth: number;
    gameVelocity: number;

    constructor() {
        this.position = createVector(0, 0);
        this.textColor = color("white");
        this.stroke = color("blue");
        this.ellipses = Array<any>()
        this.distanceFromEarth = 0;
        this.gameVelocity = 1;
    }

    update(gameAcceleration:number) {
        this.gameVelocity += gameAcceleration
        this.distanceFromEarth += deltaTime/800 * this.gameVelocity;
        
    }

    draw(health: number) {
        push();
        strokeWeight(4);
        stroke(this.stroke);
        fill(0);
        rect(0, 0, width/3, 70);
        rect(width/3, 0, width/3, 70);
        rect(width-width/3, 0, width/3, 70);
        pop();

        push();
        textSize(20);
        noStroke();
        fill(this.textColor);
        // DISTANCE FROM EARTH
        text("DISTANCE FROM EARTH", 70, 30);
        text(this.distanceFromEarth.toFixed() + " 000", 70, 50);
        // CURRENT SPEED
        text("CURRENT SPEED", width/3+30, 30);
        text("NUMBER", width/3+30, 50);
        // SPACESHIP CONDITION
        text("SPACESHIP CONDITION", width-width/3+30, 30);
        this.drawEllipses(health);
        pop();
    }

    drawEllipses(health: number) {
        for (let i = 0; i < health; i++) {
            const x = width-width/3 + 35 + i * 20;
            this.ellipses.push(ellipse(x, 50, 10, 10))
        }
    }
}