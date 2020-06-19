const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Bullet = require("./bullet.js");

function Ship(i_pos, i_game) {
    this.RADIUS = 20;
    this.COLOR = "blue";
    MovingObject.call(this, {pos: i_pos, vel: [0,0], radius: this.RADIUS, color: this.COLOR, game: i_game});
}
Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
}

Ship.prototype.power = function(impulse) {
    this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
}

Ship.prototype.fireBullet = function() {
    if(Math.abs(this.vel[0]) > 0 || Math.abs(this.vel[1]) > 0) {
        let new_bullet = new Bullet(this.pos, this.game, [this.vel[0] * 4, this.vel[1] * 4]);
        this.game.addBullet(new_bullet);
    }
}

module.exports = Ship;