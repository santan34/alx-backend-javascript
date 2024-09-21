import calculateNumber from './2-calcul_chai.js';
// const chai = require('chai');
import { expect } from 'chai'
// const expect = chai.expect;

describe("test for sum", function () {
    it("adding two negative numbers", function () {
        expect(calculateNumber('SUM', -1.4, -2.6)).to.equal(-4);
    });
    it("adding two positive numbers", function () {
        expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
    });
    it("adding one negative and one positive", function () {
        expect(calculateNumber('SUM', -1.4, 2.6)).to.equal(2);
    });
    it("adding whole numbers", function () {
        expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });
    it("adding large numbers", function () {
        expect(calculateNumber('SUM', 1000000.4, 2000000.6)).to.equal(3000001);
    });
    it("adding two very small numbers", function () {
        expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
    });
    it("has incorrectly spelt SUM", function () {
        expect(() => calculateNumber('SUMM', 1, 2)).to.throw('Invalid operation type');
    });
    it("has small case sum", function () {
        expect(() => calculateNumber('sum', 1, 2)).to.throw('Invalid operation type');
    });
    it("has too many arguments", function () {
        expect(calculateNumber('SUM', 1, 2, 3)).to.equal(3);
    });
});

describe("test for subtract", function () {
    it("subtracting two negative numbers", function () {
        expect(calculateNumber('SUBTRACT', -1.4, -2.6)).to.equal(2);
    });
    it("subtracting two positive numbers", function () {
        expect(calculateNumber('SUBTRACT', 2.6, 1.4)).to.equal(2);
    });
    it("subtracting one negative and one positive", function () {
        expect(calculateNumber('SUBTRACT', -1.4, 2.6)).to.equal(-4);
    });
    it("subtracting whole numbers", function () {
        expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });
    it("subtracting large numbers", function () {
        expect(calculateNumber('SUBTRACT', 2000000.6, 1000000.4)).to.equal(1000001);
    });
    it("subtracting two very small numbers", function () {
        expect(calculateNumber('SUBTRACT', 0.2, 0.1)).to.equal(0);
    });
});

describe("test for divide", function () {
    it("dividing two negative numbers", function () {
        expect(calculateNumber('DIVIDE', -4.4, -2.2)).to.equal(2);
    });
    it("dividing two positive numbers", function () {
        expect(calculateNumber('DIVIDE', 4.4, 2.2)).to.equal(2);
    });
    it("dividing one negative and one positive", function () {
        expect(calculateNumber('DIVIDE', -4.4, 2.2)).to.equal(-2);
    });
    it("dividing whole numbers", function () {
        expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    });
    it("dividing large numbers", function () {
        expect(calculateNumber('DIVIDE', 1000000, 500000)).to.equal(2);
    });
    it("dividing two very small numbers", function () {
        expect(calculateNumber('DIVIDE', 0.2, 0.1)).to.equal('Error');
    });
    it("dividing by zero", function () {
        expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });
});