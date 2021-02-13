let HolidayPackage = require("./index.js.js");
let assert = require("chai").assert;

describe("Tests …", () => {
    let obj
    beforeEach( () => obj = new HolidayPackage('Bansko', 'Winter') )

    let testAddVacationers = [
        [[], Error,'Vacationer name must be a non-empty string'],
        [{}, Error,'Vacationer name must be a non-empty string',],
        ['Kolio', Error, 'Name must consist of first name and last name'],
        [' ', Error, 'Vacationer name must be a non-empty string']
    ]
    let testGetter = [
        [{}, Error, 'Insurance status must be a boolean'],
        [5, Error,'Insurance status must be a boolean'],
        ['Kolio', Error, 'Insurance status must be a boolean'],
        [' ', Error, 'Insurance status must be a boolean']
    ]
    describe( 'Constructor:...', () => {
        it('test', () => {
            assert.equal(obj.destination, 'Bansko')
            assert.equal(obj.season, 'Winter')
            assert.equal(obj.insuranceIncluded, false)
            assert.deepEqual(obj.vacationers, [])
        })
    })
    describe("Methods", () => {
        it("Tests", () => {
            obj.addVacationer('Kolio Kolev')
            obj.addVacationer('Penka Koleva')
            assert.equal(obj.vacationers[0], 'Kolio Kolev')
            assert.deepEqual(obj.vacationers, [ 'Kolio Kolev', 'Penka Koleva' ])

        })
        testAddVacationers.forEach( ([x, err, msg]) => {
        it(`Tests testAddVacationers`, () => assert.throw(()=> obj.addVacationer(x), err, msg) ) })

        it("Tests showVacationers", () => {    
            assert.equal(obj.showVacationers(), 'No vacationers are added yet')
        })
        it("Tests showVacationers", () => {  
            obj.addVacationer('Kolio Kolev')
            obj.addVacationer('Penka Koleva')
            obj.addVacationer('Slavka Koleva')
            assert.equal(obj.showVacationers(), `Vacationers:\nKolio Kolev\nPenka Koleva\nSlavka Koleva`)
        })
        it("Tests insuranceIncluded getter", () => {  
            assert.equal(obj.insuranceIncluded = true, true)
        })
        testGetter.forEach( ([x,err,msg]) => {
            it(`Tests testAddVacationers`, () => assert.throw(()=> obj.insuranceIncluded = x, err, msg) )})

        it("Tests generateHolidayPackage", () => {   
            obj.addVacationer('Kolio Kolev')
            assert.equal(obj.generateHolidayPackage(), 'Holiday Package Generated\nDestination: Bansko\nVacationers:\nKolio Kolev\nPrice: 600' )
        })
        it("Tests generateHolidayPackage", () => {   
            assert.throw( () => obj.generateHolidayPackage(), Error, 'There must be at least 1 vacationer added')
        })
        it("Tests generateHolidayPackage", () => {  
            obj = new HolidayPackage('Bansko', 'Spring')
            obj.addVacationer('Kolio Kolev')
            assert.equal(obj.generateHolidayPackage(), 'Holiday Package Generated\nDestination: Bansko\nVacationers:\nKolio Kolev\nPrice: 400' )
        })
        it("Tests generateHolidayPackage", () => {  
            obj = new HolidayPackage('Bansko', 'Summer')
            obj.addVacationer('Kolio Kolev')
            assert.equal(obj.generateHolidayPackage(), 'Holiday Package Generated\nDestination: Bansko\nVacationers:\nKolio Kolev\nPrice: 600' )
        })
        it("Tests generateHolidayPackage", () => {  
            obj.insuranceIncluded = true
            obj.addVacationer('Kolio Kolev')
            assert.equal(obj.generateHolidayPackage(), 'Holiday Package Generated\nDestination: Bansko\nVacationers:\nKolio Kolev\nPrice: 700')
        })
    })
});
