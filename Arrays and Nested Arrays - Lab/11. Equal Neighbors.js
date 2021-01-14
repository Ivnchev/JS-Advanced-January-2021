function foo(input) {
    let c = 0;
    for (let i = 0; i < input.length - 1; i++) {
        for(let j = 0; j < input[i].length; j++) {
            if(input[i][j] === input[i + 1][j]) { c++ }
            if(input[i][j] === input[i][j + 1]) { c++ }
            if(i == input.length -2 && input[i+ 1][j] === input[i + 1][j + 1]) { c++ }
        };
    }
    console.log(c);
}
// foo([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']])
// foo([['test', 'yes', 'yo', 'ho'],
// // ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']])
foo([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']])