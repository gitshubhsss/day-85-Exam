class Person{
    constructor(name,age){
        console.log("person construcrot");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hey this is ${this.name}`);
    }
}


class Student extends Person{
    constructor(name,age,marks){
        super(name,age)//parent constructor is being called here
        this.marks=marks;
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);//parent constructor is being called here
        this.subject=subject;
    }
}
let tech1=new Teacher("pise",35,"javascript");
console.log(tech1);
