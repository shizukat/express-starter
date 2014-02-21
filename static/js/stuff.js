alert('Welcome to my stuff page! How are you doing?'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('Well Hello there World!')
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  //WRITE CODE HERE
  $('#houdini_text').hide();
});

$('#reappear').click(function() {
  //WRITE CODE HERE
  $('#houdini_text').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
// WRITE CODE HERE
$('#ticklepink').click(function() {
  $('#tickled_pinktext').css('color', 'pink');
});

$('#tickleblack').click(function() {
  $('#tickled_pinktext').css('color', 'black');
});
// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
