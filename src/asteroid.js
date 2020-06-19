let Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");

function Asteroid(i_pos, i_game) {
    this.COLOR = "red";
    this.RADIUS = 30;
    MovingObject.call(this, {pos: i_pos, vel: Util.randomVec(Math.random() * 20), radius: this.RADIUS, color: this.COLOR, game: i_game});
}
Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject) {
    if(otherObject instanceof Ship) {
        otherObject.relocate();
    }
    if(otherObject instanceof Bullet) {
        this.game.remove(this);
        this.game.remove(otherObject);
    }
}

module.exports = Asteroid;
