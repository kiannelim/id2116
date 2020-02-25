//To store multiple values into a variable we can use an Array to create a set of data. 

//list of file name to be loaded
let image_filelist = ['images/orange.jpg','images/apple.jpg','images/banana.jpg'];

//a variable to store images as a list
let imagelist = [];

let a = ["orange","apple","banana"]
print(a[0]); // print "orange"
print(a[1]); // print "apple"
print(a[2]); //print "banana"

print(a.length); //3 <-number of objects

//preload() function "preload"s large objects before loading the main sketch.

function preload() {
  
  //loop through every filenames in the filelist.
  //for(let filename of image_filelist){}block iterates through the a list of filenames and load them into the imageList variable using for..ofloop
  
  for(let filename of image_filelist){
    //load and push the image into the imagelist
    imagelist.push(loadImage(filename));
  }
  
  print(imagelist.length+ "images are loaded into the list!");
}



function draw() {
  //displays the current image
  show();
}

//the current image id
let current_image = 0;

//show current_image from the imagelist.
function show(){
  image(imagelist[current_image], 0, 0);
}

//set the current_image to next id
function next(){
  current_image = current_image +1;
  if(current_image>imagelist.length-1){
    current_image=0;
  }
  print("next image is" + current_image);
}

//set the current_image to previous id
function prev(){
  current_image = current_image -1;
  
  if(current_image <0){
    current_image = imagelist.length -1;
  }
  
  print("prev image is" + current_image);}


//define "next" and "prev" buttons and link with function

let nextButton;
let prevButton;

function setup() {
  createCanvas(600, 400);


  //create a button with "prev" text
  prevButton = createButton('prev');
  //set prev () function to call prev() when mousePressed
  prevButton.mousePressed(prev);

  //create a button with "next" text
  nextButton = createButton('next');
  //set next() function to call next() when mousePressed
  nextButton.mousePressed(next);
}