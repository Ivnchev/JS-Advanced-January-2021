function foo(data) {
    return JSON.parse(data).reduce( (a,b) => ({...a,...b}) ,{})
}

console.log( foo(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`) );