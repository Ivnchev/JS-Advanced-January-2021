function foo(...data) {
    let [n1,n2] = data.map(Number)
    let result = 0;
    for (let i = n1; i <= n2; i++) { result += i }
    console.log(result);
}
foo('1','5')