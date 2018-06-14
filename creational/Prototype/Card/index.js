module.exports = class Card {
  constructor (source) {
    this.owner = source.owner
    this.ccv = source.ccv
  }

  clone () {}
}
