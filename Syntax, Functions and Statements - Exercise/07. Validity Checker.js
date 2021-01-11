function foo(...input) {
    //coordinate system
    let [x1,y1,x2,y2] = input.map(Number)
    let list = {
        'first' : (x1, y1, x2, y2) =>{
            let result = Math.sqrt(Math.pow(x1, 2 ) + Math.pow(y1, 2))
            if(Number.isInteger(result)){ console.log(`{${x1}, ${y1}} to {0, 0} is valid`); }
            else{ console.log(`{${x1}, ${y1}} to {0, 0} is invalid`); }
        },
        'second' : (x1, y1, x2, y2) =>{
            let result = Math.sqrt(Math.pow(x2, 2 ) + Math.pow(y2, 2 ))
            if(Number.isInteger(result)){ console.log(`{${x2}, ${y2}} to {0, 0} is valid`); }
            else{ console.log(`{${x2}, ${y2}} to {0, 0} is invalid`); }
        },
        'thirth' : (x1, y1, x2, y2) =>{
            let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
            if(Number.isInteger(result)){ console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`); }
            else{ console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`); }
        },
    }
    let operations = ['first','second','thirth']
    operations.forEach(x =>{ list[x](x1,y1,x2,y2) })
}
foo(3, 0, 0, 4)
foo(2, 1, 1, 1)