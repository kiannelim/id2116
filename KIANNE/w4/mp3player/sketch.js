let song;

let playing = 0;

let playColor; // color(0,255,0);
let stopColor; // color(255,0,0);

//a variable to store current background color
let bgColor;

function preload(){
    song = loadSound('sounds/bell-ringing-01.mp3');
}

function setup() {
  createCanvas(600, 200);

  //define colors play:green R0 G255 B0 stop:red R255 G0 B0
  playColor = color(0,255,0);
  stopColor = color(255,0,0);
  
  bgColor = stopColor; //set default bgColor to stopColor

}

function draw(){
   background(bgColor);
}

function mousePressed() {
  if (playing === 0) {
    play(); 
  } else {
    stop();
  }
}

function play(){
  playing = 1; 
  bgColor = playColor;
  
  song.play();
}

function stop(){
  playing = 0; 
  bgColor = stopColor;
  
  song.stop();
}