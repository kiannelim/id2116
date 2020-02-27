// variables to store images to show bulb statuses
let bulbOn;
let bulbOff;

// variable to store brightness of the bulb
let brightness = 0; //0: off 1:on

// variable to store the slider object
let fadeSlider;

function setup() {
  createCanvas(400, 400);
  
  //load bulb images
  bulbOn = loadImage("images/bulb_on.png");
  bulbOff = loadImage("images/bulb_off.png");
  
  //create a slider
  fadeSlider = createSlider(0,1,0,0.01); //createSlider(MIN,MAX,default,step)
  fadeSlider.style("width","300px");
  fadeSlider.class("slider") // set a CSS class to change appearence.
  fadeSlider.position(50,height - 40);
  fadeSlider.input(fade); // assign fade() function for the callback

  colorMode(RGB,1); //change color value range to 0.~ 1.
}

function draw() {
  background(0.8);
  
  //set origin point of the image to the center of image
  imageMode(CENTER);
 
  //Check whether brightness is 0:off or 1:on.
  if(brightness > 0){
    //show bulbOn image
    tint(brightness); //fade image 
    image(bulbOn,width/2,height/2,300,300); 
  }else{
    //shoe bulbOff image
    tint(1); //set default tint
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
//Toggle On/Off the bulb
function toggle(){
  if(brightness > 0){
    brightness = 0;
  }else{
    brightness = 1;
  }
}
//Fade brightness with the slider value
function fade(){
  brightness = fadeSlider.value();
}

