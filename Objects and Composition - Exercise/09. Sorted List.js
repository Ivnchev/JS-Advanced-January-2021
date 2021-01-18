function createSortedList() {

    let size = 0;
    let arr = [];
        return {
            size: 0,
            arr: [],
            add (x) {
                this.arr.push(x)
                this.size++
                return this.arr.sort((a, b) => a - b)
            },
            remove (x) {
                if (this.arr[x] !== undefined) {
                    this.arr.splice(x, 1)
                    this.size--
                    return this.arr.sort((a, b) => a - b)
                }
                throw new Error
            },
            get (x) {
                if (this.arr[x] !== undefined) {
                    return this.arr[x]
                }
                throw new Error
            },
        }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
list.add(7);
list.add(7);
console.log(list.get(1));
console.log(list.size);
list.remove(1);
console.log(list.get(1));
