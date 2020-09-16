class Stone{
    constructor(x,y,width,height){
        var opinions={
            isStatic:false,
            restitution:0,
            density:1.2,
            friction:1,
        }
        this.body=Bodies.rectangle(x,y,width,height,opinions);
        this.width=width;
        this.height=height;
        this.image=loadImage("Stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
    }