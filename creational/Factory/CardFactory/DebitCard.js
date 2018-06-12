const Card = require('./Card')
module.exports = class DebitCard extends Card {
  constructor (cardInfo) {
    super(cardInfo.owner)
    this.amount = cardInfo.amount
  }

  withdraw () {

  }
}
