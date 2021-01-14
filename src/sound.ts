class Sound {
  public audioButton: p5.Element;
  private soundText: string;

  constructor() {
    this.soundText = "MUTE AUDIO";
    this.audioButton = createButton(this.soundText);
   
  }

  public update() {
    this.audioButton.mousePressed(this.toggleSound);
    if (soundtrack.isPlaying()) {
      this.soundText = "MUTE AUDIO";
    } else {
      this.soundText = "PLAY AUDIO";
    }
  }

  public draw() {
    this.audioButton.show();
    this.audioButton.style("background-color", "transparent");
    this.audioButton.style("color", "white");
    this.audioButton.style("border-radius", "10");
    this.audioButton.position(windowWidth - 110, 11);
    this.audioButton.html(this.soundText);
  }

  public setMuteIcon(muteIcon: p5.Image) {
    return muteIcon;
  }

  public setSoundIcon(soundIcon: p5.Image) {
    return soundIcon;
  }

  public toggleSound() {
    if (soundtrack.isPlaying()) {
      soundtrack.pause();
      gamePlaySound.pause();
    } else {
      soundtrack.play();
      gamePlaySound.play();
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
