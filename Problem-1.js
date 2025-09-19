// Calculator using Class in JavaScript 

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    //Method to Add
    add() {
        return this.a + this.b;
    }

    //Method to Substract
    subtract() {
        return this.a - this.b;
    }

    //Method to Multiply
    multiply() {
        return this.a * this.b;
    }

    //Method to Divide
    divide() {
        if (this.b === 0) {
            return "Error: Connot return  by zero.";
        }
        return this.a / this.b;
    }

    //Main calculate function
    calculate(operation) {
        switch (operation.toLowerCase()) {
            case "add":
                return this.add();
            case "subtract":
                return this.subtract();
            case "multiply":
                return this.multiply();
            case "divide":
                return this.divide();
            default:
                return "Invalid Operation!"
        }
    }
}

// =======Example Usage========
const calc = new Calculator(10, 5);

console.log(calc.calculate("add"));
console.log(calc.calculate("subtract"));
console.log(calc.calculate("multiply"));
console.log(calc.calculate("divide"));