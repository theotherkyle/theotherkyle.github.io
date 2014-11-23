

$(function() {
    // When the document is loaded...
    $(document).ready(function()
    {

console.log("ready 010");
        // Scroll the whole document
 
       // Scroll the whole document
        $('#box-links').localScroll({
           target:'body'
        });
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

(function(){
    var THROTTLE = 100,//ms
        _timer = 0,
        _dom = document.documentElement,
        _width = _dom.style.width,
        reset = function(){
            // reset size, unfortunately forces another reflow
            _dom.style.width = _width;
        },
        forceReflow = function(){
            if (_timer) {
                clearTimeout(_timer);
                _timer = 0;
            }
 
            _width = _dom.style.width;
 
            // force a reflow by increasing size 1px
            _dom.style.width = (_dom.offsetWidth+1)+'px';
 
            setTimeout(reset, 0);
        },
        onscroll = function() {
            if (_timer) {
                clearTimeout(_timer);
            }
            _timer = setTimeout(forceReflow, THROTTLE);
        };
 
    window.addEventListener('scroll', onscroll, false);
})();
