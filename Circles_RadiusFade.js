var r=50;
var xpos,ypos,dis;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  for (var y = 0; y < 500/r; y++) {
    for (var x = 0; x < 500/r; x++) {
      stroke(y/500*r*255,x/500*r*255,0);
      xpos = x*50+25;
      ypos = y*50+25;
      dis = sqrt((mouseX-xpos)*(mouseX-xpos)+(mouseY-ypos)*(mouseY-ypos));
      //radical2*500 = 700
      ellipse(xpos,ypos,(700-dis)/10);
      
    }
  }
  
}