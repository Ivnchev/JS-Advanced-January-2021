class Bank {
    constructor(bankName) {
        this._bankName = bankName
        this.allCustomers = []
    }
    newCustomer(customer) {
        if (this.allCustomers.find(o => o.personalId === customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        this.allCustomers.push(customer)
        return customer
    }
    depositMoney(personalId, amount) {
        let person = this.allCustomers.find(o => o.personalId === personalId)
        if (!person) {
            throw new Error('We have no customer with this ID!')
        }
        if(person.totalMoney === undefined) { person.totalMoney = 0 }
        if(person.transactions === undefined) { person.transactions = [] }
        person.totalMoney += amount
        person.transactions.push(`${person.firstName} ${person.lastName} made deposit of ${amount}$!`)
        return `${person.totalMoney}$`
    }
    withdrawMoney(personalId, amount) {
        let person = this.allCustomers.find(o => o.personalId === personalId)
        if (!person) {
            throw new Error('We have no customer with this ID!')
        }
        if (person.totalMoney < amount) {
            throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`)
        }
        person.totalMoney -= amount
        person.transactions.push(`${person.firstName} ${person.lastName} withdrew ${amount}$!`)
        return `${person.totalMoney}$`
    }
    customerInfo(personalId) {
        let person = this.allCustomers.find(o => o.personalId === personalId)
        if (!person) {
            throw new Error('We have no customer with this ID!')
        }
        return [
            `Bank name: ${this._bankName}`,
            `Customer name: ${ person.firstName } ${ person.lastName }`,
            `Customer ID: ${ personalId }`,
            `Total Money: ${ person.totalMoney }$`,
            `Transactions:`,
            `${person.transactions.map( (x,i) => `${i+1}. ${x}`).sort( (a,b) => b.localeCompare(a)).join('\n')}`
        ].join('\n')
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
