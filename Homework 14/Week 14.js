var myXs = [];
var myYs = [];
var myDiameters = [];
var myXsSpeeds = [];
var myYsSpeeds = [];
var y = 90;
var x = 500
var playerX = 545;
var playerY = 40;
var movement = 2;
var movement2 = 2;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var mouseShapeX;
var mouseShapeY;

function setup(){
  createCanvas(600, 500);
  
  for (var i = 0; i < 9; i++) {
    myXsSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
        myYsSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
        myXs[i] = getRandomNumber(600);
        myYs[i] = getRandomNumber(500);
        myDiameters[i] = getRandomNumber(60);
  }
}
function draw() {
  background(0,255,0);

  //boundary
  fill(0);
  rect(0, 0, 10, height);
  rect(0, height-10,width, 10);
  rect(width-10,0,10,height-70);
  rect(0, 0, width, 10);
  rect(0, 0, 500, 100);
  rect(90, 190, 500, 100);
  rect(0, 380, 500, 150);
  
  MakePlayer();
  MovePlayer();
  MouseEnemy();
  
      // potential Enemy
    fill('red')
    for (var i = 0; i < myXs.length; i++) {
    square(myXs[i], myYs[i], myDiameters[i]);
    myXsSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 0)) + 1);
    myYsSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 0)) + 1);
      
      // Move the Enemy
        myXs[i] += myXsSpeeds[i];
        myYs[i] += myYsSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (myXs[i] >= width) {
            myXs[i] = 10;
        }
        if (myXs[i] < 10) {
            myXs[i] = width;
        }
        if (myYs[i] > height) {
            myYs[i] = 10;
        }
        if (myYs[i] < 10) {
            myYs[i] = height;
        }

    }
}       

function MouseEnemy() {
    fill(120,130,140);
    square(mouseShapeX, mouseShapeY, 25);
    if (mouseShapeX>=580 || mouseShapeX<=0)
   movement2 *=-1;
   mouseShapeX+=movement2;
}

function MakePlayer(){
  fill('#fae');
    circle(playerX, playerY, 30);
}
  
function MovePlayer (){
  if(keyIsDown(w)){
        if(playerY > 15)
    {
        playerY -= 6;   
    }
      }
    if(keyIsDown(s)){
      if(playerY < 485){
        playerY += 6;   
    }
    }
    if(keyIsDown(a)){
      if(playerX > 15)
        {
        playerX -= 6;   
    }
    }
    if(keyIsDown(d)){
      if(playerX < 615){
        playerX += 6;   
    }
    }

    if(playerX > width-5 && playerY > width-170)
    {
        fill("white");
        stroke(5);
        textSize(36);
        text("Big Winner!", width-350, height-270);
    }
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}     
  
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}