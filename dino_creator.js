 gravity = 2.5;

class Dino {
    constructor() {
        this.dim = 5;
        this.x = 50;
        this.y = height - this.dim;
        this.velocityX = 0;

        this.Switch = true;
        this.delay = 0;

        this.start = false;
        this.stop = false;
    }

    jump() {
        if(!this.start) this.start = true;
        if(this.y == height - this.dim){
            this.velocityX = -25;
        }
    }



    move() {
        this.y += this.velocityX;
        this.velocityX += gravity;
        this.y = constrain(this.y, 0, height - this.dim);
    }

    show() {

        strokeWeight(0);
        fill(100,100,100)
        // Body
        rect(this.x-this.dim, this.y-this.dim*4, this.dim*7, this.dim)
        rect(this.x-this.dim*2, this.y-this.dim*5, this.dim*9, this.dim)
        rect(this.x-this.dim*3, this.y-this.dim*6, this.dim*11, this.dim)
        rect(this.x-this.dim*4, this.y-this.dim*7, this.dim*13, this.dim/2)
        rect(this.x-this.dim*4, this.y-this.dim*7, this.dim*12, this.dim)
        rect(this.x-this.dim*5, this.y-this.dim*8, this.dim*14, this.dim)
        rect(this.x-this.dim*5, this.y-this.dim*9.5, this.dim*14, this.dim*1.5)
        rect(this.x-this.dim*5, this.y-this.dim*10.5, this.dim*3, this.dim*1.1)
        rect(this.x-this.dim*5, this.y-this.dim*11.5, this.dim*2, this.dim*1.1)
        rect(this.x-this.dim*5, this.y-this.dim*13.5, this.dim, this.dim*2.1, 5,5,0,0)
        rect(this.x, this.y-this.dim*10.5, this.dim*9, this.dim*1.1)


        rect(this.x+this.dim, this.y-this.dim*11.5, this.dim*8, this.dim*1.1)
        rect(this.x+this.dim*2.5, this.y-this.dim*12.5, this.dim*6.5, this.dim*1.1)
        rect(this.x+this.dim*4, this.y-this.dim*13.5, this.dim*5, this.dim*1.1)

        // Hands
        rect(this.x+this.dim*10, this.y-this.dim*11.5, this.dim, this.dim*2.1, 0,5,5,5)
        rect(this.x+this.dim*9, this.y-this.dim*11.5, this.dim, this.dim*0.7)

        // Head
        rect(this.x+this.dim*5, this.y-this.dim*14.5, this.dim*8, this.dim*1.1,0,5,5,0)
        rect(this.x+this.dim*5, this.y-this.dim*15.5, this.dim*5, this.dim*1.1)
        rect(this.x+this.dim*5, this.y-this.dim*16.5, this.dim*9.5, this.dim*1.1,0,0,5,0)
        rect(this.x+this.dim*5, this.y-this.dim*17.5, this.dim*9.5, this.dim*1.1)
        rect(this.x+this.dim*5, this.y-this.dim*18.5, this.dim*9.5, this.dim*1.1)
        rect(this.x+this.dim*5, this.y-this.dim*19.5, this.dim*2, this.dim*1.1)
        rect(this.x+this.dim*8, this.y-this.dim*19.5, this.dim*6.5, this.dim*1.1)
        rect(this.x+this.dim*6, this.y-this.dim*20.5, this.dim*7.5, this.dim*1.1)
        triangle(this.x+this.dim*5, this.y-this.dim*19.5, this.x+this.dim*6, this.y-this.dim*19.4, this.x+this.dim*6, this.y-this.dim*20.5)
        triangle(this.x+this.dim*14.5, this.y-this.dim*19.5, this.x+this.dim*13.5, this.y-this.dim*20.5, this.x+this.dim*13.4, this.y-this.dim*19.4)


        if(this.start){
            // Foot switch delay
            if(this.delay == 5) {
                this.Switch = !this.Switch;
                this.delay = 0;
            }else this.delay += 1;
        }
        // Left foot
        rect(this.x, this.y-this.dim*((3*(this.Switch||!this.start))||(4*(!this.Switch&&this.start))), this.dim*3, this.dim);
        rect(this.x, this.y-this.dim*((2*(this.Switch||!this.start))||(3*(!this.Switch&&this.start))), this.dim*2, this.dim);
        rect(this.x, this.y-this.dim*3, this.dim, this.dim*((3*(this.Switch||!this.start))||(2*(!this.Switch&&this.start))));
        rect(this.x, this.y-(this.dim*(!this.Switch&&this.start)), this.dim*2, this.dim, 0, 5, 5, 5);
        // Right foot
        rect(this.x+this.dim*5, this.y-(this.dim*2*(this.Switch&&this.start)), this.dim*2, this.dim, 0, 5, 5, 5);
        rect(this.x+this.dim*5, this.y-this.dim*3, this.dim, this.dim*((3*(!this.Switch||!this.start))||(1*(this.Switch&&this.start))));
        rect(this.x+this.dim*4, this.y-this.dim*((3*(!this.Switch||!this.start))||(5*(this.Switch&&this.start))), this.dim, this.dim);
    }
}
