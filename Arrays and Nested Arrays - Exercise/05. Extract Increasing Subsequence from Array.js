function foo(input) {
    let n = Number.MIN_SAFE_INTEGER
    return input.reduce((a,b) => {
        if(b >= n) {
            n = b
            a.push(n)
        }
        return a
    },[]).join('\n')
}

console.log(foo([1, 3, 8, 4, 10, 12, 3, 2, 24]))