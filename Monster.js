class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0.02
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.Visiblity = 255
		this.image=loadImage("monster1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	
	display(){
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y + 35);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			if(this.body.speed >= 8){
				this.body.position.x = 10000	
			}
			pop()	
	}
}