

var canvas;
let circleDi=200;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas");
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  strokeWeight(10);
  stroke('pink');
  background(0);
  fill(255,184,236);
  circle(windowWidth/2, windowHeight/2, 200);
}

function draw() {
  frameRate(4);
{
    if (
    mouseX > windowWidth/2
  ) 
      {
        circle(windowWidth/2,windowHeight/2,mouseX);
        fill(random(200,250), random(150,190), random(200,250));
     
      }
  if (
    mouseX < windowWidth/2
  ) 
      {
        circle(windowWidth/2,windowHeight/2,mouseX);
         fill(random(200,250), random(150,190), random(200,250));
 
      }
  if (
    mouseY > windowHeight/2
  ) 
      {
        circle(windowWidth/2,windowHeight/2,mouseY);
        fill(random(200,250), random(150,190), random(200,250));
     
      }
  if (
    mouseY < windowHeight/2
  ) 
      {
        circle(windowWidth/2,windowHeight/2,mouseY);
       fill(random(200,250), random(150,190), random(200,250));
 
      }
  
  }
}
