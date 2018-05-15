'use strict';

const calculator = (expression) => {
    if (expression.length < 1) {
        return 0;
    }

    let tokens = expression.split(' ');
    let numberStack = [];
    let supportedOperators = {
        '+': {
            operandCount: 2,
            result: (x, y) => x + y
        },
        '-': {
            operandCount: 2,
            result: (x, y) => x - y
        },
        '*': {
            operandCount: 2,
            result: (x, y) => x * y
        },
        '/': {
            operandCount: 2,
            result: (x, y) => x / y
        },
        'SQ': {
            operandCount: 1,
            result: (x) => x * x
        }
    };
    try {
        tokens.forEach((token) => {
            if (!isNaN(parseFloat(token))) {
                numberStack.push(parseFloat(token));
            } else if (isNaN(parseFloat(token)) && Object.keys(supportedOperators).indexOf(token) >= 0) {
                if(numberStack.length >= supportedOperators[token].operandCount) {
                    let operands = [];
                    for (let x=0; x < supportedOperators[token].operandCount; x++) {
                        operands.push(numberStack.pop());
                    }
                    numberStack.push(supportedOperators[token].result.apply(null, operands.reverse()));
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