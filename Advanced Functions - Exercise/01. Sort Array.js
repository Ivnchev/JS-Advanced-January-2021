function sortArray(arr, arg) {
    let sortFunc = {
        'asc': (arr) => arr.sort( (a,b) => a - b ),
        'desc': (arr) => arr.sort( (a,b) => b - a )
    }
    return sortFunc[arg](arr)
}

console.log( sortArray([14, 7, 17, 6, 8], 'asc') )