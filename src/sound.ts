class Sound {
      // public soundtrack: p5.SoundFile;
      public audioButton: p5.Element;
      public muteIcon: p5.Image;
      public soundIcon: p5.Image;
      // gameintro: p5.SoundFile;
      // gameplay: p5.SoundFile;
      // gameover: p5.SoundFile;
      // shot: p5.SoundFile;
      // collision: p5.SoundFile;
      // blackhole: p5.SoundFile;
      // explode: p5.SoundFile;
    
      constructor() {
        this.audioButton = createImg("assets/images/audio-8.png");
        this.muteIcon = this.setMuteIcon(muteIcon);
        this.soundIcon = this.setSoundIcon(soundIcon);
        this.audioButton.mousePressed(this.toggleSound);
        // this.audioButton = createButton('mute');
        //       soundtrack = loadSound(
        //       "assets/sound/Fair_Use_Trio_-_06_-_2001_A_Space_Odyssey.mp3"
        //     );
      }
    
      update() {
        this.toggleSound();
        this.audioButton;
        this.audioButton.mousePressed(this.toggleSound);  
      }
    
      draw() {
        this.audioButton.show();
        this.audioButton = createImg("assets/images/audio-8.png");
        this.audioButton.style("background-color", "blue");
        this.audioButton.style("border-radius", "50%");
        this.audioButton.position(windowWidth - 80, 11);
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
          // this.audioButton.html("pause");
      //     this.audioButton = createImg("assets/images/sound-on.svg");
        } else {
          soundtrack.play();
          // this.audioButton.html("play");
      //     this.audioButton = createImg("assets/images/sound-off.svg");
        }
      }

      public sound(sound: p5.SoundFile) {
            sound.play();
      }
    }
    