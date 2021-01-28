function solve(arr , rotations) {
    for(let i=0;i<rotations;i++) {
        arr.unshift(arr.pop());
    }
    return arr.join(" ")
}
foo(['1', '2', '3', '4'], 2)
foo(['Banana', 'Orange', 'Coconut', 'Apple'], 15)