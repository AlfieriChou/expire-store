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

  it('test cover key', done => {
    testStore.set('testKey1', 'testValue1')
    testStore.set('testKey1', 'testValue2')
    const value = testStore.get('testKey1')
    expect(value).toEqual('testValue2')
    done()
  })

  it('test clear key', done => {
    testStore.set('testClearKey', 'testClearValue')
    testStore.clear('testClearKey')
    const value = testStore.get('testClearKey')
    expect(value).toEqual(undefined)
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
