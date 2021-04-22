class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear() {    // for the ALL CLEAR
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined
    }

    delete() {   // DELETING A NUMBER
        this.currentOperand = this.currentOperand.toString().substring(0, this.currentOperand.length - 1);
        this.updateDisplay();
    }

    appendNumber(number){     // ADDING A NUMBER WHEN BUTTONS ARE PRESSED
        if(number === '.' && this.currentOperand.includes('.')) return;        // prevents further execution
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){ 
        if(this.currentOperand === '') return   // prevents further execution
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() { 
        let computation 
        const prev = parseFloat(this.previousOperand); 
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return  // checks if there is no input 
        switch(this.operation){
             case '+':
                 computation = prev + current;
                 break;

            case '-':
                computation = prev - current;
                break;

            case '*':
                 computation = prev * current;
                 break;
                 
            case '÷':
                 computation = prev / current;
                 break;

            default:
                return
        }
        
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';

    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);   // splits and turned intoan array before the '.'
        const decimalDigits = stringNumber.split('.')[1];   // after the'.'
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else{
            return integerDisplay;
        }
    }

    updateDisplay() { 
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null){
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else{
            this.previousOperandTextElement.innerText = '';
        }

    }  
}
// GET BUTTONS
const numberButtons = document.querySelectorAll('[data-number]');    //  [] for datas
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach( button => {
    button.addEventListener('click', function(){
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach( button => {
    button.addEventListener('click', function(){
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', function(){
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', function(){
    calculator.clear();
    calculator.updateDisplay();
})
deleteButton.addEventListener('click', function(){
    calculator.delete();
})