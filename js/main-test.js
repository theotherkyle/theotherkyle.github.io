$.fn.test = function(){
	if( location.search == '?notest' )
		return this;
	return this.scrollTo('max', 1000).scrollTo('#lastpart', 3000)
};

function assert( bool, message ){
	if( !bool ){
		alert('FAIL: ' + message);
		throw new Error();
	}
};

function f( name ){
	return $(name)[0];
}

function testScrollable(){
	
	$.each([ window, document, f('body'), f('html') ], function(i, elem){
		var s = $(elem)._scrollable();
		assert( s.length == 1, 'scrollable must always return exactly 1 element' );
		assert( s.is('html,body'), 'scrollable must either html or body for window scrolling' );
	});
		
	$('body :not(iframe)').each(function(){
		var s = $(this)._scrollable();
		assert( s.length == 1, 'scrollable must always return exactly 1 element' );
		assert( s[0] == this, 'scrollable must return the same element for normal element scrolling' );
	});
};

$(function(){
	if( location.search == '?notest' )
		$('h1').hide();
});