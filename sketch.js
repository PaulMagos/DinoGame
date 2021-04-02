let kangaroo;
let kanImg;
let barrImg;
let bImg;

function preload(){
  kanImg = loadImage('Project/Images/kangaroo.png');
  barrImg = loadImage('Project/Images/barrel.png');
  bImg = loadImage('Project/Images/background.jpg');
}

function setup() {
  createCanvas(800, 450);
  kangaroo = new Kangaroo();
}

function keyPressed(){
  if(key == ' '){
    kangaroo.jump( );
  }
}

function draw() {
  background(220);
  kangaroo.show();
  kangaroo.move();
}
