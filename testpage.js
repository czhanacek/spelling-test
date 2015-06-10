var wordsCorrect = 0;
var currentWordIndex = 0;
var wordList = []
var userResponseList = []
var responseImg;
var soundFile;

// Passes testObject (array of words to be tested on)
function loadTest() {
    
    
    // Eventually this will read a value from the cookie.
    // For now, it will just instantiate the wordList array
    
	// This is used for testing purposes.
	//wordList = ["cat", "dog", "and", "a", "to"];

    item = window.localStorage.getItem("wordList");
    wordList = JSON.parse(item);
    console.log(wordList);

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
    playWordAudio(wordList[currentWordIndex]);
}
function wordSubmitted() {
    var userSubmission = document.getElementById("wordSubmission").value;
    document.getElementById("wordSubmission").value = "";
    userResponseList.push(userSubmission);
    document.getElementById("wordSubmission").focus();
    if (userSubmission === "") {
        highlightTextField();
    }
    else {
        if(userSubmission.toLowerCase() === wordList[currentWordIndex].toLowerCase()) {
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

function doCorrect() {
    playAudioFile("crct.wav");
    responseImage("green-check.png");
}
function doWrong() {
    playAudioFile("wrg.wav");
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
    playAudioFile(word + ".mp3")
}
function returnHome() {
    window.location.href = "mainpage.html"
}
function playAudioFile(file) {
    soundFile = document.createElement("audio");
    soundFile.src = "audioFiles/" + file;
    soundFile.load();
    soundFile.attribute("onended") = "removeAudioFile()";
    soundFile.preload = "auto";
    soundFile.play();
}
function removeAudioFile() {
   soundFile.remove();
function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}
