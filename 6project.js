function ride_function() {
	var height,can_ride;
	height=document.getelementbyid("height").value;
	can_ride=(height<52)?"you are too short":"you are tall enough";
	document.getelemanebyid("ride").innerhtml=can_ride+"to ride.";
	function count_function() {
		document.getelementbyid("counting".innerhtml=count();//next//
		function count() {
			var starting_point=9;
			function plus_one() {starting_point+=1;}
			plus_one();
			return starting_point;
		}
	}