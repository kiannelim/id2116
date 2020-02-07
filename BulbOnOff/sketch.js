//declare variables
let bulbOn;
let bulbOff;

function setup() {
  createCanvas(400, 400);
  
  //load bulb images
  bulbOn = loadImage("images.bulb_on.png");
  bulbOff = loadImage("images.bulb_off.png");
}

function draw() {
  background(200);
  
  //draw bulb image at coordinates x=0, y=0
  image(bulbOn,0,0);
}