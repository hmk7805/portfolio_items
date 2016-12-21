$(document).ready(function(){
	fullReset()
	var diamond;
	var ruby;
	var cobalt;
	var emerald;
	var sum = [];
	var total = 0;
	var numberRand;
	var wins = 0;
	var losses = 0;
	
	function randomizer(min, max) {
	    	return Math.floor(Math.random() * (max - min + 1) + min);
	  		}
	function fullReset() {
			numberRand = randomizer(19, 120);
			diamond = randomizer(1, 12);
			ruby = randomizer(1, 12);
			cobalt = randomizer(1, 12);
			emerald = randomizer(1, 12);
			wins = 0;
			losses = 0;
			total = 0;
			
		console.log(numberRand, diamond, ruby, cobalt, emerald);
		
		$("#diamond").attr("value", diamond)
		$("#ruby").attr("value", ruby)
		$("#cobalt").attr("value", cobalt)
		$("#emerald").attr("value", emerald)
		$("#number").html("Match Me: " + numberRand)
		$("#sum").html("Your Total: " + total);
		$("#scoreW").html("Wins : " + wins)
		$("#scoreL").html("Losses : " + losses)
		}
		function Reset() {
			numberRand = randomizer(19, 120);
			diamond = randomizer(1, 12);
			ruby = randomizer(1, 12);
			cobalt = randomizer(1, 12);
			emerald = randomizer(1, 12);
			sum = [];
			total = 0;

		console.log(numberRand, diamond, ruby, cobalt, emerald);
		
		$("#diamond").attr("value", diamond)
		$("#ruby").attr("value", ruby)
		$("#cobalt").attr("value", cobalt)
		$("#emerald").attr("value", emerald)
		$("#number").html("Match Me: " +numberRand)
		$("#sum").html("Your Total: " + total);
		$("#scoreW").html("Wins : " + wins)
		$("#scoreL").html("Losses : " + losses)
		}

		$('body').on('click', 'img', function(){
			total = 0;
			var crystalNumber = this.getAttribute('value')
			sum.push(crystalNumber);
			console.log(sum);
			for (var i = 0; i < sum.length; i++) {
				total += sum[i] << 0;
				}
			console.log("total " + total)
			$("#sum").html("Your Total: " + total);
			if (total === numberRand){
			setTimeout(function(){
				alert("You Win!");
				Reset();
				}, 200);
			wins++;
			$("#scoreW").html("Wins : " + wins)
			}else if (total > numberRand){
			setTimeout(function(){
				alert("You Lose!");
				Reset();
			}, 200);
			losses++;
			$("#scoreL").html("Losses : " + losses)
			}
		  });
		});



