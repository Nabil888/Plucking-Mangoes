class Mango{
    constructor(x,y,width,height){
        var options = {
            'isStatic': true,
            'restitution': 0.4,
            'density': 0.8,
            'friction': 0.6
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.mango = loadImage("sprites/mango.png");
        this.width = width;
        this.height = height;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.mango,0,0,this.width,this.height);
        pop();
    }
}