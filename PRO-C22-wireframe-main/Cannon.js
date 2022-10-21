class Cannon{
    constructor(x, y, w, h, angle){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.angle = angle
        this.cannonImg = loadImage("./assets/cannon.png")
        this.cannonBaseImg = loadImage("./assets/cannonBase.png")
    }
    display(){
        push()
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.cannonImg, 0, 0, this.w, this.h)
        pop()
        image(this.cannonBaseImg, 70, 20, 200, 200)
        noFill()

    }

}