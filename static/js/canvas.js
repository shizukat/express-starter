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

});
