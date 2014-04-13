$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

  // Run an interation of the game
  var numballs = [10];
  var balls = [];
  
  for (var i = 0; i < numballs; i++) {
        var b0 = {
        x:canvas.width * Math.random(),
        y:canvas.height * Math.random(),
        radius:15,
        vx:5 * Math.random(),
        vy:5 * Math.random()
      };
      balls.push(b0);
  };

  var reactions = [];

  var updateGame = function() {
    // PUT STUFF HERE

  context.fillStyle='white';
  context.fillRect(0, 0, 800, 600);


    for (var i = 0; i < balls.length; i++) {

      balls[i].x = balls[i].x + balls[i].vx;
      balls[i].y = balls[i].y + balls[i].vy;

      if (balls[i].x <= 15) {
      balls[i].vx = -balls[i].vx;
    };

    if (balls[i].x >= canvas.width - 15) {
      balls[i].vx = -balls[i].vx;
    };

    if (balls[i].y <= 15) {
      balls[i].vy = -balls[i].vy;
    };

    if (balls[i].y >= canvas.height -15) {
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

  for (var i = 0; i < reactions.length; i++) {
    context.fillStyle='blue';
    context.beginPath();
    context.arc(reactions[i].x, reactions[i].y, reactions[i].radius, 0, 2*Math.PI);
    context.fill();
  };

  requestAnimationFrame(updateGame);

};

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var xe = e.pageX - $(this).offset().left;
    var ye = e.pageY - $(this).offset().top;
    // PUT STUFF HERE

    var r1 = {
      x:xe, 
      y:ye, 
      radius:30
    };
    
    reactions.push(r1);
        /*var b1 = {
        x:xe,
        y:ye,
        radius:20,
        vx:5 * Math.random(),
        vy:5 * Math.random()
      };
      balls.push(b1);*/
  });

  updateGame();
});
