//variables to store light bulb statuses
let bulbOn;
let bulbOff;

// variable to store brightness of the bulb
let brightness = 0; //0: off 1:on

function setup() {
  createCanvas(400, 400);  
    //load bulb images
  bulbOn = loadImage("images/bulb_on.png");
  bulbOff = loadImage("images/bulb_off.png");
}


function draw() {
  background(220);
  // draw bulb image at the coordinate x:0 y:0 (top left corner)
  imageMode(CENTER);

  //Check whether brightness is 0:off or 1:on.
  if(brightness == 1){
    //show bulbOn image
    image(bulbOn,width/2,height/2,300,300); 
  }else{
    //shoe bulbOff image
    image(bulbOff,width/2,height/2,300,300); 
  }
}


//When a mouse button is pressed
function mousePressed(){
  //toggle on/off of the bulb
  toggle();
}

//When a mouse button is released
function mouseReleased(){

}


//Switch On the bulb
function on(){
  brightness = 1;
  print("the bulb is on!");
}

//Switch Off the bulb
function off(){
  brightness = 0;
  print("the bulb is off!");
}


function toggle(){
  if (brightness>0){
    brightness = 0;
  }else{
    brightness = 1;
  }
}
