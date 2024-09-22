const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  // Test for the root endpoint
  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  // Test for a valid cart ID
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  // Test for a negative cart ID
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  // Test for a non-numeric cart ID
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  // New Test: Ensure API handles missing cart ID
  it('GET /cart/ returns 404 response for missing :id', (done) => {
    request.get(`${API_URL}/cart/`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  // New Test: Ensure API handles invalid routes
  it('GET /invalid-route returns 404 response for non-existent route', (done) => {
    request.get(`${API_URL}/invalid-route`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  // New Test: Test response for extremely large cart ID
  it('GET /cart/:id returns 404 response for extremely large cart ID', (done) => {
    request.get(`${API_URL}/cart/999999999999999999999`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(_body).to.be.equal('Payment methods for cart 999999999999999999999')
      done();
    });
  });

  // New Test: Ensure the API handles query parameters correctly
 
});
