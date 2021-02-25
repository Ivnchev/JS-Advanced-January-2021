class Movie {
    _movieName
    _ticketPrice
    constructor(movieName, ticketPrice) {
        Object.assign(this, { movieName, ticketPrice, screenings: [], soldTickets: 0 })
    }
    set movieName(value) {
        if (typeof value === 'string') { this._movieName = value }
    }

    get movieName() { return this._movieName }

    set ticketPrice(value) {
        let x = Number(value)
        if (typeof x === 'number') {
            this._ticketPrice = x
        }
    }
    get ticketPrice() { return this._ticketPrice }

    newScreening(date, hall, description) {
        let found = this.screenings.find(x => x.date === date && x.hall === hall)
        if (found !== undefined) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }
        this.screenings.push({ date, hall, description })
        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets) {
        let found = this.screenings.find(x => x.date === date && x.hall === hall)
        if (found === undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }
        this.soldTickets += soldTickets
        this.screenings.splice(this.screenings.indexOf(found), 1)
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${this.ticketPrice * soldTickets}`
    }
    toString() {
        return [
            `${this.movieName} full information:`,
            `Total profit: ${(this.ticketPrice * this.soldTickets).toFixed(0)}$`,
            `Sold Tickets: ${this.soldTickets}`,
            this.screenings.length > 0
                ? `Remaining film screenings:\n${this.screenings.sort((a, b) => a.hall.localeCompare(b.hall))
                    .map(x => `${x.hall} - ${x.date} - ${x.description}`)
                    .join('\n')}`
                : 'No more screenings!',
        ].join('\n')
    }
}





let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
