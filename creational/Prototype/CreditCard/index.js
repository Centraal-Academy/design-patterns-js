const Card = require('./Card')
module.exports = class CreditCard extends Card {
  constructor (source) {
    super(source)
    this.type = 'credit'
  }

  clone (source) {
    return new CreditCard(this)
  }
}
