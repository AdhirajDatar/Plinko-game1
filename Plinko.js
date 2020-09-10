class PLINKO {
    constructor(x,y){
        var options= {
            isStatic:true,
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;  
        World.add(world,this.body);  
    }
    display (){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x,pos.y,this.radius*2,this.radius*2);
    }
}