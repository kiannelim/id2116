// variables to store images to show pet box statuses
let temperaqua;
let temperblue;

// variable to store temper of pet box
let temper = 0; //0: aqua 1: purple

// variable to store the slider object
let fadeSlider;

function setup() {
  createCanvas(400, 400);
  
  //load bulb images
  temperaqua = loadImage("images/temperaqua.jpg");
  temperblue = loadImage("images/temperblue.jpg");
  
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
 
  //Check whether brightness is 0:aqua or 1:purple.
  if(temper > 0){
    //show temperaqua image
    tint(temper); //fade image 
    image(temperaqua,width/2,height/2,300,300); 
  }else{
    //shoe temperblue image
    tint(1); //set default tint
    image(temperblue,width/2,height/2,300,300); 
  }
}

//When a mouse button is pressed
function mousePressed(){
  //toggle between temper of petbox
  toggle();
}

//When a mouse button is released
function mouseReleased(){

}

//Switch On the bulb
function on(){
  temper = 1;
  print("Pet box is feeling aqua!");
}

//Switch Off the bulb
function off(){
  temper = 0;
  print("Pet box is feeling blue!");
}

//Toggle PetBox Temper 0/1
function toggle(){
  if(temper > 0){
    temper = 0;
  }else{
    temper = 1;
  }
}


//Fade brightness with the slider value
function fade(){
  temper = fadeSlider.value();
}

