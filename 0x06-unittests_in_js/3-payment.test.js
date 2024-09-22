const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils');
const sinon = require('sinon')


describe('sendPaymentRequestToApi', function () {
    it('it should uses the the utils', function () {
        const father = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(father.calledWith('SUM',100, 20)).to.be.true;
        expect(father.callCount).to.be.equal(1);
        father.restore();
    })
})