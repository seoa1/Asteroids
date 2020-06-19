
function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
}
MovingObject.prototype.move = function() {
    this.pos = this.game.wrap([this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]], this.radius);
}
MovingObject.prototype.isCollidedWith = function(otherObject) {
    let a = Math.abs(this.pos[0] - otherObject.pos[0]);
    let b = Math.abs(this.pos[1] - otherObject.pos[1]);
    return Math.sqrt(a**2 + b**2) < this.radius + otherObject.radius;
}

MovingObject.prototype.collideWith = function(otherObject) {
}

module.exports = MovingObject;