const GameView = require("./game_view.js");

window.GameView = GameView;
window.addEventListener('DOMContentLoaded', (event) => {
    let ctx = document.getElementById("game-canvas").getContext('2d');
    let game_view = new GameView(ctx);
    game_view.start();
})