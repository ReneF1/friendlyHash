const functions = require('firebase-functions')
const colorArray = require('./dictionarys/colorArray')
const adjectiveArray = require('./dictionarys/adjectiveArray')
const animalArray = require('./dictionarys/animalArray')
const verbArray = require('./dictionarys/verbArray')
const nounArray = require('./dictionarys/nounArray')

let selectRandomArrayItem = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello World")
})

exports.randomNumber = functions.https.onRequest((request, response) => {
    response.send(Math.random().toString())
})

exports.friendlyHash = functions.https.onRequest((request, response) => {
    response.send(
        selectRandomArrayItem(colorArray.data)
        + " " +
        selectRandomArrayItem(animalArray.data)
        + " " +
        selectRandomArrayItem(verbArray.data)
        + " a " +
        selectRandomArrayItem(adjectiveArray.data)
        + " " +
        selectRandomArrayItem(nounArray.data)
    )
})