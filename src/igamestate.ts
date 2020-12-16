interface IGameState {
      updateGUI: (gui: "play"| "intro"| "over") => void;
}