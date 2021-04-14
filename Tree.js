class Tree{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.tree = Bodies.rectangle(x,y,options);
        this.image = loadImage("images/Cartoon-Kid-PNG-Transparent-Cartoon-Kid.PNG-Images.-PlusPNG.jpg")
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}