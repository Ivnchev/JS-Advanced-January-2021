const {lookupChar} = require('./index')
const {assert} = require('chai')

describe('Checking the implementation', () => {
    it('Should return undefined if there is incorect input', () => {
        assert.equal(lookupChar(2,5), undefined)
    })
    it('Should return undefined if there is incorect input', () => {
        assert.equal(lookupChar('hahah','hahaha'), undefined)
    })
    it('Should return incorrect index if the index is incorrect', () => {
        assert.equal(lookupChar('hahah', 5), 'Incorrect index')
    })
    it('Should return incorrect index if the index is incorrect', () => {
        assert.equal(lookupChar('hahah', -2), 'Incorrect index')
    })
    it('Should return incorrect index if the index is incorrect', () => {
        assert.equal(lookupChar('hahah', 1.22), undefined)
    })
    it('Should return incorrect index if the index is incorrect', () => {
        assert.equal(lookupChar('hahah', 100), 'Incorrect index')
    })
    it('Should return the charecter of the correct index ', () => {
        assert.equal(lookupChar('hahah', 2), 'h')
    })
    it('Should return the charecter of the correct index ', () => {
        assert.equal(lookupChar('hahah', 3), 'a')
    })
})