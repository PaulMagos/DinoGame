class Cloud{
    constructor(){
        this.x = width;
        this.y = random(0, height/2);
        this.velocity = 0;
    }

    check(){
        if(this.x<-20) return true;
        else return false;
    }

    move(){
        if(start){
            this.x = this.x -= 4 + this.velocity;
            this.y = this.y + random(-1, 1);
            if((floor(score) % 100) == 0){
                this.velocity+=0.1;
            }
            if(this.x < -50){
                this.x = width;
            }
        }
    }

    show(){
        stroke(0);
        strokeWeight(0);
        fill(100);
        ellipse(this.x, this.y, 24, 24);
        ellipse(this.x+20, this.y, 20, 20);
        ellipse(this.x+10,this.y+10,24,24);
        ellipse(this.x+30,this.y+10,24,24);
        ellipse(this.x+30,this.y-10,24,24);
        ellipse(this.x+20,this.y-10,24,24);
        ellipse(this.x+40,this.y,24,24);
    }
}
