var wordsCorrect = 0;
var currentWordIndex = 0;
var wordList = []
var userResponseList = []
var responseImg;
function readCookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}
// Passes testObject (array of words to be tested on)
function loadTest() {
    //var testObject = readCookie(testObject);
    // Eventually this will read a value from the cookie.
    // For now, it will just instantiate the wordList array
    //wordList = ["the", "of", "and", "a", "to"];
    item = localStorage.getItem("wordList");
    wordList = JSON.parse(item);
    console.log(wordList[currentWordIndex]);
    doWord(wordList[currentWordIndex]);

}
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
                currentWordIndex = 0;
    
                //proceedToResults();
        }
    }
    
    setTimeout(doWord, 500);
    //document.getElementById("feedbackImg").src = "";
}
function bake_cookie(name, value) {
    var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
    document.cookie = cookie;
}

// Plays word sound file using HTML5 <audio> tag
function playWordAudio(word) {
    playAudioFile(word + ".mp3");
}
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
function playAudioFile(file) {
    var soundFile = document.createElement("audio");
    soundFile.preload = "auto";
    soundFile.src = "audioFiles/" + file;
    soundFile.load();
    soundFile.currentTime = -1.00;
    soundFile.play();
    soundFile.remove();
}

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}
