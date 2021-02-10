const StringBuilder = require('./index')
const {assert, expect} = require('chai')

describe('StringBuilder', () => {
    it('Should be instance of StringBuilder', () => {
        let expected = new StringBuilder()
        assert.equal(expected instanceof StringBuilder, true)
    })
    it('Can be instantianated with a passed in string argument', () => {
        let expected = new StringBuilder('Haha')
        expect(expected._stringArray).to.have.lengthOf(4);
    })
    it('testing Prepend to Throw Error', () => {
        let expected = new StringBuilder('Haha')
        expect(() =>expected.append(1)).to.Throw(TypeError)
    })
    it('testing Append string length', () => {
        let expected = new StringBuilder('Haha')
        expected.append('Test')
        expect(expected._stringArray).to.have.lengthOf(8);
    })
    it('testing Append string last index', () => {
        let expected = new StringBuilder('Haha')
        expected.append('Test')
        expect(expected._stringArray[0]).to.be.equal('H')
    })
    it('testing Prepend to Throw Error', () => {
        let expected = new StringBuilder('Haha')
        expect(() =>expected.prepend(1)).to.Throw(TypeError)
    })
    it('testing Prepend string last index', () => {
        let expected = new StringBuilder('Haha')
        expected.prepend('Test')
        expect(expected._stringArray[0]).to.be.equal('T')
    })
    it('testing insertAt with input', () => {
        let expected = new StringBuilder('Haha')
        expected.insertAt('N', 1)
        expect(expected._stringArray[1]).to.be.equal('N')
    })
    it('testing insertAt with input', () => {
        let expected = new StringBuilder('Haha')
        expected.insertAt('N', 1)
        expect(expected._stringArray[1]).to.be.equal('N')
    })
    it('testing insertAt to Throw error', () => {
        let expected = new StringBuilder('Haha')
        expect(() => expected.insertAt(2,1)).to.Throw(TypeError)
    })
    it('testing toString for correct functionality', () => {
        let expected = new StringBuilder('Haha')
        expect(expected.toString()).to.be.equal('Haha')
    })
    it('testing the arguments', () => {
        expect(() => new StringBuilder(5)).to.Throw(TypeError)
    })
    it('testing the arguments', () => {
        expect(() => new StringBuilder(true)).to.Throw(TypeError)
    })
    it("does it have method called _verifyParam", () => {
        assert.equal(StringBuilder.hasOwnProperty("_vrfyParam"), true)
    })
    it("does it have method called _verifyParam", () => {
        let expected = new StringBuilder('haha')
        expected.append(', nope')
        expected.prepend('you wont block me,')
        expected.insertAt('blqblq, 5')
        expected.remove(6, 3)
        assert.equal(expected.toString(), 'blqblqyou wont block me,haha, nope')
    })
})