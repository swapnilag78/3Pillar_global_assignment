//for-loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//while-loop
let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

//do-while
let i = 0;
do {
    i++;
    console.log(i)
} while (i < 10)


//for-loop
for (let i = 10; i <= 10; i--) {
    console.log(i);
}

//while-loop
let i = 10;
while (i > 0) {
    i--;
    console.log(i)
}

//do-while loop
let i = 10;
do {
    i--;
    console.log(i)
} while (i > 0)

let n = Number(prompt("enter number"));
for (let i = 0; i <= n; i++) {
    console.log(i);
}

let str = "";
for (let i = 0; i < 7; i++) {
    str += "#";
    console.log(str)
}

//multiplication
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

//power of 2 and power of 3
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

//print even numbers from 0-100;
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//print odd numbers
for (i = 0; i <= 100; i++) {
    if (i % 2 > 0) {
        console.log(i)
    }
}

//print prime numbers
for (let i = 0; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0 && i > 1) {
            console.log(i)
        }
    }
}

//sum of all numbers
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum)

//sum of all even and odd
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else if (i % 2 > 0) {
        odd = odd + i;
    }
}
console.log(`the sum of all even number is ${even}. And the sum of all odd numbers is ${odd}`)

//storing sum of all even/odd numbers in an array
let sumEvenOdd = [0, 0]
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEvenOdd[0] += i;
    } else if (i % 2 > 0) {
        sumEvenOdd[1] += i;
    }
}
console.log(sumEvenOdd)

//array of five random numbers
let Arr = [];
for (let i = 0; i < 5; i++) {
    Arr.push(Math.floor(Math.random() * 10));
}
console.log(Arr)

//generating random unique arr
let UniqueArr = [];
for (let i = 5; UniqueArr.length < i;) {
    let random = Math.floor(Math.random() * 10);
    if (UniqueArr.indexOf(random) === -1) {
        UniqueArr.push(random);
    }
}
console.log(UniqueArr)

/*
Exercises: Level 2
Develop a small script which generate any number of characters random id:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
Write a script which generates a random hexadecimal number.

'#ee33df'
Write a script which generates a random rgb color number.

rgb(240,180,80)
Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

['Finland','Ireland', 'Iceland']
In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']
Using the above countries array, find the country containing the biggest number of characters.

Ethiopia
Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']
Find the longest word in the webTechs array

Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB

  */

//generate 6 random numbers/strings
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomChars = ""
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log(randomChars)

//generate any number of numbers/strings
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let r = Math.floor(Math.random() * chars.length);
let randChars = "";
for (let i = 0; i < r; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randChars += chars[random];
}
console.log(randChars);

let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let newCountries = [];
for (let i = 0; i < countries.length; i++) {
    newCountries.push([countries[i], countries[i].slice(0, 3), countries[i].length])
}
console.log(newCountries)
let countWithoutLand = []
let countWithLand = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("LAND")) {
        countWithLand.push(countries[i]);
    } else {
        countWithoutLand.push(countries[i])
    }
}

let countWithIa = []
let countWithoutIa = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("IA")) {
        countWithIa.push(countries[i]);
    } else {
        countWithoutIa.push(countries[i])
    }
}

console.log(`countries with "ia" ${countWithIa}`);
console.log(`countries without "ia" ${countWithoutIa}`)

let countriesCharLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesCharLength.push(countries[i].length);
}
console.log(countriesCharLength);

let highest;
highestNum = Math.max.apply(null, countriesCharLength);
console.log(countries[countriesCharLength.indexOf(highestNum)]);

//countries with five chars
let countriesWithFiveChars = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWithFiveChars.push(countries[i])
    }
}
console.log(countriesWithFiveChars)

let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"];
let webTechsLength = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechsLength.push(webTechs[i].length);
}
console.log(webTechsLength);
let highestChar;
highestChar = Math.max.apply(null, webTechsLength);
console.log(highestChar)
console.log(webTechs[webTechsLength.indexOf(highestChar)]);

let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    newWebTechs.push([webTechs[i], webTechs[i].length])
}
console.log(newWebTechs)

let mernStack = ["MongoDb", "Express", "React", "Node"]
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 0);
}
console.log(mern)

let techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < techs.length; i++) {
    console.log(techs[i])
}
for (let tech of techs) {
    console.log(tech);
}

let fruits = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}