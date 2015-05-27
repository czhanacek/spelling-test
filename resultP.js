		var wordList;
		var wordTotal = wordList.length;
		var userAnswers;
		var numCorrect;
		//pass off wordlist, store it in localstorage, redirect to test page (button) and button to main page
		
		function grabStuff() {
			 results = localStorage.getItem("results");
			 wordList = JSON.parse(results[0]);
			 userAnswers = JSON.parse(results[1]);
			 numCorrect = JSON.parse(results[2]);
		}
		 
		
		function runnerFunc() {
			grabStuff();
			greet();
			tally(numCorrect,wordTotal);
	
		}
		
		 
	
	

		function calcPercent(numCorrect, wordTotal) {
			var percent = (numCorrect/wordTotal) *100;
			percent = percent.toPrecision(3);
			document.getElementById("f1").innerHTML = percent + "%";
			
		}
		
		
		function greet() {
			var score = calcPercent(numCorrect,wordTotal);
			var greeting;
			if (score === 100) {
				greeting = "Great job!";
			} else if (score > 85) {
				greeting = "Good job!";
			} else {
				greeting = "You're on your way!";
			}
			document.getElementById("f2").innerHTML = greeting;
		
		}
		
		function tally(numCorrect,wordTotal) {
			document.getElementById("f3").innerHTML = "You got " + correct + " words correct out of " + total + ".";
		}
		
		function showResponses(userAnswers, wordList) {
			var list = "";
			for (i=0; i<wordList.length;i++) {
				list+= wordList[i] + "<br>";
			
			}
			for (i=0; i<userAnswers.length;i++) {
				list+= userAnswers[i] + "<br>";
			
			}
			
		
		}
