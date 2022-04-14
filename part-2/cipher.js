const caesarEncode = (str, key) => {
    const arr = str.toLowerCase().split('');
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].charCodeAt(0) - 97;
        result.push(String.fromCharCode(((element + key) % 26) + 97));
    }
    return result.join('');
}

const caesarDecode = (str, key) => {
    const arr = str.toLowerCase().split('');
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].charCodeAt(0) - 97;
        let letter = (element - key) % 26;
        if (letter < 0) {
            letter += 26
        } else if (letter > 25) {
            letter -= 26
        }
        result.push(String.fromCharCode(letter + 97));
    }
    return result.join('');
}

const message = 'ilovecryptography';
const key = 12;
const encryptedMessage = caesarEncode(message, key);
console.log();
console.log(message, encryptedMessage, caesarDecode(encryptedMessage, key));