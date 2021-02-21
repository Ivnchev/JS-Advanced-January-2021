class Parking {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []
    }
    addCar(carModel, carNumber) {
        if (this.vehicles.length === this.capacity) {
            throw new Error('Not enough parking space.')
        }
        this.vehicles.push({ carModel, carNumber, payed: false })
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(plate) {
        let carFound = this.vehicles.find(o => o.carNumber === plate)
        if (!carFound) {
            throw new Error("The car, you're looking for, is not found.")
        }
        if (carFound.payed === false) {
            throw new Error(`${plate} needs to pay before leaving the parking lot.`)
        }
        this.vehicles.splice(this.vehicles.indexOf(carFound), 1)
        return `${plate} left the parking lot.`
    }
    pay(plate) {
        let carFound = this.vehicles.find(o => o.carNumber === plate)
        if (!carFound) {
            throw new Error(`${plate} is not in the parking lot.`)
        }
        if (carFound.payed === true) {
            throw new Error(`${plate}'s driver has already payed his ticket.`)
        }
        carFound.payed = true
        return `${plate}'s driver successfully payed for his stay.`
    }
    getStatistics(plate) {
        let carFound = this.vehicles.find(o => o.carNumber === plate)
        if (plate === undefined) {
            return [
                `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`,
                `${this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
                    .map(({ carModel, carNumber, payed }) => 
                        `${carModel} == ${carNumber} - ${payed ? 'Has payed' : 'Not payed'}`)
                        .join('\n')}`
            ].join('\n')
        } else {
            return `${carFound.carModel} == ${plate} - ${carFound.payed ? `Has payed` : `Not payed`}`
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
