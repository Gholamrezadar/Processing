var i = 0;
var r = 250;
function setup() {
  createCanvas(600, 600);
  smooth();
  //frameRate(25);
}

function draw() {
  background(250);
  
  //Unit Circle
  fill(39,50,100,15);
  stroke(39,50,100);
  strokeWeight(3);
  ellipse(300,300,2*r);
  
  //coordinate_lines
  offset  = (width - 2*r) /2;
  strokeWeight(1);
  stroke(39,50,100,50);
  line(offset,height/2,width-offset,height/2);
  line(width/2,offset,width/2,height-offset);


    //////////////////
   ///Cosine Lines///
  //////////////////
  
  //Horizontal
  stroke(237,28,82);
  strokeWeight(3);
  line(width/2,height/2,r*cos(-i)+width/2,height/2);
  //Vertical
  stroke(237,28,82,80);
  strokeWeight(1);
  line(r*cos(i)+width/2,r*sin(i)+height/2,r*cos(i)+width/2,height/2);
  
    //////////////////
   ///Sine Lines/////
  //////////////////
  
  //Horizontal
  stroke(20,150,230);
  strokeWeight(3);
  line(width/2,height/2,width/2,r*sin(i)+height/2);
  //Vertical
  stroke(20,150,230,80);
  strokeWeight(1);
  line(r*cos(i)+width/2,r*sin(i)+height/2,width/2,r*sin(i)+height/2);
  
  
  //Line
  stroke(0,128);
  line(width/2, height/2, r*cos(i)+width/2,r*sin(i)+height/2)
  
  //Cursor
  fill(237,28,82);
  noStroke();
  ellipse(r*cos(i)+width/2, r*sin(i)+height/2,25);

  //text
  noFill();
  stroke(0);
  text("x      : "+floor(degrees(-i))+" deg",15,25);
  text("x      : "+floor(-i/3.14*100)/100+" Pi",15,45);
  stroke(237,28,82);
  text("cos(x) : "+floor(cos(-i)*100)/100,15,65);
  stroke(20,150,230,80);
  text("sin(x) : "+floor(sin(-i)*100)/100,15,85);

  i-=.005;
}