function foo(steps, foot, speed) {
    let distance = steps * foot
    let speedInSec = speed / 3.6 
    let time = distance / speedInSec
    let stBreak = Math.floor(distance / 500)

    let min = Math.floor(time / 60)
    let sec = time - (min * 60)
    if((sec  - Math.floor(sec) ) - 0.60){ sec = Math.round(sec)}
    else{ sec = Math.floor(sec)}
    let hr = Math.floor(time / 3600)
    let output = ''
    if(hr < 10) { output += '0' + hr + ':'}
    else { output += hr + ':'}
    if(min < 10) { output += '0' + (min + stBreak) + ':'}
    else { output += (min + stBreak) + ':'}
    if(sec < 10) { output += '0' + sec}
    else{ output += sec}

    console.log(output)

}

foo(2564, 0.70, 5.5)
foo(4000, 0.60, 5)

