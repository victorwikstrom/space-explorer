//---- GLOBAL VARIABLES ----//
let gameGUI: GameGUI;

//IMAGES
let spaceDiamondImg: p5.Image;
let blackHoleImg: p5.Image;
let meteoriteImg: p5.Image;
let explosionImg: p5.Image;
let planet1: p5.Image;
let planet2: p5.Image;
let planet3: p5.Image;
let planet4: p5.Image;
let planet5: p5.Image;
let planet6: p5.Image;
let planet7: p5.Image;
let planet8: p5.Image;
let planet9: p5.Image;
let planet10: p5.Image;
let planet11: p5.Image;
let planet12: p5.Image;
let shipImg: p5.Image;
let muteIcon: p5.Image;
let soundIcon: p5.Image;
let audioIcon: p5.Image;

//SOUNDS
let soundtrack: p5.SoundFile;
let playerCollision: p5.SoundFile;
let gameOverSound: p5.SoundFile;
let gamePlaySound: p5.SoundFile;
let shotSound: p5.SoundFile;
let diamondShot: p5.SoundFile;
let diamondHit: p5.SoundFile;
let explodeSound: p5.SoundFile;
let buttonClickSound: p5.SoundFile;

//FONTS
let spaceExplorerHeading: p5.Font;
let spaceExplorerBold: p5.Font;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  //IMAGES
  muteIcon = loadImage("assets/images/sound-off.svg");
  soundIcon = loadImage("assets/images/sound-on.svg");
  audioIcon = loadImage("assets/images/audio-8.png");
  spaceDiamondImg = loadImage("assets/images/spacediamond.png");
  blackHoleImg = loadImage("assets/images/blackhole.png");
  meteoriteImg = loadImage("assets/images/meteorite.png");
  explosionImg = loadImage("assets/images/explosion.png");
  planet1 = loadImage("assets/images/planets/1.png");
  planet2 = loadImage("assets/images/planets/2.png");
  planet3 = loadImage("assets/images/planets/3.png");
  planet4 = loadImage("assets/images/planets/4.png");
  planet5 = loadImage("assets/images/planets/5.png");
  planet6 = loadImage("assets/images/planets/6.png");
  planet7 = loadImage("assets/images/planets/7.png");
  planet8 = loadImage("assets/images/planets/8.png");
  planet9 = loadImage("assets/images/planets/9.png");
  planet10 = loadImage("assets/images/planets/10.png");
  planet11 = loadImage("assets/images/planets/11.png");
  planet12 = loadImage("assets/images/planets/12.png");
  shipImg = loadImage("assets/images/spaceship.png");

  //SOUNDS
  soundtrack = loadSound("assets/music/intro-soundtrack.mp3");
  gamePlaySound = loadSound("assets/music/gameplay-soundtrack.mp3");
  shotSound = loadSound("assets/sound/player-shot.mp3");
  buttonClickSound = loadSound("assets/sound/button-click.mp3");
  diamondHit = loadSound("assets/sound/diamond-hit.mp3");
  diamondShot = loadSound("assets/sound/diamond-shot.mp3");
  explodeSound = loadSound("assets/sound/planet-shot.mp3");
  shotSound = loadSound("assets/sound/player-shot.mp3");
  
  //FONTS
  spaceExplorerHeading = loadFont("assets/fonts/barlow-condensed-blackitalic.woff");
  spaceExplorerBold = loadFont("assets/fonts/phatt.woff");
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  gameGUI = new GameGUI();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  background(0);
  gameGUI.update();
  gameGUI.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
