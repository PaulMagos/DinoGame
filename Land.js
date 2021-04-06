let dunes = [];
let bubbles = [];
let cactuses = [];
let index = 0;
let allVelocity = 0;

class Land{
    constructor(){
        this.x = width;
        this.y = height-33;
        this.dune = this.x/2;
        bubbles[0] = new Cloud();
    }

    move(){
        if(start){
        this.dune -= 8;
        if((floor(start) % 100) == 0){
            allVelocity += 0.1;
        }
        pushCactus();
        if(this.dune < 0) {
            if(bubbles.length<10) bubbles.push(new Cloud());

            this.dune = width;
        }}
    }

    show(){
        if(start){
            for(let i = 0; i<bubbles.length ; i++){
                bubbles[i].move();
                bubbles[i].show();
            }

            for(let cact_j of cactuses){
                cact_j.show();
                cact_j.move();
                if(cact_j.endCanvas()) {
                    cactuses.splice(cact_j, 1);
                }

                if(dino.hits(cact_j)){
                    console.log("stop")
                    stop = true;
                    noLoop();
                }
            }

            strokeWeight(0.5);
            line(0, this.y,this.dune-30 , this.y);
            line(this.x, this.y,this.dune, this.y);

            if(random(1) < 0.09) {
                let yAx = random([10, 12, 14, 16, 18, 20, 22, 24, 26]);
                let xAx = random([3, 4, 5, 6, 7, 8]);
                let z = xAx;
                dunes.push(new p5.Vector(xAx, yAx, z));
            }
            for(let i = 0; i<dunes.length; i++){
                line(this.x-dunes[i].x+dunes[i].z, this.y+dunes[i].y,this.x-dunes[i].x, this.y+dunes[i].y);
                dunes[i].x += 10 + allVelocity;
                if((this.x-dunes[i].x)<0) dunes.splice(i, 1);
            }
        }

        textSize(32);
        fill(0, 102, 153);
        text(floor(score), width-100 , 50  );
    }
}

function pushCactus(){
    if(random(1)<0.2 && cactuses.length<4){
        let num = floor(random(5));
        if(cactuses.length>=1){
            if(cactuses[cactuses.length-1].x < width/2){
                if(random(1)<0.1){
                    cactuses.push(new Cactus());
                }
            }
        }else {
            if(random(1)<0.1){
                cactuses.push(new Cactus());
            }
        }
    }
}
