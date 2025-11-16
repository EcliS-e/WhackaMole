//The goal is to make an interactive game of whack-a-mole.

let startButton;
let molePresent = false;
let counter = 0;
let timer = 30;
let bgScene;
let moleSprite;
let molePosition;

/*
init();

function init(){
    createCanvas(1024, 512);
    draw();
}*/

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
function preloadAssets()  {
    moleSprite = loadImage("./assets/mole.png");
    bgScene = loadImage('./assets/bgMole.png');
};

/*Left button: check for mole. If mole in boundary, left mole down. 
If mole not in boundary, lose points or time */
const buttonCheck = (buttonDirection) => {
 
 if (buttonDirection == 'rightbutton' && molePosition > width/2) {
    counter++;
 }

 if (buttonDirection == 'leftbutton' && molePosition < width/2) {
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
    image(moleSprite, position, 300);
}


function setup(){
//assets go here
preloadAssets();
let canvas = createCanvas(1024, 512);

 gameStart();

}

/** a black background with a start prompt */
function gameStart ()  {
  background(0);

  //intro text
  introText = "WELCOME TO WHACKAMOLE";
  fill(255);
  text(introText, 50, 10, 70, 80);

  //start the game
 startButton = createButton('START');
  startButton.position(width/3, 100);


  startButton.mousePressed(gameLoop);
}; 


function gameLoop(){
startButton.remove();
counter = 0;
background(bgScene);
console.log(bgScene);

text(counter, 50, 10, 70, 80);
//canvas.clear();
//background(bgScene);


//check if there's a mole on the screen

/*
if (molePresent == false) {
    //spawnMole
    spawnMole();
}
*/
//img(bg, position, 300);
};

/** shows high score and button that 
 * calls gameloop and a button for gameStart (titlescreen */
function gameOver() {
    
}