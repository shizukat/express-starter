$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  //run an iteration of the game
  var ball = {
    x: 20,
    y: 20,
    radius: 20,
    vx: 5,
    vy: 5
  };

  /*var x = 20;
  var y = 20;*/ 

  var updateGame = function() {
    context.fillStyle='white';
    context.fillRect(0, 0, 800, 600);

    ball.x += ball.vx;
    ball.y += ball.vy; 
    context.strokeStyle='blue';
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI);
    context.stroke();
    setTimeout(updateGame, 10);

    if (ball.x <= 20) {
      ball.vx = -ball.vx;
    };

    if (ball.x === canvas.width - 20) {
      ball.vx = -ball.vx;
    };

    if (ball.y <= 20) {
      ball.vy = -ball.vy;
    };

    if (ball.y === canvas.height -20) {
      ball.vy = -ball.vy;
    };

};

  updateGame();

});
