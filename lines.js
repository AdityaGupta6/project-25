class Line{

    constructor(x,y,width,height){
    var options={
    restitution:0.8,
  isStatic:true
    
    
    }
    
        this.object=Bodies.rectangle(x,y,width ,height,options);
      
    this.width=width;
    this.height=height;
     World.add(world,this.object);
     this.image=loadImage("dustbin.png      ")
    }
     display(){
         var pos=this.object.position
  
    imageMode(CENTER);
// fill("red")
    image(this.image,pos.x,pos.y,this.width,this.height);
  
     }
     
    
    } 