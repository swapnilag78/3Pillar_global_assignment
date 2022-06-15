let challenge = '30 Days Of JavaScript';

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 3));
console.log(challenge.substring(3, challenge.length + 1));
console.log(challenge.includes('Script'));
console.log(challenge.split(' '))

let strings = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(strings.split(' '))

console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(challenge.indexOf('J')));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let statement1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(statement1.indexOf('because'));
console.log(statement1.lastIndexOf('because'));
console.log(statement1.search('because'));
console.log(challenge.trim());

console.log(challenge.startsWith('3'));
console.log(challenge.endsWith('t'));
console.log(challenge.match('a'));

let string1 = '30 Days of';
let string2 = 'JavaScript';

console.log(string1 + " " + string2);
console.log(challenge.repeat(2));