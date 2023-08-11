let firstNumber;
let secondNumber;
let currentNumber = "";
let operator = "";


function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1-num2;

}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(num1, operator, num2){
    num1 = parseFloat(num1);
    num2= parseFloat(num2);

    if(operator === "divide" && num2 === 0){

        return "YOU STUPID";
    }
    switch (operator) {
        case "add":
            return  add(num1,num2).toFixed(2);
                
        case "subtract":
            return subtract(num1,num2).toFixed(2);
        case "multiply":
            return multiply(num1,num2).toFixed(2);
        case "divide":
            return divide(num1,num2).toFixed(2);
    
        default:
            return NaN;
    }
}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
    currentNumber += button.getAttribute('data-number');
    showResult(parseFloat(currentNumber).toFixed(2));
    });
})

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    
    button.addEventListener('click', () => {
        if(currentNumber  !== "") {
            if(operator === ""){
                firstNumber = parseFloat(currentNumber);
                operator = button.id;
                currentNumber = "";
                    
                
            } else{
                firstNumber = operate(firstNumber, operator, parseFloat(currentNumber));
                operator = button.id;
                console.log(firstNumber);
                currentNumber="";
                showResult(firstNumber);
            }
        }
       
       
        
    })
})

const equalButton = document.querySelector('#btnEqual');
equalButton.addEventListener('click', () => {
    if(firstNumber === "" || operator === ""|| currentNumber === "" ){
        showResult("IDIOT")
    } else {
        secondNumber = parseFloat(currentNumber);
    console.log(secondNumber);
    currentNumber = operate(firstNumber, operator, secondNumber);
    console.log(result);
    showResult(currentNumber);
    operator ="";
    firstNumber = currentNumber;
    }
    
})

const clearButton = document.querySelector('#c');
clearButton.addEventListener('click', () =>
{
    firstNumber = "";
    secondNumber = "";
    currentNumber ="";
    operator = "";
    showResult(0);
})



function showResult(content){
    const container = document.querySelector('#result');
    //content = parseFloat(content).toFixed(2);
    container.textContent = content;
}