function foo(array, a, b) {
    if(!Array.isArray(array)){ return NaN }
    a = a <= 0 ? 0 : a
    return array.length === 0 ? 0 : array.slice(a,b+1).reduce( (x,y) => x + y, 0) * 100 / 100    
}

console.log(foo([10, 20, 30, 40, 50, 60], 3, 300))
console.log(foo([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(foo([10, 'twenty', 30, 40], 0, 2))
console.log(foo([], 1, 2))
console.log(foo('text', 0, 2))