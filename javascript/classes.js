class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hey this is ${this.name}`);
    }
}

let s1=new Student("shubham",22)
console.log(s1);
s1.talk();