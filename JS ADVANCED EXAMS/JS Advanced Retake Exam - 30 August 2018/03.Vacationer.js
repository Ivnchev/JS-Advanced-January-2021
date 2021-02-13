class Vacationer {
    _fullName
    _creditCard
    constructor(fullName, creditCard){
        this.fullName = fullName
        this.creditCard = creditCard
        this.idNumber = this.generateIDNumber()
        this.wishList = []
    }
    set creditCard (data) {
        if(data !== undefined){
            return this.addCreditCardInfo(data)
        }
        return this._creditCard = { cardNumber: 1111, expirationDate: '', securityNumber: 111 }
    }
    get creditCard(){
        return this._creditCard
    }
    set fullName (data){
        if(data.length !== 3){ throw new Error ( 'Name must include first name, middle name and last name' ) }
        if(!data.every( name => /^[A-Z][a-z]+$/g.test(name) )){
            throw new Error ( 'Invalid full name' )
        }
        this._fullName = { firstName: data[0], middleName: data[1], lastName: data[2] }
    }
    get fullName() { return this._fullName}
    generateIDNumber() {
        let match = this.fullName.lastName[this.fullName.lastName.length - 1].match(/[aeoiu]/gmi)
        let num = match ? 8 : 7
        return `${(231 * this.fullName.firstName.charCodeAt(0)) + (139 * this.fullName.middleName.length)}${num}`
    }
    addCreditCardInfo(input){
        if(input.length !== 3){ throw new Error ( 'Missing credit card information' ) }
        if(typeof input[0] === 'string' || typeof input[2] === 'string'){
            throw new Error('Invalid credit card details')
        }
        this._creditCard = { cardNumber: Number(input[0]), expirationDate: input[1], securityNumber: Number(input[2]) }
        return this._creditCard
    }
    addDestinationToWishList(x){
        if(this.wishList.includes(x)){
            throw new Error( 'Destination already exists in wishlist' )
        }
        this.wishList.push(x)
        this.wishList.sort( (a,b) => a.length - b.length )
    }
    getVacationerInfo() {
        return [
            `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`,
            `ID Number: ${this.idNumber}`,
            `Wishlist:\n${this.wishList.length > 0 ? this.wishList.join(', ') : 'empty'}`,
            `Credit Card:\n${Object.entries(this.creditCard).map(x => `${this.cardMap[x[0]]}: ${x[1]}`).join('\n') }`,
        ].join('\n')
    }
    cardMap = {
        'cardNumber': 'Card Number',
        'expirationDate':'Expiration Date',
        'securityNumber':'Security Number',
    }

}
// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
