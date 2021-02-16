class Ball {
    constructor (x,y){
var option = {
    restitution:1,
    friction:0,
    density:8,
    isStatic:false
}
this.body=Bodies.circle(x,y,25,option);
World.add(world,this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill ("silver");
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop();
    }
}