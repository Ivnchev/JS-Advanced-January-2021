function solution() {
        let recipes = {
            apple: {
                carbohydrate: 1,
                flavour: 2,
            },
            lemonade: {
                carbohydrate: 10,
                flavour: 20,
            },
            burger: {
                carbohydrate: 5,
                fat: 7,
                flavour: 3,
            },
            eggs : {
                protein: 5,
                fat: 1,
                flavour: 1,
            },
            turkey : {
                protein: 10,
                carbohydrate: 10,
                fat: 10,
                flavour: 10,
            }
        }
        const stock = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0,
        }
    
        const actions = {
            restock : ((el,qty) => {stock[el] += qty; return "Success"}),
            prepare : ((recipe, qty) => {
                let crntProduct = Object.entries(recipes[recipe])
                for (const [x,v] of crntProduct) {
                    if(stock[x] < v * qty){
                        return `Error: not enough ${x} in stock`
                    }
                }
                crntProduct.forEach( ([x,c]) => { stock[x] -= c * qty})
                return "Success"
            }),
            report : () => {
                return Object.entries(stock).map( ([x, qty]) => `${x}=${qty}`).join(" ")
            },
        }
        
        return function (str) {
            const [cmd, product, qty] = str.split(' ')
            return actions[cmd](product , Number(qty))
        }
}


let manager = solution();
console.log( manager("restock flavour 50") )
console.log( manager("prepare lemonade 4") )

console.log( manager("restock carbohydrate 10") )
console.log( manager("restock flavour 10") )
console.log( manager("prepare apple 1") )
console.log( manager("restock fat 10") )
console.log( manager("prepare burger 1") )
console.log( manager("report") )
