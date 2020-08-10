class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }

        this.pointB = pointB

       // this.boy.addImage(boy_img);
        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }

    attach(body){
        this.rope.bodyA = body;
    }

   // fly(){

     //   this.rope.bodyA=null;    
      //}
      

    display(){
      
       // image(this.bobObject1,60,10);
      
        if(this.rope.bodyA){ 
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       
       
      }
    }

    
}