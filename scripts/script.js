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