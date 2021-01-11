function foo(x, y , z) {
    return `I need $${((y / 1000) * z).toFixed(2)} to buy ${(y / 1000).toFixed(2)} kilograms ${x}.`
}
foo('orange', 2500, 1.80)