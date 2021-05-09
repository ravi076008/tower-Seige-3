class SlingShot{
    constructor(Body1,point2){
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        var options= {
          bodyA:Body1 ,
          pointB:point2,
          stiffness:0.5,
          length:10
          


        }


        
this.chain=Matter.Constraint.create(options);
World.add(world,this.chain)

    }
    fly(){
  this.chain.bodyA=null;
}

attach(body){
    this.chain.bodyA=body;


}

display(){
    if(this.chain.bodyA!=null){
    var pos=this.chain.bodyA.position
    var pos2=this.chain.pointB
    strokeWeight(5);
    stroke(51, 23, 2);
    if(pos.x<247){
    line(pos.x-25,pos.y+5,pos2.x+20,pos2.y-50);
    line(pos.x-25,pos.y+5,pos2.x+65,pos2.y-50);
    
    image(this.sling3,pos.x-30,pos.y,15);
   

    }
else {

    line(pos.x+25,pos.y+5,pos2.x+20,pos2.y-50);
    line(pos.x+25,pos.y+5,pos2.x+65,pos2.y-50);
    image(this.sling3,pos.x+30,pos.y,15);

}
    image(this.sling1,247,20);
    image(this.sling2,220,20);

}
}
}


