class Ground{
    constructor(){
        var options = {
            isStatic: true,
            'friction': 0.2,
            'density':1
        }
        this.body = Bodies.rectangle(475,650,950,200,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("green");
        stroke("green");
        rect(475,650,950,200);
    }
}