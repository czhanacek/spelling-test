var wordsCorrect = 0;
var wordSubmitted = false;
var currentWord = "";
function readCookie(name) {
	var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
	result && (result = JSON.parse(result[1]));
	return result;
}
// Passes testObject (array of words to be tested on)
function loadTest() {	
	//var testObject = readCookie(testObject);
	var wordList = ["cat", "dog", "mouse", "fish"];
	for(var i = 0; i<wordList.length; i++) {
		console.log(wordList[i]);
		currentWord = wordList[i];
		playAudioFile(wordList[i]);
		waitForSubmission();
		//checkSubmission();
	}
}
function bake_cookie(name, value) {
	var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
	document.cookie = cookie;
}

// Plays word sound file using HTML5 <audio> tag
function playAudioFile(word) {
	var soundFile = document.createElement("audio");
	soundFile.preload = "auto";
	soundFile.src = "wordFiles/" + word + ".mp3";
	soundFile.load();
	soundFile.currentTime = 0.01;
	soundFile.play();
	soundFile.remove();
}

function waitForSubmission() {
	
	return;
}

function setSubmitted() {
	wordSubmitted = true;
}