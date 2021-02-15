const ChristmasMovies = require('./index')
const { assert, expect } = require('chai')

describe("Tests …", () => {
    describe("instance of", () => {
        it("should be instance of ChristmasMovies", () => {
            assert.equal(new ChristmasMovies() instanceof ChristmasMovies, true)
        });
        it('movieCollection should be instance of movieCollection', () => {
            let expected = new ChristmasMovies()
            assert.equal(expected.movieCollection.length, 0)
            assert.equal(Array.isArray(expected.movieCollection), true)
        })
        it('watched should be instance of ChristmasMovies', () => {
            let expected = new ChristmasMovies()
            assert.equal(Object.keys(expected.watched).length, 0)
            assert.equal(typeof expected.watched, 'object')
        })
        it('actors should be instance of ChristmasMovies', () => {
            let expected = new ChristmasMovies()
            assert.equal(expected.actors.length, 0)
            assert.equal(Array.isArray(expected.actors), true)
        })
    });
    describe('buyMovie check functionality', () => {
        it('check movieColection', () => {
            let expected = new ChristmasMovies()
            expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            let found = expected.movieCollection.find(x => x.name === 'Home Alone')
            assert.notEqual(found, undefined)
        })
        it('check', () => {
            let expected = new ChristmasMovies()
            expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            let notFound = expected.movieCollection.find(x => x.name === 'AHomelone')
            assert.equal(notFound, undefined)
        })
        it('error', () => {
            let expected = new ChristmasMovies()
            expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            assert.throw(() => expected.buyMovie('Home Alone', []), Error, `You already own Home Alone in your collection!`)
        })
        it('check actors', () => {
            let expected = new ChristmasMovies()
            expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            expected.buyMovie('Home Alone 2020', ['Macaulay Culkin', 'Macaulay Culkin', 'Macaulay Culkin'])
            let found = expected.movieCollection.find(x => x.name === 'Home Alone 2020')
            assert.equal(JSON.stringify(found.actors), '["Macaulay Culkin"]')
        })
        it('return msg', () => {
            let expected = new ChristmasMovies()
            assert.equal(
                expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']),
                `You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!`
            )
        })



    })
    describe('discardMovie check functionality', () => {
        it('check', () => {
            let expected = new ChristmasMovies()
            assert.throw(() => expected.discardMovie('undefined'), Error, `undefined is not at your collection!`)
        })
        it('check', () => {
            let expected = new ChristmasMovies()
            expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']),
                expected.watchMovie('Home Alone')
            assert.equal(expected.discardMovie("Home Alone"), `You just threw away Home Alone!`)
        })
        it('check', () => {
            let expected = new ChristmasMovies()
            expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']),
                expected.watchMovie('Home Alone')
            expected.discardMovie('Home Alone')
            assert.deepEqual(expected.movieCollection, [])
        })
        it('check', () => {
            let expected = new ChristmasMovies()
            expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            expected.watchMovie('Home Alone')
            expected.discardMovie('Home Alone')
            assert.deepEqual(expected.watched, {})
        })
    })
    describe('watchMovie check functionality', () => {
        it('check', () => {
            let expected = new ChristmasMovies()
            assert.throw(() => expected.watchMovie('undefined'), Error, `No such movie in your collection!`)
        })
        it('check', () => {
            let expected = new ChristmasMovies()
            expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            expected.watchMovie('Home Alone')
            assert.deepEqual(expected.watched, { 'Home Alone': 1 })
        })
        it('check', () => {
            let expected = new ChristmasMovies()
            expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            expected.watchMovie('Home Alone')
            expected.watchMovie('Home Alone')
            assert.deepEqual(expected.watched, { 'Home Alone': 2 })
        })
    })
    describe('favouriteMovie check functionality', () => {
        it('check', () => {
            let expected = new ChristmasMovies()
            assert.throw(() => expected.favouriteMovie(), Error, 'You have not watched a movie yet this year!')
        })
        it('check', () => {
            let expected = new ChristmasMovies()
            expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            expected.buyMovie('Home Alone2', ['Muja i rukata', 'Joe Pederasci', 'Daniel Sperm'])

            expected.watchMovie('Home Alone')
            expected.watchMovie('Home Alone')
            expected.watchMovie('Home Alone')
            expected.watchMovie('Home Alone2')
            assert.equal(expected.favouriteMovie(), 'Your favourite movie is Home Alone and you have watched it 3 times!')
        })
    })
    describe('mostStarredActor check functionality', () => {
        it('check', () => {
            let expected = new ChristmasMovies()
            assert.throw(() => expected.mostStarredActor(), Error, 'You have not watched a movie yet this year!')
        })
        it('check', () => {
            let expected = new ChristmasMovies()
            expected.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            expected.buyMovie('Home Alone2', ['Joe Pesci', 'Daniel Stern'])
            expected.buyMovie('Home Alone3', ['Daniel Stern'])
            assert.equal(expected.mostStarredActor(), 'The most starred actor is Daniel Stern and starred in 3 movies!')
        })
    })

});

// "test": "mocha tests/**/*.test.js"