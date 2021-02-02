const rgbToHexColor = require('./index')
const assert = require('chai').assert

describe('Check for RGB to Hex', () => {
    it('Arguments are correct', () => {
        assert.equal(rgbToHexColor(10,200,255), '#0AC8FF')
    })
    it('Arguments should have int numbers', () => {
        assert.equal(rgbToHexColor(80,220,150.5), undefined)
    })
    it('Arguments should not have numbers over 255', () => {
        assert.equal(rgbToHexColor(255,270,0), undefined)
    })
    it('Arguments should be a numbers', () => {
        assert.equal(rgbToHexColor('155',150,250), undefined)
    })
    it('Arguments should not have negative numbers', () => {
        assert.equal(rgbToHexColor(-120,255,200), undefined)
    })
    it('Arguments should not have int numbers', () => {
        assert.equal(rgbToHexColor(0,0,0), '#000000')
    })
    
})