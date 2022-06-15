/*
Exercises: Level 1
Declare a function fullName and it print out your full name.

Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

Declare a function addNumbers and it takes two two parameters and it returns sum.

An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/

function fullName() {
    console.log("vansh bansal")
}
fullName()

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
fullName("vansh", "bansal");

function addNumbers(a, b) {
    return a + b;
}
addNumbers(1, 4);

function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
areaOfRectangle(3, 4);

perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length * width);
    return perimeter;
}
perimeterOfRectangle(3, 4);

volumeOfRectPrism = (length, width, height) => {
    let volume = length * width * height;
    return volume;
}
volumeOfRectPrism(1, 3, 5);

AreaOfCircle = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
}
AreaOfCircle(6);

circumOfCircle = (r) => {
    const PI = 3.14;
    return PI * r
}
circumOfCircle(5);

density = (mass, volume) => {
    return mass * volume;
}
density(3, 6);

speed = (TDC, TT) => {
    return TDC / TT
}
speed(4, 6);

weight = (mass, gravity) => {
    return mass * gravity;
}
weight(4, 5);

celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}
celsiusToFahrenheit(5);

BMI_check = (weight, height) => {
    let bmi = weight / (height / height);
    if (bmi < 18.5) {
        return `underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        return `overweight`;
    } else if (bmi > 25 && bmi < 29.9) {
        return `overweight`;
    } else {
        return `obese`;
    }
}
BMI_check(4, 7);

checkSeasons = (month) => {
    switch (month) {
        case "september":
        case "october":
        case "November":
            console.log("the season is Autumn");
            break;
        case "december":
        case "january":
        case "febuary":
            console.log("the season is Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("the season is Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("the season is Summer");
            break;
        default:
            console.log("invalid Month")
    }
}
checkSeasons("january");

findMax = (x, y, z) => {
    return Math.max(x, y, z);
}
findMax(15, 47, 34)





printArr = (arr) => {
    arr.forEach(function(ar) {
        console.log(ar);
    })
}
printArr([3, 4, 5])

showDateTime = () => {
    let date = new Date();
    let datee = date.getDate();
    let month = date.getUTCMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
}
showDateTime();

swapValues = (a, b) => {
    let x = b;
    let y = a;
    console.log(x, y)
}
swapValues(2, 4)

reverseArr = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    console.log(newArr);
}
reverseArr([3, 4, 5])

capitalizeArr = (arr) => {
    let newArr = [];
    arr.forEach(function(ar) {
        newArr.push(ar.toUpperCase());
    })
    return newArr;
}
capitalizeArr(["john", "mike"]);

removeitem = (index) => {
    let names = ["john", "mike"]
    names.splice(index);
    return names
}
removeitem(1);

sumOfNumbers = (...args) => {
    let sum = 0;
    args.forEach(function(arg) {
        sum += arg
    })
    return sum;
}
sumOfNumbers(1, 2, 3, 4)

sumOfEven = (...args) => {
    let evenSum = 0;
    args.forEach(function(arg) {
        if (arg % 2 === 0) {
            evenSum += arg
        }
    })
    return evenSum;
}
sumOfEven(1, 2, 3, 4)

sumOfOdd = (...args) => {
    let oddSum = 0;
    args.forEach(function(arg) {
        if (arg % 2 === 0) {
            oddSum += arg
        }
    })
    return oddSum;
}
sumOfOdd(1, 2, 3, 4)

evenAndOdds = (num) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            even++
        } else if (i % 2 !== 0) {
            odd++
        }
    }
    return `the number of odds are ${odd} \n the number of even are ${even}`
}
evenAndOdds(100)

sum = (...args) => {
    let sum = 0;
    args.forEach(function(num) {
        sum += num;
    })
}
sum(1, 2, 3)

generateRandomIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `IP: ${one}:${two}:${three}:${four}`
}
generateRandomIp();

generateRandomMacAdd = () => {}

generateRandomHex = () => {
    let chars = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i <= 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }

    return `#${hex}`
}
generateRandomHex();

generateUserId = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let userId = "";
    for (let i = 0; i <= 7; i++) {
        userId += chars[Math.floor(Math.random() * chars.length)];
    }
    return userId;
}
generateUserId();




/*
Exercises: Level 3
Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)
Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

Write a function arrayOfRgbColors which return any number of RGB colors in an array.

Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

Call your function isEmpty, it takes a parameter and it checks if it is empty or not

Call your function sum, it takes any number of arguments and it returns the sum.

Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'
Write a function called isPrime, which checks if a number is prime number.

Write a functions which checks if all items are unique in the array.

Write a function which checks if all the items of the array are the same data type.

JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

*/

userIdGeneratedByUser = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let noId = Number(prompt("how many id do you want to generate"));
    let noChars = Number(prompt("in how many chars"));
    let ids = [];
    for (i = 0; i < noId; i++) {
        ids[i] = "";
        for (k = 0; k < noChars; k++) {
            ids[i] += chars[Math.floor(Math.random() * chars.length)];
        }
    }
    console.log(ids)
    ids.forEach(function(id) {
        console.log(id);
    })
}
userIdGeneratedByUser();


rgbColorGnerator = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    return `rgb(${one},${two},${three})`;
}
rgbColorGnerator();

arrayOfHexaColors = () => {
    let chars = "0123456789ABCDEF";
    let hex = [];
    for (let k = 0; k < 3; k++) {
        hex[k] = "#";
        for (let i = 0; i < 6; i++) {
            hex[k] += chars[Math.floor(Math.random() * chars.length)];
        }
    }

    return hex;
}
arrayOfHexaColors();

generateColors = (type, arrLength) => {
    let chars = "0123456789ABCDEF";
    let colors = [];
    if (type === "rgb") {
        for (i = 0; i < arrLength; i++) {
            colors[i] = "rgb";
            colors[i] += `(${ Math.floor(Math.random() * 255) },`;
            colors[i] += `${ Math.floor(Math.random() * 255) },`
            colors[i] += `${ Math.floor(Math.random() * 255) },)`
        }
    } else if (type === "hex") {
        for (let i = 0; i < arrLength; i++) {
            colors[i] = "#";
            for (k = 0; k < 6; k++) {
                colors[i] += chars[Math.floor(Math.random() * chars.length)];
            }
        }
    }
    return colors;
}
generateColors("rgb", 3);

shuffleArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * arr.length - 1);
        if (arr.indexOf(rand) !== -1 && !newArr.includes(arr[rand])) {
            newArr.push(arr[rand]);
        }
    }
    return newArr
}
shuffleArray([1, 2, 3]);

factorial = (num) => {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        // if (i === 0) {
        //     break;
        // }

        factorial *= i;
    }
    return factorial;
}
factorial(5);

isEmpty = (val) => {
    if (val === undefined) {
        return `it's empty`
    } else {
        return `not empty`
    }
}
isEmpty()

sum = (...args) => {
    let sum = 0;
    args.forEach(function(arg) {
        sum += arg
    })
    return sum;
}
sum(1, 2, 3, 4);

sumOfArrayItems = (arr) => {
    let sum = 0;
    arr.forEach(function(ar) {
        if (typeof ar === "number") {
            sum += ar
        } else {
            sum = `it's a string`
        }
    })
    return sum;
}
sumOfArrayItems([1, 2, 3])

average = (arr) => {
    let sum = 0;
    arr.forEach(function(ar) {
        if (typeof ar === "number") {
            sum += ar;
            sum = arr.length / sum;
        } else {
            sum = `it's a string`;
        }
    })
    return sum;
}
average([1, 2, 3]);

modifyArray = (arr) => {
    if (arr.length >= 6) {
        for (let i = 0; i < arr.length; i++) {
            if (i = 5) {
                arr.splice(5)
            }
        }
        return arr
    } else {
        return `item not found`
    }
}
modifyArray([1, 2, 3]);

isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 && num > 1) {
            return `${num} is a prime number`;
        } else {
            return `not prime`
        }
    }
}
isPrime(5);

reverseCountries = () => {
    let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
    return countries.reverse();
}
reverseCountries();