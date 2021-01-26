function foo(data) {
    let builder = () => {
        let car = {};
        return {
            create: (name, inherit, parent) => {
                car[name] = inherit ? Object.create(car[parent]) : {}
            },
            set: (name, key, value) => car[name][key] = value,
            print: (name) => {
                let r = [];
                for (const key in car[name]) {
                    r.push(`${key}:${car[name][key]}`)
                }
                console.log(r.join(', '));
            }
        }
    }
    let factory = builder();
    data.map(x => x.split(' '))
        .map(([cmd, ...props]) => factory[cmd].apply(undefined,props))
}


foo(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2'])