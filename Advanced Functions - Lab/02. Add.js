function solution (input) {
    return (data) => input + data;
}


let add5 = solution(7);
console.log(add5(2));
console.log(add5(3));
