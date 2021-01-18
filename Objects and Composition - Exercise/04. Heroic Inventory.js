function foo(data) {
    return JSON.stringify(
        data
            .map(x => x.split(' / ').map(x => isNaN(x) ? x : Number(x)))
            .reduce((a, b) => {
                if (!a.find(o => o.name === b[0])) { a.push({ name: b[0], level: b[1], items: b[2] ? b[2].split(', ') : [] }) }
                return a
            }, [])
    )
}

console.log(foo(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']))