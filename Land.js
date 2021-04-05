let dunes = [];
let index = 0;
class Land{
    constructor(){
        this.x = width;
        this.y = height-33;
        this.dune = this.x/2;
    }

    move(){
        this.dune -= 8;
        if(this.dune < 0) {
            this.dune = width;
        }
    }

    show(){
        

        if(start){
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
                dunes[i].x += 8;
                if((this.x-dunes[i].x)<0) dunes.splice(i, 1);
            }
        }

        textSize(32);
        fill(0, 102, 153);
        text(floor(score), width-100 , 50  );
    }
}
