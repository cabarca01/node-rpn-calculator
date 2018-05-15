# Simple RPN Calculator

The following mini-project implements an RPN Type calculator which uses Reverse Polish Notation to evaluate a mathematical expression and return the corresponding result.

This mini-project curently implements the following operations:

| Operator | Arguments | Expected Result |
|----------|-----------|-----------------|
|+|(x,y)|x + y|
|-|(x,y)|x - y|
|*|(x,y)|x * y|
|/|(x,y)|x / y|
|SQ|(x)|x * x|

## Usage
Import the calculator library

`const calculator = require('./calculator')`

Use the calculator to evaluate an expression:

Example: 
(2 + 2) * (10 / 2)

`console.log(calculator('2 2 + 10 2 / *'));`

Invalid operators or insufficient operands will result in the function returning undefined.

If no operators are provided, the function will return the last operand provided to the stack.

If no expression is provided, the function will return 0.

## Tests
To run the tests:

- Install the application running: `npm install` in the root folder of the application.
- execute `npm test`