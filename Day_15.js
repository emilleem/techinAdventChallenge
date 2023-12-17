str = "Merry Christmas! It's Christmas today. How was your chRistmas?";
console.log(replaceChristmas(str, '🎅'));

function replaceChristmas(line, emoji = '🎄') {
    pattern = /\bChristmas\b/gi; // All occurences, case-insensitive.

    let matchCount = 0;
    matches = line.match(pattern);
    matches.forEach(match => {
        matchCount += 1;
    });

    return {
        'Changed line': line.replace(pattern, emoji),
        'Replacement count': matchCount
    };
}