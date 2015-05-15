var wordsCorrect = 0;
var wordSubmitted = false;
function readCookie(name) {
	var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
	result && (result = JSON.parse(result[1]));
	return result;
}
// Passes testObject (array of words to be tested on)
function loadTest() {	
	var testObject = readCookie(testObject);
	for(word in wordList) {
		playAudioFile(word);
		waitForSubmission();
		checkSubmission();
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
	soundFile.appendChild(word + ".mp3");
	soundFile.load();
	soundFile.currentTime = 0.01;
	soundFile.play();
}

function waitForSubmission(
	while(
function setSubmitted() {
	wordSubmitted = true;
