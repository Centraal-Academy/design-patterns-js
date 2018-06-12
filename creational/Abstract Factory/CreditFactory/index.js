const AutomobileCredit = require('./AutomobileCredit')
const RealStateCredit = require('./RealStateCredit')
const AbstractServiceFactory = require('../AbstractServiceFactory')

module.exports = class CreditFactory extends AbstractServiceFactory {
  createForAutomobile () {
    return new AutomobileCredit()
  }
  createForRealState () {
    return new RealStateCredit()
  }
}
