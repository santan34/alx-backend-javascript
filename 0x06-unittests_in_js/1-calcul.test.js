const calculateNumber = require('./1-calcul');
const assert = require('assert');

// import calculateNumber from './1-calcul.js'
// import assert from 'assert'

describe("test for sum", function () {
    it("adding two negative numbers", function () {
        assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4);
    });
    it("adding two positive numbers", function () {
        assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    });
    it("adding one negative and one positive", function () {
        assert.strictEqual(calculateNumber('SUM', -1.4, 2.6), 2);
    });
    it("adding whole numbers", function () {
        assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    });
    it("adding large numbers", function () {
        assert.strictEqual(calculateNumber('SUM', 1000000.4, 2000000.6), 3000001);
    });
    it("adding two very small numbers", function () {
        assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
    });
    it("has incorrectly spelt SUM", function () {
        assert.throws(() => calculateNumber('SUMM', 1, 2), /Invalid operation type/);
    });
    it("has small case sum", function () {
        assert.throws(() => calculateNumber('sum', 1, 2), /Invalid operation type/);
    });
    it("has too many arguments", function () {
        assert.strictEqual(calculateNumber('SUM', 1, 2, 3), 3);
    });
});

describe("test for subtract", function () {
    it("subtracting two negative numbers", function () {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -2.6), 2);
    });
    it("subtracting two positive numbers", function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 1.4), 2);
    });
    it("subtracting one negative and one positive", function () {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 2.6), -4);
    });
    it("subtracting whole numbers", function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    });
    it("subtracting large numbers", function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 2000000.6, 1000000.4), 1000001);
    });
    it("subtracting two very small numbers", function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 0.2, 0.1), 0);
    });
});

describe("test for divide", function () {
    it("dividing two negative numbers", function () {
        assert.strictEqual(calculateNumber('DIVIDE', -4.4, -2.2), 2);
    });
    it("dividing two positive numbers", function () {
        assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2.2), 2);
    });
    it("dividing one negative and one positive", function () {
        assert.strictEqual(calculateNumber('DIVIDE', -4.4, 2.2), -2);
    });
    it("dividing whole numbers", function () {
        assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
    });
    it("dividing large numbers", function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1000000, 500000), 2);
    });
    it("dividing two very small numbers", function () {
        assert.strictEqual(calculateNumber('DIVIDE', 0.2, 0.1), 'Error');
    });
    it("dividing by zero", function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });
});