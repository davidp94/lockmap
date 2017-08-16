const tape = require('tape')
const LockMap = require('../')

tape('lockmap tests', async (t) => {
  t.plan(2)
  // create a new lock map
  const lockmap = new LockMap()
  const id = 'test'

  let first = true

  // set a lock for an id
  const unlock = lockmap.lock(id)

  setTimeout(() => {
    // do some async work
    t.equals(first, true)
    first = false
    unlock()
  }, 300)

  // wait until the lock resolves
  await lockmap.getLock(id)
  t.equals(first, false)
})
