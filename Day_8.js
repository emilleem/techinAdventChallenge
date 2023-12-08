const participants = ["Jingle", "Merry", "Twinkle", "Frosty"];
const festiveSocks = ["Red and Green Striped Socks", "Snowflake and Holly Print Socks", "Candy Cane Inspired Socks", "Christmas Tree Patterned Socks"];

const pickRandomFromCollection = (collection) => {
    if (Array.isArray(collection)) {
        return collection[Math.floor(Math.random() * collection.length)];
    }
}

const printDictionary = (dictionary) => {
    Object.keys(dictionary).forEach((key) => {
        const value = dictionary[key];
        console.log(`${key}: ${value}`);
    });
}

function assignRandomSocks(participants, festiveSocks) {
    const pairs = {};

    const remainingSocks = [...festiveSocks];
    for (let i = 0; i < participants.length; i++) {
        const participant = participants[i];

        if (remainingSocks.length > 0) {
            const randomIndex = Math.floor(Math.random() * remainingSocks.length);
            const assignedSock = remainingSocks.splice(randomIndex, 1)[0];
            pairs[participant] = assignedSock;
        }
        else {
            pairs[participant] = "No more socks available";
        }
    }
    return pairs;
}

const pairs = assignRandomSocks(participants, festiveSocks);
printDictionary(pairs);
