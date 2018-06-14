const Card = require('./Card')
module.exports = class DebitCard extends Card {
  constructor (source) {
    super(source)
    this.type = 'debit'
  }

  clone (source) {
    return new DebitCard(this)
  }
}
