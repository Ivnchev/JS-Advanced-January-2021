function toStringExtension() {
    class Person {
        constructor(name, email){
            Object.assign(this, {name, email})
        }
        toString(){
            let result = []
        Object.entries(this).forEach( ([key, value]) => {
            result.push(`${key}: ${value}`)
        });

        return `${this.constructor.name} (${result.join(', ')})`
        }
    }
    class Teacher extends Person {
        constructor(name,email,subject){
            super(name,email)
            this.subject = subject
        }
    }
    class Student extends Person {
        constructor(name,email,course){
            super(name,email)
            this.course = course
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = toStringExtension();
let Teacher = classes.Teacher;
let Person = classes.Person;

let t = new Teacher('pesho','pesho@pesho.com','Matematika');


console.log(t.toString());