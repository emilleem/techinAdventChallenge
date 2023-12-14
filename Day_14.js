class SecretMessage {
    constructor() {

    }

    encrypt(message, key) {
        let encryptedMessage = "";
        message.split("").forEach(c => {
            let current = String(c);
            if (current.match(/[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]/)) {
                encryptedMessage += String.fromCharCode(current.charCodeAt(0) + key);
            }
            else encryptedMessage += current;
        });
        return encryptedMessage;
    }

    decrypt(encryptedMessage, key) {
        let decryptedMessage = "";
        encryptedMessage.split("").forEach(c => {
            let encrypted = String(c);
            if (!encrypted.match(/[ .,?!@#$%^&*()-]/)) {
                decryptedMessage += String.fromCharCode(encrypted.charCodeAt(0) - key);
            }
            else decryptedMessage += encrypted;
        });
        return decryptedMessage;
    }
}

const secretMessage = new SecretMessage();
const originalMessage = "Merry Christmas!";
const key = 3;

const encryptedMessage = secretMessage.encrypt(originalMessage, key);
console.log("Encrypted message: ", encryptedMessage);

const decryptedMessage = secretMessage.decrypt(encryptedMessage, key);
console.log("Decrypted message: ", decryptedMessage);