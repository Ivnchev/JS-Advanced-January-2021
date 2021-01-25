function attachEventsListeners() {
    let n = document.querySelector('#inputDistance')
    let o = document.querySelector('#outputDistance')
    let input = document.querySelector('#inputUnits')
    let output = document.querySelector('#outputUnits')
    document.querySelector('#convert').addEventListener('click' , () =>{
        o.value = calculate(n.value)
    })
    function calculate(v) {
        let inputObj = {
            'km': (v) => v *= 1000,
            'm': (v) => v,
            'cm': (v) => v *= 0.01,
            'mm': (v) => v *= 0.001,
            'mi': (v) => v *= 1609.34,
            'yrd': (v) => v *= 0.9144,
            'ft': (v) => v *= 0.3048,
            'in': (v) => v *= 0.0254,
        }
        let outputObj = {
            'km': (v) => v / 1000,
            'm': (v) => v,
            'cm': (v) => v * 100,
            'mm': (v) => v * 1000,
            'mi': (v) => v / 1609.34,
            'yrd': (v) => v / 0.9144,
            'ft': (v) => v / 0.3048,
            'in': (v) => v / 0.0254,
        }
        return outputObj[output.value](inputObj[input.value](v))
    }
}