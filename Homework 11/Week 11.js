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
      shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function draw() {
  background(0,255,0);
  fill(0);
  rect(0, 0, 10, height);
  rect(0, height-10,width, 10);
  rect(width-10,0,10,height-70);
  rect(0, 0, width, 10);
  rect(0, 0, 500, 100);
  rect(90, 190, 500, 100);
  rect(0, 380, 500, 150);
  //moving obstacles
  square(90, y, 100);
    if (y>=190 || y<=0)
     movement *= -1;
    y+=movement;
  rect(x, 380, 100, 50)
    if (x>=500 || x<=400)
      movement2 *=-1;
    x+=movement2;
  //player
  fill('#fae');
  circle(playerX, playerY, 30);
      if(keyIsDown(w))
    {
        playerY -= 5;   
    }
    if(keyIsDown(s))
    {
        playerY += 5;   
    }
    if(keyIsDown(a))
    {
        playerX -= 5;   
    }
    if(keyIsDown(d))
    {
        playerX += 5;   
    }
    fill(120,130,140);
    square(mouseShapeX, mouseShapeY, 25);
  
    if(playerX > width-20 && playerY > width-150)
    {
        fill("white");
        stroke(5);
        textSize(26);
        text("Big Winner!", width-350, height-300);
    }
    }
  
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}