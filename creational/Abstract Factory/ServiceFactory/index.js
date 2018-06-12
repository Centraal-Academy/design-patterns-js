const CreditFactory = require('../CreditFactory')
const InsuranceFactory = require('../InsuranceFactory')

module.exports = {
  getFactory (type) {
    let factory = ''
    switch (type) {
      case 'credit':
        factory = new CreditFactory()
        break
      case 'insurance':
        factory = new InsuranceFactory()
        break
      default:
        throw new Error('You must specify a factory')
    }
    return factory
  }
}
