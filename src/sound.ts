class Sound {
  // public soundtrack: p5.SoundFile;
  public audioButton: p5.Element;
  //public muteIcon: p5.Image;
  //public soundIcon: p5.Image;
  private soundText: string;
  // gameintro: p5.SoundFile;
  // gameplay: p5.SoundFile;
  // gameover: p5.SoundFile;
  // shot: p5.SoundFile;
  // collision: p5.SoundFile;
  // blackhole: p5.SoundFile;
  // explode: p5.SoundFile;

  constructor() {
    //this.muteIcon = this.setMuteIcon(muteIcon);
    //this.soundIcon = this.setSoundIcon(soundIcon);
    this.soundText = "MUTE AUDIO";
    this.audioButton = createButton(this.soundText);
    // this.audioButton = createButton('mute');
    //       soundtrack = loadSound(
    //       "assets/sound/Fair_Use_Trio_-_06_-_2001_A_Space_Odyssey.mp3"
    //     );
  }

  update() {
    this.audioButton.mousePressed(this.toggleSound);
    if (soundtrack.isPlaying()) {
      this.soundText = "MUTE AUDIO";
    } else {
      this.soundText = "PLAY AUDIO";
    }
  }

  draw() {
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
    } else {
      soundtrack.play();
    }
  }

  public sound(sound: p5.SoundFile) {
    sound.play();
  }
}
