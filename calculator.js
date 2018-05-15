'use strict';

const calculator = (expression) => {
    if (expression.length < 1) {
        return 0;
    }

    let tokens = expression.split(' ');
    let numberStack = [];
    let supportedOperators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
        'SQ':(x) => x * x
    };
    try {
        tokens.forEach((token) => {
            if (!isNaN(parseFloat(token))) {
                numberStack.push(parseFloat(token));
            } else if (isNaN(parseFloat(token)) && Object.keys(supportedOperators).indexOf(token) >= 0) {
                let operandCount = supportedOperators[token].length;
                if(numberStack.length >= operandCount) {
                    let operands = [];
                    for (let x=0; x < operandCount; x++) {
                        operands.push(numberStack.pop());
                    }
                    numberStack.push(supportedOperators[token].apply(null, operands.reverse()));
                } else {
                    throw RangeError();
                }
            } else {
                throw RangeError();
            }
        });

        return numberStack.pop();
    } catch (e) {
        return undefined;
    }

};

module.exports = calculator;