gravity = 1.8;
var current_img;
start = false;
stop = false;

class Dino{
    constructor() {
        this.dim = 150;
        this.x = 0 ;
        this.y = height - this.dim;
        this.velocityX = 0;

        this.down = false;

        this.Switch = false;
        this.delay = 0;
    }

    jump() {
        if(this.y == height - this.dim && !this.stop){
            if(start) this.velocityX = -25;
        }
        if(!start) {
            start = true;
        }
    }

    downFunc(){
        this.down = true;
        this.velocityX += 3;
    }

    move() {
        if(start) score += 0.25;
        if(this.x != 50 && start) this.x+=1;
        this.y += this.velocityX;
        this.velocityX  += gravity;
        this.y = constrain(this.y, 0, height - this.dim);
    }

    hits(cactus){
        let x1 = this.x + this.dim * 0.5;
        let y1 = this.y + this.dim * 0.5;
        let x2 = cactus.x + cactus.h * 0.5;
        let y2 = cactus.y + cactus.h * 0.5;
        return collideCircleCircle(x1, y1, this.dim-this.dim/1.5, x2, y2, cactus.h);
    }

    show() {
        if((keyIsDown(32) || keyIsDown(UP_ARROW)) && !keyIsDown(DOWN_ARROW)){
            dino.jump();
        }
        if(start){
            if(keyIsDown(DOWN_ARROW)&& !(keyIsDown(32) || keyIsDown(UP_ARROW)) ) {
                this.downFunc();
            }
            else {
                    if(!keyIsDown(DOWN_ARROW)) {
                        this.down = false;
                    }else{
                        if(this.y == height-this.dim) this.down = true
                        this.velocityX +=3;
                    }
            }
        }

        // it's started, it'on the bottom and it's not dead
        if(start && this.y == height - this.dim && !stop){
            // Foot switch
            current_img = (!this.down)? ((this.Switch)? dino_leftImg : dino_rightImg) : ((this.Switch)? dino_leftdownImg:dino_rightdownImg);
            // Foot switch delay
            if(this.delay == 5) {
                this.Switch = !this.Switch;
                this.delay = 0;
            }else this.delay += 1;
        }else {
            // it's dead
            if(start && stop) current_img = dino_dead;
            // simply the game is opened
            else current_img = dinoImg;

            if(this.down)
                current_img = dino_downImg;
        }

        fill(255,255,255);
        image(current_img, this.x, this.y, this.dim ,this.dim);

    }
}
