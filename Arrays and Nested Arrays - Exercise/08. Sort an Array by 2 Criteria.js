function foo(input) {
    return input.sort( (a,b) => a.length - b.length || a.localeCompare(b) ).join('\n')
}

console.log( foo( ['test', 'Deny', 'omen', 'Default'] ) )