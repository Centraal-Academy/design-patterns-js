const AutomobileInsurance = require('./AutomobileInsurance')
const RealStateInsurance = require('./RealStateInsurance')
const AbstractServiceFactory = require('../AbstractServiceFactory')

module.exports = class InsuranceFactory extends AbstractServiceFactory {
  createForAutomobile () {
    return new AutomobileInsurance()
  }
  createForRealState () {
    return new RealStateInsurance()
  }
}
