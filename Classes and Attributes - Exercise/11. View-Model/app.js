class Textbox {
    _value
    elements
    _invalidSymbols
    constructor(selector, regex) {
        this.value = value
        this._elements = elements
    }
    set value(value) { return this._value = value }
    get value() { return this._value }
    set _elements(value) { return this.elements = value }
    get _elements() { return this.elements }


}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
