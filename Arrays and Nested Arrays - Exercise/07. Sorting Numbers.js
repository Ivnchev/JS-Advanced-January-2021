function foo(data) {
        return  data.sort( (a,b) => a - b)
        .reduce( (a,b,i) => {
            a.push(data[i], data[data.length - 1 - i])
            return a
        }, []).slice( 0 , data.length)
}
console.log(
foo([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
)