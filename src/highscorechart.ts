interface ScoreData {
  name: string;
  score: number;
}
class HighscoreChart {
  public highscoreList: Array<ScoreData>;
  public playerName: string;
  public currentScore: number;

  constructor() {
    // this.position = createVector(1000, windowHeight / 2 - 120);
    // this.textColor = color('#FAFDEB');
    this.playerName = "";
    this.currentScore = 0;
    this.highscoreList = (getItem("highscore") || []) as Array<ScoreData>;
  }

  public draw() {
    this.drawHighscoreChart();
  }

  public setPlayerName(name: string) {
    this.playerName = name;
  }

  public setCurrentScore(score: number) {
    this.currentScore = score;
  }

  public addNewHighscore() {
    this.highscoreList.push({
      name: this.playerName,
      score: this.currentScore,
    });
    storeItem("highscore", this.highscoreList);
  }

  // HIGHSCORECHART
  public drawHighscoreChart() {
    this.highscoreList = (getItem("highscore") || []) as ScoreData[];

    this.highscoreList.sort((a: ScoreData, b: ScoreData) => {
      return b.score - a.score;
    });

    let heightPos = 0;

    let nrOfHighscores = this.highscoreList.length;

    if (nrOfHighscores > 3) {
      nrOfHighscores = 3;
    }

    for (let i = 0; i < nrOfHighscores; i++) {
      let name = this.highscoreList[i].name;
      let score = this.highscoreList[i].score.toFixed();
      //console.log(this.highscoreList[i])
      push();
      noStroke();
      textFont(spaceExplorerBold);
      fill("red");
      textSize(20);
      text(score + " 000 L-Y", width / 2 + 140, height / 2 - 60 + heightPos);
      textSize(16);
      fill("#01c2cb");
      text(name, width / 2 + 140 + score.length, height / 2 - 30 + heightPos);
      pop();
      heightPos += 80;
    }

    push();
    noStroke();
    textFont(spaceExplorerBold);
    fill("#01c2cb");
    textSize(22);
    // HIGHSCORE TEXT
    text("HIGHSCORES", width / 2 + 140, height / 2 - 100);
    // ADD BLUE LINE
    pop();
  }
}

/* 
if (num1 === null) {
  textSize(15);
  fill("red")
  num1 = text("No score saved", width / 2 + 140, height / 2 - 70);
} else {
  fill("red");
  fill("#01c2cb");
  textSize(22);
  // HIGHSCORE
  text(num1 + " 000 L-Y", width / 2 + 140, height / 2 - 70); 
  text(player1, width / 2 + 140, height / 2 - 50); */

// private createHighscoreNumberRed() {
//   push();
//   noStroke();
//   textAlign(LEFT);
//   textSize(35)
//   textFont(spaceExplorerBold);
//   fill("red")
//   let num = getItem("highscore");
//   text(num + " 000 L-Y", width / 2 - 398, height / 2 - 40);
//   pop();
// }
