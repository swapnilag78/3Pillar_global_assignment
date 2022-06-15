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
let countries;
let languages = [];
let largestCountries = [];
const url = 'https://restcountries.com/v2/all'
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        countries = data;
        countries.forEach(country => {
            console.log(`country:${country.name} capital:${country.capital} languages:${country.languages} population${country.population}`)
        })

        countries.forEach(country => {
            country.languages.forEach(language => {
                if (languages.indexOf(language.name) === -1) {
                    languages.push(language.name)
                }
            })
        })

        let highestCountry = 0;

        countries.forEach(country => {
            if (country.area >= highestCountry) {
                highestCountry = country.area;
                largestCountries.push(country)
            }
        })
        console.log(`the total number of languages in the world is ${languages.length}`)
    } catch (err) {
        console.log(err)
    }
}
console.log('===== async and await')
fetchData();


let catNames = [];
let cats = []
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(cat => {
            cats.push(cat);
        })
    })
    .catch(error => console.log(error))

if (catNames) {
    cats.forEach(cat => {
        catNames.push(cat.name)
    })
    console.log(catNames)
}