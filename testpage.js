var wordsCorrect = 0;
var currentWordIndex = 0;
var wordList = []
var userResponseList = []
function readCookie(name) {
	var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
	result && (result = JSON.parse(result[1]));
	return result;
}
// Passes testObject (array of words to be tested on)
function loadTest() {	
	//var testObject = readCookie(testObject);
	wordList = ["cat", "dog", "mouse", "fish"];
	currentWordIndex = 0;
}
function handleTest() {
	loadTest();
	doWord(wordList[0]);
}
function doWord(word) {
	playAudioFile(word);
}
function wordSubmitted() {
	var userSubmission = document.getElementById("wordSubmission").value;
	userResponseList.push(userSubmission);
	if(userSubmission === wordList[currentWordIndex]) {
		wordsCorrect++;
	}
	if(wordList.length - 1 >= currentWordIndex) {
		currentWordIndex++;
	}
	doWord(wordList[currentWordIndex]);
	
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
	soundFile.remove(soundFile);
}
