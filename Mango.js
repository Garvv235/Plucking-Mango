class Mango{
	constructor(x,y,r){	
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("images/421f3c0f2cf7774b5425909b2c6708c6.jpg");
		this.body=Bodies.circle(x, y, this.r, options);
		World.add(world, this.body);
	}

	display()
	{
		push()
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}