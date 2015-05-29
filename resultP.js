		var wordList;
		var wordTotal = 0;
		var userAnswers;
		var numCorrect;
		//pass off wordlist, store it in localstorage, redirect to test page (button) and button to main page
		
		function grabStuff() {
			 results = localStorage.getItem("results");
			 wordList = JSON.parse(results)[0];
                         console.log(wordList)
                         wordTotal = wordList.length;
			 userAnswers = JSON.parse(results)[1];
			 numCorrect = JSON.parse(results)[2];
		}
		 
		
		function runnerFunc() {
			grabStuff();
			greet();
			tally(numCorrect,wordTotal);
	
		}
		
		 
	
	

		function calcPercent(numCorrect, wordTotal) {
			var percent = (numCorrect/wordTotal) *100;
			percent = percent.toPrecision(3);
                        progressBar = document.getElementById("percent-progress-bar");
                        progressBar.innerHTML = percent + "%";
                        progressBar.style.width = percent + "%";
                        if (percent >= 75) {
                           progressBar.className += " progress-bar-success"
                        }
                        else if (percent < 75 && percent > 50) {
                           progressBar.className += " progress-bar-warning"
                        }
                        else {
                           progressBar.className += " progress-bar-danger"
                        }
			return percent
			
		}
		
		
		function greet() {
			var score = calcPercent(numCorrect,wordTotal);
			var greeting;
			if (score == 100) {
				greeting = "Great job!";
			} else if (score > 85) {
				greeting = "Good job!";
			} else {
				greeting = "You're on your way!";
			}
			document.getElementById("success-message").innerHTML = greeting;
		
		}
		
		function tally(numCorrect,wordTotal) {
			document.getElementById("you-got").innerHTML = "You got " + numCorrect + " words correct out of " + wordTotal + ".";
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