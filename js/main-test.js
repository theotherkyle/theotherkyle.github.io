

$(function() {
    // When the document is loaded...
    $(document).ready(function()
    {

console.log("ready 010");
        // Scroll the whole document
 
 
        // Scroll the content inside the #scroll-container div
        $('#small-box-links').localScroll({
           target:'#small-box-container'
        });
 
    });


/*
$.scrollTo('#events',{
					duration: 1000,
					offset: { 'left':0, 'top':-0.12*$(window).height() },

				});
*/
//$.scrollTo( '#events', 1000, {axis:'y'} );

console.log("scrolled 010");
});
/*
$(function() {

$("#nav ul li a").click( function(event) {

console.log("scrolled click 010");
	console.log($(this).attr("href")); 
	$.scrollTo($(this).attr("href"),{
					duration: 1000,
					//offset: { 'left':0, 'top':-0.12*$(window).height() },
				},{axis:'y'});
	console.log("scrolled  010");
	event.preventDefault();

});

});
*/
