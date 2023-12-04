'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const sArray = s.split('')
    const vowels =[]
    const consonants = []

    for(const i of sArray){
        if('aeiou'.includes(i)){
            vowels.push(i)
        }else{
            consonants.push(i)
        }
    }
    console.log(vowels.join("\n"));
    console.log(consonants.join("\n"));
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}