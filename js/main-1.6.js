

$(window).resize(function(){	

	/*if ($(".sampleClass").css("float") == "none" ){
		// your code here
	}
	*/
});
$(function() {
 $('figure.responsive-image').picture();

//$.scrollTo( 3500, 2000 );
console.log("scrolled 006");

});


$(function() {


	var nav_container = $(".header-container");
	var nav = $("#nav");
	
	var top_spacing = 1;
	var waypoint_offset = 1;

	
	var sections = $("section");
	var navigation_links = $("#nav ul li a");
	
	sections.waypoint(function(direction) {
		
			var active_section;
			active_section = $(this);
			console.log(active_section.attr("id") );

			if (direction === "up")
			{	
				if(!active_section.attr("id"))
				{
	
					$("#savethedateLocationImg").css({'visibility':'visible', 'opacity':'1.0'}).animate({"opacity":"0.0"});;
				}
				else
				{
				$("#"+active_section.attr("id")+"LocationImg").css({'visibility':'visible', 'opacity':'1.0'}).animate({"opacity":"0.0"});;
				}

				 active_section = active_section.prev();

				console.log("active_section = " + active_section.attr("id") );
								 
			}
			else
			{
				
				if(active_section.attr("id"))
				{
					$("#"+active_section.attr("id")+"LocationImg").css({'visibility':'visible', 
							'opacity':'0.0'}).animate({"opacity":"1.0"});;
				}
			}
				
			var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("selected");
			active_link.addClass("selected");

		},
		{
		offset:'30%'
	})
	
	
	navigation_links.click( function(event) {


			if ($(window).width() < 480)
		{
			$.scrollTo(
			$(this).attr("href"),
			{
				duration: 1000,
				//offset: { 'left':0, 'top':-0.32*$(window).height() }
			},
			{'axis':'y'}
		);
		}
			else if ($(window).width() < 580)
		{
			$.scrollTo(
			$(this).attr("href"),
			{
				duration: 1000,
				offset: { 'left':0, 'top':-0.32*$(window).height() }
			},
			{'axis':'y'}
		);
		}
		else if ($(window).width() < 700)
		{
			$.scrollTo(
			$(this).attr("href"),
			{
				duration: 1000,
				offset: { 'left':0, 'top':-0.22*$(window).height() }
			},
			{'axis':'y'}
		);
		}

		else 
			{


			$.scrollTo(
				$(this).attr("href"),
				{
					duration: 1000,
					offset: { 'left':0, 'top':-0.12*$(window).height() }
				},
				{'axis':'y'}
			);
			}
		event.preventDefault();
	});

});