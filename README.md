# expire-store

[![Build Status](https://github.com/AlfieriChou/expire-store/workflows/Node%20CI/badge.svg?branch=master&event=push)](https://github.com/AlfieriChou/expire-store/actions)

Expire store.

## install

```
npm install expire-store --save
```

## get started

```javascript
const ExpireStore = require('expire-store')

const testStore = new ExpreStore(2000)

testStore.set('testKey', 'testValue')
const value = testStore.get('testKey')
console.log(value) // testValue

const bootstrap = async () => {
  await sleep(3000)
  testStore.set('testExpiredKey', 'testExpiredValue')
  const value = testStore.get('testExpiredKey')
  console.log(value) // undefined
}

bootstrap()
```

## MIT

MIT License

Copyright (c) 2020 Alfieri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
