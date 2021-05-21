class Ball{
    constructor(x,y){
        var abcd = {
            restitution : 0.5,
            density :2
        }
        this.body = Bodies.circle(x,y,50,abcd); 
        this.radius = 50;
        World.add(myWorld,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("darkred");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}