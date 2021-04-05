let dino;
let cactus;
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


function preload(){
    dino_dead = loadImage('Images/dead_dino.png');
    dinoImg = loadImage('Images/svg/dino_normal.svg');
    dino_leftImg = loadImage('Images/svg/dino_leftfoot.svg');
    dino_rightImg = loadImage('Images/svg/dino_rightfoot.svg');
    dino_leftdownImg = loadImage('Images/svg/dino_downleft.svg');
    dino_rightdownImg = loadImage('Images/svg/dino_downright.svg');
    dino_downImg = loadImage('Images/svg/dino_down.svg');
    cactusImg = loadImage('Images/cactus.png');
    cactusImg2 = loadImage('Images/cactus1.png');
    cactusImg3 = loadImage('Images/cactus2.png');
    cactusImg4 = loadImage('Images/cactus3.png');
    revcactusImg = loadImage('Images/cactus_flipped.png');
}

function setup() {
    createCanvas(800,450);
    dino = new Dino();
    cactus = new Cactus();
    land = new Land();
}

function draw() {
    background(256);
    cactus.show();
    cactus.move();
    land.show();
    land.move();

    dino.show();
    dino.move();
}
