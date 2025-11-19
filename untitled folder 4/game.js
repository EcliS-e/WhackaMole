//The goal is to make an interactive game of whack-a-mole.

let startButton;
let molePresent = false;
let counter = 0;
let timer = 30;
let bgScene;
let moleSprite;
let molePosition;
let width = 1024;
let retryButton;
let menuButton;
let gameIsOver = false;
let spawner;
let scoreText
/**increase the score */

const increaseScore = () => {
    counter++;
    background(bgScene); // remove mole and score
    text(counter, 50, 10, 70, 80);
    molePresent = false;
    // gameLoop();
}

const decreaseScore = () => {
    counter -= 1;
    text(counter, 10, 10, 70, 80);
}

const decreaseTimer = () => {
    if (timer > 0) {
        timer -= 1;
    };
    background(bgScene);
    text(counter, 50, 10, 70, 80);
    text('time:' + `${timer}`, 920, 10, 70, 80);
    if (timer == 0) {
        gameIsOver = true;
        clearInterval(spawner);
        gameOver();
    };
}
//load game assets
function preloadAssets() {
    moleSprite = loadImage("./assets/mole.png");
    bgScene = loadImage('./assets/bgmolee.png');
};

/*Left button: check for mole. If mole in boundary, left mole down. 
If mole not in boundary, lose points or time */
const buttonCheck = (buttonDirection) => {

    console.log("Buttons checked!");

    if (molePosition < 500) {

        if (buttonDirection == 'rightButton') {
            increaseScore();
        }
    }

    if (molePosition >= 500) {
        if (buttonDirection == 'leftButton') {
            increaseScore();
        }
    }

};




//potentially could be turned nto spawn random objects function
const spawnMole = () => {
    let position;
    //use a random to determine if the mole will spawn left or right.
    if (Math.random() < .5) {
        position = 500;

    } else {
        position = 245;
    }
    image(moleSprite, position, 300);
    molePosition = position;
    molePresent = true;
}


function setup() {
    //assets go here
    preloadAssets();
    let canvas = createCanvas(1024, 512);

    gameStart();

}

/** a black background with a start prompt */
function gameStart() {
    background(0);
    if (retryButton || menuButton) {
        retryButton.remove();
        menuButton.remove();
    }
    //intro text
    textSize(11)
    introText = "WELCOME TO WHACKAMOLE";
    fill(255);
    text(introText, 50, 10, 70, 80);

    counter = 0;

    //start the game
    startButton = createButton('START');
    startButton.position(width / 3, 100);


    startButton.mousePressed(gameLoop);
};


function gameLoop() {
    timer = 30;
    textSize(25);
    startButton.remove();

if (retryButton) {
 retryButton.remove();
 menuButton.remove();
}
       
    
    // counter = 0;
    background(bgScene);
    // console.log(bgScene);

    text(counter, 50, 10, 70, 80);
    //canvas.clear();
    //background(bgScene);


    //check if there's a mole on the screen



    setInterval(decreaseTimer, 1000);

    if (molePresent == false) {
        //spawnMole

        spawner = setInterval(spawnMole, 4000);

    }
    else if (molePresent == true) {
        buttonCheck();
    }

    //img(bg, position, 300);
};

/** shows high score and button that 
 * calls gameloop and a button for gameStart (titlescreen */
function gameOver() {
    background(0);

    //intro text
    introText = "time's up!";

    fill(255);
    text(introText, width / 2 - 20, 50, 70, 80);
 

    counter = 0;

    //start the game
    retryButton = createButton('Retry');
    retryButton.position(width / 3, 300);


    retryButton.mousePressed(gameLoop);

    menuButton = createButton('Main menu');
    menuButton.position(width / 3, height - 30);


    menuButton.mousePressed(gameStart);

    retryButton.mousePressed(gameLoop);
   
}

function mouseClicked() {

    if (molePresent == true) {

        if (molePosition < 500) {

            if (mouseX < 500) {
                increaseScore();
                // console.log("click!");
            }
        }

        if (molePosition >= 500) {
            if (mouseX >= 500) {
                increaseScore();
                // console.log("click!");
            }
        }
    }
}