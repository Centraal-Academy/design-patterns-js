const CreditCard = require('./CreditCard')
const DebitCard = require('./DebitCard')

module.exports = class CardFactory {
  static create (cardInfo) {
    let card = ''
    switch (cardInfo.type) {
      case 'credit':
        card = new CreditCard(cardInfo)
        break
      default:
        card = new DebitCard(cardInfo)
        break
    }
    return card
  }
}
