const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');

let spy; // Declare spy outside the describe block

beforeEach('creates a spy', function() {
  spy = sinon.spy(console, 'log');
});

afterEach('restores a spy', function() {
  spy.restore();
});

describe("test with 100 and 20", function() {

  it("test", function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.callCount).to.equal(1);
  });

  it("test 2", function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.callCount).to.equal(1);
  });
});