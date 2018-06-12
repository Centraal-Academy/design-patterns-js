const CardFactory = require('./CardFactory')
const cardInfo = {
  owner: 'Joel Humberto Gómez Paredes',
  type: 'credit'
}

const creditCard = CardFactory.create(cardInfo)
console.log(creditCard.owner)
