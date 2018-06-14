module.exports = class Card {
  constructor (annualCost = 0) {
    this._annualCost = annualCost
    this.restrictions = []
    this.benefits = []
  }

  addBenefit (benefit) {
    this.benefits.push(benefit)
  }

  addRestriction (restriction) {
    this.restrictions.push(restriction)
  }

  get annualCost () {
    return this._annualCost
  }

  set annualCost (annualCost = 0) {
    this._annualCost = annualCost
  }
}
