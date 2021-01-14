function foo(n, k) {
    let m = [1]
    for (let i = 0; i < n - 1; i++) {
        let z = m.length < k ? m : m.slice(m.length - k)
        m.push(z.reduce((a,b) =>  a + b ))
    }
    return m
}

foo(8,2)