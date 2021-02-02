const sum = require('./index')
const assert = require('chai').assert

describe('Check function Sum', () => {
    it('Should return sum of the array element', () => {
        assert.equal(sum([1,1,1]), 3)
    })
    it('Should throw error if arrgument is not an array', () => {
        assert.throw(() => sum(10), 'arr is not iterable')
    })
    it('Should contains only numbers', () => {
        assert.equal(isNaN( sum([{},{},{}]) ),true)
    })
})