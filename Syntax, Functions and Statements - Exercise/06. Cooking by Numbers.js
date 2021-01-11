function foo(...input) {
    let n = Number(input.shift())
    let operations = {
        'chop': () => { n /= 2 ; console.log(n);},
        'dice': () => { n = Math.sqrt(n); console.log(n);},
        'spice': () => {n += 1; console.log(n);},
        'bake': () => {n *= 3; console.log(n);},
        'fillet': () => {n = Number((n * 0.8).toFixed(1)); console.log(n);},
    }

    input.forEach(x => { operations[x](n) });
}

foo('32', 'chop', 'chop', 'chop', 'chop', 'chop')
foo('9', 'dice', 'spice', 'chop', 'bake', 'fillet')