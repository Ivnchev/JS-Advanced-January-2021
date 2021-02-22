class VeterinaryClinic {

    constructor(clinicName, capacity) {
        Object.assign(this, { clinicName, capacity, clients: [], totalProfit: 0, currentWorkload: 0 })
    }
    getClient(ownerName) {
        return this.clients.find(o => o.ownerName === ownerName)
    }
    getPet(owner, petName) {
        if (!owner) { return }
        return owner.pets.find(x => x.petName === petName)
    }
    newCustomer(ownerName, petName, kind, procedures) {

        if (this.capacity <= this.currentWorkload) {
            throw new Error('Sorry, we are not able to accept more patients!')
        }
        let checkOwner = this.getClient(ownerName)
        let checkPet = this.getPet(checkOwner, petName)
        if (checkOwner && checkPet) {
            if (checkPet.procedures.length > 0) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${checkPet.procedures.join(', ')}.`)
            }
        }
        if (!checkOwner) {
            checkOwner = { ownerName, pets: [] }
            this.clients.push(checkOwner)
        }
        checkOwner.pets.push({ petName, kind, procedures })
        this.currentWorkload++
        return `Welcome ${petName}!`
    }
    onLeaving(ownerName, petName) {
        let checkOwner = this.getClient(ownerName)
        if (!checkOwner) {
            throw new Error('Sorry, there is no such client!')
        }
        let crntPet = this.getPet(checkOwner, petName)
        if (!crntPet || crntPet.procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        }
        this.currentWorkload--
        this.totalProfit += crntPet.procedures.length * 500
        crntPet.procedures = []
        return `Goodbye ${petName}. Stay safe!`
    }
    toString() {
        let result = [`${this.clinicName} is ${Math.floor(this.currentWorkload / this.capacity * 100)}% busy today!`]
        result.push(`Total profit: ${this.totalProfit.toFixed(2)}$`)
        result.push(this.getSorted(this.clients))
        return result.join('\n')
    }
    getSorted(clients) {
        return clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName))
            .map(({ ownerName, pets }) => {
                return `${ownerName} with:\n${
                    pets.sort((a, b) => a.petName.localeCompare(b.petName))
                        .map(({ kind, petName, procedures }) => {
                            return `---${petName} - a ${kind.toLowerCase()} that needs: ${procedures.join(', ')}`
                        }).join('\n')}`
            }).join('\n')
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());

