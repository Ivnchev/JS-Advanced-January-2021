
function add(a) {
    function sum(b) {
        a += b
        return sum
    }
    sum.toString = () => a
    return sum
}




console.log(Number(add(1)));
console.log(Number(add(1)(6)(-3)));
