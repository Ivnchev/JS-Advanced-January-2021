function foo(town, x, y) {
    return {
        name: town,
        population: x,
        treasury: y,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate
        },
        applyGrowth(z) {
            this.population += (this.population * z) / 100 
        },
        applyRecession(z) {
            this.treasury -= (this.treasury * z) / 100 
        },
    }
}

console.log(
    foo('Tortuga',
        7000,
        15000)
    )