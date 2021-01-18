function foo(input) {
    input = input.map(x => isNaN(x) ? x : Number(x))
    let obj = {}
    for (let i = 0; i < input.length; i+= 2) {
        if(obj[input[i]] === undefined) { obj[input[i]] = 0; obj[input[i]] = input[i+1]; }
        else{ obj[input[i]] = input[i+1] }
    }
    let output = ''
    Object.entries(obj).forEach(x => { output += `${x[0]}: ${x[1]}, `});
    output = output.slice(0, output.length - 2)
    console.log(`{ ${output.trim()} }`);
}