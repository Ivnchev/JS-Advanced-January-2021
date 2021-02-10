const mathEnforcer = require('./index')
const {assert, expect} = require('chai')

describe('mathEnforcer', () => {

    describe('addFive check', () => {
        it('Should return undefined if the input is incorrect', () => {
            assert.equal(mathEnforcer.addFive('haha'), undefined)
        })
        it('should return 50', () => {
            assert.equal(mathEnforcer.addFive(45), 50)
        })
        it('should return 4', () => {
            assert.equal(mathEnforcer.addFive(-1), 4)
        })
        it('Should return correct answer', () => {
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.001)
        })
        
    })
    describe('subtractTen check', () => {
        it('Should return undefined if the input is incorrect', () => {
            assert.equal(mathEnforcer.subtractTen('haha'), undefined)
        })
        it('should return 40', () => {
            assert.equal(mathEnforcer.subtractTen(50), 40)
        })
        it('should return -11', () => {
            assert.equal(mathEnforcer.subtractTen(-1), -11)
        })
        it('Should return correct answer', () => {
            expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.001)
        })
    })
    describe('sum check', () => {
        it('Should return undefined if the output is incorrect', () => {
            assert.equal(mathEnforcer.sum('haha', 1), undefined)
        })
        it('Should return undefined if the output is incorrect', () => {
            assert.equal(mathEnforcer.sum(1, 'haha'), undefined)
        })
        it('should return 10', () => {
            assert.equal(mathEnforcer.sum(2,2), 4)
        })
        it('should return -20', () => {
            assert.equal(mathEnforcer.sum(-10,-10), -20)
        })
        it('Should return correct answer', () => {
            expect(mathEnforcer.sum(15.5, 1.7)).to.be.closeTo(17.2 ,0.001)
        })
    })
})