// Capitalize
exports.capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverse
exports.reverse = str => {
    return str.split('').reverse().join('');
}


// Calculator
exports.calculator = {
    add: (num1, num2) => num1 + num2,
    subtraction: (num1, num2) => num1 - num2,
    multiplication: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
}


// Caesar
const getPosition = (charIndex, key) => (charIndex + key) % 26;

const checkPunctuation = char => !!char.match(/[.,:!?' ]/);

exports.caesar = (str, key) => {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let cryptedStr = '';

    // bring the string to lower case
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a punctuation
        if (checkPunctuation(str[i])) {
            cryptedStr += str[i];
        } else {
            const newCharPosition = getPosition(alphabet.indexOf(str[i]), key);
            cryptedStr += alphabet[newCharPosition]
        }
    }

    return cryptedStr;
}


// Array Analyzer
const getAverage = arr => {
    const reducer = arr.reduce((prevVal, currVal) => prevVal + currVal);
    const average = reducer / arr.length;
    return average;
};

const getMin = arr => Math.min(...arr);
const getMax = arr => Math.max(...arr);

exports.analyze = arr => {
    const obj = {
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length
    }

    return obj;
}
