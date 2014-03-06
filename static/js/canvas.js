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
});
