'use strict'
//let firstOperand = prompt('Введите первое число');
//let secondOperand = prompt('Введите второе число');
//let inputOperator = prompt('Введите название операции');
function checkData(firstOperand, secondOperand) {
    if ( (typeof firstOperand !== "number") || (typeof secondOperand !== "number") || secondOperand === 0) {
        console.log('Data error!');
        return false;
    }
    
    return true;
}

function Calculator(firstOperand, secondOperand, inputOperator) {
    if ( checkData(firstOperand, secondOperand) ){
        let operator = {
            "add": firstOperand + secondOperand,
            "sub": firstOperand - secondOperand,
            "multi": firstOperand * secondOperand,
            "div": firstOperand / secondOperand,
            "pow": firstOperand ** secondOperand,
            "remainder": firstOperand % secondOperand,
        }
        if (inputOperator in operator) {
            return operator[inputOperator];
        } else {
        console.log('Unknown operation');
        }    
    }

    
} 
console.log('Start');
console.log(Calculator(2,3,'add'));
console.log(Calculator(2,0,'div'));
console.log(Calculator(2,'','add'));
console.log(Calculator(2,3,''));
console.log(Calculator('2',3,'add'));
console.log(Calculator(2,3,'add'));
console.log(Calculator(2,3,'add'));