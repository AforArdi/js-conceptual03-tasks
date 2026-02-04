function analyzeMarks(marksObj){
    let total = 0;
    let highest = -Infinity;
    let lowest = Infinity;
    let highestSubject = null;
    let lowestSubject = null;

    for (const key in marksObj){
        let value = marksObj[key];
        total += value;

        if(value > highest){
            highest = value;
            highestSubject = key;
        }
        if (value < lowest){
            lowest = value;
            lowestSubject = key;
        }
    }

    let average = total / Object.keys(marksObj).length;

    return {
        total,
        average,
        Highest: highestSubject,
        Lowest: lowestSubject
    }
}

const myMarks = { math: 78, english: 65, physics: 88, bangla: 55 };
console.log(analyzeMarks(myMarks));

// Using Infinity and -Infinity as safe initial values
// -Infinity ensures the first number is always higher
// Infinity ensures the first number is always lower
// Useful when finding min/max in arrays or objects
// Works even with negative numbers