function foo(data,s) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination,
            this.price = price,
            this.status = status
        }
    }
    return data
        .map( x=> x.split('|').map( x=> isNaN(x) ? x : Number(x) ) )
        .reduce( (a,b) => {
            a.push(new Ticket( b[0], b[1], b[2] ) )
            return a
        },[])
        .sort( (a,b) => {
            if(s === 'destination'){ return a.destination.localeCompare(b.destination) }
            else if( s === 'price' ){ return a.price - b.price }
            return a.status.localeCompare(b.status)
        })
}

console.log( foo(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination') )