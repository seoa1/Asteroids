const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");

function Game() {
    this.DIM_X = document.getElementById("game-canvas").width;
    this.DIM_Y = document.getElementById("game-canvas").height;
    this.NUM_ASTEROIDS = 5;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship(this.randomPosition(), this);
    this.bullets = [];
}

Game.prototype.randomPosition = function() {
    return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
}

Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.bullets.concat([this.ship]));
}

Game.prototype.addAsteroids = function() {
    for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid(this.randomPosition(), this));
    }
}

Game.prototype.addBullet = function(bullet) {
    this.bullets.push(bullet);
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0,this.DIM_X, this.DIM_Y);
    this.allObjects().forEach( (ele) => {
        ele.draw(ctx);
    })
}

Game.prototype.moveObjects = function()  {
    this.allObjects().forEach( (ele) => {
        ele.move();
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
    let all_objects = this.allObjects();
    for(let i = 0; i < all_objects.length; i++) {
        for(let j = i + 1; j < all_objects.length; j++) {
            if(all_objects[i].isCollidedWith(all_objects[j])) {
                all_objects[i].collideWith(all_objects[j]);
            }
        }
    }
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(obj) {
    if(obj instanceof Asteroid) {
        this.asteroids = this.asteroids.filter((ele) => {return obj != ele});
    }
    if(obj instanceof Bullet) {
        this.bullets = this.bullets.filter((ele) => {return obj != ele})
    }
}

module.exports = Game;