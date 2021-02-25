function solveClasses() {
    class Hall {
        constructor(capacity, name) {
            this.capacity = capacity
            this.name = name
            this.events = []
            this.performers = []
        }
        set capacity (value){
            if(Number(value)) {
            this._capacity = Number(value)
            }
        }
        get capacity(){
            return this._capacity
        }
        set name (value) {
            if(isNaN(value)) {
                this._name = value
            }
        }
        get name(){
            return this._name
        }
        hallEvent(title) {
            if(this.events.includes(title)){
                throw new Error('This event is already added!')
            }
            this.events.push(title)
            return 'Event is added.'
        }
        close(){
            this.events = []
            return `${this.name} hall is closed.`
        }
        toString(){
            return [
                `${this.name} hall - ${this.capacity}`,
                `${this.events.length > 0 
                    ? `Events: ` + this.events.join(', ')
                    : ''
                }`,
            ].join('\n').trim()
        }

    }

    class MovieTheater extends Hall{
        constructor(capacity, name, screenSize){
            super(capacity, name)
            this.screenSize = screenSize
        }
        set screenSize (value) {
            if(isNaN(value)) {
                this._screenSize = value
            }
        }
        get screenSize(){
            return this._screenSize
        }
        close(){
            return super.close() + 'Аll screenings are over.'
        }
        toString(){
            return [ 
                super.toString(),
                `${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`
            ].join('\n')
        }
    }

    class ConcertHall extends Hall {
        constructor(capacity, name){
            super(capacity, name)
            this.events = []
        }

        hallEvent(title, performers) {
            this.performers.push(performers)
            return super.hallEvent(title)
        }
        close() {
            return super.close() + 'Аll performances are over.'
        }
        toString() {
            return [super.toString(),
                `${this.events.length > 0 ? 'Performers:' + this.performers.join(', ') + '.': ''}`
            ].join('\n').trim()
        }

    }
    return {
        Hall,
        MovieTheater,
        ConcertHall
    }
}





let classes = solveClasses();
let hall = new classes.Hall(20, 'Main');
console.log(hall.hallEvent('Breakfast Ideas'));
console.log(hall.hallEvent('Annual Charity Ball'));
console.log(hall.toString());
console.log(hall.close()); 
// --------------------------------------------------------------------------------------
let movieHall = new classes.MovieTheater(10, 'Europe', '10m');
console.log(movieHall.hallEvent('Top Gun: Maverick')); 
console.log(movieHall.toString());
// --------------------------------------------------------------------------------------
let concert = new classes.ConcertHall(5000, 'Diamond');        
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));  
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());
