// ignore spaces
// ignore case sensitivity
function wordCount(str){
    let words = str.split(' ');
    let wordObj = {};

    for (let word of words){
        let wordSmall = word.toLowerCase()
        if(wordObj.hasOwnProperty(wordSmall.toLowerCase())){
            wordObj[wordSmall]++;
        }
        else {
            wordObj[wordSmall] = 1;
        }
    }
    return wordObj;
}

const message = "I Ok ok love js and I like js and I love myself Myself";

console.log(wordCount(message));