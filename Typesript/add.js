var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addtion = function (num1, num2) {
        return num1 + num2;
    };
    return Calculator;
}());
var calculator = new Calculator();
var n1 = 5;
var n2 = 10;
var sum = calculator.addtion(n1, n2);
console.log(sum);
