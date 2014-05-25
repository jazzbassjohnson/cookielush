$(document).ready(function(){
	  $('.img-holder').imageScroll();
	  $('#cookieImage').on("click", function(){
	  	$('#cookieImage').animate({width: "25px",
	  		height: "25px",
	  		top:"0px",
	  		left: "0px",
	  		margin: "20px",
	  		position: "none",
	  	}, 2000);
	  	$('#cookieImage p').hide();

	  });
});