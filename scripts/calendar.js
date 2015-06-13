console.log("!")

$(document).ready(function() {
	/*
		*  Simple image gallery. Uses default settings
	*/
	
	$('.fancybox').fancybox();
	
	/*
		*  Different effects
	*/
	
	// Disable opening and closing animations, change title type
	$(".fancybox-effects-b").fancybox({
		openEffect  : 'fade',
		closeEffect	: 'fade',
		helpers : {
			title : {
				type : 'over'
			}
		}
	});
	
	/*
		*  Open manually
	*/
	
	$("#fancybox-manual-a").click(function() {
		$.fancybox.open('1_b.jpg');
	});
	
	$("#fancybox-manual-b").click(function() {
		$.fancybox.open({
			href : 'iframe.html',
			type : 'iframe',
			padding : 5
		});
	});
	
	$("#fancybox-manual-c").click(function() {
		$.fancybox.open([
		{
			href : '1_b.jpg',
			title : 'My title'
			}, {
			href : '2_b.jpg',
			title : '2nd title'
			}, {
			href : '3_b.jpg'
		}
		], {
			helpers : {
				thumbs : {
					width: 75,
					height: 50
				}
			}
		});
	});
	
	$('#calendar').fullCalendar({
		defaultDate: new Date(),
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		selectable: false,
		select: false,
		googleCalendarApiKey: "AIzaSyBrJY4ayDg3Dy9Z8obYvYv2MEF_7sWBT10",
		events: {
			// replace this with your own google calendar id.
			googleCalendarId: "j7q7ccdcdmmv6sa5iu7ps3d2ec@group.calendar.google.com"
		},
		
		header: {
			left: '',
			center: 'title',
			right: 'today prev,next'
		},
		
		buttonIcons: {
			prev: 'left-single-arrow',
			next: 'right-single-arrow',
		},
		
		views: {
			month: { // name of view
				titleFormat: 'MMMM YYYY',
				weekMode: '5'
				// other view-specific options here
			}
		},
		
		eventRender: function( event, element, view ) { 
			if (event.title == "Monday Night Lindy Hop") {
				//apply your logic here, make changes to element.
				element.css('background', 'red');
				element.css('border-color', 'red');
				//element.find('.fc-event-title').append("moo");
				}else if (event.title == "Event"){
				element.css('background', 'blue');
				element.css('border-color', 'blue');
				//element.find('.fc-event-title').append("moo");
			}
			
			var tooltipRender = ('<div>'+event.title+'</div>');
			element.qtip({
				content: tooltipRender,
				style: { classes: 'font-size: 16px;'},
				position: {
					my: 'center left',
					at: 'top center',
					
					target: $(element)
				}
			});
		},
		
		eventClick: function(calEvent, jsEvent, view) {
			var t = calEvent.title;
			var startDate = calEvent.start + "";
			var endDate = calEvent.end + "";
			
			var title = calEvent.title;
			for (var i = 0; i < title.length; i++){
				title = title.replace(" ", "_"); 
			}
			
			var description = calEvent.description;
			for (var i = 0; i < description.length; i++){
				description = description.replace("\n", "_"); 	
			}
			
			var location = calEvent.location + "";
			for (var i = 0; i < location.length; i++){
				location = location.replace(" ", "_"); 
			}
			alert(title + "");
			var hrefLink = 'iframe.html#' + title + "#" + description + "#" + startDate + "#" + endDate + "#" + location;
			$.fancybox.open({
				href : hrefLink,
				type : 'iframe',
				padding : 5
			});
		}
	});
	
	//This line of code kept crashing the site. It says:
	//"calEvent not found"
	//Did you mean to put these in the event listener above?
	
	$('#calendar').fullCalendar('renderEvent', calEvent)
});
