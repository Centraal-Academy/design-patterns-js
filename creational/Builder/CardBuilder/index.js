const Card = require('../Card')
module.exports = class CardBuilder {
  reset () {
    this.card = new Card()
  }

  build () {
    return this.card
  }

  withBenefit (benefit) {}

  withRestriction (restriction) {}
}
