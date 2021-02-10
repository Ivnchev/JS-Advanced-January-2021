class Company {
    constructor () {
        this.departments = []
    }
    addEmployee(name, salary, position, department){
        for (const x of arguments) {
            this.validate(x)
        }
        if(!this.departments[department]){
            this.departments[department] = []
        }
        this.departments[department].push({name,salary,position})

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment(){
        let departments = {}
        Object.entries(this.departments).forEach( ([x,y]) => {
            let totalSalary = y.map( e => e.salary).reduce( (a,b) => a += b)

            departments[x] = totalSalary / y.length
        });
        let maxSalary = 0;
        let bestDep;
        Object.entries(departments).forEach(([dep, avgSalary]) => {
            if(avgSalary > maxSalary){
                maxSalary = avgSalary
                bestDep = dep
            }
        });
        let output = `Best Department is: ${bestDep}\nAverage salary: ${departments[bestDep].toFixed(2)}\n`
        this.departments[bestDep].sort( (a , b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach(x => {
                output += `${x.name} ${x.salary} ${x.position}\n`
            });
        return output.trim()
    }
    validate(value){
        if(!value || value < 0){
            throw new Error('Invalid input!')
        }
    }
}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
