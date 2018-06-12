const Insurance = require('./Insurance')
module.exports = class AutomobileInsurance extends Insurance {
  charge () {
    console.log('insurance automobile')
  }
}
