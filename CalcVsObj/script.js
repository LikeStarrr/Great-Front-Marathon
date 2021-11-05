'use strict'
//let firstOperand = prompt('Введите первое число');
//let secondOperand = prompt('Введите второе число');
//let inputOperator = prompt('Введите название операции');
function checkData(firstOperand, secondOperand) {
    if ( (typeof firstOperand !== "number") || (typeof secondOperand !== "number") || secondOperand === 0) {
        return false;
    }    
    return true;
}

function Calculator(firstOperand, secondOperand, inputOperator) {
    if ( checkData(firstOperand, secondOperand) ){
        let operator = {
            "sum": firstOperand + secondOperand,
            "sub": firstOperand - secondOperand,
            "multi": firstOperand * secondOperand,
            "div": firstOperand / secondOperand,
            "pow": firstOperand ** secondOperand,
            "rem": firstOperand % secondOperand,
        }
        if (inputOperator in operator) {
            return operator[inputOperator];
        } else {
        return "Unknown operation";
        }    
    } else {
        return "Data error!";    
    }
       
} 
console.log('Start');
console.log(Calculator(2,3,'sum'));
console.log(Calculator(2,0,'div'));
console.log(Calculator(2,'','sum'));
console.log(Calculator(2,3,''));
console.log(Calculator('f',3,'sum'));
console.log(Calculator(2,-1,'div'));
console.log(Calculator(5,2,'rem'));