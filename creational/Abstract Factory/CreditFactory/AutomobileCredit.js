const Credit = require('./Credit')
module.exports = class AutomobileCredit extends Credit {
  charge () {
    console.log('credit real state')
  }
}
