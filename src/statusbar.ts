class StatusBar {
    position: p5.Vector;
    textColor: p5.Color;
    stroke: p5.Color;

    constructor() {
        this.position = createVector(0, 0);
        this.textColor = color("white");
        this.stroke = color("blue");
    }

    update() {

    }

    draw() {
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
    text("NUMBER", 70, 50);
    // CURRENT SPEED
    text("CURRENT SPEED", width/3+30, 30);
    text("NUMBER", width/3+30, 50);
    // SPACESHIP CONDITION
    text("SPACESHIP CONDITION", width-width/3+30, 30);
    ellipse(width-width/3+35, 50, 10, 10);
    ellipse(width-width/3+55, 50, 10, 10);
    ellipse(width-width/3+75, 50, 10, 10);
    ellipse(width-width/3+95, 50, 10, 10);
    ellipse(width-width/3+115, 50, 10, 10);
    ellipse(width-width/3+135, 50, 10, 10);
    ellipse(width-width/3+155, 50, 10, 10);
    pop();
    }
}