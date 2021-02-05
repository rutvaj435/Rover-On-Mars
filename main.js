// variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var roverWidth = 100;
var roverHeight = 90;
var roverX = 10;
var roverY = 10;
var randomNum = Math.floor(Math.random() * 2);
var images = ["mars.gif", "mars.jpg"];
var roverImage = "rover.png";
var backgroundImage = images[randomNum];
var backgroundImageTag, roverImageTag, keyPressed;


// add()
function add() {
    backgroundImageTag = new Image;
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;

    roverImageTag = new Image;
    roverImageTag.onload = uploadRover;
    roverImageTag.src = roverImage;
}

// uploadBackground()

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}
// uploadRover()

function uploadRover(){
    ctx.drawImage(roverImageTag, roverX, roverY, roverWidth, roverHeight);
}

// up down left right

window.addEventListener("keydown", keydownFn);

function keydownFn(e) {
    keyPressed = e.keyCode;
    
    if (keyPressed == "37") {
        left();
        console.log("left")
    }

    if (keyPressed == "38") {
        up();
        console.log("up")
    }

    if (keyPressed == "39") {
        right();
        console.log("right")
    }

    if (keyPressed == "40") {
        down();
        console.log("down")
    }
    
}
// up()

function up() {
    if (roverY >= 0) {
        roverY = roverY - 10;
        console.log(" x = " +  roverX + " y = " + roverY);
        uploadBackground();
        uploadRover();

    }

}

// down()
function down() {

        if (roverY <= 600) {
            roverY = roverY + 10;
            console.log(" x = " +  roverX + " y = " + roverY);
            uploadBackground();
            uploadRover();
    
        }

}

// left()

function left() {
    if (roverX >= 0) {
        roverX = roverX - 10;
        console.log(" x = " +  roverX + " y = " + roverY);
        uploadBackground();
        uploadRover();

    }
}

// right()

function right() {
    if (roverX <= 600) {
        roverX = roverX + 10;
        console.log(" x = " +  roverX + " y = " + roverY);
        uploadBackground();
        uploadRover();

    }
}