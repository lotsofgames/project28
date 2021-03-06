class Stone {
    constructor(x, y, radius) {
        var options = {
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("stone.png");

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius*3, this.radius*3);
    }
}
