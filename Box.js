class Box{
    constructor(x,y){
        var abc = {
            restitution : 0.5,
            friction :2
        }
        this.body = Bodies.rectangle(x,y,70,70,abc); 
        this.width = 70;
        this.height = 70;
        World.add(myWorld,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        stroke("green");
        strokeWeight(3);
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}