class List {
    constructor (){
        this.array = []
        this.size = 0
    }
    add(x){
        this.array.push(x)
        this.size++
        return this.array.sort( (a,b) => a - b)
    }
    remove(x){
        if(this.array[x] !== undefined) {
            this.array.splice(x, 1)
            this.size--
            return this.array.sort( (a,b) => a - b)
        }
        throw new Error
    }
    get(x){
        if(this.array[x] !== undefined) {
            return this.array[x]
        }
        throw new Error
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
