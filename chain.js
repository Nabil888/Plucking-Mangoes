class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            
            
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }
    attach(body){
        this.chain.bodyA = body;
    }
    display(){
        
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
        stroke("brown");
        strokeWeight(4);
        line(pointA.x,pointA.y,this.pointB.x,this.pointB.y);
        };
    }
}