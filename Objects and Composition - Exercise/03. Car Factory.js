function cars(car) {
    let {model,power,color,carriage,wheelsize} = car;
    function enginePower(power) {
        let r
        if(power <= 90) { r = {power: 90, volume: 1800} }
        else if(power <= 120) { r = { power: 120, volume: 2400 } }
        else if(power <= 200) { r = { power: 200, volume: 3500 } }
        return r
    }
    function carriageInfo(carriage, color) {
        return {type:carriage,color}
    }
    function wheels(wheelsize) {
        return new Array(4).fill(wheelsize % 2 === 0 ? (2 * Math.round(wheelsize / 2)) - 1 : wheelsize)
    }
    return {
        model,
        engine: enginePower(power),
        carriage: carriageInfo(carriage,color),
        wheels: wheels(wheelsize)
    }
}

console.log( cars({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}) )
