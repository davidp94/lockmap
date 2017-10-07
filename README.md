# SYNOPSIS :lock: :globe_with_meridians: 

[![Greenkeeper badge](https://badges.greenkeeper.io/wanderer/lockmap.svg)](https://greenkeeper.io/)

[![NPM Package](https://img.shields.io/npm/v/lockmap.svg?style=flat-square)](https://www.npmjs.org/package/lockmap)
[![Build Status](https://img.shields.io/travis/wanderer/lockmap.svg?branch=master&style=flat-square)](https://travis-ci.org/wanderer/lockmap)
[![Coverage Status](https://img.shields.io/coveralls/wanderer/lockmap.svg?style=flat-square)](https://coveralls.io/r/wanderer/lockmap)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  

Creates a promise based map of locks that can be used as a semaphore

# INSTALL
`npm install lockmap`

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

-   [constructor](#constructor)
-   [lock](#lock)
-   [getLock](#getlock)

## constructor

[index.js:5-7](https://github.com/wanderer/lockmap/blob/01587eaf141302ad9c7d7c412205e3c0188dcd49/index.js#L5-L7 "Source code on GitHub")

Creates a new instance of LockMap

## lock

[index.js:15-25](https://github.com/wanderer/lockmap/blob/01587eaf141302ad9c7d7c412205e3c0188dcd49/index.js#L15-L25 "Source code on GitHub")

Creates a lock on a given ID and returns a resolve function to unlock the
lock

**Parameters**

-   `id` **any** 

Returns **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** the resolve function to call once it to unlock

## getLock

[index.js:32-34](https://github.com/wanderer/lockmap/blob/01587eaf141302ad9c7d7c412205e3c0188dcd49/index.js#L32-L34 "Source code on GitHub")

gets the current lock if any for a given id. If there is a lock this will
return a promise that resolves once the lock is unlocked

**Parameters**

-   `id`  

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** 

# LICENSE
[MPL-2.0](https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2))
