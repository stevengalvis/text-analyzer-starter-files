function convertText(text){
    var textArray = text.toString().toLowerCase();
    return textArray.split(' ');
}

function totalWordCount(text) {
    var wordCount = convertText(text);
    console.log(wordCount);
    return wordCount.length;
}

console.log(totalWordCount('this is just a test'));
console.log(totalWordCount('lol'));
