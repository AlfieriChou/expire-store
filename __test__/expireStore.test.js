const ExpireStore = require('../')

const sleep = (ms = 1000) => new Promise(resolve => {
  setTimeout(resolve, ms)
})

const testStore = new ExpireStore(2000)

describe('test expire store', () => {
  it('test get key', done => {
    testStore.set('testKey', 'testValue')
    const value = testStore.get('testKey')
    expect(value).toEqual('testValue')
    done()
  })

  it('test key expired', async done => {
    testStore.set('testExpiredKey', 'testExpiredValue')
    await sleep(3000)
    const value = testStore.get('testKey')
    expect(value).toEqual(undefined)
    done()
  })
})
