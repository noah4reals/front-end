let currentValue = 0;

const touchButtons = document.querySelectorAll('.touchBtn');
const screen = document.querySelector('.screen');

function init() {
    touchButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            buttonClick(button.innerText);
        });
    });
}
function buttonClick(value){
    btnHandle(value);
    updateScreen();
}

function btnHandle(symbol){
    switch (symbol) {
        case '+1':
            currentValue += 1;
            break;
        case 'Del':
            currentValue = 0;
            break;
        case '-1':
            currentValue -= 1;
            break;
        default:
            currentValue = 0;
            break;
    }

    updateScreen();
}
function updateScreen() {
    screen.innerText = currentValue;
}
init();