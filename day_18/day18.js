/*
Exercises: Level 1
Read the countries API using fetch and print the name of country, capital, languages, population and area.
Exercises: Level 2
Print out all the cat names in to catNames variable.
Exercises: Level 3
Read the cats api and find the average weight of cat in metric unit.
Read the countries api and find out the 10 largest countries
Read the countries api and count total number of languages in the world used as officials.
*/

import fetch from 'node-fetch';


console.log(data);
fetch('https://restcountries.eu/rest/v2/alpha/cn')
  .then(res => res.json())
  .then(data => initialize(data))
  .catch(err => console.log('Error:', err.message)); // (I fixed this)

// A little destructuring...
function initialize({
  name,
  capital,
  callingCodes,
  population,
  currencies,
  region
}) {
  console.log({
    name,
    capital,
    callingCodes,
    population,
    currencies,
    region
  })
}