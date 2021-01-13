class HighscoreChart {
      position: p5.Vector;
      textColor: p5.Color;
      
      constructor() {
          this.position = createVector(1000, windowHeight / 2 - 120);
          this.textColor = color('#FAFDEB');
      }
  
      update() {}

      draw() {   
        this.createHighscoreList();
        this.createHighscoreNumberRed();
      }

      private createHighscoreNumberRed() {
        push();
        noStroke();
        textAlign(LEFT);
        fill("white");
        textSize(22);
        
        //text("YOU REACHED:", width / 2 - 398, height / 2 - 115);
        textSize(35)
        textFont(spaceExplorerBold);
        fill("red")
        let num = getItem("highscore"); 
        text(num + " 000 L-Y", width / 2 - 398, height / 2 - 40);
        pop();
      }
      
      // HIGHSCORECHART
      public createHighscoreList() {
      push();
      noStroke();
      fill("#01c2cb");
      textFont(spaceExplorerBold);
      textSize(22);
      text("HIGHSCORES", width / 2 + 140, height / 2 - 115);
      // ADD BLUE LINE 


      // HIGHSCORE LIST
      let num1 = getItem("highscore"); 
      // IF LOCAL STORAGE IS EMTY
      if (num1 === null) {
        num1 = text("Ingen har spelat än", width / 2 + 140, height / 2 - 70);
      } else {
        fill("red");
        text(num1 + " 000 L-Y", width / 2 + 140, height / 2 - 70); 
      }

      // PLAYER NAME
      let player1 = getItem("playerName"); 
      text(player1, width / 2 + 140, height / 2 - 50);
      pop();
    }
}