// Problem 2 (Peekaboo) ------------------------------------------------------
// WRITE CODE HERE

$('#toggle_img').click(function() {
	if ($('#toggle_img').text()==='Go Away!') {
		$('#main_img').hide();
  		$('#toggle_img').text('Come back!');
    // Execute this code if condition is true
	} else {
    // Execute this code if condition is false
  //WRITE CODE HERE
  		$('#main_img').show();
  		$('#toggle_img').text('Go Away!');
  	}
});

// Problem 3 (Swap Em) -----------------------------------------------
// WRITE CODE HERE

/*$('#change_img').click(function() {
  alert('/static/img/'+ $('#new_img_file').val());
});*/

$('#change_img').click(function() {
	$('#main_img').attr('src', '/static/img/'+ $('#new_img_file').val());
});


// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
  // WRITE CODE HERE
  $(this).attr('width', '200px');
  	alert($(this).attr('src'));
});

// Problem 5 (Imgrr) -------------------------------------------------
// WRITE CODE HERE

$('.clickable1').click(function() {
  $('#big_img').attr('src', '/static/img/gorilla.jpg');
});

$('.clickable2').click(function() {
  $('#big_img').attr('src', '/static/img/giraffe.jpg');
});

$('.clickable3').click(function() {
  $('#big_img').attr('src', '/static/img/red_panda.jpg');
});


