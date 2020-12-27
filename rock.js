class Rock{
    constructor(x,y){
        var options= {
            'isStatic': false,
            'restitution': 0.1,
            'friction': 0,
            'density': 1
            
            
        }
        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world,this.body);
        this.rock = loadImage("sprites/stone.png");
    }
    display(){
        push();
        
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.rock,this.body.position.x,this.body.position.y,40,40);
        pop();
    }
}