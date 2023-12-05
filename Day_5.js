/* 
    Program notes: 
    This program is not case-sensitive.
    If a word contains both 'R' and 'r', they will be counted as one character.  
*/

// Checks if the input is a single letter character.
const isLetter = (character) => {
    return /^[a-zA-Z]$/.test(character);
}

const countUniqueLetters = (christmasWordsArray) => {
    let uniqueLettersCount = 0;
    let uniqueLetters = [];

    if (Array.isArray(christmasWordsArray)) {
        const text = christmasWordsArray.join('');
        for (let i = 0; i < text.length; i++) {
            let current = text[i].toLowerCase();
            if(isLetter(current) && !uniqueLetters.includes(current)) {
                uniqueLetters.push(current);
                uniqueLettersCount++;
            }
        }
    }
    else {
        console.log('Input to the function must be an array.');
    }
    return uniqueLettersCount;
}

const christmasWords = ['Reindeer', 'Sleigh', 'Bell', 'Christmas tree', 'Santa Claus', 'Present'];
//const christmasWords = [];
console.log(countUniqueLetters(christmasWords));

