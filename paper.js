class Paper {
    constructor(x, y,d) {
      var options = {
          'restitution':0.4,
          'friction':0.5,
          'density':1.2,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y,d, options);
      this.image = loadImage("paper.png");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0);
      pop();
    }
  }
  