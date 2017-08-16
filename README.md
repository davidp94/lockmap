# SYNOPSIS 
[![NPM Package](https://img.shields.io/npm/v/lockmap.svg?style=flat-square)](https://www.npmjs.org/package/lockmap)
[![Build Status](https://img.shields.io/travis/wanderer/lockmap.svg?branch=master&style=flat-square)](https://travis-ci.org/wanderer/lockmap)
[![Coverage Status](https://img.shields.io/coveralls/wanderer/lockmap.svg?style=flat-square)](https://coveralls.io/r/wanderer/lockmap)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  

Creates a map of locks to ids that can be used as a semaphore

# INSTALL
`npm install <name>`

# USAGE

```javascript
const LockMap = require('lockmap')

const lockmap = new LockMap()
const id = 'test'

// set a lock for an id
const unlock = lockmap.lock(id)

setTimeout(() => {
  // do some async work
  console.log('here first!')
  unlock()
}, 300)

// wait until the lock resolves
await lockmap.getLock(id)
console.log('here now!')
```

# API

## getLock

[index.js:29-31](https://github.com/wanderer/generic-module/blob/7a91dcb08427a3276a9c9da718c759f1631dc1f5/index.js#L29-L31 "Source code on GitHub")

gets the current lock if any for a given id. If there is a lock this will
return a promise that resolves once the lock is unlocked
return {Promise}

**Parameters**

-   `id`  

## lock

[index.js:12-22](https://github.com/wanderer/generic-module/blob/7a91dcb08427a3276a9c9da718c759f1631dc1f5/index.js#L12-L22 "Source code on GitHub")

Creates a lock on a given ID and returns a resolve function to unlock the
lock

**Parameters**

-   `id` **Any** 

Returns **function** the resolve function to call once it to unlock

# LICENSE
[MPL-2.0](https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2))
