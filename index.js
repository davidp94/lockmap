module.exports = class LockMap {
  /**
   * Creates a new instance of LockMap
   */
  constructor () {
    this._map = new Map()

    const methods = ['clear', 'delete', 'entries', 'forEach', 'get', 'has', 'keys', 'values', Symbol.iterator]
    const self = this
    methods.forEach(method => {
      self[method] = function () {
        return self._map[method].apply(self._map, arguments)
      }
    })
  }

  /**
   * Creates a lock on a given ID and returns a resolve function to unlock the
   * lock
   * @param {*} id
   * @return {Function} the resolve function to call once it to unlock
   */
  lock (id) {
    let r
    const promise = new Promise((resolve, reject) => {
      r = resolve
    })
    promise.then(() => {
      this._map.delete(id)
    })
    this._map.set(id, promise)
    return r
  }

  get size () {
    return this._map.size
  }

  get [Symbol.toStringTag] () {
    return 'LockMap'
  }
}
