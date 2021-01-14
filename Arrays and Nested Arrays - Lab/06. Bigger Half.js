function foo(data) {
    return data.sort( (a,b) => a - b).slice(data.length / 2)
}

foo([3, 19, 14, 7, 2, 19, 6])