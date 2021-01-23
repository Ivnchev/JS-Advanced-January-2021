function solve() {
    let sendBtn = document.querySelector('#btnSend')
    let input = document.querySelector('#inputs > textarea')

    sendBtn.addEventListener('click', onClick)
    function onClick() {
        // ["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"] 
        let data = deserializeData(JSON.parse(input.value))

        let sorted = Object.entries(data)
            .sort((a, b) => b[1].averageSalary() - a[1].averageSalary() || a[1].id - b[1].id)[0]

        document.querySelector('#bestRestaurant > p').textContent =
            `Name: ${sorted[0]} Average Salary: ${sorted[1].averageSalary().toFixed(2)} Best Salary: ${sorted[1].bestSalary().toFixed(2)}`

        document.querySelector('#workers > p').textContent = Object.entries(sorted[1].employees)
            .sort((a, b) => b[1] - a[1])
            .map(([name, salary]) => `Name: ${name} With Salary: ${salary}`).join(' ')
    }

    function deserializeData(data) {
        let id = 0
        return data.reduce((a, b) => {
            let [res, employeе] = b.split(' - ')
            !a[res]
            ? a[res] = { employees: employeesData(employeе), id: id++, bestSalary, averageSalary }
            : Object.assign(a[res].employees, a[res].employees, employeesData(employeе))
            return a
        }, {})

    }
    function employeesData(data) {
        return data.split(', ')
            .reduce((a, b) => {
                let [name, salary] = b.split(' ').map(x => isNaN(x) ? x : Number(x))
                a[name] = salary
                return a
            }, {})
    }
    function bestSalary() {
        return Math.max(...Object.values(this.employees))
    }
    function averageSalary() {
        return Object.values(this.employees).reduce((a, b) => a + b, 0) / Object.keys(this.employees).length
    }
}
