const Insurance = require('./Insurance')
module.exports = class RealStateInsurance extends Insurance {
  charge () {
    console.log('Insurance real state')
  }
}
