$(function(){
	$('#menu').slicknav({
		'label' : 'Menu',
		appendTo: '#nav',
		'beforeOpen': function(trigger){ darkenPage() },
		'beforeClose': function(trigger){ unDarkenPage() }
	});
});

function darkenPage() {
	$('.pageOverlay').addClass('visible');
	$('.slicknav_menutxt').html('Close');
}

function unDarkenPage() {
	$('.pageOverlay').removeClass('visible');
	$('.slicknav_menutxt').html('Menu');
}