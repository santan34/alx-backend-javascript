const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils');
const sinon = require('sinon')


describe('sendPaymentRequestToApi', function () {
    it('it should uses the the utils', function () {
        const calcStub = sinon.stub(Utils, 'calculateNumber');

        calcStub.returns(10);
        const father = sinon.spy(console);
        sendPaymentRequestToApi(100, 20);
        expect(father.log.calledWith('The total is: 10')).to.be.true;
        calcStub.restore();
    })
})