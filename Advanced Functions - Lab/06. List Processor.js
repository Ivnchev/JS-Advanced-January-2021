function foo(data) {
    let builder = function() {
        let list = []
        return {
            add(name){ list.push(name) },
            remove(name){ list = list.filter( x=> x !== name) },
            print(){ console.log(list.join(',')); }
        }
    }
    let listProcessor = builder()
    data.map( x => x.split(' ') )
    .map( ([cmd,text]) => listProcessor[cmd](text))
}

foo(['add peter', 'add george', 'add peter', 'remove peter','print']) 