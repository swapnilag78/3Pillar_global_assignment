let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(sentence.match(/Love/));



let sentence_match = 'You cannot end a sentence with because because because is a conjunction';
let pattern_match = /because/gi;
console.log(sentence_match.match(pattern_match));






let sentence_extract_num = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx = /\d+/
let num = sentence_extract_num.match(/\d+/g);

let num1 = parseInt(num[0]);
let num2 = parseInt(num[1]);
let num3 = parseInt(num[2]);

console.log(num1 + num2 + num3);