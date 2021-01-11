//---- GLOBAL VARIABLES ----//
let gameGUI: GameGUI;
let shipImg: p5.Image;
let muteIcon: p5.Image;
let soundIcon: p5.Image;
let soundtrack: p5.SoundFile;
let button: p5.Element;
let spaceDiamondImg: p5.Image;
let blackHoleImg: p5.Image;
let meteoriteImg: p5.Image;
let spaceExplorerHeading: p5.Font;
let spaceExplorerBold: p5.Font;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  shipImg = loadImage("assets/images/spaceship.png");
  soundtrack = loadSound('assets/sound/Fair_Use_Trio_-_06_-_2001_A_Space_Odyssey.mp3')
  muteIcon = loadImage("assets/images/sound-off.svg")
  soundIcon = loadImage("assets/images/sound-on.svg")
  spaceDiamondImg = loadImage("assets/images/spacediamond.png");
  blackHoleImg = loadImage("assets/images/blackhole.png");
  meteoriteImg = loadImage("assets/images/meteorite.png");
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
  soundtrack.play();
  button = createImg('assets/images/audio-8.png');
  button.style("background-color", "blue");
  button.style("border-radius", "50%");
  button.position(windowWidth - 80, 12);
  soundtrack.setVolume(0.3);
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
  button.mousePressed(toggleSound);
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleSound () {
  if (soundtrack.isPlaying()) {
    soundtrack.pause();
    button = createImg('assets/images/sound-on.svg');
  }
  else {
    soundtrack.play();
    button = createImg('assets/images/sound-off.svg');
  }
}
