function extendClass(Parent) {
    Parent.prototype.species = 'Human'
    Parent.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}