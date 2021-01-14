function foo(arr, first, second) {
    return arr.slice(arr.indexOf(first), arr.indexOf(second) + 1)
}

console.log(foo(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)
)