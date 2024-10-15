setInterval( function() {
	var currentTime= new Date(); // gets time from local computer
	console.log(currentTime);
	var hours= currentTime.getHours();
	var minutes= currentTime.getMinutes();
	var seconds= currentTime.getSeconds();
	var period= "AM";

	if(hours >=12){
		period="PM";
	}
	if(hours >= 13){
		hours= hours-12;
	}
	if(minutes <=9){
		minutes = "0" + minutes; // so, 9:6 --> 9:06
	}
	if(seconds <=9){
		seconds= "0" + seconds; 
	}

	var clockTime= hours + ":" + minutes + ":" + seconds + " " + period;

	var clockElement = document.getElementById("clock");
	clockElement.innerHTML = clockTime; 
}, 1000); // every 1000 milli seconds, the function willl run

