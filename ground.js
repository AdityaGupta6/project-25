class Ground{

    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
    this.object=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.object)
    this.image=loadImage("ground.png")
    }
    display(){
    imageMode(CENTER)
    fill ("yellow")
    image(this.image,this.object.position.x,this.object.position.y,this.width,this.height)
    
    }
    }   