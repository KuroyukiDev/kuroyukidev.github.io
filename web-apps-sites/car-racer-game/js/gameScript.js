	
	/* -------------------------------
   		jQuery Car Racer Game
   ------------------------------- */

	// Click the GO button
	$('#go').click(function() {
		
		function checkIsComplete() {
			
			if (isComplete == false) {
				isComplete = true;
			} else {
				place = '2nd';
			}
			
		}
		
		
		// get the width of the cars
		var carWidth = $('#car1').width();
		
		// get the width of the track
		var trackWidth = $('.wrapper').width() - carWidth;
		
		// generate random race times in Milliseconds between 1 and 5000
		var raceTime1 = Math.floor( (Math.random() * 5000) + 1);
		var raceTime2 = Math.floor( (Math.random() * 5000) + 1);
		
		// flag var to determine whether a car finished the race
		var isComplete = false;
		
		// flag for FIRST place by default
		var place = '1st';
		
		// animate car 1
		$('#car1').animate({
			
			// move car 1 to the end of the track
			left: trackWidth
			
		}, raceTime1, function() {
			
			// animation is complete
			
			// run function 
			checkIsComplete();
			
			// give some text feedback in race info box
			$('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
			
		});
		
		
		// animate car 2
		$('#car2').animate({
			
			// move car 1 to the end of the track
			left: trackWidth
			
		}, raceTime2, function() {
			
			// animation is complete
			
			// run function 
			checkIsComplete();
			
			// give some text feedback in race info box
			$('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
			
		});
		
	});
	
	
	
	$('#reset').click(function() {
		$('.car').css('left', '0');
		$('.raceInfo span').text('');
	});
	