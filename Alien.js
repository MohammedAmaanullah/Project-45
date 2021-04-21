class Alien{
    constructor(x,y,width,height){
        var options = {
            densdity : 1.0
        }
        this.alien = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("Yoda image.png");
        this.width = width;
        this.height = height;
        
        World.add(world,this.alien);
    }
    display(){
        var position = this.alien.position;
        push();
        translate(position.x, posiiton.y);
        imageMode(CENTER);
        image(image,0,0,this.width,this.height);
        pop();
    }
}