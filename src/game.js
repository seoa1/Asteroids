const Asteroid = require("./asteroid.js");
function Game() {
    this.DIM_X = document.getElementById("game-canvas").width;
    this.DIM_Y = document.getElementById("game-canvas").height;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid([Math.random() * this.DIM_X, Math.random() * this.DIM_Y]));
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

module.exports = Game;