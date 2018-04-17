const functions = require('firebase-functions')
const namesArray = require('./dictionarys/namesArray')
const adjectiveAnimalArray = require('./dictionarys/adjectiveAnimalArray')
const animalArray = require('./dictionarys/animalArray')
const verbFoodArray = require('./dictionarys/verbFoodArray')
const colorArray = require('./dictionarys/colorArray')
const foodArray = require('./dictionarys/foodArray')

let selectRandomArrayItem = (array) => {
    return array[Math.floor(Math.random() * array.length)].toLowerCase()
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
        selectRandomArrayItem(namesArray.data)
        + " the " +
        selectRandomArrayItem(adjectiveAnimalArray.data)
        + " " +
        selectRandomArrayItem(animalArray.data)
        + " " +
        selectRandomArrayItem(verbFoodArray.data)
        + " " +
        selectRandomArrayItem(colorArray.data)
        + " " +
        selectRandomArrayItem(foodArray.data)
    )
})