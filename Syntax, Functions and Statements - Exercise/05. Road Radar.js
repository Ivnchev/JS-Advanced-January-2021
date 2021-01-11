function foo(speed, area) {
    let limits = {
        'motorway':130,
        'interstate':90,
        'city': 50,
        'residential': 20
    }
    
    speed = Number(speed)
    let status = area
    if(speed <= limits[status]){
        console.log(`Driving ${speed} km/h in a ${limits[status]} zone`);
    } else if(speed > limits[status]){
        let result = ''
        if(speed > limits[status] + 40){
            result = 'reckless driving'
        }else if( speed > limits[status] + 20){
            result ='excessive speeding'
        }else if( speed > limits[status]){
            result ='speeding'
        } 
    console.log(`The speed is ${speed - limits[status]} km/h faster than the allowed speed of ${limits[status]} - ${result}`)
    }
}

// console.log('reckless driving');
//     }else if( speed > limits[status] + 20){
//         console.log('excessive speeding');
//     }else if( speed > limits[status]){
//         console.log('speeding');

foo(40, 'city')
foo(21, 'residential')
foo(120, 'interstate')
foo(200, 'motorway')