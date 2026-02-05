function removeDuplicates(arr) {
    if (arr.length == 0) return []; // prevents undefined output

    let duplicate = [arr[0]];
    
    for (let i = 1; i < arr.length; i++) {
        if (!duplicate.includes(arr[i])){
            duplicate.push(arr[i]);
        }
    }
    return duplicate;
}

const myArr = [];
console.log(removeDuplicates(myArr));