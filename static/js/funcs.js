$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle=color
    context.strokeRect(x, y, sideLen, sideLen);
    context.stroke();

    // Write square drawing code here
    // Delete the alerts when done
  };

  var drawCircle = function(x, y, radius, color) {
    context.strokeStyle=color
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI)
    context.stroke();
    // Write circle drawing code here
    // Delete the alert when done
  };

  // Write drawTriplet function here
  var drawTriplet = function(x, y, color) {
    drawCircle(x, y, 50, color)
    drawCircle(x+40, y+45, 50, color)
    drawCircle(x-40, y+45, 50, color)
  };

  /*var drawTriangle = function(x, y, sideLen, color) {
    context.strokeStyle=color
    context.beginPath();
    context.moveTo(x, y)
    context.lineTo(x+sidelen/2, y+math.sqrt(3*sideLen)/2


    context.closePath();
    context.stroke();
  }*/


  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  //---------------------------------------------------------------------------
  $('#p5').click(function() {
    drawSquare(150, 150, 100, 'red');
    drawCircle(200, 200, 50, 'blue');
    drawCircle(150, 200, 50, 'green');
    drawCircle(250, 200, 50, 'green');
    drawCircle(200, 150, 50, 'green');
    drawCircle(200, 250, 50, 'green');
  });

   $('#p6').click(function() {
    drawTriplet(100, 100, 'green')
  });

   $('#p7').click(function() {
    drawTriplet(250, 250, 'blue')
  });

   $('#p8').click(function() {
    drawTriplet(100, 100, 'blue')
    drawTriplet(100, 300, 'green')
    drawTriplet(300, 100, 'red')
    drawTriplet(300, 300, 'pink')
  });

  //Write your code for p5-p11 here
  //

});
