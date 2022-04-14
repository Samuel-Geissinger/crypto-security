const generateKey = (str, key) => {
    const length = str.length;
    for (let i = 0; i < length; i++) {
        if (length === i) {
            i = 0;
        }
        if (key.length === str.length) {
            break;
        }
        key += key[i];
    }
    return key;
}


const cipherText = (str, key) => {
    const text = [];
    for (let i = 0; i < str.length; i++) {
        const convertString = str[i].charCodeAt(0) - 97;
        const convertKey = key[i].charCodeAt(0) - 97;
        const letter = ((convertString + convertKey) % 26) + 97; 
        text.push(String.fromCharCode(letter));
        
    }
    return text.join('');
}


const plainText = (str, key) => {
    const text = [];
    for (let i = 0; i < str.length; i++) {
        const convertString = str[i].charCodeAt(0) - 97;
        const convertKey = key[i].charCodeAt(0) - 97;
        const letter = (((convertString - convertKey) + 26) % 26) + 97; 
        text.push(String.fromCharCode(letter));
        
    }
    return text.join('');
}

const message = 'ilovecryptography';
const keyword = 'lemon';
const keyString = generateKey(message, keyword);

console.log(keyString);
console.log(cipherText(message, keyString));
console.log(plainText(cipherText(message, keyString), keyString));
