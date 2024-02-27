const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const indexNumbersString = prompt("Write the index numbers separated by commas to convert to message:") || '';
const indexNumbers = indexNumbersString.split(',').map(num => parseInt(num.trim()));

if (indexNumbersString !== null && indexNumbersString !== '') {
    let message = '';
    for (let i = 0; i < indexNumbers.length; i++) {
        const index = indexNumbers[i];
        if (index === -1) {
            message += ' '; 
        } else if (index >= 0 && index < alphabet.length) {
            message += alphabet[index]; 
        } else {

        }
    }
    alert(`Your message is: ${message}`);
} else {
    alert(`You didn't provide any index numbers. Please provide index numbers to convert.`);
}
