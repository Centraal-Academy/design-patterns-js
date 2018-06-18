let store = null
module.exports = class Storage {
  connect () {
    console.log('Connected')
  }
  static getInstance () {
    if (!store) {
      store = new Storage()
    }
    return store
  }
}
