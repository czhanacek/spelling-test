var wordsCorrect = 0;
var currentWordIndex = 0;
var wordList = []
var audioFiles = []
var userResponseList = []
var responseImg;
var soundFile;
var correctAudio;
var wrongAudio;

// Passes testObject (array of words to be tested on)
function loadTest() {
    
    
    // Eventually this will read a value from the cookie.
    // For now, it will just instantiate the wordList array
    
	// This is used for testing purposes only.
	//wordList = ["cat", "dog", "and", "a", "to"];

    item = window.localStorage.getItem("wordList");
    wordList = JSON.parse(item);
    console.log(wordList);
    loadCorrect();
    loadWrong();
    	for(var i = 0; i<wordList.length; i++) {
		var soundFile = new Audio("audioFiles/" + wordList[i] + ".mp3");
		soundFile.load();
	}
	
	whiteTextField();
    //doWord(wordList[currentWordIndex]);

}

// Loads our test and starts the user off
// with the first word in the word array (wordList)
function handleTest() {
    loadTest();
    
    doWord(wordList[0]);
}
function doWord(word) {
    if(word === undefined) {
        playWordAudio(wordList[currentWordIndex]);
    }
    else {
        playWordAudio(word);
    }
}
function replayWord() {
    playWordAudio();
}
function wordSubmitted() {
	audioFiles[currentWordIndex].pause();
    var userSubmission = document.getElementById("wordSubmission").value;
    document.getElementById("wordSubmission").value = "";
    userResponseList.push(userSubmission);
    document.getElementById("wordSubmission").focus();
    if (userSubmission === "") {
        highlightTextField();
    }
    else {
        if(userSubmission.trim().toLowerCase() === wordList[currentWordIndex].toLowerCase()) {
            wordsCorrect++;
            console.log(wordsCorrect);
            doCorrect();
	    
        }
    
        else {
            doWrong();
        }
    
        if(wordList.length - 1 > currentWordIndex) {
                currentWordIndex++;
        }
        else {
                //currentWordIndex = 0;
    		window.localStorage["wordList"] = undefined;
                setTimeout(proceedToResults, 500);
        }
    }
    
    setTimeout(doWord, 500);
    //document.getElementById("feedbackImg").src = "";
}
function proceedToResults() {
	var final = [wordList, userResponseList, wordsCorrect];
	item = JSON.stringify(final);
	window.localStorage.setItem("results", item);
	window.location.href = "resultPage.html"
}

// Plays word sound file using HTML5 <audio> tag
function loadCorrect() {
	var soundFile = document.createElement("audio");
    	soundFile.src = "audioFiles/crct.wav";
    	soundFile.load();
    	//soundFile.preload = "auto";
	correctAudio = soundFile;
}
function loadWrong() {
	var soundFile = document.createElement("audio");
    	soundFile.src = "audioFiles/wrg.wav";
    	soundFile.load();
    	//soundFile.preload = "auto";
	wrongAudio = soundFile;
}
function doCorrect() {
	correctAudio.play();
    responseImage("green-check.png");
}
function doWrong() {
	wrongAudio.play();
    responseImage("red-x.png");
}

function responseImage(img) {
    var text = "<img style=\"height: 25%; width: 25%; display: block;margin-left: auto; margin-right: auto;\" class=\"img-responsive\" src=\"img/" + img + "\"></img>"
    document.getElementById("imageContainer").innerHTML = text;
    setTimeout(removeImage, 1000);
}
function removeImage() {
    document.getElementById("imageContainer").innerHTML = "";

}
function highlightTextField() {
    pinkTextField()
    setTimeout(whiteTextField, 500);

}

function pinkTextField() {
    document.getElementById("wordSubmission").style.backgroundColor = "rgb(255, 200, 200)";
}
function whiteTextField() {
    document.getElementById("wordSubmission").style.backgroundColor = "rgb(255, 255, 255)";
}

function playWordAudio(word) {
    playAudioFile();
}
function returnHome() {
    window.location.href = "mainpage.html"
}
function playAudioFile(file) {
    	if(file == undefined) {
		audioFiles[currentWordIndex].play();
	}
	else {
   		var soundFile = new Audio("audioFiles/" + file;);
		soundFile.load();
    		soundFile.play();
	}
}
function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}
