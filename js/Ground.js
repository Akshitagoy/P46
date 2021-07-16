class Ground{
    constructor(x,y) {
      var options = {
          isStatic: true,
          'restitution':0.8,
            'friction':1.0,
            'density':1.0
      }
      this.body = Bodies.rectangle(x,y,options);
      this.image = loadImage("images/earth.jpeg");
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      
    image(this.image,pos.x, pos.y);
    }
  };