$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

  // Run an interation of the game
  var balls = [];
  
  var b0 = {
    x:40,
    y:40,
    radius:20,
    vx:5,
    vy:5
  };

  var b1 = {
    x:100,
    y:100,
    radius:20,
    vx:5,
    vy:5
  };

  var b2 = {
    x:200,
    y:200,
    radius:20,
    vx:5,
    vy:5
  };

  balls.push(b0);
  balls.push(b1);
  balls.push(b2);

  var updateGame = function() {
    // PUT STUFF HERE

  context.fillStyle='white';
  context.fillRect(0, 0, 800, 600);


    for (var i = 0; i < balls.length; i++) {
      if (balls[i].x <= 20) {
      balls[i].vx = -balls[i].vx;
    };

    if (balls[i].x === canvas.width - 20) {
      balls[i].vx = -balls[i].vx;
    };

    if (balls[i].y <= 20) {
      balls[i].vy = -balls[i].vy;
    };

    if (balls[i].y === canvas.height -20) {
      balls[i].vy = -balls[i].vy;
    };  
  };

    for (var i = 0; i < balls.length; i++) {
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
    context.fillStyle='blue';
    context.beginPath();
    context.arc(balls[i].x, balls[i].y, balls[i].radius, 0, 2*Math.PI);
    context.fill();
  };

  setTimeout(updateGame,10)

};

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});
