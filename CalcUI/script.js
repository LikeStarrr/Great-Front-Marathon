let operand1 = 0;
let operand2;
let operator = "";
let isReadyForNewData = false;
let isChange = false;   //press '=' without changing operator and operand
let isItCanClear1 = true;   
let lastAction ="";
let resultReal = 0;
import {UI_ELEMENTS} from './view.js';

let UI_operators = UI_ELEMENTS.btnOperator;
function setOperator(inputOperator){
    operand1 = +(display.innerText);
    operator = inputOperator;
    isReadyForNewData = true;
    isChange = true;
    isItCanClear1 = false;
    lastAction = "operator";
}

function getResult(){
    let res = 0;
    lastAction = "equals";
    if (operator !== "") {
        if (isChange) {
            operand2 = +(display.innerText);   
            res = Calculator(operand1, operand2, operator);
        } else {
            res = Calculator(resultReal, operand2, operator);
        }
        display.innerText = formatResult(res);
        isChange = false;
        isItCanClear1 = false;
        isReadyForNewData = true;      
    }         
}

function formatResult(resultNumb){
    resultReal = resultNumb;
    resultFormated = resultNumb;
    if (!Number.isInteger(resultNumb) && typeof resultNumb !== 'string') {
        //resultNumb = Math.trunc(resultNumb*1000000)/1000000; //неправильно работает
        
        resultFormated = resultNumb.toFixed(2);
    }
    if (String(resultFormated).length > 6) {
        resultFormated = resultFormated.toExponential(2);
    } 
    if (String(resultFormated).endsWith(".00")) {
        resultFormated = String(resultFormated).slice(0,-3);
    }

    return resultFormated;
}

function Calculator(firstOperand, secondOperand, selectedOperator) {
    
    let operator = {
        "sum": firstOperand + secondOperand,
        "sub": firstOperand - secondOperand,
        "multi": firstOperand * secondOperand,
        "div": firstOperand / secondOperand,
        "pow": firstOperand ** secondOperand,
        "rem": firstOperand % secondOperand,
    }
    if (selectedOperator in operator) {
        return operator[selectedOperator];
    }     
       
}

btnClear.addEventListener('click', clear_display)
function clear_display() {
    display.innerText = '0';
    operator = "";
    operand1 = 0;
    operand2 = 0;
    resultReal = 0;
    isItCanClear1 = true;
    isChange = false;
    isReadyForNewData = true;
}
btnDelete.addEventListener('click', clear_1symbol)
function clear_1symbol() {
    let textBeforeDel1 = display.innerText;
    if (isItCanClear1) {
        if (textBeforeDel1.length > 1 && textBeforeDel1 !== "NaN" && textBeforeDel1 !== "Infinity") {
            display.innerText = textBeforeDel1.slice(0, textBeforeDel1.length - 1);
        } else {
            display.innerText = "0";
        }   
    }
}

function press(x) {
    if (lastAction === "equals") {
        operand2 = 0;
        operand1 = 0;
        operator = "";
        resultReal = 0;
    }
    if (isReadyForNewData === true) {
        display.innerText = "0";
        isReadyForNewData = false;

    }        
    let displayText = display.innerText;    
    if (displayText === "0" || displayText === "NaN") {
        display.innerText = x;
    } else {
        if (displayText.length < 6) {
            display.innerText += x;   
        }
    }  
    isChange = true;
    isItCanClear1 = true;

}
