const Card = require('./Card')
module.exports = class CreditCard extends Card {
  constructor (cardInfo) {
    super(cardInfo.owner)
    this.maxAmount = cardInfo.maxAmount
    this.pendentAmount = cardInfo.pendentAmount
  }

  withdraw () {

  }
}
