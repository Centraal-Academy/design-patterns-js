module.exports = class PoolManager {
  constructor (Product, maxSize) {
    this.Product = Product
    this.maxSize = maxSize
    this.free = maxSize
    this.pool = []
  }

  acquire () {
    let instance = null
    if (this.pool.length) {
      instance = this.pool.pop()
      this.free--
    } else {
      if (this.free > 0) {
        instance = new this.Product()
        this.free--
      }
    }
    return instance
  }

  release (instance) {
    if (this.pool.length < this.maxSize) {
      this.free++
      this.pool.push(instance)
    }
  }
}
