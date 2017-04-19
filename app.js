function convertText(text) {
    var textArray = text.toString().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    return textArray.split(' ');
}

function totalWordCount(text) {
    var wordCount = convertText(text);
    return wordCount.length;
}

function getUniqueWords(text) {
    var checkCount = convertText(text);
    var uniqueWords = {};
    for (var i = 0; i < checkCount.length; i++) {
        if (uniqueWords.hasOwnProperty([checkCount[i]])) {
            uniqueWords[checkCount[i]] += 1;
        } else {
            uniqueWords[checkCount[i]] = 1;
        }
    }
    return uniqueWords;
}

function uniqueWordCount(text) {
    var listOfWords = getUniqueWords(text);
    return Object.keys(listOfWords).length;
};

function averageWordLength(text) {
    var uniqueWords = getUniqueWords(text)
    var uniqueWordsArray = Object.keys(uniqueWords);
    var totalLength = 0;
    for (word in uniqueWords) {
        totalLength += word.length;
    }
    return totalLength / uniqueWordCount(text);
}

function analyzeText(){
    $('button').on('click',function(e){
        e.preventDefault();
        //get words from text area
        var $text = $('textarea').val();
        $('dl').removeClass('hidden');
        $('.js-word-count').after(totalWordCount($text));
        $('.js-unique-word-count').after(uniqueWordCount($text));
        $('.js-average-word').after(averageWordLength($text));
        $text.val('');
    });
}

$(function() {
    //event listener function
    analyzeText();
});
