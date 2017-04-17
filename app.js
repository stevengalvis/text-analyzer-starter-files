function convertText(text){
    var textArray = text.toString().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return textArray.split(' ');
}

function totalWordCount(text) {
    var wordCount = convertText(text);
    console.log(wordCount);
    return wordCount.length;
}

console.log(totalWordCount('this is just a test,(dkkd)###, i want 838484 to keep testing'));
console.log(totalWordCount('lol'));

function uniqueWordCount(text){
    var checkCount = convertText(text);
    var wordCount = {};
    for(var i = 0;  i<checkCount.length; i++){
        if (wordCount.hasOwnProperty([checkCount[i]])){
            wordCount[checkCount[i]] += 1;

        }
        else {
            wordCount[checkCount[i]] = 1;

        }
    }
    return wordCount;

}
console.log(uniqueWordCount('this is another test this this, this'));
