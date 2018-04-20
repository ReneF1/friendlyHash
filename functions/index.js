const functions = require('firebase-functions')
const namesArray = require('./dictionarys/namesArray')
const adjectiveAnimalArray = require('./dictionarys/adjectiveAnimalArray')
const animalArray = require('./dictionarys/animalArray')
const verbFoodArray = require('./dictionarys/verbFoodArray')
const colorArray = require('./dictionarys/colorArray')
const foodArray = require('./dictionarys/foodArray')
const quoteArray = require('./dictionarys/quotes')

let selectRandomArrayItemLowecase = (array) => {
    return array[Math.floor(Math.random() * array.length)].toLowerCase()
}

let selectRandomArrayItem = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello World")
})

exports.randomNumber = functions.https.onRequest((request, response) => {
    response.send(Math.random().toString())
})

// Generates 14.940.908.286.000 unique random seed words
exports.friendlyHash = functions.https.onRequest((request, response) => {
    response.send(
        selectRandomArrayItemLowecase(namesArray.data)
        + " the " +
        selectRandomArrayItemLowecase(adjectiveAnimalArray.data)
        + " " +
        selectRandomArrayItemLowecase(animalArray.data)
        + " " +
        selectRandomArrayItemLowecase(verbFoodArray.data)
        + " " +
        selectRandomArrayItemLowecase(colorArray.data)
        + " " +
        selectRandomArrayItemLowecase(foodArray.data)
    )
})
exports.animalName = functions.https.onRequest((request, response) => {
    response.send(
        selectRandomArrayItemLowecase(adjectiveAnimalArray.data)
        + " " +
        selectRandomArrayItemLowecase(animalArray.data)
    )
})
exports.inspiringQuote = functions.https.onRequest((request, response) => {
    response.send(
        selectRandomArrayItem(quoteArray.data)
    )
})