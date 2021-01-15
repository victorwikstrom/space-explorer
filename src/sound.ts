class Sound {
  public audioButton: p5.Element;
  public audioText: string;

  constructor() {
    this.audioText = "MUTE AUDIO";
    this.audioButton = createButton(this.audioText);
    this.audioButton.mousePressed(this.toggleSound);
    this.audioButton.style("background-color", "transparent");
    this.audioButton.style("color", "white");
    this.audioButton.style("border-radius", "10");
    this.audioButton.position(windowWidth - 110, 11);
  }

  public update() {
    if (soundtrack.isPlaying()) {
      this.audioText = "MUTE AUDIO";
    } else {
      this.audioText = "PLAY AUDIO";
    }
    this.audioButton.html(this.audioText);
  }

  public toggleSound() {
    if (soundtrack.isPlaying()) {
      soundtrack.pause();
      gamePlaySound.pause();
    } else {
      soundtrack.play();
    }
  }

  public playSound(sound: p5.SoundFile) {
    sound.play();
  }

  public stopSound(sound: p5.SoundFile) {
    sound.stop();
  }

  public loopSound(sound: p5.SoundFile) {
    sound.loop();
  }
}
