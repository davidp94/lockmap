const tape = require('tape')
const LockMap = require('../')

tape('lockmap tests', async t => {
  t.plan(4)
  // create a new lock map
  const lockmap = new LockMap()
  t.equals(lockmap.toString(), '[object LockMap]')
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

  t.equals(lockmap.size, 1)

  // wait until the lock resolves
  await lockmap.get(id)
  t.equals(first, false)
})
