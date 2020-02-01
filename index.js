// expiration ms
module.exports = class ExpireStore {
  constructor (expiration) {
    this.expiration = expiration
    this.cache = new Map()
  }

  set (key, value) {
    this.cache.set(key, JSON.stringify({
      value,
      expired: Date.now() + this.expiration
    }))
  }

  isExpired (expired) {
    return Date.now() - expired >= 0 ? true : false
  }

  get (key) {
    const data = this.cache.get(key)
    if (!data) {
      return undefined
    }
    const { value, expired } = JSON.parse(data)
    if (this.isExpired(expired)) {
      this.cache.delete(key)
      return undefined
    }
    return value
  }
}
