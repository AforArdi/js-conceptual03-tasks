// Length must be at least 8 characters
// Must contain at least 1 number
// Must contain at least 1 uppercase letter
// Must not contain spaces

function checkPassword(pass){
    let length = pass.length;
    let hasUpperCase = false;
    let hasNumber = false;
    let reasons = [];
    let hasSpace = pass.includes(' ');

    for (let i = 0; i< length; i++){
        let character = pass[i];
        if (character >= '0' && character <= '9'){
            hasNumber = true;
        }
        if (character >= 'A' && character <= 'Z'){
            hasUpperCase = true;
        }
    }
    if (!hasNumber){
        reasons.push("Missing Number");
    }
    if (!hasUpperCase){
        reasons.push("Missing uppercase");
    }
    if (hasSpace){
        reasons.push("Remove Space")
    }
    
    let isValid = reasons.length == 0; // checking validity at the end (important)

    return {
        valid: isValid,
        reasons
    }
}
const myPass = "hello world";
console.log(checkPassword(myPass));