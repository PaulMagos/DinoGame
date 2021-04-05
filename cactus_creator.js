class Cactus{
    constructor(){
        this.dim = 100;
        this.x = width-this.dim*10;
        this.y = height - this.dim;
    }

    move(){
        /*this.x -=8 ;
        if(this.x <  0) this.x = width;*/
    }

    show(){
        strokeWeight(0);
        fill(100,100,100)

        rect(this.x, this.y-this.dim*10, this.dim*1.3, this.dim*10.5, 5, 5, 0, 0);

        rect(this.x-this.dim*2, this.y-this.dim*8, this.dim, this.dim*3, 5,5,0,0);
        rect(this.x+this.dim*2.3, this.y-this.dim*8.5, this.dim, this.dim*3, 5,5,0,0);


        rect(this.x-this.dim*2, this.y-this.dim*5.5, this.dim*2, this.dim*0.8, 0,0,0,5);
        rect(this.x+this.dim*1.3, this.y-this.dim*6, this.dim*2, this.dim*0.8, 0,0,5,0);
    }
}
