document.addEventListener('DOMContentLoaded', function () {
    let currentValue = 0;

    const screen = document.querySelector('.screen');
    const addButton = document.querySelector('.addBtn');
    const minusButton = document.querySelector('.minusBtn');
    const delButton = document.querySelector('.delBtn');

    function init() {
        addButton.addEventListener('click', function () {
            currentValue += 1;
            updateScreen();
        });
        
        delButton.addEventListener('click', function () {
            currentValue = 0;
            updateScreen();
        });

        minusButton.addEventListener('click', function () {
            currentValue -= 1;
            updateScreen();
        
        });
    }

    function updateScreen() {
        screen.innerText = currentValue;
    }

    init();
});
