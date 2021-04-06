let cnv;

let dino;
let land;

let dinoImg;
let dino_dead;
let cactusImg;
let cactusImg2;
let cactusImg3;
let cactusImg4;
let revcactusImg;
let dino_leftImg;
let dino_downImg;
let dino_rightImg;
let dino_leftdownImg;
let dino_rightdownImg;

let score = 0;

let rzs = 0.5;


function preload(){
    dino_dead = loadImage('Images/dead_dino.png');
    dinoImg = loadImage('Images/dino_normal.png');
    dino_leftImg = loadImage('Images/dino_leftfoot.png');
    dino_rightImg = loadImage('Images/dino_rightfoot.png');
    dino_leftdownImg = loadImage('Images/dino_downleft.png');
    dino_rightdownImg = loadImage('Images/dino_downright.png');
    dino_downImg = loadImage('Images/dino_down.png');
    cactusImg = loadImage('Images/cactus.png');
    cactusImg2 = loadImage('Images/cactus1.png');
    cactusImg3 = loadImage('Images/cactus2.png');
    cactusImg4 = loadImage('Images/cactus3.png');
    revcactusImg = loadImage('Images/cactus_flipped.png');
}

function setup() {
    cnv = createCanvas(1400,350);
    cnv.style('display', 'block');

    dino = new Dino();
    land = new Land();
}

function draw() {
    scale(0.5);

    cnv.position(1200/4, 100,'fixed');

    background(256);
    land.show();
    land.move();

    dino.show();
    dino.move();
}
