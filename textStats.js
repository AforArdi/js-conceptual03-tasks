function textStats(text) {
    let characters = 0;
    let words = 0;
    let vowels = 0;
    let consonents = 0;
    let allVowels = ['a', 'e', 'i', 'o', 'u']

    // character count
    for (let char of text){
        if (char !== ' '){
            characters++;
        }
    }

    // word count
    let textArr = text.trim().split(/\s+/); // Split wherever there are one or more spaces
    for (let word of textArr){
         words++;
    }

    // vowels & consonent count
    for (let char of text.toLowerCase()){
        if (allVowels.includes(char)){
            vowels++;
        }
        else if (char >= 'a' && char <= 'z'){
            consonents++;
        }
    }

    return {
        characters,
        words,
        vowels,
        consonents
    }
}

const myMessage = " I am OK ";
console.log(textStats(myMessage));