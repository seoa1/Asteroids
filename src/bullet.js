const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Bullet(i_pos, i_game, i_vel) {
    this.RADIUS = 4;
    this.COLOR = "green";
    MovingObject.call(this, {pos: i_pos, vel: i_vel, radius: this.RADIUS, color: this.COLOR, game: i_game});
}
Util.inherits(Bullet, MovingObject);

module.exports = Bullet;