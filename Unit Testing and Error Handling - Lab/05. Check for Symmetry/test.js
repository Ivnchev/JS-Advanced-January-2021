const isSymmetric = require('./index')
const assert = require('chai').assert

describe('Check for symmetric', () => {
    it('The argument should be an array', () => {
        assert.equal( isSymmetric(10), false)
    })
    it('Should return true if the array is symmetric', () => {
        assert.equal( isSymmetric([10,10,10]), true )
    })
    it('Should return false if the array is not symmetric', () => {
        assert.equal( isSymmetric([10,20,30,40,50,60]), false )
    })
    it('Should return true if the array is symmetric', () => {
        assert.equal( isSymmetric([5]), true )
    })
    it('Should return false if the array is symmetric', () => {
        assert.equal( isSymmetric([-10,20,30,30,20,-10]), true )
    })
    it('Should return false if the array is symmetric', () => {
        assert.equal( isSymmetric(['asd',[1,2,3], 0, [1,2,3], 'asd']), true )
    })

})