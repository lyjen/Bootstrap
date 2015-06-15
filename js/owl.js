$(document).ready(function() {
	$("#carousel_thumb").owlCarousel({

	autoPlay: 3000,
	navigation: 'true',
	navigationText: [
	"<i class='icon-chevron-left icon-white'><</i>",
	"<i class='icon-chevron-right icon-white'>></i>"
	],
	items : 4,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3]

	});

});