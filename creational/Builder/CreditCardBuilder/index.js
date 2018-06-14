const CardBuilder = require('../CardBuilder')

module.exports = class CreditCardBuilder extends CardBuilder {
  withBenefit (benefit) {
    this.card.addBenefit(benefit)
  }

  withRestriction (restriction) {
    this.card.addRestriction(restriction)
  }
}
