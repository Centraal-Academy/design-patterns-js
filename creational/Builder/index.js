const CreditCardBuilder = require('./CreditCardBuilder')
const DirectorCardBuilder = require('./DirectorCardBuilder')

const director = new DirectorCardBuilder()
const creditCard = director.constructPlatinumCard(new CreditCardBuilder())

console.log(creditCard)
