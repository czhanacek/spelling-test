

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}
// test
function doHandoff(testID) {
    item = ""
    switch(testID) {
        case 1:
            wordList = ["cat", "and", "a", "to", "of"];
            item = JSON.stringify(wordList);
         
            
    }
    localStorage.setItem("wordList", item);
    window.location.href = "testpage.html";
}
