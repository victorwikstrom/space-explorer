//---- GLOBAL VARIABLES ----//
 let gameGUI: GameGUI;


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
   //Finns typings för loadSound!!
    //  let sound:p5.SoundFile = loadSound('../assets/sounds/key.wav', (sound) => {
    //  console.log('SUCCESS', sound);
    //  }, (error) => {
    //      console.log ('ERROR', error);
    //  }, (percentage) => {
    //      console.log ('%', percentage);
    //  });
    
    // console.log('OUTSIDE', sound);
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

    
    // noCursor();
    
    // game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    gameGUI.draw();
    
   
    // game.update();
    // game.draw();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}