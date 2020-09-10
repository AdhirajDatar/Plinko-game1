class PARTICLES {
    constructor(x,y,r){
        var options= {
            isStatic:false,
            RESTITUTION :0.4
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
        ellipseMode(RADIUS);
        noStroke();
        fill(this.colour);
        ellipse(0,0,this.r*2,this.r*2);
        pop();
    }
}