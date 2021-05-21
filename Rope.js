class Rope {
    constructor(bodyA,pointB){
        var opt = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 2,
            length : 300
        }
        this.pintB = pointB;
        
        this.sling = Constraint.create(opt);

        World.add(myWorld,this.sling);

    }

    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;

            push();
            strokeWeight(5);
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        
    }



}

