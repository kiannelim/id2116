let bulbOn;
let bulbOff;

let brightness = 0;

function setup() 
{
   createCanvas(400, 400);
   bulbOn = loadImage("images/bulb_on.png");
   bulbOff = loadImage("images/bulb_off.png");
}

function draw() {
  background(220);
  imageMode(CENTER);
  if(brightness == 1){
   image(bulbOn,width/2,height/2,300,300);
  }else{
   image(bulbOff,width/2,height/2,300,300);
  }
  
}

function mousePressed(){
   on();
   print("mouse pressed! " + brightness);
}

function mouseReleased(){
   off();
   print("mouse released! " + brightness);

}

function touchStarted(){
  on();
}

function touchEnded(){
  on();
}



function on(){
   // set brightness 1 :on
   brightness = 1;
}

function off(){
   // set brightness 0 :off
   brightness = 0;
}

