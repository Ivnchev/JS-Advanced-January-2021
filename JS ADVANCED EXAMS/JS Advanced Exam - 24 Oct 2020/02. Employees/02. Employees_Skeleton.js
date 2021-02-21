function solveClasses() {
    class Developer {
        constructor ( firstName, lastName ){
            Object.assign(this, {firstName, lastName, baseSalary: 1000, tasks: [], experience: 0})
        }
        addTask ( id, taskName, priority ) {
            priority === 'high'
                ? this.tasks.unshift({id,taskName,priority})
                : this.tasks.push({id,taskName,priority})
            return `Task id ${id}, with ${priority} priority, has been added.`
        }
        doTask(){
            let crntTask = this.task.shift()
            return this.tasks.length > 0 ? crntTask : `${this.firstName}, you have finished all your tasks. You can rest now.`    
        }
        getSalary(){
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }
        reviewTasks(){
            return `Tasks, that need to be completed:\n${this.tasks.map( ({id, taskName, priority}) => `${id}: ${taskName} - ${priority}` ).join('\n')}`
        }

    }
    class Junior extends Developer {
        constructor( firstName, lastName, bonus, experience ){
            super(firstName,lastName)
            this.baseSalary += Number(bonus)
            this.experience = Number(experience)
        }
        learn( years ){
            this.experience += Number(years)
        }
    }
    class Senior extends Developer {
        constructor (firstName,lastName,bonus,experience){
            super(firstName, lastName)
            this.baseSalary += Number(bonus)
            this.experience = Number(experience) + 5
        }
        changeTaskPriority(taskId){
            let crntTask = this.tasks.find( o => o.id == taskId)
            this.tasks.splice(this.tasks.indexOf(crntTask), 1)[0]
            if(crntTask.priority === 'high'){
                crntTask.priority = 'low'
                this.tasks.push(crntTask)
            } else {
                crntTask.priority = 'high'
                this.tasks.unshift(crntTask)
            }
            return crntTask
        }
    }
    return {
        Developer,
        Junior,
        Senior
    }
}

let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());
const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());
const senior = new classes.Senior("Jonathan", "Joestar", 200, 2);
senior.addTask(1, "Write Performance Tests", "high");
console.log(senior.changeTaskPriority(1)["priority"]);




// const classes = result();
// const senior = new classes.Senior("Jonathan", "Joestar", 200, 2);
// senior.addTask(1, "Write Performance Tests", "high");


// const checkTaskPResult = senior.tasks[0]["priority"];
// const checkTaskPExpect = "high";
// expect(checkTaskPResult).to.be.eq(checkTaskPExpect);

// const yearsResult = senior.experience;
// const yearsExpect = 7;
// expect(yearsResult).to.be.eq(yearsExpect);