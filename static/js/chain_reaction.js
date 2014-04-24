$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

  // Run an interation of the game
  var numballs = 10;
  var balls = [];
  var reacting = false;
  var numReacted = 0
  
  for (var i = 0; i < numballs; i++) {
        var b0 = {
        x:canvas.width * Math.random(),
        y:canvas.height * Math.random(),
        radius:15,
        vx:3 * Math.random(),
        vy:3 * Math.random()
      };
      balls.push(b0);
  };

  var reactions = [];

  var updateGame = function() {
    // PUT STUFF HERE

  
  for (var i = 0; i < balls.length; i++) {
    var collided = false;
      for (var j = 0; j < reactions.length; j++) {
          var xdiff = balls[i].x - reactions[j].x;
          var ydiff = balls[i].y - reactions[j].y;
          var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
          if (dist < 45) {
            collided = true;
          } 
        };
        if (collided === true) {
          var newReaction = {
            x:balls[i].x, 
            y:balls[i].y, 
            radius:1,
            timer:0
          };
          reactions.push(newReaction);
          balls.splice(i, 1);
          i--;
          numReacted++;
        }  
    };


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
    reactions[i].timer++;
    if (reactions[i].timer > 200) {
      reactions[i].radius--;
    }
    else if (reactions[i].radius < 30) {
      reactions[i].radius++;
    }
    if (reactions[i].radius === 0) {
      reactions.splice(i, 1);
      i--;
    }
  };

  for (var i = 0; i < reactions.length; i++) {
    context.fillStyle= 'DeepSkyBlue';
    context.beginPath();
    context.arc(reactions[i].x, reactions[i].y, reactions[i].radius, 0, 2*Math.PI);
    context.fill();
  };
  context.fillText("Reactions:" + numReacted, 10, 10);
  requestAnimationFrame(updateGame);

};

  // Handle a canvas click event
    $('#game_canvas').click(function(e) {
      if (reacting === false) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    reacting = true;
    var xe = e.pageX - $(this).offset().left;
    var ye = e.pageY - $(this).offset().top;
    // PUT STUFF HERE

    var r1 = {
      x:xe, 
      y:ye, 
      radius:1,
      timer:0
    }
    reactions.push(r1);
  }
}); 
    
    /*$('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var reacting = true;
    var xe = e.pageX - $(this).offset().left;
    var ye = e.pageY - $(this).offset().top;
    // PUT STUFF HERE

    var r1 = {
      x:xe, 
      y:ye, 
      radius:1,
      timer:0
    };
    
    reactions.push(r1);
    });*/

  updateGame();
});
