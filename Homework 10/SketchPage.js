var x;
var v;
var y;
var z;
var u;
var w;
var q;
var movement = 1;
var movement1 = 1.5;
var movement2 = 2;
var movement3 = 0.5;
var movement4 = 2.5;
var movement5 = 3;

function setup() {
    createCanvas(400, 400);
    x = 160;
    v = 240;
    y = 180;
    z = 190;
    u = 200;
    w = 150;
    q = 130;
    ChangeDirections = false;
  }
  
  function draw() {
    background(220);
    textSize(30);
      text('Dillon', 10, 30);
  textSize(50);
      text('Me', 168, 325);
    textSize(20);
      text('By Me', 175, 350)
    let e = color('brown');
  fill(e);
  circle(u, q, 220);
    if (u>=210 || u<=190)
     movement4 *= -1;
    u+=movement4;
    if (q>=140 || q<=120)
     movement5 *= -1;
    q+=movement5;
    let c = color('antiquewhite');
  fill(c);
  strokeWeight(6);
  stroke(51);
  square(149, y, 100, 20);
    if (y>=195 || y<=165)
     movement2 *= -1;
    y+=movement2;
  circle(u, w, 200);
    if (u>=220 || u<=180)
     movement4 *= -1;
    u+=movement4;
    if (w>=170 || w<=130)
     movement5 *= -1;
    w+=movement5;
    let b = color('white');
  fill(b);
  stroke(10)
  circle(160, 130, 60);
  circle(240, 130, 60);
    let a = color('blue');
  fill(a);
  noStroke();
  circle(x, 130, 27);
    if (x>=175 || x<=145)
     movement *= -1;
    x+=movement;
  circle(v, 130, 27);
      if (v>=255 || v<=225)
     movement1 *= -1;
    v+=movement1;
    let j = color('black');
  fill(j);
  stroke(50)
  point(160, 130);
  point(240, 130);
  triangle(149, 270, 155, 350, 30, 270);
  triangle(251, 270, 245, 350, 370, 270);
  fill(e);
  line(130, 90, 190, 90);
  line(270, 90, 210, 90);
    let d = color('pink');
  fill(d);
  stroke(10);
  arc(200, z, 60, 40, 0, PI + QUARTER_PI, CHORD);
    if (z>=200 || z<=180)
     movement3 *= -1;
    z+=movement3;
  }