//---- GLOBAL VARIABLES ----//
let gameGUI: GameGUI;
let shipImg: p5.Image;
let spaceDiamondImg: p5.Image;
let blackHoleImg: p5.Image;
let meteoriteImg: p5.Image;

//let soundtrack: p5.SoundFile;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  //soundtrack = loadSound('assets/sound/Fair_Use_Trio_-_06_-_2001_A_Space_Odyssey.mp3')
  shipImg = loadImage("assets/images/spaceship.png");
  spaceDiamondImg = loadImage("assets/images/spacediamond.png");
  blackHoleImg = loadImage("assets/images/blackhole.png");
  meteoriteImg = loadImage("assets/images/meteorite.png");
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
  //soundtrack.play();
  //soundtrack.setVolume(0.1);
  gameGUI = new GameGUI();

  // noCursor();
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
