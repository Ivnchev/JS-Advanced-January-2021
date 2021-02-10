const isOddOrEven = require('./index')
const assert = require('chai').assert

describe('Checking the implementation', () => {
    it('Should return Error if there is a Number input', () => {
        assert.equal(isOddOrEven(5), undefined)
    })
    it('Should return even', () => {
        assert.equal(isOddOrEven('haha'), 'even')
    })
    it('Should return odd', () => {
        assert.equal(isOddOrEven('IsNotEven'), 'odd')
    })
})