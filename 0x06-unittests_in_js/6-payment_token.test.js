const getPaymentTokenFromAPI = require('./6-payment_token')
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('test an api', function () {
    it("compare the data of the api", function () {
        return getPaymentTokenFromAPI(true).then(function(res) {
            expect(res.data).to.equal('Successful response from the API');
        })
    })
})