function employees(data, criteria) {
    let [k,v] = criteria.split('-')
    return JSON.parse(data).filter( x => x[k] === v || k === 'all')
        .reduce((a,x,i) => { a.push(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`); return a },[]).join('\n')
}


console.log( employees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'all') )