function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

const input = "Hello, how are you?";
const result = removeSpaces(input);
console.log(result);
