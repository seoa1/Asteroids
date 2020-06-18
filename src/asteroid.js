let Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Asteroid(i_pos) {
    this.COLOR = "red";
    this.RADIUS = 30;
    MovingObject.call(this, {pos: i_pos, vel: Util.randomVec(Math.random() * 20), radius: this.RADIUS, color: this.COLOR});
}
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;