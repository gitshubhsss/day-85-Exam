class Calculator{
    addtion(num1:number,num2:number){
        return num1+num2;
    }
}

let calculator=new Calculator();
let n1:number=5;
let n2:number=10;
let sum:number =calculator.addtion(n1,n2);
console.log(sum);
