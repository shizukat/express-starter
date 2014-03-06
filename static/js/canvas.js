$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //
  //p1//
  $('#p1').click(function() {
  	context.strokeRect(10, 10, 50, 80)
  });

  $('#p2').click(function() {
  	context.strokeRect(10, 10, 100, 100)
  });

  $('#p3').click(function() {
  	context.beginPath();
  	context.arc(100, 100, 100, 0, Math.PI/2)
  	context.stroke();
  });

  $('#p4').click(function() {
  	context.beginPath();
  	context.arc(100, 100, 100, 0, 2*Math.PI)
  	context.stroke();
  });

  $('#p5').click(function() {
  	context.beginPath();
  	context.moveTo(10, 10)
  	context.lineTo(200, 200)
  	context.closePath();
  	context.stroke();
  });

  $('#p6').click(function() {
  	context.strokeStyle='green'
  	context.strokeRect(10, 10, 50, 80)
  });

  $('#p7').click(function() {
  	context.strokeStyle='red'
  	context.fillStyle='red'
  	context.beginPath();
  	context.arc(100, 100, 100, 0, 2*Math.PI)
  	context.closePath();
  	context.fill();
  });

  $('#p8').click(function() {
  	context.strokeStyle='blue'
  	context.fillStyle='yellow'
  	context.strokeRect(10, 10, 200, 200)
  	context.fillRect(10, 10, 200, 200)
  });

  $('#p9').click(function() {
  	for (var i = 1; i <= 5; i++) {
        context.strokeRect(i*50, 100, 50, 50);
    }
  });

  $('#p10').click(function() {
  	for (var i = 0; i <= 99; i++) {
        context.strokeRect(i*5, 100, 5, 5);
    }
  });

  $('#p11').click(function() {
  	for (var x = 0; x <= 99; x++) {
  		for (var i = 0; i <= 99; i++){
  			context.strokeRect(x*5, i*5, 5, 5);
  		}
  	}
  	});

  $('#p12').click(function() {
  	for (var i = 0; i <= 19; i++) {
  		context.beginPath();
  		context.arc(100, 100, i*5, 0, 2*Math.PI);
  		context.stroke();
  		}
  	});

});
