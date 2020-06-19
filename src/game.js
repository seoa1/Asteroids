const Asteroid = require("./asteroid.js");
function Game() {
    this.DIM_X = document.getElementById("game-canvas").width;
    this.DIM_Y = document.getElementById("game-canvas").height;
    this.NUM_ASTEROIDS = 5;
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid([Math.random() * this.DIM_X, Math.random() * this.DIM_Y], this));
    }
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0,this.DIM_X, this.DIM_Y);
    this.asteroids.forEach( (asteroid) => {
        asteroid.draw(ctx);
    })
}

Game.prototype.moveObjects = function()  {
    this.asteroids.forEach( (asteroid) => {
        asteroid.move();
    })
}

Game.prototype.wrap = function(pos, radius) {
    if(pos[0] > this.DIM_X + radius - 1) {
        return [-1 * radius, pos[1]];
    }
    if(pos[0] < -1 * radius) {
        return [this.DIM_X + radius - 1, pos[1]];
    }
    if(pos[1] > this.DIM_Y + radius - 1) {
        return [pos[0], -1 * radius];
    }
    if(pos[1] < -1 * radius) {
        return [pos[0], this.DIM_Y + radius - 1];
    }
    return pos;
}

Game.prototype.checkCollisions = function() {
    for(let i = 0; i < this.asteroids.length; i++) {
        for(let j = i + 1; j < this.asteroids.length; j++) {
            if(this.asteroids[i].isCollidedWith(this.asteroids[j])) {
                this.asteroids[i].collideWith(this.asteroids[j]);
            }
        }
    }
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
    this.asteroids = this.asteroids.filter((ele) => {return asteroid != ele});
}

module.exports = Game;