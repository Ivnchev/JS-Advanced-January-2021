const createCalculator = require('./index')
const assert = require('chai').assert

describe('function check', () => {
    let calc;
    beforeEach( () => {
        calc = createCalculator()
    })
    describe('Add or Subtract check', () => {
        it('Should return 0', () => {
            assert.equal(calc.get(), 0)
        })
        it('Should return negative number', () => {
            calc.add(3)
            calc.add(7)
            calc.subtract(20)
            assert.equal(calc.get(), -10)
        })
        it('Should cast the string to Number and return a Number', () => {
            calc.add('5.5')
            calc.add('1.1')
            assert.equal(calc.get(), 6.6)
        })
        it('Should return non integer number', () => {
            calc.add(3.2)
            calc.add(3.2)
            assert.equal(calc.get(), 6.4)
        })
        it('Should return positive integer number', () => {
            calc.add(3)
            calc.add(3)
            assert.equal(calc.get(), 6)
        })
        it('Should return negative number', () => {
            calc.subtract(20)
            assert.equal(calc.get(), -20)
        })
    })
})