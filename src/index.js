const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;
window.addEventListener('DOMContentLoaded', (event) => {
    let ctx = document.getElementById("game-canvas").getContext('2d');
    let obj = new MovingObject({
        pos: [200, 200],
        vel: [10, 10],
        radius: 100,
        color: "#00FF00"
    });
    obj.draw(ctx);

    let asteroid = new Asteroid([400,400]);
    asteroid.draw(ctx);
})