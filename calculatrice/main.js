document.addEventListener('DOMContentLoaded', function () {
    let total = 0;
    let initial = "0";
    let previousOperation = null;
  
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.calc-button');
  
    function buttonClick(value) {
        if (isNaN(value)) {
            handleSymbol(value);
            screen.innerText = value;
        } else {
            handleNumber(value);
            screen.innerText = initial;
        }
        screen.innerText = initial;
    }
  
    function handleSymbol(symbol) {
        switch (symbol) {
            case 'C':
                initial = '0';
                total = 0;
                previousOperation = null;
                break;
            case '=':
                if (previousOperation === null) {
                    return;
                }
                flushOperation(parseFloat(initial));
                previousOperation = null;
                initial = total.toString();
                break;
            case '←':
                if (initial.length === 1) {
                    initial = '0';
                } else {
                    initial = initial.substring(0, initial.length - 1);
                }
                break;
            case '/':
            case '*':
            case '-':
            case '+':
                handleMath(symbol);
                break;
            default:
                break;
        }
    }
  
    function handleMath(symbol) {
        if (initial === '0') {
            return;
        }
  
        const floatInitial = parseFloat(initial);
  
        if (total === 0) {
            total = floatInitial;
        } else {
            flushOperation(floatInitial);
        }
        previousOperation = symbol;
        initial = '0';
    }
  
    function flushOperation(number) {
        switch (previousOperation) {
            case '/':
                if (number === 0) {
                    console.error("Division by zero!");
                    return;
                }
                total /= number;
                break;
            case '*':
                total *= number;
                break;
            case '-':
                total -= number;
                break;
            case '+':
                total += number;
                break;
            default:
                break;
        }
    }
  
    function handleNumber(numberString) {
        if (initial === "0" || previousOperation === '=') {
            initial = numberString;
        } else {
            initial += numberString;
        }
    }
  
    function init() {
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                buttonClick(button.innerText.trim());
            });
        });
    }
  
    init();
  });
  