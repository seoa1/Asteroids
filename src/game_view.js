const Game = require("./game.js");

function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function() {
    this.bindKeyHandlers();
    window.setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx);
    }, 20);
}

GameView.prototype.bindKeyHandlers = function() {
    key('left', () => {this.game.ship.power([-3,0])});
    key('right', () => {this.game.ship.power([3,0])});
    key('up', () => {this.game.ship.power([0, -3])});
    key('down', () => {this.game.ship.power([0,3])});
    key('space', () => {this.game.ship.fireBullet()});
}

module.exports = GameView;