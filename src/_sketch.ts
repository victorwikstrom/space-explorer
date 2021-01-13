//---- GLOBAL VARIABLES ----//
let gameGUI: GameGUI;
let shipImg: p5.Image;
let muteIcon: p5.Image;
let soundIcon: p5.Image;
let audioIcon: p5.Image;
let soundtrack: p5.SoundFile;
let spaceDiamondImg: p5.Image;
let blackHoleImg: p5.Image;
let meteoriteImg: p5.Image;
let spaceExplorerHeading: p5.Font;
let spaceExplorerBold: p5.Font;
let explosionImg: p5.Image;
//PLANET IMAGES
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

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  shipImg = loadImage("assets/images/spaceship.png");
  soundtrack = loadSound("assets/sound/Fair_Use_Trio_-_06_-_2001_A_Space_Odyssey.mp3");
  muteIcon = loadImage("assets/images/sound-off.svg");
  soundIcon = loadImage("assets/images/sound-on.svg");
  audioIcon = loadImage("assets/images/audio-8.png");
  spaceDiamondImg = loadImage("assets/images/spacediamond.png");
  blackHoleImg = loadImage("assets/images/blackhole.png");
  meteoriteImg = loadImage("assets/images/meteorite.png");
  spaceExplorerHeading = loadFont("assets/fonts/barlow-condensed-blackitalic.woff");
  spaceExplorerBold = loadFont("assets/fonts/phatt.woff");
  explosionImg = loadImage("assets/images/explosion.png");

  // PLANET IMAGES
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
  soundtrack.play();
  soundtrack.setVolume(0.5);
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
