class Block {
    constructor (x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,50,80,options);
        World.add(world, this.body);
        this.width = 50;
        this.height = 80;
    }
    display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            fill("yellow")
            rect(0, 0, this.width, this.height);
            pop();
            }
    } 