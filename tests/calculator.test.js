'use strict';

const calculator = require('./../calculator');

describe('calculator.js', () => {

    test('should calculate a simple addition of 2 values', () => {
        let result = calculator('2 2 +');
        expect(result).toBe(4);
    });

    test('should calculate a simple subtraction of 2 values', () => {
        let result = calculator('5 2 -');
        expect(result).toBe(3);
    });

    test('should calculate a simple multiplication of 2 values', () => {
        let result = calculator('2 5 *');
        expect(result).toBe(10);
    });

    test('should calculate a simple division of 2 values', () => {
        let result = calculator('20 4 /');
        expect(result).toBe(5);
    });

    test('should calculate the square of a number', () => {
        let result = calculator('4 SQ');
        expect(result).toBe(16);
    });

    test('should calculate a complex operation involving multiple operators', () => {
        // ((7 * (5 + 4)) - 3) / 10 = 6
        let result = calculator('7 4 5 + * 3 - 10 /');
        expect(result).toBe(6);
    });

    test('should return 0 if no arguments are provided', () => {
        let result = calculator('');
        expect(result).toBe(0);
    });

    test('should return the last entered number if there are no operators', () => {
        let result = calculator('3 2.5');
        expect(result).toBe(2.5);
    });

    test('should return undefined if any argument is invalid', () => {
        let result = calculator('4 3 something');
        expect(result).toBeUndefined();
    });

    test('should return undefined if the amount of operands is not enough to complete an operation', () => {
        let result = calculator('4 +');
        expect(result).toBeUndefined();
    });

});
