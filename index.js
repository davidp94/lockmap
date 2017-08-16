module.exports = class LockMap {
  /**
   * Creates a new instance of LockMap
   */
  constructor () {
    this._map = new Map()
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

  /**
   * gets the current lock if any for a given id. If there is a lock this will
   * return a promise that resolves once the lock is unlocked
   * @return {Promise}
   */
  getLock (id) {
    return this._map.get(id)
  }
}
