
$(function() {
console.log("scrolled 009");

$.scrollTo('#events',{
					duration: 1000,
					offset: { 'left':0, 'top':-0.12*$(window).height() }
				});
});
$(function() {

$("#nav ul li a").click( function(event) {

console.log("scrolled click 009");
	console.log($(this).attr("href")); 
	$.scrollTo($(this).attr("href"),{
					duration: 1000,
					offset: { 'left':0, 'top':-0.12*$(window).height() }
				});
	console.log("scrolled  009");
	//event.preventDefault();

});

});