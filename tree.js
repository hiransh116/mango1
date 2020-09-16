class Tree{
constructor(x,y,width,height){
    var opinions={
        isStatic:true,
    }
    this.body=Bodies.rectangle(x,y,width,height,opinions);
    this.width=width;
    this.height=height;
    this.image=loadImage("sprites/tree.png");
    
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
   // Fill("green");
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
}
}