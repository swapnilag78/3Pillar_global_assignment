let base = prompt('Enter Base');
let height = prompt('Enter Height', 'here');

let area = 0.5 * base * height;
console.log(area);


let a = prompt('Enter side a');
let b = prompt('Enter side b');
let c = prompt('Enter side c');
let perimeter_triangle = a + b + c;

console.log(perimeter_triangle);


let length = prompt('Enter length');
let width = prompt('Enter width');

let area_rec = length * width;
let perimeter_rec = 2 * (length * width);

console.log(area_rec);
console.log(perimeter_rec);


let radius = prompt('Enter radius');

let area_circle = 3.14 * radius * radius;
let circumference_circle = 2 * 3.14 * radius;


let x = prompt('Enter the value of x');
let y = 2 * x - 2;

let x1 = 2;
let y1 = 2;

let x2 = 6;
let y2 = 10;

let slope = (y2 - y1) / (x2 - x1);
console.log(slope);

let y_quad = x * x + 6 * x + 9;
console.log(y);

let hours = prompt('Enter no of hours');
let rate_hour = prompt('Enter rate per hour');

let weekly_earning = hours * rate_hour;
console.log(weekly_earning);

let length_firstName = length(firstName);
if (length_firstName > 7) {
    console.log('long name');
} else {
    console.log('short name');
}

let firstName_f = 'Asabeneh'
let lastName_f = 'Yetayeh'


console.log(`Your ${firstName}, ${firstName_f} is longer than your family name, ${lastName_f}`);

let myAge = 250
let yourAge = 25

console.log(`I am ${myAge - yourAge} years older than you`);

let birthyear = prompt('Enter the birth year!');

let years_live = prompt('Enter number of years you live: ');

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}-${month}-${year} ${hours}:${minutes}`)