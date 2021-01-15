interface IGameState {
      updateGUI: (gui: "play"| "intro"| "over") => void;
      highscoreChart: HighscoreChart;
      sound: Sound;
}