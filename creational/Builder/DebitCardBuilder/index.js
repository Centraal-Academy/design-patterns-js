const CardBuilder = require('../CardBuilder')

module.exports = class DebitCardBuilder extends CardBuilder {
  withBenefit (benefit) {
    this.card.addBenefit(benefit)
  }

  withRestriction (restriction) {
    this.card.addRestriction(restriction)
  }
}
