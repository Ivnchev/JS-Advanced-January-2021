function personAndTeacher() {
    function Person (name, email){
        this.name = name,
        this.email = email  
}

function Teacher (name,email,subject) {
    Person.call(this, name, email)
    this.subject = subject
}
Teacher.prototype = Object.create(Person.prototype)

    return {
        Person,
        Teacher
    }
}

console.log(personAndTeacher());