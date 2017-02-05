$(document).ready(function(){
	reset();
	function reset() {
		number = 30;
		$("#questionContent").hide(0);
		$("#scoreCard").hide(0);
	}
	var number = 30;
	var intervalId;
	$("#beginBtn").click(function(){
		timerRun();
		$("#begin").hide(0);
		$("#questionContent").show(0);
	});
	$("#doneBtn").click(function(){
		stop();
	    scoreObj.calc()
		$("#scoreCard").show();
		$('#allDone').html("All Done!");
		$("#questionContent").hide();
	});
	function timerRun() {
	  intervalId = setInterval(decrement, 1000);
	}
	function decrement() {
	  number--;
	  $("#timer").html(number);
	  if (number === 0) {
	    stop();
	    scoreObj.calc()
	    $("#scoreCard").show();
	    $('#timeUp').html("Time Up!");
		$("#questionContent").hide();
	  }
	}
	function stop() {
	  clearInterval(intervalId);
	}

	var scoreObj = {
		correct: 0,
		incorrect: 0,
		unanswered: 0,
		calc: function(){
			var correctAns = ["humerus", "clavicle", "femur", "tibia"]
			var userAns = [];
			var userAns = [$('input[name="humerus"]:checked').val(), 
			$('input[name="clavicle"]:checked').val(), 
			$('input[name="femur"]:checked').val(), 
			$('input[name="tibia"]:checked').val()]
			console.log("1: " + userAns[1] + " 2: " + userAns[2] + " 3: " + userAns[3] + " 4: " + userAns[4])
			for (var i = 0; i < userAns.length; i++) {
				if (userAns[i] === undefined){
					scoreObj.unanswered++;
				}else if (userAns[i] !== correctAns[i]) {
					scoreObj.incorrect++;
				}else if (userAns[i] === correctAns[i]){
					scoreObj.correct++;
				}
			};
			$('#correct').html('Correct: ' + scoreObj.correct)
			$('#incorrect').html('Incorrect: ' + scoreObj.incorrect)
			$('#unanswered').html('Unanswered: ' + scoreObj.unanswered)
		}
	}
	$('#retryBtn').on('click', function(){
		location.reload();
	})
});


