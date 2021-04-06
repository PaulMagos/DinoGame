class Cactus{
    constructor(){
        this.num = floor(random(5));
        this.w = 70 * ((this.num==0 || this.num==4)? 1:1.6);
        this.h = 100;
        this.x = width;
        this.y = height - this.h;
        this.currentImg = getCactus(this.num);
    }

    move(){
        if(start){
            this.x -= 10 + allVelocity;
        }
    }

    endCanvas(){
        return this.x < -20;
    }

    show(){
        if(start){
            image(this.currentImg, this.x, this.y, this.w, this.h);
            fill(256);
        }
    }
}
function getCactus(j){
    switch (j) {
        case 0:
            return cactusImg;
        case 1:
            return cactusImg2;
        case 2:
            return cactusImg3;
        case 3:
            return cactusImg4;
        case 4:
            return revcactusImg;
    }
    return cactusImg;
}
