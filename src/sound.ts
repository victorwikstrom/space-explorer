class Sound {
  public audioButton: p5.Element

  constructor() {
    this.audioButton = createButton("MUTE AUDIO");
    this.audioButton.mousePressed(this.toggleSound);
    this.audioButton.style("background-color", "transparent");
    this.audioButton.style("color", "white");
    this.audioButton.style("border-radius", "10");
    this.audioButton.position(windowWidth - 110, 11);
  }
  
  public update() {}
  
  public draw() {}
  
  public setMuteIcon(muteIcon: p5.Image) {
    return muteIcon;
  }
  
  public setSoundIcon(soundIcon: p5.Image) {
    return soundIcon;
  }
  
  public toggleSound() {
    if (soundtrack.isPlaying()) {
      this.audioButton.html("MUTE AUDIO");
      soundtrack.pause();
      gamePlaySound.pause();
    } else {
      this.audioButton.html("PLAY AUDIO");
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
