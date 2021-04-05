let cactuses = [];
let velocity = 8;
let currentCactus;
class Cactus{
    constructor(){
        this.w = 70;
        this.h = 100;
        this.x = width;
        this.y = height - this.h;
    }

    move(){
        if(start){
            this.x -= 8;
            score+=0.25;
            if(this.x <   -20) {
                this.x = width;
                velocity+=0.1;
            }
        }
    }

    show(){
        if(start){
            if(random(1)<0.1 && cactuses.length<4){
                let yA = floor(random(5));
                if(cactuses.length>=1){
                    if(width-cactuses[cactuses.length-1].x < width/2){
                        if(random(1)<0.1){
                            cactuses.push(new p5.Vector(0, yA));
                        }
                    }
                }else {
                    if(random(1)<0.1){
                        cactuses.push(new p5.Vector(0, yA));
                    }
                }
            }


            for(let i=0; i<cactuses.length; i++){
                console.log(cactuses[i].y);
                switch (cactuses[i].y) {
                    case 0:
                        currentCactus = cactusImg;
                        break;
                    case 1:
                        currentCactus = cactusImg2;
                        break;
                    case 2:
                        currentCactus = cactusImg3;
                        break;
                    case 3:
                        currentCactus = cactusImg4;
                        break;
                    case 4:
                        currentCactus = revcactusImg;
                        break;
                }
                image(currentCactus, width-cactuses[i].x, this.y, this.w*(cactuses[i].y==0 || cactuses[i].y == 4? 1:1.6), this.h);
                cactuses[i].x+=1+velocity;
                if(width-cactuses[i].x < -20) cactuses.splice(i, 1);
            }

            fill(256);
            //image(cactusImg, this.x+45, this.y-10, this.w*0.8, this.h*0.8);
        }

    }
}
