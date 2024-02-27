"use strict";
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const personMessage = prompt("Write Your message here to convert!") || '';
if (personMessage !== null && personMessage !== '') {
    const indices = [];
    for (let i = 0; i < personMessage.length; i++) {
        const char = personMessage[i].toLowerCase();
        if (alphabet.includes(char)) {
            const index = alphabet.indexOf(char);
            indices.push(index);
        }
        else {
            indices.push(-1);
        }
    }
    alert(`Your index numbers are: ${indices.join(', ')}`);
}
else {
    alert(`You didn't write anything. Please write something to convert.`);
}
