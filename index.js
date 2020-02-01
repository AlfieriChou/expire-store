// expiration ms
module.exports = class ExpireStore {
  constructor (expiration) {
    this.expiration = expiration
    this.cache = new Map()
  }

  set (key, value) {
    this.cache.set(key, {
      value,
      expired: Date.now() + this.expiration
    })
  }

  isExpired (expired) {
    return Date.now() - expired >= 0 ? true : false
  }

  get (key) {
    const data = this.cache.get(key)
    if (!data) {
      return undefined
    }
    if (this.isExpired(data.expired)) {
      this.cache.delete(key)
      return undefined
    }
    return data.value
  }

  clear (key) {
    this.cache.clear(key)
  }
}
