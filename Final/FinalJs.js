var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 300;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var Player1Score = 0
var Player2Score = 0
var a = 65
var d = 68
var Paddle1X = 205
var Paddle2X = 205

function setup() {
  createCanvas(500, 600);
}

function draw(){
  background('green');
  fill('white');
  rect (0, 298, 500, 2);
  circle (250, 299, 8)
  
  move();
  display();
  bounce();
  paddle();
  paddle2();
  
  //Paddle1
  fill('blue');
  rect(Paddle1X, 575, 90, 15);
  if(keyIsDown(a)){
        if(Paddle1X > 5)
    {
        Paddle1X -= 6;   
    }
      }
  if(keyIsDown(d)){
        if(Paddle1X < 410)
    {
        Paddle1X += 6;   
    }
      }

    // Paddle2
    fill('red');
  rect(Paddle2X, 15, 90, 15);
  if(keyIsDown(LEFT_ARROW)){
        if(Paddle2X > 5)
    {
        Paddle2X -= 6;   
    }
      }
  if(keyIsDown(RIGHT_ARROW)){
        if(Paddle2X < 410)
    {
        Paddle2X += 6;   
    }
      }
  
  function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}
}

// boundaries
function bounce() {

  if (xBall < 10 ||
    xBall > 500 - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10 ||
    yBall > 600 - 10) {
    ySpeed *= -1;
    }
  if (yBall > 590) {
    Player2Score++;
  }
    if (yBall < 10) {
    Player1Score++;
  }
}

// move the ball
function moveball() {
  xBall += xSpeed;
  yBall += ySpeed;
}

// Ball
function display() {
  fill('white');
  ellipse(xBall, yBall, 15, 15);
  text ("Score: " + Player2Score, 10, 25);
  text ("Score: " + Player1Score, 445, 590);
}

// Bounce off Paddle1
function paddle() {
  if ((xBall > Paddle1X &&
      xBall < Paddle1X + 90) &&
    (yBall + 10 >= 575)) {
    xSpeed *= -1;
    ySpeed *= -1;

  }
}

// Bounce off Paddle2
function paddle2() {
  if ((xBall > Paddle2X &&
      xBall < Paddle2X + 90) &&
    (yBall - 15 <= 15)) {
    xSpeed *= -1;
    ySpeed *= -1;

  }
}