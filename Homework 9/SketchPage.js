function setup() {
    createCanvas(400, 400);
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
  circle(200, 130, 220);
    let c = color('antiquewhite');
  fill(c);
  strokeWeight(6);
  stroke(51);
  square(149, 180, 100, 20);
  circle(200, 150, 200);
    let b = color('white');
  fill(b);
  stroke(10)
  circle(160, 130, 60);
  circle(240, 130, 60,);
    let a = color('blue');
  fill(a);
  noStroke();
  circle(160, 130, 27);
  circle(240, 130, 27);
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
  arc(200, 190, 60, 40, 0, PI + QUARTER_PI, CHORD);
  }