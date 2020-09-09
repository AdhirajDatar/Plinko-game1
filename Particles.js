class PARTICLES {
    constructor(x,y,r){
        var options= {
            isStatic:false,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;  
        this.colour = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);  
    }
    display (){
        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        noStroke();
        fill(this.colour);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}