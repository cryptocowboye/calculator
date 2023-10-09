const add = (a, c) => {
    return Number(a) + Number(c);
};

const subtract = (a, c) => {
    return a - c;
};

const multiply = (a, c) => {
    return a * c;
};

const divide = (a, c) => {
    return a / c;
};

let firstNum = undefined;
let operator = undefined;
let secondNum = undefined;
let moreOperatorsTally = 0; // This keeps tabs on whether or not there are more than 2 operators in the expression.

const operate = (x, y, z) => {
    if (y === 'plus') {
        return add(x, z);
    } else if (y === 'minus') {
        return subtract(x, z);
    } else if (y === 'times') {
        return multiply(x, z);
    } else if (y === 'divide') {
        return divide(x, z);
    };
};

const displayer = document.querySelector(".display");
displayer.textContent = 0;

const display = (buttonNodeContent) => {
    displayer.textContent = buttonNodeContent;
    return displayer.textContent;
};

const clear = (buttonNodeContent) => {
    if (buttonNodeContent == 'C') {
        displayer.textContent = 0;
        firstNum = undefined;
        operator = undefined;
        secondNum = undefined;
        moreOperatorsTally = 0;
        return displayer.textContent;
    };
    if (displayer.textContent == "You can't divide by zero.") {
        displayer.textContent = 0;
        firstNum = undefined;
        operator = undefined;
        secondNum = undefined;
        moreOperatorsTally = 0;
        return displayer.textContent;
    };
};

const whenZeroInitial = (buttonNodeContent) => {
    if (firstNum === undefined && displayer.textContent == 0) {
        firstNum = 0;
        return display(firstNum);
    } else if (firstNum == undefined && buttonNodeContent == 0) {
        firstNum = 0;
        return display(firstNum);
    };
};

const firstNumGenerator = (buttonNodeContent) => {
    if (firstNum == 0 && !isNaN(buttonNodeContent) && operator === undefined) {
        firstNum = buttonNodeContent;
        return display(firstNum);
    } else if (operator == undefined && !isNaN(buttonNodeContent) && moreOperatorsTally !== 1) {
        firstNum += buttonNodeContent;
        return display(firstNum);
    };
};

const operatorGenerator = (buttonNodeContent) => {
    if (operator == undefined && isNaN(buttonNodeContent)) {
        if (buttonNodeContent === '+') {
            operator = 'plus';
            return operator;
        } else if (buttonNodeContent === '-') {
            operator = 'minus';
        } else if (buttonNodeContent === '*') {
            operator = 'times';
        } else if (buttonNodeContent === '/') {
            operator = 'divide';
        } else {
            return 'oopsie';
        };
    };
};

const secondNumGenerator = (buttonNodeContent) => {
    if (operator !== undefined && secondNum === undefined && !isNaN(buttonNodeContent) && moreOperatorsTally !== 1) {
        secondNum = buttonNodeContent;
        return display(secondNum);
    } else if (operator !== undefined && !isNaN(buttonNodeContent) && moreOperatorsTally !== 1) {
        secondNum += buttonNodeContent;
        return display(secondNum);
    } else if (operator !== undefined && secondNum === undefined && !isNaN(buttonNodeContent) && moreOperatorsTally == 1) {
        secondNum = buttonNodeContent;
        return display(secondNum);
    } else if (operator !== undefined && !isNaN(buttonNodeContent) && moreOperatorsTally === 1) {
        secondNum += buttonNodeContent;
        return display(secondNum);
    };
};