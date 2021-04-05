gravity = 1.8;
var current_img;
start = false;
stop = false;

class Dino{
    constructor() {
        this.dim = 150;
        this.x = 50 ;
        this.y = height - this.dim;
        this.velocityX = 0;

        this.down = false;

        this.Switch = false;
        this.delay = 0;
    }

    jump() {
        if(!start) start = true;
        if(this.y == height - this.dim && !this.stop){
            this.velocityX = -25;
        }
    }

    downFunc(){
        this.down = true;
        this.velocityX += 3;
    }

    move() {
        this.y += this.velocityX;
        this.velocityX  += gravity;
        this.y = constrain(this.y, 0, height - this.dim);
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
