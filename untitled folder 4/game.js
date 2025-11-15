//The goal is to make an interactive game of whack-a-mole.

let molePresent = false;
let counter = 0;
let timer = 30;
let bgScene;
let moleSprite;
/**increase the score */
const increaseScore = () => {
 counter++;
 text(counter, 10, 10, 70, 80);
}

const decreaseScore = () => {
 counter--;
 text(counter, 10, 10, 70, 80);
}

//load game assets
const preloadAssets = () => {
    moleSprite = loadImage("./assets/mole.png");
    bgScene = loadImage('./assets/bgMole.png');
};

/*Left button: check for mole. If mole in boundary, left mole down. 
If mole not in boundary, lose points or time */
const buttonCheck = (buttonDirection) => {
 
 if (buttonDirection == 'rightbutton' && molePosition < width/2) {
    counter++;
 }

 if (buttonDirection == 'leftbutton' && molePosition > width/2) {
    counter++;
 }

 

};




//potentially could be turned nto spawn random objects function
const spawnMole = () => {
 let position;
//use a random to determine if the mole will spawn left or right.
if(Math.random() < .5){
        position = 500;
        
} else {
        position = 30;
}
    img(moleSprite, position, 300);
}



/** a black background with a start prompt */
const gameStart = () => {
  background(0);

  //intro text
  introText = "WELCOME TO WHACKAMOLE";
  fill(255);
  text(introText, 50, 10, 70, 80);

  //start the game
  let startButton = createButton('START');
  startButton.position(width/3, 100);


  startButton.mousePressed(gameLoop);
}; 

function setup(){
//assets go here
createCanvas(1024, 512);
//arduinoControls();
gameStart();

}


function gameLoop(){
img(bgScene);
counter = 0;

//check if there's a mole on the screen
if (molePresent == false) {
    //spawnMole
    spawnMole();
}

//img(bg, position, 300);
};

/** shows high score and button that 
 * calls gameloop and a button for gameStart (titlescreen */
function gameOver() {
    
}