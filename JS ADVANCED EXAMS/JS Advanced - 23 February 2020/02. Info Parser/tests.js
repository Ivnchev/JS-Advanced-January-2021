let Parser = require("./solution.js");
let assert = require("chai").assert;
describe("Tests …", () => {
    describe("Constructor", () => {
        it("Tests", () => {
            let expected = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]')
            assert.deepEqual(expected._data, [ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ])
            assert.deepEqual(expected._log, [])
            assert.equal(typeof expected._addToLog === 'function', true)
        });
        it("getter", () => {
            let expected = new Parser('{"deleted":"architect"}')
            assert.throw(() => expected.data, TypeError,  'this._data.filter is not a function')
        });
        it('getter', () => {
            let expected = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]')
            assert.equal(expected._addToLog('hoi'), 'Added to log')
            assert.equal(expected._log.includes('0: hoi'), true)
        })
    });
    describe('print', () => {
        it('test', () => {
            let expected = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]')
            assert.equal(expected.print(), 'id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR')
        })
    })
    describe('addEntries', () => {
        it('test', () => {
            let expected = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]')
            assert.equal(expected.addEntries('hoi'), 'Entries added!')
        })
        it('test', () => {
            let expected = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]')
            assert.throw(() => expected.addEntries(['asd']), TypeError,  'entries.split is not a function')
        })
    })
    describe('removeEntry', () => {
        let expected
        beforeEach( () => {
            expected = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]')
        })
        it('test', () => {
            assert.equal(expected.removeEntry('Nancy'), 'Removed correctly!')
        })
        it('test', () => {
            assert.throw(() => expected.removeEntry(['asd']), Error,  'There is no such entry!')
        })
        it("does it add deleted", () => {
            expected.removeEntry("Nancy")
            assert.deepEqual(expected.data, [{"John":"developer"},{"Kate": "HR"} ])
        })
        it("does it add to log", () => {
            expected.removeEntry("Nancy")
            assert.deepEqual(expected._log, [`0: removeEntry`])
        })
    })
});