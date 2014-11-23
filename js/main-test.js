
$(function() {
console.log("scrolled 009");

$.scrollTo('#events',{
					duration: 1000,
					offset: { 'left':0, 'top':-0.12*$(window).height() }
				});

});
